import boto3
import os
import uuid

dynamodb = boto3.client('dynamodb')

def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	

def on_create(event):

	rule = event["ResourceProperties"]["Rule"]
	assigned_uuid = uuid.uuid4().hex
	rev = 1
	unfinished = True

	while unfinished:
		# Get the Last SID
		sid_metadata = dynamodb.get_item(
			TableName = os.environ['policyTableName'],
			Key = {
				'UUID': { 'S': 'LastSID'},
				'Type': { 'S': 'Meta'},
			},
			AttributesToGet=["LastSID"],
			ConsistentRead=True,
		)
		# if it doe'snt exisit, create it. 
		if 'Item' not in sid_metadata.keys():  # SID has not been intialised, need to do it.
			print('Not intialised - Adding Last SID')
			current_sid = 1000000
			dynamodb.put_item(
			Item = {
				'UUID': { 'S': 'LastSID' },
				'Type': { 'S': 'Meta'},
				'LastSID': { 'N': str(current_sid) }
			},
			TableName = os.environ['policyTableName']
		)
		else: # optimistically use the currnet Sid
			current_sid = sid_metadata["Item"]["LastSID"]["N"]
		
		next_sid = int(current_sid) + 1
		
		# valid sid range is 1 to 1999999
		if next_sid > 1999999:
			raise ValueError("Exceeded the capacity for SIDS")
		
		try: 
			dynamodb.transact_write_items(
				TransactItems = [
					{
						"Update": {
							"TableName": os.environ['policyTableName'],
							"Key": {
								'UUID': { 'S': 'LastSID'},
								'Type': { 'S': 'Meta'},
							},
							"ConditionExpression": "LastSID = :current_sid",
							"UpdateExpression": "SET LastSID = LastSID + :incr",
							"ExpressionAttributeValues": {
								":incr": {"N": "1"},
								":current_sid": {"N": current_sid},
							},
						},
					}, 
					{
						"Put": {
							"TableName": os.environ['policyTableName'],
							"Item": {
								'UUID': { 'S': assigned_uuid },
								'Type': { 'S': 'SuricataRule'},
								'SuricataRule': { 'S': rule },
								'SID': {'N': str(next_sid) },
								'Rev': {'N': str(rev)}
							},
							"ConditionExpression": "attribute_not_exists(SuricataRule)"
						}
					}
				]
			)
			unfinished = False
		except Exception as e:
			print (e) 


	return {
		'PhysicalResourceId': assigned_uuid,
		'Data': {
			'UUID': assigned_uuid
		}
	}

def on_update(event):
	
	rule = event["ResourceProperties"]["Rule"]
	r = dynamodb.get_item(
		TableName = os.environ['policyTableName'],
		Key = {
			'UUID': { 'S': event["PhysicalResourceId"]},
			'Type': { 'S': 'SuricataRule'},
		},
		AttributesToGet=["Rev"],
		ConsistentRead=True,
	)
	
	rev = int(r['Item']['Rev']['N'])
	
	dynamodb.update_item(
		TableName = os.environ['policyTableName'],
		Key = {
			'UUID': { 'S': event["PhysicalResourceId"]},
			'Type': { 'S': 'SuricataRule'},
		},
		UpdateExpression = "set SuricataRule = :r, Rev = :v",
		ExpressionAttributeValues = {
			':r': {"S": rule},
			':v': {"N": str(rev + 1)}
		}
	)

def on_delete(event):
	dynamodb.delete_item(
		Key = {
			'UUID': { 'S': event["PhysicalResourceId"]},
			'Type': { 'S': 'SuricataRule'},
		},
		TableName = os.environ['policyTableName']
	)