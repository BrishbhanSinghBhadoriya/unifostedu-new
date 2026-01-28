import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Users, Building2, FileText, Award } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { OpenModalState } from 'types/Modal';

const ResourceLinks = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {

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
      href: "/amity#Scholarship",
      label: "Scholarships and financing tips for Amity University Online degrees",
      icon: FileText,
    },
    {
      href: "/courses/mba",
      label: "Compare online MBA programmes from top universities in India",
      icon: Building2,
    },
  ];

  const courseLinks = [
    { label: "Online MBA Programs", href: "/courses/mba" },
    { label: "Online BBA Programs", href: "/courses/bba" },
    { label: "Online MCA Programs", href: "/courses/mca" },
    { label: "Online BCA Programs", href: "/courses/bca" },
    { label: "All University List", href: "/university-list" },
    { label: "Search Courses", href: "/coursesearch" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Book Demo", href: "/bookdemo" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Services", href: "/services" },
  ];

  return (
    <section
      id="ResourceLinks"
      className="py-14 bg-slate-900 text-white relative z-20 pointer-events-auto"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Explore More Amity Online Resources</h2>
          <p className="text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
            Continue your research with deep dives into the Amity University Online MBA curriculum,
            scholarships, and placement services.
          </p>
        </div>

        {/* MAIN RESOURCE LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 pointer-events-auto">
          {mainLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => setOpenModal({ type: 'apply' })}
              className="pointer-events-auto group flex items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-4 text-sm md:text-base transition-all hover:bg-slate-800 hover:border-yellow-400 text-left w-full"
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="font-medium text-slate-100 group-hover:text-yellow-300">
                  {item.label}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-yellow-400 transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>

        {/* COURSE LINKS */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400">
            Explore Online Courses
          </h3>
          <div className="flex flex-wrap justify-center gap-3 pointer-events-auto">
            {courseLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => setOpenModal({ type: 'apply' })}
                className="pointer-events-auto px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm hover:bg-yellow-400 hover:text-black transition-colors border border-slate-700"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="border-t border-slate-700 pt-8 pointer-events-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Quick Navigation</h3>

          <div className="flex flex-wrap justify-center gap-4 text-sm pointer-events-auto">
            {quickLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                {index > 0 && <span className="text-slate-600">|</span>}
                <Link // Changed to Link
                  href={link.href} // Used link.href
                  className="pointer-events-auto text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResourceLinks;
