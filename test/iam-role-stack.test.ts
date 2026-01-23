import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamRoleStack } from '../lib/iam-role-stack';

describe('IamRoleStack', () => {
  const app = new cdk.App();
  const stack = new IamRoleStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  // Note: Tests commented out as the IAM role has been removed due to being unused
  // AWS IAM Access Analyzer Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f

  test('stack exists and can be created without IAM role', () => {
    // Verify the stack can be created successfully
    expect(stack).toBeDefined();
    
    // Verify no IAM roles are created in the stack
    template.resourceCountIs('AWS::IAM::Role', 0);
  });

  /*
  // REMOVED: Tests for the unused IAM role
  
  test('creates IAM role with Lambda trust policy', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
    });
  });

  test('attaches AdministratorAccess managed policy', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      ManagedPolicyArns: [
        {
          'Fn::Join': [
            '',
            [
              'arn:',
              { Ref: 'AWS::Partition' },
              ':iam::aws:policy/AdministratorAccess',
            ],
          ],
        },
      ],
    });
  });
  */
});