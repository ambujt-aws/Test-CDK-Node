import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * IamRoleStack - Stack for IAM roles
 * 
 * Note: The LambdaAdminRole was removed as it was identified as unused
 * by AWS IAM Access Analyzer.
 * 
 * Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
 * Original Role: IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp
 */
export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // IAM resources have been removed as they were identified as unused
    // by AWS IAM Access Analyzer
  }
}
