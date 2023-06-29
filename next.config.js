/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/mux/convert',
        destination: '/api/mux/convert',
      },
    ];
  },
  // other configurations...
};
module.exports = {
  ...nextConfig,
  api: {
    externalResolver: true,
  },
};
