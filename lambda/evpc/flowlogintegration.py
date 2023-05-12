import boto3

ec2 = boto3.client('ec2')
cf = boto3.client('cloudformation')

def on_event(event, context):
  print(event)

  print('botoversion', boto3.__version__ )
  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	

def on_update(event):
	print('this is an imuuatable resource, changes are not possible')


def on_create(event):

	props = event["ResourceProperties"]

	print('FlowLogId:', props['FlowLogId'])
	print('Athena:', props['AthenaBucket'])

	
	template = ec2.get_flow_logs_integration_template(
		FlowLogId = props['FlowLogId'],
		ConfigDeliveryS3DestinationArn=f"{props['AthenaBucket']}/config/",
		IntegrateServices={
			'AthenaIntegrations': [
				{
					'IntegrationResultS3DestinationArn': f"{props['AthenaBucket']}/results/",
					'PartitionLoadFrequency': 'daily',
				},
			]
		}
	)

	cf.create_stack(
		StackName = f"AthenaFlowLogs-{props['VpcName']}",
		TemplateURL = template['Result'],
		Capabilities=[
			'CAPABILITY_IAM',
		],
	)

	physical_id = f"{props['AthenaBucket']}-integration"

	return {
		'PhysicalResourceId': physical_id,
	}


def on_delete(event):

	props = event["ResourceProperties"]

	

	cf.delete_stack(
		StackName = f"AthenaFlowLogs-{props['VpcName']}",
	)
