import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { UniversityList } from '@/data/UniversityList';


export const TopOnlineUniversity = () => {
  return (
    <div> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
         Top Partner <span className="text-[#00ffe0]">Universities</span> in India
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover top universities offering online programs across India. Compare rankings, fees, and course offerings to find your perfect fit. We are partnered with top universities in India to provide you the best online programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {UniversityList.map((college, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Image width={100} height={100} loading="lazy" src={college.logo} alt={`${college.name} logo`} className="w-16 h-16 object-contain rounded-lg mr-4" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{college.name}</h2>
                  <p className="text-sm text-gray-600">{college.location}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
                  {college.ranking}
                </span>
                <span className="text-gray-700 font-medium">{college.fee}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{college.description}</p>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Available Courses:</h3>
                <div className="flex flex-wrap gap-2">
                  {college.courses.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                href={college.link}
                className="block w-full bg-[#00ffe0] text-[#001e3c] text-center py-2 px-4 rounded-lg font-semibold hover:bg-[#00e6cc] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">
          Can not find what you are looking for? Contact our counselors for personalized guidance.
        </p>
        <Link 
          href="/bookdemo"
          className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
        >
          Get Free Counseling
        </Link>
      </div>
    </div>
    </div>
    </div>
  )
}

