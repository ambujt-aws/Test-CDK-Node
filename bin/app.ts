#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

// IamRoleStack was removed because the LambdaAdminRole was identified as unused
// by AWS IAM Access Analyzer (Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f)
// The role had AdministratorAccess permissions and was not being used by any
// Lambda functions or other AWS services.

const app = new cdk.App();

// Add your CDK stacks here
