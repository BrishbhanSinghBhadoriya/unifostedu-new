import React from 'react'
import Image from 'next/image'
import { optimizeCloudinary } from '@/utils/cloudinary'
import { OpenModalState } from '../../../../types/Modal'

const Accreditations = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5  md:gap-6 lg:gap-8">
              {[
                {
                  icon: '⏱️',
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with recorded lectures and live sessions'
                },
                {
                  icon: '🏆',
                  title: 'NAAC A+ Accredited',
                  description: 'Globally recognized degrees with UGC entitlement'
                },
                {
                  icon: '💼',
                  title: 'Career Support',
                  description: '100% placement assistance and career guidance'
                },
                {
                  icon: '💰',
                  title: 'Easy Financing',
                  description: 'No-cost EMI options and scholarships available'
                }
              ].map((feature, i) => (
                <div key={i} className="group text-center">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="text-center mb-4 mt-4">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply now</span>
                </button>
            </div>
          </div>
           <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
                      <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 font-queens">
                          Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditations</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                          Recognized by leading accreditation bodies and ranked among India's top universities
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
                        {[
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp', title: 'NAAC A++ Accredited University' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp', title: 'UGC-entitled Online Degrees' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp', title: "Amongst India's top 60 Universities in 2025" },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Norms Compliant' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp', title: 'Globally Recognized Online Degrees' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp', title: 'Member of ACU' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icas_wyryup.webp', title: 'ICAS Canada' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/iqas_bieryy.webp', title: 'IQAS' },
                        ].map((item, i)=>(
                          <div key={i} className="group">
                            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 sm:p-4 md:p-6">
                                <Image 
                                  src={optimizeCloudinary(item.img)} 
                                  alt={item.title} 
                                  width={400} 
                                  height={260} 
                                  className="w-full h-full max-h-16 sm:max-h-24 md:max-h-32 object-contain group-hover:scale-110 transition-transform duration-300" 
                                />
                              </div>
                              <div className="px-3 sm:px-4 py-3 sm:py-4 md:py-5 flex-1 flex items-center">
                                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors duration-300 w-full">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-8 sm:mt-12">
                          <button 
                            onClick={() => setOpenModal({ type: 'apply' })}
                            className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                          >
                            <span className="hidden sm:inline">Apply Now</span>
                            <span className="sm:hidden">Apply</span>
                          </button>
                      </div>
                    </div>
                  </section>
        </section>
  )
}

export default Accreditations