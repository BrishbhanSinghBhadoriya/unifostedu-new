/** @type {import('next').nextConfig} */
const nextConfig = {
<<<<<<< HEAD
  // SSR and SSG enabled by default in Next.js App Router
  // Pages will be pre-rendered at build time (SSG) or on-demand (SSR)
  
  // Enable image optimization for better SEO and performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Enable compression for better performance
  compress: true,
  
  // PoweredBy header removed for security (Next.js handles this automatically)
  
  // Optimize for production
  swcMinify: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
=======
  output: 'export', 
 images: { unoptimized: true },
 trailingSlash: true,
>>>>>>> 3bce43348b80bfa3c33c3da341ca30fae12f2a3f
};

module.exports = nextConfig;