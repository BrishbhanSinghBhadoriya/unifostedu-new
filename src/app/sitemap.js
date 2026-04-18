import { UniversityList } from '@/data/UniversityList';
import { fetchBlogs } from '@/lib/blogApi';

export default async function sitemap() {
  const baseUrl = 'https://unifostedu.com';

  // Static routes
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/coursesearch`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/university-list`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/bookdemo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ];

  // Dynamic University routes from UniversityList
  const universityRoutes = UniversityList.map((uni) => ({
    url: `${baseUrl}${uni.link}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Course routes (generic)
  const genericCourseRoutes = [
    'mba-online', 'mca-online', 'bba-online', 'bca-online', 
    'mcom-online', 'bcom-online', 'ma-online', 'ba-online', 
    'msc-online', 'majmc-online', 'bajmc-online',
  ].map((course) => ({
    url: `${baseUrl}/courses/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Amity University course routes
  const amityCourseRoutes = [
    'mba-online', 'mca-online', 'bba-online', 'bca-online', 
    'mcom-online', 'bcom-online', 'ma-online', 'ba-online', 'msc-online',
  ].map((course) => ({
    url: `${baseUrl}/amity/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Mahe University course routes
  const maheCourseRoutes = [
    'online-mba-mahe', 'online-mca-mahe', 'online-bba-honors-mahe', 
    'online-bba-mahe', 'online-msc-data-science-mahe', 
    'online-msc-business-analytics-mahe', 'online-bcom-professional-mahe',
  ].map((course) => ({
    url: `${baseUrl}/mahe-online/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // SMU course routes
  const smuCourseRoutes = [
    'mba-online', 'mca-online', 'ba-online', 'mcom-online', 'bcom-online', 'ma-online',
  ].map((course) => ({
    url: `${baseUrl}/smu/Courses_pages/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Working professional special routes
  const workingProfessionalRoutes = [
    'best-online-mba-for-working-professionals-india-2025',
    'best-online-mca-for-working-professionals-in-india',
    'top-online-bca-university-in-india',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Static Blog routes
  const staticBlogRoutes = [
    'MBADistanceVsOnline', 'BestOnlineBBA2026', 'ManipalVsAmityOnlineMBA',
    'LPUOnlineReview', 'JainUGCApproval', 'CareerAfterOnlineMBA',
    'ChooseOnlineUniversity', 'ScholarshipAndEMI', 'WorkingMBA',
    'UnifostSpecial', 'SpecialBlog',
  ].map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Blog routes from API
  let dynamicBlogRoutes = [];
  try {
    const blogs = await fetchBlogs();
    dynamicBlogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [
    ...staticRoutes,
    ...universityRoutes,
    ...genericCourseRoutes,
    ...amityCourseRoutes,
    ...maheCourseRoutes,
    ...smuCourseRoutes,
    ...workingProfessionalRoutes,
    ...staticBlogRoutes,
    ...dynamicBlogRoutes,
  ];
}

