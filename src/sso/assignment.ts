import {
  aws_sso as sso,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IPermissionSet } from './permissionset';
import { PrincipalProperty } from './principal';
import { validatePermissionSetArn } from './private/permissionset-common';
import { validatePrincipal } from './private/principal-common';

export enum TargetTypes {
  AWS_ACCOUNT = 'AWS_ACCOUNT',
}

/**
   * The resource interface for an AWS SSO assignment.
   *
   * This interface has no attributes because the resulting resource has none.
   */
export interface IAssignment extends IResource {}

/**
   * The base assignment class
   *
   * Currently this is mostly empty. There isn't any
   * valuable methods to apply here or any resulting
   * attributes to define.
   */
abstract class AssignmentBase extends Resource implements IAssignment {};

/**
   * Attributes for an assignment of which there are none.
   */
export interface AssignmentAttributes {}

/**
   * The options for creating an assignment.
   */
export interface AssignmentOptions {
  /**
	* The principal to assign the permission set to
	*/
  readonly principal: PrincipalProperty;

  /**
	* The target id the permission set will be assigned to
	*/
  readonly targetId: string;

  /**
	* The entity type for which the assignment will be created.
	*
	* @default TargetTypes.AWS_ACCOUNT
	*/
  readonly targetType?: TargetTypes;
}

/**
   * The properties of a new assignment.
   */
export interface AssignmentProps extends AssignmentOptions {
  /**
	 * The permission set to assign to the principal
	 */
  readonly permissionSet: IPermissionSet;
}

/**
   * The assignment construct.
   *
   * Has no import method because there is no attributes to import.
   */
export class Assignment extends AssignmentBase {
  private static validateAwsAccountTargetId(targetId: string) {
	  if (!targetId.match(/\d{12}/)) {
      throw new Error(`targetId should be a 12 digit AWS account id: ${targetId}`);
	  }
  }

  constructor(scope: Construct, id: string, props: AssignmentProps) {
	  super (scope, id);

	  if (props.targetType === TargetTypes.AWS_ACCOUNT) {
      Assignment.validateAwsAccountTargetId(props.targetId);
	  }
	  validatePrincipal(props.principal);
	  validatePermissionSetArn(props.permissionSet.permissionSetArn);

	  const targetType = props.targetType ?? TargetTypes.AWS_ACCOUNT;

	  new sso.CfnAssignment(this, 'assignment', {
      instanceArn: props.permissionSet.ssoInstanceArn,
      permissionSetArn: props.permissionSet.permissionSetArn,
      principalId: props.principal.principalId,
      principalType: props.principal.principalType,
      targetId: props.targetId,
      targetType,
	  });
  }
}
