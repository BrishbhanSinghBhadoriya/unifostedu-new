import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
const WhyChoose = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
     <section id="WhyChoose" className="relative  sm:py-10 md:py-10 lg:py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />
    
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Row */}
                <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-14">
                  {[
                    {value:'60+', label:'Countries and 2000+ towns &\ncities- our students span the globe'},
                    {value:'100k+', label:'Learners have been empowered through Online Manipal'},
                    {value:'93%', label:'Of students say their online degree has a positive ROI'},
                    {value:'81%', label:'Of students find online is better than or equal to on-campus learning'}
                  ].map((s, i) => (
                    <div key={i} className="text-left">
                      <div className="font-queens text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none">{s.value}</div>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
    
                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center font-queens">Why Choose MAHE University Online?</h3>
                <p className="text-center text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
                  Choosing an online university is an important decision, and MAHE University Online provides everything a student needs for a successful learning experience.
                </p>
    
                {/* Feature Cards - 8 Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {/* Card 1: UGC-Entitled MAHE Online Degrees */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">🎓</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">1. UGC-Entitled MAHE Online Degrees</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All major MAHE Online Programs—including the MAHE Online MBA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom—are fully UGC-approved. These online degrees have full academic value and are accepted by companies, government sectors, and private organisations.</p>
                  </div>
    
                  {/* Card 2: Best Online Universities in India */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">🏆</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">2. One of the Best Online Universities in India</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">MAHE consistently ranks among top Indian institutions. Its strong online infrastructure, expert faculty, and high-quality learning system make it widely recognised as the Best online university in India.</p>
                  </div>
    
                  {/* Card 3: Wide Range of UG & PG Online Courses */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">📚</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">3. Wide Range of UG & PG Online Courses by MAHE</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">MAHE offers many programs to match different career goals. Popular MAHE Online Courses include MAHE Online MBA,MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom. Each program prepares students with real-world skills and future-ready knowledge.</p>
                  </div>
    
                  {/* Card 4: Flexible & Convenient Learning */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">⏰</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">4. Flexible & Convenient Learning</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All MAHE Online Programs are designed for flexible learning. You can study at your own pace, join live classes, or watch recorded sessions anytime. This helps working professionals, students, and homemakers balance education with daily life.</p>
                  </div>
    
                  {/* Card 5: Industry-Aligned Curriculum */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">💼</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">5. Industry-Aligned Curriculum</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Every program under MAHE Online Courses is designed with industry experts. You learn updated course content, practical case studies, real-world examples, assignments focused on careers, and industry tools & techniques. This makes MAHE Online Degrees more valuable and job-focused.</p>
                  </div>
    
                  {/* Card 6: Experienced Faculty & Modern Tools */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">👨‍🏫</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">6. Experienced Faculty & Modern Tools</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Students in MAHE Online MBA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom are taught by highly experienced professors and industry mentors. MAHE provides virtual classrooms, e-learning modules, AI-enabled tools, and 24/7 academic support.</p>
                  </div>
    
                  {/* Card 7: Excellent Placement & Career Support */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">7. Excellent Placement & Career Support</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">MAHE offers strong career services, including resume-building, interview preparation, job-readiness training, placement guidance, and networking sessions. This makes MAHE Online Programs highly helpful for students aiming to improve their employability.</p>
                  </div>
    
                  {/* Card 8: Affordable & Accessible Education */}
                  <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-lime-100 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">💰</span>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">8. Affordable & Accessible Education</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">MAHE ensures its MAHE Online Courses and MAHE Online Degrees are affordable for all. With premium quality and reasonable pricing, MAHE remains the Best online university in India for thousands of learners.</p>
                  </div>
                </div>
                <div className="text-center mt-6 mb-4 ">
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">Apply Now</span>
                      <span className="sm:hidden">Apply</span>
                    </button>
                </div>
              </div>
            </section>
  )
}

export default WhyChoose