import boto3
import json
import base64

ec2 = boto3.client("ec2")
network_manager = boto3.client('networkmanager', region_name = 'us-west-2')

def on_event(event, context):
	print(event)

	
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_update(event)
	if request_type == 'Delete': return on_delete(event)
	raise Exception("Invalid request type: %s" % request_type)


def on_update(event):
	print('This resource is immuatable, can not modify')


def on_delete(event):
	print(network_manager.delete_attachment(
		attachment_id = event["PhysicalResourceId"]
	))


def on_create(event):

	props = json.loads(base64.b64decode(event["ResourceProperties"]["props64"]).decode('utf-8'))
	

	vpc_attachment = network_manager.create_vpc_attachment(
    	CoreNetworkId=props['CoreNetworkId'],
    	VpcArn=props['VpcArn'],
		SubnetArns=props['SubnetArns'],
		Options=props['Options'],
		Tags=props['Tags'],
	)

	print(vpc_attachment)

	return { 
		'PhysicalResourceId': vpc_attachment['VpcAttachment']['Attachment']['AttachmentId'], 
		'Data': {
			'AttachmentId': vpc_attachment['VpcAttachment']['Attachment']['AttachmentId']
		}
	}


def is_complete(event, context):

	
	response = network_manager.get_vpc_attachment(
    	AttachmentId=event["PhysicalResourceId"]
	)
	
	if response['VpcAttachment']['Attachment']['State'] == 'AVAILABLE':
		return { 
			'IsComplete': True,
		}
	else:
			return { 'IsComplete': False }

	

