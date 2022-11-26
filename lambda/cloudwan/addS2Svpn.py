import boto3
import json
import base64

ec2 = boto3.client('ec2')
s3 = boto3.resource('s3')
sm = boto3.client('secretsmanager')

def on_event(event, context):
	print(event)
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_create(event)
	if request_type == 'Delete': return on_delete(event)
	raise Exception("Invalid request type: %s" % request_type)

def on_create(event):
	props = json.loads(base64.b64decode(event["ResourceProperties"]["props64"]).decode('utf-8'))

	options = props['Options']

	print(options)

	options['TunnelOptions'][0]['PreSharedKey'] = 'PSK' + sm.get_secret_value(
		SecretId=options['TunnelOptions'][0]['PreSharedKeyArn'],
	)['SecretString']
	del options['TunnelOptions'][0]['PreSharedKeyArn']

	options['TunnelOptions'][1]['PreSharedKey'] = 'PSK' + sm.get_secret_value(
		SecretId=options['TunnelOptions'][1]['PreSharedKeyArn'],
	)['SecretString']
	del options['TunnelOptions'][1]['PreSharedKeyArn']

	response = ec2.create_vpn_connection(
		Type=props['Type'],
		CustomerGatewayId=props['CustomerGatewayId'],
		TransitGatewayId=props['TransitGatewayId'],
		Options={
			'EnableAcceleration': options['EnableAcceleration'],
			'LocalIpv4NetworkCidr': options['LocalIpv4NetworkCidr'],			
			'RemoteIpv4NetworkCidr': options['RemoteIpv4NetworkCidr'],
			'OutsideIpAddressType': options['OutsideIpAddressType'],
			'StaticRoutesOnly': options['StaticRoutesOnly'],
			'TunnelInsideIpVersion': options['TunnelInsideIpVersion'],
			'TunnelOptions': options['TunnelOptions'],
			'TransportTransitGatewayAttachmentId': options['TransportTransitGatewayAttachmentId']
		},
		TagSpecifications=[
		{
			'Tags': [
				{
					'Key': 'Name',
					'Value': props['Name']
				},
			]
		},
	]
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
	
	