import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular" },
  { title: "MCA Online", desc: "Advance in tech with flexible learning", tag: "Top Rated" },
  { title: "M.Com Online", desc: "Deepen commerce expertise", tag: "Best Value" },
  { title: "MA Online", desc: "Explore diverse specializations", tag: "Literature" },
  { title: "MAJMC Online", desc: "Master journalism and mass communication", tag: "Media" },
  { title: "BBA Online", desc: "Management fundamentals for the digital age", tag: "Career Starter" },
  { title: "BCA Online", desc: "Build a career in software development", tag: "Trending" },
  { title: "B.Com Online", desc: "Commerce education for business world", tag: "Business" },
  { title: "BA Online", desc: "Liberal arts foundation for diverse careers", tag: "Arts" },
  { title: "BAJMC Online", desc: "Journalism and mass communication basics", tag: "Media" }
];

export default function CourseSearch() {
  return (
     <>
      <Head>
        <title>Search Online Courses | UniFost</title>
        <meta name="description" content="Find the perfect online course from top universities. Explore MBA, MCA, BBA, BCA, and more with career-oriented learning." />
        <meta name="keywords" content="Online Courses, MBA Online, MCA Online, BBA Online, BCA Online, UniFost, Study Online" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unifost.com/courses" />
      </Head>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Search <span className="text-[#00ffe0]">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect online course that matches your career goals and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2  >
                <span className="bg-[#00ffe0] text-[#001e3c] px-2 py-1 rounded-full text-xs font-semibold">
                  {course.tag}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{course.desc}</p>
              <Link 
                href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#00ffe0] font-semibold hover:underline"
              >
                Learn More →
              </Link>
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
    </>
  );
}
