import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  public readonly role: iam.Role;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create inline policy that denies all S3 permissions
    const denyAllS3Policy = new iam.Policy(this, 'DenyAllS3Policy', {
      policyName: 'DenyAllS3Access',
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          actions: ['s3:*'],
          resources: ['*'],
        }),
      ],
    });

    this.role = new iam.Role(this, 'LambdaAdminRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
      description: 'Lambda execution role with admin permissions but denied all S3 access',
    });

    // Attach the deny policy to the role
    denyAllS3Policy.attachToRole(this.role);

    new cdk.CfnOutput(this, 'RoleArn', {
      value: this.role.roleArn,
      description: 'ARN of the Lambda admin role with all S3 permissions denied',
    });
  }
}