#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

// The IamRoleStack has been removed because the LambdaAdminRole was identified
// as unused by AWS IAM Access Analyzer.
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
// Resource ARN: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp

const app = new cdk.App();

// No stacks are currently deployed as part of this CDK application.
// Add new stacks here as needed.
