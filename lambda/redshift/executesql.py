import boto3
from getdbcreds import get_admin_creds 

redshift_data = boto3.client('redshift-data')

def on_event(event, context):
	print(event)
	request_type = event['RequestType']
	if request_type == 'Create': return on_create(event["ResourceProperties"])
	if request_type == 'Update': return on_update(event["ResourceProperties"])
	if request_type == 'Delete': return on_delete(event["ResourceProperties"])
  	

def on_create(props):
	
	response = redshift_data.execute_statement(
		ClusterIdentifier=props['ClusterIdentifier'],
		Database='DefaultDatabase',
		DbUser=get_admin_creds(props['ClusterIdentifier']),
		Sql=props['Sql'],
		StatementName= props['StatementName'],
		WithEvent=True
	)

	return {
		'PhysicalResourceId': props['StatementName'],
	}

def on_update(props):
	
	raise Exception('Database is immuatable: no changes are possible')

def on_delete(props):

	print('Deleting a SQL Execution has no effect other than removing the resource from CF')

