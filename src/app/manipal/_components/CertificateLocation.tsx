import React from 'react'
import Image from 'next/image'
import { optimizeCloudinary } from '@/utils/cloudinary'


const CertificateLocation = () => {
  return (
   <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <Image width={100} height={100} src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327504/muj-certi_l0mgpy.webp")} alt="Certificate" className="rounded-lg border-2 border-white/20 w-full" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Recognized Online Degree from Manipal University</h3>
              <p className="mb-6 text-lg">
                Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>UGC & AICTE Recognized Degrees</li>
                <li>Daily Live & Recorded Classes</li>
                <li>Global Collaborations with Ivy-League Institutions</li>
                <li>100% Placement & Internship Support</li>
              </ul>
            </div>
          </div>
        
  
  
      {/*  Add Location-Based Section (for local SEO) */}
  <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold text-center mb-12">
        Online Manipal Programs <span className="text-orange-600">Available Across India</span>
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          'Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 
          'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
          'Jaipur', 'Lucknow', 'Chandigarh', 'Indore'
        ].map(city => (
          <div key={city} className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 transition-all text-center transform hover:scale-[1.02]">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-bold text-sm">{city}</h3>
            <p className="text-xs text-gray-600">Online Programs</p>
          </div>
        ))}
              </div>
      
      <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
        Manipal University Jaipur's online programs are accessible from anywhere in India. 
        Students from Delhi, Mumbai, Bangalore, and 2000+ cities trust MUJ for quality online education.
      </p>
    </div>
  </section>
  </section>
  )
}

export default CertificateLocation