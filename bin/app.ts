#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

// IamRoleStack removed - unused IAM role deleted per AWS IAM Access Analyzer finding
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
// Resource: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp

const app = new cdk.App();
