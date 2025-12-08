import React from 'react'

const PlacementPartners = ({ setOpenModal ,openModal}) => {
  return (
  <section id="PlacementPartners" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Placement Partners</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online partners with leading national and multinational organizations to offer extensive placement and internship opportunities.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Placement Partners</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">💼</div>
            <div className="font-semibold text-gray-800">Infosys</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🏢</div>
            <div className="font-semibold text-gray-800">Wipro</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold text-gray-800">Accenture</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold text-gray-800">TCS</div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold text-gray-800">Deloitte</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-semibold text-gray-800">Capgemini</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Cognizant</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Amazon</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">EY</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">HDFC Bank</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Services Division</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">📝</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Resume Building</h4>
              <p className="text-gray-600 text-sm">Professional resume crafting and optimization</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🎤</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Mock Interviews</h4>
              <p className="text-gray-600 text-sm">Practice sessions with industry experts</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🤝</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Professional Networking</h4>
              <p className="text-gray-600 text-sm">Connect with industry professionals and alumni</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">💼</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Job Placements</h4>
              <p className="text-gray-600 text-sm">Direct placement opportunities with partner companies</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
          <p className="text-gray-600 text-sm">
            MUJ Online's collaboration with global brands ensures every online degree holder gains real career value 
            and recognition in the competitive job market.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Explore Career Opportunities
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default PlacementPartners