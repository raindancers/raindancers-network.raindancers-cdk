# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Evpc <a name="Evpc" id="raindancers-network.Evpc"></a>

Extends the ec2.Vpc construct to provide additional functionality - support for using AWS IPAM - methods for integration - Flow logs and Athena Querys - Create and share 53 zones.

#### Initializers <a name="Initializers" id="raindancers-network.Evpc.Initializer"></a>

```typescript
import { Evpc } from 'raindancers-network'

new Evpc(scope: Construct, id: string, props?: EvpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.Evpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.Evpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.Evpc.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.EvpcProps">EvpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.Evpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="raindancers-network.Evpc.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.EvpcProps">EvpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Evpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.Evpc.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#raindancers-network.Evpc.addClientVpnEndpoint">addClientVpnEndpoint</a></code> | Adds a new client VPN endpoint to this VPC. |
| <code><a href="#raindancers-network.Evpc.addFlowLog">addFlowLog</a></code> | Adds a new flow log to this VPC. |
| <code><a href="#raindancers-network.Evpc.addGatewayEndpoint">addGatewayEndpoint</a></code> | Adds a new gateway endpoint to this VPC. |
| <code><a href="#raindancers-network.Evpc.addInterfaceEndpoint">addInterfaceEndpoint</a></code> | Adds a new interface endpoint to this VPC. |
| <code><a href="#raindancers-network.Evpc.addVpnConnection">addVpnConnection</a></code> | Adds a new VPN connection to this VPC. |
| <code><a href="#raindancers-network.Evpc.enableVpnGateway">enableVpnGateway</a></code> | Adds a VPN Gateway to this VPC. |
| <code><a href="#raindancers-network.Evpc.selectSubnets">selectSubnets</a></code> | Returns IDs of selected subnets. |
| <code><a href="#raindancers-network.Evpc.addRouteForPrivateSubnetstoCloudWan">addRouteForPrivateSubnetstoCloudWan</a></code> | Add a route to routing tables attached to the private subnets. |
| <code><a href="#raindancers-network.Evpc.addRouteForPrivateSubnetstoinstance">addRouteForPrivateSubnetstoinstance</a></code> | Add routes in private Subnets to a instance. |
| <code><a href="#raindancers-network.Evpc.addRouteForPrivateSubnetstoTransitGateway">addRouteForPrivateSubnetstoTransitGateway</a></code> | Add routes for Private Subnets to a Transit Gateway. |
| <code><a href="#raindancers-network.Evpc.addRouteForPublicSubnetstoCloudWan">addRouteForPublicSubnetstoCloudWan</a></code> | Add routes to routing tables associated with publicSubnets to Cloudwan. |
| <code><a href="#raindancers-network.Evpc.addRoutetoFirewall">addRoutetoFirewall</a></code> | Add routes to point at Network Firewalls, for specific subnetGroups. |
| <code><a href="#raindancers-network.Evpc.associateSharedRoute53ResolverRules">associateSharedRoute53ResolverRules</a></code> | Associate any rules shared to this vpc. |
| <code><a href="#raindancers-network.Evpc.associateVPCZonewithCentralVPC">associateVPCZonewithCentralVPC</a></code> | Associate the internal R53 Zone with the Central VPC, for Org wide resolution. |
| <code><a href="#raindancers-network.Evpc.attachToCloudWan">attachToCloudWan</a></code> | Attach the VPC to a cloud wan segment. |
| <code><a href="#raindancers-network.Evpc.attachVpcToTGApplianceMode">attachVpcToTGApplianceMode</a></code> | Attach a VPC to a Transit Gateway in Appliance mode. |
| <code><a href="#raindancers-network.Evpc.createConnectAttachment">createConnectAttachment</a></code> | Create a connect Attachment to Cloudwan for Appliances. |

---

##### `toString` <a name="toString" id="raindancers-network.Evpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="raindancers-network.Evpc.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="raindancers-network.Evpc.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addClientVpnEndpoint` <a name="addClientVpnEndpoint" id="raindancers-network.Evpc.addClientVpnEndpoint"></a>

```typescript
public addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint
```

Adds a new client VPN endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.addClientVpnEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-network.Evpc.addClientVpnEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnEndpointOptions

---

##### `addFlowLog` <a name="addFlowLog" id="raindancers-network.Evpc.addFlowLog"></a>

```typescript
public addFlowLog(id: string, options?: FlowLogOptions): FlowLog
```

Adds a new flow log to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.addFlowLog.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="raindancers-network.Evpc.addFlowLog.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.FlowLogOptions

---

##### `addGatewayEndpoint` <a name="addGatewayEndpoint" id="raindancers-network.Evpc.addGatewayEndpoint"></a>

```typescript
public addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint
```

Adds a new gateway endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.addGatewayEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-network.Evpc.addGatewayEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions

---

##### `addInterfaceEndpoint` <a name="addInterfaceEndpoint" id="raindancers-network.Evpc.addInterfaceEndpoint"></a>

```typescript
public addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint
```

Adds a new interface endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.addInterfaceEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-network.Evpc.addInterfaceEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointOptions

---

##### `addVpnConnection` <a name="addVpnConnection" id="raindancers-network.Evpc.addVpnConnection"></a>

```typescript
public addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection
```

Adds a new VPN connection to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.addVpnConnection.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-network.Evpc.addVpnConnection.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpnConnectionOptions

---

##### `enableVpnGateway` <a name="enableVpnGateway" id="raindancers-network.Evpc.enableVpnGateway"></a>

```typescript
public enableVpnGateway(options: EnableVpnGatewayOptions): void
```

Adds a VPN Gateway to this VPC.

###### `options`<sup>Required</sup> <a name="options" id="raindancers-network.Evpc.enableVpnGateway.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.EnableVpnGatewayOptions

---

##### `selectSubnets` <a name="selectSubnets" id="raindancers-network.Evpc.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): SelectedSubnets
```

Returns IDs of selected subnets.

###### `selection`<sup>Optional</sup> <a name="selection" id="raindancers-network.Evpc.selectSubnets.parameter.selection"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

##### `addRouteForPrivateSubnetstoCloudWan` <a name="addRouteForPrivateSubnetstoCloudWan" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoCloudWan"></a>

```typescript
public addRouteForPrivateSubnetstoCloudWan(destinationCidr: string, coreNetworkId: string): void
```

Add a route to routing tables attached to the private subnets.

###### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoCloudWan.parameter.destinationCidr"></a>

- *Type:* string

cidr eg, 0.0.0.0/0.

---

###### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoCloudWan.parameter.coreNetworkId"></a>

- *Type:* string

---

##### `addRouteForPrivateSubnetstoinstance` <a name="addRouteForPrivateSubnetstoinstance" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoinstance"></a>

```typescript
public addRouteForPrivateSubnetstoinstance(destinationCidr: string, instanceId: string): void
```

Add routes in private Subnets to a instance.

Use this for routing to a network appliance.

###### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoinstance.parameter.destinationCidr"></a>

- *Type:* string

---

###### `instanceId`<sup>Required</sup> <a name="instanceId" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoinstance.parameter.instanceId"></a>

- *Type:* string

---

##### `addRouteForPrivateSubnetstoTransitGateway` <a name="addRouteForPrivateSubnetstoTransitGateway" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoTransitGateway"></a>

```typescript
public addRouteForPrivateSubnetstoTransitGateway(destinationCidr: string, TransitGatewayId: string): void
```

Add routes for Private Subnets to a Transit Gateway.

###### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoTransitGateway.parameter.destinationCidr"></a>

- *Type:* string

---

###### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="raindancers-network.Evpc.addRouteForPrivateSubnetstoTransitGateway.parameter.TransitGatewayId"></a>

- *Type:* string

---

##### `addRouteForPublicSubnetstoCloudWan` <a name="addRouteForPublicSubnetstoCloudWan" id="raindancers-network.Evpc.addRouteForPublicSubnetstoCloudWan"></a>

```typescript
public addRouteForPublicSubnetstoCloudWan(destinationCidr: string, coreNetworkId: string): void
```

Add routes to routing tables associated with publicSubnets to Cloudwan.

###### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="raindancers-network.Evpc.addRouteForPublicSubnetstoCloudWan.parameter.destinationCidr"></a>

- *Type:* string

---

###### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="raindancers-network.Evpc.addRouteForPublicSubnetstoCloudWan.parameter.coreNetworkId"></a>

- *Type:* string

---

##### `addRoutetoFirewall` <a name="addRoutetoFirewall" id="raindancers-network.Evpc.addRoutetoFirewall"></a>

```typescript
public addRoutetoFirewall(destinationCidr: string, subnetgroup: string, fwArn: string): void
```

Add routes to point at Network Firewalls, for specific subnetGroups.

this will place routes on a per AZ basis

###### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="raindancers-network.Evpc.addRoutetoFirewall.parameter.destinationCidr"></a>

- *Type:* string

---

###### `subnetgroup`<sup>Required</sup> <a name="subnetgroup" id="raindancers-network.Evpc.addRoutetoFirewall.parameter.subnetgroup"></a>

- *Type:* string

---

###### `fwArn`<sup>Required</sup> <a name="fwArn" id="raindancers-network.Evpc.addRoutetoFirewall.parameter.fwArn"></a>

- *Type:* string

---

##### `associateSharedRoute53ResolverRules` <a name="associateSharedRoute53ResolverRules" id="raindancers-network.Evpc.associateSharedRoute53ResolverRules"></a>

```typescript
public associateSharedRoute53ResolverRules(owner: string, updatetopic?: Topic): void
```

Associate any rules shared to this vpc.

###### `owner`<sup>Required</sup> <a name="owner" id="raindancers-network.Evpc.associateSharedRoute53ResolverRules.parameter.owner"></a>

- *Type:* string

---

###### `updatetopic`<sup>Optional</sup> <a name="updatetopic" id="raindancers-network.Evpc.associateSharedRoute53ResolverRules.parameter.updatetopic"></a>

- *Type:* aws-cdk-lib.aws_sns.Topic

---

##### `associateVPCZonewithCentralVPC` <a name="associateVPCZonewithCentralVPC" id="raindancers-network.Evpc.associateVPCZonewithCentralVPC"></a>

```typescript
public associateVPCZonewithCentralVPC(): void
```

Associate the internal R53 Zone with the Central VPC, for Org wide resolution.

##### `attachToCloudWan` <a name="attachToCloudWan" id="raindancers-network.Evpc.attachToCloudWan"></a>

```typescript
public attachToCloudWan(coreNetworkName: string, segment: string): string
```

Attach the VPC to a cloud wan segment.

###### `coreNetworkName`<sup>Required</sup> <a name="coreNetworkName" id="raindancers-network.Evpc.attachToCloudWan.parameter.coreNetworkName"></a>

- *Type:* string

---

###### `segment`<sup>Required</sup> <a name="segment" id="raindancers-network.Evpc.attachToCloudWan.parameter.segment"></a>

- *Type:* string

---

##### `attachVpcToTGApplianceMode` <a name="attachVpcToTGApplianceMode" id="raindancers-network.Evpc.attachVpcToTGApplianceMode"></a>

```typescript
public attachVpcToTGApplianceMode(transitGateway: CfnTransitGateway, cidrs?: string[]): string
```

Attach a VPC to a Transit Gateway in Appliance mode.

Primarly used when the VPC is being used as a centralised egress with firewalls
A workaround to the problem of their not being support for Appliance mode connections to cloudwan

###### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-network.Evpc.attachVpcToTGApplianceMode.parameter.transitGateway"></a>

- *Type:* aws-cdk-lib.aws_ec2.CfnTransitGateway

---

###### `cidrs`<sup>Optional</sup> <a name="cidrs" id="raindancers-network.Evpc.attachVpcToTGApplianceMode.parameter.cidrs"></a>

- *Type:* string[]

---

##### `createConnectAttachment` <a name="createConnectAttachment" id="raindancers-network.Evpc.createConnectAttachment"></a>

```typescript
public createConnectAttachment(coreNetworkId: string, transportAttachmentId: string): string
```

Create a connect Attachment to Cloudwan for Appliances.

###### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="raindancers-network.Evpc.createConnectAttachment.parameter.coreNetworkId"></a>

- *Type:* string

---

###### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="raindancers-network.Evpc.createConnectAttachment.parameter.transportAttachmentId"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Evpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#raindancers-network.Evpc.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#raindancers-network.Evpc.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#raindancers-network.Evpc.fromLookup">fromLookup</a></code> | Import an existing VPC from by querying the AWS environment this stack is deployed to. |
| <code><a href="#raindancers-network.Evpc.fromVpcAttributes">fromVpcAttributes</a></code> | Import a VPC by supplying all attributes directly. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.Evpc.isConstruct"></a>

```typescript
import { Evpc } from 'raindancers-network'

Evpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.Evpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="raindancers-network.Evpc.isOwnedResource"></a>

```typescript
import { Evpc } from 'raindancers-network'

Evpc.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-network.Evpc.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="raindancers-network.Evpc.isResource"></a>

```typescript
import { Evpc } from 'raindancers-network'

Evpc.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="raindancers-network.Evpc.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="raindancers-network.Evpc.fromLookup"></a>

```typescript
import { Evpc } from 'raindancers-network'

Evpc.fromLookup(scope: Construct, id: string, options: VpcLookupOptions)
```

Import an existing VPC from by querying the AWS environment this stack is deployed to.

This function only needs to be used to use VPCs not defined in your CDK
application. If you are looking to share a VPC between stacks, you can
pass the `Vpc` object between stacks and use it as normal.

Calling this method will lead to a lookup when the CDK CLI is executed.
You can therefore not use any values that will only be available at
CloudFormation execution time (i.e., Tokens).

The VPC information will be cached in `cdk.context.json` and the same VPC
will be used on future runs. To refresh the lookup, you will have to
evict the value from the cache using the `cdk context` command. See
https://docs.aws.amazon.com/cdk/latest/guide/context.html for more information.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.Evpc.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="raindancers-network.Evpc.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcLookupOptions

---

##### `fromVpcAttributes` <a name="fromVpcAttributes" id="raindancers-network.Evpc.fromVpcAttributes"></a>

```typescript
import { Evpc } from 'raindancers-network'

Evpc.fromVpcAttributes(scope: Construct, id: string, attrs: VpcAttributes)
```

Import a VPC by supplying all attributes directly.

NOTE: using `fromVpcAttributes()` with deploy-time parameters (like a `Fn.importValue()` or
`CfnParameter` to represent a list of subnet IDs) sometimes accidentally works. It happens
to work for constructs that need a list of subnets (like `AutoScalingGroup` and `eks.Cluster`)
but it does not work for constructs that need individual subnets (like
`Instance`). See https://github.com/aws/aws-cdk/issues/4118 for more
information.

Prefer to use `Vpc.fromLookup()` instead.

###### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.Evpc.fromVpcAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="raindancers-network.Evpc.fromVpcAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="raindancers-network.Evpc.fromVpcAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.Evpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.Evpc.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#raindancers-network.Evpc.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#raindancers-network.Evpc.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | AZs for this VPC. |
| <code><a href="#raindancers-network.Evpc.property.dnsHostnamesEnabled">dnsHostnamesEnabled</a></code> | <code>boolean</code> | Indicates if instances launched in this VPC will have public DNS hostnames. |
| <code><a href="#raindancers-network.Evpc.property.dnsSupportEnabled">dnsSupportEnabled</a></code> | <code>boolean</code> | Indicates if DNS support is enabled for this VPC. |
| <code><a href="#raindancers-network.Evpc.property.internetConnectivityEstablished">internetConnectivityEstablished</a></code> | <code>constructs.IDependable</code> | Dependencies for internet connectivity. |
| <code><a href="#raindancers-network.Evpc.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of isolated subnets in this VPC. |
| <code><a href="#raindancers-network.Evpc.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of private subnets in this VPC. |
| <code><a href="#raindancers-network.Evpc.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of public subnets in this VPC. |
| <code><a href="#raindancers-network.Evpc.property.vpcArn">vpcArn</a></code> | <code>string</code> | Arn of this VPC. |
| <code><a href="#raindancers-network.Evpc.property.vpcCidrBlock">vpcCidrBlock</a></code> | <code>string</code> | CIDR range for this VPC. |
| <code><a href="#raindancers-network.Evpc.property.vpcCidrBlockAssociations">vpcCidrBlockAssociations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.Evpc.property.vpcDefaultNetworkAcl">vpcDefaultNetworkAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.Evpc.property.vpcDefaultSecurityGroup">vpcDefaultSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.Evpc.property.vpcId">vpcId</a></code> | <code>string</code> | Identifier for this VPC. |
| <code><a href="#raindancers-network.Evpc.property.vpcIpv6CidrBlocks">vpcIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.Evpc.property.internetGatewayId">internetGatewayId</a></code> | <code>string</code> | Internet Gateway for the VPC. |
| <code><a href="#raindancers-network.Evpc.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Returns the id of the VPN Gateway (if enabled). |
| <code><a href="#raindancers-network.Evpc.property.lookUpProvider">lookUpProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | Custom resource provider for looking up Cloudwan. |
| <code><a href="#raindancers-network.Evpc.property.centralResolvingVpc">centralResolvingVpc</a></code> | <code>boolean</code> | If this is a private zone. |
| <code><a href="#raindancers-network.Evpc.property.ipamAllocationId">ipamAllocationId</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMAllocation</code> | the Ipam Allocation provider for this vpc. |
| <code><a href="#raindancers-network.Evpc.property.linknetSubnetIds">linknetSubnetIds</a></code> | <code>string[]</code> | list of subnetIds that are used for connecting to the Cloudwan. |
| <code><a href="#raindancers-network.Evpc.property.privateR53Zone">privateR53Zone</a></code> | <code>aws-cdk-lib.aws_route53.HostedZone</code> | Private Zone. |
| <code><a href="#raindancers-network.Evpc.property.privateR53ZoneId">privateR53ZoneId</a></code> | <code>string</code> | Private Zone Id. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.Evpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="raindancers-network.Evpc.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="raindancers-network.Evpc.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="raindancers-network.Evpc.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

AZs for this VPC.

---

##### `dnsHostnamesEnabled`<sup>Required</sup> <a name="dnsHostnamesEnabled" id="raindancers-network.Evpc.property.dnsHostnamesEnabled"></a>

```typescript
public readonly dnsHostnamesEnabled: boolean;
```

- *Type:* boolean

Indicates if instances launched in this VPC will have public DNS hostnames.

---

##### `dnsSupportEnabled`<sup>Required</sup> <a name="dnsSupportEnabled" id="raindancers-network.Evpc.property.dnsSupportEnabled"></a>

```typescript
public readonly dnsSupportEnabled: boolean;
```

- *Type:* boolean

Indicates if DNS support is enabled for this VPC.

---

##### `internetConnectivityEstablished`<sup>Required</sup> <a name="internetConnectivityEstablished" id="raindancers-network.Evpc.property.internetConnectivityEstablished"></a>

```typescript
public readonly internetConnectivityEstablished: IDependable;
```

- *Type:* constructs.IDependable

Dependencies for internet connectivity.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="raindancers-network.Evpc.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of isolated subnets in this VPC.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="raindancers-network.Evpc.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of private subnets in this VPC.

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="raindancers-network.Evpc.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of public subnets in this VPC.

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="raindancers-network.Evpc.property.vpcArn"></a>

```typescript
public readonly vpcArn: string;
```

- *Type:* string

Arn of this VPC.

---

##### `vpcCidrBlock`<sup>Required</sup> <a name="vpcCidrBlock" id="raindancers-network.Evpc.property.vpcCidrBlock"></a>

```typescript
public readonly vpcCidrBlock: string;
```

- *Type:* string

CIDR range for this VPC.

---

##### `vpcCidrBlockAssociations`<sup>Required</sup> <a name="vpcCidrBlockAssociations" id="raindancers-network.Evpc.property.vpcCidrBlockAssociations"></a>

```typescript
public readonly vpcCidrBlockAssociations: string[];
```

- *Type:* string[]

---

##### `vpcDefaultNetworkAcl`<sup>Required</sup> <a name="vpcDefaultNetworkAcl" id="raindancers-network.Evpc.property.vpcDefaultNetworkAcl"></a>

```typescript
public readonly vpcDefaultNetworkAcl: string;
```

- *Type:* string

---

##### `vpcDefaultSecurityGroup`<sup>Required</sup> <a name="vpcDefaultSecurityGroup" id="raindancers-network.Evpc.property.vpcDefaultSecurityGroup"></a>

```typescript
public readonly vpcDefaultSecurityGroup: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="raindancers-network.Evpc.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Identifier for this VPC.

---

##### `vpcIpv6CidrBlocks`<sup>Required</sup> <a name="vpcIpv6CidrBlocks" id="raindancers-network.Evpc.property.vpcIpv6CidrBlocks"></a>

```typescript
public readonly vpcIpv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `internetGatewayId`<sup>Optional</sup> <a name="internetGatewayId" id="raindancers-network.Evpc.property.internetGatewayId"></a>

```typescript
public readonly internetGatewayId: string;
```

- *Type:* string

Internet Gateway for the VPC.

Note that in case the VPC is configured only
with ISOLATED subnets, this attribute will be `undefined`.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="raindancers-network.Evpc.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Returns the id of the VPN Gateway (if enabled).

---

##### `lookUpProvider`<sup>Required</sup> <a name="lookUpProvider" id="raindancers-network.Evpc.property.lookUpProvider"></a>

```typescript
public readonly lookUpProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

Custom resource provider for looking up Cloudwan.

---

##### `centralResolvingVpc`<sup>Optional</sup> <a name="centralResolvingVpc" id="raindancers-network.Evpc.property.centralResolvingVpc"></a>

```typescript
public readonly centralResolvingVpc: boolean;
```

- *Type:* boolean

If this is a private zone.

---

##### `ipamAllocationId`<sup>Optional</sup> <a name="ipamAllocationId" id="raindancers-network.Evpc.property.ipamAllocationId"></a>

```typescript
public readonly ipamAllocationId: CfnIPAMAllocation;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMAllocation

the Ipam Allocation provider for this vpc.

---

##### `linknetSubnetIds`<sup>Optional</sup> <a name="linknetSubnetIds" id="raindancers-network.Evpc.property.linknetSubnetIds"></a>

```typescript
public readonly linknetSubnetIds: string[];
```

- *Type:* string[]

list of subnetIds that are used for connecting to the Cloudwan.

---

##### `privateR53Zone`<sup>Optional</sup> <a name="privateR53Zone" id="raindancers-network.Evpc.property.privateR53Zone"></a>

```typescript
public readonly privateR53Zone: HostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZone

Private Zone.

---

##### `privateR53ZoneId`<sup>Optional</sup> <a name="privateR53ZoneId" id="raindancers-network.Evpc.property.privateR53ZoneId"></a>

```typescript
public readonly privateR53ZoneId: string;
```

- *Type:* string

Private Zone Id.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.Evpc.property.DEFAULT_CIDR_RANGE">DEFAULT_CIDR_RANGE</a></code> | <code>string</code> | The default CIDR range used when creating VPCs. |
| <code><a href="#raindancers-network.Evpc.property.DEFAULT_SUBNETS">DEFAULT_SUBNETS</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration. |
| <code><a href="#raindancers-network.Evpc.property.DEFAULT_SUBNETS_NO_NAT">DEFAULT_SUBNETS_NO_NAT</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration if natGateways specified to be 0. |

---

##### `DEFAULT_CIDR_RANGE`<sup>Required</sup> <a name="DEFAULT_CIDR_RANGE" id="raindancers-network.Evpc.property.DEFAULT_CIDR_RANGE"></a>

```typescript
public readonly DEFAULT_CIDR_RANGE: string;
```

- *Type:* string

The default CIDR range used when creating VPCs.

This can be overridden using VpcProps when creating a VPCNetwork resource.
e.g. new VpcResource(this, { cidr: '192.168.0.0./16' })

---

##### `DEFAULT_SUBNETS`<sup>Required</sup> <a name="DEFAULT_SUBNETS" id="raindancers-network.Evpc.property.DEFAULT_SUBNETS"></a>

```typescript
public readonly DEFAULT_SUBNETS: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration.

1 Public and 1 Private subnet per AZ evenly split

---

##### `DEFAULT_SUBNETS_NO_NAT`<sup>Required</sup> <a name="DEFAULT_SUBNETS_NO_NAT" id="raindancers-network.Evpc.property.DEFAULT_SUBNETS_NO_NAT"></a>

```typescript
public readonly DEFAULT_SUBNETS_NO_NAT: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration if natGateways specified to be 0.

1 Public and 1 Isolated Subnet per AZ evenly split

---

### GetTunnelAddressPair <a name="GetTunnelAddressPair" id="raindancers-network.GetTunnelAddressPair"></a>

Allocate a pair of /30 networks CIDRS for use in Ipsec VPN Tunnels.

#### Initializers <a name="Initializers" id="raindancers-network.GetTunnelAddressPair.Initializer"></a>

```typescript
import { GetTunnelAddressPair } from 'raindancers-network'

new GetTunnelAddressPair(scope: Construct, id: string, props: GetTunnelAddressPairProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.GetTunnelAddressPair.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | scope in which this resource is created. |
| <code><a href="#raindancers-network.GetTunnelAddressPair.Initializer.parameter.id">id</a></code> | <code>string</code> | scope id of the resoruce. |
| <code><a href="#raindancers-network.GetTunnelAddressPair.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.GetTunnelAddressPairProps">GetTunnelAddressPairProps</a></code> | resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.GetTunnelAddressPair.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is created.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.GetTunnelAddressPair.Initializer.parameter.id"></a>

- *Type:* string

scope id of the resoruce.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.GetTunnelAddressPair.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.GetTunnelAddressPairProps">GetTunnelAddressPairProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.GetTunnelAddressPair.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.GetTunnelAddressPair.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.GetTunnelAddressPair.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.GetTunnelAddressPair.isConstruct"></a>

```typescript
import { GetTunnelAddressPair } from 'raindancers-network'

GetTunnelAddressPair.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.GetTunnelAddressPair.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.GetTunnelAddressPair.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.GetTunnelAddressPair.property.assignedCidrPair">assignedCidrPair</a></code> | <code>string[]</code> | returns 2 cidr blocks as an array to be used by an IPsec Tunnel. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.GetTunnelAddressPair.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `assignedCidrPair`<sup>Required</sup> <a name="assignedCidrPair" id="raindancers-network.GetTunnelAddressPair.property.assignedCidrPair"></a>

```typescript
public readonly assignedCidrPair: string[];
```

- *Type:* string[]

returns 2 cidr blocks as an array to be used by an IPsec Tunnel.

---


### IpsecTunnelPool <a name="IpsecTunnelPool" id="raindancers-network.IpsecTunnelPool"></a>

Creates an IPAM pool to assign address's for IPsec VPNS.

#### Initializers <a name="Initializers" id="raindancers-network.IpsecTunnelPool.Initializer"></a>

```typescript
import { IpsecTunnelPool } from 'raindancers-network'

new IpsecTunnelPool(scope: Construct, id: string, props: IpsecTunnelPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.IpsecTunnelPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | scope in which this resource is defined. |
| <code><a href="#raindancers-network.IpsecTunnelPool.Initializer.parameter.id">id</a></code> | <code>string</code> | id of the resource. |
| <code><a href="#raindancers-network.IpsecTunnelPool.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.IpsecTunnelPoolProps">IpsecTunnelPoolProps</a></code> | resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.IpsecTunnelPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.IpsecTunnelPool.Initializer.parameter.id"></a>

- *Type:* string

id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.IpsecTunnelPool.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.IpsecTunnelPoolProps">IpsecTunnelPoolProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.IpsecTunnelPool.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.IpsecTunnelPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.IpsecTunnelPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.IpsecTunnelPool.isConstruct"></a>

```typescript
import { IpsecTunnelPool } from 'raindancers-network'

IpsecTunnelPool.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.IpsecTunnelPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.IpsecTunnelPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.IpsecTunnelPool.property.ipampool">ipampool</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | returns the created ipam Pool. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.IpsecTunnelPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ipampool`<sup>Required</sup> <a name="ipampool" id="raindancers-network.IpsecTunnelPool.property.ipampool"></a>

```typescript
public readonly ipampool: CfnIPAMPool;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool

returns the created ipam Pool.

---


## Structs <a name="Structs" id="Structs"></a>

### EvpcProps <a name="EvpcProps" id="raindancers-network.EvpcProps"></a>

Properties for Creating an enterprise Vpc which extend ec2.Vpc.

#### Initializer <a name="Initializer" id="raindancers-network.EvpcProps.Initializer"></a>

```typescript
import { EvpcProps } from 'raindancers-network'

const evpcProps: EvpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.EvpcProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Availability zones this VPC spans. |
| <code><a href="#raindancers-network.EvpcProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR range to use for the VPC, e.g. '10.0.0.0/16'. |
| <code><a href="#raindancers-network.EvpcProps.property.defaultInstanceTenancy">defaultInstanceTenancy</a></code> | <code>aws-cdk-lib.aws_ec2.DefaultInstanceTenancy</code> | The default tenancy of instances launched into the VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean</code> | Indicates whether the instances launched in the VPC get public DNS hostnames. |
| <code><a href="#raindancers-network.EvpcProps.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean</code> | Indicates whether the DNS resolution is supported for the VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.flowLogs">flowLogs</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}</code> | Flow logs to add to this VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.gatewayEndpoints">gatewayEndpoints</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}</code> | Gateway endpoints to add to this VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | Define the maximum number of AZs to use in this region. |
| <code><a href="#raindancers-network.EvpcProps.property.natGatewayProvider">natGatewayProvider</a></code> | <code>aws-cdk-lib.aws_ec2.NatProvider</code> | What type of NAT provider to use. |
| <code><a href="#raindancers-network.EvpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT Gateways/Instances to create. |
| <code><a href="#raindancers-network.EvpcProps.property.natGatewaySubnets">natGatewaySubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Configures the subnets which will have NAT Gateways/Instances. |
| <code><a href="#raindancers-network.EvpcProps.property.subnetConfiguration">subnetConfiguration</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | Configure the subnets to build for each AZ. |
| <code><a href="#raindancers-network.EvpcProps.property.vpcName">vpcName</a></code> | <code>string</code> | The VPC name. |
| <code><a href="#raindancers-network.EvpcProps.property.vpnConnections">vpnConnections</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}</code> | VPN connections to this VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.vpnGateway">vpnGateway</a></code> | <code>boolean</code> | Indicates whether a VPN gateway should be created and attached to this VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.vpnGatewayAsn">vpnGatewayAsn</a></code> | <code>number</code> | The private Autonomous System Number (ASN) for the VPN gateway. |
| <code><a href="#raindancers-network.EvpcProps.property.vpnRoutePropagation">vpnRoutePropagation</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection[]</code> | Where to propagate VPN routes. |
| <code><a href="#raindancers-network.EvpcProps.property.attachToCoreNetworkSegment">attachToCoreNetworkSegment</a></code> | <code>string</code> | the cloudwan core network segment name that this vpc will be attached to. |
| <code><a href="#raindancers-network.EvpcProps.property.centralResolvingVpc">centralResolvingVpc</a></code> | <code>boolean</code> | Set true if this is the central resolving Vpc. |
| <code><a href="#raindancers-network.EvpcProps.property.disableFlowlog">disableFlowlog</a></code> | <code>boolean</code> | Set true to disable centralised Flow Logs. |
| <code><a href="#raindancers-network.EvpcProps.property.internetGateway">internetGateway</a></code> | <code>boolean</code> | An Internet Gateway will only be created if true. |
| <code><a href="#raindancers-network.EvpcProps.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | the ipam pool id that the Vpc's allocation will get created in. |
| <code><a href="#raindancers-network.EvpcProps.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | a netmask value that is in the range 16 to 28. |
| <code><a href="#raindancers-network.EvpcProps.property.oneMinuteFlowLogs">oneMinuteFlowLogs</a></code> | <code>boolean</code> | Set true for 1 minute aggregation on flow logs. |
| <code><a href="#raindancers-network.EvpcProps.property.r53InternalZoneName">r53InternalZoneName</a></code> | <code>string</code> | Name of an internal Route53 Zone that is associated with this voc. |

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="raindancers-network.EvpcProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]
- *Default:* a subset of AZs of the stack

Availability zones this VPC spans.

Specify this option only if you do not specify `maxAzs`.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="raindancers-network.EvpcProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string
- *Default:* Vpc.DEFAULT_CIDR_RANGE

The CIDR range to use for the VPC, e.g. '10.0.0.0/16'.

Should be a minimum of /28 and maximum size of /16. The range will be
split across all subnets per Availability Zone.

---

##### `defaultInstanceTenancy`<sup>Optional</sup> <a name="defaultInstanceTenancy" id="raindancers-network.EvpcProps.property.defaultInstanceTenancy"></a>

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

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="raindancers-network.EvpcProps.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the instances launched in the VPC get public DNS hostnames.

If this attribute is true, instances in the VPC get public DNS hostnames,
but only if the enableDnsSupport attribute is also set to true.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="raindancers-network.EvpcProps.property.enableDnsSupport"></a>

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

##### `flowLogs`<sup>Optional</sup> <a name="flowLogs" id="raindancers-network.EvpcProps.property.flowLogs"></a>

```typescript
public readonly flowLogs: {[ key: string ]: FlowLogOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}
- *Default:* No flow logs.

Flow logs to add to this VPC.

---

##### `gatewayEndpoints`<sup>Optional</sup> <a name="gatewayEndpoints" id="raindancers-network.EvpcProps.property.gatewayEndpoints"></a>

```typescript
public readonly gatewayEndpoints: {[ key: string ]: GatewayVpcEndpointOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}
- *Default:* None.

Gateway endpoints to add to this VPC.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="raindancers-network.EvpcProps.property.maxAzs"></a>

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

##### `natGatewayProvider`<sup>Optional</sup> <a name="natGatewayProvider" id="raindancers-network.EvpcProps.property.natGatewayProvider"></a>

```typescript
public readonly natGatewayProvider: NatProvider;
```

- *Type:* aws-cdk-lib.aws_ec2.NatProvider
- *Default:* NatProvider.gateway()

What type of NAT provider to use.

Select between NAT gateways or NAT instances. NAT gateways
may not be available in all AWS regions.

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="raindancers-network.EvpcProps.property.natGateways"></a>

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

##### `natGatewaySubnets`<sup>Optional</sup> <a name="natGatewaySubnets" id="raindancers-network.EvpcProps.property.natGatewaySubnets"></a>

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

##### `subnetConfiguration`<sup>Optional</sup> <a name="subnetConfiguration" id="raindancers-network.EvpcProps.property.subnetConfiguration"></a>

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

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="raindancers-network.EvpcProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string
- *Default:* this.node.path

The VPC name.

Since the VPC resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `vpnConnections`<sup>Optional</sup> <a name="vpnConnections" id="raindancers-network.EvpcProps.property.vpnConnections"></a>

```typescript
public readonly vpnConnections: {[ key: string ]: VpnConnectionOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}
- *Default:* No connections.

VPN connections to this VPC.

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="raindancers-network.EvpcProps.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: boolean;
```

- *Type:* boolean
- *Default:* true when vpnGatewayAsn or vpnConnections is specified

Indicates whether a VPN gateway should be created and attached to this VPC.

---

##### `vpnGatewayAsn`<sup>Optional</sup> <a name="vpnGatewayAsn" id="raindancers-network.EvpcProps.property.vpnGatewayAsn"></a>

```typescript
public readonly vpnGatewayAsn: number;
```

- *Type:* number
- *Default:* Amazon default ASN.

The private Autonomous System Number (ASN) for the VPN gateway.

---

##### `vpnRoutePropagation`<sup>Optional</sup> <a name="vpnRoutePropagation" id="raindancers-network.EvpcProps.property.vpnRoutePropagation"></a>

```typescript
public readonly vpnRoutePropagation: SubnetSelection[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection[]
- *Default:* On the route tables associated with private subnets. If no private subnets exists, isolated subnets are used. If no isolated subnets exists, public subnets are used.

Where to propagate VPN routes.

---

##### `attachToCoreNetworkSegment`<sup>Optional</sup> <a name="attachToCoreNetworkSegment" id="raindancers-network.EvpcProps.property.attachToCoreNetworkSegment"></a>

```typescript
public readonly attachToCoreNetworkSegment: string;
```

- *Type:* string

the cloudwan core network segment name that this vpc will be attached to.

---

##### `centralResolvingVpc`<sup>Optional</sup> <a name="centralResolvingVpc" id="raindancers-network.EvpcProps.property.centralResolvingVpc"></a>

```typescript
public readonly centralResolvingVpc: boolean;
```

- *Type:* boolean

Set true if this is the central resolving Vpc.

---

##### `disableFlowlog`<sup>Optional</sup> <a name="disableFlowlog" id="raindancers-network.EvpcProps.property.disableFlowlog"></a>

```typescript
public readonly disableFlowlog: boolean;
```

- *Type:* boolean

Set true to disable centralised Flow Logs.

---

##### `internetGateway`<sup>Optional</sup> <a name="internetGateway" id="raindancers-network.EvpcProps.property.internetGateway"></a>

```typescript
public readonly internetGateway: boolean;
```

- *Type:* boolean

An Internet Gateway will only be created if true.

---

##### `ipamPoolId`<sup>Optional</sup> <a name="ipamPoolId" id="raindancers-network.EvpcProps.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

the ipam pool id that the Vpc's allocation will get created in.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="raindancers-network.EvpcProps.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

a netmask value that is in the range 16 to 28.

---

##### `oneMinuteFlowLogs`<sup>Optional</sup> <a name="oneMinuteFlowLogs" id="raindancers-network.EvpcProps.property.oneMinuteFlowLogs"></a>

```typescript
public readonly oneMinuteFlowLogs: boolean;
```

- *Type:* boolean

Set true for 1 minute aggregation on flow logs.

(default is 10 minutes )

---

##### `r53InternalZoneName`<sup>Optional</sup> <a name="r53InternalZoneName" id="raindancers-network.EvpcProps.property.r53InternalZoneName"></a>

```typescript
public readonly r53InternalZoneName: string;
```

- *Type:* string

Name of an internal Route53 Zone that is associated with this voc.

---

### GetTunnelAddressPairProps <a name="GetTunnelAddressPairProps" id="raindancers-network.GetTunnelAddressPairProps"></a>

Properties for obtaining an IPAM assigned address pair for use on IPsec VPN Tunnels.

#### Initializer <a name="Initializer" id="raindancers-network.GetTunnelAddressPairProps.Initializer"></a>

```typescript
import { GetTunnelAddressPairProps } from 'raindancers-network'

const getTunnelAddressPairProps: GetTunnelAddressPairProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.GetTunnelAddressPairProps.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | The IPAM Pool Id from which the assginment will be made from. |
| <code><a href="#raindancers-network.GetTunnelAddressPairProps.property.name">name</a></code> | <code>string</code> | The Name used by IPAM to record the allocation. |

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="raindancers-network.GetTunnelAddressPairProps.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

The IPAM Pool Id from which the assginment will be made from.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.GetTunnelAddressPairProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name used by IPAM to record the allocation.

---

### IpsecTunnelPoolProps <a name="IpsecTunnelPoolProps" id="raindancers-network.IpsecTunnelPoolProps"></a>

Properties for defining a IPAM Pool specifically for IPSec VPN Tunnels.

#### Initializer <a name="Initializer" id="raindancers-network.IpsecTunnelPoolProps.Initializer"></a>

```typescript
import { IpsecTunnelPoolProps } from 'raindancers-network'

const ipsecTunnelPoolProps: IpsecTunnelPoolProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.IpsecTunnelPoolProps.property.cidr">cidr</a></code> | <code>string</code> | The Cidr range for pools to be created from    eg, 169.254.100.0/27 The cidr must be in the 169.254.0.0/16 range and must be a minimum of a /29 and a maximum of /24. |
| <code><a href="#raindancers-network.IpsecTunnelPoolProps.property.description">description</a></code> | <code>string</code> | the description used by IPAM to describe the pool. |
| <code><a href="#raindancers-network.IpsecTunnelPoolProps.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | The IPAM Scope Id to use to create the Pool. |
| <code><a href="#raindancers-network.IpsecTunnelPoolProps.property.name">name</a></code> | <code>string</code> | the name used by IPAM to identify the pool. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-network.IpsecTunnelPoolProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The Cidr range for pools to be created from    eg, 169.254.100.0/27 The cidr must be in the 169.254.0.0/16 range and must be a minimum of a /29 and a maximum of /24.

It must also not overlap the AWS reserved ranges. T

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.IpsecTunnelPoolProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

the description used by IPAM to describe the pool.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="raindancers-network.IpsecTunnelPoolProps.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

The IPAM Scope Id to use to create the Pool.

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.IpsecTunnelPoolProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name used by IPAM to identify the pool.

---



