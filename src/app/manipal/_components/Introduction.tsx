'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { optimizeCloudinary } from '@/utils/cloudinary'
import { OpenModalState } from '../../../../types/Modal'
const Introduction = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
     <section id="HeroSection" className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[800px] overflow-hidden">

              {/* Background with Gradient Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp")}
                  alt="Manipal University Banner"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true"></div>
            </div>
    
              {/* Content Container */}
              <div className="relative z-30 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full overflow-x-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[800px] overflow-x-hidden">
                  
                  {/* Left Content */}
                  <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 md:py-12 lg:py-20 xl:py-24 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-3 sm:space-y-4 md:space-y-6"
                    >
                      {/* University Badge */}
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/30 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-2 border-white/50">
                        <Image
                          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg"
                          alt="Manipal University Jaipur logo"
                          width={120}
                          height={32}
                          className="h-5 sm:h-6 md:h-8 w-auto"
                          loading="lazy"
                        />
                      </div>
    
                      {/* Main Heading */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                          Manipal University Jaipur Online Admission 2026</span>
                        <span className="block">
                          UGC Approved Online Degrees
                        </span>
                      </h1>
    
                      {/* Subtitle */}
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                        UGC-approved online degrees with NAAC A+ accreditation. 
                        Flexible learning, expert mentorship, and global recognition.
                      </p>
    
                      {/* Key Features */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4">
                        {['UGC Approved', 'NAAC A+', 'Global Recognition', 'Flexible Learning'].map((feature, index) => (
                          <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-white/30 rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border-2 border-white/50">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white font-semibold">{feature}</span>
                          </div>
                ))}
              </div>
    
                     
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-white hover:border-orange-400 hover:bg-orange-400/20 hover:text-white text-white font-bold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 w-full sm:w-auto bg-white/20 cursor-pointer"
                          onClick={() => setOpenModal({ type: 'enquire' })}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
                          Enquire Now
                        </Button>
            </div>
                    </motion.div>
                  </div>
    
                  {/* Right Content - Stats Cards */}
                  <div className="flex-1 max-w-md lg:max-w-lg lg:ml-8 xl:ml-12 w-full mt-6 sm:mt-8 lg:mt-0">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4"
                    >
                      {/* Stat Card 1 */}
                      <div className="bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/50 text-center">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">50+</div>
                        <div className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">Countries</div>
              </div>
                      
                      {/* Stat Card 2 */}
                      <div className="bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/50 text-center">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">25+</div>
                        <div className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">Programs</div>
            </div>
                      
                      {/* Stat Card 3 */}
                      <div className="bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/50 text-center">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">95%</div>
                        <div className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">Success Rate</div>
      </div>
                      
                      {/* Stat Card 4 */}
                      <div className="bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/50 text-center">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">24/7</div>
                        <div className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">Support</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
    
              {/* Accreditation Cards - Bottom - Responsive */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-3 sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl border-2 border-white/70 max-w-2xl mx-auto bg-white/40"
                >
                  {/* Card 1 */}
                  <div className="flex flex-col items-center text-center">
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp" alt="NAAC A+ Accredited" className="h-12 sm:h-16 w-12 sm:w-16 object-contain mb-2" />
                    <p className="text-xs sm:text-sm font-bold text-gray-900">NAAC A+</p>
                  </div>
    
                  {/* Card 2 */}
                  <div className="flex flex-col items-center text-center">
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" alt="UGC Approved" className="h-12 sm:h-16 w-12 sm:w-16 object-contain mb-2" />
                    <p className="text-xs sm:text-sm font-bold text-gray-800">UGC Approved</p>
                  </div>
    
                  {/* Card 3 */}
                  <div className="flex flex-col items-center text-center">
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp" alt="Global Recognition" className="h-12 sm:h-16 w-12 sm:w-16 object-contain mb-2" />
                    <p className="text-xs sm:text-sm font-bold text-gray-800">Global Recognition</p>
                  </div>
                </motion.div>
              </div>
    
              {/* Scroll Indicator */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden sm:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </section>
            
  )
}

export default Introduction