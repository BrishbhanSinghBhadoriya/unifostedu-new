import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
const CampusTour =  ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
<section id="CampusTour" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Virtual <span className="text-orange-600">Campus Tour</span>
      </h3>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        While Manipal University Jaipur Online operates in a digital mode, it maintains the vibrancy of an on-campus experience through a powerful virtual learning environment.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Our Digital Campus</h3>
        <p className="text-gray-700 mb-6">
          The MUJ Online Virtual Campus Tour showcases world-class digital infrastructure, including:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600 text-lg">🎥</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Live and Recorded Online Lectures</h4>
              <p className="text-gray-600 text-sm">Interactive sessions by expert faculty members from Manipal University Jaipur</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-lg">💬</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Interactive Discussion Boards</h4>
              <p className="text-gray-600 text-sm">Student communities and peer-to-peer learning platforms</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 text-lg">🔬</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Virtual Laboratories</h4>
              <p className="text-gray-600 text-sm">Hands-on projects for technology and management courses</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-lg">📚</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Digital Library Access</h4>
              <p className="text-gray-600 text-sm">E-books, research materials, and global academic resources</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-600 text-lg">🎯</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Career Webinars</h4>
              <p className="text-gray-600 text-sm">Mentorship sessions with industry leaders and career guidance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Immersive Learning Experience</h3>
          <p className="text-gray-600 mb-6">
            Through immersive images and videos, students can experience how Manipal University Jaipur Online has transformed traditional learning into a dynamic, engaging, and personalized online education ecosystem.
          </p>
          
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm font-semibold text-gray-800">Mobile Learning</div>
              <div className="text-xs text-gray-600">Learn on-the-go</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-sm font-semibold text-gray-800">Desktop Access</div>
              <div className="text-xs text-gray-600">Full-featured platform</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm font-semibold text-gray-800">Global Reach</div>
              <div className="text-xs text-gray-600">Access from anywhere</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold text-gray-800">24/7 Access</div>
              <div className="text-xs text-gray-600">Learn anytime</div>
            </div>
          </div>
          
          <button 
            onClick={() => setOpenModal({ type: 'enquire' })}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
          >
            Take Virtual Campus Tour
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CampusTour