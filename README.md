# Raindancers Network Construct Library...

The raindancers network package contains  constructs that construct to provide easy to use abstractions, particually for using in an enterprise network, with Transit Gateways, Cloudwan, Network Firewalls.

Note: This Construct Library is functional, but there is no promise thate that breaking changes could occur.    While this construct is highly opinionated, it seeks to solve a wide set of scenerios that its author has faced, and problems that others have described.   The author of this construct encourages and welcome PR's.  Please raise an issue to start

The EnterpriseVPC provides addtional methods from the standard ec2.Vpc construct, while maintaining compatiblity, so it can be used with other constructs that use the ec2.Vpc

A getting started example provides guidence in using the constructs in typescript cdk 

- [Getting Started](./docs/gettingstarted.md)
- [Deploying VPC with Cloudwan](./docs/deployVpcts.md)
- [Create A shared Egress VPC, using AWS Network Firewalls](./docs/egress.md)
- [Transit Gateways and IPSec over DX](./docs/transitgateway.md)

Slack:  A good way to to get help with this construct, is to join the [cdk.dev] (https://cdk.dev/) slack channel.  

This construct is published as a ready to import module for both typescript and python, via npm and pypi. Look here for details [constructs.dev](https://constructs.dev/packages/raindancers-network) 