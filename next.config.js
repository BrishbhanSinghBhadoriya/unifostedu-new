/** @type {import('next').nextConfig} */
const nextConfig = {
  trailingSlash: true,
   output: 'export', // Removed to allow dynamic routes and API calls
  images: { unoptimized: true },
  trailingSlash: true,
  compress: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
  
};

module.exports = nextConfig;
