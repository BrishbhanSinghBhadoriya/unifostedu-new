import React from 'react'

const CampusTour = ({setOpenModal, openModal}) => {
  return (
  <section id="CampusTour" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Campus Tour</span>
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Welcome to the MAHE University Online Campus Tour, a simple and friendly walk-through that helps you understand the vibrant and inspiring learning environment MAHE offers. Even though students study through <strong>MAHE Online Courses</strong> and <strong>MAHE Online Programs</strong>, MAHE provides the same level of academic quality, support, and innovation as an on-campus experience. Whether you explore from home or plan to visit, this tour shows you the energy, diversity, and excellence that make MAHE one of the <strong>Best online universities in India</strong>.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                From modern classrooms to advanced digital learning spaces, every part of the MAHE environment is designed to support students pursuing <strong>MAHE Online Degrees</strong> like the <strong>MAHE Online MBA</strong>, <strong>MAHE Online BCA</strong>, <strong>MAHE Online MCA</strong>, <strong>MAHE Online BBA</strong>, <strong>MAHE Online MCom</strong>, and <strong>MAHE Online BCom</strong>. MAHE creates a space where learning, creativity, and personal growth come together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Academic Blocks – Where Learning Comes to Life</h3>
                <p className="text-base text-gray-700 mb-4">MAHE's academic spaces are created to help students succeed in every way. These include:</p>
                <ul className="space-y-2">
                  {['Smart digital classrooms', 'High-tech audio–visual tools', 'Comfortable seating for long study sessions', 'Modern labs for hands-on learning'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-700 mt-4">Even for students studying through <strong>UG & PG online courses by MAHE</strong>, these facilities reflect MAHE's commitment to quality and innovation.</p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Digital Learning Zones</h3>
                <p className="text-base text-gray-700 mb-4">Since MAHE University Online focuses on flexible and technology-driven learning, the campus includes digital zones that support students pursuing <strong>MAHE Online Courses</strong>:</p>
                <ul className="space-y-2">
                  {['High-speed internet access', 'Modern computer systems', 'Group study areas', 'E-learning support centers'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-700 mt-4">These spaces show how MAHE blends strong academic support with technology to enhance every <strong>MAHE Online Program</strong>.</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">A Campus Built for Students</h3>
              <p className="text-base sm:text-lg text-gray-700">
                MAHE's campus—both physical and virtual—is more than just buildings. It is a lively, welcoming community where every student feels valued, supported, and motivated. The environment encourages academic excellence, personal development, creativity, and teamwork. Whether you are touring in person or exploring virtually as part of your MAHE University Online journey, you'll feel the warmth, inspiration, and positive energy that MAHE is known for. It is a place where students build knowledge, friendships, confidence, and unforgettable experiences while completing their <strong>MAHE Online Degrees</strong>.
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

export default CampusTour