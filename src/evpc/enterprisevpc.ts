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
  aws_ram as ram,
  aws_route53 as r53,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import { EnterpriseVpcLambda } from './enterprisevpclambdas';


export interface ShareSubnetGroupProps {
  readonly subnetGroups: string [];
  readonly account: string;
}

export interface AddR53ZoneProps {
  readonly zone: string;
  readonly centralVpc?: ec2.Vpc | undefined;
}

/** Properties for flow logs **/
export interface FlowLogProps {
  /** the central s3 location for enterprise flow logs */
  readonly bucket: s3.IBucket;
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
  readonly applianceMode?: boolean | undefined;
}
/**
 * Propertys for Appliance Mode
 */
export enum ApplianceMode {
  /** enable Connecting VPC to TransitGateway in Appliance Mode */
  ENABLED = 'enable'
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
  // description
  readonly description: string;
  // a list of the subnetGroups to add the Routes to
  readonly subnetGroups: string[];
  // the destination for the route
  readonly destination: Destination;
  // gatewayloadbalancers
  readonly networkFirewallArn?: string;
  // cloudwanName
  readonly cloudwanName?: string;

}// end of addRoutetoCloudWan

/**
 * The Destinations for Adding Routes
 */
export enum Destination{
  /** route to the cloudwan that the vpc is attached to */
  CLOUDWAN = 'Cloudwan',
  /** route to the transitGateway that the vpc is attached to */
  TRANSITGATEWAY = 'TransitGateway',
  //** route to a gateway loadbalancer end point */
  NWFIREWALL = 'NetworkFirewall'
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

  public readonly addRoutesProvider: cr.Provider;

  public readonly tgWaiterProvider: cr.Provider;

  /**
   *
   * @param scope
   * @param id
   * @param props
   */
  constructor(scope: constructs.Construct, id: string, props: EnterpriseVpcProps) {
    super(scope, id);

    this.vpc = props.vpc;

    const crHandlders = new EnterpriseVpcLambda(this, 'vpclambda');

    this.addRoutesProvider = crHandlders.addRoutesProvider;
    this.tgWaiterProvider = crHandlders.tgWaiterProvider;

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

    let attachmentSubnetGroup = 'linknet';

    // if the subnetGroup name is not defined, it will default to using linknet
    if (!props.attachmentSubnetGroup) {
      attachmentSubnetGroup = 'linknet';
    }


    const linknetsubnetarns = [];
    const linknetSelection = this.vpc.selectSubnets({ subnetGroupName: attachmentSubnetGroup });
    for (const subnet of linknetSelection.subnets) {
      linknetsubnetarns.push(`arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
    }


    if ( props.applianceMode === true ) {

      new cr.AwsCustomResource(this, 'attachtowan', {
        onCreate: {
          service: 'NetworkManager',
          action: 'CreateVpcAttachment',
          parameters: {
            outputPaths: ['VpcAttachment.Attachment.AttachmentId'],
            VpcArn: this.vpc.vpcArn,
            SubnetArns: linknetsubnetarns,
            Options: {
              ApplianceModeSupport: true,
            },
            Tags: [
              {
                key: 'NetworkSegment',
                value: props.segmentName,
              },
            ],

          },
          physicalResourceId: cr.PhysicalResourceId.fromResponse('VpcAttachment.Attachment.AttachmentId'),
        },
        onDelete: {
          service: 'NetworkManager',
          action: 'deleteAttachment',
          parameters: {
            AttachmentId: new cr.PhysicalResourceIdReference(),
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
        logRetention: logs.RetentionDays.FIVE_DAYS,
      });
    } else {
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
    }


    return this.cloudWanVpcAttachmentId as string;

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
    this.transitGWAttachmentID = transitGatewaypeering.getResponseField('TransitGatewayVpcAttachment.TransitGatewayAttachmentId');
    return transitGatewaypeering.getResponseField('TransitGatewayVpcAttachment.TransitGatewayAttachmentId');


  }// end of attachToTransitGateway


  /**
   * Share a subnetGroup with another AWS Account.
   * @param props ShareSubnetGroup
   */
  public shareSubnetGroup (props: ShareSubnetGroupProps): void {

    var subnetarns: string[] = [];

    props.subnetGroups.forEach((groupName)=> {
      const selection = this.vpc.selectSubnets({
        subnetGroupName: groupName,
      });

      selection.subnets.forEach((subnet) => {
        subnetarns.push(`arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
      });

      new ram.CfnResourceShare(this, `ramshare${groupName}${hashProps(props)}`, {
        name: props.account + hashProps(props),
        allowExternalPrincipals: false,
        principals: [props.account],
        resourceArns: subnetarns,
      });
    });
  }

  /**
	 * Add routes to SubnetGroups ( by implication their routing tables )
	 * @param props
	 */

  public addRoutes (props: AddRoutesProps): void {

    if ( props.destination === Destination.TRANSITGATEWAY || props.destination === Destination.CLOUDWAN ) {

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


      // check that the cidrs are valid
      const ipRegex = new RegExp('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([1-3][0-2]$|[0-2][0-9]$|0?[0-9]$)');


      routeTableIds.forEach((routeTableId, index) => {
        props.cidr.forEach((network) => {
          if (ipRegex.test(network) === false) {
            throw new Error(`cidr ${network} is invalid`);
          }

          switch (props.destination) {
            case Destination.CLOUDWAN: {


              if (!props.cloudwanName) {
                throw new Error('the cloudwanname must be provided for a cloudwan route');
              }

              new cdk.CustomResource(this, `cloudwanroute${hashProps(props)}${index}`, {
                serviceToken: this.addRoutesProvider.serviceToken,
                properties: {
                  cidr: network,
                  RouteTableId: routeTableId,
                  Destination: props.destination,
                  CloudWanName: props.cloudwanName,
                },
              });
              break;
            }
            case Destination.TRANSITGATEWAY: {

              const waiter = new cdk.CustomResource(this, `cloudwanroutewaiter${hashProps(props)}${index}`, {
                serviceToken: this.tgWaiterProvider.serviceToken,
                properties: {
                  transitGatewayId: this.transitGWID,
                  transitGatewayAttachmentId: this.transitGWAttachmentID,
                },
              });

              const transitgatewayroute = new ec2.CfnRoute(this, `transitgatewayroute${hashProps(props)}${index}`, {
                routeTableId: routeTableId,
                destinationCidrBlock: network,
                transitGatewayId: this.transitGWID,
              });

              transitgatewayroute.node.addDependency(waiter);

              break;

            }
            default: {
              throw new Error('No valid destinations for this method. ');
            }
          }
        });
      });
    } else if (props.destination === Destination.NWFIREWALL) {

      /**
       * the respose from the API call, exceeds 4096, so need to limit it with an output path
       */
      const outputPaths: string[] = [];
      const azlist = cdk.Stack.of(this).availabilityZones;
      azlist.forEach ((az) => {
        outputPaths.push(`FirewallStatus.SyncStates.${az}.Attachment.EndpointId`);
      });

      const fwDescription = new cr.AwsCustomResource(this, `DescribeFirewall${hashProps(props)}${props.description}`, {
        onCreate: {
          service: 'NetworkFirewall',
          action: 'describeFirewall',
          parameters: {
            FirewallArn: props.networkFirewallArn,
          },
          region: cdk.Aws.REGION,
          physicalResourceId: cr.PhysicalResourceId.of('DescribeFirewall'),
          outputPaths: outputPaths,
        },
        logRetention: logs.RetentionDays.SEVEN_YEARS,
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });

      props.subnetGroups.forEach((subnetGroup) => {
        props.cidr.forEach((destinationCidr) => {


          this.vpc.selectSubnets({ subnetGroupName: subnetGroup }).subnets.forEach((subnet, index) => {

            new ec2.CfnRoute(this, 'FirewallRoute-' + hashProps(props) + subnet.node.path.split('/').pop() + index, {
              destinationCidrBlock: destinationCidr,
              routeTableId: subnet.routeTable.routeTableId,
              vpcEndpointId: fwDescription.getResponseField(`FirewallStatus.SyncStates.${subnet.availabilityZone}.Attachment.EndpointId`),
            });
          });
        });
      });


    } else {
      throw new Error('Unsupported Destination for Route');
    }
  } // end of add routes


  //for other accounts, need to share their accounts across.
  // https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/

  public addR53Zone(props: AddR53ZoneProps): void {

    const zone = new r53.PrivateHostedZone(this, `vpcZone${props.zone}`,
      {
        zoneName: props.zone,
        vpc: this.vpc,
      },
    );
    if (props.centralVpc) {
      zone.addVpc(props.centralVpc);
    }
  }
}


// this provides a unique string based on the props
function hashProps(props: object): string {
  const str = JSON.stringify(props);
  var h: number = 0;
  for (var i = 0; i < str.length; i++) {
	  h = 31 * h + str.charCodeAt(i);
  }
  return h.toString(16).substring(0, 12);
}