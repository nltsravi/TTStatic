#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

export AWS_DEFAULT_PROFILE=dev.tirwin.fe.new
set -o allexport
source .env.production 
#source .env.development
set +o allexport

echo "🔧 Checking prerequisites..."

if ! command -v aws &> /dev/null
then
    echo "❌ AWS CLI could not be found. Please install and configure it (run 'aws configure') before deploying."
    exit 1
fi

if [ "$S3_BUCKET" = "your-s3-bucket-name" ]; then
    echo "⚠️  WARNING: You haven't changed the default S3_BUCKET name in deploy.sh!"
    echo "Please edit deploy.sh and update the S3_BUCKET variable with your actual bucket name."
    exit 1
fi

echo "📦 Building the Next.js static site..."
# Clean previous build artifacts just in case
rm -rf out .next
# Build the project (output will be placed in the 'out' folder because of static export)
npm run build

echo "☁️  Deploying to S3 bucket: s3://$S3_BUCKET..."
# Sync the 'out' directory to the S3 bucket
# --delete removes files in the destination that no longer exist in the source
aws s3 sync ./out/ s3://$S3_BUCKET/ --delete

# Invalidate CloudFront cache if a distribution ID is provided
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
fi

echo "✅ Deployment complete! Your site has been uploaded to AWS S3."
