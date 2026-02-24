import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamRoleStack } from '../lib/iam-role-stack';

describe('IamRoleStack', () => {
  const app = new cdk.App();
  const stack = new IamRoleStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  test('stack is empty after removing unused LambdaAdminRole', () => {
    // IAM Role was removed because it was identified as unused
    // by AWS IAM Access Analyzer (Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f)
    template.resourceCountIs('AWS::IAM::Role', 0);
  });
});
