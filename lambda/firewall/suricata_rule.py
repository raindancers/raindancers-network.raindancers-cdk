import boto3
import os
from boto3.dynamodb.types import TypeSerializer
import json
import base64


nfw = boto3.client('network-firewall')
dynamodb = boto3.client('dynamodb')

def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)
	

def on_create(event):
	props = event["ResourceProperties"]

	# get the rules for this ruleset from the data base
	ruleset = ''

	for ruleUUID in props['Rules']:

		suricata_rule = dynamodb.execute_statement(
			Statement = f"SELECT * FROM \"{os.environ['TableName']}\" WHERE UUID = '{ruleUUID}'"
		)['Items'][0]

		rule = suricata_rule['SuricataRule']['S']
		sid = suricata_rule['SID']['N']
		rev = suricata_rule['Rev']['N']

		ruleset = ruleset + rule + f" sid:{sid}; rev:{rev};)\n"

		# drop http @example any -> $EXTERNAL_NET any (http.host; content:"evil.com"; startswith; endswith; msg:"matching HTTP denylisted FQDNs"; priority:1; flow:to_server, established; sid:2; rev:1;)

	
	ip_set_references = {}
	for ipset in props['ReferenceSets']:
		ip_set_references[ipset['name']] = {'ReferenceArn': ipset['arn']}

	
	# create a rule 
	response = nfw.create_rule_group(
		Capacity = int(props['Capacity']),
		RuleGroupName = props['RuleGroupName'],
		Type = 'STATEFUL',
		Description = props['Description'],
		# Rules = ruleset
		RuleGroup = {
			'RulesSource': {
				'RulesString': ruleset
			},
			'ReferenceSets': {
				'IPSetReferences': ip_set_references
			}
		},
	)

	return { 
		"Data": {
			"RuleGroupArn": response['RuleGroupResponse']['RuleGroupArn']
		}
	}

def on_update(event):

	props = event["ResourceProperties"]

	# get the rules for this ruleset from the data base
	ruleset = ''
	for ruleUUID in props['Rules']:
		suricata_rule = dynamodb.execute_statement(
			Statement = f'SELECT * FROM \"{os.environ["policyTableName"]}\" WHERE UUID = {ruleUUID}'
		)['Items']

		rule = suricata_rule['SuricataRule']['S']
		sid = suricata_rule['SID']['N']
		rev = suricata_rule['Rev']['N']

		ruleset = ruleset + rule + f" sid:{sid}; rev:{rev}\n"
		
	# get the updateToken for the Rule.

	update_token = nfw.describe_rule_group(
		RuleGroupName = props['RuleGroupName'],
		Type = 'STATEFUL',
	)['UpdateToken']

	print(ruleset)
	response = nfw.update_rule_group(
		RuleGroupName = props['RuleGroupName'],
		Type = 'STATEFUL',
		UpdateToken = update_token, 
		RuleGroup = {
			'RulesSource': {
				'RulesString': ruleset
			} 
		}
	)


def on_delete(event):
	props = event["ResourceProperties"]
	nfw.delete_rule_group(
		RuleGroupName = props['RuleGroupName'],
		Type = 'STATEFUL',
	)
	