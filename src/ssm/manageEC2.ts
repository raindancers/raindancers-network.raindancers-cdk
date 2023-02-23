import {
  aws_ec2 as ec2,
  aws_ssm as ssm,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


export interface UpdateSSMAgentProps {
  /**
   * The EC2 Instance that will be udpated.
   */
  readonly instance: ec2.Instance;
}
/**
 * Creates a period task to update the SSM Agent on an EC2 Instance
 */
export class UpdateSSMAgent extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: UpdateSSMAgentProps) {
    super(scope, id);

    new ssm.CfnAssociation(this, 'updateSSMagent', {
      targets: [
        {
          key: 'InstancedIds',
          values: [props.instance.instanceId],
        },
      ],
      name: 'Periodic-SSM-Agent-Update',
      associationName: 'SystemAssociationForSsmAgentUpdate',
      scheduleExpression: 'rate(7 days)',
      maxConcurrency: '1',
      maxErrors: '10%',
      complianceSeverity: 'UNSPECIFIED',
    });
  }
}

