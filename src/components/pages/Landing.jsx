"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkflowRoadmap from "@/components/pages/WorkflowRoadmap";
import Hero from "./landing/Hero";
import UniversityLogoSlider from "./landing/UniversityLogoSlider";
import Stats from "./landing/Stats";
import { courses, features, colleges, cities, accreditationLogos } from "./landing/data.js";
import { slugify, getCourseHref, getUniversityHref } from "./landing/data.js";
import {
  FaBook,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaTimes,
  FaBookOpen,
  FaHome,
  FaVideo,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaGlobe,
  FaUserTie,
  FaShieldAlt,
  FaComments,
  FaCompass,
  FaRocket,
  FaAward,
  FaCheckCircle,
  FaPlay,
  FaSearch,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaHeadset,
  FaLightbulb,
  FaTarget,
  FaCalendar,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaBalanceScaleLeft,
} from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "../FAQ";

//

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const router = useRouter();
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState("getStarted");
  const [selectedUniversities, setSelectedUniversities] = useState([]);

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");
  const toggleUniversity = (name) => {
    const slug = slugify(name);
    setSelectedUniversities((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug].slice(0, 3)
    );
  };
  const canCompare =
    selectedUniversities.length >= 2 && selectedUniversities.length <= 3;
  const startCompare = () => {
    if (!canCompare) return;
    router.push(`/compare?u=${selectedUniversities.join(",")}`);
  };

  // Map course titles to course detail routes
  const getCourseHref = (title) => {
    const map = {
      "MBA Online": "/courses/mba-online",
      "MSC Online": "/courses/msc-online",
      "BBA Online": "/courses/bba-online",
      "MCA Online": "/courses/mca-online",
      "BCA Online": "/courses/bca-online",
      "M.Com Online": "/courses/mcom-online",
      "B.Com Online": "/courses/bcom-online",
      "MA Online": "/courses/ma-online",
      "BA Online": "/courses/ba-online",
      "MAJMC Online": "/courses/majmc-online",
      "BAJMC Online": "/courses/bajmc-online",
    };
    return map[title] || "/coursesearch";
  };

  const getUniversityHref = (name) => {
    const n = name.toLowerCase();
    if (n.includes("amity")) return "/Amity-university-Online";
    if (n.includes("manipal")) return "/manipal";
    if (n.includes("lovely professional") || n.includes("lpu")) return "/lpu";
    if (n.includes("petroleum") || n.includes("upes")) return "/upes";
    if (n.includes("narsee monjee") || n.includes("nmims")) return "/nmims";
    if (n.includes("sharda")) return "/sharda";
    if (n.includes("dy patil") || n.includes("d.y.")) return "/dypatil";
    if (n.includes("jain")) return "/jain";
    if (n.includes("chandigarh")) return "/chandigarh";
    if (n.includes("jindal")) return "/opjindal";
    if (n.includes("vivekananda global") || n.includes("vgu")) return "/vgu";
    if (n.includes("shoolini")) return "/shoolini";
    return "/listofcollege";
  };

  //

  // Function to open modal with specific type
  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero + logos */}
      <Hero onOpenModal={openModal} />
      <UniversityLogoSlider />

      {/* Workflow Roadmap */}
      <WorkflowRoadmap onGetStartedClick={() => openModal("getStarted")} />

      {/* Testimonials */}

      <Stats />

      {/* Programs Section - Responsive Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight text-[#001e3c] mb-2">
              Select the Best Programs
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore curated online programs from leading universities.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mx-auto mb-6 sm:mb-8 grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ug">UG</TabsTrigger>
              <TabsTrigger value="pg">PG</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {courses.map((course, index) => (
                  <motion.a
                    key={index}
                    href={getCourseHref(course.title)}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative rounded-xl cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-600 to-cyan-600 transform translate-y-full group-hover:translate-y-0 opacity-90 transition-transform duration-700 ease-out"></div>
                      <div className="relative z-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:translate-y-[-4px] group-hover:scale-[1.01] group-hover:bg-transparent group-hover:border-transparent">
                        <div
                          className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                        >
                          <course.icon className="text-xl sm:text-2xl text-white" />
                        </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">
                          {course.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">
                          {course.desc}
                        </p>
                        <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600 group-hover:text-white/90 group-hover:border-white/20">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#00ffe0]" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUsers className="text-[#00ffe0]" />
                            {course.students}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ug">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {courses
                  .filter((c) => c.students === "UG")
                  .map((course, index) => (
                    <motion.a
                      key={index}
                      href={getCourseHref(course.title)}
                      className="group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="relative rounded-xl cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-600 to-cyan-600 transform translate-y-full group-hover:translate-y-0 opacity-90 transition-transform duration-700 ease-out"></div>
                        <div className="relative z-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:translate-y-[-4px] group-hover:scale-[1.01] group-hover:bg-transparent group-hover:border-transparent">
                          <div
                            className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            <course.icon className="text-xl sm:text-2xl text-white" />
                          </div>
                          <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                            {course.tag}
                          </Badge>
                          <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">
                            {course.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">
                            {course.desc}
                          </p>
                          <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600 group-hover:text-white/90 group-hover:border-white/20">
                            <span className="flex items-center gap-1">
                              <FaClock className="text-[#00ffe0]" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaUsers className="text-[#00ffe0]" />
                              {course.students}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="pg">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {courses
                  .filter((c) => c.students === "PG")
                  .map((course, index) => (
                    <motion.a
                      key={index}
                      href={getCourseHref(course.title)}
                      className="group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="relative rounded-xl cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-600 to-cyan-600 transform translate-y-full group-hover:translate-y-0 opacity-90 transition-transform duration-700 ease-out"></div>
                        <div className="relative z-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:translate-y-[-4px] group-hover:scale-[1.01] group-hover:bg-transparent group-hover:border-transparent">
                          <div
                            className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            <course.icon className="text-xl sm:text-2xl text-white" />
                          </div>
                          <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                            {course.tag}
                          </Badge>
                          <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">
                            {course.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">
                            {course.desc}
                          </p>
                          <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600 group-hover:text-white/90 group-hover:border-white/20">
                            <span className="flex items-center gap-1">
                              <FaClock className="text-[#00ffe0]" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaUsers className="text-[#00ffe0]" />
                              {course.students}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compare Online Universities - Enhanced (moved under Programs) */}
      <section id="compare-universities" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-3 sm:mb-4">
              Compare Online Universities
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Select up to 3 universities to compare fees, accreditation,
              placements and more
            </p>
          </motion.div>

          {/* Compare Controls - Enhanced */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-2xl border border-blue-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md text-white">
                <FaCompass className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a365d]">
                  Compare Universities
                </h3>
                <p className="text-sm text-gray-700">
                  Selected:{" "}
                  <span className="font-bold text-blue-600">
                    {selectedUniversities.length}
                  </span>
                  /3
                  {selectedUniversities.length > 0 && (
                    <span className="ml-2 text-green-600 font-medium">
                      ({selectedUniversities.length} selected)
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button
              disabled={!canCompare}
              onClick={startCompare}
              className={`group px-6 sm:px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all text-sm sm:text-base ${
                canCompare
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transform hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <FaArrowRight
                className={
                  canCompare
                    ? "group-hover:translate-x-1 transition-transform"
                    : ""
                }
              />
              Compare Now
            </button>
          </div>

          {/* Enhanced University Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, idx) => {
              const slug = slugify(college.name);
              const isSelected = selectedUniversities.includes(slug);

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? "ring-2 ring-blue-500 shadow-xl"
                      : "border border-blue-100 shadow-md hover:shadow-xl"
                  } bg-gradient-to-b from-white to-blue-50`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        <FaCheckCircle className="text-sm" />
                      </div>
                    </div>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 w-20 h-8"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    {/* University Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-white border border-blue-200 flex items-center justify-center p-2 ${
                          isSelected ? "ring-2 ring-blue-500/30" : ""
                        }`}
                        > 
                          <Image
                          src={college.logo}
                          alt={`${college.name} logo`}
                            width={80}
                            height={80}
                            loading="lazy"
                          className="max-h-10 sm:max-h-12 w-auto object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#1a365d] mb-1 line-clamp-2 leading-tight">
                          {college.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 text-xs font-medium">
                            {college.ranking}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-amber-600">
                            <FaStar className="fill-amber-400" />
                            <span className="font-semibold">
                              {college.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fee Information */}
                    <div className="bg-blue-100/50 rounded-lg p-3 mb-4 border border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Approx. Fees:
                        </span>
                        <span className="text-sm font-bold text-blue-700">
                          {college.fee}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={getUniversityHref(college.name)}
                        className="flex-1 text-center text-sm font-semibold text-blue-600 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center"
                      >
                        View Details
                      </a>

                      <button
                        onClick={() => toggleUniversity(college.name)}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <FaCheckCircle className="mr-1" />
                            Selected
                          </>
                        ) : (
                          <>
                            <FaBalanceScaleLeft className="mr-1" />
                            Compare
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-opacity rounded-2xl pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Selection Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Tip: Select 2-3 universities to compare features side by side
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Universities Section */}
      <section id="top-partner-universities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-3">
              Top Partner Universities
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-4"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from India's most prestigious online universities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colleges.map((college, index) => (
              <motion.div
                key={index}
                className="group h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Enhanced Card Wrapper with gradient border and subtle glass */}
                <div
                  className="relative rounded-2xl overflow-hidden p-[1.5px] bg-gradient-to-br from-blue-400/40 via-indigo-400/40 to-cyan-400/40 shadow-md group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
                >
                  <div className="rounded-2xl h-full flex flex-col min-h-[420px] bg-white/90 backdrop-blur-[2px]">
                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                    <div className="absolute transform rotate-45 translate-x-10 -translate-y-10 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 w-28 h-10"></div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-indigo-600/5"
                  ></div>

                  {/* Top Section */}
                  <div className="p-5 sm:p-6 relative z-[1]">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-0 shadow-sm text-[11px] sm:text-xs font-medium px-2 py-1">
                        {college.ranking}
                      </Badge>
                      <div className="flex items-center gap-1 bg-white/90 rounded-full py-1 px-2 shadow-sm">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-sm font-medium text-gray-700">
                          {college.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Logo/Image area */}
                  <div className="px-5 sm:px-6 relative">
                    <div
                      className="h-28 sm:h-32 w-full rounded-xl bg-white flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300 border border-blue-100 shadow-sm ring-1 ring-blue-50"
                    >
                      <Image
                        src={college.logo}
                        alt={`${college.name} logo`}
                        width={120}
                        height={120}
                        loading="lazy"
                        className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-80"></div>
                  </div>

                  {/* Content + Button */}
                  <div className="p-5 sm:p-6 relative z-[1] flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-gray-900 transition-colors">
                      {college.name}
                    </h3>
                    <div className="text-sm text-gray-600 mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium">Fees:</span> {college.fee}
                    </div>

                    {/* Additional Info (if available) */}
                    {college.courses && (
                      <div className="mt-2 text-xs text-gray-500 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        {college.courses}+ Courses
                      </div>
                    )}

                    {/* Button sticks to bottom */}
                    <div className="mt-auto pt-4">
                      <a
                        href={getUniversityHref(college.name)}
                        className="block w-full"
                      >
                        <div
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-indigo-800 transform hover:scale-[1.02] transition-all duration-200 text-sm shadow-md hover:shadow-xl relative overflow-hidden"
                        >
                          <span className="relative z-10">Learn More</span>
                          <div className="absolute inset-0 bg-white/10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
                        </div>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
         
        </div>
      </section>

      

      {/* Accreditation & Recognition - Responsive slider */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#001e3c] mb-3 sm:mb-4">
              Accreditation & Recognition
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We partner only with accredited and government-recognized
              institutions
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 animate-[accreditScroll_25s_linear_infinite] will-change-transform">
              {[...accreditationLogos, ...accreditationLogos].map(
                (logo, idx) => (
                  <div
                    key={idx}
                    className="min-w-[80px] sm:min-w-[100px] md:min-w-[140px] rounded-xl p-3 sm:p-4 bg-white shadow-sm border border-gray-100 flex items-center justify-center h-16 sm:h-20 md:h-24"
                  > 
                    <Image
                      src={logo}
                      alt="Accreditation and recognition logo"
                      width={100}
                      height={100}
                      loading="lazy"
                      className="max-h-10 sm:max-h-12 md:max-h-14 object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <style jsx global>{`
            @keyframes accreditScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#001e3c] mb-4 sm:mb-6">
              Why Choose <span className="text-[#00ffe0]">Unifost</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the difference that personalized guidance makes in your
              educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 group-hover:shadow-2xl">
                  <div
                    className={`bg-gradient-to-br ${feature.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#001e3c] mb-3 sm:mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Cities */}
      <section
        className="bg-[#08223a] py-16 px-6 text-white overflow-hidden relative"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Study Cities Across India
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
            Explore top universities across India's major educational hubs.
          </p>

          <div className="overflow-hidden relative backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="flex gap-10 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].flatMap((_, i) =>
                cities.map((city, idx) => (
                  <motion.div
                    key={`city-${i}-${idx}`}
                    whileHover={{ y: -6 }}
                    className="min-w-[150px] flex flex-col items-center text-center bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={city.img}
                      alt={`${city.city}, ${city.state} study city`}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-16 h-16 object-contain mb-2 rounded-full border border-white/20 shadow"
                    />
                    <p className="text-white font-semibold text-sm">
                      {city.city}
                    </p>
                    <p className="text-blue-200 text-xs">{city.state}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services - SEO-optimized with CTAs */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#001e3c] mb-2">
              Career Counseling Online & Virtual Learning Guidance
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-3"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Best Career Planning Services with trusted EdTech Solutions in
              India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Video Call Counseling */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaVideo className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">
                  Video Call Counseling
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Virtual learning guidance to compare accredited Online
                University Degree options, fees, and placements.
              </p>
              <button
                onClick={() => openModal("videoCall")}
                className="w-full bg-[#00d4c4] text-[#001e3c] py-2.5 rounded-xl font-semibold hover:bg-[#00c0b1] transition-colors"
              >
                Book Your Free Counseling
              </button>
            </motion.div>

            {/* Home Demo Counseling */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaHome className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">
                  Home Demo Counseling
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Personalized in-home session for students and parents with
                trusted university comparisons and timelines.
              </p>
              <button
                onClick={() => openModal("homeDemo")}
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-2.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-cyan-700 transition-colors"
              >
                Schedule a Home Demo
              </button>
            </motion.div>

            {/* Career Planning */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaCompass className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">
                  Career Planning
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Strategic career roadmap aligned with in-demand skills and the
                best career planning services.
              </p>
              <button
                onClick={() => openModal("getStarted")}
                className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-semibold hover:bg-black transition-colors"
              >
                Start Your Journey Today
              </button>
            </motion.div>
          </div>

          {/* Trust bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-[#001e3c]">
                UGC-DEB/AICTE/NAAC
              </span>{" "}
              accredited partners
            </div>
            <div className="text-sm text-gray-600">
              Transparent, unbiased guidance
            </div>
            <div className="text-sm text-gray-600">
              Student-friendly support across India
            </div>
          </div>
        </div>
      </section>
      <FAQ
        faqs={[
          {
            question:
              "Are online university degrees UGC-approved and recognized?",
            answer:
              "Yes, all online university degrees we recommend are UGC-approved and fully recognized by the University Grants Commission. These degrees have the same value as traditional campus programs and are accepted by employers, government organizations, and for higher studies.",
          },
          {
            question:
              "How does career counseling help in choosing online university degrees?",
            answer:
              "Our career counseling provides personalized guidance based on your career goals, academic background, and industry requirements. Our experts help you select UGC-approved programs that align with your professional aspirations, ensuring you make informed decisions about your education.",
          },
          {
            question:
              "What are the benefits of UGC-approved online university degrees?",
            answer:
              "UGC-approved online university degrees offer the same value as campus programs with added benefits of flexibility, cost-effectiveness, comprehensive career counseling support, and the ability to study while working. They are fully recognized and accepted globally.",
          },
          {
            question:
              "How do I apply for online university degrees through UNIFOST?",
            answer:
              "Applying is simple! Contact our career counselors who will guide you through the entire process - from university selection to application submission. We provide end-to-end support including document preparation, application assistance, and admission guidance.",
          },
          {
            question:
              "What courses are available in online university degrees?",
            answer:
              "We offer a wide range of UGC-approved online courses including MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and specialized programs. All courses are from top-ranked universities with flexible learning options and career counseling support.",
          },
          {
            question:
              "Is there any difference between online and regular degrees?",
            answer:
              "No, UGC-approved online degrees have the same value and recognition as regular degrees. The only difference is the mode of delivery - online degrees offer more flexibility and convenience while maintaining the same academic standards and curriculum.",
          },
          {
            question: "How much do online university degrees cost?",
            answer:
              "Online university degrees are generally more cost-effective than traditional programs. Costs vary by university and program, typically ranging from ₹1-4 lakhs for complete programs. Our career counselors can help you compare costs and find the best value options.",
          },
          {
            question:
              "What support do you provide during the online degree program?",
            answer:
              "We provide comprehensive support throughout your online degree journey including academic guidance, career counseling, placement assistance, networking opportunities, and 24/7 technical support. Our team ensures you have everything needed for success.",
          },
        ]}
        title="Frequently Asked Questions About Online University Degrees"
      />

      {/* Final CTA */}
      <section className="py-14 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Ready to find your program?
            </h3>
            <p className="text-white/80 mt-2">
              Talk to our counselors and get a personalized shortlist.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => openModal("getStarted")}
              className="px-6 py-3 rounded-full bg-[#00d4c4] text-[#001e3c] font-semibold hover:bg-[#00c0b1] transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => openModal("videoCall")}
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}

      {/* Unified Modal - Responsive */}
      {showEnquiryModal && (
        <Dialog
          open={showEnquiryModal}
          onOpenChange={setShowEnquiryModal}
          modal={false}
        >
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-2 lg:my-1 p-4 sm:p-6 z-[30001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                {modalType === "getStarted" && "Get Started with Unifost"}
                {modalType === "videoCall" && "Book a Video Call"}
                {modalType === "homeDemo" && "Book a Home Demo"}
              </DialogTitle>
            </DialogHeader>
            <EnquiryForm
              onSubmitted={() => setShowEnquiryModal(false)}
              formType={modalType}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Landing;