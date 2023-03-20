import * as redshift from '@aws-cdk/aws-redshift-alpha';
import {
  aws_ec2 as ec2,
  aws_secretsmanager as secretmanager,
  aws_iam as iam,

  //custom_resources as cr,
}
  from 'aws-cdk-lib';

import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

import { RedShiftDatabase } from './database';

export interface RedshiftClusterProps {
  readonly clusterName: string;
  readonly masterUser: string;
  readonly vpc: ec2.Vpc | ec2.IVpc;
  readonly logging: redshift.LoggingProperties;
  readonly defaultrole: iam.Role;
  readonly defaultDBName?: string | undefined;
  readonly nodes?: number | undefined;
  readonly nodeType?: redshift.NodeType;
  readonly parameterGroup?: redshift.ClusterParameterGroup | undefined;
  readonly preferredMaintenanceWindow?: string | undefined; // Example: 'Sun:23:45-Mon:00:15' https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance
  readonly removalPolicy?: cdk.RemovalPolicy | undefined; // use this during dev so, we can trash it.
  readonly subnetGroup: redshift.ClusterSubnetGroup;
}
/**
** Creates a PrivateRedShiftCluster
*/

export class PrivateRedshiftCluster extends constructs.Construct {

  public readonly cluster: redshift.Cluster;
  public readonly clusterSecurityGroup: ec2.SecurityGroup;
  public readonly clusterParameters: redshift.ClusterParameterGroup;

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
      clusterName: props.clusterName,
      masterUser: {
        masterUsername: props.masterUser,
        masterPassword: masterpassword.secretValue,
      },
      vpc: props.vpc,
      subnetGroup: props.subnetGroup,
      roles: [props.defaultrole],
      defaultRole: props.defaultrole,
      classicResizing: false, // https://docs.aws.amazon.com/redshift/latest/mgmt/managing-cluster-operations.html#elastic-resize
      clusterType: redshift.ClusterType.MULTI_NODE,
      encrypted: true,
      loggingProperties: props.logging,
      enhancedVpcRouting: true,
      defaultDatabaseName: 'DefaultDatabase',
      nodeType: props.nodeType,
      numberOfNodes: props.nodes,
      parameterGroup: props.parameterGroup,
      preferredMaintenanceWindow: props.preferredMaintenanceWindow,
      //rebootForParameterChanges: true,
      removalPolicy: props.removalPolicy,
      securityGroups: [this.clusterSecurityGroup],
    });
  }

  public addDatabase(databaseName: string): RedShiftDatabase {

    return new RedShiftDatabase(this, `${databaseName}Database`, {
      databaseName: databaseName,
      cluster: this.cluster,
    });
  }
}
