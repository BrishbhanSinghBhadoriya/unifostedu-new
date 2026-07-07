import { UniversityList } from '@/data/UniversityList';
import { fetchBlogs } from '@/lib/blogApi';
import amritaCourses from '@/data/amritacourse.json';
import nmimsCourses from '@/data/nmimscourses.json';

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
    { url: `${baseUrl}/compare-university`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/career-test`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
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

  // SMU course routes
  const smuCourseRoutes = [
    'mba-online', 'mca-online', 'ba-online', 'mcom-online', 'bcom-online', 'ma-online',
  ].map((course) => ({
    url: `${baseUrl}/smu/Courses_pages/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Amrita University course routes
  const amritaCourseRoutes = amritaCourses.courses.map((course) => ({
    url: `${baseUrl}/amrita/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // NMIMS course routes (all programs from nmimscourses.json)
  const nmimsCourseRoutes = Object.keys(nmimsCourses.programs).map((slug) => ({
    url: `${baseUrl}/nmims/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // NMIMS main page route (covered in universityRoutes, but also explicit)
  // Amrita main page route is covered in universityRoutes

  // MUJ Online specific routes
  const mujOnlineRoutes = [
    'muj-online-mba', 'muj-online-mca', 'muj-online-bba', 'muj-online-bca', 'muj-online-ma'
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Working professional special routes
  const workingProfessionalRoutes = [
    'best-online-mba-for-working-professionals-india-2025',
    'best-online-mca-for-working-professionals-in-india',
    'best_online_mba_universities_in_india_2026',
    'top-online-bca-university-in-india',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Amity special landing pages
  const amitySpecialRoutes = [
    'amity-online-mba',
    'amity-online-mba-total-fees',
    'best-online-mca-university-in-india',
  ].map((route) => ({
    url: `${baseUrl}/amity/${route}`,
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
    ...amitySpecialRoutes,
    ...smuCourseRoutes,
    ...amritaCourseRoutes,
    ...nmimsCourseRoutes,
    ...mujOnlineRoutes,
    ...workingProfessionalRoutes,
    ...staticBlogRoutes,
    ...dynamicBlogRoutes,
  ];
}

