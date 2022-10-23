const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andrew Frazer',
  authorAddress: 'andrew.frazer@raindancers.co.nz',
  cdkVersion: '2.46.0',
  defaultReleaseBranch: 'main',
  name: 'raindancers-network',
  repositoryUrl: 'https://github.com/raindancers/raindancers-network.raindancers-cdk',
  description: 'Extensions to the ec2.Vpc Constructs',
  keywords: ['IPAM', 'VPC'],
  license: 'Apache-2.0',
  stability: 'experimental',
  publishToPypi: {
    distName: 'raindancers-network.raindancers-cdk',
    module: 'Evpc',
  },


});
project.synth();