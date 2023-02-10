import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import * as network from '../../kapua-network';

export class FwconstructtestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const fwrulesDatabase = new network.StatefulRuleDatabase(this, 'firewallrulesdb');

    const policy = new network.FirewallPolicy(this, 'firewallpolicy', {
      policyName: 'testpolicy',
      statelessDefaultActions: [network.StatelessActions.DROP],
      statelessFragmentDefaultActions: [network.StatelessActions.DROP],
    });


    const httpsAllowed = new network.StatelessRule({
      actions: [network.StatelessActions.STATEFUL],
      priority: 100,
      destinationPorts: ['443'],
      destinations: [{ addressDefinition: '0.0.0.0/0' }], // this needs to be much better!
      protocols: [network.Protocol.TCP],
      sources: [{ addressDefinition: '10.16.0.0/14' }],
    });

    const icmpAllowed = new network.StatelessRule({
      actions: [network.StatelessActions.PASS],
      priority: 200,
      destinations: [{ addressDefinition: '0.0.0.0/0' }], // this needs to be much better!
      protocols: [network.Protocol.ICMP],
      sources: [{ addressDefinition: '10.16.0.0/14' }],
    });

    policy.addStatelessRuleGroup({
      groupName: 'PassToStateful',
      description: 'Standard Ports and Protocols which are allow to pass',
      rules: [
        httpsAllowed.statelessRuleProperty,
        icmpAllowed.statelessRuleProperty,
      ],
    });

    policy.addManagedStatefulRules({
      awsManagedRules: [
        network.ManagedAwsFirewallRules.ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER,
        network.ManagedAwsFirewallRules.BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER,
      ],
    });

    const evilcomhttp = new network.FQDNStatefulRule(this, 'evilcomhttp', {
      action: network.StatefulAction.PASS,
      protocol: network.FWProtocol.HTTP,
      source: {
        addressSet: '10.10.10.0/24',
      },
      destination: {
        addressSet: '0.0.0.0/0',
      },
      srcPort: { portSet: 'any' }, // this is a bit silly
      destPort: { portSet: 'any' }, // this is a bit silly
      direction: network.Direction.OUTBOUND,
      fqdn: 'evil.com',
      rulesDatabase: fwrulesDatabase,
    });

    const evilcomtls = new network.FQDNStatefulRule(this, 'evilcomhttps', {
      action: network.StatefulAction.PASS,
      protocol: network.FWProtocol.TLS,
      source: {
        addressSet: '10.10.10.0/24',
      },
      destination: {
        addressSet: '0.0.0.0/0',
      },
      srcPort: { portSet: 'any' },
      destPort: { portSet: 'any' },
      direction: network.Direction.OUTBOUND,
      fqdn: 'evil.com',
      rulesDatabase: fwrulesDatabase,
    });

    new network.SuricataRuleGroup(this, 'mytestrules', {
      ruleGroupName: 'testrules',
      rulesDatabase: fwrulesDatabase,
      capacity: 1000,
      description: 'testing the suricata rules',
      suricataRules: [
        evilcomhttp,
        evilcomtls,
      ],
    });
  }
}


const app = new cdk.App();
new FwconstructtestStack(app, 'Teststack', {});
app.synth();