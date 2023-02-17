
import * as path from 'path';
import {
  custom_resources as cr,
  aws_lambda,
  aws_dynamodb as dynamodb,
  aws_backup as backup,
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


export class StatefulRuleDatabase extends constructs.Construct {

  public readonly crudServiceToken: string;
  public readonly policyTable: dynamodb.Table;

  constructor(scope: constructs.Construct, id: string) {
    super( scope, id);

    const policyTable = new dynamodb.Table(this, 'PolicyTable', {
      partitionKey: {
        name: 'UUID',
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'Type',
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      tableClass: dynamodb.TableClass.STANDARD_INFREQUENT_ACCESS,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      pointInTimeRecovery: true,
  	});

    // this key should only be set for debugging purposes.. protecting the table is generally
    // something required by policy.
    if (!(this.node.tryGetContext('disableDynamobackup') == true)) {
      // backup the database just in case
      backup.BackupPlan.dailyWeeklyMonthly5YearRetention(this, 'statefulruleDatabase').addSelection(
        'Selection',
        {
          resources: [
            backup.BackupResource.fromDynamoDbTable(policyTable),
          ],
        },
      );
    }

    // create the lambda
    const onEvent = new aws_lambda.Function(this, 'putItems', {
      environment: { policyTableName: policyTable.tableName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'putrules.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/firewall')),
      timeout: cdk.Duration.seconds(300),
    });

    policyTable.grantFullAccess(onEvent);

    const databaseCRUDProvider = new cr.Provider(this, 'CRUDProvider', {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.SEVEN_YEARS,
    });

    this.policyTable = policyTable,
    this.crudServiceToken = databaseCRUDProvider.serviceToken;
  }
}
