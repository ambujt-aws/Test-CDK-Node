#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();

// IamRoleStack removed - AWS IAM Access Analyzer identified the LambdaAdminRole as unused
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
