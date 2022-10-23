import boto3

r53r = boto3.client('route53resolver')

def on_event(event, context):
	print(event)
	
	props = event["ResourceProperties"]
	physical_resource_id = f'Route53Assn'


	response = r53r.list_resolver_rules()

	print(response['ResolverRules'])

	for resolver_rule in response['ResolverRules']:
		if (resolver_rule['OwnerId'] == props['owner'] and  resolver_rule['RuleType'] == 'FORWARD'):
			#associate the rule
			print(resolver_rule)
			if event['RequestType'] != 'Delete':
				r53r.associate_resolver_rule(
					ResolverRuleId=resolver_rule['Id'],
					VPCId=props['vpcId'],
					#Name=f"{resolver_rule['DomainName']}fromtiritahi"
				)
			else:
				r53r.disassociate_resolver_rule(
					ResolverRuleId=resolver_rule['Id'],
					VPCId=props['vpcId']
				)


	while 'NextToken' in response: 
		response = r53r.list_resolver_rules(
			NextToken=response['Nextoken']
		)
		if (resolver_rule['OwnerId'] == props['owner'] and  resolver_rule['RuleType'] == 'FORWARD'):
			#associate the rule
			if event['RequestType'] != 'Delete':
				r53r.associate_resolver_rule(
					ResolverRuleId=resolver_rule['Id'],
					VPCId=props['vpcId'],
					#Name=f"{resolver_rule['DomainName']}fromtiritahi"
				)
			else:
				r53r.disassociate_resolver_rule(
					ResolverRuleId=resolver_rule['Id'],
					VPCId=props['vpcId']
				)

	return physical_resource_id