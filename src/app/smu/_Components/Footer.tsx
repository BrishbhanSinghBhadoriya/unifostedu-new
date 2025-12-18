import { optimizeCloudinary } from '@/utils/cloudinary'
import React from 'react'
import Image from 'next/image'

import { FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'  
const Footer = ({setOpenModal, openModal}) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <Image src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg")} alt="SMU" width={100}
                    height={100}className="h-12 w-auto" />
                  <span className="font-queens text-2xl text-white">Online SMU</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled online degrees from Sikkim Manipal University designed for modern learners seeking career advancement.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#f26722] transition-colors cursor-pointer">
                     <FaPhone className="text-orange-500 rotate-90" />
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#f26722] transition-colors cursor-pointer">
                    <span className="text-lg">💬</span>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'MCA', 'B.Com', 'B.A.', 'M.Com', 'M.A.'].map((program, i) => (
                    <li key={i}>
                      <a onClick={() => setOpenModal({ type: 'enquary' })} className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-3">
                  {['Admissions', 'Scholarships', 'Placements', 'FAQs', 'Contact Us'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Get Started</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#f26722] rounded-full flex items-center justify-center">
                       <FaPhone className="text-black-500 rotate-90" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+91 7042646766</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
              {/* Popular Programs Section */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="border-t border-white/10 pt-8 mb-8"
                          >
                            <h4 className="text-lg font-bold mb-6 text-white text-center">
                              Popular Programs & Specializations – NMIMS Global Online
                            </h4>
              
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                              {[
                                "BA English + Sociology + Political Science - SMU Online",
                                "B.Com General - SMU Online",
                                "MBA Dual Specialization (Marketing, Finance, HR, Systems, Operations and Supply Chain Management, Healthcare Management) - SMU Online",
                                "MCA General - SMU Online",
                                "MA English / Sociology / Political Science - SMU Online",
                                "M.Com General - SMU Online"
                                ]
                            .map((keyword, index) => (
                                <span
                                  key={index}
                                  onClick={() => setOpenModal({ type: 'apply' })}
                                  className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#7b1fa2] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-purple-500"
                                  title={keyword}
                                >
                                  {keyword.length > 30 ? `${keyword.substring(0, 30)}...` : keyword}
                                </span>
                              ))}
                            </div>
                          </motion.div>
              
                         
            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Sikkim Manipal University Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
  )
}

export default Footer