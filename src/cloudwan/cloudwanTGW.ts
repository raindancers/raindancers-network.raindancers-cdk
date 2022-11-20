import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_lambda,
  aws_iam as iam,
  custom_resources as cr,
  aws_networkmanager as networkmanager,
  aws_logs as logs,
  aws_ssm as ssm,
  aws_secretsmanager as secretsmanager,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


import { GetTunnelAddressPair } from '../ipam/ipam';
import * as CloudWanTGWProps from './cloudwanTGWProps';

/**
 * Create a TransitGateway That is attached to Cloudwan
 */
export class CloudWanTGW extends constructs.Construct {

  /** The created Transit Gateway */
  public readonly transitGateway: ec2.CfnTransitGateway;

  /** The Cidr Ranges assigned to the transit Gateway  */
  public readonly tgcidr: string[] | undefined;

  /**
	 *
	 * @param scope scope in which the resource is c
	 * @param id
	 * @param props TGWOnCloudWanProps
	 */
  constructor(scope: constructs.Construct, id: string, props: CloudWanTGWProps.TGWOnCloudWanProps) {
    super(scope, id);

    this.tgcidr = props.tgCidr;


    // look up the corewan
    const lookupIdLambda = new aws_lambda.Function(this, 'lookupIdLambda-tgOnCloudwan', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'getcloudwanID.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
    });

    lookupIdLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: ['networkmanager:ListCoreNetworks'],
      }),
    );

    // get the parameters from the core.
    const coreNetwork = new cdk.CustomResource(this, 'idfinderCR', {
      serviceToken: new cr.Provider(this, 'NetworkManagerProvider', {
        onEventHandler: lookupIdLambda,
      }).serviceToken,
      properties: {
        CoreNetworkName: this.node.tryGetContext('coreNetworkName'),
        ForceUpdate: new Date().toISOString(),	// this is to make it update everytime
      },
    });


    // create a transit gateway that will fit in as a shim between cloud WAN and the egress VPC. this is to
    // over come the issues with Cloudwan not supporting Appliance Mode, and asymetric routes.

    const egressTG = new ec2.CfnTransitGateway(this, 'EgressTg', /* all optional props */ {
      amazonSideAsn: props.amazonSideAsn as unknown as number,
      transitGatewayCidrBlocks: props.tgCidr,
      autoAcceptSharedAttachments: 'enable',
      defaultRouteTableAssociation: 'enable',
      defaultRouteTablePropagation: 'enable',
      description: props.description,
      dnsSupport: 'enable',
      multicastSupport: 'enable',
      //propagationDefaultRouteTableId: 'propagationDefaultRouteTableId',
      //transitGatewayCidrBlocks: ['transitGatewayCidrBlocks'],
    });

    // a transit gateway must have a policy table to be attached to Cloudwan..
    new cr.AwsCustomResource(this, 'TWpolicyTable', {
      onCreate: {
        service: 'EC2',
        action: 'createTransitGatewayPolicyTable',
        parameters: {
          TransitGatewayId: egressTG.attrId,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('TransitGatewayPolicyTable.TransitGatewayPolicyTableId'),
      },
      onDelete: {
        service: 'EC2',
        action: 'deleteTransitGatewayPolicyTable',
        parameters: {
          TransitGatewayPolicyTableId: new cr.PhysicalResourceIdReference(),
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    // do we need to assocaite this first?
    // const asscTgPolicyTable = new cr.AwsCustomResource(this, 'TWpolicyTable', {
    // 	onCreate: {
    // 		service: 'EC2',
    // 		action: 'associateTransitGatewayPolicyTable',
    // 		parameters: {
    // 			TransitGatewayPolicyTableId: tgPolicyTable.getResponseField('TransitGatewayPolicyTable.TransitGatewayPolicyTableId')
    	// 			TransitGatewayAttachmentId: ='string',
    // 		},
    // 		physicalResourceId: cr.PhysicalResourceId.fromResponse('Association.ResourceId')
    // 	},
    // 	onDelete: {
    // 		service: 'EC2',
    // 		action: 'disassociate_transit_gateway_policy_table()',
    // 		parameters: {
    // 			TransitGatewayPolicyTableId: new cr.PhysicalResourceIdReference()
    // 		},
    // 	},
    // 	policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
    // 		resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
    // 	}),
    // })


    //get the TG's default routing table, as the attribute is not workign

    const getDefaultRoutingTableId = new cr.AwsCustomResource(this, 'defaultroutingtableId', {
      onCreate: {
			  service: 'EC2',
			  action: 'describeTransitGateways',
			  parameters: {
          TransitGatewayIds: [egressTG.attrId],
			  },
			  physicalResourceId: cr.PhysicalResourceId.fromResponse('TransitGateways.0.Options.AssociationDefaultRouteTableId'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
			  resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    const routingtableId = getDefaultRoutingTableId.getResponseField('TransitGateways.0.Options.AssociationDefaultRouteTableId');


    this.transitGateway = egressTG;

    // const egressTGRoutingTable = new ec2.CfnTransitGatewayRouteTable(this, 'TGRouteTable', {
    // 	transitGatewayId: egressTG.attrId
    // })

    //register the transitgateway with the global network.
    new networkmanager.CfnTransitGatewayRegistration(this, 'TransitGatewayRegistration', {
      globalNetworkId: coreNetwork.getAttString('GlobalNetworkId'),
      transitGatewayArn: `arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:transit-gateway/${egressTG.attrId}`,
    });

    // peer the tg to cloudwan.
    // Checked that this builds and deletes
    const transitGatewaypeering = new cr.AwsCustomResource(this, 'AttachTGtoCloudWan', {
      onCreate: {
        service: 'NetworkManager',
        action: 'createTransitGatewayPeering',
        parameters: {
          CoreNetworkId: coreNetwork.getAttString('CoreNetworkId'),
          TransitGatewayArn: `arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:transit-gateway/${egressTG.attrId}`,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('TransitGatewayPeering.Peering.PeeringId'),
        region: 'us-west-2', // Cloudwan  is globalresource, that is based out of us-west-2

      },

      onDelete: {
        service: 'NetworkManager',
        action: 'deletePeering',
        parameters: {
          PeeringId: new cr.PhysicalResourceIdReference(),
        },
        region: 'us-west-2',

      },

      logRetention: logs.RetentionDays.SEVEN_YEARS,
      policy: cr.AwsCustomResourcePolicy.fromStatements(
        [
          new iam.PolicyStatement({
            actions: ['*'],
            resources: ['*'],
          }),
        ],
      ),
    });


    // Attach TransitGatewayRouteTabletoCloudwan
    // lambdas for custom resource

    const onEvent = new aws_lambda.Function(this, 'oneventlambda', {
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'peerroutingtable.on_event',
    });

    onEvent.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'networkmanager:deleteAttachment',
        ],
      }),
    );


    const isPeeringDone = new aws_lambda.Function(this, 'ispeeringDone', {
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'peerroutingtable.is_complete',
    });


    isPeeringDone.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [

          'networkmanager:CreateTransitGatewayRouteTableAttachment', // to do..
          'networkmanager:deleteAttachment',
          '*',
        ],
      }),
    );

    const AttachTGRouteTableToCloudwanProvider = new cr.Provider(this, 'isReadyProvider', {
      onEventHandler: onEvent,
      isCompleteHandler: isPeeringDone, // we have to check to see if Peering is done before we do this next stage
      logRetention: logs.RetentionDays.SEVEN_YEARS, // default is INFINITE
      queryInterval: cdk.Duration.seconds(30),
    });


    // we will place the attachmentId in a SSM parameter as its difficult to lookup with the SDK
    const attachmentId = new ssm.StringParameter(this, 'attachmentID', {
      stringValue: 'Null',
    });

    attachmentId.grantRead(isPeeringDone);
    attachmentId.grantWrite(isPeeringDone);
    attachmentId.grantRead(onEvent);
    attachmentId.grantWrite(onEvent);


    new cdk.CustomResource(this, 'AttachTGRouteTable', {
      serviceToken: AttachTGRouteTableToCloudwanProvider.serviceToken,
      properties: {
        transitGatewayRouteTableArn: `arn:aws:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:transit-gateway-route-table/${routingtableId}`,
        PeeringId: transitGatewaypeering.getResponseField('TransitGatewayPeering.Peering.PeeringId'),
        AttachmentTag: props.attachmentTag,
        CoreNetworkId: coreNetwork.getAttString('CoreNetworkId'),
        EdgeLocation:	cdk.Aws.REGION,
        attachmentIdSSMName: attachmentId.parameterName,
      },
    });

    // this.tgAttachmentId = attachTGRouteTable.getAttString('AttachmentId')


    // if (props.defaultRouteInSegments !== undefined) {
    // 	var dependsOn: cdk.CustomResource[]
    // 	dependsOn = []


    // 	props.defaultRouteInSegments.forEach((segment) =>{

    // 		const Route = new SegmentRoute(this, `${segment}segmentdefaultroute`, {
    // 			cloudwan: props.cloudwan,
    // 			action: CloudWan.segmentActionType.CREATE_ROUTE,
    // 			segment: segment,
    // 			cidrBlocks: ['0.0.0.0/0'],
    // 			attachments: [attachTGRouteTable.getAttString('AttachmentId')],
    // 			description: 'routeToInternet'
    // 		})

    // 		dependsOn.push(Route.addSegmentAction)
    // 	})
    // 	// we must wait untill segment Routes are completed.
    // 	new UpdateCorePolicy(this, 'updateCore', {
    // 		cloudwan: props.cloudwan,
    // 		dependson: dependsOn
    // 	})
    // }

    // if (props.cloudWanCidr !== undefined) {

    // 	props.cloudWanCidr.forEach((cidr) => {

    // 		console.log(egressTG.associationDefaultRouteTableId)

    // 		const cfnTransitGatewayRoute = new ec2.CfnTransitGatewayRoute(this, `${cidr}TransitGatewayRoute`, {
    // 			transitGatewayRouteTableId: routingtableId,    // undefined.
    // 		  	destinationCidrBlock: cidr,
    // 			transitGatewayAttachmentId: this.tgAttachmentId
    // 		  });

    // 	});


    // }


  }

  /**
   *
   * @param dxgatewayId Id of a DX gateway that
   */
  public createDirectConnectGatewayAssociation(dxgatewayId: string): void {

    // associate the TransitGateway with the DXGateway
    // https://docs.aws.amazon.com/cli/latest/reference/directconnect/create-direct-connect-gateway-association.html

    new cr.AwsCustomResource(this, 'CreateDXGateway', {
      onCreate: {
        service: 'DirectConnect',
        action: 'createDirectConnectGatewayAssociation',
        parameters: {
          directConnectGatewayId: dxgatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.tgcidr,
          gatewayId: this.transitGateway.attrId,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('directConnectGatewayAssociation.associationId'),

      },

      onDelete: {
        service: 'associationId',
        action: 'DeleteDirectConnectGatewayAssociation',
        parameters: {
          directConnectGatewayID: new cr.PhysicalResourceIdReference(),
        },
      },

      logRetention: logs.RetentionDays.ONE_WEEK,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });
  }

  /**
  *  provision a DX Gateway and attach it to the transit gateway
  * @param dxgatewayname The name of the dxgateway
  * @param dxgatewayASN An ASN for the Dxgateway
  * @returns Direct Connect gatewayId
  */
  public addDXGateway(dxgatewayname: string, dxgatewayASN: number): string {

    const dxgateway = new cr.AwsCustomResource(this, 'CreateDXGateway', {
      onCreate: {
        service: 'DirectConnect',
        action: 'createDirectConnectGateway',
        parameters: {
          directConnectGatewayName: dxgatewayname,
          amazonSideAsn: dxgatewayASN,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('directConnectGateway.directConnectGatewayId'),

      },

      onDelete: {
        service: 'DirectConnect',
        action: 'deleteDirectConnectGateway',
        parameters: {
          directConnectGatewayID: new cr.PhysicalResourceIdReference(),
        },
      },

      logRetention: logs.RetentionDays.ONE_WEEK,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    const gatewayId = dxgateway.getResponseField('directConnectGateway.directConnectGatewayId');

    // associate the TransitGateway with the DXGateway
    // https://docs.aws.amazon.com/cli/latest/reference/directconnect/create-direct-connect-gateway-association.html

    new cr.AwsCustomResource(this, 'CreateDXGateway', {
      onCreate: {
        service: 'DirectConnect',
        action: 'createDirectConnectGatewayAssociation',
        parameters: {
          directConnectGatewayId: dxgateway.getResponseField('directConnectGateway.directConnectGatewayId'),
          addAllowedPrefixesToDirectConnectGateway: this.tgcidr,
          gatewayId: this.transitGateway.attrId,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('directConnectGatewayAssociation.associationId'),

      },

      onDelete: {
        service: 'associationId',
        action: 'DeleteDirectConnectGatewayAssociation',
        parameters: {
          directConnectGatewayID: new cr.PhysicalResourceIdReference(),
        },
      },

      logRetention: logs.RetentionDays.ONE_WEEK,
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    return gatewayId;
  }

  /**
   * Creates a Site To Site IPSec VPN between the Transit Gateway and Customer Gateway,
   * using a defined set of VPn Properties.
   * @param name A name to identify the vpn
   * @param vpnprops the vpn properties
   * @returns
   */
  public adds2sVPN(name: string, vpnprops: CloudWanTGWProps.VpnProps): string {

    const vpnPresharedKey = new secretsmanager.Secret(this, `${name}PresharedKey`, {
      generateSecretString: {
        excludePunctuation: true,
        // We will Prefix the generated key with PSK. This means the key will never start
        // with zero, but will allow the use of numerics.  The PSK, has to between 8 and 64
        // characters, so we will use 61 + len('PSK') = 64
        passwordLength: 61,
      },
      secretName: `${name}-PSK`,
      description: `PresharedKey for ${name} s2S VPN`,
    });

    // create a flow log for the vpn

    var cloudWatchLogOptions: object | undefined;

    if (vpnprops.vpnspec.enableLogging != undefined) {
      if (vpnprops.vpnspec.enableLogging) {

        var vpnlog = new logs.LogGroup(this, `${name}vpnLogGroup`, {
          retention: logs.RetentionDays.THREE_MONTHS, // this is operational data, no need to retain longer
        });

        vpnlog.grantWrite(new iam.ServicePrincipal('delivery.logs.amazonaws.com'));

        // const cloudWatchLogOptions = {
        // 		LogEnabled: true,
        // 		LogGroupArn: vpnlog.logGroupArn,
        // 		LogOutputFormat: 'json'
        // }
      }
    }


    // validate Timeout
    if (vpnprops.vpnspec.phase1LifetimeSeconds != undefined) {
      if (!(vpnprops.vpnspec.phase1LifetimeSeconds >= 900 && vpnprops.vpnspec.phase1LifetimeSeconds <= 28000 )) {
        throw new Error('Phase1 Life time must be between 900 and 28000');

      }
    }


    // validate p2 Timeout
    if (vpnprops.vpnspec.phase2LifeTimeSeconds != undefined) {
      if (!(vpnprops.vpnspec.phase2LifeTimeSeconds >= 900 && vpnprops.vpnspec.phase2LifeTimeSeconds <= 3600 )) {
        throw new Error('Phase2 Life time must be between 900 and 3600');

      }
      if (vpnprops.vpnspec.phase1LifetimeSeconds != undefined ) {
        if (!(vpnprops.vpnspec.phase1LifetimeSeconds > vpnprops.vpnspec.phase2LifeTimeSeconds )) {
          throw new Error('Phase1 Life time must be greater than phase2 lifetime ');
        }
      }
    }

    // validate rekeyFuzzPercentage
    if (vpnprops.vpnspec.rekeyFuzzPercentage != undefined) {
      if (vpnprops.vpnspec.rekeyFuzzPercentage > 100 && vpnprops.vpnspec.rekeyFuzzPercentage < 0) {
        throw new Error('rekey Fuzz Percentage must be between 0 and 100');
      }
    }

    // validate rekeyMarginTimeSeconds
    // Constraints: A value between 60 and half of Phase2LifetimeSeconds

    var p2lifetime: number;

    if (vpnprops.vpnspec.phase2LifeTimeSeconds == undefined) {
      p2lifetime = 540;
    } else {
      p2lifetime = vpnprops.vpnspec.phase2LifeTimeSeconds / 2;
    }

    if (vpnprops.vpnspec.rekeyMarginTimeSeconds != undefined) {
      if (!(vpnprops.vpnspec.rekeyMarginTimeSeconds >= 60 && vpnprops.vpnspec.rekeyMarginTimeSeconds <= p2lifetime)) {
        throw new Error('rekeyMarginTimeSeconds must be a value between 60 and half of Phase2LifetimeSeconds ');
      }
    }


    //valdiate replayWindowsSize:
    // Constraints: A value between 64 and 2048.

    if (vpnprops.vpnspec.replayWindowSize !=undefined) {
      if (vpnprops.vpnspec.replayWindowSize <=64 && vpnprops.vpnspec.replayWindowSize >=2048 ) {
        throw new Error('replayWindowSize must be a value between 64 and 2048');
      }
    }


    // validate or create Ipam address's

    if (vpnprops.tunnelInsideCidr == undefined && vpnprops.tunnelIpamPool == undefined) {
      throw new Error('At least one of tunnelInsideCidr or tunnelIpamPool must be defined');

    } else if (vpnprops.tunnelInsideCidr != undefined && vpnprops.tunnelIpamPool != undefined) {
      throw new Error('Only one of tunnelInsideCidr or tunnelIpamPool can be defined');
    }

    var assignedCidrs: string[] = [];


    // validate if supplied tunnels are valid
    if (vpnprops.tunnelInsideCidr != undefined) {

      vpnprops.tunnelInsideCidr.forEach((cidr) => {

        // check to see that cidr starts with 169.254 and ends with /30
        if (!(cidr.endsWith('/30') && cidr.startsWith('169.254'))) {
          throw new Error('Invalid tunnel Cidr');
        }

        //check to see if cidr is in reserved range
        const reservedTunnelIP = [
          '169.254.0.0/30',
          '169.254.1.0/30',
          '169.254.2.0/30',
          '169.254.3.0/30',
          '169.254.4.0/30',
          '169.254.5.0/30',
          '169.254.169.252/30',
        ];

        if (cidr in reservedTunnelIP) {
          throw new Error(`the Cidr is a reserved range and can not be used, refer: \n 
					https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html"
					`);
        }

        assignedCidrs.push(cidr);
      });
    } else if (vpnprops.tunnelIpamPool != undefined) {

      const tunnelAllocation = new GetTunnelAddressPair(this, `${name}tunneladdress`, {
        ipamPoolId: vpnprops.tunnelIpamPool.attrIpamPoolId,
        name: name,
      });

      assignedCidrs = tunnelAllocation.assignedCidrPair;
    }


    const tunnels: object[] = [];

    //Ike Versions:
    var ikeVersions: object[] = [];
    if (vpnprops.vpnspec.ikeVersions) {
      vpnprops.vpnspec.ikeVersions?.forEach((ikeversion) => {
        ikeVersions.push({ version: ikeversion });
      });
    }


    assignedCidrs.forEach((cidr) => {
      tunnels.push({

        // key and tunnel addressing
        PreSharedKey: 'PSK' + vpnPresharedKey.secretValue,
        TunnelInsideCidr: cidr,


        // Dead peer detection and action
        DPDTimeoutAction: vpnprops.vpnspec.dpdTimeoutAction,		// dead peer detection
        DPDTimeoutSeconds: vpnprops.vpnspec.dpdTimeoutSeconds,				// after 30seconds attempt to restart

        // Allowable IKE versions
        IKEVersions: ikeVersions,
        LogOptions: {
          CloudWatchLogOptions: cloudWatchLogOptions,
        },

        // Phase one Configuration
        Phase1DHGroupNumbers: vpnprops.vpnspec.phase1DHGroupNumbers,
        Phase1EncryptionAlgorithms: vpnprops.vpnspec.phase1EncryptionAlgorithms,
        Phase1IntegrityAlgorithms: vpnprops.vpnspec.phase1IntegrityAlgorithms,
        Phase1LifetimeSeconds: vpnprops.vpnspec.phase1LifetimeSeconds,

        // Phase Two configuration
        Phase2DHGroupNumbers: vpnprops.vpnspec.phase2DHGroupNumbers,
        Phase2EncryptionAlgorithms: vpnprops.vpnspec.phase2EncryptionAlgorithms,
        Phase2IntegrityAlgorithms: vpnprops.vpnspec.phase2IntegrityAlgorithms,
        Phase2LifetimeSeconds: vpnprops.vpnspec.phase2LifeTimeSeconds,

        // rekeying and windowsizes
        RekeyFuzzPercentage: vpnprops.vpnspec.rekeyFuzzPercentage,
        RekeyMarginTimeSeconds: vpnprops.vpnspec.rekeyMarginTimeSeconds,
        ReplayWindowSize: vpnprops.vpnspec.replayWindowSize,
        StartupAction: vpnprops.vpnspec.startupAction,
      });
    });


    const vpn = new cr.AwsCustomResource(this, `CreateP2PVPN${name}`, {
      onCreate: {
        service: 'EC2',
        action: 'createVpnConnection',
        outputPaths: ['VpnConnection.VpnConnectionId'],	// theres too much otherwise
        parameters: {
          TransitGatewayId: this.transitGateway.attrId,
          Type: 'ipsec.1', /* required */
          Options: {
            EnableAcceleration: vpnprops.vpnspec.enableAcceleration,
            LocalIpv4NetworkCidr: vpnprops.vpnspec.localIpv4NetworkCidr,			// if its routable, let it go
            RemoteIpv4NetworkCidr: vpnprops.vpnspec.remoteIpv4NetworkCidr,
            OutsideIpAddressType: vpnprops.vpnspec.outsideIpAddressType,
            StaticRoutesOnly: vpnprops.vpnspec.staticRoutesOnly,
            TunnelInsideIpVersion: vpnprops.vpnspec.tunnelInsideIpVersion,
            TunnelOptions: tunnels,
          },
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('VpnConnection.VpnConnectionId'),
      },
      onDelete: {
        service: 'EC2',
        action: 'deleteVpnConnection',
        parameters: {
          VpnConnectionId: new cr.PhysicalResourceIdReference(),
        },
      },

      policy: cr.AwsCustomResourcePolicy.fromStatements(
        [
          new iam.PolicyStatement({
            actions: ['*'],
        			resources: ['*'],
          }),
        ],
      ),
    });

    if (vpnprops.sampleconfig !=undefined) {

      const sampleConfigLambda = new aws_lambda.SingletonFunction(this, `${name}sampleconfig`, {
        code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/cloudwan')),
        uuid: 'FFFFAAFFEEDDDDE000',
        handler: 'samplevpn.on_event',
        runtime: aws_lambda.Runtime.PYTHON_3_9,
      });

      sampleConfigLambda.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          resources: ['*'],
          actions: ['ec2:getVpnConnectionDeviceSampleConfiguration'],
        }),
      );

      vpnprops.sampleconfig.bucket.grantReadWrite(sampleConfigLambda);

      // get the parameters from the core.
      new cdk.CustomResource(this, `createconfigplaceinbucket${name}`, {
        serviceToken: new cr.Provider(this, `NetworkManagerProvider${name}`, {
          onEventHandler: sampleConfigLambda,
        }).serviceToken,
        properties: {
          Name: `${name}`,
          BucketArn: vpnprops.sampleconfig.bucket.bucketArn,
          BucketName: vpnprops.sampleconfig.bucket.bucketArn,
          VpnConnectionId: vpn.getResponseField('VpnConnection.VpnConnectionId'),
          VpnConnectionDeviceTypeId: vpnprops.sampleconfig.deviceType,
          InternetKeyExchangeVersion: vpnprops.sampleconfig.ikeVersion,
        },
      });

    }

    const vpnConnectionId = vpn.getResponseField('VpnConnection.VpnConnectionId');

    return vpnConnectionId;

  }
}

