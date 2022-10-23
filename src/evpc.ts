
import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_s3 as s3,
  aws_lambda,
  aws_iam as iam,
  aws_route53 as r53,
  aws_networkmanager as networkmanager,
  aws_logs as logs,
  custom_resources as cr,
  aws_sns as sns,
  aws_sqs as sqs,
  aws_lambda_event_sources as eventsources,
}
  from 'aws-cdk-lib';

//import {v4 as uuidv4} from 'uuid'

import * as constructs from 'constructs';

/**
 *
 * @param ip A ip address in dotted decimal format
 * @returns an integer representing the ip address
 */

function ipToInt32(ip: string) {
  const ipSplit = ip.split('.');
  var ipInt: number = 0;
  ipSplit.forEach((value, index) => {
    var octect: number = value as unknown as number;
    //ipInt += octect << (24-index*8);
    ipInt += octect * Math.pow(2, (24-index*8));
  });
  return ipInt;
}

/**
 * Properties for Creating an enterprise Vpc which extend ec2.Vpc
 */
export interface EvpcProps extends ec2.VpcProps {

  /**
   * a netmask value that is in the range 16 to 28
   */
  readonly netmaskLength?: number;

  /**
   * the ipam pool id that the Vpc's allocation will get created in
   */
  readonly ipamPoolId?: string;

  /**
   * the cloudwan core network segment name that this vpc will be attached to
  */
  readonly attachToCoreNetworkSegment?: string;

  /**
   * An Internet Gateway will only be created if true
   */
  readonly internetGateway?: boolean;	// this needs to include an internet gateway.


  /**
   * Name of an internal Route53 Zone that is associated with this voc
   */
  readonly r53InternalZoneName?: string;

  /**
   *  Set true if this is the central resolving Vpc
   */
  readonly centralResolvingVpc?: boolean;

  /**
   * Set true to disable centralised Flow Logs
   */
  readonly disableFlowlog?: boolean;

  /**
   * Set true for 1 minute aggregation on flow logs. (default is 10 minutes )
   */
  readonly oneMinuteFlowLogs?: boolean;


  /** a valid concrete cidr, if you do not want to use Ipam */
  //cidr?: string;    // we want to overide cidr being readonly.
}

/**
 * Extends the ec2.Vpc construct to provide additional functionality
 * - support for using AWS IPAM
 * - methods for integration
 * - Flow logs and Athena Querys
 * - Create and share 53 zones
 */
export class Evpc extends ec2.Vpc {
  /**
	 * the Ipam Allocation provider for this vpc
	 */
  public readonly ipamAllocationId: ec2.CfnIPAMAllocation | undefined;

  /**
	 * Custom resource provider for looking up Cloudwan
	 */
  public readonly lookUpProvider!: cr.Provider;

  /**
	 * Private Zone Id
	 */
  public readonly privateR53ZoneId: string | undefined;

  /**
	 * Private Zone
	 */
  public readonly privateR53Zone: r53.HostedZone | undefined;
  /**
	 * If this is a private zone
	 */
  public readonly centralResolvingVpc: boolean | undefined;
  /**
	 * list of subnetIds that are used for connecting to the Cloudwan
	 */
  public readonly linknetSubnetIds: string[] | undefined;


  constructor(scope: constructs.Construct, id: string, props: EvpcProps = {}) {


    // make a copy of props as its properties are read Only. ( Jsii restriction )
    // https://bobbyhadz.com/blog/typescript-change-readonly-to-mutable

	type Mutable<Type> = {
	  -readonly [Key in keyof Type]: Type[Key];
  	}
	const vpcProps = props as Mutable<EvpcProps>;


	// do some validation of props, for sanity
	if (props.cidr && props.ipamPoolId) {
	  throw new Error('can only have one of cidr, or ipamPoolId');

	}
	// if using an IPAM pool, we will set the cidr to 0/0, so, network builder can build the subnets which we then later manipulate
	if (props.ipamPoolId) {

	  vpcProps.cidr = `0.0.0.0/${props.netmaskLength}`;
	}

	super(scope, id, vpcProps);

	//use escape hatches to remove the Cidr Block and set the Ipam Masks.
	const CfnVPC = this.node.defaultChild as ec2.CfnVPC;
	CfnVPC.addPropertyDeletionOverride('CidrBlock');
	CfnVPC.addPropertyOverride('Ipv4IpamPoolId', props.ipamPoolId);
	CfnVPC.addPropertyOverride('Ipv4NetmaskLength', props.netmaskLength);


	// Overide the subnets
	[this.privateSubnets, this.isolatedSubnets, this.publicSubnets].forEach(( subnetType ) => {

	  subnetType.forEach((subnet) => {
	    var subnetInt = ipToInt32(subnet.ipv4CidrBlock.split('/')[0]);
	    var subnetMask: number = subnet.ipv4CidrBlock.split('/')[1] as unknown as number;
	    var subnetPostion = subnetInt / 2**(32-subnetMask);

	    var cfnSubnet = subnet.node.defaultChild as ec2.CfnSubnet;
	    cfnSubnet.addPropertyOverride('CidrBlock',
	      cdk.Fn.select(
	        subnetPostion,
	        cdk.Fn.cidr(CfnVPC.attrCidrBlock, subnetPostion+1, `${32-subnetMask}`),
	      ),
	    );
	  }); // end of subnetType
	}); // end of all subnets


	// flow logs
	if (!props.disableFlowlog) {

	  // write to a shared VPC Flow log, that is specificed in the cdk.context
	  const s3LogBucket = s3.Bucket.fromBucketName(this, 'flowlogbucket', this.node.tryGetContext('flowlogbucket'));


	  // create a flow log for the vpc
	  const flowlog = new ec2.FlowLog(this, 'VpcFlowLogs', {
	    destination: ec2.FlowLogDestination.toS3(
	      s3LogBucket, 'VpcFlowLogs', {
	        fileFormat: ec2.FlowLogFileFormat.PARQUET,
	        hiveCompatiblePartitions: false,
	        perHourPartition: true,
	      }),
	    trafficType: ec2.FlowLogTrafficType.ALL,
	    flowLogName: 'sharedVpcFlowLogs',
	    resourceType: ec2.FlowLogResourceType.fromVpc(this),

	  });

	  // allow for more grandular flowlog at the minimum increment.
	  if (props.oneMinuteFlowLogs !== undefined) {
	    const CfnFlowLog = flowlog.node.defaultChild as ec2.CfnFlowLog;
	    CfnFlowLog.addPropertyOverride('MaxAggregationInterval', 60);
	  }

	  // athena results bucket
	  const athenaResultsBucket = new s3.Bucket(this, 'AthenaFlowLogResults', {
	    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
	    bucketName: `athena-${props.vpcName?.toLowerCase()}`,
	    removalPolicy: cdk.RemovalPolicy.DESTROY,
	  });

	  // set up athena querys with a custom resource
	  const athenaLogsHandler = new aws_lambda.Function(this, 'Function', {
	    code: aws_lambda.Code.fromAsset('./lambda/', {
	      bundling: {
	        image: aws_lambda.Runtime.PYTHON_3_9.bundlingImage,
	        command: [
	          'bash', '-c',
	          'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
	        ],
	      },
	    }),
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
	      VpcName: props.vpcName,
	    },
	  });
	}


	// if this is a VPC that we attach to the the core vpc, create a custom lookup to do lookups of the corewan

	if (props.attachToCoreNetworkSegment) {

	  const lookupIdLambda = new aws_lambda.Function(this, 'lookupIdLambda-evpc', {
	    runtime: aws_lambda.Runtime.PYTHON_3_9,
	    handler: 'get_core_network_id.on_event',
	    code: aws_lambda.Code.fromAsset('./lambda/'),
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

	  this.lookUpProvider = networkManagerProvider;

	}

	// create an internal zone for the vpc
	if (props.r53InternalZoneName) {
	  // create a new internal zone

	  this.privateR53Zone = new r53.PrivateHostedZone(this, 'privatednszone', {
				  zoneName: props.r53InternalZoneName,
				  vpc: this,
			  });

	  this.privateR53ZoneId = this.privateR53Zone.hostedZoneId;

	}

	// if this is the centralResolvingV VPC we dont' need to associate this zone with itself.
	// This needs completing.
	this.centralResolvingVpc = false;
	if (props.centralResolvingVpc === true) {
	  this.centralResolvingVpc = true;
	}


  }; // end of constructor


  /**
   * Attach the VPC to a cloud wan segment
   * @param coreNetworkName
   * @param segment
   * @returns transport attachment id
   */
  public attachToCloudWan(coreNetworkName: string, segment: string): string {
    // get the parameters from the core.
    const coreNetwork = new cdk.CustomResource(this, 'idfinderCR', {
      serviceToken: this.lookUpProvider.serviceToken,
      properties: {
        CoreNetworkName: coreNetworkName,
      },
    });

    const linknetsubnetarns = [];
    const linknetSelection = this.selectSubnets({ subnetGroupName: 'linknet' });
    for (const subnet of linknetSelection.subnets) {
      linknetsubnetarns.push(`arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:subnet/${subnet.subnetId}`);
    }

    const transportAttachmentId = new networkmanager.CfnVpcAttachment(this, 'attachtowan', {
      coreNetworkId: coreNetwork.getAtt('CoreNetworkId') as unknown as string, // is this legit?
      subnetArns: linknetsubnetarns,
      tags: [
        {
          key: 'NetworkSegment',
          value: segment,
        },
      ],
      vpcArn: this.vpcArn,
    });

    return transportAttachmentId.attrAttachmentId;


  } // end of attachToCloudWan


  /**
   * Add a route to routing tables attached to the private subnets.
   * @param destinationCidr cidr eg, 0.0.0.0/0
   * @param coreNetworkId
   */

  public addRouteForPrivateSubnetstoCloudWan(destinationCidr: string, coreNetworkId: string): void {


    var subnetSelection: ec2.ISubnet[] = [];

    try {
      const subnetSelectionPrivateIsolated = this.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_ISOLATED });
      subnetSelection = [...subnetSelection, ...subnetSelectionPrivateIsolated.subnets];
    } catch (error) {
      console.log('there are no Private Subnets');
    }

    try {
      const subnetSelectionPrivateIsolated = this.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS });
      subnetSelection = [...subnetSelection, ...subnetSelectionPrivateIsolated.subnets];
    } catch (error) {
      console.log('there are noSubnets with Egress');
    }

    for (const subnet of subnetSelection) {

      // there is no cloudformation method for a cloudwan yet!
      const addRoutev4SdkCall: cr.AwsSdkCall = {
        service: 'EC2',
        action: 'createRoute',
        parameters: {
          CoreNetworkArn: `arn:aws:networkmanager::${this.node.tryGetContext('centralAccount')}:core-network/${coreNetworkId}`, 		// this needs to be unhardcoded, look at the Lambda pass teh arn, not the iid.
          RouteTableId: subnet.routeTable.routeTableId,
          DestinationCidrBlock: destinationCidr,
        },
        region: cdk.Aws.REGION,
        physicalResourceId: cr.PhysicalResourceId.of(subnet.routeTable.routeTableId + '-cloudwan-route'),
      };

      const deleteRoutev4SdkCall: cr.AwsSdkCall = {
        service: 'EC2',
        action: 'deleteRoute',
        parameters: {
          RouteTableId: subnet.routeTable.routeTableId,
          DestinationCidrBlock: destinationCidr,
        },
        region: cdk.Aws.REGION,
        physicalResourceId: cr.PhysicalResourceId.of(subnet.routeTable.routeTableId + '-cloudwan-route'),
      };

      new cr.AwsCustomResource(this, `${subnet.node.id}${destinationCidr}-v4route`, {
        onCreate: addRoutev4SdkCall,
        onUpdate: addRoutev4SdkCall,
        onDelete: deleteRoutev4SdkCall,
        logRetention: logs.RetentionDays.SEVEN_YEARS,
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
				 }),
      });
    }

  }; // addRouteForPrivateSubnetstoCloudWan

  /**
	 * Add routes to point at Network Firewalls, for specific subnetGroups.
	 * this will place routes on a per AZ basis
	 *
	 * @param destinationCidr
	 * @param subnetgroup
	 * @param fwArn
	 */
  public addRoutetoFirewall(destinationCidr: string, subnetgroup: string, fwArn: string): void {

    /**
		 * the reponse from the API call, exceeds 4096 bytes, so need to limit it with Output Paths
		 */
    const outputPaths: string[] = [];

    const azlist = cdk.Stack.of(this).availabilityZones;
    azlist.forEach ((az) => {
      outputPaths.push(`FirewallStatus.SyncStates.${az}.Attachment.EndpointId`);
    });

    const getfwendpoint: cr.AwsSdkCall = {
      service: 'NetworkFirewall',
      action: 'describeFirewall',
      parameters: {
        FirewallArn: fwArn,
      },
      region: cdk.Aws.REGION,
      physicalResourceId: cr.PhysicalResourceId.of('DescribeFirewall'),
      outputPaths: outputPaths,
    };

    const fwDescription = new cr.AwsCustomResource(this, `DescribeFirewall${subnetgroup}`, {
      onCreate: getfwendpoint,
      logRetention: logs.RetentionDays.SEVEN_YEARS,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    this.selectSubnets({ subnetGroupName: subnetgroup }).subnets.forEach(subnet => {

      new ec2.CfnRoute(this, 'FirewallRoute-' + subnet.node.path.split('/').pop(), {
        destinationCidrBlock: destinationCidr,
        routeTableId: subnet.routeTable.routeTableId,
        vpcEndpointId: fwDescription.getResponseField(`FirewallStatus.SyncStates.${subnet.availabilityZone}.Attachment.EndpointId`),
      });
    });
  }; // end of addRoutetoFirewall


  /**
	 * Add routes to routing tables associated with publicSubnets to Cloudwan
	 * @param destinationCidr
	 * @param coreNetworkId
	 */
  public addRouteForPublicSubnetstoCloudWan(destinationCidr: string, coreNetworkId: string): void {

    const subnetSelection = this.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC });

    for (const subnet of subnetSelection.subnets) {

      // there is no cloudformation method for a cloudwan yet!
      const addRoutev4SdkCall: cr.AwsSdkCall = {
        service: 'EC2',
        action: 'createRoute',
        parameters: {
          CoreNetworkArn: `arn:aws:networkmanager::${this.node.tryGetContext('centralAccount')}:core-network/${coreNetworkId}`, 		// this needs to be unhardcoded, look at the Lambda pass teh arn, not the iid.
          RouteTableId: subnet.routeTable.routeTableId,
          DestinationCidrBlock: destinationCidr,
        },
        region: cdk.Aws.REGION,
        physicalResourceId: cr.PhysicalResourceId.of(subnet.routeTable.routeTableId + '-cloudwan-route'),
      };

      const deleteRoutev4SdkCall: cr.AwsSdkCall = {
        service: 'EC2',
        action: 'deleteRoute',
        parameters: {
          RouteTableId: subnet.routeTable.routeTableId,
          DestinationCidrBlock: destinationCidr,
        },
        region: cdk.Aws.REGION,
        physicalResourceId: cr.PhysicalResourceId.of(subnet.routeTable.routeTableId + '-cloudwan-route'),
      };

      new cr.AwsCustomResource(this, `${subnet.node.id}${destinationCidr}-v4route`, {
        onCreate: addRoutev4SdkCall,
        onUpdate: addRoutev4SdkCall,
        onDelete: deleteRoutev4SdkCall,
        logRetention: logs.RetentionDays.SEVEN_YEARS,
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
				 }),
      });
    }
  }; // end of addRouteForPublicSubnetstoCloudWan

  /**
	 * Create a connect Attachment to Cloudwan for Appliances
	 * @param coreNetworkId
	 * @param transportAttachmentId
	 * @returns
	 */
  public createConnectAttachment(coreNetworkId: string, transportAttachmentId: string): string {

    const connectAttachment = new networkmanager.CfnConnectAttachment(this, 'connectattachment', {
      coreNetworkId: coreNetworkId,
      edgeLocation: cdk.Aws.REGION,
      options: {
        protocol: 'GRE',
      },
      transportAttachmentId: transportAttachmentId,
    });
    return connectAttachment.attrAttachmentId;
  }; // end of createConnectAttachment

  /**
	 * Associate any rules shared to this vpc
	 * @param owner
	 * @param updatetopic
	 */
  public associateSharedRoute53ResolverRules(owner: string, updatetopic?: sns.Topic): void {

    const associateRouteResolvers = new aws_lambda.Function(this, 'associateLambda', {

      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'getRouteResolvers.on_event',
      code: aws_lambda.Code.fromAsset('./lib/constructs/lambda/'),
    });

    associateRouteResolvers.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'route53resolver:*',
          'route53resolver:ListResolverRules',
          'route53resolver:AssociateResolverRule',
          'route53resolver:DisassociateResolverRule',
          '*',
        ],
      }),
    );

    const rRProvider = new cr.Provider(this, 'rRProvider', {
      onEventHandler: associateRouteResolvers,
      logRetention: logs.RetentionDays.SEVEN_YEARS, // default is INFINITE
    });

    new cdk.CustomResource(this, 'AssociateRouteResolverRules', {
      serviceToken: rRProvider.serviceToken,
      properties: {
        vpcId: this.vpcId,
        owner: owner,
      },
    });

    const deadLetterQueue = new sqs.Queue(this, 'deadLetterQueue');


    if (updatetopic !== undefined) {
      associateRouteResolvers.addEventSource(
        new eventsources.SnsEventSource(updatetopic, {
          filterPolicy: {},
          deadLetterQueue: deadLetterQueue,
        },
        ),
      );
    }
  } // end of associateSharedRouteResolverRules

  /**
	 * Associate the internal R53 Zone with the Central VPC, for Org wide resolution
	 */
  public associateVPCZonewithCentralVPC(): void {

    const fn = aws_lambda.Function.fromFunctionAttributes(this, 'Function', {
      functionArn: `arn:aws:lambda:${cdk.Stack.of(this).region}:${this.node.tryGetContext('centralAccount')}:function:${this.node.tryGetContext('CreateAuthforZoneLambdaName')}`,
      sameEnvironment: false,
      skipPermissions: true,
		  });

    const localVPCZoneProvider = new cr.Provider(this, 'localvpcssnProvider', {
      onEventHandler: fn,
    });

    // get an authorization to associate the zone with the tiritahi vpc
    const zoneAssn = new cdk.CustomResource(this, 'AuthZone', {
      serviceToken: localVPCZoneProvider.serviceToken,
      properties: {
        PrivateZoneId: this.privateR53ZoneId,
      },
    });

    // Associate this zone with the central VPC
    const associateVpcWithHostedZone: cr.AwsSdkCall = {
      service: 'Route53',
      action: 'associateVPCWithHostedZone',
      parameters: {
        HostedZoneId: this.privateR53ZoneId,
        VPC: {
          VPCId: zoneAssn.getAtt('VpcId'),
          VPCregion: zoneAssn.getAtt('VpcRegion'),
        },
      },
      region: cdk.Aws.REGION,
      physicalResourceId: cr.PhysicalResourceId.of('InboundRouteResolverIP'),
    };

    const disassociateVpcWithHostedZone: cr.AwsSdkCall = {
      service: 'Route53',
      action: 'disassociateVPCFromHostedZone',
      parameters: {
        HostedZoneId: this.privateR53ZoneId,
        VPC: {
          VPCId: zoneAssn.getAtt('VpcId'),
          VPCregion: zoneAssn.getAtt('VpcRegion'),
        },
      },
      region: cdk.Aws.REGION,
      physicalResourceId: cr.PhysicalResourceId.of('InboundRouteResolverIP'),
    };

    new cr.AwsCustomResource(this, 'AssociateVpcwithHostedZone', {
      onCreate: associateVpcWithHostedZone,
      onDelete: disassociateVpcWithHostedZone,
      logRetention: logs.RetentionDays.SEVEN_YEARS,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

  }// end of associateVPCZonewithCentralVPC()

  /**
   * Add routes in private Subnets to a instance. Use this for routing to a network appliance.
   * @param destinationCidr
   * @param instanceId
   */

  public addRouteForPrivateSubnetstoinstance(destinationCidr: string, instanceId: string): void {

    const subnetSelection = this.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_ISOLATED });

    for (const subnet of subnetSelection.subnets) {

      new ec2.CfnRoute(this, 'instanceRoute-' + subnet.node.path.split('/').pop(), {
        destinationCidrBlock: destinationCidr,
        routeTableId: subnet.routeTable.routeTableId,
        instanceId: instanceId,
      });
    }

  }; // end of Private Routes.

  /**
	 * Add routes for Private Subnets to a Transit Gateway
	 * @param destinationCidr
	 * @param TransitGatewayId
	 */

  public addRouteForPrivateSubnetstoTransitGateway(destinationCidr: string, TransitGatewayId: string): void {


    var subnetSelection: ec2.ISubnet[] = [];

    try {
      const subnetSelectionPrivateIsolated = this.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_ISOLATED });
      subnetSelection = [...subnetSelection, ...subnetSelectionPrivateIsolated.subnets];
    } catch (error) {
      // statements to handle any exceptions
      //console.error(error); // pass exception object to error handler
      console.log('there are not Private Subnets');
    }

    try {
      const subnetSelectionPrivateIsolated = this.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS });
      subnetSelection = [...subnetSelection, ...subnetSelectionPrivateIsolated.subnets];
    } catch (error) {
      // statements to handle any exceptions
      //console.error(error); // pass exception object to error handler
      console.log('there are not Private Subnets with Egress');
    }

    for (const subnet of subnetSelection) {

      new ec2.CfnRoute(this, `Route${subnet.subnetId}${destinationCidr}`, {
        routeTableId: subnet.routeTable.routeTableId,
			  	destinationCidrBlock: destinationCidr,
        transitGatewayId: TransitGatewayId,
      });
    }
  } // end of privatesubnets to TransitGateway

  /**
	 * Attach a VPC to a Transit Gateway in Appliance mode. Primarly used when the VPC is being used as a centralised egress with firewalls
	 * A workaround to the problem of their not being support for Appliance mode connections to cloudwan
	 * @param transitGateway
	 * @param cidrs
	 * @returns
	 */

  public attachVpcToTGApplianceMode(transitGateway: ec2.CfnTransitGateway, cidrs?: string[] | undefined): string {


    // get the TG's default routing table, as the attribute is not workign

    const getDefaultRoutingTableId = new cr.AwsCustomResource(this, 'defaultroutingtableId', {
      onCreate: {
			  service: 'EC2',
			  action: 'describeTransitGateways',
			  parameters: {
          TransitGatewayIds: [transitGateway.attrId],
			  },
			  physicalResourceId: cr.PhysicalResourceId.of('TransitGateways.0.Options.AssociationDefaultRouteTableId'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
			  resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    const routingtableId = getDefaultRoutingTableId.getResponseField('TransitGateways.0.Options.AssociationDefaultRouteTableId');


    const transitGatewaypeering = new cr.AwsCustomResource(this, 'AttachtheVPCtoTG', {
      onCreate: {
        service: 'EC2',
        action: 'createTransitGatewayVpcAttachment',
        parameters: {
          SubnetIds: this.selectSubnets({ subnetGroupName: 'linknet' }).subnetIds, // this needs to be the subnet
          TransitGatewayId: transitGateway.attrId,
          VpcId: this.vpcId,
          Options: {
            ApplianceModeSupport: 'enable',
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


    if ( cidrs !== undefined ) {


      // need to implment a check here to see if the attachment is in valid state to use.

      const waitForTransitGatewayPeering = new aws_lambda.Function(this, 'oneventttobeready', {
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        handler: 'transitgatewayRoutes.on_event',
        code: aws_lambda.Code.fromAsset('lib/constructs/lambda/'),
      });

      // need to be able to delete the routes.
      waitForTransitGatewayPeering.addToRolePolicy(
        new iam.PolicyStatement({
          actions: ['ec2:deleteTransitGatewayRoute'],
          resources: ['*'],
          effect: iam.Effect.ALLOW,
        }),
      );


      const isCompleteTransitGatewayPeering = new aws_lambda.Function(this, 'iscompleterattachmenttobeready', {
        runtime: aws_lambda.Runtime.PYTHON_3_9,
        handler: 'transitgatewayRoutes.is_complete',
        code: aws_lambda.Code.fromAsset('lib/constructs/lambda/'),
      });

      // need to be able to check if the attachment is done, and if it is add routes.
      isCompleteTransitGatewayPeering.addToRolePolicy(
        new iam.PolicyStatement({
          actions: [
            'ec2:createTransitGatewayRoute',
            'ec2:describeTransitGatewayVpcAttachments',
          ],
          resources: ['*'],
          effect: iam.Effect.ALLOW,
        }),
      );

      const tgReady = new cr.Provider(this, 'tgReady', {
        onEventHandler: waitForTransitGatewayPeering,
        isCompleteHandler: isCompleteTransitGatewayPeering,
        logRetention: logs.RetentionDays.ONE_WEEK,
        queryInterval: cdk.Duration.seconds(10),
      });


      // create a resource for each route.. rather than pass the list of routes
      cidrs.forEach((cidr) => {

        new cdk.CustomResource(this, `WaitforTGCR${cidr}`, {
          serviceToken: tgReady.serviceToken,
          properties: {
            transitGatewayAttachmentId: transitGatewaypeering.getResponseField('TransitGatewayVpcAttachment.TransitGatewayAttachmentId'),
            cidr: cidr,
            transitGatewayRouteTableId: routingtableId,
          },

        });
      });

    } // end of adding transitgateway routes.


    return transitGatewaypeering.getResponseField('TransitGatewayVpcAttachment.TransitGatewayAttachmentId');

  } // end attachVpcToTGApplianceMode
}
