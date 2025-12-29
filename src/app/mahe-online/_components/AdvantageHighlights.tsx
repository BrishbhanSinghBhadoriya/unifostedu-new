import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
const AdvantageHighlights = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
   <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(255,122,54,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-queens font-bold text-gray-900">Unlock The 360° Advantage</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto px-2">Comprehensive benefits designed to support your learning journey and career growth.</p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[{
                icon:'🎓', title:'Prestigious Degree', desc:'Globally recognized degree that opens doors worldwide.'
              },{
                icon:'📚', title:'Industry-Relevant Curriculum', desc:'Learn in-demand skills aligned with market needs.'
              },{
                icon:'💼', title:'Placement Assistance', desc:'End-to-end support with internships and jobs.'
              },{
                icon:'💳', title:'Easy Financing', desc:'Affordable no-cost EMI options for all learners.'
              }].map((b,i)=>(
                <div key={i} className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{b.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Financing + Scholarships */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
              <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Avail easy financing options</h3>
                <p className="text-orange-100 text-sm sm:text-base md:text-lg">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Get attractive scholarships</h3>
                <p className="text-blue-100 text-sm sm:text-base md:text-lg">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
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
          <section id="KeyHighlights" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Key Highlights</span>
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Discover why MAHE University Online is known as one of the <strong>Best online universities in India</strong>. With flexible learning, expert faculty, modern digital tools, and globally recognised <strong>MAHE Online Degrees</strong>, the university offers a top-quality online education experience for every student.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: 'UGC-Entitled MAHE Online Degrees',
                  points: [
                    'All MAHE Online Courses and MAHE Online Programs are fully UGC-approved.',
                    'Degrees such as the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom hold the same value as regular on-campus degrees.'
                  ]
                },
                {
                  title: 'Wide Range of UG & PG Online Courses by MAHE',
                  points: [
                    'Students can choose from industry-focused online programs in business, IT, commerce, and management.',
                    'Popular programs include the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom.'
                  ]
                },
                {
                  title: 'Flexible Learning Anytime, Anywhere',
                  points: [
                    'Study at your own pace using recorded classes, live online lectures, and a 24/7 digital LMS.',
                    'Perfect for working professionals, regular students, and distance learners.'
                  ]
                },
                {
                  title: 'Industry-Aligned Curriculum',
                  points: [
                    'All MAHE Online Courses are created with input from industry experts to ensure the content is updated, relevant, and job-oriented.',
                    'Every program includes real-world case studies and modern learning tools.'
                  ]
                },
                {
                  title: 'Expert Faculty & High-Quality Teaching',
                  points: [
                    'Learn directly from MAHE\'s experienced professors, researchers, and industry specialists.',
                    'Each MAHE Online Program provides strong academic support from start to finish.'
                  ]
                },
                {
                  title: 'Affordable & Accessible Education',
                  points: [
                    'MAHE offers high-quality education at competitive and student-friendly fees, making it one of the Best online universities in India in terms of value and credibility.'
                  ]
                },
                {
                  title: 'Career Guidance & Placement Support',
                  points: [
                    'Students receive resume-building help, interview preparation, job support, and skill training.',
                    'MAHE prepares students for strong careers in business, IT, finance, technology, management, and more.'
                  ]
                },
                {
                  title: 'Trusted University with Decades of Excellence',
                  points: [
                    'Powered by Manipal Academy of Higher Education, a NAAC A++ accredited institution with global recognition.',
                    'MAHE University Online is known for academic excellence, strong learning outcomes, and student success.'
                  ]
                }
              ].map((highlight, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">{highlight.title}</h3>
                  <ul className="space-y-2">
                    {highlight.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

export default AdvantageHighlights