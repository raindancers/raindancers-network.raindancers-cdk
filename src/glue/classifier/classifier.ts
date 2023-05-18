import {
  aws_glue as glue,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


export enum GlueClassifierType {
  /**
   * A classifier for comma-separated values (CSV).
   */
  CSV = 'CSV',
  /**
   * A classifier that uses grok
   */
  GROK = 'GROK',
  /**
   * A classifier for JSON content.
   */
  JSON = 'JSON',
  /**
   * A classifier for XML content.
   */
  XML = 'XML',
}


export interface GlueClassifierProps {
  readonly name: string;
  readonly type: GlueClassifierType;
  readonly csvClassifier?: glue.CfnClassifier.CsvClassifierProperty;
  readonly grokClassifier?: glue.CfnClassifier.GrokClassifierProperty | undefined;
  readonly jsonClassifier?: glue.CfnClassifier.JsonClassifierProperty | undefined;
  readonly xmlClassifier?: glue.CfnClassifier.XMLClassifierProperty | undefined;
}

export class GlueClassifier extends constructs.Construct {

  name: string;
  classifier: glue.CfnClassifier | undefined;

  constructor(scope: constructs.Construct, id: string, props: GlueClassifierProps) {
    super(scope, id);


    if (props.type === GlueClassifierType.CSV && props.csvClassifier
      && !(props.grokClassifier) && !(props.jsonClassifier) && !(props.xmlClassifier)
    ) {
      this.classifier = new glue.CfnClassifier(this, 'CsvClassifier', {
        csvClassifier: props.csvClassifier,
      });

      this.name = props.csvClassifier.name as string;

    } else if (props.type === GlueClassifierType.GROK && props.grokClassifier
      && !(props.csvClassifier) && !(props.jsonClassifier) && !(props.xmlClassifier)
    ) {
      this.classifier = new glue.CfnClassifier(this, 'GrokClassifier', {
        grokClassifier: props.grokClassifier,
      });

      this.name = props.grokClassifier.name as string;

    } else if (props.type === GlueClassifierType.JSON && props.jsonClassifier
      && !(props.grokClassifier) && !(props.csvClassifier) && !(props.xmlClassifier)
    ) {
      this.classifier = new glue.CfnClassifier(this, 'JsonClassifier', {
        jsonClassifier: props.jsonClassifier,
      });

      this.name = props.jsonClassifier.name as string;

    } else if (props.type === GlueClassifierType.XML && props.xmlClassifier
      && !(props.grokClassifier) && !(props.csvClassifier) && !(props.jsonClassifier)
    ) {
      this.classifier = new glue.CfnClassifier(this, 'XmlClassifier', {
        xmlClassifier: props.xmlClassifier,
      });

      this.name = props.xmlClassifier.name as string;

    } else {
      throw Error ('The Type and Properties much match');
    }

  }
}