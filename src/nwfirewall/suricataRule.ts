import * as path from 'path';
import {
  custom_resources as cr,
  aws_lambda,
  aws_iam as iam,
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
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

export type SrcDstAddr = string | PrefixList;
export type SrcDstPort = string;


export interface SuricataRuleProps{
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
  readonly rulesDatabase: StatefulRuleDatabase;
}

export interface PrefixListSetInterface {
  readonly arn: string;
  readonly name: string;
}

type PrefixListSet = PrefixListSetInterface


export class FQDNStatefulRule extends constructs.Construct {

  public uuid: string;
  public prefixListSet: PrefixListSet[] = [];

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
    // the sid and version will get processed by the custom resource
    //drop tls @example any -> $EXTERNAL_NET any (tls.sni; content:"evil.com"; startswith; nocase; endswith; msg:"matching TLS denylisted FQDNs"; priority:1; flow:to_server, established; sid:1; rev:1;)
    //drop http @example any -> $EXTERNAL_NET any (http.host; content:"evil.com"; startswith; endswith; msg:"matching HTTP denylisted FQDNs"; priority:1; flow:to_server, established; sid:2; rev:1;)

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
    } else {
      source = props.source as string;
    }

    let destination = '';
    if (props.destination instanceof PrefixList) {
      destination = '@' + props.destination.prefixlist.prefixListName;
      this.prefixListSet.push(props.destination.prefixListSet);
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
      serviceToken: props.rulesDatabase.crudServiceToken,
      properties: {
        Rule: rule,
      },
    });

    this.uuid = suricataRule.getAttString('UUID');

    console.log('*******prefixlistset**********');
    console.log(this.prefixListSet);
  }
}


export enum IPAddressFamily {
  IPV4 = 'IPv4',
  IPV6 = 'IPv6'
}

export interface CidrType {
  readonly cidr: string;
  readonly description?: string;
}

type CidrList = CidrType[];


export interface PrefixListProps {
  readonly addressFamily: IPAddressFamily;
  readonly prefixListName: string;
  readonly maxEntries: number;
  readonly entries: CidrList;
}


export class PrefixList extends constructs.Construct {

  public readonly prefixlist: ec2.CfnPrefixList;
  public readonly prefixlistArn: string;
  public readonly prefixListSet: PrefixListSet;

  constructor(scope: constructs.Construct, id: string, props: PrefixListProps) {
    super( scope, id);

    this.prefixlist = new ec2.CfnPrefixList(this, `prefix-list${id}`, {
      addressFamily: props.addressFamily,
      prefixListName: props.prefixListName,
      maxEntries: props.maxEntries,
      entries: props.entries,
    });

    this.prefixlistArn = this.prefixlist.attrArn;
    this.prefixListSet = { arn: this.prefixlist.attrArn, name: props.prefixListName };

  }
}


export interface SuricataRuleGroupProps{
  readonly ruleGroupName: string;
  readonly description?: string | undefined;
  readonly suricataRules?: FQDNStatefulRule[]; // add ohter kinds of rules in here.
  readonly capacity: number;
  readonly rulesDatabase: StatefulRuleDatabase;
}

export class SuricataRuleGroup extends constructs.Construct {

  public readonly ruleGroupArn: string;

  private ruleprefixlists: PrefixListSet[] =[];
  private ruleuuidlist: string[] = [];


  constructor(scope: constructs.Construct, id: string, props: SuricataRuleGroupProps) {
    super( scope, id);

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
        TableName: props.rulesDatabase.policyTable.tableName,
      },
    });

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
        ],
      }),
    );


    props.rulesDatabase.policyTable.grantReadData(suricataRuleGroupLambda);

    // this is not permitted by default in 'read?'
    suricataRuleGroupLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: [props.rulesDatabase.policyTable.tableArn],
        actions: [
          'dynamodb:PartiQLSelect',
        ],
      }),
    );

    console.log('referencesets:', this.ruleprefixlists);

    const suricataRuleCr = new cdk.CustomResource(this, `${props.ruleGroupName}customresource`, {
      serviceToken: new cr.Provider(this, `${props.ruleGroupName}serviceprovider`, {
        onEventHandler: suricataRuleGroupLambda,
      }).serviceToken,
      properties: {
        Capacity: props.capacity,
        RuleGroupName: props.ruleGroupName,
        Description: props.description,
        Rules: this.ruleuuidlist,
        ReferenceSets: this.ruleprefixlists, // TODO.  DEDUPLICATE AND Check that There is no Prefixes named the same. 
      },
    });

    this.ruleGroupArn = suricataRuleCr.getAttString('RuleGroupArn');
  }

  public addRule(props: FQDNStatefulRule): void {

    this.ruleuuidlist.push(props.uuid);

    props.prefixListSet.forEach((plset) => {
      console.log(plset);
      this.ruleprefixlists.push(plset);
    });
  }
}