export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/',
        '/api/',
        '/_next/',
        '/admin/',
      ],
    },
    sitemap: 'https://unifostedu.com/sitemap.xml',
  };
}

