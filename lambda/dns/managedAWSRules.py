import boto3

def on_event(event, context):
  print(event)

  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update_delete(event)
  if request_type == 'Delete': return on_update_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	
def on_create(event):

	props = event["ResourceProperties"]
	r53r = boto3.client('route53resolver')

	firewall_domain_lists = []
	
	response = r53r.list_firewall_domain_lists()
	firewall_domain_lists.extend(response['FirewallDomainLists'])
	
	while 'NextToken' in response.keys():
		response = r53r.list_firewall_domain_lists(
			NextToken = response['NextToken']
		)
		firewall_domain_lists.extend(response['FirewallDomainLists'])
	
	managed_rule_ids = []
	for domain_list in firewall_domain_lists:
		print(domain_list, '\n')
		if domain_list['Name'] in props['awsManagedRules']:
			managed_rule_ids.append(domain_list['Id'])
		
	
	print(managed_rule_ids)

	return { 
		'Data': {
			'ManagedRuleIds': managed_rule_ids
		}
	}
	
	
def on_update_delete(event):
	
	print('lookup function has no acction on update or delete')

