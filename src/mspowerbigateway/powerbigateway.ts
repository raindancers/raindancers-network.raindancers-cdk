import { readFileSync } from 'fs';
import {
  aws_ec2 as ec2,
  aws_secretsmanager as secretmanager,
  aws_iam as iam,
  aws_route53 as r53,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface PowerBiGatewayProps {
  readonly vpc: ec2.Vpc | ec2.IVpc;
  readonly subnet: ec2.SubnetSelection;
  readonly hostname: string;
  readonly zone: r53.PrivateHostedZone | r53.IPrivateHostedZone;
  readonly instanceType: ec2.InstanceType;
  readonly machineImage: ec2.WindowsImage;
  readonly powerBIgatewaySetupScript: ec2.S3DownloadOptions;
  readonly cfgSecret: secretmanager.Secret | secretmanager.ISecret;
  readonly initscript: string;
}

/**
** Creates an Instance of a Power BI Gateway
*/
export class PowerBiGateway extends constructs.Construct {

  private readonly instanceSecurityGroup: ec2.SecurityGroup;
  public readonly instance: ec2.Instance;

  	constructor(scope: constructs.Construct, id: string, props: PowerBiGatewayProps) {
    	super(scope, id);

    this.instanceSecurityGroup = new ec2.SecurityGroup(this, 'instancesg', {
      vpc: props.vpc,
      allowAllOutbound: false,
    });

    // create this instance
    this.instance = new ec2.Instance(this, 'powerBiGateway', {
      instanceType: props.instanceType,
      machineImage: props.machineImage,
      vpc: props.vpc,
      vpcSubnets: props.subnet,
      allowAllOutbound: false,
      detailedMonitoring: true,
      instanceName: props.hostname,
      requireImdsv2: true,

    });
    // tag this instance so it can be patched by SSM
    cdk.Tags.of(this.instance).add('PatchGroup', 'Windows2022');

    //allow this instance outbound access on tcp443
    //should be no inbound connections to this instance.
    // allow outbound on 443
    this.instanceSecurityGroup.addEgressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(443),
      'allow tcp 443 outbound',
    );
    // manage this via SSM
    this.instance.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));

    // allow it access to read the cfg
    props.cfgSecret.grantRead(this.instance);

    // user data
    this.instance.addUserData(readFileSync(props.initscript, 'utf-8'));
    this.instance.userData.addS3DownloadCommand(props.powerBIgatewaySetupScript);
    this.instance.userData.addCommands('& "C:\\Program Files\\PowerShell\\7\\pwsh" "C:\\temp\\setupGateway.ps1"' + ` "${props.cfgSecret.secretArn}"`);

    // add a CNAME in the zone.

  }

  	public addEgressRule(peer: ec2.IPeer, connection: ec2.Port, description?: string): void {

    this.instanceSecurityGroup.addEgressRule(peer, connection, description);
 	}
}

