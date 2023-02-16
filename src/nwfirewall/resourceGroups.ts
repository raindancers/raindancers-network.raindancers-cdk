import {
  aws_resourcegroups as resourcegroups,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';

export enum ResourceGroupQueryTypes {
  TAG_FILTER_1_0 = 'TAG_FILTER_1_0',
  CLOUDFORMATION_STACK_1_0 = 'CLOUDFORMATION_STACK_1_0'
}


export interface TagFilter {
  readonly key: string;
  readonly values: string[];
}

export interface DynamicTagResourceGroupProps {
  readonly name: string;
  readonly description?: undefined | string;
}

export interface DynamicTagResourceGroupSet {
  readonly name: string;
  readonly arn: string;
}

export class DynamicTagResourceGroup extends constructs.Construct {

  private tagFilters: TagFilter[] = [];
  public readonly groupArn: string;
  public name: string;

  constructor(scope: constructs.Construct, id: string, props: DynamicTagResourceGroupProps) {
    super( scope, id);

      	this.name = props.name;

    const cfnGroup = new resourcegroups.CfnGroup(this, 'CfnGroup', {
      name: props.name, // // this needs to be unique across the AWS REGION.  TODO. See if we can make this qunie
      description: props.description,
      resourceQuery: {
        query: {
          // only these types are supoorted.
          resourceTypeFilters: [
            'AWS::EC2::Instance',
            'AWS::EC2::InstanceNetworkInterface',
          ],
          tagFilters: this.tagFilters,
        },
        type: ResourceGroupQueryTypes.TAG_FILTER_1_0,
      },
    });

    this.groupArn = cfnGroup.attrArn;

  }

  public addTagFilter(props: TagFilter): void {
	  this.tagFilters.push(props);
  }
}