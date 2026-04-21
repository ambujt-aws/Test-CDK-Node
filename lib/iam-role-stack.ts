import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The LambdaAdminRole IAM role was removed as it was identified as unused
    // by AWS IAM Access Analyzer (Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f)
    // If you need a Lambda execution role in the future, create a new one with
    // appropriately scoped permissions following the principle of least privilege.
  }
}
