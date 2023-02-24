import {
  custom_resources as cr,
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


export interface EnforceImdsv2Props{
  /**
	 * ec2 Instance or Instances
	 */
  readonly instances: ec2.Instance[] | ec2.Instance;
}
/**
 * Enforces the use of IMDSv2, without causing replacement of the Instance.
 */
export class EnforceImdsv2 extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: EnforceImdsv2Props) {
    super(scope, id);


    let instances = [];
    if (props.instances instanceof ec2.Instance) {
      instances = [props.instances];
    } else {
      instances = props.instances;
    }

    instances.forEach((instance) => {
      new cr.AwsCustomResource(this, `${instance.instanceId}Imdvs2enforcer`, {
        resourceType: 'Custom::EnforceImdsV2',
        onCreate: {
          service: 'EC2',
          action: 'modifyInstanceMetadataOptions',
          parameters: {
            InstanceId: instance.instanceId,
                    	HttpTokens: 'required',
                    	InstanceMetadataTags: 'enabled',
          },
        },
        onDelete: {
          service: 'EC2',
          action: 'modifyInstanceMetadataOptions',
          parameters: {
            InstanceId: instance.instanceId,
                    	HttpTokens: 'required',
                    	InstanceMetadataTags: 'disaabled',
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });
    });
  }
}

