# Raindancers Network Construct Library

The raindancers network package contains  constructs that construct to provide additional network capablitys, particually for using in an enterprise network. .

All of the methods that work with ec2.Vpc, work with Evpc.   Refer to [the ec2.Vpc Documentation](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html)

Note: This Construct Library is now functional, but expect considerable change over time. .

The authors of this construct encourage and welcome PR's.  Please raise an issue to start

```
import { Evpc } from 'raindancers-cdk.raindancers-network';
```

## VPC
Many projects need a Virtual Private Cloud network.  This can be provided by creating an instance of ```EVpc``` :
```
const shineyEvpc = new Evpc(this, 'EnterpriseVPC');
```

### Using IPAM address Pool for Addressing in Cidr

Creating a vpc that gets its Ip Address allocation from an IPAM pool, requires providing a netmask and ipamPoolId.  Only one of ipamPoolId or cidr is allowed.    The underlying resource that creates a VPC natively consumes IPAM.

```
const shineyEpvc = new Evpc(this, 'EnterpriseVPC', {
	ipamPoolId: 'pool-00000122344',
	netmaskLength: 24
})
```


### Centralised Flow Logs and Athena Querys.

This construct will create a flow log, that is written to a centralised flow log bucket. The construct expects to find the bucket name in they key ```flowlogbucket``` in cdk.json. (This typically is in the log-archive acount, set up by Control Tower). This requires that the buckets policy allows access. To DISABLE this feature, set the disableFLowLog to ```false```.  By default the flow log will aggregate flow logs at a 10minute internal.  To enable aggregation on a 1 minute interval, set the oneMinuteFlowLogs property to true.   

The construct will also create a set of Athena querys and glue jobs that will provide an easy way to query the flow logs from within the account that the vpc is created. 

```
const shineyEpvc = new Evpc(this, 'EnterpriseVPC', {
	disableFlowlog: false,
	oneMinuteFlowLogs: true
})
```


### Subnets
The construct creates subnets in the same way that the ec2.Vpc construct does.   in order to connect the VPC to a cloudWAN, the construct requires that a subnet group called 'linknets' is created.  This is where the attachments for cloudwan will be created.  

```
const shiney = new Evpc(this, 'Shineyvpc', {
	r53InternalZoneName: 'thing.domain.com'
	ipamPoolId: 'ip-pool-id', 
	subnetConfiguration: [
		{
			name: 'linknet',
			subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
			cidrMask: 28
		},
	]
	}
)
```

### Attaching a VPC to cloud wan.

To attach a vpc to a cloudwan, use the attachToCloudWan method, for example to connect to a core network 'AcmeCore' and segment 'AppsProd';  The attachments to cloudwan will be made in the linknets subnets

```
const shineyVpc = new Evpc: Evpc;
shineyVpc.attachToCloudWan('AcmeCore', 'AppsProd')
```
This method returns the attachmentId, which is used in the routing methods.

## Attaching a VPC to a TransitGateway in Appliance Mode.
(very beta and potentially buggy)
TODO: Write doc's


### Adding Routes to Cloudwan attached VPC's

A number of convience methods are provided to add routes to the cloudwan; For example to add a default route (0/0) in all privatesubnets

```
shineyVpc.addRouteForPrivateSubnetstoCloudwan('0.0.0.0/0', attachmentId)
```

Similar method exisits for PublicSubnets, TransitGateways Instances and Firewalls. 


### Internal Route53 Zones

A internal Route53 Zone can be created and associated with the Vpc, by specifying the r53InternalZoneName property
```
const shineyEpvc = new Evpc(this, 'EnterpriseVPC', {
	r53InternalZoneName: 'internal.somedomain.cloud',
})
```

## DNS Methods
To do.
associateVPCZonewithCentralVPC
associateSharedRoute53ResolverRules



# IPAM  

This package contains constructs for integrating with **Amazon IP Address Manager**.  While the IPAM Service is GA and provides a very useful service, only a handful of services natively support ingesting a IPAM allocated address ( ie, VPC ). 

For futher infomation on Amazon IPAM, see the [IPAM Documentation](https://docs.aws.amazon.com/vpc/latest/ipam/getting-started-ipam.html)



### Using IPAM for IPsec VPN tunnel addresses ###

The Cidr ranges for IPSec VPN Tunnels must comply to several constraints.  
- they must be a /30
- they must be subnets of 169.254.0.0/16 
- they must not conflict with the reserved subnets ( see docs above )

The following example demonstrates how the constructs can be used to create an address Pool and suitable allocations, that met these criteria

```

const tunnelIPAMPool = new kapua_ipam.IpsecTunnelPool(this, 'ipampool', {
	ipamScopeId: 'ipam-scope-00112233445566778',
	cidr: '169.254.100.0/27',
	description: 'Addressing for IPSec Tunnels between ap-southeast-2 and on prem',
	name: 'ToOnPremVPNTunnels'
})


var assignedCidrs: string[] = []

const tunnelAllocation = new GetTunnelAddressPair(this, `${name}tunneladdress`,{
	ipamPoolId: tunnelIPAMPool.attrIpamPoolId,
	name: name
})

assignedCidrs = tunnelAllocation.assignedCidrPair

```