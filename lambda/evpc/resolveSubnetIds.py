import logging
import boto3
import os
import json

logger = logging.getLogger(__name__)
ec2 = boto3.client("ec2")
networkmanager = boto3.client('networkmanager')

def on_event(event, context):
	
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event)
	if request_type == 'Update': return on_create(event)
	if request_type == 'Delete': return on_create(event)
	

def on_create(event):
	props = event["ResourceProperties"]

	sts = boto3.client('sts')
	
	assumed_role = sts.assume_role(
		RoleArn = props['assumeRole'],
		RoleSessionName = "cross_acct_lambda",
	)

	ec2 = boto3.client(
		'ec2',
		aws_access_key_id = assumed_role['Credentials']['AccessKeyId'],
    	aws_secret_access_key = assumed_role['Credentials']['SecretAccessKey'],
    	aws_session_token= assumed_role['Credentials']['SessionToken']
	)

	response = ec2.describe_subnets(
		Filters = [
			{
				'Name':'vpc-id',
				'Values': [
					props['vpcId']
				]
			},
			{
				'Name': 'tag:aws-cdk:subnet-name',
				'Values': [
					props['subnetGroupName']
				]
			},
		]
	)

	data = {}

	for i, subnet in enumerate(response['Subnets']):
		data[f'Subnet{i}'] = subnet['SubnetId']

	print(data)

	return { 
		'Data': data
	}