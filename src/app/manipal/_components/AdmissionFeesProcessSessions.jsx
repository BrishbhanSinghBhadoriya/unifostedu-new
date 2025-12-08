import React from 'react'

const AdmissionFeesProcessSessions = ({setOpenModal,openModal}) => {
  return (
   <section id='Admission' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">
      Eligibility & <span className="text-orange-600">Admission Process</span>
    </h2>
    
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Eligibility Criteria for MUJ Online Programs</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-bold text-lg mb-2">Undergraduate Programs (BBA, BCA, B.Com)</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>10+2 or equivalent from recognized board</li>
              <li>Minimum 40% aggregate marks</li>
              <li>Age: No upper age limit</li>
              <li>Open for all streams (Science, Commerce, Arts)</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-lg mb-2">Postgraduate Programs (MBA, MCA, M.Com, MA)</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Bachelor's degree from UGC-recognized university</li>
              <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
              <li>MCA requires Mathematics/Statistics in 10+2 or graduation</li>
              <li>Working professionals and fresh graduates both eligible</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-6">Simple Admission Process</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold mb-1">Fill Application Form</h4>
              <p className="text-gray-600">Complete online application with basic details and program preference</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold mb-1">Document Verification</h4>
              <p className="text-gray-600">Upload educational certificates, ID proof, and photographs for verification</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold mb-1">Fee Payment</h4>
              <p className="text-gray-600">Pay admission fee online with flexible EMI options available</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold mb-1">Enrollment Confirmation</h4>
              <p className="text-gray-600">Receive admission confirmation and access to LMS portal within 48 hours</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all cursor-pointer"
        >
          Start Your Application Now
        </button>
      </div>
    </div>
  </div>


{/* Fee Structure Section */}
<section id='Fees' className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-4">
      Affordable <span className="text-orange-600">Fee Structure</span>
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Manipal University Jaipur Online offers affordable and transparent tuition fees, along with EMI and installment options to make education accessible for all.
    </p>
    
    {/* Fee Table */}
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Program</th>
              <th className="px-6 py-4 text-left font-semibold">Duration</th>
              <th className="px-6 py-4 text-left font-semibold">Approx. Fee</th>
              <th className="px-6 py-4 text-left font-semibold">Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MBA</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,75,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MCA</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,58,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online M.Com</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,08,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
              
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online B.Com</td>
              <td className="px-6 py-4 text-gray-600">3 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,08,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
              
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online BBA</td>
              <td className="px-6 py-4 text-gray-600">3 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,35,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online BCA</td>
              <td className="px-6 py-4 text-gray-600">3 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,35,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
            </tr>
            <tr className="hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MA(Economics)</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹80,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
              </tr>
               <tr className="hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MAJMC</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,40,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    {/* Additional Information */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">💰</span>
          Scholarship Opportunities
        </h3>
        <p className="text-gray-600 mb-4">
          MUJ Online provides scholarships for merit-based students, corporate employees, and defense personnel.
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Merit-based scholarships up to 30%
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Corporate employee discounts
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Defense personnel special rates
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Alumni and referral benefits
          </li>
        </ul>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          What's Included
        </h3>
        <p className="text-gray-600 mb-4">
          All fees include access to learning materials, LMS tools, live sessions, and assessments.
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Complete study materials and e-books
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Access to Learning Management System
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Live interactive sessions
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Assessment and examination fees
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Career guidance and placement support
          </li>
        </ul>
      </div>
    </div>
    
    <div className="text-center mt-8">
      <button 
        onClick={() => setOpenModal({ type: 'enquiry' })}
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        Get Detailed Fee Structure & EMI Options
      </button>
    </div>
  </div>
</section>

{/* Admission Process Section */}
<section id="AdmissionProcess" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Admission Process</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online follows a streamlined and 100% digital admission process.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Visit the Official Website</h4>
              <p className="text-gray-600">Access the official Manipal Online website and navigate to the admissions section.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Choose Your Program</h4>
              <p className="text-gray-600">Select your preferred online degree (MBA, BBA, BCA, MCA, BA, or M.Com) from the available options.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Fill Registration Form</h4>
              <p className="text-gray-600">Complete the online registration form with valid personal and academic details.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Upload Documents</h4>
              <p className="text-gray-600">Upload academic documents, ID proof, and a recent photograph for verification.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Pay Program Fee</h4>
              <p className="text-gray-600">Complete the program fee payment securely online with flexible EMI options.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Receive Confirmation</h4>
              <p className="text-gray-600">Get instant confirmation and access to your student dashboard within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick & Easy Process</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">100% Digital Process</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">No Entrance Exam Required</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">Flexible Payment Options</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Processing Time</h4>
          <p className="text-gray-600 text-sm">
            The entire process takes only a few minutes, and MUJ Online's dedicated support team ensures a smooth enrollment journey for all students, both domestic and international.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Start Your Application Now
        </button>
      </div>
    </div>
  </div>
</section>

{/* Upcoming and Ongoing Sessions Section */}
<section id="Sessions" className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Details of <span className="text-orange-600">Upcoming and Ongoing Sessions</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online conducts multiple batches each year for both UG and PG programs.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">January 2026 Session</h4>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Applications Open</span>
            </div>
            <p className="text-gray-600 text-sm">Start your academic journey with comprehensive support and guidance.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">April 2026 Session</h4>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Enrollments in Progress</span>
            </div>
            <p className="text-gray-600 text-sm">Mid-year intake with flexible learning schedules.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">July 2026 Session</h4>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Early Bird Discounts Available</span>
            </div>
            <p className="text-gray-600 text-sm">Special offers and scholarships for early applicants.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">October 2026 Session</h4>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Pre-registration Soon</span>
            </div>
            <p className="text-gray-600 text-sm">End-year enrollment for planning ahead.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Sessions</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">📚</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Orientation Programs</h4>
              <p className="text-gray-600 text-sm">Comprehensive orientation sessions for new students</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🎥</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Live Classes</h4>
              <p className="text-gray-600 text-sm">Interactive live sessions with expert faculty</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">📋</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Project-based Assignments</h4>
              <p className="text-gray-600 text-sm">Hands-on learning through practical projects</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🔄</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Mid-term Enrollment</h4>
              <p className="text-gray-600 text-sm">Learners can join mid-term based on program eligibility</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Learning Continuity</h4>
          <p className="text-gray-600 text-sm">
            Manipal Online ensures learning continuity through its self-paced modules and accessible LMS platform, 
            allowing students to catch up and stay on track regardless of when they join.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Enroll in Current Session
        </button>
      </div>
    </div>
  </div>
</section>
</section>
  )
}

export default AdmissionFeesProcessSessions