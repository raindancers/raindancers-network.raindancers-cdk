import * as redshift from '@aws-cdk/aws-redshift-alpha';
import {
  aws_ec2 as ec2,
  aws_secretsmanager as secretmanager,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface RedshiftClusterProps {
  masterUser: string;
  vpc: ec2.Vpc;
  logging: redshift.LoggingProperties;
  defaultDBName?: string | undefined;
  nodes?: number | undefined;
  nodeType?: redshift.NodeType;
  parameterGroup: redshift.ClusterParameterGroup;
  preferredMaintenanceWindow?: string | undefined; // Example: 'Sun:23:45-Mon:00:15' https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance
  removalPolicy?: cdk.RemovalPolicy | undefined; // use this during dev so, we can trash it.
  subnetGroup: redshift.ClusterSubnetGroup;
}
/**
** Creates a period task to update the SSM Agent on an EC2 Instanc
*/

export class PrivateRedshiftCluster extends constructs.Construct {

  cluster: redshift.Cluster;
  clusterSecurityGroup: ec2.SecurityGroup;
  clusterParameters: redshift.ClusterParameterGroup;

  constructor(scope: constructs.Construct, id: string, props: RedshiftClusterProps) {
    super(scope, id);

    const masterpassword = new secretmanager.Secret(this, 'masterpassword', {});
    this.clusterSecurityGroup = new ec2.SecurityGroup(this, 'clusterSG', {
      vpc: props.vpc,
      allowAllOutbound: false,
    });
    this.clusterParameters = new redshift.ClusterParameterGroup(this, 'Params', {
      description: 'parameters',
      parameters: {
        require_ssl: 'true',
      },
    });
    this.cluster = new redshift.Cluster(this, 'Redshift', {
      masterUser: {
        masterUsername: props.masterUser,
        masterPassword: masterpassword.secretValue,
      },
      vpc: props.vpc,
      classicResizing: false, // https://docs.aws.amazon.com/redshift/latest/mgmt/managing-cluster-operations.html#elastic-resize
      clusterType: redshift.ClusterType.MULTI_NODE,
      encrypted: true,
      loggingProperties: props.logging,
      enhancedVpcRouting: true,
      defaultDatabaseName: props.defaultDBName,
      nodeType: props.nodeType,
      numberOfNodes: props.nodes,
      parameterGroup: this.clusterParameters,
      preferredMaintenanceWindow: props.preferredMaintenanceWindow,
      rebootForParameterChanges: true,
      removalPolicy: props.removalPolicy,
      securityGroups: [this.clusterSecurityGroup],
    });
  }
}
