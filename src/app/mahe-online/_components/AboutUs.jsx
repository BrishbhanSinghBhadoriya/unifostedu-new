import React from 'react'

const AboutUs = ({setOpenModal, openModal}) => {
  return (
    <section id="AboutUs" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              About Us – <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">MAHE University Online</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MAHE University Online is the official online learning arm of Manipal Academy of Higher Education—one of India's top universities with <strong>NAAC A++ accreditation</strong> and global recognition. MAHE brings high-quality, accessible, and flexible education to students through carefully designed <strong>MAHE Online Degrees</strong>.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                The goal of MAHE University Online is simple: to make premium higher education available to students all across India and the world. No matter where you live or what your schedule is, you can access top-quality teaching, modern learning tools, and complete academic support through <strong>MAHE Online Courses</strong>.
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
           <section id="FutureReady" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              A Future-Ready <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Learning Platform</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Students enrolled in <strong>MAHE Online Programs</strong> get access to a smooth and advanced digital learning system. You can:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {[
                'Attend live online classes',
                'Watch recorded videos anytime',
                'Access a 24/7 Learning Management System (LMS)',
                'Download e-books & digital notes',
                'Join group discussions',
                'Work on case studies & projects',
                'Interact with faculty and mentors'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-orange-500 text-xl font-bold mt-1">✓</span>
                  <span className="text-base sm:text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              This ensures every learner in <strong>UG & PG online courses by MAHE</strong> gets an engaging and easy online learning experience.
            </p>
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
            <section id="UGCApproved" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">UGC-Approved</span> Online Degrees
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              All programs offered under MAHE University Online are UGC-entitled, giving you the same value as a regular MAHE on-campus degree. Popular options include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {[
                { name: 'MAHE Online MBA', desc: 'Master management, leadership & business strategy' },
                { name: 'MAHE Online BCA', desc: 'Learn programming, databases & IT fundamentals' },
                { name: 'MAHE Online MCA', desc: 'Advanced computing, AI, ML & cloud skills' },
                { name: 'MAHE Online BBA', desc: 'Strong foundation in business, finance & marketing' },
                { name: 'MAHE Online MCom', desc: 'Deep knowledge of accounting, finance & taxation' },
                { name: 'MAHE Online BCom', desc: 'Core fundamentals of commerce & business analytics' }
              ].map((program, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-50 to-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{program.name}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{program.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              These <strong>MAHE Online Degrees</strong> are designed by expert faculty and industry specialists, ensuring students gain relevant, high-quality, and employable skills.
            </p>
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
            <section id="Leader" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              A Leader Among <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Universities in India</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              MAHE is known for its strong academic reputation and advanced online learning system. This makes MAHE University Online one of the <strong>Best online universities in India</strong>, offering excellent <strong>MAHE Online Courses</strong>, well-designed <strong>MAHE Online Programs</strong>, and valuable <strong>MAHE Online Degrees</strong> for all types of learners.
            </p>
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
        </section>
        </section>
  )
}

export default AboutUs