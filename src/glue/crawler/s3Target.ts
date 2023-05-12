import {
  aws_s3 as s3,
  aws_sqs as sqs,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export interface S3Path {
  readonly bucket: s3.Bucket;
  readonly path: string;
}

export interface IS3TargetObject {
  connectionName?: string;
  dlqEventQueueArn?: string;
  eventQueueArn?: string;
  exclusions?: string[];
  path: string;
  sampleSize?: number;
}

export interface S3TargetProps {
  readonly path: S3Path;
  readonly exclusions?: string[];
  readonly connectionName?: string;
  readonly sampleSize?: number;
  readonly eventQueue?: sqs.Queue;
  readonly dlqEventQueue?: sqs.Queue;
}

export class S3Target extends constructs.Construct {

  target: IS3TargetObject;
  s3Arn: string;

  constructor(scope: constructs.Construct, id: string, props: S3TargetProps) {
    super(scope, id);

    this.target = { path: `s3://${props.path.bucket.bucketName}/${props.path.path}` };
    this.s3Arn = props.path.bucket.bucketArn;

    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Glue.html#createCrawler-property

    if (props.connectionName) {
      this.target.connectionName = props.connectionName;
    }

    if (props.eventQueue) {
      this.target.eventQueueArn = props.eventQueue.queueArn;
    }

    if (props.eventQueue?.deadLetterQueue) {
      this.target.dlqEventQueueArn = props.eventQueue.deadLetterQueue.queue.queueArn;
    }

    if (props.exclusions) {
      this.target.exclusions = props.exclusions;
    }

    if (props.sampleSize) {
      if (props.sampleSize <= 1 || props.sampleSize > 249) {
        throw new Error('SampleSize for S3 crawler must be between 1 and 249 inclusive');
      }
      this.target.sampleSize = props.sampleSize;
    };
  }
}
