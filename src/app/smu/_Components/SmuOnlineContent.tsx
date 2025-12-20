import React from 'react';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const SmuOnlineContent: React.FC<IntroducationProps> = ({ setOpenModal }) => {

  return (
    <section id="smu-online" className="py-14 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
      Sikkim Manipal University Online (SMU Online)
    </h2>

    <p className="text-lg text-black-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
      In today's digital world, learning is no longer limited to classrooms — and 
      <span className="font-semibold text-black-700"> Sikkim Manipal University Online (SMU Online) </span>
      is leading this transformation. Known for its quality education and strong industry 
      connections, SMU Online offers UGC-approved online degrees designed for flexibility, 
      affordability, and real-world career growth.
    </p>

    <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
      Students across India can now earn globally recognized degrees such as the 
      <span className="font-semibold"> Online MCom</span>, 
      <span className="font-semibold"> Online BCom</span>, 
      <span className="font-semibold"> Online MBA</span>, and 
      <span className="font-semibold"> Online BBA</span> from Sikkim Manipal University — 
      all from the comfort of their homes, without compromising on quality or learning experience.
    </p>

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


        <section  className="bg-white py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-3">
      About Sikkim Manipal University Online (SMU Online)
    </h2>
    <div className="w-90 h-1 bg-black-500 rounded-full mb-8"></div>

    {/* Content */}
    <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
      <p>
        <strong>Sikkim Manipal University Online (SMU Online)</strong> is one of India's
        leading UGC-approved online universities, offering high-quality degree programs
        that blend academic excellence with digital innovation. Established under the
        prestigious Sikkim Manipal University legacy, SMU Online has become a trusted name
        in distance and online learning across India.
      </p>

      <p>
        Sikkim Manipal University Online (SMU Online) is part of the well-known Manipal Education Group, which has over 20 years of experience in higher education. The goal of SMU Online is to make quality education accessible to everyone through digital learning.
      </p>
       
       <p className="text-gray-700 leading-relaxed">
         All programs — including BCom, MCom, and the Online MBA from Sikkim Manipal University — 
         are designed in alignment with UGC guidelines and updated to meet modern industry requirements. 
         The university's online learning platform provides a rich academic experience through live and 
         recorded classes, interactive sessions, and practical case studies. Whether you are a student, 
         a working professional, or someone restarting your education, Sikkim Manipal University Online 
         offers the flexibility to learn at your own pace without compromising on quality or academic standards.
       </p>

      <p>
        The university offers a wide range of UGC-entitled online programs such as
        <strong> Online MBA, MCA, MCom, BCom,</strong> and <strong>BA</strong>, catering to
        the diverse needs of students and working professionals. Each program is crafted
        to meet evolving industry standards and ensure learners are job-ready upon
        graduation.
      </p>

      <p>
        Guided by the philosophy of{" "}
        <span className="italic">"Learning Anytime, Anywhere"</span>, SMU Online integrates
        live classes, interactive e-learning modules, AI-proctored assessments, and
        personalized academic support through an advanced Learning Management System (LMS).
      </p>

      <p>
        Recognized by <strong>UGC-DEB</strong> and accredited with <strong>NAAC A+</strong>,
        SMU Online maintains rigorous academic standards and a future-ready curriculum.
        Its commitment to quality, digital innovation, and student success places it among
        India's top online universities.
      </p>

      <p>
        SMU Online represents <strong>credibility, flexibility,</strong> and
        <strong> innovation</strong> — empowering learners to build careers with confidence
        through career-focused online degrees.
      </p>

      <p>
        The faculty comprises experienced academicians and industry professionals who
        blend theory with real-world insights. The{" "}
        <strong>Learning Management System (LMS)</strong> ensures smooth access to
        lectures, study materials, and interactive forums — replicating traditional
        classroom engagement online.
      </p>

      <p>
        From admission to graduation, every learner receives continuous support through
        academic mentorship, personalized counseling, and placement guidance, ensuring a
        holistic and rewarding educational journey.
      </p>

      <p>
        With over two decades of excellence in distance education, SMU Online continues to
        redefine online higher education. Thousands of graduates have advanced their
        careers through its UGC-approved programs, enjoying recognition equal to
        on-campus degrees.
      </p>

      <p>
        SMU Online bridges the gap between technology and education — fostering{" "}
        <strong>global professionals</strong> ready to lead in a dynamic, digital-first
        world.
      </p>
    </div>
    <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Apply Now
                  </button>
  </div>
</section>
</section>
  )
}

export default SmuOnlineContent