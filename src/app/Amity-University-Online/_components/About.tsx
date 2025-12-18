"use client";
import React, { memo } from 'react'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AboutProps {
  openmodel?: { type: string } | null;
  setOpenModal: (modal: { type: string } | null) => void;
}


const About: React.FC<AboutProps> = ({ openmodel, setOpenModal }) => {
  return (
    <section
      id="AboutAmity"
      className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-3 sm:px-4 md:px-6 font-[Inter] relative"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Heading Section - No animation for faster LCP */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
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
            among the <Link href="/amity-online-mba-total-fees" className="font-bold">best online universities in India</Link>, Amity Online
            offers globally recognized <Link href="best-online-mca-university-in-india" className="font-bold">online MBA in India 2025</Link>, <Link href="best-online-mca-university-in-india" className="font-bold">online BBA</Link>, <Link href="best-online-mca-university-in-india" className="font-bold">online MCA</Link>, online M.Com, online BA, and <Link href="best-online-mca-university-in-india" className="font-bold">online BCA</Link> programs.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
            Our mission is to make quality online education
            accessible to all — whether someone is
            searching for the <Link href="/Best-online-MBA-for-working-professionals-India-2025" className="font-bold">best online MBA in India</Link>, top online MBA
            for working professionals, or affordable online degree
            programs. Amity Online provides AI-driven tools, live online classes,
            recorded lectures, personalized mentorship, and <Link href="//Best-online-MBA-for-working-professionals-India-2025" className="font-bold">career support</Link>.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
            Amity Online's <Link href="best-online-mca-university-in-india" className="font-bold">MBA program</Link> is designed for both fresh graduates and working professionals.
            Our AICTE and UGC-approved courses specialize in HR, Finance, Marketing, Analytics, 
            International Business, and Digital Marketing — making Amity one of the <Link href="/best-online-mca-university-in-india" className="font-bold">best universities for online education</Link>.
          </p>

          {/* Quick Links Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-4 font-medium">Explore More:</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/Best-online-MBA-for-working-professionals-India-2025" className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors">All Courses</Link>
              <Link href="/Best-online-MBA-for-working-professionals-India-2025" className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors">Compare Universities</Link>
              <Link href="/best-online-mca-university-in-india" className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors">Scholarships</Link>
              <Link href="/best-online-mca-university-in-india" className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors">Fee Structure</Link>
              <Link href="/Amity-University-Online" className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors">Career Blog</Link>
              <Link href="/Amity-University-Online" className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors">Book Demo</Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons - No animation */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
              onClick={() => setOpenModal({ type: "apply" })}
            >
              Apply Now
              {/* @ts-expect-error - lucide-react icons accept className but types may not reflect it */}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-400 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
              onClick={() => setOpenModal({ type: "enquiry" })}
            >
              {/* @ts-expect-error - lucide-react icons accept className but types may not reflect it */}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About);