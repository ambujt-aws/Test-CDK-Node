#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
// IamRoleStack removed - contained only unused IAM role
// import { IamRoleStack } from '../lib/iam-role-stack';

const app = new cdk.App();

// Stack instantiation removed - the LambdaAdminRole was identified as unused
// by AWS IAM Access Analyzer (Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f)
// new IamRoleStack(app, 'IamRoleStack', {
//   description: 'Stack containing Lambda execution role with admin permissions',
// });
