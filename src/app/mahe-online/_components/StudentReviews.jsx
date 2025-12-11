import React from 'react'

const StudentReviews = ({setOpenModal , openModal}) => {
  return (
    <section id="StudentReviews" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                Student <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Reviews</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Hear from our students who have transformed their careers with MAHE University Online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  name: 'Aditi Sharma',
                  course: 'MAHE Online MBA',
                  text: 'Choosing MAHE University Online for my MBA was truly the best decision. The MAHE Online MBA program is flexible, well-structured, and perfect for working professionals like me. The live classes, case studies, and faculty support made learning easy and engaging. Today, I\'ve secured a promotion at my company thanks to the skills I gained through MAHE.'
                },
                {
                  name: 'Sneha Gupta',
                  course: 'MAHE Online BBA',
                  text: 'The MAHE Online BBA program helped me build strong basics in business and management. The faculty explains everything clearly, and the recorded classes help me revise whenever I want. MAHE University Online truly provides flexibility without compromising quality.'
                },
                {
                  name: 'Nikhil Verma',
                  course: 'MAHE Online MCA',
                  text: 'The MAHE Online MCA program has exceeded my expectations. The content is advanced and matches industry requirements. The faculty is supportive, and the virtual labs really helped me understand concepts. I feel well-prepared for roles like software developer and data analyst.'
                },
                {
                  name: 'Priya Nair',
                  course: 'MAHE Online MCom',
                  text: 'I joined the MAHE Online MCom program because it offered quality education at an affordable fee. The subjects are detailed, and the support team is always available to help. I would definitely recommend MAHE University Online to commerce students.'
                }
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 sm:mb-4">
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500 mb-2 sm:mb-3 md:mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-3 sm:pt-4">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">{testimonial.name}</h4>
                          <p className="text-orange-600 font-semibold text-sm sm:text-base md:text-lg">
                            {testimonial.course} Student
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
  )
}

export default StudentReviews