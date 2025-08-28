export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export default function robots() {
  const baseUrl ='https://www.unifostedu.com';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


