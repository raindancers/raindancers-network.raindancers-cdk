import * as cdk from 'aws-cdk-lib';
import {
  aws_glue as glue,
  aws_secretsmanager as secretsmanager,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export enum ConnectionType {
  JDBC = 'JDBC',
  KAFKA = 'KAFKA',
  MONGODB = 'MONGODB',
  NETWORK	= 'NETWORK',
  MARKETPLACE = 'MARKETPLACE',
  CUSTOM = 'CUSTOM'
}

export interface JDBCProperties {
  readonly host: string;
  readonly port: number;
  readonly url: string;
  readonly secret: secretsmanager.Secret;
  readonly ssl: {
    enforceSSL: boolean;
  };
}


export interface ConnectionProps {
  connectionType: ConnectionType;
  jdbcProperties?: JDBCProperties;
}

export class Connection extends constructs.Construct {

  connection: glue.CfnConnection;

  constructor(scope: constructs.Construct, id: string, props: ConnectionProps) {
    super(scope, id);

    this.connection = new glue.CfnConnection(this, 'glueconnection', {
      catalogId: cdk.Aws.ACCOUNT_ID,
      connectionInput: {
        connectionType: props.connectionType,
      },
    });

  }
}


