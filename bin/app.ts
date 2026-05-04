#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IamRoleStack } from '../lib/iam-role-stack';

const app = new cdk.App();

// Stack instantiation preserved but the unused LambdaAdminRole has been removed
new IamRoleStack(app, 'IamRoleStack', {
  description: 'Stack for IAM resources (unused LambdaAdminRole removed)',
});
