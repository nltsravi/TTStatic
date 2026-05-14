#!/bin/bash

# Exit on error
set -e

ENV=${1:-dev}

if [ "$ENV" = "prod" ]; then
    ENV_FILE=".env.production"
elif [ "$ENV" = "dev" ]; then
    ENV_FILE=".env.development"
else
    echo "❌ Invalid environment parameter: $ENV. Please use 'dev' or 'prod'."
    exit 1
fi

echo "🔧 Using environment file: $ENV_FILE"

export AWS_DEFAULT_PROFILE=dev.tirwin.fe.new
set -o allexport
if [ -f "$ENV_FILE" ]; then
    source "$ENV_FILE"
else
    echo "❌ Environment file $ENV_FILE not found."
    exit 1
fi
set +o allexport

if ! command -v git-lfs &> /dev/null
then
    echo "❌ git-lfs could not be found. Please install git-lfs first (e.g., 'brew install git-lfs' or 'apt-get install git-lfs')."
    exit 1
fi

if ! command -v aws &> /dev/null
then
    echo "❌ AWS CLI could not be found. Please install and configure it."
    exit 1
fi

MODEL_DIR="/tmp/gemma-2b-it-q4f32_1-MLC"
MODEL_REPO="https://huggingface.co/mlc-ai/gemma-2b-it-q4f32_1-MLC"

echo "⬇️  Cloning model from HuggingFace into $MODEL_DIR..."
if [ -d "$MODEL_DIR" ]; then
    echo "Model already exists locally. Updating..."
    cd "$MODEL_DIR"
    git pull
else
    git clone "$MODEL_REPO" "$MODEL_DIR"
    cd "$MODEL_DIR"
fi

echo "☁️  Syncing model directly to S3 bucket: s3://$S3_BUCKET/models/gemma-2b-it-q4f32_1-MLC/ ..."
# We exclude the .git folder from the sync
aws s3 sync "$MODEL_DIR" "s3://$S3_BUCKET/models/gemma-2b-it-q4f32_1-MLC/" --exclude ".git/*"

# Invalidate CloudFront cache if a distribution ID is provided
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache for models..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/models/*" --no-cli-pager
fi

echo "✅ One-time model upload complete!"
