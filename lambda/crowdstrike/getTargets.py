import boto3


def on_event(event, context):

  request_type = event['RequestType']
  if request_type in ['Update', 'Delete', 'Create']: return get_targets(event)
  raise Exception("Invalid request type: %s" % request_type)
	

def get_targets(event):

	props = event["ResourceProperties"]
	print('props:', props)

	ec2 = boto3.client('ec2', region_name = props['Region'])

	# get the endpoint
	endpoint = ec2.describe_vpc_endpoints(
		VpcEndpointIds = [
			props['EndpointId']
		]
	)
	print('endpoint', endpoint)

	# find the eni 
	eni = ec2.describe_network_interfaces(
		NetworkInterfaceIds = endpoint['VpcEndpoints'][0]['NetworkInterfaceIds']

	)
	print('eni:', eni)

	# make a list of targets
	targets = []
	for address in eni['NetworkInterfaces']:
		targets.append(address['PrivateIpAddress'])
	print('targets', targets)


	return {
		'Data': {
			'Target1': targets[0],
			'Target2': targets[1]
		}
	}
