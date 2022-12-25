# Raindancers Network

The raindancers network library, provides a set of CDK constructs which provide classes and methods for building networks with global scale, with resources such as

- AWS Cloudwan
- AWS transitGateways
- AWS DXGateways
- AWS Site to Site Ipsec VPNs
- AWS VPC's
- AWS Network Firewalls

AWS Cloudwan provides capablitys and topologies that are similar to those found in technologys such as MPLS VPNs, which where difficult, if not impossible with transit gateways. 

## Motivation:

Raindancers network constructs were developed to met the specific requirements of a client who will be moving from a single region to a multi region environment, with a mix of both on premises and cloud based resources, that are both 'server' and 'serverless'  The client is implementing a 'everything is code' approach to its workflow.  

The construct has been developed primarly with the clients requirements in mind, and could be considered opinionated in some regards, however it likely has wider use. 

The project has developed over time to add additional capablitys, and is expected that over time, it will continue to evolve.


## Design Principals

#### Everything is code.

Everything* is code for this project. Everything about the project can be committed to a git repo.   This ensures that every detail of a project is captured.

#### Decompostion

Object-oriented decomposition, is used to break a large complex into progressively smaller classes or objects that are responsible for some part of the problem domain.  AWS cloudWan presents a monolithic core wan policy that does not lend itself well to OOP. 



## Technology Choices

Raindancers network construct is a polyglot AWS Cloud Development Kit (CDK) jsii construct, in a project created by projen

#### CDK
The AWS Cloud Development Kit is a set of tools and libraries enabling us to provision, configure and manage AWS services. Under the hood, it is using AWS CloudFormation — but instead of requiring us to write YAML to define our resources, it allows us to use general purpose programming languages such as JavaScript, TypeScript, Python, Java, C#, and Go

#### CDK Constructs
Constructs are the building blocks of AWS CDK apps. A construct represents a "cloud component" and encapsulates everything AWS CloudFormation needs to create the component.  

This construct is higher-level (L3) abstraction consisting of multiple resources, primarly related to Cloudwan and VPC.

#### jsii
Jsii allows you to write a library once in TypeScript, and then use the jsii tooling to generate the libraries for other languages. jsii does not cross-compile code. Instead, it analyzes the API surface exposed by the TypeScript classes and generates language-specific wrappers for them.  These then interact with the code you wrote in TypeScript (which has been transpiled to JavaScript for you) running in a Node process.  You can read more on the inner workings of jsii. (
 https://aws.amazon.com/blogs/opensource/how-the-jsii-open-source-framework-meets-developers-where-they-are/ )

#### projen
 
projen synthesizes project configuration files such as package.json, tsconfig.json, .gitignore, GitHub Workflows, eslint, jest, etc from a well-typed definition written in JavaScript.

As opposed to existing templating/scaffolding tools, projen is not a one-off generator.  To create and modify a project setup, users interact with rich strongly-typed class and execute projen to update their project configuration files.

https://github.com/projen/projen

#### constructs.dev

## Design

### CoreNetwork construct

Cloudwan, only provides interfaces to upload, and execute  entire CoreNetwork policys.  This makes it difficult to modify the core network after its intial creation, programatically. 

To overcome the lack of interfaces, rain dancers networks models the core network as a set of items that work together. The properties of the items corrospond to the items in the CoreWan Policy Document Documents ( https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policies-json.html )

* A core configuration, that defines the 'global' configuration items.

* Network Segments.  This defines network segments that will be created in the core nework.  Each nework segment has properties.

* Segment Actions. These define actions, such as sharing or routes

* Attachment Policys: these define how vpcs and other attachments are allow to connect to the Core Network.

The construct writes these items to a dynamodb table, by way of CRUD actions, which are implemeneted by lambda backed custom resources.     The corewan policy is updated by the the method updatePolicy() which is called when updates are completed.    A custom resource, scans the table and calls the apis to create and execute a new corenetwork policy.

Using dynamodb tables to hold configuration, was chosen over ssm parameters as the configuraton could easily exceed the maxium size of an ssm parameter. 

<Diagram>

The corewan construct has two methods share(), and updatePolicy. The share policy method provides a way to make the core wan avaialble to multiple accounts, or principals, ( such as an organisation)
















