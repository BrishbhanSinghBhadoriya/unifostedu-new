import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { optimizeCloudinary } from '@/utils/cloudinary'
import { OpenModalState } from '../../../../types/Modal'
const FooterManipal = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden mt-0 lg:ml-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
              {/* Company Info */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center bg-white gap-3 mb-4">
                    <Image src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg")} alt="Manipal" className="h-10 w-auto"
                    width={200}
                    height={200}
                    loading='lazy'
                    />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    UGC-entitled, NAAC A+ accredited online degrees designed for modern learners. 
                    Transform your career with globally recognized programs.
                  </p>
                  
                  {/* Social Media */}
                  
                </motion.div>
              </div>

              {/* Programs */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-bold mb-4 text-lg">Programs</h4>
                  <ul className="space-y-3 text-sm">
                    {['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com', 'MAJMC'].map((program, i) => (
                      <li onClick={() => setOpenModal({ type: 'apply' })} key={i} className="hover:text-orange-400 transition-colors cursor-pointer">
                        {program}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Resources */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
                  <ul className="space-y-3 text-sm">
                    {[
                      { name: 'Admissions', href: '#Admission' },
                      { name: 'Scholarships', href: '#' },
                      { name: 'Placements', href: '#' },
                      { name: 'FAQs', href: '#Faq' },
                      { name: 'Quick Comparison', href: '#QuickComparison' },
                      { name: 'Fees Structure', href: '#Fees' }
                    ].map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="hover:text-orange-400 transition-colors">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400">📞</span>
                      </div>
                      <span className="text-sm">+91 7042646766</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400">✉️</span>
                      </div>
                      <span className="text-sm">info@unifostedu.com</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              </div>
            </div>
          {/* Popular Programs & Specializations - MUJ */}
            {/* Popular Programs Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-8 mb-8"
            >
              <h4 className="text-lg font-bold mb-6 text-white text-center">
                Popular Programs & Specializations – Manipal University Jaipur (MUJ)
              </h4>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  // UG Courses
                  "BBA General - MUJ Online",
                  "BBA Finance & Accounting - MUJ Online",
                  "BBA Digital Marketing - MUJ Online",
                  "BBA Marketing -MUJ Online",
                  "BBA Entrepreneurship & Family Business - MUJ Online",
                  "BBA Human Resource Management - MUJ Online",
                  "BBA Data Analytics - MUJ Online",
                  "BBA Retail & E-commerce Management - MUJ Online",
                  "BCA General - MUJ Online",
                  "BCA Data Science & Analytics - MUJ Online",
                  "BCA Cyber Security - MUJ Online",
                  "BCA Cloud Computing - MUJ Online",
                  "B.Com General - MUJ Online",
                  // PG Courses
                  "MBA General - MUJ Online",
                  "MBA HR & Finance - MUJ Online",
                  "MBA Finance & Marketing - MUJ Online",
                  "MBA Marketing & HR - MUJ Online",
                  "MBA Marketing & Business Analytics - MUJ Online",
                  "MBA Finance & Business Analytics - MUJ Online",
                  "MBA Project Management - MUJ Online",
                  "MBA Retail Management & Quick Commerce - MUJ Online",
                  "MBA Artificial Intelligence in Banking & Finance - MUJ Online",
                  "MCA AI & Data Science - MUJ Online",
                  "MCA Cyber Security - MUJ Online",
                  "MCA Cloud Computing - MUJ Online",
                  "MCA Comprehensive Emerging Technologies - MUJ Online",
                  "MCA Artificial Intelligence & Machine Learning - MUJ Online",
                  "M.Com General - MUJ Online",
                  "MA Economics - MUJ Online",
                  "MA Journalism & Mass Communication - MUJ Online"
                ].map((keyword, index) => (
                  <span
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                    title={keyword}
                    onClick={() => {
                          setOpenModal({ type: "apply" });
                        }}
                  >
                    {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8 pb-6 text-center text-sm text-gray-400 border-t border-white/10"
            >
              <p>&copy; {new Date().getFullYear()} Manipal University Online. All rights reserved.</p>
              <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
            </motion.div>
          </div>
        </footer>
  )
}

export default FooterManipal