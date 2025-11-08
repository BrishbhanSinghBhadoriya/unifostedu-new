'use client';
import React, { useState,useEffect } from 'react';
import {
  FaBookOpen,
  FaUserTie,
  FaTimes,
  FaRobot,
  FaBriefcase,
  FaBook,
  FaUniversity,
  FaUserFriends,
  FaClipboardCheck,
  FaGraduationCap,
  FaAward,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
  FaClock,
  FaMoneyBillWave,
  FaCertificate,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaChartLine,
  FaQuoteLeft,
  FaPhone,
  FaWhatsapp
} from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import EnquireCard from '@/components/EnquireCard';
import * as Tabs from '@radix-ui/react-tabs'
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import EnquiryForm from '@/components/EnquiryForm';

const Jain = () => {
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [openModal, setOpenModal] = useState(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleFaq = (index) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    
    const rankings = [
    {
      id: 1,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp",
      alt: "UGC Logo",
      text: "JAIN (Deemed-to-be University) awarded Graded Autonomy by University Grants Commission (UGC)",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_rodfbn.png",
      alt: "NAAC Logo",
      text: "National Assessment and Accreditation Council (NAAC) has awarded 'A++' Grade",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp",
      alt: "QS World University Rankings",
      text: "Ranked 91–95 among the top Indian Universities",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp",
      alt: "NIRF Logo",
      text: "Ranked 68th in the Country",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16M8 6v12M16 6v12" />
        </svg>
      ),
      title: "Live Interactive Classes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14v7m0-7L3 9m9 5l9-5" />
        </svg>
      ),
      title: "Recorded Lectures",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M3 12h18" />
          <path d="M3 4h9v16H3z" />
        </svg>
      ),
      title: "Industry Oriented Curriculum",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 20h18M9 20V10h6v10" />
        </svg>
      ),
      title: "Career Growth",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Experiential Learning",
    },
  ];

    const featuressec = [
    {
      title: "Credibility",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
        </svg>
      ),
    },
    {
      title: "Global Curriculum",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
      ),
    },
    {
      title: "Learning Methodology",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M4 4h16v6H4z" />
        </svg>
      ),
    },
    {
      title: "25 Key Skills for Success",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20l4-16M12 20L8 4M12 20l8-8M12 20L4 12" />
        </svg>
      ),
    },
    {
      title: "Cutting-edge Technology",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a8 8 0 01-14.8 0M4.6 9a8 8 0 0114.8 0" />
        </svg>
      ),
    },
    {
      title: "Personalised Support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a6 6 0 1112 0v2" />
        </svg>
      ),
    },
  ];

    const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,95,000",
      specialization: "Online Bachelor of Business Administration, Digital Marketing, Healthcare Management, Data Science and Analytics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "Bachelor of Business Administration (BBA) in Jain University Online",
    },
    
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,35,000 -1,65,000",
      specialization: "Computer Science and IT, Data Science and Analytics, Cyber Security, Artificial Intelligence, Cloud Computing",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      alt: "Bachelor of Computer Applications (BCA) in Jain University Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees : "1,27,500",
      specialization: "Online Bachelor of Commerce, Corporate Accounting",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      alt: "Bachelor of Commerce (B.Com) in Jain University Online",
    },
 
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,96,000 - 2,16,000 ",
      specialization: "Human Resource Management and Finance, Finance and Marketing, Marketing and Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Information Technology Management, Healthcare Management, Supply Chain, Production and Operations Management, Business Intelligence and Analytics, Entrepreneurship and Venture Creation, International Finance, Data Science and Analytics, E-commerce, Artificial Intelligence and Human Resource Management, Digital Marketing, Banking and Finance, Technology Management, General Management, AI-Driven Marketing, AI-Driven Finance, AI-Driven Business Strategy, AI-Driven Human Resource Management,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "Master of Business Administration (MBA) in Jain University Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "1,60,000",
      specialization: "DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence" , 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "Master of Computer Applications (MCA) in Jain University Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,10,000",
      specialization: "Accounting and Finance, Professional Accounting and Finance (Accredited by CPA, US)", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      alt: "Master of Commerce (M.Com) in Jain University Online",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "190,000",
      specialization: "Jainology in Comparative Religion and Philosophy, English, Economics, Public Policy",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      alt: "Master of Arts (MA) in Jain University Online",
    },
  ];

useEffect(() => {
      

      const timer= setTimeout(()=>{
       setOpenModal(true)
      },3000)
      return () => clearTimeout(timer);

       
},[])

    
  const faqData = [
    {
      question: "Is Jain University Online UGC approved?",
      answer: "Yes, Jain University Online is recognized by the University Grants Commission (UGC) and all its online programs are valid and accredited under the UGC guidelines for online education."
    },
    {
      question: "What is the duration of the online MBA program?",
      answer: "The online MBA program at Jain University is a 2-year program divided into 4 semesters, offering flexibility for working professionals to complete their degree."
    },
    {
      question: "Are the online degrees equivalent to on-campus degrees?",
      answer: "Yes, the online degrees awarded by Jain University Online are equivalent to their on-campus counterparts and hold the same value. The degree certificate does not mention 'online' mode of study."
    },
    {
      question: "What specializations are available in the online MBA?",
      answer: "Jain University offers multiple specializations including Human Resource Management, Finance, Marketing, Business Analytics, Information Technology Management, Healthcare Management, Digital Marketing, Artificial Intelligence, and many more emerging fields."
    },
    {
      question: "Is there any placement assistance for online students?",
      answer: "Yes, Jain University provides comprehensive career support including placement assistance, virtual job fairs, resume building workshops, interview preparation, and access to 2,000+ hiring partners."
    },
    {
      question: "What is the eligibility criteria for the online MBA?",
      answer: "Candidates must have a bachelor's degree from a recognized university with minimum 50% marks. Work experience is preferred but not mandatory for admission."
    },
    {
      question: "Are there any EMI options available?",
      answer: "Yes, Jain University offers zero-cost EMI options through various financial partners to make education affordable for students."
    },
    {
      question: "How are the online classes conducted?",
      answer: "Classes are conducted through live interactive sessions, recorded lectures, virtual learning platforms, and include regular assessments, assignments, and doubt-clearing sessions with faculty."
    },
    {
      question: "What is the fee structure for online programs?",
      answer: "Fee structure varies by program. For example, MBA ranges from ₹1,96,000 to ₹2,16,000, BBA is ₹1,95,000, and BCA ranges from ₹1,35,000 to ₹1,65,000 for the entire program duration."
    },
    {
      question: "Is there any scholarship available?",
      answer: "Yes, Jain University offers various scholarships based on academic merit, sports achievements, and for economically disadvantaged students. Specific details can be obtained from the admissions team."
    }
  ];

    const allCourses = [
    ...ugCourses.map(course => ({ ...course, type: "UG" })),
    ...pgCourses.map(course => ({ ...course, type: "PG" })),
  ];

  return (
    <>
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      
       <Head>
        <title>Jain University Online | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Jain University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & NAAC A++ approvals." />
        <meta name="keywords" content="Jain University Online, Jain Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, Online Degrees India, UGC Approved, NAAC A++" />
        <meta name="author" content="Jain University Online" />
        <meta name="robots" content="index, follow" /> 
         <link rel="canonical" href="https://unifostedu.com/jain" />
         
        {/* Open Graph */}
        <meta property="og:title" content="Jain University Online | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/jain" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jain University Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and NAAC A++ approved online courses at Jain University Online." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-2 flex-nowrap">
            {/* Logo - Left Side */}
            <div className="flex-shrink min-w-0">
              <Image 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png" 
                alt="Jain University Online Logo" 
                width={240} 
                height={80} 
                className="object-contain max-w-full h-auto w-40 sm:w-56"
              />
            </div>

            {/* Contact + Menu - Right Side (kept on single line) */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                className="inline-flex items-center p-2 rounded-md border hover:bg-gray-50"
              >
                Menu
              </button>
            
              {/* Phone Number */}
              <a href="tel:+917042867717" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#001C54] to-[#b91c1c] text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <FaPhone className="text-white text-sm" />
                <span className="font-semibold text-sm whitespace-nowrap">+91 70428 67717</span>
              </a>

              {/* Apply Now Button */}
              <button 
                onClick={() => setOpenModal('apply')}
                className="bg-gradient-to-r from-[#001C54] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-sm whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to the top of the first section to account for fixed header */}
      <div className="pt-16 overflow-x-hidden break-words hyphens-auto lg:ml-64">

      {/* Desktop Sidebar */}
      <aside className="fixed hidden lg:flex flex-col top-16 left-0 w-64 h-[calc(100vh-4rem)] px-4 py-6 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
        <h3 className="text-lg font-bold mb-5 text-[#001C54] border-b-2 border-gray-200 pb-2 cursor-pointer">
          Page Contents
        </h3>
        <ul className="space-y-3 cursor-pointer text-sm">
          {[
            { id: "HeroSection", label: "Hero" },
            { id: "Introduction", label: "Introduction" },
            { id: "Rankings", label: "Rankings" },
            { id: "Programs", label: "Explore Courses" },
            { id: "KeyHighlights", label: "Key Highlights" },
            { id: "Eligibility", label: "Eligibility" },
            { id: "Admission", label: "Admission Process" },
            { id: "Companies", label: "Placement Partners" },
            { id: "Faq", label: "FAQs" },
          ].map((item) => (
            <li
              key={item.id}
              className="text-gray-600 hover:text-[#001C54] transition-colors duration-200 py-1 px-2 rounded hover:bg-gray-50"
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-[85vw] sm:w-72 h-full bg-white border-r shadow-xl z-50 p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
            >
            <div className="flex items-center justify-between mb-8">
                              <h3 className="text-xl font-bold text-orange-600">Page Contents</h3>
                              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                                <FaTimes className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>
              <ul className="space-y-4">
                {[
                  { id: "HeroSection", label: "Hero" },
                  { id: "Introduction", label: "Introduction" },
                  { id: "Rankings", label: "Rankings" },
                  { id: "Programs", label: "Explore Courses" },
                  { id: "KeyHighlights", label: "Key Highlights" },
                  { id: "Eligibility", label: "Eligibility" },
                  { id: "Admission", label: "Admission Process" },
                  { id: "Companies", label: "Placement Partners" },
                  { id: "Faq", label: "FAQs" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const section = document.getElementById(item.id);
                        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-700 hover:text-[#001C54] font-semibold text-base transition-colors duration-200 w-full text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Modern Hero Section - Optimized Spacing */}
      <section id="HeroSection" className="relative min-h-screen overflow-hidden pt-16 lg:pt-20">
        {/* Background Pattern - Enhanced Yellow Shade */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 opacity-90"></div>
        
        {/* Watermark Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp"
            alt="Watermark Background"
            width={800}
            height={600}
            className="object-cover"
            priority
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-60 bg-indigo-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main Content - Perfectly Centered */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center overflow-x-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            {/* Left Content - Optimized Spacing */}
            <div className="text-gray-900 space-y-4 sm:space-y-6 order-2 lg:order-1">
              
              

              {/* Main Heading - Perfectly Balanced */}
              <div className="space-y-3 sm:space-y-4">
                <h5 className="font-[calibri] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight">
                  Uplift your Career with
                </h5>
                </div>
                <div>
                <h1 className="font-[Calibri] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#001C54] to-[#b91c1c] bg-clip-text text-transparent leading-tight">
                  Jain University Online
                </h1>
              </div>
                
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl">
                Globally recognized online degrees with flexible learning, expert mentorship, and career-focused programs.
              </p>

              {/* Course Tags */}
 <div className="bg-[#001C54] w-fit flex">
  {['MBA', 'MCA', 'M.COM', 'MA', 'BBA', 'B.COM','BCA'].map((course, i, arr) => (
    <div
      key={i}
      className={`px-3 py-2 text-white font-bold text-xs sm:text-sm uppercase ${
        i !== arr.length - 1 ? 'border-r border-white' : ''
      }`}
    >
      {course}
    </div>
  ))}
</div>



              {/* CTA Buttons and Recognition Icons */}
              <div className="space-y-4">
                {/* Apply Now Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => setOpenModal('apply')}
                    className="bg-gradient-to-r from-[#001C54] to-[#b91c1c] hover:from-[#0b2b77] hover:to-[#991b1b] cursor-pointer text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/20 text-sm sm:text-base"
                  >
                    Apply Now
                  </button>
                </div>

                {/* NAAC and UGC Recognition */}
                <div className="flex gap-6 pt-2">
                  <div className="text-center">
                    <Image 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp" 
                      alt="NAAC A++" 
                      width={70} 
                      height={70} 
                      className="h-14 w-auto object-contain drop-shadow"
                    />
                    <p className="text-gray-700 text-xs font-medium mt-1">NAAC A++</p>
                  </div>
                  <div className="text-center">
                    <Image 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" 
                      alt="UGC" 
                      width={70} 
                      height={70} 
                      className="h-14 w-auto object-contain drop-shadow"
                    />
                    <p className="text-gray-700 text-xs font-medium mt-1">UGC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Student Image with Yellow Background */}
            <div className="lg:pl-6 xl:pl-12 order-1 lg:order-2 w-full">
              <div className="relative">
                {/* Yellow Background Container - Perfectly Sized */}
                <div className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-300 rounded-1xl shadow-1xl p-4 w-full h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden">
                  {/* Student Image - Perfectly Centered */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <Image 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327240/jainimg_swo4tp.png" 
                      alt="Jain University Online Student" 
                      width={500}
                      height={600}
                      className="w-full h-full max-w-full object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 z-20">
                  <p className="text-gray-900 font-semibold text-xs">50,000+ Successful Graduates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-900 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-gray-900/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-900/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction - Text Section */}
      <section id="Introduction" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Jain University Online – Empowering Future Leaders with World-Class Online Degrees</h2>
          <p className="text-gray-700 mb-4">Jain University Online, also known as jain university online, is India’s leading UGC-approved online degree institution dedicated to delivering flexible, career-oriented higher education for learners across the world. As one of the most reputable universities in India, jain university online offers a wide portfolio of undergraduate and postgraduate programs such as online MBA Jain University, online BBA Jain University, online BCA Jain University, and online MCA Jain University designed to empower students with industry-relevant knowledge, practical skills, and global learning exposure.</p>
          <p className="text-gray-700 mb-4">The vision of Jain University Online is to provide anytime, anywhere learning that builds a strong foundation for a successful career. With world-class faculty, advanced e-learning systems, and government approvals, Jain University Online stands among the most preferred institutions for online higher education and distance education Jain University programs.</p>
          <p className="text-gray-700 mb-4">Every program at Jain University Online—including Online MBA Jain University, Online Degrees Jain University, and distance education Jain University programs—follows a future-ready curriculum aligned with modern market needs. Students are mentored by leading academic experts and industry professionals, ensuring real-world learning outcomes. Whether you're a working professional aiming to upskill or a recent school graduate planning to build a strong career path, Jain University Online provides complete flexibility through online live sessions, recorded classes, interactive digital platforms, virtual labs, and continuous academic support.</p>
          <p className="text-gray-700 mb-4">Being a fully UGC-approved online degree provider, Jain University Online ensures that every qualification earned through its programs holds equal weightage to traditional on-campus degrees. The online degrees offered by Jain University Online are recognized for higher studies, government jobs, corporate careers, and global employment opportunities.</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Popular Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Online MBA Jain University – Designed for leadership roles</li>
              <li>Online BBA Jain University – Business foundation for future managers</li>
              <li>Online BCA Jain University – Trending IT skills in applications</li>
              <li>Online MCA Jain University – Advanced computing and software development</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">Programs also include B.Com, MA, M.Com, and professional certifications in Digital Marketing, Data Science, FinTech, Entrepreneurship, AI, and more. Students gain placement guidance, networking, internship support, and career development services—making Online MBA Jain University and Online Degrees Jain University highly sought-after for upskilling, promotions, and career switches.</p>
          <p className="text-gray-700 mt-4">By blending flexibility, affordability, and global learning standards, Jain University Online transforms distance learning into a complete digital campus experience.</p>
        </div>
      </section>

      {/* Why Choose Jain University Online */}
      <section id="WhyChoose" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Why Choose Jain University Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'UGC and NAAC Accredited',
              desc: 'UGC-approved with prestigious NAAC accreditation. Global recognition across job markets.'
            }, {
              title: 'Flexible Learning for Working Professionals',
              desc: 'Live classes, recorded lectures, mobile access, and self-paced study without career interruption.'
            }, {
              title: 'Industry-Aligned Curriculum',
              desc: 'Programs designed with industry experts in IT, Finance, Marketing, Analytics, and more.'
            }, {
              title: 'Affordable Fee Structure',
              desc: 'Accessible education model with options for diverse backgrounds and EMI support.'
            }, {
              title: 'Placement and Career Support',
              desc: 'Job readiness training, resume building, mock interviews, and placement drives.'
            }, {
              title: 'Expert Faculty and Mentorship',
              desc: 'Experienced professors and corporate trainers, with personalized mentoring.'
            }, {
              title: 'Global Learning Experience',
              desc: 'Collaborative online cohorts with global exposure and peer learning.'
            }, {
              title: 'Recognized for Govt and Private Jobs',
              desc: 'Degrees carry full equivalence to traditional campus degrees.'
            }].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered Table */}
      <section id="ProgramsOffered" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Programs Offered by Jain University Online</h2>
          <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-gray-100 text-gray-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Program</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Eligibility</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Online MBA Jain University</td>
                  <td className="px-4 py-3">2 Years</td>
                  <td className="px-4 py-3">Graduation</td>
                  <td className="px-4 py-3">Management</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Online BBA Jain University</td>
                  <td className="px-4 py-3">3 Years</td>
                  <td className="px-4 py-3">12th Pass</td>
                  <td className="px-4 py-3">Business Administration</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Online BCA Jain University</td>
                  <td className="px-4 py-3">3 Years</td>
                  <td className="px-4 py-3">12th Pass</td>
                  <td className="px-4 py-3">Computer Applications</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Online MCA Jain University</td>
                  <td className="px-4 py-3">2 Years</td>
                  <td className="px-4 py-3">Graduation (preferably BCA/CS)</td>
                  <td className="px-4 py-3">IT & Software</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Campus Tour */}
      <section id="CampusTour" className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Campus Tour (Virtual Learning Experience)</h2>
          <p className="text-gray-700 mb-6">Though fully online, Jain University Online recreates a vibrant campus environment through:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Live & recorded interactive online classes','Digital library with e-books, journals & global resources','Discussion forums & peer learning communities','Virtual labs for IT and technology programs','Industry webinars, workshops & expert mentorship','Career guidance and placement support'].map((point, i) => (
              <li key={i} className="bg-white rounded-xl p-4 shadow-sm border text-gray-700">✅ {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Explore Courses */}
      <section id="ExploreCourses" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Online Courses at Jain University Online</h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Undergraduate Online Degrees</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><span className="font-semibold">Online BBA Jain University</span> – Learn business fundamentals, leadership, marketing, finance, and strategy.</li>
              <li><span className="font-semibold">Online BCA Jain University</span> – Build expertise in programming, web/app development, networking, and databases.</li>
              <li><span className="font-semibold">Online B.Com Jain University</span> – Develop analytical and communication skills with flexible subject options.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Postgraduate Online Degrees</h3>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Online MBA Jain University</span> – Flagship degree with specializations: Marketing, Finance, HR, Logistics & Supply Chain, Systems & Ops, Business Analytics, and more.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><span className="font-semibold">Online MCA Jain University</span> – Focused on AI, cloud, full‑stack, and data science skills.</li>
              <li><span className="font-semibold">Online M.Com Jain University</span> – Financial analytics, taxation, banking & corporate finance.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill & Career Certifications (Add-On)</h3>
            <ul className="flex flex-wrap gap-2 text-gray-800">
              {['Digital Marketing','Project Management','Data Science & AI','Cybersecurity','Business Analytics'].map((c, i) => (
                <li key={i} className="bg-gray-100 rounded-full px-3 py-1 border">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Admission Dates */}
      <section id="AdmissionDates" className="py-12 sm:py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Admission Dates for UG & PG Online Degrees</h2>
          <p className="text-gray-700 mb-6">Admission Open for 2025–2026 Academic Session</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { program: 'Online MBA Jain University', status: 'Open' },
              { program: 'Online MCA Jain University', status: 'Open' },
              { program: 'Online M.Com Jain University', status: 'Open' },
              { program: 'Online MA Jain University', status: 'Open' },
              { program: 'Online BBA Jain University', status: 'Open' },
              { program: 'Online BCA Jain University', status: 'Open' },
              { program: 'Online B.Com Jain University', status: 'Open' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900">{item.program}</h3>
                <p className="text-green-600 font-medium mt-1">✅ {item.status}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">Early applicants may receive scholarship benefits and counseling support for program selection.</p>
        </div>
      </section>

      {/* Fees Structure */}
      <section id="Fees" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Fees Structure – Online Degrees Jain University</h2>
          <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Program</th>
            
                  <th className="px-4 py-3 text-left font-semibold">Payment Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {['Online MBA Jain University','Online MCA Jain University','Online M.Com Jain University','Online BBA Jain University','Online BCA Jain University','Online B.Com Jain University'].map((name, idx) => (
                
                <tr key={idx}>
                    <td className="px-4 py-3">{name}</td>
                   
                    <td className="px-4 py-3">Semester/EMI</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-gray-700">
            <p className="font-semibold mb-2">Scholarships Available:</p>
            <p>✅ Working professionals ✅ Defense personnel ✅ Merit-based students ✅ Financial assistance options</p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section id="EligibilityCriteria" className="py-12 sm:py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">UG Courses (BBA, BCA, B.Com)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>10+2 from a recognized board</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">PG Courses (MBA, MCA, M.Com., MA)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Bachelor’s degree with minimum required marks</li>
                <li>Work experience recommended (for MBA)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4">Programs are open to Indian & International students.</p>
        </div>
      </section>

      {/* Sessions */}
      <section id="Sessions" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ongoing Sessions & Academic Calendar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['January','April','July','October'].map((month, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border text-center">
                <p className="text-lg font-semibold text-gray-900">{month} Intake</p>
                <p className="text-green-700 mt-1">✅ Flexible entry</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Record */}
      <section id="PlacementRecord" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Placement Record</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Strong average placement rate across programs</li>
            <li>Highest outcomes in Online MBA and Online MCA</li>
            <li>Career services: resume building, mock interviews, placement drives, industry mentors</li>
          </ul>
        </div>
      </section>

      {/* Student Reviews */}
      <section id="StudentReviews" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Student Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{name:'Rahul (Online BCA)', text:'Fantastic online learning environment with excellent digital content and quick support.'},{name:'Divya (Online MBA)', text:'Best choice for working professionals! I studied while working full-time and still succeeded.'},{name:'Prakash (Online BBA)', text:'Quality education, recognized degree, and strong placement help — worth it!'}].map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border shadow-sm">
                <p className="text-gray-800">“{r.text}”</p>
                <p className="text-sm text-gray-600 mt-3">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Rankings */}
      <section id="JainReviews" className="py-12 sm:py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Jain Reviews & Rankings</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>NAAC A+ Accreditation ✅</li>
            <li>Ranked among top online universities in India ✅</li>
            <li>Strong academic reputation & global recognition ✅</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section id="Conclusion" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p>Jain University Online is shaping future-ready graduates with flexible, affordable, globally recognized online degrees. Whether you select an Online MBA Jain University, Online BCA Jain University, or any other course — you receive quality learning, expert support, and strong career advantages.</p>
          <ul className="list-disc list-inside mt-4">
            <li>Upgrade your career with UGC approved online degree programs</li>
            <li>Study anytime, anywhere — without interrupting your job</li>
            <li>Unlock global opportunities with a respected Jain University Online qualification</li>
          </ul>
          <div className="mt-6">
            <button onClick={() => setOpenModal('apply')} className="bg-gradient-to-r from-[#001C54] to-[#b91c1c] text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">Apply Now</button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="KeyHighlights" className="bg-[#001C54] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto relative">
          {/* Horizontal Dotted Line - Top */}
          <div className="border-dotted border-t-[1px] border-white/30 w-full absolute top-3 sm:hidden"></div>
          
          {/* Vertical Dotted Line - Center */}
          <div className="border-dotted border-l-[1px] border-white/30 h-full absolute left-1/2 transform -translate-x-1/2 sm:hidden"></div>
          
          <div className="flex flex-wrap justify-center md:justify-between items-center md:h-[120px]">
            
            {/* 40+ In-Demand Electives */}
            <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%] md:border-dotted md:border-r-[1px] md:border-white/30">
              <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">40 +</h3>
              <p className="text-xs font-medium font-[Inter] text-center">In-Demand Electives</p>
            </div>

            {/* 2,000+ Hiring Corporates */}
            <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%] md:border-dotted md:border-r-[1px] md:border-white/30">
              <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">2,000 +</h3>
              <p className="text-xs font-medium font-[Inter] text-center">Hiring Corporates</p>
            </div>

            {/* 20,000+ Courses on LinkedIn Learning */}
            <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%] md:border-dotted md:border-r-[1px] md:border-white/30">
              <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">20,000 +</h3>
              <p className="text-xs font-medium font-[Inter] text-center">Courses on LinkedIn Learning</p>
            </div>

            {/* 0 Cost EMI Option */}
            <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%]">
              <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">0 Cost</h3>
              <p className="text-xs font-medium font-[Inter] text-center">EMI Option</p>
            </div>
          </div>
        </div>
      </section>


     <section id="Rankings" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
         {/* Heading with Lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow border-t-4 border-gray-400"></div>
          <h2 className="mx-4 text-3xl md:text-4xl font-bold text-blue-900">
            RANKINGS
          </h2>
          <div className="flex-grow border-t-4 border-gray-400"></div>
        </div>
        {/* Rankings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rankings.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-6 text-center flex flex-col items-center"
            >
              {/* Full Dotted Border */}
              <div className="absolute inset-0 border-4 border-dotted border-blue-500 rounded-lg"></div>

              {/* Yellow Corners (Attached to Border) */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 rounded-bl-lg"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-400 rounded-tr-lg"></div>

              {/* Content */}
              <Image
                src={item.img}
                alt={item.alt}
                width={80}
                height={80}
                className="mb-4 object-contain relative z-10"
              />
              <p className="text-gray-700 text-sm md:text-base font-medium relative z-10">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div>
      <AccreditationSection
        title="Why Choose Jain University Online?"
        description="Explore diverse learning mediums, dedicated academic advisors, career services, and placement opportunities with Jain University Online."
        stats={[]}
        benefits={[
          {
            title: "Diverse Learning Mediums",
            description: "E-books, printed & audio books, videos to cater your preferences & unique learning style.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                    </svg>`,
          },
          {
            title: "Dedicated Academic Advisor",
            description: "Dedicated experts and advisors to guide you at every step of your professional career.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                    </svg>`,
          },
          {
            title: "Career Services",
            description: "Be job-ready with resume building workshops, internships & industry mentorship.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                    </svg>`,
          },
          {
            title: "Placement Opportunities",
            description: "Job interview prep, placement assistance & resume building for students to be job-ready.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                    </svg>`,
          },
        ]}
        accreditations={[
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp", alt: "WES", name: "WES" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp", alt: "AIU", name: "AIU" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327071/careers_grslii.png", alt: "Careers", name: "Careers" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/auap_n1ea9m.webp", alt: "AUAP", name: "AUAP" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327279/ksurf_udejgt.webp", alt: "KSURF", name: "KSURF" },
          { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/recogin_wm3gqn.webp", alt: "Recognition", name: "Recognition" },
        ]}
        internationalRecognition={[]}
        successStories={[]}
      />
    </div>

    <section id="Programs" className="py-12 px-6 bg-white font-[Inter]">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#003b59] font-[Poppins]">
        Jain University Online Programs
      </h2>

      <Tabs.Root defaultValue="all" className="w-full">
        <Tabs.List className="flex justify-center gap-4 mb-6">
          <Tabs.Trigger value="all" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                     hover:bg-blue-600 hover:text-white transition-colors duration-300
                     radix-state-active:bg-blue-600 radix-state-active:text-white">All</Tabs.Trigger>
          <Tabs.Trigger value="ug" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                     hover:bg-blue-600 hover:text-white transition-colors duration-300
                     radix-state-active:bg-blue-600 radix-state-active:text-white">UG</Tabs.Trigger>
          <Tabs.Trigger value="pg" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                     hover:bg-blue-600 hover:text-white transition-colors duration-300
                     radix-state-active:bg-blue-600 radix-state-active:text-white">PG</Tabs.Trigger>
        </Tabs.List>

        {/* All Courses */}
        <Tabs.Content value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
            {[...ugCourses, ...pgCourses].map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="Jain University Online" />
            ))}
          </div>
        </Tabs.Content>

        {/* UG Courses */}
        <Tabs.Content value="ug">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
            {ugCourses.map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="Jain University Online" />
            ))}
          </div>
        </Tabs.Content>

        {/* PG Courses */}
        <Tabs.Content value="pg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
            {pgCourses.map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="Jain University Online" />
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>

    <section className="bg-[#001f54] text-white py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          — Why should you pursue an Online Degree from JAIN (Deemed-to-be University)? —
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              {feature.icon}
              <p className="font-semibold text-lg">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Admission process */}
    <div>
      <section id="Admission" className="relative py-20 bg-white">
        {/* Decorative Blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Admission Procedure
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A simple, transparent, and student-friendly admission process
              designed to help you begin your learning journey smoothly.
            </p>
          </motion.div>
    
          {/* 4-Step Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              Easy 4-Step Admission Process
            </h3>
    
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 z-0 rounded-full"></div>
    
              {[
                {
                  number: "01",
                  title: "Application Form",
                  desc: "Fill the online application form on the university portal.",
                },
                {
                  number: "02",
                  title: "Documents & Fee",
                  desc: "Upload required documents and pay the application fee.",
                },
                {
                  number: "03",
                  title: "Confirmation",
                  desc: "Receive confirmation and student login credentials.",
                },
                {
                  number: "04",
                  title: "Enrollment",
                  desc: "Complete fee payment and begin your classes.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                    <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                    <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>

    

    <section id="Eligibility" className="bg-[#003366] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Certificate Image */}
        <div className="flex-1">
          <Image width={500} height={400} loading='lazy' src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327279/jainonlined_wg8465.webp" alt="Jain Online" className="w-full max-w-md mx-auto rounded shadow-lg" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Online Degree from Jain University Online
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Jain University Online provides many services that has the benefits of e-lectures, counselling from academic advisors, career assistance, etc.
          </p>

          <h3 className="text-xl font-semibold mb-2">Benefits of Jain University Online</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Daily LIVE Classes by Faculty of International Repute</li>
            <li>Career Assistance & Exclusive Virtual Job Fairs</li>
            <li>Equivalent to JAIN (Deemed-to-be University) on-campus program degrees Globally recognized</li>
            <li>Hands-on & Immersive Learning through world-Class Experince</li>
          </ul>
        </div>
      </div>
    </section>
    

        <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Heading */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-[1px] bg-black flex-1"></div>
          <h2 className="px-4 text-2xl md:text-3xl font-bold text-[#001f54]">
            #ItAllAddsUp
          </h2>
          <div className="h-[1px] bg-black flex-1"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuressec.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between border border-gray-200 shadow-sm p-6 rounded-md h-full"
            >
              {feature.icon}
              <p className="font-semibold text-lg mt-4">{feature.title}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Hiring Partners Section */}
    <section id="Companies" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Our Top Hiring Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jain University graduates are placed in leading companies across various industries
          </p>
        </motion.div>

        {/* Logo Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp" alt="Company" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp" alt="Microsoft" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp" alt="Company 9" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp" alt="Company 10" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp" alt="Company4" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp" alt="Company 6" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp" alt="Companany5" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp" alt="Adove" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp" alt="Samsung3" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp" alt="Samsung4" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp" alt="Samsung5" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp" alt="Samsung6" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp" alt="Samsung7" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/8_otnhv8.webp" alt="Samsung8" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp" alt="Samsung9" className="h-12 object-contain" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp" alt="Samsung" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001C54] to-[#b91c1c] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Jain University Online programs, admissions, and more.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#001C54] focus:ring-opacity-20 rounded-lg"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4 font-[Inter]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown 
                    className={`text-[#001C54] transition-colors ${
                      openFaqIndex === index ? 'text-[#b91c1c]' : ''
                    }`}
                    size={16}
                  />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: openFaqIndex === index ? 'auto' : 0,
                  opacity: openFaqIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed font-[Inter]">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
           
          </div>
        </motion.div>
      </div>
    </section>

      <section className="bg-[#0d2c6c] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 tracking-wide">
          ONE-STOP STUDY DESTINATION
        </h2>

        {/* Content Wrapper */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain1_j2579m.webp"
              alt="Jain University"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              JAIN (Deemed-to-be University)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Promoted by Jain Group, the university is recognized among the top
              universities in India and considered a preferred learner-centric
              destination for students from different countries across the globe.
              Known for its emphasis on education, entrepreneurship, research and
              sports, JAIN (Deemed-to-be University) has some of the best minds in
              the educational and research fields, and centres that inspire
              entrepreneurship and innovative thinking.
            </p>
          </div>
        </div>

        {/* Footer Line */}
        <div className="text-center text-xs text-gray-300 mt-8 border-t border-gray-500 pt-4">
          © Copyrights JAIN UNIVERSITY All Rights Reserved
        </div>
      </div>
    </section>

    {openModal && (
      <ApplyEnquiryModal
        open={!!openModal}
        onOpenChange={(v) => !v && setOpenModal(null)}
        title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
        subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
        imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_q9svec.png"
        universityName="Jain University Online"
        defaultProgram="MBA"
        formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
      />
    )}
    </div>
    </>
  );
};

export default Jain;