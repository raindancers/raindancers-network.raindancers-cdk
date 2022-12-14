import boto3
import os
from boto3.dynamodb.types import TypeSerializer
import json
import base64




dynamodb = boto3.client('dynamodb', region_name= 'us-east-1')

def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  if request_type == 'Create': return on_create_update(event)
  if request_type == 'Update': return on_create_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	

def on_create_update(event):

	serializer = TypeSerializer()
	props = event["ResourceProperties"]
	
	
	print("create new resource with props %s" % props)

	if 'coreNetworkConfiguration' in props.keys():
		coreNetworkConfiguration = json.loads(base64.b64decode(props['coreNetworkConfiguration']).decode("utf-8"))
		object = {key: serializer.serialize(value) for key, value in coreNetworkConfiguration.items()}

		print(props['coreNetworkConfiguration'])
		print(object)
		dynamodb.put_item(
			Item = {
				'Name': { 'S': props['coreName']},
				'Type': { 'S': 'CORECONFIG'},
				'Object': { 'M': object }
			},
			TableName = os.environ['policyTableName']
		)

		physical_id = 'CoreNetworkConfiguration'

	elif 'segment' in props.keys():
		
		
		segment = json.loads(base64.b64decode(props['segment']).decode("utf-8"))
		object = {key: serializer.serialize(value) for key, value in segment.items()}
		
		print(object)

		dynamodb.put_item(
			Item = {
				'Name': { 'S': object['name']['S'] },
				'Type': { 'S': 'SEGMENT'},
				'Object': { 'M': object }
			},
			TableName = os.environ['policyTableName']
		)

		physical_id = f"Segment{object['name']['S']}"


	elif 'segmentAction' in props.keys():

		segmentaction = json.loads(base64.b64decode(props['segmentAction']).decode("utf-8"))
		
		object = {key: serializer.serialize(value) for key, value in segmentaction.items()}
		description = object.pop('description')


		print(object)
		dynamodb.put_item(
			Item = {
				'Name': { 'S': object['segment']['S'] + description},
				'Type': { 'S': 'SEGMENTACTION'},
				'Object': { 'M': object }
			},
			TableName = os.environ['policyTableName']
		)
		physical_id = f"SegmentAction{object['segment']['S']}"


	elif 'attachmentPolicy' in props.keys():

		attachmentPolicy = json.loads(base64.b64decode(props['attachmentPolicy']).decode("utf-8"))
		object = {key: serializer.serialize(value) for key, value in attachmentPolicy.items()}
		print(object)
		dynamodb.put_item(
			Item = {
				'Name': { 'S': object['rule-number']['N'] },
				'Type': { 'S': 'ATTACHMENTPOLICY'},
				'Object': { 'M': object }
			},
			TableName = os.environ['policyTableName']
		)
		physical_id = f"AttachmentPolicy{object['rule-number']['N']}"

	return {
		'PhysicalResourceId': physical_id,
	}


def on_delete(event):

	serializer = TypeSerializer()

	props = event["ResourceProperties"]
	print("create new resource with props %s" % props)

	if 'coreNetworkConfiguration' in props.keys():
		dynamodb.delete_item(
			Key = {
				'Name': { 'S': props['coreName']},
				'Type': { 'S': 'CORECONFIG'},
			},
			TableName = os.environ['policyTableName']
		)

	elif 'segment' in props.keys():


		segment = json.loads(base64.b64decode(props['segment']).decode("utf-8"))
		object = {key: serializer.serialize(value) for key, value in segment.items()}

		dynamodb.delete_item(
			Key = {
				'Name': { 'S': object['name']['S'] },   
				'Type': { 'S': 'SEGMENT'},
			},
			TableName = os.environ['policyTableName']
		)

	elif 'segmentAction' in props.keys():

		segmentaction = json.loads(base64.b64decode(props['segmentAction']).decode("utf-8"))
		object = {key: serializer.serialize(value) for key, value in segmentaction.items()}

		dynamodb.delete_item(
			Key = {
				'Name': { 'S': object['segment']['S'] },
				'Type': { 'S': 'SEGMENTACTION'},
			},
			TableName = os.environ['policyTableName']
		)
		
	elif 'attachmentPolicy' in props.keys():

		attachmentPolicy = json.loads(base64.b64decode(props['attachmentPolicy']).decode("utf-8"))
		object = {key: serializer.serialize(value) for key, value in attachmentPolicy.items()}

		dynamodb.delete_item(
			Key = {
				'Name': { 'S': object['rule-number']['N'] },
				'Type': { 'S': 'ATTACHMENTPOLICY'},
			},
			TableName = os.environ['policyTableName']
		)
	
