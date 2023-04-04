import * as path from 'path';
import {
  aws_dynamodb as dynamo,
  custom_resources as cr,
  aws_logs as logs,
  aws_lambda,
  aws_backup as backup,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


/** Properties for the Createing the CoreWan Policy Table*/
export interface PolicyTableProps {
  /**
	 * the name of the core
	 */
  coreName: string;
  /**
   * By default a Backup Vault is created, for the dynamo table.
   * However for Lab/test situations that results in left over resources in a destroy
   */
  noTableBackup?: boolean | undefined;
}

/**
 * Create a DynamoDB table and associated lambdas to contain the objects that are contained in the Cloudwan Core Network.
 * Do not call this class directly, it is called by CoreNetwork
 */
export class CloudWanCorePolicyTable extends constructs.Construct {

  public readonly serviceToken: string;
  public readonly policyTable: dynamo.Table;

  constructor(scope: constructs.Construct, id: string, props: PolicyTableProps) {
    super(scope, id);


    const policyTable = new dynamo.Table(this, 'PolicyTable', {
      tableName: `${props.coreName}corenetworkpolicy`,
      partitionKey: {
        name: 'Name',
        type: dynamo.AttributeType.STRING,
      },
      sortKey: {
        name: 'Type',
        type: dynamo.AttributeType.STRING,
      },
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
      tableClass: dynamo.TableClass.STANDARD_INFREQUENT_ACCESS,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      pointInTimeRecovery: true,

    });

    // Create a backup table unless it has been deliberately opted-out
    // t
    if (!(props.noTableBackup ?? true === true)) {
      // create a back up for the Policy Table.
      backup.BackupPlan.dailyWeeklyMonthly5YearRetention(this, 'policytablebackup').addSelection(
        'Selection',
        {
          resources: [
            backup.BackupResource.fromDynamoDbTable(policyTable),
          ],
        },
      );
    };

    // create the lambda
    const onEvent = new aws_lambda.Function(this, 'putItems', {
      environment: { policyTableName: policyTable.tableName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'putitems.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
    });


    // let the lambda have access to the dynamo table.
    policyTable.grantFullAccess(onEvent);

    const updateProvider = new cr.Provider(this, 'UpdateProvider', {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.SEVEN_YEARS,
    });

    this.policyTable = policyTable;
    this.serviceToken = updateProvider.serviceToken;
  }
}