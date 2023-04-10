// ssm-parameter-reader.ts
import {
  custom_resources as cr,
  aws_iam as iam,
  aws_ssm as ssm,
} from 'aws-cdk-lib';
import * as constructs from 'constructs';


export interface CrossRegionParameterReaderProps {
  readonly parameterName: string;
  readonly region: string;
}

export class CrossRegionParameterReader extends cr.AwsCustomResource {
  constructor(scope: constructs.Construct, name: string, props: CrossRegionParameterReaderProps) {

    const ssmAwsSdkCall: cr.AwsSdkCall = {
      service: 'SSM',
      action: 'getParameter',
      parameters: {
        Name: props.parameterName,
      },
      region: props.region,
      physicalResourceId: cr.PhysicalResourceId.of(`${props.parameterName}-${props.region}`),
    };

    super(scope, name, {
      onUpdate: ssmAwsSdkCall,
      policy: {
        statements: [
          new iam.PolicyStatement({
            resources: ['*'],
            actions: ['ssm:GetParameter'],
            effect: iam.Effect.ALLOW,
          }),
        ],
      },
    });
  }

  public parameterValue(): string {
    return this.getResponseField('Parameter.Value').toString();
  }
}


export interface CrossRegionParameterWriterProps {
  readonly parameterName: string;
  readonly value: string;
  readonly description: string;
}

export class CrossRegionParameterWriter extends constructs.Construct {
  constructor(scope: constructs.Construct, id: string, props: CrossRegionParameterWriterProps) {
    super(scope, id);

    new ssm.StringParameter(this, 'Route53HostedZoneIdSSMParam', {
      parameterName: props.parameterName,
      description: 'The Route 53 hosted zone id for this account',
      stringValue: props.value,
    });
  }
}

