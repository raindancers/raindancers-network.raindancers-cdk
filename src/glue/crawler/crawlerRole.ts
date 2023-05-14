import {
  aws_iam as iam,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export class CrawlerRole extends constructs.Construct {

  role: iam.Role;

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    const crawlerRole = new iam.Role(this, 'crawlerRole', {
	  assumedBy: new iam.ServicePrincipal('glue.amazonaws.com'),
    });

    // add additonal permissions as required.
    crawlerRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSGlueServiceRole'));
    crawlerRole.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          'lakeformation:GetDataAccess',
        ],
        effect: iam.Effect.ALLOW,
        resources: ['*'],
      }),
    );

    this.role = crawlerRole;
  }
}