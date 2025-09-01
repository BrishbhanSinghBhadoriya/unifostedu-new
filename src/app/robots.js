export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export default function robots() {
  const baseUrl = 'https://www.unifostedu.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/_next/*',
          '/admin/*',
          '/private/*',
          '/*.json',
          '/*.xml',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/_next/*',
          '/admin/*',
          '/private/*',
        ],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/_next/*',
          '/admin/*',
          '/private/*',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


