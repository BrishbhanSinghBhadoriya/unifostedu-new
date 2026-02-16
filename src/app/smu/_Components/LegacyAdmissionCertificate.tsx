import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { optimizeCloudinary } from '@/utils/cloudinary';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const LegacyAdmissionCertificate: React.FC<IntroducationProps> = ({ setOpenModal }) => {

  return (
     <section className="w-full bg-white text-gray-800 mt-2">
  <div className="max-w-5xl mx-auto space-y-10 px-4">

    {/* Legacy of Quality */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">A Legacy of Quality and Trust</h2>
      <p className="leading-relaxed">
        SMU Online carries forward the trust and excellence of the Manipal Education Group, which has educated 
        millions globally. Courses are designed by experienced teachers and industry experts to ensure they 
        remain practical and up-to-date. Students gain access to digital libraries, 24/7 study materials, live 
        discussions, and continuous mentor support. Whether you live in Delhi, Patna, Mumbai, or abroad, you can 
        earn a UGC-approved online degree from Sikkim Manipal University that is recognized worldwide. This 
        strong reputation makes SMU Online one of the top choices for online BCom, online MCom, online MBA, and 
        BBA programs in India.
      </p>
    </div>

    {/* Empowering Learners */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Empowering Learners for the Future</h2>
      <p className="leading-relaxed">
        Today's workplaces demand digital skills, business understanding, and financial knowledge. The Online 
        MCom and Online BCom programs from Sikkim Manipal University are designed to prepare learners with 
        exactly these skills. The curriculum integrates case studies, interactive assessments, and live 
        industry projects to ensure students gain hands-on experience. Graduates find strong career 
        opportunities in banking, auditing, taxation, and finance. Meanwhile, the Online MBA and BBA programs 
        help build managerial and entrepreneurial confidence for leadership roles.
      </p>
    </div>

    {/* Recognition and Global Acceptance */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Recognition and Global Acceptance</h2>
      <p className="leading-relaxed">
        A major benefit of studying at Sikkim Manipal University Online is the global acceptance of its degrees. 
        All programs — including Online MCom, Online BCom, Online MBA, and BBA — are UGC-approved and hold the 
        same value as on-campus programs. Employers and universities worldwide recognize the academic standards 
        of SMU Online, giving learners an advantage in both career opportunities and higher education.
      </p>
    </div>

    {/* Technology Driven Learning */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Technology-Driven Learning Experience</h2>
      <p className="leading-relaxed mb-4">
        SMU Online uses advanced digital tools to deliver an interactive and seamless learning experience. 
        Students benefit from:
      </p>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Live virtual classes</li>
        <li>AI-based assessments</li>
        <li>Progress tracking</li>
        <li>24/7 access to e-resources and recorded lectures</li>
      </ul>
      <p className="leading-relaxed mt-3">
        Every online degree provides access to e-books, discussion forums, doubt-clearing sessions, and 
        placement guidance — ensuring an engaging and supportive learning journey.
      </p>
    </div>

    {/* Affordable & Flexible */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Affordable and Flexible Education</h2>
      <p className="leading-relaxed">
        Sikkim Manipal University Online ensures education remains both flexible and affordable. Programs like 
        the Online MCom, Online BCom, and Online MBA come with easy EMI plans and reasonable fees. Students can 
        balance academics with work or personal commitments, making SMU Online a preferred choice for working 
        professionals. This approach has helped SMU rank among India's best universities for online MCom, online 
        BBA programs, and UGC-approved online degrees.
      </p>
    </div>

    {/* Career Focus */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Building Careers, Not Just Degrees</h2>
      <p className="leading-relaxed">
        At SMU Online, education goes beyond academics — it focuses on career development. Students receive 
        career counseling, resume-building support, mock interview sessions, and participate in virtual job 
        fairs. Graduates from Online BCom and Online MCom programs secure roles in top industries such as 
        banking, finance, and consulting. With a strong emphasis on employability, Sikkim Manipal University 
        Online ensures students gain not just a degree, but a pathway to a successful and rewarding career.
      </p>
    </div>

  </div>
   <section id="admission-process" className="relative py-20 bg-white">
            {/* Decorative Blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
        
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Admission Procedure
                </h2>
                <div className="w-24 h-1 bg-[#f26722] mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  A simple, transparent, and student-friendly admission process
                  designed to help you begin your learning journey smoothly.
                </p>
              </motion.div>
        
              {/* 4-Step Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
                  Easy 4-Step Admission Process
                </h3>
        
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 to-[#f26722] z-0 rounded-full"></div>
        
                  {[
                    {
                      number: "01",
                      title: "Application Form",
                      desc: "Fill the online application form on the university portal.",
                    },
                    {
                      number: "02",
                      title: "Documents & Fee",
                      desc: "Upload required documents and pay the application fee.",
                    },
                    {
                      number: "03",
                      title: "Confirmation",
                      desc: "Receive confirmation and student login credentials.",
                    },
                    {
                      number: "04",
                      title: "Enrollment",
                      desc: "Complete fee payment and begin your classes.",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="text-center relative z-10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.3 }}
                    >
                                <div className="bg-gradient-to-br from-orange-400 to-[#f26722] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                        <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                        <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-700 text-sm md:text-base">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="mt-10 ">
            <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold mb-10 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </button>
              </div> 
              <section className="bg-[#002d5f] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image width={600} height={400} src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/smu_qgncya.webp")} alt="Certificate" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">UGC-Entitled Online Degree from Sikkim Manipal University</h2>
              <p className="mb-8 text-xl">
                Earn a recognized degree that holds the same value as a regular degree, with the flexibility to learn from anywhere at your own pace.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  UGC Recognized Online Degrees
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  Learn from Industry Experts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  Comprehensive Study Material
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  Dedicated Student Support
                </li>
              </ul>
            </div>
          </div>
        </section>     
          </section>
</section>
  )
}

export default LegacyAdmissionCertificate
