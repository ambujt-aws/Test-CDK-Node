#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

// IamRoleStack removed - IAM role LambdaAdminRole was identified as unused by AWS IAM Access Analyzer
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
// Resource ARN: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp

const app = new cdk.App();

// Add your CDK stacks here
