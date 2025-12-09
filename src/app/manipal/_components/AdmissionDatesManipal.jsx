import React from 'react'

const AdmissionDatesManipal = ({ setOpenModal ,openModal}) => {
  return (
   <section id="AdmissionDates" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Admission Dates for <span className="text-orange-600">Various UG & PG Programs</span>
      </h3>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online follows a flexible admission calendar, allowing students to apply throughout the year. 
        The university runs multiple admission intakes, ensuring no learner misses out on opportunities.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Schedule</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">January Intake</h4>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in December</span>
            </div>
            <p className="text-gray-600 text-sm">Start your academic year with fresh opportunities and comprehensive support.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">April Intake</h4>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in March</span>
            </div>
            <p className="text-gray-600 text-sm">Perfect timing for mid-year career transitions and skill enhancement.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">July Intake</h4>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in June</span>
            </div>
            <p className="text-gray-600 text-sm">Ideal for fresh graduates and working professionals seeking advancement.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">October Intake</h4>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in September</span>
            </div>
            <p className="text-gray-600 text-sm">End-year enrollment for those planning ahead for the next academic cycle.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Programs</h3>
        <p className="text-gray-600 mb-6">
          Students can enroll in online MBA, online BBA, online BCA, online MCA, online M.Com, or online BA programs directly via the Manipal Online admission portal.
        </p>
        
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-2">🎓</div>
            <div className="font-semibold text-gray-800">Undergraduate</div>
            <div className="text-xs text-gray-600">BBA, BCA, BA</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold text-gray-800">Postgraduate</div>
            <div className="text-xs text-gray-600">MBA, MCA, M.Com</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Early Bird Benefits</h4>
          <p className="text-sm text-gray-600">
            For each session, early applicants are eligible for exclusive scholarships, financial aid, and counseling support.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
        >
          Apply Now - Multiple Intakes Available
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default AdmissionDatesManipal