import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import {
  aws_lambda,
  aws_iam as iam,
  aws_logs as logs,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


export class EnterpriseVpcLambda extends constructs.Construct {
  /**
	 * A custom resource to use for adding routes
	 */
  public readonly addRoutesProvider: cr.Provider;
  /**
	 * A check to see if transitgateway is ready to route to.
	 */
  public readonly tgWaiterProvider: cr.Provider;


  /**
	 *
	 * @param scope
	 * @param id
	 * @param props
	 */
  constructor(scope: constructs.Construct, id: string) {
	  super(scope, id);

	  // add  routes lambda
    const addRoutesLambda = new aws_lambda.SingletonFunction(this, 'lookupIdLambda-evpc', {
      uuid: '00001122AA',
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'addRoutes.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
    });

    addRoutesLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'ec2:CreateRoute',
          'ec2:DeleteRoute',
          'ec2:ReplaceRoute',
        ],
      }),
    );

    this.addRoutesProvider = new cr.Provider(this, 'NetworkManagerProvider', {
      onEventHandler: addRoutesLambda,
    });

    // transit gateway is ready

    const tgwaittofinishOnEvent = new aws_lambda.Function(this, 'tgReadyOnevent', {

      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'checktgready.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
      timeout: cdk.Duration.seconds(899),
      //functionName: 'cloudwanPolicyExecutewaittofinishonevent', //cdk.PhysicalName.GENERATE_IF_NEEDED
    });


    const tgwaittofinishIsComplete = new aws_lambda.Function(this, 'tgReadyisComplete', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'checktgready.is_complete',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
      timeout: cdk.Duration.seconds(899),
      //functionName: 'cloudwanPolicyExecutewaitiscomplete', //cdk.PhysicalName.GENERATE_IF_NEEDED
    });

    tgwaittofinishIsComplete.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'ec2:DescribeTransitGateway*',
        ],
      }),
    );

    this.tgWaiterProvider = new cr.Provider(this, 'WaittoFinishProvider', {
      onEventHandler: tgwaittofinishOnEvent,
      isCompleteHandler: tgwaittofinishIsComplete,
      totalTimeout: cdk.Duration.minutes(119),	// note this can be longer than the lambda timeout
      queryInterval: cdk.Duration.seconds(20),
      logRetention: logs.RetentionDays.ONE_MONTH,
      providerFunctionName: cdk.PhysicalName.GENERATE_IF_NEEDED,
    });
  }
}