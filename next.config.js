/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'framer-motion',
      '@radix-ui/react-icons',
    ],
  },

  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Add CORS headers for API routes to allow local frontend at :8081
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:8081' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,PATCH,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
      {
        // Cache static assets
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Compression and React strict mode
  compress: true,
  reactStrictMode: true,

  // Reduce bundle size

  // Redirects for broken URLs and Domain Canonicalisation
  async redirects() {
    return [
      // Force non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.unifostedu.com',
          },
        ],
        destination: 'https://unifostedu.com/:path*',
        permanent: true,
      },
      // Legacy/Alternate URLs
      {
        source: '/Best-online-MBA-for-working-professionals-India-2025',
        destination: '/best-online-mba-for-working-professionals-india-2025',
        permanent: true,
      },
      {
        source: '/universities/manipal-university-online',
        destination: '/manipal',
        permanent: true,
      },
      {
        source: '/amity-university-online/:path*',
        destination: '/amity/:path*',
        permanent: true,
      },
      {
        source: '/university-list',
        destination: '/university-list',
        permanent: true,
      },
      {
        source: '/vgu-university',
        destination: '/vgu',
        permanent: true,
      },
      {
        source: '/uttaranchal-university',
        destination: '/uu',
        permanent: true,
      },
      // Fix course slugs with dots
      {
        source: '/courses/m.com-online',
        destination: '/courses/mcom-online',
        permanent: true,
      },
      {
        source: '/courses/b.com-online',
        destination: '/courses/bcom-online',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

