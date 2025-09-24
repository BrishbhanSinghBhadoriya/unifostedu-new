/** @type {import('next').nextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true,
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
