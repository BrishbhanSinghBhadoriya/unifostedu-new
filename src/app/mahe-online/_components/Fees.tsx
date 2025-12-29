import React from 'react'
import { FaBuilding, FaCertificate, FaStar, FaUsers } from 'react-icons/fa'
import { OpenModalState } from '../../../../types/Modal'
const Fees = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {

  return (
    <section id="FeeStructure" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Fee Structure</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                { name: 'MAHE Online MBA', desc: 'Flexible and affordable management program. Suitable for working professionals. EMI payment options available. Full access to live and recorded classes.' },
                { name: 'MAHE Online BCA', desc: 'Budget-friendly program for students starting their IT career. Affordable for undergraduate learners. Easy semester-wise payment options.' },
                { name: 'MAHE Online MCA', desc: 'Priced to support students who want advanced technical skills. Includes industry-focused curriculum. Comes with digital tools and virtual labs.' },
                { name: 'MAHE Online BBA', desc: 'Cost-effective and ideal for students interested in business and management. Pay yearly or semester-wise. Study materials included in the fee.' },
                { name: 'MAHE Online MCom', desc: 'Affordable pricing for those aiming for careers in finance and accounting. One of the most economical PG programs. Includes academic support and digital resources.' },
                { name: 'MAHE Online BCom', desc: 'Designed to offer value at a pocket-friendly fee. Flexible fee payment options. Access to MAHE\'s digital LMS included.' }
              ].map((program, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">{program.name} Fee Structure</h3>
                  <p className="text-sm sm:text-base text-gray-700">{program.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What's Included in the Fees?</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4">Every fee paid for <strong>MAHE Online Courses</strong> includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  '24/7 access to MAHE\'s digital LMS',
                  'Live online classes',
                  'Recorded lecture sessions',
                  'Digital notes & study materials',
                  'Assessments and quizzes',
                  'Real-world case studies',
                  'Full student and academic support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-orange-500 text-lg">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-700 mt-4">This ensures great value for students pursuing <strong>MAHE Online Degrees</strong>.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Flexible Payment Options</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4">To make <strong>UG & PG online courses by MAHE</strong> accessible to all, MAHE University Online offers:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {['Semester-wise payment plans', 'EMI options through partnered platforms', 'Easy and secure online fee payment'].map((item, i) => (
                  <div key={i} className="bg-white p-4 sm:p-5 rounded-lg shadow-md text-center">
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-700 mt-6">These flexible options help students focus on learning without financial stress.</p>
              <p className="text-base sm:text-lg text-gray-700 mt-4">With reasonable fees, excellent teaching quality, and globally recognised <strong>MAHE Online Degrees</strong>, MAHE University Online continues to be one of the <strong>Best online universities in India</strong> for students seeking affordability along with academic excellence.</p>
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
          <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16 font-queens">Online Manipal Advantages</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          <FaStar className="text-yellow-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Flexible & Convenient Schedule</h3>
                          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
                        </div>
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          <FaCertificate className="text-blue-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">At Par with On-Campus Degrees</h3>
                          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
                        </div>
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          <FaUsers className="text-green-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Experienced Faculty & Mentors</h3>
                          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
                        </div>
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          <FaBuilding className="text-purple-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Prestigious Manipal Alumni Network</h3>
                          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
                        </div>
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
        </section>
  )
}

export default Fees