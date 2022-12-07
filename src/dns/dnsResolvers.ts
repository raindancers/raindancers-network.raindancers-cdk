import * as cdk from 'aws-cdk-lib';
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
  INBOUND = 'inbound',
  OUTBOUND = 'outbound'
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
  readonly resolveDomains?: string[] | undefined;
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


    const inboundResolver = new r53r.CfnResolverEndpoint(this, 'InboundResolver', {
      direction: ResolverDirection.INBOUND,
      ipAddresses: dnsipAddresses,
      securityGroupIds: [dnsSecurityGroup.securityGroupId],
      name: 'InboundRouteResolver ',
    });


    /**
		 * Create Resolver Rules to share across the network
		 */

    // get endpoint Ip
    const addRoutev4SdkCall: cr.AwsSdkCall = {
      service: 'Route53Resolver',
      action: 'listResolverEndpointIpAddresses',
      parameters: {
        ResolverEndpointId: inboundResolver.attrResolverEndpointId,
      },
      region: cdk.Aws.REGION,
      physicalResourceId: cr.PhysicalResourceId.of('InboundRouteResolverIP'),
    };

    const resolverIP = new cr.AwsCustomResource(this, 'CRendpointresolverips', {
      onCreate: addRoutev4SdkCall,
      logRetention: logs.RetentionDays.SEVEN_YEARS,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    const resolverIps: r53r.CfnResolverRule.TargetAddressProperty[] = [];

    props.vpc.availabilityZones.forEach((index) => {

      const targetAddressProperty: r53r.CfnResolverRule.TargetAddressProperty = {
        ip: resolverIP.getResponseField(`IpAddresses.${index}.Ip`),
      };
      resolverIps.push(targetAddressProperty);
    });


    if (props.resolveDomains) {
      props.resolveDomains.forEach((domain) => {

        var name:string = domain.replace(/\./gi, 'dot');
        name = name.replace(/-/gi, 'dash');

        const resolverrule = new r53r.CfnResolverRule(this, `${name}ResolverRule`, {
          domainName: domain,
          ruleType: 'FORWARD',
          name: name,
          resolverEndpointId: outBoundResolver.attrResolverEndpointId,
          targetIps: resolverIps,
          tags: [{
            key: 'r53rrule',
            value: props.tagValue as string,
          }],
        });

        new ram.CfnResourceShare(this, `ResolverRuleShare${domain}`, {
          name: domain,
          principals: [this.node.tryGetContext('orgArn')],
          resourceArns: [resolverrule.attrArn],
          allowExternalPrincipals: false,
          tags: [{
            key: 'r53rshare',
            value: props.tagValue as string,
          }],
        });

      });
    }
  }
}