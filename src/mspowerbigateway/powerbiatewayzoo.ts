import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_route53 as r53,
  aws_secretsmanager as secretsmanager,
  aws_s3 as s3,
  aws_s3_deployment as s3_deployment,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';
import { PowerBiGateway } from './powerbigateway';

export interface PowerBIGateway {
  readonly hostname: string;
  readonly instancetype: ec2.InstanceType;
  readonly cfgSecretArn: string;
}


export interface PowerBIGatewayZooProps extends cdk.StackProps{
  readonly vpc: ec2.Vpc | ec2.IVpc;
  readonly subnet: ec2.SubnetSelection;
  readonly gateways: PowerBIGateway[];
  readonly r53zoneID: string;
  readonly deployAssetsPath: string;
  readonly initscript: string;
}

export class PowerBIGatewayZoo extends cdk.Stack {

  constructor(scope: constructs.Construct, id: string, props: PowerBIGatewayZooProps) {
    super(scope, id, props);

    const deployBucket = new s3.Bucket(this, 'deploybucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: true,
      //serverAccessLogsBucket:
      //serverAccessLogsPrefix
    });

    new s3_deployment.BucketDeployment(this, 'CopyScript', {
      sources: [
		  s3_deployment.Source.asset(props.deployAssetsPath),
      ],
      destinationBucket: deployBucket,
	  });

    const zone = r53.PrivateHostedZone.fromPrivateHostedZoneId(this, 'hostedzone', props.r53zoneID);


    props.gateways.forEach((gateway) => {

      new PowerBiGateway(this, `powerbiGateway${gateway.hostname}`, {
        vpc: props.vpc,
        subnet: props.subnet,
        hostname: gateway.hostname,
        instanceType: gateway.instancetype,
        machineImage: new ec2.WindowsImage(ec2.WindowsVersion.WINDOWS_SERVER_2022_ENGLISH_FULL_BASE),
        powerBIgatewaySetupScript: {
          bucket: deployBucket,
      			bucketKey: 'setupGateway.ps1',
        },
        cfgSecret: secretsmanager.Secret.fromSecretCompleteArn(
          this,
          'thingsecrect',
          gateway.cfgSecretArn,
        ),
        zone: zone,
        initscript: props.initscript,

      });

    });
  }
}
