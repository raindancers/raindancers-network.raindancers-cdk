import * as path from 'path';

import * as cdk from 'aws-cdk-lib';

import {
  aws_route53resolver as r53r,
  custom_resources as cr,
  aws_logs as logs,
  aws_iam as iam,
  aws_lambda,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export enum DNSFirewallActions {
  ALLOW = 'ALLOW',
  BLOCK = 'BLOCK',
  ALERT = 'ALERT'
}

export enum DNSFirewallBlockResponse {
  NODATA = 'NODATA',
  NXDOMAIN = 'NXDOMAIN',
  OVERRIDE = 'OVERRIDE'
}

export class AwsManagedDNSFirewallRuleGroup extends constructs.Construct {

  resolverRuleId: string;

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    // this lambda will make a api-call to find the ids of the managed aws dns firewalls
    // aws route53resolver list-firewall-domain-lists
    // because this api call does not have a filter parameter and needs sorting it
    // is not a good candidate for a awscustomresource/sdk call.
    // the ids for the rule groups are different in every region.

    const lookupFunction = new aws_lambda.Function(this, 'FindRules', {
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      logRetention: logs.RetentionDays.ONE_MONTH,
      handler: 'managedAWSRules.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/dns')),
      timeout: cdk.Duration.seconds(300),
    });

    // give the lambda's role addtional permissions so it can make the required calls.
    // the addToRolePolicy method will add this as inline policy to the lambdas role.
    lookupFunction.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['route53resolver:ListFirewallDomainLists'],
        effect: iam.Effect.ALLOW,
        resources: ['*'],
      }),
    );

    // create a lambda backed cloudformation custom resource.
    // the lambda function will interact with cloudformaton events ( create, delete, update )
    // this provides a way to plug coverage gaps in cloudformation, or perform logic that woudl
    // be difficult or impossible to do otherwise.

    const awsManagedRules = [
      'AWSManagedDomainsMalwareDomainList',
      'AWSManagedDomainsAggregateThreatList',
      'AWSManagedDomainsBotnetCommandandControl',
    ];

    const lookupCr = new cdk.CustomResource(this, 'lookupCr', {
      resourceType: 'Custom::Lookup',
      properties: {
        // propertys are sent to the lambda as part of the event information
        // in this case a list of rule names that we want to find.
        awsManagedRules: awsManagedRules,
      },
      //the service token, and provider are the mechamism of how the lambda is connected
      //to the custom resource
      serviceToken: new cr.Provider(this, 'associateProvider', {
        onEventHandler: lookupFunction,
      }).serviceToken,
    });

    //aws route53resolver list-firewall-domain-lists --profile network

    // the .getAtt() method, provides a way to get the result of the function that was called back.
    // in this case we are expecting a list, so, we the Token.asList method to convert that as a list.

    const firewallDomainListsIds = cdk.Token.asList(lookupCr.getAtt('ManagedRuleIds'));

    // interate over the list of Ids that where returned. We will get one id, for each item that we requested
    // from the lookup. we can not directly iterate over the list, as the list does not exisit until deployment.


    const firewallRules: r53r.CfnFirewallRuleGroup.FirewallRuleProperty[] = [];
    for (let index = 0; index < awsManagedRules.length; index++) {
      firewallRules.push({
        action: DNSFirewallActions.BLOCK,
        firewallDomainListId: cdk.Fn.select(index, firewallDomainListsIds),
        priority: 100 + index,
        blockResponse: DNSFirewallBlockResponse.NODATA,
      });
    };

    const FirewallRuleGroup = new r53r.CfnFirewallRuleGroup(this, 'AwsManagedDNSFirewallRules', {
      firewallRules: firewallRules,
      name: 'AWS Managed Rules',
    });

    this.resolverRuleId = FirewallRuleGroup.attrId;

  }
}