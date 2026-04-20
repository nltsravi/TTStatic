import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}`;
}

const buildDate = new Date();
const buildNumber = `${buildDate.getFullYear()}${String(buildDate.getMonth() + 1).padStart(2, '0')}${String(buildDate.getDate()).padStart(2, '0')}${String(buildDate.getHours()).padStart(2, '0')}${String(buildDate.getMinutes()).padStart(2, '0')}`;

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: repo || '',
  assetPrefix: repo || '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BUILD_NUMBER: buildNumber,
  }
};

export default nextConfig;
