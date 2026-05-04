import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamRoleStack } from '../lib/iam-role-stack';

describe('IamRoleStack', () => {
  const app = new cdk.App();
  const stack = new IamRoleStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  test('stack is empty after removing unused LambdaAdminRole', () => {
    // The LambdaAdminRole was removed based on AWS IAM Access Analyzer findings
    // Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
    // This test verifies that no IAM roles exist in the stack
    template.resourceCountIs('AWS::IAM::Role', 0);
  });
});
