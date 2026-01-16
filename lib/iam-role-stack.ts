import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class IamRoleStack extends cdk.Stack {
  public readonly role: iam.Role;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.role = new iam.Role(this, 'LambdaAdminRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
      description: 'Lambda execution role with admin permissions but S3 denied',
    });

    // Add explicit deny policy for all S3 actions
    const denyS3Policy = new iam.Policy(this, 'DenyS3Policy', {
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          actions: ['s3:*'],
          resources: ['*'],
          principals: [],
        }),
      ],
    });

    // Attach the deny policy to the role
    this.role.attachInlinePolicy(denyS3Policy);

    new cdk.CfnOutput(this, 'RoleArn', {
      value: this.role.roleArn,
      description: 'ARN of the Lambda admin role with S3 denied',
    });
  }
}