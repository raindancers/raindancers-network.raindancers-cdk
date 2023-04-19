import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_s3 as s3,
  aws_lambda,
  aws_iam as iam,
  aws_logs as logs,
  custom_resources as cr,
  aws_ram as ram,
  aws_route53 as r53,
  aws_route53resolver as r53r,
  aws_dynamodb as dynamodb,
  aws_events as events,
  aws_events_targets as targets,
  aws_sqs as sqs,
  aws_networkfirewall as firewall,
  //aws_stepfunctions as sfn
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';
import { AwsManagedDNSFirewallRuleGroup } from '../dns/dnsfirewall';
import { R53Resolverendpoints, ConditionalForwarder, OutboundForwardingRule } from '../dns/dnsResolvers';
import { CentralAccountAssnRole } from '../dns/enterpriseZone';
import { CentralResolverRules } from '../dns/resolverRules';
import { AwsServiceEndPoints } from '../endpoints/awsServiceEndpoints';
import { NetworkFirewall } from '../nwfirewall/firewall';
import { EnterpriseVpcLambda } from './enterprisevpclambdas';


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


export interface AddAwsServiceEndPointsProps {
  readonly services: ec2.InterfaceVpcEndpointAwsService[];
  readonly subnetGroup: SubnetGroup;
  readonly dynamoDbGateway?: boolean | undefined;
  readonly s3GatewayInterface?: boolean | undefined;
}

export enum SubnetWildCards {
  ALLSUBNETS = 'ALLSUBNETS'
}

export interface Route {
  readonly cidr?: string;
  readonly subnet?: SubnetGroup | SubnetWildCards;
  readonly destination: Destination;
  readonly description: string;
}

export interface RouterGroup {
  readonly subnetGroup: SubnetGroup;
  readonly routes: Route[];
}

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

export interface AddCoreRoutesProps {

  readonly policyTableArn: string;
  readonly segments: string[];
  readonly destinationCidrBlocks: string[];
  readonly description: string;
  readonly coreName: string;
  readonly attachmentId: string;

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
  readonly networkFirewallArn?: string | undefined;
  // cloudwanName
  readonly cloudwanName?: string | undefined;

}// end of addRoutetoCloudWan

export interface CloudWanRoutingProtocolProps {
  // a list of the subnetGroups which will participate in Cloudwan Routing Protocol
  readonly subnetGroups: string[];
  readonly acceptRouteFilter?: string[] | undefined;
  readonly denyRouteFilter?: string[] | undefined;
}

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

export interface PrefixCidr {
  readonly cidr: string;
}

export interface EvpcProps extends ec2.VpcProps {
  readonly subnetGroups?: SubnetGroup[];
}

/** Propertys for an Enterprise VPC */
export interface EnterpriseVpcProps {
  // the vpc
  readonly vpc?: ec2.Vpc;
  readonly evpc?: EvpcProps;

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

  public readonly attachToCloudwanProvider: cr.Provider;

  public vpcAttachmentCR: cdk.CustomResource | undefined;

  public vpcAttachmentId: string | undefined;

  public vpcAttachmentSegmentName: string | undefined;

  public cloudWanCoreId: string | undefined;

  public subnetConfiguration: SubnetGroup[] = [];

  public firewallArn: string | undefined;

  public r53endpointResolvers: R53Resolverendpoints | undefined;

  /**
   *
   * @param scope
   * @param id
   * @param props
   */
  constructor(scope: constructs.Construct, id: string, props: EnterpriseVpcProps) {
    super(scope, id);

    if (props.vpc && props.evpc) {
      throw new Error('Can not have both vpc and evpc defined');
    }

    if (props.vpc) {
      this.vpc = props.vpc;
    } else {
      // this is an evpc configuration..

      // if (!(props.evpc?.subnetGroups)) {
      //   throw new Error('An Evpc must have a subnetGroup property');
      // }

      console.log(props.evpc);

      this.vpc = new ec2.Vpc(this, 'evpc', {
        ...props.evpc,
      });
	  }


    const crHandlders = new EnterpriseVpcLambda(this, 'vpclambda');

    this.addRoutesProvider = crHandlders.addRoutesProvider;
    this.tgWaiterProvider = crHandlders.tgWaiterProvider;
    this.attachToCloudwanProvider = crHandlders.attachToCloudwanProvider;

  }

  public attachAWSManagedDNSFirewallRules(): void {

    const awsManagedDNSFirewallGroup = new AwsManagedDNSFirewallRuleGroup(this, 'ManagedFirewallRuleGroup');

    // The creation of the firewall Rule Group is aysyncrhonous, and it is possible that it will not be ready
    // to associate immediately after it is created, despite Cloudformation thinking that it is complete
    // A custom resource with a iscomplete handler is used to create a waiter.

    const checkDNSFirewallRuleGroupIsReadyFn = new aws_lambda.Function(
      this,
      'checkDNSFirewallRuleGroupIsReadyFn',
      {
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        logRetention: logs.RetentionDays.ONE_MONTH,
        handler: 'checkDNSFirewallRuleGroupIsReadyFn.on_event',
        code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/dns')),
        timeout: cdk.Duration.seconds(899),
      },
    );

    const checkDNSFirewallRuleGroupisCompleteFn = new aws_lambda.Function(
      this,
      'checkDNSFirewallRuleGroupIsCompleteFn',
      {
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        logRetention: logs.RetentionDays.ONE_MONTH,
        handler: 'checkDNSFirewallRuleGroupIsReadyFn.is_complete',
        code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/dns')),
        timeout: cdk.Duration.seconds(899),
      },
    );

    // aws route53resolver get-firewall-rule-group

    checkDNSFirewallRuleGroupisCompleteFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['route53resolver:GetFirewallRuleGroup'],
        effect: iam.Effect.ALLOW,
        resources: ['*'],
      }),
    );

    const checkDNSFirewallRuleGroupIsReadyCr = new cdk.CustomResource(
      this,
      'checkDNSFirewallRuleGroupIsReadyCr',
      {
        resourceType: 'Custom::AssociateInternalZone',
        properties: {
          ResolverRuleId: awsManagedDNSFirewallGroup.resolverRuleId,
        },
        serviceToken: new cr.Provider(this, 'checkDNSFirewallRuleGroupIsReadyProvider', {
          onEventHandler: checkDNSFirewallRuleGroupIsReadyFn,
          isCompleteHandler: checkDNSFirewallRuleGroupisCompleteFn,
          totalTimeout: cdk.Duration.minutes(119),
          queryInterval: cdk.Duration.seconds(10),
          logRetention: logs.RetentionDays.TWO_YEARS,
          providerFunctionName: cdk.PhysicalName.GENERATE_IF_NEEDED,
        }).serviceToken,
      },
    );

    const assn = new r53r.CfnResolverRuleAssociation(this, 'DNSFirewallWallAssociation', {
      resolverRuleId: awsManagedDNSFirewallGroup.resolverRuleId,
      vpcId: this.vpc.vpcId,
    });

    // Cloudformation has no way to know that the Association can not happen untill the Is ready check is done.
    // so a dependency needs to be added
    assn.node.addDependency(checkDNSFirewallRuleGroupIsReadyCr);

  }

  /**
   * Add a collection of service endpopints to the VPC
   * @param props
   */
  public addServiceEndpoints(props: AddAwsServiceEndPointsProps): void {

    new AwsServiceEndPoints(this, 'AWSEndpoints', {
      services: props.services,
      subnetGroup: props.subnetGroup.subnet.name, // TODO. This class needs updating so it can take the SubnetNetGroup Type
      vpc: this.vpc,
      dynamoDBGatewayInterface: props.dynamoDbGateway,
      s3GatewayInterface: props.s3GatewayInterface,
    });
  }

  public addNetworkFirewall(firewallName: string, firewallPolicy: firewall.CfnFirewallPolicy, subnet: SubnetGroup): void {

    const nwFirewall = new NetworkFirewall(this, 'Aparua', {
      firewallName: firewallName,
      firewallPolicy: firewallPolicy,
      subnetGroup: subnet.subnet.name,
      vpc: this.vpc,
    });

    this.firewallArn = nwFirewall.firewallArn;
  }

  public addPrivateHostedZone(zonename: string): r53.HostedZone {
    const zone = new r53.PrivateHostedZone(this, `privateZone${zonename}`, {
      zoneName: zonename,
      vpc: this.vpc,
    });

    return zone;
  }

  public addR53Resolvers(subnet: SubnetGroup): R53Resolverendpoints {

    const r53Resolvers = new R53Resolverendpoints(
      this,
      'RouteResolvers',
      {
        vpc: this.vpc,
        subnetGroup: subnet.subnet.name,
      },
    );
    this.r53endpointResolvers = r53Resolvers;

    return r53Resolvers;
  }

  public addCentralResolverRules(domains: string[]): void {

    new CentralResolverRules(this, 'centralResolverRules', {
      domains: domains,
      resolvers: this.r53endpointResolvers as R53Resolverendpoints,
    });
  }

  public addConditionalFowardingRules(forwardingRules: OutboundForwardingRule[]): void {

    new ConditionalForwarder(this, 'ConditionalForwarder', {
      outboundResolver: this.r53endpointResolvers?.outboundResolver as r53r.CfnResolverEndpoint,
      vpc: this.vpc,
      inboundResolverTargets: this.r53endpointResolvers?.inboundResolversIp as r53r.CfnResolverRule.TargetAddressProperty[],
      forwardingRules: forwardingRules,
    });

  }

  public addCrossAccountR53AssociationRole(rolename?: string | undefined): void {
    new CentralAccountAssnRole(this, 'assnRole', {
      vpc: this.vpc,
      orgId: this.node.tryGetContext('orgId'),
      roleName: rolename,
    });
  }


  /**
   * This is a convience method to present the routing for the Vpc in a simpler format,
   * than the addRoutes Method, which it calls.
   * @param routerGroups
   */
  public router(routerGroups: RouterGroup[]): void {

    // Extract all the subnets, these will be tokens
    let allSubnetGroups: SubnetGroup[] = [];
    routerGroups.forEach((routerGroup)=> {
      allSubnetGroups.push(routerGroup.subnetGroup);
    });

    // let subnets: ec2.ISubnet[] = [];
    // allSubnetGroups.forEach((subnetGroup) => {
    //   subnets.concat(this.vpc.selectSubnets({ subnetGroupName: subnetGroup.subnet.name }).subnets);
    // });

    // allSubnetCidrs is a list of subnets, from which to create routes
    // let allSubnetCidrs: string[] = [];
    // subnets.forEach((subnet) => {
    //   allSubnetCidrs.push(subnet.ipv4CidrBlock);
    // });


    //
    routerGroups.forEach((routerGroup) => {
      routerGroup.routes.forEach((route) => {

        // Sanity Check the inputs
        // only one of cidr or subnet can be supplied
        if (!(route.cidr || route.subnet)) {
          throw new Error('Only One of cidr or subnet can be supplied');
        }

        let routecidr: string[] = [];

        // if a subnet is supplied, it can be be a SubnetWildCard or a subnet.
        if (route.cidr) {
          routecidr.push(route.cidr as string);
        } else {
          // if the wild card is used; we need to create routes for all subnets, except
          // for the subnet where this is being routed from.
          if (route.subnet === SubnetWildCards.ALLSUBNETS) {

            // remove  the calling subnet from the wildcard list
            let subnetsNotMe = allSubnetGroups;
            subnetsNotMe.splice(subnetsNotMe.findIndex(item => item === routerGroup.subnetGroup));

            // get the subnetIds
            let subnets: ec2.ISubnet[] = [];
            allSubnetGroups.forEach((subnetGroup) => {
              subnets.concat(this.vpc.selectSubnets({ subnetGroupName: subnetGroup.subnet.name }).subnets);
            });

            // allSubnetCidrs is a list of subnets, from which to create routes
            let allSubnetCidrs: string[] = [];
            subnets.forEach((subnet) => {
              allSubnetCidrs.push(subnet.ipv4CidrBlock);
            });

            routecidr.concat(allSubnetCidrs);
          // if the subnets are supplied
          } else {
            let subnets: ec2.ISubnet[] = [];
            subnets = this.vpc.selectSubnets({ subnetGroupName: route.subnet?.subnet.name }).subnets;
            let subnetGroupCidrs: string[] = [];
            subnets.forEach((subnet) => {
              subnetGroupCidrs.push(subnet.ipv4CidrBlock);
            });
            routecidr.concat(subnetGroupCidrs);
          }
        }
        // .addRoutes takes a list of cidrs, and will deal to them so that traffic reamins symetric.
        this.addRoutes({
          cidr: routecidr,
          description: route.description,
          subnetGroups: [routerGroup.subnetGroup.subnet.name],
          destination: route.destination,
          // destination: network.Destination.NWFIREWALL,
          // networkFirewallArn: aparua.firewallArn,
          // destination: network.Destination.CLOUDWAN,
          // cloudwanName: props.cloudWan.coreName

        });

      });
    });
  }

  public createAndShareSubnetPrefixList(name: string, subnets: ec2.SubnetSelection, orgArn: string): ec2.CfnPrefixList {

    let cidrs: PrefixCidr[] = [];

    this.vpc.selectSubnets(subnets).subnets.forEach((subnet) => {
      //const subnet = ec2.Subnet.fromSubnetId(this, `subnet${subnetId}`, subnetId);
      cidrs.push({ cidr: subnet.ipv4CidrBlock });
    });


    const prefixList = new ec2.CfnPrefixList(this, `${name}`, {
      addressFamily: 'IPv4',
      maxEntries: cidrs.length,
      prefixListName: name,
      entries: cidrs,
      tags: [{
        key: 'PrefixListName',
        value: name,
      }],
    });

    new ram.CfnResourceShare(this, `${name}shareprefix`, {
      name: `${name}PLShare`,
      allowExternalPrincipals: false,
      principals: [orgArn],
      resourceArns: [prefixList.attrArn],
      tags: [{
        key: 'PrefixListName',
        value: name,
      }],
    });

    return prefixList;

  };


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
        autoDeleteObjects: true,
      });


      // set up athena querys with a custom resource
      const athenaLogsHandler = new aws_lambda.Function(this, 'Function', {
        code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        handler: 'flowlogintegration.on_event',
        timeout: cdk.Duration.seconds(300),
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

    this.cloudWanName = props.coreNetworkName;

    // get the coreNetwork Id from the name provided
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


    // check to see if the coreNetwork is ready.
    const isReadyFn = new aws_lambda.Function(this, 'isreadyFn', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'get_core_network_id.is_complete',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')),
    });

    isReadyFn.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'networkmanager:GetCoreNetwork',
          'networkmanager:ListCoreNetworks',
        ],
      }),
    );

    const networkManagerProvider = new cr.Provider(this, 'NetworkManagerProvider', {
      onEventHandler: lookupIdLambda,
      isCompleteHandler: isReadyFn,
      queryInterval: cdk.Duration.seconds(15),
      totalTimeout: cdk.Duration.minutes(119),
      logRetention: logs.RetentionDays.TWO_YEARS,
    });

    const coreNetwork = new cdk.CustomResource(this, 'idfinderCR', {
      serviceToken: networkManagerProvider.serviceToken,
      properties: {
			  CoreNetworkName: props.coreNetworkName,
      },
    });


    this.cloudWanCoreId = coreNetwork.getAtt('CoreNetworkId') as unknown as string;

    // find the subnets which to make the cloudwan attachment.
    let attachmentSubnetGroup = '';

    // if the subnetGroup name is not defined, it will default to using linknet
    if (!props.attachmentSubnetGroup) {
      attachmentSubnetGroup = 'linknet';
    } else {
      attachmentSubnetGroup = props.attachmentSubnetGroup;
    }


    const linknetsubnetarns = [];
    const linknetSelection = this.vpc.selectSubnets({ subnetGroupName: attachmentSubnetGroup });
    for (const subnet of linknetSelection.subnets) {
      linknetsubnetarns.push(`arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
    }


    let applianceMode = false;
    if (props.applianceMode === true) {
      applianceMode = true;
    }

    const props64 = cdk.Fn.base64(cdk.Stack.of(this).toJsonString(
      {
        VpcArn: this.vpc.vpcArn,
        SubnetArns: linknetsubnetarns,
        CoreNetworkId: coreNetwork.getAtt('CoreNetworkId') as unknown as string,
        Options: {
          ApplianceModeSupport: applianceMode,
        },
        Tags: [
          {
            Key: 'NetworkSegment',
            Value: props.segmentName,
          },
        ],
      },
    ));

    // attach the vpc to the cloudwaattachToCloudwanProvidern.
    // this custom resource has a waiter, so will not complete untill the vpc is in the avaialble state
    const attachmentCR = new cdk.CustomResource(this, 'attachVPCtoCloudwan', {
      serviceToken: this.attachToCloudwanProvider.serviceToken,
      properties: { props64: props64 },
    });

    this.vpcAttachmentSegmentName = props.segmentName;
    this.vpcAttachmentCR = attachmentCR;
    this.vpcAttachmentId = attachmentCR.getAttString('AttachmentId');


    return attachmentCR.getAttString('AttachmentId');


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
	 * Enable CloudWanRoutingProtocol
	 * @param props
	 */

  public cloudWanRoutingProtocol(props: CloudWanRoutingProtocolProps): void {

    var routeTableIds: string[] = [];

    // get all the routeTableIds for the subnets that will particpate
    props.subnetGroups.forEach((groupName) => {
      const selection = this.vpc.selectSubnets({
        subnetGroupName: groupName,
      });
      selection.subnets.forEach((subnet) => {
        routeTableIds.push(subnet.routeTable.routeTableId);
      });
    });


    // setCoreRoutesLambda
    const setCoreRoutes = new aws_lambda.Function(this, 'setCoreRoutesLambda', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      logRetention: logs.RetentionDays.ONE_MONTH,
      handler: 'setcoreroutes.on_event', // to do
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/evpc')), // to do
      timeout: cdk.Duration.seconds(899),
      environment: {
        RouteTableIds: cdk.Stack.of(this).toJsonString(routeTableIds),
        DenyFilter: cdk.Stack.of(this).toJsonString(props.acceptRouteFilter),
        AcceptFilter: cdk.Stack.of(this).toJsonString(props.denyRouteFilter),
        CloudWanCoreId: this.cloudWanCoreId as string,
        AttachmentSegment: this.vpcAttachmentSegmentName as string,
      },
    });

    setCoreRoutes.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['networkManager'], // TO DO.
        resources: ['*'],
        effect: iam.Effect.ALLOW,
      }),
    );

    const setCoreRoutesProvider = new cr.Provider(this, 'setCoreRoutesProvider', {
      onEventHandler: setCoreRoutes,
    });
    const setCoreRoutesCR = new cdk.CustomResource(this, 'setCoreRoutesCR', {
      serviceToken: setCoreRoutesProvider.serviceToken,
    });
    setCoreRoutesCR.node.addDependency(this.vpcAttachmentCR as cdk.CustomResource);


    // the lambda needs to run when a topology change occurs.
    const topologyChange = new events.Rule(this, 'CoreWanPolicyChange', {
      description: 'topology Change in CoreNetwork',
    });

    topologyChange.addEventPattern(
      {
        source: ['aws.networkmanager'],
        detailType: ['Network Manager Policy Update'],
        detail: {
          changeType: 'CHANGE-SET-EXECUTED',
        },
      },
    );

    topologyChange.addTarget(
      new targets.LambdaFunction(
        setCoreRoutes, {
          deadLetterQueue: new sqs.Queue(this, 'topologychangeDLQ'),
          maxEventAge: cdk.Duration.hours(2), // Optional: set the maxEventAge retry policy
          retryAttempts: 2, // Optional: set the max number of retry attempts
        },
      ),
    );
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

              const cloudwanroute = new cdk.CustomResource(this, `cloudwanroute${hashProps(props)}${index}`, {
                serviceToken: this.addRoutesProvider.serviceToken,
                properties: {
                  cidr: network,
                  RouteTableId: routeTableId,
                  Destination: props.destination,
                  CloudWanName: this.cloudWanName,
                },
              });

              cloudwanroute.node.addDependency(this.vpcAttachmentCR as cdk.CustomResource);

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
            FirewallArn: this.firewallArn,
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


  // policyTable string
  // segments  string[]
  // destinations []

  public addCoreRoutes(props: AddCoreRoutesProps): void {


    // import the dynamodb table.


    const policyTable = dynamodb.Table.fromTableArn(this, `${props.description}policytable`, props.policyTableArn);

    // create the lambda that

    const onEvent = new aws_lambda.SingletonFunction(this, `${props.description}putItems`, {
      uuid: 'AA002244FF',
      environment: { policyTableName: policyTable.tableName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'putitems.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
    });


    policyTable.grantFullAccess(onEvent);

    const policyTableProvider = new cr.Provider(this, `${props.description}UpdateProvider`, {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.FIVE_DAYS,
    });

    let pushPolicyDependsOn: cdk.CustomResource[] = [];

    // add routes into segments as required.
    props.segments.forEach((segment) =>{

      const segmentAction: {[k: string]: any} = {};

      segmentAction.description = props.description;
      segmentAction.action = 'create-route',
      segmentAction.segment = segment,
      segmentAction['destination-cidr-blocks'] = props.destinationCidrBlocks;
      segmentAction.destinations = [props.attachmentId];


      const addCoreRoute = new cdk.CustomResource(this, `${props.description}CloudwanSegmentRoute${segment}`, {
        serviceToken: policyTableProvider.serviceToken,
        properties: {
          segmentAction: cdk.Fn.base64(cdk.Stack.of(this).toJsonString(segmentAction)),
        },
      });

      pushPolicyDependsOn.push(addCoreRoute);
    });

    // now update the routetable
    // this updates the policy
    const updatePolicyLambda = new aws_lambda.Function(this, `${props.description}UpdateCoreNetworkCoreRoutesLambda`, {
      environment: { coreNetworkName: props.coreName },
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'updatepolicy.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
      timeout: cdk.Duration.seconds(899),
    });

    updatePolicyLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'networkmanager:putCoreNetworkPolicy',
          'networkmanager:executeCoreNetworkChangeSet',
          '*',
        ],
      }),
    );
    // let the lambda have access to the dynamo table.
    policyTable.grantFullAccess(updatePolicyLambda);

    const PolicyTableUpdateProvider = new cr.Provider(this, `${props.description}UpdateProviderCoreRoutes`, {
      onEventHandler: updatePolicyLambda,
      logRetention: logs.RetentionDays.FIVE_DAYS,
      providerFunctionName: cdk.PhysicalName.GENERATE_IF_NEEDED,
    });

    const updatePolicy = new cdk.CustomResource(this, `${props.description}UpdatePolicyCoreRoutes`, {
      serviceToken: PolicyTableUpdateProvider.serviceToken,
      properties: {
        TableName: policyTable.tableName,
        coreNetworkId: this.cloudWanCoreId,
        random: new Date().toISOString(), // this ensures that the custom resource has a change everytime.
      },
    });

    // we need to force this to not happen till all the updates are done.

    pushPolicyDependsOn.forEach((resource) => {
      updatePolicy.node.addDependency(resource);
    });
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