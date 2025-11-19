'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaBars, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave, FaTimes } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";
import LazySection from '@/components/LazySection';

const Manipal = () => {

 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Finance & Accounting, Digital Marketing,Marketing, Enterepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipal-online-mca_moc5om.png",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Computer Applications (BCA) in Manipal Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "99,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Commerce (B.Com) in Manipal Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,75,000",
      specialization: "Super/Dual(Human Resource Management and Finance, Finance and Marketing, Marketing and Human Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Artificial Intelligence Banking and Finance, 15 other fields)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,08,000",
      specialization: "General", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Commerce (M.Com) in Manipal Online",
    },
  
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000 - 1,40,000",
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Arts (MA) in Manipal Online",
    },
  ];
    
const [showStickyCTA, setShowStickyCTA] = useState(false);
useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 const faqData = [
  {
    question: "Is Manipal University Jaipur Online approved by UGC?",
    answer:
      "Yes, Manipal University Jaipur Online is UGC-entitled and NAAC A+ accredited. All online degrees are valid and globally recognized."
  },
  {
    question: "Are the online MBA and online BCA degrees equivalent to regular programs?",
    answer:
      "Yes, all Manipal Online degrees hold the same recognition as traditional on-campus programs."
  },
  {
    question: "Can international students apply for Manipal Online programs?",
    answer:
      "Yes, students from over 50 countries enroll in Manipal University Jaipur Online each year."
  },
  {
    question: "What learning support does MUJ Online offer?",
    answer:
      "Students receive access to 24×7 LMS, live lectures, recorded classes, digital library, and dedicated student support teams."
  },
  {
    question: "Does Manipal Online provide placement assistance?",
    answer:
      "Yes, MUJ Online has a strong placement and career guidance cell offering job connections and industry mentorship."
  }
];
useEffect(() => {
      

      const timer= setTimeout(()=>{
       setOpenModal(true)
      },3000)
      return () => clearTimeout(timer);

       
},[])




  const testimonials = [
    {
      name: "Ananya Sharma",
      course: "Online MBA",
      university: "MUJ",
      text: "Manipal Online gave me the flexibility to pursue my MBA while managing my job. The digital platform and faculty support are exceptional."
    },
    {
      name: "Rahul Verma",
      course: "Online BCA",
      university: "MUJ",
      text: "The course content and virtual labs helped me upskill and transition into an IT role successfully."
    },
    {
      name: "Meera Joshi",
      course: "Online BBA",
      university: "MUJ",
      text: "The online BBA from Manipal University Jaipur Online helped me understand business fundamentals and boosted my confidence."
    },
    {
      name: "Priya Singh",
      course: "Online MCA",
      university: "MUJ",
      text: "The comprehensive curriculum and practical projects prepared me well for my career in software development."
    }
  ];
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');
  const [openModal, setOpenModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  

  

  

  return (
    <>
       <Head>
        <title>Manipal University Online Jaipur, Rajasthan | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal University Jaipur, MUJ Online, BBA in muj Online, BCA in muj Online, B.Com in muj Online, MBA in muj Online, MCA in muj Online, M.Com in muj Online, MA in muj Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal University Online" />
        <meta name="robots" content="index, follow" />
         <link rel="canonical" href="https://unifostedu.com/manipal" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
         
        {/* Open Graph */}
        <meta property="og:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal University Jaipur. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Manipal University Jaipur Online",
      "alternateName": "Online Manipal",
      "url": "https://unifostedu.com/manipal",
      "logo": "https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
      "description": "UGC-entitled online degrees from NAAC A+ accredited Manipal University Jaipur",
      "telephone": "+91-7042867717",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/manipalonline",
        "https://www.linkedin.com/school/manipal-university-jaipur"
      ]
    })}
  </script>

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })}
  </script>

  {/* Course Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Online MBA from Manipal University Jaipur",
      "description": "UGC-approved online MBA with 21+ specializations",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Manipal University Jaipur",
        "sameAs": "https://unifostedu.com/manipal"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "duration": "P2Y",
        "courseFee": {
          "@type": "PriceSpecification",
          "price": "175000",
          "priceCurrency": "INR"
        }
      }
    })}
  </script>
      </Head>
      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
      <div className="poppins overflow-x-hidden break-words hyphens-auto">
      
         
      
      {/* Professional Responsive Header - Optimized */}
      <header className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Left Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                alt="Manipal University Logo" 
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
              />
              <h1 className="font-queens text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold whitespace-nowrap">
                
              </h1>
          </div>

            {/* Right Side - Responsive */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
              {/* Mobile Menu Button */}
               {/* Mobile Menu Button */}
             <button
              onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
                 >
                 <FaBars className="w-5 h-5 text-gray-700" />
                 </button>
              
              {/* Phone - Hidden on small screens */}
              <a
                href="tel:+917042867717"
                className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
              > 
                <span className="text-base sm:text-lg">📞</span>
                <span className="hidden lg:inline">+91-7042867717</span>
                <span className="lg:hidden">Call</span>
              </a>
              
              {/* Mobile Phone Icon */}
              <a
                href="tel:+917042867717"
                className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
              >
                <span className="text-base">📞</span>
              </a>
              
              {/* Apply Button */}
              <button 
                onClick={() => setOpenModal({ type: 'apply' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
              >
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </button>
              </div>
            </div>
          </div>
      </header>

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row w-full">
        {/* Left Sidebar - Optimized */}
        <aside className="fixed hidden lg:flex flex-col top-[56px] sm:top-[64px] lg:top-20 w-64 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] px-3 sm:px-4 py-4 sm:py-6 lg:py-8 self-start overflow-y-auto border-r border-gray-200 bg-white/95 backdrop-blur-sm z-40">
          <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">
            Page Contents
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {[
              { id: "HeroSection", label: "Introduction" },
              { id: "CampusTour", label: "Campus Tour" },
              { id: "Courses", label: "Explore Courses" },
              { id: "KeyHighlights", label: "Key Highlights" },
              { id: "AdmissionDates", label: "Admission Dates" },
              { id: "Fees", label: "Fees Structure" },
              { id: "Admission", label: "Admission Process" },
              { id: "Sessions", label: "Sessions Info" },
              { id: "PlacementPartners", label: "Placement Partners" },
              { id: "PlacementRecord", label: "Placement Record" },
              { id: "StudentReviews", label: "Student Reviews" },
              { id: "Faq", label: "FAQs" },
              { id: "ManipalReviews", label: "Manipal Reviews" }
            ].map((item) => (
              <li
                key={item.id}
                className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 py-1.5 px-2 rounded hover:bg-orange-50 cursor-pointer"
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

        {/* Mobile Sidebar - Enhanced */}
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
                className="fixed top-0 left-0 w-[85vw] sm:w-72 h-full bg-white border-r shadow-xl z-50 p-4 sm:p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
              > 
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-600">Page Contents</h3>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <FaTimes className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <ul className="space-y-2 sm:space-y-3 flex-1">
                  {[
                    { id: "HeroSection", label: "Introduction" },
                    { id: "CampusTour", label: "Campus Tour" },
                    { id: "Courses", label: "Explore Courses" },
                    { id: "KeyHighlights", label: "Key Highlights" },
                    { id: "AdmissionDates", label: "Admission Dates" },
                    { id: "Fees", label: "Fees Structure" },
                    { id: "Admission", label: "Admission Process" },
                    { id: "Sessions", label: "Sessions Info" },
                    { id: "PlacementPartners", label: "Placement Partners" },
                    { id: "PlacementRecord", label: "Placement Record" },
                    { id: "StudentReviews", label: "Student Reviews" },
                    { id: "Faq", label: "FAQs" },
                    { id: "ManipalReviews", label: "Manipal Reviews" }
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          const section = document.getElementById(item.id);
                          if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 w-full text-left py-2.5 px-3 rounded-lg"
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

        {/* Main Content */}
        <main className="flex-1 min-w-0 lg:ml-64 pt-14 sm:pt-16 lg:pt-20">

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                Get Started with Manipal University
              </DialogTitle>
            </DialogHeader>
            <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} universityName="Manipal University Jaipur" />
          </DialogContent>
        </Dialog>
      )}


        {/* Premium Hero Section - Fully Responsive */}
        <section id="HeroSection" className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[800px] overflow-hidden pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
              alt="Manipal University Banner"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full overflow-x-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[800px] overflow-x-hidden">
              
              {/* Left Content */}
              <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 md:py-12 lg:py-20 xl:py-24 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-3 sm:space-y-4 md:space-y-6"
                >
                  {/* University Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-white/30">
                    <img 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                      alt="Manipal Logo" 
                      className="h-5 sm:h-6 md:h-8 w-auto" 
                    />
                  
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block">Transform Your</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Future with Manipal
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                    UGC-approved online degrees with NAAC A+ accreditation. 
                    Flexible learning, expert mentorship, and global recognition.
                  </p>

                  {/* Key Features */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4">
                    {['UGC Approved', 'NAAC A+', 'Global Recognition', 'Flexible Learning'].map((feature, index) => (
                      <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border border-white/30">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium">{feature}</span>
                      </div>
            ))}
          </div>

                 
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto bg-white/10 cursor-pointer"
                      onClick={() => setOpenModal({ type: 'enquiry' })}
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
                      Enquire Now
                    </Button>
        </div>
                </motion.div>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="flex-1 max-w-md lg:max-w-lg lg:ml-8 xl:ml-12 w-full mt-6 sm:mt-8 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4"
                >
                  {/* Stat Card 1 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">50+</div>
                    <div className="text-white text-[10px] sm:text-xs md:text-sm font-medium">Countries</div>
          </div>
                  
                  {/* Stat Card 2 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">25+</div>
                    <div className="text-white text-[10px] sm:text-xs md:text-sm font-medium">Programs</div>
        </div>
                  
                  {/* Stat Card 3 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">95%</div>
                    <div className="text-white text-[10px] sm:text-xs md:text-sm font-medium">Success Rate</div>
  </div>
                  
                  {/* Stat Card 4 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">24/7</div>
                    <div className="text-white text-[10px] sm:text-xs md:text-sm font-medium">Support</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Accreditation Cards - Bottom - Responsive */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-3 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 backdrop-blur-sm px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 max-w-2xl mx-auto"
            >
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp" alt="NAAC A+ Accredited" className="h-12 sm:h-16 w-12 sm:w-16 object-contain mb-2" />
                <p className="text-xs sm:text-sm font-bold text-gray-800">NAAC A+</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" alt="UGC Approved" className="h-12 sm:h-16 w-12 sm:w-16 object-contain mb-2" />
                <p className="text-xs sm:text-sm font-bold text-gray-800">UGC Approved</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp" alt="Global Recognition" className="h-12 sm:h-16 w-12 sm:w-16 object-contain mb-2" />
                <p className="text-xs sm:text-sm font-bold text-gray-800">Global Recognition</p>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>
       {/* Introduction Section - Detailed Overview - Responsive */}
<section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-10 md:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
        Welcome to <span className="text-orange-600">Manipal University Jaipur Online</span>
      </h2>
      <p className="text-base sm:text-lg text-black-600 max-w-4xl mx-auto leading-relaxed px-2">
  Welcome to <strong>Manipal University Jaipur Online (Manipal Online)</strong>, building on over 70 years of Manipal's educational excellence to offer the 
  <strong> best online degree in Jaipur</strong>. Designed for working professionals, recent graduates, and lifelong learners, 
  Manipal Online provides a wide range of <strong>recognized and career-oriented online degree programs</strong>.
  Whether you are searching for an <strong>online MBA with Manipal</strong> or exploring the 
  <strong>best online degree in Jaipur</strong>, our programs deliver career-driven learning with real-world projects and flexible study options — ideal for students balancing work and education.
</p>

<p className="text-base sm:text-lg text-black-600 max-w-4xl mx-auto leading-relaxed px-2 mt-4">
  <strong>A Trusted Platform for Online Learning</strong><br />
  <strong>Online Manipal (Manipal Online)</strong> serves as the official platform presenting Manipal's digital degrees, 
  delivered by <strong>Manipal University Jaipur</strong> and affiliated Manipal institutions. 
  From <strong>online MBA programs</strong> to a variety of undergraduate and postgraduate courses, this platform stands out 
  as a leading answer for learners searching for <em>"online degree near me"</em> or <em>"online MBA near me." </em> 
  Each program page clearly outlines specializations, duration, fees, and learning outcomes — ensuring transparency and 
  confidence for every learner's educational journey.
</p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">For Every Learner</h3>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 text-sm">✓</span>
            </div>
            <p className="text-gray-700">
              <strong>Fresh Graduates:</strong> Exploring <strong>online MBA in India for freshers</strong> to kickstart your career
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 text-sm">✓</span>
            </div>
            <p className="text-gray-700">
              <strong>Working Professionals:</strong> Looking for <strong>executive MBA online India</strong> to accelerate your career growth
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 text-sm">✓</span>
            </div>
            <p className="text-gray-700">
              <strong>Location Flexible:</strong> Whether in <strong>Mumbai, Bangalore, Chennai</strong>, or anywhere across India
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 text-sm">✓</span>
            </div>
            <p className="text-gray-700">
              <strong>No Entrance Exam:</strong> Seeking flexibility with <strong>online MBA without entrance exam</strong> options
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-gray-700 mb-4">
            If you are a graduate exploring <strong>online MBA in India for freshers</strong> or a working professional looking for an 
            <strong>executive MBA online India</strong> to fasten your career, MUJ Online provides a supportive environment. 
            Your growth story starts with us.
          </p>
          <p className="text-gray-700">
            Maybe you are searching for an <strong>online MBA in India in Mumbai</strong>, <strong>online MBA in India in Bangalore</strong>, 
            or <strong>online MBA in India in Chennai</strong>. You may be seeking the flexibility to learn at your own pace of an 
            <strong>online MBA without entrance exam</strong> or comparing <strong>distance learning universities India</strong> to find the best fit. 
            Wherever you are, and whatever your specific needs, Manipal University Jaipur is here for your help.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Academic Portfolio: Your Pathway to Specialization</h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Our programs stands out when you <strong>compare online courses in India</strong>, offering a perfect blend of academic excellence and real–world relevance. 
            Unlike other <strong>online courses in India</strong>, our programs are structured to ensure seamless integration between conceptual understanding and hands-on learning.
          </p>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">📊 Business & Management</h4>
            <p className="text-sm text-gray-600">
              Manipal University Jaipur online offers one of the top <strong>online MBA programs in India</strong>, which is designed for learners whose aim is to lead in today's competitive business world. 
              Our <strong>MBA Online in India</strong> enhances innovation, leadership, and strategic decision-making through Industry-driven courses. 
              For professionals searching advancement in careers, our <strong>online MBA for working professionals</strong> and <strong>Executive MBA online India</strong> programs provide the flexibility to balance work and study while developing high-impact management skills.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">💻 Technology & Data Science</h4>
            <p className="text-sm text-gray-600">
              In an era driven by data and automation, our <strong>online data science course India</strong> and <strong>AI and ML certification India</strong> are perfect for those looking to build expertise in high-growth fields. 
              These programs are ideal for both <strong>freshers</strong> and <strong>working professionals</strong> in tech.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">🎨 Digital Skills & Development</h4>
            <p className="text-sm text-gray-600">
              For creatives and strategists, our <strong>digital marketing certification online</strong> provides a comprehensive toolkit for the digital landscape. 
              Similarly, our <strong>certificate in web development</strong> equips you with the skills to build the web of tomorrow.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-600 mb-4">
            Before you decide, we encourage you to <strong>download MBA brochure India</strong>, <strong>get course brochure</strong> for our <strong>AI and ML certification India</strong>, 
            or <strong>download course guide</strong> for our <strong>digital marketing certification online</strong>. This will help you <strong>compare course fees online</strong>, 
            review the <strong>course syllabus PDF download</strong>, and make an informed choice.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button 
            onClick={() => setOpenModal({ type: 'enquiry' })}
            className="flex-1 bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm cursor-pointer"
          >
            Download Brochure
          </button>
          <button 
            onClick={() => setOpenModal({ type: 'apply' })}
            className="flex-1 border-2 border-orange-600 text-orange-600 px-4 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-sm cursor-pointer"
          >
            Free Counseling
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Why Choose Section */}
<section className="py-10 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-8">
      Why Choose Manipal Online?
    </h2>

    <div className="space-y-8 text-gray-600 text-base sm:text-lg leading-relaxed">

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          1. Accredited, Respected Degrees
        </h3>
        <p>
          <strong>Manipal Online</strong> degrees are <strong>UGC-entitled</strong> and backed by 
          <strong>Manipal University Jaipur (MUJ)</strong> — a <strong>NAAC A+ accredited</strong> institution. 
          This recognition positions Manipal among the <strong>best online degree in Jaipur</strong> options for quality and credibility. 
          If you are searching for <em>"top college in Jaipur"</em>, institutional accreditation makes 
          <strong>Manipal Online</strong> a trusted choice for long-term career growth.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          2. Career-Driven, Industry-Aligned Curriculum
        </h3>
        <p>
          The <strong>online MBA with Manipal</strong> is designed with input from industry leaders and offers 
          immediate workplace relevance. With specializations in <strong>Digital Marketing, Business Analytics, Finance, 
          Healthcare Management, and IT & Fintech</strong>, learners can tailor their studies to market needs. 
          Those exploring <em>"online MBA near me"</em> will find that Manipal's case-based learning and applied projects 
          enhance real-world employability.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          3. Flexible Learning that Fits Busy Lives
        </h3>
        <p>
          Flexibility is one of the main reasons learners search <em>"online degree near me."</em> 
          <strong>Manipal Online</strong> combines asynchronous video lectures, live interactive sessions, 
          recorded classes, and hands-on assignments — allowing learners to balance work, study, and personal life. 
          Programs like the <strong>online BBA</strong> and <strong>online MBA</strong> make it easy for professionals 
          to pursue top-tier education without relocating.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          4. Experienced Faculty and Industry Mentors
        </h3>
        <p>
          Courses are led by academic experts and industry mentors who bring real-world experience to every class. 
          Whether pursuing an <strong>online BBA</strong> or the <strong>online MBA with Manipal</strong>, 
          students benefit from updated curricula that remain relevant and industry-focused.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          5. Strong Career Services and Networking
        </h3>
        <p>
          <strong>Manipal Online</strong> supports learners through career guidance, placement preparation, 
          interview training, and access to a strong alumni network. These services help students become 
          <strong>job-ready and industry-connected</strong> from day one.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          6. Technology-Enabled, Applied Learning
        </h3>
        <p>
          Learners gain hands-on experience through <strong>virtual labs, live projects, group assignments, 
          and simulations</strong>. This approach ensures practical understanding and real-world application 
          across every online degree offered by Manipal Online.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Programs and Pathways: From BBA to MBA
        </h3>
        <p>
          <strong>Manipal Online</strong> offers programs across management, commerce, computing, and the arts. 
          Its flagship <strong>online MBA</strong> is a 24-month career-focused degree, while undergraduate programs 
          like the <strong>online BBA</strong> and <strong>BCA</strong> equip learners with strong business and 
          technical foundations — making Manipal a top choice for the 
          <em>best online degree in Jaipur</em>.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Admissions, Fees, and Financial Support
        </h3>
        <p>
          The admission process is <strong>simple, digital, and transparent</strong>, supported by EMI options 
          and scholarships. From application to graduation, Manipal provides <strong>academic advisors, mentorship, 
          technical assistance, and career counseling</strong> — ensuring every learner's success journey.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Industry Projects, Internships, and Applied Learning
        </h3>
        <p>
          Real-world projects, internships, and capstone assignments are integrated into each program. 
          For students searching <em>"online MBA near me,"</em> these experiences help demonstrate 
          practical expertise and strengthen employability.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Alumni Outcomes and Employer Recognition
        </h3>
        <p>
          Graduates of <strong>Manipal University Jaipur</strong> and <strong>Manipal Online</strong> 
          hold leadership roles in consulting, fintech, healthcare, analytics, and marketing. 
          The strong employer reputation of Manipal degrees ensures alumni are recognized 
          across industries worldwide.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Comparing Manipal Online with Other Options
        </h3>
        <p>
          When comparing <em>"top colleges in Jaipur"</em> or searching for the 
          <em>"best online degree in Jaipur,"</em> <strong>Manipal Online</strong> stands apart with 
          <strong>NAAC A+ accreditation, expert faculty, and flexible programs</strong> that combine 
          academic depth with industry relevance and career support.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Application Tips and Success Strategies
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Review Program Curriculum:</strong> Compare modules and specializations with your career goals before choosing the <strong>online MBA with Manipal</strong>.</li>
          <li><strong>Plan Your Study Schedule:</strong> Create a consistent plan to balance professional and academic commitments.</li>
          <li><strong>Leverage Career Services:</strong> Utilize placement assistance, alumni mentorship, and resume workshops to maximize outcomes.</li>
          <li><strong>Build a Portfolio:</strong> Document your projects and internships to showcase skills to future employers.</li>
        </ul>
      </div>

      <p className="text-center text-gray-700 text-lg mt-6">
        If you are exploring options like the <strong>online MBA with Manipal</strong> or the 
        <strong>best online degree in Jaipur</strong>, <strong>Manipal Online</strong> offers 
        accredited programs, flexible schedules, and hands-on learning pathways that empower you to 
        reach your professional goals. <br /> <br />
        <strong>Start your journey today with Manipal Online!</strong>
      </p>
       <button 
            onClick={() => setOpenModal({ type: 'enquiry' })}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Apply Now
          </button>
        
    </div>
  </div>
</section>

{/* Explore Online Classes Section - Professionally Styled */}
<section className="py-12 bg-white border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Explore <span className="text-orange-600">Online Classes</span> at Manipal
      </h2>
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
        Discover a new world of learning with <strong>Manipal University Jaipur Online (Manipal Online)</strong> —
        your trusted destination for the best online degrees in Jaipur. Whether you're a working professional, entrepreneur, or student searching for an <i>online degree near me</i>, Manipal Online offers flexible, career-focused programs designed for your success.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
      <div>
        <div className="flex items-center mb-4">
          <FaUserTie className="text-2xl text-orange-500 mr-3" />
          <h3 className="text-xl font-semibold text-gray-800">Online MBA with Manipal</h3>
        </div>
        <p className="text-gray-700 mb-3">
          The highly sought-after <strong>online MBA</strong> is crafted for future leaders who wish to build advanced management expertise and global business insight. Enjoy live classes, interactive case studies, and mentorship from industry experts—all from your home.
        </p>
        <p className="text-gray-600 text-sm">For professionals searching for an <i>"online MBA near me"</i>, this program blends flexibility with industry relevance.</p>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <FaBriefcase className="text-2xl text-orange-400 mr-3" />
          <h3 className="text-xl font-semibold text-gray-800">Online BBA Near Me</h3>
        </div>
        <p className="text-gray-700 mb-3">
          Aspiring professionals can opt for Manipal's <strong>online BBA</strong>, a comprehensive undergraduate program in business and management. Build strong foundations in business strategy, marketing, and leadership—while learning analytical thinking essential for the modern workplace.
        </p>
        <p className="text-gray-600 text-sm">Perfect for those seeking an <i>online BBA near me</i> from a top college in Jaipur.</p>
      </div>
    </div>
    <div className="bg-orange-50 border-l-4 border-orange-400 rounded-xl p-6 mb-8 max-w-5xl mx-auto text-gray-800 shadow-md">
      <p className="mb-3">
        Recognized as a <strong>top college in Jaipur</strong>, Manipal University Jaipur provides accredited, industry-aligned degrees with both academic credibility and practical relevance. Enjoy access to advanced learning tools, 24×7 support, and a successful alumni network.
      </p>
      <p>
        Take your career to new heights—<span className="font-semibold text-orange-700">explore an online MBA with Manipal, BBA, or other online degree programs today</span>. Join Manipal Online—where excellence meets flexibility and innovation shapes your future.
      </p>
    </div>
    <div className="text-center">
      <button 
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg shadow-md text-lg transition-all duration-300"
        onClick={() => setOpenModal({ type: 'enquiry' })}
      >
        Explore Programs & Apply Now
      </button>
    </div>
  </div>
</section>

{/* Campus Tour Section */}
<section id="CampusTour" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Virtual <span className="text-orange-600">Campus Tour</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        While Manipal University Jaipur Online operates in a digital mode, it maintains the vibrancy of an on-campus experience through a powerful virtual learning environment.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Our Digital Campus</h3>
        <p className="text-gray-700 mb-6">
          The MUJ Online Virtual Campus Tour showcases world-class digital infrastructure, including:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600 text-lg">🎥</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Live and Recorded Online Lectures</h4>
              <p className="text-gray-600 text-sm">Interactive sessions by expert faculty members from Manipal University Jaipur</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-lg">💬</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Interactive Discussion Boards</h4>
              <p className="text-gray-600 text-sm">Student communities and peer-to-peer learning platforms</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 text-lg">🔬</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Virtual Laboratories</h4>
              <p className="text-gray-600 text-sm">Hands-on projects for technology and management courses</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-lg">📚</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Digital Library Access</h4>
              <p className="text-gray-600 text-sm">E-books, research materials, and global academic resources</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-600 text-lg">🎯</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Career Webinars</h4>
              <p className="text-gray-600 text-sm">Mentorship sessions with industry leaders and career guidance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Immersive Learning Experience</h3>
          <p className="text-gray-600 mb-6">
            Through immersive images and videos, students can experience how Manipal University Jaipur Online has transformed traditional learning into a dynamic, engaging, and personalized online education ecosystem.
          </p>
          
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm font-semibold text-gray-800">Mobile Learning</div>
              <div className="text-xs text-gray-600">Learn on-the-go</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-sm font-semibold text-gray-800">Desktop Access</div>
              <div className="text-xs text-gray-600">Full-featured platform</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm font-semibold text-gray-800">Global Reach</div>
              <div className="text-xs text-gray-600">Access from anywhere</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold text-gray-800">24/7 Access</div>
              <div className="text-xs text-gray-600">Learn anytime</div>
            </div>
          </div>
          
          <button 
            onClick={() => setOpenModal({ type: 'enquiry' })}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Take Virtual Campus Tour
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Enhanced Statistics Section */}
  <LazySection>
  <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Advantages of <span className="text-orange-500">Manipal University</span>?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Experience world-class education with flexible learning, global recognition, and comprehensive support
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {[
          {
            icon: FaGraduationCap,
            title: '100% Flexible Learning',
            description: 'Learn at your own pace with recorded lectures and live sessions',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            icon: FaIndustry,
            title: 'Industry Relevant Curriculum',
            description: 'Globally recognized degrees with UGC entitlement',
            color: 'from-orange-500 to-red-500'
          },
          {
            icon: FaUniversity,
            title: 'At Par with On-Campus Degrees',
            description: '100% placement assistance and career guidance',
            color: 'from-green-500 to-emerald-500'
          },
          {
            icon: FaMoneyBillWave,
            title: '100% Placement Assistance',
            description: 'No-cost EMI options and scholarships available',
            color: 'from-purple-500 to-pink-500'
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 h-full">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
              
              {/* Decorative element */}
              <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>
  </div>
  </section>
  </LazySection>

      {/* Professional Rankings & Accreditations Section */}
      <LazySection>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditations</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by leading accreditation bodies and ranked among India's top universities
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp', title: 'NAAC A+ Accredited University' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp', title: 'UGC-entitled Online Degrees' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp', title: "Amongst India's top 60 Universities in 2025" },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Norms Compliant' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp', title: 'Globally Recognized Online Degrees' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp', title: 'Member of ACU' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icas_wyryup.webp', title: 'ICAS Canada' },
              { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/iqas_bieryy.webp', title: 'IQAS' },
            ].map((item, i)=>(
              <div key={i} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      width={400} 
                      height={260} 
                      className="w-full h-full max-h-24 sm:max-h-32 object-contain group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div className="px-3 py-4 sm:px-4 sm:py-5">
                    <p className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </LazySection>

      {/* Unlock 360 Advantage */}
      

{/* Why Choose Manipal University Online - As per reference */}
<section className="relative py-16 md:py-24 bg-[#0B0B10] text-white overflow-hidden">
  {/* Subtle grid pattern */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
      {[{value:'60+', label:'Countries and 2000+ towns &\ncities- our students span the globe'},
        {value:'100k+', label:'Learners have been empowered through Online Manipal'},
        {value:'93%', label:'Of students say their online degree has a positive ROI'},
        {value:'81%', label:'Of students find online is better than or equal to on-campus learning'}].map((s, i) => (
        <div key={i} className="text-left">
          <div className="font-queens text-5xl sm:text-6xl md:text-7xl leading-none">{s.value}</div>
          <p className="mt-3 text-sm sm:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Heading */}
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Students Choose Us</h3>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Card 1 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🏅</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Degree from top ranked Manipal universities</h4>
        <p className="text-gray-600 text-sm">Graduate with UGC-entitled, NAAC A+ accredited degrees trusted by employers.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">C</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Exclusive Coursera access</h4>
        <p className="text-gray-600 text-sm">Free access to 10K+ courses and professional certificates from global partners.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Scholarships up to 30%</h4>
        <p className="text-gray-600 text-sm">Avail scholarships under merit, defense, alumni, and other categories.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center mb-4">
          <span className="text-2xl">💳</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Easy financing options</h4>
        <p className="text-gray-600 text-sm">Improved affordability with flexible financing and no-cost EMIs.</p>
      </div>

      {/* Card 5 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Manipal alumni status</h4>
        <p className="text-gray-600 text-sm">Become part of a 200,000+ strong global alumni network.</p>
      </div>
    </div>
  </div>
</section>

        {/* Enhanced Courses Section */}
        <section id="Courses" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Explore <span className="text-orange-500">Online Courses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Manipal University Jaipur Online offers a diverse portfolio of UG and PG online degree programs tailored for career growth and lifelong learning. 
                Each program follows an industry-relevant curriculum, designed to equip learners with job-ready skills.
              </p>
            </motion.div>

            {/* Course Categories */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Undergraduate Programs */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎓</span>
                    Undergraduate Online Degrees
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">1. Online BBA (Bachelor of Business Administration)</h4>
                      <p className="text-gray-600 text-sm">
                        Gain a solid foundation in business, finance, and management. This online BBA program helps students develop leadership and strategic thinking skills required in global business environments.
                      </p>
                      <div>
                       <Link href="/muj-online-bba">
                       <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 cursor-pointer">
                       more info
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">2. Online BCA (Bachelor of Computer Applications)</h4>
                      <p className="text-gray-600 text-sm">
                        A three-year degree focused on computer science, programming, and IT applications. The online BCA from Manipal Online is ideal for students looking to enter the tech industry.
                      </p>
                       <div>
                       <Link href="/manipal">
                       <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                       more info
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">3. Online BA (Bachelor of Arts)</h4>
                      <p className="text-gray-600 text-sm">
                        This flexible and interdisciplinary online BA degree enhances analytical, communication, and creative thinking abilities across humanities and social science subjects.
                      </p>
                       <div>
                       <Link href="/manipal">
                       <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition-all duration-300 cursor-pointer">
                       more info
                       </button>
                         </Link>
                         </div>
                    </div>
                  </div>
                </div>

                {/* Postgraduate Programs */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    Postgraduate Online Degrees
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">1. Online MBA (Master of Business Administration)</h4>
                      <p className="text-gray-600 text-sm">
                        The flagship program of Manipal University Jaipur Online, the online MBA offers specializations in Marketing, HR, Finance, Operations, and Analytics. 
                        Designed for working professionals, it blends management theory with real-world business practices.
                      </p>
                       <div>
                       <Link href="/manipal">
                       <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 cursor-pointer">
                       more info
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">2. Online MCA (Master of Computer Applications)</h4>
                      <p className="text-gray-600 text-sm">
                        A program built for tech enthusiasts and professionals looking to enhance their software development and data analytics skills.
                      </p>
                       <div>
                       <Link href="/manipal">
                       <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                       more info
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">3. Online M.Com (Master of Commerce)</h4>
                      <p className="text-gray-600 text-sm">
                        Designed for commerce graduates and professionals, this online M.Com program focuses on financial management, accounting, and business analytics.
                      </p>
                       <div>
                       <Link href="/manipal">
                       <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition-all duration-300 cursor-pointer">
                       more info
                       </button>
                         </Link>
                         </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Certifications */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  Professional Certification Programs
                </h3>
                <p className="text-gray-700 mb-6">
                  In addition to degree programs, Manipal Online offers short-term and professional certifications in emerging fields such as Data Science, 
                  Digital Marketing, AI, and Project Management — ensuring continuous career development for learners across the globe.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="font-semibold text-gray-800">Data Science</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-semibold text-gray-800">Digital Marketing</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-semibold text-gray-800">Artificial Intelligence</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="font-semibold text-gray-800">Project Management</div>
                  </div>
                </div>
              </div>
            </div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8 sm:mb-12">
                <Tabs.List className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200">
                  <Tabs.Trigger 
                    value="all"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='all' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
                  >
                    All Programs
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="ug"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='ug' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
                  >
                    Undergraduate
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="pg"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='pg' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
                  >
                    Postgraduate
                  </Tabs.Trigger>
                </Tabs.List>
              </div>

              <Tabs.Content value="all">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {([...ugCourses, ...pgCourses].slice(0, 8)).map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    >
                      <EnquireCard {...course} universityName="Manipal University Online" />
                    </motion.div>
                  ))}
                </motion.div>
                {/* <div className="mt-6 flex justify-center">
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('ug')} className="border-2">
                    Show more programs
                  </Button>
                </div> */}
              </Tabs.Content>

              {/* UG Courses */}
              <Tabs.Content value="ug">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {ugCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    >
                      <EnquireCard {...course} universityName="Manipal University Online" />
                    </motion.div>
                  ))}
                </motion.div>
              </Tabs.Content>

              {/* PG Courses */}
              <Tabs.Content value="pg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {pgCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    >
                      <EnquireCard {...course} universityName="Manipal University Online" />
                    </motion.div>
                  ))}
                </motion.div>
              </Tabs.Content>
    </Tabs.Root>
          </div>
</section>

{/* Key Highlights Section */}
<section id="KeyHighlights" className="py-16 sm:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Key Highlights of <span className="text-orange-600">Manipal University Jaipur Online</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal Online seamlessly merges traditional university values with the latest in digital learning to create a holistic and empowering educational experience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🏆</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">UGC-entitled and NAAC A+ Accredited</h3>
        <p className="text-gray-600 text-sm">
          Recognized globally for academic innovation and excellence with the highest accreditation standards.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">💻</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">100% Online Degree Programs</h3>
        <p className="text-gray-600 text-sm">
          Study anytime, anywhere with complete flexibility and convenience for modern learners.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🎯</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-driven Curriculum</h3>
        <p className="text-gray-600 text-sm">
          Developed by global experts to ensure relevance and practical application in real-world scenarios.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">👨‍🏫</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">World-class Faculty</h3>
        <p className="text-gray-600 text-sm">
          Access to experienced professors and industry experts from Manipal University Jaipur.
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">💼</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Career Mentoring & Placement</h3>
        <p className="text-gray-600 text-sm">
          Comprehensive placement assistance and career guidance from corporate partners.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🌐</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">24×7 Learning Platform</h3>
        <p className="text-gray-600 text-sm">
          Advanced digital platforms ensuring seamless and intuitive learning experience.
        </p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Globally Accepted Online Degrees</h3>
      <p className="text-lg mb-6">
        Equivalent to regular campus degrees and part of the prestigious Manipal Education Group with over 65 years of academic leadership.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
        >
          Apply Now
        </button>
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors cursor-pointer"
        >
          Download Brochure
        </button>
      </div>
    </div>
  </div>
</section>

{/* Admission Dates Section */}
<section id="AdmissionDates" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Admission Dates for <span className="text-orange-600">Various UG & PG Programs</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online follows a flexible admission calendar, allowing students to apply throughout the year. 
        The university runs multiple admission intakes, ensuring no learner misses out on opportunities.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Schedule</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">January Intake</h4>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in December</span>
            </div>
            <p className="text-gray-600 text-sm">Start your academic year with fresh opportunities and comprehensive support.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">April Intake</h4>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in March</span>
            </div>
            <p className="text-gray-600 text-sm">Perfect timing for mid-year career transitions and skill enhancement.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">July Intake</h4>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in June</span>
            </div>
            <p className="text-gray-600 text-sm">Ideal for fresh graduates and working professionals seeking advancement.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">October Intake</h4>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Opens in September</span>
            </div>
            <p className="text-gray-600 text-sm">End-year enrollment for those planning ahead for the next academic cycle.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Programs</h3>
        <p className="text-gray-600 mb-6">
          Students can enroll in online MBA, online BBA, online BCA, online MCA, online M.Com, or online BA programs directly via the Manipal Online admission portal.
        </p>
        
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-2">🎓</div>
            <div className="font-semibold text-gray-800">Undergraduate</div>
            <div className="text-xs text-gray-600">BBA, BCA, BA</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold text-gray-800">Postgraduate</div>
            <div className="text-xs text-gray-600">MBA, MCA, M.Com</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Early Bird Benefits</h4>
          <p className="text-sm text-gray-600">
            For each session, early applicants are eligible for exclusive scholarships, financial aid, and counseling support.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Apply Now - Multiple Intakes Available
        </button>
      </div>
    </div>
  </div>
</section>

     {/*360 section*/}

  
  
    {/* Modern 360 Advantage */}
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(255,122,54,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-queens font-bold text-gray-900">Unlock The 360° Advantage</h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-3xl mx-auto">Comprehensive benefits designed to support your learning journey and career growth.</p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[{
            icon:'🎓', title:'Prestigious Degree', desc:'Globally recognized degree that opens doors worldwide.'
          },{
            icon:'📚', title:'Industry-Relevant Curriculum', desc:'Learn in-demand skills aligned with market needs.'
          },{
            icon:'💼', title:'Placement Assistance', desc:'End-to-end support with internships and jobs.'
          },{
            icon:'💳', title:'Easy Financing', desc:'Affordable no-cost EMI options for all learners.'
          }].map((b,i)=>(
            <div key={i} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
        </div>
      ))}
    </div>

        {/* Financing + Scholarships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <h3 className="text-2xl font-bold mb-2">Avail easy financing options</h3>
            <p className="text-orange-100">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <h3 className="text-2xl font-bold mb-2">Get attractive scholarships</h3>
            <p className="text-blue-100">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
          </div>
        </div>
  </div>
</section>
  



      {/* Why Choose Section */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Online Manipal Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaStar className="text-yellow-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible & Convenient Schedule</h3>
              <p className="text-gray-600">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaCertificate className="text-blue-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">At Par with On-Campus Degrees</h3>
              <p className="text-gray-600">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaUsers className="text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Faculty & Mentors</h3>
              <p className="text-gray-600">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaBuilding className="text-purple-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prestigious Manipal Alumni Network</h3>
              <p className="text-gray-600">Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Manipal Section  */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-orange-600">Manipal University Jaipur</span>
        </h2>
        <div className="prose prose-lg text-gray-700 space-y-4">
          <p>
            Manipal University Jaipur (MUJ) is a premier institution offering globally recognized online degrees through Online Manipal. 
            Established in 2011, MUJ has quickly become one of India's leading universities with NAAC A+ accreditation and UGC approval.
          </p>
          <p>
            With over 100,000+ learners worldwide, Manipal Online delivers industry-relevant education through flexible learning models. 
            Our online programs in MBA, BBA, MCA, BCA, M.Com, B.Com, and MA are designed for working professionals who want to upskill 
            without career breaks.
          </p>
          <p>
            Manipal University Jaipur's online degrees are WES-accredited and accepted globally for employment and higher education. 
            Students benefit from live classes, recorded sessions, expert faculty, placement assistance, and membership in the 
            200,000+ strong Manipal alumni network spanning 50+ countries.
          </p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" alt="Manipal University Jaipur Campus" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
      </div>
    </div>
  </div>
</section>

{/* Program Benefits Section */}
<section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose <span className="text-orange-600">Online Manipal University Programs?</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">UGC-Entitled Online Degrees</h3>
        <p className="text-gray-600">
          All Manipal University Jaipur online programs are UGC-DEB approved and equivalent to regular degrees. 
          Valid for government jobs, competitive exams like UPSC, SSC, and higher education in India and abroad.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Learning Model</h3>
        <p className="text-gray-600">
          Study anytime, anywhere with Manipal Online's hybrid learning approach. Access live interactive classes, 
          recorded lectures, digital study materials, and LMS platform 24/7 from desktop or mobile devices.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Relevant Curriculum</h3>
        <p className="text-gray-600">
          MUJ online courses feature updated curriculum aligned with industry demands. Learn practical skills in 
          emerging areas like Data Science, AI, Digital Marketing, Cloud Computing, and Business Analytics.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Faculty & Mentorship</h3>
        <p className="text-gray-600">
          Learn from experienced professors and industry experts at Manipal University Jaipur. Benefit from 
          personalized mentorship, doubt-clearing sessions, and career guidance throughout your program.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">100% Placement Assistance</h3>
        <p className="text-gray-600">
          Get dedicated placement support from Manipal Online's career services team. Access job opportunities, 
          resume building workshops, interview preparation, and connections with 2000+ hiring partners.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Global Alumni Network</h3>
        <p className="text-gray-600">
          Join the prestigious Manipal alumni community of 200,000+ graduates across 50+ countries. Leverage 
          networking opportunities, mentorship programs, and alumni chapters worldwide for career growth.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Eligibility & Admission Section */}
<section id='Admission' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">
      Eligibility & <span className="text-orange-600">Admission Process</span>
    </h2>
    
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Eligibility Criteria for MUJ Online Programs</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-bold text-lg mb-2">Undergraduate Programs (BBA, BCA, B.Com)</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>10+2 or equivalent from recognized board</li>
              <li>Minimum 40% aggregate marks</li>
              <li>Age: No upper age limit</li>
              <li>Open for all streams (Science, Commerce, Arts)</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-lg mb-2">Postgraduate Programs (MBA, MCA, M.Com, MA)</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Bachelor's degree from UGC-recognized university</li>
              <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
              <li>MCA requires Mathematics/Statistics in 10+2 or graduation</li>
              <li>Working professionals and fresh graduates both eligible</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-6">Simple Admission Process</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold mb-1">Fill Application Form</h4>
              <p className="text-gray-600">Complete online application with basic details and program preference</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold mb-1">Document Verification</h4>
              <p className="text-gray-600">Upload educational certificates, ID proof, and photographs for verification</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold mb-1">Fee Payment</h4>
              <p className="text-gray-600">Pay admission fee online with flexible EMI options available</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold mb-1">Enrollment Confirmation</h4>
              <p className="text-gray-600">Receive admission confirmation and access to LMS portal within 48 hours</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all cursor-pointer"
        >
          Start Your Application Now
        </button>
      </div>
    </div>
  </div>
</section>

{/* Fee Structure Section */}
<section id='Fees' className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-4">
      Affordable <span className="text-orange-600">Fee Structure</span>
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Manipal University Jaipur Online offers affordable and transparent tuition fees, along with EMI and installment options to make education accessible for all.
    </p>
    
    {/* Fee Table */}
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Program</th>
              <th className="px-6 py-4 text-left font-semibold">Duration</th>
              <th className="px-6 py-4 text-left font-semibold">Approx. Fee</th>
              <th className="px-6 py-4 text-left font-semibold">Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MBA</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,75,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MCA</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,58,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online M.Com</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,08,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
              
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online B.Com</td>
              <td className="px-6 py-4 text-gray-600">3 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,08,000</td>
              <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
              
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online BBA</td>
              <td className="px-6 py-4 text-gray-600">3 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,35,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online BCA</td>
              <td className="px-6 py-4 text-gray-600">3 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,35,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
            </tr>
            <tr className="hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MA(Economics)</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹80,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
              </tr>
               <tr className="hover:bg-orange-50">
              <td className="px-6 py-4 font-semibold text-gray-900">Online MAJMC</td>
              <td className="px-6 py-4 text-gray-600">2 Years</td>
              <td className="px-6 py-4 font-bold text-orange-600">₹1,40,000</td>
              <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    {/* Additional Information */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">💰</span>
          Scholarship Opportunities
        </h3>
        <p className="text-gray-600 mb-4">
          MUJ Online provides scholarships for merit-based students, corporate employees, and defense personnel.
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Merit-based scholarships up to 30%
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Corporate employee discounts
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Defense personnel special rates
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Alumni and referral benefits
          </li>
        </ul>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          What's Included
        </h3>
        <p className="text-gray-600 mb-4">
          All fees include access to learning materials, LMS tools, live sessions, and assessments.
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Complete study materials and e-books
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Access to Learning Management System
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Live interactive sessions
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Assessment and examination fees
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Career guidance and placement support
          </li>
        </ul>
      </div>
    </div>
    
    <div className="text-center mt-8">
      <button 
        onClick={() => setOpenModal({ type: 'enquiry' })}
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        Get Detailed Fee Structure & EMI Options
      </button>
    </div>
  </div>
</section>

{/* Admission Process Section */}
<section id="AdmissionProcess" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Admission Process</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online follows a streamlined and 100% digital admission process.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Visit the Official Website</h4>
              <p className="text-gray-600">Access the official Manipal Online website and navigate to the admissions section.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Choose Your Program</h4>
              <p className="text-gray-600">Select your preferred online degree (MBA, BBA, BCA, MCA, BA, or M.Com) from the available options.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Fill Registration Form</h4>
              <p className="text-gray-600">Complete the online registration form with valid personal and academic details.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Upload Documents</h4>
              <p className="text-gray-600">Upload academic documents, ID proof, and a recent photograph for verification.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Pay Program Fee</h4>
              <p className="text-gray-600">Complete the program fee payment securely online with flexible EMI options.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Receive Confirmation</h4>
              <p className="text-gray-600">Get instant confirmation and access to your student dashboard within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick & Easy Process</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">100% Digital Process</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">No Entrance Exam Required</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700">Flexible Payment Options</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Processing Time</h4>
          <p className="text-gray-600 text-sm">
            The entire process takes only a few minutes, and MUJ Online's dedicated support team ensures a smooth enrollment journey for all students, both domestic and international.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Start Your Application Now
        </button>
      </div>
    </div>
  </div>
</section>

{/* Upcoming and Ongoing Sessions Section */}
<section id="Sessions" className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Details of <span className="text-orange-600">Upcoming and Ongoing Sessions</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online conducts multiple batches each year for both UG and PG programs.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">January 2026 Session</h4>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Applications Open</span>
            </div>
            <p className="text-gray-600 text-sm">Start your academic journey with comprehensive support and guidance.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">April 2026 Session</h4>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Enrollments in Progress</span>
            </div>
            <p className="text-gray-600 text-sm">Mid-year intake with flexible learning schedules.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">July 2026 Session</h4>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Early Bird Discounts Available</span>
            </div>
            <p className="text-gray-600 text-sm">Special offers and scholarships for early applicants.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">October 2026 Session</h4>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Pre-registration Soon</span>
            </div>
            <p className="text-gray-600 text-sm">End-year enrollment for planning ahead.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Sessions</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">📚</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Orientation Programs</h4>
              <p className="text-gray-600 text-sm">Comprehensive orientation sessions for new students</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🎥</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Live Classes</h4>
              <p className="text-gray-600 text-sm">Interactive live sessions with expert faculty</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">📋</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Project-based Assignments</h4>
              <p className="text-gray-600 text-sm">Hands-on learning through practical projects</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🔄</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Mid-term Enrollment</h4>
              <p className="text-gray-600 text-sm">Learners can join mid-term based on program eligibility</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Learning Continuity</h4>
          <p className="text-gray-600 text-sm">
            Manipal Online ensures learning continuity through its self-paced modules and accessible LMS platform, 
            allowing students to catch up and stay on track regardless of when they join.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Enroll in Current Session
        </button>
      </div>
    </div>
  </div>
</section>

{/* Placement Partners Section */}
<section id="PlacementPartners" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Placement Partners</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online partners with leading national and multinational organizations to offer extensive placement and internship opportunities.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Placement Partners</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">💼</div>
            <div className="font-semibold text-gray-800">Infosys</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🏢</div>
            <div className="font-semibold text-gray-800">Wipro</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold text-gray-800">Accenture</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold text-gray-800">TCS</div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold text-gray-800">Deloitte</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-semibold text-gray-800">Capgemini</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Cognizant</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Amazon</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">EY</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">HDFC Bank</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Services Division</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">📝</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Resume Building</h4>
              <p className="text-gray-600 text-sm">Professional resume crafting and optimization</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🎤</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Mock Interviews</h4>
              <p className="text-gray-600 text-sm">Practice sessions with industry experts</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">🤝</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Professional Networking</h4>
              <p className="text-gray-600 text-sm">Connect with industry professionals and alumni</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">💼</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Job Placements</h4>
              <p className="text-gray-600 text-sm">Direct placement opportunities with partner companies</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
          <p className="text-gray-600 text-sm">
            MUJ Online's collaboration with global brands ensures every online degree holder gains real career value 
            and recognition in the competitive job market.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Explore Career Opportunities
        </button>
      </div>
    </div>
  </div>
</section>

{/* Placement Record Section */}
<section id="PlacementRecord" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Placement Record</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal Online has achieved impressive placement outcomes across domains. Graduates from online MBA, online MCA, and online BBA programs have secured roles in management, IT, consulting, finance, and marketing.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Placement Highlights</h3>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">90%</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Employability Rate</h4>
                <p className="text-gray-600 text-sm">For postgraduates across all programs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">500+</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Recruiters Associated</h4>
                <p className="text-gray-600 text-sm">With Manipal University Jaipur Online</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">₹7 LPA</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Average MBA Salary</h4>
                <p className="text-gray-600 text-sm">Competitive compensation packages</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">24/7</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Placement Portal</h4>
                <p className="text-gray-600 text-sm">Real-time job listings and opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Domains</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💼</span>
            </div>
            <span className="text-gray-700 font-semibold">Management Roles</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💻</span>
            </div>
            <span className="text-gray-700 font-semibold">IT & Technology</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📊</span>
            </div>
            <span className="text-gray-700 font-semibold">Consulting</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💰</span>
            </div>
            <span className="text-gray-700 font-semibold">Finance & Banking</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📈</span>
            </div>
            <span className="text-gray-700 font-semibold">Marketing & Sales</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Career Development Focus</h4>
          <p className="text-gray-600 text-sm">
            MUJ Online's strong focus on career development ensures every learner is job-ready upon graduation 
            with practical skills and industry knowledge.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          View Placement Statistics
        </button>
      </div>
    </div>
  </div>
</section>

   


      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image width={100} height={100} src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327504/muj-certi_l0mgpy.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognized Online Degree from Manipal University</h2>
            <p className="mb-6 text-lg">
              Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC & AICTE Recognized Degrees</li>
              <li>Daily Live & Recorded Classes</li>
              <li>Global Collaborations with Ivy-League Institutions</li>
              <li>100% Placement & Internship Support</li>
            </ul>
          </div>
        </div>
      </section>


    {/*  Add Location-Based Section (for local SEO) */}
<section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      Online Manipal Programs <span className="text-orange-600">Available Across India</span>
    </h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[
        'Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 
        'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
        'Jaipur', 'Lucknow', 'Chandigarh', 'Indore'
      ].map(city => (
        <div key={city} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
          <div className="text-2xl mb-2">📍</div>
          <h3 className="font-bold text-sm">{city}</h3>
          <p className="text-xs text-gray-600">Online Programs</p>
        </div>
      ))}
            </div>
    
    <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
      Manipal University Jaipur's online programs are accessible from anywhere in India. 
      Students from Delhi, Mumbai, Bangalore, and 2000+ cities trust MUJ for quality online education.
    </p>
  </div>
</section>


      {/*  Add Quick Comparison Table */}
<section id='QuickComparison' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-orange-600">Online vs Regular</span> Degree Comparison
    </h2>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Online Manipal</th>
            <th className="p-4 text-center">Regular Campus</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['UGC Recognition', '✅ Yes', '✅ Yes'],
            ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
            ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
            ['Location', '✅ From Anywhere', '❌ Campus Only'],
            ['Cost', '✅ More Affordable', '❌ Higher Fees'],
            ['Placement Support', '✅ 100% Assistance', '✅ Available']
          ].map(([feature, online, regular], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-4 font-semibold">{feature}</td>
              <td className="p-4 text-center">{online}</td>
              <td className="p-4 text-center">{regular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
      </section>
      {/* Professional Testimonials Section */}
      <section id="StudentReviews" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Student <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Students across the globe praise Manipal Online for its technology-driven learning, professional mentorship, and strong placement assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-orange-500 mx-auto sm:mx-0 mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-sm sm:text-base text-orange-600 font-semibold">
                          {testimonial.course}, {testimonial.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       

        {/* Professional FAQ Section */}
        <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about Manipal University Jaipur Online Programs
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <span className="text-lg font-bold">{openIndex === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 sm:px-8 sm:py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Manipal Reviews Section */}
<section id="ManipalReviews" className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        <span className="text-orange-600">Manipal Reviews</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Manipal University Jaipur Online consistently ranks among India's best online universities by NIRF, India Today, and QS World Rankings. 
        Learners and employers recognize Manipal Online for its global-standard education, digital excellence, and employability focus.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Recognition & Rankings</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🏆</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">NIRF Rankings</h4>
                <p className="text-gray-600 text-sm">Consistently ranked among top universities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">📰</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">India Today Rankings</h4>
                <p className="text-gray-600 text-sm">Recognized for academic excellence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🌍</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">QS World Rankings</h4>
                <p className="text-gray-600 text-sm">Global recognition for quality education</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Impact</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">👥</span>
            </div>
            <span className="text-gray-700 font-semibold">200,000+ Alumni Network</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🌐</span>
            </div>
            <span className="text-gray-700 font-semibold">Growing International Recognition</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🎯</span>
            </div>
            <span className="text-gray-700 font-semibold">Digital Excellence Focus</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💼</span>
            </div>
            <span className="text-gray-700 font-semibold">Employability Focus</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Leading Digital Transformation</h4>
          <p className="text-gray-600 text-sm">
            With over 200,000 alumni and growing international recognition, MUJ Online stands at the forefront of digital transformation 
            in distance education and online degrees.
          </p>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'enquiry' })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Join the Manipal Legacy
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Professional Hiring Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top Companies</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join the ranks of successful graduates working at leading organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png", "/images/apple.jpg","https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp"].map((src, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="aspect-square flex items-center justify-center">
                    <Image 
                      width={100} 
                      height={100} 
                      src={src} 
                      alt="Company" 
                      className="h-12 sm:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Join Them?</h3>
              <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Start your journey with Manipal University Online and unlock endless career opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  Apply Now
                </button>
              
              </div>
            </div>
          </div>
        </div>
        
        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
            universityName="Manipal University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </section>

        </main>
      </div>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden mt-8 lg:ml-64">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
              {/* Company Info */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal" className="h-10 w-auto" />
                    <span className="text-xl font-bold text-white">Online Manipal</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    UGC-entitled, NAAC A+ accredited online degrees designed for modern learners. 
                    Transform your career with globally recognized programs.
                  </p>
                  
                  {/* Social Media */}
                  <div className="flex space-x-4">
                    {[
                      { icon: '📘', label: 'Facebook' },
                      { icon: '📷', label: 'Instagram' },
                      { icon: '🐦', label: 'Twitter' },
                      { icon: '💼', label: 'LinkedIn' }
                    ].map((social, i) => (
                      <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                        <span className="text-lg">{social.icon}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Programs */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-bold mb-4 text-lg">Programs</h4>
                  <ul className="space-y-3 text-sm">
                    {['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com', 'MAJMC'].map((program, i) => (
                      <li onClick={() => setOpenModal({ type: 'apply' })} key={i} className="hover:text-orange-400 transition-colors cursor-pointer">
                        {program}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Resources */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
                  <ul className="space-y-3 text-sm">
                    {[
                      { name: 'Admissions', href: '#Admission' },
                      { name: 'Scholarships', href: '#' },
                      { name: 'Placements', href: '#' },
                      { name: 'FAQs', href: '#Faq' },
                      { name: 'Quick Comparison', href: '#QuickComparison' },
                      { name: 'Fees Structure', href: '#Fees' }
                    ].map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="hover:text-orange-400 transition-colors">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400">📞</span>
                      </div>
                      <span className="text-sm">+91-7042867717</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400">✉️</span>
                      </div>
                      <span className="text-sm">info@unifostedu.com</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              </div>
            </div>
          {/* Popular Programs & Specializations - MUJ */}
            {/* Popular Programs Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-8 mb-8"
            >
              <h4 className="text-lg font-bold mb-6 text-white text-center">
                Popular Programs & Specializations – Manipal University Jaipur (MUJ)
              </h4>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  // UG Courses
                  "BBA General - MUJ Online",
                  "BBA Finance & Accounting - MUJ Online",
                  "BBA Digital Marketing - MUJ Online",
                  "BBA Marketing -MUJ Online",
                  "BBA Entrepreneurship & Family Business - MUJ Online",
                  "BBA Human Resource Management - MUJ Online",
                  "BBA Data Analytics - MUJ Online",
                  "BBA Retail & E-commerce Management - MUJ Online",
                  "BCA General - MUJ Online",
                  "BCA Data Science & Analytics - MUJ Online",
                  "BCA Cyber Security - MUJ Online",
                  "BCA Cloud Computing - MUJ Online",
                  "B.Com General - MUJ Online",
                  // PG Courses
                  "MBA General - MUJ Online",
                  "MBA HR & Finance - MUJ Online",
                  "MBA Finance & Marketing - MUJ Online",
                  "MBA Marketing & HR - MUJ Online",
                  "MBA Marketing & Business Analytics - MUJ Online",
                  "MBA Finance & Business Analytics - MUJ Online",
                  "MBA Project Management - MUJ Online",
                  "MBA Retail Management & Quick Commerce - MUJ Online",
                  "MBA Artificial Intelligence in Banking & Finance - MUJ Online",
                  "MCA AI & Data Science - MUJ Online",
                  "MCA Cyber Security - MUJ Online",
                  "MCA Cloud Computing - MUJ Online",
                  "MCA Comprehensive Emerging Technologies - MUJ Online",
                  "MCA Artificial Intelligence & Machine Learning - MUJ Online",
                  "M.Com General - MUJ Online",
                  "MA Economics - MUJ Online",
                  "MA Journalism & Mass Communication - MUJ Online"
                ].map((keyword, index) => (
                  <span
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                    title={keyword}
                    onClick={() => {
                          setOpenModal({ type: "apply" });
                        }}
                  >
                    {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8 pb-6 text-center text-sm text-gray-400 border-t border-white/10"
            >
              <p>&copy; {new Date().getFullYear()} Manipal University Online. All rights reserved.</p>
              <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
            </motion.div>
          </div>
        </footer>
        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
            universityName="Manipal University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
        </div>
    </>
  );
};


export default Manipal;
