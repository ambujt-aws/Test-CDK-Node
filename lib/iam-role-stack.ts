import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Previously contained LambdaAdminRole (ID: LambdaAdminRole635E17BF)
    // Removed due to AWS IAM Access Analyzer finding: UnusedIAMRole
    // Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
    
    // Stack kept as placeholder for future IAM resources if needed
  }
}