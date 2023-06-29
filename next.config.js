/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
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
};
