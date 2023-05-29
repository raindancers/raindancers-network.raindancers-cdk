import * as cdk from 'aws-cdk-lib';
import {
  aws_ec2 as ec2,
  aws_networkfirewall as firewall,
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


/**
 * Propertys of a Network Firewall
 */
export interface NetworkFirewallProps {
  /**
   * the the vpc where the Network firewall is placed
   */
  readonly vpc: ec2.Vpc | ec2.IVpc;
  /**
   * the subnetGroup where the firewall will be created.
   */
  readonly subnetGroup: string;
  /**
   * the name that will be given to the firewall
   */
  readonly firewallName: string;
  /**
   * the firewalls policy
   */
  readonly firewallPolicy: firewall.CfnFirewallPolicy;
}

/**
 * Creates Network Firewalls
 */
export class NetworkFirewall extends constructs.Construct {

  /**
   * Gateway Endpoints for the Firewalls
   */
  public readonly endPointIds: string[];
  /**
   * Arn of the firewall
   */
  public readonly firewallArn: string;
  /**
   * Firewall ID
   */
  public readonly firewallId: string;

  /**
   *
   * @param scope Scope
   * @param id id
   * @param props props
   */
  constructor(scope: constructs.Construct, id: string, props: NetworkFirewallProps) {
    super(scope, id);

    let firewallSubnetList: firewall.CfnFirewall.SubnetMappingProperty[] = [];
    	firewallSubnetList = props.vpc.selectSubnets({ subnetGroupName: 'firewall' }).subnets.map(subnet =>
      	({ subnetId: subnet.subnetId }),
    	);

    const fw = new firewall.CfnFirewall(this, 'KatieFW', {
      firewallName: props.firewallName,
      firewallPolicyArn: props.firewallPolicy.attrFirewallPolicyArn,
      subnetMappings: firewallSubnetList,
      vpcId: props.vpc.vpcId,
    });

    // CloudWatch Logs group to store Network Firewall flow logs
    const fwFlowLogsGroup = new logs.LogGroup(this, 'FWFlowLogsGroup', {
      logGroupName: `${props.firewallName}FlowLogs`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
		  });

    // CloudWatch Logs group to store Network Firewall alert logs
    const fwAlertLogsGroup = new logs.LogGroup(this, 'FWAlertLogsGroup', {
      logGroupName: `${props.firewallName}AlertLogs`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
		  });

    // Firewall logging configuration to enable both flow and alert logs
    new firewall.CfnLoggingConfiguration(this, 'FirewallLogConf', {
      firewallArn: fw.ref,
      loggingConfiguration: {
        logDestinationConfigs: [
          {
            logDestination: { logGroup: fwFlowLogsGroup.logGroupName },
            logDestinationType: 'CloudWatchLogs',
            logType: 'FLOW',
          },
          {
            logDestination: { logGroup: fwAlertLogsGroup.logGroupName },
            logDestinationType: 'CloudWatchLogs',
            logType: 'ALERT',
          },
        ],
      },
    });


    this.firewallArn = fw.attrFirewallArn;
    this.firewallId = fw.attrFirewallId;
    this.endPointIds = fw.attrEndpointIds;

  } // endof connectToCloudWan
}// end of class

