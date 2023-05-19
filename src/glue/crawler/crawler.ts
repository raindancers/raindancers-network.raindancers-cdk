import {
  custom_resources as cr,
  aws_iam as iam,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';
import * as glue from '../index';

export interface LakeFormationConfiguration {
  readonly accountId?: string | undefined;
  readonly useLakeFormationCredentials?: boolean | undefined;
}

export enum CrawlerLineageSettings {
  ENABLE = 'ENABLE',
  DISABLE = 'DISABLE',
}

export interface LineageConfiguration {
  readonly crawlerLineageSettings: CrawlerLineageSettings;
}

export enum RecrawlBehavior {
  CRAWL_EVERYTHING = 'CRAWL_EVERTHING',
  CRAWL_NEW_FOLDERS_ONLY = 'CRAWL_NEW_FOLDERS_ONLY',
  CRAWL_EVENT_MODE = 'CRAWL_EVENT_MODE',
}

export interface RecrawlPolicy {
  readonly recrawlBehavior: RecrawlBehavior;
}

export enum DeleteBehavior {
  LOG = 'LOG',
  DELETE_FROM_DATABASE = 'DELETE_FROM_DATABASE',
  DEPRECATE_IN_DATABASE = 'DEPRECATE_IN_DATABASE',
}

export enum UpdateBehavior {
  LOG = 'LOG',
  UPDATE_IN_DATABASE = 'UPDATE_IN_DATABASE',
}

export interface SchemaChangePolicy {
  readonly deleteBehavior: DeleteBehavior;
  readonly updateBehavior: UpdateBehavior;
}

// export interface ICrawlerParameters {
//   name: string;
//   role: string;
//   s3Targets?: glue.S3Target[] | undefined;
//   jdbcTargets?: glue.JDBCTarget[] | undefined;
//   databaseName: string;
//   description?: string | undefined;
//   classifiers?: string[] | undefined;
//   lakeFormationConfiguration?: LakeFormationConfiguration;
//   lineageConfiguration?: LineageConfiguration | undefined;
//   recrawlBehaviour?: RecrawlPolicy | undefined;
//   schemaChangePolicy?: SchemaChangePolicy;
//   configuration?: string | undefined;
//   crawlerSecurityConfiguration?: string | undefined;
//   schedule?: string | undefined;
//   tablePrefix?: string | undefined;
// }

export interface AddClassifiersProps {
  readonly classifiers: glue.GlueClassifier[];
}

export interface CrawlerProps {
  readonly name: string;
  readonly role: iam.Role;
  readonly s3Targets?: glue.S3Target[] | undefined;
  readonly jdbcTargets?: glue.JDBCTarget[];
  readonly databaseName:string;
  readonly description?: string | undefined;
}
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Glue.html#createCrawler-property

export class Crawler extends constructs.Construct {
  parameters: {[key:string]: any};

  constructor(scope: constructs.Construct, id: string, props: CrawlerProps) {
    super(scope, id);

    // validate that only one of s3Targets has been set. Could not use Type, as this was jsii incompatiable.
    // so this has to be run time check 🔥
    if (props.s3Targets && props.jdbcTargets) {
      throw new Error('Can not have both S3Targets and JdbcTargets');
    }

    if (props.s3Targets === undefined && props.jdbcTargets === undefined) {
      throw new Error('Must have at least one target type');
    }

    const targets: {[key:string]: any} = {};

    if (props.s3Targets) {
      const s3targets: object[] = [];
      props.s3Targets.forEach((target) => {
        s3targets.push(target.target);
      });
      targets.S3Targets = s3targets;
    }

    if (props.jdbcTargets) {
      const jdbcTargets: object[] = [];
      props.jdbcTargets.forEach((target) => {
        jdbcTargets.push(target.target);
      });
      targets.JdbcTargets = jdbcTargets;
    }
    console.log(targets);

    // these are the mandatory paramters
    this.parameters = {
      Name: props.name,
      Role: props.role.roleArn,
      Targets: pascalCaseKeys(targets),
      DatabaseName: props.databaseName,
    };
    console.log('------');
    console.log(this.parameters);

    // targets keys, need to have their first character Capitalized.


    if (props.description) {
      this.parameters.Description = props.description;
    }

    new cr.AwsCustomResource(this, 'Crawler', {
      resourceType: 'Custom::Crawler',
      onCreate: {
        service: 'Glue',
        action: 'createCrawler',
        parameters: this.parameters,
        physicalResourceId: cr.PhysicalResourceId.of(`Crawler${props.name}`),
      },
      onUpdate: {
        service: 'Glue',
        action: 'updateCrawler',
        parameters: this.parameters,
      },
      onDelete: {
        service: 'Glue',
        action: 'deleteCrawler',
        parameters: {
          Name: props.name,
        },
      },

      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement(
          {
            actions:
            [
              'glue:CreateCrawler',
              'glue:UpdateCrawler',
              'glue:DeleteCrawler',
              'iam:PassRole',
            ],
            resources: ['*'],
          },
        ),
      ]),
    });
  }
  /**
   * This will add classifers to the crawler.
   * @param props addClassifierProps
   */
  public addClassifiers(props: AddClassifiersProps): void {
    var classiferNames: string[] = [];
    props.classifiers.forEach((classifier) => {
      classiferNames.push(classifier.name);
    });
    this.parameters.Classifiers = classiferNames;
  }
  /**
   * Use the crawler with lakeFormation Permissions.
   * @param props LakeFormationConfiguration
   * @returns void
   *
   */
  public useWithLakeFormation(props: LakeFormationConfiguration): void {
    this.parameters.LakeFormationConfiguration = {
      UseLakeFormationCredentials: props.useLakeFormationCredentials ?? true,
    };
    if (props.accountId) {
      this.parameters.LakeFormationConfiguration.AccountId = props.accountId;
    }
  }
  /**
   * Set the recall  policy for the crawler.
   * @param recallpolicy RecrawlPolicy
   * @returns void
   */
  public addRecrawlBehaviour(recallpolicy: RecrawlPolicy): void {
    this.parameters.RecrawlBehaviour = recallpolicy;
  }
  /**
   * Enable Lineage for the Crawler
   * @param lineage
   */
  public enableLineage(lineage: CrawlerLineageSettings): void {
    this.parameters.LineageConfiguration = {
      CrawlerLineageSettings: lineage,
    };
  }
  /**
   * Enable SchemaChangPolicy
   * @param schemaChangePolicy
   */
  public addSchemaChangePolicy(schemaChangePolicy: SchemaChangePolicy): void {
    this.parameters.SchemaChangePolicy = pascalCaseKeys(schemaChangePolicy);
  }
  /**
   * set crawler Configuration
   * @param configuration
   */
  public addConfiguration(configuration: string): void {
    this.parameters.Configuration = configuration;
  }
  /**
   * add CrawlerSecurity Configuration
   * @param configuration
   * */
  public addCrawlerSecurityConfiguration(configuration: string): void {
    this.parameters.CrawlerSecurityConfiguration = configuration;
  }
  /**
   * add schedule for the crawler
   * @param schedule
   */
  public addSchedule(schedule: string): void {
    if (checkRegex(new RegExp('^((\*(\/\d+)?|\d+((-|\,)\d+)*)(\s+(\*(\/\d+)?|\d+((-|\,)\d+)*)){4})$'), schedule) == false) {
      throw new Error('The schedule needs to be a valid cron expresson');
    }
    this.parameters.Schedule = schedule;
  }
  /**
   * add table prefix for the crawler
   * @param tablePrefix
   */
  public addTablePrefix(tablePrefix: string): void {
    this.parameters.TablePrefix = tablePrefix;
  }
}

// a function to check if a property is a match for a regex expression

function checkRegex(regex: RegExp, property: string): boolean {
  return regex.test(property);
}
/**
 * Converts the Keys in an arbitory object, to Pascal Case. Use this to send typescript objects
 * to API
 * @param obj a complex object
 * @returns any
 */
function pascalCaseKeys(obj: any): any {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(pascalCaseKeys);
  }
  if (obj === null) {
    return null;
  }
  const entries = Object.entries(obj);
  const mappedEntries = entries.map(
    ([k, v]) => [`${k.slice(0, 1).toUpperCase()}${k.slice(1)}`, pascalCaseKeys(v)] as const);
  return Object.fromEntries(mappedEntries);
}