import * as constructs from 'constructs';


export enum MetaDataTypes {
  COMMENTS = 'COMMENTS',
  RAWTYPES = 'RAWTYPES',
}

export interface IJDBCTargetObject {
  connectionName?: string;
  exclusions?: string[];
  path?: string;
  enableAdditionalMetadata?: string[];
}

export interface JDBCTargetProps {
  readonly exclusions?: string[];
  readonly connectionName?: string;
  readonly enableAdditionalMetadata: MetaDataTypes[];
}

/**
 * This class is incomplete. It will not run. the Class needs to exisit
 * so, as the add crawler method requires it.
 * TODO:
 */
export class JDBCTarget extends constructs.Construct {

  target: IJDBCTargetObject;

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Glue.html#createCrawler-property

    this.target = {};

    // this.target.Path = `s3://${props.path.bucket.bucketArn}/${props.path.path}}`;

    // if (props.connectionName) {
    //   this.target.ConnectionName = props.connectionName;
    // }

    // if (props.exclusions) {
    //   this.target.Exclusions = props.exclusions;
    // }
  }
}
