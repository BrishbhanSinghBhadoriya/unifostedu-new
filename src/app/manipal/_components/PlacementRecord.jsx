import React from 'react'

const PlacementRecord = ({ setOpenModal ,openModal}) => {
  return (
   <section id="PlacementRecord" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Placement Record</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal Online has achieved impressive placement outcomes across domains. Graduates from online MBA, online MCA, and online BBA programs have secured roles in management, IT, consulting, finance, and marketing.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Placement Highlights</h3>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">90%</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Employability Rate</h4>
                <p className="text-gray-600 text-sm">For postgraduates across all programs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">500+</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Recruiters Associated</h4>
                <p className="text-gray-600 text-sm">With Manipal University Jaipur Online</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">₹7 LPA</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Average MBA Salary</h4>
                <p className="text-gray-600 text-sm">Competitive compensation packages</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">24/7</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Placement Portal</h4>
                <p className="text-gray-600 text-sm">Real-time job listings and opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Domains</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💼</span>
            </div>
            <span className="text-gray-700 font-semibold">Management Roles</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💻</span>
            </div>
            <span className="text-gray-700 font-semibold">IT & Technology</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📊</span>
            </div>
            <span className="text-gray-700 font-semibold">Consulting</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💰</span>
            </div>
            <span className="text-gray-700 font-semibold">Finance & Banking</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📈</span>
            </div>
            <span className="text-gray-700 font-semibold">Marketing & Sales</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Career Development Focus</h4>
          <p className="text-gray-600 text-sm">
            MUJ Online's strong focus on career development ensures every learner is job-ready upon graduation 
            with practical skills and industry knowledge.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          View Placement Statistics
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default PlacementRecord