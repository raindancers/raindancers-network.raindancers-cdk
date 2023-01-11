# Adding a common internet egress firewall.

In this section we will create another VPC, that contains AWS Network Firewalls, that will provide a managed and shared egress to the internet for all VPC's that are attached to the Cloudwan.   The Network Firewalls provide L4-L7 Stateful inspection, and pattern recognistion for milious activity. 

The firewall will also provide East/West inspection. ( traffic between core wan network segments ). 

### Create a egress vpc stack and firewall

The full file for the stack is in [this gist](https://gist.github.com/mrpackethead/b06e0cdf1b4bff1195c61a2c27b16004)

* 1.1 Create a new file `lib\egressVpc.ts`
 
* 1.2 Import modules. These are standard cdk modules, as well as the raindancersNetwork module.  The Firewall rules import will likely show an error as it has not yet been created 

 ```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { 
	aws_ec2 as ec2,
	aws_s3 as s3,
}
from 'aws-cdk-lib';
import * as raindancersNetwork from 'raindancers-network';
import { FirewallRules } from './firewallpolicy'
```

* 1.3 Create properties for the stack.  We need to pass this stack the cloudwan CoreNetwork, as well as the segments

```typescript
interface EgressVpcProps extends cdk.StackProps {
	corenetwork: raindancersNetwork.CoreNetwork
	blueSegment: raindancersNetwork.CoreNetworkSegment
	greenSegment: raindancersNetwork.CoreNetworkSegment
	redSegment: raindancersNetwork.CoreNetworkSegment
}
```

* 1.4 Create a class and a constructor for the Stack
```typescript
export class EgressVpc extends cdk.Stack {
  constructor(scope: Construct, id: string, props: EgressVpcProps) {
    super(scope, id, props);
```


* 1.5 Now add a VPC 

The Vpc is similar to those we added in previous sections, however we have a public subnet group to contain nat gateways, and a firewall subnet to contain the firewalls.  it is important that the only thing deployed in the firewall subnet, is the firewalls. This ensures that all traffic is inspected.   We are deploy 2 nat gateways, which will be bound to an EIP address.  ( this is sometimes important so, traffic leaves the network from known address's )

The choice of subnet Type is important.  By choosing Private Isolated, no default routes will be created by the ec2.Vpc construct.   We will add them using the `addCoreRoutes` later. 

```typescript
const egressVpc = new raindancersNetwork.EnterpriseVpc(this, 'tiritahiEnterpriseVPC', {
		vpc: new ec2.Vpc(this, 'tiritahiVPC', {
			ipAddresses: ec2.IpAddresses.cidr('10.10.128.0/22'),
			natGateways: 2,
			natGatewayProvider: ec2.NatProvider.gateway({
				eipAllocationIds: [ 
					new ec2.CfnEIP(this, 'EIP1forNatGateway').attrAllocationId,
					new ec2.CfnEIP(this, 'EIP2forNatGateway').attrAllocationId
				]
			}),
			maxAzs: 2,
			vpcName: 'egressVpc',
			subnetConfiguration: [
				{
				name: 'firewall',
				subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,	
				cidrMask: 28,
				},
				{
				name: 'linknet',
				subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
				cidrMask: 28,
				},
				{
				name: 'public',
				subnetType: ec2.SubnetType.PUBLIC,
				cidrMask: 28,
				},
			],
		}),
	  });
```
* 1.6 The vpc needs to be attached to the cloudwan, on the redsegment. In this case we must attach it in [appliance mode](link.html). This keeps all traffic flows symetric (within the az that the traffic arrived into the vpc). Asymetric routing may cause unpredicatble results with firewalls. 


```typescript
	const attachmentId = egressVpc.attachToCloudWan({
		coreNetworkName: props.corenetwork.coreName,
		segmentName: props.redSegment.segmentName,
		applianceMode: true
	})
```

* 1.7 
The raindancers network constructs provide a method that will set up vpc flow logs, and optionally athena querys so it is easy to search them. It is an aws recommended practice to have flow logs for all vpc's.  This can be a centralised s3 bucket or local to the account.    We did not add flow logs to the vpcs we previous configured.  That is left for you now, to go and add to your setup.   If `oneminuteFlowLogs` is `false` or omitted the flow logs will be configured for 10 minute intervals.  

```typescript
// set up VPCFlow Logs, and Athena Querys for the logs, with one minute increments.
	egressVpc.createFlowLog({
		bucket: new s3.Bucket(this, 'flowlogbucket', {
			blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
			encryption: s3.BucketEncryption.S3_MANAGED,
			enforceSSL: true,
		}),
		localAthenaQuerys: true,
		oneMinuteFlowLogs: true,
	});
```

* 1.8 We want the corenetwork to route traffic to the internet, towards the egress vpc, for each of the segments.  the `addCoreRoutes` method adds coreRoutes into each of the network segments.  Behind the scenes this will update the policy document for cloudwan.

TODO:  Modify the addCoreRoutes method.   We can do better than this.

```typescript
egressVpc.addCoreRoutes(
	{
		policyTableArn: props.corenetwork.policyTable.tableArn,
		segments: [
		  props.redSegment.segmentName,
		  props.greenSegment.segmentName,
		  props.blueSegment.segmentName,
		],
		destinationCidrBlocks: ['0.0.0.0/0'],
		description: 'defaultroutetoManagedEgress',
		coreName: props.corenetwork.coreName,
		attachmentId: attachmentId
	}
)
```

* 1.9 Create a firewall Cluster 

The `NetworkFirewall` construct will create a Network firewall and deploy it into the subnetGroup specified. Addtionally we need to create a firewall policy.  We will create this in a later step.     The cloudwanCidr is used in the policy document to build rules


```typescript
// build AWS NWFW cluster.   
	const firewall = new raindancersNetwork.NetworkFirewall(this, 'FirewallCluster', {
		firewallName: 'firewall',
		firewallPolicy: new FirewallRules(this, 'firewallrules', {
			cloudwanCidr: '10.0.0.0/8',
		}).firewallPolicy,
		subnetGroup: 'firewall',
		vpc: egressVpc.vpc,
	});
```

* 1.10 Add additional routes in the vpc to force traffic to flow via the firewall cluster.  

The routing tables associated with the linknet and firewall subnets need to forward all traffic destined to a 10/8 address via the cloudwan attachment.  the `addRoutes` method provides this functionality.  multiple cidrs and subnets can be provided.. the `addRoutes` method can be called multiple times, if needed, to provide more grandular routing control.

For subnets of type `PRIVATE_WITH_EGRESS` a default route to the NAT gateways is added by the ec2.Vpc construct already
For subnets of type `PUBLIC` a default route has been added to the internet gateway, by the ec2.Vpc construct. 

In order to complete the routing we need to add addtional routes;


Traffic that enters the vpc, from the cloud wan, arrives via the linknet subnets,  It needs to be forwarded to the Firewall
```typescript
egressVpc.addRoutes({
		cidr: ['0.0.0.0/0'],
		description: 'defaultroute',
		subnetGroups: [
			'linknet'
		],
		destination: raindancersNetwork.Destination.NWFIREWALL,
		networkFirewallArn: firewall.firewallArn,
	})
```	

Traffic in the private networks, destined for networks in the cloud wa, is routed to the cloudwan, via the cloudwan attachment
```typescript
egressVpc.addRoutes({
	cidr: ['10.0.0.0/8'],				// our private networks is 10/8
	description: 'allcloudwannetworks',		
	subnetGroups: [
		'linknet',		
		'firewall',
	],
	destination: raindancersNetwork.Destination.CLOUDWAN,
	cloudwanName: props.corenetwork.coreName
	});
```
Traffic in the public network, destined for the cloudwan networks needs to be routed via the firewall. 

```typescript
egressVpc.addRoutes({
		description: 'public2inside',
		cidr: [
		  '10.0.0.0/8'
		],
		subnetGroups: [
		  'public',
		],
		destination: raindancersNetwork.Destination.NWFIREWALL,
		networkFirewallArn: firewall.firewallArn,
	  });
```

### Create a firewall Policy

* 2.1 Create a new file `lib\filewallpolicy.ts`.    This will contain a construct that represents the firewall policy

* 2.2 Import packages from cdk library

```typescript
import * as cdk from 'aws-cdk-lib';
import {
  aws_networkfirewall as firewall,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';
```

* 2.3 Create an interface for the propertys of the construct. In this example we will pass the cidr of the private networks. In real world examples you may want to pass a variety of propertys. 

```typescript
export interface FirewallRulesProps {
  cloudwanCidr: string;
}
```

* 2.3 Create a construct class for the policy. The policy contains stateful and stateless firewall rules.  For more details of how to create a firewall policy, consult the [cdk documentation for networkfirewall]('https://docs.aws.amazon.com/cdk/api/v1/docs/aws-networkfirewall-readme.html'). The firewall policy construct is a L1 cdk construct, so largely follows the cloudformation construct.  ( There would be good scope to create a L2 or L3 construct to abstract some of the complexity away)

This example policy, will;

- allow traffic ICMP traffic to pass from anywhere.  
- allow http ( tcp 80 ) and https ( tcp 443 ) traffic from any inside host to the internet.    This traffic is further evaulated against a collection of aws managed firewall rules, to prevent activity such as botnets,  malware, worms.     Traffic that is supicous is dropped. 
- drop any other traffic

The full file is in [this gist]('https://gist.github.com/mrpackethead/957eb2f6af9dbe674efe6d3db98bd3d3')

```typescript
export class FirewallRules extends constructs.Construct {

  readonly firewallPolicy: firewall.CfnFirewallPolicy;

  constructor(scope: constructs.Construct, id: string, props: FirewallRulesProps) {
    super(scope, id);

    /*
    * Stateless firewall rules
    * Allow ICMP both directions
    */
    const fwStatefulAllowRuleGroup = new firewall.CfnRuleGroup(this, 'fwAllowStatelessRuleGroup', {
      capacity: 10,
      ruleGroupName: 'AllowStateless',
      type: 'STATELESS',
      ruleGroup: {
        rulesSource: {
          statelessRulesAndCustomActions: {
            statelessRules: [
              {
                priority: 1,
                ruleDefinition: {
                  actions: ['aws:pass'],
                  matchAttributes: {
                    protocols: [1], // Protocol 1 is ICMP
                    sources: [{
                      addressDefinition: '0.0.0.0/0',
                    }],
                    destinations: [{
                      addressDefinition: '0.0.0.0/0',
                    }],
                  },
                },
              },
            ],
          },
        },
      },
    });

    /*
      * Statefull firewall rules
      * Allow HTTP/HTTPS anywhere from organisation network
      */
    const fwAllowRuleGroup = new firewall.CfnRuleGroup(this, 'fwAllowRuleGroup', {
      capacity: 10,
      ruleGroupName: 'AllowRules',
      type: 'STATEFUL',
      description: 'Allow traffic to Internet',
      ruleGroup: {
        rulesSource: {
          statefulRules: [
            {
              action: 'PASS',
              header: {
                destination: 'ANY',
                destinationPort: '80',
                source: props.cloudwanCidr,
                sourcePort: 'ANY',
                protocol: 'TCP',
                direction: 'FORWARD',
              },
              ruleOptions: [{
                keyword: 'sid:1',
              }],
            },
            {
              action: 'PASS',
              header: {
                destination: 'ANY',
                destinationPort: '443',
                source: props.cloudwanCidr,
                sourcePort: 'ANY',
                protocol: 'TCP',
                direction: 'FORWARD',
              },
              ruleOptions: [{
                keyword: 'sid:2',
              }],
            },
          ],
        },
      },
    });


    /*
      * Deny rule group
      * Drop all traffic that is not explicitly defined in allow rule groups
      */

    const fwDenyRuleGroup = new firewall.CfnRuleGroup(this, 'fwDenyRuleGroup', {
      capacity: 10,
      ruleGroupName: 'DenyAll',
      type: 'STATEFUL',
      description: 'Deny all other traffic',
      ruleGroup: {
        rulesSource: {
          statefulRules: [
            {
              action: 'DROP',
              header: {
                destination: 'ANY',
                destinationPort: 'ANY',
                source: 'ANY',
                sourcePort: 'ANY',
                protocol: 'IP',
                direction: 'FORWARD',
              },
              ruleOptions: [{
                keyword: 'sid:100',
              }],
            },
          ],
        },
      },
    });


    const managedStatefulGroups: string[] = [
      'AbusedLegitMalwareDomainsActionOrder',
      /**
       * Contains rules that allow you to block requests to a class of domains which are generally legitimate
       * but are compromised and may host malware. This can help reduce the risk of receiving malware
       * or viruses originating from these sources with poor reputation.
       */

      'AbusedLegitBotNetCommandAndControlDomainsActionOrder',
      /**
       * Contains rules that allow you to block requests to a class of domains which are generally legitimate
       * but are compromised and may host botnets. This can help reduce the risk of resources accessing botnets
       * originating from these sources with poor reputation.
       */

      'MalwareDomainsActionOrder',
      /**
       * Contains rules that allow you to block requests to domains that are known for hosting malware.
       * This can help reduce the risk of receiving malware or viruses originating from these known sources
       */

      'BotNetCommandAndControlDomainsActionOrder',
      /**
       * Contains rules that allow you to block requests to domains that are known for hosting botnets.
       * This can help reduce the risk of resources accessing botnets originating from these known sources
       */

      'ThreatSignaturesBotnetActionOrder',
      /**
       * Signatures that are autogenerated from several sources of known and confirmed active botnet and other Command and Control (C2) hosts.
       */

      'ThreatSignaturesBotnetWebActionOrder',
      /**
       * Signatures that detect http botnets.
       */

      'ThreatSignaturesBotnetWindowsActionOrder',
      /**
       * Signatures that detect Windows botnets
       */

      'ThreatSignaturesDoSActionOrder',
      /**
       * Signatures that detect Denial of Service attempts
       */

      'ThreatSignaturesEmergingEventsActionOrder',
      /**
       * Signatures with rules developed in response to active and short-lived campaigns and other temporary, high-profile events.
      */

      'ThreatSignaturesExploitsActionOrder',
      /**
       * Signatures related to attacks and vulnerabilities regarding exploits, ActiveX, FTP, ICMP, NetBIOS, RPC, ShellCode,
       *  SNMP, SQL, Telnet, TFTP, and VoIP.
       */

      'ThreatSignaturesFUPActionOrder',
      /**
       * Signatures to detect gaming traffic, potentially inappropriate websites, and P2P traffic as well as signatures that may indicate
       * violations to an organizations policy
       */

      'ThreatSignaturesIOCActionOrder',
      /**
       * Signatures to detect activity related to Exploit Kits, their infrastructure, and delivery
       */

      'ThreatSignaturesMalwareActionOrder',
      /**
       * Signatures that detect malware (tcp, udp, smtp, icmp, smb, ip) and worm *
       */

      'ThreatSignaturesMalwareCoinminingActionOrder',
      /**
       * Signatures with rules that detect malware which performs coin mining
       */

      //'//ThreatSignaturesMalwareMobileActionOrder',
      /**
       * Signatures that detect mobile malware
       */
      'ThreatSignaturesMalwareWebActionOrder',
      /**
       * Signatures to detect malicious code in HTTP and TLS protocols
       */
      //'ThreatSignaturesPhishingActionOrder',    //4200
      /**
       * ThreatSignaturesPhishingActionOrder
       */
      'ThreatSignaturesScannersActionOrder',
      /**
       * Signatures to detect reconnaissance and probing from scanning tools
       */
      'ThreatSignaturesSuspectActionOrder',
      /** Signatures to fingerprint malicious SSL certificates using JA3 hashes, identify traffic
       *  related to chat clients, and detect suspicious and anomalous user agents.
       */
      'ThreatSignaturesWebAttacksActionOrder',
      /**
       * Signatures to detect attacks and vulnerabilities related to web clients, web servers, and web applications
       */
    ];

    const statefulRefs = [
      { resourceArn: fwAllowRuleGroup.attrRuleGroupArn },
      { resourceArn: fwDenyRuleGroup.attrRuleGroupArn },
    ];

    managedStatefulGroups.forEach((group) => {
      statefulRefs.push(
        {
          resourceArn: `arn:aws:network-firewall:${cdk.Aws.REGION}:aws-managed:stateful-rulegroup/${group}`,
        },
      );
    });


    // Firewall policy to enable stateless and statefull rule groups
    this.firewallPolicy = new firewall.CfnFirewallPolicy(this, 'FWPolicy', {
      firewallPolicy: {
        statelessDefaultActions: ['aws:forward_to_sfe'],
        statelessFragmentDefaultActions: ['aws:forward_to_sfe'],
        statelessRuleGroupReferences: [
          { resourceArn: fwStatefulAllowRuleGroup.attrRuleGroupArn, priority: 1 },
        ],
        statefulRuleGroupReferences: statefulRefs,
      },
      firewallPolicyName: 'FirewallPolicy',
    });

  }
}
```




