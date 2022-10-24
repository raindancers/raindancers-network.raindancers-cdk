
import json
from time import sleep
import boto3
from boto3.dynamodb.conditions import Key
from boto3.dynamodb.types import TypeDeserializer
import decimal
import traceback

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return int(o)
        return super(DecimalEncoder, self).default(o)


dynamodb = boto3.client('dynamodb', region_name='us-east-1')
networkmanager = boto3.client('networkmanager', region_name='us-east-1')


def is_complete(event, context):



	is_ready = False
	return { 'IsComplete': is_ready }


def on_event(event, context):
	request_type = event['RequestType']
	if request_type == 'Create': return on_create_update(event)
	if request_type == 'Update': return on_create_update(event)
	if request_type == 'Delete': return on_delete(event)
	raise Exception("Invalid request type: %s" % request_type)

def on_create_update(event):
	
	props = event["ResourceProperties"]
	deserializer = TypeDeserializer()

	policydocument = {'version': '2021.12'}
	deserializer = TypeDeserializer()


	# CORECONFIG is an object
	record = dynamodb.execute_statement(
		Statement = f"SELECT * FROM \"{props['TableName']}\" WHERE Type = 'CORECONFIG'"
	)['Items'][0]
	policydocument['core-network-configuration'] = deserializer.deserialize(record['Object'])

	# Other keys are a list of objects
	policy_keys = [
		{'dbtype': 'ATTACHMENTPOLICY', 'policykey': 'attachment-policies'},
		{'dbtype': 'SEGMENTACTION', 'policykey': 'segment-actions'},
		{'dbtype': 'SEGMENT', 'policykey': 'segments'},
	]

	for policy_key in policy_keys:
		records = dynamodb.execute_statement(
			Statement = f"SELECT * FROM \"{props['TableName']}\" WHERE Type = '{policy_key['dbtype']}'"
		)['Items']
		policydocument[policy_key['policykey']] = []
		for record in records:
			policydocument[policy_key['policykey']].append(deserializer.deserialize(record['Object']))


	

	print('thenetwork policy is')
	print(json.dumps(policydocument, cls=DecimalEncoder))

	# create a core network policy. 
	
	try:

		policy = networkmanager.put_core_network_policy(
			CoreNetworkId = props['coreNetworkId'],
			PolicyDocument = json.dumps(policydocument, cls=DecimalEncoder)
		)['CoreNetworkPolicy']


		policy_ready = False
	
		# Check that the policy is ready to execute or if it has an error
		while policy_ready is False:
			status = networkmanager.get_core_network_policy(
				CoreNetworkId = props['coreNetworkId'],
				PolicyVersionId = policy['PolicyVersionId']
			)['CoreNetworkPolicy']

			# catch the error
			if status['ChangeSetState'] == 'FAILED_GENERATION':
				raise ValueError(f"CoreNetworkPolicyError: {status['PolicyErrors']}")

			if status['ChangeSetState'] == 'READY_TO_EXECUTE':
				policy_ready = True
			else: 
				sleep(5)

		changes = networkmanager.get_core_network_change_set(
			CoreNetworkId=props['coreNetworkId'],
			PolicyVersionId=policy['PolicyVersionId'],
		)

		
		if len(changes['CoreNetworkChanges']) > 0:
			networkmanager.execute_core_network_change_set(
				CoreNetworkId = props['coreNetworkId'],
				PolicyVersionId = policy['PolicyVersionId']
			)
		else:
			print('There was no change to the policy')

			# delete the policy that was created.. as its just a duplicate
			networkmanager.delete_core_network_policy_version(
				CoreNetworkId = props['coreNetworkId'],
				PolicyVersionId = policy['PolicyVersionId']
			)

		physical_id = 'UpdatePolicyLambda'


		return { 
			'PhysicalResourceId': physical_id,
			'Data': {
				'PolicyVersionId': policy['PolicyVersionId'],
			}
		}


	except Exception as e: 
		print('An error occured')
		print(traceback.format_exc())
		print(e)
		

def on_delete(event):
	## we just dont need to do anything
	pass
