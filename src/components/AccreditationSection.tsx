// components/AccreditationSection.jsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AccreditationSectionProps } from "types/AccreditationSection";

const AccreditationSection:React.FC<AccreditationSectionProps> = ({
  title = "Education with Global Recognition",
  description = "Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide.",
  stats = [], 
  benefits = [], 
  accreditations = [], 
  internationalRecognition = [

  ], 
  trustText = "Trusted by 25,000+ Students",
  successStories = [], 
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        <div className="lg:w-3/4">
        
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          </motion.div>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-xl text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-4xl font-bold  mb-2`}>{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Benefits */}
          {benefits.length > 0 && (
            <motion.div
              className="bg-gradient-to-r from-gray-800 to-purple-800 rounded-2xl p-8 text-white mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 font-[Poppins] text-center">Benefits of Our Accredited Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0" dangerouslySetInnerHTML={{ __html: benefit.iconSvg }} />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-sm opacity-90">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              
            </motion.div>
          )}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-[Poppins] text-center">Why Accreditation Matters</h3>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Accreditation serves as a vital quality assurance mechanism in higher education. It validates that an institution meets rigorous standards of excellence in:</p>
          
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Curriculum quality</strong> - Ensuring programs are relevant, current, and comprehensive</li>
            <li><strong>Faculty qualifications</strong> - Maintaining high standards for teaching staff expertise</li>
            <li><strong>Student support services</strong> - Providing adequate resources for student success</li>
            <li><strong>Educational outcomes</strong> - Demonstrating measurable student learning and achievement</li>
            <li><strong>Institutional integrity</strong> - Upholding ethical practices and financial stability</li>
          </ul>
          
          <p className="mt-4">Our multiple accreditations demonstrate our commitment to maintaining these high standards across all our programs and services.</p>
        </div>
          
        </div>
       
        {/* Sidebar */}
        <motion.div
          className="lg:w-1/4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center font-[Poppins] border-b border-gray-200 pb-3">
              Accreditations & Recognitions
            </h3>

            <div className="space-y-4">
              {accreditations.map((item, i) => (
                <div key={i} className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 border border-gray-100">
                  <div className="h-8 w-8 relative mr-3 flex-shrink-0">
                    <Image src={item.src} alt={item.alt} width={100} height={100} loading="lazy" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
              
            

            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-700">{trustText}</span>
              </div>
              <p className="text-xs text-gray-500">Our accreditations ensure quality education recognized globally</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccreditationSection;
