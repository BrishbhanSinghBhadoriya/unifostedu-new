"use client";
import React, { memo } from 'react'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, CheckCircle, Globe } from "lucide-react";

// Memoized stats component for better performance
const StatItem = memo(({ stat, index }) => (
  <div className="text-center">
    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2 text-yellow-500" />
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
      {stat.number}
    </div>
    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
      {stat.label}
    </div>
  </div>
));
StatItem.displayName = 'StatItem';

// Memoized program card for better performance
const ProgramCard = memo(({ item, index, onClick }) => (
  <div
    className="rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow duration-200"
    onClick={onClick}
  >
    {/* Image - use native img for better LCP on mobile */}
    <div className="h-20 sm:h-24 md:h-32 lg:h-40 w-full bg-gray-100">
      <Image
        src={item.image}
        alt={`${item.program} program at Amity Online`}
        className="h-full w-full object-cover"
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        width="200"
        height="160"
      />
    </div>
    {/* Text Section */}
    <div className="bg-[#0d1b4c] text-white py-1.5 sm:py-2 md:py-3 text-center">
      <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
        {item.program}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm opacity-90 mt-0.5">
        {item.count}
      </div>
    </div>
  </div>
));
ProgramCard.displayName = 'ProgramCard';

const Introduction = ({ inter, playfair, setOpenModal }) => {
  const router = useRouter();
  const stats = [
    { number: "1.6L+", label: "Students Enrolled", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "100%", label: "Placement Assistance", icon: CheckCircle },
    { number: "200+", label: "Corporate Partners", icon: Globe },
  ];

  const specializations = [
    {
      program: "MBA",
      count: "18+ Specializations",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327391/mbaSpecialization_ubxfpt.webp",
    },
    {
      program: "BBA",
      count: "2 Specializations",
      color: "bg-green-50 border-green-200 text-green-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327057/bbaSpecialization_zjisuk.webp",
    },
    {
      program: "MCA",
      count: "5+ Specializations",
      color: "bg-purple-50 border-purple-200 text-purple-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327468/mcaSpecialization_bp7v01.webp",
    },
    {
      program: "BCA",
      count: "6 Specializations",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327068/bcaSpecialization_uwowv1.webp",
    },
  ];

  return (
    <section
      id="HeroSection"
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className={`flex-1 w-full lg:min-w-[300px] ${inter?.className || ''} order-2 lg:order-1`}>
            {/* Badge */}
            <Badge className="mb-3 sm:mb-4 font-semibold px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 bg-white flex items-center gap-1.5 sm:gap-2 w-fit">
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/w_30,q_auto,f_auto/v1762327863/UGC_India_Logo_9d01833e1b_nsyboy.svg"
                alt="UGC Approved"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6 md:w-[30px] md:h-[30px] rounded-full"
                loading="eager"
              />
              <span className="text-gray-500 text-xs sm:text-sm md:text-base">
                UGC Approved
              </span>
            </Badge>

            {/* Heading - Critical for LCP */}
            <h1
              className={`${playfair?.className || ''} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3`}
            >
                Amity University Online Degree Programs | Courses, Eligibility & Fees 2026              <span className="block text-transparent bg-clip-text bg-yellow-600">
                UGC-Entitled NAAC A+ Programs for 2026
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-5 md:mb-6 max-w-2xl leading-relaxed">
              Explore the Amity University Online MBA, BBA, BCA, MCA, and M.Com programmes designed for working
              professionals across India.{" "}
              <span className="font-semibold">Join 1.6 lakh+</span>{" "}
              learners leveraging flexible online degrees, live mentoring, and placement assistance.
            </p>

            {/* Program Cards - No animations for faster render */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              {specializations.map((item, index) => (
                <ProgramCard
                  key={index}
                  item={item}
                  index={index}
                  onClick={() => {
                    if (item.program === "MBA") {
                      router.push("/amity-online-mba-total-fees");
                    } else if (item.program === "MCA") {
                      router.push("/best-online-mca-university-in-india");
                    }
                  }}
                />
              ))}
            </div>

            {/* CTA Buttons - Simplified for mobile */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer px-4 sm:px-6 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 lg:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                onClick={() => setOpenModal({ type: "apply" })}
              >
                Apply Now
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer border-2 border-gray-300 hover:border-blue-400 px-4 sm:px-6 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 lg:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                onClick={() => setOpenModal({ type: "enquiry" })}
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 rotate-180 sm:rotate-0" />
                Enquire Now
              </Button>
            </div>

            {/* Stats - No animations for faster mobile render */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <StatItem key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>

          {/* Right Content - Image with proper priority */}
          <div className="flex-1 w-full lg:min-w-[250px] lg:max-w-[400px] order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-64 md:h-80 lg:h-[520px] xl:h-[680px]">
                <Image
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
                  alt="Amity University Online virtual classroom"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 400px"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Introduction);