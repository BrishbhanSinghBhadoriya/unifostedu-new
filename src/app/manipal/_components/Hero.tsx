import React from 'react'
import { OpenModalState } from '../../../../types/Modal'

const Hero = ({
  setOpenModal,
  openModal
}: {
  setOpenModal: (state: OpenModalState) => void
  openModal: OpenModalState
}) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* TOP INTRO */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Welcome to <span className="text-orange-600">Manipal University Jaipur Online</span>
          </h3>

          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
            Welcome to <strong>Manipal University Jaipur Online</strong>, built on decades of academic
            excellence and innovation. Designed for working professionals, graduates, and ambitious
            learners, the platform offers flexible and career-focused online degree programs.
            Whether you are exploring an <strong>online MBA in India</strong> or looking for a
            recognized online university, these programs combine academic knowledge,
            real-world projects, and flexible learning.
          </p>

          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 mt-4">
            From management and technology programs to industry-aligned certifications,
            each course is structured to deliver practical exposure, modern curriculum,
            and career-ready skills — making online education accessible without relocation
            or career breaks.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

          {/* LEFT SEO CONTENT */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Designed for Every Type of Learner in India
            </h3>

            <p className="text-gray-700 mb-5">
              Our flexible online programs are designed for students, graduates, and working professionals
              across India who want to upgrade their qualifications without leaving their job or relocating.
              Whether you are starting your career or aiming for leadership roles, online education provides
              a powerful pathway to long-term success.
            </p>

            <div className="space-y-3 sm:space-y-4">

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Fresh Graduates:</strong> Start strong with an
                  <strong> online MBA in India for freshers</strong> and build industry-ready business skills.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Working Professionals:</strong> Accelerate growth with an
                  <strong> executive MBA online India</strong> designed for promotions and leadership roles.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Location Independent:</strong> Study from <strong>Mumbai</strong>,
                  <strong> Bangalore</strong>, <strong>Chennai</strong>, or anywhere in India.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Flexible Admissions:</strong> Many learners prefer
                  <strong> online MBA without entrance exam</strong> pathways based on eligibility.
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-4">
              <p className="text-gray-700">
                If you are exploring an <strong>online MBA in India</strong> or planning to upgrade
                your career through an <strong>executive MBA online India</strong>, structured
                online education helps you gain leadership and analytical expertise
                while continuing your professional journey.
              </p>

              <p className="text-gray-700">
                Today’s learners search for <strong>recognized online universities in India</strong>,
                flexible <strong>distance learning programs</strong>, and career-focused courses
                that provide practical exposure and placement support.
              </p>

              <p className="text-gray-700">
                Quality online education makes it possible to learn from anywhere,
                balance work and study, and build a future-ready career.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
        <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
           <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Academic Portfolio: Your Pathway to Specialization</h3>
            <div className="space-y-4"> <p className="text-sm text-gray-600 mb-4"> Our programs stands out when you <strong>compare online courses in India</strong>, offering a perfect blend of academic excellence and real–world relevance. Unlike other <strong>online courses in India</strong>, our programs are structured to ensure seamless integration between conceptual understanding and hands-on learning. </p> <div> <h4 className="font-bold text-gray-900 mb-2">📊 Business & Management</h4> <p className="text-sm text-gray-600"> Manipal University Jaipur online offers one of the top <strong>online MBA programs in India</strong>, which is designed for learners whose aim is to lead in today's competitive business world. Our <strong>MBA Online in India</strong> enhances innovation, leadership, and strategic decision-making through Industry-driven courses. For professionals searching advancement in careers, our <strong>online MBA for working professionals</strong> and <strong>Executive MBA online India</strong> programs provide the flexibility to balance work and study while developing high-impact management skills. </p> </div> <div> <h4 className="font-bold text-gray-900 mb-2">💻 Technology & Data Science</h4> <p className="text-sm text-gray-600"> In an era driven by data and automation, our <strong>online data science course India</strong> and <strong>AI and ML certification India</strong> are perfect for those looking to build expertise in high-growth fields. These programs are ideal for both <strong>freshers</strong> and <strong>working professionals</strong> in tech. </p> </div> <div> <h4 className="font-bold text-gray-900 mb-2">🎨 Digital Skills & Development</h4> <p className="text-sm text-gray-600"> For creatives and strategists, our <strong>digital marketing certification online</strong> provides a comprehensive toolkit for the digital landscape. Similarly, our <strong>certificate in web development</strong> equips you with the skills to build the web of tomorrow. </p> </div> </div> <div className="mt-6"> <p className="text-xs text-gray-600 mb-4"> Before you decide, we encourage you to <strong>download MBA brochure India</strong>, <strong>get course brochure</strong> for our <strong>AI and ML certification India</strong>, or <strong>download course guide</strong> for our <strong>digital marketing certification online</strong>. This will help you <strong>compare course fees online</strong>, review the <strong>course syllabus PDF download</strong>, and make an informed choice. </p> </div> <div className="mt-6 flex gap-3"> <button onClick={() => setOpenModal({ type: 'enquire' })} className="flex-1 bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm cursor-pointer" > Download Brochure </button> <button onClick={() => setOpenModal({ type: 'apply' })} className="flex-1 border-2 border-orange-600 text-orange-600 px-4 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-sm cursor-pointer" > Free Counseling </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
