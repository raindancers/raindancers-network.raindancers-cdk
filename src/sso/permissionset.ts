import {
  aws_sso as sso,
  aws_iam as iam,
  IResource,
  Resource,
  Duration,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Assignment, AssignmentOptions } from './assignment';
import { permissionSetParseArn } from './private/permissionset-common';

export interface CustomerManagedPolicyReference extends sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty {}
export interface PermissionBoundary extends sso.CfnPermissionSet.PermissionsBoundaryProperty {}

/**
   * The resource interface for an AWS SSO permission set.
   */
export interface IPermissionSet extends IResource {
  /**
	 * The permission set ARN of the permission set. Such as
	 * `arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.
	 *
	 * @attribute
	 */
  readonly permissionSetArn: string;

  /**
	 * The SSO instance ARN of the permission set.
	 */
  readonly ssoInstanceArn: string;

  /**
	 * Grant this permission set to a given principal for a given
	 * targetId (AWS account identifier) on a given SSO instance.
	 */
  grant(id: string, assignmentOptions: AssignmentOptions): Assignment;
}

/**
   * The base permission set class
   */
abstract class PermissionSetBase extends Resource implements IPermissionSet {
  public abstract readonly permissionSetArn: string;
  public abstract readonly ssoInstanceArn: string;

  public grant(id: string, assignmentOptions: AssignmentOptions): Assignment {
	  return new Assignment(this, id, {
      permissionSet: this,
      principal: assignmentOptions.principal,
      targetId: assignmentOptions.targetId,
      targetType: assignmentOptions.targetType,
	  });
  }
};

/**
   * Attributes for a permission set
   */
export interface PermissionSetAttributes {
  /**
	 * The permission set ARN of the permission set. Such as
	 * `arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.
	 */
  readonly permissionSetArn: string;

  /**
	 * The SSO instance ARN of the permission set.
	 */
  readonly ssoInstanceArn: string;
}

/**
   * The properties of a new permission set
   */
export interface PermissionSetProps {
  /**
	 * The ARN of the SSO instance under which the operation will be executed.
	 */
  readonly ssoInstanceArn: string;
  /**
	 * The name of the permission set.
	 */
  readonly name: string;
  /**
	 * Specifies the names and paths of a customer managed policy.
	 * You must have an IAM policy that matches the name and path in each
	 * AWS account where you want to deploy your permission set.
	 *
	 * @default - No customer managed policies
	 */
  readonly customerManagedPolicyReferences?: CustomerManagedPolicyReference[];
  /**
	 * The description of the `PermissionSet`.
	 *
	 * @default - No description
	 */
  readonly description?: string;
  /**
	 * The IAM inline policy that is attached to the permission set.
	 *
	 * @default - No inline policy
	 */
  readonly inlinePolicy?: iam.PolicyDocument;
  /**
	 * The AWS managed policies to attach to the `PermissionSet`.
	 *
	 * @default - No AWS managed policies
	 */
  readonly awsManagedPolicies?: iam.IManagedPolicy[];
  /**
	 * Specifies the configuration of the AWS managed or customer managed
	 * policy that you want to set as a permissions boundary. Specify either
	 * customerManagedPolicyReference to use the name and path of a customer
	 * managed policy, or managedPolicy to use the ARN of an AWS managed
	 * policy.
	 *
	 * A permissions boundary represents the maximum permissions that any
	 * policy can grant your role. For more information, see Permissions boundaries
	 * for IAM entities in the AWS Identity and Access Management User Guide.
	 *
	 * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html
	 *
	 * @default - No permissions boundary
	 */
  readonly permissionsBoundary?: PermissionBoundary;
  /**
	 * Used to redirect users within the application during the federation
	 * authentication process.
	 *
	 * By default, when a user signs into the AWS access portal, chooses an account,
	 * and then chooses the role that AWS creates from the assigned permission set,
	 * IAM Identity Center redirects the user’s browser to the AWS Management Console.
	 *
	 * You can change this behavior by setting the relay state to a different console
	 * URL. Setting the relay state enables you to provide the user with quick access
	 * to the console that is most appropriate for their role. For example, you can
	 * set the relay state to the Amazon EC2 console URL (https://console.aws.amazon.com/ec2/)
	 * to redirect the user to that console when they choose the Amazon EC2
	 * administrator role.
	 *
	 * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html
	 *
	 * @default - No redirection
	 */
  readonly relayStateType?: string;
  /**
	 * The length of time that the application user sessions are valid for.
	 */
  readonly sessionDuration?: Duration;
}

export class PermissionSet extends PermissionSetBase {
  /**
	 * Reference an existing permission set by ARN
	 */
  public static fromPermissionSetArn(scope: Construct, id: string, permissionSetArn: string): IPermissionSet {
	  class Import extends PermissionSetBase {
      public readonly permissionSetArn = permissionSetArn;
      public readonly ssoInstanceArn = `arn:aws:sso:::instance/${permissionSetParseArn(permissionSetArn).resourceName!.split('/')[0]}`;
	  };

	  const permissionSet = new Import(scope, id);

	  return permissionSet;
  }

  /**
	 * The underlying CfnPermissionSet resource
	 */
  public readonly cfnPermissionSet: sso.CfnPermissionSet;

  /**
	 * The permission set ARN of the permission set.
	 */
  public readonly permissionSetArn: string;

  /**
	 * The SSO instance the permission set belongs to
	 */
  public readonly ssoInstanceArn: string;

  constructor(scope: Construct, id: string, props: PermissionSetProps) {
	  super (scope, id);

	  let managedPolicies: string[] = [];
	  if (props.awsManagedPolicies) {
      managedPolicies = props.awsManagedPolicies.map(policy => policy.managedPolicyArn);
	  }

	  if (!props.ssoInstanceArn.match(/arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance\/(sso)?ins-[a-zA-Z0-9-.]{16}/)) {
      throw new Error(`Invalid SSO instance ARN: ${props.ssoInstanceArn}`);
	  }

	  if (!props.name.match(/[\w+=,.@-]+/)) {
      throw new Error(`Invalid permission set name. Name may only contain alphanumeric characters and any of: +=,.@-: ${props.name}`);
	  }

	  if (props.relayStateType && !props.relayStateType.match(/[a-zA-Z0-9&$@#\\\/%?=~\-_'"|!:,.;*+\[\]\ \(\)\{\}]+/)) {
      throw new Error(`Invalid relay state type: ${props.relayStateType}`);
	  }

	  this.cfnPermissionSet = new sso.CfnPermissionSet(this, 'permissionSet', {
      instanceArn: props.ssoInstanceArn,
      name: props.name,
      customerManagedPolicyReferences: props.customerManagedPolicyReferences,
      description: props.description,
      inlinePolicy: props.inlinePolicy,
      managedPolicies,
      permissionsBoundary: props.permissionsBoundary,
      relayStateType: props.relayStateType,
      sessionDuration: props.sessionDuration ? props.sessionDuration.toIsoString() : undefined,
	  });

	  this.ssoInstanceArn = props.ssoInstanceArn;
	  this.permissionSetArn = this.cfnPermissionSet.attrPermissionSetArn;
  }
}