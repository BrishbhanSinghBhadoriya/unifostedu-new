import React from 'react';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const Review: React.FC<IntroducationProps> = ({ setOpenModal }) => {

  return (
   <section id="reviews" className="bg-gradient-to-b from-black-50 via-white to-black-50 py-16 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      {/* Reviews Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sikkim Manipal University Reviews
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Sikkim Manipal University Online has received consistent appreciation from students, alumni,
          and employers alike for its academic quality and career outcomes.
        </p>
      </div>
  
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Rating Cards */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all border border-gray-100">
          <h3 className="text-4xl font-bold text-black-700 mb-2">4.6/5</h3>
          <p className="text-gray-700 font-medium">Google Rating</p>
        </div>
  
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all border border-gray-100">
          <h3 className="text-4xl font-bold text-black-700 mb-2">96%</h3>
          <p className="text-gray-700 font-medium">Student Satisfaction</p>
        </div>
  
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all border border-gray-100">
          <h3 className="text-4xl font-bold text-black-700 mb-2">85%+</h3>
          <p className="text-gray-700 font-medium">Placement Record (Annually)</p>
        </div>
      </div>
  
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Strengths Recognized by Students
        </h4>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li className="flex items-start">
            <span className="text-black-600 text-xl mr-2">•</span>
            Responsive faculty and mentorship support.
          </li>
          <li className="flex items-start">
            <span className="text-black-600 text-xl mr-2">•</span>
            Industry-relevant course content.
          </li>
          <li className="flex items-start">
            <span className="text-black-600 text-xl mr-2">•</span>
            Flexible schedules and affordable fee structure.
          </li>
          <li className="flex items-start">
            <span className="text-black-600 text-xl mr-2">•</span>
            Efficient online examination system.
          </li>
        </ul>
      </div>
  
      <div className="text-center mt-12">
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          SMU Online's reputation as a top online university in India continues to grow,
          making it a preferred choice for learners seeking career-oriented online education.
        </p>
         <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </button>
      </div>
  
      {/* Conclusion Section */}
      <div id="conclusion" className="mt-20 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Conclusion
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Sikkim Manipal University Online (SMU Online) exemplifies the evolution of higher education through
          digital innovation. With UGC-approved online degrees, interactive learning systems, and robust placement
          assistance, it empowers learners to pursue education without boundaries.
        </p>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Whether it's an <span className="font-semibold text-black-700">Online MBA</span>, 
          <span className="font-semibold text-black-700"> Online MCA</span>, 
          <span className="font-semibold text-black-700"> Online BA</span>, or 
          <span className="font-semibold text-black-700"> Online BCom</span>, SMU Online ensures you gain academic excellence,
          flexibility, and career readiness — all under one trusted name.
        </p>
        <p className="text-gray-800 text-lg font-medium leading-relaxed">
          By choosing <span className="font-semibold text-black-700">Sikkim Manipal University Online</span>, 
          you invest in future-focused learning that aligns with your professional aspirations and global opportunities.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Review
