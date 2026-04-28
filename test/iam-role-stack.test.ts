import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamRoleStack } from '../lib/iam-role-stack';

describe('IamRoleStack', () => {
  const app = new cdk.App();
  const stack = new IamRoleStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  test('stack creates successfully with no resources', () => {
    // The LambdaAdminRole has been removed as it was identified as unused
    // by AWS IAM Access Analyzer (Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f)
    // Verify no IAM roles are created
    template.resourceCountIs('AWS::IAM::Role', 0);
  });
});
