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
      description: 'Lambda execution role with admin permissions',
    });

    // Add a deny policy for DynamoDB access
    const denyDynamoDbPolicy = new iam.Policy(this, 'DenyDynamoDbPolicy', {
      policyName: 'DenyDynamoDbAccess',
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.DENY,
          actions: ['dynamodb:*'],
          resources: ['*'],
          sid: 'DenyAllDynamoDbAccess',
        }),
      ],
    });

    // Attach the deny policy to the role
    denyDynamoDbPolicy.attachToRole(this.role);

    new cdk.CfnOutput(this, 'RoleArn', {
      value: this.role.roleArn,
      description: 'ARN of the Lambda admin role',
    });
  }
}