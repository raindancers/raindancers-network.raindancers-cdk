import {
  aws_ec2 as ec2,
  aws_route53resolver as r53r,
  custom_resources as cr,
  aws_logs as logs,
  aws_ram as ram,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


/**
 * Direction of Resolver
 */
export enum ResolverDirection {
  /**
   * Resolver is Inbound
   */
  INBOUND = 'inbound',
  /**
   * Resolver is outbound
   */
  OUTBOUND = 'outbound'
}

export interface OutboundForwardingRule {
  /**
   * domain to forward
   */
  readonly domain: string;
  /** array of ip address's to forward request to */
  readonly forwardTo: string[];
}


/**
 * Properties to for creating inbound resolvers.
 */
export interface R53ResolverendpointsProps {
  /**
	 * the vpc that the resolvers will be placed in
	 */
  readonly vpc: ec2.Vpc | ec2.IVpc;
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

  /** inbound resolver */
  public inboundResolver: r53r.CfnResolverEndpoint;
  /** list of Resolver IP address's */
  public inboundResolversIp: r53r.CfnResolverRule.TargetAddressProperty[];
  /** outbound resolver */
  public outboundResolver: r53r.CfnResolverEndpoint;

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

    this.outboundResolver = outBoundResolver;


    const inboundResolver = new r53r.CfnResolverEndpoint(this, 'InboundResolver', {
      direction: ResolverDirection.INBOUND,
      ipAddresses: dnsipAddresses,
      securityGroupIds: [dnsSecurityGroup.securityGroupId],
      name: 'InboundRouteResolver',
    });

    this.inboundResolver = inboundResolver;


    const inboundResolverIPCR = new cr.AwsCustomResource(this, 'getendpointipaddress', {
      onCreate: {
        service: 'Route53Resolver',
        action: 'listResolverEndpointIpAddresses',
        parameters: {
          ResolverEndpointId: inboundResolver.attrResolverEndpointId,
        },
        physicalResourceId: cr.PhysicalResourceId.of('inboundresolverip'),
      },
      logRetention: logs.RetentionDays.ONE_DAY,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    // we will have the same number of ip address's as their are Az's for the vpc, so we can use that to extract the
    // ip address out the CR.
    var inboundresolvers: r53r.CfnResolverRule.TargetAddressProperty[] = [];
    for (let index = 0; index < props.vpc.availabilityZones.length; index++ ) {
      inboundresolvers.push({ ip: inboundResolverIPCR.getResponseField((`IpAddresses.${index}.Ip`)) });
    }

    this.inboundResolversIp = inboundresolvers;
  }
}

export interface ConditionalForwarderProps {
  readonly forwardingRules: OutboundForwardingRule[];
  readonly outboundResolver: r53r.CfnResolverEndpoint;
  readonly inboundResolverTargets: r53r.CfnResolverRule.TargetAddressProperty[];
  readonly vpc: ec2.Vpc | ec2.IVpc;
}

export class ConditionalForwarder extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: ConditionalForwarderProps) {
    super(scope, id);

    props.forwardingRules.forEach((rule) => {

      // we have to replace dots and dashes for the name rule. It does not like them!
      var name:string = rule.domain.replace(/\./gi, 'dot');
      name = name.replace(/-/gi, 'dash');

      // create a list of TargetAddress's from the prop.rule
      const resolverIps: r53r.CfnResolverRule.TargetAddressProperty[] = [];
      rule.forwardTo.forEach((target) => {
        resolverIps.push({ ip: target });
      });

      // create a resolver rule for the central vpc
      const resolverrule = new r53r.CfnResolverRule(this, `${name}ResolverRule`, {
        domainName: rule.domain,
        ruleType: 'FORWARD',
        name: name,
        resolverEndpointId: props.outboundResolver.attrResolverEndpointId,
        targetIps: resolverIps, // dns servers
      });

      // Associated the resolver rule with the vpc
      new r53r.CfnResolverRuleAssociation(this, `${name}ResolverRuleAssn`,
        {
          resolverRuleId: resolverrule.attrResolverRuleId,
          vpcId: props.vpc.vpcId,
        },
      );

      // create a sharing rule for other vpcs to use, to resolve back to our inbound resolvers.
      const sharedresolverrule = new r53r.CfnResolverRule(this, `${name}SharedResolverRule`, {
        domainName: rule.domain,
        ruleType: 'FORWARD',
        name: name,
        resolverEndpointId: props.outboundResolver.attrResolverEndpointId,
        targetIps: props.inboundResolverTargets, // dns servers
      });

      new ram.CfnResourceShare(this, `ResolverRuleShare${rule.domain}`, {
        name: rule.domain,
        principals: [this.node.tryGetContext('orgArn')],
        resourceArns: [sharedresolverrule.attrArn],
        allowExternalPrincipals: false,
      });
    });
  }
}
