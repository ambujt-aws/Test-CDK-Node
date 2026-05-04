import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * This stack previously contained an unused IAM role (LambdaAdminRole)
 * that was identified and removed by AWS IAM Access Analyzer.
 * 
 * Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
 * Resource ARN: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp
 * 
 * The role was removed because it was not being used by any Lambda functions
 * or other AWS services.
 */
export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // IAM role removed - it was identified as unused by AWS IAM Access Analyzer
  }
}
