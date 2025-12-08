import React from 'react'
import optimizeCloudinary from '@/utils/optimizeCloudinary'
import { useState } from 'react'
const FaqReviewsHiring = () => {
  const faqData = [
    {
      question: "Is Manipal University Jaipur Online approved by UGC?",
      answer:
        "Yes, Manipal University Jaipur Online is UGC-entitled and NAAC A+ accredited. All online degrees are valid and globally recognized."
    },
    {
      question: "Are the online MBA and online BCA degrees equivalent to regular programs?",
      answer:
        "Yes, all Manipal Online degrees hold the same recognition as traditional on-campus programs."
    },
    {
      question: "Can international students apply for Manipal Online programs?",
      answer:
        "Yes, students from over 50 countries enroll in Manipal University Jaipur Online each year."
    },
    {
      question: "What learning support does MUJ Online offer?",
      answer:
        "Students receive access to 24×7 LMS, live lectures, recorded classes, digital library, and dedicated student support teams."
    },
    {
      question: "Does Manipal Online provide placement assistance?",
      answer:
        "Yes, MUJ Online has a strong placement and career guidance cell offering job connections and industry mentorship."
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      if (openIndex === index) setOpenIndex(null);
      else setOpenIndex(index);
    };
  
    return (
    <div>
         <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about Manipal University Jaipur Online Programs
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <span className="text-lg font-bold">{openIndex === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 sm:px-8 sm:py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Manipal Reviews Section */}
<section id="ManipalReviews" className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Manipal Reviews</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online consistently ranks among India's best online universities by NIRF, India Today, and QS World Rankings. 
        Learners and employers recognize Manipal Online for its global-standard education, digital excellence, and employability focus.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Recognition & Rankings</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🏆</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">NIRF Rankings</h4>
                <p className="text-gray-600 text-sm">Consistently ranked among top universities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">📰</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">India Today Rankings</h4>
                <p className="text-gray-600 text-sm">Recognized for academic excellence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🌍</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">QS World Rankings</h4>
                <p className="text-gray-600 text-sm">Global recognition for quality education</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Impact</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">👥</span>
            </div>
            <span className="text-gray-700 font-semibold">200,000+ Alumni Network</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🌐</span>
            </div>
            <span className="text-gray-700 font-semibold">Growing International Recognition</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🎯</span>
            </div>
            <span className="text-gray-700 font-semibold">Digital Excellence Focus</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💼</span>
            </div>
            <span className="text-gray-700 font-semibold">Employability Focus</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Leading Digital Transformation</h4>
          <p className="text-gray-600 text-sm">
            With over 200,000 alumni and growing international recognition, MUJ Online stands at the forefront of digital transformation 
            in distance education and online degrees.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Join the Manipal Legacy
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Professional Hiring Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top Companies</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join the ranks of successful graduates working at leading organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png", "/images/apple.jpg","https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp"].map((src, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="aspect-square flex items-center justify-center">
                    <Image 
                      width={100} 
                      height={100} 
                      src={optimizeCloudinary (src)} 
                      alt="Company" 
                      loading="lazy" 
                      className="h-12 sm:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Join Them?</h3>
              <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Start your journey with Manipal University Online and unlock endless career opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  Apply Now
                </button>
              
              </div>
            </div>
          </div>
        </div>
        
        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
            universityName="Manipal University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </section>
    </div>
  )
}

export default FaqReviewsHiring