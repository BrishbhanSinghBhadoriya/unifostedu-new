/** @type {import('next').nextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'unifostedu.com',
          },
        ],
        destination: 'https://unifostedu.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;