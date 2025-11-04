<<<<<<< HEAD
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

=======
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export default function robots() {
  const baseUrl = 'https://unifostedu.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        
        
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        
        
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
>>>>>>> 3bce43348b80bfa3c33c3da341ca30fae12f2a3f
