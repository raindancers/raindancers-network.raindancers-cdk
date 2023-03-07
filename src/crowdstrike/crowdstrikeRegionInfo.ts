export enum CrowdStrikeCloud {
  US1 = 'US1',
  US2 = 'US2',
  EU1 = 'EU1'
}

export enum CrowdStrikeRegion {
  US_WEST_1 = 'us-west-1',
  US_WEST_2 = 'us-west-2',
  EU_CENTRAL_1 = 'us-central-1'
}

export interface Endpoint {
  readonly dnsName: string;
  readonly vpcEndpointName: string;
}

export interface CrowdStrikeServices {
  readonly sensorProxy: Endpoint;
  readonly downloadServer: Endpoint;
  readonly awsRegion: CrowdStrikeRegion;
}

export class CrowdStrikePrivateLink {

  static readonly US1 = new CrowdStrikePrivateLink(
    'US1', {
      sensorProxy: {
        dnsName: 'ts01-b.cloudsink.net',
        vpcEndpointName: 'com.amazonaws.vpce.us-west-1.vpce-svc-08744dea97b26db5d',
      },
      downloadServer: {
        dnsName: 'lfodown01-b.cloudsink.net',
        vpcEndpointName: 'com.amazonaws.vpce.us-west-1.vpce-svc-0f9d8ca86ddcb7106',
      },
      awsRegion: CrowdStrikeRegion.US_WEST_1,
    },
  );

  static readonly US2 = new CrowdStrikePrivateLink(
    'US2', {
      sensorProxy: {
        dnsName: 'ts01-gyr-maverick.cloudsink.net',
        vpcEndpointName: 'com.amazonaws.vpce.us-west-2.vpce-svc-08a5bb05d337fd834',
      },
      downloadServer: {
        dnsName: 'lfodown01-gyr-maverick.cloudsink.net',
        vpcEndpointName: 'com.amazonaws.vpce.us-west-2.vpce-svc-0e11def2d8620ae74',
      },
      awsRegion: CrowdStrikeRegion.US_WEST_2,
	  },
  );

  static readonly EU1 = new CrowdStrikePrivateLink(
    'EU1', {
      sensorProxy: {
        dnsName: 'ts01-lanner-lion.cloudsink.net',
        vpcEndpointName: 'com.amazonaws.vpce.eu-central-1.vpce-svc-0eb7b6ca4b7271385',
      },
      downloadServer: {
        dnsName: 'lfodown01-lanner-lion.cloudsink.net',
        vpcEndpointName: 'com.amazonaws.vpce.eu-central-1.vpce-svc-0340142b9ab8fc564',
      },
      awsRegion: CrowdStrikeRegion.EU_CENTRAL_1,
    },
  );

  private constructor(private readonly key: string, public readonly value: CrowdStrikeServices) {}

  toString() {
    return this.key;
  }
}
