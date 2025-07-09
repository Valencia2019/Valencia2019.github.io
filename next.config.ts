import type { NextConfig } from 'next';

const isGithubPages: boolean = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/Valencia2019.github.io' : '',
  assetPrefix: isGithubPages ? '/Valencia2019.github.io/' : '',
};

export default nextConfig;
