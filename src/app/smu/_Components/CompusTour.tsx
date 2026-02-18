import Image from 'next/image';
import React from 'react';
import { optimizeCloudinary } from '@/utils/cloudinary';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const CompusTour: React.FC<IntroducationProps> = ({ setOpenModal }) => {
  return (
    <section id="campus-tour" className="bg-gray-50 mt-2 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Campus Tour – Virtual Learning Experience
          

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <h3>
              While <strong>Sikkim Manipal University Online (SMU Online)</strong> operates in
              the digital space, it preserves the vibrancy and engagement of a real university
              environment through immersive virtual experiences.
            </h3>

            <h3>
              The <strong>SMU Online Virtual Campus Tour</strong> enables prospective learners
              to explore key aspects of the digital campus, including:
            </h3>

            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Interactive digital classrooms equipped with state-of-the-art technology for seamless learning.
              </li>
              <li>
                Recorded lectures and live sessions conducted by experienced faculty members and industry professionals.
              </li>
              <li>
                Access to online laboratories, extensive e-libraries, and academic research databases to support innovation and study.
              </li>
              <li>
                Engaging video tours of the Sikkim campus, nestled amid the Himalayan landscape, reflecting a perfect blend of nature and technology.
              </li>
            </ul>

            <h3>
             The campus of Sikkim Manipal University is located in the scenic surroundings of Gangtok, Sikkim, offering a peaceful and modern learning environment for students. Spread across lush green hills, the university campus features well-equipped classrooms, advanced laboratories, a digital library, hostels, sports facilities, and Wi-Fi connectivity to support academic excellence and student life. Known for its safe infrastructure, experienced faculty, and industry-focused education, the SMU campus provides a perfect blend of natural beauty and modern facilities, making it an ideal destination for higher education in India. The university promotes innovation, research, and holistic development, attracting students from across the country seeking quality distance and on-campus programs.
            </h3>

            
          </div>
        </h2>
          {/* Apply Button */}
          <button 
            onClick={() => setOpenModal({ type: 'apply' })}
            className="mt-6 w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Right Images - stacked vertically */}
        <div className="w-full flex flex-col gap-6">
          <Image
            src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp")}
            alt="Sikkim Manipal University Online Virtual Classroom — Digital Learning Campus"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            width={600}
            height={400}
            loading='lazy'
          />
          <Image
            src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/smu-class_lc7xcd.webp")}
            alt="Sikkim Manipal University E-Library and Digital Resources for Online Students"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            width={600}
            height={400}
            loading='lazy'
          />
          <Image
            src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/smu-campus_u8h6kr.webp")}
            alt="SMU Online Interaction"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            width={600}
            height={400}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default CompusTour
