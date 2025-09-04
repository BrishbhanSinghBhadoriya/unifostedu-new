export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export default function sitemap() {
  const baseUrl = "https://www.unifostedu.com";
  const currentDate = new Date();

  const staticRoutes = [
    // Main pages - High Priority
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
      priority: 0.8,
      breadcrumb: ['Home', 'About']
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      breadcrumb: ['Home', 'Services']
    },
    {
      url: `${baseUrl}/listofcollege`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities']
    },
    {
      url: `${baseUrl}/coursesearch`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses']
    },
    
    
    
    
    // Course pages - High Priority
    {
      url: `${baseUrl}/courses/mba-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'MBA Online']
    },
    {
      url: `${baseUrl}/courses/mca-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'MCA Online']
    },
    {
      url: `${baseUrl}/courses/bba-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'BBA Online']
    },
    {
      url: `${baseUrl}/courses/bca-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'BCA Online']
    },
    {
      url: `${baseUrl}/courses/bcom-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'BCom Online']
    },
    {
      url: `${baseUrl}/courses/ba-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'BA Online']
    },
    {
      url: `${baseUrl}/courses/bajmc-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'BAJMC Online']
    },
    {
      url: `${baseUrl}/courses/mcom-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'MCom Online']
    },
    {
      url: `${baseUrl}/courses/ma-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'MA Online']
    },
    {
      url: `${baseUrl}/courses/majmc-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'MAJMC Online']
    },
    {
      url: `${baseUrl}/courses/msc-online`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Courses', 'MSc Online']
    },
    
    // University pages - High Priority
    {
      url: `${baseUrl}/amity`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Amity University']
    },
    {
      url: `${baseUrl}/manipal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Manipal University']
    },
    {
      url: `${baseUrl}/nmims`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'NMIMS University']
    },
    {
      url: `${baseUrl}/dypatil`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Dr. D Y Patil University']
    },
    {
      url: `${baseUrl}/jain`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Jain University']
    },
    {
      url: `${baseUrl}/lpu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Lovely Professional University']
    },
    {
      url: `${baseUrl}/sharda`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Sharda University']
    },
    {
      url: `${baseUrl}/shoolini`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Shoolini University']
    },
    {
      url: `${baseUrl}/smu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Sikkim Manipal University']
    },
    {
      url: `${baseUrl}/upes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'UPES University']
    },
    {
      url: `${baseUrl}/uu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Uttaranchal University']
    },
    {
      url: `${baseUrl}/vgu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'VGU University']
    },
    {
      url: `${baseUrl}/ku`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Kurukshetra University']
    },
    {
      url: `${baseUrl}/opjindal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'OP Jindal University']
    },
    {
      url: `${baseUrl}/chandigarh`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      breadcrumb: ['Home', 'Universities', 'Chandigarh University']
    },
    
    
    
  ];

  return staticRoutes;
}


