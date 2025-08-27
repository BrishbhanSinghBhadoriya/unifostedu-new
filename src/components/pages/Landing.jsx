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
  FaCalendar, FaCalendarAlt, FaChevronLeft, FaChevronRight
} from "react-icons/fa";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

// Enhanced data arrays
const heroSlides = [
  { 
    src: "/slider/slider-1.png", 
    alt: "Compare before you decide",
    title: "Your Gateway to Success",
    subtitle: "Compare • Choose • Succeed",
    description: "Find the perfect online degree program from top universities"
  },
  { 
    src: "/slider/slider-2.png", 
    alt: "Your One-Stop Platform for Online Universities",
    title: "Transform Your Future",
    subtitle: "Online Education Excellence",
    description: "Access world-class education from anywhere, anytime"
  },
  { 
    src: "/slider/slider-3.png", 
    alt: "Search • Compare • Choose • Succeed",
    title: "Smart Education Choices",
    subtitle: "Expert Guidance • Best Programs",
    description: "Get personalized counseling for your academic journey"
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
  { title: "Expert Counseling", description: "Get personalized guidance from education experts", icon: FaUserTie, color: "from-blue-500 to-teal-600" },
  { title: "Compare Programs", description: "Side-by-side comparison of courses and universities", icon: FaCompass, color: "from-blue-500 to-teal-600" },
  { title: "Flexible Learning", description: "Study at your own pace from anywhere", icon: FaGlobe, color: "from-blue-500 to-teal-600" },
  { title: "Career Support", description: "Get assistance with job placement and career guidance", icon: FaBriefcase, color: "from-blue-500 to-teal-600" }
];

const colleges = [
      { name: "Amity University Online", ranking: "NIRF-29", fee: "₹0.99L - ₹3.45L", logo: "/images/amity.png", rating: 4.8 },
    { name: "Manipal University Online", ranking: "NIRF-73", fee: "0.99L - ₹2.92L", logo: "/images/manipal1.png", rating: 4.6 },
    { name: "Lovely Professional University Online", ranking: "NIRF-38", fee: "₹0.80L - ₹2.0L", logo: "/images/lpu.png", rating: 4.1},
    { name: "University of Petroleum and Energy Studies Online", ranking: "NIRF-41", fee: "₹1.50L - ₹2.20L", logo: "/images/upes.png", rating: 4.4 },
    { name: "Narsee Monjee Institute of Management Studies Online", ranking: "NIRF-21", fee: "₹0.94L - ₹2.20L", logo: "/images/nmims.png", rating: 4.5 },
    { name: "Sharda University Online", ranking: "NIRF-87", fee: "₹1.05L - ₹1.60L", logo: "/images/sharda.png", rating: 4.1 },
    { name: "Dr. DY Patil Online", ranking: "NIRF-63", fee: "₹1.40L - ₹1.90L", logo: "/images/dypatil.png", rating: 4.4 },
    { name: "Jain University Online", ranking: "NIRF-77", fee: "₹1.30L - ₹2.16L", logo: "/images/jain.png", rating: 4.5 },
    { name: "Chandigarh University Online", ranking: "NIRF-36", fee: "₹1.0L - ₹2.10L", logo: "/images/chandigarh.jpg", rating: 4.7 },
  
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
                  <img 
                    src={university.logo} 
                    alt={university.name} 
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
          <div className="relative w-full h-[20vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] bg-[#001e3c]">
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
                  alt={s.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Enhanced Overlay - Responsive gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c]/85 via-[#001e3c]/65 to-transparent" />
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-3 leading-tight text-white tracking-tight">
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
              </motion.div>
            </div>
          </div>

          {/* Mobile content band below slider */}
          <div className="block sm:hidden bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="max-w-2xl">
                <h1 className="text-2xl font-semibold mb-1 tracking-tight">{heroSlides[slide].title}</h1>
                <h2 className="text-base font-medium mb-2 text-cyan-200">{heroSlides[slide].subtitle}</h2>
                <p className="text-sm text-white/90 mb-4">{heroSlides[slide].description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => openModal('getStarted')}
                  className="bg-[#00d4c4] text-[#001e3c] w-full px-5 py-3.5 rounded-full text-base font-semibold hover:bg-[#00c0b1] transition-colors"
                >
                  Get Started Today
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => openModal('videoCall')}
                    className="px-5 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r  hover:shadow-lg ring-1 ring-white/10 transition-all"
                  >
                    Video Call
                  </button>
                  <button 
                    onClick={() => openModal('homeDemo')}
                    className="px-5 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-md hover:shadow-lg ring-1 ring-white/10 transition-all"
                  >
                    Home Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Dots - Responsive positioning */}
          <div className="absolute inset-x-0 bottom-0 md:bottom-4 sm:bottom-6 md:bottom-8 flex items-center justify-center gap-2 sm:gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all duration-300 ${
                  i === slide 
                    ? 'bg-[#00d4c4] w-6 sm:w-8' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
       
      {/* Workflow Roadmap */}
      <WorkflowRoadmap onGetStartedClick={() => openModal("getStarted")} />

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
     <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <motion.div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001e3c] mb-3">
            Top Partner Universities
          </h2>
          <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from India's most prestigious online universities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {colleges.map((college, index) => (
    <motion.div
      key={index}
      className="group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#00ffe0]/10 to-[#00d4c4]/10"></div>

        <div className="p-5 sm:p-6 relative z-[1]">
          <div className="flex items-center justify-between">
            <Badge className="bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium">{college.ranking}</Badge>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-sm font-medium text-gray-700">{college.rating}</span>
            </div>
          </div>
        </div>

        {/* Logo/Image area */}
        <div className="px-5 sm:px-6">
          <div className="h-28 sm:h-32 w-full rounded-xl border border-gray-100 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center overflow-hidden ring-1 ring-black/5 group-hover:ring-[#00ffe0]/20 group-hover:border-[#00ffe0]/30 transition-all">
            <img src={college.logo} alt={`${college.name} logo`} className="max-h-20 sm:max-h-24 w-auto object-contain" />
          </div>
        </div>

        <div className="p-5 sm:p-6 relative z-[1]">
          <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-2 line-clamp-2">{college.name}</h3>
          <div className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Fees:</span> {college.fee}
          </div>
          <a href={getUniversityHref(college.name)} className="block w-full">
            <div className="w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-2.5 px-4 rounded-xl font-semibold text-center hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-[1.02] transition-all duration-200 text-sm ring-1 ring-[#00ffe0]/40">
              Learn More
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>
</div>
      </section>


      {/* Compare Online Universities - Enhanced */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#001e3c] mb-3 sm:mb-4">
              Compare Online Universities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Select up to 3 universities to compare fees, accreditation, placements and more
            </p>
          </motion.div>

          {/* Compare Controls - Enhanced */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100">
                <FaCompass className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#001e3c]">Compare Universities</h3>
                <p className="text-sm text-gray-600">
                  Selected: <span className="font-bold text-blue-600">{selectedUniversities.length}</span>/3
                  {selectedUniversities.length > 0 && (
                    <span className="ml-2 text-green-600">
                      ({selectedUniversities.length} selected)
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button
              disabled={!canCompare}
              onClick={startCompare}
              className={`px-6 sm:px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all text-sm sm:text-base ${
                canCompare 
                  ? 'bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <FaArrowRight className={canCompare ? "group-hover:translate-x-1 transition-transform" : ""} />
              Compare Now
            </button>
          </div>

          {/* Enhanced University Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {colleges.map((college, idx) => {
              const slug = slugify(college.name);
              const isSelected = selectedUniversities.includes(slug);
              
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected 
                      ? 'ring-3 ring-[#00ffe0] shadow-xl border-[#00ffe0]' 
                      : 'border border-gray-200 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-[#00ffe0] text-[#001e3c] w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        <FaCheckCircle className="text-sm" />
                      </div>
                    </div>
                  )}
                  
                  {/* Card Content */}
                  <div className="bg-white p-5 sm:p-6">
                    {/* University Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-100 flex items-center justify-center p-2 ${
                        isSelected ? 'ring-2 ring-[#00ffe0]/30' : ''
                      }`}>
                        <img 
                          src={college.logo} 
                          alt={`${college.name} logo`} 
                          className="max-h-10 sm:max-h-12 w-auto object-contain" 
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#001e3c] mb-1 line-clamp-2 leading-tight">
                          {college.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs font-medium">
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
                    <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Approx. Fees:</span>
                        <span className="text-sm font-bold text-[#001e3c]">{college.fee}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <a 
                        href={getUniversityHref(college.name)} 
                        className="flex-1 text-center text-sm font-semibold text-blue-600 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        View Details
                      </a>
                      
                      <button
                        onClick={() => toggleUniversity(college.name)}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          isSelected 
                            ? 'bg-[#00ffe0] text-[#001e3c] hover:bg-[#00d4c4]' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {isSelected ? 'Selected' : 'Compare'}
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-opacity rounded-2xl pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Selection Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
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
              Accreditation & Recognition
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We partner only with accredited and government-recognized institutions
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 animate-[accreditScroll_25s_linear_infinite] will-change-transform">
              {[...accreditationLogos, ...accreditationLogos].map((logo, idx) => (
                <div key={idx} className="min-w-[80px] sm:min-w-[100px] md:min-w-[140px] rounded-xl p-3 sm:p-4 bg-white shadow-sm border border-gray-100 flex items-center justify-center h-16 sm:h-20 md:h-24">
                  <img src={logo} alt="Accreditation" className="max-h-10 sm:max-h-12 md:max-h-14 object-contain" />
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
              Why Choose <span className="text-[#00ffe0]">Unifost</span>?
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
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Study Cities Across India</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">Explore top universities across India's major educational hubs.</p>

          <div className="overflow-hidden relative backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="flex gap-10 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].flatMap((_, i) =>
                cities.map((city, idx) => (
                  <motion.div
                    key={`city-${i}-${idx}`}
                    whileHover={{ y: -6 }}
                    className="min-w-[150px] flex flex-col items-center text-center bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <img src={city.img} alt={city.city} className="w-16 h-16 object-contain mb-2 rounded-full border border-white/20 shadow" />
                    <p className="text-white font-semibold text-sm">{city.city}</p>
                    <p className="text-blue-200 text-xs">{city.state}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#001e3c] mb-3">What Students Say</h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4]"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              quote: 'Unifost helped me compare programs easily and pick the right MBA.',
              name: 'Aarav Sharma',
              subtitle: 'MBA Student, NMIMS Online'
            }, {
              quote: 'The counseling was spot-on. I saved time and money.',
              name: 'Neha Gupta',
              subtitle: 'BBA Student, Amity Online'
            }, {
              quote: 'Great experience from enquiry to enrollment. Highly recommended.',
              name: 'Rohit Verma',
              subtitle: 'MCA Student, Manipal Online'
            }].map((t, i) => (
              <motion.div key={i} className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                <p className="text-gray-700 mb-4 leading-relaxed">“{t.quote}”</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[#001e3c] font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.subtitle}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Unified Modal - Responsive */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl  lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[30001]">
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