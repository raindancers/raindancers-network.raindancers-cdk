import {
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


/** Properties to create a set of AWS service Endpoints */
export interface AwsServiceEndPointsProps {
  /**
	   * The vpc in which the service is created
	   */
  readonly vpc: ec2.Vpc | ec2.IVpc;
  /**
	   * Subnet Group in which to create the service. Typically a subnet Dedicated to the task
	   */
  readonly subnetGroup: string;
  /**
	   * An arry of InterfaceVPCEndpoints
	   */
  readonly services: ec2.InterfaceVpcEndpointAwsService[];

  /** indicate true for a S3 Gateway Interface  */
  readonly s3GatewayInterface?: boolean;

  /** indicate true for a Dynamo Gateway Interface */
  readonly dynamoDBGatewayInterface?: boolean;
}


/**
   * Provisions a set of AWS Service Endpoints in a VPC
   */
export class AwsServiceEndPoints extends constructs.Construct {

  /**
	   * @param scope The scope that this construct is created in
	   * @param id Id for the construct
	   * @param props AWSServiceEndpoints
	   */
  constructor(scope: constructs.Construct, id: string, props: AwsServiceEndPointsProps) {
	  super(scope, id);

	  const endpoint_sg = new ec2.SecurityGroup(this, 'Endpointsg', {
      vpc: props.vpc,
	  });

	  endpoint_sg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.allTraffic(),
	  );

	  props.services.forEach((service) => {

      new ec2.InterfaceVpcEndpoint(this, `Endpoint${service.shortName}`, {
		  service: service,
		  vpc: props.vpc,
		  open: true, // this only allows traffic from within the vpc
		  lookupSupportedAzs: true,
		  privateDnsEnabled: true,
		  subnets: {
          subnetGroupName: props.subnetGroup,
		  },
		  securityGroups: [endpoint_sg],
      });
	  });

	  if (props.s3GatewayInterface) {
      props.vpc.addGatewayEndpoint('S3GatewayEndpoint', {
		  service: ec2.GatewayVpcEndpointAwsService.S3,
      });
	  };

	  if (props.dynamoDBGatewayInterface) {
      props.vpc.addGatewayEndpoint('DynamoDBGatewayEndpoint', {
		  service: ec2.GatewayVpcEndpointAwsService.DYNAMODB,
      });
	  };
  }
}