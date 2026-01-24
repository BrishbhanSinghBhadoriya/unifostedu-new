import React from 'react'
import {motion} from 'framer-motion'
import { OpenModalState } from '../../../../types/Modal'
const AdmissionProcess = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
   <section>

         <div>
           <section className="relative mt-01 bg-white">
             {/* Decorative Blobs */}
             <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
         
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               {/* Section Header */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="text-center mb-8 sm:mb-12 md:mb-16"
               >
                 <h2 id="AdmissionProcess" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
                   Admission Process
                 </h2>
                 <div className="w-16 sm:w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
                 <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
                   A simple, transparent, and student-friendly admission process
                   designed to help you begin your learning journey smoothly.
                 </p>
               </motion.div>
         
               {/* 4-Step Process */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200"
               >
                 <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-12 text-center">
                   Easy 4-Step Admission Process
                 </h3>
         
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 relative">
                   {/* Connecting Line */}
                   <div className="hidden md:block absolute top-20 sm:top-24 md:top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 to-orange-500 z-0 rounded-full"></div>
         
                   {[
                     {
                       number: "01",
                       title: "Choose Your MAHE Online Program",
                       desc: "Select from MAHE Online MBA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, or MAHE Online BCom.",
                     },
                     {
                       number: "02",
                       title: "Fill Out the Online Application Form",
                       desc: "Complete the application form with your personal and academic details.",
                     },
                     {
                       number: "03",
                       title: "Pay the Program Fee Online",
                       desc: "Make secure online payment through available payment options.",
                     },
                     {
                       number: "04",
                       title: "Get Confirmation & Start Learning",
                       desc: "Receive confirmation and student login credentials to begin your journey.",
                     },
                   ].map((step, index) => (
                     <motion.div
                       key={index}
                       className="text-center relative z-10"
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: index * 0.3 }}
                     >
                       <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 text-white shadow-2xl">
                         <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{step.number}</span>
                         <span className="text-[10px] xs:text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                       </div>
                       <h4 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2">
                         {step.title}
                       </h4>
                       <p className="text-gray-700 text-xs sm:text-sm md:text-base px-2">{step.desc}</p>
                     </motion.div>
                   ))}
                 </div>
               </motion.div>
               <div className="text-center mt-6 mb-4 sm:mt-8">
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
         </div>

          </section>
  )
}

export default AdmissionProcess