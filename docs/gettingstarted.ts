import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
	aws_networkmanager as networkmanager,
}
from 'aws-cdk-lib';

import * as raindancersNetwork from 'raindancers-network';

export class RaindancersNetworkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// create the core network
		const exampleNet = new raindancersNetwork.CoreNetwork(this, 'CoreNetwork', {
			globalNetwork: new networkmanager.CfnGlobalNetwork(this, 'GlobalNetwork', {
			  description: 'exampleNet',
			}),
			policyDescription: 'example net',
			coreName: 'exampleNet',
	  
			asnRanges: [
			  '65200-65210',
			],
			insideCidrBlocks: ['10.100.0.0/22'],
	  
			edgeLocations: [
			  {
				// sydney
				'location': 'ap-southeast-1',
				'asn': 65200,
				'inside-cidr-blocks': ['10.100.0.0/24'],
			  },
			  {
				// singapore
				'location': 'ap-southeast-2',
				'asn': 65201,
				'inside-cidr-blocks': ['10.100.1.0/24'],
			  }
			],
		  });

		// Add segments to the core network
		const redSegment = exampleNet.addSegment({
			name: 'red',
			description: 'red Segment',
			isolateAttachments: false,
			requireAttachmentAcceptance: false,
		});
	
		const blueSegment = exampleNet.addSegment({
			name: 'blue',
			description: 'blue Segment',
			isolateAttachments: false,
			requireAttachmentAcceptance: false,
		})
	
		const greenSegment = exampleNet.addSegment({
			name: 'green',
			description: 'green Segment',
			isolateAttachments: false,
			requireAttachmentAcceptance: false,
		})

		// add attachment policys by Tag to the segments
		redSegment.addSimpleAttachmentPolicy({
			ruleNumber: 100,
		});
		  
		greenSegment.addSimpleAttachmentPolicy({
			ruleNumber: 200,
		})
		  
		blueSegment.addSimpleAttachmentPolicy({
			ruleNumber: 300,
		})
		
		

		// add sharing actions to the segments
		redSegment.addSimpleShareAction({
			description: 'Share the red segment with everything',
			shareWith: '*'
		  });
		  
		greenSegment.addSimpleShareAction({
			description: 'Share the green segment with the redSegment',
			shareWith: [redSegment]
		});
		  
		blueSegment.addSimpleShareAction({
			description: 'Share the blue segment with the redSegment',
			shareWith: [redSegment]
		});

		// update and execute the core policy
		exampleNet.updatePolicy();

		// share the core network with the organisation
		exampleNet.share({
			principals: [
			  'arn:aws:organizations::454817366727:organization/o-xxxxxxxxx'
			],
		}); 
	}
}