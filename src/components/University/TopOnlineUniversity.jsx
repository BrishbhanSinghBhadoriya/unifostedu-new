import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { UniversityList } from '@/data/UniversityList';


import { useIsMobile } from "@/utils/hooks";

export const TopOnlineUniversity = () => {
  const isMobile = useIsMobile();
  const displayedColleges = isMobile ? UniversityList.slice(0, 6) : UniversityList;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Top Partner <span className="text-[#00ffe0]">Universities</span> in India
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover top universities offering online programs across India. Compare rankings, fees, and course offerings to find your perfect fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedColleges.map((college, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="p-5 sm:p-6">
                <div className="flex items-center mb-4">
                  <Image 
                    width={64} 
                    height={64} 
                    loading="lazy" 
                    src={college.logo} 
                    alt={`${college.name} logo`} 
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg mr-3 sm:mr-4" 
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{college.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{college.location}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#00ffe0] text-[#001e3c] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {college.ranking}
                  </span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{college.fee}</span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">{college.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Available Courses:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {college.courses.slice(0, 4).map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs"
                      >
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 4 && (
                      <span className="text-gray-400 text-[10px] sm:text-xs flex items-center">+{college.courses.length - 4} more</span>
                    )}
                  </div>
                </div>

                <Link 
                  href={college.link}
                  className="block w-full bg-[#00ffe0] text-[#001e3c] text-center py-2 px-4 rounded-lg font-semibold hover:bg-[#00e6cc] transition-colors text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {isMobile && UniversityList.length > 6 && (
          <div className="text-center mt-10">
            <Link 
              href="/university-list"
              className="inline-block bg-white border-2 border-[#001e3c] text-[#001e3c] px-6 py-2 rounded-full font-semibold hover:bg-[#001e3c] hover:text-white transition-all"
            >
              View All Universities
            </Link>
          </div>
        )}

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
    
  )
}

