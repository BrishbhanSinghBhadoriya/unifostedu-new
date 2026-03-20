"use client";

import React, { useMemo, useState, useRef } from "react";
import Link from "next/link";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";
import { MenuKey } from "types/menu";

type Blog = {
  _id?: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
};

type BlogsDropdownProps = {
  menuOpen: MenuKey;
  setMenuOpen: React.Dispatch<React.SetStateAction<MenuKey>>;
};

const STATIC_BLOG_PAGES: Blog[] = [
  { slug: "BestOnlineBBA2026", title: "Best Online BBA 2026" },
  { slug: "CareerAfterOnlineMBA", title: "Career After Online MBA" },
  { slug: "ChooseOnlineUniversity", title: "Choose Online University" },
  { slug: "JainUGCApproval", title: "Jain UGC Approval" },
  { slug: "LPUOnlineReview", title: "LPU Online Review" },
  { slug: "MBADistanceVsOnline", title: "MBA Online vs Distance" },
  { slug: "ManipalVsAmityOnlineMBA", title: "Manipal vs Amity Online MBA" },
  { slug: "ScholarshipAndEMI", title: "Scholarship and EMI" },
  { slug: "SpecialBlog", title: "Special Blog" },
  { slug: "UnifostSpecial", title: "Unifost Special" },
  { slug: "WorkingMBA", title: "Working MBA" },
];

const BlogsDropdown = ({ menuOpen, setMenuOpen }: BlogsDropdownProps) => {
  const [blogs] = useState<Blog[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const containerHeight = rect.height;

    if (mouseY < 0 || mouseY > containerHeight) return;

    const scrollHeight = container.scrollHeight;
    const maxScroll = scrollHeight - containerHeight;
    const percentage = mouseY / containerHeight;

    container.scrollTo({
      top: percentage * maxScroll,
      behavior: 'auto'
    });
  };

  const displayedBlogs = useMemo<Blog[]>(() => {
    const merged = [...STATIC_BLOG_PAGES, ...blogs];
    const uniqueBySlug = Array.from(
      new Map(merged.map((b) => [b.slug, b])).values()
    );
    return uniqueBySlug
      .filter((blog) => Boolean(blog.slug))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [blogs]);

  const handleToggle = () =>
    setMenuOpen(menuOpen === "blogs" ? null : "blogs");
  const handleClose = () => setMenuOpen(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen("blogs")}
      onMouseLeave={handleClose}>
      <button
        className="group relative px-4 py-2 rounded-lg text-slate-700 hover:text-blue-600 font-medium text-sm transition-all duration-200 flex items-center gap-2">
        <FaBookOpen className="text-sm" />
        <span>Blogs</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            menuOpen === "blogs" ? "rotate-180" : ""
          }`}
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
      </button>

      {menuOpen === "blogs" && (
        <div className="absolute left-0 top-full mt-2 w-[22rem] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          <div className="p-6">
            <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
              <FaBookOpen className="text-blue-500" />
              Blog Articles
            </h3>

            <div
              ref={scrollRef}
              onMouseMove={handleMouseMove}
              className="space-y-2 max-h-80 overflow-y-auto pr-2 no-scrollbar scroll-smooth">
              {displayedBlogs.length === 0 && (
                <div className="px-3 py-4 text-sm text-slate-500">
                  No blogs available yet.
                </div>
              )}

              {displayedBlogs.map((blog) => (
                <Link
                  key={blog._id ?? blog.slug}
                  href={`/blog/${blog.slug}`}
                  onClick={handleClose}
                  className="group flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                >
                  <p className="flex-1 min-w-0 text-sm font-medium text-slate-700 group-hover:text-blue-600 line-clamp-2 leading-tight">
                    {blog.title}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <Link
                href="/blog"
                onClick={handleClose}
                className="block text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
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
