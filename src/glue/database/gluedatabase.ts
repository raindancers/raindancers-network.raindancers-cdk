import * as cdk from 'aws-cdk-lib';
import {
  aws_lakeformation as aws_lakeformation,
  aws_glue,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';
import * as lakeformation from '../../lakeformation/index';
import * as glue from '../index';


export interface DataBaseProps {
  readonly databaseName: string;
}


export class GlueDataBase extends constructs.Construct {

  database: aws_glue.CfnDatabase;
  databaseName: string;

  constructor(scope: constructs.Construct, id: string, props: DataBaseProps) {
    super(scope, id);

    //this.bucket = props.bucket
    this.databaseName = props.databaseName;

    this.database = new aws_glue.CfnDatabase(this, props.databaseName, {
      catalogId: `${cdk.Aws.ACCOUNT_ID}`,
      databaseInput: {
        name: props.databaseName,
      },
    });
  }

  public addCrawler(props: glue.CrawlerProps): glue.Crawler {

    // validate that the props provided are valid
    if (props.s3Targets && props.jdbcTargets) {
      throw new Error('Cannot have both s3Targets and jdbcTargets');
    };

    if (props.s3Targets === undefined && props.jdbcTargets === undefined) {
      throw new Error('Must have one of s3Targets or jdbcTargets');
    };

    // allow the crawler to access to the glue database
    new aws_lakeformation.CfnPermissions(this, 'gluedatabasepermission', {
      dataLakePrincipal: {
        dataLakePrincipalIdentifier: props.role.roleArn,
      },
      resource: {
        databaseResource: {
          catalogId: this.database.catalogId,
          name: this.databaseName,
        },
      },
      permissions: [lakeformation.Permissions.ALL],
    });

    if (props.s3Targets) {
      props.s3Targets.forEach((target, index) => {
        new aws_lakeformation.CfnPermissions(this, `s3permission${index}`, {
          dataLakePrincipal: {
            dataLakePrincipalIdentifier: props.role.roleArn,
          },
          resource: {
            dataLocationResource: {
              catalogId: this.database.catalogId,
              s3Resource: `${target.s3Arn}`,
            },
          },
          permissions: [lakeformation.Permissions.CREATE_TABLE_READ_WRITE],
        });
      });
    }

    const dataCrawler = new glue.Crawler(this, `crawler${props.name}`, {
      name: props.name,
      role: props.role,
	  databaseName: this.databaseName,
      description: props.description,
      s3Targets: props.s3Targets,
      jdbcTargets: props.jdbcTargets,
    });

    return dataCrawler;
  }
}
