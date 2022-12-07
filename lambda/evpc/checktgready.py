import boto3

ec2 = boto3.client("ec2")

def on_event(event, context):
	print(event)
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_create(event)
	if request_type == 'Delete': return on_create(event)
	raise Exception("Invalid request type: %s" % request_type)
	

def on_create(event):
	pass


def is_complete(event, context):

	props = event['ResourceProperties']


	tg_state = ec2.describe_transit_gateways(
		TransitGatewayIds=[
		props["transitGatewayId"]
		],
	)['TransitGateways'][0]['State']

	attachment_state = ec2.describe_transit_gateway_vpc_attachments(
		TransitGatewayAttachmentIds=[
		props["transitGatewayAttachmentId"]
		],
	)['TransitGatewayVpcAttachments'][0]['State']

	if attachment_state == 'available' and tg_state == 'available':
			return { 'IsComplete': True }	
	else:
			return { 'IsComplete': False }

	

