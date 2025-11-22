export default async function sitemap() {
  const baseUrl = 'https://unifostedu.com';
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coursesearch`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/listofcollege`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bookdemo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Course routes
  const courseRoutes = [
    'mba-online',
    'mca-online',
    'bba-online',
    'bca-online',
    'mcom-online',
    'bcom-online',
    'ma-online',
    'ba-online',
    'msc-online',
    'majmc-online',
    'bajmc-online',
  ].map((course) => ({
    url: `${baseUrl}/courses/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // University routes (updated with correct slugs)
  const universityRoutes = [
    'Amity-University-Online',
    'manipal',
    'muj-online-bba',
    'muj-online-bca',
    'mahe-online',
    'lpu-online',
    'ku-online',
    'cuOnline',
    'nmims',
    'smu',
    'jain',
    'dypatil',
    'sharda',
    'shoolini',
    'vgu',
    'upes',
    'opjindal',
    'uu',
  ].map((uni) => ({
    url: `${baseUrl}/${uni}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog routes (static blog posts)
  const blogRoutes = [
    'mba-online-vs-distance',
    'best-online-bba-2025',
    'manipal-vs-amity-online-mba',
    'lpu-online-review',
    'jain-ugc-approval',
    'career-after-online-mba',
    'choose-online-university',
    'jain-ugc-approval',
    'scholarship-and-emi',
    'working-mba',
    'unifost-special',
    'special-blog',
  ].map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Try to fetch dynamic blog posts from API (if available)
  let dynamicBlogRoutes = [];
  try {
    // If you have an API endpoint for blog slugs
    // const blogPosts = await fetch(
    //   `${baseUrl}/api/blog/slugs`,
    //   { next: { revalidate: 3600 } }
    // ).then((res) => res.json()).catch(() => []);
    
    // dynamicBlogRoutes = blogPosts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt || post.createdAt),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // }));
  } catch (error) {
    // Silently fail if API is not available
  }

  return [
    ...staticRoutes,
    ...universityRoutes,
    ...courseRoutes,
    ...blogRoutes,
    ...dynamicBlogRoutes,
  ];
}

