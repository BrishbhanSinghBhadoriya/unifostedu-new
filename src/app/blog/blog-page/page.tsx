import React from 'react';
import Link from 'next/link';

const blogs = [
  {
    title: "MBA: Online vs Distance",
    excerpt: "Understanding the key differences between online and distance MBA programs to make the right choice for your career.",
    image: "/blog1.jpg",
    slug: "mba-online-vs-distance",
    category: "MBA"
  },
  {
    title: "Best Online BBA 2025",
    excerpt: "Top BBA programs for 2025 that offer quality education and promising career prospects.",
    image: "/blog2.jpg",
    slug: "best-online-bba-2025",
    category: "BBA"
  },
  {
    title: "Manipal vs Amity Online MBA",
    excerpt: "Comprehensive comparison of two leading universities' online MBA programs.",
    image: "/blog3.jpg",
    slug: "manipal-vs-amity-online-mba",
    category: "MBA"
  },
  {
    title: "LPU Online Review",
    excerpt: "Detailed review of Lovely Professional University's online education offerings.",
    image: "/blog4.jpg",
    slug: "lpu-online-review",
    category: "University"
  },
  {
    title: "Jain UGC Approval",
    excerpt: "Everything you need to know about Jain University's UGC approval and recognition.",
    image: "/blog5.jpg",
    slug: "jain-ugc-approval",
    category: "University"
  },
  {
    title: "Choose Online University",
    excerpt: "Essential factors to consider when selecting an online university for your education.",
    image: "/blog6.jpg",
    slug: "choose-online-university",
    category: "Guide"
  },
  {
    title: "Scholarship & EMI",
    excerpt: "Complete guide to scholarships and EMI options for online education in India.",
    image: "/blog7.jpg",
    slug: "scholarship-and-emi",
    category: "Finance"
  },
  {
    title: "Working & Online MBA",
    excerpt: "How to balance work and online MBA studies for career advancement.",
    image: "/blog8.jpg",
    slug: "working-mba",
    category: "MBA"
  },
  {
    title: "Career After Online MBA",
    excerpt: "Career opportunities and growth prospects after completing an online MBA program.",
    image: "/blog9.jpg",
    slug: "career-after-online-mba",
    category: "Career"
  }
];

export default function BlogsPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="text-[#00ffe0] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

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
