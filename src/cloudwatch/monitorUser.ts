import {
  aws_ec2 as ec2,
  //aws_ssm as ssm,
  aws_iam as iam,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

  type Sources = (ec2.Instance)

export interface MonitorUserProps {
  /**
	 * Allowable list of sources for the Account to be used
	 */
  readonly sources : Sources;
  /**
	 * The IAM user account to be monitored.
	 */
  readonly user: iam.User;
}

/**
   * Monitor a user account that is using Long Term Credentials to check if it is being used from a location that is not expected
   */
export class UpdateSSMAgent extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: MonitorUserProps) {
	  super(scope, id);

    console.log(props.user);


  }
}

