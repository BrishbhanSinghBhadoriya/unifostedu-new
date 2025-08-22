'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
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
    src: "/slider/banner-3.png", 
    alt: "Search • Compare • Choose • Succeed",
    title: "Smart Education Choices",
    subtitle: "Expert Guidance • Best Programs",
    description: "Get personalized counseling for your academic journey"
  }
];

const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular", icon: FaGraduationCap, duration: "2 Years", students: "PG", color: "from-blue-500 to-purple-600" },
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
  { number: "5K+", label: "Students Enrolled", icon: FaUsers, color: "from-blue-500 to-purple-600" },
  { number: "25+", label: "Partner Universities", icon: FaUniversity, color: "from-green-500 to-teal-600" },
  { number: "100%", label: "Success Rate", icon: FaAward, color: "from-orange-500 to-red-600" },
  { number: "24/7", label: "Support Available", icon: FaHeadset, color: "from-purple-500 to-pink-600" }
];

const features = [
  { title: "Expert Counseling", description: "Get personalized guidance from education experts", icon: FaUserTie, color: "from-blue-500 to-purple-600" },
  { title: "Compare Programs", description: "Side-by-side comparison of courses and universities", icon: FaCompass, color: "from-green-500 to-teal-600" },
  { title: "Flexible Learning", description: "Study at your own pace from anywhere", icon: FaGlobe, color: "from-orange-500 to-red-600" },
  { title: "Career Support", description: "Get assistance with job placement and career guidance", icon: FaBriefcase, color: "from-purple-500 to-pink-600" }
];

const colleges = [
  { name: "Amity University Online", ranking: "NIRF-29", fee: "₹1.2L - ₹2.5L", logo: "/amitylogo.png", rating: 4.8 },
  { name: "Manipal University Online", ranking: "NIRF-73", fee: "₹1.5L - ₹3L", logo: "/manipallogo.png", rating: 4.9 },
  { name: "Lovely Professional University Online", ranking: "NIRF-38", fee: "₹90K - ₹2L", logo: "/lpulogo.png", rating: 4.7 },
  { name: "University of Petroleum and Energy Studies Online", ranking: "NIRF-41", fee: "₹1.8L - ₹3.2L", logo: "/upeslogo.png", rating: 4.6 },
  { name: "Narsee Monjee Institute of Management Studies Online", ranking: "NIRF-21", fee: "₹2L - ₹3.5L", logo: "/nmimslogo.png", rating: 4.9 },
  { name: "Sharda University Online", ranking: "NIRF-", fee: "₹80K - ₹1.5L", logo: "/shardalogo.png", rating: 4.5 },
  { name: "Dr. DY Patil Online", ranking: "NIRF-", fee: "₹1.1L - ₹2.2L", logo: "/dypatillogo.png", rating: 4.6 },
  { name: "Jain University Online", ranking: "NIRF-77", fee: "₹1.3L - ₹2.6L", logo: "/jainlogo.png", rating: 4.7 },
  { name: "Chandigarh University Online", ranking: "NIRF-36", fee: "₹1.3L - ₹2.6L", logo: "/cu-logo.png", rating: 4.7 }
];

const cities = [
  { city: "Delhi", state: "Delhi", img: "/delhi.png", students: "25K+" },
  { city: "Mumbai", state: "Maharashtra", img: "/mumbai.png", students: "22K+" },
  { city: "Bangalore", state: "Karnataka", img: "/banglore.png", students: "20K+" },
  { city: "Chennai", state: "Tamil Nadu", img: "/chennai.png", students: "18K+" },
  { city: "Hyderabad", state: "Telangana", img: "/hyderabad.png", students: "16K+" },
  { city: "Pune", state: "Maharashtra", img: "/pune.png", students: "15K+" },
  { city: "Kolkata", state: "West Bengal", img: "/kolkata.png", students: "14K+" },
  { city: "Ahmedabad", state: "Gujarat", img: "/ahemdabad.png", students: "12K+" }
];

const accreditationLogos = [
  '/ugc.png', '/naac.png', '/nirf.png', '/aicte.png', '/wasc.png', '/aiu.png',
  '/iacbe.png', '/aacsb.png', '/iqas.png', '/wes.png', '/unwto.png', '/nabh.png'
];

// University logos for the slider
const universityLogos = [
  { name: "Amity University", logo: "/amitylogo.jpg" },
  { name: "Manipal University", logo: "/manipallogo.jpg" },
  { name: "Lovely Professional University", logo: "/lpulogo.png" },
  { name: "UPES University", logo: "/upeslogo.png" },
  { name: "NMIMS University", logo: "/nmimslogo.jpg" },
  { name: "Sharda University", logo: "/shardalogo.png" },
  { name: "DY Patil University", logo: "/dypatillogo.png" },
  { name: "Jain University", logo: "/jainlogo.png" },
  { name: "Chandigarh University", logo: "/cu-logo.png" },
  { name: "Vivekananda Global University", logo: "/vgulogo.png" },
  { name: "Shoolini University", logo: "/shoolinilogo.png" },
  { name: "OP Jindal University", logo: "/opjindallogo.png" },
  { name: "eCornell University", logo: "/ecornellogo.png" },
  { name: "Edgewood University", logo: "/edgewoodlogo.png" },
  { name: "Rushford University", logo: "/rushfordlogo.png" },
  { name: "Deakin University", logo: "/deakinlogo.png" },
  { name: "Golden Gate University", logo: "/goldengatelogo.png" },
  { name: "IIM Nagpur", logo: "/iimnagpurlogo.png" },
  { name: "IIM Ahmedabad", logo: "/iimalogo.png" },
  { name: "IIM Udaipur", logo: "/iimulogo.png" },
  { name: "IIM Ranchi", logo: "/iimrlogo.png" },
  { name: "IIT Roorkee", logo: "/iitrlogo.png" },
  { name: "IIT Guwahati", logo: "/iitglogo.png" },
  { name: "IIM Calcutta", logo: "/iimclogo.png" },
  { name: "IIM Bangalore", logo: "/iimlogo.png" },
  { name: "Liverpool University", logo: "/liverpoollogo.png" },
  { name: "IMT University", logo: "/imtlogo.png" },
  { name: "IIT Delhi", logo: "/iitdlogo.png" },
  { name: "Mundra University", logo: "/mundralogo.png" },
  { name: "IIM Kozhikode", logo: "/iimklogo.png" },
  { name: "IIIT Bangalore", logo: "/iiitblogo.png" },
  { name: "Andhra University", logo: "/andhralogo.png" },
  { name: "Kurukshetra University", logo: "/kurkshetralogo.jpg" },
  { name: "Subharti University", logo: "/subhartilogo.jpg" },
  { name: "DY Patil Mumbai", logo: "/dypatilmumbailogo.png" },
  { name: "Amrita University", logo: "/amritalogo.png" }
];

// University Logo Slider Component with Framer Motion Auto-Scrolling
const UniversityLogoSlider = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(2);
      } else if (window.innerWidth < 768) {
        setItemsToShow(3);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(4);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(5);
      } else {
        setItemsToShow(6);
      }
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
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Function to open modal with specific type
  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section - Fully Responsive */}
      <section className="relative text-white overflow-hidden">
        <div className="relative w-full">
          {/* Slides - Responsive aspect ratio */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] bg-gradient-to-br from-[#001e3c] to-[#003b6c]">
            {heroSlides.map((s, idx) => (
              <motion.div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ${idx === slide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: idx === slide ? 1 : 0, scale: idx === slide ? 1 : 1.1 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src={s.src} 
                  alt={s.alt} 
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: 'center' }}
                />
                {/* Enhanced Overlay - Responsive gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c]/80 via-[#001e3c]/60 to-transparent md:from-[#001e3c]/70 md:via-[#001e3c]/50 md:to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Content overlay - Fully responsive */}
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="pointer-events-auto text-left px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl lg:max-w-3xl xl:max-w-4xl"
              >
                {/* Responsive Typography (professional, compact) */}
                <div className="bg-transparent rounded-2xl p-4 sm:p-6 inline-block max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 leading-tight text-white">
                    {heroSlides[slide].title}
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    {heroSlides[slide].subtitle}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200/90 mb-5 sm:mb-6 leading-relaxed">
                    {heroSlides[slide].description}
                  </p>
                </div>

                {/* Responsive Button Layout */}
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    onClick={() => openModal("getStarted")}
                    className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] 
                               w-full sm:w-auto px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 rounded-full 
                               text-sm sm:text-base lg:text-lg font-semibold
                               hover:from-[#00d4c4] hover:to-[#00ffe0]
                               transform hover:scale-105 transition-all duration-300 
                               shadow-md shadow-[#00ffe0]/30 flex items-center justify-center gap-2"
                  >
                    <FaRocket className="text-sm sm:text-base lg:text-lg" />
                    <span className="hidden xs:inline">Get Started Today</span>
                    <span className="xs:hidden">Get Started</span>
                  </button>

                  <button 
                    onClick={() => openModal("videoCall")}
                    className="w-full sm:w-auto px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 rounded-full 
                               text-sm sm:text-base lg:text-lg font-semibold 
                               bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 text-white 
                               shadow-xl shadow-rose-500/30 ring-2 ring-white/30 
                               hover:from-rose-500 hover:via-pink-500 hover:to-fuchsia-500 
                               transform hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 
                               flex items-center justify-center gap-2"
                  >
                    <FaVideo className="text-sm sm:text-base lg:text-lg" />
                    <span className="hidden sm:inline">Book a Video Call</span>
                    <span className="sm:hidden">Video Call</span>
                  </button>

                  <button 
                    onClick={() => openModal("homeDemo")}
                    className="w-full sm:w-auto px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 rounded-full 
                               text-sm sm:text-base lg:text-lg font-semibold 
                               bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white 
                               shadow-xl shadow-orange-500/30 ring-2 ring-white/30 
                               hover:from-rose-500 hover:via-orange-500 hover:to-amber-400 
                               transform hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 
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

          {/* Enhanced Dots - Responsive positioning */}
          <div className="absolute inset-x-0 bottom-4 sm:bottom-6 md:bottom-8 flex items-center justify-center gap-2 sm:gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all duration-300 ${
                  i === slide 
                    ? 'bg-[#00ffe0] w-6 sm:w-8 shadow-lg shadow-[#00ffe0]/50' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

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

      {/* Enhanced Programs Section - Responsive Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 sm:mb-14"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-[#001e3c] mb-2">
              Select the Best Programs
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore curated online programs from leading universities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {courses.map((course, index) => (
              <motion.a
                key={index}
                href={getCourseHref(course.title)}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow group cursor-pointer hover:bg-slate-50/60 hover:border-gray-300 ring-0 hover:ring-2 hover:ring-[#00ffe0]/20">
                  <div className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                    <course.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium">
                    {course.tag}
                  </Badge>
                  <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5">{course.title}</h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed">{course.desc}</p>
                  <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600">
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
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Universities Section */}
     <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <motion.div className="text-center mb-16" data-aos="fade-up" > 
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
             🏆 Top Partner Universities 
             </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Choose from India's most prestigious online universities
                  </p>
                   </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {colleges.map((college, index) => (
    <motion.div
      key={index}
      className="group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div
        className="relative rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 group-hover:shadow-2xl h-64 flex flex-col justify-between p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${college.logo})` }}
      >
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div> */}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <Badge className="bg-[#00ffe0] text-[#001e3c]">{college.ranking}</Badge>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-medium text-white">{college.rating}</span>
          </div>
        </div>

        <div className="relative z-10 text-white">
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{college.name}</h3>
          <div className="text-sm mb-4">
            <span className="font-medium">Fees:</span> {college.fee}
          </div>
          <a href={getUniversityHref(college.name)} className="block w-full">
            <div className="w-full bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white py-2 px-4 rounded-xl font-medium text-center hover:from-[#003b6c] hover:to-[#001e3c] transform hover:scale-105 transition-all duration-300">
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

      {/* Compare Online Universities - Responsive */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001e3c] mb-3 sm:mb-4">
              🎓 Compare Online Universities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Select up to 3 universities to compare fees, accreditation, placements and more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {colleges.map((college, idx) => {
              const slug = slugify(college.name);
              const isSelected = selectedUniversities.includes(slug);
              return (
                <div key={idx} className={`rounded-2xl border ${isSelected ? 'border-[#00ffe0]' : 'border-gray-200'} p-4 sm:p-5 bg-white shadow-sm hover:shadow-lg transition-all`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-lg font-semibold text-[#001e3c]">{college.name}</h3>
                      <div className="mt-2 text-xs sm:text-sm text-gray-600"><span className="font-medium">Fees:</span> {college.fee}</div>
                      <div className="mt-1 text-xs sm:text-sm text-gray-600"><span className="font-medium">Ranking:</span> {college.ranking}</div>
                    </div>
                    <button 
                      onClick={() => toggleUniversity(college.name)}
                      className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex-shrink-0 ${isSelected ? 'bg-[#00ffe0] text-[#001e3c]' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-600 text-sm">
              Selected: <span className="font-semibold text-[#001e3c]">{selectedUniversities.length}</span> / 3
            </div>
            <button
              disabled={!canCompare}
              onClick={startCompare}
              className={`px-6 sm:px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all text-sm sm:text-base ${canCompare ? 'bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] shadow-lg' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
            >
              Compare Now
              <FaArrowRight />
            </button>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001e3c] mb-3 sm:mb-4">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001e3c] mb-4 sm:mb-6">
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

      {/* Enhanced CTA Section - Responsive */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#001e3c] to-[#003b6c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            data-aos="fade-up"
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Join thousands of students who have transformed their careers with Unifost
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button 
              onClick={() => openModal("getStarted")}
              className="  bg-[#00ffe0] text-[#001e3c] cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
            >
              <FaRocket className="text-lg sm:text-xl" />
              Get Started Today
            </button>
            <button 
              onClick={() => openModal("videoCall")}
              className="border-2 border-white text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-[#001e3c] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPhone className="text-lg sm:text-xl" />
              Call Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Unified Modal - Responsive */}
     {/* In your landing.jsx file */}
{showEnquiryModal && (
  <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
    <DialogContent className="p-4 sm:p-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl z-[30001] mx-4">
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