import {
  aws_route53resolver as r53r,
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


export interface ForwardingRulesProps {
  resolverIP: string[];
  domains: string[];
  vpc: ec2.Vpc;
}

export class ForwardingRules extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: ForwardingRulesProps) {
	  super(scope, id);

	  let targetIps: {ip: string}[] = [];
    props.resolverIP.forEach((targetip) => {
      targetIps.push({ ip: targetip });
    });

    props.domains.forEach((domain) => {

      // create the resolver rule
      let resolverRule = new r53r.CfnResolverRule(this, `r53r${domain}`, {
        domainName: domain,
        ruleType: 'FORWARD',
        targetIps: targetIps,
      });

      new r53r.CfnResolverRuleAssociation(this, `r53rassn${domain}`, {
        resolverRuleId: resolverRule.attrResolverRuleId,
        vpcId: props.vpc.vpcId,
      });

    });

  }
}