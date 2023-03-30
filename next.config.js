/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    domains: ['cdn.pixabay.com', 'cdn-images-1.medium.com'],
  },
};

module.exports = nextConfig;
