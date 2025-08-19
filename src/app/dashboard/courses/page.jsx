import React from 'react';
import Link from 'next/link';

export default function MyCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-[#00ffe0]">Courses</span>
          </h1>
          <p className="text-xl text-gray-600">
            Track your enrolled courses and learning progress.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            You have not enrolled in any courses yet.
          </p>
          <Link 
            href="/coursesearch"
            className="bg-[#00ffe0] text-[#001e3c] px-8 py-3 rounded-full font-semibold hover:bg-[#00e6cc] transition-colors"
          >
            Explore Courses
          </Link>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/dashboard"
            className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
