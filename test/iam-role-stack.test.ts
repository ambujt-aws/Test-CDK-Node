import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamRoleStack } from '../lib/iam-role-stack';

// Tests removed as the LambdaAdminRole was identified as unused
// by AWS IAM Access Analyzer.
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f

describe('IamRoleStack', () => {
  const app = new cdk.App();
  const stack = new IamRoleStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  test('stack is empty after removing unused role', () => {
    // The LambdaAdminRole was removed as it was identified as unused
    // Verify no IAM roles exist in the stack
    expect(template.toJSON().Resources).toBeUndefined();
  });
});
