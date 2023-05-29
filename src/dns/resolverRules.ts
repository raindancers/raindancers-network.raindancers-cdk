import {
  aws_route53resolver as r53r,
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
import { R53Resolverendpoints } from './dnsResolvers';


export interface CentralResolverRulesProps {
  readonly domains: string[];
  readonly resolvers: R53Resolverendpoints;
  readonly vpc: ec2.Vpc | ec2.IVpc;
  readonly vpcSearchTag?: cdk.Tag | undefined;
}

export class CentralResolverRules extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: CentralResolverRulesProps) {
	  super(scope, id);

	  props.domains.forEach((domain) => {
      var zoneName = domain.replace(/\./gi, 'dot');
      zoneName = zoneName.replace(/-/gi, 'dash');
      const region = cdk.Aws.REGION.replace(/-/gi, '');

      new r53r.CfnResolverRule(this, `${zoneName}SharedResolverRule`, {
        domainName: domain,
        ruleType: 'FORWARD',
        name: `${zoneName}${region}`,
        resolverEndpointId: props.resolvers.outboundResolver.attrResolverEndpointId,
        targetIps: props.resolvers.inboundResolversIp,
        tags: [{
          key: 'r53rrule',
          value: domain,
        }],
      });

      // if a searchTag is not provided use the default.
      const searchTag = props.vpcSearchTag ?? new cdk.Tag('centralVPCSearchTag', 'RegionalDNSHub');

      // tag the vpc as a central resolver rule.
      cdk.Tags.of(props.vpc).add(searchTag.key, searchTag.value);

	 });
  }
}