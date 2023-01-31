import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


import * as cloudWanEnum from './cloudWanEnum';

/**
 * Create a Network Segment in a core network
 */

export class CoreNetworkSegment extends constructs.Construct {

  /** the name for the segment */
  public readonly segmentName: string;

  /** Service token for  */
  public readonly policyTableServiceToken: string;

  /** resources which update depends on */
  private updateDependsOn: cdk.CustomResource[];


  constructor(scope: constructs.Construct, id: string, props: cloudWanEnum.ICoreNetworkSegmentProps) {
    super(scope, id);

    this.updateDependsOn = props.updateDependsOn;
    this.segmentName = props.segmentName;
    this.policyTableServiceToken = props.policyTableServiceToken;
  }

  public addSimpleShareAction(props: cloudWanEnum.SimpleShareActionProps): void {

    if (typeof props.shareWith === 'string') {
      if (!(props.shareWith === '*')) {
        throw new Error('Only * can be provided as a string');
      }
    }

    const segmentAction: {[k: string]: any} = {};

    segmentAction.description = props.description;
    segmentAction.action = cloudWanEnum.SegmentActionType.SHARE,
    segmentAction.mode = cloudWanEnum.SegmentActionMode.ATTACHMENT_ROUTE,
    segmentAction.segment = this.segmentName;

    if (props.shareWith === '*') {
      segmentAction['share-with'] = props.shareWith;
    } else {
      let segments: string[] = [];
      props.shareWith.forEach((segment) => {
        segments.push(segment.segmentName);
      });

      segmentAction['share-with'] = segments;
    }

    console.log('*** segment action ***');
    console.log(segmentAction);

    const segmentaction = new cdk.CustomResource(this, `CloudwanSegmentAction${this.segmentName}`, {
      serviceToken: this.policyTableServiceToken,
      properties: {
        // the properties are base64 encoded, so the types make it into the lambda,
        // the customresource otherwise makes everything a string
        segmentAction: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(segmentAction)),
      },
    });

    this.updateDependsOn.push(segmentaction);

  }

  // commonservices.addSegmentAction({
  //   description: 'sharetoall',
  //   action: CloudWan.SegmentActionType.SHARE,
  //   mode: CloudWan.SegmentActionMode.ATTACHMENT_ROUTE,
  //   shareWith: '*',
  // });


  /**
	 * Add an Action to the Segment, ( Share or Route )
	 * @param props segment action
	 */
  public addSegmentAction(props: cloudWanEnum.SegmentAction): void {

    const segmentAction: {[k: string]: any} = {};

    segmentAction.description = props.description;
    segmentAction.action = props.action;
    segmentAction.segment = this.segmentName;

    if (typeof props.shareWith === 'string') {
      if (!(props.shareWith === '*')) {
        throw new Error('Only * can be provided as a string');
      }
    }


    if ( props.action === cloudWanEnum.SegmentActionType.SHARE ) {
      if (props.shareWith === undefined) {
        throw Error ('shareWith must be defined for a share action');
      }
      segmentAction.mode = props.mode;
      segmentAction['share-with'] = props.shareWith;

      if (props.except === undefined) {
        segmentAction.except = props.except;
      }
    }


    if ( props.action === cloudWanEnum.SegmentActionType.CREATE_ROUTE ) {

      if ( props.destinationCidrBlocks === undefined || props.destinations === undefined ) {
        throw new Error('Both destinationCidrBlock and destinations are requried for a create-route action');
      }

      segmentAction['destination-cidr-blocks'] = props.destinationCidrBlocks;
      segmentAction.destinations = props.destinations;
    }

    console.log('*** segment action ***');
    console.log(segmentAction);

    const segmentaction = new cdk.CustomResource(this, `CloudwanSegmentAction${this.segmentName}`, {
      serviceToken: this.policyTableServiceToken,
      properties: {
        // the properties are base64 encoded, so the types make it into the lambda,
        // the customresource otherwise makes everything a string
        segmentAction: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(segmentAction)),
      },
    });

    this.updateDependsOn.push(segmentaction);
  }


  public addSimpleAttachmentPolicy(
    props: cloudWanEnum.SimpleAttachmentPolicyProps,
  ): void {
    const attachmentPolicy: {[k: string]: any} = {};

    attachmentPolicy['rule-number'] = Number(props.ruleNumber);
    attachmentPolicy.conditions = [
      {
        type: cloudWanEnum.AttachmentCondition.TAG_VALUE,
        key: 'NetworkSegment',
        value: this.segmentName,
        operator: cloudWanEnum.Operators.EQUALS,
      },
    ];

    if (props.account) {
      attachmentPolicy.conditions.push(
        {
          type: cloudWanEnum.AttachmentCondition.ACCOUNT_ID,
          value: props.account,
          operator: cloudWanEnum.Operators.EQUALS,
        },
      );

      attachmentPolicy['condition-logic'] = cloudWanEnum.ConditionLogic.AND;

    }

    attachmentPolicy.action = {
      associationMethod: cloudWanEnum.AssociationMethod.CONSTANT,
      segment: this.segmentName,
    };

    const segmentpolicy = new cdk.CustomResource(this, `AttachmentPolicy${props.ruleNumber}`, {
      serviceToken: this.policyTableServiceToken,
      properties: {
        attachmentPolicy: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(attachmentPolicy)),
      },
    });

    this.updateDependsOn?.push(segmentpolicy);
  }


  /**
	 * Add an AttachmentPolicy to a segment
	 * @param props An attachment policy
	 */
  public addAttachmentPolicy(
    props: cloudWanEnum.AttachmentPolicy,
  ): void {

    const attachmentPolicy: {[k: string]: any} = {};

    // check construction of policy
    if (props.conditions.length > 1 && props.conditionLogic === undefined) {
      throw Error ('conditionLogic must be set when there is more than 1 condition');
    }

    attachmentPolicy['rule-number'] = Number(props.ruleNumber);
    attachmentPolicy.conditions = props.conditions;


    //deal to key naming issues.
    if ('associationMethod' in props.action) {
      let localAction: {[k: string]: any} = {};
      localAction.segment = props.action.segment;
      localAction['association-method'] = props.action.associationMethod;
      attachmentPolicy.action = localAction;
    } else {
      attachmentPolicy.action = props.action;
    }

    if (props.conditionLogic !== undefined) {
      attachmentPolicy['condition-logic'] = props.conditionLogic;
    }

    if (props.description !== undefined) {
      attachmentPolicy.description = props.description;
    }


    const segmentpolicy = new cdk.CustomResource(this, `AttachmentPolicy${props.ruleNumber}`, {
      serviceToken: this.policyTableServiceToken,
      properties: {
        attachmentPolicy: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(attachmentPolicy)),
      },
    });

    this.updateDependsOn?.push(segmentpolicy);
  }
}