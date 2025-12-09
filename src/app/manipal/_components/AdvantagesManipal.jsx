import React from 'react'
import { FaBuilding, FaCertificate, FaStar, FaUsers } from 'react-icons/fa'

const AdvantagesManipal = () => {
  return (
   <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(255,122,54,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="text-3xl sm:text-4xl font-queens font-bold text-gray-900">Unlock The 360° Advantage</h3>
            <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-3xl mx-auto">Comprehensive benefits designed to support your learning journey and career growth.</p>
          </div>
  
          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[{
              icon:'🎓', title:'Prestigious Degree', desc:'Globally recognized degree that opens doors worldwide.'
            },{
              icon:'📚', title:'Industry-Relevant Curriculum', desc:'Learn in-demand skills aligned with market needs.'
            },{
              icon:'💼', title:'Placement Assistance', desc:'End-to-end support with internships and jobs.'
            },{
              icon:'💳', title:'Easy Financing', desc:'Affordable no-cost EMI options for all learners.'
            }].map((b,i)=>(
              <div key={i} className="group bg-white rounded-2xl p-6 border-2 border-gray-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
  
          {/* Financing + Scholarships */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Avail easy financing options</h3>
              <p className="text-orange-100">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Get attractive scholarships</h3>
              <p className="text-blue-100">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
            </div>
          </div>
    </div>
  
    
  
  
  
    
  
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Online Manipal Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all transform hover:scale-[1.02]">
                <FaStar className="text-yellow-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible & Convenient Schedule</h3>
                <p className="text-gray-600">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all transform hover:scale-[1.02]">
                <FaCertificate className="text-blue-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">At Par with On-Campus Degrees</h3>
                <p className="text-gray-600">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all transform hover:scale-[1.02]">
                <FaUsers className="text-green-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experienced Faculty & Mentors</h3>
                <p className="text-gray-600">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all transform hover:scale-[1.02]">
                <FaBuilding className="text-purple-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prestigious Manipal Alumni Network</h3>
                <p className="text-gray-600">Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
              </div>
            </div>
          </div>
        </section>
        </section>
  )
}

export default AdvantagesManipal