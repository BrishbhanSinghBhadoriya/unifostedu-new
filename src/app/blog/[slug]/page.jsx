import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogData = {
  'mba-online-vs-distance': {
    title: 'MBA: Online vs Distance',
    content: `
      <p>When it comes to pursuing an MBA, students often face the dilemma of choosing between online and distance learning programs. Both options offer flexibility, but they differ significantly in terms of delivery method, interaction, and learning experience.</p>
      
      <h2>Online MBA Programs</h2>
      <p>Online MBA programs are delivered entirely through digital platforms, offering real-time interaction with professors and peers. These programs typically feature:</p>
      <ul>
        <li>Live virtual classrooms</li>
        <li>Interactive discussion forums</li>
        <li>Real-time feedback and assessments</li>
        <li>Access to digital resources 24/7</li>
      </ul>
      
      <h2>Distance Learning MBA</h2>
      <p>Distance learning programs rely on pre-recorded materials and limited interaction. They offer:</p>
      <ul>
        <li>Self-paced learning</li>
        <li>Pre-recorded lectures</li>
        <li>Email-based communication</li>
        <li>Physical study materials</li>
      </ul>
      
      <h2>Key Differences</h2>
      <p>The main differences lie in interaction levels, flexibility, and learning outcomes. Online programs provide better engagement and networking opportunities, while distance learning offers maximum flexibility but limited interaction.</p>
    `,
    author: 'Unifost Team',
    date: '2024-01-15',
    category: 'MBA'
  },
  'best-online-bba-2025': {
    title: 'Best Online BBA 2025',
    content: `
      <p>As we approach 2025, the demand for online BBA programs continues to grow. Here are the top programs that stand out for their quality, flexibility, and career prospects.</p>
      
      <h2>Top Online BBA Programs</h2>
      <p>Several universities have established themselves as leaders in online BBA education:</p>
      <ul>
        <li>Amity University Online - Known for comprehensive curriculum</li>
        <li>Manipal University Online - Industry-aligned programs</li>
        <li>LPU Online - Practical learning approach</li>
        <li>UPES Online - Specialized business education</li>
      </ul>
      
      <h2>Selection Criteria</h2>
      <p>When choosing an online BBA program, consider:</p>
      <ul>
        <li>UGC recognition and accreditation</li>
        <li>Faculty expertise and industry experience</li>
        <li>Placement records and industry connections</li>
        <li>Technology infrastructure and learning support</li>
      </ul>
    `,
    author: 'Unifost Team',
    date: '2024-01-10',
    category: 'BBA'
  }
};

// Add this function for static export
export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>By {blog.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog/blog-page"
              className="bg-[#001e3c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003b6c] transition-colors"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
