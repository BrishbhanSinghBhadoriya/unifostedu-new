import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Your <span className="text-[#00ffe0]">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your courses, track progress, and access your learning resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/dashboard/courses" className="block">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Courses</h3>
              <p className="text-gray-600">
                View and manage your enrolled courses
              </p>
            </div>
          </Link>

          <Link href="/dashboard/progress" className="block">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Progress</h3>
              <p className="text-gray-600">
                Track your learning progress and achievements
              </p>
            </div>
          </Link>

          <Link href="/dashboard/settings" className="block">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Settings</h3>
              <p className="text-gray-600">
                Manage your account preferences and profile
              </p>
            </div>
          </Link>
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
