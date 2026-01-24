import React from 'react'
import Image from 'next/image'
import { optimizeCloudinary } from '@/utils/cloudinary'
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal'
import { OpenModalState } from '../../../../types/Modal'
const HiringPartners = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top Companies</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Join the ranks of successful graduates working at leading organizations worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png", "/images/apple.jpg","https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp"].map((src, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="aspect-square flex items-center justify-center">
                      <Image 
                        width={100} 
                        height={100} 
                        src={optimizeCloudinary(src)} 
                        alt="Company" 
                        className="h-12 sm:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Final CTA */}
            <div className="text-center mt-8 sm:mt-12 md:mt-16">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Join Them?</h3>
                <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Start your journey with Manipal Academy of Higher Education Online and unlock endless career opportunities
                </p>
                <div className="mb-4 flex gap-4 justify-center flex-wrap">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-1/2 bg-white text-orange-600 font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base md:text-lg"
                  >
                    Apply Mahe Online
                  </button>
                  <button 
                    onClick={() => setOpenModal({ type: 'enquire' })}
                    className="w-1/2 bg-white text-orange-600 font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base md:text-lg"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
          
         
        </section>
  )
}

export default HiringPartners