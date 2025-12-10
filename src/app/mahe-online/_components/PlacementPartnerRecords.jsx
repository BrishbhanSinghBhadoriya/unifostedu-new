import React from 'react'

const PlacementPartnerRecords = ({setOpenModal, openModal}) => {
  return (
   <section id="PlacementPartners" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Placement Partners</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                Top Companies That Hire MAHE University Online Students
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                Our placement partners include some of the most trusted and globally recognized brands:
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
              {['Accenture', 'Deloitte', 'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'EY', 'Cognizant', 'IBM', 'Capgemini', 'KPMG', 'Amazon', 'Flipkart', 'HDFC Bank', 'ICICI Bank', 'PwC', 'Tech Mahindra'].map((company, i) => (
                <div key={i} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                  <p className="text-sm sm:text-base font-semibold text-gray-800">{company}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Why Top Companies Choose MAHE Students?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  'Industry-ready curriculum aligned with modern skills',
                  'Practical training through projects and case studies',
                  'Soft skills & interview preparation provided to students',
                  'Strong reputation of MAHE University Online as one of the Best online universities in India',
                  'UGC-entitled MAHE Online Degrees ensuring credibility and recognition'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 text-lg mt-1">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Career Support You Can Trust</h3>
              <p className="text-base text-gray-700 mb-4">MAHE University Online provides:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {['Resume-building workshops', 'Mock interviews', 'Job readiness training', 'Internship opportunities', 'Dedicated placement cell guidance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-orange-500">•</span>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
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
           <section id="PlacementRecords" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              Highlights of <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">MAHE Online Placement Records</span>
            </h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'High placement success rate across all MAHE Online Programs',
                  'Students hired in top companies like Deloitte, TCS, Infosys, HCL, Wipro, EY, IBM, Amazon & more',
                  'Strong outcomes for graduates of MAHE Online MBA in management, marketing, HR, and finance',
                  'Excellent results for MAHE Online BCA and MAHE Online MCA students in software, IT services, cloud, and data roles',
                  'Commerce programs such as MAHE Online MCom and MAHE Online BCom see strong placements in banking, finance, and accounting',
                  'Students from MAHE Online BBA secure roles in sales, operations, business development, and corporate support',
                  'Many learners experience career upgrades, salary hikes, and industry transitions after completing MAHE Online Degrees'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl font-bold mt-1">✓</span>
                    <span className="text-gray-700 text-base sm:text-lg flex-1">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-gray-700 mt-6 sm:mt-8">
                With excellent placement records, strong career support, and industry alignment, MAHE University Online ensures that every student pursuing <strong>MAHE Online Programs</strong> gets the right guidance and opportunities to grow professionally.
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

export default PlacementPartnerRecords