import { ArnComponents, Arn, ArnFormat, Token } from 'aws-cdk-lib';

export function validatePermissionSetArn(permissionSetArn: string): void {
  if (!Token.isUnresolved(permissionSetArn) && !permissionSetArn.match(/arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet\/(sso)?ins-[a-zA-Z0-9-.]{16}\/ps-[a-zA-Z0-9-./]{16}/)) {
    throw new Error(`Invalid SSO permission set ARN: ${permissionSetArn}`);
  }
};

export function permissionSetParseArn(permissionSetArn: string): ArnComponents {
  validatePermissionSetArn(permissionSetArn);

  return Arn.split(permissionSetArn, ArnFormat.SLASH_RESOURCE_NAME);
};