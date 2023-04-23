import * as path from 'path';
import {
  custom_resources as cr,
  aws_logs as logs,
  aws_lambda,
  aws_iam as iam,
} from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface EnterpriseZoneHelpersProps {
  zoneId: string;
  region: string;
  searchTag: cdk.Tag;
}

export class EnterpriseZoneHelpers extends constructs.Construct {

  customResource: cdk.CustomResource;

  constructor(
    scope: constructs.Construct,
    id: string,
    props: EnterpriseZoneHelpersProps,
  ) {
    super(scope, id);

    const associateCentralVpcwithZone = new aws_lambda.SingletonFunction(
      this,
      'associatezoneLambda',
      {
        uuid: 'FAAD00440',
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        logRetention: logs.RetentionDays.ONE_MONTH,
        handler: 'associateCentralVPC.on_event',
        code: aws_lambda.Code.fromAsset(
          path.join(__dirname, '../../lambda/dns'),
        ),
        timeout: cdk.Duration.seconds(899),
      },
    );

    associateCentralVpcwithZone.addToRolePolicy(
      new iam.PolicyStatement({
        actions: [
          'sts:AssumeRole',
          'route53:AssociateVpcWithHostedZone',
          'route53:DisassociateVpcFromHostedZone',
          'ec2:DescribeVpcs',
        ],
        effect: iam.Effect.ALLOW,
        resources: ['*'],
      }),
    );

    this.customResource = new cdk.CustomResource(
      this,
      'associateVPCcustomResources',
      {
        resourceType: 'Custom::AssociateInternalZone',
        properties: {
          ZoneId: props.zoneId, // this is the zone
          Region: props.region,
          SearchTagKey: props.searchTag.key,
		  SearchTagValue: props.searchTag.value,
        },
        serviceToken: new cr.Provider(this, 'associateProvider', {
          onEventHandler: associateCentralVpcwithZone,
        }).serviceToken,
      },
    );
  }
}
