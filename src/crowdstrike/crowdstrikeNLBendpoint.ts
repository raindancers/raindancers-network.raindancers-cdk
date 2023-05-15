import * as path from 'path';
import {
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_logs as logs,
  aws_elasticloadbalancingv2 as elbv2,
  aws_elasticloadbalancingv2_targets as elbv2_targets,
  aws_route53 as r53,
  aws_route53_targets as r53targets,
  aws_route53resolver as r53r,
  aws_iam as iam,
  aws_ram as ram,
  aws_lambda,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';


import * as constructs from 'constructs';
import { CrowdStrikePrivateLinkEndpoint } from './crowdstrike';
import { CrowdStrikeCloud } from './crowdstrikeRegionInfo';
import { R53Resolverendpoints } from '../dns/dnsResolvers';
import { EnterpriseVpc } from '../evpc/enterprisevpc';

export interface VpcRegionId {
  readonly peeringVpcId: string;
  readonly peerVpcRegion: string;
}

export interface CrowdStrikeExtendedEndpointProps {
  /**aws
   * The EC2 Instance that will be udpated.
   */
  readonly crowdstrikeCloud: CrowdStrikeCloud;
  readonly vpccidr?: string | undefined;
  readonly peeringVpc?: VpcRegionId;
  readonly useELBInPeeredVpc?: boolean;
}

/**
 * This will
 */
export class CrowdStrikeExtendedEndpoint extends constructs.Construct {

  public readonly proxy: string;
  public readonly download: string;
  public readonly proxyZone: string;
  public readonly proxyZoneName: string;
  public readonly downloadZone: string;
  public readonly downloadZoneName: string;

  constructor(scope: constructs.Construct, id: string, props: CrowdStrikeExtendedEndpointProps) {
    super(scope, id);

    //  default to 192.168.255.0 if not supplied
    let cidr: string;
    if (props.vpccidr) {
      cidr = props.vpccidr;
    } else {
      cidr = '192.168.255.0/24';
    }

    const crowdstrikeVPC = new EnterpriseVpc(this, 'EVPC', {
      vpc: new ec2.Vpc(this, 'VPC', {
        ipAddresses: ec2.IpAddresses.cidr(cidr),
        maxAzs: 2,
        vpcName: 'CrowdstrikeVPC' + props.crowdstrikeCloud,
        subnetConfiguration: [
          {
            name: 'inside',
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            cidrMask: 27,
          },
        ],
      }),
    });

    // peer this vpc to the other vpc.


    const endPoints = new CrowdStrikePrivateLinkEndpoint(this, 'endpoints', {
      vpc: crowdstrikeVPC.vpc,
      crowdStrikeCloud: props.crowdstrikeCloud,
      subnets: { subnetGroupName: 'inside' },
      peeredwithNLB: true,
    });

    this.proxy = endPoints.proxy;
    this.download = endPoints.download;
    this.proxyZone = endPoints.proxyhostedZone;
    this.proxyZoneName = endPoints.proxyhostedZoneName;
    this.downloadZone = endPoints.downloadhostedZone;
    this.downloadZoneName = endPoints.downloadhostedZoneName;

    if (props.peeringVpc) {

      new ec2.CfnVPCPeeringConnection(this, 'MyCfnVPCPeeringConnection', {
        peerVpcId: props.peeringVpc.peeringVpcId,
        vpcId: crowdstrikeVPC.vpc.vpcId,
        peerRegion: props.peeringVpc.peerVpcRegion,
      });

      // associate the new hosted zone with the peered vpc
      new cr.AwsCustomResource(this, 'associateproxyzone', {
        onCreate: {
          service: 'Route53',
          action: 'associateVPCWithHostedZone',
          parameters: {
            HostedZoneId: endPoints.proxyhostedZone,
            VPC: {
              VPCId: props.peeringVpc.peeringVpcId,
              VPCRegion: props.peeringVpc.peerVpcRegion,
            },
          },
          physicalResourceId: cr.PhysicalResourceId.of(endPoints.proxyhostedZone),
        },
        onDelete: {
          service: 'Route53',
          action: 'disassociateVPCFromHostedZone',
          parameters: {
            HostedZoneId: endPoints.proxyhostedZone,
            VPC: {
              VPCId: props.peeringVpc.peeringVpcId,
              VPCRegion: props.peeringVpc.peerVpcRegion,
            },
          },
        },
        logRetention: logs.RetentionDays.ONE_DAY,
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });

      // downloadzoneassoication.
      new cr.AwsCustomResource(this, 'associatedownloadzone', {
        onCreate: {
          service: 'Route53',
          action: 'associateVPCWithHostedZone',
          parameters: {
            HostedZoneId: endPoints.downloadhostedZone,
            VPC: {
              VPCId: props.peeringVpc.peeringVpcId,
              VPCRegion: props.peeringVpc.peerVpcRegion,
            },
          },
          physicalResourceId: cr.PhysicalResourceId.of(endPoints.downloadhostedZone),
        },
        onDelete: {
          service: 'Route53',
          action: 'disassociateVPCFromHostedZone',
          parameters: {
            HostedZoneId: endPoints.downloadhostedZone,
            VPC: {
              VPCId: props.peeringVpc.peeringVpcId,
              VPCRegion: props.peeringVpc.peerVpcRegion,
            },
          },
        },
        logRetention: logs.RetentionDays.ONE_DAY,
        policy: cr.AwsCustomResourcePolicy.fromStatements(
          [
            new iam.PolicyStatement({
              actions: [
                'route53:DisassociateVPCFromHostedZone',
                'ec2:DescribeVpcs',
                'route53:AssociateVPCWithHostedZone',
              ],
              effect: iam.Effect.ALLOW,
              resources: ['*'],
            }),
          ],
        ),
      });
    }
  }
}

export interface CrowdStrikeNLBProps {
  readonly vpc: ec2.Vpc;
  readonly subnetGroupName: string;
  readonly proxy: string;
  readonly download: string;
  readonly proxyhostedZone: string;
  readonly proxyhostedZoneName: string;
  readonly downloadhostedZone: string;
  readonly downloadhostedZoneName: string;
  readonly region: string;
  readonly crowdstrikeRegion: CrowdStrikeCloud;
  readonly routeresolverEndpoints: R53Resolverendpoints;
}


export class CrowdStrikeNLB extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: CrowdStrikeNLBProps) {
    super(scope, id);

    const getTargetsFn = new aws_lambda.SingletonFunction(this, 'GetTargetsLambda', {
      uuid: 'FFEEFF00',
      runtime: aws_lambda.Runtime.PYTHON_3_9,
	    handler: 'getTargets.on_event',
	    code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/crowdstrike')),
    });

    getTargetsFn.addToRolePolicy(
	    new iam.PolicyStatement({
	      effect: iam.Effect.ALLOW,
	      resources: ['*'],
	      actions: ['ec2:Describe*'],
	    }),
	  );

    const getTargetsToken = new cr.Provider(this, 'NetworkManagerProvider', {
	    onEventHandler: getTargetsFn,
	  });

    const proxyEndpointIP = new cdk.CustomResource(this, 'proxytargets', {
      properties: {
        EndpointId: props.proxy,
        Region: props.region,
      },
      serviceToken: getTargetsToken.serviceToken,
    });

    const downloadEndpointIP = new cdk.CustomResource(this, 'downloadtargets', {
      properties: {
        EndpointId: props.download,
        Region: props.region,
      },
      serviceToken: getTargetsToken.serviceToken,
    });


    let proxyTargets: elbv2_targets.IpTarget[] = [];
    proxyTargets.push(new elbv2_targets.IpTarget(proxyEndpointIP.getAttString('Target1'), undefined, 'all'));
    proxyTargets.push(new elbv2_targets.IpTarget(proxyEndpointIP.getAttString('Target2'), undefined, 'all'));
    let downloadTargets: elbv2_targets.IpTarget[] = [];
    downloadTargets.push(new elbv2_targets.IpTarget(downloadEndpointIP.getAttString('Target1'), undefined, 'all'));
    downloadTargets.push(new elbv2_targets.IpTarget(downloadEndpointIP.getAttString('Target2'), undefined, 'all'));


    const Proxyloadbalancer = new elbv2.NetworkLoadBalancer(this, 'csProxyLB', {
      vpc: props.vpc,
      vpcSubnets: { subnetGroupName: props.subnetGroupName },
      internetFacing: false,
      crossZoneEnabled: true,
    });

    const proxyListener = Proxyloadbalancer.addListener('proxylistener', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
    });

    proxyListener.addTargets('proxyTargets', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
      targets: proxyTargets,

    });


    new r53.ARecord(this, 'proxyarecord', {
      zone: r53.PrivateHostedZone.fromHostedZoneAttributes(this, 'proxyzone', {
        hostedZoneId: props.proxyhostedZone,
        zoneName: props.proxyhostedZoneName,
      }),
      target: r53.RecordTarget.fromAlias(new r53targets.LoadBalancerTarget(Proxyloadbalancer)),
    });


    const downloadbalancer = new elbv2.NetworkLoadBalancer(this, 'downloadLB', {
      vpc: props.vpc,
      vpcSubnets: { subnetGroupName: props.subnetGroupName },
      internetFacing: false,
      crossZoneEnabled: true,
    });

    const downloadListener = downloadbalancer.addListener('downloadlistener', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
    });

    downloadListener.addTargets('downloadTargets', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
      targets: downloadTargets,
    });


    new r53.ARecord(this, 'downloadarecord', {
      zone: r53.PrivateHostedZone.fromHostedZoneAttributes(this, 'downloadzone', {
        hostedZoneId: props.downloadhostedZone,
        zoneName: props.downloadhostedZoneName,
      }),
      target: r53.RecordTarget.fromAlias(new r53targets.LoadBalancerTarget(Proxyloadbalancer)),
    });

    // create a forwarding rule, and share to the org

    // create a master zone sharing rule
    const cloudsinkZone = 'cloudsink.net';
    var zoneName = cloudsinkZone.replace(/\./gi, 'dot');
    zoneName = zoneName.replace(/-/gi, 'dash');


    const resolverRuleCloudSink = new r53r.CfnResolverRule(this, `${cloudsinkZone}SharedResolverRule`, {
      domainName: cloudsinkZone,
      ruleType: 'FORWARD',
      name: zoneName,
      resolverEndpointId: props.routeresolverEndpoints.outboundResolver.attrResolverEndpointId,
      targetIps: props.routeresolverEndpoints.inboundResolversIp, // dns servers
      tags: [{
        key: 'r53rrule',
        value: 'cloudsink.net',
      }],
    });

    new ram.CfnResourceShare(this, `ResolverRuleShare${cloudsinkZone}`, {
      name: zoneName,
      principals: [this.node.tryGetContext('orgArn')],
      resourceArns: [resolverRuleCloudSink.attrArn],
      allowExternalPrincipals: false,
      tags: [{
        key: 'r53rshare',
        value: 'cloudsink.net',
      }],
    });


  }
}