import logging
from typing import Dict
from urllib import response
import boto3
import os
import json

logger = logging.getLogger(__name__)
ec2 = boto3.client("ec2")
networkmanager = boto3.client('networkmanager')

def on_event(event, context):
	
	# it is cloudformation
	if 'RequestType' in event.keys():
		request_type = event['RequestType']
		if request_type == 'Create': return on_create(event)
		if request_type == 'Update': return on_create(event)
		if request_type == 'Delete': return on_delete(event)
		raise Exception("Invalid request type: %s" % request_type)

	# it is eventbridge
	elif 'source' in  event.keys():
		pass

	else:
		raise ValueError('Not a valid Request')


def on_create(event):

	props = event['ResourceProperties']

	ROUTETABLEIDS = json.loads(os.environ['RouteTableIds'])
	DENYFILTER = json.loads(os.environ['DenyFilter'])
	ACCEPTFILTER = json.loads(os.environ['AcceptFilter'])
	CLOUDWANCOREID = os.environ['CloudWanCoreId']
	ATTACHMENTSEGMENT = os.environ['AttachmentSegment']

	# get the routes that are in the corewan, 

	response = networkmanager.get_core_network_policy(
		CoreNetworkId='string',
		PolicyVersionId=123,
		Alias='LIVE'|'LATEST'
	)
	

def on_delete(event):

	props = event['ResourceProperties']
	
	ec2.delete_transit_gateway_route(
		DestinationCidrBlock = props['cidr'],
		TransitGatewayRouteTableId=props["transitGatewayRouteTableId"],
	)