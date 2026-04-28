#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

// IamRoleStack removed - it contained an unused IAM role identified by
// AWS IAM Access Analyzer (Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f)

const app = new cdk.App();

// Add new stacks here as needed
