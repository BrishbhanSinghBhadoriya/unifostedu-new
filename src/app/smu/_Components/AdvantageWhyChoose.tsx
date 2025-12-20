import React from 'react';
import { FaBuilding, FaCertificate, FaStar, FaUsers } from 'react-icons/fa';

type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const AdvantageWhyChoose: React.FC<IntroducationProps> = ({ setOpenModal }) => {
  return (
   <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
          <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(242,103,34,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl lg:text-5xl font-queens font-bold text-gray-900">Unlock The SMU Advantage</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Comprehensive benefits designed to support your learning journey and career growth.</p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
                icon:'🎓', title:'UGC Approved Degrees', desc:'Degrees recognized by University Grants Commission with nationwide acceptance.'
              },{
                icon:'📚', title:'Industry-Relevant Curriculum', desc:'Programs designed to meet current industry requirements and trends.'
              },{
                icon:'💼', title:'Placement Assistance', desc:'Comprehensive career support and placement opportunities.'
              },{
                icon:'💰', title:'Affordable Education', desc:'Quality education at competitive and affordable fee structures.'
              }].map((b,i)=>(
                <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{b.title}</h3> 
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Financing + Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="rounded-2xl p-8 bg-gradient-to-br from-orange-500 to-[#f26722] text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Easy Financing Options</h3>
                <p className="text-orange-100 text-lg">Flexible payment plans and EMI options to make quality education accessible to everyone.</p>
              </div>
              <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Dedicated Student Support</h3>
                <p className="text-blue-100 text-lg">24/7 academic and technical support to ensure smooth learning experience.</p>
              </div>
            </div>
          </div>
           <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800 leading-relaxed">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-black mb-6">
          Why Choose Sikkim Manipal University Online (SMU Online)
        </h2>
        <p className="text-lg text-center mb-12 text-gray-700">
          Choosing the right university for your online education is crucial for academic success and career growth.
          Sikkim Manipal University Online (SMU Online) stands out as a preferred destination for learners who aspire
          to earn a recognized online degree without compromising on quality.
        </p>

        {/* Key Reasons */}
        <div className="space-y-8">
          {[
            {
              title: "1. UGC-Approved and NAAC Accredited",
              desc: "All programs at Sikkim Manipal University Online are UGC-entitled and recognized by AICTE. The university has also received NAAC A+ accreditation, ensuring that its online degrees meet the highest academic standards. Graduates can confidently use their qualifications for both government and private-sector opportunities in India and abroad.",
            },
            {
              title: "2. Wide Range of Online Programs",
              desc: "SMU Online offers a comprehensive selection of online courses such as Online MBA, Online MCA, Online BA, and Online BCom, enabling students to choose programs that align with their professional aspirations. These UGC-approved online degrees are designed to match modern industry requirements.",
            },
            {
              title: "3. Advanced Learning Management System (LMS)",
              desc: "The university's state-of-the-art LMS platform provides 24/7 access to lectures, assignments, e-books, and recorded sessions. It supports self-paced learning, enabling students to study flexibly while maintaining professional and personal balance.",
            },
            {
              title: "4. Experienced Faculty and Industry Mentors",
              desc: "Sikkim Manipal University Online has a dedicated team of professors, researchers, and industry practitioners who bring a wealth of experience to every class. Their mentorship ensures that students gain practical insights alongside academic knowledge.",
            },
            {
              title: "5. Career-Oriented Curriculum",
              desc: "Every program at SMU Online is structured to meet the dynamic demands of the global job market. The curriculum emphasizes practical skills, case studies, and project-based learning. This career-focused approach helps students become industry-ready upon graduation.",
            },
            {
              title: "6. AI-Proctored Online Examinations",
              desc: "To maintain academic integrity, SMU Online conducts AI-proctored online exams that are flexible yet transparent. This system enables students to appear for exams securely from any location, offering convenience and credibility.",
            },
            {
              title: "7. Flexible and Affordable Fee Structure",
              desc: "Sikkim Manipal University Online ensures education remains accessible to all. It offers flexible payment options, including installments and EMI plans, allowing students from diverse backgrounds to pursue online degree programs without financial strain.",
            },
            {
              title: "8. Dedicated Student Support",
              desc: "The student support team at SMU Online assists learners throughout their academic journey — from admission to graduation. Students have access to academic counselors, tech support, and placement guidance 24/7 through the online portal.",
            },
            {
              title: "9. Strong Industry and Placement Network",
              desc: "SMU Online maintains partnerships with leading organizations across IT, Finance, Consulting, and Banking sectors. Recruiters such as TCS, Wipro, HDFC Bank, Deloitte, and IBM hire graduates from Sikkim Manipal University Online, making it one of the most employability-driven universities in India.",
            },
            {
              title: "10. Global Recognition and Alumni Network",
              desc: "With a global alumni base spread across 90+ countries, Sikkim Manipal University Online provides strong professional networking opportunities. The reputation of SMU Online ensures that its degrees are recognized both nationally and internationally.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
            
          ))}
        </div><div className="mt-10 text-center">
               <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
            </div>
        {/* Additional Info Sections */}
        <div className="mt-16 space-y-10">
          {[
            {
              title: "Academic Excellence with a Digital Edge",
              desc: "The blend of academic rigor and technological innovation makes SMU Online a leader in digital education. Every student experiences a structured yet flexible learning model enriched with video lectures, quizzes, assignments, and faculty interactions.",
            },
            {
              title: "Empowering Working Professionals",
              desc: "SMU Online programs are designed to enhance career prospects without interrupting job commitments. Whether it's an Online MBA for managers, an Online MCA for IT professionals, or an Online BBA for business aspirants, flexibility is key.",
            },
            {
              title: "Affordable Education with Global Standards",
              desc: "SMU Online offers world-class education at affordable costs. The transparent fee structure ensures quality education is accessible to all.",
            },
            {
              title: "Holistic Learning Ecosystem",
              desc: "Beyond academics, SMU Online emphasizes personality development, communication, and leadership. Virtual workshops, webinars, and lectures foster real-world exposure.",
            },
            {
              title: "Commitment to Quality and Integrity",
              desc: "SMU Online upholds strict academic standards, complying with UGC and NAAC guidelines. Continuous monitoring and feedback ensure its credibility.",
            },
            {
              title: "Lifelong Learning and Career Growth",
              desc: "Graduates become part of a lifelong learning community. Alumni benefit from ongoing career counseling, networking, and professional development opportunities.",
            },
          ].map((section, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-gray-100 to-gray-50 border-l-4 border-black p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                {section.title}
              </h3>
              <p>{section.desc}</p>
            </div>
          ))}
        </div>
           <div className="flex justify-center mt-10">
     <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
        </div>
        {/* Conclusion */}
        <div className="mt-16 bg-black text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
          <p className="mb-4">
            Sikkim Manipal University Online (SMU Online) is more than just an
            institution — it is a digital gateway to global education. Its
            combination of academic excellence, flexible learning, affordable
            structure, and global recognition makes it one of the most
            sought-after UGC-approved online universities in India.
          </p>
          <p className="mb-4">There are many reasons why learners across India choose SMU Online. Every Sikkim Manipal University online degree is UGC-approved, valid, and carries the same value as a regular campus degree.
             When you study programs like the Online MCom from Sikkim Manipal University or Online BCom from Sikkim Manipal University, you get recognized qualifications that are respected in both India and abroad.
          </p>
          <p className="mb-4">
            By choosing SMU Online, students invest in a transformative journey
            that opens doors to professional advancement and lifelong success.
            Whether pursuing an Online MBA, Online MCA, Online BA, or Online
            BCom, learners receive a globally recognized qualification that
            reflects both prestige and performance.
          </p>
          <p>
           The MCom at Sikkim Manipal University is considered one of the best online MCom courses in India because it covers advanced topics in accounting, finance, and business analytics. The BCom at Sikkim Manipal University builds a strong base in business and finance with practical exposure and real-world assignments.
           For management aspirants, the Online MBA from Sikkim Manipal University and BBA at Sikkim Manipal University focus on leadership, business strategy, and modern management skills. These programs are among the top online BBA and MBA courses in India.

          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
     <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
        </div>
        <section className="py-20 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 font-queens">SMU Online Advantages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <FaStar className="text-yellow-500 text-4xl mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Flexible Learning Schedule</h3>
                        <p className="text-gray-600 text-lg">Balance your education with personal and professional commitments through our flexible online learning platform.</p>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <FaCertificate className="text-blue-500 text-4xl mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">UGC Recognized Degrees</h3>
                        <p className="text-gray-600 text-lg">All online degrees are UGC-entitled and hold the same value as regular on-campus degrees.</p>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <FaUsers className="text-green-500 text-4xl mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Experienced Faculty</h3>
                        <p className="text-gray-600 text-lg">Learn from highly qualified faculty members with extensive academic and industry experience.</p>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <FaBuilding className="text-purple-500 text-4xl mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Strong Alumni Network</h3>
                        <p className="text-gray-600 text-lg">Join a network of 50,000+ successful alumni working in top companies across various industries.</p>
                      </div>
                    </div>
                  </div>
                </section>
    </section>
        </section>
  )
}

export default AdvantageWhyChoose