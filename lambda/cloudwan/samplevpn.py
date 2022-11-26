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
	
	print(props)

	s3_object = s3.Object(
		props['BucketName'].split(':')[5],
		f"{props['Name']}_ipsec_vpn_sample_configuration.txt"
	
	cfg = ec2.get_vpn_connection_device_sample_configuration(
		VpnConnectionId=props['VpnConnectionId'],
		VpnConnectionDeviceTypeId=props['VpnConnectionDeviceTypeId'],
		#InternetKeyExchangeVersion=props['InternetKeyExchangeVersion']
	)['VpnConnectionDeviceSampleConfiguration']
	
	s3_object.put(Body=cfg)


	
def on_delete(event):

	props = event["ResourceProperties"]
	
	s3_object = s3.Object(
		props['BucketName'],
		f"{props['Name']}_ipsec_vpn_sample_configuration.txt"
	).delete()

def on_update(event):

	props = event["ResourceProperties"]
	
	# delete the old object
	s3_object = s3.Object(
		props['BucketName'],
		f"{props['Name']}_ipsec_vpn_sample_configuration.txt"
	).delete()

	# create a new one. 
	s3_object = s3.Object(
		props['BucketName'],
		f"{props['Name']}_ipsec_vpn_sample_configuration"
	)
	
	cfg = ec2.get_vpn_connection_device_sample_configuration(
		VpnConnectionId=props['VpnConnectionId'],
		VpnConnectionDeviceTypeId=props['VpnConnectionDeviceTypeId'],
		InternetKeyExchangeVersion=props['InternetKeyExchangeVersion']
	)['VpnConnectionDeviceSampleConfiguration']
	
	s3_object.put(Body=cfg)
	



