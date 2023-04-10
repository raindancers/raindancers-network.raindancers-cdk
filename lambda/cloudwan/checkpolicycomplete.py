from time import sleep
import boto3

networkmanager = boto3.client('networkmanager', region_name='us-east-1')


def on_event(event, context): # we are just going to check 
	return {'PhysicalResourceId': 'IsfinishedCheck'}

def is_complete(event, context):

	props = event["ResourceProperties"]

	changes = networkmanager.get_core_network_change_events(
		CoreNetworkId=props['coreNetworkId'],
		PolicyVersionId=props['policyVersionId'],
	)

	for change in changes['CoreNetworkChangeEvents']:
		if change['Status'] not in ['COMPLETE']:
			change_complete = False
			break

	while 'NextToken' in changes:
		changes = networkmanager.get_core_network_change_events(
			CoreNetworkId=props['coreNetworkId'],
			PolicyVersionId=props['policyVersionId'],
			NextToken = changes['NextToken']
		)

		for change in changes['CoreNetworkChangeEvents']:
			if change['Status'] not in ['COMPLETE']:
				change_complete = False
				break

	if change_complete is not False:
		is_ready = False	
	else:
		is_ready = True

	
	return { 'IsComplete': is_ready }



