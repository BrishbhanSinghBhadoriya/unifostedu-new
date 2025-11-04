<<<<<<< HEAD
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

=======
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export default function sitemap() {
  const baseUrl = "https://unifostedu.com";
  const currentDate = new Date();

  const staticRoutes = [
    // Main pages - Highest Priority
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      breadcrumb: ['Home']
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'About']
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Services']
    },
    {
      url: `${baseUrl}/listofcollege`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities']
    },
    {
      url: `${baseUrl}/coursesearch`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses']
    },

    // University pages - Highest Priority (placed before courses for SEO)
    {
      url: `${baseUrl}/Amity-University-Online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Amity University']
    },
    
    {
      url: `${baseUrl}/manipal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Manipal University']
    },
    {
      url: `${baseUrl}/nmims`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'NMIMS University']
    },
    {
      url: `${baseUrl}/dypatil`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Dr. D Y Patil University']
    },
    {
      url: `${baseUrl}/jain`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Jain University']
    },
    {
      url: `${baseUrl}/lpu-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Lovely Professional University']
    },
    {
      url: `${baseUrl}/sharda`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Sharda University']
    },
    {
      url: `${baseUrl}/shoolini`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Shoolini University']
    },
    {
      url: `${baseUrl}/smu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Sikkim Manipal University']
    },
    {
      url: `${baseUrl}/upes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'UPES University']
    },
    {
      url: `${baseUrl}/uu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Uttaranchal University']
    },
    {
      url: `${baseUrl}/vgu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'VGU University']
    },
    {
      url: `${baseUrl}/ku-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Kurukshetra University']
    },
    {
      url: `${baseUrl}/opjindal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'OP Jindal University']
    },
    {
      url: `${baseUrl}/cuonline`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Chandigarh University']
    },
    {
      url: `${baseUrl}/mahe-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'MAHE Online']
    },

    // Course pages - High Priority
    {
      url: `${baseUrl}/courses/mba-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'MBA Online']
    },
    {
      url: `${baseUrl}/courses/mca-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'MCA Online']
    },
    {
      url: `${baseUrl}/courses/bba-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'BBA Online']
    },
    {
      url: `${baseUrl}/courses/bca-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'BCA Online']
    },
    {
      url: `${baseUrl}/courses/bcom-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'BCom Online']
    },
    {
      url: `${baseUrl}/courses/ba-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'BA Online']
    },
    {
      url: `${baseUrl}/courses/bajmc-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'BAJMC Online']
    },
    {
      url: `${baseUrl}/courses/mcom-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'MCom Online']
    },
    {
      url: `${baseUrl}/courses/ma-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'MA Online']
    },
    {
      url: `${baseUrl}/courses/majmc-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'MAJMC Online']
    },
    {
      url: `${baseUrl}/courses/msc-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Courses', 'MSc Online']
    },

    // University pages - Highest Priority
    {
      url: `${baseUrl}/Amity-University-Online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Amity University']
    },
    {
      url: `${baseUrl}/manipal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Manipal University']
    },
    {
      url: `${baseUrl}/nmims`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'NMIMS University']
    },
    {
      url: `${baseUrl}/dypatil`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Dr. D Y Patil University']
    },
    {
      url: `${baseUrl}/jain`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Jain University']
    },
    {
      url: `${baseUrl}/lpu-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Lovely Professional University']
    },
    {
      url: `${baseUrl}/sharda`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Sharda University']
    },
    {
      url: `${baseUrl}/shoolini`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Shoolini University']
    },
    {
      url: `${baseUrl}/smu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Sikkim Manipal University']
    },
    {
      url: `${baseUrl}/upes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'UPES University']
    },
    {
      url: `${baseUrl}/uu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Uttaranchal University']
    },
    {
      url: `${baseUrl}/vgu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'VGU University']
    },
    {
      url: `${baseUrl}/ku-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Kurukshetra University']
    },
    {
      url: `${baseUrl}/opjindal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'OP Jindal University']
    },
    {
      url: `${baseUrl}/cuonline`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      breadcrumb: ['Home', 'Universities', 'Chandigarh University']
    },
  ];

  return staticRoutes;
}
>>>>>>> 3bce43348b80bfa3c33c3da341ca30fae12f2a3f
