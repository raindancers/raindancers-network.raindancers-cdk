import {
  aws_networkmanager as networkmanager,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';


/**
 * Segment Action Type
 */
export enum SegmentActionType {
  SHARE = 'share',
  CREATE_ROUTE = 'create-route',
}

/**
 * Segment Action Mode
 */
export enum SegmentActionMode {
  ATTACHMENT_ROUTE = 'attachment-route'
}

/**
 * Conditon Logic
 */

export enum ConditionLogic {
  AND = 'and',
  OR = 'or'
}

/** Association Methods */
export enum AssociationMethod {
  CONSTANT = 'constant',
  TAG = 'tag'
}

/**
 * Attachment Conditions
 */
export enum AttachmentCondition {
  ANY = 'any',
  RESOURCE_ID = 'resource-id',
  ACCOUNT_ID = 'account-id',
  REGION = 'region',
  ATTACHMENT_TYPE = 'attachment-type',
  TAG_EXISTS = 'tag-exists',
  TAG_VALUE = 'tag-value'
}

/**
* Operatior COnditons for Attachments
*/
export enum Operators {
  EQUALS = 'equals',
  NOTEQUALS = 'not-equals',
  CONTAINS = 'contains',
  BEGINS_WITH = 'begins-with'
}

/**
 * Attachment Policy Action
 */
export interface AttachmentPolicyAction
{
  /**
	 * The Assocation Method
	 */
  readonly associationMethod: AssociationMethod;

  /**
	 * The Segment this applies to
	 */
  readonly segment?: string;
}

/**
 * Segment Properties
 */
export interface Segment {
  /**
	 * Name of the Segment
	 */
  readonly name: string;
  /**
	 * A description of the of the segement
	 */
  readonly description?: string;

  /**
	 * A list of edge locations where the segement will be avaialble. Not that the
	 * locations must also be included in the core network edge ( CNE )
	 */
  readonly edgeLocations?: object[];
  /**
	 * Set true if attached VPCS are isolated from each other
	 */
  readonly isolateAttachments?: boolean;
  /**
	 * Set true if the attachment needs approval for connection. Currently not supported
	 * and requires an automation step
	 */
  readonly requireAttachmentAcceptance?: boolean;
  /**
	 * a List of denys
	 */
  readonly denyFilter?: string[];
  /**
	 * A list of denys
	 */
  readonly allowFilter?: string[];
}

/**
 * an attachmentconditions
 */
export interface AttachmentConditions {
  readonly type: AttachmentCondition;
  readonly operator?: Operators;
  readonly key?: string;
  readonly value?: string;
}
/**
 * an attachment policy
 */
export interface AttachmentPolicy {
  readonly ruleNumber: number;
  readonly conditions: AttachmentConditions[];
  readonly action: AttachmentPolicyAction;
  readonly description?: string;
  readonly conditionLogic?: ConditionLogic;
}

/**
 * Properties creating a Corenetwork Segment
 */
export interface ICoreNetworkSegmentProps {
  readonly segmentName: string;
  readonly policyTableServiceToken: string;
  updateDependsOn: cdk.CustomResource[];
}

/**
 * CoreNetworkShare
 */
export interface CoreNetworkShare {
  readonly allowExternalPrincipals: boolean;
  readonly principals: string[];
  readonly tags?: cdk.Tag[];
}
/**
 * Segmment ACtions
 */
export interface SegmentAction {
  readonly action: SegmentActionType;
  readonly mode?: SegmentActionMode;
  readonly shareWith?: string;
  readonly except?: string[];
  readonly destinationCidrBlocks?: string[];
  readonly destinations?: string[];
  readonly description: string;
}


/**
 * CoreNetwork Properties
 */
export interface CoreNetworkProps {
  /**
	 * Which Global Network
	 */
  readonly globalNetwork: networkmanager.CfnGlobalNetwork;
  /** a decription for the policy Document */
  readonly policyDescription: string;
  /** core name */
  readonly coreName: string;
  /** a list of of asn's that can be used */
  readonly asnRanges: string[];
  /**
	 * list of edgeLocaitons
	 */
  readonly edgeLocations: object[];
  /**
	 * support VpnECmp
	 */
  readonly vpnEcmpSupport?: boolean;
  /**
	 * List of InsideCidr Blocks
	 */
  readonly insideCidrBlocks?: string[];
}