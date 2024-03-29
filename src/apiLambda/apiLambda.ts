import * as cdk from 'aws-cdk-lib';
import {
  aws_logs as logs,
  aws_s3 as s3,
  aws_lambda,
  aws_iam as iam,
  aws_secretsmanager as secretsmanager,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface SecretNames {
  readonly name: string;
  readonly environment: cdk.Environment;
  readonly secretName: string;
}

export interface PythonApiIngestToS3Props {
  readonly codeSource: string;
  readonly handler: string;
  readonly ingestBucket: s3.Bucket;
  readonly secrets?: SecretNames[];
  readonly architecture?: aws_lambda.Architecture | undefined;
  readonly runtime?: aws_lambda.Runtime | undefined;
  readonly envVars?: {[key: string]: string} | undefined;
  readonly timeOut?: cdk.Duration | undefined;
  readonly memorySize?: number | undefined;
  readonly retryAttempts?: number | undefined;
  readonly deadLetterQueueEnabled?: boolean | undefined;
}

export class PythonApiIngestToS3 extends constructs.Construct {

  function: aws_lambda.Function;

  constructor(scope: constructs.Construct, id: string, props: PythonApiIngestToS3Props) {
    super(scope, id);

    const lambdaExecutionRole: iam.Role = new iam.Role(this, 'LambdaExecutionRole', {
      roleName: `${id}-lambda-execution-role`,
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });

    //note the inclusion of 'service role'.
    lambdaExecutionRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
    );

    // this potentially too permissive.
    lambdaExecutionRole.addToPolicy(new iam.PolicyStatement(
      {
        actions: ['kms:Decrypt'],
        effect: iam.Effect.ALLOW,
        resources: ['*'],
      },
    ));


    this.function = new aws_lambda.Function(this, 'Function', {
      role: lambdaExecutionRole,
      code: aws_lambda.Code.fromAsset(
        props.codeSource,
        {
          bundling: {
            image: aws_lambda.Runtime.PYTHON_3_10.bundlingImage,
            command: [
              'bash',
              '-c',
              'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
            ],
          },
        },
	  ),
      runtime: props.runtime ?? aws_lambda.Runtime.PYTHON_3_10,
      handler: props.handler,
      architecture: props.architecture ?? aws_lambda.Architecture.X86_64,
      deadLetterQueueEnabled: props.deadLetterQueueEnabled ?? true,
      environment: props.envVars,
      logRetention: logs.RetentionDays.TWO_YEARS,
      memorySize: props.memorySize ?? 512,
      retryAttempts: props.retryAttempts ?? 2,
      timeout: props.timeOut ?? cdk.Duration.seconds(300),
    });

    if (props.secrets) {
      props.secrets.forEach((secret) => {
        const partialArn :string = 'arn:aws:secretsmanager:' + secret.environment.region + ':' + secret.environment.account + ':secret:' + secret.secretName;
        console.log('partialArn: ' + partialArn);
        const secretFromPartialArn = secretsmanager.Secret.fromSecretPartialArn(this, `SecretFromPartialArn-${secret.secretName}`, partialArn);
        secretFromPartialArn.grantRead(this.function);

      });
    };

    props.ingestBucket.grantReadWrite(this.function);

  }
}