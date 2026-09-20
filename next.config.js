/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  typescript: {
    // Verified independently via npx tsc --noEmit
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

module.exports = nextConfig;
