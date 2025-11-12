"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";
import { BLOG_API_ENDPOINT } from "@/lib/blogApi";

const MAX_DISPLAYED_BLOGS = 8;
const FALLBACK_BLOG_IMAGE =
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762932238/blog-images/a8cspd20trzfqocza1jw.png";

const BlogsDropdown = ({ menuOpen, setMenuOpen }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(BLOG_API_ENDPOINT, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const payload = await response.json();
        if (payload?.success && Array.isArray(payload.data)) {
          setBlogs(payload.data);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Blog dropdown fetch error:", err);
          setError("Unable to load blogs right now.");
          setBlogs([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();

    return () => controller.abort();
  }, []);

  const displayedBlogs = useMemo(() => {
    return blogs
      .filter((blog) => blog?.slug)
      .sort((a, b) => {
        const dateA = new Date(a.createdAt || a.updatedAt || 0).getTime();
        const dateB = new Date(b.createdAt || b.updatedAt || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, MAX_DISPLAYED_BLOGS);
  }, [blogs]);

  const handleToggle = () =>
    setMenuOpen(menuOpen === "blogs" ? null : "blogs");

  const handleClose = () => setMenuOpen(null);

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="group flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 text-white hover:text-[#0b223f] hover:bg-slate-50"
      >
        <FaBookOpen className="text-xs" />
        <span className="font-semibold">Blogs</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            menuOpen === "blogs" ? "rotate-180" : ""
          }`}
        />
      </button>

      {menuOpen === "blogs" && (
        <div className="absolute left-0 top-full mt-2 w-[20rem] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/70 transition-all duration-200 transform origin-top z-50">
          <div className="p-3">
            <h3 className="text-[#001e3c] font-bold text-base mb-2 flex items-center">
              <FaBookOpen className="mr-2 text-[#00ffe0]" />
              Blog Articles
            </h3>

            <div className="space-y-2 max-h-72 overflow-y-auto">
              {loading && (
                <div className="px-3 py-4 text-sm text-slate-500">
                  Loading latest posts...
                </div>
              )}

              {error && !loading && (
                <div className="px-3 py-4 text-sm text-red-500">{error}</div>
              )}

              {!loading && !error && displayedBlogs.length === 0 && (
                <div className="px-3 py-4 text-sm text-slate-500">
                  No blogs available yet.
                </div>
              )}

              {!loading &&
                !error &&
                displayedBlogs.map((blog) => (
                  <Link
                    key={blog._id || blog.slug}
                    href={`/blog/${blog.slug}`}
                    onClick={handleClose}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f9ff] transition group"
                  >
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200">
                      <Image
                        src={blog.image || FALLBACK_BLOG_IMAGE}
                        alt={blog.title}
                        fill
                        sizes="48px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#001e3c] group-hover:text-[#003b6c]">
                        {blog.title}
                      </p>
                      {(blog.description || blog.category) && (
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                          {blog.description || blog.category}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
            </div>

            <div className="mt-3 pt-2 border-t border-gray-200">
              <Link
                href="/blog"
                onClick={handleClose}
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
