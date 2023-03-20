import boto3

redshift = boto3.client('redshift')

def get_admin_creds(cluster_id):
	
	return redshift.get_cluster_credentials_with_iam(
		DbName= 'DefaultDatabase',
		ClusterIdentifier = cluster_id,
		DurationSeconds=900
	)
	#The return from this will look like this. 
	# {
    # 	'DbUser': 'string',
    # 	'DbPassword': 'string',
    # 	'Expiration': datetime(2015, 1, 1),
    # 	'NextRefreshTime': datetime(2015, 1, 1)
	# }
