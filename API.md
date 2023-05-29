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
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Assignment <a name="Assignment" id="raindancers-network.sso.Assignment"></a>

- *Implements:* raindancers-network.sso.IAssignment

The assignment construct.

Has no import method because there is no attributes to import.

#### Initializers <a name="Initializers" id="raindancers-network.sso.Assignment.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

new sso.Assignment(scope: Construct, id: string, props: AssignmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.Assignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.sso.Assignment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.sso.Assignment.Initializer.parameter.props">props</a></code> | <code>raindancers-network.sso.AssignmentProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.sso.Assignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.sso.Assignment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.sso.Assignment.Initializer.parameter.props"></a>

- *Type:* raindancers-network.sso.AssignmentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.Assignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.sso.Assignment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="raindancers-network.sso.Assignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-network.sso.Assignment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-network.sso.Assignment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.Assignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-network.sso.Assignment.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-network.sso.Assignment.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.sso.Assignment.isConstruct"></a>

```typescript
import { sso } from 'raindancers-network'

sso.Assignment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.sso.Assignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-network.sso.Assignment.isOwnedResource"></a>

```typescript
import { sso } from 'raindancers-network'

sso.Assignment.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-network.sso.Assignment.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-network.sso.Assignment.isResource"></a>

```typescript
import { sso } from 'raindancers-network'

sso.Assignment.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-network.sso.Assignment.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.Assignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.sso.Assignment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-network.sso.Assignment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.sso.Assignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-network.sso.Assignment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-network.sso.Assignment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### AssociateSharedResolverRule <a name="AssociateSharedResolverRule" id="raindancers-network.dns.AssociateSharedResolverRule"></a>

Associate a resolver rule that has been shared to this account.

#### Initializers <a name="Initializers" id="raindancers-network.dns.AssociateSharedResolverRule.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.AssociateSharedResolverRule(scope: Construct, id: string, props: AssociateSharedResolverRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRule.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.AssociateSharedResolverRuleProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.AssociateSharedResolverRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.AssociateSharedResolverRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.AssociateSharedResolverRule.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.AssociateSharedResolverRuleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.AssociateSharedResolverRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.AssociateSharedResolverRule.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.AssociateSharedResolverRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.AssociateSharedResolverRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.AssociateSharedResolverRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### AwsManagedDNSFirewallRuleGroup <a name="AwsManagedDNSFirewallRuleGroup" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup"></a>

#### Initializers <a name="Initializers" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.AwsManagedDNSFirewallRuleGroup(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.AwsManagedDNSFirewallRuleGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.property.resolverRuleId">resolverRuleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `resolverRuleId`<sup>Required</sup> <a name="resolverRuleId" id="raindancers-network.dns.AwsManagedDNSFirewallRuleGroup.property.resolverRuleId"></a>

```typescript
public readonly resolverRuleId: string;
```

- *Type:* string

---


### AwsServiceEndPoints <a name="AwsServiceEndPoints" id="raindancers-network.endpoints.AwsServiceEndPoints"></a>

Provisions a set of AWS Service Endpoints in a VPC.

#### Initializers <a name="Initializers" id="raindancers-network.endpoints.AwsServiceEndPoints.Initializer"></a>

```typescript
import { endpoints } from 'raindancers-network'

new endpoints.AwsServiceEndPoints(scope: Construct, id: string, props: AwsServiceEndPointsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope that this construct is created in. |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPoints.Initializer.parameter.id">id</a></code> | <code>string</code> | Id for the construct. |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPoints.Initializer.parameter.props">props</a></code> | <code>raindancers-network.endpoints.AwsServiceEndPointsProps</code> | AWSServiceEndpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.endpoints.AwsServiceEndPoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope that this construct is created in.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.endpoints.AwsServiceEndPoints.Initializer.parameter.id"></a>

- *Type:* string

Id for the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.endpoints.AwsServiceEndPoints.Initializer.parameter.props"></a>

- *Type:* raindancers-network.endpoints.AwsServiceEndPointsProps

AWSServiceEndpoints.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPoints.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.endpoints.AwsServiceEndPoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.endpoints.AwsServiceEndPoints.isConstruct"></a>

```typescript
import { endpoints } from 'raindancers-network'

endpoints.AwsServiceEndPoints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.endpoints.AwsServiceEndPoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.endpoints.AwsServiceEndPoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CentralAccountAssnRole <a name="CentralAccountAssnRole" id="raindancers-network.dns.CentralAccountAssnRole"></a>

#### Initializers <a name="Initializers" id="raindancers-network.dns.CentralAccountAssnRole.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.CentralAccountAssnRole(scope: Construct, id: string, props: CentralAccountAssnRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.CentralAccountAssnRoleProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.CentralAccountAssnRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.CentralAccountAssnRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.CentralAccountAssnRole.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.CentralAccountAssnRoleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.CentralAccountAssnRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.CentralAccountAssnRole.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.CentralAccountAssnRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.CentralAccountAssnRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRole.property.assnRole">assnRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.CentralAccountAssnRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `assnRole`<sup>Required</sup> <a name="assnRole" id="raindancers-network.dns.CentralAccountAssnRole.property.assnRole"></a>

```typescript
public readonly assnRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---


### CentralResolverRules <a name="CentralResolverRules" id="raindancers-network.dns.CentralResolverRules"></a>

#### Initializers <a name="Initializers" id="raindancers-network.dns.CentralResolverRules.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.CentralResolverRules(scope: Construct, id: string, props: CentralResolverRulesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CentralResolverRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralResolverRules.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralResolverRules.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.CentralResolverRulesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.CentralResolverRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.CentralResolverRules.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.CentralResolverRules.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.CentralResolverRulesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.CentralResolverRules.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.CentralResolverRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.CentralResolverRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.CentralResolverRules.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.CentralResolverRules.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.CentralResolverRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CentralResolverRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.CentralResolverRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CloudWanTGW <a name="CloudWanTGW" id="raindancers-network.cloudwan.CloudWanTGW"></a>

Create a TransitGateway That is attached to Cloudwan.

#### Initializers <a name="Initializers" id="raindancers-network.cloudwan.CloudWanTGW.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

new cloudwan.CloudWanTGW(scope: Construct, id: string, props: TGWOnCloudWanProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | scope in which the resource is c. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.Initializer.parameter.props">props</a></code> | <code>raindancers-network.cloudwan.TGWOnCloudWanProps</code> | TGWOnCloudWanProps. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.cloudwan.CloudWanTGW.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which the resource is c.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.cloudwan.CloudWanTGW.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CloudWanTGW.Initializer.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.TGWOnCloudWanProps

TGWOnCloudWanProps.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.addDXGateway">addDXGateway</a></code> | provision a DX Gateway and attach it to the transit gateway. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.adds2sVPN">adds2sVPN</a></code> | Creates a Site To Site IPSec VPN between the Transit Gateway and Customer Gateway, using a defined set of VPn Properties. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.createDirectConnectGatewayAssociation">createDirectConnectGatewayAssociation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.cloudwan.CloudWanTGW.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDXGateway` <a name="addDXGateway" id="raindancers-network.cloudwan.CloudWanTGW.addDXGateway"></a>

```typescript
public addDXGateway(dxgatewayname: string, dxgatewayASN: number): string
```

provision a DX Gateway and attach it to the transit gateway.

###### `dxgatewayname`<sup>Required</sup> <a name="dxgatewayname" id="raindancers-network.cloudwan.CloudWanTGW.addDXGateway.parameter.dxgatewayname"></a>

- *Type:* string

The name of the dxgateway.

---

###### `dxgatewayASN`<sup>Required</sup> <a name="dxgatewayASN" id="raindancers-network.cloudwan.CloudWanTGW.addDXGateway.parameter.dxgatewayASN"></a>

- *Type:* number

An ASN for the Dxgateway.

---

##### `adds2sVPN` <a name="adds2sVPN" id="raindancers-network.cloudwan.CloudWanTGW.adds2sVPN"></a>

```typescript
public adds2sVPN(name: string, vpnprops: VpnProps): void
```

Creates a Site To Site IPSec VPN between the Transit Gateway and Customer Gateway, using a defined set of VPn Properties.

###### `name`<sup>Required</sup> <a name="name" id="raindancers-network.cloudwan.CloudWanTGW.adds2sVPN.parameter.name"></a>

- *Type:* string

A name to identify the vpn.

---

###### `vpnprops`<sup>Required</sup> <a name="vpnprops" id="raindancers-network.cloudwan.CloudWanTGW.adds2sVPN.parameter.vpnprops"></a>

- *Type:* raindancers-network.cloudwan.VpnProps

the vpn properties.

---

##### `createDirectConnectGatewayAssociation` <a name="createDirectConnectGatewayAssociation" id="raindancers-network.cloudwan.CloudWanTGW.createDirectConnectGatewayAssociation"></a>

```typescript
public createDirectConnectGatewayAssociation(dxgatewayId: string): string
```

###### `dxgatewayId`<sup>Required</sup> <a name="dxgatewayId" id="raindancers-network.cloudwan.CloudWanTGW.createDirectConnectGatewayAssociation.parameter.dxgatewayId"></a>

- *Type:* string

Id of a DX gateway that.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.cloudwan.CloudWanTGW.isConstruct"></a>

```typescript
import { cloudwan } from 'raindancers-network'

cloudwan.CloudWanTGW.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.cloudwan.CloudWanTGW.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.property.cloudwanTgAttachmentId">cloudwanTgAttachmentId</a></code> | <code>string</code> | the AttachmentId between the Transit Gateway and the cloudwan. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.property.transitGateway">transitGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnTransitGateway</code> | The created Transit Gateway. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.property.tgcidr">tgcidr</a></code> | <code>string[]</code> | The Cidr Ranges assigned to the transit Gateway. |
| <code><a href="#raindancers-network.cloudwan.CloudWanTGW.property.tgDXattachmentId">tgDXattachmentId</a></code> | <code>string</code> | the AttachmentId between the Transit Gateway and DX ( if any ). |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.cloudwan.CloudWanTGW.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cloudwanTgAttachmentId`<sup>Required</sup> <a name="cloudwanTgAttachmentId" id="raindancers-network.cloudwan.CloudWanTGW.property.cloudwanTgAttachmentId"></a>

```typescript
public readonly cloudwanTgAttachmentId: string;
```

- *Type:* string

the AttachmentId between the Transit Gateway and the cloudwan.

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-network.cloudwan.CloudWanTGW.property.transitGateway"></a>

```typescript
public readonly transitGateway: CfnTransitGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnTransitGateway

The created Transit Gateway.

---

##### `tgcidr`<sup>Optional</sup> <a name="tgcidr" id="raindancers-network.cloudwan.CloudWanTGW.property.tgcidr"></a>

```typescript
public readonly tgcidr: string[];
```

- *Type:* string[]

The Cidr Ranges assigned to the transit Gateway.

---

##### `tgDXattachmentId`<sup>Optional</sup> <a name="tgDXattachmentId" id="raindancers-network.cloudwan.CloudWanTGW.property.tgDXattachmentId"></a>

```typescript
public readonly tgDXattachmentId: string;
```

- *Type:* string

the AttachmentId between the Transit Gateway and DX ( if any ).

---


### ConditionalForwarder <a name="ConditionalForwarder" id="raindancers-network.dns.ConditionalForwarder"></a>

#### Initializers <a name="Initializers" id="raindancers-network.dns.ConditionalForwarder.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.ConditionalForwarder(scope: Construct, id: string, props: ConditionalForwarderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.ConditionalForwarder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ConditionalForwarder.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ConditionalForwarder.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.ConditionalForwarderProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.ConditionalForwarder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.ConditionalForwarder.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.ConditionalForwarder.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.ConditionalForwarderProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.ConditionalForwarder.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.ConditionalForwarder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.ConditionalForwarder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.ConditionalForwarder.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.ConditionalForwarder.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.ConditionalForwarder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.ConditionalForwarder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.ConditionalForwarder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CoreNetwork <a name="CoreNetwork" id="raindancers-network.cloudwan.CoreNetwork"></a>

Create a CoreNework for a Cloudwan.

#### Initializers <a name="Initializers" id="raindancers-network.cloudwan.CoreNetwork.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

new cloudwan.CoreNetwork(scope: Construct, id: string, props: CoreNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.Initializer.parameter.props">props</a></code> | <code>raindancers-network.cloudwan.CoreNetworkProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.cloudwan.CoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.cloudwan.CoreNetwork.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetwork.Initializer.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.CoreNetworkProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.addSegment">addSegment</a></code> | Add a segment to the core network. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.share">share</a></code> | Create a CoreNetwork Sharing. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.updatePolicy">updatePolicy</a></code> | Update the corewan policy after actions, segments are added. |

---

##### `toString` <a name="toString" id="raindancers-network.cloudwan.CoreNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addSegment` <a name="addSegment" id="raindancers-network.cloudwan.CoreNetwork.addSegment"></a>

```typescript
public addSegment(props: Segment): CoreNetworkSegment
```

Add a segment to the core network.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetwork.addSegment.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.Segment

properties of the segment.

---

##### `share` <a name="share" id="raindancers-network.cloudwan.CoreNetwork.share"></a>

```typescript
public share(props: CoreNetworkShare): void
```

Create a CoreNetwork Sharing.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetwork.share.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.CoreNetworkShare

Share properties.

---

##### `updatePolicy` <a name="updatePolicy" id="raindancers-network.cloudwan.CoreNetwork.updatePolicy"></a>

```typescript
public updatePolicy(): void
```

Update the corewan policy after actions, segments are added.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.cloudwan.CoreNetwork.isConstruct"></a>

```typescript
import { cloudwan } from 'raindancers-network'

cloudwan.CoreNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.cloudwan.CoreNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.cfnCoreNetwork">cfnCoreNetwork</a></code> | <code>aws-cdk-lib.aws_networkmanager.CfnCoreNetwork</code> | The corenetwork object. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.coreName">coreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.policyTable">policyTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | THe dynamo table holding the policy. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.policyTableName">policyTableName</a></code> | <code>string</code> | Name of the Dynamo Table holding the policy. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.policyTableServiceToken">policyTableServiceToken</a></code> | <code>string</code> | The policyTable Lamba's Service Token. |
| <code><a href="#raindancers-network.cloudwan.CoreNetwork.property.updateProviderToken">updateProviderToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.cloudwan.CoreNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnCoreNetwork`<sup>Required</sup> <a name="cfnCoreNetwork" id="raindancers-network.cloudwan.CoreNetwork.property.cfnCoreNetwork"></a>

```typescript
public readonly cfnCoreNetwork: CfnCoreNetwork;
```

- *Type:* aws-cdk-lib.aws_networkmanager.CfnCoreNetwork

The corenetwork object.

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-network.cloudwan.CoreNetwork.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

---

##### `policyTable`<sup>Required</sup> <a name="policyTable" id="raindancers-network.cloudwan.CoreNetwork.property.policyTable"></a>

```typescript
public readonly policyTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

THe dynamo table holding the policy.

---

##### `policyTableName`<sup>Required</sup> <a name="policyTableName" id="raindancers-network.cloudwan.CoreNetwork.property.policyTableName"></a>

```typescript
public readonly policyTableName: string;
```

- *Type:* string

Name of the Dynamo Table holding the policy.

---

##### `policyTableServiceToken`<sup>Required</sup> <a name="policyTableServiceToken" id="raindancers-network.cloudwan.CoreNetwork.property.policyTableServiceToken"></a>

```typescript
public readonly policyTableServiceToken: string;
```

- *Type:* string

The policyTable Lamba's Service Token.

---

##### `updateProviderToken`<sup>Required</sup> <a name="updateProviderToken" id="raindancers-network.cloudwan.CoreNetwork.property.updateProviderToken"></a>

```typescript
public readonly updateProviderToken: string;
```

- *Type:* string

---


### CoreNetworkSegment <a name="CoreNetworkSegment" id="raindancers-network.cloudwan.CoreNetworkSegment"></a>

Create a Network Segment in a core network.

#### Initializers <a name="Initializers" id="raindancers-network.cloudwan.CoreNetworkSegment.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

new cloudwan.CoreNetworkSegment(scope: Construct, id: string, props: ICoreNetworkSegmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.Initializer.parameter.props">props</a></code> | <code>raindancers-network.cloudwan.ICoreNetworkSegmentProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.cloudwan.CoreNetworkSegment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.cloudwan.CoreNetworkSegment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetworkSegment.Initializer.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.ICoreNetworkSegmentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.addAttachmentPolicy">addAttachmentPolicy</a></code> | Add an AttachmentPolicy to a segment. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.addSegmentAction">addSegmentAction</a></code> | Add an Action to the Segment, ( Share or Route ). |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.addSimpleAttachmentPolicy">addSimpleAttachmentPolicy</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.addSimpleShareAction">addSimpleShareAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.cloudwan.CoreNetworkSegment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addAttachmentPolicy` <a name="addAttachmentPolicy" id="raindancers-network.cloudwan.CoreNetworkSegment.addAttachmentPolicy"></a>

```typescript
public addAttachmentPolicy(props: AttachmentPolicy): void
```

Add an AttachmentPolicy to a segment.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetworkSegment.addAttachmentPolicy.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.AttachmentPolicy

An attachment policy.

---

##### `addSegmentAction` <a name="addSegmentAction" id="raindancers-network.cloudwan.CoreNetworkSegment.addSegmentAction"></a>

```typescript
public addSegmentAction(props: SegmentAction): void
```

Add an Action to the Segment, ( Share or Route ).

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetworkSegment.addSegmentAction.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.SegmentAction

segment action.

---

##### `addSimpleAttachmentPolicy` <a name="addSimpleAttachmentPolicy" id="raindancers-network.cloudwan.CoreNetworkSegment.addSimpleAttachmentPolicy"></a>

```typescript
public addSimpleAttachmentPolicy(props: SimpleAttachmentPolicyProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetworkSegment.addSimpleAttachmentPolicy.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.SimpleAttachmentPolicyProps

---

##### `addSimpleShareAction` <a name="addSimpleShareAction" id="raindancers-network.cloudwan.CoreNetworkSegment.addSimpleShareAction"></a>

```typescript
public addSimpleShareAction(props: SimpleShareActionProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.cloudwan.CoreNetworkSegment.addSimpleShareAction.parameter.props"></a>

- *Type:* raindancers-network.cloudwan.SimpleShareActionProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.cloudwan.CoreNetworkSegment.isConstruct"></a>

```typescript
import { cloudwan } from 'raindancers-network'

cloudwan.CoreNetworkSegment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.cloudwan.CoreNetworkSegment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.property.policyTableServiceToken">policyTableServiceToken</a></code> | <code>string</code> | Service token for. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkSegment.property.segmentName">segmentName</a></code> | <code>string</code> | the name for the segment. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.cloudwan.CoreNetworkSegment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `policyTableServiceToken`<sup>Required</sup> <a name="policyTableServiceToken" id="raindancers-network.cloudwan.CoreNetworkSegment.property.policyTableServiceToken"></a>

```typescript
public readonly policyTableServiceToken: string;
```

- *Type:* string

Service token for.

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-network.cloudwan.CoreNetworkSegment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

the name for the segment.

---


### Crawler <a name="Crawler" id="raindancers-network.glue.Crawler"></a>

#### Initializers <a name="Initializers" id="raindancers-network.glue.Crawler.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

new glue.Crawler(scope: Construct, id: string, props: CrawlerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.Crawler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.glue.Crawler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.Crawler.Initializer.parameter.props">props</a></code> | <code>raindancers-network.glue.CrawlerProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.glue.Crawler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.glue.Crawler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.Crawler.Initializer.parameter.props"></a>

- *Type:* raindancers-network.glue.CrawlerProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.Crawler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.glue.Crawler.addClassifiers">addClassifiers</a></code> | This will add classifers to the crawler. |
| <code><a href="#raindancers-network.glue.Crawler.addConfiguration">addConfiguration</a></code> | set crawler Configuration. |
| <code><a href="#raindancers-network.glue.Crawler.addCrawlerSecurityConfiguration">addCrawlerSecurityConfiguration</a></code> | add CrawlerSecurity Configuration. |
| <code><a href="#raindancers-network.glue.Crawler.addRecrawlBehaviour">addRecrawlBehaviour</a></code> | Set the recall  policy for the crawler. |
| <code><a href="#raindancers-network.glue.Crawler.addSchedule">addSchedule</a></code> | add schedule for the crawler. |
| <code><a href="#raindancers-network.glue.Crawler.addSchemaChangePolicy">addSchemaChangePolicy</a></code> | Enable SchemaChangPolicy. |
| <code><a href="#raindancers-network.glue.Crawler.addTablePrefix">addTablePrefix</a></code> | add table prefix for the crawler. |
| <code><a href="#raindancers-network.glue.Crawler.enableLineage">enableLineage</a></code> | Enable Lineage for the Crawler. |
| <code><a href="#raindancers-network.glue.Crawler.useWithLakeFormation">useWithLakeFormation</a></code> | Use the crawler with lakeFormation Permissions. |

---

##### `toString` <a name="toString" id="raindancers-network.glue.Crawler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addClassifiers` <a name="addClassifiers" id="raindancers-network.glue.Crawler.addClassifiers"></a>

```typescript
public addClassifiers(props: AddClassifiersProps): void
```

This will add classifers to the crawler.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.Crawler.addClassifiers.parameter.props"></a>

- *Type:* raindancers-network.glue.AddClassifiersProps

addClassifierProps.

---

##### `addConfiguration` <a name="addConfiguration" id="raindancers-network.glue.Crawler.addConfiguration"></a>

```typescript
public addConfiguration(configuration: string): void
```

set crawler Configuration.

###### `configuration`<sup>Required</sup> <a name="configuration" id="raindancers-network.glue.Crawler.addConfiguration.parameter.configuration"></a>

- *Type:* string

---

##### `addCrawlerSecurityConfiguration` <a name="addCrawlerSecurityConfiguration" id="raindancers-network.glue.Crawler.addCrawlerSecurityConfiguration"></a>

```typescript
public addCrawlerSecurityConfiguration(configuration: string): void
```

add CrawlerSecurity Configuration.

###### `configuration`<sup>Required</sup> <a name="configuration" id="raindancers-network.glue.Crawler.addCrawlerSecurityConfiguration.parameter.configuration"></a>

- *Type:* string

---

##### `addRecrawlBehaviour` <a name="addRecrawlBehaviour" id="raindancers-network.glue.Crawler.addRecrawlBehaviour"></a>

```typescript
public addRecrawlBehaviour(recallpolicy: RecrawlPolicy): void
```

Set the recall  policy for the crawler.

###### `recallpolicy`<sup>Required</sup> <a name="recallpolicy" id="raindancers-network.glue.Crawler.addRecrawlBehaviour.parameter.recallpolicy"></a>

- *Type:* raindancers-network.glue.RecrawlPolicy

RecrawlPolicy.

---

##### `addSchedule` <a name="addSchedule" id="raindancers-network.glue.Crawler.addSchedule"></a>

```typescript
public addSchedule(schedule: string): void
```

add schedule for the crawler.

###### `schedule`<sup>Required</sup> <a name="schedule" id="raindancers-network.glue.Crawler.addSchedule.parameter.schedule"></a>

- *Type:* string

---

##### `addSchemaChangePolicy` <a name="addSchemaChangePolicy" id="raindancers-network.glue.Crawler.addSchemaChangePolicy"></a>

```typescript
public addSchemaChangePolicy(schemaChangePolicy: SchemaChangePolicy): void
```

Enable SchemaChangPolicy.

###### `schemaChangePolicy`<sup>Required</sup> <a name="schemaChangePolicy" id="raindancers-network.glue.Crawler.addSchemaChangePolicy.parameter.schemaChangePolicy"></a>

- *Type:* raindancers-network.glue.SchemaChangePolicy

---

##### `addTablePrefix` <a name="addTablePrefix" id="raindancers-network.glue.Crawler.addTablePrefix"></a>

```typescript
public addTablePrefix(tablePrefix: string): void
```

add table prefix for the crawler.

###### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="raindancers-network.glue.Crawler.addTablePrefix.parameter.tablePrefix"></a>

- *Type:* string

---

##### `enableLineage` <a name="enableLineage" id="raindancers-network.glue.Crawler.enableLineage"></a>

```typescript
public enableLineage(lineage: CrawlerLineageSettings): void
```

Enable Lineage for the Crawler.

###### `lineage`<sup>Required</sup> <a name="lineage" id="raindancers-network.glue.Crawler.enableLineage.parameter.lineage"></a>

- *Type:* raindancers-network.glue.CrawlerLineageSettings

---

##### `useWithLakeFormation` <a name="useWithLakeFormation" id="raindancers-network.glue.Crawler.useWithLakeFormation"></a>

```typescript
public useWithLakeFormation(props: LakeFormationConfiguration): void
```

Use the crawler with lakeFormation Permissions.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.Crawler.useWithLakeFormation.parameter.props"></a>

- *Type:* raindancers-network.glue.LakeFormationConfiguration

LakeFormationConfiguration.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.Crawler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.glue.Crawler.isConstruct"></a>

```typescript
import { glue } from 'raindancers-network'

glue.Crawler.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.glue.Crawler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.Crawler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.glue.Crawler.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.glue.Crawler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="raindancers-network.glue.Crawler.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### CrawlerRole <a name="CrawlerRole" id="raindancers-network.glue.CrawlerRole"></a>

#### Initializers <a name="Initializers" id="raindancers-network.glue.CrawlerRole.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

new glue.CrawlerRole(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.CrawlerRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.glue.CrawlerRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.glue.CrawlerRole.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.CrawlerRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.glue.CrawlerRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.CrawlerRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.glue.CrawlerRole.isConstruct"></a>

```typescript
import { glue } from 'raindancers-network'

glue.CrawlerRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.glue.CrawlerRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.CrawlerRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.glue.CrawlerRole.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.glue.CrawlerRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `role`<sup>Required</sup> <a name="role" id="raindancers-network.glue.CrawlerRole.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---


### CrossRegionParameterReader <a name="CrossRegionParameterReader" id="raindancers-network.ssm.CrossRegionParameterReader"></a>

#### Initializers <a name="Initializers" id="raindancers-network.ssm.CrossRegionParameterReader.Initializer"></a>

```typescript
import { ssm } from 'raindancers-network'

new ssm.CrossRegionParameterReader(scope: Construct, name: string, props: CrossRegionParameterReaderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ssm.CrossRegionParameterReaderProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ssm.CrossRegionParameterReader.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.ssm.CrossRegionParameterReader.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ssm.CrossRegionParameterReader.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ssm.CrossRegionParameterReaderProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.getResponseField">getResponseField</a></code> | Returns response data for the AWS SDK call as string. |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.getResponseFieldReference">getResponseFieldReference</a></code> | Returns response data for the AWS SDK call. |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.parameterValue">parameterValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.ssm.CrossRegionParameterReader.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getResponseField` <a name="getResponseField" id="raindancers-network.ssm.CrossRegionParameterReader.getResponseField"></a>

```typescript
public getResponseField(dataPath: string): string
```

Returns response data for the AWS SDK call as string.

Example for S3 / listBucket : 'Buckets.0.Name'

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="raindancers-network.ssm.CrossRegionParameterReader.getResponseField.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `getResponseFieldReference` <a name="getResponseFieldReference" id="raindancers-network.ssm.CrossRegionParameterReader.getResponseFieldReference"></a>

```typescript
public getResponseFieldReference(dataPath: string): Reference
```

Returns response data for the AWS SDK call.

Example for S3 / listBucket : 'Buckets.0.Name'

Use `Token.asXxx` to encode the returned `Reference` as a specific type or
use the convenience `getDataString` for string attributes.

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="raindancers-network.ssm.CrossRegionParameterReader.getResponseFieldReference.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `parameterValue` <a name="parameterValue" id="raindancers-network.ssm.CrossRegionParameterReader.parameterValue"></a>

```typescript
public parameterValue(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ssm.CrossRegionParameterReader.isConstruct"></a>

```typescript
import { ssm } from 'raindancers-network'

ssm.CrossRegionParameterReader.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ssm.CrossRegionParameterReader.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ssm.CrossRegionParameterReader.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="raindancers-network.ssm.CrossRegionParameterReader.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReader.property.PROVIDER_FUNCTION_UUID">PROVIDER_FUNCTION_UUID</a></code> | <code>string</code> | The uuid of the custom resource provider singleton lambda function. |

---

##### `PROVIDER_FUNCTION_UUID`<sup>Required</sup> <a name="PROVIDER_FUNCTION_UUID" id="raindancers-network.ssm.CrossRegionParameterReader.property.PROVIDER_FUNCTION_UUID"></a>

```typescript
public readonly PROVIDER_FUNCTION_UUID: string;
```

- *Type:* string

The uuid of the custom resource provider singleton lambda function.

---

### CrossRegionParameterWriter <a name="CrossRegionParameterWriter" id="raindancers-network.ssm.CrossRegionParameterWriter"></a>

#### Initializers <a name="Initializers" id="raindancers-network.ssm.CrossRegionParameterWriter.Initializer"></a>

```typescript
import { ssm } from 'raindancers-network'

new ssm.CrossRegionParameterWriter(scope: Construct, id: string, props: CrossRegionParameterWriterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriter.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ssm.CrossRegionParameterWriterProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ssm.CrossRegionParameterWriter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.ssm.CrossRegionParameterWriter.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ssm.CrossRegionParameterWriter.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ssm.CrossRegionParameterWriterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriter.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.ssm.CrossRegionParameterWriter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ssm.CrossRegionParameterWriter.isConstruct"></a>

```typescript
import { ssm } from 'raindancers-network'

ssm.CrossRegionParameterWriter.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ssm.CrossRegionParameterWriter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ssm.CrossRegionParameterWriter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CrowdStrikeExtendedEndpoint <a name="CrowdStrikeExtendedEndpoint" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint"></a>

This will.

#### Initializers <a name="Initializers" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

new crowdstrike.CrowdStrikeExtendedEndpoint(scope: Construct, id: string, props: CrowdStrikeExtendedEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer.parameter.props">props</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.Initializer.parameter.props"></a>

- *Type:* raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.isConstruct"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

crowdstrike.CrowdStrikeExtendedEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.download">download</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.downloadZone">downloadZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.downloadZoneName">downloadZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.proxy">proxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.proxyZone">proxyZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.proxyZoneName">proxyZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `download`<sup>Required</sup> <a name="download" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.download"></a>

```typescript
public readonly download: string;
```

- *Type:* string

---

##### `downloadZone`<sup>Required</sup> <a name="downloadZone" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.downloadZone"></a>

```typescript
public readonly downloadZone: string;
```

- *Type:* string

---

##### `downloadZoneName`<sup>Required</sup> <a name="downloadZoneName" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.downloadZoneName"></a>

```typescript
public readonly downloadZoneName: string;
```

- *Type:* string

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.proxy"></a>

```typescript
public readonly proxy: string;
```

- *Type:* string

---

##### `proxyZone`<sup>Required</sup> <a name="proxyZone" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.proxyZone"></a>

```typescript
public readonly proxyZone: string;
```

- *Type:* string

---

##### `proxyZoneName`<sup>Required</sup> <a name="proxyZoneName" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpoint.property.proxyZoneName"></a>

```typescript
public readonly proxyZoneName: string;
```

- *Type:* string

---


### CrowdStrikeNLB <a name="CrowdStrikeNLB" id="raindancers-network.crowdstrike.CrowdStrikeNLB"></a>

#### Initializers <a name="Initializers" id="raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

new crowdstrike.CrowdStrikeNLB(scope: Construct, id: string, props: CrowdStrikeNLBProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer.parameter.props">props</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeNLBProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.crowdstrike.CrowdStrikeNLB.Initializer.parameter.props"></a>

- *Type:* raindancers-network.crowdstrike.CrowdStrikeNLBProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLB.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.crowdstrike.CrowdStrikeNLB.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLB.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.crowdstrike.CrowdStrikeNLB.isConstruct"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

crowdstrike.CrowdStrikeNLB.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.crowdstrike.CrowdStrikeNLB.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLB.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.crowdstrike.CrowdStrikeNLB.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CrowdStrikePrivateLinkEndpoint <a name="CrowdStrikePrivateLinkEndpoint" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint"></a>

#### Initializers <a name="Initializers" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

new crowdstrike.CrowdStrikePrivateLinkEndpoint(scope: Construct, id: string, props: CrowdStrikePrivateLinkEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer.parameter.props">props</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.Initializer.parameter.props"></a>

- *Type:* raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.isConstruct"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

crowdstrike.CrowdStrikePrivateLinkEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.download">download</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.downloadhostedZone">downloadhostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.downloadhostedZoneName">downloadhostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.proxy">proxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.proxyhostedZone">proxyhostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.proxyhostedZoneName">proxyhostedZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `download`<sup>Required</sup> <a name="download" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.download"></a>

```typescript
public readonly download: string;
```

- *Type:* string

---

##### `downloadhostedZone`<sup>Required</sup> <a name="downloadhostedZone" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.downloadhostedZone"></a>

```typescript
public readonly downloadhostedZone: string;
```

- *Type:* string

---

##### `downloadhostedZoneName`<sup>Required</sup> <a name="downloadhostedZoneName" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.downloadhostedZoneName"></a>

```typescript
public readonly downloadhostedZoneName: string;
```

- *Type:* string

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.proxy"></a>

```typescript
public readonly proxy: string;
```

- *Type:* string

---

##### `proxyhostedZone`<sup>Required</sup> <a name="proxyhostedZone" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.proxyhostedZone"></a>

```typescript
public readonly proxyhostedZone: string;
```

- *Type:* string

---

##### `proxyhostedZoneName`<sup>Required</sup> <a name="proxyhostedZoneName" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpoint.property.proxyhostedZoneName"></a>

```typescript
public readonly proxyhostedZoneName: string;
```

- *Type:* string

---


### Delay <a name="Delay" id="raindancers-network.delay.Delay"></a>

#### Initializers <a name="Initializers" id="raindancers-network.delay.Delay.Initializer"></a>

```typescript
import { delay } from 'raindancers-network'

new delay.Delay(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.delay.Delay.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.delay.Delay.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.delay.Delay.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.delay.Delay.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.delay.Delay.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.delay.Delay.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.delay.Delay.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.delay.Delay.isConstruct"></a>

```typescript
import { delay } from 'raindancers-network'

delay.Delay.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.delay.Delay.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.delay.Delay.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.delay.Delay.property.delayProviderServiceToken">delayProviderServiceToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.delay.Delay.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `delayProviderServiceToken`<sup>Required</sup> <a name="delayProviderServiceToken" id="raindancers-network.delay.Delay.property.delayProviderServiceToken"></a>

```typescript
public readonly delayProviderServiceToken: string;
```

- *Type:* string

---


### EnforceImdsv2 <a name="EnforceImdsv2" id="raindancers-network.ec2.EnforceImdsv2"></a>

Enforces the use of IMDSv2, without causing replacement of the Instance.

#### Initializers <a name="Initializers" id="raindancers-network.ec2.EnforceImdsv2.Initializer"></a>

```typescript
import { ec2 } from 'raindancers-network'

new ec2.EnforceImdsv2(scope: Construct, id: string, props: EnforceImdsv2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ec2.EnforceImdsv2Props</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ec2.EnforceImdsv2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.ec2.EnforceImdsv2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ec2.EnforceImdsv2.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ec2.EnforceImdsv2Props

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.ec2.EnforceImdsv2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ec2.EnforceImdsv2.isConstruct"></a>

```typescript
import { ec2 } from 'raindancers-network'

ec2.EnforceImdsv2.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ec2.EnforceImdsv2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ec2.EnforceImdsv2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### EnterpriseVpc <a name="EnterpriseVpc" id="raindancers-network.network.EnterpriseVpc"></a>

Enteprise VPC's take the stock ec2.Vpc and provide numerous convience methods primarly related to connecting to internal networks.

#### Initializers <a name="Initializers" id="raindancers-network.network.EnterpriseVpc.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

new network.EnterpriseVpc(scope: Construct, id: string, props: EnterpriseVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.Initializer.parameter.props">props</a></code> | <code>raindancers-network.network.EnterpriseVpcProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.network.EnterpriseVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.network.EnterpriseVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.Initializer.parameter.props"></a>

- *Type:* raindancers-network.network.EnterpriseVpcProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addCentralResolverRules">addCentralResolverRules</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addConditionalFowardingRules">addConditionalFowardingRules</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addCoreRoutes">addCoreRoutes</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addCrossAccountR53AssociationRole">addCrossAccountR53AssociationRole</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addNetworkFirewall">addNetworkFirewall</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addPrivateHostedZone">addPrivateHostedZone</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addR53Resolvers">addR53Resolvers</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addR53Zone">addR53Zone</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addRoutes">addRoutes</a></code> | Add routes to SubnetGroups ( by implication their routing tables ). |
| <code><a href="#raindancers-network.network.EnterpriseVpc.addServiceEndpoints">addServiceEndpoints</a></code> | Add a collection of service endpopints to the VPC. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.associateSharedResolverRules">associateSharedResolverRules</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.attachAWSManagedDNSFirewallRules">attachAWSManagedDNSFirewallRules</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.attachToCloudWan">attachToCloudWan</a></code> | attachToCloudWan will attach a VPC to CloudWan, in a particular Segment. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.attachToTransitGateway">attachToTransitGateway</a></code> | Attach a vpc to a transit gateway, possibly in appliance mode Its intended purpose is provide a. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.cloudWanRoutingProtocol">cloudWanRoutingProtocol</a></code> | Enable CloudWanRoutingProtocol. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.createAndAttachR53EnterprizeZone">createAndAttachR53EnterprizeZone</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.createAndAttachR53PrivateZone">createAndAttachR53PrivateZone</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.createAndShareSubnetPrefixList">createAndShareSubnetPrefixList</a></code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.createFlowLog">createFlowLog</a></code> | Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.router">router</a></code> | This is a convience method to present the routing for the Vpc in a simpler format, than the addRoutes Method, which it calls. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.shareSubnetGroup">shareSubnetGroup</a></code> | Share a subnetGroup with another AWS Account. |

---

##### `toString` <a name="toString" id="raindancers-network.network.EnterpriseVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addCentralResolverRules` <a name="addCentralResolverRules" id="raindancers-network.network.EnterpriseVpc.addCentralResolverRules"></a>

```typescript
public addCentralResolverRules(domains: string[], searchTag?: Tag): void
```

###### `domains`<sup>Required</sup> <a name="domains" id="raindancers-network.network.EnterpriseVpc.addCentralResolverRules.parameter.domains"></a>

- *Type:* string[]

---

###### `searchTag`<sup>Optional</sup> <a name="searchTag" id="raindancers-network.network.EnterpriseVpc.addCentralResolverRules.parameter.searchTag"></a>

- *Type:* aws-cdk-lib.Tag

---

##### `addConditionalFowardingRules` <a name="addConditionalFowardingRules" id="raindancers-network.network.EnterpriseVpc.addConditionalFowardingRules"></a>

```typescript
public addConditionalFowardingRules(forwardingRules: OutboundForwardingRule[]): void
```

###### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="raindancers-network.network.EnterpriseVpc.addConditionalFowardingRules.parameter.forwardingRules"></a>

- *Type:* raindancers-network.dns.OutboundForwardingRule[]

---

##### `addCoreRoutes` <a name="addCoreRoutes" id="raindancers-network.network.EnterpriseVpc.addCoreRoutes"></a>

```typescript
public addCoreRoutes(props: AddCoreRoutesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.addCoreRoutes.parameter.props"></a>

- *Type:* raindancers-network.network.AddCoreRoutesProps

---

##### `addCrossAccountR53AssociationRole` <a name="addCrossAccountR53AssociationRole" id="raindancers-network.network.EnterpriseVpc.addCrossAccountR53AssociationRole"></a>

```typescript
public addCrossAccountR53AssociationRole(rolename?: string): void
```

###### `rolename`<sup>Optional</sup> <a name="rolename" id="raindancers-network.network.EnterpriseVpc.addCrossAccountR53AssociationRole.parameter.rolename"></a>

- *Type:* string

---

##### `addNetworkFirewall` <a name="addNetworkFirewall" id="raindancers-network.network.EnterpriseVpc.addNetworkFirewall"></a>

```typescript
public addNetworkFirewall(firewallName: string, firewallPolicy: CfnFirewallPolicy, subnet: SubnetGroup): void
```

###### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-network.network.EnterpriseVpc.addNetworkFirewall.parameter.firewallName"></a>

- *Type:* string

---

###### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="raindancers-network.network.EnterpriseVpc.addNetworkFirewall.parameter.firewallPolicy"></a>

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

---

###### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-network.network.EnterpriseVpc.addNetworkFirewall.parameter.subnet"></a>

- *Type:* raindancers-network.network.SubnetGroup

---

##### `addPrivateHostedZone` <a name="addPrivateHostedZone" id="raindancers-network.network.EnterpriseVpc.addPrivateHostedZone"></a>

```typescript
public addPrivateHostedZone(zonename: string): HostedZone
```

###### `zonename`<sup>Required</sup> <a name="zonename" id="raindancers-network.network.EnterpriseVpc.addPrivateHostedZone.parameter.zonename"></a>

- *Type:* string

---

##### `addR53Resolvers` <a name="addR53Resolvers" id="raindancers-network.network.EnterpriseVpc.addR53Resolvers"></a>

```typescript
public addR53Resolvers(subnet: SubnetGroup): R53Resolverendpoints
```

###### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-network.network.EnterpriseVpc.addR53Resolvers.parameter.subnet"></a>

- *Type:* raindancers-network.network.SubnetGroup

---

##### `addR53Zone` <a name="addR53Zone" id="raindancers-network.network.EnterpriseVpc.addR53Zone"></a>

```typescript
public addR53Zone(props: AddR53ZoneProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.addR53Zone.parameter.props"></a>

- *Type:* raindancers-network.network.AddR53ZoneProps

---

##### `addRoutes` <a name="addRoutes" id="raindancers-network.network.EnterpriseVpc.addRoutes"></a>

```typescript
public addRoutes(props: AddRoutesProps): void
```

Add routes to SubnetGroups ( by implication their routing tables ).

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.addRoutes.parameter.props"></a>

- *Type:* raindancers-network.network.AddRoutesProps

---

##### `addServiceEndpoints` <a name="addServiceEndpoints" id="raindancers-network.network.EnterpriseVpc.addServiceEndpoints"></a>

```typescript
public addServiceEndpoints(props: AddAwsServiceEndPointsProps): void
```

Add a collection of service endpopints to the VPC.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.addServiceEndpoints.parameter.props"></a>

- *Type:* raindancers-network.network.AddAwsServiceEndPointsProps

---

##### `associateSharedResolverRules` <a name="associateSharedResolverRules" id="raindancers-network.network.EnterpriseVpc.associateSharedResolverRules"></a>

```typescript
public associateSharedResolverRules(domainNames: string[]): void
```

###### `domainNames`<sup>Required</sup> <a name="domainNames" id="raindancers-network.network.EnterpriseVpc.associateSharedResolverRules.parameter.domainNames"></a>

- *Type:* string[]

---

##### `attachAWSManagedDNSFirewallRules` <a name="attachAWSManagedDNSFirewallRules" id="raindancers-network.network.EnterpriseVpc.attachAWSManagedDNSFirewallRules"></a>

```typescript
public attachAWSManagedDNSFirewallRules(): void
```

##### `attachToCloudWan` <a name="attachToCloudWan" id="raindancers-network.network.EnterpriseVpc.attachToCloudWan"></a>

```typescript
public attachToCloudWan(props: AttachToCloudWanProps): string
```

attachToCloudWan will attach a VPC to CloudWan, in a particular Segment.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.attachToCloudWan.parameter.props"></a>

- *Type:* raindancers-network.network.AttachToCloudWanProps

---

##### `attachToTransitGateway` <a name="attachToTransitGateway" id="raindancers-network.network.EnterpriseVpc.attachToTransitGateway"></a>

```typescript
public attachToTransitGateway(props: AttachToTransitGatewayProps): string
```

Attach a vpc to a transit gateway, possibly in appliance mode Its intended purpose is provide a.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.attachToTransitGateway.parameter.props"></a>

- *Type:* raindancers-network.network.AttachToTransitGatewayProps

---

##### `cloudWanRoutingProtocol` <a name="cloudWanRoutingProtocol" id="raindancers-network.network.EnterpriseVpc.cloudWanRoutingProtocol"></a>

```typescript
public cloudWanRoutingProtocol(props: CloudWanRoutingProtocolProps): void
```

Enable CloudWanRoutingProtocol.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.cloudWanRoutingProtocol.parameter.props"></a>

- *Type:* raindancers-network.network.CloudWanRoutingProtocolProps

---

##### `createAndAttachR53EnterprizeZone` <a name="createAndAttachR53EnterprizeZone" id="raindancers-network.network.EnterpriseVpc.createAndAttachR53EnterprizeZone"></a>

```typescript
public createAndAttachR53EnterprizeZone(props: AddEnterprizeZoneProps): PrivateHostedZone
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.createAndAttachR53EnterprizeZone.parameter.props"></a>

- *Type:* raindancers-network.network.AddEnterprizeZoneProps

---

##### `createAndAttachR53PrivateZone` <a name="createAndAttachR53PrivateZone" id="raindancers-network.network.EnterpriseVpc.createAndAttachR53PrivateZone"></a>

```typescript
public createAndAttachR53PrivateZone(zoneName: string): PrivateHostedZone
```

###### `zoneName`<sup>Required</sup> <a name="zoneName" id="raindancers-network.network.EnterpriseVpc.createAndAttachR53PrivateZone.parameter.zoneName"></a>

- *Type:* string

---

##### `createAndShareSubnetPrefixList` <a name="createAndShareSubnetPrefixList" id="raindancers-network.network.EnterpriseVpc.createAndShareSubnetPrefixList"></a>

```typescript
public createAndShareSubnetPrefixList(name: string, subnets: SubnetSelection, orgArn: string): CfnPrefixList
```

###### `name`<sup>Required</sup> <a name="name" id="raindancers-network.network.EnterpriseVpc.createAndShareSubnetPrefixList.parameter.name"></a>

- *Type:* string

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-network.network.EnterpriseVpc.createAndShareSubnetPrefixList.parameter.subnets"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

###### `orgArn`<sup>Required</sup> <a name="orgArn" id="raindancers-network.network.EnterpriseVpc.createAndShareSubnetPrefixList.parameter.orgArn"></a>

- *Type:* string

---

##### `createFlowLog` <a name="createFlowLog" id="raindancers-network.network.EnterpriseVpc.createFlowLog"></a>

```typescript
public createFlowLog(props: FlowLogProps): void
```

Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.createFlowLog.parameter.props"></a>

- *Type:* raindancers-network.network.FlowLogProps

---

##### `router` <a name="router" id="raindancers-network.network.EnterpriseVpc.router"></a>

```typescript
public router(routerGroups: RouterGroup[]): void
```

This is a convience method to present the routing for the Vpc in a simpler format, than the addRoutes Method, which it calls.

###### `routerGroups`<sup>Required</sup> <a name="routerGroups" id="raindancers-network.network.EnterpriseVpc.router.parameter.routerGroups"></a>

- *Type:* raindancers-network.network.RouterGroup[]

---

##### `shareSubnetGroup` <a name="shareSubnetGroup" id="raindancers-network.network.EnterpriseVpc.shareSubnetGroup"></a>

```typescript
public shareSubnetGroup(props: ShareSubnetGroupProps): void
```

Share a subnetGroup with another AWS Account.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.EnterpriseVpc.shareSubnetGroup.parameter.props"></a>

- *Type:* raindancers-network.network.ShareSubnetGroupProps

ShareSubnetGroup.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.network.EnterpriseVpc.isConstruct"></a>

```typescript
import { network } from 'raindancers-network'

network.EnterpriseVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.network.EnterpriseVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.attachToCloudwanProvider">attachToCloudwanProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.tgWaiterProvider">tgWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | the ec2.Vpc that is passed in as property. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.subnetConfiguration">subnetConfiguration</a></code> | <code>raindancers-network.network.SubnetGroup[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.cloudWanCoreId">cloudWanCoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.cloudWanName">cloudWanName</a></code> | <code>string</code> | the Name of the cloudwan that the VPC is attached to. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.cloudWanSegment">cloudWanSegment</a></code> | <code>string</code> | the Name of the Cloudwan segment that the vpc is attached to. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.cloudWanVpcAttachmentId">cloudWanVpcAttachmentId</a></code> | <code>string</code> | AttachmentId when the vpc is attached to a Cloudwan. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.r53endpointResolvers">r53endpointResolvers</a></code> | <code>raindancers-network.dns.R53Resolverendpoints</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.transitGWAttachmentID">transitGWAttachmentID</a></code> | <code>string</code> | AttachmentId when the vpc is attached to a transitGateway. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.transitGWID">transitGWID</a></code> | <code>string</code> | The Id of the transitgateway that the VPC is attached to. |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.vpcAttachmentCR">vpcAttachmentCR</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.vpcAttachmentId">vpcAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpc.property.vpcAttachmentSegmentName">vpcAttachmentSegmentName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.network.EnterpriseVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-network.network.EnterpriseVpc.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `attachToCloudwanProvider`<sup>Required</sup> <a name="attachToCloudwanProvider" id="raindancers-network.network.EnterpriseVpc.property.attachToCloudwanProvider"></a>

```typescript
public readonly attachToCloudwanProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `tgWaiterProvider`<sup>Required</sup> <a name="tgWaiterProvider" id="raindancers-network.network.EnterpriseVpc.property.tgWaiterProvider"></a>

```typescript
public readonly tgWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.network.EnterpriseVpc.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

the ec2.Vpc that is passed in as property.

---

##### `subnetConfiguration`<sup>Required</sup> <a name="subnetConfiguration" id="raindancers-network.network.EnterpriseVpc.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetGroup[];
```

- *Type:* raindancers-network.network.SubnetGroup[]

---

##### `cloudWanCoreId`<sup>Optional</sup> <a name="cloudWanCoreId" id="raindancers-network.network.EnterpriseVpc.property.cloudWanCoreId"></a>

```typescript
public readonly cloudWanCoreId: string;
```

- *Type:* string

---

##### `cloudWanName`<sup>Optional</sup> <a name="cloudWanName" id="raindancers-network.network.EnterpriseVpc.property.cloudWanName"></a>

```typescript
public readonly cloudWanName: string;
```

- *Type:* string

the Name of the cloudwan that the VPC is attached to.

---

##### `cloudWanSegment`<sup>Optional</sup> <a name="cloudWanSegment" id="raindancers-network.network.EnterpriseVpc.property.cloudWanSegment"></a>

```typescript
public readonly cloudWanSegment: string;
```

- *Type:* string

the Name of the Cloudwan segment that the vpc is attached to.

---

##### `cloudWanVpcAttachmentId`<sup>Optional</sup> <a name="cloudWanVpcAttachmentId" id="raindancers-network.network.EnterpriseVpc.property.cloudWanVpcAttachmentId"></a>

```typescript
public readonly cloudWanVpcAttachmentId: string;
```

- *Type:* string

AttachmentId when the vpc is attached to a Cloudwan.

---

##### `firewallArn`<sup>Optional</sup> <a name="firewallArn" id="raindancers-network.network.EnterpriseVpc.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `r53endpointResolvers`<sup>Optional</sup> <a name="r53endpointResolvers" id="raindancers-network.network.EnterpriseVpc.property.r53endpointResolvers"></a>

```typescript
public readonly r53endpointResolvers: R53Resolverendpoints;
```

- *Type:* raindancers-network.dns.R53Resolverendpoints

---

##### `transitGWAttachmentID`<sup>Optional</sup> <a name="transitGWAttachmentID" id="raindancers-network.network.EnterpriseVpc.property.transitGWAttachmentID"></a>

```typescript
public readonly transitGWAttachmentID: string;
```

- *Type:* string

AttachmentId when the vpc is attached to a transitGateway.

---

##### `transitGWID`<sup>Optional</sup> <a name="transitGWID" id="raindancers-network.network.EnterpriseVpc.property.transitGWID"></a>

```typescript
public readonly transitGWID: string;
```

- *Type:* string

The Id of the transitgateway that the VPC is attached to.

---

##### `vpcAttachmentCR`<sup>Optional</sup> <a name="vpcAttachmentCR" id="raindancers-network.network.EnterpriseVpc.property.vpcAttachmentCR"></a>

```typescript
public readonly vpcAttachmentCR: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `vpcAttachmentId`<sup>Optional</sup> <a name="vpcAttachmentId" id="raindancers-network.network.EnterpriseVpc.property.vpcAttachmentId"></a>

```typescript
public readonly vpcAttachmentId: string;
```

- *Type:* string

---

##### `vpcAttachmentSegmentName`<sup>Optional</sup> <a name="vpcAttachmentSegmentName" id="raindancers-network.network.EnterpriseVpc.property.vpcAttachmentSegmentName"></a>

```typescript
public readonly vpcAttachmentSegmentName: string;
```

- *Type:* string

---


### EnterpriseVpcLambda <a name="EnterpriseVpcLambda" id="raindancers-network.network.EnterpriseVpcLambda"></a>

#### Initializers <a name="Initializers" id="raindancers-network.network.EnterpriseVpcLambda.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

new network.EnterpriseVpcLambda(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.network.EnterpriseVpcLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.network.EnterpriseVpcLambda.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.network.EnterpriseVpcLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.network.EnterpriseVpcLambda.isConstruct"></a>

```typescript
import { network } from 'raindancers-network'

network.EnterpriseVpcLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.network.EnterpriseVpcLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | A custom resource to use for adding routes. |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.property.attachToCloudwanProvider">attachToCloudwanProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | attach to cloudwan with a water. |
| <code><a href="#raindancers-network.network.EnterpriseVpcLambda.property.tgWaiterProvider">tgWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | A check to see if transitgateway is ready to route to. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.network.EnterpriseVpcLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-network.network.EnterpriseVpcLambda.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

A custom resource to use for adding routes.

---

##### `attachToCloudwanProvider`<sup>Required</sup> <a name="attachToCloudwanProvider" id="raindancers-network.network.EnterpriseVpcLambda.property.attachToCloudwanProvider"></a>

```typescript
public readonly attachToCloudwanProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

attach to cloudwan with a water.

---

##### `tgWaiterProvider`<sup>Required</sup> <a name="tgWaiterProvider" id="raindancers-network.network.EnterpriseVpcLambda.property.tgWaiterProvider"></a>

```typescript
public readonly tgWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

A check to see if transitgateway is ready to route to.

---


### EnterpriseZone <a name="EnterpriseZone" id="raindancers-network.dns.EnterpriseZone"></a>

create forwarding rules and associate them with a vpc.

#### Initializers <a name="Initializers" id="raindancers-network.dns.EnterpriseZone.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.EnterpriseZone(scope: Construct, id: string, props: EnterpriseZoneProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.EnterpriseZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.EnterpriseZone.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.EnterpriseZone.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.EnterpriseZoneProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.EnterpriseZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.EnterpriseZone.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.EnterpriseZone.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.EnterpriseZoneProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.EnterpriseZone.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.EnterpriseZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.EnterpriseZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.EnterpriseZone.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.EnterpriseZone.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.EnterpriseZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.EnterpriseZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.dns.EnterpriseZone.property.privateZone">privateZone</a></code> | <code>aws-cdk-lib.aws_route53.PrivateHostedZone</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.EnterpriseZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `privateZone`<sup>Required</sup> <a name="privateZone" id="raindancers-network.dns.EnterpriseZone.property.privateZone"></a>

```typescript
public readonly privateZone: PrivateHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.PrivateHostedZone

---


### FindPrefixList <a name="FindPrefixList" id="raindancers-network.ec2.FindPrefixList"></a>

Enforces the use of IMDSv2, without causing replacement of the Instance.

#### Initializers <a name="Initializers" id="raindancers-network.ec2.FindPrefixList.Initializer"></a>

```typescript
import { ec2 } from 'raindancers-network'

new ec2.FindPrefixList(scope: Construct, id: string, props: FindPrefixListProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ec2.FindPrefixList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.ec2.FindPrefixList.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ec2.FindPrefixList.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ec2.FindPrefixListProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ec2.FindPrefixList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.ec2.FindPrefixList.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ec2.FindPrefixList.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ec2.FindPrefixListProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ec2.FindPrefixList.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.ec2.FindPrefixList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ec2.FindPrefixList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ec2.FindPrefixList.isConstruct"></a>

```typescript
import { ec2 } from 'raindancers-network'

ec2.FindPrefixList.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ec2.FindPrefixList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ec2.FindPrefixList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.ec2.FindPrefixList.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ec2.FindPrefixList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="raindancers-network.ec2.FindPrefixList.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---


### FirewallPolicy <a name="FirewallPolicy" id="raindancers-network.firewall.FirewallPolicy"></a>

#### Initializers <a name="Initializers" id="raindancers-network.firewall.FirewallPolicy.Initializer"></a>

```typescript
import { firewall } from 'raindancers-network'

new firewall.FirewallPolicy(scope: Construct, id: string, props: FirewallPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.Initializer.parameter.props">props</a></code> | <code>raindancers-network.firewall.FirewallPolicyProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.firewall.FirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.firewall.FirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.firewall.FirewallPolicy.Initializer.parameter.props"></a>

- *Type:* raindancers-network.firewall.FirewallPolicyProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.addManagedStatefulRules">addManagedStatefulRules</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.addStatelessRuleGroup">addStatelessRuleGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.firewall.FirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addManagedStatefulRules` <a name="addManagedStatefulRules" id="raindancers-network.firewall.FirewallPolicy.addManagedStatefulRules"></a>

```typescript
public addManagedStatefulRules(props: AddStatefulRulesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.firewall.FirewallPolicy.addManagedStatefulRules.parameter.props"></a>

- *Type:* raindancers-network.firewall.AddStatefulRulesProps

---

##### `addStatelessRuleGroup` <a name="addStatelessRuleGroup" id="raindancers-network.firewall.FirewallPolicy.addStatelessRuleGroup"></a>

```typescript
public addStatelessRuleGroup(props: AddStatelessRulesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.firewall.FirewallPolicy.addStatelessRuleGroup.parameter.props"></a>

- *Type:* raindancers-network.firewall.AddStatelessRulesProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.firewall.FirewallPolicy.isConstruct"></a>

```typescript
import { firewall } from 'raindancers-network'

firewall.FirewallPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.firewall.FirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.property.firewallpolicy">firewallpolicy</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicy.property.policy">policy</a></code> | <code>raindancers-network.firewall.IFirewallPolicyProperty</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.firewall.FirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `firewallpolicy`<sup>Required</sup> <a name="firewallpolicy" id="raindancers-network.firewall.FirewallPolicy.property.firewallpolicy"></a>

```typescript
public readonly firewallpolicy: CfnFirewallPolicy;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

---

##### `policy`<sup>Required</sup> <a name="policy" id="raindancers-network.firewall.FirewallPolicy.property.policy"></a>

```typescript
public readonly policy: IFirewallPolicyProperty;
```

- *Type:* raindancers-network.firewall.IFirewallPolicyProperty

---


### ForwardingRules <a name="ForwardingRules" id="raindancers-network.dns.ForwardingRules"></a>

create forwarding rules and associate them with a vpc.

#### Initializers <a name="Initializers" id="raindancers-network.dns.ForwardingRules.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.ForwardingRules(scope: Construct, id: string, props: ForwardingRulesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.ForwardingRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ForwardingRules.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ForwardingRules.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.ForwardingRulesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.ForwardingRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.ForwardingRules.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.ForwardingRules.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.ForwardingRulesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.ForwardingRules.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.ForwardingRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.ForwardingRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.ForwardingRules.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.ForwardingRules.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.ForwardingRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.ForwardingRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.ForwardingRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### GetTunnelAddressPair <a name="GetTunnelAddressPair" id="raindancers-network.ipam.GetTunnelAddressPair"></a>

Allocate a pair of /30 networks CIDRS for use in Ipsec VPN Tunnels.

#### Initializers <a name="Initializers" id="raindancers-network.ipam.GetTunnelAddressPair.Initializer"></a>

```typescript
import { ipam } from 'raindancers-network'

new ipam.GetTunnelAddressPair(scope: Construct, id: string, props: GetTunnelAddressPairProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | scope in which this resource is created. |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.Initializer.parameter.id">id</a></code> | <code>string</code> | scope id of the resoruce. |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ipam.GetTunnelAddressPairProps</code> | resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ipam.GetTunnelAddressPair.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is created.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.ipam.GetTunnelAddressPair.Initializer.parameter.id"></a>

- *Type:* string

scope id of the resoruce.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ipam.GetTunnelAddressPair.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ipam.GetTunnelAddressPairProps

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.ipam.GetTunnelAddressPair.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ipam.GetTunnelAddressPair.isConstruct"></a>

```typescript
import { ipam } from 'raindancers-network'

ipam.GetTunnelAddressPair.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ipam.GetTunnelAddressPair.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPair.property.assignedCidrPair">assignedCidrPair</a></code> | <code>string[]</code> | returns 2 cidr blocks as an array to be used by an IPsec Tunnel. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ipam.GetTunnelAddressPair.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `assignedCidrPair`<sup>Required</sup> <a name="assignedCidrPair" id="raindancers-network.ipam.GetTunnelAddressPair.property.assignedCidrPair"></a>

```typescript
public readonly assignedCidrPair: string[];
```

- *Type:* string[]

returns 2 cidr blocks as an array to be used by an IPsec Tunnel.

---


### GlueClassifier <a name="GlueClassifier" id="raindancers-network.glue.GlueClassifier"></a>

#### Initializers <a name="Initializers" id="raindancers-network.glue.GlueClassifier.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

new glue.GlueClassifier(scope: Construct, id: string, props: GlueClassifierProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifier.Initializer.parameter.props">props</a></code> | <code>raindancers-network.glue.GlueClassifierProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.glue.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.glue.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.GlueClassifier.Initializer.parameter.props"></a>

- *Type:* raindancers-network.glue.GlueClassifierProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.GlueClassifier.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.glue.GlueClassifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.GlueClassifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.glue.GlueClassifier.isConstruct"></a>

```typescript
import { glue } from 'raindancers-network'

glue.GlueClassifier.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.glue.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.GlueClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.glue.GlueClassifier.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifier.property.classifier">classifier</a></code> | <code>aws-cdk-lib.aws_glue.CfnClassifier</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.glue.GlueClassifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.glue.GlueClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `classifier`<sup>Optional</sup> <a name="classifier" id="raindancers-network.glue.GlueClassifier.property.classifier"></a>

```typescript
public readonly classifier: CfnClassifier;
```

- *Type:* aws-cdk-lib.aws_glue.CfnClassifier

---


### GlueDataBase <a name="GlueDataBase" id="raindancers-network.glue.GlueDataBase"></a>

#### Initializers <a name="Initializers" id="raindancers-network.glue.GlueDataBase.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

new glue.GlueDataBase(scope: Construct, id: string, props: DataBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.GlueDataBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueDataBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueDataBase.Initializer.parameter.props">props</a></code> | <code>raindancers-network.glue.DataBaseProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.glue.GlueDataBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.glue.GlueDataBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.GlueDataBase.Initializer.parameter.props"></a>

- *Type:* raindancers-network.glue.DataBaseProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.GlueDataBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.glue.GlueDataBase.addCrawler">addCrawler</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.glue.GlueDataBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addCrawler` <a name="addCrawler" id="raindancers-network.glue.GlueDataBase.addCrawler"></a>

```typescript
public addCrawler(props: AddCrawlerProps): Crawler
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.GlueDataBase.addCrawler.parameter.props"></a>

- *Type:* raindancers-network.glue.AddCrawlerProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.GlueDataBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.glue.GlueDataBase.isConstruct"></a>

```typescript
import { glue } from 'raindancers-network'

glue.GlueDataBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.glue.GlueDataBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.GlueDataBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.glue.GlueDataBase.property.database">database</a></code> | <code>aws-cdk-lib.aws_glue.CfnDatabase</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueDataBase.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.glue.GlueDataBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `database`<sup>Required</sup> <a name="database" id="raindancers-network.glue.GlueDataBase.property.database"></a>

```typescript
public readonly database: CfnDatabase;
```

- *Type:* aws-cdk-lib.aws_glue.CfnDatabase

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.glue.GlueDataBase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---


### IpsecTunnelPool <a name="IpsecTunnelPool" id="raindancers-network.ipam.IpsecTunnelPool"></a>

Creates an IPAM pool to assign address's for IPsec VPNS.

#### Initializers <a name="Initializers" id="raindancers-network.ipam.IpsecTunnelPool.Initializer"></a>

```typescript
import { ipam } from 'raindancers-network'

new ipam.IpsecTunnelPool(scope: Construct, id: string, props: IpsecTunnelPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | scope in which this resource is defined. |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.Initializer.parameter.id">id</a></code> | <code>string</code> | id of the resource. |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ipam.IpsecTunnelPoolProps</code> | resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ipam.IpsecTunnelPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.ipam.IpsecTunnelPool.Initializer.parameter.id"></a>

- *Type:* string

id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ipam.IpsecTunnelPool.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ipam.IpsecTunnelPoolProps

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.ipam.IpsecTunnelPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ipam.IpsecTunnelPool.isConstruct"></a>

```typescript
import { ipam } from 'raindancers-network'

ipam.IpsecTunnelPool.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ipam.IpsecTunnelPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPool.property.ipampool">ipampool</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | returns the created ipam Pool. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ipam.IpsecTunnelPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ipampool`<sup>Required</sup> <a name="ipampool" id="raindancers-network.ipam.IpsecTunnelPool.property.ipampool"></a>

```typescript
public readonly ipampool: CfnIPAMPool;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool

returns the created ipam Pool.

---


### JDBCTarget <a name="JDBCTarget" id="raindancers-network.glue.JDBCTarget"></a>

This class is incomplete.

It will not run. the Class needs to exisit
so, as the add crawler method requires it.
TODO:

#### Initializers <a name="Initializers" id="raindancers-network.glue.JDBCTarget.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

new glue.JDBCTarget(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.JDBCTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.glue.JDBCTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.glue.JDBCTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.glue.JDBCTarget.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.JDBCTarget.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.glue.JDBCTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.JDBCTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.glue.JDBCTarget.isConstruct"></a>

```typescript
import { glue } from 'raindancers-network'

glue.JDBCTarget.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.glue.JDBCTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.JDBCTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.glue.JDBCTarget.property.target">target</a></code> | <code>raindancers-network.glue.IJDBCTargetObject</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.glue.JDBCTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `target`<sup>Required</sup> <a name="target" id="raindancers-network.glue.JDBCTarget.property.target"></a>

```typescript
public readonly target: IJDBCTargetObject;
```

- *Type:* raindancers-network.glue.IJDBCTargetObject

---


### LakeFormation <a name="LakeFormation" id="raindancers-network.lakeformation.LakeFormation"></a>

Create a Class for the methods the methods that we use to operate on our 'Datalake'.

#### Initializers <a name="Initializers" id="raindancers-network.lakeformation.LakeFormation.Initializer"></a>

```typescript
import { lakeformation } from 'raindancers-network'

new lakeformation.LakeFormation(scope: Construct, id: string, props: LakeFormationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.Initializer.parameter.props">props</a></code> | <code>raindancers-network.lakeformation.LakeFormationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.lakeformation.LakeFormation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.lakeformation.LakeFormation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.lakeformation.LakeFormation.Initializer.parameter.props"></a>

- *Type:* raindancers-network.lakeformation.LakeFormationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.addDatabase">addDatabase</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.addNewBucketToLakeFormation">addNewBucketToLakeFormation</a></code> | Create a new bucket and associate it to the the Lakeformation. |

---

##### `toString` <a name="toString" id="raindancers-network.lakeformation.LakeFormation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDatabase` <a name="addDatabase" id="raindancers-network.lakeformation.LakeFormation.addDatabase"></a>

```typescript
public addDatabase(props: AddDatabaseProps): GlueDataBase
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.lakeformation.LakeFormation.addDatabase.parameter.props"></a>

- *Type:* raindancers-network.lakeformation.AddDatabaseProps

AddDatabaseProps.

---

##### `addNewBucketToLakeFormation` <a name="addNewBucketToLakeFormation" id="raindancers-network.lakeformation.LakeFormation.addNewBucketToLakeFormation"></a>

```typescript
public addNewBucketToLakeFormation(props: AddNewBucketToLakeFormationProps): Bucket
```

Create a new bucket and associate it to the the Lakeformation.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.lakeformation.LakeFormation.addNewBucketToLakeFormation.parameter.props"></a>

- *Type:* raindancers-network.lakeformation.AddNewBucketToLakeFormationProps

AddNewBucketToLakeFormationProps.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.lakeformation.LakeFormation.isConstruct"></a>

```typescript
import { lakeformation } from 'raindancers-network'

lakeformation.LakeFormation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.lakeformation.LakeFormation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.lakeformation.LakeFormation.property.nonproduction">nonproduction</a></code> | <code>boolean</code> | Used to determine if buckets are backedup, and protected from Stack Destruction. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.lakeformation.LakeFormation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `nonproduction`<sup>Optional</sup> <a name="nonproduction" id="raindancers-network.lakeformation.LakeFormation.property.nonproduction"></a>

```typescript
public readonly nonproduction: boolean;
```

- *Type:* boolean

Used to determine if buckets are backedup, and protected from Stack Destruction.

---


### PermissionSet <a name="PermissionSet" id="raindancers-network.sso.PermissionSet"></a>

- *Implements:* raindancers-network.sso.IPermissionSet

#### Initializers <a name="Initializers" id="raindancers-network.sso.PermissionSet.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

new sso.PermissionSet(scope: Construct, id: string, props: PermissionSetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.PermissionSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.sso.PermissionSet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.sso.PermissionSet.Initializer.parameter.props">props</a></code> | <code>raindancers-network.sso.PermissionSetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.sso.PermissionSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.sso.PermissionSet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.sso.PermissionSet.Initializer.parameter.props"></a>

- *Type:* raindancers-network.sso.PermissionSetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.PermissionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.sso.PermissionSet.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#raindancers-network.sso.PermissionSet.grant">grant</a></code> | Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance. |

---

##### `toString` <a name="toString" id="raindancers-network.sso.PermissionSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-network.sso.PermissionSet.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-network.sso.PermissionSet.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="raindancers-network.sso.PermissionSet.grant"></a>

```typescript
public grant(id: string, assignmentOptions: AssignmentOptions): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.sso.PermissionSet.grant.parameter.id"></a>

- *Type:* string

---

###### `assignmentOptions`<sup>Required</sup> <a name="assignmentOptions" id="raindancers-network.sso.PermissionSet.grant.parameter.assignmentOptions"></a>

- *Type:* raindancers-network.sso.AssignmentOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.PermissionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-network.sso.PermissionSet.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-network.sso.PermissionSet.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#raindancers-network.sso.PermissionSet.fromPermissionSetArn">fromPermissionSetArn</a></code> | Reference an existing permission set by ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.sso.PermissionSet.isConstruct"></a>

```typescript
import { sso } from 'raindancers-network'

sso.PermissionSet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.sso.PermissionSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-network.sso.PermissionSet.isOwnedResource"></a>

```typescript
import { sso } from 'raindancers-network'

sso.PermissionSet.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-network.sso.PermissionSet.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-network.sso.PermissionSet.isResource"></a>

```typescript
import { sso } from 'raindancers-network'

sso.PermissionSet.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-network.sso.PermissionSet.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPermissionSetArn` <a name="fromPermissionSetArn" id="raindancers-network.sso.PermissionSet.fromPermissionSetArn"></a>

```typescript
import { sso } from 'raindancers-network'

sso.PermissionSet.fromPermissionSetArn(scope: Construct, id: string, permissionSetArn: string)
```

Reference an existing permission set by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.sso.PermissionSet.fromPermissionSetArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.sso.PermissionSet.fromPermissionSetArn.parameter.id"></a>

- *Type:* string

---

###### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-network.sso.PermissionSet.fromPermissionSetArn.parameter.permissionSetArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.PermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.sso.PermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-network.sso.PermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-network.sso.PermissionSet.property.cfnPermissionSet">cfnPermissionSet</a></code> | <code>aws-cdk-lib.aws_sso.CfnPermissionSet</code> | The underlying CfnPermissionSet resource. |
| <code><a href="#raindancers-network.sso.PermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#raindancers-network.sso.PermissionSet.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance the permission set belongs to. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.sso.PermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-network.sso.PermissionSet.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-network.sso.PermissionSet.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnPermissionSet`<sup>Required</sup> <a name="cfnPermissionSet" id="raindancers-network.sso.PermissionSet.property.cfnPermissionSet"></a>

```typescript
public readonly cfnPermissionSet: CfnPermissionSet;
```

- *Type:* aws-cdk-lib.aws_sso.CfnPermissionSet

The underlying CfnPermissionSet resource.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-network.sso.PermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-network.sso.PermissionSet.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance the permission set belongs to.

---


### PrivateRedshiftCluster <a name="PrivateRedshiftCluster" id="raindancers-network.redshift.PrivateRedshiftCluster"></a>

* Creates a PrivateRedShiftCluster.

#### Initializers <a name="Initializers" id="raindancers-network.redshift.PrivateRedshiftCluster.Initializer"></a>

```typescript
import { redshift } from 'raindancers-network'

new redshift.PrivateRedshiftCluster(scope: Construct, id: string, props: RedshiftClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.Initializer.parameter.props">props</a></code> | <code>raindancers-network.redshift.RedshiftClusterProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.redshift.PrivateRedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.redshift.PrivateRedshiftCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.redshift.PrivateRedshiftCluster.Initializer.parameter.props"></a>

- *Type:* raindancers-network.redshift.RedshiftClusterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.addDatabase">addDatabase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.redshift.PrivateRedshiftCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDatabase` <a name="addDatabase" id="raindancers-network.redshift.PrivateRedshiftCluster.addDatabase"></a>

```typescript
public addDatabase(databaseName: string): RedShiftDatabase
```

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.redshift.PrivateRedshiftCluster.addDatabase.parameter.databaseName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.redshift.PrivateRedshiftCluster.isConstruct"></a>

```typescript
import { redshift } from 'raindancers-network'

redshift.PrivateRedshiftCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.redshift.PrivateRedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-redshift-alpha.Cluster</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.property.clusterParameters">clusterParameters</a></code> | <code>@aws-cdk/aws-redshift-alpha.ClusterParameterGroup</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.PrivateRedshiftCluster.property.clusterSecurityGroup">clusterSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.redshift.PrivateRedshiftCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="raindancers-network.redshift.PrivateRedshiftCluster.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* @aws-cdk/aws-redshift-alpha.Cluster

---

##### `clusterParameters`<sup>Required</sup> <a name="clusterParameters" id="raindancers-network.redshift.PrivateRedshiftCluster.property.clusterParameters"></a>

```typescript
public readonly clusterParameters: ClusterParameterGroup;
```

- *Type:* @aws-cdk/aws-redshift-alpha.ClusterParameterGroup

---

##### `clusterSecurityGroup`<sup>Required</sup> <a name="clusterSecurityGroup" id="raindancers-network.redshift.PrivateRedshiftCluster.property.clusterSecurityGroup"></a>

```typescript
public readonly clusterSecurityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

---


### PythonApiIngestToS3 <a name="PythonApiIngestToS3" id="raindancers-network.apilambda.PythonApiIngestToS3"></a>

#### Initializers <a name="Initializers" id="raindancers-network.apilambda.PythonApiIngestToS3.Initializer"></a>

```typescript
import { apilambda } from 'raindancers-network'

new apilambda.PythonApiIngestToS3(scope: Construct, id: string, props: PythonApiIngestToS3Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.Initializer.parameter.props">props</a></code> | <code>raindancers-network.apilambda.PythonApiIngestToS3Props</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.apilambda.PythonApiIngestToS3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.apilambda.PythonApiIngestToS3.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.apilambda.PythonApiIngestToS3.Initializer.parameter.props"></a>

- *Type:* raindancers-network.apilambda.PythonApiIngestToS3Props

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.apilambda.PythonApiIngestToS3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.apilambda.PythonApiIngestToS3.isConstruct"></a>

```typescript
import { apilambda } from 'raindancers-network'

apilambda.PythonApiIngestToS3.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.apilambda.PythonApiIngestToS3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.apilambda.PythonApiIngestToS3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `function`<sup>Required</sup> <a name="function" id="raindancers-network.apilambda.PythonApiIngestToS3.property.function"></a>

```typescript
public readonly function: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### R53Resolverendpoints <a name="R53Resolverendpoints" id="raindancers-network.dns.R53Resolverendpoints"></a>

Create Route53 Resolver Endpoints for MultiVPC and Hybrid DNS Resolution.

#### Initializers <a name="Initializers" id="raindancers-network.dns.R53Resolverendpoints.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

new dns.R53Resolverendpoints(scope: Construct, id: string, props: R53ResolverendpointsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which these resources are craeted. |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | the id of the construct. |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.Initializer.parameter.props">props</a></code> | <code>raindancers-network.dns.R53ResolverendpointsProps</code> | propertys for the R53Resolver Endpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.dns.R53Resolverendpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which these resources are craeted.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.dns.R53Resolverendpoints.Initializer.parameter.id"></a>

- *Type:* string

the id of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.dns.R53Resolverendpoints.Initializer.parameter.props"></a>

- *Type:* raindancers-network.dns.R53ResolverendpointsProps

propertys for the R53Resolver Endpoints.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.dns.R53Resolverendpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.dns.R53Resolverendpoints.isConstruct"></a>

```typescript
import { dns } from 'raindancers-network'

dns.R53Resolverendpoints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.dns.R53Resolverendpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.property.inboundResolver">inboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | inbound resolver. |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.property.inboundResolversIp">inboundResolversIp</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]</code> | list of Resolver IP address's. |
| <code><a href="#raindancers-network.dns.R53Resolverendpoints.property.outboundResolver">outboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | outbound resolver. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.dns.R53Resolverendpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `inboundResolver`<sup>Required</sup> <a name="inboundResolver" id="raindancers-network.dns.R53Resolverendpoints.property.inboundResolver"></a>

```typescript
public readonly inboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

inbound resolver.

---

##### `inboundResolversIp`<sup>Required</sup> <a name="inboundResolversIp" id="raindancers-network.dns.R53Resolverendpoints.property.inboundResolversIp"></a>

```typescript
public readonly inboundResolversIp: TargetAddressProperty[];
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]

list of Resolver IP address's.

---

##### `outboundResolver`<sup>Required</sup> <a name="outboundResolver" id="raindancers-network.dns.R53Resolverendpoints.property.outboundResolver"></a>

```typescript
public readonly outboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

outbound resolver.

---


### RedShiftDatabase <a name="RedShiftDatabase" id="raindancers-network.redshift.RedShiftDatabase"></a>

Create a Database in a Redshift Cluster.

#### Initializers <a name="Initializers" id="raindancers-network.redshift.RedShiftDatabase.Initializer"></a>

```typescript
import { redshift } from 'raindancers-network'

new redshift.RedShiftDatabase(scope: Construct, id: string, props: RedShiftDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.Initializer.parameter.props">props</a></code> | <code>raindancers-network.redshift.RedShiftDatabaseProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.redshift.RedShiftDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.redshift.RedShiftDatabase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.redshift.RedShiftDatabase.Initializer.parameter.props"></a>

- *Type:* raindancers-network.redshift.RedShiftDatabaseProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.executeSQLStatement">executeSQLStatement</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.redshift.RedShiftDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `executeSQLStatement` <a name="executeSQLStatement" id="raindancers-network.redshift.RedShiftDatabase.executeSQLStatement"></a>

```typescript
public executeSQLStatement(statementName: string, sql: string): void
```

###### `statementName`<sup>Required</sup> <a name="statementName" id="raindancers-network.redshift.RedShiftDatabase.executeSQLStatement.parameter.statementName"></a>

- *Type:* string

---

###### `sql`<sup>Required</sup> <a name="sql" id="raindancers-network.redshift.RedShiftDatabase.executeSQLStatement.parameter.sql"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.redshift.RedShiftDatabase.isConstruct"></a>

```typescript
import { redshift } from 'raindancers-network'

redshift.RedShiftDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.redshift.RedShiftDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-redshift-alpha.Cluster</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedShiftDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.redshift.RedShiftDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="raindancers-network.redshift.RedShiftDatabase.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* @aws-cdk/aws-redshift-alpha.Cluster

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.redshift.RedShiftDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---


### ResolveSubnetGroupName <a name="ResolveSubnetGroupName" id="raindancers-network.network.ResolveSubnetGroupName"></a>

Creates a period task to update the SSM Agent on an EC2 Instance.

#### Initializers <a name="Initializers" id="raindancers-network.network.ResolveSubnetGroupName.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

new network.ResolveSubnetGroupName(scope: Construct, id: string, props: ResolveSubnetGroupNameProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.Initializer.parameter.props">props</a></code> | <code>raindancers-network.network.ResolveSubnetGroupNameProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.network.ResolveSubnetGroupName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.network.ResolveSubnetGroupName.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.ResolveSubnetGroupName.Initializer.parameter.props"></a>

- *Type:* raindancers-network.network.ResolveSubnetGroupNameProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.network.ResolveSubnetGroupName.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.network.ResolveSubnetGroupName.isConstruct"></a>

```typescript
import { network } from 'raindancers-network'

network.ResolveSubnetGroupName.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.network.ResolveSubnetGroupName.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupName.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.network.ResolveSubnetGroupName.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `subnetSelection`<sup>Required</sup> <a name="subnetSelection" id="raindancers-network.network.ResolveSubnetGroupName.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---


### S3Target <a name="S3Target" id="raindancers-network.glue.S3Target"></a>

#### Initializers <a name="Initializers" id="raindancers-network.glue.S3Target.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

new glue.S3Target(scope: Construct, id: string, props: S3TargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.S3Target.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3Target.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3Target.Initializer.parameter.props">props</a></code> | <code>raindancers-network.glue.S3TargetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.glue.S3Target.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.glue.S3Target.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.glue.S3Target.Initializer.parameter.props"></a>

- *Type:* raindancers-network.glue.S3TargetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.S3Target.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.glue.S3Target.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.S3Target.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.glue.S3Target.isConstruct"></a>

```typescript
import { glue } from 'raindancers-network'

glue.S3Target.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.glue.S3Target.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.S3Target.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.glue.S3Target.property.s3Arn">s3Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3Target.property.target">target</a></code> | <code>raindancers-network.glue.IS3TargetObject</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.glue.S3Target.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `s3Arn`<sup>Required</sup> <a name="s3Arn" id="raindancers-network.glue.S3Target.property.s3Arn"></a>

```typescript
public readonly s3Arn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="raindancers-network.glue.S3Target.property.target"></a>

```typescript
public readonly target: IS3TargetObject;
```

- *Type:* raindancers-network.glue.IS3TargetObject

---


### SubnetGroup <a name="SubnetGroup" id="raindancers-network.network.SubnetGroup"></a>

#### Initializers <a name="Initializers" id="raindancers-network.network.SubnetGroup.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

new network.SubnetGroup(scope: Construct, id: string, props: ESubnetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.SubnetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.network.SubnetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.SubnetGroup.Initializer.parameter.props">props</a></code> | <code>raindancers-network.network.ESubnetGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.network.SubnetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.network.SubnetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.network.SubnetGroup.Initializer.parameter.props"></a>

- *Type:* raindancers-network.network.ESubnetGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.SubnetGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.network.SubnetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.SubnetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.network.SubnetGroup.isConstruct"></a>

```typescript
import { network } from 'raindancers-network'

network.SubnetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.network.SubnetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.SubnetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.network.SubnetGroup.property.subnet">subnet</a></code> | <code>raindancers-network.network.ESubnetGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.network.SubnetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="raindancers-network.network.SubnetGroup.property.subnet"></a>

```typescript
public readonly subnet: ESubnetGroup;
```

- *Type:* raindancers-network.network.ESubnetGroup

---


### UpdateSSMAgent <a name="UpdateSSMAgent" id="raindancers-network.ssm.UpdateSSMAgent"></a>

Creates a period task to update the SSM Agent on an EC2 Instance.

#### Initializers <a name="Initializers" id="raindancers-network.ssm.UpdateSSMAgent.Initializer"></a>

```typescript
import { ssm } from 'raindancers-network'

new ssm.UpdateSSMAgent(scope: Construct, id: string, props: UpdateSSMAgentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgent.Initializer.parameter.props">props</a></code> | <code>raindancers-network.ssm.UpdateSSMAgentProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.ssm.UpdateSSMAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.ssm.UpdateSSMAgent.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.ssm.UpdateSSMAgent.Initializer.parameter.props"></a>

- *Type:* raindancers-network.ssm.UpdateSSMAgentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgent.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.ssm.UpdateSSMAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.ssm.UpdateSSMAgent.isConstruct"></a>

```typescript
import { ssm } from 'raindancers-network'

ssm.UpdateSSMAgent.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.ssm.UpdateSSMAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.ssm.UpdateSSMAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AddAwsServiceEndPointsProps <a name="AddAwsServiceEndPointsProps" id="raindancers-network.network.AddAwsServiceEndPointsProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.AddAwsServiceEndPointsProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const addAwsServiceEndPointsProps: network.AddAwsServiceEndPointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AddAwsServiceEndPointsProps.property.services">services</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddAwsServiceEndPointsProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-network.network.SubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddAwsServiceEndPointsProps.property.dynamoDbGateway">dynamoDbGateway</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddAwsServiceEndPointsProps.property.s3GatewayInterface">s3GatewayInterface</a></code> | <code>boolean</code> | *No description.* |

---

##### `services`<sup>Required</sup> <a name="services" id="raindancers-network.network.AddAwsServiceEndPointsProps.property.services"></a>

```typescript
public readonly services: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.network.AddAwsServiceEndPointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: SubnetGroup;
```

- *Type:* raindancers-network.network.SubnetGroup

---

##### `dynamoDbGateway`<sup>Optional</sup> <a name="dynamoDbGateway" id="raindancers-network.network.AddAwsServiceEndPointsProps.property.dynamoDbGateway"></a>

```typescript
public readonly dynamoDbGateway: boolean;
```

- *Type:* boolean

---

##### `s3GatewayInterface`<sup>Optional</sup> <a name="s3GatewayInterface" id="raindancers-network.network.AddAwsServiceEndPointsProps.property.s3GatewayInterface"></a>

```typescript
public readonly s3GatewayInterface: boolean;
```

- *Type:* boolean

---

### AddClassifiersProps <a name="AddClassifiersProps" id="raindancers-network.glue.AddClassifiersProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.AddClassifiersProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const addClassifiersProps: glue.AddClassifiersProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.AddClassifiersProps.property.classifiers">classifiers</a></code> | <code>raindancers-network.glue.GlueClassifier[]</code> | *No description.* |

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="raindancers-network.glue.AddClassifiersProps.property.classifiers"></a>

```typescript
public readonly classifiers: GlueClassifier[];
```

- *Type:* raindancers-network.glue.GlueClassifier[]

---

### AddCoreRoutesProps <a name="AddCoreRoutesProps" id="raindancers-network.network.AddCoreRoutesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.AddCoreRoutesProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const addCoreRoutesProps: network.AddCoreRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AddCoreRoutesProps.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddCoreRoutesProps.property.coreName">coreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddCoreRoutesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddCoreRoutesProps.property.destinationCidrBlocks">destinationCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddCoreRoutesProps.property.policyTableArn">policyTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddCoreRoutesProps.property.segments">segments</a></code> | <code>string[]</code> | *No description.* |

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="raindancers-network.network.AddCoreRoutesProps.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-network.network.AddCoreRoutesProps.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.network.AddCoreRoutesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlocks`<sup>Required</sup> <a name="destinationCidrBlocks" id="raindancers-network.network.AddCoreRoutesProps.property.destinationCidrBlocks"></a>

```typescript
public readonly destinationCidrBlocks: string[];
```

- *Type:* string[]

---

##### `policyTableArn`<sup>Required</sup> <a name="policyTableArn" id="raindancers-network.network.AddCoreRoutesProps.property.policyTableArn"></a>

```typescript
public readonly policyTableArn: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="raindancers-network.network.AddCoreRoutesProps.property.segments"></a>

```typescript
public readonly segments: string[];
```

- *Type:* string[]

---

### AddCrawlerProps <a name="AddCrawlerProps" id="raindancers-network.glue.AddCrawlerProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.AddCrawlerProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const addCrawlerProps: glue.AddCrawlerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.AddCrawlerProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.AddCrawlerProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#raindancers-network.glue.AddCrawlerProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.AddCrawlerProps.property.jdbcTargets">jdbcTargets</a></code> | <code>raindancers-network.glue.JDBCTarget[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.AddCrawlerProps.property.s3Targets">s3Targets</a></code> | <code>raindancers-network.glue.S3Target[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.glue.AddCrawlerProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="raindancers-network.glue.AddCrawlerProps.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.glue.AddCrawlerProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `jdbcTargets`<sup>Optional</sup> <a name="jdbcTargets" id="raindancers-network.glue.AddCrawlerProps.property.jdbcTargets"></a>

```typescript
public readonly jdbcTargets: JDBCTarget[];
```

- *Type:* raindancers-network.glue.JDBCTarget[]

---

##### `s3Targets`<sup>Optional</sup> <a name="s3Targets" id="raindancers-network.glue.AddCrawlerProps.property.s3Targets"></a>

```typescript
public readonly s3Targets: S3Target[];
```

- *Type:* raindancers-network.glue.S3Target[]

---

### AddDatabaseProps <a name="AddDatabaseProps" id="raindancers-network.lakeformation.AddDatabaseProps"></a>

Glue Database that holds ingest Tables.

#### Initializer <a name="Initializer" id="raindancers-network.lakeformation.AddDatabaseProps.Initializer"></a>

```typescript
import { lakeformation } from 'raindancers-network'

const addDatabaseProps: lakeformation.AddDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.lakeformation.AddDatabaseProps.property.databaseName">databaseName</a></code> | <code>string</code> | Name for database. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.lakeformation.AddDatabaseProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Name for database.

---

### AddEnterprizeZoneProps <a name="AddEnterprizeZoneProps" id="raindancers-network.network.AddEnterprizeZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.AddEnterprizeZoneProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const addEnterprizeZoneProps: network.AddEnterprizeZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AddEnterprizeZoneProps.property.domainname">domainname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddEnterprizeZoneProps.property.hubVpcs">hubVpcs</a></code> | <code>raindancers-network.dns.HubVpc[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddEnterprizeZoneProps.property.isHubVpc">isHubVpc</a></code> | <code>boolean</code> | *No description.* |

---

##### `domainname`<sup>Required</sup> <a name="domainname" id="raindancers-network.network.AddEnterprizeZoneProps.property.domainname"></a>

```typescript
public readonly domainname: string;
```

- *Type:* string

---

##### `hubVpcs`<sup>Required</sup> <a name="hubVpcs" id="raindancers-network.network.AddEnterprizeZoneProps.property.hubVpcs"></a>

```typescript
public readonly hubVpcs: HubVpc[];
```

- *Type:* raindancers-network.dns.HubVpc[]

---

##### `isHubVpc`<sup>Optional</sup> <a name="isHubVpc" id="raindancers-network.network.AddEnterprizeZoneProps.property.isHubVpc"></a>

```typescript
public readonly isHubVpc: boolean;
```

- *Type:* boolean

---

### AddNewBucketToLakeFormationProps <a name="AddNewBucketToLakeFormationProps" id="raindancers-network.lakeformation.AddNewBucketToLakeFormationProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.Initializer"></a>

```typescript
import { lakeformation } from 'raindancers-network'

const addNewBucketToLakeFormationProps: lakeformation.AddNewBucketToLakeFormationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.property.name">name</a></code> | <code>string</code> | Name of Bucket. |
| <code><a href="#raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Lifecycle Rules for objects that are stored in the Bucket. |
| <code><a href="#raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | and optional role to use to join the Lake. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Bucket.

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]

Lifecycle Rules for objects that are stored in the Bucket.

This will default to lifeccyle pattern that will
eventually move unused obejects to glacier.

---

##### `role`<sup>Optional</sup> <a name="role" id="raindancers-network.lakeformation.AddNewBucketToLakeFormationProps.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

and optional role to use to join the Lake.

This will default the the standard Service rule, if not
specified, which is the recommended approach.

---

### AddR53ZoneProps <a name="AddR53ZoneProps" id="raindancers-network.network.AddR53ZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.AddR53ZoneProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const addR53ZoneProps: network.AddR53ZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AddR53ZoneProps.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddR53ZoneProps.property.centralVpc">centralVpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `zone`<sup>Required</sup> <a name="zone" id="raindancers-network.network.AddR53ZoneProps.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `centralVpc`<sup>Optional</sup> <a name="centralVpc" id="raindancers-network.network.AddR53ZoneProps.property.centralVpc"></a>

```typescript
public readonly centralVpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

### AddRoutesProps <a name="AddRoutesProps" id="raindancers-network.network.AddRoutesProps"></a>

Propertys for Adding Routes in VPC.

#### Initializer <a name="Initializer" id="raindancers-network.network.AddRoutesProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const addRoutesProps: network.AddRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AddRoutesProps.property.cidr">cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddRoutesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddRoutesProps.property.destination">destination</a></code> | <code>raindancers-network.network.Destination</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddRoutesProps.property.subnetGroups">subnetGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddRoutesProps.property.cloudwanName">cloudwanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AddRoutesProps.property.networkFirewallArn">networkFirewallArn</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-network.network.AddRoutesProps.property.cidr"></a>

```typescript
public readonly cidr: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.network.AddRoutesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-network.network.AddRoutesProps.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* raindancers-network.network.Destination

---

##### `subnetGroups`<sup>Required</sup> <a name="subnetGroups" id="raindancers-network.network.AddRoutesProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: string[];
```

- *Type:* string[]

---

##### `cloudwanName`<sup>Optional</sup> <a name="cloudwanName" id="raindancers-network.network.AddRoutesProps.property.cloudwanName"></a>

```typescript
public readonly cloudwanName: string;
```

- *Type:* string

---

##### `networkFirewallArn`<sup>Optional</sup> <a name="networkFirewallArn" id="raindancers-network.network.AddRoutesProps.property.networkFirewallArn"></a>

```typescript
public readonly networkFirewallArn: string;
```

- *Type:* string

---

### AddStatefulRulesProps <a name="AddStatefulRulesProps" id="raindancers-network.firewall.AddStatefulRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.firewall.AddStatefulRulesProps.Initializer"></a>

```typescript
import { firewall } from 'raindancers-network'

const addStatefulRulesProps: firewall.AddStatefulRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.AddStatefulRulesProps.property.awsManagedRules">awsManagedRules</a></code> | <code>raindancers-network.firewall.ManagedAwsFirewallRules[]</code> | *No description.* |

---

##### `awsManagedRules`<sup>Required</sup> <a name="awsManagedRules" id="raindancers-network.firewall.AddStatefulRulesProps.property.awsManagedRules"></a>

```typescript
public readonly awsManagedRules: ManagedAwsFirewallRules[];
```

- *Type:* raindancers-network.firewall.ManagedAwsFirewallRules[]

---

### AddStatelessRulesProps <a name="AddStatelessRulesProps" id="raindancers-network.firewall.AddStatelessRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.firewall.AddStatelessRulesProps.Initializer"></a>

```typescript
import { firewall } from 'raindancers-network'

const addStatelessRulesProps: firewall.AddStatelessRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.AddStatelessRulesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.AddStatelessRulesProps.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.AddStatelessRulesProps.property.rules">rules</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.firewall.AddStatelessRulesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="raindancers-network.firewall.AddStatelessRulesProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="raindancers-network.firewall.AddStatelessRulesProps.property.rules"></a>

```typescript
public readonly rules: StatelessRuleProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty[]

---

### AssignmentAttributes <a name="AssignmentAttributes" id="raindancers-network.sso.AssignmentAttributes"></a>

Attributes for an assignment of which there are none.

#### Initializer <a name="Initializer" id="raindancers-network.sso.AssignmentAttributes.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const assignmentAttributes: sso.AssignmentAttributes = { ... }
```


### AssignmentOptions <a name="AssignmentOptions" id="raindancers-network.sso.AssignmentOptions"></a>

The options for creating an assignment.

#### Initializer <a name="Initializer" id="raindancers-network.sso.AssignmentOptions.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const assignmentOptions: sso.AssignmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.AssignmentOptions.property.principal">principal</a></code> | <code>raindancers-network.sso.PrincipalProperty</code> | The principal to assign the permission set to. |
| <code><a href="#raindancers-network.sso.AssignmentOptions.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |
| <code><a href="#raindancers-network.sso.AssignmentOptions.property.targetType">targetType</a></code> | <code>raindancers-network.sso.TargetTypes</code> | The entity type for which the assignment will be created. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="raindancers-network.sso.AssignmentOptions.property.principal"></a>

```typescript
public readonly principal: PrincipalProperty;
```

- *Type:* raindancers-network.sso.PrincipalProperty

The principal to assign the permission set to.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="raindancers-network.sso.AssignmentOptions.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="raindancers-network.sso.AssignmentOptions.property.targetType"></a>

```typescript
public readonly targetType: TargetTypes;
```

- *Type:* raindancers-network.sso.TargetTypes
- *Default:* TargetTypes.AWS_ACCOUNT

The entity type for which the assignment will be created.

---

### AssignmentProps <a name="AssignmentProps" id="raindancers-network.sso.AssignmentProps"></a>

The properties of a new assignment.

#### Initializer <a name="Initializer" id="raindancers-network.sso.AssignmentProps.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const assignmentProps: sso.AssignmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.AssignmentProps.property.principal">principal</a></code> | <code>raindancers-network.sso.PrincipalProperty</code> | The principal to assign the permission set to. |
| <code><a href="#raindancers-network.sso.AssignmentProps.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |
| <code><a href="#raindancers-network.sso.AssignmentProps.property.targetType">targetType</a></code> | <code>raindancers-network.sso.TargetTypes</code> | The entity type for which the assignment will be created. |
| <code><a href="#raindancers-network.sso.AssignmentProps.property.permissionSet">permissionSet</a></code> | <code>raindancers-network.sso.IPermissionSet</code> | The permission set to assign to the principal. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="raindancers-network.sso.AssignmentProps.property.principal"></a>

```typescript
public readonly principal: PrincipalProperty;
```

- *Type:* raindancers-network.sso.PrincipalProperty

The principal to assign the permission set to.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="raindancers-network.sso.AssignmentProps.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="raindancers-network.sso.AssignmentProps.property.targetType"></a>

```typescript
public readonly targetType: TargetTypes;
```

- *Type:* raindancers-network.sso.TargetTypes
- *Default:* TargetTypes.AWS_ACCOUNT

The entity type for which the assignment will be created.

---

##### `permissionSet`<sup>Required</sup> <a name="permissionSet" id="raindancers-network.sso.AssignmentProps.property.permissionSet"></a>

```typescript
public readonly permissionSet: IPermissionSet;
```

- *Type:* raindancers-network.sso.IPermissionSet

The permission set to assign to the principal.

---

### AssociateSharedResolverRuleProps <a name="AssociateSharedResolverRuleProps" id="raindancers-network.dns.AssociateSharedResolverRuleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.AssociateSharedResolverRuleProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const associateSharedResolverRuleProps: dns.AssociateSharedResolverRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRuleProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | domainNames which are to be associated. |
| <code><a href="#raindancers-network.dns.AssociateSharedResolverRuleProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | The VPC which will be assocaited with the ResolverRules. |

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="raindancers-network.dns.AssociateSharedResolverRuleProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

domainNames which are to be associated.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.dns.AssociateSharedResolverRuleProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

The VPC which will be assocaited with the ResolverRules.

---

### AttachmentConditions <a name="AttachmentConditions" id="raindancers-network.cloudwan.AttachmentConditions"></a>

an attachmentconditions.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.AttachmentConditions.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const attachmentConditions: cloudwan.AttachmentConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.AttachmentConditions.property.type">type</a></code> | <code>raindancers-network.cloudwan.AttachmentCondition</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentConditions.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentConditions.property.operator">operator</a></code> | <code>raindancers-network.cloudwan.Operators</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentConditions.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="raindancers-network.cloudwan.AttachmentConditions.property.type"></a>

```typescript
public readonly type: AttachmentCondition;
```

- *Type:* raindancers-network.cloudwan.AttachmentCondition

---

##### `key`<sup>Optional</sup> <a name="key" id="raindancers-network.cloudwan.AttachmentConditions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Optional</sup> <a name="operator" id="raindancers-network.cloudwan.AttachmentConditions.property.operator"></a>

```typescript
public readonly operator: Operators;
```

- *Type:* raindancers-network.cloudwan.Operators

---

##### `value`<sup>Optional</sup> <a name="value" id="raindancers-network.cloudwan.AttachmentConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### AttachmentPolicy <a name="AttachmentPolicy" id="raindancers-network.cloudwan.AttachmentPolicy"></a>

an attachment policy.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.AttachmentPolicy.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const attachmentPolicy: cloudwan.AttachmentPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicy.property.action">action</a></code> | <code>raindancers-network.cloudwan.AttachmentPolicyAction</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicy.property.conditions">conditions</a></code> | <code>raindancers-network.cloudwan.AttachmentConditions[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicy.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicy.property.conditionLogic">conditionLogic</a></code> | <code>raindancers-network.cloudwan.ConditionLogic</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="raindancers-network.cloudwan.AttachmentPolicy.property.action"></a>

```typescript
public readonly action: AttachmentPolicyAction;
```

- *Type:* raindancers-network.cloudwan.AttachmentPolicyAction

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="raindancers-network.cloudwan.AttachmentPolicy.property.conditions"></a>

```typescript
public readonly conditions: AttachmentConditions[];
```

- *Type:* raindancers-network.cloudwan.AttachmentConditions[]

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="raindancers-network.cloudwan.AttachmentPolicy.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `conditionLogic`<sup>Optional</sup> <a name="conditionLogic" id="raindancers-network.cloudwan.AttachmentPolicy.property.conditionLogic"></a>

```typescript
public readonly conditionLogic: ConditionLogic;
```

- *Type:* raindancers-network.cloudwan.ConditionLogic

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.cloudwan.AttachmentPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### AttachmentPolicyAction <a name="AttachmentPolicyAction" id="raindancers-network.cloudwan.AttachmentPolicyAction"></a>

Attachment Policy Action.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.AttachmentPolicyAction.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const attachmentPolicyAction: cloudwan.AttachmentPolicyAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicyAction.property.associationMethod">associationMethod</a></code> | <code>raindancers-network.cloudwan.AssociationMethod</code> | The Assocation Method. |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicyAction.property.requireAcceptance">requireAcceptance</a></code> | <code>boolean</code> | Does this require approval. |
| <code><a href="#raindancers-network.cloudwan.AttachmentPolicyAction.property.segment">segment</a></code> | <code>string</code> | The Segment this applies to. |

---

##### `associationMethod`<sup>Required</sup> <a name="associationMethod" id="raindancers-network.cloudwan.AttachmentPolicyAction.property.associationMethod"></a>

```typescript
public readonly associationMethod: AssociationMethod;
```

- *Type:* raindancers-network.cloudwan.AssociationMethod

The Assocation Method.

---

##### `requireAcceptance`<sup>Optional</sup> <a name="requireAcceptance" id="raindancers-network.cloudwan.AttachmentPolicyAction.property.requireAcceptance"></a>

```typescript
public readonly requireAcceptance: boolean;
```

- *Type:* boolean

Does this require approval.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="raindancers-network.cloudwan.AttachmentPolicyAction.property.segment"></a>

```typescript
public readonly segment: string;
```

- *Type:* string

The Segment this applies to.

---

### AttachToCloudWanProps <a name="AttachToCloudWanProps" id="raindancers-network.network.AttachToCloudWanProps"></a>

Propertys for Attaching to a Cloudwan Core Network.

#### Initializer <a name="Initializer" id="raindancers-network.network.AttachToCloudWanProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const attachToCloudWanProps: network.AttachToCloudWanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AttachToCloudWanProps.property.coreNetworkName">coreNetworkName</a></code> | <code>string</code> | corenetworkName. |
| <code><a href="#raindancers-network.network.AttachToCloudWanProps.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.AttachToCloudWanProps.property.applianceMode">applianceMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.network.AttachToCloudWanProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |

---

##### `coreNetworkName`<sup>Required</sup> <a name="coreNetworkName" id="raindancers-network.network.AttachToCloudWanProps.property.coreNetworkName"></a>

```typescript
public readonly coreNetworkName: string;
```

- *Type:* string

corenetworkName.

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-network.network.AttachToCloudWanProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `applianceMode`<sup>Optional</sup> <a name="applianceMode" id="raindancers-network.network.AttachToCloudWanProps.property.applianceMode"></a>

```typescript
public readonly applianceMode: boolean;
```

- *Type:* boolean

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-network.network.AttachToCloudWanProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

### AttachToTransitGatewayProps <a name="AttachToTransitGatewayProps" id="raindancers-network.network.AttachToTransitGatewayProps"></a>

Propertys to attach the Vpc To Transit Gateway.

#### Initializer <a name="Initializer" id="raindancers-network.network.AttachToTransitGatewayProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const attachToTransitGatewayProps: network.AttachToTransitGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.AttachToTransitGatewayProps.property.transitGateway">transitGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnTransitGateway</code> | the TransitGateway to connect to. |
| <code><a href="#raindancers-network.network.AttachToTransitGatewayProps.property.applicanceMode">applicanceMode</a></code> | <code>raindancers-network.network.ApplianceMode</code> | Will this be connected in appliance mode ( used if you have Network Firewalls ). |
| <code><a href="#raindancers-network.network.AttachToTransitGatewayProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-network.network.AttachToTransitGatewayProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: CfnTransitGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnTransitGateway

the TransitGateway to connect to.

---

##### `applicanceMode`<sup>Optional</sup> <a name="applicanceMode" id="raindancers-network.network.AttachToTransitGatewayProps.property.applicanceMode"></a>

```typescript
public readonly applicanceMode: ApplianceMode;
```

- *Type:* raindancers-network.network.ApplianceMode

Will this be connected in appliance mode ( used if you have Network Firewalls ).

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-network.network.AttachToTransitGatewayProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

### AwsServiceEndPointsProps <a name="AwsServiceEndPointsProps" id="raindancers-network.endpoints.AwsServiceEndPointsProps"></a>

Properties to create a set of AWS service Endpoints.

#### Initializer <a name="Initializer" id="raindancers-network.endpoints.AwsServiceEndPointsProps.Initializer"></a>

```typescript
import { endpoints } from 'raindancers-network'

const awsServiceEndPointsProps: endpoints.AwsServiceEndPointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPointsProps.property.services">services</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | An arry of InterfaceVPCEndpoints. |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPointsProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | Subnet Group in which to create the service. |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | The vpc in which the service is created. |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPointsProps.property.dynamoDBGatewayInterface">dynamoDBGatewayInterface</a></code> | <code>boolean</code> | indicate true for a Dynamo Gateway Interface. |
| <code><a href="#raindancers-network.endpoints.AwsServiceEndPointsProps.property.s3GatewayInterface">s3GatewayInterface</a></code> | <code>boolean</code> | indicate true for a S3 Gateway Interface. |

---

##### `services`<sup>Required</sup> <a name="services" id="raindancers-network.endpoints.AwsServiceEndPointsProps.property.services"></a>

```typescript
public readonly services: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

An arry of InterfaceVPCEndpoints.

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.endpoints.AwsServiceEndPointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

Subnet Group in which to create the service.

Typically a subnet Dedicated to the task

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.endpoints.AwsServiceEndPointsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

The vpc in which the service is created.

---

##### `dynamoDBGatewayInterface`<sup>Optional</sup> <a name="dynamoDBGatewayInterface" id="raindancers-network.endpoints.AwsServiceEndPointsProps.property.dynamoDBGatewayInterface"></a>

```typescript
public readonly dynamoDBGatewayInterface: boolean;
```

- *Type:* boolean

indicate true for a Dynamo Gateway Interface.

---

##### `s3GatewayInterface`<sup>Optional</sup> <a name="s3GatewayInterface" id="raindancers-network.endpoints.AwsServiceEndPointsProps.property.s3GatewayInterface"></a>

```typescript
public readonly s3GatewayInterface: boolean;
```

- *Type:* boolean

indicate true for a S3 Gateway Interface.

---

### CentralAccountAssnRoleProps <a name="CentralAccountAssnRoleProps" id="raindancers-network.dns.CentralAccountAssnRoleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.CentralAccountAssnRoleProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const centralAccountAssnRoleProps: dns.CentralAccountAssnRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRoleProps.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRoleProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralAccountAssnRoleProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="raindancers-network.dns.CentralAccountAssnRoleProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.dns.CentralAccountAssnRoleProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="raindancers-network.dns.CentralAccountAssnRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### CentralResolverRulesProps <a name="CentralResolverRulesProps" id="raindancers-network.dns.CentralResolverRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.CentralResolverRulesProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const centralResolverRulesProps: dns.CentralResolverRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CentralResolverRulesProps.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralResolverRulesProps.property.resolvers">resolvers</a></code> | <code>raindancers-network.dns.R53Resolverendpoints</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralResolverRulesProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CentralResolverRulesProps.property.vpcSearchTag">vpcSearchTag</a></code> | <code>aws-cdk-lib.Tag</code> | *No description.* |

---

##### `domains`<sup>Required</sup> <a name="domains" id="raindancers-network.dns.CentralResolverRulesProps.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="raindancers-network.dns.CentralResolverRulesProps.property.resolvers"></a>

```typescript
public readonly resolvers: R53Resolverendpoints;
```

- *Type:* raindancers-network.dns.R53Resolverendpoints

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.dns.CentralResolverRulesProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `vpcSearchTag`<sup>Optional</sup> <a name="vpcSearchTag" id="raindancers-network.dns.CentralResolverRulesProps.property.vpcSearchTag"></a>

```typescript
public readonly vpcSearchTag: Tag;
```

- *Type:* aws-cdk-lib.Tag

---

### CloudWanRoutingProtocolProps <a name="CloudWanRoutingProtocolProps" id="raindancers-network.network.CloudWanRoutingProtocolProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.CloudWanRoutingProtocolProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const cloudWanRoutingProtocolProps: network.CloudWanRoutingProtocolProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.CloudWanRoutingProtocolProps.property.subnetGroups">subnetGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.CloudWanRoutingProtocolProps.property.acceptRouteFilter">acceptRouteFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.CloudWanRoutingProtocolProps.property.denyRouteFilter">denyRouteFilter</a></code> | <code>string[]</code> | *No description.* |

---

##### `subnetGroups`<sup>Required</sup> <a name="subnetGroups" id="raindancers-network.network.CloudWanRoutingProtocolProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: string[];
```

- *Type:* string[]

---

##### `acceptRouteFilter`<sup>Optional</sup> <a name="acceptRouteFilter" id="raindancers-network.network.CloudWanRoutingProtocolProps.property.acceptRouteFilter"></a>

```typescript
public readonly acceptRouteFilter: string[];
```

- *Type:* string[]

---

##### `denyRouteFilter`<sup>Optional</sup> <a name="denyRouteFilter" id="raindancers-network.network.CloudWanRoutingProtocolProps.property.denyRouteFilter"></a>

```typescript
public readonly denyRouteFilter: string[];
```

- *Type:* string[]

---

### ConditionalForwarderProps <a name="ConditionalForwarderProps" id="raindancers-network.dns.ConditionalForwarderProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.ConditionalForwarderProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const conditionalForwarderProps: dns.ConditionalForwarderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.ConditionalForwarderProps.property.forwardingRules">forwardingRules</a></code> | <code>raindancers-network.dns.OutboundForwardingRule[]</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ConditionalForwarderProps.property.inboundResolverTargets">inboundResolverTargets</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ConditionalForwarderProps.property.outboundResolver">outboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ConditionalForwarderProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="raindancers-network.dns.ConditionalForwarderProps.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: OutboundForwardingRule[];
```

- *Type:* raindancers-network.dns.OutboundForwardingRule[]

---

##### `inboundResolverTargets`<sup>Required</sup> <a name="inboundResolverTargets" id="raindancers-network.dns.ConditionalForwarderProps.property.inboundResolverTargets"></a>

```typescript
public readonly inboundResolverTargets: TargetAddressProperty[];
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]

---

##### `outboundResolver`<sup>Required</sup> <a name="outboundResolver" id="raindancers-network.dns.ConditionalForwarderProps.property.outboundResolver"></a>

```typescript
public readonly outboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.dns.ConditionalForwarderProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

### CoreNetworkProps <a name="CoreNetworkProps" id="raindancers-network.cloudwan.CoreNetworkProps"></a>

CoreNetwork Properties.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.CoreNetworkProps.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const coreNetworkProps: cloudwan.CoreNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.asnRanges">asnRanges</a></code> | <code>string[]</code> | a list of of asn's that can be used. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.coreName">coreName</a></code> | <code>string</code> | core name. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.edgeLocations">edgeLocations</a></code> | <code>object[]</code> | list of edgeLocaitons. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.globalNetwork">globalNetwork</a></code> | <code>aws-cdk-lib.aws_networkmanager.CfnGlobalNetwork</code> | Which Global Network. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.policyDescription">policyDescription</a></code> | <code>string</code> | a decription for the policy Document. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | List of InsideCidr Blocks. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.nonProduction">nonProduction</a></code> | <code>boolean</code> | If this is a non production stack, backups will not be made. |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkProps.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>boolean</code> | support VpnECmp. |

---

##### `asnRanges`<sup>Required</sup> <a name="asnRanges" id="raindancers-network.cloudwan.CoreNetworkProps.property.asnRanges"></a>

```typescript
public readonly asnRanges: string[];
```

- *Type:* string[]

a list of of asn's that can be used.

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-network.cloudwan.CoreNetworkProps.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

core name.

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="raindancers-network.cloudwan.CoreNetworkProps.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: object[];
```

- *Type:* object[]

list of edgeLocaitons.

---

##### `globalNetwork`<sup>Required</sup> <a name="globalNetwork" id="raindancers-network.cloudwan.CoreNetworkProps.property.globalNetwork"></a>

```typescript
public readonly globalNetwork: CfnGlobalNetwork;
```

- *Type:* aws-cdk-lib.aws_networkmanager.CfnGlobalNetwork

Which Global Network.

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="raindancers-network.cloudwan.CoreNetworkProps.property.policyDescription"></a>

```typescript
public readonly policyDescription: string;
```

- *Type:* string

a decription for the policy Document.

---

##### `insideCidrBlocks`<sup>Optional</sup> <a name="insideCidrBlocks" id="raindancers-network.cloudwan.CoreNetworkProps.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

List of InsideCidr Blocks.

---

##### `nonProduction`<sup>Optional</sup> <a name="nonProduction" id="raindancers-network.cloudwan.CoreNetworkProps.property.nonProduction"></a>

```typescript
public readonly nonProduction: boolean;
```

- *Type:* boolean

If this is a non production stack, backups will not be made.

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="vpnEcmpSupport" id="raindancers-network.cloudwan.CoreNetworkProps.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: boolean;
```

- *Type:* boolean

support VpnECmp.

---

### CoreNetworkShare <a name="CoreNetworkShare" id="raindancers-network.cloudwan.CoreNetworkShare"></a>

CoreNetworkShare.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.CoreNetworkShare.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const coreNetworkShare: cloudwan.CoreNetworkShare = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkShare.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkShare.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.CoreNetworkShare.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | *No description.* |

---

##### `allowExternalPrincipals`<sup>Required</sup> <a name="allowExternalPrincipals" id="raindancers-network.cloudwan.CoreNetworkShare.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean

---

##### `principals`<sup>Required</sup> <a name="principals" id="raindancers-network.cloudwan.CoreNetworkShare.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="raindancers-network.cloudwan.CoreNetworkShare.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]

---

### CrawlerProps <a name="CrawlerProps" id="raindancers-network.glue.CrawlerProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.CrawlerProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const crawlerProps: glue.CrawlerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.CrawlerProps.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerProps.property.jdbcTargets">jdbcTargets</a></code> | <code>raindancers-network.glue.JDBCTarget[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerProps.property.s3Targets">s3Targets</a></code> | <code>raindancers-network.glue.S3Target[]</code> | *No description.* |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.glue.CrawlerProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.glue.CrawlerProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="raindancers-network.glue.CrawlerProps.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.glue.CrawlerProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `jdbcTargets`<sup>Optional</sup> <a name="jdbcTargets" id="raindancers-network.glue.CrawlerProps.property.jdbcTargets"></a>

```typescript
public readonly jdbcTargets: JDBCTarget[];
```

- *Type:* raindancers-network.glue.JDBCTarget[]

---

##### `s3Targets`<sup>Optional</sup> <a name="s3Targets" id="raindancers-network.glue.CrawlerProps.property.s3Targets"></a>

```typescript
public readonly s3Targets: S3Target[];
```

- *Type:* raindancers-network.glue.S3Target[]

---

### CrossAccountProps <a name="CrossAccountProps" id="raindancers-network.dns.CrossAccountProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.CrossAccountProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const crossAccountProps: dns.CrossAccountProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.CrossAccountProps.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.CrossAccountProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="raindancers-network.dns.CrossAccountProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="raindancers-network.dns.CrossAccountProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### CrossRegionParameterReaderProps <a name="CrossRegionParameterReaderProps" id="raindancers-network.ssm.CrossRegionParameterReaderProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.ssm.CrossRegionParameterReaderProps.Initializer"></a>

```typescript
import { ssm } from 'raindancers-network'

const crossRegionParameterReaderProps: ssm.CrossRegionParameterReaderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReaderProps.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterReaderProps.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="raindancers-network.ssm.CrossRegionParameterReaderProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="raindancers-network.ssm.CrossRegionParameterReaderProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

### CrossRegionParameterWriterProps <a name="CrossRegionParameterWriterProps" id="raindancers-network.ssm.CrossRegionParameterWriterProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.ssm.CrossRegionParameterWriterProps.Initializer"></a>

```typescript
import { ssm } from 'raindancers-network'

const crossRegionParameterWriterProps: ssm.CrossRegionParameterWriterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriterProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriterProps.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ssm.CrossRegionParameterWriterProps.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.ssm.CrossRegionParameterWriterProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="raindancers-network.ssm.CrossRegionParameterWriterProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="raindancers-network.ssm.CrossRegionParameterWriterProps.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### CrowdStrikeExtendedEndpointProps <a name="CrowdStrikeExtendedEndpointProps" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

const crowdStrikeExtendedEndpointProps: crowdstrike.CrowdStrikeExtendedEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.crowdstrikeCloud">crowdstrikeCloud</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeCloud</code> | aws The EC2 Instance that will be udpated. |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.peeringVpc">peeringVpc</a></code> | <code>raindancers-network.crowdstrike.VpcRegionId</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.useELBInPeeredVpc">useELBInPeeredVpc</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.vpccidr">vpccidr</a></code> | <code>string</code> | *No description.* |

---

##### `crowdstrikeCloud`<sup>Required</sup> <a name="crowdstrikeCloud" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.crowdstrikeCloud"></a>

```typescript
public readonly crowdstrikeCloud: CrowdStrikeCloud;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikeCloud

aws The EC2 Instance that will be udpated.

---

##### `peeringVpc`<sup>Optional</sup> <a name="peeringVpc" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.peeringVpc"></a>

```typescript
public readonly peeringVpc: VpcRegionId;
```

- *Type:* raindancers-network.crowdstrike.VpcRegionId

---

##### `useELBInPeeredVpc`<sup>Optional</sup> <a name="useELBInPeeredVpc" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.useELBInPeeredVpc"></a>

```typescript
public readonly useELBInPeeredVpc: boolean;
```

- *Type:* boolean

---

##### `vpccidr`<sup>Optional</sup> <a name="vpccidr" id="raindancers-network.crowdstrike.CrowdStrikeExtendedEndpointProps.property.vpccidr"></a>

```typescript
public readonly vpccidr: string;
```

- *Type:* string

---

### CrowdStrikeNLBProps <a name="CrowdStrikeNLBProps" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

const crowdStrikeNLBProps: crowdstrike.CrowdStrikeNLBProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.crowdstrikeRegion">crowdstrikeRegion</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeCloud</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.download">download</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.downloadhostedZone">downloadhostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.downloadhostedZoneName">downloadhostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.proxy">proxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.proxyhostedZone">proxyhostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.proxyhostedZoneName">proxyhostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.routeresolverEndpoints">routeresolverEndpoints</a></code> | <code>raindancers-network.dns.R53Resolverendpoints</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `crowdstrikeRegion`<sup>Required</sup> <a name="crowdstrikeRegion" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.crowdstrikeRegion"></a>

```typescript
public readonly crowdstrikeRegion: CrowdStrikeCloud;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikeCloud

---

##### `download`<sup>Required</sup> <a name="download" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.download"></a>

```typescript
public readonly download: string;
```

- *Type:* string

---

##### `downloadhostedZone`<sup>Required</sup> <a name="downloadhostedZone" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.downloadhostedZone"></a>

```typescript
public readonly downloadhostedZone: string;
```

- *Type:* string

---

##### `downloadhostedZoneName`<sup>Required</sup> <a name="downloadhostedZoneName" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.downloadhostedZoneName"></a>

```typescript
public readonly downloadhostedZoneName: string;
```

- *Type:* string

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.proxy"></a>

```typescript
public readonly proxy: string;
```

- *Type:* string

---

##### `proxyhostedZone`<sup>Required</sup> <a name="proxyhostedZone" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.proxyhostedZone"></a>

```typescript
public readonly proxyhostedZone: string;
```

- *Type:* string

---

##### `proxyhostedZoneName`<sup>Required</sup> <a name="proxyhostedZoneName" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.proxyhostedZoneName"></a>

```typescript
public readonly proxyhostedZoneName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routeresolverEndpoints`<sup>Required</sup> <a name="routeresolverEndpoints" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.routeresolverEndpoints"></a>

```typescript
public readonly routeresolverEndpoints: R53Resolverendpoints;
```

- *Type:* raindancers-network.dns.R53Resolverendpoints

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.crowdstrike.CrowdStrikeNLBProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

### CrowdStrikePrivateLinkEndpointProps <a name="CrowdStrikePrivateLinkEndpointProps" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

const crowdStrikePrivateLinkEndpointProps: crowdstrike.CrowdStrikePrivateLinkEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.crowdStrikeCloud">crowdStrikeCloud</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeCloud</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | The EC2 Instance that will be udpated. |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.peeredwithNLB">peeredwithNLB</a></code> | <code>boolean</code> | *No description.* |

---

##### `crowdStrikeCloud`<sup>Required</sup> <a name="crowdStrikeCloud" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.crowdStrikeCloud"></a>

```typescript
public readonly crowdStrikeCloud: CrowdStrikeCloud;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikeCloud

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

The EC2 Instance that will be udpated.

---

##### `peeredwithNLB`<sup>Optional</sup> <a name="peeredwithNLB" id="raindancers-network.crowdstrike.CrowdStrikePrivateLinkEndpointProps.property.peeredwithNLB"></a>

```typescript
public readonly peeredwithNLB: boolean;
```

- *Type:* boolean

---

### CrowdStrikeServices <a name="CrowdStrikeServices" id="raindancers-network.crowdstrike.CrowdStrikeServices"></a>

#### Initializer <a name="Initializer" id="raindancers-network.crowdstrike.CrowdStrikeServices.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

const crowdStrikeServices: crowdstrike.CrowdStrikeServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeServices.property.awsRegion">awsRegion</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeRegion</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeServices.property.downloadServer">downloadServer</a></code> | <code>raindancers-network.crowdstrike.Endpoint</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeServices.property.sensorProxy">sensorProxy</a></code> | <code>raindancers-network.crowdstrike.Endpoint</code> | *No description.* |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="raindancers-network.crowdstrike.CrowdStrikeServices.property.awsRegion"></a>

```typescript
public readonly awsRegion: CrowdStrikeRegion;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikeRegion

---

##### `downloadServer`<sup>Required</sup> <a name="downloadServer" id="raindancers-network.crowdstrike.CrowdStrikeServices.property.downloadServer"></a>

```typescript
public readonly downloadServer: Endpoint;
```

- *Type:* raindancers-network.crowdstrike.Endpoint

---

##### `sensorProxy`<sup>Required</sup> <a name="sensorProxy" id="raindancers-network.crowdstrike.CrowdStrikeServices.property.sensorProxy"></a>

```typescript
public readonly sensorProxy: Endpoint;
```

- *Type:* raindancers-network.crowdstrike.Endpoint

---

### CustomerManagedPolicyReference <a name="CustomerManagedPolicyReference" id="raindancers-network.sso.CustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="raindancers-network.sso.CustomerManagedPolicyReference.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const customerManagedPolicyReference: sso.CustomerManagedPolicyReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.CustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | The name of the IAM policy that you have configured in each account where you want to deploy your permission set. |
| <code><a href="#raindancers-network.sso.CustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | The path to the IAM policy that you have configured in each account where you want to deploy your permission set. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.sso.CustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the IAM policy that you have configured in each account where you want to deploy your permission set.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name)

---

##### `path`<sup>Optional</sup> <a name="path" id="raindancers-network.sso.CustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the IAM policy that you have configured in each account where you want to deploy your permission set.

The default is `/` . For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide* .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path)

---

### DataBaseProps <a name="DataBaseProps" id="raindancers-network.glue.DataBaseProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.DataBaseProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const dataBaseProps: glue.DataBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.DataBaseProps.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.glue.DataBaseProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

### Endpoint <a name="Endpoint" id="raindancers-network.crowdstrike.Endpoint"></a>

#### Initializer <a name="Initializer" id="raindancers-network.crowdstrike.Endpoint.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

const endpoint: crowdstrike.Endpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.Endpoint.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.Endpoint.property.vpcEndpointName">vpcEndpointName</a></code> | <code>string</code> | *No description.* |

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="raindancers-network.crowdstrike.Endpoint.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `vpcEndpointName`<sup>Required</sup> <a name="vpcEndpointName" id="raindancers-network.crowdstrike.Endpoint.property.vpcEndpointName"></a>

```typescript
public readonly vpcEndpointName: string;
```

- *Type:* string

---

### EnforceImdsv2Props <a name="EnforceImdsv2Props" id="raindancers-network.ec2.EnforceImdsv2Props"></a>

#### Initializer <a name="Initializer" id="raindancers-network.ec2.EnforceImdsv2Props.Initializer"></a>

```typescript
import { ec2 } from 'raindancers-network'

const enforceImdsv2Props: ec2.EnforceImdsv2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ec2.EnforceImdsv2Props.property.instances">instances</a></code> | <code>aws-cdk-lib.aws_ec2.Instance \| aws-cdk-lib.aws_ec2.Instance[]</code> | ec2 Instance or Instances. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="raindancers-network.ec2.EnforceImdsv2Props.property.instances"></a>

```typescript
public readonly instances: Instance | Instance[];
```

- *Type:* aws-cdk-lib.aws_ec2.Instance | aws-cdk-lib.aws_ec2.Instance[]

ec2 Instance or Instances.

---

### EnterpriseVpcProps <a name="EnterpriseVpcProps" id="raindancers-network.network.EnterpriseVpcProps"></a>

Propertys for an Enterprise VPC.

#### Initializer <a name="Initializer" id="raindancers-network.network.EnterpriseVpcProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const enterpriseVpcProps: network.EnterpriseVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.EnterpriseVpcProps.property.evpc">evpc</a></code> | <code>raindancers-network.network.EvpcProps</code> | *No description.* |
| <code><a href="#raindancers-network.network.EnterpriseVpcProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `evpc`<sup>Optional</sup> <a name="evpc" id="raindancers-network.network.EnterpriseVpcProps.property.evpc"></a>

```typescript
public readonly evpc: EvpcProps;
```

- *Type:* raindancers-network.network.EvpcProps

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="raindancers-network.network.EnterpriseVpcProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

### EnterpriseZoneProps <a name="EnterpriseZoneProps" id="raindancers-network.dns.EnterpriseZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.EnterpriseZoneProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const enterpriseZoneProps: dns.EnterpriseZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.EnterpriseZoneProps.property.enterpriseDomainName">enterpriseDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.EnterpriseZoneProps.property.localVpc">localVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-network.dns.EnterpriseZoneProps.property.hubVpcs">hubVpcs</a></code> | <code>raindancers-network.dns.HubVpc[]</code> | *No description.* |

---

##### `enterpriseDomainName`<sup>Required</sup> <a name="enterpriseDomainName" id="raindancers-network.dns.EnterpriseZoneProps.property.enterpriseDomainName"></a>

```typescript
public readonly enterpriseDomainName: string;
```

- *Type:* string

---

##### `localVpc`<sup>Required</sup> <a name="localVpc" id="raindancers-network.dns.EnterpriseZoneProps.property.localVpc"></a>

```typescript
public readonly localVpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `hubVpcs`<sup>Optional</sup> <a name="hubVpcs" id="raindancers-network.dns.EnterpriseZoneProps.property.hubVpcs"></a>

```typescript
public readonly hubVpcs: HubVpc[];
```

- *Type:* raindancers-network.dns.HubVpc[]

---

### ESubnetGroup <a name="ESubnetGroup" id="raindancers-network.network.ESubnetGroup"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.ESubnetGroup.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const eSubnetGroup: network.ESubnetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.ESubnetGroup.property.cidrMask">cidrMask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.network.ESubnetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.ESubnetGroup.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | *No description.* |

---

##### `cidrMask`<sup>Required</sup> <a name="cidrMask" id="raindancers-network.network.ESubnetGroup.property.cidrMask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.network.ESubnetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="raindancers-network.network.ESubnetGroup.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

---

### ESubnetGroupProps <a name="ESubnetGroupProps" id="raindancers-network.network.ESubnetGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.ESubnetGroupProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const eSubnetGroupProps: network.ESubnetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.ESubnetGroupProps.property.cidrMask">cidrMask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.network.ESubnetGroupProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.ESubnetGroupProps.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | *No description.* |

---

##### `cidrMask`<sup>Required</sup> <a name="cidrMask" id="raindancers-network.network.ESubnetGroupProps.property.cidrMask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.network.ESubnetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="raindancers-network.network.ESubnetGroupProps.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

---

### EvpcProps <a name="EvpcProps" id="raindancers-network.network.EvpcProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.EvpcProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const evpcProps: network.EvpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.EvpcProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Availability zones this VPC spans. |
| <code><a href="#raindancers-network.network.EvpcProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR range to use for the VPC, e.g. '10.0.0.0/16'. |
| <code><a href="#raindancers-network.network.EvpcProps.property.defaultInstanceTenancy">defaultInstanceTenancy</a></code> | <code>aws-cdk-lib.aws_ec2.DefaultInstanceTenancy</code> | The default tenancy of instances launched into the VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean</code> | Indicates whether the instances launched in the VPC get public DNS hostnames. |
| <code><a href="#raindancers-network.network.EvpcProps.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean</code> | Indicates whether the DNS resolution is supported for the VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.flowLogs">flowLogs</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}</code> | Flow logs to add to this VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.gatewayEndpoints">gatewayEndpoints</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}</code> | Gateway endpoints to add to this VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | The Provider to use to allocate IP Space to your VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | Define the maximum number of AZs to use in this region. |
| <code><a href="#raindancers-network.network.EvpcProps.property.natGatewayProvider">natGatewayProvider</a></code> | <code>aws-cdk-lib.aws_ec2.NatProvider</code> | What type of NAT provider to use. |
| <code><a href="#raindancers-network.network.EvpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT Gateways/Instances to create. |
| <code><a href="#raindancers-network.network.EvpcProps.property.natGatewaySubnets">natGatewaySubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Configures the subnets which will have NAT Gateways/Instances. |
| <code><a href="#raindancers-network.network.EvpcProps.property.reservedAzs">reservedAzs</a></code> | <code>number</code> | Define the number of AZs to reserve. |
| <code><a href="#raindancers-network.network.EvpcProps.property.restrictDefaultSecurityGroup">restrictDefaultSecurityGroup</a></code> | <code>boolean</code> | If set to true then the default inbound & outbound rules will be removed from the default security group. |
| <code><a href="#raindancers-network.network.EvpcProps.property.subnetConfiguration">subnetConfiguration</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | Configure the subnets to build for each AZ. |
| <code><a href="#raindancers-network.network.EvpcProps.property.vpcName">vpcName</a></code> | <code>string</code> | The VPC name. |
| <code><a href="#raindancers-network.network.EvpcProps.property.vpnConnections">vpnConnections</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}</code> | VPN connections to this VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.vpnGateway">vpnGateway</a></code> | <code>boolean</code> | Indicates whether a VPN gateway should be created and attached to this VPC. |
| <code><a href="#raindancers-network.network.EvpcProps.property.vpnGatewayAsn">vpnGatewayAsn</a></code> | <code>number</code> | The private Autonomous System Number (ASN) for the VPN gateway. |
| <code><a href="#raindancers-network.network.EvpcProps.property.vpnRoutePropagation">vpnRoutePropagation</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection[]</code> | Where to propagate VPN routes. |
| <code><a href="#raindancers-network.network.EvpcProps.property.subnetGroups">subnetGroups</a></code> | <code>raindancers-network.network.SubnetGroup[]</code> | *No description.* |

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="raindancers-network.network.EvpcProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]
- *Default:* a subset of AZs of the stack

Availability zones this VPC spans.

Specify this option only if you do not specify `maxAzs`.

---

##### ~~`cidr`~~<sup>Optional</sup> <a name="cidr" id="raindancers-network.network.EvpcProps.property.cidr"></a>

- *Deprecated:* Use ipAddresses instead

```typescript
public readonly cidr: string;
```

- *Type:* string
- *Default:* Vpc.DEFAULT_CIDR_RANGE

The CIDR range to use for the VPC, e.g. '10.0.0.0/16'.

Should be a minimum of /28 and maximum size of /16. The range will be
split across all subnets per Availability Zone.

---

##### `defaultInstanceTenancy`<sup>Optional</sup> <a name="defaultInstanceTenancy" id="raindancers-network.network.EvpcProps.property.defaultInstanceTenancy"></a>

```typescript
public readonly defaultInstanceTenancy: DefaultInstanceTenancy;
```

- *Type:* aws-cdk-lib.aws_ec2.DefaultInstanceTenancy
- *Default:* DefaultInstanceTenancy.Default (shared) tenancy

The default tenancy of instances launched into the VPC.

By setting this to dedicated tenancy, instances will be launched on
hardware dedicated to a single AWS customer, unless specifically specified
at instance launch time. Please note, not all instance types are usable
with Dedicated tenancy.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="raindancers-network.network.EvpcProps.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the instances launched in the VPC get public DNS hostnames.

If this attribute is true, instances in the VPC get public DNS hostnames,
but only if the enableDnsSupport attribute is also set to true.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="raindancers-network.network.EvpcProps.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the DNS resolution is supported for the VPC.

If this attribute is false, the Amazon-provided DNS server in the VPC that
resolves public DNS hostnames to IP addresses is not enabled. If this
attribute is true, queries to the Amazon provided DNS server at the
169.254.169.253 IP address, or the reserved IP address at the base of the
VPC IPv4 network range plus two will succeed.

---

##### `flowLogs`<sup>Optional</sup> <a name="flowLogs" id="raindancers-network.network.EvpcProps.property.flowLogs"></a>

```typescript
public readonly flowLogs: {[ key: string ]: FlowLogOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}
- *Default:* No flow logs.

Flow logs to add to this VPC.

---

##### `gatewayEndpoints`<sup>Optional</sup> <a name="gatewayEndpoints" id="raindancers-network.network.EvpcProps.property.gatewayEndpoints"></a>

```typescript
public readonly gatewayEndpoints: {[ key: string ]: GatewayVpcEndpointOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}
- *Default:* None.

Gateway endpoints to add to this VPC.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="raindancers-network.network.EvpcProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses
- *Default:* ec2.IpAddresses.cidr

The Provider to use to allocate IP Space to your VPC.

Options include static allocation or from a pool.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="raindancers-network.network.EvpcProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number
- *Default:* 3

Define the maximum number of AZs to use in this region.

If the region has more AZs than you want to use (for example, because of
EIP limits), pick a lower number here. The AZs will be sorted and picked
from the start of the list.

If you pick a higher number than the number of AZs in the region, all AZs
in the region will be selected. To use "all AZs" available to your
account, use a high number (such as 99).

Be aware that environment-agnostic stacks will be created with access to
only 2 AZs, so to use more than 2 AZs, be sure to specify the account and
region on your stack.

Specify this option only if you do not specify `availabilityZones`.

---

##### `natGatewayProvider`<sup>Optional</sup> <a name="natGatewayProvider" id="raindancers-network.network.EvpcProps.property.natGatewayProvider"></a>

```typescript
public readonly natGatewayProvider: NatProvider;
```

- *Type:* aws-cdk-lib.aws_ec2.NatProvider
- *Default:* NatProvider.gateway()

What type of NAT provider to use.

Select between NAT gateways or NAT instances. NAT gateways
may not be available in all AWS regions.

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="raindancers-network.network.EvpcProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number
- *Default:* One NAT gateway/instance per Availability Zone

The number of NAT Gateways/Instances to create.

The type of NAT gateway or instance will be determined by the
`natGatewayProvider` parameter.

You can set this number lower than the number of Availability Zones in your
VPC in order to save on NAT cost. Be aware you may be charged for
cross-AZ data traffic instead.

---

##### `natGatewaySubnets`<sup>Optional</sup> <a name="natGatewaySubnets" id="raindancers-network.network.EvpcProps.property.natGatewaySubnets"></a>

```typescript
public readonly natGatewaySubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* All public subnets.

Configures the subnets which will have NAT Gateways/Instances.

You can pick a specific group of subnets by specifying the group name;
the picked subnets must be public subnets.

Only necessary if you have more than one public subnet group.

---

##### `reservedAzs`<sup>Optional</sup> <a name="reservedAzs" id="raindancers-network.network.EvpcProps.property.reservedAzs"></a>

```typescript
public readonly reservedAzs: number;
```

- *Type:* number
- *Default:* 0

Define the number of AZs to reserve.

When specified, the IP space is reserved for the azs but no actual
resources are provisioned.

---

##### `restrictDefaultSecurityGroup`<sup>Optional</sup> <a name="restrictDefaultSecurityGroup" id="raindancers-network.network.EvpcProps.property.restrictDefaultSecurityGroup"></a>

```typescript
public readonly restrictDefaultSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true if '@aws-cdk/aws-ec2:restrictDefaultSecurityGroup' is enabled, false otherwise

If set to true then the default inbound & outbound rules will be removed from the default security group.

---

##### `subnetConfiguration`<sup>Optional</sup> <a name="subnetConfiguration" id="raindancers-network.network.EvpcProps.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]
- *Default:* The VPC CIDR will be evenly divided between 1 public and 1 private subnet per AZ.

Configure the subnets to build for each AZ.

Each entry in this list configures a Subnet Group; each group will contain a
subnet for each Availability Zone.

For example, if you want 1 public subnet, 1 private subnet, and 1 isolated
subnet in each AZ provide the following:

```ts
new ec2.Vpc(this, 'VPC', {
  subnetConfiguration: [
     {
       cidrMask: 24,
       name: 'ingress',
       subnetType: ec2.SubnetType.PUBLIC,
     },
     {
       cidrMask: 24,
       name: 'application',
       subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
     },
     {
       cidrMask: 28,
       name: 'rds',
       subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
     }
  ]
});
```

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="raindancers-network.network.EvpcProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string
- *Default:* this.node.path

The VPC name.

Since the VPC resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `vpnConnections`<sup>Optional</sup> <a name="vpnConnections" id="raindancers-network.network.EvpcProps.property.vpnConnections"></a>

```typescript
public readonly vpnConnections: {[ key: string ]: VpnConnectionOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}
- *Default:* No connections.

VPN connections to this VPC.

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="raindancers-network.network.EvpcProps.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: boolean;
```

- *Type:* boolean
- *Default:* true when vpnGatewayAsn or vpnConnections is specified

Indicates whether a VPN gateway should be created and attached to this VPC.

---

##### `vpnGatewayAsn`<sup>Optional</sup> <a name="vpnGatewayAsn" id="raindancers-network.network.EvpcProps.property.vpnGatewayAsn"></a>

```typescript
public readonly vpnGatewayAsn: number;
```

- *Type:* number
- *Default:* Amazon default ASN.

The private Autonomous System Number (ASN) for the VPN gateway.

---

##### `vpnRoutePropagation`<sup>Optional</sup> <a name="vpnRoutePropagation" id="raindancers-network.network.EvpcProps.property.vpnRoutePropagation"></a>

```typescript
public readonly vpnRoutePropagation: SubnetSelection[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection[]
- *Default:* On the route tables associated with private subnets. If no private subnets exists, isolated subnets are used. If no isolated subnets exists, public subnets are used.

Where to propagate VPN routes.

---

##### `subnetGroups`<sup>Optional</sup> <a name="subnetGroups" id="raindancers-network.network.EvpcProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: SubnetGroup[];
```

- *Type:* raindancers-network.network.SubnetGroup[]

---

### FindPrefixListProps <a name="FindPrefixListProps" id="raindancers-network.ec2.FindPrefixListProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.ec2.FindPrefixListProps.Initializer"></a>

```typescript
import { ec2 } from 'raindancers-network'

const findPrefixListProps: ec2.FindPrefixListProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ec2.FindPrefixListProps.property.prefixListName">prefixListName</a></code> | <code>string</code> | *No description.* |

---

##### `prefixListName`<sup>Required</sup> <a name="prefixListName" id="raindancers-network.ec2.FindPrefixListProps.property.prefixListName"></a>

```typescript
public readonly prefixListName: string;
```

- *Type:* string

---

### FirewallPolicyProps <a name="FirewallPolicyProps" id="raindancers-network.firewall.FirewallPolicyProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.firewall.FirewallPolicyProps.Initializer"></a>

```typescript
import { firewall } from 'raindancers-network'

const firewallPolicyProps: firewall.FirewallPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.FirewallPolicyProps.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicyProps.property.statelessDefaultActions">statelessDefaultActions</a></code> | <code>raindancers-network.firewall.StatelessActions[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicyProps.property.statelessFragmentDefaultActions">statelessFragmentDefaultActions</a></code> | <code>raindancers-network.firewall.StatelessActions[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.FirewallPolicyProps.property.statefulEngineOptions">statefulEngineOptions</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty</code> | *No description.* |

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="raindancers-network.firewall.FirewallPolicyProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `statelessDefaultActions`<sup>Required</sup> <a name="statelessDefaultActions" id="raindancers-network.firewall.FirewallPolicyProps.property.statelessDefaultActions"></a>

```typescript
public readonly statelessDefaultActions: StatelessActions[];
```

- *Type:* raindancers-network.firewall.StatelessActions[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="statelessFragmentDefaultActions" id="raindancers-network.firewall.FirewallPolicyProps.property.statelessFragmentDefaultActions"></a>

```typescript
public readonly statelessFragmentDefaultActions: StatelessActions[];
```

- *Type:* raindancers-network.firewall.StatelessActions[]

---

##### `statefulEngineOptions`<sup>Optional</sup> <a name="statefulEngineOptions" id="raindancers-network.firewall.FirewallPolicyProps.property.statefulEngineOptions"></a>

```typescript
public readonly statefulEngineOptions: StatefulEngineOptionsProperty;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty

---

### FlowLogProps <a name="FlowLogProps" id="raindancers-network.network.FlowLogProps"></a>

Properties for flow logs *.

#### Initializer <a name="Initializer" id="raindancers-network.network.FlowLogProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const flowLogProps: network.FlowLogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.FlowLogProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | the central s3 location for enterprise flow logs. |
| <code><a href="#raindancers-network.network.FlowLogProps.property.localAthenaQuerys">localAthenaQuerys</a></code> | <code>boolean</code> | create in Account Athena Querys for flow logs. |
| <code><a href="#raindancers-network.network.FlowLogProps.property.oneMinuteFlowLogs">oneMinuteFlowLogs</a></code> | <code>boolean</code> | 1 minute resolution. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-network.network.FlowLogProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

the central s3 location for enterprise flow logs.

---

##### `localAthenaQuerys`<sup>Optional</sup> <a name="localAthenaQuerys" id="raindancers-network.network.FlowLogProps.property.localAthenaQuerys"></a>

```typescript
public readonly localAthenaQuerys: boolean;
```

- *Type:* boolean

create in Account Athena Querys for flow logs.

---

##### `oneMinuteFlowLogs`<sup>Optional</sup> <a name="oneMinuteFlowLogs" id="raindancers-network.network.FlowLogProps.property.oneMinuteFlowLogs"></a>

```typescript
public readonly oneMinuteFlowLogs: boolean;
```

- *Type:* boolean

1 minute resolution.

---

### ForwardingRulesProps <a name="ForwardingRulesProps" id="raindancers-network.dns.ForwardingRulesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.ForwardingRulesProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const forwardingRulesProps: dns.ForwardingRulesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.ForwardingRulesProps.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ForwardingRulesProps.property.resolverId">resolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ForwardingRulesProps.property.resolverIP">resolverIP</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.dns.ForwardingRulesProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `domains`<sup>Required</sup> <a name="domains" id="raindancers-network.dns.ForwardingRulesProps.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `resolverId`<sup>Required</sup> <a name="resolverId" id="raindancers-network.dns.ForwardingRulesProps.property.resolverId"></a>

```typescript
public readonly resolverId: string;
```

- *Type:* string

---

##### `resolverIP`<sup>Required</sup> <a name="resolverIP" id="raindancers-network.dns.ForwardingRulesProps.property.resolverIP"></a>

```typescript
public readonly resolverIP: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.dns.ForwardingRulesProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

### GetTunnelAddressPairProps <a name="GetTunnelAddressPairProps" id="raindancers-network.ipam.GetTunnelAddressPairProps"></a>

Properties for obtaining an IPAM assigned address pair for use on IPsec VPN Tunnels.

#### Initializer <a name="Initializer" id="raindancers-network.ipam.GetTunnelAddressPairProps.Initializer"></a>

```typescript
import { ipam } from 'raindancers-network'

const getTunnelAddressPairProps: ipam.GetTunnelAddressPairProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPairProps.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | The IPAM Pool Id from which the assginment will be made from. |
| <code><a href="#raindancers-network.ipam.GetTunnelAddressPairProps.property.name">name</a></code> | <code>string</code> | The Name used by IPAM to record the allocation. |

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="raindancers-network.ipam.GetTunnelAddressPairProps.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

The IPAM Pool Id from which the assginment will be made from.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.ipam.GetTunnelAddressPairProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name used by IPAM to record the allocation.

---

### GlueClassifierProps <a name="GlueClassifierProps" id="raindancers-network.glue.GlueClassifierProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.GlueClassifierProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const glueClassifierProps: glue.GlueClassifierProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.GlueClassifierProps.property.type">type</a></code> | <code>raindancers-network.glue.GlueClassifierType</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifierProps.property.csvClassifier">csvClassifier</a></code> | <code>aws-cdk-lib.aws_glue.CfnClassifier.CsvClassifierProperty</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifierProps.property.grokClassifier">grokClassifier</a></code> | <code>aws-cdk-lib.aws_glue.CfnClassifier.GrokClassifierProperty</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifierProps.property.jsonClassifier">jsonClassifier</a></code> | <code>aws-cdk-lib.aws_glue.CfnClassifier.JsonClassifierProperty</code> | *No description.* |
| <code><a href="#raindancers-network.glue.GlueClassifierProps.property.xmlClassifier">xmlClassifier</a></code> | <code>aws-cdk-lib.aws_glue.CfnClassifier.XMLClassifierProperty</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="raindancers-network.glue.GlueClassifierProps.property.type"></a>

```typescript
public readonly type: GlueClassifierType;
```

- *Type:* raindancers-network.glue.GlueClassifierType

---

##### `csvClassifier`<sup>Optional</sup> <a name="csvClassifier" id="raindancers-network.glue.GlueClassifierProps.property.csvClassifier"></a>

```typescript
public readonly csvClassifier: CsvClassifierProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnClassifier.CsvClassifierProperty

---

##### `grokClassifier`<sup>Optional</sup> <a name="grokClassifier" id="raindancers-network.glue.GlueClassifierProps.property.grokClassifier"></a>

```typescript
public readonly grokClassifier: GrokClassifierProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnClassifier.GrokClassifierProperty

---

##### `jsonClassifier`<sup>Optional</sup> <a name="jsonClassifier" id="raindancers-network.glue.GlueClassifierProps.property.jsonClassifier"></a>

```typescript
public readonly jsonClassifier: JsonClassifierProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnClassifier.JsonClassifierProperty

---

##### `xmlClassifier`<sup>Optional</sup> <a name="xmlClassifier" id="raindancers-network.glue.GlueClassifierProps.property.xmlClassifier"></a>

```typescript
public readonly xmlClassifier: XMLClassifierProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnClassifier.XMLClassifierProperty

---

### HubVpc <a name="HubVpc" id="raindancers-network.dns.HubVpc"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.HubVpc.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const hubVpc: dns.HubVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.HubVpc.property.region">region</a></code> | <code>string</code> | what region is the central account in. |
| <code><a href="#raindancers-network.dns.HubVpc.property.crossAccount">crossAccount</a></code> | <code>raindancers-network.dns.CrossAccountProps</code> | *No description.* |
| <code><a href="#raindancers-network.dns.HubVpc.property.vpcSearchTag">vpcSearchTag</a></code> | <code>aws-cdk-lib.Tag</code> | *No description.* |

---

##### `region`<sup>Required</sup> <a name="region" id="raindancers-network.dns.HubVpc.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

what region is the central account in.

---

##### `crossAccount`<sup>Optional</sup> <a name="crossAccount" id="raindancers-network.dns.HubVpc.property.crossAccount"></a>

```typescript
public readonly crossAccount: CrossAccountProps;
```

- *Type:* raindancers-network.dns.CrossAccountProps

---

##### `vpcSearchTag`<sup>Optional</sup> <a name="vpcSearchTag" id="raindancers-network.dns.HubVpc.property.vpcSearchTag"></a>

```typescript
public readonly vpcSearchTag: Tag;
```

- *Type:* aws-cdk-lib.Tag

---

### IpsecTunnelPoolProps <a name="IpsecTunnelPoolProps" id="raindancers-network.ipam.IpsecTunnelPoolProps"></a>

Properties for defining a IPAM Pool specifically for IPSec VPN Tunnels.

#### Initializer <a name="Initializer" id="raindancers-network.ipam.IpsecTunnelPoolProps.Initializer"></a>

```typescript
import { ipam } from 'raindancers-network'

const ipsecTunnelPoolProps: ipam.IpsecTunnelPoolProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPoolProps.property.cidr">cidr</a></code> | <code>string</code> | The Cidr range for pools to be created from    eg, 169.254.100.0/27 The cidr must be in the 169.254.0.0/16 range and must be a minimum of a /29 and a maximum of /24. |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPoolProps.property.description">description</a></code> | <code>string</code> | the description used by IPAM to describe the pool. |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPoolProps.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | The IPAM Scope Id to use to create the Pool. |
| <code><a href="#raindancers-network.ipam.IpsecTunnelPoolProps.property.name">name</a></code> | <code>string</code> | the name used by IPAM to identify the pool. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-network.ipam.IpsecTunnelPoolProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The Cidr range for pools to be created from    eg, 169.254.100.0/27 The cidr must be in the 169.254.0.0/16 range and must be a minimum of a /29 and a maximum of /24.

It must also not overlap the AWS reserved ranges. T

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.ipam.IpsecTunnelPoolProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

the description used by IPAM to describe the pool.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="raindancers-network.ipam.IpsecTunnelPoolProps.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

The IPAM Scope Id to use to create the Pool.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.ipam.IpsecTunnelPoolProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name used by IPAM to identify the pool.

---

### JDBCTargetProps <a name="JDBCTargetProps" id="raindancers-network.glue.JDBCTargetProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.JDBCTargetProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const jDBCTargetProps: glue.JDBCTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.JDBCTargetProps.property.enableAdditionalMetadata">enableAdditionalMetadata</a></code> | <code>raindancers-network.glue.MetaDataTypes[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.JDBCTargetProps.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.JDBCTargetProps.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |

---

##### `enableAdditionalMetadata`<sup>Required</sup> <a name="enableAdditionalMetadata" id="raindancers-network.glue.JDBCTargetProps.property.enableAdditionalMetadata"></a>

```typescript
public readonly enableAdditionalMetadata: MetaDataTypes[];
```

- *Type:* raindancers-network.glue.MetaDataTypes[]

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="raindancers-network.glue.JDBCTargetProps.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="raindancers-network.glue.JDBCTargetProps.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

### LakeFormationConfiguration <a name="LakeFormationConfiguration" id="raindancers-network.glue.LakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.LakeFormationConfiguration.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const lakeFormationConfiguration: glue.LakeFormationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.LakeFormationConfiguration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.LakeFormationConfiguration.property.useLakeFormationCredentials">useLakeFormationCredentials</a></code> | <code>boolean</code> | *No description.* |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="raindancers-network.glue.LakeFormationConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `useLakeFormationCredentials`<sup>Optional</sup> <a name="useLakeFormationCredentials" id="raindancers-network.glue.LakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```typescript
public readonly useLakeFormationCredentials: boolean;
```

- *Type:* boolean

---

### LakeFormationProps <a name="LakeFormationProps" id="raindancers-network.lakeformation.LakeFormationProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.lakeformation.LakeFormationProps.Initializer"></a>

```typescript
import { lakeformation } from 'raindancers-network'

const lakeFormationProps: lakeformation.LakeFormationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.lakeformation.LakeFormationProps.property.makeCdkExecRoleLakeAdmin">makeCdkExecRoleLakeAdmin</a></code> | <code>boolean</code> | The cdk exec role will be creating Datalake Objects so will require permission. |
| <code><a href="#raindancers-network.lakeformation.LakeFormationProps.property.nonproduction">nonproduction</a></code> | <code>boolean</code> | Opt out of Mechanisms for high data protection, that are appropriate for production. |

---

##### `makeCdkExecRoleLakeAdmin`<sup>Optional</sup> <a name="makeCdkExecRoleLakeAdmin" id="raindancers-network.lakeformation.LakeFormationProps.property.makeCdkExecRoleLakeAdmin"></a>

```typescript
public readonly makeCdkExecRoleLakeAdmin: boolean;
```

- *Type:* boolean
- *Default:* true

The cdk exec role will be creating Datalake Objects so will require permission.

---

##### `nonproduction`<sup>Optional</sup> <a name="nonproduction" id="raindancers-network.lakeformation.LakeFormationProps.property.nonproduction"></a>

```typescript
public readonly nonproduction: boolean;
```

- *Type:* boolean
- *Default:* false

Opt out of Mechanisms for high data protection, that are appropriate for production.

---

### LineageConfiguration <a name="LineageConfiguration" id="raindancers-network.glue.LineageConfiguration"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.LineageConfiguration.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const lineageConfiguration: glue.LineageConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.LineageConfiguration.property.crawlerLineageSettings">crawlerLineageSettings</a></code> | <code>raindancers-network.glue.CrawlerLineageSettings</code> | *No description.* |

---

##### `crawlerLineageSettings`<sup>Required</sup> <a name="crawlerLineageSettings" id="raindancers-network.glue.LineageConfiguration.property.crawlerLineageSettings"></a>

```typescript
public readonly crawlerLineageSettings: CrawlerLineageSettings;
```

- *Type:* raindancers-network.glue.CrawlerLineageSettings

---

### OutboundForwardingRule <a name="OutboundForwardingRule" id="raindancers-network.dns.OutboundForwardingRule"></a>

#### Initializer <a name="Initializer" id="raindancers-network.dns.OutboundForwardingRule.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const outboundForwardingRule: dns.OutboundForwardingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.OutboundForwardingRule.property.domain">domain</a></code> | <code>string</code> | domain to forward. |
| <code><a href="#raindancers-network.dns.OutboundForwardingRule.property.forwardTo">forwardTo</a></code> | <code>string[]</code> | array of ip address's to forward request to. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="raindancers-network.dns.OutboundForwardingRule.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

domain to forward.

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="raindancers-network.dns.OutboundForwardingRule.property.forwardTo"></a>

```typescript
public readonly forwardTo: string[];
```

- *Type:* string[]

array of ip address's to forward request to.

---

### PermissionBoundary <a name="PermissionBoundary" id="raindancers-network.sso.PermissionBoundary"></a>

#### Initializer <a name="Initializer" id="raindancers-network.sso.PermissionBoundary.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const permissionBoundary: sso.PermissionBoundary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.PermissionBoundary.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty</code> | Specifies the name and path of a customer managed policy. |
| <code><a href="#raindancers-network.sso.PermissionBoundary.property.managedPolicyArn">managedPolicyArn</a></code> | <code>string</code> | The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary. |

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="raindancers-network.sso.PermissionBoundary.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: IResolvable | CustomerManagedPolicyReferenceProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty

Specifies the name and path of a customer managed policy.

You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference)

---

##### `managedPolicyArn`<sup>Optional</sup> <a name="managedPolicyArn" id="raindancers-network.sso.PermissionBoundary.property.managedPolicyArn"></a>

```typescript
public readonly managedPolicyArn: string;
```

- *Type:* string

The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn)

---

### PermissionSetAttributes <a name="PermissionSetAttributes" id="raindancers-network.sso.PermissionSetAttributes"></a>

Attributes for a permission set.

#### Initializer <a name="Initializer" id="raindancers-network.sso.PermissionSetAttributes.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const permissionSetAttributes: sso.PermissionSetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.PermissionSetAttributes.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#raindancers-network.sso.PermissionSetAttributes.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance ARN of the permission set. |

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-network.sso.PermissionSetAttributes.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

Such as
`arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-network.sso.PermissionSetAttributes.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance ARN of the permission set.

---

### PermissionSetProps <a name="PermissionSetProps" id="raindancers-network.sso.PermissionSetProps"></a>

The properties of a new permission set.

#### Initializer <a name="Initializer" id="raindancers-network.sso.PermissionSetProps.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const permissionSetProps: sso.PermissionSetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.name">name</a></code> | <code>string</code> | The name of the permission set. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The ARN of the SSO instance under which the operation will be executed. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.awsManagedPolicies">awsManagedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | The AWS managed policies to attach to the `PermissionSet`. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code>raindancers-network.sso.CustomerManagedPolicyReference[]</code> | Specifies the names and paths of a customer managed policy. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.description">description</a></code> | <code>string</code> | The description of the `PermissionSet`. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.inlinePolicy">inlinePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The IAM inline policy that is attached to the permission set. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>raindancers-network.sso.PermissionBoundary</code> | Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.relayStateType">relayStateType</a></code> | <code>string</code> | Used to redirect users within the application during the federation authentication process. |
| <code><a href="#raindancers-network.sso.PermissionSetProps.property.sessionDuration">sessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The length of time that the application user sessions are valid for. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.sso.PermissionSetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the permission set.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-network.sso.PermissionSetProps.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The ARN of the SSO instance under which the operation will be executed.

---

##### `awsManagedPolicies`<sup>Optional</sup> <a name="awsManagedPolicies" id="raindancers-network.sso.PermissionSetProps.property.awsManagedPolicies"></a>

```typescript
public readonly awsManagedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No AWS managed policies

The AWS managed policies to attach to the `PermissionSet`.

---

##### `customerManagedPolicyReferences`<sup>Optional</sup> <a name="customerManagedPolicyReferences" id="raindancers-network.sso.PermissionSetProps.property.customerManagedPolicyReferences"></a>

```typescript
public readonly customerManagedPolicyReferences: CustomerManagedPolicyReference[];
```

- *Type:* raindancers-network.sso.CustomerManagedPolicyReference[]
- *Default:* No customer managed policies

Specifies the names and paths of a customer managed policy.

You must have an IAM policy that matches the name and path in each
AWS account where you want to deploy your permission set.

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.sso.PermissionSetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

The description of the `PermissionSet`.

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="raindancers-network.sso.PermissionSetProps.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No inline policy

The IAM inline policy that is attached to the permission set.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="raindancers-network.sso.PermissionSetProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionBoundary;
```

- *Type:* raindancers-network.sso.PermissionBoundary
- *Default:* No permissions boundary

Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary.

Specify either
customerManagedPolicyReference to use the name and path of a customer
managed policy, or managedPolicy to use the ARN of an AWS managed
policy.

A permissions boundary represents the maximum permissions that any
policy can grant your role. For more information, see Permissions boundaries
for IAM entities in the AWS Identity and Access Management User Guide.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `relayStateType`<sup>Optional</sup> <a name="relayStateType" id="raindancers-network.sso.PermissionSetProps.property.relayStateType"></a>

```typescript
public readonly relayStateType: string;
```

- *Type:* string
- *Default:* No redirection

Used to redirect users within the application during the federation authentication process.

By default, when a user signs into the AWS access portal, chooses an account,
and then chooses the role that AWS creates from the assigned permission set,
IAM Identity Center redirects the user’s browser to the AWS Management Console.

You can change this behavior by setting the relay state to a different console
URL. Setting the relay state enables you to provide the user with quick access
to the console that is most appropriate for their role. For example, you can
set the relay state to the Amazon EC2 console URL (https://console.aws.amazon.com/ec2/)
to redirect the user to that console when they choose the Amazon EC2
administrator role.

> [https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html](https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html)

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="raindancers-network.sso.PermissionSetProps.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

The length of time that the application user sessions are valid for.

---

### PrefixCidr <a name="PrefixCidr" id="raindancers-network.network.PrefixCidr"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.PrefixCidr.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const prefixCidr: network.PrefixCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.PrefixCidr.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-network.network.PrefixCidr.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

### PrincipalProperty <a name="PrincipalProperty" id="raindancers-network.sso.PrincipalProperty"></a>

#### Initializer <a name="Initializer" id="raindancers-network.sso.PrincipalProperty.Initializer"></a>

```typescript
import { sso } from 'raindancers-network'

const principalProperty: sso.PrincipalProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.PrincipalProperty.property.principalId">principalId</a></code> | <code>string</code> | The id of the principal. |
| <code><a href="#raindancers-network.sso.PrincipalProperty.property.principalType">principalType</a></code> | <code>raindancers-network.sso.PrincipalTypes</code> | The type of the principal. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="raindancers-network.sso.PrincipalProperty.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The id of the principal.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="raindancers-network.sso.PrincipalProperty.property.principalType"></a>

```typescript
public readonly principalType: PrincipalTypes;
```

- *Type:* raindancers-network.sso.PrincipalTypes

The type of the principal.

---

### PythonApiIngestToS3Props <a name="PythonApiIngestToS3Props" id="raindancers-network.apilambda.PythonApiIngestToS3Props"></a>

#### Initializer <a name="Initializer" id="raindancers-network.apilambda.PythonApiIngestToS3Props.Initializer"></a>

```typescript
import { apilambda } from 'raindancers-network'

const pythonApiIngestToS3Props: apilambda.PythonApiIngestToS3Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.codeSource">codeSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.ingestBucket">ingestBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.secrets">secrets</a></code> | <code>raindancers-network.apilambda.SecretNames[]</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.PythonApiIngestToS3Props.property.timeOut">timeOut</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `codeSource`<sup>Required</sup> <a name="codeSource" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.codeSource"></a>

```typescript
public readonly codeSource: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `ingestBucket`<sup>Required</sup> <a name="ingestBucket" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.ingestBucket"></a>

```typescript
public readonly ingestBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.secrets"></a>

```typescript
public readonly secrets: SecretNames[];
```

- *Type:* raindancers-network.apilambda.SecretNames[]

---

##### `timeOut`<sup>Optional</sup> <a name="timeOut" id="raindancers-network.apilambda.PythonApiIngestToS3Props.property.timeOut"></a>

```typescript
public readonly timeOut: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### R53ResolverendpointsProps <a name="R53ResolverendpointsProps" id="raindancers-network.dns.R53ResolverendpointsProps"></a>

Properties to for creating inbound resolvers.

#### Initializer <a name="Initializer" id="raindancers-network.dns.R53ResolverendpointsProps.Initializer"></a>

```typescript
import { dns } from 'raindancers-network'

const r53ResolverendpointsProps: dns.R53ResolverendpointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.dns.R53ResolverendpointsProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | the subnetgroup to place the resolvers in. |
| <code><a href="#raindancers-network.dns.R53ResolverendpointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | the vpc that the resolvers will be placed in. |
| <code><a href="#raindancers-network.dns.R53ResolverendpointsProps.property.outboundForwardingRules">outboundForwardingRules</a></code> | <code>raindancers-network.dns.OutboundForwardingRule[]</code> | An array of Internal domains that can be centrally resolved in this VPC. |
| <code><a href="#raindancers-network.dns.R53ResolverendpointsProps.property.tagValue">tagValue</a></code> | <code>string</code> | Value for Sharing. |

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.dns.R53ResolverendpointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

the subnetgroup to place the resolvers in.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.dns.R53ResolverendpointsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

the vpc that the resolvers will be placed in.

---

##### `outboundForwardingRules`<sup>Optional</sup> <a name="outboundForwardingRules" id="raindancers-network.dns.R53ResolverendpointsProps.property.outboundForwardingRules"></a>

```typescript
public readonly outboundForwardingRules: OutboundForwardingRule[];
```

- *Type:* raindancers-network.dns.OutboundForwardingRule[]

An array of Internal domains that can be centrally resolved in this VPC.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="raindancers-network.dns.R53ResolverendpointsProps.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Value for Sharing.

---

### RecrawlPolicy <a name="RecrawlPolicy" id="raindancers-network.glue.RecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.RecrawlPolicy.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const recrawlPolicy: glue.RecrawlPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.RecrawlPolicy.property.recrawlBehavior">recrawlBehavior</a></code> | <code>raindancers-network.glue.RecrawlBehavior</code> | *No description.* |

---

##### `recrawlBehavior`<sup>Required</sup> <a name="recrawlBehavior" id="raindancers-network.glue.RecrawlPolicy.property.recrawlBehavior"></a>

```typescript
public readonly recrawlBehavior: RecrawlBehavior;
```

- *Type:* raindancers-network.glue.RecrawlBehavior

---

### RedshiftClusterProps <a name="RedshiftClusterProps" id="raindancers-network.redshift.RedshiftClusterProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.redshift.RedshiftClusterProps.Initializer"></a>

```typescript
import { redshift } from 'raindancers-network'

const redshiftClusterProps: redshift.RedshiftClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.defaultrole">defaultrole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.logging">logging</a></code> | <code>@aws-cdk/aws-redshift-alpha.LoggingProperties</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.masterUser">masterUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.subnetGroup">subnetGroup</a></code> | <code>@aws-cdk/aws-redshift-alpha.ClusterSubnetGroup</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.defaultDBName">defaultDBName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.nodes">nodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.nodeType">nodeType</a></code> | <code>@aws-cdk/aws-redshift-alpha.NodeType</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.parameterGroup">parameterGroup</a></code> | <code>@aws-cdk/aws-redshift-alpha.ClusterParameterGroup</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.redshift.RedshiftClusterProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="raindancers-network.redshift.RedshiftClusterProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `defaultrole`<sup>Required</sup> <a name="defaultrole" id="raindancers-network.redshift.RedshiftClusterProps.property.defaultrole"></a>

```typescript
public readonly defaultrole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `logging`<sup>Required</sup> <a name="logging" id="raindancers-network.redshift.RedshiftClusterProps.property.logging"></a>

```typescript
public readonly logging: LoggingProperties;
```

- *Type:* @aws-cdk/aws-redshift-alpha.LoggingProperties

---

##### `masterUser`<sup>Required</sup> <a name="masterUser" id="raindancers-network.redshift.RedshiftClusterProps.property.masterUser"></a>

```typescript
public readonly masterUser: string;
```

- *Type:* string

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.redshift.RedshiftClusterProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ClusterSubnetGroup;
```

- *Type:* @aws-cdk/aws-redshift-alpha.ClusterSubnetGroup

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.redshift.RedshiftClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

##### `defaultDBName`<sup>Optional</sup> <a name="defaultDBName" id="raindancers-network.redshift.RedshiftClusterProps.property.defaultDBName"></a>

```typescript
public readonly defaultDBName: string;
```

- *Type:* string

---

##### `nodes`<sup>Optional</sup> <a name="nodes" id="raindancers-network.redshift.RedshiftClusterProps.property.nodes"></a>

```typescript
public readonly nodes: number;
```

- *Type:* number

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="raindancers-network.redshift.RedshiftClusterProps.property.nodeType"></a>

```typescript
public readonly nodeType: NodeType;
```

- *Type:* @aws-cdk/aws-redshift-alpha.NodeType

---

##### `parameterGroup`<sup>Optional</sup> <a name="parameterGroup" id="raindancers-network.redshift.RedshiftClusterProps.property.parameterGroup"></a>

```typescript
public readonly parameterGroup: ClusterParameterGroup;
```

- *Type:* @aws-cdk/aws-redshift-alpha.ClusterParameterGroup

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="raindancers-network.redshift.RedshiftClusterProps.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="raindancers-network.redshift.RedshiftClusterProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

### RedShiftDatabaseProps <a name="RedShiftDatabaseProps" id="raindancers-network.redshift.RedShiftDatabaseProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.redshift.RedShiftDatabaseProps.Initializer"></a>

```typescript
import { redshift } from 'raindancers-network'

const redShiftDatabaseProps: redshift.RedShiftDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.redshift.RedShiftDatabaseProps.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-redshift-alpha.Cluster</code> | which cluster will the database be created in. |
| <code><a href="#raindancers-network.redshift.RedShiftDatabaseProps.property.databaseName">databaseName</a></code> | <code>string</code> | A name for the database. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="raindancers-network.redshift.RedShiftDatabaseProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* @aws-cdk/aws-redshift-alpha.Cluster

which cluster will the database be created in.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="raindancers-network.redshift.RedShiftDatabaseProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

A name for the database.

---

### ResolveSubnetGroupNameProps <a name="ResolveSubnetGroupNameProps" id="raindancers-network.network.ResolveSubnetGroupNameProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.ResolveSubnetGroupNameProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const resolveSubnetGroupNameProps: network.ResolveSubnetGroupNameProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupNameProps.property.azcount">azcount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupNameProps.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.ResolveSubnetGroupNameProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `azcount`<sup>Required</sup> <a name="azcount" id="raindancers-network.network.ResolveSubnetGroupNameProps.property.azcount"></a>

```typescript
public readonly azcount: number;
```

- *Type:* number

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="raindancers-network.network.ResolveSubnetGroupNameProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.network.ResolveSubnetGroupNameProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc | Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc | aws-cdk-lib.aws_ec2.Vpc

---

### Route <a name="Route" id="raindancers-network.network.Route"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.Route.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const route: network.Route = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.Route.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.Route.property.destination">destination</a></code> | <code>raindancers-network.network.Destination</code> | *No description.* |
| <code><a href="#raindancers-network.network.Route.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.network.Route.property.subnet">subnet</a></code> | <code>raindancers-network.network.SubnetGroup \| raindancers-network.network.SubnetWildCards</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.network.Route.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-network.network.Route.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* raindancers-network.network.Destination

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="raindancers-network.network.Route.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="raindancers-network.network.Route.property.subnet"></a>

```typescript
public readonly subnet: SubnetGroup | SubnetWildCards;
```

- *Type:* raindancers-network.network.SubnetGroup | raindancers-network.network.SubnetWildCards

---

### RouterGroup <a name="RouterGroup" id="raindancers-network.network.RouterGroup"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.RouterGroup.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const routerGroup: network.RouterGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.RouterGroup.property.routes">routes</a></code> | <code>raindancers-network.network.Route[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.RouterGroup.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-network.network.SubnetGroup</code> | *No description.* |

---

##### `routes`<sup>Required</sup> <a name="routes" id="raindancers-network.network.RouterGroup.property.routes"></a>

```typescript
public readonly routes: Route[];
```

- *Type:* raindancers-network.network.Route[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.network.RouterGroup.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: SubnetGroup;
```

- *Type:* raindancers-network.network.SubnetGroup

---

### S3Path <a name="S3Path" id="raindancers-network.glue.S3Path"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.S3Path.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const s3Path: glue.S3Path = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.S3Path.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3Path.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-network.glue.S3Path.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `path`<sup>Required</sup> <a name="path" id="raindancers-network.glue.S3Path.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

### S3TargetProps <a name="S3TargetProps" id="raindancers-network.glue.S3TargetProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.S3TargetProps.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const s3TargetProps: glue.S3TargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.S3TargetProps.property.path">path</a></code> | <code>raindancers-network.glue.S3Path</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3TargetProps.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3TargetProps.property.dlqEventQueue">dlqEventQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3TargetProps.property.eventQueue">eventQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3TargetProps.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.S3TargetProps.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="raindancers-network.glue.S3TargetProps.property.path"></a>

```typescript
public readonly path: S3Path;
```

- *Type:* raindancers-network.glue.S3Path

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="raindancers-network.glue.S3TargetProps.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `dlqEventQueue`<sup>Optional</sup> <a name="dlqEventQueue" id="raindancers-network.glue.S3TargetProps.property.dlqEventQueue"></a>

```typescript
public readonly dlqEventQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---

##### `eventQueue`<sup>Optional</sup> <a name="eventQueue" id="raindancers-network.glue.S3TargetProps.property.eventQueue"></a>

```typescript
public readonly eventQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="raindancers-network.glue.S3TargetProps.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="raindancers-network.glue.S3TargetProps.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

### SampleConfig <a name="SampleConfig" id="raindancers-network.cloudwan.SampleConfig"></a>

An interface that defines a set of Sample Configurations.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.SampleConfig.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const sampleConfig: cloudwan.SampleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.SampleConfig.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | The S3 bucket where to place the sample configurations. |
| <code><a href="#raindancers-network.cloudwan.SampleConfig.property.deviceType">deviceType</a></code> | <code>raindancers-network.cloudwan.VpnDeviceType</code> | the type of device of the customer gateway. |
| <code><a href="#raindancers-network.cloudwan.SampleConfig.property.ikeVersion">ikeVersion</a></code> | <code>raindancers-network.cloudwan.IkeVersion</code> | create configs for IKE1 or IKE2. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-network.cloudwan.SampleConfig.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

The S3 bucket where to place the sample configurations.

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="raindancers-network.cloudwan.SampleConfig.property.deviceType"></a>

```typescript
public readonly deviceType: VpnDeviceType;
```

- *Type:* raindancers-network.cloudwan.VpnDeviceType

the type of device of the customer gateway.

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="raindancers-network.cloudwan.SampleConfig.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: IkeVersion;
```

- *Type:* raindancers-network.cloudwan.IkeVersion

create configs for IKE1 or IKE2.

---

### SchemaChangePolicy <a name="SchemaChangePolicy" id="raindancers-network.glue.SchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="raindancers-network.glue.SchemaChangePolicy.Initializer"></a>

```typescript
import { glue } from 'raindancers-network'

const schemaChangePolicy: glue.SchemaChangePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.SchemaChangePolicy.property.deleteBehavior">deleteBehavior</a></code> | <code>raindancers-network.glue.DeleteBehavior</code> | *No description.* |
| <code><a href="#raindancers-network.glue.SchemaChangePolicy.property.updateBehavior">updateBehavior</a></code> | <code>raindancers-network.glue.UpdateBehavior</code> | *No description.* |

---

##### `deleteBehavior`<sup>Required</sup> <a name="deleteBehavior" id="raindancers-network.glue.SchemaChangePolicy.property.deleteBehavior"></a>

```typescript
public readonly deleteBehavior: DeleteBehavior;
```

- *Type:* raindancers-network.glue.DeleteBehavior

---

##### `updateBehavior`<sup>Required</sup> <a name="updateBehavior" id="raindancers-network.glue.SchemaChangePolicy.property.updateBehavior"></a>

```typescript
public readonly updateBehavior: UpdateBehavior;
```

- *Type:* raindancers-network.glue.UpdateBehavior

---

### SecretNames <a name="SecretNames" id="raindancers-network.apilambda.SecretNames"></a>

#### Initializer <a name="Initializer" id="raindancers-network.apilambda.SecretNames.Initializer"></a>

```typescript
import { apilambda } from 'raindancers-network'

const secretNames: apilambda.SecretNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.apilambda.SecretNames.property.environment">environment</a></code> | <code>aws-cdk-lib.Environment</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.SecretNames.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.apilambda.SecretNames.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `environment`<sup>Required</sup> <a name="environment" id="raindancers-network.apilambda.SecretNames.property.environment"></a>

```typescript
public readonly environment: Environment;
```

- *Type:* aws-cdk-lib.Environment

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.apilambda.SecretNames.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="raindancers-network.apilambda.SecretNames.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

### Segment <a name="Segment" id="raindancers-network.cloudwan.Segment"></a>

Segment Properties.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.Segment.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const segment: cloudwan.Segment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.Segment.property.name">name</a></code> | <code>string</code> | Name of the Segment. |
| <code><a href="#raindancers-network.cloudwan.Segment.property.allowFilter">allowFilter</a></code> | <code>string[]</code> | A list of denys. |
| <code><a href="#raindancers-network.cloudwan.Segment.property.denyFilter">denyFilter</a></code> | <code>string[]</code> | a List of denys. |
| <code><a href="#raindancers-network.cloudwan.Segment.property.description">description</a></code> | <code>string</code> | A description of the of the segement. |
| <code><a href="#raindancers-network.cloudwan.Segment.property.edgeLocations">edgeLocations</a></code> | <code>object[]</code> | A list of edge locations where the segement will be avaialble. |
| <code><a href="#raindancers-network.cloudwan.Segment.property.isolateAttachments">isolateAttachments</a></code> | <code>boolean</code> | Set true if attached VPCS are isolated from each other. |
| <code><a href="#raindancers-network.cloudwan.Segment.property.requireAttachmentAcceptance">requireAttachmentAcceptance</a></code> | <code>boolean</code> | Set true if the attachment needs approval for connection. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.cloudwan.Segment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Segment.

---

##### `allowFilter`<sup>Optional</sup> <a name="allowFilter" id="raindancers-network.cloudwan.Segment.property.allowFilter"></a>

```typescript
public readonly allowFilter: string[];
```

- *Type:* string[]

A list of denys.

---

##### `denyFilter`<sup>Optional</sup> <a name="denyFilter" id="raindancers-network.cloudwan.Segment.property.denyFilter"></a>

```typescript
public readonly denyFilter: string[];
```

- *Type:* string[]

a List of denys.

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.cloudwan.Segment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the of the segement.

---

##### `edgeLocations`<sup>Optional</sup> <a name="edgeLocations" id="raindancers-network.cloudwan.Segment.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: object[];
```

- *Type:* object[]

A list of edge locations where the segement will be avaialble.

Not that the
locations must also be included in the core network edge ( CNE )

---

##### `isolateAttachments`<sup>Optional</sup> <a name="isolateAttachments" id="raindancers-network.cloudwan.Segment.property.isolateAttachments"></a>

```typescript
public readonly isolateAttachments: boolean;
```

- *Type:* boolean

Set true if attached VPCS are isolated from each other.

---

##### `requireAttachmentAcceptance`<sup>Optional</sup> <a name="requireAttachmentAcceptance" id="raindancers-network.cloudwan.Segment.property.requireAttachmentAcceptance"></a>

```typescript
public readonly requireAttachmentAcceptance: boolean;
```

- *Type:* boolean

Set true if the attachment needs approval for connection.

Currently not supported
and requires an automation step

---

### SegmentAction <a name="SegmentAction" id="raindancers-network.cloudwan.SegmentAction"></a>

Segmment ACtions.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.SegmentAction.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const segmentAction: cloudwan.SegmentAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.action">action</a></code> | <code>raindancers-network.cloudwan.SegmentActionType</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.destinationCidrBlocks">destinationCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.except">except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.mode">mode</a></code> | <code>raindancers-network.cloudwan.SegmentActionMode</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentAction.property.shareWith">shareWith</a></code> | <code>string \| string[]</code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="raindancers-network.cloudwan.SegmentAction.property.action"></a>

```typescript
public readonly action: SegmentActionType;
```

- *Type:* raindancers-network.cloudwan.SegmentActionType

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.cloudwan.SegmentAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlocks`<sup>Optional</sup> <a name="destinationCidrBlocks" id="raindancers-network.cloudwan.SegmentAction.property.destinationCidrBlocks"></a>

```typescript
public readonly destinationCidrBlocks: string[];
```

- *Type:* string[]

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="raindancers-network.cloudwan.SegmentAction.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `except`<sup>Optional</sup> <a name="except" id="raindancers-network.cloudwan.SegmentAction.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Optional</sup> <a name="mode" id="raindancers-network.cloudwan.SegmentAction.property.mode"></a>

```typescript
public readonly mode: SegmentActionMode;
```

- *Type:* raindancers-network.cloudwan.SegmentActionMode

---

##### `shareWith`<sup>Optional</sup> <a name="shareWith" id="raindancers-network.cloudwan.SegmentAction.property.shareWith"></a>

```typescript
public readonly shareWith: string | string[];
```

- *Type:* string | string[]

---

### ShareSubnetGroupProps <a name="ShareSubnetGroupProps" id="raindancers-network.network.ShareSubnetGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.network.ShareSubnetGroupProps.Initializer"></a>

```typescript
import { network } from 'raindancers-network'

const shareSubnetGroupProps: network.ShareSubnetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.network.ShareSubnetGroupProps.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.network.ShareSubnetGroupProps.property.subnetGroup">subnetGroup</a></code> | <code>raindancers-network.network.SubnetGroup</code> | *No description.* |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="raindancers-network.network.ShareSubnetGroupProps.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.network.ShareSubnetGroupProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: SubnetGroup;
```

- *Type:* raindancers-network.network.SubnetGroup

---

### SimpleAttachmentPolicyProps <a name="SimpleAttachmentPolicyProps" id="raindancers-network.cloudwan.SimpleAttachmentPolicyProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.SimpleAttachmentPolicyProps.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const simpleAttachmentPolicyProps: cloudwan.SimpleAttachmentPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.SimpleAttachmentPolicyProps.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SimpleAttachmentPolicyProps.property.account">account</a></code> | <code>string</code> | *No description.* |

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="raindancers-network.cloudwan.SimpleAttachmentPolicyProps.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `account`<sup>Optional</sup> <a name="account" id="raindancers-network.cloudwan.SimpleAttachmentPolicyProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

### SimpleShareActionProps <a name="SimpleShareActionProps" id="raindancers-network.cloudwan.SimpleShareActionProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.SimpleShareActionProps.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const simpleShareActionProps: cloudwan.SimpleShareActionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.SimpleShareActionProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SimpleShareActionProps.property.shareWith">shareWith</a></code> | <code>string \| raindancers-network.cloudwan.CoreNetworkSegment[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.cloudwan.SimpleShareActionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `shareWith`<sup>Required</sup> <a name="shareWith" id="raindancers-network.cloudwan.SimpleShareActionProps.property.shareWith"></a>

```typescript
public readonly shareWith: string | CoreNetworkSegment[];
```

- *Type:* string | raindancers-network.cloudwan.CoreNetworkSegment[]

---

### StatelessRuleProps <a name="StatelessRuleProps" id="raindancers-network.firewall.StatelessRuleProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.firewall.StatelessRuleProps.Initializer"></a>

```typescript
import { firewall } from 'raindancers-network'

const statelessRuleProps: firewall.StatelessRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.actions">actions</a></code> | <code>raindancers-network.firewall.StatelessActions[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.destinationPorts">destinationPorts</a></code> | <code>string \| number[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.destinations">destinations</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.protocols">protocols</a></code> | <code>raindancers-network.firewall.Protocol[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.sourcePorts">sourcePorts</a></code> | <code>string \| number[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.sources">sources</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessRuleProps.property.tcpFlags">tcpFlags</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.TCPFlagFieldProperty[]</code> | *No description.* |

---

##### `actions`<sup>Required</sup> <a name="actions" id="raindancers-network.firewall.StatelessRuleProps.property.actions"></a>

```typescript
public readonly actions: StatelessActions[];
```

- *Type:* raindancers-network.firewall.StatelessActions[]

---

##### `priority`<sup>Required</sup> <a name="priority" id="raindancers-network.firewall.StatelessRuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="raindancers-network.firewall.StatelessRuleProps.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string | number[];
```

- *Type:* string | number[]

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="raindancers-network.firewall.StatelessRuleProps.property.destinations"></a>

```typescript
public readonly destinations: AddressProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="raindancers-network.firewall.StatelessRuleProps.property.protocols"></a>

```typescript
public readonly protocols: Protocol[];
```

- *Type:* raindancers-network.firewall.Protocol[]

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="raindancers-network.firewall.StatelessRuleProps.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string | number[];
```

- *Type:* string | number[]

---

##### `sources`<sup>Optional</sup> <a name="sources" id="raindancers-network.firewall.StatelessRuleProps.property.sources"></a>

```typescript
public readonly sources: AddressProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.AddressProperty[]

---

##### `tcpFlags`<sup>Optional</sup> <a name="tcpFlags" id="raindancers-network.firewall.StatelessRuleProps.property.tcpFlags"></a>

```typescript
public readonly tcpFlags: TCPFlagFieldProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.TCPFlagFieldProperty[]

---

### TGWOnCloudWanProps <a name="TGWOnCloudWanProps" id="raindancers-network.cloudwan.TGWOnCloudWanProps"></a>

Properties for a TWGOnCloudWan.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.TGWOnCloudWanProps.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const tGWOnCloudWanProps: cloudwan.TGWOnCloudWanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.amazonSideAsn">amazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.attachmentSegment">attachmentSegment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.cloudwan">cloudwan</a></code> | <code>raindancers-network.cloudwan.CoreNetwork</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.cloudWanCidr">cloudWanCidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.defaultRouteInSegments">defaultRouteInSegments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.TGWOnCloudWanProps.property.tgCidr">tgCidr</a></code> | <code>string[]</code> | *No description.* |

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: string;
```

- *Type:* string

---

##### `attachmentSegment`<sup>Required</sup> <a name="attachmentSegment" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.attachmentSegment"></a>

```typescript
public readonly attachmentSegment: string;
```

- *Type:* string

---

##### `cloudwan`<sup>Required</sup> <a name="cloudwan" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.cloudwan"></a>

```typescript
public readonly cloudwan: CoreNetwork;
```

- *Type:* raindancers-network.cloudwan.CoreNetwork

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `cloudWanCidr`<sup>Optional</sup> <a name="cloudWanCidr" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.cloudWanCidr"></a>

```typescript
public readonly cloudWanCidr: string[];
```

- *Type:* string[]

---

##### `defaultRouteInSegments`<sup>Optional</sup> <a name="defaultRouteInSegments" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.defaultRouteInSegments"></a>

```typescript
public readonly defaultRouteInSegments: string[];
```

- *Type:* string[]

---

##### `tgCidr`<sup>Optional</sup> <a name="tgCidr" id="raindancers-network.cloudwan.TGWOnCloudWanProps.property.tgCidr"></a>

```typescript
public readonly tgCidr: string[];
```

- *Type:* string[]

---

### UpdateSSMAgentProps <a name="UpdateSSMAgentProps" id="raindancers-network.ssm.UpdateSSMAgentProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.ssm.UpdateSSMAgentProps.Initializer"></a>

```typescript
import { ssm } from 'raindancers-network'

const updateSSMAgentProps: ssm.UpdateSSMAgentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ssm.UpdateSSMAgentProps.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.Instance</code> | The EC2 Instance that will be udpated. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="raindancers-network.ssm.UpdateSSMAgentProps.property.instance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* aws-cdk-lib.aws_ec2.Instance

The EC2 Instance that will be udpated.

---

### VpcRegionId <a name="VpcRegionId" id="raindancers-network.crowdstrike.VpcRegionId"></a>

#### Initializer <a name="Initializer" id="raindancers-network.crowdstrike.VpcRegionId.Initializer"></a>

```typescript
import { crowdstrike } from 'raindancers-network'

const vpcRegionId: crowdstrike.VpcRegionId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.VpcRegionId.property.peeringVpcId">peeringVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.VpcRegionId.property.peerVpcRegion">peerVpcRegion</a></code> | <code>string</code> | *No description.* |

---

##### `peeringVpcId`<sup>Required</sup> <a name="peeringVpcId" id="raindancers-network.crowdstrike.VpcRegionId.property.peeringVpcId"></a>

```typescript
public readonly peeringVpcId: string;
```

- *Type:* string

---

##### `peerVpcRegion`<sup>Required</sup> <a name="peerVpcRegion" id="raindancers-network.crowdstrike.VpcRegionId.property.peerVpcRegion"></a>

```typescript
public readonly peerVpcRegion: string;
```

- *Type:* string

---

### VpnProps <a name="VpnProps" id="raindancers-network.cloudwan.VpnProps"></a>

Properties for S2S VPN.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.VpnProps.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const vpnProps: cloudwan.VpnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.VpnProps.property.customerGateway">customerGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnCustomerGateway</code> | The customer gateway where the vpn will terminate. |
| <code><a href="#raindancers-network.cloudwan.VpnProps.property.vpnspec">vpnspec</a></code> | <code>raindancers-network.cloudwan.VpnSpecProps</code> | a VPN specification for the VPN. |
| <code><a href="#raindancers-network.cloudwan.VpnProps.property.sampleconfig">sampleconfig</a></code> | <code>raindancers-network.cloudwan.SampleConfig</code> | Optionally provide a sampleconfig specification. |
| <code><a href="#raindancers-network.cloudwan.VpnProps.property.tunnelInsideCidr">tunnelInsideCidr</a></code> | <code>string[]</code> | Specify a pair of concrete Cidr's for the tunnel. |
| <code><a href="#raindancers-network.cloudwan.VpnProps.property.tunnelIpamPool">tunnelIpamPool</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | Specify an ipam pool to allocated the tunnel address's from. |

---

##### `customerGateway`<sup>Required</sup> <a name="customerGateway" id="raindancers-network.cloudwan.VpnProps.property.customerGateway"></a>

```typescript
public readonly customerGateway: CfnCustomerGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnCustomerGateway

The customer gateway where the vpn will terminate.

---

##### `vpnspec`<sup>Required</sup> <a name="vpnspec" id="raindancers-network.cloudwan.VpnProps.property.vpnspec"></a>

```typescript
public readonly vpnspec: VpnSpecProps;
```

- *Type:* raindancers-network.cloudwan.VpnSpecProps

a VPN specification for the VPN.

---

##### `sampleconfig`<sup>Optional</sup> <a name="sampleconfig" id="raindancers-network.cloudwan.VpnProps.property.sampleconfig"></a>

```typescript
public readonly sampleconfig: SampleConfig;
```

- *Type:* raindancers-network.cloudwan.SampleConfig

Optionally provide a sampleconfig specification.

---

##### `tunnelInsideCidr`<sup>Optional</sup> <a name="tunnelInsideCidr" id="raindancers-network.cloudwan.VpnProps.property.tunnelInsideCidr"></a>

```typescript
public readonly tunnelInsideCidr: string[];
```

- *Type:* string[]

Specify a pair of concrete Cidr's for the tunnel.

Only use one of tunnelInsideCidr or tunnelIpmamPool

---

##### `tunnelIpamPool`<sup>Optional</sup> <a name="tunnelIpamPool" id="raindancers-network.cloudwan.VpnProps.property.tunnelIpamPool"></a>

```typescript
public readonly tunnelIpamPool: CfnIPAMPool;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool

Specify an ipam pool to allocated the tunnel address's from.

Use only one of tunnelInsideCidr or tunnelIpamPool

---

### VpnSpecProps <a name="VpnSpecProps" id="raindancers-network.cloudwan.VpnSpecProps"></a>

THe properties for a S2S Ipsec Vpn Connection https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html.

#### Initializer <a name="Initializer" id="raindancers-network.cloudwan.VpnSpecProps.Initializer"></a>

```typescript
import { cloudwan } from 'raindancers-network'

const vpnSpecProps: cloudwan.VpnSpecProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.dpdTimeoutAction">dpdTimeoutAction</a></code> | <code>raindancers-network.cloudwan.DPDTimeoutAction</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.enableAcceleration">enableAcceleration</a></code> | <code>boolean</code> | Indicate whether to enable acceleration for the VPN connection. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.enableLogging">enableLogging</a></code> | <code>boolean</code> | Enable CloudwatchLogging for the S2S VPN. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.ikeVersions">ikeVersions</a></code> | <code>raindancers-network.cloudwan.IkeVersion[]</code> | The IKE versions that are permitted for the VPN tunnel. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>raindancers-network.cloudwan.OutsideIpAddressType</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase1DHGroupNumbers">phase1DHGroupNumbers</a></code> | <code>raindancers-network.cloudwan.Phase1DHGroupNumbers[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase1EncryptionAlgorithms">phase1EncryptionAlgorithms</a></code> | <code>raindancers-network.cloudwan.Phase1EncryptionAlgorithms[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code>raindancers-network.cloudwan.Phase1IntegrityAlgorithms[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase1LifetimeSeconds">phase1LifetimeSeconds</a></code> | <code>number</code> | The lifetime for phase 1 of the IKE negotiation, in seconds. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase2DHGroupNumbers">phase2DHGroupNumbers</a></code> | <code>raindancers-network.cloudwan.Phase2DHGroupNumbers[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase2EncryptionAlgorithms">phase2EncryptionAlgorithms</a></code> | <code>raindancers-network.cloudwan.Phase2EncryptionAlgorithms[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code>raindancers-network.cloudwan.Phase2IntegrityAlgorithms[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.phase2LifeTimeSeconds">phase2LifeTimeSeconds</a></code> | <code>number</code> | The lifetime for phase 2 of the IKE negotiation, in seconds. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.rekeyFuzzPercentage">rekeyFuzzPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.rekeyMarginTimeSeconds">rekeyMarginTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.replayWindowSize">replayWindowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.startupAction">startupAction</a></code> | <code>raindancers-network.cloudwan.StartupAction</code> | The action to take when the establishing the tunnel for the VPN connection. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | Indicate if this will only use Static Routes Only. |
| <code><a href="#raindancers-network.cloudwan.VpnSpecProps.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>raindancers-network.cloudwan.TunnelInsideIpVersion</code> | *No description.* |

---

##### `dpdTimeoutAction`<sup>Optional</sup> <a name="dpdTimeoutAction" id="raindancers-network.cloudwan.VpnSpecProps.property.dpdTimeoutAction"></a>

```typescript
public readonly dpdTimeoutAction: DPDTimeoutAction;
```

- *Type:* raindancers-network.cloudwan.DPDTimeoutAction
- *Default:* CLEAR The action to take after DPD timeout occurs. Specify restart to restart the IKE initiation. Specify clear to end the IKE session.

---

##### `dpdTimeoutSeconds`<sup>Optional</sup> <a name="dpdTimeoutSeconds" id="raindancers-network.cloudwan.VpnSpecProps.property.dpdTimeoutSeconds"></a>

```typescript
public readonly dpdTimeoutSeconds: number;
```

- *Type:* number
- *Default:* 30 The number of seconds after which a DPD timeout occurs.

---

##### `enableAcceleration`<sup>Optional</sup> <a name="enableAcceleration" id="raindancers-network.cloudwan.VpnSpecProps.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: boolean;
```

- *Type:* boolean

Indicate whether to enable acceleration for the VPN connection.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="raindancers-network.cloudwan.VpnSpecProps.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean;
```

- *Type:* boolean

Enable CloudwatchLogging for the S2S VPN.

---

##### `ikeVersions`<sup>Optional</sup> <a name="ikeVersions" id="raindancers-network.cloudwan.VpnSpecProps.property.ikeVersions"></a>

```typescript
public readonly ikeVersions: IkeVersion[];
```

- *Type:* raindancers-network.cloudwan.IkeVersion[]

The IKE versions that are permitted for the VPN tunnel.

---

##### `localIpv4NetworkCidr`<sup>Optional</sup> <a name="localIpv4NetworkCidr" id="raindancers-network.cloudwan.VpnSpecProps.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0 The IPv4 CIDR on the AWS side of the VPN connection.

---

##### `outsideIpAddressType`<sup>Optional</sup> <a name="outsideIpAddressType" id="raindancers-network.cloudwan.VpnSpecProps.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: OutsideIpAddressType;
```

- *Type:* raindancers-network.cloudwan.OutsideIpAddressType
- *Default:* PUBLIC The type of IPv4 address assigned to the outside interface of the customer gateway device.

---

##### `phase1DHGroupNumbers`<sup>Optional</sup> <a name="phase1DHGroupNumbers" id="raindancers-network.cloudwan.VpnSpecProps.property.phase1DHGroupNumbers"></a>

```typescript
public readonly phase1DHGroupNumbers: Phase1DHGroupNumbers[];
```

- *Type:* raindancers-network.cloudwan.Phase1DHGroupNumbers[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.

---

##### `phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="phase1EncryptionAlgorithms" id="raindancers-network.cloudwan.VpnSpecProps.property.phase1EncryptionAlgorithms"></a>

```typescript
public readonly phase1EncryptionAlgorithms: Phase1EncryptionAlgorithms[];
```

- *Type:* raindancers-network.cloudwan.Phase1EncryptionAlgorithms[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

---

##### `phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="phase1IntegrityAlgorithms" id="raindancers-network.cloudwan.VpnSpecProps.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: Phase1IntegrityAlgorithms[];
```

- *Type:* raindancers-network.cloudwan.Phase1IntegrityAlgorithms[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

---

##### `phase1LifetimeSeconds`<sup>Optional</sup> <a name="phase1LifetimeSeconds" id="raindancers-network.cloudwan.VpnSpecProps.property.phase1LifetimeSeconds"></a>

```typescript
public readonly phase1LifetimeSeconds: number;
```

- *Type:* number

The lifetime for phase 1 of the IKE negotiation, in seconds.

---

##### `phase2DHGroupNumbers`<sup>Optional</sup> <a name="phase2DHGroupNumbers" id="raindancers-network.cloudwan.VpnSpecProps.property.phase2DHGroupNumbers"></a>

```typescript
public readonly phase2DHGroupNumbers: Phase2DHGroupNumbers[];
```

- *Type:* raindancers-network.cloudwan.Phase2DHGroupNumbers[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.

---

##### `phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="phase2EncryptionAlgorithms" id="raindancers-network.cloudwan.VpnSpecProps.property.phase2EncryptionAlgorithms"></a>

```typescript
public readonly phase2EncryptionAlgorithms: Phase2EncryptionAlgorithms[];
```

- *Type:* raindancers-network.cloudwan.Phase2EncryptionAlgorithms[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

---

##### `phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="phase2IntegrityAlgorithms" id="raindancers-network.cloudwan.VpnSpecProps.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: Phase2IntegrityAlgorithms[];
```

- *Type:* raindancers-network.cloudwan.Phase2IntegrityAlgorithms[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

---

##### `phase2LifeTimeSeconds`<sup>Optional</sup> <a name="phase2LifeTimeSeconds" id="raindancers-network.cloudwan.VpnSpecProps.property.phase2LifeTimeSeconds"></a>

```typescript
public readonly phase2LifeTimeSeconds: number;
```

- *Type:* number

The lifetime for phase 2 of the IKE negotiation, in seconds.

---

##### `rekeyFuzzPercentage`<sup>Optional</sup> <a name="rekeyFuzzPercentage" id="raindancers-network.cloudwan.VpnSpecProps.property.rekeyFuzzPercentage"></a>

```typescript
public readonly rekeyFuzzPercentage: number;
```

- *Type:* number
- *Default:* 100 The percentage of the rekey window (determined by RekeyMarginTimeSeconds) during which the rekey time is randomly selected.

---

##### `rekeyMarginTimeSeconds`<sup>Optional</sup> <a name="rekeyMarginTimeSeconds" id="raindancers-network.cloudwan.VpnSpecProps.property.rekeyMarginTimeSeconds"></a>

```typescript
public readonly rekeyMarginTimeSeconds: number;
```

- *Type:* number
- *Default:* 540 The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for RekeyFuzzPercentage.

---

##### `remoteIpv4NetworkCidr`<sup>Optional</sup> <a name="remoteIpv4NetworkCidr" id="raindancers-network.cloudwan.VpnSpecProps.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0 The IPv4 CIDR on the Remote side of the VPN connection.

---

##### `replayWindowSize`<sup>Optional</sup> <a name="replayWindowSize" id="raindancers-network.cloudwan.VpnSpecProps.property.replayWindowSize"></a>

```typescript
public readonly replayWindowSize: number;
```

- *Type:* number
- *Default:* 1024 The number of packets in an IKE replay window.

---

##### `startupAction`<sup>Optional</sup> <a name="startupAction" id="raindancers-network.cloudwan.VpnSpecProps.property.startupAction"></a>

```typescript
public readonly startupAction: StartupAction;
```

- *Type:* raindancers-network.cloudwan.StartupAction

The action to take when the establishing the tunnel for the VPN connection.

By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation.

---

##### `staticRoutesOnly`<sup>Optional</sup> <a name="staticRoutesOnly" id="raindancers-network.cloudwan.VpnSpecProps.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

Indicate if this will only use Static Routes Only.

---

##### `tunnelInsideIpVersion`<sup>Optional</sup> <a name="tunnelInsideIpVersion" id="raindancers-network.cloudwan.VpnSpecProps.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: TunnelInsideIpVersion;
```

- *Type:* raindancers-network.cloudwan.TunnelInsideIpVersion
- *Default:* IPV4 Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.

---

## Classes <a name="Classes" id="Classes"></a>

### CrowdStrikePrivateLink <a name="CrowdStrikePrivateLink" id="raindancers-network.crowdstrike.CrowdStrikePrivateLink"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLink.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.crowdstrike.CrowdStrikePrivateLink.toString"></a>

```typescript
public toString(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.value">value</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikeServices</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.value"></a>

```typescript
public readonly value: CrowdStrikeServices;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikeServices

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.EU1">EU1</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikePrivateLink</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.US1">US1</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikePrivateLink</code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.US2">US2</a></code> | <code>raindancers-network.crowdstrike.CrowdStrikePrivateLink</code> | *No description.* |

---

##### `EU1`<sup>Required</sup> <a name="EU1" id="raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.EU1"></a>

```typescript
public readonly EU1: CrowdStrikePrivateLink;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikePrivateLink

---

##### `US1`<sup>Required</sup> <a name="US1" id="raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.US1"></a>

```typescript
public readonly US1: CrowdStrikePrivateLink;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikePrivateLink

---

##### `US2`<sup>Required</sup> <a name="US2" id="raindancers-network.crowdstrike.CrowdStrikePrivateLink.property.US2"></a>

```typescript
public readonly US2: CrowdStrikePrivateLink;
```

- *Type:* raindancers-network.crowdstrike.CrowdStrikePrivateLink

---

### StatelessRule <a name="StatelessRule" id="raindancers-network.firewall.StatelessRule"></a>

#### Initializers <a name="Initializers" id="raindancers-network.firewall.StatelessRule.Initializer"></a>

```typescript
import { firewall } from 'raindancers-network'

new firewall.StatelessRule(props: StatelessRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.StatelessRule.Initializer.parameter.props">props</a></code> | <code>raindancers-network.firewall.StatelessRuleProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.firewall.StatelessRule.Initializer.parameter.props"></a>

- *Type:* raindancers-network.firewall.StatelessRuleProps

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.StatelessRule.property.statelessRuleProperty">statelessRuleProperty</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty</code> | *No description.* |

---

##### `statelessRuleProperty`<sup>Required</sup> <a name="statelessRuleProperty" id="raindancers-network.firewall.StatelessRule.property.statelessRuleProperty"></a>

```typescript
public readonly statelessRuleProperty: StatelessRuleProperty;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnRuleGroup.StatelessRuleProperty

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAssignment <a name="IAssignment" id="raindancers-network.sso.IAssignment"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* raindancers-network.sso.Assignment, raindancers-network.sso.IAssignment

The resource interface for an AWS SSO assignment.

This interface has no attributes because the resulting resource has none.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.IAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.sso.IAssignment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-network.sso.IAssignment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.sso.IAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-network.sso.IAssignment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-network.sso.IAssignment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

### ICoreNetworkSegmentProps <a name="ICoreNetworkSegmentProps" id="raindancers-network.cloudwan.ICoreNetworkSegmentProps"></a>

- *Implemented By:* raindancers-network.cloudwan.ICoreNetworkSegmentProps

Properties creating a Corenetwork Segment.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.cloudwan.ICoreNetworkSegmentProps.property.policyTableServiceToken">policyTableServiceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.ICoreNetworkSegmentProps.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.ICoreNetworkSegmentProps.property.updateDependsOn">updateDependsOn</a></code> | <code>aws-cdk-lib.CustomResource[]</code> | *No description.* |

---

##### `policyTableServiceToken`<sup>Required</sup> <a name="policyTableServiceToken" id="raindancers-network.cloudwan.ICoreNetworkSegmentProps.property.policyTableServiceToken"></a>

```typescript
public readonly policyTableServiceToken: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-network.cloudwan.ICoreNetworkSegmentProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `updateDependsOn`<sup>Required</sup> <a name="updateDependsOn" id="raindancers-network.cloudwan.ICoreNetworkSegmentProps.property.updateDependsOn"></a>

```typescript
public readonly updateDependsOn: CustomResource[];
```

- *Type:* aws-cdk-lib.CustomResource[]

---

### IFirewallPolicyProperty <a name="IFirewallPolicyProperty" id="raindancers-network.firewall.IFirewallPolicyProperty"></a>

- *Implemented By:* raindancers-network.firewall.IFirewallPolicyProperty


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statelessDefaultActions">statelessDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statelessFragmentDefaultActions">statelessFragmentDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statefulDefaultActions">statefulDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statefulEngineOptions">statefulEngineOptions</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statefulRuleGroupReferences">statefulRuleGroupReferences</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulRuleGroupReferenceProperty[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statelessCustomActions">statelessCustomActions</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.CustomActionProperty \| aws-cdk-lib.IResolvable[]</code> | *No description.* |
| <code><a href="#raindancers-network.firewall.IFirewallPolicyProperty.property.statelessRuleGroupReferences">statelessRuleGroupReferences</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatelessRuleGroupReferenceProperty \| aws-cdk-lib.IResolvable[]</code> | *No description.* |

---

##### `statelessDefaultActions`<sup>Required</sup> <a name="statelessDefaultActions" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statelessDefaultActions"></a>

```typescript
public readonly statelessDefaultActions: string[];
```

- *Type:* string[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="statelessFragmentDefaultActions" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statelessFragmentDefaultActions"></a>

```typescript
public readonly statelessFragmentDefaultActions: string[];
```

- *Type:* string[]

---

##### `statefulDefaultActions`<sup>Optional</sup> <a name="statefulDefaultActions" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statefulDefaultActions"></a>

```typescript
public readonly statefulDefaultActions: string[];
```

- *Type:* string[]

---

##### `statefulEngineOptions`<sup>Optional</sup> <a name="statefulEngineOptions" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statefulEngineOptions"></a>

```typescript
public readonly statefulEngineOptions: StatefulEngineOptionsProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulEngineOptionsProperty | aws-cdk-lib.IResolvable

---

##### `statefulRuleGroupReferences`<sup>Optional</sup> <a name="statefulRuleGroupReferences" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statefulRuleGroupReferences"></a>

```typescript
public readonly statefulRuleGroupReferences: StatefulRuleGroupReferenceProperty[];
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatefulRuleGroupReferenceProperty[]

---

##### `statelessCustomActions`<sup>Optional</sup> <a name="statelessCustomActions" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statelessCustomActions"></a>

```typescript
public readonly statelessCustomActions: IResolvable | CustomActionProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.CustomActionProperty | aws-cdk-lib.IResolvable[]

---

##### `statelessRuleGroupReferences`<sup>Optional</sup> <a name="statelessRuleGroupReferences" id="raindancers-network.firewall.IFirewallPolicyProperty.property.statelessRuleGroupReferences"></a>

```typescript
public readonly statelessRuleGroupReferences: IResolvable | StatelessRuleGroupReferenceProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy.StatelessRuleGroupReferenceProperty | aws-cdk-lib.IResolvable[]

---

### IJDBCTargetObject <a name="IJDBCTargetObject" id="raindancers-network.glue.IJDBCTargetObject"></a>

- *Implemented By:* raindancers-network.glue.IJDBCTargetObject


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.IJDBCTargetObject.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IJDBCTargetObject.property.enableAdditionalMetadata">enableAdditionalMetadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IJDBCTargetObject.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IJDBCTargetObject.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="raindancers-network.glue.IJDBCTargetObject.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `enableAdditionalMetadata`<sup>Optional</sup> <a name="enableAdditionalMetadata" id="raindancers-network.glue.IJDBCTargetObject.property.enableAdditionalMetadata"></a>

```typescript
public readonly enableAdditionalMetadata: string[];
```

- *Type:* string[]

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="raindancers-network.glue.IJDBCTargetObject.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `path`<sup>Optional</sup> <a name="path" id="raindancers-network.glue.IJDBCTargetObject.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

### IPermissionSet <a name="IPermissionSet" id="raindancers-network.sso.IPermissionSet"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* raindancers-network.sso.PermissionSet, raindancers-network.sso.IPermissionSet

The resource interface for an AWS SSO permission set.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.IPermissionSet.grant">grant</a></code> | Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance. |

---

##### `grant` <a name="grant" id="raindancers-network.sso.IPermissionSet.grant"></a>

```typescript
public grant(id: string, assignmentOptions: AssignmentOptions): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.sso.IPermissionSet.grant.parameter.id"></a>

- *Type:* string

---

###### `assignmentOptions`<sup>Required</sup> <a name="assignmentOptions" id="raindancers-network.sso.IPermissionSet.grant.parameter.assignmentOptions"></a>

- *Type:* raindancers-network.sso.AssignmentOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.sso.IPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.sso.IPermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-network.sso.IPermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-network.sso.IPermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#raindancers-network.sso.IPermissionSet.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance ARN of the permission set. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.sso.IPermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-network.sso.IPermissionSet.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-network.sso.IPermissionSet.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="raindancers-network.sso.IPermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

Such as
`arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="raindancers-network.sso.IPermissionSet.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance ARN of the permission set.

---

### IS3TargetObject <a name="IS3TargetObject" id="raindancers-network.glue.IS3TargetObject"></a>

- *Implemented By:* raindancers-network.glue.IS3TargetObject


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.glue.IS3TargetObject.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IS3TargetObject.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IS3TargetObject.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IS3TargetObject.property.eventQueueArn">eventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IS3TargetObject.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.glue.IS3TargetObject.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="raindancers-network.glue.IS3TargetObject.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="raindancers-network.glue.IS3TargetObject.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `dlqEventQueueArn`<sup>Optional</sup> <a name="dlqEventQueueArn" id="raindancers-network.glue.IS3TargetObject.property.dlqEventQueueArn"></a>

```typescript
public readonly dlqEventQueueArn: string;
```

- *Type:* string

---

##### `eventQueueArn`<sup>Optional</sup> <a name="eventQueueArn" id="raindancers-network.glue.IS3TargetObject.property.eventQueueArn"></a>

```typescript
public readonly eventQueueArn: string;
```

- *Type:* string

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="raindancers-network.glue.IS3TargetObject.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="raindancers-network.glue.IS3TargetObject.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

## Enums <a name="Enums" id="Enums"></a>

### ApplianceMode <a name="ApplianceMode" id="raindancers-network.network.ApplianceMode"></a>

Propertys for Appliance Mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.ApplianceMode.ENABLED">ENABLED</a></code> | enable Connecting VPC to TransitGateway in Appliance Mode. |

---

##### `ENABLED` <a name="ENABLED" id="raindancers-network.network.ApplianceMode.ENABLED"></a>

enable Connecting VPC to TransitGateway in Appliance Mode.

---


### AssociationMethod <a name="AssociationMethod" id="raindancers-network.cloudwan.AssociationMethod"></a>

Association Methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.AssociationMethod.CONSTANT">CONSTANT</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AssociationMethod.TAG">TAG</a></code> | *No description.* |

---

##### `CONSTANT` <a name="CONSTANT" id="raindancers-network.cloudwan.AssociationMethod.CONSTANT"></a>

---


##### `TAG` <a name="TAG" id="raindancers-network.cloudwan.AssociationMethod.TAG"></a>

---


### AttachmentCondition <a name="AttachmentCondition" id="raindancers-network.cloudwan.AttachmentCondition"></a>

Attachment Conditions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.ANY">ANY</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.RESOURCE_ID">RESOURCE_ID</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.ACCOUNT_ID">ACCOUNT_ID</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.REGION">REGION</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.ATTACHMENT_TYPE">ATTACHMENT_TYPE</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.TAG_EXISTS">TAG_EXISTS</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.AttachmentCondition.TAG_VALUE">TAG_VALUE</a></code> | *No description.* |

---

##### `ANY` <a name="ANY" id="raindancers-network.cloudwan.AttachmentCondition.ANY"></a>

---


##### `RESOURCE_ID` <a name="RESOURCE_ID" id="raindancers-network.cloudwan.AttachmentCondition.RESOURCE_ID"></a>

---


##### `ACCOUNT_ID` <a name="ACCOUNT_ID" id="raindancers-network.cloudwan.AttachmentCondition.ACCOUNT_ID"></a>

---


##### `REGION` <a name="REGION" id="raindancers-network.cloudwan.AttachmentCondition.REGION"></a>

---


##### `ATTACHMENT_TYPE` <a name="ATTACHMENT_TYPE" id="raindancers-network.cloudwan.AttachmentCondition.ATTACHMENT_TYPE"></a>

---


##### `TAG_EXISTS` <a name="TAG_EXISTS" id="raindancers-network.cloudwan.AttachmentCondition.TAG_EXISTS"></a>

---


##### `TAG_VALUE` <a name="TAG_VALUE" id="raindancers-network.cloudwan.AttachmentCondition.TAG_VALUE"></a>

---


### AwsRegions <a name="AwsRegions" id="raindancers-network.regions.AwsRegions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.regions.AwsRegions.US_EAST_1">US_EAST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.US_EAST_2">US_EAST_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.US_WEST_1">US_WEST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.US_WEST_2">US_WEST_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AF_SOUTH_1">AF_SOUTH_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_EAST_1">AP_EAST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_SOUTH_1">AP_SOUTH_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_SOUTH_2">AP_SOUTH_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_SOUTHEAST_1">AP_SOUTHEAST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_SOUTHEAST_2">AP_SOUTHEAST_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_SOUTHEAST_3">AP_SOUTHEAST_3</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_SOUTHEAST_4">AP_SOUTHEAST_4</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_NORTHEAST_1">AP_NORTHEAST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_NORTHEAST_2">AP_NORTHEAST_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.AP_NORTHEAST_3">AP_NORTHEAST_3</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.CA_CENTRAL_1">CA_CENTRAL_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_SOUTH_1">EU_SOUTH_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_WEST_1">EU_WEST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_WEST_2">EU_WEST_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_WEST_3">EU_WEST_3</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_SOUTH_2">EU_SOUTH_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_NORTH_1">EU_NORTH_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_CENTRAL_1">EU_CENTRAL_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.EU_CENTRAL_2">EU_CENTRAL_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.ME_SOUTH_1">ME_SOUTH_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.ME_CENTRAL">ME_CENTRAL</a></code> | *No description.* |
| <code><a href="#raindancers-network.regions.AwsRegions.SA_EAST_1">SA_EAST_1</a></code> | *No description.* |

---

##### `US_EAST_1` <a name="US_EAST_1" id="raindancers-network.regions.AwsRegions.US_EAST_1"></a>

---


##### `US_EAST_2` <a name="US_EAST_2" id="raindancers-network.regions.AwsRegions.US_EAST_2"></a>

---


##### `US_WEST_1` <a name="US_WEST_1" id="raindancers-network.regions.AwsRegions.US_WEST_1"></a>

---


##### `US_WEST_2` <a name="US_WEST_2" id="raindancers-network.regions.AwsRegions.US_WEST_2"></a>

---


##### `AF_SOUTH_1` <a name="AF_SOUTH_1" id="raindancers-network.regions.AwsRegions.AF_SOUTH_1"></a>

---


##### `AP_EAST_1` <a name="AP_EAST_1" id="raindancers-network.regions.AwsRegions.AP_EAST_1"></a>

---


##### `AP_SOUTH_1` <a name="AP_SOUTH_1" id="raindancers-network.regions.AwsRegions.AP_SOUTH_1"></a>

---


##### `AP_SOUTH_2` <a name="AP_SOUTH_2" id="raindancers-network.regions.AwsRegions.AP_SOUTH_2"></a>

---


##### `AP_SOUTHEAST_1` <a name="AP_SOUTHEAST_1" id="raindancers-network.regions.AwsRegions.AP_SOUTHEAST_1"></a>

---


##### `AP_SOUTHEAST_2` <a name="AP_SOUTHEAST_2" id="raindancers-network.regions.AwsRegions.AP_SOUTHEAST_2"></a>

---


##### `AP_SOUTHEAST_3` <a name="AP_SOUTHEAST_3" id="raindancers-network.regions.AwsRegions.AP_SOUTHEAST_3"></a>

---


##### `AP_SOUTHEAST_4` <a name="AP_SOUTHEAST_4" id="raindancers-network.regions.AwsRegions.AP_SOUTHEAST_4"></a>

---


##### `AP_NORTHEAST_1` <a name="AP_NORTHEAST_1" id="raindancers-network.regions.AwsRegions.AP_NORTHEAST_1"></a>

---


##### `AP_NORTHEAST_2` <a name="AP_NORTHEAST_2" id="raindancers-network.regions.AwsRegions.AP_NORTHEAST_2"></a>

---


##### `AP_NORTHEAST_3` <a name="AP_NORTHEAST_3" id="raindancers-network.regions.AwsRegions.AP_NORTHEAST_3"></a>

---


##### `CA_CENTRAL_1` <a name="CA_CENTRAL_1" id="raindancers-network.regions.AwsRegions.CA_CENTRAL_1"></a>

---


##### `EU_SOUTH_1` <a name="EU_SOUTH_1" id="raindancers-network.regions.AwsRegions.EU_SOUTH_1"></a>

---


##### `EU_WEST_1` <a name="EU_WEST_1" id="raindancers-network.regions.AwsRegions.EU_WEST_1"></a>

---


##### `EU_WEST_2` <a name="EU_WEST_2" id="raindancers-network.regions.AwsRegions.EU_WEST_2"></a>

---


##### `EU_WEST_3` <a name="EU_WEST_3" id="raindancers-network.regions.AwsRegions.EU_WEST_3"></a>

---


##### `EU_SOUTH_2` <a name="EU_SOUTH_2" id="raindancers-network.regions.AwsRegions.EU_SOUTH_2"></a>

---


##### `EU_NORTH_1` <a name="EU_NORTH_1" id="raindancers-network.regions.AwsRegions.EU_NORTH_1"></a>

---


##### `EU_CENTRAL_1` <a name="EU_CENTRAL_1" id="raindancers-network.regions.AwsRegions.EU_CENTRAL_1"></a>

---


##### `EU_CENTRAL_2` <a name="EU_CENTRAL_2" id="raindancers-network.regions.AwsRegions.EU_CENTRAL_2"></a>

---


##### `ME_SOUTH_1` <a name="ME_SOUTH_1" id="raindancers-network.regions.AwsRegions.ME_SOUTH_1"></a>

---


##### `ME_CENTRAL` <a name="ME_CENTRAL" id="raindancers-network.regions.AwsRegions.ME_CENTRAL"></a>

---


##### `SA_EAST_1` <a name="SA_EAST_1" id="raindancers-network.regions.AwsRegions.SA_EAST_1"></a>

---


### ConditionLogic <a name="ConditionLogic" id="raindancers-network.cloudwan.ConditionLogic"></a>

Conditon Logic.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.ConditionLogic.AND">AND</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.ConditionLogic.OR">OR</a></code> | *No description.* |

---

##### `AND` <a name="AND" id="raindancers-network.cloudwan.ConditionLogic.AND"></a>

---


##### `OR` <a name="OR" id="raindancers-network.cloudwan.ConditionLogic.OR"></a>

---


### CrawlerLineageSettings <a name="CrawlerLineageSettings" id="raindancers-network.glue.CrawlerLineageSettings"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.CrawlerLineageSettings.ENABLE">ENABLE</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.CrawlerLineageSettings.DISABLE">DISABLE</a></code> | *No description.* |

---

##### `ENABLE` <a name="ENABLE" id="raindancers-network.glue.CrawlerLineageSettings.ENABLE"></a>

---


##### `DISABLE` <a name="DISABLE" id="raindancers-network.glue.CrawlerLineageSettings.DISABLE"></a>

---


### CrowdStrikeCloud <a name="CrowdStrikeCloud" id="raindancers-network.crowdstrike.CrowdStrikeCloud"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeCloud.US1">US1</a></code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeCloud.US2">US2</a></code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeCloud.EU1">EU1</a></code> | *No description.* |

---

##### `US1` <a name="US1" id="raindancers-network.crowdstrike.CrowdStrikeCloud.US1"></a>

---


##### `US2` <a name="US2" id="raindancers-network.crowdstrike.CrowdStrikeCloud.US2"></a>

---


##### `EU1` <a name="EU1" id="raindancers-network.crowdstrike.CrowdStrikeCloud.EU1"></a>

---


### CrowdStrikeRegion <a name="CrowdStrikeRegion" id="raindancers-network.crowdstrike.CrowdStrikeRegion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeRegion.US_WEST_1">US_WEST_1</a></code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeRegion.US_WEST_2">US_WEST_2</a></code> | *No description.* |
| <code><a href="#raindancers-network.crowdstrike.CrowdStrikeRegion.EU_CENTRAL_1">EU_CENTRAL_1</a></code> | *No description.* |

---

##### `US_WEST_1` <a name="US_WEST_1" id="raindancers-network.crowdstrike.CrowdStrikeRegion.US_WEST_1"></a>

---


##### `US_WEST_2` <a name="US_WEST_2" id="raindancers-network.crowdstrike.CrowdStrikeRegion.US_WEST_2"></a>

---


##### `EU_CENTRAL_1` <a name="EU_CENTRAL_1" id="raindancers-network.crowdstrike.CrowdStrikeRegion.EU_CENTRAL_1"></a>

---


### DeleteBehavior <a name="DeleteBehavior" id="raindancers-network.glue.DeleteBehavior"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.DeleteBehavior.LOG">LOG</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.DeleteBehavior.DELETE_FROM_DATABASE">DELETE_FROM_DATABASE</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.DeleteBehavior.DEPRECATE_IN_DATABASE">DEPRECATE_IN_DATABASE</a></code> | *No description.* |

---

##### `LOG` <a name="LOG" id="raindancers-network.glue.DeleteBehavior.LOG"></a>

---


##### `DELETE_FROM_DATABASE` <a name="DELETE_FROM_DATABASE" id="raindancers-network.glue.DeleteBehavior.DELETE_FROM_DATABASE"></a>

---


##### `DEPRECATE_IN_DATABASE` <a name="DEPRECATE_IN_DATABASE" id="raindancers-network.glue.DeleteBehavior.DEPRECATE_IN_DATABASE"></a>

---


### Destination <a name="Destination" id="raindancers-network.network.Destination"></a>

The Destinations for Adding Routes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.Destination.CLOUDWAN">CLOUDWAN</a></code> | route to the cloudwan that the vpc is attached to. |
| <code><a href="#raindancers-network.network.Destination.TRANSITGATEWAY">TRANSITGATEWAY</a></code> | route to the transitGateway that the vpc is attached to. |
| <code><a href="#raindancers-network.network.Destination.NWFIREWALL">NWFIREWALL</a></code> | *No description.* |

---

##### `CLOUDWAN` <a name="CLOUDWAN" id="raindancers-network.network.Destination.CLOUDWAN"></a>

route to the cloudwan that the vpc is attached to.

---


##### `TRANSITGATEWAY` <a name="TRANSITGATEWAY" id="raindancers-network.network.Destination.TRANSITGATEWAY"></a>

route to the transitGateway that the vpc is attached to.

---


##### `NWFIREWALL` <a name="NWFIREWALL" id="raindancers-network.network.Destination.NWFIREWALL"></a>

---


### DNSFirewallActions <a name="DNSFirewallActions" id="raindancers-network.dns.DNSFirewallActions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.DNSFirewallActions.ALLOW">ALLOW</a></code> | *No description.* |
| <code><a href="#raindancers-network.dns.DNSFirewallActions.BLOCK">BLOCK</a></code> | *No description.* |
| <code><a href="#raindancers-network.dns.DNSFirewallActions.ALERT">ALERT</a></code> | *No description.* |

---

##### `ALLOW` <a name="ALLOW" id="raindancers-network.dns.DNSFirewallActions.ALLOW"></a>

---


##### `BLOCK` <a name="BLOCK" id="raindancers-network.dns.DNSFirewallActions.BLOCK"></a>

---


##### `ALERT` <a name="ALERT" id="raindancers-network.dns.DNSFirewallActions.ALERT"></a>

---


### DNSFirewallBlockResponse <a name="DNSFirewallBlockResponse" id="raindancers-network.dns.DNSFirewallBlockResponse"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.DNSFirewallBlockResponse.NODATA">NODATA</a></code> | *No description.* |
| <code><a href="#raindancers-network.dns.DNSFirewallBlockResponse.NXDOMAIN">NXDOMAIN</a></code> | *No description.* |
| <code><a href="#raindancers-network.dns.DNSFirewallBlockResponse.OVERRIDE">OVERRIDE</a></code> | *No description.* |

---

##### `NODATA` <a name="NODATA" id="raindancers-network.dns.DNSFirewallBlockResponse.NODATA"></a>

---


##### `NXDOMAIN` <a name="NXDOMAIN" id="raindancers-network.dns.DNSFirewallBlockResponse.NXDOMAIN"></a>

---


##### `OVERRIDE` <a name="OVERRIDE" id="raindancers-network.dns.DNSFirewallBlockResponse.OVERRIDE"></a>

---


### DPDTimeoutAction <a name="DPDTimeoutAction" id="raindancers-network.cloudwan.DPDTimeoutAction"></a>

Dead Peer Detection Timeout Actions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.DPDTimeoutAction.CLEAR">CLEAR</a></code> | Clear the Session. |
| <code><a href="#raindancers-network.cloudwan.DPDTimeoutAction.NONE">NONE</a></code> | Do nothing. |
| <code><a href="#raindancers-network.cloudwan.DPDTimeoutAction.RESTART">RESTART</a></code> | Restart The Session. |

---

##### `CLEAR` <a name="CLEAR" id="raindancers-network.cloudwan.DPDTimeoutAction.CLEAR"></a>

Clear the Session.

---


##### `NONE` <a name="NONE" id="raindancers-network.cloudwan.DPDTimeoutAction.NONE"></a>

Do nothing.

---


##### `RESTART` <a name="RESTART" id="raindancers-network.cloudwan.DPDTimeoutAction.RESTART"></a>

Restart The Session.

---


### GlueClassifierType <a name="GlueClassifierType" id="raindancers-network.glue.GlueClassifierType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.GlueClassifierType.CSV">CSV</a></code> | A classifier for comma-separated values (CSV). |
| <code><a href="#raindancers-network.glue.GlueClassifierType.GROK">GROK</a></code> | A classifier that uses grok. |
| <code><a href="#raindancers-network.glue.GlueClassifierType.JSON">JSON</a></code> | A classifier for JSON content. |
| <code><a href="#raindancers-network.glue.GlueClassifierType.XML">XML</a></code> | A classifier for XML content. |

---

##### `CSV` <a name="CSV" id="raindancers-network.glue.GlueClassifierType.CSV"></a>

A classifier for comma-separated values (CSV).

---


##### `GROK` <a name="GROK" id="raindancers-network.glue.GlueClassifierType.GROK"></a>

A classifier that uses grok.

---


##### `JSON` <a name="JSON" id="raindancers-network.glue.GlueClassifierType.JSON"></a>

A classifier for JSON content.

---


##### `XML` <a name="XML" id="raindancers-network.glue.GlueClassifierType.XML"></a>

A classifier for XML content.

---


### IkeVersion <a name="IkeVersion" id="raindancers-network.cloudwan.IkeVersion"></a>

Ike Version for S2S VPN.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.IkeVersion.IKEV1">IKEV1</a></code> | Use IKEv1. |
| <code><a href="#raindancers-network.cloudwan.IkeVersion.IKEV2">IKEV2</a></code> | Use IKEv2. |

---

##### `IKEV1` <a name="IKEV1" id="raindancers-network.cloudwan.IkeVersion.IKEV1"></a>

Use IKEv1.

---


##### `IKEV2` <a name="IKEV2" id="raindancers-network.cloudwan.IkeVersion.IKEV2"></a>

Use IKEv2.

---


### ManagedAwsFirewallRules <a name="ManagedAwsFirewallRules" id="raindancers-network.firewall.ManagedAwsFirewallRules"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER">ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER">ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.MALWARE_DOMAINS_ACTION_ORDER">MALWARE_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER">BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_ACTION_ORDER">THREAT_SIGNATURES_BOTNET_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER">THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ODER">THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ODER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_DOS_ACTION_ORDER">THREAT_SIGNATURES_DOS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER">THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER">THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_FUP_ACTION_ORDER">THREAT_SIGNATURES_FUP_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_IOC_ACTION_ORDER">THREAT_SIGNATURES_IOC_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_ACTION_ORDER">THREAT_SIGNATURES_MALWARE_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER">THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER">THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER">THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_PHISHING_ACTION_ORDER">THREAT_SIGNATURES_PHISHING_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SCANNERS_ACTION_ORDER">THREAT_SIGNATURES_SCANNERS_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SUSPECT_ACTION_ORDER">THREAT_SIGNATURES_SUSPECT_ACTION_ORDER</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER">THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER</a></code> | *No description.* |

---

##### `ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER` <a name="ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.ABUSED_LEGIT_MALWARE_DOMAINS_ACTION_ORDER"></a>

---


##### `ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER` <a name="ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.ABUSED_LEGIT_BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER"></a>

---


##### `MALWARE_DOMAINS_ACTION_ORDER` <a name="MALWARE_DOMAINS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.MALWARE_DOMAINS_ACTION_ORDER"></a>

---


##### `BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER` <a name="BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.BOTNET_COMMAND_AND_CONTROL_DOMAINS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_BOTNET_ACTION_ORDER` <a name="THREAT_SIGNATURES_BOTNET_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER` <a name="THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WEB_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ODER` <a name="THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ODER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_BOTNET_WINDOWS_ACTION_ODER"></a>

---


##### `THREAT_SIGNATURES_DOS_ACTION_ORDER` <a name="THREAT_SIGNATURES_DOS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_DOS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER` <a name="THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EMERGING_EVENTS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER` <a name="THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_EXPLOITS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_FUP_ACTION_ORDER` <a name="THREAT_SIGNATURES_FUP_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_FUP_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_IOC_ACTION_ORDER` <a name="THREAT_SIGNATURES_IOC_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_IOC_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MALWARE_ACTION_ORDER` <a name="THREAT_SIGNATURES_MALWARE_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER` <a name="THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_COIN_MINING_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER` <a name="THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MAWLARE_WEB_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER` <a name="THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_MALWARE_MOBILE_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_PHISHING_ACTION_ORDER` <a name="THREAT_SIGNATURES_PHISHING_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_PHISHING_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_SCANNERS_ACTION_ORDER` <a name="THREAT_SIGNATURES_SCANNERS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SCANNERS_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_SUSPECT_ACTION_ORDER` <a name="THREAT_SIGNATURES_SUSPECT_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_SUSPECT_ACTION_ORDER"></a>

---


##### `THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER` <a name="THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER" id="raindancers-network.firewall.ManagedAwsFirewallRules.THREAT_SIGNATURES_WEB_ATTACKS_ACTION_ORDER"></a>

---


### MetaDataTypes <a name="MetaDataTypes" id="raindancers-network.glue.MetaDataTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.MetaDataTypes.COMMENTS">COMMENTS</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.MetaDataTypes.RAWTYPES">RAWTYPES</a></code> | *No description.* |

---

##### `COMMENTS` <a name="COMMENTS" id="raindancers-network.glue.MetaDataTypes.COMMENTS"></a>

---


##### `RAWTYPES` <a name="RAWTYPES" id="raindancers-network.glue.MetaDataTypes.RAWTYPES"></a>

---


### Operators <a name="Operators" id="raindancers-network.cloudwan.Operators"></a>

Operatior COnditons for Attachments.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Operators.EQUALS">EQUALS</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Operators.NOTEQUALS">NOTEQUALS</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Operators.CONTAINS">CONTAINS</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Operators.BEGINS_WITH">BEGINS_WITH</a></code> | *No description.* |

---

##### `EQUALS` <a name="EQUALS" id="raindancers-network.cloudwan.Operators.EQUALS"></a>

---


##### `NOTEQUALS` <a name="NOTEQUALS" id="raindancers-network.cloudwan.Operators.NOTEQUALS"></a>

---


##### `CONTAINS` <a name="CONTAINS" id="raindancers-network.cloudwan.Operators.CONTAINS"></a>

---


##### `BEGINS_WITH` <a name="BEGINS_WITH" id="raindancers-network.cloudwan.Operators.BEGINS_WITH"></a>

---


### OutsideIpAddressType <a name="OutsideIpAddressType" id="raindancers-network.cloudwan.OutsideIpAddressType"></a>

Specify the use of public or private IP address's for Site to Site VPN.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.OutsideIpAddressType.PRIVATE">PRIVATE</a></code> | Use Private IPv4 Address from the Transit Gateways IP address Pool. |
| <code><a href="#raindancers-network.cloudwan.OutsideIpAddressType.PUBLIC">PUBLIC</a></code> | Use Public IPv4 Address Assigned by AWS. |

---

##### `PRIVATE` <a name="PRIVATE" id="raindancers-network.cloudwan.OutsideIpAddressType.PRIVATE"></a>

Use Private IPv4 Address from the Transit Gateways IP address Pool.

---


##### `PUBLIC` <a name="PUBLIC" id="raindancers-network.cloudwan.OutsideIpAddressType.PUBLIC"></a>

Use Public IPv4 Address Assigned by AWS.

---


### Permissions <a name="Permissions" id="raindancers-network.lakeformation.Permissions"></a>

Permissions that can be used as part of a LakeFormation Permissions refer https://docs.aws.amazon.com/lake-formation/latest/APIReference/API_GrantPermissions.html.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.lakeformation.Permissions.ALL">ALL</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.SELECT">SELECT</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.ALTER">ALTER</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.DROP">DROP</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.DELETE">DELETE</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.INSERT">INSERT</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.DESCRIBE">DESCRIBE</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.CREATE_DATABASE">CREATE_DATABASE</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.CREATE_TABLE">CREATE_TABLE</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.DATA_LOCATION_ACCESS">DATA_LOCATION_ACCESS</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.CREATE_TAG">CREATE_TAG</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.ASSOCIATE">ASSOCIATE</a></code> | *No description.* |
| <code><a href="#raindancers-network.lakeformation.Permissions.CREATE_TABLE_READ_WRITE">CREATE_TABLE_READ_WRITE</a></code> | *No description.* |

---

##### `ALL` <a name="ALL" id="raindancers-network.lakeformation.Permissions.ALL"></a>

---


##### `SELECT` <a name="SELECT" id="raindancers-network.lakeformation.Permissions.SELECT"></a>

---


##### `ALTER` <a name="ALTER" id="raindancers-network.lakeformation.Permissions.ALTER"></a>

---


##### `DROP` <a name="DROP" id="raindancers-network.lakeformation.Permissions.DROP"></a>

---


##### `DELETE` <a name="DELETE" id="raindancers-network.lakeformation.Permissions.DELETE"></a>

---


##### `INSERT` <a name="INSERT" id="raindancers-network.lakeformation.Permissions.INSERT"></a>

---


##### `DESCRIBE` <a name="DESCRIBE" id="raindancers-network.lakeformation.Permissions.DESCRIBE"></a>

---


##### `CREATE_DATABASE` <a name="CREATE_DATABASE" id="raindancers-network.lakeformation.Permissions.CREATE_DATABASE"></a>

---


##### `CREATE_TABLE` <a name="CREATE_TABLE" id="raindancers-network.lakeformation.Permissions.CREATE_TABLE"></a>

---


##### `DATA_LOCATION_ACCESS` <a name="DATA_LOCATION_ACCESS" id="raindancers-network.lakeformation.Permissions.DATA_LOCATION_ACCESS"></a>

---


##### `CREATE_TAG` <a name="CREATE_TAG" id="raindancers-network.lakeformation.Permissions.CREATE_TAG"></a>

---


##### `ASSOCIATE` <a name="ASSOCIATE" id="raindancers-network.lakeformation.Permissions.ASSOCIATE"></a>

---


##### `CREATE_TABLE_READ_WRITE` <a name="CREATE_TABLE_READ_WRITE" id="raindancers-network.lakeformation.Permissions.CREATE_TABLE_READ_WRITE"></a>

---


### Phase1DHGroupNumbers <a name="Phase1DHGroupNumbers" id="raindancers-network.cloudwan.Phase1DHGroupNumbers"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH2">DH2</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH14">DH14</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH15">DH15</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH16">DH16</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH17">DH17</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH18">DH18</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH19">DH19</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH20">DH20</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH21">DH21</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH22">DH22</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH23">DH23</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1DHGroupNumbers.DH24">DH24</a></code> | *No description.* |

---

##### `DH2` <a name="DH2" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH2"></a>

---


##### `DH14` <a name="DH14" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH14"></a>

---


##### `DH15` <a name="DH15" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH15"></a>

---


##### `DH16` <a name="DH16" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH16"></a>

---


##### `DH17` <a name="DH17" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH17"></a>

---


##### `DH18` <a name="DH18" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH18"></a>

---


##### `DH19` <a name="DH19" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH19"></a>

---


##### `DH20` <a name="DH20" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH20"></a>

---


##### `DH21` <a name="DH21" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH21"></a>

---


##### `DH22` <a name="DH22" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH22"></a>

---


##### `DH23` <a name="DH23" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH23"></a>

---


##### `DH24` <a name="DH24" id="raindancers-network.cloudwan.Phase1DHGroupNumbers.DH24"></a>

---


### Phase1EncryptionAlgorithms <a name="Phase1EncryptionAlgorithms" id="raindancers-network.cloudwan.Phase1EncryptionAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES128">AES128</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES256">AES256</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES128_GCM_16">AES128_GCM_16</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES256_GCM_16">AES256_GCM_16</a></code> | *No description.* |

---

##### `AES128` <a name="AES128" id="raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES128"></a>

---


##### `AES256` <a name="AES256" id="raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES256"></a>

---


##### `AES128_GCM_16` <a name="AES128_GCM_16" id="raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES128_GCM_16"></a>

---


##### `AES256_GCM_16` <a name="AES256_GCM_16" id="raindancers-network.cloudwan.Phase1EncryptionAlgorithms.AES256_GCM_16"></a>

---


### Phase1IntegrityAlgorithms <a name="Phase1IntegrityAlgorithms" id="raindancers-network.cloudwan.Phase1IntegrityAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA1">SHA1</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA2_256">SHA2_256</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA2_384">SHA2_384</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA2_512">SHA2_512</a></code> | *No description.* |

---

##### `SHA1` <a name="SHA1" id="raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA1"></a>

---


##### `SHA2_256` <a name="SHA2_256" id="raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA2_256"></a>

---


##### `SHA2_384` <a name="SHA2_384" id="raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA2_384"></a>

---


##### `SHA2_512` <a name="SHA2_512" id="raindancers-network.cloudwan.Phase1IntegrityAlgorithms.SHA2_512"></a>

---


### Phase2DHGroupNumbers <a name="Phase2DHGroupNumbers" id="raindancers-network.cloudwan.Phase2DHGroupNumbers"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH2">DH2</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH5">DH5</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH14">DH14</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH15">DH15</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH16">DH16</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH17">DH17</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH18">DH18</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH19">DH19</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH20">DH20</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH21">DH21</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH22">DH22</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH23">DH23</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2DHGroupNumbers.DH24">DH24</a></code> | *No description.* |

---

##### `DH2` <a name="DH2" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH2"></a>

---


##### `DH5` <a name="DH5" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH5"></a>

---


##### `DH14` <a name="DH14" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH14"></a>

---


##### `DH15` <a name="DH15" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH15"></a>

---


##### `DH16` <a name="DH16" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH16"></a>

---


##### `DH17` <a name="DH17" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH17"></a>

---


##### `DH18` <a name="DH18" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH18"></a>

---


##### `DH19` <a name="DH19" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH19"></a>

---


##### `DH20` <a name="DH20" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH20"></a>

---


##### `DH21` <a name="DH21" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH21"></a>

---


##### `DH22` <a name="DH22" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH22"></a>

---


##### `DH23` <a name="DH23" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH23"></a>

---


##### `DH24` <a name="DH24" id="raindancers-network.cloudwan.Phase2DHGroupNumbers.DH24"></a>

---


### Phase2EncryptionAlgorithms <a name="Phase2EncryptionAlgorithms" id="raindancers-network.cloudwan.Phase2EncryptionAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES128">AES128</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES256">AES256</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES128_GCM_16">AES128_GCM_16</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES256_GCM_16">AES256_GCM_16</a></code> | *No description.* |

---

##### `AES128` <a name="AES128" id="raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES128"></a>

---


##### `AES256` <a name="AES256" id="raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES256"></a>

---


##### `AES128_GCM_16` <a name="AES128_GCM_16" id="raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES128_GCM_16"></a>

---


##### `AES256_GCM_16` <a name="AES256_GCM_16" id="raindancers-network.cloudwan.Phase2EncryptionAlgorithms.AES256_GCM_16"></a>

---


### Phase2IntegrityAlgorithms <a name="Phase2IntegrityAlgorithms" id="raindancers-network.cloudwan.Phase2IntegrityAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA1">SHA1</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA2_256">SHA2_256</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA2_384">SHA2_384</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA2_512">SHA2_512</a></code> | *No description.* |

---

##### `SHA1` <a name="SHA1" id="raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA1"></a>

---


##### `SHA2_256` <a name="SHA2_256" id="raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA2_256"></a>

---


##### `SHA2_384` <a name="SHA2_384" id="raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA2_384"></a>

---


##### `SHA2_512` <a name="SHA2_512" id="raindancers-network.cloudwan.Phase2IntegrityAlgorithms.SHA2_512"></a>

---


### PrincipalTypes <a name="PrincipalTypes" id="raindancers-network.sso.PrincipalTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.PrincipalTypes.USER">USER</a></code> | *No description.* |
| <code><a href="#raindancers-network.sso.PrincipalTypes.GROUP">GROUP</a></code> | *No description.* |

---

##### `USER` <a name="USER" id="raindancers-network.sso.PrincipalTypes.USER"></a>

---


##### `GROUP` <a name="GROUP" id="raindancers-network.sso.PrincipalTypes.GROUP"></a>

---


### Protocol <a name="Protocol" id="raindancers-network.firewall.Protocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.Protocol.ICMP">ICMP</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.Protocol.TCP">TCP</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.Protocol.UDP">UDP</a></code> | *No description.* |

---

##### `ICMP` <a name="ICMP" id="raindancers-network.firewall.Protocol.ICMP"></a>

---


##### `TCP` <a name="TCP" id="raindancers-network.firewall.Protocol.TCP"></a>

---


##### `UDP` <a name="UDP" id="raindancers-network.firewall.Protocol.UDP"></a>

---


### RecrawlBehavior <a name="RecrawlBehavior" id="raindancers-network.glue.RecrawlBehavior"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.RecrawlBehavior.CRAWL_EVERYTHING">CRAWL_EVERYTHING</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.RecrawlBehavior.CRAWL_NEW_FOLDERS_ONLY">CRAWL_NEW_FOLDERS_ONLY</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.RecrawlBehavior.CRAWL_EVENT_MODE">CRAWL_EVENT_MODE</a></code> | *No description.* |

---

##### `CRAWL_EVERYTHING` <a name="CRAWL_EVERYTHING" id="raindancers-network.glue.RecrawlBehavior.CRAWL_EVERYTHING"></a>

---


##### `CRAWL_NEW_FOLDERS_ONLY` <a name="CRAWL_NEW_FOLDERS_ONLY" id="raindancers-network.glue.RecrawlBehavior.CRAWL_NEW_FOLDERS_ONLY"></a>

---


##### `CRAWL_EVENT_MODE` <a name="CRAWL_EVENT_MODE" id="raindancers-network.glue.RecrawlBehavior.CRAWL_EVENT_MODE"></a>

---


### ResolverDirection <a name="ResolverDirection" id="raindancers-network.dns.ResolverDirection"></a>

Direction of Resolver.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.dns.ResolverDirection.INBOUND">INBOUND</a></code> | Resolver is Inbound. |
| <code><a href="#raindancers-network.dns.ResolverDirection.OUTBOUND">OUTBOUND</a></code> | Resolver is outbound. |

---

##### `INBOUND` <a name="INBOUND" id="raindancers-network.dns.ResolverDirection.INBOUND"></a>

Resolver is Inbound.

---


##### `OUTBOUND` <a name="OUTBOUND" id="raindancers-network.dns.ResolverDirection.OUTBOUND"></a>

Resolver is outbound.

---


### RuleGroupType <a name="RuleGroupType" id="raindancers-network.firewall.RuleGroupType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.RuleGroupType.STATEFUL">STATEFUL</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.RuleGroupType.STATELESS">STATELESS</a></code> | *No description.* |

---

##### `STATEFUL` <a name="STATEFUL" id="raindancers-network.firewall.RuleGroupType.STATEFUL"></a>

---


##### `STATELESS` <a name="STATELESS" id="raindancers-network.firewall.RuleGroupType.STATELESS"></a>

---


### SegmentActionMode <a name="SegmentActionMode" id="raindancers-network.cloudwan.SegmentActionMode"></a>

Segment Action Mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.SegmentActionMode.ATTACHMENT_ROUTE">ATTACHMENT_ROUTE</a></code> | *No description.* |

---

##### `ATTACHMENT_ROUTE` <a name="ATTACHMENT_ROUTE" id="raindancers-network.cloudwan.SegmentActionMode.ATTACHMENT_ROUTE"></a>

---


### SegmentActionType <a name="SegmentActionType" id="raindancers-network.cloudwan.SegmentActionType"></a>

Segment Action Type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.SegmentActionType.SHARE">SHARE</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.SegmentActionType.CREATE_ROUTE">CREATE_ROUTE</a></code> | *No description.* |

---

##### `SHARE` <a name="SHARE" id="raindancers-network.cloudwan.SegmentActionType.SHARE"></a>

---


##### `CREATE_ROUTE` <a name="CREATE_ROUTE" id="raindancers-network.cloudwan.SegmentActionType.CREATE_ROUTE"></a>

---


### StartupAction <a name="StartupAction" id="raindancers-network.cloudwan.StartupAction"></a>

Startup Action for S2S VPN.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.StartupAction.START">START</a></code> | AWS end to Intiate Startup. |
| <code><a href="#raindancers-network.cloudwan.StartupAction.ADD">ADD</a></code> | Do not attempt to startup. |

---

##### `START` <a name="START" id="raindancers-network.cloudwan.StartupAction.START"></a>

AWS end to Intiate Startup.

---


##### `ADD` <a name="ADD" id="raindancers-network.cloudwan.StartupAction.ADD"></a>

Do not attempt to startup.

---


### StatefulDefaultActions <a name="StatefulDefaultActions" id="raindancers-network.firewall.StatefulDefaultActions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.StatefulDefaultActions.DROP_STRICT">DROP_STRICT</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatefulDefaultActions.DROP_ESTABLISHED">DROP_ESTABLISHED</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatefulDefaultActions.ALERT_STRICT">ALERT_STRICT</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatefulDefaultActions.ALERT_ESTABLISHED">ALERT_ESTABLISHED</a></code> | *No description.* |

---

##### `DROP_STRICT` <a name="DROP_STRICT" id="raindancers-network.firewall.StatefulDefaultActions.DROP_STRICT"></a>

---


##### `DROP_ESTABLISHED` <a name="DROP_ESTABLISHED" id="raindancers-network.firewall.StatefulDefaultActions.DROP_ESTABLISHED"></a>

---


##### `ALERT_STRICT` <a name="ALERT_STRICT" id="raindancers-network.firewall.StatefulDefaultActions.ALERT_STRICT"></a>

---


##### `ALERT_ESTABLISHED` <a name="ALERT_ESTABLISHED" id="raindancers-network.firewall.StatefulDefaultActions.ALERT_ESTABLISHED"></a>

---


### StatelessActions <a name="StatelessActions" id="raindancers-network.firewall.StatelessActions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.StatelessActions.PASS">PASS</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessActions.DROP">DROP</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.StatelessActions.STATEFUL">STATEFUL</a></code> | *No description.* |

---

##### `PASS` <a name="PASS" id="raindancers-network.firewall.StatelessActions.PASS"></a>

---


##### `DROP` <a name="DROP" id="raindancers-network.firewall.StatelessActions.DROP"></a>

---


##### `STATEFUL` <a name="STATEFUL" id="raindancers-network.firewall.StatelessActions.STATEFUL"></a>

---


### SubnetWildCards <a name="SubnetWildCards" id="raindancers-network.network.SubnetWildCards"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.network.SubnetWildCards.ALLSUBNETS">ALLSUBNETS</a></code> | *No description.* |

---

##### `ALLSUBNETS` <a name="ALLSUBNETS" id="raindancers-network.network.SubnetWildCards.ALLSUBNETS"></a>

---


### TargetTypes <a name="TargetTypes" id="raindancers-network.sso.TargetTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.sso.TargetTypes.AWS_ACCOUNT">AWS_ACCOUNT</a></code> | *No description.* |

---

##### `AWS_ACCOUNT` <a name="AWS_ACCOUNT" id="raindancers-network.sso.TargetTypes.AWS_ACCOUNT"></a>

---


### TunnelInsideIpVersion <a name="TunnelInsideIpVersion" id="raindancers-network.cloudwan.TunnelInsideIpVersion"></a>

Determine if this is an IPv4 or IPv6 Tunnel.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.TunnelInsideIpVersion.IPV4">IPV4</a></code> | Use IPv4. |
| <code><a href="#raindancers-network.cloudwan.TunnelInsideIpVersion.IPV6">IPV6</a></code> | Use IPv6. |

---

##### `IPV4` <a name="IPV4" id="raindancers-network.cloudwan.TunnelInsideIpVersion.IPV4"></a>

Use IPv4.

---


##### `IPV6` <a name="IPV6" id="raindancers-network.cloudwan.TunnelInsideIpVersion.IPV6"></a>

Use IPv6.

---


### UpdateBehavior <a name="UpdateBehavior" id="raindancers-network.glue.UpdateBehavior"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.glue.UpdateBehavior.LOG">LOG</a></code> | *No description.* |
| <code><a href="#raindancers-network.glue.UpdateBehavior.UPDATE_IN_DATABASE">UPDATE_IN_DATABASE</a></code> | *No description.* |

---

##### `LOG` <a name="LOG" id="raindancers-network.glue.UpdateBehavior.LOG"></a>

---


##### `UPDATE_IN_DATABASE` <a name="UPDATE_IN_DATABASE" id="raindancers-network.glue.UpdateBehavior.UPDATE_IN_DATABASE"></a>

---


### VpnDeviceType <a name="VpnDeviceType" id="raindancers-network.cloudwan.VpnDeviceType"></a>

Remote end Device Types.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.cloudwan.VpnDeviceType.CHECKPOINT_R77_10">CHECKPOINT_R77_10</a></code> | Checkpoint R77_10. |
| <code><a href="#raindancers-network.cloudwan.VpnDeviceType.CHECKPOINT_R80_10">CHECKPOINT_R80_10</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnDeviceType.CISCO_ISR_12_4">CISCO_ISR_12_4</a></code> | *No description.* |
| <code><a href="#raindancers-network.cloudwan.VpnDeviceType.CISCO_ASR_12_4">CISCO_ASR_12_4</a></code> | *No description.* |

---

##### `CHECKPOINT_R77_10` <a name="CHECKPOINT_R77_10" id="raindancers-network.cloudwan.VpnDeviceType.CHECKPOINT_R77_10"></a>

Checkpoint R77_10.

---


##### `CHECKPOINT_R80_10` <a name="CHECKPOINT_R80_10" id="raindancers-network.cloudwan.VpnDeviceType.CHECKPOINT_R80_10"></a>

---


##### `CISCO_ISR_12_4` <a name="CISCO_ISR_12_4" id="raindancers-network.cloudwan.VpnDeviceType.CISCO_ISR_12_4"></a>

---


##### `CISCO_ASR_12_4` <a name="CISCO_ASR_12_4" id="raindancers-network.cloudwan.VpnDeviceType.CISCO_ASR_12_4"></a>

---


### WellKnownPorts <a name="WellKnownPorts" id="raindancers-network.firewall.WellKnownPorts"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.firewall.WellKnownPorts.SSH">SSH</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.WellKnownPorts.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.WellKnownPorts.HTTPS">HTTPS</a></code> | *No description.* |
| <code><a href="#raindancers-network.firewall.WellKnownPorts.RDP">RDP</a></code> | *No description.* |

---

##### `SSH` <a name="SSH" id="raindancers-network.firewall.WellKnownPorts.SSH"></a>

---


##### `HTTP` <a name="HTTP" id="raindancers-network.firewall.WellKnownPorts.HTTP"></a>

---


##### `HTTPS` <a name="HTTPS" id="raindancers-network.firewall.WellKnownPorts.HTTPS"></a>

---


##### `RDP` <a name="RDP" id="raindancers-network.firewall.WellKnownPorts.RDP"></a>

---

