"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaGraduationCap,
  FaPlay,
  FaUser,
  
  FaStar,
  FaLocationDot 
} from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { HeroProps } from "types/LandingPageTypes";
import { heroSlides as fallbackSlides } from "./data";

import { useIsMobile } from "@/utils/hooks";

const Hero = ({ onOpenModal, heroSlides = [] }: HeroProps) => {
  const isMobile = useIsMobile();
  // Prioritize the 6 slides from data.js if the API doesn't provide enough slides
  const slidesToUse = heroSlides.length >= 6 ? heroSlides : fallbackSlides;

  const [slide, setSlide] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const scrollToId = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!slidesToUse.length) return;

    setIsFirstRender(false);
    const id = setInterval(
      () => setSlide((s) => (s + 1) % slidesToUse.length),
      12000 // Increased from 10000ms (10s) to 12000ms (12s)
    );
    return () => clearInterval(id);
  }, [slidesToUse.length]);

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Background with Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Mobile: Show slider first, then content. Desktop: Show content first, then slider */}

              {/* Mobile Slider - Show first on mobile */}
              <div className="block lg:hidden order-1">
                {/* Right Content - Visual Panel for Mobile */}
                <div className="relative mb-8">
                  {/* Main Visual Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20">
                    {/* Slider Container */}
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                      <div className="absolute inset-0">
                        <Image
                          fill
                          src={slidesToUse[slide].src}
                          alt={`${slidesToUse[slide].title} | UNIFOST`}
                          priority={slide === 0}
                          loading={slide === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain rounded-2xl"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
                      </div>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {slidesToUse.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setSlide(i)}
                            className={`h-4 w-4 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${i === slide ? "bg-white w-8" : "bg-white/60 hover:bg-white/80"
                              }`}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-pressed={i === slide}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content Cards */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                        <h3 className="font-semibold text-gray-900 mb-2">{slidesToUse[slide].title}</h3>
                        <p className="text-sm text-gray-600">{slidesToUse[slide].description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-100 p-3 rounded-lg border border-green-300 text-center">
                          <div className="text-green-800 font-bold text-lg">UGC</div>
                          <div className="text-xs text-green-900">Approved</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg border border-purple-100 text-center">
                          <div className="text-purple-600 font-bold text-lg">24/7</div>
                          <div className="text-xs text-purple-700">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <MdPeople className="text-white text-xl" />
                  </div>
                </div>
              </div>

              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8 order-2 lg:order-none">
                {/* Trust Badge */}
                <div className="inline-flex items-center mt-5 gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-medium shadow-lg">
                  <FaStar className="text-yellow-500 " />
                  <span>Trusted by 5,000+ Students</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-gray-900">India's Best Online</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      University Degrees
                    </span>
                  </h1>

                  <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                    Compare, Choose & Succeed with India's Top Online Universities
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Get expert guidance to find the perfect online degree program from 25+ UGC-approved universities. Compare University, fees, and rankings to make informed decisions for your future.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
                  {[
                    { icon: FaCheck, text: "UGC Approved" },
                    { icon: MdPeople, text: "Expert Counseling" },
                    { icon: FaGraduationCap, text: "25+ Universities" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <feature.icon className="text-green-500 text-lg" />
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => onOpenModal("getStarted")}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    aria-label="Start Your Journey"
                  >
                    <span>Start Your Journey</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform " aria-hidden="true" />
                  </button>

                  <button
                    onClick={() => onOpenModal("videoCall")}
                    className="group px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    aria-label="Book a Home Demo"
                  >
                    <FaPlay className="text-blue-600" aria-hidden="true" />
                    <span>Book Home Demo</span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 max-w-md mx-auto lg:mx-0">
                  {[
                    { number: "5K+", label: "Students" },
                    { number: "25+", label: "Universities" },
                    { number: "100%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Visual Panel - Desktop Only */}
              <div

                className="relative hidden lg:block lg:order-2"
              >
                {/* Main Visual Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20">
                  {/* Slider Container */}
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.div
                        key={slide}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          fill
                          src={slidesToUse[slide].src}
                          alt={`${slidesToUse[slide].title} | UNIFOST`}
                          priority={slide === 0}
                          loading={slide === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain rounded-2xl"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                      {slidesToUse.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSlide(i)}
                          className={`h-4 w-4 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${i === slide ? "bg-white w-8" : "bg-white/60 hover:bg-white/80"
                            }`}
                          aria-label={`Go to slide ${i + 1}`}
                          aria-pressed={i === slide}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content Cards */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                      <h3 className="font-semibold text-gray-900 mb-2">{slidesToUse[slide].title}</h3>
                      <p className="text-sm text-gray-600">{slidesToUse[slide].description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-100 p-3 rounded-lg border border-green-300 text-center">
                        <div className="text-green-800 font-bold text-lg">UGC</div>
                        <div className="text-xs text-green-900">Approved</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border border-purple-100 text-center">
                        <div className="text-purple-600 font-bold text-lg">24/7</div>
                        <div className="text-xs text-purple-700">Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MdPeople className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Quick Actions */}
        <div className="bg-white/60 backdrop-blur-sm border-t border-white/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: FaLocationDot ,
                  title: "Find Universities",
                  desc: "Discover top online universities near you",
                  action: () => scrollToId("top-partner-universities")
                },
                {
                  icon: FaGraduationCap,
                  title: "Compare University",
                  desc: "Compare fees, rankings, and programs",
                  action: () => scrollToId("compare-universities")
                },
                {
                  icon: MdPeople,
                  title: "Get Counseling",
                  desc: "Expert guidance for your career path",
                  action: () => onOpenModal("getStarted")
                }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  aria-label={item.title}
                  className={`${item.title === "Get Counseling"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent cursor-pointer"
                    : "bg-white text-gray-800 border-gray-300 cursor-pointer"
                    } w-full inline-flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-3 rounded-full border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer`}
                >
                  <span className="inline-flex items-center gap-3">
                    <span className={`${item.title === "Get Counseling"
                      ? "bg-white/20"
                      : "bg-blue-50"
                      } w-10 h-10 rounded-full inline-flex items-center justify-center`}>
                      <item.icon className={`${item.title === "Get Counseling" ? "text-white" : "text-blue-600"} text-lg`} />
                    </span>
                    <span className="text-left">
                      <span className={`block font-semibold ${item.title === "Get Counseling" ? "text-white" : "text-gray-900"}`}>{item.title}</span>
                      <span className={`block text-xs ${item.title === "Get Counseling" ? "text-white/90" : "text-gray-600"}`}>{item.desc}</span>
                    </span>
                  </span>
                  <FaArrowRight className={`${item.title === "Get Counseling" ? "text-white" : "text-blue-600"} text-sm`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
