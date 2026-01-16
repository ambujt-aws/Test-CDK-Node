import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  public readonly role: iam.Role;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create inline policy that denies s3:GetObject
    const denyS3GetObjectPolicy = new iam.Policy(this, 'DenyS3GetObjectPolicy', {
      policyName: 'DenyS3GetObjectAccess',
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          actions: ['s3:GetObject'],
          resources: ['*'],
        }),
      ],
    });

    this.role = new iam.Role(this, 'LambdaAdminRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
      description: 'Lambda execution role with admin permissions but denied s3:GetObject access',
    });

    // Attach the deny policy to the role
    denyS3GetObjectPolicy.attachToRole(this.role);

    new cdk.CfnOutput(this, 'RoleArn', {
      value: this.role.roleArn,
      description: 'ARN of the Lambda admin role with s3:GetObject denied',
    });
  }
}