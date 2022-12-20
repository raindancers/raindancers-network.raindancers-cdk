import boto3
import json
import base64

ec2 = boto3.client("ec2")
network_manager = boto3.client('networkmanager', region_name = 'us-west-2')

def on_event(event, context):
	print(event)

	
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_create(event)
	if request_type == 'Delete': return on_create(event)
	raise Exception("Invalid request type: %s" % request_type)

def on_delete(event):
	network_manager.delete_attachment(
		attachment_id = event["PhysicalResourceId"]
	)


def on_create(event):

	props = json.loads(base64.b64decode(event["ResourceProperties"]["props64"]).decode('utf-8'))
	

	vpc_attachment = network_manager.create_vpc_attachment(
    	CoreNetworkId=props['CoreNetworkId'],
    	VpcArn=props['VpcArn'],
		SubnetArns=props['SubnetArns'],
		Options=props['Options'],
		Tags=props['Tags'],
	)
	return { 'PhysicalResourceId': vpc_attachment['VpcAttachment']['Attachment']['AttachmentId'] }


def is_complete(event, context):

	
	response = network_manager.get_vpc_attachment(
    	AttachmentId=event["PhysicalResourceId"]
	)
	
	if response['VpcAttachment']['Attachment']['State'] == 'AVAILABLE':
		return { 
			'IsComplete': True,
			'Data': {
				'AttachmentId': event["PhysicalResourceId"]
			}
		}
	else:
			return { 'IsComplete': False }

	

