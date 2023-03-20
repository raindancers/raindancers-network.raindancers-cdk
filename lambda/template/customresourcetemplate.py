import boto3
import os


dynamodb = boto3.client('someservice')

def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event["ResourceProperties"])
  if request_type == 'Update': return on_update(event["ResourceProperties"])
  if request_type == 'Delete': return on_delete(event["ResourceProperties"])
  	

def on_create(props):
	
	return {
		'PhysicalResourceId': 'something',
		'Data': {
			'UUID':'something'
		}
	}

def on_update(event):
	
	print('dosomething')

def on_delete(event):

	print('dosomething')