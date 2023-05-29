
import {
  aws_route53 as r53,
  aws_ec2 as ec2,
  aws_iam as iam,
} from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as zonehelpers from './enterpriseZonehelpers';

export interface CrossAccountProps {
  readonly accountId: string;
  readonly roleName?: string;
}

export interface HubVpc {
  /**
   * what region is the central account in.
   */
  readonly region: string;
  readonly vpcSearchTag?: cdk.Tag | undefined;
  readonly crossAccount?: CrossAccountProps | undefined;
}

export interface EnterpriseZoneProps {
  readonly enterpriseDomainName: string;
  readonly localVpc: ec2.Vpc | ec2.IVpc;
  readonly hubVpcs: HubVpc[] | undefined;
}

/**
 * create forwarding rules and associate them with a vpc.
 */
export class EnterpriseZone extends constructs.Construct {
  public readonly privateZone: r53.PrivateHostedZone;

  constructor(scope: constructs.Construct, id: string, props: EnterpriseZoneProps) {
    super(scope, id);

    new cdk.CfnOutput(this, 'domain', { value: props.enterpriseDomainName });

    // create a private zone.
    this.privateZone = new r53.PrivateHostedZone(this, 'privatezone', {
      zoneName: props.enterpriseDomainName,
      vpc: props.localVpc,
    });

    if ( props.hubVpcs ) {


      props.hubVpcs.forEach((hubVpc) => {
        // this is this a central crossaccount assocaition.
        if (hubVpc.crossAccount) {
          // TODO assocaite centrally

          // this is a self account association
        } else {
          new zonehelpers.EnterpriseZoneHelpers(this, `${hubVpc.region}`, {
            zoneId: this.privateZone.hostedZoneId,
            region: hubVpc.region,
            searchTag: hubVpc.vpcSearchTag ?? new cdk.Tag('centralVPCSearchTag', 'RegionalDNSHub'),
          });
        }
      });
    }
  }
}

export interface CentralAccountAssnRoleProps {
  readonly vpc: ec2.Vpc | ec2.IVpc;
  readonly orgId: string;
  readonly roleName?: string | undefined;
}

export class CentralAccountAssnRole extends constructs.Construct {

  public readonly assnRole: iam.Role;

  constructor(scope: constructs.Construct, id: string, props: CentralAccountAssnRoleProps) {
	  super(scope, id);

    // no org has been supplied. Restrict the org to this account

    var assumedBy: iam.IPrincipal;

    if (!(props.orgId)) {
      assumedBy = new iam.AccountPrincipal(cdk.Aws.ACCOUNT_ID);
    } else {
      assumedBy = new iam.OrganizationPrincipal(props.orgId);
    }

    this.assnRole = new iam.Role(this, 'r53assnrole', {
      assumedBy: assumedBy,
      description: 'Role is assumed by lambdas in accounts to associate their zone',
      roleName: ( props.roleName ?? 'r53assnRole' ),
      externalIds: ['R53Assn'],
    });


    // add permissions
    this.assnRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'route53:DisassociateVPCFromHostedZone',
          'route53:AssociateVPCWithHostedZone',
          'ec2:DescribeVpcs',
        ],
        resources: ['*'],
      }),
    );

    new cdk.CfnOutput(this, 'R53RouteAssnRole', {
      value: this.assnRole.roleArn,
    });

  }

}
