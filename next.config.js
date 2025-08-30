/** @type {import('next').nextConfig} */
const nextConfig = {
  // output: 'export', // Removed to allow dynamic routes and API calls
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
