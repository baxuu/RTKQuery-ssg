/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/backstage/:slug*',
        destination: 'https://sso-roland.vercel.app/:slug*',
      },
    ],
  }),
  images: {
    domains: ['cdn.pixabay.com', 'cdn-images-1.medium.com'],
  },
};

module.exports = nextConfig;
