#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();

// IAM role stack removed as per AWS IAM Access Analyzer finding
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
// The IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp role was unused