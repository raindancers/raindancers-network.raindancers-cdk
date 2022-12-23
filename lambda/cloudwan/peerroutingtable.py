import boto3

networkmanager = boto3.client('networkmanager', region_name = 'us-west-2')
ssm = boto3.client('ssm')

def on_event(event, context):
	print(event)
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return donothing(event)
	if request_type == 'Delete': return donothing(event)
	raise Exception("Invalid request type: %s" % request_type)

def is_complete(event, context):
	props = event["ResourceProperties"]
	print(props)

	# check if the peering is completed. 
	peering_completed = False


	peerings = networkmanager.list_peerings(
		CoreNetworkId= props['CoreNetworkId'],
	)

	get_peering = next((peering for peering in peerings['Peerings'] if peering["PeeringId"] == props['PeeringId']), None)

	if get_peering != None:
		if get_peering['State'] == 'AVAILABLE':
			peering_completed = True


	if peering_completed is False:
		while 'NextToken' in peerings:
			peerings = networkmanager.list_peerings(
				CoreNetworkId= props['CoreNetworkId'],
				NextToken=peerings['NextToken']
			)

			get_peering = next((peering for peering in peerings['Peerings'] if peering["PeeringId"] == props['PeeringId']), None)

			if get_peering != None:
				if get_peering['State'] == 'AVAILABLE':
					peering_completed = True	
					break

	
	if peering_completed is False:

		return {
			'IsComplete': False,
		}
			
	if peering_completed is True:

		# attach the transit_gateway
		attachment = networkmanager.create_transit_gateway_route_table_attachment(
			PeeringId=props['PeeringId'],
			TransitGatewayRouteTableArn= props['transitGatewayRouteTableArn'],
			Tags=[
				{
					'Key': 'NetworkSegment',
					'Value': props['AttachmentSegment']
				},
			]
		)
		
		ssm.put_parameter(
			Name=props['attachmentIdSSMName'],
			Value=attachment['TransitGatewayRouteTableAttachment']['Attachment']['AttachmentId'],
			Overwrite=True
		)

		return { 
			'IsComplete': True,
			'Data': {
				'AttachmentId': attachment['TransitGatewayRouteTableAttachment']['Attachment']['AttachmentId']
			}
		}

def on_delete(event):

	props = event["ResourceProperties"]

	networkmanager.delete_attachment(
		AttachmentId=ssm.get_parameter(
			Name=props['attachmentIdSSMName']
		)['Parameter']['Value']
	)


def on_create(event):
	print("waiting for attachment")

def donothing(event):
	print("no operation required on update")

