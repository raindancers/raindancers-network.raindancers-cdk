const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andrew Frazer',
  authorAddress: 'andrew.frazer@raindancers.co.nz',
  cdkVersion: '2.79.0',
  defaultReleaseBranch: 'main',
  name: 'raindancers-network',
  repositoryUrl: 'https://github.com/raindancers/raindancers-network.raindancers-cdk',
  description: 'Extensions to the ec2.Vpc Constructs',
  majorVersion: 1,
  keywords: [
    'IPAM',
    'VPC',
    'Cloudwan',
    'NetworkFirewall',
    'CrowdStrike',
    'DNS',
    'Security',
    'IPAM',
    'SSM',
    'Redshift',
  ],
  license: 'Apache-2.0',
  deps: [
    '@aws-cdk/aws-redshift-alpha@2.79.0-alpha.0',
  ],
  devDeps: [
    '@aws-cdk/aws-redshift-alpha@2.79.0-alpha.0',
  ],
  peerDeps: [
    '@aws-cdk/aws-redshift-alpha@2.79.0-alpha.0',
  ],
  stability: 'experimental',
  publishToPypi: {
    distName: 'raindancers-network.raindancers-cdk',
    module: 'Evpc',
  },

});
project.addGitIgnore('!lambda/**');
project.synth();
