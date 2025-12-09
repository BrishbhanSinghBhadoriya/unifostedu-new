import React from 'react'

const FeesSMU = ({setOpenModal, openModal}) => {
  return (
   <section id="fees" className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Online Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sikkim Manipal University Online (SMU Online) offers a wide range of UGC-approved online degrees, allowing students to study from anywhere, anytime. With flexible learning, expert faculty, and industry-relevant curriculum, SMU Online helps learners build successful careers through recognized programs like the Online MBA from Sikkim Manipal University, Online BCom, Online BA, and Online MCA.
          </p>
        </div>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Undergraduate Online Programs
          </h3>

          <div className="space-y-8">
          
            
           <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                1. Online Bachelor of Commerce (B.Com)
              </h4>
              <p className="text-gray-600 leading-relaxed">
             The online Bachelor of Commerce (BCom) from Sikkim Manipal University (SMU) is designed to help learners delve into the world of business and commerce. The industry aligned curriculum of this online BCom program equips learners with strong foundations in various levels of accounting such as financial, corporate accounting, cost, and management while covering other core areas such as taxation, HRM, investments, auditing, statistics, and mathematics. Delivered by experienced faculty through an AI-enabled platform, learners can access learning resources, live and recorded classes, discussion forums, e-libraries, AI-tutor, and quizzes from the comfort of their homes. By pursuing this program, learners can boost their career prospects across industries
              </p>

                 <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>
            
         
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                2. Online Bachelor of Arts (BA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                The Online BA from Sikkim Manipal University enhances communication, creativity, and critical thinking skills. With multiple specializations in humanities and social sciences, this program encourages holistic learning and personal growth.
              </p>
                 <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>
          </div>
          
        </div>

        {/* Postgraduate Programs */}
        <div>
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Postgraduate Online Programs
          </h3>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                1. Online Master of Business Administration (MBA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                The Online MBA from Sikkim Manipal University is one of the best online MBA programs in India, ideal for working professionals aiming for career advancement.
                Students can specialize in Marketing, HR, Finance, Data Analytics, or Operations Management. The program includes live projects, business simulations, and mentorship from industry experts, ensuring practical and career-focused learning.

              </p>
                 <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                2. Online Master of Computer Applications (MCA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
               The Online MCA from Sikkim Manipal University helps learners master advanced IT skills in software engineering, data analytics, and artificial intelligence. It blends technical knowledge with management insights — preparing students for leadership roles in technology and digital industries.
           </p>
              <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                3. Online Master of Commerce  (MCom)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                 The online Master of Commerce (MCom) from the prestigious Sikkim Manipal University (SMU) aims to build future-ready professionals across industries. Delivered through an AI-enabled learning portal, this most affordable online MCom supports anytime, anywhere learning by providing high-quality learning content, live & recorded classes by expert faculty, clarifying queries with an AI tutor, participating in discussion forums, and taking online examinations. The curriculum covers key commerce concepts such as corporate financial management, investment management, security analysis, and portfolio management to enhance commerce acumen. Earn a globally accepted degree certificate and prestigious SMU alumni status to boost your career prospects and expand your professional network.
              </p>
                 <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                4. Online Master of Art (MA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                 The online Master of Arts (MA) programs from Sikkim Manipal University (SMU) are designed to provide learners with a deep understanding of their chosen field—whether English, Political Science, or Sociology. These two-year online degrees offer comprehensive curricula, interactive live and recorded classes, and AI-powered learning tools. Students can study from anywhere in India, access digital resources, participate in discussions, and take online proctored exams. The affordable programs prepare graduates for diverse career paths in education, research, media, public service, and other related sectors
              </p>
                 <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            Every Sikkim Manipal University online degree emphasizes experiential learning, real-world application, and continuous assessment. Students can plan their study schedules based on personal and professional commitments.
            With its UGC-approved online BCom, BA, MBA, and MCA programs, Sikkim Manipal University Online ensures that learners achieve both career growth and academic excellence — anytime, anywhere.

          </p>
        </div>
      </div>
    </section>
  )
}

export default FeesSMU