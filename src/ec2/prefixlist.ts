import {
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


export interface FindPrefixListProps{
  readonly prefixListName: string;
}

/**
 * Enforces the use of IMDSv2, without causing replacement of the Instance.
 */
export class FindPrefixList extends constructs.Construct {

  prefixListId: string;

  constructor(scope: constructs.Construct, id: string, props: FindPrefixListProps) {
    super(scope, id);

    const lookup = new cr.AwsCustomResource(this, 'lookup', {
      onCreate: {
		  service: 'EC2',
		  action: 'describePrefixLists',
		  parameters: {
          Filters: {
            Name: 'prefix-list-name',
            Values: [props.prefixListName],
          },
		  },
		  physicalResourceId: cr.PhysicalResourceId.of(props.prefixListName),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
		  resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    this.prefixListId = lookup.getResponseField('PrefixLists.0.PrefixListId');

  }
}

