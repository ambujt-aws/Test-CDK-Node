import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The previously defined LambdaAdminRole has been removed as it was 
    // identified as unused by AWS IAM Access Analyzer
    // Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
    
    // This stack is now empty but preserved to maintain the CDK app structure
    // Consider removing this entire stack if no future IAM resources are planned
  }
}