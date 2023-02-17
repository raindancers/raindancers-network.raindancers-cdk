import * as path from 'path';
import {
  custom_resources as cr,
  aws_lambda,
  aws_iam as iam,
  aws_ec2 as ec2,
  aws_ram as ram,
}
  from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
import { DynamicTagResourceGroup, DynamicTagResourceGroupSet } from './resourceGroups';
import { StatefulRuleDatabase } from './statefuldatabase';
export enum StatefulAction {
  /**
   * Traffic will pass
   */
  PASS = 'pass',
  /**
   * Traffic will be droped silently. Note, When will cause a timeout for TCP, Consider using REJECT
   */
  DROP = 'drop',
  /**
   * Traffic will be dropped, and a TCP reset sent to the source
   */
  REJECT = 'reject',
  /**
   * Raises an alert according to the firewalls logging/alert
   */
  ALERT = 'alert',
}

export enum FWProtocol {
  TCP = 'tcp',
  UPD = 'udp',
  ICMP = 'icmp',
  IP = 'ip',
  HTTP = 'http',
  TLS = 'tls'
}

export enum Direction {
  /**
   * Traffic allowed from Src to destination only
   */
  OUTBOUND = '->',
  /**
   * Traffic allowed in both directions
   */
  BOTH = '<>'
}

export type SrcDstAddr = string | PrefixList | DynamicTagResourceGroup;
export type SrcDstPort = string;


export interface SuricataRuleProps{
  readonly name: string;
  readonly action: StatefulAction;
  readonly protocol: FWProtocol;
  readonly source: SrcDstAddr;
  readonly destination: SrcDstAddr;
  readonly srcPort: SrcDstPort;
  readonly destPort: SrcDstPort;
  readonly direction: Direction;
}

export interface FQDNStatefulRuleProps extends SuricataRuleProps {
  readonly fqdn: string;
  readonly priority?: number | undefined;
  readonly rulesDatabase?: StatefulRuleDatabase | undefined;
}

export interface PrefixListSetInterface {
  readonly arn: string;
  readonly name: string;
}

export interface ReferenceSet {
  readonly arn: string;
  readonly name: string;
}

type PrefixListSet = PrefixListSetInterface


export class FQDNStatefulRule extends constructs.Construct {

  public uuid: string;
  public prefixListSet: PrefixListSet[] = [];
  public resourceGroupSets: DynamicTagResourceGroupSet[] = [];


  constructor(scope: constructs.Construct, id: string, props: FQDNStatefulRuleProps) {
    super( scope, id);

    if (!([FWProtocol.HTTP, FWProtocol.TLS].includes(props.protocol))) {
      throw new Error('The protocol for FQDN Rules must be HTTP or TLS');
    }

    let priority = 1;
    if (props.priority) {
      priority = props.priority;
    }
    let matchingMessage = 'matching denyed FQDNs';
    if (props.action == StatefulAction.PASS) {
      matchingMessage = 'matching allowed FQDNs';
    }

    var options: string = '';
    if (props.protocol === FWProtocol.HTTP) {
      options = `(http.host; content:"${props.fqdn}"; startswith; endswith; msg:"${matchingMessage}"; priority:${priority}; flow:to_server, established;`; //sid:${getSid()}; rev:1;)`
    }

    if (props.protocol === FWProtocol.TLS) {
      options = `(tls.sni; content:"${props.fqdn}"; startswith; endswith; msg:"${matchingMessage}"; priority:${priority}; flow:to_server, established;`; //sid:${getSid()}; rev:1;)`
    }

    let source = '';

    if (props.source instanceof PrefixList) {
      source = '@' + props.source.prefixlist.prefixListName;
      this.prefixListSet.push(props.source.prefixListSet);
    } else if (props.source instanceof DynamicTagResourceGroup) {
      source = '@' + props.source.name;
      this.resourceGroupSets.push({ name: props.source.name, arn: props.source.groupArn });
    } else {
      source = props.source as string;
    }

    let destination = '';
    if (props.destination instanceof PrefixList) {
      destination = '@' + props.destination.prefixlist.prefixListName;
      this.prefixListSet.push(props.destination.prefixListSet);
    } else if (props.destination instanceof DynamicTagResourceGroup) {
      source = '@' + props.destination;
      this.resourceGroupSets.push({ name: props.destination.name, arn: props.destination.groupArn });

    } else {
      destination = props.destination as string;
    }

    var rule = ''.concat(
      props.action, ' ', //drop
      props.protocol, ' ', // protocol
      source, ' ', // @example
      props.srcPort, ' ', // any
      props.direction, ' ', // ->
      destination, ' ', // $EXTERNAL_NET
      props.destPort, ' ', // any
      options,
    );

    const suricataRule = new cdk.CustomResource(this, `${id}customresource`, {
      serviceToken: props.rulesDatabase?.crudServiceToken as string,
      properties: {
        Rule: rule,
      },
    });

    this.uuid = suricataRule.getAttString('UUID');


  }
}


export enum IPAddressFamily {
  IPV4 = 'IPv4',
  IPV6 = 'IPv6'
}


export interface PrefixListProps {
  readonly addressFamily: IPAddressFamily;
  readonly prefixListName: string;
  readonly maxEntries: number;
}

export interface PrefixListEntry {
  readonly cidr: string;
  readonly description: string;
}


export class PrefixList extends constructs.Construct {

  public readonly prefixlist: ec2.CfnPrefixList;
  public readonly prefixlistArn: string;
  public readonly prefixListSet: PrefixListSet;

  private entries: PrefixListEntry[] = [];

  constructor(scope: constructs.Construct, id: string, props: PrefixListProps) {
    super( scope, id);

    this.prefixlist = new ec2.CfnPrefixList(this, `prefix-list${id}`, {
      addressFamily: props.addressFamily,
      prefixListName: props.prefixListName,
      maxEntries: props.maxEntries,
      entries: this.entries,
    });

    this.prefixlistArn = this.prefixlist.attrArn;
    this.prefixListSet = { arn: this.prefixlist.attrArn, name: props.prefixListName };

  }

  public addEC2Instance(props: ec2.Instance): void {

    this.entries.push(
      {
        cidr: props.instancePrivateIp + '/32',
        description: props.instancePrivateDnsName,
      },
    );
  }
}

export interface NWFWRulesEngine {
  readonly firewallAccount: string;
  readonly rulesDatabase: StatefulRuleDatabase;
}


export interface SuricataRuleGroupProps{
  readonly ruleGroupName: string;
  readonly description?: string | undefined;
  readonly suricataRules?: FQDNStatefulRule[]; // add ohter kinds of rules in here.
  readonly capacity: number;
  readonly networkFirewallEngine: NWFWRulesEngine;
  //readonly rulesDatabase: StatefulRuleDatabase;
}

export class SuricataRuleGroup extends constructs.Construct {

  public ruleGroupArn: string = '';

  private ruleReferenceSets: ReferenceSet[] =[];
  private ruleuuidlist: string[] = [];
  private rulesDatabase: StatefulRuleDatabase;
  private crLambda: aws_lambda.Function;

  constructor(scope: constructs.Construct, id: string, props: SuricataRuleGroupProps) {
    super( scope, id);

    this.rulesDatabase = props.networkFirewallEngine.rulesDatabase;

    const suricataRuleGroupLambda = new aws_lambda.Function(this, 'fqdnLambda', {
      timeout: cdk.Duration.seconds(300),
      runtime: aws_lambda.Runtime.PYTHON_3_9,
      handler: 'suricata_rule.on_event',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, '../../lambda/firewall'), {
        bundling: {
          image: aws_lambda.Runtime.PYTHON_3_9.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      environment: {
        TableName: props.networkFirewallEngine.rulesDatabase.policyTable.tableName,
      },
    });

    this.crLambda = suricataRuleGroupLambda;

    suricataRuleGroupLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        actions: [
          'network-firewall:DescribeRuleGroup',
          'network-firewall:DeleteRuleGroup',
          'network-firewall:CreateRuleGroup',
          'network-firewall:UpdateRuleGroup',
          'iam:CreateServiceLinkedRole',
          'ec2:GetManagedPrefixListEntries',
          'resource-groups:Get*',
          'resource-groups:List*',
        ],
      }),
    );


    props.networkFirewallEngine.rulesDatabase.policyTable.grantReadData(suricataRuleGroupLambda);

    // this is not permitted by default in 'read?'
    suricataRuleGroupLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: [props.networkFirewallEngine.rulesDatabase.policyTable.tableArn],
        actions: [
          'dynamodb:PartiQLSelect',
        ],
      }),
    );


    const suricataRuleCr = new cdk.CustomResource(this, `${props.ruleGroupName}customresource`, {
      serviceToken: new cr.Provider(this, `${props.ruleGroupName}serviceprovider`, {
        onEventHandler: this.crLambda,
      }).serviceToken,
      properties: {
        Capacity: props.capacity,
        RuleGroupName: props.ruleGroupName,
        Description: props.description,
        Rules: this.ruleuuidlist,
        ReferenceSets: this.ruleReferenceSets,
      },
    });


    this.ruleGroupArn = suricataRuleCr.getAttString('RuleGroupArn');

    new ram.CfnResourceShare(this, 'shareRuleGroup', {
      name: props.ruleGroupName,
      allowExternalPrincipals: false,
      principals: [props.networkFirewallEngine.firewallAccount],
      resourceArns: [this.ruleGroupArn],
    });


  }


  public addRule(props: FQDNStatefulRuleProps): void {

    let priority = 1;
    if (props.priority) {
      priority = props.priority;
    }

    let rulesDatabase: StatefulRuleDatabase = this.rulesDatabase;

    // create a new rule, and insert it in the table.
    const ruleToAdd = new FQDNStatefulRule(this, props.name + 'FQDNRule', {
      name: props.name,
      action: props.action,
      protocol: props.protocol,
      source: props.source,
      destination: props.destination,
      srcPort: props.srcPort,
      destPort: props.destPort,
      direction: props.direction,
      fqdn: props.fqdn,
      priority: priority,
      rulesDatabase: rulesDatabase,

    });


    this.ruleuuidlist.push(ruleToAdd.uuid);


    // add prefixlists to the RulereferenceSets
    ruleToAdd.prefixListSet.forEach((plset) => {

      // need to check if adding this to to the ruleprefix list is bad.
      const checklist = this.ruleReferenceSets;
      checklist.push(plset);
      const errorCheck = checkForDuplicateNamedPL(checklist); // this will raise an error if there is one
      if (errorCheck.length > this.ruleReferenceSets.length) { // we had a new unique one, so we can add it
        this.ruleReferenceSets.push(plset);
      }
    });

    // add TagGroups: TODO. THis needs some validation.
    ruleToAdd.resourceGroupSets.forEach((resourceGroup) => {
      this.ruleReferenceSets.push(resourceGroup);
    });

  }
}

function checkForDuplicateNamedPL(prefixlistSet:PrefixListSetInterface[]): PrefixListSetInterface[] {

  const unique = [...new Set(prefixlistSet.map(item => item.name))];
  unique.forEach((setname) => {
    const filtered = prefixlistSet.filter((obj) => {
      return obj.name === setname;
    });
    if (filtered.length > 1) {
      const uniqueArn = [...new Set(filtered.map(item => item.arn))];
      if (uniqueArn.length > 1) {
        throw Error(`Reference Set names must be unique. Set name ${setname} has been used more than once`);
      }
    }
  });
  return [...new Map(prefixlistSet.map((item) => [item.arn, item])).values()];
}