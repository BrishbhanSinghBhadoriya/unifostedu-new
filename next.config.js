/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true, // kyunki static export me Next Image optimization nahi chalega
  },
  output: 'export', // ye add karo static HTML export ke liye
};

module.exports = nextConfig;
