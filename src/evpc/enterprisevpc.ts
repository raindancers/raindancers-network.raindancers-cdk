import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_s3 as s3,
  aws_lambda,
  aws_iam as iam,
  aws_networkmanager as networkmanager,
  aws_logs as logs,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

/** Properties for flow logs **/
export interface FlowLogProps {
  /** the central s3 location for enterprise flow logs */
  readonly bucket: s3.Bucket;
  /** 1 minute resolution */
  readonly oneMinuteFlowLogs?: boolean;
  /** create in Account Athena Querys for flow logs*/
  readonly localAthenaQuerys?: boolean;
}

/** Propertys for Attaching to a Cloudwan Core Network */
export interface AttachToCloudWanProps {
  /** corenetworkName */
  readonly coreNetworkName: string;
  //** segmentName */
  readonly segmentName: string;
  readonly attachmentSubnetGroup?: string | undefined;
}
/**
 * Propertys for Appliance Mode
 */
export enum ApplianceMode {
  /** enable Connecting VPC to TransitGateway in Appliance Mode */
  ENABLED = 'enabled'
}

/**
 * Propertys to attach the Vpc To Transit Gateway
 */
export interface AttachToTransitGatewayProps {
  /** the TransitGateway to connect to */
	 readonly transitGateway: ec2. CfnTransitGateway;
	 /** Will this be connected in appliance mode ( used if you have Network Firewalls ) */
	 readonly applicanceMode?: ApplianceMode | undefined;
	 //** Which Subnet Groups will the attachments be made ( defaults to 'linknet') */
	 readonly attachmentSubnetGroup?: string | undefined;
}

/**
 * Propertys for Adding Routes in VPC.
 */
export interface AddRoutesProps {
  // a list of cidrs to route
  readonly cidr: string[];
  // a list of the subnetGroups to add the Routes to
  readonly subnetGroups: string[];
  // the destination for the route
  readonly destination: Destination;
}// end of addRoutetoCloudWan

/**
 * The Destinations for Adding Routes
 */
export enum Destination{
  /** route to the cloudwan that the vpc is attached to */
  CLOUDWAN = 'Cloudwan',
  /** route to the transitGateway that the vpc is attached to */
  TRANSITGATEWAY = 'TransitGateway'
}

/** Propertys for an Enterprise VPC */
export interface EnterpriseVpcProps {
  // the vpc
  readonly vpc: ec2.Vpc;
}// end of addRoutetoCloudWan

/**
 * Enteprise VPC's take the stock ec2.Vpc and provide numerous convience methods primarly related to
 * connecting to internal networks
 */
export class EnterpriseVpc extends constructs.Construct {
  /**
	 * AttachmentId when the vpc is attached to a Cloudwan
	 */
  public cloudWanVpcAttachmentId: string | undefined;
  /**
	 * AttachmentId when the vpc is attached to a transitGateway
	 */
  public transitGWAttachmentID: string | undefined;
  /**
	 * The Id of the transitgateway that the VPC is attached to
	 */
  public transitGWID: string | undefined;
  /**
	 * the Name of the cloudwan that the VPC is attached to
	 */
  public cloudWanName: string | undefined;
  /**
	 * the Name of the Cloudwan segment that the vpc is attached to
	 */
  public cloudWanSegment: string | undefined;
  /**
	 * the ec2.Vpc that is passed in as property
	 */
  public readonly vpc: ec2.Vpc;

  /**
	 * Constructor
	 * @param scope
	 * @param id
	 * @param props
	 */
  constructor(scope: constructs.Construct, id: string, props: EnterpriseVpcProps) {
    super(scope, id);

    this.vpc = props.vpc;
  }

  /**
	 * Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys
	 * @param props
	 */
  public createFlowLog(props: FlowLogProps): void {

    const flowlog = new ec2.FlowLog(this, 'VpcFlowLogs', {
      destination: ec2.FlowLogDestination.toS3(
			  props.bucket, 'VpcFlowLogs', {
          fileFormat: ec2.FlowLogFileFormat.PARQUET,
          hiveCompatiblePartitions: false,
          perHourPartition: true,
			  }),
      trafficType: ec2.FlowLogTrafficType.ALL,
      flowLogName: 'sharedVpcFlowLogs',
      resourceType: ec2.FlowLogResourceType.fromVpc(this.vpc),
    });

    // allow for more grandular flowlog at the minimum increment.
    if (props.oneMinuteFlowLogs === true) {
      const CfnFlowLog = flowlog.node.defaultChild as ec2.CfnFlowLog;
      CfnFlowLog.addPropertyOverride('MaxAggregationInterval', 60);
    }

    if (props.localAthenaQuerys === true) {
      const athenaResultsBucket = new s3.Bucket(this, 'AthenaFlowLogResults', {
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        bucketName: `athena-${this.vpc.vpcId.toLowerCase()}`,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });


      // set up athena querys with a custom resource
      const athenaLogsHandler = new aws_lambda.Function(this, 'Function', {
        code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        handler: 'flowlogintegration.on_event',
      });

      athenaLogsHandler.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          resources: ['*'],
          actions: [
            '*',
            'ec2:ListCoreNetworks',
            'ec2:GetFlowLogsIntegrationTemplate',
            'cloudformation:CreateStack',
            'cloudformation:DeleteStack',
          ],
        }),
      );

      new cdk.CustomResource(this, 'MyCustomResource', {
        serviceToken: new cr.Provider(this, 'flowlogBuilderCR', {
          onEventHandler: athenaLogsHandler,
        }).serviceToken,
        properties: {
          AthenaBucket: athenaResultsBucket.bucketArn,
          FlowLogId: flowlog.flowLogId,
          VpcName: this.vpc.vpcId,
        },
      });
    }
  }//end of createFlowLog


  /**
	 * attachToCloudWan will attach a VPC to CloudWan, in a particular Segment.
	 * @param props
	 */
  public attachToCloudWan(props: AttachToCloudWanProps): string {


    const lookupIdLambda = new aws_lambda.Function(this, 'lookupIdLambda-evpc', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'get_core_network_id.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
		  });

    lookupIdLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: ['networkmanager:ListCoreNetworks'],
      }),
    );

    const networkManagerProvider = new cr.Provider(this, 'NetworkManagerProvider', {
      onEventHandler: lookupIdLambda,
    });

    const coreNetwork = new cdk.CustomResource(this, 'idfinderCR', {
      serviceToken: networkManagerProvider.serviceToken,
      properties: {
			  CoreNetworkName: props.coreNetworkName,
      },
    });

    let attachmentSubnetGroup = 'linket';

    // if the subnetGroup name is not defined, it will default to using linknet
    if (props.attachmentSubnetGroup) {
      attachmentSubnetGroup = 'linknet';
    }


    const linknetsubnetarns = [];
    const linknetSelection = this.vpc.selectSubnets({ subnetGroupName: attachmentSubnetGroup });
    for (const subnet of linknetSelection.subnets) {
      linknetsubnetarns.push(`arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
    }

    const cloudWanVpcAttachmentId = new networkmanager.CfnVpcAttachment(this, 'attachtowan', {
      coreNetworkId: coreNetwork.getAtt('CoreNetworkId') as unknown as string, // is this legit?
      subnetArns: linknetsubnetarns,
      tags: [
			  {
          key: 'NetworkSegment',
          value: props.segmentName,
			  },
      ],
      vpcArn: this.vpc.vpcArn,
    }).attrAttachmentId;

    this.cloudWanVpcAttachmentId = cloudWanVpcAttachmentId;
    this.cloudWanName = props.coreNetworkName;
    this.cloudWanSegment = props.segmentName;

    return cloudWanVpcAttachmentId;

  }// end of attachToCloudwan


  /**
	 * Attach a vpc to a transit gateway, possibly in appliance mode
	 * Its intended purpose is provide a
	 * @param props
	 */
  public attachToTransitGateway(props: AttachToTransitGatewayProps): string {

    let attachmentSubnetGroup = 'linknet';
    if (props.attachmentSubnetGroup) {
      attachmentSubnetGroup = props.attachmentSubnetGroup;
    }

    const transitGatewaypeering = new cr.AwsCustomResource(this, 'AttachtheVPCtoTG', {
      onCreate: {
			  service: 'EC2',
			  action: 'createTransitGatewayVpcAttachment',
			  parameters: {
          SubnetIds: this.vpc.selectSubnets({ subnetGroupName: attachmentSubnetGroup }).subnetIds, // this needs to be the subnet
          TransitGatewayId: props.transitGateway.attrId,
          VpcId: this.vpc.vpcId,
          Options: {
				  ApplianceModeSupport: props.applicanceMode,
          },
			  },
			  physicalResourceId: cr.PhysicalResourceId.fromResponse('TransitGatewayVpcAttachment.TransitGatewayAttachmentId'),
			  region: 'ap-southeast-2', // Cloudwan  is globalresource, that is based out of us-west-2
      },
      onDelete: {
        service: 'EC2',
        action: 'deleteTransitGatewayVpcAttachment',
        parameters: {
          TransitGatewayAttachmentId: new cr.PhysicalResourceIdReference(),
        },
        region: 'ap-southeast-2',

      },
      logRetention: logs.RetentionDays.ONE_DAY,
      policy: cr.AwsCustomResourcePolicy.fromStatements(
        [
          new iam.PolicyStatement({
            actions: ['*'],
            resources: ['*'],
          }),
        ],
      ),
    });

    this.transitGWID = props.transitGateway.attrId;
    return transitGatewaypeering.getResponseField('TransitGatewayVpcAttachment.TransitGatewayAttachmentId');


  }// end of attachToTransitGateway


  /**
	 * Add routes to SubnetGroups ( by implication their routing tables )
	 * @param props
	 */
  public addRoutes (props: AddRoutesProps): void {

    var routeTableIds: string[] = [];

    // get all the routeTableIds for the subnets
    props.subnetGroups.forEach((groupName) => {
      const selection = this.vpc.selectSubnets({
        subnetGroupName: groupName,
      });
      selection.subnets.forEach((subnet) => {
        routeTableIds.push(subnet.routeTable.routeTableId);
      });
    });


    const addRoutesLambda = new aws_lambda.SingletonFunction(this, 'lookupIdLambda-evpc', {
      uuid: '00001122AA',
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'addRoutes.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
		  });

    addRoutesLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'ec2:CreateRoute',
          'ec2:DeleteRoute',
          'ec2:ReplaceRoute',
          'net_manager.list_core_networks',
        ],
      }),
    );

    const addRoutesProvider = new cr.Provider(this, 'NetworkManagerProvider', {
      onEventHandler: addRoutesLambda,
    });

    // check that the cidrs are valid
    const ipRegex = new RegExp('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([1-3][0-2]$|[0-2][0-9]$|0?[0-9]$)');


    routeTableIds.forEach((routeTableId) => {
      props.cidr.forEach((network) => {
        if (ipRegex.test(network) === false) {
          throw new Error(`cidr ${network} is invalid`);
        }

        switch (props.destination) {
          case Destination.CLOUDWAN: {
            new cdk.CustomResource(this, `${network}${routeTableId}route`, {
              serviceToken: addRoutesProvider.serviceToken,
              properties: {
                cidr: network,
                RouteTableId: routeTableId,
                Destination: props.destination,
                CloudWanName: this.cloudWanName,
              },
            });
            break;
          }
          case Destination.TRANSITGATEWAY: {
            new ec2.CfnRoute(this, `${network}${routeTableId}route`, {
              routeTableId: routeTableId,
              destinationCidrBlock: network,
              transitGatewayId: this.transitGWID,
            });
            break;
          }
          default: {
            throw new Error('No valid destinations for this method. ');
          }
        }

      });
    });
  } // end of add routes
}
