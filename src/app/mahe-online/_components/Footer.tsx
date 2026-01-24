import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { OpenModalState } from '../../../../types/Modal'
const Footer = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
   <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className=" bg-white flex items-center gap-4 mb-6">
                  <Image src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal" className="h-12 w-auto" />
                 
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled, NAAC A+ accredited online degrees designed for modern learners seeking career advancement.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">📞</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">💬</span>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'BBA', 'MCA', 'M.Com', 'B.Com', 'MA JMC'].map((program, i) => (
                    <li key={i}>
                      <a onClick={() => setOpenModal ({ type: 'apply' })} className="text-gray-400 hover:text-orange-400 transition-colors cursor pointer">
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
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+91 7042646766</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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
                                      Popular Programs & Specializations –Manipal Academy of Higher Education Online(MAHE) "  
                                    </h4>
                      
                                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                      {[
                                         "BBA Finance & Accounting - MAHE Online",
                                         "BBA Digital Marketing - MAHE Online",
                                         "BBA Enterepreneurship Management & Family Business - MAHE Online",
                                         "BBA Human Resource Management - MAHE Online",
                                         "BBA Data Analytics - MAHE Online",
                                         "BBA Retail & E-commerce Management - MAHE Online",


                                         "B.Com General - MAHE Online",

                                         "MBA Human Resource Management and Finance - MAHE Online",
                                         "MBA Finance and Marketing - MAHE Online",
                                         "MBA Marketing and Human Resource Management - MAHE Online",
                                         "MBA Marketing and Business Analytics - MAHE Online",
                                         "MBA Finance and Business Analytics - MAHE Online",
                                         "MBA Human Resource and Business Analytics - MAHE Online",
                                         "MBA Project Management - MAHE Online",
                                         "MBA Retail Management and Quick Commerce - MAHE Online",
                                         "MBA Artificial Intelligence Banking and Finance - MAHE Online",
                                         "MBA Other Fields (15+) - MAHE Online",

                                         "MCA AI & Data Science - MAHE Online",
                                        "MCA Cyber Security - MAHE Online",
                                          "MCA Cloud Computing - MAHE Online",
                                        "MCA Comprehensive Emerging Technologies - MAHE Online",
                                        "MCA AI & ML - MAHE Online",

                                         "M.Com General - MAHE Online",

                                         "MA Economics - MAHE Online",
                                         "MA Journalism and Mass Communication - MAHE Online"
                                         ]

                                    .map((keyword, index) => (
                                        <span
                                          key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                                          className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                                          title={keyword}
                                        >
                                          {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                                        </span>
                                      ))}
                                    </div>
                                  </motion.div>
                      

            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Manipal Academy of Higher Education Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
  )
}

export default Footer