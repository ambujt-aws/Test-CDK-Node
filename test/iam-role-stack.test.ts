import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamRoleStack } from '../lib/iam-role-stack';

describe('IamRoleStack', () => {
  const app = new cdk.App();
  const stack = new IamRoleStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  test('stack exists and can be synthesized', () => {
    // Verify that the stack can be created without errors
    expect(stack).toBeDefined();
    expect(template).toBeDefined();
  });

  test('contains no IAM resources', () => {
    // Verify that no IAM roles are present after removing unused role
    template.resourceCountIs('AWS::IAM::Role', 0);
  });

  // Previous tests for LambdaAdminRole have been removed as the role
  // was identified as unused by AWS IAM Access Analyzer
  // Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
});