import {
  aws_ec2 as ec2,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface ESubnetGroup
{
  readonly name: string;
  readonly subnetType: ec2.SubnetType;
  readonly cidrMask: number;
}

export interface ESubnetGroupProps {
  readonly name: string;
  readonly subnetType: ec2.SubnetType;
  readonly cidrMask: number;
}

export class SubnetGroup extends constructs.Construct {

  subnet: ESubnetGroup;

  constructor(scope: constructs.Construct, id: string, props: ESubnetGroupProps) {
    super(scope, id);

    const mysubnet: ESubnetGroup= {
      name: props.name,
      subnetType: props.subnetType,
      cidrMask: props.cidrMask,
    };

    this.subnet = mysubnet;
  }
}
