import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  // Note: The role property has been removed as the IAM role was unused
  // public readonly role: iam.Role;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // REMOVED: IAM Role - LambdaAdminRole
    // This role was removed because AWS IAM Access Analyzer identified it as unused
    // Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
    // Original role ARN: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp
    //
    // The following resources were removed:
    // - IAM Role with Lambda service principal
    // - AdministratorAccess managed policy attachment
    // - CfnOutput for role ARN
    
    /*
    this.role = new iam.Role(this, 'LambdaAdminRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
      description: 'Lambda execution role with admin permissions',
    });

    new cdk.CfnOutput(this, 'RoleArn', {
      value: this.role.roleArn,
      description: 'ARN of the Lambda admin role',
    });
    */
  }
}