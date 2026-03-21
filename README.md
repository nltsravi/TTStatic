# Tirwin Talent Static (TTStatic)

This is a [Next.js](https://nextjs.org) property serving as the static frontend experience. It utilizes static exports (`/out`) mapped securely onto AWS CloudFront over an S3 Website Endpoint to eliminate origin processing bottlenecks.

## Getting Started

First, install library dependencies and run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to visualize your layout changes locally. The application implements `trailingSlash: true` to ensure directory routing resolves perfectly once deployed to S3 static hosting origins.

## Environment Files (`.env`)

The project deployment structure relies on `.env` files matching your distinct deployment environments. You must create these in your root workspace:

**`.env.development`** (Used for dev staging environments)

```env
S3_BUCKET="your-dev-s3-bucket-name"
CLOUDFRONT_DISTRIBUTION_ID="XXXXXXXXXXXXXX"
```

**`.env.production`** (Used for production environments)

```env
S3_BUCKET="your-production-s3-bucket-name"
CLOUDFRONT_DISTRIBUTION_ID="XXXXXXXXXXXXXX"
```

> **Note**: Both `.env.development` and `.env.production` should be added to `.gitignore`. *Never commit live AWS CloudFront IDs or Bucket Names to version control.*

## Deployment to AWS

To simplify deploying your Next.js application, use the configured `./deploy.sh` script.

The deployment script takes one parameter: `<env_name>` which must be `dev` or `prod`.
If no parameter is passed, deployment natively defaults to the `dev` environment.

```bash
# Deploys to the development environment bucket (.env.development)
./deploy.sh dev

# Deploys to the live production bucket (.env.production)
./deploy.sh prod
```

### Automation Architecture

1. The script selectively targets your parameter (`dev` / `prod`) and sources the respective `.env` file credentials.
2. It executes a rigorous `npm run build` process to construct out your fast, flat static assets.
3. The newly generated `/out` payload is automatically `aws` synced to your configured `$S3_BUCKET`.
4. Finally, your `$CLOUDFRONT_DISTRIBUTION_ID` endpoints are aggressively invalidated across global edge networks to guarantee your viewers see the absolute latest updates instantly.

> **Credentials Note**: Ensure the AWS profile executing `deploy.sh` is natively exported and valid (it currently invokes `$AWS_DEFAULT_PROFILE=dev.tirwin.fe.new` within the shell context).
