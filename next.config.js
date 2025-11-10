/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ disables Next.js optimization (no blur, no compression)

    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [70, 75, 80],
    minimumCacheTTL: 31536000, // 1 year

    // ✅ Allow Cloudinary images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // ✅ Strong caching for local images
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

  // ✅ Compression and React strict mode
  compress: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
