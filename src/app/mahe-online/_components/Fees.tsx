import React from 'react'
import { FaBuilding, FaCertificate, FaStar, FaUser } from 'react-icons/fa'
import { OpenModalState } from '../../../../types/Modal'
const Fees = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {

  return (
   <section
  id="FeeStructure"
  className="py-01 sm:py-01 md:py-01 lg:py-01 bg-white"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
      <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
        Fee Structure
      </span>
    </h2>

    {/* Programs */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
      {[
        { name: 'MAHE Online MBA', desc: 'Flexible and affordable management program. Suitable for working professionals. EMI payment options available.' },
        { name: 'MAHE Online MCA', desc: 'Industry-focused technical curriculum with virtual labs and digital tools.' },
        { name: 'MAHE Online BBA', desc: 'Cost-effective business program with yearly or semester-wise payment.' },
        { name: 'MAHE Online MCom', desc: 'Affordable PG program for finance & accounting aspirants.' },
        { name: 'MAHE Online BCom', desc: 'Pocket-friendly UG program with LMS access.' }
      ].map((program, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-orange-50 to-white p-5 sm:p-6 rounded-xl shadow-md border border-orange-100"
        >
          <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">
            {program.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            {program.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Included */}
    <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-md mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
        What's Included in the Fees?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          '24/7 LMS access',
          'Live & recorded classes',
          'Digital study materials',
          'Assessments & quizzes',
          'Case studies',
          'Academic support'
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-orange-500 font-bold">✓</span>
            <span className="text-sm sm:text-base text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Payment */}
    <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-md mb-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
        Flexible Payment Options
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          'Semester-wise payment',
          'EMI options',
          'Secure online payment'
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm text-center text-sm sm:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* Button */}
    <div className="text-center">
      <button
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
      >
        Apply Now
      </button>
    </div>
  </div>

  {/* Advantages (NO EXTRA SPACE) */}
  <div className="mt-10 py-6 sm:py-8 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 font-queens">
        Online Manipal Advantages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: <FaStar />, title: 'Flexible Schedule', desc: 'Learn anytime, anywhere at your convenience.' },
          { icon: <FaCertificate />, title: 'UGC Approved', desc: 'Degrees accepted for jobs & higher studies.' },
          { icon: <FaUser />, title: 'Expert Faculty', desc: 'Learn from experienced mentors.' },
          { icon: <FaBuilding />, title: 'Strong Alumni', desc: 'Access global career opportunities.' }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3 text-orange-500">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setOpenModal({ type: 'apply' })}
          className="w-1/2bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-transform hover:scale-105 shadow-md text-sm sm:text-base"
        >
          Apply Now
        </button>
      </div>

    </div>
  </div>
</section>

  )
}

export default Fees