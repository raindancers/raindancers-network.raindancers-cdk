referenceSets = 	[
	{
	'name': 'pl1',
	 'arn': 'arn:aws:ec2:ap-southeast-2:847997321372:prefix-list/pl-0859863bbcfca9b19'
	},
	{'name': 'pl2',
	 'arn': 'arn:aws:ec2:ap-southeast-2:847997321372:prefix-list/pl-0201d2b5ced24954f'}
	]

ip_set_references = {}
for ipset in referenceSets:
	ip_set_references[ipset['name']] = {'ReferenceArn': ipset['arn']}

reference_sets = {'IPSetReferences': ip_set_references}

print(reference_sets)

	# 'ReferenceSets': {
	# 			'IPSetReferences': {
	# 				'string': {'ReferenceArn': 'string'}
	# 			}
	# 		},