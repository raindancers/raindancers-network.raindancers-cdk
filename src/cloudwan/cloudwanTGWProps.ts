import {
  aws_ec2 as ec2,
  IResolvable,
  aws_s3 as s3,
}
  from 'aws-cdk-lib';

import * as CloudWan from './cloudWan';

/**
 * Specify the use of public or private IP address's for Site to Site VPN
 */
export enum OutsideIpAddressType{
  /** Use Private IPv4 Address from the Transit Gateways IP address Pool */
  PRIVATE = 'PrivateIpv4',
  /** Use Public IPv4 Address Assigned by AWS */
  PUBLIC = 'PublicIpv4'
}

/**
 * Determine if this is an IPv4 or IPv6 Tunnel
 */
export enum TunnelInsideIpVersion{
  /** Use IPv4 */
  IPV4 = 'ipv4',
  /** Use IPv6 */
  IPV6 = 'ipv6'
}
/** Dead Peer Detection Timeout Actions */
export enum DPDTimeoutAction{
  /** Clear the Session */
  CLEAR = 'clear',
  /** Do nothing */
  NONE = 'none',
  /** Restart The Session */
  RESTART = 'restart'
}
/** Startup Action for S2S VPN */
export enum StartupAction{
  /** AWS end to Intiate Startup */
  START = 'start',
  /** Do not attempt to startup */
  ADD = 'add',
}
/** Ike Version for S2S VPN */
export enum IkeVersion{
  /** Use IKEv1 */
  IKEV1 = 'ikev1',
  /** Use IKEv2 */
  IKEV2 = 'ikev2'
}
// TODO: add other types. perhaps write a utiliity `https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVpnConnectionDeviceSampleConfiguration.html

/** Remote end Device Types  */
export enum VpnDeviceType{
  /** Checkpoint R77_10 */
  CHECKPOINT_R77_10 = '36ef5d04',
  //** Checkpoint R80_10 */
  CHECKPOINT_R80_10 = '1b270706',
  //** Cisco ISR 12.4+ */
  CISCO_ISR_12_4 = 'b0adb196',
  //** Cisco ASR 1000  */
  CISCO_ASR_12_4 = '48548f98'
}


export enum Phase1DHGroupNumbers{
  DH2 = 2,
  DH14 = 14,
  DH15 = 15,
  DH16 = 16,
  DH17 = 17,
  DH18= 18,
  DH19 = 19,
  DH20 = 20,
  DH21 = 21,
  DH22 = 22,
  DH23 = 23,
  DH24 = 24
}

export enum Phase1EncryptionAlgorithms{
  AES128 = 'AES128',
  AES256 = 'AES256',
  AES128_GCM_16 = 'AES128-GCM-16',
  AES256_GCM_16 = 'AES256-GCM-16'
}

export enum Phase1IntegrityAlgorithms{
  SHA1 = 'SHA1',
  SHA2_256 = 'SHA2-256',
  SHA2_384 = 'SHA2-384',
  SHA2_512 = 'SHA2-512'
}

export enum Phase2DHGroupNumbers{
  DH2 = 2,
  DH5 = 5,
  DH14 = 14,
  DH15 = 15,
  DH16 = 16,
  DH17 = 17,
  DH18= 18,
  DH19 = 19,
  DH20 = 20,
  DH21 = 21,
  DH22 = 22,
  DH23 = 23,
  DH24 = 24
}

export enum Phase2EncryptionAlgorithms{
  AES128 = 'AES128',
  AES256 = 'AES256',
  AES128_GCM_16 = 'AES128-GCM-16',
  AES256_GCM_16 = 'AES256-GCM-16'
}

export enum Phase2IntegrityAlgorithms{
  SHA1 = 'SHA1',
  SHA2_256 = 'SHA2-256',
  SHA2_384 = 'SHA2-384',
  SHA2_512 = 'SHA2-512'
}


/** Properties for a TWGOnCloudWan */
export interface TGWOnCloudWanProps {
  //** an Amazon Side ASN */
  readonly amazonSideAsn: string;
  //** description of the TGW */
  readonly description: string;
  //** tag for the Attachment */
  readonly attachmentSegment: string;
  //** the Clouwan CoreNetwork this will be attached to */
  readonly cloudwan: CloudWan.CoreNetwork;
  //** A list of segments to add default routes to this TG for */
  readonly defaultRouteInSegments?: string[] | undefined;
  //** A Cidr that represents all the routes in the Cloudwan */
  readonly cloudWanCidr?: string[] | undefined;
  //** A list of Cidrs that can be used for VPN Site to Site Tunnel endpointes */
  readonly tgCidr?: string[] | undefined;
}


/**
 * THe properties for a S2S Ipsec Vpn Connection
 * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html
 */
export interface VpnSpecProps {

  /**The IKE versions that are permitted for the VPN tunnel. */
  readonly ikeVersions?: IkeVersion[] | undefined;

  /** Indicate whether to enable acceleration for the VPN connection */
  readonly enableAcceleration?: boolean | undefined;

  /** Indicate if this will only use Static Routes Only */
  readonly staticRoutesOnly?: boolean | IResolvable | undefined;

  /** @default 0.0.0.0/0 The IPv4 CIDR on the AWS side of the VPN connection. */
  readonly localIpv4NetworkCidr?: string | undefined;

  /** @default 0.0.0.0/0 The IPv4 CIDR on the Remote side of the VPN connection. */
  readonly remoteIpv4NetworkCidr?: string | undefined;

  /** @default PUBLIC The type of IPv4 address assigned to the outside interface of the customer gateway device. */
  readonly outsideIpAddressType?: OutsideIpAddressType | undefined;

  /**	@default IPV4 Indicate whether the VPN tunnels process IPv4 or IPv6 traffic. */
  readonly tunnelInsideIpVersion?: TunnelInsideIpVersion | undefined;

  /** @default CLEAR The action to take after DPD timeout occurs. Specify restart to restart the IKE initiation. Specify clear to end the IKE session. */
  readonly dpdTimeoutAction?: DPDTimeoutAction | undefined;

  /** @default 30 The number of seconds after which a DPD timeout occurs. */
  readonly dpdTimeoutSeconds?: number | undefined;


  /** Enable CloudwatchLogging for the S2S VPN */
  readonly enableLogging?: boolean | undefined;

  /** One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. */
  readonly phase1DHGroupNumbers?: Phase1DHGroupNumbers[] | undefined;

  /** One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. */
  readonly phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithms[] | undefined;

  /** One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. */
  readonly phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithms[] | undefined;

  /** The lifetime for phase 1 of the IKE negotiation, in seconds */
  readonly phase1LifetimeSeconds?: number | undefined;

  /** One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. */
  readonly phase2DHGroupNumbers?: Phase2DHGroupNumbers[] | undefined;

  /** One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. */
  readonly phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithms[] | undefined;

  /** One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. */
  readonly phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithms [] | undefined;

  /** The lifetime for phase 2 of the IKE negotiation, in seconds. */
  readonly phase2LifeTimeSeconds?: number | undefined;

  /** @default 100 The percentage of the rekey window (determined by RekeyMarginTimeSeconds) during which the rekey time is randomly selected. */
  readonly rekeyFuzzPercentage?: number | undefined; // validated

  /** @default 540 The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for RekeyFuzzPercentage. */
  readonly rekeyMarginTimeSeconds?: number | undefined; // validated

  /** @default 1024 The number of packets in an IKE replay window. */
  readonly replayWindowSize?: number | undefined; // validated

  /** The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation. */
  readonly startupAction?: StartupAction | undefined; //enum
}

/** An interface that defines a set of Sample Configurations  */
export interface SampleConfig {
  /** The S3 bucket where to place the sample configurations */
  readonly bucket: s3.Bucket;
  /** the type of device of the customer gateway */
  readonly deviceType: VpnDeviceType;
  /** create configs for IKE1 or IKE2 */
  readonly ikeVersion: IkeVersion;
}

/** Properties for S2S VPN */
export interface VpnProps {
  /** The customer gateway where the vpn will terminate */
  readonly customerGateway: ec2.CfnCustomerGateway;
  /** a VPN specification for the VPN */
  readonly vpnspec: VpnSpecProps;
  /** Specify a pair of concrete Cidr's for the tunnel. Only use one of tunnelInsideCidr or tunnelIpmamPool */
  readonly tunnelInsideCidr?: string[] | undefined;
  /** Specify an ipam pool to allocated the tunnel address's from. Use only one of tunnelInsideCidr or tunnelIpamPool */
  readonly tunnelIpamPool?: ec2.CfnIPAMPool | undefined;
  /** Optionally provide a sampleconfig specification */
  readonly sampleconfig?: SampleConfig;
  //readonly dxAssociationId?: string | undefined;
}


