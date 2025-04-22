/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Update this to match your new repository name
  basePath: '/personal_website_EN',
  // Update this to match your new repository name
  assetPrefix: '/personal_website_EN',
};

export default nextConfig;
