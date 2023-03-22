import * as path from 'path';
import * as redshift from '@aws-cdk/aws-redshift-alpha';
import {
  aws_iam as iam,
  aws_lambda,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface RedShiftDatabaseProps{
  /**
	 * A name for the database
	 */
  readonly databaseName: string;
  /**
	 * which cluster will the database be created in.
	 */
  readonly cluster: redshift.Cluster;
}
/**
 * Create a Database in a Redshift Cluster
 */
export class RedShiftDatabase extends constructs.Construct {

  readonly databaseName: string;
  readonly cluster: redshift.Cluster;

  constructor(scope: constructs.Construct, id: string, props: RedShiftDatabaseProps) {
    super(scope, id);

    const addDatabaseLambda = new cdk.aws_lambda.Function(this, 'addDatabaseFunction', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'createdatabase.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/redshift')),
	  timeout: cdk.Duration.seconds(900),
    });

    addDatabaseLambda.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'redshift:GetClusterCredentialsWithIAM',
        'redshift-data:ExecuteStatement',
      ],
      resources: ['*'],
    }));

    new cdk.CustomResource(this, `AddDatabaseCR${props.databaseName}`, {
      resourceType: 'Custom::RedshiftDatabase',
      serviceToken: new cr.Provider(this, `AddDatabaseProvider${props.databaseName}`, {
        onEventHandler: addDatabaseLambda,
      }).serviceToken,
      properties: {
        ClusterIdentifier: props.cluster.clusterName,
        DatabaseName: props.databaseName,
      },
    });

    this.databaseName = props.databaseName,
    this.cluster = props.cluster;
  }

  public executeSQLStatement(statementName: string, sql: string): void {

    const executeSQLLambda = new cdk.aws_lambda.SingletonFunction(this, 'executeSQLFunction', {
      uuid: 'af1a295c-b69c-45bf-9bee-d9944a9da811',
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'executesql.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/redshift')),
      timeout: cdk.Duration.seconds(900),
	  });

	  executeSQLLambda.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
		  'redshift:GetClusterCredentialsWithIAM',
		  'redshift-data:ExecuteStatement',
      ],
      resources: ['*'],
	  }));

	  new cdk.CustomResource(this, `ExecuteSQL${statementName}`, {
      resourceType: 'Custom::ExecuteSQLStatment',
      serviceToken: new cr.Provider(this, `ExecuteSQL-${statementName}`, {
        onEventHandler: executeSQLLambda,
      }).serviceToken,
      properties: {
        StatementName: statementName,
        ClusterIdentifier: this.cluster.clusterName,
        DatabaseName: this.databaseName,
        Sql: sql,
      },
	  });
  }

}

