import boto3

def getroute53client(role_arn):
	sts = boto3.client('sts')
	assumed_role = sts.assume_role(
		RoleArn = role_arn,
		RoleSessionName = "cross_acct_lambda",
		ExternalId = 'R53Assn'
	)
	
	route53 = boto3.client(
		'route53',
		aws_access_key_id = assumed_role['Credentials']['AccessKeyId'],
    	aws_secret_access_key = assumed_role['Credentials']['SecretAccessKey'],
    	aws_session_token= assumed_role['Credentials']['SessionToken']
	)

	return route53 


def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  if request_type == 'Create': return on_create_update(event)
  if request_type == 'Update': return on_create_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	


def on_create_update(event):

	props = event["ResourceProperties"]
	
	#find the vpc
	route53 = boto3.client('route53')
	ec2 = boto3.client('ec2', region_name= props['Region'])
	
	print(props['SearchTagKey'], props['SearchTagValue'])

	vpc_id = ec2.describe_vpcs(
		Filters=[
			{
				"Name":  f"tag:{props['SearchTagKey']}",
				"Values": [
					props['SearchTagValue'],
				],
			},
		]
	)['Vpcs'][0]['VpcId']

	#Associate the Zone with the Central VPC
	route53.associate_vpc_with_hosted_zone(
		HostedZoneId = props['ZoneId'],
		VPC = { 
			"VPCId":  vpc_id,
			"VPCRegion": props['Region']
		}
	)

	
def on_delete(event):

	props = event["ResourceProperties"]

	#find the vpc
	route53 = boto3.client('route53')
	ec2 = boto3.client('ec2', region_name= props['Region'])
	
	vpc_id = ec2.describe_vpcs(
		Filters=[
			{
				"Name":  f"tag:{props['SearchTagKey']}",
				"Values": [
					props['SearchTagValue'],
				],
			},
		]
	)['Vpcs'][0]['VpcId']

	# desassoicate the vpc
	route53.disassociate_vpc_from_hosted_zone(
		HostedZoneId = props['ZoneId'],
		VPC = {
			"VPCId": vpc_id,
			"VPCRegion": props['Region']
		}
	)
	
	print("Diassocating: %s" % props)

