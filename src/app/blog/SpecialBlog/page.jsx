import React from "react";
import Head from "next/head";
import Image from "next/image";


const blogs = [
  {
    title: "MBA Online vs. Distance: What’s the Difference?",
    slug: "mba-online-vs-distance",
    category: "Course Guide",
    image: "/images/b1.webp",
    date: "June 2025",
    readTime: "5 min read",
    description:
      "Understand the difference between online and distance MBA options in India to make the right academic decision.",
  },
  {
    title: "Best Online BBA Programs in India for 2025",
    slug: "best-online-bba-2025",
    category: "Course Guide",
    image: "/images/b2.webp",
    date: "June 2025",
    readTime: "6 min read",
    description:
      "Explore the top UGC-approved online BBA programs you can apply to this year.",
  },
  {
    title: "Which is better: Manipal vs. Amity Online MBA?",
    slug: "manipal-vs-amity-online-mba",
    category: "University Reviews",
    image: "/images/b3.webp",
    date: "May 2025",
    readTime: "4 min read",
    description:
      "Compare Manipal and Amity’s online MBA programs and find out which suits your goals.",
  },
  {
    title: "LPU Online Review – Pros and Cons, and Admissions Process",
    slug: "lpu-online-review",
    category: "University Reviews",
    image: "/images/b4.webp",
    date: "May 2025",
    readTime: "5 min read",
    description:
      "A comprehensive review of LPU’s online courses, pros and cons, and how to apply.",
  },
  {
    title: "Is Jain Online University UGC Approved?",
    slug: "jain-ugc-approval",
    category: "University Reviews",
    image: "/images/b5.webp",
    date: "May 2025",
    readTime: "5 min read",
    description:
      "We break down UGC approvals, accreditations, and what it means for Jain Online University.",
  },
  {
    title: "How to Choose the University for Online Courses",
    slug: "choose-online-university-guide",
    category: "Student Help Guides",
    image: "/images/b6.webp",
    date: "June 2025",
    readTime: "7 min read",
    description:
      "Tips and factors to consider when selecting an online university for your course.",
  },
  {
    title: "Scholarship and EMI Options for Online Degrees",
    slug: "online-degree-financing-options",
    category: "Student Help Guides",
    image: "/images/b7.webp",
    date: "May 2025",
    readTime: "4 min read",
    description:
      "Learn about the best scholarship and EMI options available for online degree programs.",
  },
  {
    title: "Can I Do MBA While Working? Here's How",
    slug: "mba-while-working-guide",
    category: "Career & Outcomes",
    image: "/images/b8.webp",
    date: "April 2025",
    readTime: "5 min read",
    description:
      "Find out how working professionals can effectively pursue an MBA alongside their job.",
  },
  {
    title: "Career Opportunities After Online MBA",
    slug: "career-after-online-mba",
    category: "Career & Outcomes",
    image: "/images/b9.webp",
    date: "May 2025",
    readTime: "5 min read",
    description:
      "Explore the top career options and industries after completing an online MBA in India.",
  },
];

const BlogsPage = () => {
   [];

  return (
    <>
      
        <title>Unifost Blog – Online Courses, Career Advice, University Reviews</title>
        <meta
          name="description"
          content="Explore Unifost's expert blogs on online education, career guidance, and university reviews. Get valuable insights to plan your academic journey better."
        />
        <meta name="keywords" content="Unifost blog, online MBA, university reviews, online degrees India, education guide" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      

      <main className="max-w-7xl mx-auto px-4 py-12 bg-green-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">
          🎓 Explore Our Expert Blog Guides
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Insights on online education, university reviews, career outcomes & more.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            "Course Guide",
            "University Reviews",
            "Student Help Guides",
            "Career & Outcomes",
          ].map((cat, i) => (
            <span
              key={i}
              className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium border border-blue-200"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {blog.category}
                  </span>

                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition duration-200">
                    
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                <div className="mt-4 text-xs text-gray-500">
                  {blog.date} • {blog.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogsPage;
