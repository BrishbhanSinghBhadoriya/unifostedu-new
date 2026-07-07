/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true, // Allow SVG images from trusted sources
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
     
    ],
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'framer-motion',
      '@radix-ui/react-icons',
      '@mui/material',
      '@mui/icons-material',
      'clsx',
      'tailwind-merge',
      'gsap',
      'swiper',
      'react-slick',
      'aos'
    ],
  },

  // Enable production source maps only if needed
  productionBrowserSourceMaps: false,

  // Improve performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https:; connect-src 'self' https:" },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://unifostedu.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,PATCH,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          { key: 'Access-Control-Max-Age', value: '86400' },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'ETag', value: 'immutable' },
        ],
      },
      {
        source: '/',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // Compression and React strict mode
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,

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
      // Temporarily disabled to fix redirect loop
      // {
      //   source: '/Best-online-MBA-for-working-professionals-India-2025',
      //   destination: '/best-online-mba-for-working-professionals-india-2025',
      //   permanent: true,
      // },
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

