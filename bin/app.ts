#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();

// The IamRoleStack containing LambdaAdminRole has been removed
// as the role was identified as unused by AWS IAM Access Analyzer.
// Add new stacks here as needed.
