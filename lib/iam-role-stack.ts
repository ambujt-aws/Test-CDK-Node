import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // NOTE: Previously contained an unused IAM role 'LambdaAdminRole' that was removed
    // due to AWS IAM Access Analyzer finding: 83294a63-d33b-4d02-8d3a-0064022c523f
    // The role (arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp)
    // was identified as unused and has been safely removed from the infrastructure.
    //
    // This stack is kept for potential future IAM role definitions.
  }
}