#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();

// IAM role stack removed - the LambdaAdminRole was identified as unused by AWS IAM Access Analyzer
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f
