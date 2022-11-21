import boto3

ec2 = boto3.client('ec2')
s3 = boto3.resource('s3')

def on_event(event, context):
	print(event)
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_create(event)
	if request_type == 'Delete': return on_delete(event)
	raise Exception("Invalid request type: %s" % request_type)

def on_create(event):
	props = event["ResourceProperties"]
	response = ec2.create_vpn_connection(
		Type=props['Type'],
		TransitGatewayId=props['TransitGatewayId'],
		TransportTransitGatewayAttachmentId=props['TransportTransitGatewayAttachmentId'],
		Options={
			'EnableAcceleration': props['enableAcceleration'],
			'LocalIpv4NetworkCidr': props['localIpv4NetworkCidr'],			
			'RemoteIpv4NetworkCidr': props['remoteIpv4NetworkCidr'],
			'OutsideIpAddressType': props['outsideIpAddressType'],
			'StaticRoutesOnly': props['staticRoutesOnly'],
			'TunnelInsideIpVersion': props['tunnelInsideIpVersion'],
			'TunnelOptions': props['tunnels'],
		},
	)
	
	
	return { 
		'PhysicalResourceId': response['VpnConnection']['VpnConnectionId'],
		'Data': {
			'VpnConnectionId': response['VpnConnection']['VpnConnectionId']
		}
	}

	
def on_delete(event):
	ec2.delete_vpn_connection(
		VpnConnectionId=event["PhysicalResourceId"],
	)
	
	
def on_update(event):
	props = event["ResourceProperties"]
	
	