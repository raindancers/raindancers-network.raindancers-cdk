# Attaching a transit Gateway, associating to a DX gateway and creating site to site Ipsec VPNS

In this example, we create and attach a Transit Gateway to the core network ( in the redSegment), associate it to an exisiting DX Gateway, and then create site to Site Ipsec VPN's over the DX network.   This is one of several options for connecting an off cloud/on prem network to a core network. 

You will need to have completed at least the first section of the example.  This assumes that a DX gateway has already been created.

At the time of creation, cloudwan had no integration with DX Gateways.   It seems likely that this will be solved at some point in the future.  Currently the required method is to use a Transit Gateway, which is attached to cloudwan.  The transit Gateway is associated to a Direct Connect Gateway, and Ipsec vpns created to the Transit Gateway.  

The entire file is available [in this gist](https://gist.github.com/mrpackethead/dae981042ac03fa7153f179364431de6)

<diagram>

* 1.1 Create a new file 'lib\tgdxs2s.ts'

* 1.2 Import modules
```typescript
import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
} 
from 'aws-cdk-lib';
import * as constructs from 'constructs';

import * as raindancersNetwork from 'raindancers-network';
```


* 1.3 Create a Transit Gateway and attach it to the core Network.   The 

```typescript
const tg = new raindancersNetwork.CloudWanTGW(this, 'tg', {
      amazonSideAsn: '65200',
      attachmentSegment: props.redSegment.segmentName,
      description: 'DXTransitGateway',
      cloudwan: props.cloudWan,
      tgCidr: ['10.64.254.0/24'], // this is the address block which the TG will use to create prviate VPN tunnels against.
    });
```

1.4 Attach the TransitGateway to a DX Gateway, Providing your DX gateways Id 
```typescript
    const dXAssociationId = tg.createDirectConnectGatewayAssociation('<yourdxgatewayId>');
```

1.5 Create Customer Endpoints where your Ipsec VPN will terminate. Repeat for each endpoint that you wish to create ipsec tunnels to.  Modify the Asn's and Ip addresss's as required to make your environment

```typescript
    const endPointOne = new ec2.CfnCustomerGateway(this, 'endpointone', {
      bgpAsn: 65085,
  			ipAddress: '192.168.168.168',
  			type: 'ipsec.1',
      tags: [
        {
          key: 'Name',
          value: 'endpointOne',
        },
      ],
    });
```
1.6 Create a specification which sets the parameters for the vpn. In our example we only have one specification, however it is possible to have multiple specfications if needed ( for example, if you have different kinds of devices, with differing levels of compatibility ).

This specification will set up BGP routing over the Ipsec Tunnel, using Private Address's, with logging to cloudwatch.   For various other options consult with the the constructs documentation.


```typescript 
// create a Specification Set to build ipsec VPN's out of
    const moeOnPremVPNSpec: raindancersNetwork.VpnSpecProps = {
      // Options
      enableAcceleration: false,
      localIpv4NetworkCidr: '0.0.0.0/0',
      remoteIpv4NetworkCidr: '0.0.0.0/0',
      outsideIpAddressType: raindancersNetwork.OutsideIpAddressType.PRIVATE,
      staticRoutesOnly: false,
      tunnelInsideIpVersion: raindancersNetwork.TunnelInsideIpVersion.IPV4,

      //tunnel options
      dpdTimeoutAction: raindancersNetwork.DPDTimeoutAction.RESTART,
      dpdTimeoutSeconds: 30,
      ikeVersions: [raindancersNetwork.IkeVersion.IKEV2],
      enableLogging: true,
      phase1DHGroupNumbers: [16, 20],
      phase1EncryptionAlgorithms: [raindancersNetwork.Phase1EncryptionAlgorithms.AES256],
      phase1IntegrityAlgorithms: [raindancersNetwork.Phase1IntegrityAlgorithms.SHA2_512],
      phase1LifetimeSeconds: 14400, // fourhours
      phase2DHGroupNumbers: [16, 20],
      phase2EncryptionAlgorithms: [raindancersNetwork.Phase2EncryptionAlgorithms.AES256_GCM_16],
      phase2IntegrityAlgorithms: [raindancersNetwork.Phase2IntegrityAlgorithms.SHA2_512],
      phase2LifeTimeSeconds: 1800,
      replayWindowSize: 512,
    };
```

1.7 Create an IPAM pool for Assigning Tunnels from.  You will need to provide a ipam scope Id.  This provides a way to simply manage 

```typescript
const tunnelIPAMPool = new raindancersNetwork.IpsecTunnelPool(this, 'ipampool', {
      ipamScopeId: '<yourscopeId>',
      cidr: '169.254.100.0/27',
      description: 'Addressing for IPSec Tunnels',
      name: 'OnPremVPNTunnels',
    });
```

1.8 Create Site to Site VPN's using the customer gateways, and specifications already configured
``` typescript
tg.adds2sVPN('endpointOneVpn', {
      customerGateway: endPointOne,
      tunnelIpamPool: tunnelIPAMPool.ipampool,
      vpnspec: VPNSpec,
    });
```

3.1 open and edit `bin/raindancers-network.ts`.

- Import EgressVPC 
```typescript
import { TgDXS2S } from '../lib/tgsdxs2s';
```
- Create an instance of TgDXS2S
```typescript
new TgDXS2S(app, 'Site2SiteVPN', {
  env: { account: '123456789012', region: 'ap-southeast-2' },
  coreNetwork: core.corenetwork,
  redSegment: core.redSegment,
})
```

4.1 Synth and Deploy














