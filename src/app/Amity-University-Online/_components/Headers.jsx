import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Menu, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Headers = ({ setOpenModal, setIsMobileMenuOpen }) => {
  return (
    <div> <motion.header
    className="bg-white shadow-sm fixed top-0 left-0 w-full z-50"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <div className="w-20 sm:w-24 md:w-[122px] h-8 sm:h-9 md:h-10 relative">
            <Image
              src="/amity.svg"
              alt="Amity University Online"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 justify-end">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-2"
          >
            <Phone className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden md:inline">+91 7042646766</span>
            <span className="md:hidden">Call</span>
          </Button>
          <Button
            onClick={() => setOpenModal({ type: "enquiry" })}
            size="sm"
            className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-[#452971] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-1.5 md:py-2 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Enquire Now</span>
            <span className="sm:hidden">Enquire</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
          </Button>
          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMobileMenuOpen(true)}
            variant="ghost"
            size="icon"
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </div>
  </motion.header></div>
  )
}

export default Headers