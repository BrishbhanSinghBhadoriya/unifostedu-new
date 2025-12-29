import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
const KeyHighlights = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
   <section id="KeyHighlights" className="py-16 sm:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Key Highlights of <span className="text-orange-600">Manipal University Jaipur Online</span>
      </h3>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal Online seamlessly merges traditional university values with the latest in digital learning to create a holistic and empowering educational experience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🏆</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">UGC-entitled and NAAC A+ Accredited</h3>
        <p className="text-gray-600 text-sm">
          Recognized globally for academic innovation and excellence with the highest accreditation standards.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">💻</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">100% Online Degree Programs</h3>
        <p className="text-gray-600 text-sm">
          Study anytime, anywhere with complete flexibility and convenience for modern learners.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🎯</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-driven Curriculum</h3>
        <p className="text-gray-600 text-sm">
          Developed by global experts to ensure relevance and practical application in real-world scenarios.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">👨‍🏫</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">World-class Faculty</h3>
        <p className="text-gray-600 text-sm">
          Access to experienced professors and industry experts from Manipal University Jaipur.
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">💼</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Career Mentoring & Placement</h3>
        <p className="text-gray-600 text-sm">
          Comprehensive placement assistance and career guidance from corporate partners.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🌐</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">24×7 Learning Platform</h3>
        <p className="text-gray-600 text-sm">
          Advanced digital platforms ensuring seamless and intuitive learning experience.
        </p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Globally Accepted Online Degrees</h3>
      <p className="text-lg mb-6">
        Equivalent to regular campus degrees and part of the prestigious Manipal Education Group with over 65 years of academic leadership.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
        >
          Apply Now
        </button>
        <button 
          onClick={() => setOpenModal({ type: 'enquire' })}
          className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors cursor-pointer"
        >
          Download Brochure
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default KeyHighlights