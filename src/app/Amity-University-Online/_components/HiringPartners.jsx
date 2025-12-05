import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HiringPartners = ({fadeIn, staggerChildren}) => {
  // Reduced to 10 key hiring partners for better performance
  const hiringPartners = [
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", alt: "Google" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", alt: "Microsoft" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", alt: "Amazon" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", alt: "IBM" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", alt: "Infosys" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", alt: "TCS" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", alt: "Adobe" },
    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", alt: "Samsung" },
  ];

  return (
    <div>
        <section id="HiringPartners" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-12" {...fadeIn}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">
                    Our Hiring Partners
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Top companies that recruit Amity Online University graduates
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6"
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {hiringPartners.map((partner, i) => (
                    <motion.div
                      key={i}
                      className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-md transition-all border border-gray-100"
                      whileHover={{ y: -5, scale: 1.05 }}
                      variants={fadeIn}
                    >
                      <div className="relative w-full h-12">
                        <Image
                          src={partner.src}
                          alt={`${partner.alt} - Hiring partner of Amity University Online`}
                          width={100}
                          height={48}
                          loading="lazy"
                          className="object-contain w-auto h-auto max-h-12"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Show more companies text instead of loading all images */}
                <p className="text-center text-gray-500 mt-6 text-sm">
                  + 500 more companies including Wipro, HCL, Cognizant, Deloitte, KPMG, and more
                </p>
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

export default HiringPartners