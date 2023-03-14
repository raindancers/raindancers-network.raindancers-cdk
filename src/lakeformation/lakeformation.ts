import * as cdk from 'aws-cdk-lib';
import {
  aws_s3 as s3,
  aws_iam as iam,
  aws_lakeformation as lakeformation,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';


export interface DataLakeBucketProps {
  readonly name: string;
}

export class DataLakeBucket extends constructs.Construct {

  bucket: s3.Bucket;
  constructor(scope: constructs.Construct, id: string, props: DataLakeBucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, `${props.name}datalakebucket`, {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });

    new lakeformation.CfnResource(this, `${id}`, {
      resourceArn: this.bucket.bucketArn,
      roleArn: `arn:aws:iam::${cdk.Aws.ACCOUNT_ID}:role/aws-service-role/lakeformation.amazonaws.com/AWSServiceRoleForLakeFormationDataAccess`,
      useServiceLinkedRole: true,
    });
  }
}

export class LakeFormationWorkFlowRole extends constructs.Construct {

  role: iam.Role;

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    this.role = new iam.Role(this, 'workflowRole', {
      roleName: 'workflowrole',
      description: 'Permissions to use LF Workflow feature',
      assumedBy: new iam.ServicePrincipal('lakeformation.amazonaws.com'),
    });

    //create an IAM role to work with LF-Glue workflows feature
    this.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AWSGlueServiceRole'));
    this.role.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'lakeformation:GetDataAccess',
        'lakeformation:GrantPermissions',
      ],
      resources: ['*'],
    }));
    this.role.grantPassRole(this.role);

  }
}

/**
 * This Policy gets used inside a permissions set for SSO
 */

export interface SSOLakeFormationAdministratorProps {
  readonly workFlowRole: iam.Role;
}


export class SSOLakeFormationAdministrator extends constructs.Construct {

  managedPolicy: iam.ManagedPolicy;

  constructor(scope: constructs.Construct, id:string, props: SSOLakeFormationAdministratorProps) {
    super(scope, id);

    // first create a managed Policy.

    this.managedPolicy = new iam.ManagedPolicy(this, 'LakeFormationAdministratorPolicy', {
      description: 'Lake Formation AdministratorPolicy',
      managedPolicyName: 'LakeFormationAdministratorPolicy',
    });

    this.managedPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'iam:CreateServiceLinkedRole',
      ],
      resources: ['*'],
      conditions: {
        StringEquals:
				{ 'iam:AWSServiceName': 'lakeformation.amazonaws.com' },
      },
    }));

    this.managedPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'iam:PutRolePolicy',
      ],
      resources: [`arn:aws:iam::${cdk.Aws.ACCOUNT_ID}:role/aws-service-role/lakeformation.amazonaws.com/AWSServiceRoleForLakeFormationDataAccess`],
    }));

    this.managedPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'iam:PassRole',
      ],
      resources: [
        `arn:aws:iam::${cdk.Aws.ACCOUNT_ID}:role/aws-service-role/lakeformation.amazonaws.com/AWSServiceRoleForLakeFormationDataAccess`,
        props.workFlowRole.roleArn,
      ],
    }));

    this.managedPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'ram:AcceptResourceShareInvitation',
              	'ram:RejectResourceShareInvitation',
              	'ec2:DescribeAvailabilityZones',
              	'ram:EnableSharingWithAwsOrganization',
      ],
      resources: ['*'],
    }));


  }

}

export class DatalakeUserPolicy extends constructs.Construct {

  managedPolicy: iam.ManagedPolicy;

  constructor(scope: constructs.Construct, id:string) {
	  super(scope, id);

	  // first create a managed Policy.

	  this.managedPolicy = new iam.ManagedPolicy(this, 'LakeFormationAdministratorPolicy', {
      description: 'Lake Formation UserPolicy',
      managedPolicyName: 'LakeFormationAdministratorPolicy',
	  });


	  this.managedPolicy.addStatements(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'lakeformation:GetDataAccess',
        'glue:GetDatabase',
        'glue:GetDatabases',
        'glue:GetTable',
        'glue:GetTables',
        'glue:GetTableVersions',
        'glue:SearchTables',
        'glue:UpdateTable',
        'glue:GetPartitions',
        'lakeformation:GetResourceLFTags',
        'lakeformation:ListLFTags',
        'lakeformation:GetLFTag',
        'lakeformation:SearchTablesByLFTag',
        'lakeformation:SearchDatabasesByLFTags',
      ],
      resources: ['*'],
    }));

    this.managedPolicy.addStatements(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'glue:GetTable',
          'glue:GetPartitions',
          'glue:UpdateTable',
          'lakeformation:StartTransaction',
          'lakeformation:CommitTransaction',
          'lakeformation:CancelTransaction',
          'lakeformation:ExtendTransaction',
          'lakeformation:DescribeTransaction',
          'lakeformation:ListTransactions',
          'lakeformation:GetTableObjects',
          'lakeformation:UpdateTableObjects',
          'lakeformation:DeleteObjectsOnCancel',
          'lakeformation:StartQueryPlanning',
          'lakeformation:GetQueryState',
          'lakeformation:GetQueryStatistics',
          'lakeformation:GetWorkUnits',
          'lakeformation:GetWorkUnitResults',
          'lakeformation:ListTableStorageOptimizers',
          'lakeformation:UpdateTableStorageOptimizer',
        ],
        resources: ['*'],
      }),
    );

    this.managedPolicy.addStatements(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
          'logs:PutLogEvents',
        ],
        resources: [
          `arn:aws:logs:*:${cdk.Aws.ACCOUNT_ID}:log-group:/aws-lakeformation-acceleration/compaction/logs:*`,
        ],
      }),
    );
  }
}
