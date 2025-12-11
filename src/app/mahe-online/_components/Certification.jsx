import React from 'react'
import Image from 'next/image'
import { optimizeCloudinary } from '@/utils/cloudinary'
import {motion} from 'framer-motion'


const Certification = ({setOpenModal, openModal}) => {
  return (
  <section className="bg-[#002d5f] text-white py-10 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div className="md:w-1/2 w-full">
                <Image width={600} height={400} src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/mahe-certi_dwtj6m.webp")} alt="Certificate" className="rounded-xl sm:rounded-2xl shadow-2xl w-full" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Recognized Online Degree from Manipal Academy of Higher Education</h2>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
                  Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
                </p>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    UGC & AICTE Recognized Degrees
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    Daily Live & Recorded Classes
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    Global Collaborations with Ivy-League Institutions
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    100% Placement & Internship Support
                  </li>
                </ul>
                <div className="text-center mt-8 sm:mt-12">
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">Apply Now</span>
                      <span className="sm:hidden">Apply</span>
                    </button>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Certification