/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreDuringBuilds: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
