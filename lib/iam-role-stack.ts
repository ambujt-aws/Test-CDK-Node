import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// IAM Role 'LambdaAdminRole' was removed as it was identified as unused
// by AWS IAM Access Analyzer.
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
// Resource ARN: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Role removed - stack intentionally empty
  }
}
