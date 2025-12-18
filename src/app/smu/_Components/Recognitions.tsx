import { optimizeCloudinary } from '@/utils/cloudinary'
import React from 'react'
import Image from 'next/image'

const Recognitions = () => {
  return (
   <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '⏱️',
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with recorded lectures and live sessions'
                },
                {
                  icon: '🏆',
                  title: 'UGC Approved',
                  description: 'Globally recognized degrees with UGC entitlement'
                },
                {
                  icon: '💼',
                  title: 'Career Support',
                  description: 'Comprehensive placement assistance and career guidance'
                },
                {
                  icon: '💰',
                  title: 'Affordable Education',
                  description: 'Quality education at competitive fee structures'
                }
              ].map((feature, i) => (
                <div key={i} className="group text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-[#f26722] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section id="recognitions" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                          Recognitions & <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Accreditations</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Recognized by leading accreditation bodies and regulatory authorities in India
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp', title: 'UGC Approved Online Degrees' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Recognized Programs' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1763124771/NAAC-A_g3pb34.webp', title: 'NAAC Accredited University' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp', title: 'Ranked Among Top Universities' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327203/IIRF_lrhmji.png', title: 'Top private university in North East' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp', title: 'Member of AIU' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp', title: 'Internationally Recognized' },
                          { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/The-Week_c0snnl.png', title: 'Amongst Top 10 Multidisciplinary Universities in East Zone' },
                        ].map((item, i)=>(
                          <div key={i} className="group">
                            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                                <Image 
                                  src={optimizeCloudinary(item.img)} 
                                  alt={item.title} 
                                  width={400} 
                                  height={260} 
                                  className="w-full h-full max-h-24 sm:max-h-32 object-contain group-hover:scale-110 transition-transform duration-300" 
                                />
                              </div>
                              <div className="px-4 py-5">
                                <p className="text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-red-600 transition-colors duration-300">
                                  {item.title} 
                                </p>
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

export default Recognitions