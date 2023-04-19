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

	print('deleting Attachment:', event["PhysicalResourceId"])
	network_manager.delete_attachment(AttachmentId = event["PhysicalResourceId"])


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

	print('EVENT:',event)
	request_type = event['RequestType']

	if request_type == 'Create':

		props = json.loads(base64.b64decode(event["ResourceProperties"]["props64"]).decode('utf-8'))				



		response = network_manager.get_vpc_attachment(
			AttachmentId=event["PhysicalResourceId"]
		)
		
		print('IsCompleteHandler', response)

		if response['VpcAttachment']['Attachment']['State'] == 'FAILED':
			print(response)
			raise ValueError('VPC Attachment Failed')

		if response['VpcAttachment']['Attachment']['State'] == 'AVAILABLE':
			return { 
				'IsComplete': True,
			}
		else:
			return { 'IsComplete': False }
				

	if request_type == 'Delete':

		# if the attachment still exisits, deletion is not yet compelte. 
		# if this lookup call is sucessful, the attachment still exisits, so
		# deletion is not yet complete.  If it does fail, we know its gone
		try:
			response = network_manager.get_vpc_attachment(
				AttachmentId=event["PhysicalResourceId"]
			)
			return { 'IsComplete': False }
		
		except:

			return { 'IsComplete': True}

	
	if request_type == 'Update':
		return { 'IsComplete': True }

