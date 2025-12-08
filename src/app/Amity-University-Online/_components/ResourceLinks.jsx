import Link from 'next/link'
import React from 'react'
import { ArrowRight, BookOpen, GraduationCap, Users, Building2, FileText, Award } from 'lucide-react'

const ResourceLinks = () => {
  // Main resource links - VERIFIED ROUTES
  const mainLinks = [
    {
      href: "/bookdemo",
      label: "Schedule an Amity University Online MBA counselling session",
      icon: Users,
    },
    {
      href: "/services",
      label: "Understand Amity Online placement assistance & career services",
      icon: Award,
    },
    {
      href: "/blog",
      label: "Read career guides on online MBA and distance learning trends",
      icon: BookOpen,
    },
    {
      href: "/blog/CareerAfterOnlineMBA",
      label: "Career outcomes after an online MBA from Amity University Online",
      icon: GraduationCap,
    },
    {
      href: "/Amity-University-Online#Scholarship",
      label: "Scholarships and financing tips for Amity University Online degrees",
      icon: FileText,
    },
    {
      href: "/courses/mba",
      label: "Compare online MBA programmes from top universities in India",
      icon: Building2,
    },
  ];

  // Compare with other universities - VERIFIED ROUTES
  const universityCompareLinks = [
    { label: "Compare Universities", href: "/compare" },
    { label: "Manipal University", href: "/manipal" },
    { label: "LPU Online", href: "/lpu-online" },
    { label: "NMIMS Online", href: "/nmims" },
    { label: "Jain University", href: "/jain" },
    { label: "Chandigarh University", href: "/cuOnline" },
  ];

  // Course specific links - VERIFIED ROUTES
  const courseLinks = [
    { label: "Online MBA Programs", href: "/courses/mba" },
    { label: "Online BBA Programs", href: "/courses/bba" },
    { label: "Online MCA Programs", href: "/courses/mca" },
    { label: "Online BCA Programs", href: "/courses/bca" },
    { label: "All University List", href: "/University-List" },
    { label: "Search Courses", href: "/coursesearch" },
  ];

  // More university links - VERIFIED ROUTES
  const moreUniversities = [
    { label: "Sharda University", href: "/sharda" },
    { label: "Shoolini University", href: "/shoolini" },
    { label: "UPES Online", href: "/upes" },
    { label: "SMU Online", href: "/smu" },
    { label: "OP Jindal", href: "/opjindal" },
    { label: "MAHE Online", href: "/mahe-online" },
  ];

  return (
    <div>
        <section id="ResourceLinks" className="py-14 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Explore More Amity Online Resources</h2>
              <p className="text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
                Continue your research with deep dives into the Amity University Online MBA curriculum, scholarships,
                and placement services. These internal links help you compare options and take the next step confidently.
              </p>
            </div>

            {/* Main Resource Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-4 text-sm md:text-base transition-all hover:bg-slate-800 hover:border-yellow-400"
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium text-slate-100 group-hover:text-yellow-300 leading-relaxed">
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-yellow-400 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              ))}
            </div>

            {/* University Comparison Links */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400">Compare with Other Universities</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {universityCompareLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm hover:bg-yellow-400 hover:text-black transition-colors border border-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Course Links */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400">Explore Online Courses</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {courseLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm hover:bg-yellow-400 hover:text-black transition-colors border border-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* More Universities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400">More Universities</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {moreUniversities.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm hover:bg-yellow-400 hover:text-black transition-colors border border-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Quick Links */}
            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-lg font-semibold mb-4 text-center">Quick Navigation</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="text-slate-300 hover:text-yellow-400 transition-colors">Home</Link>
                <span className="text-slate-600">|</span>
                <Link href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors">About Us</Link>
                <span className="text-slate-600">|</span>
                <Link href="/bookdemo" className="text-slate-300 hover:text-yellow-400 transition-colors">Book Demo</Link>
                <span className="text-slate-600">|</span>
                <Link href="/blog" className="text-slate-300 hover:text-yellow-400 transition-colors">Blog</Link>
                <span className="text-slate-600">|</span>
                <Link href="/faqs" className="text-slate-300 hover:text-yellow-400 transition-colors">FAQs</Link>
                <span className="text-slate-600">|</span>
                <Link href="/privacy" className="text-slate-300 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
                <span className="text-slate-600">|</span>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors">Services</Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ResourceLinks