import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#00ffe0]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to help you make the best educational decisions for your future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Counseling</h3>
            <p className="text-gray-600">
              Expert guidance to help you choose the right course based on your interests, career goals, and academic background.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">University Selection</h3>
            <p className="text-gray-600">
              Comprehensive information about top universities, their rankings, fees, and admission requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Sessions</h3>
            <p className="text-gray-600">
              Experience online learning firsthand with free demo sessions from our partner universities.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Support</h3>
            <p className="text-gray-600">
              End-to-end assistance with university applications, document preparation, and admission processes.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Guidance</h3>
            <p className="text-gray-600">
              Professional advice on career paths, job opportunities, and skill development in your chosen field.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Assistance</h3>
            <p className="text-gray-600">
              Help in identifying and applying for scholarships, financial aid, and EMI options to make education affordable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
