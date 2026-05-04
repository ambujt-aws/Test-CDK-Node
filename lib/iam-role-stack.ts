import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// This stack previously contained an unused IAM role (LambdaAdminRole)
// that was removed based on AWS IAM Access Analyzer findings.
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The LambdaAdminRole was removed because it was identified as unused
    // by AWS IAM Access Analyzer. If you need a Lambda execution role,
    // please create a new one with appropriate least-privilege permissions.
  }
}
