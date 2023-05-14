import * as cdk from 'aws-cdk-lib';
import {
  aws_s3 as s3,
  aws_lakeformation as lakeformation,
  aws_iam as iam,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';
import * as gluedatabase from '../glue/database/gluedatabase';


/**
 * Permissions that can be used as part of a LakeFormation Permissions
 * refer https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GrantPermissions.html
 */
export enum Permissions {
  ALL = 'ALL',
  SELECT = 'SELECT',
  ALTER = 'ALTER',
  DROP = 'DROP',
  DELETE = 'DELETE',
  INSERT = 'INSERT',
  DESCRIBE = 'DESCRIBE',
  CREATE_DATABASE = 'CREATE_DATABASE',
  CREATE_TABLE = 'CREATE_TABLE',
  DATA_LOCATION_ACCESS = 'DATA_LOCATION_ACESS',
  CREATE_TAG = 'CREATE_TAG',
  ASSOCIATE = 'ASSOCIATE',
  CREATE_TABLE_READ_WRITE = 'CREATE_TABLE_READ_WRITE',
}


export interface AddNewBucketToLakeFormationProps {
  /**
   * Name of Bucket
   */
  readonly name: string;
  /**
   * and optional role to use to join the Lake. This will default the the standard Service rule, if not
   * specified, which is the recommended approach.
   */
  readonly role?: iam.Role;
  /**
   * Lifecycle Rules for objects that are stored in the Bucket. This will default to lifeccyle pattern that will
   * eventually move unused obejects to glacier.
   */
  readonly lifecycleRules?: s3.LifecycleRule[] | undefined;
}

/**
 * Glue Database that holds ingest Tables.
 */
export interface AddDatabaseProps {

  /**
   * Name for database
   */
  readonly databaseName: string;
}


export interface LakeFormationProps {
  /**
   * Opt out of Mechanisms for high data protection, that are appropriate for production
   * @default false
   */
  readonly nonproduction?: boolean | undefined;
  /**
   * The cdk exec role will be creating Datalake Objects so will require permission
   * @default true
   */
  readonly makeCdkExecRoleLakeAdmin?: boolean | undefined;

}

/**
 * Create a Class for the methods
 * the methods that we use to operate on our 'Datalake'
 */
export class LakeFormation extends constructs.Construct {

  /**
   * Used to determine if buckets are backedup, and protected from Stack Destruction.
   */
  nonproduction: boolean | undefined;

  constructor(scope: constructs.Construct, id: string, props: LakeFormationProps) {
    super(scope, id);

    if (props.nonproduction ?? false) {
      this.nonproduction = true;
    };
  }


  /**
   * Create a new bucket and associate it to the the Lakeformation.
   * @param props AddNewBucketToLakeFormationProps
   * @returns s3.Bucket
   */
  public addNewBucketToLakeFormation(props: AddNewBucketToLakeFormationProps): s3.Bucket {

    var bucket: s3.Bucket;

    // this lifecycle policy will be applied to the bucket by default if non is applied.
    const defaultLifeCycleRules = [
      {
        abortIncompleteMultipartUploadAfter: cdk.Duration.days(90),
        transitions: [
          {
            storageClass: s3.StorageClass.INFREQUENT_ACCESS,
            transitionAfter: cdk.Duration.days(30),
          },
          {
            storageClass: s3.StorageClass.INTELLIGENT_TIERING,
            transitionAfter: cdk.Duration.days(60),
          },
          {
            storageClass: s3.StorageClass.GLACIER,
            transitionAfter: cdk.Duration.days(180),
          },
          {
            storageClass: s3.StorageClass.DEEP_ARCHIVE,
            transitionAfter: cdk.Duration.days(365),
          },
        ],
      },
    ];

    var autoDeleteObjects: boolean = false;
    var removalPolicy: cdk.RemovalPolicy = cdk.RemovalPolicy.RETAIN;

    if (this.nonproduction ?? false) {
      autoDeleteObjects = true;
      removalPolicy = cdk.RemovalPolicy.DESTROY;
    }

    const lifecycleRules = (props.lifecycleRules ?? defaultLifeCycleRules);

    bucket = new s3.Bucket(this, props.name, {
      bucketName: cdk.PhysicalName.GENERATE_IF_NEEDED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED, // this is wrong.
      autoDeleteObjects: autoDeleteObjects,
      removalPolicy: removalPolicy,
      lifecycleRules: lifecycleRules,
    });

    if (props.role) {
      new lakeformation.CfnResource(this, `associateBucket${props.name}`, {
        resourceArn: bucket.bucketArn,
        roleArn: props.role.roleArn,
        useServiceLinkedRole: false,
      });
    } else {
      new lakeformation.CfnResource(this, `associateBucket${props.name}`, {
        resourceArn: bucket.bucketArn,
        useServiceLinkedRole: true,
      });
    }
    return bucket;
  }

  /**
   * @param props AddDatabaseProps
   * @returns gluedatabase.GlueDataBase
   */
  public addDatabase(props: AddDatabaseProps): gluedatabase.GlueDataBase {

    return new gluedatabase.GlueDataBase(this, props.databaseName, {
      databaseName: props.databaseName,
    });
  }
}
