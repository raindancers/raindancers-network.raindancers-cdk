import * as path from 'path';
import {
  aws_route53 as r53,
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_logs as logs,
  aws_lambda,
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';


import * as constructs from 'constructs';

export interface RemoteVpc {
  readonly vpcId: string;
  readonly vpcRegion: string;
}

export interface CentralAccount {
  readonly accountId: string;
  readonly roleArn: string;
}

export interface EnterpriseZoneProps {
  readonly enterpriseDomainName: string;
  readonly localVpc: ec2.Vpc;
  readonly remoteVpc: RemoteVpc[];
  readonly centralAccount: CentralAccount;
}

/**
 * create forwarding rules and associate them with a vpc.
 */
export class EnterpriseZone extends constructs.Construct {

  public readonly privateZone: r53.PrivateHostedZone;

  constructor(scope: constructs.Construct, id: string, props: EnterpriseZoneProps) {
	  super(scope, id);

    // create a private zone.
    this.privateZone = new r53.PrivateHostedZone(this, 'privatezone', {
      zoneName: props.enterpriseDomainName,
      vpc: props.localVpc,
    });

    props.remoteVpc.forEach((remoteVpc) => {
      // create an association authorisization tp a
      //aws route53 create-vpc-association-authorization --hosted-zone-id <hosted-zone-id> --vpc VPCRegion=<region>,VPCId=<vpc-id> --region us-east-1
      const createAssn = new cr.AwsCustomResource(this, `createR53Assn${remoteVpc.vpcId}`, {
        onCreate: {
          service: 'Route53',
          action: 'createVPCAssociationAuthorization',
          parameters: {
            HostedZoneId: this.privateZone.hostedZoneId,
            VPC: {
              VPCId: remoteVpc.vpcId,
              VPCRegion: remoteVpc.vpcRegion,
            },
          },
          physicalResourceId: cr.PhysicalResourceId.of(props.enterpriseDomainName),
        },
        onDelete: {
          service: 'Route53',
          action: 'deleteVPCAssociationAuthorization',
          parameters: {
            HostedZoneId: this.privateZone.hostedZoneId,
            VPC: {
              VPCId: remoteVpc.vpcId,
              VPCRegion: remoteVpc.vpcRegion,
            },
          },
        },
        logRetention: logs.RetentionDays.ONE_DAY,
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });


      const associateCentralVpcwithZone = new aws_lambda.Function(this, `${remoteVpc.vpcId}associateLambda`, {
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        logRetention: logs.RetentionDays.ONE_MONTH,
        handler: 'associateCentralVPC.on_event',
        code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/dns')),
        timeout: cdk.Duration.seconds(899),
      });

      // this lambda will assume a role in the central account, so it does not need any local permissions
      associateCentralVpcwithZone.addToRolePolicy(
        new iam.PolicyStatement({
          actions: ['sts:AssumeRole'],
          effect: iam.Effect.ALLOW,
          resources: [props.centralAccount.roleArn],
        }),
      );

      const associateVPCCustomResources = new cdk.CustomResource(this, `${remoteVpc.vpcId}associateVPCcustomResources`, {
        resourceType: 'Custom::AssociateInternalZone',
        properties: {
          ZoneId: this.privateZone.hostedZoneId, // this is the zone
          VPCId: remoteVpc.vpcId,
          VPCRegion: remoteVpc.vpcRegion,
          CentralAccountRole: props.centralAccount.roleArn,
        },
        serviceToken: new cr.Provider(this, `${remoteVpc.vpcId}associateProvider`, {
          onEventHandler: associateCentralVpcwithZone,
        }).serviceToken,
      });

      associateVPCCustomResources.node.addDependency(createAssn);
    });
  }
}

export interface CentralAccountAssnRoleProps {
  readonly vpc: ec2.Vpc;
  readonly orgId: string;
}

export class CentralAccountAssnRole extends constructs.Construct {

  public readonly assnRole: iam.Role;

  constructor(scope: constructs.Construct, id: string, props: CentralAccountAssnRoleProps) {
	  super(scope, id);

    // create the role

    this.assnRole = new iam.Role(this, 'r53assnrole', {
      assumedBy: new iam.OrganizationPrincipal(props.orgId),
      description: 'Role is assumed by lambdas in accounts to associate their zone',
      roleName: 'r53assn',
      externalIds: ['R53Assn'],
    });


    // add permissions
    this.assnRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'route53:DisassociateVPCFromHostedZone',
          'route53:AssociateVPCWithHostedZone',
          'ec2:DescribeVpcs',
        ],
        resources: ['*'],
      }),
    );

    new cdk.CfnOutput(this, 'R53RouteAssnRole', {
      value: this.assnRole.roleArn,
    });

  }

}