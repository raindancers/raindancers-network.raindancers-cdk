# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsServiceEndPoints <a name="AwsServiceEndPoints" id="raindancers-network.AwsServiceEndPoints"></a>

Provisions a set of AWS Service Endpoints in a VPC.

#### Initializers <a name="Initializers" id="raindancers-network.AwsServiceEndPoints.Initializer"></a>

```typescript
import { AwsServiceEndPoints } from 'raindancers-network'

new AwsServiceEndPoints(scope: Construct, id: string, props: AwsServiceEndPointsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AwsServiceEndPoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope that this construct is created in. |
| <code><a href="#raindancers-network.AwsServiceEndPoints.Initializer.parameter.id">id</a></code> | <code>string</code> | Id for the construct. |
| <code><a href="#raindancers-network.AwsServiceEndPoints.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.AwsServiceEndPointsProps">AwsServiceEndPointsProps</a></code> | AWSServiceEndpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.AwsServiceEndPoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope that this construct is created in.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.AwsServiceEndPoints.Initializer.parameter.id"></a>

- *Type:* string

Id for the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.AwsServiceEndPoints.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AwsServiceEndPointsProps">AwsServiceEndPointsProps</a>

AWSServiceEndpoints.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.AwsServiceEndPoints.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.AwsServiceEndPoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.AwsServiceEndPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.AwsServiceEndPoints.isConstruct"></a>

```typescript
import { AwsServiceEndPoints } from 'raindancers-network'

AwsServiceEndPoints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.AwsServiceEndPoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AwsServiceEndPoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.AwsServiceEndPoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CloudWanTGW <a name="CloudWanTGW" id="raindancers-network.CloudWanTGW"></a>

Create a TransitGateway That is attached to Cloudwan.

#### Initializers <a name="Initializers" id="raindancers-network.CloudWanTGW.Initializer"></a>

```typescript
import { CloudWanTGW } from 'raindancers-network'

new CloudWanTGW(scope: Construct, id: string, props: TGWOnCloudWanProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CloudWanTGW.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | scope in which the resource is c. |
| <code><a href="#raindancers-network.CloudWanTGW.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.CloudWanTGW.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.TGWOnCloudWanProps">TGWOnCloudWanProps</a></code> | TGWOnCloudWanProps. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.CloudWanTGW.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which the resource is c.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.CloudWanTGW.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CloudWanTGW.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.TGWOnCloudWanProps">TGWOnCloudWanProps</a>

TGWOnCloudWanProps.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.CloudWanTGW.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.CloudWanTGW.addDXGateway">addDXGateway</a></code> | provision a DX Gateway and attach it to the transit gateway. |
| <code><a href="#raindancers-network.CloudWanTGW.adds2sVPN">adds2sVPN</a></code> | Creates a Site To Site IPSec VPN between the Transit Gateway and Customer Gateway, using a defined set of VPn Properties. |
| <code><a href="#raindancers-network.CloudWanTGW.createDirectConnectGatewayAssociation">createDirectConnectGatewayAssociation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="raindancers-network.CloudWanTGW.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDXGateway` <a name="addDXGateway" id="raindancers-network.CloudWanTGW.addDXGateway"></a>

```typescript
public addDXGateway(dxgatewayname: string, dxgatewayASN: number): string
```

provision a DX Gateway and attach it to the transit gateway.

###### `dxgatewayname`<sup>Required</sup> <a name="dxgatewayname" id="raindancers-network.CloudWanTGW.addDXGateway.parameter.dxgatewayname"></a>

- *Type:* string

The name of the dxgateway.

---

###### `dxgatewayASN`<sup>Required</sup> <a name="dxgatewayASN" id="raindancers-network.CloudWanTGW.addDXGateway.parameter.dxgatewayASN"></a>

- *Type:* number

An ASN for the Dxgateway.

---

##### `adds2sVPN` <a name="adds2sVPN" id="raindancers-network.CloudWanTGW.adds2sVPN"></a>

```typescript
public adds2sVPN(name: string, vpnprops: VpnProps): void
```

Creates a Site To Site IPSec VPN between the Transit Gateway and Customer Gateway, using a defined set of VPn Properties.

###### `name`<sup>Required</sup> <a name="name" id="raindancers-network.CloudWanTGW.adds2sVPN.parameter.name"></a>

- *Type:* string

A name to identify the vpn.

---

###### `vpnprops`<sup>Required</sup> <a name="vpnprops" id="raindancers-network.CloudWanTGW.adds2sVPN.parameter.vpnprops"></a>

- *Type:* <a href="#raindancers-network.VpnProps">VpnProps</a>

the vpn properties.

---

##### `createDirectConnectGatewayAssociation` <a name="createDirectConnectGatewayAssociation" id="raindancers-network.CloudWanTGW.createDirectConnectGatewayAssociation"></a>

```typescript
public createDirectConnectGatewayAssociation(dxgatewayId: string): string
```

###### `dxgatewayId`<sup>Required</sup> <a name="dxgatewayId" id="raindancers-network.CloudWanTGW.createDirectConnectGatewayAssociation.parameter.dxgatewayId"></a>

- *Type:* string

Id of a DX gateway that.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.CloudWanTGW.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.CloudWanTGW.isConstruct"></a>

```typescript
import { CloudWanTGW } from 'raindancers-network'

CloudWanTGW.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.CloudWanTGW.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CloudWanTGW.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.CloudWanTGW.property.cloudwanTgAttachmentId">cloudwanTgAttachmentId</a></code> | <code>string</code> | the AttachmentId between the Transit Gateway and the cloudwan. |
| <code><a href="#raindancers-network.CloudWanTGW.property.transitGateway">transitGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnTransitGateway</code> | The created Transit Gateway. |
| <code><a href="#raindancers-network.CloudWanTGW.property.tgcidr">tgcidr</a></code> | <code>string[]</code> | The Cidr Ranges assigned to the transit Gateway. |
| <code><a href="#raindancers-network.CloudWanTGW.property.tgDXattachmentId">tgDXattachmentId</a></code> | <code>string</code> | the AttachmentId between the Transit Gateway and DX ( if any ). |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.CloudWanTGW.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cloudwanTgAttachmentId`<sup>Required</sup> <a name="cloudwanTgAttachmentId" id="raindancers-network.CloudWanTGW.property.cloudwanTgAttachmentId"></a>

```typescript
public readonly cloudwanTgAttachmentId: string;
```

- *Type:* string

the AttachmentId between the Transit Gateway and the cloudwan.

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-network.CloudWanTGW.property.transitGateway"></a>

```typescript
public readonly transitGateway: CfnTransitGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnTransitGateway

The created Transit Gateway.

---

##### `tgcidr`<sup>Optional</sup> <a name="tgcidr" id="raindancers-network.CloudWanTGW.property.tgcidr"></a>

```typescript
public readonly tgcidr: string[];
```

- *Type:* string[]

The Cidr Ranges assigned to the transit Gateway.

---

##### `tgDXattachmentId`<sup>Optional</sup> <a name="tgDXattachmentId" id="raindancers-network.CloudWanTGW.property.tgDXattachmentId"></a>

```typescript
public readonly tgDXattachmentId: string;
```

- *Type:* string

the AttachmentId between the Transit Gateway and DX ( if any ).

---


### CoreNetwork <a name="CoreNetwork" id="raindancers-network.CoreNetwork"></a>

Create a CoreNework for a Cloudwan.

#### Initializers <a name="Initializers" id="raindancers-network.CoreNetwork.Initializer"></a>

```typescript
import { CoreNetwork } from 'raindancers-network'

new CoreNetwork(scope: Construct, id: string, props: CoreNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetwork.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.CoreNetworkProps">CoreNetworkProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.CoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.CoreNetwork.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CoreNetwork.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.CoreNetworkProps">CoreNetworkProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.CoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.CoreNetwork.addSegment">addSegment</a></code> | Add a segment to the core network. |
| <code><a href="#raindancers-network.CoreNetwork.share">share</a></code> | Create a CoreNetwork Sharing. |
| <code><a href="#raindancers-network.CoreNetwork.updatePolicy">updatePolicy</a></code> | Update the corewan policy after actions, segments are added. |

---

##### `toString` <a name="toString" id="raindancers-network.CoreNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addSegment` <a name="addSegment" id="raindancers-network.CoreNetwork.addSegment"></a>

```typescript
public addSegment(props: Segment): CoreNetworkSegment
```

Add a segment to the core network.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CoreNetwork.addSegment.parameter.props"></a>

- *Type:* <a href="#raindancers-network.Segment">Segment</a>

properties of the segment.

---

##### `share` <a name="share" id="raindancers-network.CoreNetwork.share"></a>

```typescript
public share(props: CoreNetworkShare): void
```

Create a CoreNetwork Sharing.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CoreNetwork.share.parameter.props"></a>

- *Type:* <a href="#raindancers-network.CoreNetworkShare">CoreNetworkShare</a>

Share properties.

---

##### `updatePolicy` <a name="updatePolicy" id="raindancers-network.CoreNetwork.updatePolicy"></a>

```typescript
public updatePolicy(): void
```

Update the corewan policy after actions, segments are added.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.CoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.CoreNetwork.isConstruct"></a>

```typescript
import { CoreNetwork } from 'raindancers-network'

CoreNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.CoreNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.CoreNetwork.property.cfnCoreNetwork">cfnCoreNetwork</a></code> | <code>aws-cdk-lib.aws_networkmanager.CfnCoreNetwork</code> | The corenetwork object. |
| <code><a href="#raindancers-network.CoreNetwork.property.coreName">coreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetwork.property.policyTable">policyTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | THe dynamo table holding the policy. |
| <code><a href="#raindancers-network.CoreNetwork.property.policyTableName">policyTableName</a></code> | <code>string</code> | Name of the Dynamo Table holding the policy. |
| <code><a href="#raindancers-network.CoreNetwork.property.policyTableServiceToken">policyTableServiceToken</a></code> | <code>string</code> | The policyTable Lamba's Service Token. |
| <code><a href="#raindancers-network.CoreNetwork.property.updateProviderToken">updateProviderToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.CoreNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnCoreNetwork`<sup>Required</sup> <a name="cfnCoreNetwork" id="raindancers-network.CoreNetwork.property.cfnCoreNetwork"></a>

```typescript
public readonly cfnCoreNetwork: CfnCoreNetwork;
```

- *Type:* aws-cdk-lib.aws_networkmanager.CfnCoreNetwork

The corenetwork object.

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-network.CoreNetwork.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

---

##### `policyTable`<sup>Required</sup> <a name="policyTable" id="raindancers-network.CoreNetwork.property.policyTable"></a>

```typescript
public readonly policyTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

THe dynamo table holding the policy.

---

##### `policyTableName`<sup>Required</sup> <a name="policyTableName" id="raindancers-network.CoreNetwork.property.policyTableName"></a>

```typescript
public readonly policyTableName: string;
```

- *Type:* string

Name of the Dynamo Table holding the policy.

---

##### `policyTableServiceToken`<sup>Required</sup> <a name="policyTableServiceToken" id="raindancers-network.CoreNetwork.property.policyTableServiceToken"></a>

```typescript
public readonly policyTableServiceToken: string;
```

- *Type:* string

The policyTable Lamba's Service Token.

---

##### `updateProviderToken`<sup>Required</sup> <a name="updateProviderToken" id="raindancers-network.CoreNetwork.property.updateProviderToken"></a>

```typescript
public readonly updateProviderToken: string;
```

- *Type:* string

---


### CoreNetworkSegment <a name="CoreNetworkSegment" id="raindancers-network.CoreNetworkSegment"></a>

Create a Network Segment in a core network.

#### Initializers <a name="Initializers" id="raindancers-network.CoreNetworkSegment.Initializer"></a>

```typescript
import { CoreNetworkSegment } from 'raindancers-network'

new CoreNetworkSegment(scope: Construct, id: string, props: ICoreNetworkSegmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CoreNetworkSegment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetworkSegment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetworkSegment.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.ICoreNetworkSegmentProps">ICoreNetworkSegmentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.CoreNetworkSegment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.CoreNetworkSegment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CoreNetworkSegment.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.ICoreNetworkSegmentProps">ICoreNetworkSegmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.CoreNetworkSegment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.CoreNetworkSegment.addAttachmentPolicy">addAttachmentPolicy</a></code> | Add an AttachmentPolicy to a segment. |
| <code><a href="#raindancers-network.CoreNetworkSegment.addSegmentAction">addSegmentAction</a></code> | Add an Action to the Segment, ( Share or Route ). |

---

##### `toString` <a name="toString" id="raindancers-network.CoreNetworkSegment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addAttachmentPolicy` <a name="addAttachmentPolicy" id="raindancers-network.CoreNetworkSegment.addAttachmentPolicy"></a>

```typescript
public addAttachmentPolicy(props: AttachmentPolicy): void
```

Add an AttachmentPolicy to a segment.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CoreNetworkSegment.addAttachmentPolicy.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AttachmentPolicy">AttachmentPolicy</a>

An attachment policy.

---

##### `addSegmentAction` <a name="addSegmentAction" id="raindancers-network.CoreNetworkSegment.addSegmentAction"></a>

```typescript
public addSegmentAction(props: SegmentAction): void
```

Add an Action to the Segment, ( Share or Route ).

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.CoreNetworkSegment.addSegmentAction.parameter.props"></a>

- *Type:* <a href="#raindancers-network.SegmentAction">SegmentAction</a>

segment action.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.CoreNetworkSegment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.CoreNetworkSegment.isConstruct"></a>

```typescript
import { CoreNetworkSegment } from 'raindancers-network'

CoreNetworkSegment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.CoreNetworkSegment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CoreNetworkSegment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.CoreNetworkSegment.property.policyTableServiceToken">policyTableServiceToken</a></code> | <code>string</code> | Service token for. |
| <code><a href="#raindancers-network.CoreNetworkSegment.property.segmentName">segmentName</a></code> | <code>string</code> | the name for the segment. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.CoreNetworkSegment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `policyTableServiceToken`<sup>Required</sup> <a name="policyTableServiceToken" id="raindancers-network.CoreNetworkSegment.property.policyTableServiceToken"></a>

```typescript
public readonly policyTableServiceToken: string;
```

- *Type:* string

Service token for.

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-network.CoreNetworkSegment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

the name for the segment.

---


### EnterpriseVpc <a name="EnterpriseVpc" id="raindancers-network.EnterpriseVpc"></a>

Enteprise VPC's take the stock ec2.Vpc and provide numerous convience methods primarly related to connecting to internal networks.

#### Initializers <a name="Initializers" id="raindancers-network.EnterpriseVpc.Initializer"></a>

```typescript
import { EnterpriseVpc } from 'raindancers-network'

new EnterpriseVpc(scope: Construct, id: string, props: EnterpriseVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.EnterpriseVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.EnterpriseVpcProps">EnterpriseVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.EnterpriseVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.EnterpriseVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.EnterpriseVpcProps">EnterpriseVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.EnterpriseVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#raindancers-network.EnterpriseVpc.addCoreRoutes">addCoreRoutes</a></code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.addR53Zone">addR53Zone</a></code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.addRoutes">addRoutes</a></code> | Add routes to SubnetGroups ( by implication their routing tables ). |
| <code><a href="#raindancers-network.EnterpriseVpc.attachToCloudWan">attachToCloudWan</a></code> | attachToCloudWan will attach a VPC to CloudWan, in a particular Segment. |
| <code><a href="#raindancers-network.EnterpriseVpc.attachToTransitGateway">attachToTransitGateway</a></code> | Attach a vpc to a transit gateway, possibly in appliance mode Its intended purpose is provide a. |
| <code><a href="#raindancers-network.EnterpriseVpc.createFlowLog">createFlowLog</a></code> | Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys. |
| <code><a href="#raindancers-network.EnterpriseVpc.shareSubnetGroup">shareSubnetGroup</a></code> | Share a subnetGroup with another AWS Account. |

---

##### `toString` <a name="toString" id="raindancers-network.EnterpriseVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addCoreRoutes` <a name="addCoreRoutes" id="raindancers-network.EnterpriseVpc.addCoreRoutes"></a>

```typescript
public addCoreRoutes(props: AddCoreRoutesProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.addCoreRoutes.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AddCoreRoutesProps">AddCoreRoutesProps</a>

---

##### `addR53Zone` <a name="addR53Zone" id="raindancers-network.EnterpriseVpc.addR53Zone"></a>

```typescript
public addR53Zone(props: AddR53ZoneProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.addR53Zone.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AddR53ZoneProps">AddR53ZoneProps</a>

---

##### `addRoutes` <a name="addRoutes" id="raindancers-network.EnterpriseVpc.addRoutes"></a>

```typescript
public addRoutes(props: AddRoutesProps): void
```

Add routes to SubnetGroups ( by implication their routing tables ).

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.addRoutes.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AddRoutesProps">AddRoutesProps</a>

---

##### `attachToCloudWan` <a name="attachToCloudWan" id="raindancers-network.EnterpriseVpc.attachToCloudWan"></a>

```typescript
public attachToCloudWan(props: AttachToCloudWanProps): string
```

attachToCloudWan will attach a VPC to CloudWan, in a particular Segment.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.attachToCloudWan.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AttachToCloudWanProps">AttachToCloudWanProps</a>

---

##### `attachToTransitGateway` <a name="attachToTransitGateway" id="raindancers-network.EnterpriseVpc.attachToTransitGateway"></a>

```typescript
public attachToTransitGateway(props: AttachToTransitGatewayProps): string
```

Attach a vpc to a transit gateway, possibly in appliance mode Its intended purpose is provide a.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.attachToTransitGateway.parameter.props"></a>

- *Type:* <a href="#raindancers-network.AttachToTransitGatewayProps">AttachToTransitGatewayProps</a>

---

##### `createFlowLog` <a name="createFlowLog" id="raindancers-network.EnterpriseVpc.createFlowLog"></a>

```typescript
public createFlowLog(props: FlowLogProps): void
```

Create Enterprise VPC Flow Logs (to central log account) and advanced diagnostics with Athena Querys.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.createFlowLog.parameter.props"></a>

- *Type:* <a href="#raindancers-network.FlowLogProps">FlowLogProps</a>

---

##### `shareSubnetGroup` <a name="shareSubnetGroup" id="raindancers-network.EnterpriseVpc.shareSubnetGroup"></a>

```typescript
public shareSubnetGroup(props: ShareSubnetGroupProps): void
```

Share a subnetGroup with another AWS Account.

###### `props`<sup>Required</sup> <a name="props" id="raindancers-network.EnterpriseVpc.shareSubnetGroup.parameter.props"></a>

- *Type:* <a href="#raindancers-network.ShareSubnetGroupProps">ShareSubnetGroupProps</a>

ShareSubnetGroup.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.EnterpriseVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.EnterpriseVpc.isConstruct"></a>

```typescript
import { EnterpriseVpc } from 'raindancers-network'

EnterpriseVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.EnterpriseVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.EnterpriseVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.addRoutesProvider">addRoutesProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.property.attachToCloudwanProvider">attachToCloudwanProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.property.tgWaiterProvider">tgWaiterProvider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | the ec2.Vpc that is passed in as property. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.cloudWanCoreId">cloudWanCoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.EnterpriseVpc.property.cloudWanName">cloudWanName</a></code> | <code>string</code> | the Name of the cloudwan that the VPC is attached to. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.cloudWanSegment">cloudWanSegment</a></code> | <code>string</code> | the Name of the Cloudwan segment that the vpc is attached to. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.cloudWanVpcAttachmentId">cloudWanVpcAttachmentId</a></code> | <code>string</code> | AttachmentId when the vpc is attached to a Cloudwan. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.transitGWAttachmentID">transitGWAttachmentID</a></code> | <code>string</code> | AttachmentId when the vpc is attached to a transitGateway. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.transitGWID">transitGWID</a></code> | <code>string</code> | The Id of the transitgateway that the VPC is attached to. |
| <code><a href="#raindancers-network.EnterpriseVpc.property.vpcAttachmentCR">vpcAttachmentCR</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.EnterpriseVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addRoutesProvider`<sup>Required</sup> <a name="addRoutesProvider" id="raindancers-network.EnterpriseVpc.property.addRoutesProvider"></a>

```typescript
public readonly addRoutesProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `attachToCloudwanProvider`<sup>Required</sup> <a name="attachToCloudwanProvider" id="raindancers-network.EnterpriseVpc.property.attachToCloudwanProvider"></a>

```typescript
public readonly attachToCloudwanProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `tgWaiterProvider`<sup>Required</sup> <a name="tgWaiterProvider" id="raindancers-network.EnterpriseVpc.property.tgWaiterProvider"></a>

```typescript
public readonly tgWaiterProvider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.EnterpriseVpc.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

the ec2.Vpc that is passed in as property.

---

##### `cloudWanCoreId`<sup>Optional</sup> <a name="cloudWanCoreId" id="raindancers-network.EnterpriseVpc.property.cloudWanCoreId"></a>

```typescript
public readonly cloudWanCoreId: string;
```

- *Type:* string

---

##### `cloudWanName`<sup>Optional</sup> <a name="cloudWanName" id="raindancers-network.EnterpriseVpc.property.cloudWanName"></a>

```typescript
public readonly cloudWanName: string;
```

- *Type:* string

the Name of the cloudwan that the VPC is attached to.

---

##### `cloudWanSegment`<sup>Optional</sup> <a name="cloudWanSegment" id="raindancers-network.EnterpriseVpc.property.cloudWanSegment"></a>

```typescript
public readonly cloudWanSegment: string;
```

- *Type:* string

the Name of the Cloudwan segment that the vpc is attached to.

---

##### `cloudWanVpcAttachmentId`<sup>Optional</sup> <a name="cloudWanVpcAttachmentId" id="raindancers-network.EnterpriseVpc.property.cloudWanVpcAttachmentId"></a>

```typescript
public readonly cloudWanVpcAttachmentId: string;
```

- *Type:* string

AttachmentId when the vpc is attached to a Cloudwan.

---

##### `transitGWAttachmentID`<sup>Optional</sup> <a name="transitGWAttachmentID" id="raindancers-network.EnterpriseVpc.property.transitGWAttachmentID"></a>

```typescript
public readonly transitGWAttachmentID: string;
```

- *Type:* string

AttachmentId when the vpc is attached to a transitGateway.

---

##### `transitGWID`<sup>Optional</sup> <a name="transitGWID" id="raindancers-network.EnterpriseVpc.property.transitGWID"></a>

```typescript
public readonly transitGWID: string;
```

- *Type:* string

The Id of the transitgateway that the VPC is attached to.

---

##### `vpcAttachmentCR`<sup>Optional</sup> <a name="vpcAttachmentCR" id="raindancers-network.EnterpriseVpc.property.vpcAttachmentCR"></a>

```typescript
public readonly vpcAttachmentCR: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---


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
| <code><a href="#raindancers-network.Evpc.fromLookup">fromLookup</a></code> | Import an existing VPC by querying the AWS environment this stack is deployed to. |
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

Import an existing VPC by querying the AWS environment this stack is deployed to.

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


### NetworkFirewall <a name="NetworkFirewall" id="raindancers-network.NetworkFirewall"></a>

Creates Network Firewalls.

#### Initializers <a name="Initializers" id="raindancers-network.NetworkFirewall.Initializer"></a>

```typescript
import { NetworkFirewall } from 'raindancers-network'

new NetworkFirewall(scope: Construct, id: string, props: NetworkFirewallProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.NetworkFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | Scope. |
| <code><a href="#raindancers-network.NetworkFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | id. |
| <code><a href="#raindancers-network.NetworkFirewall.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.NetworkFirewallProps">NetworkFirewallProps</a></code> | props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.NetworkFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Scope.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.NetworkFirewall.Initializer.parameter.id"></a>

- *Type:* string

id.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.NetworkFirewall.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.NetworkFirewallProps">NetworkFirewallProps</a>

props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.NetworkFirewall.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.NetworkFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.NetworkFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.NetworkFirewall.isConstruct"></a>

```typescript
import { NetworkFirewall } from 'raindancers-network'

NetworkFirewall.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.NetworkFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.NetworkFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.NetworkFirewall.property.endPointIds">endPointIds</a></code> | <code>string[]</code> | Gateway Endpoints for the Firewalls. |
| <code><a href="#raindancers-network.NetworkFirewall.property.firewallArn">firewallArn</a></code> | <code>string</code> | Arn of the firewall. |
| <code><a href="#raindancers-network.NetworkFirewall.property.firewallId">firewallId</a></code> | <code>string</code> | Firewall ID. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.NetworkFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endPointIds`<sup>Required</sup> <a name="endPointIds" id="raindancers-network.NetworkFirewall.property.endPointIds"></a>

```typescript
public readonly endPointIds: string[];
```

- *Type:* string[]

Gateway Endpoints for the Firewalls.

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="raindancers-network.NetworkFirewall.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

Arn of the firewall.

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="raindancers-network.NetworkFirewall.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

Firewall ID.

---


### R53Resolverendpoints <a name="R53Resolverendpoints" id="raindancers-network.R53Resolverendpoints"></a>

Create Route53 Resolver Endpoints for MultiVPC and Hybrid DNS Resolution.

#### Initializers <a name="Initializers" id="raindancers-network.R53Resolverendpoints.Initializer"></a>

```typescript
import { R53Resolverendpoints } from 'raindancers-network'

new R53Resolverendpoints(scope: Construct, id: string, props: R53ResolverendpointsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.R53Resolverendpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which these resources are craeted. |
| <code><a href="#raindancers-network.R53Resolverendpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | the id of the construct. |
| <code><a href="#raindancers-network.R53Resolverendpoints.Initializer.parameter.props">props</a></code> | <code><a href="#raindancers-network.R53ResolverendpointsProps">R53ResolverendpointsProps</a></code> | propertys for the R53Resolver Endpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="raindancers-network.R53Resolverendpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which these resources are craeted.

---

##### `id`<sup>Required</sup> <a name="id" id="raindancers-network.R53Resolverendpoints.Initializer.parameter.id"></a>

- *Type:* string

the id of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="raindancers-network.R53Resolverendpoints.Initializer.parameter.props"></a>

- *Type:* <a href="#raindancers-network.R53ResolverendpointsProps">R53ResolverendpointsProps</a>

propertys for the R53Resolver Endpoints.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.R53Resolverendpoints.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="raindancers-network.R53Resolverendpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.R53Resolverendpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="raindancers-network.R53Resolverendpoints.isConstruct"></a>

```typescript
import { R53Resolverendpoints } from 'raindancers-network'

R53Resolverendpoints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="raindancers-network.R53Resolverendpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.R53Resolverendpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#raindancers-network.R53Resolverendpoints.property.inboundResolver">inboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | inbound resolver. |
| <code><a href="#raindancers-network.R53Resolverendpoints.property.inboundResolversIp">inboundResolversIp</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]</code> | list of Resolver IP address's. |
| <code><a href="#raindancers-network.R53Resolverendpoints.property.outboundResolver">outboundResolver</a></code> | <code>aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint</code> | outbound resolver. |

---

##### `node`<sup>Required</sup> <a name="node" id="raindancers-network.R53Resolverendpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `inboundResolver`<sup>Required</sup> <a name="inboundResolver" id="raindancers-network.R53Resolverendpoints.property.inboundResolver"></a>

```typescript
public readonly inboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

inbound resolver.

---

##### `inboundResolversIp`<sup>Required</sup> <a name="inboundResolversIp" id="raindancers-network.R53Resolverendpoints.property.inboundResolversIp"></a>

```typescript
public readonly inboundResolversIp: TargetAddressProperty[];
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverRule.TargetAddressProperty[]

list of Resolver IP address's.

---

##### `outboundResolver`<sup>Required</sup> <a name="outboundResolver" id="raindancers-network.R53Resolverendpoints.property.outboundResolver"></a>

```typescript
public readonly outboundResolver: CfnResolverEndpoint;
```

- *Type:* aws-cdk-lib.aws_route53resolver.CfnResolverEndpoint

outbound resolver.

---


## Structs <a name="Structs" id="Structs"></a>

### AddCoreRoutesProps <a name="AddCoreRoutesProps" id="raindancers-network.AddCoreRoutesProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.AddCoreRoutesProps.Initializer"></a>

```typescript
import { AddCoreRoutesProps } from 'raindancers-network'

const addCoreRoutesProps: AddCoreRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AddCoreRoutesProps.property.coreName">coreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AddCoreRoutesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AddCoreRoutesProps.property.destinationCidrBlocks">destinationCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.AddCoreRoutesProps.property.policyTable">policyTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AddCoreRoutesProps.property.segments">segments</a></code> | <code>string[]</code> | *No description.* |

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-network.AddCoreRoutesProps.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.AddCoreRoutesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlocks`<sup>Required</sup> <a name="destinationCidrBlocks" id="raindancers-network.AddCoreRoutesProps.property.destinationCidrBlocks"></a>

```typescript
public readonly destinationCidrBlocks: string[];
```

- *Type:* string[]

---

##### `policyTable`<sup>Required</sup> <a name="policyTable" id="raindancers-network.AddCoreRoutesProps.property.policyTable"></a>

```typescript
public readonly policyTable: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="raindancers-network.AddCoreRoutesProps.property.segments"></a>

```typescript
public readonly segments: string[];
```

- *Type:* string[]

---

### AddR53ZoneProps <a name="AddR53ZoneProps" id="raindancers-network.AddR53ZoneProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.AddR53ZoneProps.Initializer"></a>

```typescript
import { AddR53ZoneProps } from 'raindancers-network'

const addR53ZoneProps: AddR53ZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AddR53ZoneProps.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AddR53ZoneProps.property.centralVpc">centralVpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `zone`<sup>Required</sup> <a name="zone" id="raindancers-network.AddR53ZoneProps.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `centralVpc`<sup>Optional</sup> <a name="centralVpc" id="raindancers-network.AddR53ZoneProps.property.centralVpc"></a>

```typescript
public readonly centralVpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

### AddRoutesProps <a name="AddRoutesProps" id="raindancers-network.AddRoutesProps"></a>

Propertys for Adding Routes in VPC.

#### Initializer <a name="Initializer" id="raindancers-network.AddRoutesProps.Initializer"></a>

```typescript
import { AddRoutesProps } from 'raindancers-network'

const addRoutesProps: AddRoutesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AddRoutesProps.property.cidr">cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.AddRoutesProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AddRoutesProps.property.destination">destination</a></code> | <code><a href="#raindancers-network.Destination">Destination</a></code> | *No description.* |
| <code><a href="#raindancers-network.AddRoutesProps.property.subnetGroups">subnetGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.AddRoutesProps.property.cloudwanName">cloudwanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AddRoutesProps.property.networkFirewallArn">networkFirewallArn</a></code> | <code>string</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="raindancers-network.AddRoutesProps.property.cidr"></a>

```typescript
public readonly cidr: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.AddRoutesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="raindancers-network.AddRoutesProps.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#raindancers-network.Destination">Destination</a>

---

##### `subnetGroups`<sup>Required</sup> <a name="subnetGroups" id="raindancers-network.AddRoutesProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: string[];
```

- *Type:* string[]

---

##### `cloudwanName`<sup>Optional</sup> <a name="cloudwanName" id="raindancers-network.AddRoutesProps.property.cloudwanName"></a>

```typescript
public readonly cloudwanName: string;
```

- *Type:* string

---

##### `networkFirewallArn`<sup>Optional</sup> <a name="networkFirewallArn" id="raindancers-network.AddRoutesProps.property.networkFirewallArn"></a>

```typescript
public readonly networkFirewallArn: string;
```

- *Type:* string

---

### AttachmentConditions <a name="AttachmentConditions" id="raindancers-network.AttachmentConditions"></a>

an attachmentconditions.

#### Initializer <a name="Initializer" id="raindancers-network.AttachmentConditions.Initializer"></a>

```typescript
import { AttachmentConditions } from 'raindancers-network'

const attachmentConditions: AttachmentConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AttachmentConditions.property.type">type</a></code> | <code><a href="#raindancers-network.AttachmentCondition">AttachmentCondition</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentConditions.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentConditions.property.operator">operator</a></code> | <code><a href="#raindancers-network.Operators">Operators</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentConditions.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="raindancers-network.AttachmentConditions.property.type"></a>

```typescript
public readonly type: AttachmentCondition;
```

- *Type:* <a href="#raindancers-network.AttachmentCondition">AttachmentCondition</a>

---

##### `key`<sup>Optional</sup> <a name="key" id="raindancers-network.AttachmentConditions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Optional</sup> <a name="operator" id="raindancers-network.AttachmentConditions.property.operator"></a>

```typescript
public readonly operator: Operators;
```

- *Type:* <a href="#raindancers-network.Operators">Operators</a>

---

##### `value`<sup>Optional</sup> <a name="value" id="raindancers-network.AttachmentConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### AttachmentPolicy <a name="AttachmentPolicy" id="raindancers-network.AttachmentPolicy"></a>

an attachment policy.

#### Initializer <a name="Initializer" id="raindancers-network.AttachmentPolicy.Initializer"></a>

```typescript
import { AttachmentPolicy } from 'raindancers-network'

const attachmentPolicy: AttachmentPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AttachmentPolicy.property.action">action</a></code> | <code><a href="#raindancers-network.AttachmentPolicyAction">AttachmentPolicyAction</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentPolicy.property.conditions">conditions</a></code> | <code><a href="#raindancers-network.AttachmentConditions">AttachmentConditions</a>[]</code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentPolicy.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentPolicy.property.conditionLogic">conditionLogic</a></code> | <code><a href="#raindancers-network.ConditionLogic">ConditionLogic</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="raindancers-network.AttachmentPolicy.property.action"></a>

```typescript
public readonly action: AttachmentPolicyAction;
```

- *Type:* <a href="#raindancers-network.AttachmentPolicyAction">AttachmentPolicyAction</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="raindancers-network.AttachmentPolicy.property.conditions"></a>

```typescript
public readonly conditions: AttachmentConditions[];
```

- *Type:* <a href="#raindancers-network.AttachmentConditions">AttachmentConditions</a>[]

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="raindancers-network.AttachmentPolicy.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `conditionLogic`<sup>Optional</sup> <a name="conditionLogic" id="raindancers-network.AttachmentPolicy.property.conditionLogic"></a>

```typescript
public readonly conditionLogic: ConditionLogic;
```

- *Type:* <a href="#raindancers-network.ConditionLogic">ConditionLogic</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.AttachmentPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### AttachmentPolicyAction <a name="AttachmentPolicyAction" id="raindancers-network.AttachmentPolicyAction"></a>

Attachment Policy Action.

#### Initializer <a name="Initializer" id="raindancers-network.AttachmentPolicyAction.Initializer"></a>

```typescript
import { AttachmentPolicyAction } from 'raindancers-network'

const attachmentPolicyAction: AttachmentPolicyAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AttachmentPolicyAction.property.associationMethod">associationMethod</a></code> | <code><a href="#raindancers-network.AssociationMethod">AssociationMethod</a></code> | The Assocation Method. |
| <code><a href="#raindancers-network.AttachmentPolicyAction.property.segment">segment</a></code> | <code>string</code> | The Segment this applies to. |

---

##### `associationMethod`<sup>Required</sup> <a name="associationMethod" id="raindancers-network.AttachmentPolicyAction.property.associationMethod"></a>

```typescript
public readonly associationMethod: AssociationMethod;
```

- *Type:* <a href="#raindancers-network.AssociationMethod">AssociationMethod</a>

The Assocation Method.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="raindancers-network.AttachmentPolicyAction.property.segment"></a>

```typescript
public readonly segment: string;
```

- *Type:* string

The Segment this applies to.

---

### AttachToCloudWanProps <a name="AttachToCloudWanProps" id="raindancers-network.AttachToCloudWanProps"></a>

Propertys for Attaching to a Cloudwan Core Network.

#### Initializer <a name="Initializer" id="raindancers-network.AttachToCloudWanProps.Initializer"></a>

```typescript
import { AttachToCloudWanProps } from 'raindancers-network'

const attachToCloudWanProps: AttachToCloudWanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AttachToCloudWanProps.property.coreNetworkName">coreNetworkName</a></code> | <code>string</code> | corenetworkName. |
| <code><a href="#raindancers-network.AttachToCloudWanProps.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.AttachToCloudWanProps.property.applianceMode">applianceMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.AttachToCloudWanProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |

---

##### `coreNetworkName`<sup>Required</sup> <a name="coreNetworkName" id="raindancers-network.AttachToCloudWanProps.property.coreNetworkName"></a>

```typescript
public readonly coreNetworkName: string;
```

- *Type:* string

corenetworkName.

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-network.AttachToCloudWanProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `applianceMode`<sup>Optional</sup> <a name="applianceMode" id="raindancers-network.AttachToCloudWanProps.property.applianceMode"></a>

```typescript
public readonly applianceMode: boolean;
```

- *Type:* boolean

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-network.AttachToCloudWanProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

### AttachToTransitGatewayProps <a name="AttachToTransitGatewayProps" id="raindancers-network.AttachToTransitGatewayProps"></a>

Propertys to attach the Vpc To Transit Gateway.

#### Initializer <a name="Initializer" id="raindancers-network.AttachToTransitGatewayProps.Initializer"></a>

```typescript
import { AttachToTransitGatewayProps } from 'raindancers-network'

const attachToTransitGatewayProps: AttachToTransitGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AttachToTransitGatewayProps.property.transitGateway">transitGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnTransitGateway</code> | the TransitGateway to connect to. |
| <code><a href="#raindancers-network.AttachToTransitGatewayProps.property.applicanceMode">applicanceMode</a></code> | <code><a href="#raindancers-network.ApplianceMode">ApplianceMode</a></code> | Will this be connected in appliance mode ( used if you have Network Firewalls ). |
| <code><a href="#raindancers-network.AttachToTransitGatewayProps.property.attachmentSubnetGroup">attachmentSubnetGroup</a></code> | <code>string</code> | *No description.* |

---

##### `transitGateway`<sup>Required</sup> <a name="transitGateway" id="raindancers-network.AttachToTransitGatewayProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: CfnTransitGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnTransitGateway

the TransitGateway to connect to.

---

##### `applicanceMode`<sup>Optional</sup> <a name="applicanceMode" id="raindancers-network.AttachToTransitGatewayProps.property.applicanceMode"></a>

```typescript
public readonly applicanceMode: ApplianceMode;
```

- *Type:* <a href="#raindancers-network.ApplianceMode">ApplianceMode</a>

Will this be connected in appliance mode ( used if you have Network Firewalls ).

---

##### `attachmentSubnetGroup`<sup>Optional</sup> <a name="attachmentSubnetGroup" id="raindancers-network.AttachToTransitGatewayProps.property.attachmentSubnetGroup"></a>

```typescript
public readonly attachmentSubnetGroup: string;
```

- *Type:* string

---

### AwsServiceEndPointsProps <a name="AwsServiceEndPointsProps" id="raindancers-network.AwsServiceEndPointsProps"></a>

Properties to create a set of AWS service Endpoints.

#### Initializer <a name="Initializer" id="raindancers-network.AwsServiceEndPointsProps.Initializer"></a>

```typescript
import { AwsServiceEndPointsProps } from 'raindancers-network'

const awsServiceEndPointsProps: AwsServiceEndPointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.AwsServiceEndPointsProps.property.services">services</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | An arry of InterfaceVPCEndpoints. |
| <code><a href="#raindancers-network.AwsServiceEndPointsProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | Subnet Group in which to create the service. |
| <code><a href="#raindancers-network.AwsServiceEndPointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | The vpc in which the service is created. |
| <code><a href="#raindancers-network.AwsServiceEndPointsProps.property.dynamoDBGatewayInterface">dynamoDBGatewayInterface</a></code> | <code>boolean</code> | indicate true for a Dynamo Gateway Interface. |
| <code><a href="#raindancers-network.AwsServiceEndPointsProps.property.s3GatewayInterface">s3GatewayInterface</a></code> | <code>boolean</code> | indicate true for a S3 Gateway Interface. |

---

##### `services`<sup>Required</sup> <a name="services" id="raindancers-network.AwsServiceEndPointsProps.property.services"></a>

```typescript
public readonly services: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

An arry of InterfaceVPCEndpoints.

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.AwsServiceEndPointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

Subnet Group in which to create the service.

Typically a subnet Dedicated to the task

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.AwsServiceEndPointsProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

The vpc in which the service is created.

---

##### `dynamoDBGatewayInterface`<sup>Optional</sup> <a name="dynamoDBGatewayInterface" id="raindancers-network.AwsServiceEndPointsProps.property.dynamoDBGatewayInterface"></a>

```typescript
public readonly dynamoDBGatewayInterface: boolean;
```

- *Type:* boolean

indicate true for a Dynamo Gateway Interface.

---

##### `s3GatewayInterface`<sup>Optional</sup> <a name="s3GatewayInterface" id="raindancers-network.AwsServiceEndPointsProps.property.s3GatewayInterface"></a>

```typescript
public readonly s3GatewayInterface: boolean;
```

- *Type:* boolean

indicate true for a S3 Gateway Interface.

---

### CoreNetworkProps <a name="CoreNetworkProps" id="raindancers-network.CoreNetworkProps"></a>

CoreNetwork Properties.

#### Initializer <a name="Initializer" id="raindancers-network.CoreNetworkProps.Initializer"></a>

```typescript
import { CoreNetworkProps } from 'raindancers-network'

const coreNetworkProps: CoreNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CoreNetworkProps.property.asnRanges">asnRanges</a></code> | <code>string[]</code> | a list of of asn's that can be used. |
| <code><a href="#raindancers-network.CoreNetworkProps.property.coreName">coreName</a></code> | <code>string</code> | core name. |
| <code><a href="#raindancers-network.CoreNetworkProps.property.edgeLocations">edgeLocations</a></code> | <code>object[]</code> | list of edgeLocaitons. |
| <code><a href="#raindancers-network.CoreNetworkProps.property.globalNetwork">globalNetwork</a></code> | <code>aws-cdk-lib.aws_networkmanager.CfnGlobalNetwork</code> | Which Global Network. |
| <code><a href="#raindancers-network.CoreNetworkProps.property.policyDescription">policyDescription</a></code> | <code>string</code> | a decription for the policy Document. |
| <code><a href="#raindancers-network.CoreNetworkProps.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | List of InsideCidr Blocks. |
| <code><a href="#raindancers-network.CoreNetworkProps.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>boolean</code> | support VpnECmp. |

---

##### `asnRanges`<sup>Required</sup> <a name="asnRanges" id="raindancers-network.CoreNetworkProps.property.asnRanges"></a>

```typescript
public readonly asnRanges: string[];
```

- *Type:* string[]

a list of of asn's that can be used.

---

##### `coreName`<sup>Required</sup> <a name="coreName" id="raindancers-network.CoreNetworkProps.property.coreName"></a>

```typescript
public readonly coreName: string;
```

- *Type:* string

core name.

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="raindancers-network.CoreNetworkProps.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: object[];
```

- *Type:* object[]

list of edgeLocaitons.

---

##### `globalNetwork`<sup>Required</sup> <a name="globalNetwork" id="raindancers-network.CoreNetworkProps.property.globalNetwork"></a>

```typescript
public readonly globalNetwork: CfnGlobalNetwork;
```

- *Type:* aws-cdk-lib.aws_networkmanager.CfnGlobalNetwork

Which Global Network.

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="raindancers-network.CoreNetworkProps.property.policyDescription"></a>

```typescript
public readonly policyDescription: string;
```

- *Type:* string

a decription for the policy Document.

---

##### `insideCidrBlocks`<sup>Optional</sup> <a name="insideCidrBlocks" id="raindancers-network.CoreNetworkProps.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

List of InsideCidr Blocks.

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="vpnEcmpSupport" id="raindancers-network.CoreNetworkProps.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: boolean;
```

- *Type:* boolean

support VpnECmp.

---

### CoreNetworkShare <a name="CoreNetworkShare" id="raindancers-network.CoreNetworkShare"></a>

CoreNetworkShare.

#### Initializer <a name="Initializer" id="raindancers-network.CoreNetworkShare.Initializer"></a>

```typescript
import { CoreNetworkShare } from 'raindancers-network'

const coreNetworkShare: CoreNetworkShare = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.CoreNetworkShare.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetworkShare.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.CoreNetworkShare.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | *No description.* |

---

##### `allowExternalPrincipals`<sup>Required</sup> <a name="allowExternalPrincipals" id="raindancers-network.CoreNetworkShare.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean

---

##### `principals`<sup>Required</sup> <a name="principals" id="raindancers-network.CoreNetworkShare.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="raindancers-network.CoreNetworkShare.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]

---

### EnterpriseVpcProps <a name="EnterpriseVpcProps" id="raindancers-network.EnterpriseVpcProps"></a>

Propertys for an Enterprise VPC.

#### Initializer <a name="Initializer" id="raindancers-network.EnterpriseVpcProps.Initializer"></a>

```typescript
import { EnterpriseVpcProps } from 'raindancers-network'

const enterpriseVpcProps: EnterpriseVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.EnterpriseVpcProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.EnterpriseVpcProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

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
| <code><a href="#raindancers-network.EvpcProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | The Provider to use to allocate IP Space to your VPC. |
| <code><a href="#raindancers-network.EvpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | Define the maximum number of AZs to use in this region. |
| <code><a href="#raindancers-network.EvpcProps.property.natGatewayProvider">natGatewayProvider</a></code> | <code>aws-cdk-lib.aws_ec2.NatProvider</code> | What type of NAT provider to use. |
| <code><a href="#raindancers-network.EvpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT Gateways/Instances to create. |
| <code><a href="#raindancers-network.EvpcProps.property.natGatewaySubnets">natGatewaySubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Configures the subnets which will have NAT Gateways/Instances. |
| <code><a href="#raindancers-network.EvpcProps.property.reservedAzs">reservedAzs</a></code> | <code>number</code> | Define the number of AZs to reserve. |
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

##### ~~`cidr`~~<sup>Optional</sup> <a name="cidr" id="raindancers-network.EvpcProps.property.cidr"></a>

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

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="raindancers-network.EvpcProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses
- *Default:* ec2.IpAddresses.cidr

The Provider to use to allocate IP Space to your VPC.

Options include static allocation or from a pool.

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

##### `reservedAzs`<sup>Optional</sup> <a name="reservedAzs" id="raindancers-network.EvpcProps.property.reservedAzs"></a>

```typescript
public readonly reservedAzs: number;
```

- *Type:* number
- *Default:* 0

Define the number of AZs to reserve.

When specified, the IP space is reserved for the azs but no actual
resources are provisioned.

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

### FlowLogProps <a name="FlowLogProps" id="raindancers-network.FlowLogProps"></a>

Properties for flow logs *.

#### Initializer <a name="Initializer" id="raindancers-network.FlowLogProps.Initializer"></a>

```typescript
import { FlowLogProps } from 'raindancers-network'

const flowLogProps: FlowLogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.FlowLogProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | the central s3 location for enterprise flow logs. |
| <code><a href="#raindancers-network.FlowLogProps.property.localAthenaQuerys">localAthenaQuerys</a></code> | <code>boolean</code> | create in Account Athena Querys for flow logs. |
| <code><a href="#raindancers-network.FlowLogProps.property.oneMinuteFlowLogs">oneMinuteFlowLogs</a></code> | <code>boolean</code> | 1 minute resolution. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-network.FlowLogProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

the central s3 location for enterprise flow logs.

---

##### `localAthenaQuerys`<sup>Optional</sup> <a name="localAthenaQuerys" id="raindancers-network.FlowLogProps.property.localAthenaQuerys"></a>

```typescript
public readonly localAthenaQuerys: boolean;
```

- *Type:* boolean

create in Account Athena Querys for flow logs.

---

##### `oneMinuteFlowLogs`<sup>Optional</sup> <a name="oneMinuteFlowLogs" id="raindancers-network.FlowLogProps.property.oneMinuteFlowLogs"></a>

```typescript
public readonly oneMinuteFlowLogs: boolean;
```

- *Type:* boolean

1 minute resolution.

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

### NetworkFirewallProps <a name="NetworkFirewallProps" id="raindancers-network.NetworkFirewallProps"></a>

Propertys of a Network Firewall.

#### Initializer <a name="Initializer" id="raindancers-network.NetworkFirewallProps.Initializer"></a>

```typescript
import { NetworkFirewallProps } from 'raindancers-network'

const networkFirewallProps: NetworkFirewallProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.NetworkFirewallProps.property.firewallName">firewallName</a></code> | <code>string</code> | the name that will be given to the firewall. |
| <code><a href="#raindancers-network.NetworkFirewallProps.property.firewallPolicy">firewallPolicy</a></code> | <code>aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy</code> | the firewalls policy. |
| <code><a href="#raindancers-network.NetworkFirewallProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | the subnetGroup where the firewall will be created. |
| <code><a href="#raindancers-network.NetworkFirewallProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | the the vpc where the Network firewall is placed. |

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="raindancers-network.NetworkFirewallProps.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

the name that will be given to the firewall.

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="raindancers-network.NetworkFirewallProps.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: CfnFirewallPolicy;
```

- *Type:* aws-cdk-lib.aws_networkfirewall.CfnFirewallPolicy

the firewalls policy.

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.NetworkFirewallProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

the subnetGroup where the firewall will be created.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.NetworkFirewallProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

the the vpc where the Network firewall is placed.

---

### OutboundForwardingRule <a name="OutboundForwardingRule" id="raindancers-network.OutboundForwardingRule"></a>

#### Initializer <a name="Initializer" id="raindancers-network.OutboundForwardingRule.Initializer"></a>

```typescript
import { OutboundForwardingRule } from 'raindancers-network'

const outboundForwardingRule: OutboundForwardingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.OutboundForwardingRule.property.domain">domain</a></code> | <code>string</code> | domain to forward. |
| <code><a href="#raindancers-network.OutboundForwardingRule.property.forwardTo">forwardTo</a></code> | <code>string[]</code> | array of ip address's to forward request to. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="raindancers-network.OutboundForwardingRule.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

domain to forward.

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="raindancers-network.OutboundForwardingRule.property.forwardTo"></a>

```typescript
public readonly forwardTo: string[];
```

- *Type:* string[]

array of ip address's to forward request to.

---

### R53ResolverendpointsProps <a name="R53ResolverendpointsProps" id="raindancers-network.R53ResolverendpointsProps"></a>

Properties to for creating inbound resolvers.

#### Initializer <a name="Initializer" id="raindancers-network.R53ResolverendpointsProps.Initializer"></a>

```typescript
import { R53ResolverendpointsProps } from 'raindancers-network'

const r53ResolverendpointsProps: R53ResolverendpointsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.R53ResolverendpointsProps.property.subnetGroup">subnetGroup</a></code> | <code>string</code> | the subnetgroup to place the resolvers in. |
| <code><a href="#raindancers-network.R53ResolverendpointsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | the vpc that the resolvers will be placed in. |
| <code><a href="#raindancers-network.R53ResolverendpointsProps.property.outboundForwardingRules">outboundForwardingRules</a></code> | <code><a href="#raindancers-network.OutboundForwardingRule">OutboundForwardingRule</a>[]</code> | An array of Internal domains that can be centrally resolved in this VPC. |
| <code><a href="#raindancers-network.R53ResolverendpointsProps.property.tagValue">tagValue</a></code> | <code>string</code> | Value for Sharing. |

---

##### `subnetGroup`<sup>Required</sup> <a name="subnetGroup" id="raindancers-network.R53ResolverendpointsProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: string;
```

- *Type:* string

the subnetgroup to place the resolvers in.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="raindancers-network.R53ResolverendpointsProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

the vpc that the resolvers will be placed in.

---

##### `outboundForwardingRules`<sup>Optional</sup> <a name="outboundForwardingRules" id="raindancers-network.R53ResolverendpointsProps.property.outboundForwardingRules"></a>

```typescript
public readonly outboundForwardingRules: OutboundForwardingRule[];
```

- *Type:* <a href="#raindancers-network.OutboundForwardingRule">OutboundForwardingRule</a>[]

An array of Internal domains that can be centrally resolved in this VPC.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="raindancers-network.R53ResolverendpointsProps.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Value for Sharing.

---

### SampleConfig <a name="SampleConfig" id="raindancers-network.SampleConfig"></a>

An interface that defines a set of Sample Configurations.

#### Initializer <a name="Initializer" id="raindancers-network.SampleConfig.Initializer"></a>

```typescript
import { SampleConfig } from 'raindancers-network'

const sampleConfig: SampleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.SampleConfig.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | The S3 bucket where to place the sample configurations. |
| <code><a href="#raindancers-network.SampleConfig.property.deviceType">deviceType</a></code> | <code><a href="#raindancers-network.VpnDeviceType">VpnDeviceType</a></code> | the type of device of the customer gateway. |
| <code><a href="#raindancers-network.SampleConfig.property.ikeVersion">ikeVersion</a></code> | <code><a href="#raindancers-network.IkeVersion">IkeVersion</a></code> | create configs for IKE1 or IKE2. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="raindancers-network.SampleConfig.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

The S3 bucket where to place the sample configurations.

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="raindancers-network.SampleConfig.property.deviceType"></a>

```typescript
public readonly deviceType: VpnDeviceType;
```

- *Type:* <a href="#raindancers-network.VpnDeviceType">VpnDeviceType</a>

the type of device of the customer gateway.

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="raindancers-network.SampleConfig.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: IkeVersion;
```

- *Type:* <a href="#raindancers-network.IkeVersion">IkeVersion</a>

create configs for IKE1 or IKE2.

---

### Segment <a name="Segment" id="raindancers-network.Segment"></a>

Segment Properties.

#### Initializer <a name="Initializer" id="raindancers-network.Segment.Initializer"></a>

```typescript
import { Segment } from 'raindancers-network'

const segment: Segment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.Segment.property.name">name</a></code> | <code>string</code> | Name of the Segment. |
| <code><a href="#raindancers-network.Segment.property.allowFilter">allowFilter</a></code> | <code>string[]</code> | A list of denys. |
| <code><a href="#raindancers-network.Segment.property.denyFilter">denyFilter</a></code> | <code>string[]</code> | a List of denys. |
| <code><a href="#raindancers-network.Segment.property.description">description</a></code> | <code>string</code> | A description of the of the segement. |
| <code><a href="#raindancers-network.Segment.property.edgeLocations">edgeLocations</a></code> | <code>object[]</code> | A list of edge locations where the segement will be avaialble. |
| <code><a href="#raindancers-network.Segment.property.isolateAttachments">isolateAttachments</a></code> | <code>boolean</code> | Set true if attached VPCS are isolated from each other. |
| <code><a href="#raindancers-network.Segment.property.requireAttachmentAcceptance">requireAttachmentAcceptance</a></code> | <code>boolean</code> | Set true if the attachment needs approval for connection. |

---

##### `name`<sup>Required</sup> <a name="name" id="raindancers-network.Segment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Segment.

---

##### `allowFilter`<sup>Optional</sup> <a name="allowFilter" id="raindancers-network.Segment.property.allowFilter"></a>

```typescript
public readonly allowFilter: string[];
```

- *Type:* string[]

A list of denys.

---

##### `denyFilter`<sup>Optional</sup> <a name="denyFilter" id="raindancers-network.Segment.property.denyFilter"></a>

```typescript
public readonly denyFilter: string[];
```

- *Type:* string[]

a List of denys.

---

##### `description`<sup>Optional</sup> <a name="description" id="raindancers-network.Segment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the of the segement.

---

##### `edgeLocations`<sup>Optional</sup> <a name="edgeLocations" id="raindancers-network.Segment.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: object[];
```

- *Type:* object[]

A list of edge locations where the segement will be avaialble.

Not that the
locations must also be included in the core network edge ( CNE )

---

##### `isolateAttachments`<sup>Optional</sup> <a name="isolateAttachments" id="raindancers-network.Segment.property.isolateAttachments"></a>

```typescript
public readonly isolateAttachments: boolean;
```

- *Type:* boolean

Set true if attached VPCS are isolated from each other.

---

##### `requireAttachmentAcceptance`<sup>Optional</sup> <a name="requireAttachmentAcceptance" id="raindancers-network.Segment.property.requireAttachmentAcceptance"></a>

```typescript
public readonly requireAttachmentAcceptance: boolean;
```

- *Type:* boolean

Set true if the attachment needs approval for connection.

Currently not supported
and requires an automation step

---

### SegmentAction <a name="SegmentAction" id="raindancers-network.SegmentAction"></a>

Segmment ACtions.

#### Initializer <a name="Initializer" id="raindancers-network.SegmentAction.Initializer"></a>

```typescript
import { SegmentAction } from 'raindancers-network'

const segmentAction: SegmentAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.SegmentAction.property.action">action</a></code> | <code><a href="#raindancers-network.SegmentActionType">SegmentActionType</a></code> | *No description.* |
| <code><a href="#raindancers-network.SegmentAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.SegmentAction.property.destinationCidrBlocks">destinationCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.SegmentAction.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.SegmentAction.property.except">except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.SegmentAction.property.mode">mode</a></code> | <code><a href="#raindancers-network.SegmentActionMode">SegmentActionMode</a></code> | *No description.* |
| <code><a href="#raindancers-network.SegmentAction.property.shareWith">shareWith</a></code> | <code>string \| string[]</code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="raindancers-network.SegmentAction.property.action"></a>

```typescript
public readonly action: SegmentActionType;
```

- *Type:* <a href="#raindancers-network.SegmentActionType">SegmentActionType</a>

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.SegmentAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlocks`<sup>Optional</sup> <a name="destinationCidrBlocks" id="raindancers-network.SegmentAction.property.destinationCidrBlocks"></a>

```typescript
public readonly destinationCidrBlocks: string[];
```

- *Type:* string[]

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="raindancers-network.SegmentAction.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `except`<sup>Optional</sup> <a name="except" id="raindancers-network.SegmentAction.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Optional</sup> <a name="mode" id="raindancers-network.SegmentAction.property.mode"></a>

```typescript
public readonly mode: SegmentActionMode;
```

- *Type:* <a href="#raindancers-network.SegmentActionMode">SegmentActionMode</a>

---

##### `shareWith`<sup>Optional</sup> <a name="shareWith" id="raindancers-network.SegmentAction.property.shareWith"></a>

```typescript
public readonly shareWith: string | string[];
```

- *Type:* string | string[]

---

### ShareSubnetGroupProps <a name="ShareSubnetGroupProps" id="raindancers-network.ShareSubnetGroupProps"></a>

#### Initializer <a name="Initializer" id="raindancers-network.ShareSubnetGroupProps.Initializer"></a>

```typescript
import { ShareSubnetGroupProps } from 'raindancers-network'

const shareSubnetGroupProps: ShareSubnetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ShareSubnetGroupProps.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ShareSubnetGroupProps.property.subnetGroups">subnetGroups</a></code> | <code>string[]</code> | *No description.* |

---

##### `account`<sup>Required</sup> <a name="account" id="raindancers-network.ShareSubnetGroupProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `subnetGroups`<sup>Required</sup> <a name="subnetGroups" id="raindancers-network.ShareSubnetGroupProps.property.subnetGroups"></a>

```typescript
public readonly subnetGroups: string[];
```

- *Type:* string[]

---

### TGWOnCloudWanProps <a name="TGWOnCloudWanProps" id="raindancers-network.TGWOnCloudWanProps"></a>

Properties for a TWGOnCloudWan.

#### Initializer <a name="Initializer" id="raindancers-network.TGWOnCloudWanProps.Initializer"></a>

```typescript
import { TGWOnCloudWanProps } from 'raindancers-network'

const tGWOnCloudWanProps: TGWOnCloudWanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.amazonSideAsn">amazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.attachmentTag">attachmentTag</a></code> | <code>aws-cdk-lib.Tag</code> | *No description.* |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.cloudwan">cloudwan</a></code> | <code><a href="#raindancers-network.CoreNetwork">CoreNetwork</a></code> | *No description.* |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.cloudWanCidr">cloudWanCidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.defaultRouteInSegments">defaultRouteInSegments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#raindancers-network.TGWOnCloudWanProps.property.tgCidr">tgCidr</a></code> | <code>string[]</code> | *No description.* |

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="raindancers-network.TGWOnCloudWanProps.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: string;
```

- *Type:* string

---

##### `attachmentTag`<sup>Required</sup> <a name="attachmentTag" id="raindancers-network.TGWOnCloudWanProps.property.attachmentTag"></a>

```typescript
public readonly attachmentTag: Tag;
```

- *Type:* aws-cdk-lib.Tag

---

##### `cloudwan`<sup>Required</sup> <a name="cloudwan" id="raindancers-network.TGWOnCloudWanProps.property.cloudwan"></a>

```typescript
public readonly cloudwan: CoreNetwork;
```

- *Type:* <a href="#raindancers-network.CoreNetwork">CoreNetwork</a>

---

##### `description`<sup>Required</sup> <a name="description" id="raindancers-network.TGWOnCloudWanProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `cloudWanCidr`<sup>Optional</sup> <a name="cloudWanCidr" id="raindancers-network.TGWOnCloudWanProps.property.cloudWanCidr"></a>

```typescript
public readonly cloudWanCidr: string[];
```

- *Type:* string[]

---

##### `defaultRouteInSegments`<sup>Optional</sup> <a name="defaultRouteInSegments" id="raindancers-network.TGWOnCloudWanProps.property.defaultRouteInSegments"></a>

```typescript
public readonly defaultRouteInSegments: string[];
```

- *Type:* string[]

---

##### `tgCidr`<sup>Optional</sup> <a name="tgCidr" id="raindancers-network.TGWOnCloudWanProps.property.tgCidr"></a>

```typescript
public readonly tgCidr: string[];
```

- *Type:* string[]

---

### VpnProps <a name="VpnProps" id="raindancers-network.VpnProps"></a>

Properties for S2S VPN.

#### Initializer <a name="Initializer" id="raindancers-network.VpnProps.Initializer"></a>

```typescript
import { VpnProps } from 'raindancers-network'

const vpnProps: VpnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.VpnProps.property.customerGateway">customerGateway</a></code> | <code>aws-cdk-lib.aws_ec2.CfnCustomerGateway</code> | The customer gateway where the vpn will terminate. |
| <code><a href="#raindancers-network.VpnProps.property.vpnspec">vpnspec</a></code> | <code><a href="#raindancers-network.VpnSpecProps">VpnSpecProps</a></code> | a VPN specification for the VPN. |
| <code><a href="#raindancers-network.VpnProps.property.sampleconfig">sampleconfig</a></code> | <code><a href="#raindancers-network.SampleConfig">SampleConfig</a></code> | Optionally provide a sampleconfig specification. |
| <code><a href="#raindancers-network.VpnProps.property.tunnelInsideCidr">tunnelInsideCidr</a></code> | <code>string[]</code> | Specify a pair of concrete Cidr's for the tunnel. |
| <code><a href="#raindancers-network.VpnProps.property.tunnelIpamPool">tunnelIpamPool</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | Specify an ipam pool to allocated the tunnel address's from. |

---

##### `customerGateway`<sup>Required</sup> <a name="customerGateway" id="raindancers-network.VpnProps.property.customerGateway"></a>

```typescript
public readonly customerGateway: CfnCustomerGateway;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnCustomerGateway

The customer gateway where the vpn will terminate.

---

##### `vpnspec`<sup>Required</sup> <a name="vpnspec" id="raindancers-network.VpnProps.property.vpnspec"></a>

```typescript
public readonly vpnspec: VpnSpecProps;
```

- *Type:* <a href="#raindancers-network.VpnSpecProps">VpnSpecProps</a>

a VPN specification for the VPN.

---

##### `sampleconfig`<sup>Optional</sup> <a name="sampleconfig" id="raindancers-network.VpnProps.property.sampleconfig"></a>

```typescript
public readonly sampleconfig: SampleConfig;
```

- *Type:* <a href="#raindancers-network.SampleConfig">SampleConfig</a>

Optionally provide a sampleconfig specification.

---

##### `tunnelInsideCidr`<sup>Optional</sup> <a name="tunnelInsideCidr" id="raindancers-network.VpnProps.property.tunnelInsideCidr"></a>

```typescript
public readonly tunnelInsideCidr: string[];
```

- *Type:* string[]

Specify a pair of concrete Cidr's for the tunnel.

Only use one of tunnelInsideCidr or tunnelIpmamPool

---

##### `tunnelIpamPool`<sup>Optional</sup> <a name="tunnelIpamPool" id="raindancers-network.VpnProps.property.tunnelIpamPool"></a>

```typescript
public readonly tunnelIpamPool: CfnIPAMPool;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool

Specify an ipam pool to allocated the tunnel address's from.

Use only one of tunnelInsideCidr or tunnelIpamPool

---

### VpnSpecProps <a name="VpnSpecProps" id="raindancers-network.VpnSpecProps"></a>

THe properties for a S2S Ipsec Vpn Connection https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html.

#### Initializer <a name="Initializer" id="raindancers-network.VpnSpecProps.Initializer"></a>

```typescript
import { VpnSpecProps } from 'raindancers-network'

const vpnSpecProps: VpnSpecProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.VpnSpecProps.property.dpdTimeoutAction">dpdTimeoutAction</a></code> | <code><a href="#raindancers-network.DPDTimeoutAction">DPDTimeoutAction</a></code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.enableAcceleration">enableAcceleration</a></code> | <code>boolean</code> | Indicate whether to enable acceleration for the VPN connection. |
| <code><a href="#raindancers-network.VpnSpecProps.property.enableLogging">enableLogging</a></code> | <code>boolean</code> | Enable CloudwatchLogging for the S2S VPN. |
| <code><a href="#raindancers-network.VpnSpecProps.property.ikeVersions">ikeVersions</a></code> | <code><a href="#raindancers-network.IkeVersion">IkeVersion</a>[]</code> | The IKE versions that are permitted for the VPN tunnel. |
| <code><a href="#raindancers-network.VpnSpecProps.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code><a href="#raindancers-network.OutsideIpAddressType">OutsideIpAddressType</a></code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase1DHGroupNumbers">phase1DHGroupNumbers</a></code> | <code><a href="#raindancers-network.Phase1DHGroupNumbers">Phase1DHGroupNumbers</a>[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase1EncryptionAlgorithms">phase1EncryptionAlgorithms</a></code> | <code><a href="#raindancers-network.Phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a>[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code><a href="#raindancers-network.Phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a>[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase1LifetimeSeconds">phase1LifetimeSeconds</a></code> | <code>number</code> | The lifetime for phase 1 of the IKE negotiation, in seconds. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase2DHGroupNumbers">phase2DHGroupNumbers</a></code> | <code><a href="#raindancers-network.Phase2DHGroupNumbers">Phase2DHGroupNumbers</a>[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase2EncryptionAlgorithms">phase2EncryptionAlgorithms</a></code> | <code><a href="#raindancers-network.Phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a>[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code><a href="#raindancers-network.Phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a>[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#raindancers-network.VpnSpecProps.property.phase2LifeTimeSeconds">phase2LifeTimeSeconds</a></code> | <code>number</code> | The lifetime for phase 2 of the IKE negotiation, in seconds. |
| <code><a href="#raindancers-network.VpnSpecProps.property.rekeyFuzzPercentage">rekeyFuzzPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.rekeyMarginTimeSeconds">rekeyMarginTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.replayWindowSize">replayWindowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#raindancers-network.VpnSpecProps.property.startupAction">startupAction</a></code> | <code><a href="#raindancers-network.StartupAction">StartupAction</a></code> | The action to take when the establishing the tunnel for the VPN connection. |
| <code><a href="#raindancers-network.VpnSpecProps.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | Indicate if this will only use Static Routes Only. |
| <code><a href="#raindancers-network.VpnSpecProps.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code><a href="#raindancers-network.TunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | *No description.* |

---

##### `dpdTimeoutAction`<sup>Optional</sup> <a name="dpdTimeoutAction" id="raindancers-network.VpnSpecProps.property.dpdTimeoutAction"></a>

```typescript
public readonly dpdTimeoutAction: DPDTimeoutAction;
```

- *Type:* <a href="#raindancers-network.DPDTimeoutAction">DPDTimeoutAction</a>
- *Default:* CLEAR The action to take after DPD timeout occurs. Specify restart to restart the IKE initiation. Specify clear to end the IKE session.

---

##### `dpdTimeoutSeconds`<sup>Optional</sup> <a name="dpdTimeoutSeconds" id="raindancers-network.VpnSpecProps.property.dpdTimeoutSeconds"></a>

```typescript
public readonly dpdTimeoutSeconds: number;
```

- *Type:* number
- *Default:* 30 The number of seconds after which a DPD timeout occurs.

---

##### `enableAcceleration`<sup>Optional</sup> <a name="enableAcceleration" id="raindancers-network.VpnSpecProps.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: boolean;
```

- *Type:* boolean

Indicate whether to enable acceleration for the VPN connection.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="raindancers-network.VpnSpecProps.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean;
```

- *Type:* boolean

Enable CloudwatchLogging for the S2S VPN.

---

##### `ikeVersions`<sup>Optional</sup> <a name="ikeVersions" id="raindancers-network.VpnSpecProps.property.ikeVersions"></a>

```typescript
public readonly ikeVersions: IkeVersion[];
```

- *Type:* <a href="#raindancers-network.IkeVersion">IkeVersion</a>[]

The IKE versions that are permitted for the VPN tunnel.

---

##### `localIpv4NetworkCidr`<sup>Optional</sup> <a name="localIpv4NetworkCidr" id="raindancers-network.VpnSpecProps.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0 The IPv4 CIDR on the AWS side of the VPN connection.

---

##### `outsideIpAddressType`<sup>Optional</sup> <a name="outsideIpAddressType" id="raindancers-network.VpnSpecProps.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: OutsideIpAddressType;
```

- *Type:* <a href="#raindancers-network.OutsideIpAddressType">OutsideIpAddressType</a>
- *Default:* PUBLIC The type of IPv4 address assigned to the outside interface of the customer gateway device.

---

##### `phase1DHGroupNumbers`<sup>Optional</sup> <a name="phase1DHGroupNumbers" id="raindancers-network.VpnSpecProps.property.phase1DHGroupNumbers"></a>

```typescript
public readonly phase1DHGroupNumbers: Phase1DHGroupNumbers[];
```

- *Type:* <a href="#raindancers-network.Phase1DHGroupNumbers">Phase1DHGroupNumbers</a>[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.

---

##### `phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="phase1EncryptionAlgorithms" id="raindancers-network.VpnSpecProps.property.phase1EncryptionAlgorithms"></a>

```typescript
public readonly phase1EncryptionAlgorithms: Phase1EncryptionAlgorithms[];
```

- *Type:* <a href="#raindancers-network.Phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a>[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

---

##### `phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="phase1IntegrityAlgorithms" id="raindancers-network.VpnSpecProps.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: Phase1IntegrityAlgorithms[];
```

- *Type:* <a href="#raindancers-network.Phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a>[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

---

##### `phase1LifetimeSeconds`<sup>Optional</sup> <a name="phase1LifetimeSeconds" id="raindancers-network.VpnSpecProps.property.phase1LifetimeSeconds"></a>

```typescript
public readonly phase1LifetimeSeconds: number;
```

- *Type:* number

The lifetime for phase 1 of the IKE negotiation, in seconds.

---

##### `phase2DHGroupNumbers`<sup>Optional</sup> <a name="phase2DHGroupNumbers" id="raindancers-network.VpnSpecProps.property.phase2DHGroupNumbers"></a>

```typescript
public readonly phase2DHGroupNumbers: Phase2DHGroupNumbers[];
```

- *Type:* <a href="#raindancers-network.Phase2DHGroupNumbers">Phase2DHGroupNumbers</a>[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.

---

##### `phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="phase2EncryptionAlgorithms" id="raindancers-network.VpnSpecProps.property.phase2EncryptionAlgorithms"></a>

```typescript
public readonly phase2EncryptionAlgorithms: Phase2EncryptionAlgorithms[];
```

- *Type:* <a href="#raindancers-network.Phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a>[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

---

##### `phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="phase2IntegrityAlgorithms" id="raindancers-network.VpnSpecProps.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: Phase2IntegrityAlgorithms[];
```

- *Type:* <a href="#raindancers-network.Phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a>[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

---

##### `phase2LifeTimeSeconds`<sup>Optional</sup> <a name="phase2LifeTimeSeconds" id="raindancers-network.VpnSpecProps.property.phase2LifeTimeSeconds"></a>

```typescript
public readonly phase2LifeTimeSeconds: number;
```

- *Type:* number

The lifetime for phase 2 of the IKE negotiation, in seconds.

---

##### `rekeyFuzzPercentage`<sup>Optional</sup> <a name="rekeyFuzzPercentage" id="raindancers-network.VpnSpecProps.property.rekeyFuzzPercentage"></a>

```typescript
public readonly rekeyFuzzPercentage: number;
```

- *Type:* number
- *Default:* 100 The percentage of the rekey window (determined by RekeyMarginTimeSeconds) during which the rekey time is randomly selected.

---

##### `rekeyMarginTimeSeconds`<sup>Optional</sup> <a name="rekeyMarginTimeSeconds" id="raindancers-network.VpnSpecProps.property.rekeyMarginTimeSeconds"></a>

```typescript
public readonly rekeyMarginTimeSeconds: number;
```

- *Type:* number
- *Default:* 540 The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for RekeyFuzzPercentage.

---

##### `remoteIpv4NetworkCidr`<sup>Optional</sup> <a name="remoteIpv4NetworkCidr" id="raindancers-network.VpnSpecProps.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string
- *Default:* 0.0.0.0/0 The IPv4 CIDR on the Remote side of the VPN connection.

---

##### `replayWindowSize`<sup>Optional</sup> <a name="replayWindowSize" id="raindancers-network.VpnSpecProps.property.replayWindowSize"></a>

```typescript
public readonly replayWindowSize: number;
```

- *Type:* number
- *Default:* 1024 The number of packets in an IKE replay window.

---

##### `startupAction`<sup>Optional</sup> <a name="startupAction" id="raindancers-network.VpnSpecProps.property.startupAction"></a>

```typescript
public readonly startupAction: StartupAction;
```

- *Type:* <a href="#raindancers-network.StartupAction">StartupAction</a>

The action to take when the establishing the tunnel for the VPN connection.

By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify start for AWS to initiate the IKE negotiation.

---

##### `staticRoutesOnly`<sup>Optional</sup> <a name="staticRoutesOnly" id="raindancers-network.VpnSpecProps.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

Indicate if this will only use Static Routes Only.

---

##### `tunnelInsideIpVersion`<sup>Optional</sup> <a name="tunnelInsideIpVersion" id="raindancers-network.VpnSpecProps.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: TunnelInsideIpVersion;
```

- *Type:* <a href="#raindancers-network.TunnelInsideIpVersion">TunnelInsideIpVersion</a>
- *Default:* IPV4 Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICoreNetworkSegmentProps <a name="ICoreNetworkSegmentProps" id="raindancers-network.ICoreNetworkSegmentProps"></a>

- *Implemented By:* <a href="#raindancers-network.ICoreNetworkSegmentProps">ICoreNetworkSegmentProps</a>

Properties creating a Corenetwork Segment.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#raindancers-network.ICoreNetworkSegmentProps.property.policyTableServiceToken">policyTableServiceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ICoreNetworkSegmentProps.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#raindancers-network.ICoreNetworkSegmentProps.property.updateDependsOn">updateDependsOn</a></code> | <code>aws-cdk-lib.CustomResource[]</code> | *No description.* |

---

##### `policyTableServiceToken`<sup>Required</sup> <a name="policyTableServiceToken" id="raindancers-network.ICoreNetworkSegmentProps.property.policyTableServiceToken"></a>

```typescript
public readonly policyTableServiceToken: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="raindancers-network.ICoreNetworkSegmentProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `updateDependsOn`<sup>Required</sup> <a name="updateDependsOn" id="raindancers-network.ICoreNetworkSegmentProps.property.updateDependsOn"></a>

```typescript
public readonly updateDependsOn: CustomResource[];
```

- *Type:* aws-cdk-lib.CustomResource[]

---

## Enums <a name="Enums" id="Enums"></a>

### ApplianceMode <a name="ApplianceMode" id="raindancers-network.ApplianceMode"></a>

Propertys for Appliance Mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ApplianceMode.ENABLED">ENABLED</a></code> | enable Connecting VPC to TransitGateway in Appliance Mode. |

---

##### `ENABLED` <a name="ENABLED" id="raindancers-network.ApplianceMode.ENABLED"></a>

enable Connecting VPC to TransitGateway in Appliance Mode.

---


### AssociationMethod <a name="AssociationMethod" id="raindancers-network.AssociationMethod"></a>

Association Methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.AssociationMethod.CONSTANT">CONSTANT</a></code> | *No description.* |
| <code><a href="#raindancers-network.AssociationMethod.TAG">TAG</a></code> | *No description.* |

---

##### `CONSTANT` <a name="CONSTANT" id="raindancers-network.AssociationMethod.CONSTANT"></a>

---


##### `TAG` <a name="TAG" id="raindancers-network.AssociationMethod.TAG"></a>

---


### AttachmentCondition <a name="AttachmentCondition" id="raindancers-network.AttachmentCondition"></a>

Attachment Conditions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.AttachmentCondition.ANY">ANY</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentCondition.RESOURCE_ID">RESOURCE_ID</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentCondition.ACCOUNT_ID">ACCOUNT_ID</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentCondition.REGION">REGION</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentCondition.ATTACHMENT_TYPE">ATTACHMENT_TYPE</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentCondition.TAG_EXISTS">TAG_EXISTS</a></code> | *No description.* |
| <code><a href="#raindancers-network.AttachmentCondition.TAG_VALUE">TAG_VALUE</a></code> | *No description.* |

---

##### `ANY` <a name="ANY" id="raindancers-network.AttachmentCondition.ANY"></a>

---


##### `RESOURCE_ID` <a name="RESOURCE_ID" id="raindancers-network.AttachmentCondition.RESOURCE_ID"></a>

---


##### `ACCOUNT_ID` <a name="ACCOUNT_ID" id="raindancers-network.AttachmentCondition.ACCOUNT_ID"></a>

---


##### `REGION` <a name="REGION" id="raindancers-network.AttachmentCondition.REGION"></a>

---


##### `ATTACHMENT_TYPE` <a name="ATTACHMENT_TYPE" id="raindancers-network.AttachmentCondition.ATTACHMENT_TYPE"></a>

---


##### `TAG_EXISTS` <a name="TAG_EXISTS" id="raindancers-network.AttachmentCondition.TAG_EXISTS"></a>

---


##### `TAG_VALUE` <a name="TAG_VALUE" id="raindancers-network.AttachmentCondition.TAG_VALUE"></a>

---


### ConditionLogic <a name="ConditionLogic" id="raindancers-network.ConditionLogic"></a>

Conditon Logic.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ConditionLogic.AND">AND</a></code> | *No description.* |
| <code><a href="#raindancers-network.ConditionLogic.OR">OR</a></code> | *No description.* |

---

##### `AND` <a name="AND" id="raindancers-network.ConditionLogic.AND"></a>

---


##### `OR` <a name="OR" id="raindancers-network.ConditionLogic.OR"></a>

---


### Destination <a name="Destination" id="raindancers-network.Destination"></a>

The Destinations for Adding Routes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Destination.CLOUDWAN">CLOUDWAN</a></code> | route to the cloudwan that the vpc is attached to. |
| <code><a href="#raindancers-network.Destination.TRANSITGATEWAY">TRANSITGATEWAY</a></code> | route to the transitGateway that the vpc is attached to. |
| <code><a href="#raindancers-network.Destination.NWFIREWALL">NWFIREWALL</a></code> | *No description.* |

---

##### `CLOUDWAN` <a name="CLOUDWAN" id="raindancers-network.Destination.CLOUDWAN"></a>

route to the cloudwan that the vpc is attached to.

---


##### `TRANSITGATEWAY` <a name="TRANSITGATEWAY" id="raindancers-network.Destination.TRANSITGATEWAY"></a>

route to the transitGateway that the vpc is attached to.

---


##### `NWFIREWALL` <a name="NWFIREWALL" id="raindancers-network.Destination.NWFIREWALL"></a>

---


### DPDTimeoutAction <a name="DPDTimeoutAction" id="raindancers-network.DPDTimeoutAction"></a>

Dead Peer Detection Timeout Actions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.DPDTimeoutAction.CLEAR">CLEAR</a></code> | Clear the Session. |
| <code><a href="#raindancers-network.DPDTimeoutAction.NONE">NONE</a></code> | Do nothing. |
| <code><a href="#raindancers-network.DPDTimeoutAction.RESTART">RESTART</a></code> | Restart The Session. |

---

##### `CLEAR` <a name="CLEAR" id="raindancers-network.DPDTimeoutAction.CLEAR"></a>

Clear the Session.

---


##### `NONE` <a name="NONE" id="raindancers-network.DPDTimeoutAction.NONE"></a>

Do nothing.

---


##### `RESTART` <a name="RESTART" id="raindancers-network.DPDTimeoutAction.RESTART"></a>

Restart The Session.

---


### IkeVersion <a name="IkeVersion" id="raindancers-network.IkeVersion"></a>

Ike Version for S2S VPN.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.IkeVersion.IKEV1">IKEV1</a></code> | Use IKEv1. |
| <code><a href="#raindancers-network.IkeVersion.IKEV2">IKEV2</a></code> | Use IKEv2. |

---

##### `IKEV1` <a name="IKEV1" id="raindancers-network.IkeVersion.IKEV1"></a>

Use IKEv1.

---


##### `IKEV2` <a name="IKEV2" id="raindancers-network.IkeVersion.IKEV2"></a>

Use IKEv2.

---


### Operators <a name="Operators" id="raindancers-network.Operators"></a>

Operatior COnditons for Attachments.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Operators.EQUALS">EQUALS</a></code> | *No description.* |
| <code><a href="#raindancers-network.Operators.NOTEQUALS">NOTEQUALS</a></code> | *No description.* |
| <code><a href="#raindancers-network.Operators.CONTAINS">CONTAINS</a></code> | *No description.* |
| <code><a href="#raindancers-network.Operators.BEGINS_WITH">BEGINS_WITH</a></code> | *No description.* |

---

##### `EQUALS` <a name="EQUALS" id="raindancers-network.Operators.EQUALS"></a>

---


##### `NOTEQUALS` <a name="NOTEQUALS" id="raindancers-network.Operators.NOTEQUALS"></a>

---


##### `CONTAINS` <a name="CONTAINS" id="raindancers-network.Operators.CONTAINS"></a>

---


##### `BEGINS_WITH` <a name="BEGINS_WITH" id="raindancers-network.Operators.BEGINS_WITH"></a>

---


### OutsideIpAddressType <a name="OutsideIpAddressType" id="raindancers-network.OutsideIpAddressType"></a>

Specify the use of public or private IP address's for Site to Site VPN.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.OutsideIpAddressType.PRIVATE">PRIVATE</a></code> | Use Private IPv4 Address from the Transit Gateways IP address Pool. |
| <code><a href="#raindancers-network.OutsideIpAddressType.PUBLIC">PUBLIC</a></code> | Use Public IPv4 Address Assigned by AWS. |

---

##### `PRIVATE` <a name="PRIVATE" id="raindancers-network.OutsideIpAddressType.PRIVATE"></a>

Use Private IPv4 Address from the Transit Gateways IP address Pool.

---


##### `PUBLIC` <a name="PUBLIC" id="raindancers-network.OutsideIpAddressType.PUBLIC"></a>

Use Public IPv4 Address Assigned by AWS.

---


### Phase1DHGroupNumbers <a name="Phase1DHGroupNumbers" id="raindancers-network.Phase1DHGroupNumbers"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH2">DH2</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH14">DH14</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH15">DH15</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH16">DH16</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH17">DH17</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH18">DH18</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH19">DH19</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH20">DH20</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH21">DH21</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH22">DH22</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH23">DH23</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1DHGroupNumbers.DH24">DH24</a></code> | *No description.* |

---

##### `DH2` <a name="DH2" id="raindancers-network.Phase1DHGroupNumbers.DH2"></a>

---


##### `DH14` <a name="DH14" id="raindancers-network.Phase1DHGroupNumbers.DH14"></a>

---


##### `DH15` <a name="DH15" id="raindancers-network.Phase1DHGroupNumbers.DH15"></a>

---


##### `DH16` <a name="DH16" id="raindancers-network.Phase1DHGroupNumbers.DH16"></a>

---


##### `DH17` <a name="DH17" id="raindancers-network.Phase1DHGroupNumbers.DH17"></a>

---


##### `DH18` <a name="DH18" id="raindancers-network.Phase1DHGroupNumbers.DH18"></a>

---


##### `DH19` <a name="DH19" id="raindancers-network.Phase1DHGroupNumbers.DH19"></a>

---


##### `DH20` <a name="DH20" id="raindancers-network.Phase1DHGroupNumbers.DH20"></a>

---


##### `DH21` <a name="DH21" id="raindancers-network.Phase1DHGroupNumbers.DH21"></a>

---


##### `DH22` <a name="DH22" id="raindancers-network.Phase1DHGroupNumbers.DH22"></a>

---


##### `DH23` <a name="DH23" id="raindancers-network.Phase1DHGroupNumbers.DH23"></a>

---


##### `DH24` <a name="DH24" id="raindancers-network.Phase1DHGroupNumbers.DH24"></a>

---


### Phase1EncryptionAlgorithms <a name="Phase1EncryptionAlgorithms" id="raindancers-network.Phase1EncryptionAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Phase1EncryptionAlgorithms.AES128">AES128</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1EncryptionAlgorithms.AES256">AES256</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1EncryptionAlgorithms.AES128_GCM_16">AES128_GCM_16</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1EncryptionAlgorithms.AES256_GCM_16">AES256_GCM_16</a></code> | *No description.* |

---

##### `AES128` <a name="AES128" id="raindancers-network.Phase1EncryptionAlgorithms.AES128"></a>

---


##### `AES256` <a name="AES256" id="raindancers-network.Phase1EncryptionAlgorithms.AES256"></a>

---


##### `AES128_GCM_16` <a name="AES128_GCM_16" id="raindancers-network.Phase1EncryptionAlgorithms.AES128_GCM_16"></a>

---


##### `AES256_GCM_16` <a name="AES256_GCM_16" id="raindancers-network.Phase1EncryptionAlgorithms.AES256_GCM_16"></a>

---


### Phase1IntegrityAlgorithms <a name="Phase1IntegrityAlgorithms" id="raindancers-network.Phase1IntegrityAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Phase1IntegrityAlgorithms.SHA1">SHA1</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1IntegrityAlgorithms.SHA2_256">SHA2_256</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1IntegrityAlgorithms.SHA2_384">SHA2_384</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase1IntegrityAlgorithms.SHA2_512">SHA2_512</a></code> | *No description.* |

---

##### `SHA1` <a name="SHA1" id="raindancers-network.Phase1IntegrityAlgorithms.SHA1"></a>

---


##### `SHA2_256` <a name="SHA2_256" id="raindancers-network.Phase1IntegrityAlgorithms.SHA2_256"></a>

---


##### `SHA2_384` <a name="SHA2_384" id="raindancers-network.Phase1IntegrityAlgorithms.SHA2_384"></a>

---


##### `SHA2_512` <a name="SHA2_512" id="raindancers-network.Phase1IntegrityAlgorithms.SHA2_512"></a>

---


### Phase2DHGroupNumbers <a name="Phase2DHGroupNumbers" id="raindancers-network.Phase2DHGroupNumbers"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH2">DH2</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH5">DH5</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH14">DH14</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH15">DH15</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH16">DH16</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH17">DH17</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH18">DH18</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH19">DH19</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH20">DH20</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH21">DH21</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH22">DH22</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH23">DH23</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2DHGroupNumbers.DH24">DH24</a></code> | *No description.* |

---

##### `DH2` <a name="DH2" id="raindancers-network.Phase2DHGroupNumbers.DH2"></a>

---


##### `DH5` <a name="DH5" id="raindancers-network.Phase2DHGroupNumbers.DH5"></a>

---


##### `DH14` <a name="DH14" id="raindancers-network.Phase2DHGroupNumbers.DH14"></a>

---


##### `DH15` <a name="DH15" id="raindancers-network.Phase2DHGroupNumbers.DH15"></a>

---


##### `DH16` <a name="DH16" id="raindancers-network.Phase2DHGroupNumbers.DH16"></a>

---


##### `DH17` <a name="DH17" id="raindancers-network.Phase2DHGroupNumbers.DH17"></a>

---


##### `DH18` <a name="DH18" id="raindancers-network.Phase2DHGroupNumbers.DH18"></a>

---


##### `DH19` <a name="DH19" id="raindancers-network.Phase2DHGroupNumbers.DH19"></a>

---


##### `DH20` <a name="DH20" id="raindancers-network.Phase2DHGroupNumbers.DH20"></a>

---


##### `DH21` <a name="DH21" id="raindancers-network.Phase2DHGroupNumbers.DH21"></a>

---


##### `DH22` <a name="DH22" id="raindancers-network.Phase2DHGroupNumbers.DH22"></a>

---


##### `DH23` <a name="DH23" id="raindancers-network.Phase2DHGroupNumbers.DH23"></a>

---


##### `DH24` <a name="DH24" id="raindancers-network.Phase2DHGroupNumbers.DH24"></a>

---


### Phase2EncryptionAlgorithms <a name="Phase2EncryptionAlgorithms" id="raindancers-network.Phase2EncryptionAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Phase2EncryptionAlgorithms.AES128">AES128</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2EncryptionAlgorithms.AES256">AES256</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2EncryptionAlgorithms.AES128_GCM_16">AES128_GCM_16</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2EncryptionAlgorithms.AES256_GCM_16">AES256_GCM_16</a></code> | *No description.* |

---

##### `AES128` <a name="AES128" id="raindancers-network.Phase2EncryptionAlgorithms.AES128"></a>

---


##### `AES256` <a name="AES256" id="raindancers-network.Phase2EncryptionAlgorithms.AES256"></a>

---


##### `AES128_GCM_16` <a name="AES128_GCM_16" id="raindancers-network.Phase2EncryptionAlgorithms.AES128_GCM_16"></a>

---


##### `AES256_GCM_16` <a name="AES256_GCM_16" id="raindancers-network.Phase2EncryptionAlgorithms.AES256_GCM_16"></a>

---


### Phase2IntegrityAlgorithms <a name="Phase2IntegrityAlgorithms" id="raindancers-network.Phase2IntegrityAlgorithms"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.Phase2IntegrityAlgorithms.SHA1">SHA1</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2IntegrityAlgorithms.SHA2_256">SHA2_256</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2IntegrityAlgorithms.SHA2_384">SHA2_384</a></code> | *No description.* |
| <code><a href="#raindancers-network.Phase2IntegrityAlgorithms.SHA2_512">SHA2_512</a></code> | *No description.* |

---

##### `SHA1` <a name="SHA1" id="raindancers-network.Phase2IntegrityAlgorithms.SHA1"></a>

---


##### `SHA2_256` <a name="SHA2_256" id="raindancers-network.Phase2IntegrityAlgorithms.SHA2_256"></a>

---


##### `SHA2_384` <a name="SHA2_384" id="raindancers-network.Phase2IntegrityAlgorithms.SHA2_384"></a>

---


##### `SHA2_512` <a name="SHA2_512" id="raindancers-network.Phase2IntegrityAlgorithms.SHA2_512"></a>

---


### ResolverDirection <a name="ResolverDirection" id="raindancers-network.ResolverDirection"></a>

Direction of Resolver.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.ResolverDirection.INBOUND">INBOUND</a></code> | Resolver is Inbound. |
| <code><a href="#raindancers-network.ResolverDirection.OUTBOUND">OUTBOUND</a></code> | Resolver is outbound. |

---

##### `INBOUND` <a name="INBOUND" id="raindancers-network.ResolverDirection.INBOUND"></a>

Resolver is Inbound.

---


##### `OUTBOUND` <a name="OUTBOUND" id="raindancers-network.ResolverDirection.OUTBOUND"></a>

Resolver is outbound.

---


### SegmentActionMode <a name="SegmentActionMode" id="raindancers-network.SegmentActionMode"></a>

Segment Action Mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.SegmentActionMode.ATTACHMENT_ROUTE">ATTACHMENT_ROUTE</a></code> | *No description.* |

---

##### `ATTACHMENT_ROUTE` <a name="ATTACHMENT_ROUTE" id="raindancers-network.SegmentActionMode.ATTACHMENT_ROUTE"></a>

---


### SegmentActionType <a name="SegmentActionType" id="raindancers-network.SegmentActionType"></a>

Segment Action Type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.SegmentActionType.SHARE">SHARE</a></code> | *No description.* |
| <code><a href="#raindancers-network.SegmentActionType.CREATE_ROUTE">CREATE_ROUTE</a></code> | *No description.* |

---

##### `SHARE` <a name="SHARE" id="raindancers-network.SegmentActionType.SHARE"></a>

---


##### `CREATE_ROUTE` <a name="CREATE_ROUTE" id="raindancers-network.SegmentActionType.CREATE_ROUTE"></a>

---


### StartupAction <a name="StartupAction" id="raindancers-network.StartupAction"></a>

Startup Action for S2S VPN.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.StartupAction.START">START</a></code> | AWS end to Intiate Startup. |
| <code><a href="#raindancers-network.StartupAction.ADD">ADD</a></code> | Do not attempt to startup. |

---

##### `START` <a name="START" id="raindancers-network.StartupAction.START"></a>

AWS end to Intiate Startup.

---


##### `ADD` <a name="ADD" id="raindancers-network.StartupAction.ADD"></a>

Do not attempt to startup.

---


### TunnelInsideIpVersion <a name="TunnelInsideIpVersion" id="raindancers-network.TunnelInsideIpVersion"></a>

Determine if this is an IPv4 or IPv6 Tunnel.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.TunnelInsideIpVersion.IPV4">IPV4</a></code> | Use IPv4. |
| <code><a href="#raindancers-network.TunnelInsideIpVersion.IPV6">IPV6</a></code> | Use IPv6. |

---

##### `IPV4` <a name="IPV4" id="raindancers-network.TunnelInsideIpVersion.IPV4"></a>

Use IPv4.

---


##### `IPV6` <a name="IPV6" id="raindancers-network.TunnelInsideIpVersion.IPV6"></a>

Use IPv6.

---


### VpnDeviceType <a name="VpnDeviceType" id="raindancers-network.VpnDeviceType"></a>

Remote end Device Types.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#raindancers-network.VpnDeviceType.CHECKPOINT_R77_10">CHECKPOINT_R77_10</a></code> | Checkpoint R77_10. |
| <code><a href="#raindancers-network.VpnDeviceType.CHECKPOINT_R80_10">CHECKPOINT_R80_10</a></code> | *No description.* |
| <code><a href="#raindancers-network.VpnDeviceType.CISCO_ISR_12_4">CISCO_ISR_12_4</a></code> | *No description.* |
| <code><a href="#raindancers-network.VpnDeviceType.CISCO_ASR_12_4">CISCO_ASR_12_4</a></code> | *No description.* |

---

##### `CHECKPOINT_R77_10` <a name="CHECKPOINT_R77_10" id="raindancers-network.VpnDeviceType.CHECKPOINT_R77_10"></a>

Checkpoint R77_10.

---


##### `CHECKPOINT_R80_10` <a name="CHECKPOINT_R80_10" id="raindancers-network.VpnDeviceType.CHECKPOINT_R80_10"></a>

---


##### `CISCO_ISR_12_4` <a name="CISCO_ISR_12_4" id="raindancers-network.VpnDeviceType.CISCO_ISR_12_4"></a>

---


##### `CISCO_ASR_12_4` <a name="CISCO_ASR_12_4" id="raindancers-network.VpnDeviceType.CISCO_ASR_12_4"></a>

---

