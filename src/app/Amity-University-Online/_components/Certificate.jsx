import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const Certificate = () => {
  return (
    <div>
        <section className="py-16 bg-white">
                      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
                        <motion.div
                          className="flex-1"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.7 }}
                          viewport={{ once: true }}
                        >
                          <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                            <Image
                              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amicri_t0imga.webp"
                              alt="Amity University Certificate"
                              width={500}
                              height={350}
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                        <motion.div
                          className="flex-1"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.7 }}
                          viewport={{ once: true }}
                        >
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[Poppins]">
                            Globally Recognized Online Degree
                          </h2>
                          <p className="mb-6 text-gray-600 text-lg">
                            Amity University online programs offer daily live classes,
                            career assistance, and hands-on LMS learning with Ivy League
                            tie-ups.
                          </p>
        
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">
                            Benefits of Online Amity University
                          </h3>
                          <ul className="space-y-3">
                            {[
                              "Daily LIVE Classes by International Faculty",
                              "Career Assistance & Virtual Job Fairs",
                              "International Collaboration with Ivy League",
                              "Immersive Learning via World-Class LMS",
                              "Industry-Relevant Curriculum",
                              "Flexible Learning Schedule",
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                </div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => setOpenModal({ type: "enquiry" })}
            size="lg"
            className="bg-yellow-400 text-black border border-black 
                       hover:text-white hover:bg-[#452971] 
                       text-sm sm:text-base px-6 sm:px-8 py-2.5 
                       rounded-lg shadow-md transition-all duration-300
                       hover:scale-105 cursor-pointer"
          >
            <span className="hidden sm:inline">Enquire Now</span>
            <span className="sm:hidden">Enquire</span>
          </Button>
        </div>
        
                    </section>
    </div>
  )
}

export default Certificate