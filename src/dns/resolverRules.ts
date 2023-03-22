import {
  aws_route53resolver as r53r,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';
import { R53Resolverendpoints } from './dnsResolvers';

export interface CentralResolverRulesProps {
  readonly domains: string[];
  readonly resolvers: R53Resolverendpoints;
}

export class CentralResolverRules extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: CentralResolverRulesProps) {
	  super(scope, id);

	  props.domains.forEach((domain) => {
      var zoneName = domain.replace(/\./gi, 'dot');
      zoneName = zoneName.replace(/-/gi, 'dash');

      new r53r.CfnResolverRule(this, `${zoneName}SharedResolverRule`, {
        domainName: domain,
        ruleType: 'FORWARD',
        name: zoneName,
        resolverEndpointId: props.resolvers.outboundResolver.attrResolverEndpointId,
        targetIps: props.resolvers.inboundResolversIp,
        tags: [{
          key: 'r53rrule',
          value: domain,
        }],
      });

	 });
  }
}