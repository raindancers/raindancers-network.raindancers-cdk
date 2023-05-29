import boto3

net_manager = boto3.client('networkmanager', region_name='us-west-2')

def on_event(event, context):

	print('Event:\n', event)
	
	props = event["ResourceProperties"]
	response = net_manager.list_core_networks()
	network_tag = {
		'Key': 'CoreNetworkName',
		'Value': props['CoreNetworkName'] ,
	}

	print('Lookup:\n',response)

	# see if we can find the core_network
	try:
		core_network = next(item for item in response['CoreNetworks'] if network_tag in item['Tags'])
	
	# if we dont' find it in the first page, look to see if its in the second page or subsequent pages if any
	except Exception as e:
		print(e)
		while 'NextToken' in response:
			try:
				response = net_manager.list_core_networks(NextToken=response['NextToken'])
				core_network = next(item for item in response['CoreNetworks'] if network_tag in item['Tags'])
				break
			except:
				pass
	
	try: 
		core_network_id = core_network['CoreNetworkId']
		#global_network_id = core_network['GlobalNetworkId']
	except Exception as e:
		print(e)
		raise ValueError(f'Did not find the CoreNetwork {props["CoreNetworkName"]}')


	data = {
		'CoreNetworkId': core_network_id,
		#'GlobalNetworkId': global_network_id
	}

	physical_id = 'GetCoreNetworkId'
	

	print(data)


	return { 
		'PhysicaResourceID': physical_id,
		'Data': data
	}

def is_complete(event, context):


	props = event["ResourceProperties"]
	response = net_manager.list_core_networks()
	network_tag = {
		'Key': 'CoreNetworkName',
		'Value': props['CoreNetworkName'] ,
	}

	print('Lookup:\n',response)

	# see if we can find the core_network
	try:
		core_network = next(item for item in response['CoreNetworks'] if network_tag in item['Tags'])
	
	# if we dont' find it in the first page, look to see if its in the second page or subsequent pages if any
	except Exception as e:
		print(e)
		while 'NextToken' in response:
			try:
				response = net_manager.list_core_networks(NextToken=response['NextToken'])
				core_network = next(item for item in response['CoreNetworks'] if network_tag in item['Tags'])
				break
			except:
				pass
	
	try: 
		core_network_id = core_network['CoreNetworkId']
		#global_network_id = core_network['GlobalNetworkId']
	except Exception as e:
		print(e)
		raise ValueError(f'Did not find the CoreNetwork {props["CoreNetworkName"]}')


	# response = net_manager.get_core_network(
	#	CoreNetworkId=core_network_id
	#)
	if core_network['State'] == 'AVAILABLE':
		return { 'IsComplete': True }
	else:
		return { 'IsComplete': False }




	

	