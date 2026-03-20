"use client";
import React, { memo } from 'react'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { OpenModalState } from '../../../../types/Modal'
// interface AboutProps {
//   openmodel?: { type: string } | null;
//   setOpenModal: (modal: { type: string } | null) => void;
// }


const About = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
    <section
      id="AboutAmity"
      className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-3 sm:px-4 md:px-6 font-[Inter] relative"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Heading Section - No animation for faster LCP */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            About Amity University Online
          </h2>
          <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-yellow-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>

        {/* Main Content - No animation */}
        <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 text-left md:text-justify">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
            Amity University Online is India's one of the recognised
            UGC-approved online university, which offers high-class
            online degree programs designed for learners, working
            professionals, and entrepreneurs who aim to enhance their
            skills and advance their careers in the future. It is ranked
            among the <Link href="/amity/mba-online" className="font-bold text-blue-900">best online universities in India</Link>, Amity Online
            offers globally recognized <Link href="/amity/mba-online" className="font-bold text-blue-900">online MBA in India 2025</Link>, <Link href="/amity/bba-online" className="font-bold text-blue-900">online BBA</Link>, <Link href="/amity/mca-online" className="font-bold text-blue-900">online MCA</Link>, <Link href="/amity/mcom-online" className="font-bold text-blue-900">online M.Com,</Link> <Link href="/amity/bcom-online" className="font-bold text-blue-900"> online B.Com,</Link> <Link href="/amity/ma-online" className="font-bold text-blue-900">online MA,</Link>, and <Link href="/amity/bca-online" className="font-bold text-blue-900">online BCA,</Link> programs and <Link href="/amity/bca-online" className="font-bold text-blue-900">online BCA,</Link> programs.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
            Our mission is to make quality online education
            accessible to all — whether someone is
            searching for the <Link href="/best-online-mba-for-working-professionals-india-2025" className="font-bold text-blue-900">best online MBA in India</Link>, top online MBA
            for working professionals, or affordable online degree
            programs. Amity Online provides AI-driven tools, live online classes,
            recorded lectures, personalized mentorship, and <Link href="/about" className="font-bold text-blue-900">career support</Link>.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
            Amity Online's <Link href="/amity/mba-online" className="font-bold">MBA program</Link> is designed for both fresh graduates and working professionals.
            Our AICTE and UGC-approved courses specialize in HR, Finance, Marketing, Analytics,
            International Business, and Digital Marketing — making Amity one of the <Link href="/amity" className="font-bold text-blue-900">best universities for online education</Link>.
          </p>

          {/* Quick Links Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-4 font-medium">Explore More:</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/amity/mba-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">MBA Online</Link>
              <Link href="/amity/bba-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">BBA Online</Link>
              <Link href="/amity/mca-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">MCA Online</Link>
              <Link href="/amity/bca-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">BCA Online</Link>
              <Link href="/amity/mcom-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">MCOM Online</Link>
              <Link href="/amity/bcom-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">BCOM Online</Link>
              <Link href="/amity/ma-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">MA Online</Link>
              <Link href="/amity/ba-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">BA Online</Link>
              <Link href="/amity/msc-online" className="px-3 py-1 bg-white text-blue-900 rounded-full text-xs hover:bg-blue-100 transition-colors">M Sc Online</Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons - No animation */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
                          onClick={() => setOpenModal({ type: "enquire" })}
                          size="sm"
                          className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-blue-900 mt-12 text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-1.5 md:py-2 whitespace-nowrap cursor-Pointer"
                        >
                          <span className="hidden sm:inline">Apply Now</span>
                          <span className="sm:hidden">Apply</span>
                         
                        </Button>

           <Button
                          onClick={() => setOpenModal({ type: "enquire" })}
                          size="sm"
                          className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-blue-900 mt-12 text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-1.5 md:py-2 whitespace-nowrap cursor-Pointer"
                        >
                          <span className="hidden sm:inline">Enquire Now</span>
                          <span className="sm:hidden">Enquire</span>
                         
                        </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About);