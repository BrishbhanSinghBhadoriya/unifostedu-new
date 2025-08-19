import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-[#00ffe0]">Unifost</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UNIFOST is a premier EdTech platform helping students choose the right path through online education, expert counseling, and demo sessions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To democratize quality education by connecting students with the best online learning opportunities from top universities across India.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted platform for online education, helping millions of students achieve their academic and career goals.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Quality, transparency, student success, and innovation are the core values that drive everything we do at UNIFOST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
