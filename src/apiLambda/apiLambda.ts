import * as cdk from 'aws-cdk-lib';
import {
  aws_logs as logs,
  aws_s3 as s3,
  aws_lambda,
  aws_iam,
  aws_secretsmanager as secretsmanager,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface PythonApiIngestToS3Props {
  readonly codeSource: string;
  readonly handler: string;
  readonly ingestBucket: s3.Bucket;
  readonly secrets?: secretsmanager.Secret[] | undefined;
  readonly runtime?: aws_lambda.Runtime | undefined;
  readonly envVars?: {[key: string]: string} | undefined;
}

export class PythonApiIngestToS3 extends constructs.Construct {

  function: aws_lambda.Function;

  constructor(scope: constructs.Construct, id: string, props: PythonApiIngestToS3Props) {
    super(scope, id);

    const lambdaExecutionRole: aws_iam.Role = new aws_iam.Role(this, 'LambdaExecutionRole', {
      roleName: `${id}-lambda-execution-role`,
      assumedBy: new aws_iam.ServicePrincipal('lambda.amazonaws.com'),
    });

    lambdaExecutionRole.addManagedPolicy(
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambdaBasicExecutionRole'),
    );

    this.function = new aws_lambda.Function(this, 'Function', {
      role: lambdaExecutionRole,
      code: aws_lambda.Code.fromAsset(
        props.codeSource,
        {
          bundling: {
            image: aws_lambda.Runtime.PYTHON_3_9.bundlingImage,
            command: [
              'bash',
              '-c',
              'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
            ],
          },
        },
	  ),
      runtime: props.runtime ?? aws_lambda.Runtime.PYTHON_3_9,
      handler: props.handler,
      architecture: aws_lambda.Architecture.ARM_64,
      deadLetterQueueEnabled: true,
	  environment: props.envVars,
      logRetention: logs.RetentionDays.TWO_YEARS,
      memorySize: 512,
      retryAttempts: 2,
      timeout: cdk.Duration.seconds(300),
    });

    props.ingestBucket.grantReadWrite(this.function);

    if (props.secrets) {
      for (const secret of props.secrets) {
        secret.grantRead(this.function);
      }
    }
  }
}