"use client";

import React from "react";
import Link from "next/link";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";

const blogs = [
  { title: "Scholarship And EMI ", link: "/blog/ScholarshipAndEMI" },
  { title: "Career After Online MBA", link: "/blog/CareerAfterOnlineMBA" },
  { title: "Career After Online BCA Degree", link: "/blog/career-opportunities-after-online-bca-degree" },
  { title: "How to Choose the Right Online University", link: "/blog/how-to-choose-right-online-university" },
  { title: "Online Degrees in Delhi 2024", link: "/blog/online-degrees-delhi-top-universities-2024" },
  { title: "Distance Learning vs Online Learning", link: "/blog/distance-learning-vs-online-learning-differences" },
  { title: "Best Online BBA Programs for 2025", link: "/blog/BestOnlineBBA2025" },
  { title: "Why Choose an Online MCA?", link: "/blog/why-choose-online-mca" },
  { title: "Career Benefits of an Online M.Com Degree", link: "/blog/career-benefits-of-online-mcom" },
  { title: "Top UGC Approved Universities for Online Education", link: "/blog/top-ugc-approved-universities" },
];

const BlogsDropdown = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="relative">
      {/* Blogs Button */}
      <button
        onClick={() => setMenuOpen(menuOpen === "blogs" ? null : "blogs")}
        className={`group flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 text-white hover:text-[#0b223f] hover:bg-slate-50`}
      >
        <FaBookOpen className="text-xs" />
        <span className="font-semibold">Blogs</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            menuOpen === "blogs" ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {menuOpen === "blogs" && (
        <div className="absolute left-0 top-full mt-2 w-[20rem] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/70 transition-all duration-200 transform origin-top z-50">
          <div className="p-3">
            <h3 className="text-[#001e3c] font-bold text-base mb-2 flex items-center">
              <FaBookOpen className="mr-2 text-[#00ffe0]" />
              Blog Articles
            </h3>

            {/* Blog List */}
            <ul className="space-y-2 max-h-72 overflow-y-auto">
              {blogs.map((blog, i) => (
                <li key={i}>
                  <Link
                    href={blog.link}
                    onClick={() => setMenuOpen(null)}
                    className="block px-3 py-2 rounded-lg text-sm text-[#001e3c] hover:bg-[#f0f9ff] hover:text-[#00d4c4] transition"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* View All Link */}
            <div className="mt-3 pt-2 border-t border-gray-200">
              <Link
                href="/blog"
                onClick={() => setMenuOpen(null)}
                className="block text-center bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-2 px-4 rounded-xl font-semibold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300 text-sm"
              >
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsDropdown;
