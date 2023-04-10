from time import sleep
import boto3

r53r = boto3.client('route53resolver')

# we do not have an onvent action as this is a check only.
def on_event(event, context): 
	return {'PhysicalResourceId': 'Isreadycheck'}

def is_complete(event, context):
	
	try:
		get_rule = r53r.get_firewall_rule_group(
			FirewallRuleGroupId = event["ResourceProperties"]["ResolverRuleId"]
		)

		if get_rule['FirewallRuleGroup']['Status'] == 'COMPLETE':
			is_ready = True
		else:
			is_ready = False
	except:
		is_ready = False
		
	return { 'IsComplete': is_ready }



