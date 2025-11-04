'use client';
import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import EnquireCard from '@/components/EnquireCard';
import { FaBookOpen, FaUserTie,FaTimes, FaBriefcase, FaClipboardCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from 'next/image';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { motion, AnimatePresence } from 'framer-motion';

const Dypatil = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [openModal, setOpenModal] = useState(null);
  const [modalType, setModalType] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleExpanded = (type, index) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${type}-${index}`]: !prev[`${type}-${index}`]
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fees: "₹1,45,400",
      eligibility: "10+2 Pass",
      specialization: "IT & System Management, International Business Management, Retail Management, Banking, Financial Services and Insurance Management, Shipping & Logistics Management, Marketing Management, Human Resource Management (HRM), Finance Management, E-commerce Management ",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in Dy Patil ",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹1,40,000",
      eligibility: "Graduation with 50% Marks",
      specialization: "General",
      image: "/images/mca1.webp",
      alt: "Master of Computer Applications (MCA) in Dy Patil ",
    },
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,89,400",
      specialization: "Marketing Management, Human Resource Management, Finance Management, IT Management, Project Management, Operations Management, Hospital Administration & Healthcare Management, International Business Management, FinTech Management, Business Analytics Management, Artificial Intelligence & Machine Learning Management, Logistics, Materials & Supply Chain Management, Blockchain Management, Digital Marketing Management, Agri-Business Management",
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in Dy Patil ",
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
      question: "Is Dr. DY Patil University Online recognized by UGC?",
      answer: "Yes, DY Patil University Online is UGC-entitled and NAAC A++ accredited. All online degrees are fully valid and recognized across India and abroad."
    },
    {
      question: "Are online degrees from DYPU Online equivalent to regular programs?",
      answer: "Absolutely. All DY Patil Online degrees hold the same academic and professional value as traditional on-campus programs."
    },
    {
      question: "Can international students apply for DYPU Online programs?",
      answer: "Yes, DY Patil University Online welcomes students from over 50 countries."
    },
    {
      question: "Does DY Patil Online provide placement support?",
      answer: "Yes, students receive personalized career assistance, industry mentorship, and access to global placement opportunities."
    },
    {
      question: "What kind of learning support is available?",
      answer: "Students get 24×7 access to LMS, live and recorded lectures, e-resources, and dedicated student support teams."
    },
    {
      question: "What is the duration of the online MBA program?",
      answer: "The online MBA program at DY Patil is a 2-year program divided into 4 semesters, offering flexibility for working professionals."
    },
    {
      question: "What specializations are available in the online MBA?",
      answer: "DY Patil offers multiple specializations including Marketing, Finance, HR, IT Management, Business Analytics, AI & ML, Digital Marketing, Healthcare Management, and more."
    },
    {
      question: "Is there any placement assistance for online students?",
      answer: "Yes, the university provides comprehensive career support including placement assistance, virtual job fairs, and career counseling services."
    },
    {
      question: "What is the eligibility criteria for the online MBA?",
      answer: "Candidates must have a bachelor's degree from a recognized university with minimum 50% marks (45% for reserved categories)."
    },
    {
      question: "Are there any EMI options available?",
      answer: "Yes, DY Patil offers zero-cost EMI options to make education affordable for students."
    },
    {
      question: "How are the online classes conducted?",
      answer: "Classes are conducted through live interactive sessions, recorded lectures, and virtual learning platforms that can be accessed anytime, anywhere."
    }
  ];

  // Function to render expandable content
  const renderExpandableContent = (content, type, index, limit = 80) => {
    const isExpanded = expandedItems[`${type}-${index}`];
    const shouldTruncate = content.length > limit;
    const displayText = shouldTruncate && !isExpanded 
      ? `${content.substring(0, limit)}...` 
      : content;
    
    return (
      <div>
        <p className="mt-1 text-gray-700">
          {displayText}
          {shouldTruncate && (
            <button 
              onClick={() => toggleExpanded(type, index)}
              className="text-blue-600 font-medium ml-1 flex items-center"
            >
              {isExpanded ? 'Show less' : 'More'} 
              {isExpanded ? <FaChevronUp className="ml-1" size={12} /> : <FaChevronDown className="ml-1" size={12} />}
            </button>
          )}
        </p>
      </div>
    );
  };

  // Career Support Component
  const CareerSupport = () => {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nurturing Your Career Dreams : <br />
              <span className="text-[#b3202e]">Together, We Build Success</span>
            </h2>
            <div className="w-32 h-1 bg-[#b3202e] mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                IC
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Industry Connections
                </h3>
                <p className="text-gray-600">
                  Taps into strong industry ties, broadening students' access to desirable job prospects.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp delay-200">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                S1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Support One-on-one
                </h3>
                <p className="text-gray-600">
                  Personalized career counseling, guiding students to align skills, interests and goals.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp delay-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                MI
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mock Interviews
                </h3>
                <p className="text-gray-600">
                  Refines communication and confidence by having mock interviews.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp delay-500">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                NE
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Networking Events
                </h3>
                <p className="text-gray-600">
                  Organizes events for students to network with professionals, employers, and alumni.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>
    );
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
     
      <Head>
        <title>DY Patil University Online </title>
        <meta 
          name="description" 
          content=" DY Patil University Online to pursue flexible UG and PG programs like BBA, MCA, and MBA. UGC-approved, NAAC A++ accredited, with career support and global recognition." 
        />
        <meta 
          name="keywords" 
          content="DY Patil University Online, Online BBA, Online MCA, Online MBA, UGC approved university, NAAC A++ accreditation, Online degrees India, Flexible learning, Career growth programs, Online higher education" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/dypatil/" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 flex-wrap gap-2">
            {/* Left Logo */}
            <div className="flex items-center min-w-0">
              <img
                src="/images/dpulogo.png"
                alt="DPU Logo"
                className="h-10 sm:h-12 md:h-16 w-auto max-w-full"
              />
            </div>

            {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden inline-flex items-center p-2 rounded-md border hover:bg-gray-50"
            >
              Menu
            </button>
              {/* Apply Now Button */}
              <button 
                onClick={() => {
                  setOpenModal('apply');
                  setShowEnquiryModal(true);
                  setModalType('apply');
                }}
                className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white px-3 sm:px-5 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-opacity text-sm cursor-pointer"
              >
                Apply Now
              </button>

              {/* Accreditation icons - hide on small screens to prevent overflow */}
              <img src="/images/ugc.webp" alt="UGC Logo" className="hidden sm:block h-8 sm:h-10 w-auto" />
              <img src="/images/aicte.webp" alt="AICTE Logo" className="hidden sm:block h-9 sm:h-12 w-auto" />

              {/* Call button (text on >=sm, icon on mobile) */}
              <a
                href="tel:+917042867717"
                className="hidden sm:inline-flex items-center bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white px-4 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-opacity text-sm cursor-pointer"
              >
                +91-7042867717
              </a>
              <a
                href="tel:+917042867717"
                className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white"
                aria-label="Call"
              >
                📞
              </a>
            </div>
          </div>
        </div>

        {/* Enquiry Modal */}
        {showEnquiryModal && (
          <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
            <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                  Get Started with Dr. DY Patil University
                </DialogTitle>
              </DialogHeader>
              <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} universityName="Dr. DY Patil University" />
            </DialogContent>
          </Dialog>
        )}
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16 overflow-x-hidden break-words hyphens-auto w-full">
        
        <div className="max-w-screen-2xl mx-auto flex w-full">
          {/* Left Sidebar */}
          <aside className="fixed hidden lg:flex flex-col top-20 w-64 h-[calc(100vh-5rem)] px-4 py-8 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
            <h3 className="text-lg font-bold mb-6 text-red-600 border-b-2 border-red-200 pb-2 cursor-pointer">
              Page Contents
            </h3>
            <ul className="space-y-3 cursor-pointer">
              {[
                { id: "HeroSection", label: "Introduction" },
                { id: "CampusTour", label: "Campus Tour" },
                { id: "Courses", label: "Explore Courses" },
                { id: "KeyHighlights", label: "Key Highlights" },
                { id: "AdmissionDates", label: "Admission Dates" },
                { id: "Fees", label: "Fees Structure" },
                { id: "Admission", label: "Admission Process" },
                { id: "Sessions", label: "Sessions Info" },
                { id: "Companies", label: "Placement Partners" },
               
                
                { id: "Faq", label: "FAQs" },
                
              ].map((item) => (
                <li
                  key={item.id}
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 py-1 px-2 rounded hover:bg-red-50"
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
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
                                        <h3 className="text-xl font-bold text-pink-600">Page Contents</h3>
                                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                                          <FaTimes className="w-5 h-5 text-gray-600" />
                                        </button>
                                      </div>
                  <ul className="space-y-4">
                    {[
                      { id: "HeroSection", label: "Introduction" },
                      { id: "CampusTour", label: "Campus Tour" },
                      { id: "Courses", label: "Explore Courses" },
                      { id: "KeyHighlights", label: "Key Highlights" },
                      { id: "AdmissionDates", label: "Admission Dates" },
                      { id: "Fees", label: "Fees Structure" },
                      { id: "Admission", label: "Admission Process" },
                      { id: "Sessions", label: "Sessions Info" },
                      { id: "Companies", label: "Placement Partners" },
                      { id: "Faq", label: "FAQs" },
                    ].map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            const section = document.getElementById(item.id);
                            if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-gray-700 hover:text-red-600 font-semibold text-base transition-colors duration-200 w-full text-left"
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
          <main className="flex-1 min-w-0 lg:ml-64">
           <div className="overflow-x-hidden"
          className="relative w-full h-[500px] flex items-center"
          style={{
            backgroundImage: "url('/images/dpu1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay with Gradient for Better Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto w-full px-6 relative z-10 overflow-x-hidden">
            {/* Left Content */}
            <div className="text-white max-w-lg">
              <p className="text-lg sm:text-xl font-medium drop-shadow-lg">
                Scale Your Career with D. Y. Patil
              </p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold drop-shadow-lg">
                <span className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] px-3 py-2 rounded text-white shadow-lg">
                  Online MBA
                </span>
              </h1>
              <p className="mt-4 text-lg font-medium drop-shadow-lg">
                Powered with Gen AI Tools
              </p>

              {/* Features */}
              <div className="mt-6 space-y-2 text-sm sm:text-base drop-shadow-lg">
                <p className="flex items-center">
                  ✅ Get Scholarship upto *Rs 10000/-
                </p>
                <p className="flex items-center">✅ Zero Cost EMI Available</p>
                <p className="flex items-center">
                  ✅ International Student exchange Programs in Dubai and Malaysia
                </p>
              </div>

              {/* Admission Open */}
              <div className="mt-6">
                <p className="text-xl sm:text-2xl font-semibold bg-white text-[#0c254a] inline-block px-4 py-2 rounded shadow-lg">
                  Admissions Open 2025
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Section - Bottom of Banner */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white py-3 px-6">
              <p className="text-center text-sm sm:text-base font-medium">
                <span className="font-semibold">Eligibility:</span> Graduate in any discipline, from a recognized University. Min 50% for regular and 45% for category students
              </p>
            </div>
          </div>
        </div>

        {/* Rest of your existing sections */}
        {/* AI Tools Section */}
        <section
          className="w-full py-16"
          style={{
            background: "linear-gradient(180deg, #E91C63 0%, #9C144A 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              AI Tools Covered
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  Logistics, Materials, and Supply Chain Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>Llamasoft AI</b> (AI-driven logistics decision-making)</li>
                  <li>✅ <b>FourKites AI</b> (Real-time supply chain visibility)</li>
                  <li>✅ <b>Project44 AI</b> (AI-powered freight management)</li>
                  <li>✅ <b>Blume Global AI</b> (AI in supply chain automation)</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  Blockchain Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>IBM Blockchain AI</b> (AI for smart contract management)</li>
                  <li>✅ <b>Hyperledger Fabric</b> (Enterprise blockchain AI solutions)</li>
                  <li>✅ <b>Ethereum AI</b> (AI-powered decentralized applications)</li>
                  <li>✅ <b>Chainalysis AI</b> (AI in blockchain security & compliance)</li>
                  <li>✅ <b>Consensys AI</b> (AI-driven blockchain finance tools)</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  Digital Marketing Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>SurferSEO AI & Clearscope</b> (AI-driven SEO optimization)</li>
                  <li>✅ <b>Adzooma AI</b> (AI-powered digital ad management)</li>
                  <li>✅ <b>ChatGPT & Jasper AI</b> (AI-powered content generation)</li>
                  <li>✅ <b>Albert AI</b> (AI-driven digital marketing automation)</li>
                  <li>✅ <b>Canva AI</b> (AI-powered creative design)</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  AgriBusiness Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>Taranis AI</b> (AI for precision farming)</li>
                  <li>✅ <b>Prospera AI</b> (AI-powered farm management)</li>
                  <li>✅ <b>aWhere AI</b> (AI for weather-based agribusiness decisions)</li>
                  <li>✅ <b>AgNext AI</b> (AI-driven supply chain for agriculture)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Introduction Section */}
        <section id="HeroSection" className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-red-600">Dr. D. Y. Patil University Online</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                A vibrant and forward-thinking institution built on a legacy of academic excellence and a commitment to shaping the future of professionals across India and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In an era where searching for the "best online MBA programs India" or a "top online data science course India" is common, we stand out by offering more than just a degree—we offer a transformative educational journey. Our mission is to break down barriers, making high-quality, UGC-entitled online education accessible to every aspiring learner, whether you are a "fresher" taking your first career step or a "working professional" seeking to upskill without pressing pause on your life.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Legacy of Excellence</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Named after the visionary Dr. D. Y. Patil, our university carries forward a tradition of innovation and student-centric learning. We understand that your search for an "affordable online MBA India" or a reputable "digital marketing certification online" is driven by ambition. Our robust digital platform is designed to fuel that ambition with flexibility, industry-relevant curricula, and unwavering support.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Accessibility</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Whether you are located "in Delhi," "in Mumbai," "in Bangalore," "in Chennai," or anywhere else, you can access our world-class programs. We are a premier destination among "recognized online universities India," providing credible qualifications that empower your career.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">UGC</div>
                      <div className="text-sm text-gray-600">Entitled</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">NAAC</div>
                      <div className="text-sm text-gray-600">A++ Accredited</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Portfolio</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We take immense pride in a diverse and dynamic portfolio of programs that cater to the evolving demands of the global economy. When you "compare online courses India," you will find our offerings are meticulously crafted to bridge the gap between theoretical knowledge and practical application.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Management Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Technology & Data Science</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Contemporary Specializations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Tour Section */}
        <section id="CampusTour" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Virtual <span className="text-red-600">Campus Tour</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Even though Dr. DY Patil University Online functions through a digital medium, it retains the dynamic essence of campus learning through its Virtual Learning Environment (VLE) — a platform designed to simulate the vibrancy of university life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Virtual Classrooms</h3>
                <p className="text-gray-600">Live faculty sessions with real-time interaction and engagement</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24×7 Digital Libraries</h3>
                <p className="text-gray-600">Access to e-resources and research materials anytime, anywhere</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion Forums</h3>
                <p className="text-gray-600">Engaging peer-to-peer learning groups and collaborative spaces</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Laboratories</h3>
                <p className="text-gray-600">Hands-on experience for technology and management disciplines</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Webinars</h3>
                <p className="text-gray-600">Industry interactions and mentoring workshops with experts</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">DY Patil Legacy</h3>
                <p className="text-gray-600">Experience the same energy, collaboration, and innovation that define our legacy</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                These virtual resources enable students to experience the same energy, collaboration, and innovation that define the DY Patil legacy, all from the comfort of their home.
              </p>
            </div>
          </div>
        </section>
        {/* AI Tools Section */}
        <section
          className="w-full py-16"
          style={{
            background: "linear-gradient(180deg, #E91C63 0%, #9C144A 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              AI Tools Covered
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  Logistics, Materials, and Supply Chain Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>Llamasoft AI</b> (AI-driven logistics decision-making)</li>
                  <li>✅ <b>FourKites AI</b> (Real-time supply chain visibility)</li>
                  <li>✅ <b>Project44 AI</b> (AI-powered freight management)</li>
                  <li>✅ <b>Blume Global AI</b> (AI in supply chain automation)</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  Blockchain Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>IBM Blockchain AI</b> (AI for smart contract management)</li>
                  <li>✅ <b>Hyperledger Fabric</b> (Enterprise blockchain AI solutions)</li>
                  <li>✅ <b>Ethereum AI</b> (AI-powered decentralized applications)</li>
                  <li>✅ <b>Chainalysis AI</b> (AI in blockchain security & compliance)</li>
                  <li>✅ <b>Consensys AI</b> (AI-driven blockchain finance tools)</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  Digital Marketing Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>SurferSEO AI & Clearscope</b> (AI-driven SEO optimization)</li>
                  <li>✅ <b>Adzooma AI</b> (AI-powered digital ad management)</li>
                  <li>✅ <b>ChatGPT & Jasper AI</b> (AI-powered content generation)</li>
                  <li>✅ <b>Albert AI</b> (AI-driven digital marketing automation)</li>
                  <li>✅ <b>Canva AI</b> (AI-powered creative design)</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                  AgriBusiness Management
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>✅ <b>Taranis AI</b> (AI for precision farming)</li>
                  <li>✅ <b>Prospera AI</b> (AI-powered farm management)</li>
                  <li>✅ <b>aWhere AI</b> (AI for weather-based agribusiness decisions)</li>
                  <li>✅ <b>AgNext AI</b> (AI-driven supply chain for agriculture)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div>
          <AccreditationSection
            title="Why Choose DY Patil Online?"
            description="Recognized by UGC, NAAC A+, and AICTE. DY Patil offers flexible online learning with expert faculty, career services, and placement support."
            stats={[]}
            benefits={[
              {
                title: "UGC-Approved & Accredited",
                description: "Recognized by UGC and accredited by NAAC A+.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                          </svg>`,
              },
              {
                title: "Experienced Faculty",
                description: "Learn from top educators and industry experts.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          </svg>`,
              },
              {
                title: "Career Services",
                description: "Internships, workshops & job readiness programs.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                          </svg>`,
              },
              {
                title: "Placement Support",
                description: "Placement help for your dream job.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7h20L12 2zm0 2.18L18.9 7H5.1L12 4.18zM4 9v11h16V9H4zm2 2h12v7H6v-7z"></path>
                          </svg>`,
              },
            ]}
            accreditations={[
              { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
              { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
              { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
              { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
              { src: "/images/wes.webp", alt: "WES", name: "WES" },
            ]}
            internationalRecognition={[]}
            successStories={[]}
          />
        </div>

        {/* Explore Online Courses Section */}
        <section id="Courses" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Explore <span className="text-red-600">Online Courses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. DY Patil University Online offers a diverse range of UG and PG online degree programs, each designed to meet industry needs and prepare learners for real-world challenges.
              </p>
            </div>

            <div className="space-y-16">
              {/* Undergraduate Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Undergraduate Online Degrees</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Online BBA</h4>
                    <p className="text-gray-600 mb-4">Bachelor of Business Administration</p>
                    <p className="text-gray-700">Build strong managerial and business foundations through an industry-relevant curriculum that emphasizes leadership, communication, and entrepreneurship.</p>
                  </div>

                 

               
                </div>
              </div>

              {/* Postgraduate Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Postgraduate Online Degrees</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Online MBA</h4>
                    <p className="text-gray-600 mb-4">Master of Business Administration</p>
                    <p className="text-gray-700">The flagship DYPU Online MBA program offers specializations in Marketing, Finance, HR, Operations, International Business, and Hospital Administration. Tailored for professionals seeking to elevate their careers through strategic and managerial expertise.</p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Online MCA</h4>
                    <p className="text-gray-600 mb-4">Master of Computer Applications</p>
                    <p className="text-gray-700">Designed for aspiring tech leaders, this online MCA program builds advanced skills in programming, database management, AI, and software development.</p>
                  </div>

                  
                </div>
              </div>

              {/* Professional Certification Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certification Programs</h3>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <p className="text-lg text-gray-700 text-center">
                    In addition to degree courses, DY Patil University Online offers specialized professional certificates in fields like Digital Marketing, Data Science, Artificial Intelligence, and Project Management, allowing learners to stay relevant in today's fast-changing job market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section id="KeyHighlights" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Key Highlights of <span className="text-red-600">Dr. DY Patil University Online</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UGC-entitled & NAAC A++</h3>
                <p className="text-gray-600 text-sm">Globally recognized and accredited</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-Driven Curriculum</h3>
                <p className="text-gray-600 text-sm">Designed by leading academic and industry experts</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Online Programs</h3>
                <p className="text-gray-600 text-sm">Accessible anywhere, anytime</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Globally Valid Degrees</h3>
                <p className="text-gray-600 text-sm">Equivalent to regular on-campus programs</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live & Recorded Sessions</h3>
                <p className="text-gray-600 text-sm">E-learning resources and digital assessments</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Career & Placement Support</h3>
                <p className="text-gray-600 text-sm">Top industry tie-ups and mentorship</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Global Alumni Network</h3>
                <p className="text-gray-600 text-sm">Access to mentorship programs</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">40+ Years Legacy</h3>
                <p className="text-gray-600 text-sm">Part of prestigious DY Patil Group</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                DY Patil Online stands out for its combination of innovation, flexibility, and academic credibility — offering students a powerful platform to achieve their educational and professional goals.
              </p>
            </div>
          </div>
        </section>

        {/* Admission Dates Section */}
        <section id="AdmissionDates" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Admission Dates for <span className="text-red-600">Various UG & PG Programs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. DY Patil University Online follows a learner-centric, rolling admission system with multiple intakes throughout the year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">Jan</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">January Intake</h3>
                <p className="text-gray-600 mb-4">Opens in December</p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">Early applicants may qualify for merit-based scholarships and fee waivers</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">Apr</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">April Intake</h3>
                <p className="text-gray-600 mb-4">Opens in March</p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">Perfect for spring semester start</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">Jul</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">July Intake</h3>
                <p className="text-gray-600 mb-4">Opens in June</p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">Mid-year admission opportunity</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">Oct</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">October Intake</h3>
                <p className="text-gray-600 mb-4">Opens in September</p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">Fall semester enrollment</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-900">Online MBA</h4>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-900">Online BBA</h4>
                </div>
               
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-900">Online MCA</h4>
                </div>
               
                
              </div>
              <p className="text-center text-gray-600 mt-6">
                Students can apply directly on the DYPU Online Admission Portal. Early applicants may qualify for merit-based scholarships, fee waivers, and early bird discounts.
              </p>
            </div>
          </div>
        </section>

        {/* Fees Structure Section */}
        <section id="Fees" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Fees Structure</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                DYPU Online provides transparent and flexible fee options, ensuring quality education is accessible to all learners.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Program</th>
                      <th className="px-6 py-4 text-left font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left font-semibold">Approx. Fee</th>
                      <th className="px-6 py-4 text-left font-semibold">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Online MBA</td>
                      <td className="px-6 py-4 text-gray-600">2 Years</td>
                      <td className="px-6 py-4 text-gray-600">₹1,89,400</td>
                      <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Online MCA</td>
                      <td className="px-6 py-4 text-gray-600">2 Years</td>
                      <td className="px-6 py-4 text-gray-600">₹1,40,000</td>
                      <td className="px-6 py-4 text-gray-600">Semester/EMI</td>
                    </tr>
                  
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Online BBA</td>
                      <td className="px-6 py-4 text-gray-600">3 Years</td>
                      <td className="px-6 py-4 text-gray-600">₹1,45,400</td>
                      <td className="px-6 py-4 text-gray-600">Yearly/EMI</td>
                    </tr>
                    
                  
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>LMS access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>E-learning resources</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Live classes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Support services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarships Available</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Defense personnel</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Working professionals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Outstanding students</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Early bird discounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section id="Admission" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Admission Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Dr. DY Patil University Online admission process is 100% online, quick, and student-friendly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                  <h3 className="text-xl font-bold text-gray-900">Visit Website</h3>
                </div>
                <p className="text-gray-700">Visit the official DYPU Online website</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                  <h3 className="text-xl font-bold text-gray-900">Select Program</h3>
                </div>
                <p className="text-gray-700">Choose your preferred program (e.g., online MBA, online BBA, online BCA, etc.)</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                  <h3 className="text-xl font-bold text-gray-900">Complete Form</h3>
                </div>
                <p className="text-gray-700">Fill the registration form with your academic and personal details</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
                  <h3 className="text-xl font-bold text-gray-900">Upload Documents</h3>
                </div>
                <p className="text-gray-700">Upload necessary documents (mark sheets, ID proof, and photograph)</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">5</div>
                  <h3 className="text-xl font-bold text-gray-900">Pay Fee</h3>
                </div>
                <p className="text-gray-700">Pay the admission fee online via a secure payment gateway</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">6</div>
                  <h3 className="text-xl font-bold text-gray-900">Get Access</h3>
                </div>
                <p className="text-gray-700">Receive your login credentials and access the student dashboard</p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  The process is supported by a dedicated admissions team, ensuring guidance from registration to orientation. Our team is available to help you at every step of your admission journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming and Ongoing Sessions Section */}
        <section id="Sessions" className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Details of <span className="text-red-600">Upcoming and Ongoing Sessions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                DY Patil Online runs multiple academic sessions annually for all programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">January 2026 Session</h3>
                <p className="text-gray-600 mb-4">Enrollments Open</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">✓ Ready to Apply</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">April 2026 Session</h3>
                <p className="text-gray-600 mb-4">Applications Ongoing</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700 font-semibold">📝 Apply Now</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">July 2026 Session</h3>
                <p className="text-gray-600 mb-4">Early Admission Discounts Available</p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-700 font-semibold">💰 Save More</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">October 2026 Session</h3>
                <p className="text-gray-600 mb-4">Pre-registration Starting Soon</p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700 font-semibold">⏰ Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Session Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Orientation</h4>
                  <p className="text-gray-600">Welcome sessions and program introduction</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Live Classes</h4>
                  <p className="text-gray-600">Interactive sessions with faculty</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Project Assignments</h4>
                  <p className="text-gray-600">Hands-on learning and practical applications</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">
                Each session includes live classes, orientation events, assignments, and industry interaction sessions, ensuring that learning continues seamlessly year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Admission Steps */}
        <section id='Admission' className="relative py-20 bg-white">
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
              <div className="w-24 h-1 bg-gradient-to-r from-[#d91c5c] to-[#b11747] mx-auto mb-8 rounded-full"></div>
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
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#d91c5c] to-[#b11747] z-0 rounded-full"></div>

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
                    <div className="bg-gradient-to-br from-[#d91c5c] to-[#b11747] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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

        {/* Career Support Section */}
        <CareerSupport />

        <section className="bg-[#E91C63] py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Certificate Image */}
            <div className="flex-1">
              <Image
                src="/images/dycertificates.webp"
                alt="Dr. DY Patil"
                width={500}
                height={300}
                loading="lazy"
                className="w-full max-w-md mx-auto rounded shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Online Degree from Dr. DY Patil Online University
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                Dr. DY Patil Online provides a great opportunity to earn a degree from a prestigious institution. The online programs are designed to be flexible and accessible, allowing students to balance their studies with work and personal commitments.
                The degrees offered are equivalent to on-campus programs and are recognized globally. With a focus on quality education, Dr. DY Patil Online ensures that students receive the same level of academic rigor and support as traditional students.
              </p>

              <h3 className="text-xl font-semibold mb-2">Benefits of Dr. DY Patil Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Regular Live classes that help students to learn with a flexible time.</li>
                <li>Career Assistance & Exclusive Virtual Job Fairs</li>
                <li>Equivalent to Dr. DY Patil (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
                <li>Hands-on & Immersive Learning through world-Class Experince</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hiring Partners Section */}
        <section id='Companies' className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Our learners work at
              </h2>
              <p className="text-xl text-gray-600 mt-2">
                Top hiring partners at Jain Online
              </p>
            </div>

            {/* Logo Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/3.webp" width={100} height={100} loading="lazy" alt="Company" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/4.webp" width={100} height={100} loading="lazy" alt="Microsoft" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/5.webp" width={100} height={100} loading="lazy" alt="Company 9" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/6.webp" width={100} height={100} loading="lazy" alt="Company 10" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/7.webp" width={100} height={100} loading="lazy" alt="Company4" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/8.webp" width={100} height={100} loading="lazy" alt="Company 6" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/9.webp" width={100} height={100} loading="lazy" alt="Companany5" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/company1.webp" width={100} height={100} loading="lazy" alt="Adove" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/company6.webp" width={100} height={100} loading="lazy" alt="Samsung4" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/nestle.webp" width={100} height={100} loading="lazy" alt="Samsung8" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/microsoft.webp" width={100} height={100} loading="lazy" alt="Samsung9" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/icici.webp" width={100} height={100} loading="lazy" alt="Samsung" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image src="/images/hp.webp" width={100} height={100} loading="lazy" alt="Samsung2" className="h-12 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='Faq' className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#d91c5c] to-[#b11747] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about DY Patil Online University programs, admissions, and more.
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
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <FaChevronDown 
                        className={`text-[#d91c5c] transition-colors ${
                          openFaqIndex === index ? 'text-[#b11747]' : ''
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
                      <p className="text-gray-600 leading-relaxed">
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
              <p className="text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <button 
                onClick={() => {
                  setOpenModal('apply');
                  setShowEnquiryModal(true);
                  setModalType('apply');
                }}
                className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Admissions Counselor
              </button>
            </motion.div>
          </div>
        </section>

        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="/images/dpu.png"
            universityName="Jain University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}

          </main>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-8 lg:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* University Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">DY Patil Vidyapeeth Pune</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Premier online education platform offering UGC-recognized degrees with industry-relevant 
                specializations in MBA, Healthcare Management, and emerging technologies.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <span className="text-sm font-semibold">UGC Approved</span>
                </div>
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  <span className="text-sm font-semibold">NAAC A++</span>
                </div>
                <div className="bg-purple-600 text-white p-2 rounded-lg">
                  <span className="text-sm font-semibold">AICTE</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online  Programs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare Management</a></li>
                <li><a href="#Admission" className="text-gray-300 hover:text-white transition-colors">Admission Process</a></li>
                <li><a href="#Fees" className="text-gray-300 hover:text-white transition-colors">Fee Structure</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="mt-1">📍</span>
                  <span>DY Patil Vidyapeeth, Pune, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <a href="tel:+917042867717" className="hover:text-white transition-colors">+91-7042867717</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📧</span>
                  <a href="mailto:admissions@dypatilonline.com" className="hover:text-white transition-colors">admissions@dypatilonline.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-4 text-white text-center">Popular Programs & Specializations</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "DY Patil Vidyapeeth Pune", "DY Patil Pune", "DY Patil Online MBA", 
                "MBA Hospitality Management", "Dy Patil Pune Online MBA", "DPU COL",
                "MBA in Hospital and Health Care Management", "DPUONLINE", "DPU COL",
                "DVP ONLINE MBA", "Master in Healthcare Administration", "Master Degree in Healthcare Management",
                "Master Healthcare Management", "MBA Healthcare Administration Online", "Online MBA in Hospital Management",
                "MBA in Healthcare Management", "MBA in Hospital Administration", "Dr. D.Y. Patil Vidyapeeth Online MBA",
                "Dr. D.Y. PATIL Online MBA", "Dr. D.Y. Patil Online MBA Fees", "Online MBA Dr. D.Y. Patil",
                "Dr. D.Y. Patil University- Online MBA", "Dr. D.Y. Patil, Pune", "Online MBA - Dr. D.Y. Patil University",
                "Online MBA Fees", "Dr. D.Y. Patil Online Courses", "Dr. D.Y. Patil Online University",
                "Dr. D.Y. Patil Online MBA Certificate", "Dr. D.Y. Patil Distance MBA", "D Y Patil Distance MBA Fees",
                "D Y Patil Distance Education", "Dr. D.Y. Patil Distance Learning", "Dr. D.Y. Patil University Online",
                "Online MBA in Fintech", "Online MBA in Finance", "Online MBA in IT Management",
                "Online MBA in Project Management", "Online MBA in Operations Management", "Online MBA in HRM",
                "Online MBA in Human Resource", "Online MBA in Internal Business", "Online MBA in Business Analytics",
                "Online MBA in AI & ML", "Online MBA in Artificial Intelligence", "Online MBA in Machine Learning",
                "Online MBA in Logistics Management", "Online MBA in Supply Chain Management", "Online MBA in Blockchain Management",
                "Online MBA in Digital Marketing", "Online MBA in Agribusiness Management", "Online MBA in Marketing Management"
              ].map((keyword, index) => (
                <span onClick={()=>(setOpenModal('apply'))}
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-gray-700 hover:text-white transition-colors cursor-default cursor-pointer"
                  title={keyword}
                >
                  {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                Copyright © 2025 DY Patil Vidyapeeth. All Rights Reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dypatil;