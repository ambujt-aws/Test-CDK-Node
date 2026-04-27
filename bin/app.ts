#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();

// IamRoleStack removed - contained unused IAM role identified by AWS IAM Access Analyzer
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
// Resource: arn:aws:iam::058264309950:role/IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp
