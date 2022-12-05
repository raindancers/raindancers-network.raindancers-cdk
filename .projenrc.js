const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andrew Frazer',
  authorAddress: 'andrew.frazer@raindancers.co.nz',
  cdkVersion: '2.46.0',
  defaultReleaseBranch: 'main',
  //eslint: false,    // This is very wrong. N
  name: 'raindancers-network',
  repositoryUrl: 'https://github.com/raindancers/raindancers-network.raindancers-cdk',
  description: 'Extensions to the ec2.Vpc Constructs',
  majorVersion: 1,
  keywords: [
    'IPAM',
    'VPC',
    'Cloudwan',
    'NetworkFirewall',
  ],
  license: 'Apache-2.0',
  stability: 'experimental',
  publishToPypi: {
    distName: 'raindancers-network.raindancers-cdk',
    module: 'Evpc',
  },
});
project.addGitIgnore('!lambda/**');
project.synth();
