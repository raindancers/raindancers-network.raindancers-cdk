import boto3
import json
import base64

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
	options = props['Options']
	response = ec2.create_vpn_connection(
		Type=props['Type'],
		TransitGatewayId=props['TransitGatewayId'],
		TransportTransitGatewayAttachmentId=props['TransportTransitGatewayAttachmentId'],
		Options={
			'EnableAcceleration': json.loads(base64.b64decode(options['EnableAcceleration']).decode('utf-8')),
			'LocalIpv4NetworkCidr': options['LocalIpv4NetworkCidr'],			
			'RemoteIpv4NetworkCidr': options['RemoteIpv4NetworkCidr'],
			'OutsideIpAddressType': options['OutsideIpAddressType'],
			'StaticRoutesOnly': json.loads(base64.b64decode(options['StaticRoutesOnly']).decode('utf-8')),
			'TunnelInsideIpVersion': options['TunnelInsideIpVersion'],
			'TunnelOptions': json.loads(base64.b64decode(options['TunnelOptions']).decode('utf-8'))
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
	
	