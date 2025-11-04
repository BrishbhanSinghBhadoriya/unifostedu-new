/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR and SSG enabled by default in Next.js App Router
  // Pages will be pre-rendered at build time (SSG) or on-demand (SSR)

  // Enable image optimization for better SEO and performance
  images: {
  
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80],
    minimumCacheTTL: 31536000, // 1 year for optimized images
  },

  // Add strong caching for images served from public/images
  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Enable compression for better performance
  compress: true,

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Note: SWC minification is enabled by default in Next.js 13+ (no need to specify)
};

module.exports = nextConfig;