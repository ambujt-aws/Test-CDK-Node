#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

// NOTE: IamRoleStack was removed as it only contained an unused IAM role.
// The role was identified as unused by AWS IAM Access Analyzer.
// Finding ID: 83294a63-d33b-4d02-8d3a-0064022c523f

const app = new cdk.App();

// Stack instantiation removed - the IamRoleStack only contained an unused role
