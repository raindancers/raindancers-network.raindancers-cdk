import {
  aws_ec2 as ec2,
  aws_route53resolver as r53r,
}

  from 'aws-cdk-lib';
import * as constructs from 'constructs';


/**
 * Direction of Resolver
 */
export enum ResolverDirection {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound'
}

export interface OutboundForwardingRule {
  readonly domain: string;
  readonly forwardTo: string[];
}


/**
 * Properties to for creating inbound resolvers.
 */
export interface R53ResolverendpointsProps {
  /**
	 * the vpc that the resolvers will be placed in
	 */
  readonly vpc: ec2.Vpc;
  /**
	 * the subnetgroup to place the resolvers in
	 */
  readonly subnetGroup: string;
  /**
	 * An array of Internal domains that can be centrally resolved in this VPC
	 */
  readonly outboundForwardingRules?: OutboundForwardingRule[] | undefined;
  /**
	 * Value for Sharing.
	 */
  readonly tagValue?: string | undefined;
}

/**
 * Create Route53 Resolver Endpoints for MultiVPC and Hybrid DNS Resolution.
 */
export class R53Resolverendpoints extends constructs.Construct {

  /**
	 *
	 * @param scope the scope in which these resources are craeted
	 * @param id the id of the construct
	 * @param props propertys for the R53Resolver Endpoints
	 */
  constructor(scope: constructs.Construct, id: string, props: R53ResolverendpointsProps) {
    super(scope, id);


    // create inbound and outbound resolvers
    const dnsipAddresses: r53r.CfnResolverEndpoint.IpAddressRequestProperty[] = [];

    const selection = props.vpc.selectSubnets({ subnetGroupName: props.subnetGroup });
    for (const subnetId of selection.subnetIds) {
      dnsipAddresses.push(
        { subnetId: subnetId },
      );
    }

    // create a security group for the route resolvers.
    const dnsSecurityGroup = new ec2.SecurityGroup(this, 'DNSSecurityGroup', {
      vpc: props.vpc,
      allowAllOutbound: false,
    });

    dnsSecurityGroup.addEgressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.udp(53),
    );
    dnsSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.udp(53),
    );

    const outBoundResolver = new r53r.CfnResolverEndpoint(this, 'OutboundResolver', {
      direction: ResolverDirection.OUTBOUND,
      ipAddresses: dnsipAddresses,
      securityGroupIds: [dnsSecurityGroup.securityGroupId],
      name: 'OutboundRouteResolver ',
    });


    //const inboundResolver =
    new r53r.CfnResolverEndpoint(this, 'InboundResolver', {
      direction: ResolverDirection.INBOUND,
      ipAddresses: dnsipAddresses,
      securityGroupIds: [dnsSecurityGroup.securityGroupId],
      name: 'InboundRouteResolver ',
    });


    if (props.outboundForwardingRules) {
      props.outboundForwardingRules.forEach((rule) => {

        // we have to replace dots and dashes for the name rule. It does not like them!
        var name:string = rule.domain.replace(/\./gi, 'dot');
        name = name.replace(/-/gi, 'dash');

        // create a list of Targets
        const resolverIps: r53r.CfnResolverRule.TargetAddressProperty[] = [];
        rule.forwardTo.forEach((target) => {
          resolverIps.push({ ip: target });
        });

        // create a resolver IP address.
        const resolverrule = new r53r.CfnResolverRule(this, `${name}ResolverRule`, {
          domainName: rule.domain,
          ruleType: 'FORWARD',
          name: name,
          resolverEndpointId: outBoundResolver.attrResolverEndpointId,
          targetIps: resolverIps, // dns servers
          tags: [{
            key: 'r53rrule',
            value: props.tagValue as string,
          }],
        });

        // Associated the resolver rule with the vpc
        new r53r.CfnResolverRuleAssociation(this, `${name}ResolverRuleAssn`,
          {
            resolverRuleId: resolverrule.attrResolverRuleId,
            vpcId: props.vpc.vpcId,
          },
        );


        // new ram.CfnResourceShare(this, `ResolverRuleShare${rule.domain}`, {
        //   name: rule.domain,
        //   principals: [this.node.tryGetContext('orgArn')],
        //   resourceArns: [resolverrule.attrArn],
        //   allowExternalPrincipals: false,
        //   tags: [{
        //     key: 'r53rshare',
        //     value: props.tagValue as string,
        //   }],
        // });

      });
    }
  }
}