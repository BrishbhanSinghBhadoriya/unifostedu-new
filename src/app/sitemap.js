export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours
export default function sitemap() {
  const baseUrl ="https://www.unifostedu.com";

  const staticRoutes = [
    // Main pages
    "/",
    "/about",
    "/services",
    "/listofcollege",
    // "/blog",
    // "/blog/blog-page",
    // "/dashboard",
    // "/dashboard/courses",
    // "/dashboard/progress",
    // "/dashboard/settings",
    
    // Course pages
    "/courses/bba-online",
    "/courses/bca-online",
    "/courses/bcom-online",
    "/courses/ba-online",
    "/courses/bajmc-online",
    "/courses/mba-online",
    "/courses/mca-online",
    "/courses/mcom-online",
    "/courses/ma-online",
    "/courses/majmc-online",
    "/courses/msc-online",
    
    // University pages
    
    "/amity",
    "/manipal",
    "/nmims",
    "/dypatil",
    "/jain",
    "/lpu",
    "/sharda",
    "/shoolini",
    "/smu",
    "/upes",
    "/uu",
    "/vgu",
    "/ku",
    "/opjindal",
    "/chandigarh",
    
    // Service and utility pages
    "/services/video-call-counseling",
    "/services/home-demo-counseling",
    "/services/career-planning",
    
    "/listofcollege",
    
    
    
    
  ];

  return staticRoutes.map((path) => {
    let changeFrequency = "weekly";
    let priority = 0.6;
  
    if (path === "/") {
      changeFrequency = "daily";
      priority = 1.0;
    } else if (path.includes("/about")) {
      changeFrequency = "weekly";
      priority = 0.7;
    } else if (path.includes("/services")) {
      changeFrequency = "monthly";
      priority = 0.8;
    }
  
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
  
}


