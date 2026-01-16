# IAM Role CDK

This CDK application deploys an IAM role configured for Lambda execution with AdministratorAccess permissions.

## Prerequisites

- Node.js 18+
- AWS CLI configured with credentials
- AWS CDK CLI (`npm install -g aws-cdk`)

## Setup

```bash
npm install
```

## Commands

```bash
npm run build       # Compile TypeScript
npm test            # Run unit tests
npx cdk synth       # Generate CloudFormation template
npx cdk diff        # Preview changes
npx cdk deploy      # Deploy to AWS
npx cdk destroy     # Remove stack from AWS
```

## First-Time Deployment

If this is your first CDK deployment to the target AWS account/region, bootstrap CDK first:

```bash
npx cdk bootstrap
```

## What Gets Deployed

- IAM Role with Lambda trust policy (`lambda.amazonaws.com`)
- AdministratorAccess managed policy attached

The role ARN is output after deployment.
