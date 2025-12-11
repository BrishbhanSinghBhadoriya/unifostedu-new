import React from 'react'

const Faq = ({setOpenModal, openModal, toggleFAQ, openIndex }) => {
    
  return (
    <section id="Faq" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-8 sm:mb-12 md:mb-16">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                   Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
                 </h2>
                 <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                   Everything you need to know about MAHE University Online Programs
                 </p>
               </div>
               
               <div className="space-y-4 sm:space-y-5 md:space-y-6">
                 {[
                   {
                     question: 'Is MAHE University Online UGC-approved?',
                     answer: 'Yes. MAHE University Online offers fully UGC-entitled MAHE Online Degrees, which hold the same value as regular on-campus degrees. All MAHE Online Courses meet the academic standards set by regulatory bodies.'
                   },
                   {
                     question: 'Are MAHE Online Degrees valid for jobs and higher studies?',
                     answer: 'Absolutely. All MAHE Online Programs, including the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom, are valid for government jobs, corporate roles, and further education like PhD or professional certifications.'
                   },
                   {
                     question: 'How does the online learning process work at MAHE?',
                     answer: 'Students of MAHE University Online get access to live online classes, recorded lecture videos, 24/7 digital LMS, assignments & quizzes, and discussion forums & faculty support. This makes UG & PG online courses by MAHE flexible and easy to follow.'
                   },
                   {
                     question: 'What are the eligibility criteria for MAHE Online Courses?',
                     answer: 'Eligibility varies by program: MAHE Online BCA / BBA / BCom – 10+2 from a recognised board; MAHE Online MBA / MCom / MCA – Bachelor\'s degree from a recognised university. Specific program requirements are mentioned in each course description.'
                   },
                   {
                     question: 'What is the fee structure for MAHE Online Programs?',
                     answer: 'The fee for MAHE Online Courses is affordable and varies program-wise. MAHE also provides flexible payment options, including semester-wise fees and EMIs.'
                   }
                 ].map((faq, index) => (
                   <div
                     key={index}
                     className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                   >
                     <button
                       onClick={() => toggleFAQ(index)}
                       className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700 text-sm sm:text-base md:text-lg"
                     >
                       <span className="pr-4 sm:pr-6 md:pr-8 flex-1">{faq.question}</span>
                       <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                         <span className="text-lg sm:text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
                       </div>
                     </button>
                     {openIndex === index && (
                       <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                         <p className="text-sm sm:text-base md:text-lg leading-relaxed">{faq.answer}</p>
                       </div>
                     )}
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
              <section id="Conclusion" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Conclusion</span>
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MAHE University Online stands as one of the <strong>best online universities in India</strong>, offering high-quality education through flexible and industry-focused <strong>MAHE Online Courses</strong>, <strong>MAHE Online Programs</strong>, and UGC-entitled <strong>MAHE Online Degrees</strong>. Whether you choose the <strong>MAHE Online MBA</strong>, <strong>MAHE Online BCA</strong>, <strong>MAHE Online MCA</strong>, <strong>MAHE Online BBA</strong>, <strong>MAHE Online MCom</strong>, or <strong>MAHE Online BCom</strong>, each program is designed to build real-world skills, support career growth, and provide a future-ready learning experience.
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
           </section>
  )
}

export default Faq