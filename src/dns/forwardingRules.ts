import {
  aws_route53resolver as r53r,
  aws_ec2 as ec2,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

//import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface ForwardingRulesProps {
  readonly resolverIP: string[];
  readonly domains: string[];
  readonly vpc: ec2.Vpc;
  readonly resolverId: string;
}

/**
 * create forwarding rules and associate them with a vpc.
 */
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
        resolverEndpointId: props.resolverId,
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

export interface AssociateSharedResolverRuleProps {

  /**
   * domainNames which are to be associated
   */
  readonly domainNames: string[];
  /**
   * The VPC which will be assocaited with the ResolverRules
   */
  readonly vpc: ec2.Vpc | ec2.IVpc;

}

/**
 * Associate a resolver rule that has been shared to this account
 */
export class AssociateSharedResolverRule extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: AssociateSharedResolverRuleProps) {
	  super(scope, id);

    props.domainNames.forEach((domain) => {

      var zoneName = domain.replace(/\./gi, 'dot');
      zoneName = zoneName.replace(/-/gi, 'dash');
      //const region = cdk.Aws.REGION.replace(/-/gi, '');

      const resolverRule = new cr.AwsCustomResource(this, `lookupResolverId'${domain}`, {
        onCreate: {
          service: 'Route53Resolver',
          action: 'listResolverRules',
          parameters: {
            Filters: [
              {
                Name: 'DomainName',
                Values: [`${domain}.`],
              },
            ],
          },
          physicalResourceId: cr.PhysicalResourceId.of('resolverId'),
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });

      const resolverRuleId = resolverRule.getResponseField('ResolverRules.0.Id');

      new r53r.CfnResolverRuleAssociation(this, `${domain}ResolverRuleAssociation`, {
        resolverRuleId: resolverRuleId,
        vpcId: props.vpc.vpcId,
      });

    });


  }
}
