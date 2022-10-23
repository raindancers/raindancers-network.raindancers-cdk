import {
  aws_ec2 as ec2,
  custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

function ipToInt32(ip: string) {
  const ipSplit = ip.split('.');
  var ipInt: number = 0;
  ipSplit.forEach((value, index) => {
	  var octect: number = value as unknown as number;
	  ipInt += octect * Math.pow(2, (24-index*8));
  });

  return ipInt;
}

/**
* Properties for obtaining an IPAM assigned address pair for use on IPsec VPN Tunnels.
*/
export interface GetTunnelAddressPairProps {

  /** The IPAM Pool Id from which the assginment will be made from  */
  readonly ipamPoolId: string;

  /** The Name used by IPAM to record the allocation  */
  readonly name: string;
}

/**
 * Allocate a pair of /30 networks CIDRS for use in Ipsec VPN Tunnels
 */

export class GetTunnelAddressPair extends constructs.Construct {
  /**
	 * returns 2 cidr blocks as an array to be used by an IPsec Tunnel
	 */
  public readonly assignedCidrPair: string[];

  /**
	 *
	 * @param scope scope in which this resource is created
	 * @param id scope id of the resoruce
	 * @param props resource properties
	 */
  constructor(scope: constructs.Construct, id: string, props: GetTunnelAddressPairProps) {
	  super(scope, id);

    const assignedCidrs: string[] = [];

    for (let i=1; i <=2 ; i++) {

      const allocation = new ec2.CfnIPAMAllocation(this, `IPAMAllocationtunnel${i}`, {
        ipamPoolId: props.ipamPoolId,
        description: `vpn tunnel ${i} to ${props.name}`,
        netmaskLength: 30,
      });

      const allocationCidr = new cr.AwsCustomResource(this, `tunnel${i}cidr`, {
        onCreate: {
          service: 'EC2',
          action: 'getIpamPoolAllocations',
          parameters: {
            IpamPoolId: props.ipamPoolId,
            IpamPoolAllocationId: allocation.attrIpamPoolAllocationId,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });

      assignedCidrs.push(allocationCidr.getResponseField('IpamPoolAllocations.0.Cidr'));
    }

    this.assignedCidrPair = assignedCidrs;

  }
}

/**
 * Properties for defining a IPAM Pool specifically for IPSec VPN Tunnels
 */
export interface IpsecTunnelPoolProps {

  /** The IPAM Scope Id to use to create the Pool */
  readonly ipamScopeId: string;

  /** The Cidr range for pools to be created from
	 *      eg, 169.254.100.0/27
	 * The cidr must be in the 169.254.0.0/16 range and
	 * must be a minimum of a /29 and a maximum of /24.
	 *
	 * It must also not overlap the AWS reserved ranges. T
	 */
  readonly cidr: string;

  /** the name used by IPAM to identify the pool */
  readonly name: string;

  /** the description used by IPAM to describe the pool */
  readonly description: string;
}

/**
 * Creates an IPAM pool to assign address's for IPsec VPNS
 */
export class IpsecTunnelPool extends constructs.Construct {

  /**
	 * returns the created ipam Pool
	 */
  public readonly ipampool: ec2.CfnIPAMPool;

  /**
	 *
	 * @param scope scope in which this resource is defined
	 * @param id id of the resource
	 * @param props resource properties
	 */
  constructor(scope: constructs.Construct, id: string, props: IpsecTunnelPoolProps) {
    super(scope, id);


    // check to see that cidr starts with 169.254
    if (!(props.cidr.startsWith('169.254'))) {
      throw new Error('Tunnel Cidrs must be in teh 169.254/16 range');
    }

    const netmask = props.cidr.split('/')[1] as unknown as number;


    // check to see that the mask is between /24 and /29
    if (!(netmask >= 24 && netmask <= 29 )) {
      throw new Error('Tunnels Mask must be in the range 24 to 29 inclusive ');
    }

    // check to see if the the cidr overlaps the reserved address's
    const networkAddress = ipToInt32(props.cidr.split('/')[0]);

    const reservedTunnelAddress = [
		  '169.254.0.0/30',
		  '169.254.1.0/30',
		  '169.254.2.0/30',
		  '169.254.3.0/30',
		  '169.254.4.0/30',
		  '169.254.5.0/30',
		  '169.254.169.252/30',
    ];

    reservedTunnelAddress.forEach((checkAddr) => {
      console.log(checkAddr);
      const rsvAddr = ipToInt32(checkAddr.split('/')[0]);
      if (rsvAddr >= networkAddress && rsvAddr <= networkAddress + Math.pow(2, 32-netmask)) {
        throw new Error(`The cidr ${props.cidr} includes the reserved range ${checkAddr}`);
      }
    });


    this.ipampool = new ec2.CfnIPAMPool(this, 'IPAMPool', {
      addressFamily: 'ipv4',
      ipamScopeId: props.ipamScopeId,
      allocationDefaultNetmaskLength: 30,
      allocationMaxNetmaskLength: 30,
      allocationMinNetmaskLength: 30,
      description: props.description,
      provisionedCidrs: [
        {
          cidr: props.cidr,
        },
      ],
      tags: [{
        key: 'Name',
        value: props.name,
      }],
    });
  }

}