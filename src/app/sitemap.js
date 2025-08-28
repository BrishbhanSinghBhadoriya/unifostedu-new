export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours
export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.unifost.com";

  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/services/video-call-counseling",
    "/services/home-demo-counseling",
    "/services/career-planning",
    "/courses",
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
    "/compare",
    "/universities",
    "/universities/amity-online",
    "/universities/nmims-global",
    "/universities/manipal-online",
    "/bookdemo",
    "/register",
    "/login",
    "/privacy",
    "/search",
    "/contact",
  ];

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}


