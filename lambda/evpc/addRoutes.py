import boto3

ec2 = boto3.client('ec2')
net_manager = boto3.client('networkmanager')

def on_event(event, context):

  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	

def on_update(event):
	print('This is not an updatable resource')

def get_corenetwork_arn(core_network_name):

	response = net_manager.list_core_networks()
	network_tag = {
		'Key': 'CoreNetworkName',
		'Value': core_network_name ,
	}

	# see if we can find the core_network
	try:
		core_network = next(item for item in response['CoreNetworks'] if network_tag in item['Tags'])
	
	# if we dont' find it in the first page, look to see if its in the second page or subsequent pages if any
	except:
		while 'NextToken' in response:
			try:
				response = net_manager.list_core_networks(NextToken=response['NextToken'])
				core_network = next(item for item in response['CoreNetworks'] if network_tag in item['Tags'])
				break
			except:
				pass
	
	try: 
		return core_network['CoreNetworkArn']
	except:
		raise ValueError(f'Did not find the CoreNetwork {core_network_name}')



def on_create(event):

	# cidr: network,
	# RouteTableId: routeTableId,
	# Destination: props.destination,
	# CloudWanName: this.cloudWanName

	props = event["ResourceProperties"]

	print(props)

	
	if props['Destination'] == 'Cloudwan':

		ec2.create_route(
			DestinationCidrBlock = props['cidr'],
			RouteTableId = props['RouteTableId'],
			CoreNetworkArn=get_corenetwork_arn(props['CloudWanName'])
		)

	else:
		raise ValueError("This resource does not support the specificed destination")


def on_delete(event):

	props = event["ResourceProperties"]

	if props['Destination'] == 'Cloudwan':

		ec2.delete_route(
			DestinationCidrBlock = props['cidr'],
			RouteTableId = props['RouteTableId'],
		)

	else:
		raise ValueError("This resource does not support the specificed destination")


