import
{
  aws_ec2 as ec2,
  aws_autoscaling as autoscaling,
  aws_elasticloadbalancingv2 as elbv2,
}
  from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


export class WhisperProps extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    // create an ec2 VPC
    const vpc = new ec2.Vpc(this, 'vpc', {
      maxAzs: 2,
    });

    // create an autoscaling group
    const asg = new autoscaling.AutoScalingGroup(this, 'asg', {
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: new ec2.AmazonLinuxImage(),
    });

    // create a load balancer
    const lb = new elbv2.ApplicationLoadBalancer(this, 'lb', {
      vpc,
      internetFacing: true,
    });

    // create a listener for the load balancer
    const listener = lb.addListener('listener', {
      port: 80,
    });

    // create a target group for the listener
    listener.addTargets('tg', {
      port: 80,
      targets: [asg],
    });

    // allow all traffic to the listener
    listener.connections.allowDefaultPortFromAnyIpv4('Allow all traffic');

    // set scaling on requests
    asg.scaleOnRequestCount('scaleOnRequest', {
      targetRequestsPerMinute: 60,
      cooldown: cdk.Duration.seconds(60),
    });
  }
}