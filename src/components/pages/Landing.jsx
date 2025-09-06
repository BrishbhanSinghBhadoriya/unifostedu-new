'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import WorkflowRoadmap from '@/components/pages/WorkflowRoadmap';
import {
  FaBook, FaUniversity, FaGraduationCap, FaBriefcase, FaTimes,
  FaBookOpen, FaHome, FaVideo, FaArrowRight, FaStar, FaUsers,
  FaClock, FaGlobe, FaUserTie, FaShieldAlt, FaComments, FaCompass,
  FaRocket, FaAward, FaCheckCircle, FaPlay, FaSearch, FaMapMarkerAlt,
  FaPhone, FaEnvelope, FaWhatsapp, FaHeadset, FaLightbulb, FaTarget,
  FaCalendar, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaBalanceScaleLeft,
} from "react-icons/fa";


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";

// Enhanced data arrays
const heroSlides = [
  {
    src: "/slider/slider-1.jpg",
    alt: "UGC-approved online university degrees with career counseling services",
    title: "Online UGC-Approved University Degrees: Complete Career Counseling Guide ",
    subtitle: "UGC‑Approved | MBA • BBA • MCA • BCA • BCom • BA",
    description: "Discover the best UGC-approved online university degrees with expert career counseling to guide your educational journey"
  },
  {
    src: "/slider/slider-2.webp",
    alt: "Professional career counseling for online university degrees selection",
    title: "Career Counseling for Online University Degrees: Expert Guidance",
    subtitle: "Personalized Guidance • University Shortlisting • Application Help",
    description: "Get UGC-approved online university degrees with professional career counseling from education experts"
  },
  {
    src: "/slider/slider-3.webp",
    alt: "UGC-approved online university degrees comparison and selection",
    title: "UGC-Approved Online University Degrees: Top Programs & Universities",
    subtitle: "Compare Fees, Rankings, Placements in Minutes",
    description: "Find legitimate online university degrees with comprehensive career counseling and university comparison"
  },
  {
    src: "/slider/slider-4.webp",
    alt: "Online university degrees vs traditional campus comparison with career counseling",
    title: "Online University Degrees vs Traditional Campus: Complete Comparison",
    subtitle: "Make a Confident Choice with UNIFOST",
    description: "Compare UGC-approved online university degrees with traditional programs and get expert career counseling"
  }

];

const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular", icon: FaGraduationCap, duration: "2 Years", students: "PG", color: "from-blue-500 to-purple-600" },
  { title: "MSC Online", desc: "Advanced science and technology programs", tag: "Science", icon: FaBook, duration: "2 Years", students: "PG", color: "from-teal-500 to-cyan-600" },
  { title: "MCA Online", desc: "Advance in tech with flexible learning", tag: "Top Rated", icon: FaBook, duration: "2 Years", students: "PG", color: "from-green-500 to-teal-600" },
  { title: "M.Com Online", desc: "Deepen commerce expertise", tag: "Best Value", icon: FaBriefcase, duration: "2 Years", students: "PG", color: "from-orange-500 to-red-600" },
  { title: "MA Online", desc: "Explore diverse specializations", tag: "Literature", icon: FaBookOpen, duration: "2 Years", students: "PG", color: "from-purple-500 to-pink-600" },
  { title: "MAJMC Online", desc: "Master journalism and mass communication", tag: "Media", icon: FaGlobe, duration: "2 Years", students: "PG", color: "from-indigo-500 to-blue-600" },
  { title: "BBA Online", desc: "Management fundamentals for the digital age", tag: "Career Starter", icon: FaUsers, duration: "3 Years", students: "UG", color: "from-emerald-500 to-green-600" },
  { title: "BCA Online", desc: "Build a career in software development", tag: "Trending", icon: FaBook, duration: "3 Years", students: "UG", color: "from-cyan-500 to-blue-600" },
  { title: "B.Com Online", desc: "Commerce education for business world", tag: "Business", icon: FaBriefcase, duration: "3 Years", students: "UG", color: "from-amber-500 to-orange-600" },
  { title: "BA Online", desc: "Liberal arts foundation for diverse careers", tag: "Arts", icon: FaBookOpen, duration: "3 Years", students: "UG", color: "from-rose-500 to-pink-600" },
  { title: "BAJMC Online", desc: "Journalism and mass communication basics", tag: "Media", icon: FaGlobe, duration: "3 Years", students: "UG", color: "from-violet-500 to-purple-600" }
];

const stats = [
  { number: "5K+", label: "Students Enrolled", icon: FaUsers, color: "from-blue-500 to-teal-600" },
  { number: "25+", label: "Partner Universities", icon: FaUniversity, color: "from-blue-500 to-teal-600" },
  { number: "100%", label: "Success Rate", icon: FaAward, color: "from-blue-500 to-teal-600" },
  { number: "24/7", label: "Support Available", icon: FaHeadset, color: "from-blue-500 to-teal-600" }
];

const features = [
  { title: "Career Counseling for Online University Degrees", description: "Get personalized guidance from education experts for UGC-approved online university degrees", icon: FaUserTie, color: "from-blue-500 to-teal-600" },
  { title: "Compare UGC-Approved Programs", description: "Side-by-side comparison of online university degrees and universities", icon: FaCompass, color: "from-blue-500 to-teal-600" },
  { title: "Flexible Online Learning", description: "Study UGC-approved online university degrees at your own pace from anywhere", icon: FaGlobe, color: "from-blue-500 to-teal-600" },
  { title: "Career Support & Guidance", description: "Get assistance with job placement and career counseling for online degrees", icon: FaBriefcase, color: "from-blue-500 to-teal-600" }
];

const colleges = [
  { name: "Amity University Online", ranking: "NIRF-29", fee: "₹0.99L - ₹3.45L", logo: "/images/amity.png", rating: 4.8, features: "UGC-DEB Approved | NAAC A+| 100% Placement" },
  { name: "Manipal University Online", ranking: "NIRF-73", fee: "0.99L - ₹2.92L", logo: "/images/manipal1.png", rating: 4.6, features: "NAAC A+" },
  { name: "Lovely Professional University Online", ranking: "NIRF-38", fee: "₹0.80L - ₹2.0L", logo: "/images/lpu.png", rating: 4.1, features: "NAAC A++" },
  { name: "University of Petroleum and Energy Studies Online", ranking: "NIRF-41", fee: "₹1.50L - ₹2.20L", logo: "/images/upes.png", rating: 4.4, features: "NAAC A" },
  { name: "Narsee Monjee Institute of Management Studies Online", ranking: "NIRF-21", fee: "₹0.94L - ₹4.0L", logo: "/images/nmims.png", rating: 4.5, features: "NAAC A++" },
  { name: "Sharda University Online", ranking: "NIRF-87", fee: "₹1.05L - ₹1.60L", logo: "/images/sharda.png", rating: 4.1, features: "NAAC A+" },
  { name: "Dr. DY Patil Online", ranking: "NIRF-63", fee: "₹1.40L - ₹1.90L", logo: "/images/dypatil.png", rating: 4.6, features: "NAAC A++" },
  { name: "Jain University Online", ranking: "NIRF-77", fee: "₹1.30L - ₹2.16L", logo: "/images/jain.png", rating: 4.5, features: "NAAC A++" },
  { name: "Chandigarh University Online", ranking: "NIRF-36", fee: "₹1.0L - ₹2.10L", logo: "/images/chandigarh.jpg", rating: 4.7, features: "NAAC A+" },

];

const cities = [
  { city: "Delhi", state: "Delhi", img: "/images/delhi.png", students: "25K+" },
  { city: "Mumbai", state: "Maharashtra", img: "/images/mumbai.png", students: "22K+" },
  { city: "Bangalore", state: "Karnataka", img: "/images/banglore.png", students: "20K+" },
  { city: "Chennai", state: "Tamil Nadu", img: "/images/chennai.png", students: "18K+" },
  { city: "Hyderabad", state: "Telangana", img: "/images/hyderabad.png", students: "16K+" },
  { city: "Pune", state: "Maharashtra", img: "/images/pune.png", students: "15K+" },
  { city: "Kolkata", state: "West Bengal", img: "/images/kolkata.png", students: "14K+" },
  { city: "Ahmedabad", state: "Gujarat", img: "/images/ahemdabad.png", students: "12K+" }
];

const accreditationLogos = [
  '/images/ugc.png', '/images/naac.png', '/images/nirf.png', '/images/aicte.png', '/images/wasc.png', '/images/aiu.png',
  '/images/iacbe.png', '/images/aacsb.png', '/images/iqas.png', '/images/wes.png', '/images/unwto.png', '/images/nabh.png'
];

const universityLogos = [
  { name: "Amity University", logo: "/images/amity.png" },
  { name: "Manipal University", logo: "/images/manipal1.png" },
  { name: "LPU Online", logo: "/images/lpu.png" },
  { name: "UPES Online", logo: "/images/upes.png" },
  { name: "NMIMS Online", logo: "/images/nmims.png" },
  { name: "Sharda University", logo: "/images/sharda.png" },
  { name: "DY Patil", logo: "/images/dypatil.png" },
  { name: "Jain University", logo: "/images/jain.png" },
  { name: "Chandigarh University", logo: "/images/chandigarh.jpg" }
];

// University logos for the slider
const UniversityLogoSlider = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {

      setItemsToShow(6);

    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      
    <section className="py-1 bg-white">
      <div className="max-w-7xl mx-auto px-1">
        <div className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>

          {/* Auto-scrolling Marquee Container with Framer Motion */}
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 * (universityLogos.length / itemsToShow) + "%"]
            }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
              pause: isPaused
            }}
          >
            {/* Double the logos for seamless looping */}
            {[...universityLogos, ...universityLogos].map((university, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="h-24 w-full flex items-center justify-center px-2">
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    width={100}
                    height={100}
                    className="max-h-14 max-w-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
  const toggleUniversity = (name) => {
    const slug = slugify(name);
    setSelectedUniversities((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug].slice(0, 3)
    );
  };
  const canCompare = selectedUniversities.length >= 2 && selectedUniversities.length <= 3;
  const startCompare = () => {
    if (!canCompare) return;
    router.push(`/compare?u=${selectedUniversities.join(',')}`);
  };

  // Map course titles to course detail routes
  const getCourseHref = (title) => {
    const map = {
      'MBA Online': '/courses/mba-online',
      'MSC Online': '/courses/msc-online',
      'BBA Online': '/courses/bba-online',
      'MCA Online': '/courses/mca-online',
      'BCA Online': '/courses/bca-online',
      'M.Com Online': '/courses/mcom-online',
      'B.Com Online': '/courses/bcom-online',
      'MA Online': '/courses/ma-online',
      'BA Online': '/courses/ba-online',
      'MAJMC Online': '/courses/majmc-online',
      'BAJMC Online': '/courses/bajmc-online',
    };
    return map[title] || '/coursesearch';
  };

  const getUniversityHref = (name) => {
    const n = name.toLowerCase();
    if (n.includes('amity')) return '/amity';
    if (n.includes('manipal')) return '/manipal';
    if (n.includes('lovely professional') || n.includes('lpu')) return '/lpu';
    if (n.includes('petroleum') || n.includes('upes')) return '/upes';
    if (n.includes('narsee monjee') || n.includes('nmims')) return '/nmims';
    if (n.includes('sharda')) return '/sharda';
    if (n.includes('dy patil') || n.includes('d.y.')) return '/dypatil';
    if (n.includes('jain')) return '/jain';
    if (n.includes('chandigarh')) return '/chandigarh';
    if (n.includes('jindal')) return '/opjindal';
    if (n.includes('vivekananda global') || n.includes('vgu')) return '/vgu';
    if (n.includes('shoolini')) return '/shoolini';
    return '/listofcollege';
  };

  // Hero slider
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);



  // Function to open modal with specific type
  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section - Professional, focused */}
      <section className="relative text-white overflow-hidden">
        <div className="relative w-full">
          {/* Slides - Responsive aspect ratio */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] bg-[#001e3c] overflow-hidden">
            {heroSlides.map((s, idx) => (
              <motion.div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ${idx === slide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: idx === slide ? 1 : 0, scale: idx === slide ? 1 : 1.06 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={s.src}
                  alt={`${s.title} – ${s.subtitle} | Online University Degree guidance`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  className="object-cover object-center"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding={idx === 0 ? "auto" : "async"}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c]/60 via-[#001e3c]/40 to-transparent sm:from-[#001e3c]/90 sm:via-[#001e3c]/75" />
              </motion.div>
            ))}
          </div>

          {/* Content overlay - visible from sm and up */}
          <div className="pointer-events-none absolute inset-0 hidden sm:flex items-center">
            <div className="pointer-events-auto text-left px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl lg:max-w-3xl xl:max-w-4xl"
              >
                {/* Responsive Typography (professional, compact) */}
                <div className="bg-transparent rounded-2xl p-4 sm:p-6 inline-block max-w-2xl">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold mb-1 sm:mb-3 leading-tight text-white tracking-tight">
                    {heroSlides[slide].title}
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 text-cyan-200">
                    {heroSlides[slide].subtitle}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100/90 mb-5 sm:mb-6 leading-relaxed">
                    {heroSlides[slide].description}
                  </p>
                </div>

                {/* Responsive Button Layout */}
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => openModal("getStarted")}
                    className="bg-[#00d4c4] text-[#001e3c]
                               w-full sm:w-auto px-5 lg:px-6 py-3.5 lg:py-4 rounded-full 
                               text-sm sm:text-base lg:text-lg font-semibold
                               hover:bg-[#00c0b1]
                               transition-colors duration-200 cursor-pointer 
                               shadow-md flex items-center justify-center gap-2"
                  >
                    <FaRocket className="text-sm sm:text-base lg:text-lg" />
                    <span className="hidden xs:inline">Get Started Today</span>
                    <span className="xs:hidden">Get Started</span>
                  </button>

                  <button
                    onClick={() => openModal("videoCall")}
                    className="w-full sm:w-auto px-5 lg:px-6 py-3.5 lg:py-4 rounded-full 
                               text-sm sm:text-base lg:text-lg font-semibold 
                               text-white bg-gradient-to-r from-slate-900 to-indigo-800
                               hover:from-slate-950 hover:to-indigo-900
                               shadow-md hover:shadow-lg ring-1 ring-white/10 cursor-pointer
                               transition-all duration-200 
                               flex items-center justify-center gap-2"
                  >
                    <FaVideo className="text-sm sm:text-base lg:text-lg" />
                    <span className="hidden sm:inline">Book a Video Call</span>
                    <span className="sm:hidden">Video Call</span>
                  </button>

                  <button
                    onClick={() => openModal("homeDemo")}
                    className="w-full sm:w-auto px-5 lg:px-6 py-3.5 lg:py-4 rounded-full 
                               text-sm sm:text-base lg:text-lg font-semibold 
                               text-white bg-gradient-to-r from-indigo-600 to-cyan-600
                               hover:from-indigo-700 hover:to-cyan-700
                               shadow-md hover:shadow-lg ring-1 ring-white/10 cursor-pointer
                               transition-all duration-200 
                               flex items-center justify-center gap-2"
                  >
                    <FaMapMarkerAlt className="text-sm sm:text-base lg:text-lg" />
                    <span className="hidden lg:inline">Book a Home Demo</span>
                    <span className="hidden sm:inline lg:hidden">Home Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </button>
                </div>

                {/* Auto-open Countdown Indicator */}

              </motion.div>
            </div>
          </div>

          {/* Mobile content band below slider - Enhanced */}
          <div className="block sm:hidden bg-gradient-to-br from-[#001e3c] via-[#003b6c] to-[#001e3c] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-lg"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 py-8">
              {/* Mobile Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-6"
              >
                <h1 className="text-2xl font-bold text-white mb-3 leading-tight">
                  {heroSlides[slide].title}
                </h1>
                <h2 className="text-lg font-medium mb-3 text-cyan-200">
                  {heroSlides[slide].subtitle}
                </h2>
                <p className="text-sm text-white/90 mb-6 leading-relaxed px-2">
                  {heroSlides[slide].description}
                </p>
              </motion.div>

              {/* Mobile Buttons - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                {/* Primary CTA Button */}
                <button
                  onClick={() => openModal('getStarted')}
                  className="w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] 
                           px-6 py-4 rounded-2xl text-base font-bold 
                           hover:from-[#00d4c4] hover:to-[#00ffe0] 
                           transform hover:scale-105 transition-all duration-300 
                           shadow-lg hover:shadow-xl
                           flex items-center justify-center gap-3"
                >
                  <FaRocket className="text-lg" />
                  <span>Get Started Today</span>
                </button>

                {/* Secondary Buttons Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => openModal('videoCall')}
                    className="bg-white/15 backdrop-blur-sm text-white px-4 py-4 rounded-xl 
                             text-sm font-semibold hover:bg-white/25 transition-all duration-300
                             transform hover:scale-105 border border-white/20
                             flex items-center justify-center gap-2"
                  >
                    <FaVideo className="text-base" />
                    <span>Video Call</span>
                  </button>
                  
                  <button
                    onClick={() => openModal('homeDemo')}
                    className="bg-white/15 backdrop-blur-sm text-white px-4 py-4 rounded-xl 
                             text-sm font-semibold hover:bg-white/25 transition-all duration-300
                             transform hover:scale-105 border border-white/20
                             flex items-center justify-center gap-2"
                  >
                    <FaMapMarkerAlt className="text-base" />
                    <span>Home Demo</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-6 pt-4 text-xs text-white/70">
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-cyan-400" />
                    <span>5K+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUniversity className="text-cyan-400" />
                    <span>25+ Universities</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaAward className="text-cyan-400" />
                    <span>UGC Approved</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Dots - Responsive positioning */}
          <div className="absolute inset-x-0 bottom-1 sm:bottom-4 md:bottom-6 lg:bottom-8 flex items-center justify-center gap-2 sm:gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-3 sm:h-4 w-3 sm:w-4 rounded-full transition-all duration-300 ${i === slide
                    ? 'bg-[#00ffe0] w-8 sm:w-10 scale-125 shadow-lg shadow-[#00ffe0]/50'
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Workflow Roadmap */}
      <WorkflowRoadmap onGetStartedClick={() => openModal("getStarted")} />

      {/* Services - SEO-optimized with CTAs */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#001e3c] mb-2">
              Career Counseling for Online UGC-Approved University Degrees
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-3"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Best Career Planning Services with trusted EdTech Solutions in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Video Call Counseling */}
            <motion.div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaVideo className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">Video Call Counseling</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Virtual learning guidance to compare accredited Online University Degree options, fees, and placements.
              </p>
              <button onClick={() => openModal('videoCall')} className="w-full bg-[#00d4c4] text-[#001e3c] py-2.5 rounded-xl font-semibold hover:bg-[#00c0b1] transition-colors">
                Book Your Free Counseling
              </button>
            </motion.div>

            {/* Home Demo Counseling */}
            <motion.div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaHome className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">Home Demo Counseling</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Personalized in-home session for students and parents with trusted university comparisons and timelines.
              </p>
              <button onClick={() => openModal('homeDemo')} className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-2.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-cyan-700 transition-colors">
                Schedule a Home Demo
              </button>
            </motion.div>

            {/* Career Planning */}
            <motion.div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaCompass className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">Career Planning</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Strategic career roadmap aligned with in-demand skills and the best career planning services.
              </p>
              <button onClick={() => openModal('getStarted')} className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-semibold hover:bg-black transition-colors">
                Start Your Journey Today
              </button>
            </motion.div>
          </div>

          {/* Trust bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-[#001e3c]">UGC-DEB/AICTE/NAAC</span> accredited partners
            </div>
            <div className="text-sm text-gray-600">Transparent, unbiased guidance</div>
            <div className="text-sm text-gray-600">Student-friendly support across India</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}


      {/* Stats Section - Responsive Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                  <stat.icon className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001e3c] mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Responsive Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight text-[#001e3c] mb-2">
              UGC-Approved Online University Degrees: Top Programs & Universities
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
                        <div className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <course.icon className="text-xl sm:text-2xl text-white" />
                        </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">{course.title}</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">{course.desc}</p>
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
                {courses.filter(c => c.students === "UG").map((course, index) => (
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
                        <div className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <course.icon className="text-xl sm:text-2xl text-white" />
                        </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">{course.title}</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">{course.desc}</p>
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
                {courses.filter(c => c.students === "PG").map((course, index) => (
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
                        <div className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <course.icon className="text-xl sm:text-2xl text-white" />
                        </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">{course.title}</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">{course.desc}</p>
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
      {/* Enhanced Universities Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-3">
              UGC-Approved Online University Degrees: Partner Universities
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
                {/* Enhanced Card Wrapper with Blue Theme */}
                <div className="relative rounded-2xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100
            shadow-lg group-hover:shadow-xl transition-all duration-500 hover:-translate-y-2 
            h-full flex flex-col min-h-[480px]">

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute transform rotate-45 translate-x-10 -translate-y-10 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 w-28 h-10"></div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
              bg-gradient-to-br from-blue-500/10 to-indigo-600/10"></div>

                  {/* Top Section */}
                  <div className="p-5 sm:p-6 relative z-[1]">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-sm text-[11px] sm:text-xs font-medium px-2 py-1">
                        {college.ranking}
                      </Badge>
                      <div className="flex items-center gap-1 bg-white/90 rounded-full py-1 px-2 shadow-sm">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-sm font-medium text-gray-700">{college.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Logo/Image area - Updated */}
                  {/* Logo/Image area - Enlarged */}
                  {/* Logo/Image area - Full Size */}
                  <div className="w-full">
                    <div className="h-52 w-full bg-white flex items-center justify-center overflow-hidden rounded-xl border border-blue-200 shadow-sm">
                      <Image
                        src={college.logo}
                        alt={`${college.name} logo`}
                        width={100}
                        height={100}
                        loading="lazy"
                        priority={college.isMain}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>



                  {/* Content Area */}
                  <div className="p-5 sm:p-6 relative z-[1] flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-gray-900 transition-colors">
                      {college.name}
                    </h3>

                    {/* Features List with Checkmarks */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-xs text-gray-600">{college.features || "UGC-DEB Approved |"}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-xs text-gray-600">100% Online Classes & Exams</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-xs text-gray-600">WES Recognized Degree</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Fees:</span> {college.fee}
                    </div>

                    {/* Additional Info (if available) */}
                    {college.courses && (
                      <div className="mt-2 text-xs text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {college.courses}+ Courses
                      </div>
                    )}

                    {/* Apply Now Button */}
                    {/* Button sticks to bottom */}
                    <div className="mt-auto pt-4">
  <a href={getUniversityHref(college.name)} className="block w-full">
    <div
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700
        text-white py-3 px-4 rounded-xl font-semibold text-center 
        hover:from-blue-700 hover:to-indigo-800 transform hover:scale-[1.02] 
        transition-all duration-200 text-sm shadow-md hover:shadow-lg
        relative overflow-hidden group"
    >
      <span className="relative z-10">
        {college.name} Details
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </div>
  </a>
</div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/*     
    <div className="text-center mt-12">
      <button  onClick={() => navigate("/listofcollege")} 
      className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 
        text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 
        transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
        View All Universities
      </button> 
    </div> */}
        </div>
      </section>


      {/* Compare Online Universities - Enhanced */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-3 sm:mb-4">
              Online University Degrees vs Traditional Campus: Complete Comparison
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Select up to 3 universities to compare fees, accreditation, placements and more
            </p>
          </motion.div>

          {/* Compare Controls - Enhanced */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-2xl border border-blue-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md text-white">
                <FaCompass className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a365d]">Compare Universities</h3>
                <p className="text-sm text-gray-700">
                  Selected: <span className="font-bold text-blue-600">{selectedUniversities.length}</span>/3
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
              className={`group px-6 sm:px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all text-sm sm:text-base ${canCompare
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              <FaArrowRight className={canCompare ? "group-hover:translate-x-1 transition-transform" : ""} />
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
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${isSelected
                      ? 'ring-2 ring-blue-500 shadow-xl'
                      : 'border border-blue-100 shadow-md hover:shadow-xl'
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
                      <div className={`flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-white border border-blue-200 flex items-center justify-center p-2 ${isSelected ? 'ring-2 ring-blue-500/30' : ''
                        }`}>
                        <Image
                          src={college.logo}
                          alt={`${college.name} logo`}
                          width={100}
                          height={100}
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
                            <span className="font-semibold">{college.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fee Information */}
                    <div className="bg-blue-100/50 rounded-lg p-3 mb-4 border border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Approx. Fees:
                        </span>
                        <span className="text-sm font-bold text-blue-700">{college.fee}</span>
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
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center ${isSelected
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tip: Select 2-3 universities to compare features side by side
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition - Responsive slider */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#001e3c] mb-3 sm:mb-4">
              UGC-Approved Online University Degrees: Accreditation & Recognition
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We partner only with accredited and government-recognized institutions
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 animate-[accreditScroll_25s_linear_infinite] will-change-transform">
              {[...accreditationLogos, ...accreditationLogos].map((logo, idx) => (
                <div key={idx} className="min-w-[80px] sm:min-w-[100px] md:min-w-[140px] rounded-xl p-3 sm:p-4 bg-white shadow-sm border border-gray-100 flex items-center justify-center h-16 sm:h-20 md:h-24">
                  <Image src={logo} alt="Accreditation and recognition logo" width={100} height={100} loading="lazy" className="max-h-10 sm:max-h-12 md:max-h-14 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            @keyframes accreditScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#001e3c] mb-4 sm:mb-6">
              Career Counseling Services: Your Path to Success
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the difference that personalized guidance makes in your educational journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 group-hover:shadow-2xl">
                  <div className={`bg-gradient-to-br ${feature.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h6 className="text-lg sm:text-xl font-bold text-[#001e3c] mb-3 sm:mb-4">{feature.title}</h6>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Study Cities */}
      <section className="bg-[#08223a] py-16 px-6 text-white overflow-hidden relative" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">UGC-Approved Online University Degrees: Study Cities Across India</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">Explore top universities offering online university degrees across India's major educational hubs with career counseling support.</p>

          <div className="overflow-hidden relative backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="flex gap-10 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].flatMap((_, i) =>
                cities.map((city, idx) => (
                  <motion.div
                    key={`city-${i}-${idx}`}
                    whileHover={{ y: -6 }}
                    className="min-w-[150px] flex flex-col items-center text-center bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Image src={city.img} alt={`${city.city}, ${city.state} study city`} width={100}
                      height={100} className="w-16 h-16 object-contain mb-2 rounded-full border border-white/20 shadow" />
                    <p className="text-white font-semibold text-sm">{city.city}</p>
                    <p className="text-blue-200 text-xs">{city.state}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-14 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to find your program?</h3>
            <p className="text-white/80 mt-2">Talk to our counselors and get a personalized shortlist.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => openModal('getStarted')}
              className="px-6 py-3 rounded-full bg-[#00d4c4] text-[#001e3c] font-semibold hover:bg-[#00c0b1] transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => openModal('videoCall')}
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={[
          {
            question: "Are online university degrees UGC-approved and recognized?",
            answer: "Yes, all online university degrees we recommend are UGC-approved and fully recognized by the University Grants Commission. These degrees have the same value as traditional campus programs and are accepted by employers, government organizations, and for higher studies."
          },
          {
            question: "How does career counseling help in choosing online university degrees?",
            answer: "Our career counseling provides personalized guidance based on your career goals, academic background, and industry requirements. Our experts help you select UGC-approved programs that align with your professional aspirations, ensuring you make informed decisions about your education."
          },
          {
            question: "What are the benefits of UGC-approved online university degrees?",
            answer: "UGC-approved online university degrees offer the same value as campus programs with added benefits of flexibility, cost-effectiveness, comprehensive career counseling support, and the ability to study while working. They are fully recognized and accepted globally."
          },
          {
            question: "How do I apply for online university degrees through UNIFOST?",
            answer: "Applying is simple! Contact our career counselors who will guide you through the entire process - from university selection to application submission. We provide end-to-end support including document preparation, application assistance, and admission guidance."
          },
          {
            question: "What courses are available in online university degrees?",
            answer: "We offer a wide range of UGC-approved online courses including MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and specialized programs. All courses are from top-ranked universities with flexible learning options and career counseling support."
          },
          {
            question: "Is there any difference between online and regular degrees?",
            answer: "No, UGC-approved online degrees have the same value and recognition as regular degrees. The only difference is the mode of delivery - online degrees offer more flexibility and convenience while maintaining the same academic standards and curriculum."
          },
          {
            question: "How much do online university degrees cost?",
            answer: "Online university degrees are generally more cost-effective than traditional programs. Costs vary by university and program, typically ranging from ₹1-4 lakhs for complete programs. Our career counselors can help you compare costs and find the best value options."
          },
          {
            question: "What support do you provide during the online degree program?",
            answer: "We provide comprehensive support throughout your online degree journey including academic guidance, career counseling, placement assistance, networking opportunities, and 24/7 technical support. Our team ensures you have everything needed for success."
          }
        ]}
        title="Frequently Asked Questions About Online University Degrees"
      />

      {/* Unified Modal - Responsive */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
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