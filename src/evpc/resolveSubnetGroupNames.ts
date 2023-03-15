import * as path from 'path';
import {
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_iam as iam,
  aws_lambda,
}
  from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface ResolveSubnetGroupNameProps {
  readonly vpc: ec2.Vpc | ec2.IVpc;
  readonly subnetGroupName: string;
  readonly azcount: number;
}


/**
* Creates a period task to update the SSM Agent on an EC2 Instance
*/
export class ResolveSubnetGroupName extends constructs.Construct {

  subnetSelection: ec2.SubnetSelection;

  constructor(scope: constructs.Construct, id: string, props: ResolveSubnetGroupNameProps) {
	  super(scope, id);

	  // get the owner of the VPC via a SDK Call.

	  const getVpcOwner = new cr.AwsCustomResource(this, 'GetVpcOwner', {
      onCreate: {
        service: 'EC2',
        action: 'describeVpcs',
        parameters: {
          VpcIds: [props.vpc.vpcId],
        },
        physicalResourceId: cr.PhysicalResourceId.of(props.vpc.vpcArn),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
	  });

	  const vpcOwner = getVpcOwner.getResponseField('Vpcs.0.OwnerId');


	  const resolverFn = new aws_lambda.Function(this, 'ResolverFunction', {
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'flowlogintegration.on_event',
	  });


	  resolverFn.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: [`arn:aws:iam::${vpcOwner}:role/read-${props.vpc.vpcId}-${cdk.Aws.ACCOUNT_ID}`],
        actions: ['sts:AssumeRole'],
      }),
	  );

	  const subnetNameResolver = new cdk.CustomResource(this, 'ResolveSubnetGroupCR', {
      serviceToken: new cr.Provider(this, 'resolverFnCR', {
        onEventHandler: resolverFn,
      }).serviceToken,
      properties: {
        vpcId: props.vpc.vpcId,
        subnetGroupName: props.subnetGroupName,
        assumeRole: `arn:aws:iam::${vpcOwner}:role/read-${props.vpc.vpcId}-${cdk.Aws.ACCOUNT_ID}`,
      },
	  });

	  let subnetIds: ec2.ISubnet[] = [];
	  for (let i=0; i < props.azcount; i++) {
	  	subnetIds.push(ec2.Subnet.fromSubnetId(this, `subnet${i}`, subnetNameResolver.getAttString(`Subnet${i}`)));
	  }

	  this.subnetSelection = { subnets: subnetIds };

  }
}