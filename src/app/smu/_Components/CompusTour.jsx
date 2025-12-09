import { optimizeCloudinary } from '@/utils/cloudinary'
import React from 'react'
import Image from 'next/image'

const CompusTour = ({setOpenModal, openModal}) => {
  return (
  <section id="campus-tour" className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Campus Tour – Virtual Learning Experience
      </h2>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
        <p>
          While <strong>Sikkim Manipal University Online (SMU Online)</strong> operates in
          the digital space, it preserves the vibrancy and engagement of a real university
          environment through immersive virtual experiences.
        </p>

        <p>
          The <strong>SMU Online Virtual Campus Tour</strong> enables prospective learners
          to explore key aspects of the digital campus, including:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Interactive digital classrooms equipped with state-of-the-art technology for
            seamless learning.
          </li>
          <li>
            Recorded lectures and live sessions conducted by experienced faculty members
            and industry professionals.
          </li>
          <li>
            Access to online laboratories, extensive e-libraries, and academic research
            databases to support innovation and study.
          </li>
          <li>
            Engaging video tours of the Sikkim campus, nestled amid the Himalayan
            landscape, reflecting a perfect blend of nature and technology.
          </li>
        </ul>

        <p>
          Learners can also view faculty introduction videos, webinar recordings, and
          orientation modules that simplify the transition into the world of online
          education. The virtual campus platform replicates the sense of belonging,
          academic rigor, and interaction found in traditional university life — ensuring
          students feel truly connected to a reputed academic institution.
        </p>
      </div>
      <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Apply Now
                  </button>
    </div>

    {/* Right Images */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Image
        src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp")}
        alt="SMU Virtual Classroom"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
        width={600}
        height={400}
      />
      <Image
        src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/smu-class_lc7xcd.webp")}
        alt="SMU Library"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
        width={600}
        height={400}
      />
      <Image
        src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/smu-campus_u8h6kr.webp")}
        alt="SMU Online Interaction"
        className="rounded-2xl shadow-lg w-full h-auto object-cover sm:col-span-2"
        width={600}
        height={400}
      />
    </div>
  </div>
</section>
  )
}

export default CompusTour