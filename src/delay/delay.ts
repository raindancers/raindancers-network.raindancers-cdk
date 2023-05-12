import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import {
  aws_lambda as aws_lambda,
  custom_resources as cr,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';

export class Delay extends constructs.Construct {

  delayProviderServiceToken: string;

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    const delay = new aws_lambda.Function(this, 'onevent', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'delay.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, './')),
      timeout: cdk.Duration.seconds(899),
    });

	  const delayProvider = new cr.Provider(this, 'isLocationRegisteredProvider', {
		  onEventHandler: delay,
		  logRetention: cdk.aws_logs.RetentionDays.ONE_MONTH,
	  });

	  this.delayProviderServiceToken = delayProvider.serviceToken;
  }
}