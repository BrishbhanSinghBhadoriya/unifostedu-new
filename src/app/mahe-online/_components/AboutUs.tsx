import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AboutUs = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  const courses = [
  { name: "MAHE Online MBA", slug: "online-mba-mahe" },
  { name: "MAHE Online BBA", slug: "online-bba-honors-mahe" },
  { name: "MAHE Online MCA", slug: "online-mca-mahe" },
  { name: "MAHE Online BCom", slug: "online-bcom-professional-mahe" },
  { name: "MAHE Online MSc.(Data Analytics)", slug: "online-msc-data-science-mahe" },
  { name: "MAHE Online MSc.(Business Analytics)", slug: "online-mcom-business-analytics-mahe" },  
];

  return (
  <section id="AboutWrapper" className="bg-white mb-0">

  {/* ABOUT US */}
  <div id="AboutUs" className="mt-8 sm:mt-8 md:mt-8 lg:mt-8 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-queens">
        About Us –{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          MAHE University Online
        </span>
      </h2>

      <div className="prose prose-lg max-w-none">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          MAHE University Online is the official online learning arm of Manipal
          Academy of Higher Education—one of India's top universities with{" "}
          <strong>NAAC A++ accreditation</strong> and global recognition.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          The goal of MAHE University Online is to make premium higher education
          accessible to students across India and globally through flexible,
          career-focused online programs.
        </p>
      </div>
    </div>
  </div>

  {/* FUTURE READY */}
  <div
    id="FutureReady"
    className="bg-gradient-to-br from-orange-50 to-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-queens">
        A Future-Ready{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Online Learning Platform
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {[
          "Attend live online classes",
          "Watch recorded videos anytime",
          "24/7 Learning Management System (LMS)",
          "Download e-books & digital notes",
          "Group discussions & peer learning",
          "Case studies & industry projects",
          "Faculty & mentor interaction",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md"
          >
            <span className="text-orange-500 font-bold text-xl">✓</span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* UGC APPROVED */}
  <div id="UGCApproved" className="py-10 sm:py-12 md:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-queens">
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          UGC-Approved
        </span>{" "}
        Online Degrees
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
  {courses.map((course, i) => (
    <Link
      key={i}
      href={`/mahe-online/${course.slug}`}
      className="group bg-orange-50 p-5 rounded-xl shadow border hover:shadow-lg transition cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-orange-600">
          {course.name}
        </h3>

        <span className="flex items-center text-sm text-orange-600 font-semibold group-hover:translate-x-1 transition">
          More <ArrowRight className="ml-1 w-4 h-4" />
        </span>
      </div>
    </Link>
  ))}
</div>
    </div>
  </div>

  {/* LEADER */}
  <div
    id="Leader"
    className="py-5 sm:py-6 md:py-8 lg:py-10 bg-gradient-to-br from-gray-50 to-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-queens">
        A Leader Among{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Online Universities in India
        </span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
        MAHE is widely recognized for academic excellence, industry-aligned
        curriculum, and strong learner support—making it one of the best online
        universities in India.
      </p>
    </div>
    {/* FINAL CTA */}
  <div className="mt-6 mb-4 bg-white text-center">
    <button
      onClick={() => setOpenModal({ type: "apply" })}
      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
    >
      Apply Now for MAHE Online Programs
    </button>
  </div>
  </div>

  

</section>

  )
}

export default AboutUs