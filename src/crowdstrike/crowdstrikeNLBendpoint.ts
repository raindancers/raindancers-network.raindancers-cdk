import {
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_logs as logs,
  aws_elasticloadbalancingv2 as elbv2,
  aws_elasticloadbalancingv2_targets as elbv2_targets,
  aws_route53 as r53,
  aws_route53_targets as r53targets,
}
  from 'aws-cdk-lib';


import * as constructs from 'constructs';
import { EnterpriseVpc } from '../evpc/enterprisevpc';
import { CrowdStrikePrivateLinkEndpoint } from './crowdstrike';
import { CrowdStrikeCloud } from './crowdstrikeRegionInfo';


export interface VpcRegionId {
  readonly peeringVpcId: string;
  readonly peerVpcRegion: string;
}

export interface CrowdStrikeExtendedEndpointProps {
  /**
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

  public readonly proxy: ec2.InterfaceVpcEndpoint;
  public readonly download: ec2.InterfaceVpcEndpoint;
  public readonly proxyZone: r53.PrivateHostedZone;
  public readonly downloadZone: r53.PrivateHostedZone;

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
    this.downloadZone = endPoints.downloadhostedZone;

    if (props.peeringVpc) {

      new ec2.CfnVPCPeeringConnection(this, 'MyCfnVPCPeeringConnection', {
        peerVpcId: props.peeringVpc.peeringVpcId,
        vpcId: crowdstrikeVPC.vpc.vpcId,
        peerRegion: props.peeringVpc.peeringVpcId,
      });

      // associate the new hosted zone with the peered vpc
      new cr.AwsCustomResource(this, 'associateproxyzone', {
        onCreate: {
          service: 'Route53',
          action: 'associateVPCWithHostedZone',
          parameters: {
            HostedZoneId: endPoints.proxyhostedZone.hostedZoneId,
            VPC: {
              VPCId: props.peeringVpc.peeringVpcId,
              VPCRegion: props.peeringVpc.peerVpcRegion,
            },
          },
          physicalResourceId: cr.PhysicalResourceId.of(endPoints.proxyhostedZone.hostedZoneId),
        },
        onDelete: {
          service: 'Route53',
          action: 'disassociateVPCFromHostedZone',
          parameters: {
            HostedZoneId: endPoints.proxyhostedZone.hostedZoneId,
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
            HostedZoneId: endPoints.downloadhostedZone.hostedZoneId,
            VPC: {
              VPCId: props.peeringVpc.peeringVpcId,
              VPCRegion: props.peeringVpc.peerVpcRegion,
            },
          },
          physicalResourceId: cr.PhysicalResourceId.of(endPoints.downloadhostedZone.hostedZoneId),
        },
        onDelete: {
          service: 'Route53',
          action: 'disassociateVPCFromHostedZone',
          parameters: {
            HostedZoneId: endPoints.downloadhostedZone.hostedZoneId,
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
    }
  }
}

export interface CrowdStrikeNLBProps {
  readonly vpc: ec2.Vpc;
  readonly subnetGroupName: string;
  readonly proxy: ec2.InterfaceVpcEndpoint;
  readonly download: ec2.InterfaceVpcEndpoint;
  readonly proxyhostedZone: r53.PrivateHostedZone;
  readonly downloadhostedZone: r53.PrivateHostedZone;
}


export class CrowdStrikeNLB extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: CrowdStrikeNLBProps) {
    super(scope, id);

    // create the proxy NLB
    const proxyEni = new cr.AwsCustomResource(this, 'DescribeNetworkInterfaces', {
      onCreate: {
        service: 'EC2',
        action: 'describeNetworkInterfaces',
        parameters: {
				  NetworkInterfaceIds: props.proxy.vpcEndpointNetworkInterfaceIds,
        },
        physicalResourceId: cr.PhysicalResourceId.of('proxyEni'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls(
        { resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE },
			  ),
    },
    );

    const proxyTargets = [
      new elbv2_targets.IpTarget(proxyEni.getResponseField('NetworkInterfaces.0.PrivateIpAddress')),
      new elbv2_targets.IpTarget(proxyEni.getResponseField('NetworkInterfaces.1.PrivateIpAddress')),
    ];

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
      zone: props.proxyhostedZone,
      target: r53.RecordTarget.fromAlias(new r53targets.LoadBalancerTarget(Proxyloadbalancer)),
    });


    const downloadEni = new cr.AwsCustomResource(this, 'DescribeNetworkInterfaces', {
      onCreate: {
			  service: 'EC2',
			  action: 'describeNetworkInterfaces',
			  parameters: {
          NetworkInterfaceIds: props.download.vpcEndpointNetworkInterfaceIds,
			  },
			  physicalResourceId: cr.PhysicalResourceId.of('downloadEni'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls(
			  { resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE },
      ),
		  },
    );

    const downloadtargets = [
      new elbv2_targets.IpTarget(downloadEni.getResponseField('NetworkInterfaces.0.PrivateIpAddress')),
      new elbv2_targets.IpTarget(downloadEni.getResponseField('NetworkInterfaces.1.PrivateIpAddress')),
    ];

    const downloadbalancer = new elbv2.NetworkLoadBalancer(this, 'csProxyLB', {
      vpc: props.vpc,
      vpcSubnets: { subnetGroupName: props.subnetGroupName },
      internetFacing: false,
      crossZoneEnabled: true,
    });

    const downloadListener = downloadbalancer.addListener('proxylistener', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
    });

    downloadListener.addTargets('proxyTargets', {
      port: 443,
      protocol: elbv2.Protocol.TCP,
      targets: downloadtargets,
    });

    new r53.ARecord(this, 'proxyarecord', {
      zone: props.downloadhostedZone,
      target: r53.RecordTarget.fromAlias(new r53targets.LoadBalancerTarget(Proxyloadbalancer)),
    });


  }
}