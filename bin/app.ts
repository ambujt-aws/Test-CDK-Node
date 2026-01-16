#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IamRoleStack } from '../lib/iam-role-stack';

const app = new cdk.App();

new IamRoleStack(app, 'IamRoleStack', {
  description: 'Stack containing Lambda execution role with admin permissions',
});
