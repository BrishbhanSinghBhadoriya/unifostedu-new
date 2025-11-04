export default function sitemap() {
  const baseUrl = 'https://unifostedu.com';
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
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
      url: `${baseUrl}/blog/blog-page`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
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

  // University routes
  const universityRoutes = [
    'amity',
    'manipal',
    'nmims',
    'lpu',
    'upes',
    'dypatil',
    'sharda',
    'jain',
    'chandigarh',
    'opjindal',
    'shoolini',
    'vgu',
    'smu',
    'uu',
  ].map((uni) => ({
    url: `${baseUrl}/${uni}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Blog routes
  const blogRoutes = [
    'mba-online-vs-distance',
    'best-online-bba-2025',
    'manipal-vs-amity-online-mba',
    'lpu-online-review',
    'jain-ugc-approval',
  ].map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...universityRoutes, ...blogRoutes];
}

