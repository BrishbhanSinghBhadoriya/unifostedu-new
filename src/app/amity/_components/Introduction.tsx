"use client";
import React, { memo } from 'react'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
import EnquiryForm from "@/components/EnquiryForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, CheckCircle, Globe, LucideIcon } from "lucide-react";
import Link from "next/link";
import { OpenModalState } from "types/Modal";

// Type definitions
interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface Specialization {
  program: string;
  count: string;
  color: string;
  image: string;
  url: string;
}

interface IntroductionProps {
  inter: { className: string };
  playfair: { className: string };
  openModal: OpenModalState;
  setOpenModal: (state: OpenModalState) => void;
}

// Memoized stats component for better performance
const StatItem = memo(({ stat, index }: { stat: Stat, index: number }) => (
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
const ProgramCard = memo(({ item, index, onClick }: { item: Specialization, index: number, onClick: () => void }) => (
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

const Introduction = ({ inter, playfair, openModal, setOpenModal }: IntroductionProps) => {

  const router = useRouter();
  const stats: Stat[] = [
    { number: "1.6L+", label: "Students Enrolled", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "100%", label: "Placement Assistance", icon: CheckCircle },
    { number: "200+", label: "Corporate Partners", icon: Globe },
  ];

  const specializations: Specialization[] = [
    {
      program: "MBA",
      count: "18+ Specializations",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327391/mbaSpecialization_ubxfpt.webp",
      url: "/amity/mba-online",
    },
    {
      program: "BBA",
      count: "2 Specializations",
      color: "bg-green-50 border-green-200 text-green-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327057/bbaSpecialization_zjisuk.webp",
      url: "/amity/bba-online",
    },
    {
      program: "MCA",
      count: "5+ Specializations",
      color: "bg-purple-50 border-purple-200 text-purple-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327468/mcaSpecialization_bp7v01.webp",
      url: "/amity/mca-online",
    },
    {
      program: "BCA",
      count: "6 Specializations",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/w_200,q_auto,f_auto/v1762327068/bcaSpecialization_uwowv1.webp",
      url: "/amity/bca-online",
    },
  ];
  const handleApplyNowClick = () => {
    console.log(openModal, setOpenModal);
    console.log("Apply Now clicked");
    setOpenModal({ type: "apply" });
  };


  return (
    <section
      id="HeroSection"
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden z-10"
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
              className={`${playfair?.className || ""} text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-yellow-600 leading-tight mb-2 sm:mb-3`}
            >
              Amity University Online

              {/* CIRCLED TEXT */}
              <div className="relative inline-block my-2 sm:my-3">
                <span
                  className="
        relative z-10
        px-6 py-2
        text-blue-700
        text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        font-bold
      "
                >
                  Courses, Eligibility And Fees 2026
                </span>

                {/* Yellow Circle */}
                <span
                  className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[100%] h-[100%]
        bg-white
        rounded-full
        -z-0 border-2 border-yellow-600
      "
                ></span>
              </div>

              <span className="block text-transparent bg-clip-text bg-yellow-600">
                UGC-Entitled NAAC A+ Programs for 2026
              </span>
            </h1>


            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-5 md:mb-6 max-w-2xl leading-relaxed">
              Explore the Amity University <Link href="/amity/mba-online" className="font-bold"> MBA,</Link> <Link href="/amity/bba-online" className="font-bold"> BBA,</Link> <Link href="/amity/mca-online" className="font-bold"> MCA,</Link> <Link href="/amity/bca-online" className="font-bold"> BCA,</Link> <Link href="/amity/mcom-online" className="font-bold"> M.Com,</Link> <Link href="/amity/bcom-online" className="font-bold"> B.Com,</Link> <Link href="/amity/ma-online" className="font-bold"> MA,</Link> and <Link href="/amity/msc-online" className="font-bold"> MSc</Link> programmes designed for working
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
                  onClick={() => router.push(item.url)}
                />
              ))}
            </div>


            {/* CTA Buttons - Simplified for mobile */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer px-4 sm:px-6 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 lg:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                onClick={handleApplyNowClick}
              >
                Apply Now
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer border-2 border-gray-300 hover:border-blue-400 px-4 sm:px-6 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 lg:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                onClick={() => setOpenModal({ type: "enquire" })}
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