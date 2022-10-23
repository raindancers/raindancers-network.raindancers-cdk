import logging
from typing import Dict
from urllib import response
import boto3

logger = logging.getLogger(__name__)
ec2 = boto3.client("ec2")

def on_event(event, context):
	print(event)
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_create(event)
	if request_type == 'Delete': return on_delete(event)
	raise Exception("Invalid request type: %s" % request_type)
	

def on_create(event):
	pass


def is_complete(event, context):

	props = event['ResourceProperties']

	attachment_state = ec2.describe_transit_gateway_vpc_attachments(
		TransitGatewayAttachmentIds=[
		props["transitGatewayAttachmentId"]
		],
	)['TransitGatewayVpcAttachments'][0]['State']

	if attachment_state == 'available':
	

		ec2.create_transit_gateway_route(
			DestinationCidrBlock = props['cidr'],
			TransitGatewayRouteTableId=props["transitGatewayRouteTableId"],
			TransitGatewayAttachmentId=props["transitGatewayAttachmentId"]
		)

		return { 'IsComplete': 'is_ready' }	

	

def on_delete(event):

	props = event['ResourceProperties']
	
	ec2.delete_transit_gateway_route(
		DestinationCidrBlock = props['cidr'],
		TransitGatewayRouteTableId=props["transitGatewayRouteTableId"],
	)