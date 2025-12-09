import React from 'react'


const ComparisonStudentReviews = () => {
      const testimonials = [
        {
          name: "Ananya Sharma",
          course: "Online MBA",
          university: "MUJ",
          text: "Manipal Online gave me the flexibility to pursue my MBA while managing my job. The digital platform and faculty support are exceptional."
        },
        {
          name: "Rahul Verma",
          course: "Online BCA",
          university: "MUJ",
          text: "The course content and virtual labs helped me upskill and transition into an IT role successfully."
        },
        {
          name: "Meera Joshi",
          course: "Online BBA",
          university: "MUJ",
          text: "The online BBA from Manipal University Jaipur Online helped me understand business fundamentals and boosted my confidence."
        },
        {
          name: "Priya Singh",
          course: "Online MCA",
          university: "MUJ",
          text: "The comprehensive curriculum and practical projects prepared me well for my career in software development."
        }
      ];
  return (
    <section id='QuickComparison' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-3xl font-bold text-center mb-12">
      <span className="text-orange-600">Online vs Regular</span> Degree Comparison
    </h3>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Online Manipal</th>
            <th className="p-4 text-center">Regular Campus</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['UGC Recognition', '✅ Yes', '✅ Yes'],
            ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
            ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
            ['Location', '✅ From Anywhere', '❌ Campus Only'],
            ['Cost', '✅ More Affordable', '❌ Higher Fees'],
            ['Placement Support', '✅ 100% Assistance', '✅ Available']
          ].map(([feature, online, regular], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-4 font-semibold">{feature}</td>
              <td className="p-4 text-center">{online}</td>
              <td className="p-4 text-center">{regular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
      
      {/* Professional Testimonials Section */}
      <section id="StudentReviews" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Student <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Reviews</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Students across the globe praise Manipal Online for its technology-driven learning, professional mentorship, and strong placement assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-1 border-2 border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-orange-500 mx-auto sm:mx-0 mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-sm sm:text-base text-orange-600 font-semibold">
                          {testimonial.course}, {testimonial.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </section> 
  )
}

export default ComparisonStudentReviews