'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { blogAPI } from '@/lib/axios';
import { useRouter, useSearchParams } from 'next/navigation';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromQuery = Number(searchParams?.get('page') || '1');
  const [currentPage, setCurrentPage] = useState(isNaN(pageFromQuery) || pageFromQuery < 1 ? 1 : pageFromQuery);
  const pageSize = 9;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await blogAPI.getAll();
        const list = res?.data?.blogs || res?.data?.data?.blogs || [];
        const sorted = [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sorted);
      } catch {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Sync state with query param
  useEffect(() => {
    const q = Number(searchParams?.get('page') || '1');
    const qp = isNaN(q) || q < 1 ? 1 : q;
    setCurrentPage(qp);
  }, [searchParams]);

  // Derived pagination values
  const totalPages = useMemo(() => Math.max(1, Math.ceil((blogs?.length || 0) / pageSize)), [blogs, pageSize]);
  const page = Math.min(currentPage, totalPages);
  const startIdx = (page - 1) * pageSize;
  const currentItems = blogs.slice(startIdx, startIdx + pageSize);

  const goToPage = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    const sp = new URLSearchParams(window.location.search);
    sp.set('page', String(next));
    router.push(`/blog/blog-page?${sp.toString()}`);
  };

  const getExcerpt = (html, maxLen = 140) => {
    try {
      const text = (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (text.length <= maxLen) return text;
      return text.slice(0, maxLen) + '...';
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Educational <span className="text-[#00ffe0]">Blogs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and guides for online education and career development.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-40 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-600">No blogs available.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((blog) => (
                <div key={blog._id || blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="w-full h-40 bg-gray-100 overflow-hidden">
                    {blog.thumbnail ? (
                      <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No Image</div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category || 'General'}
                      </span>
                      <span className="text-xs text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{getExcerpt(blog.content)}</p>

                    <Link 
                      href={`/blog/${blog.slug || (blog._id || blog.id)}`}
                      className="text-[#00ffe0] font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page <= 1}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, idx) => {
                const p = idx + 1;
                const active = p === page;
                return (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`px-3 py-2 rounded-lg border text-sm ${active ? 'bg-[#00ffe0] border-[#00ffe0] text-[#001e3c] font-semibold' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  >
                    {p}
                  </button>
                );
              })}
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page >= totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </>
        )}

        <div className="text-center mt-16">
          <Link 
            href="/"
            className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
