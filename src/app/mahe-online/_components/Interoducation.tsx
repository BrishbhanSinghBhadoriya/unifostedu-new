import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
const Interoducation = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
   <section id="Introduction" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
                Introduction to <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">MAHE University Online</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MAHE University Online is one of the most trusted and recognized online education platforms in India. It offers a wide range of high-quality <strong>MAHE Online Courses</strong>, industry-focused <strong>MAHE Online Programs</strong>, and fully approved <strong>MAHE Online Degrees</strong> for students across the country. With the growing demand for flexible and digital education, MAHE University Online has become one of the <strong>Best online universities in India</strong>, helping lakhs of learners upgrade their skills, complete their degrees, and build strong careers through online learning.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                As a top UGC-approved university, MAHE University Online brings real university-level education directly to your home through <strong>UG & PG online courses by MAHE</strong>. These include some of the most popular online programs such as the <strong>MAHE Online MBA</strong>, <strong>MAHE Online BCA</strong>, <strong>MAHE Online MCA</strong>, <strong>MAHE Online BBA</strong>, <strong>MAHE Online MCom</strong>, and <strong>MAHE Online BCom</strong>. Every program is designed to match industry needs, helping students gain practical knowledge and real job-ready skills.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The main mission of MAHE University Online is to offer education that is flexible, student-friendly, and relevant to current industry trends. Even though the courses are online, the quality and credibility remain the same as MAHE's on-campus degrees. Backed by the strong legacy of Manipal Academy of Higher Education, MAHE's online platform allows students to study anytime, anywhere, and grow without limitations.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you are a working professional looking for a promotion, a student searching for a recognised UG or PG degree, or someone planning a career change, <strong>MAHE Online Courses</strong> and <strong>MAHE Online Programs</strong> have everything you need to build a successful future.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>
  )
}

export default Interoducation