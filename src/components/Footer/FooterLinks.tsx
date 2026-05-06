'use client';

import React from 'react';
import Link from 'next/link';

const FooterLinks = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/university-list", label: "Explore Colleges" },
    { href: "/search", label: "Blogs" }
  ];

  const popularCourses = [
    { href: "/courses/mba-online", label: "MBA" },
    { href: "/courses/bba-online", label: "BBA" },
    { href: "/courses/mca-online", label: "MCA" },
    { href: "/courses/bca-online", label: "BCA" },
    { href: "/courses/mcom-online", label: "M.Com" },
    { href: "/courses/bcom-online", label: "B.Com" },
    { href: "/courses/ma-online", label: "MA" },
    { href: "/courses/ba-online", label: "BA" },
    { href: "/courses/bajmc-online", label: "BAJMC" },
    { href: "/courses/majmc-online", label: "MAJMC" },
  ];

  return (
    <div className="lg:col-span-3 group">
      <div className="h-full bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="grid grid-cols-2 gap-6">
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group/link flex items-center text-cyan-300 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover/link:w-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              Popular Courses
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {popularCourses.map((course, index) => (
                <a
                  key={index}
                  href={course.href}
                  className="group/course block p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  <span className="text-cyan-300 font-medium group-hover/course:text-white transition-colors text-sm">
                    {course.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;