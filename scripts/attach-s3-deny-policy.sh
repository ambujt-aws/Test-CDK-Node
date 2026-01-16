# Commands to attach S3 deny policy to the existing IAM role

# 1. Create the managed policy from the JSON file
aws iam create-policy \
  --policy-name "S3DenyPolicy" \
  --policy-document file://policies/s3-deny-policy.json \
  --description "Deny all S3 access for security compliance" \
  --region us-east-1

# 2. Attach the policy to the existing role
aws iam attach-role-policy \
  --role-name "IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp" \
  --policy-arn "arn:aws:iam::058264309950:policy/S3DenyPolicy" \
  --region us-east-1

# 3. Verify the policy is attached
aws iam list-attached-role-policies \
  --role-name "IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp" \
  --region us-east-1

# Alternative: Add as inline policy instead of managed policy
aws iam put-role-policy \
  --role-name "IamRoleStack-LambdaAdminRole635E17BF-SEwbXzsGnyAp" \
  --policy-name "S3DenyInlinePolicy" \
  --policy-document file://policies/s3-deny-policy.json \
  --region us-east-1