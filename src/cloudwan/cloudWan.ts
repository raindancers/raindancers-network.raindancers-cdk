import * as cdk from 'aws-cdk-lib';
import {
  aws_networkmanager as networkmanager,
  aws_dynamodb as dynamo,
  custom_resources as cr,
  aws_logs as logs,
  aws_lambda,
  aws_iam as iam,
  aws_ram as ram,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


import * as cloudWanEnum from './cloudWanEnum';
import { CloudWanCorePolicyTable } from './cloudWanPolicyTable';
import { CoreNetworkSegment } from './coreNetworkSegment';

/**
 * Create a CoreNework for a Cloudwan
 */
export class CoreNetwork extends constructs.Construct {

  /**
	 * The policyTable Lamba's Service Token
	 */
  public readonly policyTableServiceToken: string;

  /**
	 * Name of the Dynamo Table holding the policy
	 */
  public readonly policyTableName: string;
  /**
	 * THe dynamo table holding the policy
	 */
  public readonly policyTable: dynamo.Table;
  /**
	 * The corenetwork object
	 */
  public readonly cfnCoreNetwork: networkmanager.CfnCoreNetwork;

  // the corenetwork core Name
  public readonly coreName: string;
  public updateProviderToken: string = '';

  private updateDependson: cdk.CustomResource[];


  constructor(scope: constructs.Construct, id: string, props: cloudWanEnum.CoreNetworkProps) {
    super(scope, id);

    this.updateDependson = [];

    // create a core network.. do not intially give it a policy
    const coreNetwork = new networkmanager.CfnCoreNetwork(this, 'CoreNetwork', {
      globalNetworkId: props.globalNetwork.attrId,
      description: props.policyDescription,
      tags: [{ key: 'CoreNetworkName', value: props.coreName }],
		  });

    this.cfnCoreNetwork = coreNetwork;
    this.coreName = props.coreName;


    // Create a dynamodb table with a composite key to store the elements of a core network table.
    // this is created for version "2021.12" of the wan policy
    // and create the update lambda

    const policyTable = new CloudWanCorePolicyTable(this, 'PolicyTable', {
      coreName: props.coreName,
    });


    // create the coreNetworkConfiguration
    const coreNetworkConfiguration: {[k: string]: any} = {};

    coreNetworkConfiguration['asn-ranges'] = props.asnRanges;
    coreNetworkConfiguration['edge-locations'] = props.edgeLocations;
    if ( props.vpnEcmpSupport !==undefined ) {
      coreNetworkConfiguration['vpn-ecmp-support'] = props.vpnEcmpSupport;
    }
    if ( props.insideCidrBlocks !==undefined ) {
      coreNetworkConfiguration['inside-cidr-blocks'] = props.insideCidrBlocks;
    }

    // create a custom resource that will add the corenetwork configuration

    const coreNetworkCfg = new cdk.CustomResource(this, 'UpdateCoreNetworkConfiguration', {
      serviceToken: policyTable.serviceToken,
      properties: {
        policyTableName: policyTable.policyTable.tableName,
        coreNetworkConfiguration: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(coreNetworkConfiguration)),
        coreName: props.coreName,
      },
    });


    this.updateDependson.push(coreNetworkCfg);

    this.policyTableName = policyTable.policyTable.tableName;
    this.policyTableServiceToken = policyTable.serviceToken;
    this.policyTable = policyTable.policyTable;

  }

  /**
	 * Add a segment to the core network
	 * @param props properties of the segment
	 * @returns
	 */
  public addSegment(
    props: cloudWanEnum.Segment,
  ): void {

    // verify only one of deny/allow filters are set.
    if (props.denyFilter !== undefined && props.allowFilter !== undefined) {
      throw new Error('Only one of denyFilter and allowFilter can be defined');
    }

    const segment: {[k: string]: any} = {};

    segment.name = props.name;

    if ( props.description !==undefined ) {
      segment.description = props.description;
    }
    if ( props.edgeLocations !==undefined ) {
      segment['edge-locations'] = props.edgeLocations;
    }
    if ( props.isolateAttachments !==undefined ) {
      segment['isolate-attachments'] = props.isolateAttachments;
    }
    if ( props.requireAttachmentAcceptance !==undefined ) {
      segment['require-attachment-acceptance'] = props.requireAttachmentAcceptance;
    }
    if ( props.denyFilter !==undefined ) {
      segment['deny-filter'] = props.denyFilter;
    }
    if ( props.allowFilter !==undefined ) {
      segment['allow-filter'] = props.allowFilter;
    }


    const addsegment = new cdk.CustomResource(this, `CloudwanSegment${props.name}`, {
      serviceToken: this.policyTableServiceToken,
      properties: {
        segment: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(segment)),
        policyTableName: this.policyTableName,
      },
    });


    this.updateDependson.push(addsegment);

    new CoreNetworkSegment(this, `CoreNetworkSegment${props.name}`, {
      segmentName: props.name,
      policyTableServiceToken: this.policyTableServiceToken,
      updateDependsOn: this.updateDependson,
    });

  }
  /**
	 * Create a CoreNetwork Sharing
	 * @param props Share properties
	 */
  public share (props: cloudWanEnum.CoreNetworkShare) : void {

    new ram.CfnResourceShare(this, 'ShareNetworktoOrg', {
      name: this.node.tryGetContext('coreNetworkName'),
      allowExternalPrincipals: props.allowExternalPrincipals,
      principals: props.principals,
      resourceArns: [this.cfnCoreNetwork.attrCoreNetworkArn],
      tags: props.tags,
    });

  }

  /**
	 * Update the corewan policy after actions, segments are added
	 */
  public updatePolicy (): void {

    // this updates the policy
    const onEvent = new aws_lambda.Function(this, 'UpdateCoreNetworkLambda', {
      environment: { coreNetworkName: this.coreName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'updatepolicy.on_event',
      code: aws_lambda.Code.fromAsset('./lambda/'),
      timeout: cdk.Duration.seconds(899),
      //functionName: 'updatecorelambda'//cdk.PhysicalName.GENERATE_IF_NEEDED
    });

    onEvent.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'networkmanager:putCoreNetworkPolicy',
          'networkmanager:executeCoreNetworkChangeSet',
          '*',
        ],
      }),
    );
    // let the lambda have access to the dynamo table.
    this.policyTable.grantFullAccess(onEvent);


    const updateProvider = new cr.Provider(this, 'UpdateProvider', {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.SEVEN_YEARS,
      providerFunctionName: cdk.PhysicalName.GENERATE_IF_NEEDED,
    });


    this.updateProviderToken = updateProvider.serviceToken;


    const updatePolicy = new cdk.CustomResource(this, 'UpdatePolicy', {
      serviceToken: updateProvider.serviceToken,
      properties: {
        TableName: this.policyTable.tableName,
        coreNetworkId: this.cfnCoreNetwork.attrCoreNetworkId,
        random: new Date().toISOString(),
      },
    });
    // we need to force this to not happen till all the updates are done.
    this.updateDependson.forEach((resource) => {
      updatePolicy.node.addDependency(resource);
    });


    // this checks that the policy execution is finished
    // the onEvent will return immediately..
    // we have to do this as two functions as we need an attribute from the first function
    // to check if the policy has executed

    const waittofinishOnEvent = new aws_lambda.Function(this, 'WaittofinishOnEvent', {
      environment: { coreNetworkName: this.coreName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'checkpolicycomplete.on_event',
      code: aws_lambda.Code.fromAsset('./lambda/'),
      timeout: cdk.Duration.seconds(899),
      functionName: 'cloudwanPolicyExecutewaittofinishonevent', //cdk.PhysicalName.GENERATE_IF_NEEDED
    });


    const waittofinishIsComplete = new aws_lambda.Function(this, 'WaittofinishisComplete', {
      environment: { coreNetworkName: this.coreName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'checkpolicycomplete.is_complete',
      code: aws_lambda.Code.fromAsset('./lambda/'),
      timeout: cdk.Duration.seconds(899),
      functionName: 'cloudwanPolicyExecutewaitiscomplete', //cdk.PhysicalName.GENERATE_IF_NEEDED
    });


    waittofinishIsComplete.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'networkmanager:getCoreNetworkChangeEvents',
        ],
      }),
    );

    //const waittoFinishProvider =

    new cr.Provider(this, 'WaittoFinishProvider', {
      onEventHandler: waittofinishOnEvent,
      isCompleteHandler: waittofinishIsComplete,
      totalTimeout: cdk.Duration.minutes(119),	// note this can be longer than the lambda timeout
      queryInterval: cdk.Duration.seconds(20),
      logRetention: logs.RetentionDays.SEVEN_YEARS,
      providerFunctionName: cdk.PhysicalName.GENERATE_IF_NEEDED,
    });


    // TO DO.. Wait for finish does not work as expected.
    // lambda versions.


    // const waittofin = new cdk.CustomResource(this, 'WaittoFin', {
    // 	serviceToken: waittoFinishProvider.serviceToken,
    // 	properties: {
    // 		policyVersionId: updatePolicy.getAtt('PolicyVersionId'),
    // 		coreNetworkId: this.CoreNetwork.attrCoreNetworkId,
    // 		random: uuid()
    // 	}
    // })

    //waittofin.node.addDependency(updatePolicy)

  }

}
