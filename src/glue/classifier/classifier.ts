import * as constructs from 'constructs';

export interface GlueClassifierProps {
  readonly name: string;
}

export class GlueClassifier extends constructs.Construct {

  name: string;

  constructor(scope: constructs.Construct, id: string, props: GlueClassifierProps) {
    super(scope, id);

    this.name = props.name;

  }
}
