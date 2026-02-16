import React from 'react';
import Image from 'next/image';
import { optimizeCloudinary } from '@/utils/cloudinary';

type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const PlacementRecordPartnersReview: React.FC<IntroducationProps> = ({ setOpenModal }) => {

    const testimonials = [
    {
      name: "Priya Sharma",
      course: "MBA",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763101215/Sneha_tmk0yf.jpg",
      text: "The online MBA program at SMU helped me transition from a technical role to a management position. The flexible schedule allowed me to continue working while upgrading my skills."
    },
    {
      name: "Rahul Verma",
      course: "MCA",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102290/amit_laq7ku.jpg",
      text: "As a working professional in IT, SMU's MCA program provided me with the latest technical knowledge without disrupting my career. The faculty support was exceptional."
    },
    {
      name: "Anita Patel",
      course: "B.Com",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102177/riya1_qsbhqy.jpg",
      text: "Pursuing B.Com from SMU Online was the best decision. The affordable fees and quality education helped me build a strong foundation in commerce while managing my family responsibilities."
    },
    {
      name: "Deepak Singh",
      course: "MA Political Science",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102223/pritik_i2s3ch.jpg",
      text: "The MA program at SMU provided me with deep insights into political science. The online resources and faculty guidance were instrumental in my academic growth."
    }
  ];
  return (
    <section id="placement-record" className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">
    {/* Placement Record Section */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Placement Record
      </h2>
      <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
        With over <span className="font-semibold text-black">two decades of academic excellence</span>, 
        SMU Online maintains an <span className="font-semibold text-black">85–90% placement success rate</span>.
      </p>
    </div>

    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl border border-gray-100 p-8 mb-12 hover:shadow-lg transition-all">
      <h3 className="text-2xl font-semibold text-black mb-6 text-center">
        Highlights
      </h3>
      <ul className="space-y-4 text-lg text-gray-800">
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Average package for MBA graduates:</strong> ₹6–8 LPA</span>
        </li>
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Top package:</strong> ₹18 LPA (International role)</span>
        </li>
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Leading recruiters:</strong> BFSI, IT, Consulting, and E-commerce sectors</span>
        </li>
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Career support:</strong> Resume writing, LinkedIn optimization, and mock interview training</span>
        </li>
      </ul>

      <p className="text-gray-700 mt-8 text-lg leading-relaxed text-center">
        Graduates of <span className="font-semibold text-black">Sikkim Manipal University Online</span> 
        are employed across <span className="font-semibold text-black">India, the Middle East, Southeast Asia,</span> 
        and <span className="font-semibold text-black">Europe</span> — a testament to the global recognition 
        of SMU's online degrees.
      </p>
    </div>

    
  </div>
   <section id="student-review" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                  Success <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Stories</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Hear from our alumni who have transformed their careers with SMU Online
                </p>
              </div>
  
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-start gap-6">
                        {/* Left Column: Avatar and Details */}
                        <div className="flex-shrink-0 w-40 text-center">
                          <div className="relative w-32 h-32 mx-auto">
                            {testimonial.image ? (
                              <Image
                                src={optimizeCloudinary(testimonial.image)}
                                alt={testimonial.name}
                                fill
                                className="rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-[#f26722] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            )}
                          </div>
                          <div className="mt-4">
                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-[#f26722] font-semibold text-sm">
                              {testimonial.course}
                            </p>
                          </div>
                        </div>
                        
                        {/* Right Column: Quote */}
                        <div className="flex-1">
                          <div className="mb-4"> 
                            <svg className="w-8 h-8 text-[#f26722] mb-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                            <p className="text-gray-700 text-lg leading-relaxed italic">
                              "{testimonial.text}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <section id="placement-partners" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                            Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Top Companies</span>
                          </h2>
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join the ranks of successful graduates working at leading organizations worldwide
                          </p>
                        </div>
                        
            
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"> 
                          {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png", "/images/apple.jpg","https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp"].map((src, i) => (
                            <div key={i} className="group">
                              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className="aspect-square flex items-center justify-center"> 
                                  <Image 
                                    width={100} 
                                    height={100} 
                                    src={ optimizeCloudinary(src)} 
                                    alt="Company" 
                                    className="h-12 sm:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
            
                        {/* Final CTA */}
                        <div className="text-center mt-16">
                          <div className="bg-gradient-to-r from-orange-500 to-[#f26722] rounded-3xl p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Them?</h3>
                            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                              Start your journey with Sikkim Manipal University Online and unlock endless career opportunities
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                              <button 
                                onClick={() => setOpenModal({ type: 'apply' })}
                                className="bg-white text-orange-600 font-semibold px-12 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                              >
                                Apply Now
                              </button>
                              <button 
                                onClick={() => setOpenModal({ type: 'enquire' })}
                                className="border-2 border-white text-white font-semibold px-12 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
                              >
                                Download Brochure
                              </button>
                            </div>
                          </div>
                         </div>
                      </div>
                    
                    </section>
          </section>
</section>
  )
}

export default PlacementRecordPartnersReview
