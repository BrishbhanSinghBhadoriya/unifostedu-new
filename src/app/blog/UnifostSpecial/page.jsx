import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: "Educational Blog | Online University Degrees & Career Guidance - UNIFOST",
  description: "Read expert insights on online university degrees, career counseling, UGC-approved courses, and educational guidance. Stay updated with latest trends in online education in India.",
  keywords: [
    "online education blog",
    "university degrees guide",
    "career counseling tips",
    "UGC approved courses",
    "online MBA guide",
    "distance learning advice",
    "educational insights",
    "university selection guide"
  ],
  openGraph: {
    title: "Educational Blog | Online University Degrees & Career Guidance - UNIFOST",
    description: "Read expert insights on online university degrees, career counseling, UGC-approved courses, and educational guidance.",
    images: ["/images/blog-hero.webp"],
  },
};

const BlogPage = () => {
  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Online MBA Universities in India 2024: Complete Guide",
      excerpt: "Discover the best UGC-approved online MBA programs in India. Compare fees, rankings, placements, and admission requirements for top universities.",
      image: "/images/b7.webp",
      category: "MBA Guide",
      readTime: "8 min read",
      date: "2024-01-15",
      slug: "top-10-online-mba-universities-india-2024"
    },
    {
      id: 2,
      title: "UGC Approved vs Regular Degrees: Complete Comparison Guide",
      excerpt: "Understand the difference between UGC-approved and regular degrees. Learn why accreditation matters for your career and higher studies.",
      image: "/images/b6.webp",
      category: "Accreditation",
      readTime: "6 min read",
      date: "2024-01-12",
      slug: "ugc-approved-vs-regular-degrees-comparison"
    },
    {
      id: 3,
      title: "Career Opportunities After Online BCA Degree: Job Prospects & Salary",
      excerpt: "Explore career opportunities, job roles, and salary expectations after completing an online BCA degree. Get insights from industry experts.",
      image: "/images/b5.webp",
      category: "Career Guidance",
      readTime: "7 min read",
      date: "2024-01-10",
      slug: "career-opportunities-after-online-bca-degree"
    },
    {
      id: 4,
      title: "How to Choose the Right Online University: 10 Essential Factors",
      excerpt: "Learn how to select the perfect online university for your career goals. Compare accreditation, faculty, placement records, and more.",
      image: "/images/b4.webp",
      category: "University Selection",
      readTime: "9 min read",
      date: "2024-01-08",
      slug: "how-to-choose-right-online-university"
    },
    {
      id: 5,
      title: "Online Degrees in Delhi: Top Universities & Courses 2024",
      excerpt: "Complete guide to online degrees available in Delhi. Compare top universities, courses, fees, and admission processes.",
      image: "/images/b2.webp",
      category: "City Guide",
      readTime: "5 min read",
      date: "2024-01-05",
      slug: "online-degrees-delhi-top-universities-2024"
    },
    {
      id: 6,
      title: "Distance Learning vs Online Learning: Key Differences Explained",
      excerpt: "Understand the differences between distance learning and online learning. Choose the right mode of education for your needs.",
      image: "/images/b3.webp",
      category: "Education Mode",
      readTime: "6 min read",
      date: "2024-01-03",
      slug: "distance-learning-vs-online-learning-differences"
    }
  ];

  const categories = [
    "All Posts",
    "MBA Guide",
    "Accreditation", 
    "Career Guidance",
    "University Selection",
    "City Guide",
    "Education Mode"
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001e3c] to-[#003b6c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Educational Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Expert insights on online university degrees, career counseling, UGC-approved courses, and educational guidance. Stay updated with the latest trends in online education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#00ffe0] font-semibold hover:text-[#00d4c4] transition-colors"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#001e3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Personalized Career Counseling?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert guidance to choose the right online university degree for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bookdemo"
              className="px-8 py-3 bg-[#00ffe0] text-[#001e3c] font-semibold rounded-full hover:bg-[#00d4c4] transition-colors"
            >
              Book Free Counseling
            </Link>
            <Link
              href="/coursesearch"
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BlogPage;
