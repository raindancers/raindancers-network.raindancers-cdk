import {
  aws_ec2 as ec2,
  aws_route53 as r53,
  aws_route53_targets as targets,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import { CrowdStrikePrivateLink, CrowdStrikeCloud } from './crowdstrikeRegionInfo';


export interface CrowdStrikePrivateLinkEndpointProps {
/**
 * The EC2 Instance that will be udpated.
 */
  readonly vpc: ec2.Vpc;
  readonly crowdStrikeCloud: CrowdStrikeCloud;
  readonly subnets: ec2.SubnetSelection;
  readonly peeredwithNLB?: boolean;

}

export class CrowdStrikePrivateLinkEndpoint extends constructs.Construct {

  downloadhostedZone: string;//r53.PrivateHostedZone;
  downloadhostedZoneName: string;
  proxyhostedZone: string; //r53.PrivateHostedZone;
  proxyhostedZoneName: string;
  proxy: string; //ec2.InterfaceVpcEndpoint;
  download: string; //ec2.InterfaceVpcEndpoint;


  constructor(scope: constructs.Construct, id: string, props: CrowdStrikePrivateLinkEndpointProps) {
    super(scope, id);

    let endpoint: CrowdStrikePrivateLink;

    switch (props.crowdStrikeCloud) {
      case CrowdStrikeCloud.US1:
        endpoint = CrowdStrikePrivateLink.US1;
        break;
      case CrowdStrikeCloud.US2:
        endpoint = CrowdStrikePrivateLink.US2;
        break;
      case CrowdStrikeCloud.EU1:
        endpoint = CrowdStrikePrivateLink.EU1;
        break;
      default:
        throw new Error('InternalError ⏰');
    }

    const proxy = new ec2.InterfaceVpcEndpoint(this, 'CrowdstrikeSensorProxyEndpoint', {
      vpc: props.vpc,
      service: new ec2.InterfaceVpcEndpointService(endpoint.value.sensorProxy.vpcEndpointName),
      subnets: props.subnets,
    });

    this.proxy = proxy.vpcEndpointId;

    const download = new ec2.InterfaceVpcEndpoint(this, 'CrowdstrikeDownloadServerEndpoint', {
      vpc: props.vpc,
      service: new ec2.InterfaceVpcEndpointService(endpoint.value.downloadServer.vpcEndpointName),
      subnets: props.subnets,
    });

    this.download = download.vpcEndpointId;


    const proxyhostedZone = new r53.PrivateHostedZone(this, 'sensorproxyZone', {
      vpc: props.vpc,
      zoneName: endpoint.value.sensorProxy.dnsName,
    });

    this.proxyhostedZone = proxyhostedZone.hostedZoneId;
    this.proxyhostedZoneName = endpoint.value.sensorProxy.dnsName;

    const downloadhostedZone = new r53.PrivateHostedZone(this, 'downloadZone', {
      vpc: props.vpc,
      zoneName: endpoint.value.downloadServer.dnsName,
    });

    this.downloadhostedZone = downloadhostedZone.hostedZoneId;
    this.downloadhostedZoneName = endpoint.value.downloadServer.dnsName;

    if ( !props.peeredwithNLB) {

      new r53.ARecord(this, 'proxyarecord', {
        zone: proxyhostedZone,
        target: r53.RecordTarget.fromAlias(new targets.InterfaceVpcEndpointTarget(proxy)),
      });

      new r53.ARecord(this, 'downloadrecord', {
        zone: downloadhostedZone,
        target: r53.RecordTarget.fromAlias(new targets.InterfaceVpcEndpointTarget(download)),
      });
    }
  }
}