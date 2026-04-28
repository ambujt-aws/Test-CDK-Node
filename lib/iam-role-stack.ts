import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// This stack previously contained an unused IAM role (LambdaAdminRole) that was
// removed based on AWS IAM Access Analyzer finding 83294a63-d33b-4d02-8d3a-0064022c523f.
// The role had AdministratorAccess permissions but was never used.

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // IAM role removed - stack kept for potential future use
  }
}
