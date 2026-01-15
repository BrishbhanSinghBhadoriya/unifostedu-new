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
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coursesearch`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/University-List`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bookdemo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
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
      priority: 0.4,
    },
  ];

  // Course routes (dynamic [slug] handles these)
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
    priority: 0.8,
  }));

  // Amity University course routes - FIXED: Added "/" separator
  const amityRoutes = [
    'mba-online',
    'mca-online',
    'bba-online',
    'bca-online',
    'mcom-online',
    'bcom-online',
    'ma-online',
    'ba-online',
    'msc-online',
  ].map((courseRoute) => ({
    url: `${baseUrl}/Amity-University-Online/${courseRoute}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // University routes (only routes that exist in project)
  const universityRoutes = [
    'Amity-University-Online',
    'manipal',
    'muj-online-bba',
    'muj-online-bca',
    'muj-online-ba',
    'muj-online-mba',
    'muj-online-mca',
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

  // Working professional routes - FIXED: Corrected folder name
  const workingProfessional = [
    'best-online-mba-for-working-professionals-india-2025',
    'best-online-mca-for-working-professionals-in-india',
    'top-online-bca-university-in-india',
  ].map((wx) => ({
    url: `${baseUrl}/${wx}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Amity sub-routes that exist
  const amitySubRoutes = [
    'amity-online-mba',
    'amity-online-mba-total-fees',
    'best-online-mca-university-in-india',
  ].map((route) => ({
    url: `${baseUrl}/Amity-University-Online/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog routes - FIXED: Using actual folder names (PascalCase)
  const blogRoutes = [
    'MBADistanceVsOnline',
    'BestOnlineBBA2025',
    'ManipalVsAmityOnlineMBA',
    'LPUOnlineReview',
    'JainUGCApproval',
    'CareerAfterOnlineMBA',
    'ChooseOnlineUniversity',
    'ScholarshipAndEMI',
    'WorkingMBA',
    'UnifostSpecial',
    'SpecialBlog',
  ].map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...universityRoutes,
    ...amityRoutes,
    ...amitySubRoutes,
    ...courseRoutes,
    ...blogRoutes,
    ...workingProfessional,
  ];
}
