'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";
import { FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const Manipal = () => {

 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2, 10+3 Minimum 50%",
      fees: "1,80,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology, Marketing Management, human resource Management ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
      {
      course: "Bachelor of Business Administration (Hons.)",
      duration: "4 Years",
      eligibility: "10+2, 10+3 Minimum 50%",
      fees: "2,40,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology, Marketing Management, human resource Management ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
   
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2,10+3 Minimum 50%",
      fees: "2,94,000",
      specialization: "(Professional)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Commerce (B.Com) in Manipal Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Working Professionals with min 50% in graduation",
      fees: "2,92,000",
      specialization: "Healthcare Management, Financial Technology, Marketing Management, Human Resource Management, Business Analytics, Data Science, Logistics and Supply Chain Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,20,000",
      specialization: "AI & ML, Cyber Security, Cloud Computing, Full Stack Development", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "min 50% Graduation",
      fees: "2,80,000",
      specialization: "Business Analytics, Data Science", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Science (M.Sc) in Manipal Online",
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
    question: "Is Manipal Academy of Higher Education(MAHE)) recognized by UGC and NAAC?",
    answer:
      "Yes, Manipal Academy of Higher Education(MAHE)) (MAHE) is recognized by the University Grants Commission (UGC) and accredited by NAAC. Choosing an online program from Manipal Online University ensures you receive a credible and globally recognized degree. MAHE's accreditation guarantees that your online Manipal University degree meets high academic standards and is accepted by employers and educational institutions worldwide.",
  },
  {
    question: "What online programs are offered by Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Manipal Online University offers a wide range of online programs at MAHE, including Management, MBA, BBA, Computer Science, Data Science, BCA, MCA, and professional certificate courses. By enrolling in online courses from Manipal Academy of Higher Education(MAHE)), students can access flexible learning schedules while earning a degree from a top-ranked university.",
  },
  {
    question: "Are online degrees from Manipal Academy of Higher Education(MAHE)) valid for government jobs?",
    answer:
      "Yes, online degrees from Manipal Academy of Higher Education(MAHE)), approved by UGC-DEB, are valid for government jobs, competitive exams like UPSC, and higher education. Studying at Manipal Online University ensures your MAHE online degree is recognized by government authorities and other educational institutions.",
  },
  {
    question: "What is the admission process for online courses?",
    answer:
      "The admission process at Manipal Online University is simple and fully online. Prospective students can apply for MAHE online programs by filling out the application form, submitting the required documents, and completing the fee payment. Online Manipal University admissions are designed to be hassle-free, making it easy to enroll in programs from anywhere in India or abroad.",
  },
  {
    question: "How much are the fees for online courses at Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Fees for online programs at Manipal Academy of Higher Education(MAHE)) vary depending on the course. MAHE provides flexible payment options and no-cost EMI plans for online Manipal University students. By choosing an online Manipal University program, students can pursue quality education without financial stress.",
  },
  {
    question: "Does Manipal Academy of Higher Education(MAHE)) provide placement assistance?",
    answer:
      "Yes, Manipal Online University offers dedicated placement assistance to students of online programs at MAHE. Graduates from online Manipal University courses receive career guidance, networking opportunities, and support to find the right job in their respective fields. Choosing MAHE ensures strong career support even for online learners.",
  },
  {
    question: "What is the duration of online programs?",
    answer:
      "The duration of online programs at Manipal Academy of Higher Education(MAHE)) depends on the specific course. Most undergraduate online Manipal University programs run for 3–4 years, while postgraduate online MAHE programs range from 1–2 years. Studying at Manipal Online University provides flexibility to complete your degree while managing other commitments.",
  },
  {
    question: "Are the online degrees internationally recognized?",
    answer:
      "Yes, online degrees from Manipal Academy of Higher Education(MAHE)) are internationally recognized. Select online programs from Manipal Online University are WES-accredited, adding global value to your MAHE degree. Choosing online Manipal University ensures your degree holds weight for international job opportunities and higher studies abroad.",
  },
  {
    question: "Can working professionals pursue online courses?",
    answer:
      "Absolutely! Online programs from Manipal Academy of Higher Education(MAHE)) are designed for working professionals. MAHE's flexible schedule allows online Manipal University students to learn at their own pace without interrupting their careers. Enrolling in online Manipal University courses is ideal for career growth and skill enhancement while working.",
  },
  {
    question: "What is the difference between online and regular courses at Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Online Manipal University programs provide the same accredited degree as regular MAHE courses. The key difference is flexibility—students can access lectures, assignments, and live sessions digitally. Choosing an online program at Manipal Academy of Higher Education(MAHE)) offers quality education and the same global recognition without the need to attend a physical campus.",
  },
  {
    question: "Does the university offer scholarships for online programs?",
    answer:
      "Yes, Manipal Online University offers exclusive scholarships for meritorious students, defense personnel, government employees, and differently-abled learners. By enrolling in online programs at MAHE, students can avail financial support while earning a recognized degree from Manipal Academy of Higher Education(MAHE)).",
  },
  {
    question: "Is technical support provided for online students?",
    answer:
      "Yes, Manipal Online University provides dedicated technical support to online MAHE students. From accessing course materials to attending live sessions, online Manipal University ensures a smooth learning experience. Support is available for all online Manipal University programs, making it convenient and reliable for students.",
  },
];




  const testimonials = [
    {
      name: "Mohit Kumar",
      course: "MCA",
      university: "MAHE",
      text: "I always wanted to pursue my higher education dream without quitting my job, and MAHE has made it possible for me through their online degrees. My online MCA degree has given me wings to fly and chase my career aspirations."
    },
    {
      name: "Rajeev ",
      course: "BBA",
      university: "MAHE",
      text: "Funding my undergraduate degree and my younger brother's education has been possible only because of Manipal Academy of Higher Education(MAHE))'s affordable online B.Com degree. Thanks to Online Manipal, I'm able to manage my work and academics. I believe this online degree will help me become personally and financially independent."
    },
    {
      name: "Sohil",
      course: "MBA",
      university: "MAHE",
      text: "As a working professional, I wanted to enhance my domain knowledge and move to managerial roles. I found Manipal Academy of Higher Education(MAHE))'s online MBA program as the right opportunity to climb up my career ladder. The program has helped me build new skills required to thrive in the industry."
    },
    {
      name: "Akshansh",
      course: "M.Sc",
      university: "MAHE",
      text: "With over 2 years of work experience in accounting, I wanted to pursue an online M.Sc. degree to boost my career further and get a higher salary. Thanks to Online Manipal, I'm able to manage my work life and academic through flexible live classes and recorded sessions which are available on the portal."
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
  const [activeTab, setActiveTab] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  

  return (
    <>
      <Head>
        <title> "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses - UNIFOST",</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal Academy of Higher Education Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal Academy of Higher Education(MAHE)), MAHE Online, BBA in MAHE Online, BCA in MAHE Online, B.Com in MAHE Online, MBA in MAHE Online, MCA in MAHE Online, M.Com in MAHE Online, MA in MAHE Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal Academy of Higher Education Online Degrees" />
        <meta name="robots" content="index, follow" /> 
        <link rel="canonical" href="https://unifostedu.com/manipal" />
        <link href="https://fonts.cdnfonts.com/css/queens" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Manipal Academy of Higher Education Online Degrees | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal Academy of Higher Education Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal Academy of Higher Education. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <style jsx>{`
        .queens { font-family: 'Queens', serif; }
      `}</style>
      
      <div className="queens overflow-x-hidden">
        {/* Professional Responsive Header - Optimized */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 z-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                  alt="Mahe Logo" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
                />
                <h1 className="font-queens text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold whitespace-nowrap">
                  
                </h1>
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
                  className="lg:hidden inline-flex items-center p-2 rounded-md border hover:bg-gray-50 cursor-pointer mr-2"
                >
                  <span className="text-xl">☰</span>
                </button>

                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                > 
                  <span className="text-base sm:text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
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

        {/* Add padding to the top of the first section to account for fixed header */}
        <div className="pt-16 overflow-x-hidden break-words hyphens-auto lg:ml-64">

        {/* Desktop Sidebar */}
        <aside className="fixed hidden lg:flex flex-col top-16 left-0 w-64 h-[calc(100vh-4rem)] px-4 py-6 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
          <h3 className="text-lg font-bold mb-5 text-orange-600 border-b-2 border-gray-200 pb-2 cursor-pointer">
            Page Contents
          </h3>
          <ul className="space-y-3 cursor-pointer text-sm">
            {[
              { id: "HeroSection", label: "Hero" },
              { id: "Introduction", label: "Introduction to MAHE" },
              { id: "AboutUs", label: "About Us" },
              { id: "FutureReady", label: "Future-Ready Platform" },
              { id: "UGCApproved", label: "UGC-Approved Degrees" },
              { id: "Leader", label: "Leader Among Universities" },
              { id: "WhyChoose", label: "Why Choose MAHE" },
              { id: "CampusTour", label: "Campus Tour" },
              { id: "ExploreCourses", label: "Explore Courses" },
              { id: "KeyHighlights", label: "Key Highlights" },
              { id: "FeeStructure", label: "Fee Structure" },
              { id: "AdmissionProcess", label: "Admission Process" },
              { id: "PlacementPartners", label: "Placement Partners" },
              { id: "PlacementRecords", label: "Placement Records" },
              { id: "StudentReviews", label: "Student Reviews" },
              { id: "Faq", label: "FAQs" },
              { id: "Conclusion", label: "Conclusion" },
            ].map((item) => (
              <li
                key={item.id}
                className="text-gray-600 hover:text-orange-600 transition-colors duration-200 py-1 px-2 rounded hover:bg-gray-50"
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
            {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
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
                  <h3 className="text-xl font-bold text-gray-900">Page Contents</h3>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <FaTimes className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <ul className="space-y-3">
                  {[
                    { id: "HeroSection", label: "Hero" },
                    { id: "Introduction", label: "Introduction to MAHE" },
                    { id: "AboutUs", label: "About Us" },
                    { id: "FutureReady", label: "Future-Ready Platform" },
                    { id: "UGCApproved", label: "UGC-Approved Degrees" },
                    { id: "Leader", label: "Leader Among Universities" },
                    { id: "WhyChoose", label: "Why Choose MAHE" },
                    { id: "CampusTour", label: "Campus Tour" },
                    { id: "ExploreCourses", label: "Explore Courses" },
                    { id: "KeyHighlights", label: "Key Highlights" },
                    { id: "FeeStructure", label: "Fee Structure" },
                    { id: "AdmissionProcess", label: "Admission Process" },
                    { id: "PlacementPartners", label: "Placement Partners" },
                    { id: "PlacementRecords", label: "Placement Records" },
                    { id: "StudentReviews", label: "Student Reviews" },
                    { id: "Faq", label: "FAQs" },
                    { id: "Conclusion", label: "Conclusion" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          const section = document.getElementById(item.id);
                          if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-gray-700 hover:text-orange-600 font-semibold text-base transition-colors duration-200 w-full text-left cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                  {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
                </ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Premium Hero Section - Fully Responsive */}
        <section id="HeroSection" className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-14 sm:pt-16 lg:pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp')] bg-cover bg-center opacity-200"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20 xl:py-28">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Accreditation Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] xs:text-xs sm:text-sm font-medium">NAAC A+ Accredited • UGC Approved</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                  <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                    <span className="block text-white">Transform Your</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      Career with
                    </span>
                    <span className="block text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Manipal Academy of Higher Education</span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Earn globally recognized degrees from Manipal Academy of Higher Education with 100% online learning and placement assistance.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-md">
                  {[
                    { icon: '🎓', text: 'UGC Entitled Degrees' },
                    { icon: '💼', text: 'Placement Support' },
                    { icon: '💰', text: 'Easy EMI Options' },
                    { icon: '🌍', text: 'Global Recognition' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                      <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">{item.icon}</span>
                      <span className="text-[10px] xs:text-xs sm:text-sm text-gray-300 leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto"
                  >
                    <span>Apply Now</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'enquire' })}
                    className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="lg:pl-4 xl:pl-8 mt-4 sm:mt-6 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center">Why Choose Manipal Academy of Higher Education Online?</h3>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                    {[
                      { number: '50+', label: 'Countries' },
                      { number: '100K+', label: 'Students' },
                      { number: '93%', label: 'Positive ROI' },
                      { number: '200+', label: 'Hiring Partners' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">{stat.number}</div>
                        <div className="text-gray-300 text-[10px] xs:text-xs sm:text-sm mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Program Links */}
                  <div className="pt-3 sm:pt-4 md:pt-6 border-t border-white/20">
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-xs sm:text-sm md:text-base">Popular Programs</h4>
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-2">
                      {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com'].map((program, i) => (
                        <span key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-2 sm:px-2.5 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 text-white text-[10px] xs:text-xs sm:text-sm transition-all duration-300 cursor-pointer hover:scale-105">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Statistics Section - Responsive */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {[
                {
                  icon: '⏱️',
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with recorded lectures and live sessions'
                },
                {
                  icon: '🏆',
                  title: 'NAAC A+ Accredited',
                  description: 'Globally recognized degrees with UGC entitlement'
                },
                {
                  icon: '💼',
                  title: 'Career Support',
                  description: '100% placement assistance and career guidance'
                },
                {
                  icon: '💰',
                  title: 'Easy Financing',
                  description: 'No-cost EMI options and scholarships available'
                }
              ].map((feature, i) => (
                <div key={i} className="group text-center">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Professional Rankings & Accreditations Section - Responsive */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 font-queens">
                Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditations</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Recognized by leading accreditation bodies and ranked among India's top universities
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
              {[
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp', title: 'NAAC A++ Accredited University' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp', title: 'UGC-entitled Online Degrees' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp', title: "Amongst India's top 60 Universities in 2025" },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Norms Compliant' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp', title: 'Globally Recognized Online Degrees' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp', title: 'Member of ACU' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icas_wyryup.webp', title: 'ICAS Canada' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/iqas_bieryy.webp', title: 'IQAS' },
              ].map((item, i)=>(
                <div key={i} className="group">
                  <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 sm:p-4 md:p-6">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        width={400} 
                        height={260} 
                        className="w-full h-full max-h-16 sm:max-h-24 md:max-h-32 object-contain group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div className="px-3 sm:px-4 py-3 sm:py-4 md:py-5 flex-1 flex items-center">
                      <p className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors duration-300 w-full">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Introduction to MAHE University Online */}
        <section id="Introduction" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
                Introduction to <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">MAHE University Online</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MAHE University Online is one of the most trusted and recognized online education platforms in India. It offers a wide range of high-quality <strong>MAHE Online Courses</strong>, industry-focused <strong>MAHE Online Programs</strong>, and fully approved <strong>MAHE Online Degrees</strong> for students across the country. With the growing demand for flexible and digital education, MAHE University Online has become one of the <strong>Best online universities in India</strong>, helping lakhs of learners upgrade their skills, complete their degrees, and build strong careers through online learning.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                As a top UGC-approved university, MAHE University Online brings real university-level education directly to your home through <strong>UG & PG online courses by MAHE</strong>. These include some of the most popular online programs such as the <strong>MAHE Online MBA</strong>, <strong>MAHE Online BCA</strong>, <strong>MAHE Online MCA</strong>, <strong>MAHE Online BBA</strong>, <strong>MAHE Online MCom</strong>, and <strong>MAHE Online BCom</strong>. Every program is designed to match industry needs, helping students gain practical knowledge and real job-ready skills.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The main mission of MAHE University Online is to offer education that is flexible, student-friendly, and relevant to current industry trends. Even though the courses are online, the quality and credibility remain the same as MAHE's on-campus degrees. Backed by the strong legacy of Manipal Academy of Higher Education, MAHE's online platform allows students to study anytime, anywhere, and grow without limitations.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you are a working professional looking for a promotion, a student searching for a recognised UG or PG degree, or someone planning a career change, <strong>MAHE Online Courses</strong> and <strong>MAHE Online Programs</strong> have everything you need to build a successful future.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* About Us - MAHE University Online */}
        <section id="AboutUs" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              About Us – <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">MAHE University Online</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MAHE University Online is the official online learning arm of Manipal Academy of Higher Education—one of India's top universities with <strong>NAAC A++ accreditation</strong> and global recognition. MAHE brings high-quality, accessible, and flexible education to students through carefully designed <strong>MAHE Online Degrees</strong>.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                The goal of MAHE University Online is simple: to make premium higher education available to students all across India and the world. No matter where you live or what your schedule is, you can access top-quality teaching, modern learning tools, and complete academic support through <strong>MAHE Online Courses</strong>.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* A Future-Ready Online Learning Platform */}
        <section id="FutureReady" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              A Future-Ready <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Learning Platform</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Students enrolled in <strong>MAHE Online Programs</strong> get access to a smooth and advanced digital learning system. You can:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {[
                'Attend live online classes',
                'Watch recorded videos anytime',
                'Access a 24/7 Learning Management System (LMS)',
                'Download e-books & digital notes',
                'Join group discussions',
                'Work on case studies & projects',
                'Interact with faculty and mentors'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-orange-500 text-xl font-bold mt-1">✓</span>
                  <span className="text-base sm:text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              This ensures every learner in <strong>UG & PG online courses by MAHE</strong> gets an engaging and easy online learning experience.
            </p>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* UGC-Approved Online Degrees */}
        <section id="UGCApproved" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">UGC-Approved</span> Online Degrees
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              All programs offered under MAHE University Online are UGC-entitled, giving you the same value as a regular MAHE on-campus degree. Popular options include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {[
                { name: 'MAHE Online MBA', desc: 'Master management, leadership & business strategy' },
                { name: 'MAHE Online BCA', desc: 'Learn programming, databases & IT fundamentals' },
                { name: 'MAHE Online MCA', desc: 'Advanced computing, AI, ML & cloud skills' },
                { name: 'MAHE Online BBA', desc: 'Strong foundation in business, finance & marketing' },
                { name: 'MAHE Online MCom', desc: 'Deep knowledge of accounting, finance & taxation' },
                { name: 'MAHE Online BCom', desc: 'Core fundamentals of commerce & business analytics' }
              ].map((program, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-50 to-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{program.name}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{program.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              These <strong>MAHE Online Degrees</strong> are designed by expert faculty and industry specialists, ensuring students gain relevant, high-quality, and employable skills.
            </p>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* A Leader Among Online Universities in India */}
        <section id="Leader" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              A Leader Among <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Universities in India</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              MAHE is known for its strong academic reputation and advanced online learning system. This makes MAHE University Online one of the <strong>Best online universities in India</strong>, offering excellent <strong>MAHE Online Courses</strong>, well-designed <strong>MAHE Online Programs</strong>, and valuable <strong>MAHE Online Degrees</strong> for all types of learners.
            </p>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Why Choose MAHE University Online */}
        <section id="WhyChoose" className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-14">
              {[
                {value:'60+', label:'Countries and 2000+ towns &\ncities- our students span the globe'},
                {value:'100k+', label:'Learners have been empowered through Online Manipal'},
                {value:'93%', label:'Of students say their online degree has a positive ROI'},
                {value:'81%', label:'Of students find online is better than or equal to on-campus learning'}
              ].map((s, i) => (
                <div key={i} className="text-left">
                  <div className="font-queens text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none">{s.value}</div>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center font-queens">Why Choose MAHE University Online?</h3>
            <p className="text-center text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
              Choosing an online university is an important decision, and MAHE University Online provides everything a student needs for a successful learning experience.
            </p>

            {/* Feature Cards - 8 Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {/* Card 1: UGC-Entitled MAHE Online Degrees */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🎓</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">1. UGC-Entitled MAHE Online Degrees</h4>
                <p className="text-gray-600 text-xs sm:text-sm">All major MAHE Online Programs—including the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom—are fully UGC-approved. These online degrees have full academic value and are accepted by companies, government sectors, and private organisations.</p>
              </div>

              {/* Card 2: Best Online Universities in India */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🏆</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">2. One of the Best Online Universities in India</h4>
                <p className="text-gray-600 text-xs sm:text-sm">MAHE consistently ranks among top Indian institutions. Its strong online infrastructure, expert faculty, and high-quality learning system make it widely recognised as the Best online university in India.</p>
              </div>

              {/* Card 3: Wide Range of UG & PG Online Courses */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">📚</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">3. Wide Range of UG & PG Online Courses by MAHE</h4>
                <p className="text-gray-600 text-xs sm:text-sm">MAHE offers many programs to match different career goals. Popular MAHE Online Courses include MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom. Each program prepares students with real-world skills and future-ready knowledge.</p>
              </div>

              {/* Card 4: Flexible & Convenient Learning */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">⏰</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">4. Flexible & Convenient Learning</h4>
                <p className="text-gray-600 text-xs sm:text-sm">All MAHE Online Programs are designed for flexible learning. You can study at your own pace, join live classes, or watch recorded sessions anytime. This helps working professionals, students, and homemakers balance education with daily life.</p>
              </div>

              {/* Card 5: Industry-Aligned Curriculum */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">💼</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">5. Industry-Aligned Curriculum</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Every program under MAHE Online Courses is designed with industry experts. You learn updated course content, practical case studies, real-world examples, assignments focused on careers, and industry tools & techniques. This makes MAHE Online Degrees more valuable and job-focused.</p>
              </div>

              {/* Card 6: Experienced Faculty & Modern Tools */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">👨‍🏫</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">6. Experienced Faculty & Modern Tools</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Students in MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom are taught by highly experienced professors and industry mentors. MAHE provides virtual classrooms, e-learning modules, AI-enabled tools, and 24/7 academic support.</p>
              </div>

              {/* Card 7: Excellent Placement & Career Support */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🎯</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">7. Excellent Placement & Career Support</h4>
                <p className="text-gray-600 text-xs sm:text-sm">MAHE offers strong career services, including resume-building, interview preparation, job-readiness training, placement guidance, and networking sessions. This makes MAHE Online Programs highly helpful for students aiming to improve their employability.</p>
              </div>

              {/* Card 8: Affordable & Accessible Education */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-lime-100 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">8. Affordable & Accessible Education</h4>
                <p className="text-gray-600 text-xs sm:text-sm">MAHE ensures its MAHE Online Courses and MAHE Online Degrees are affordable for all. With premium quality and reasonable pricing, MAHE remains the Best online university in India for thousands of learners.</p>
              </div>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Campus Tour Section */}
        <section id="CampusTour" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Campus Tour</span>
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Welcome to the MAHE University Online Campus Tour, a simple and friendly walk-through that helps you understand the vibrant and inspiring learning environment MAHE offers. Even though students study through <strong>MAHE Online Courses</strong> and <strong>MAHE Online Programs</strong>, MAHE provides the same level of academic quality, support, and innovation as an on-campus experience. Whether you explore from home or plan to visit, this tour shows you the energy, diversity, and excellence that make MAHE one of the <strong>Best online universities in India</strong>.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                From modern classrooms to advanced digital learning spaces, every part of the MAHE environment is designed to support students pursuing <strong>MAHE Online Degrees</strong> like the <strong>MAHE Online MBA</strong>, <strong>MAHE Online BCA</strong>, <strong>MAHE Online MCA</strong>, <strong>MAHE Online BBA</strong>, <strong>MAHE Online MCom</strong>, and <strong>MAHE Online BCom</strong>. MAHE creates a space where learning, creativity, and personal growth come together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Academic Blocks – Where Learning Comes to Life</h3>
                <p className="text-base text-gray-700 mb-4">MAHE's academic spaces are created to help students succeed in every way. These include:</p>
                <ul className="space-y-2">
                  {['Smart digital classrooms', 'High-tech audio–visual tools', 'Comfortable seating for long study sessions', 'Modern labs for hands-on learning'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-700 mt-4">Even for students studying through <strong>UG & PG online courses by MAHE</strong>, these facilities reflect MAHE's commitment to quality and innovation.</p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Digital Learning Zones</h3>
                <p className="text-base text-gray-700 mb-4">Since MAHE University Online focuses on flexible and technology-driven learning, the campus includes digital zones that support students pursuing <strong>MAHE Online Courses</strong>:</p>
                <ul className="space-y-2">
                  {['High-speed internet access', 'Modern computer systems', 'Group study areas', 'E-learning support centers'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-700 mt-4">These spaces show how MAHE blends strong academic support with technology to enhance every <strong>MAHE Online Program</strong>.</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">A Campus Built for Students</h3>
              <p className="text-base sm:text-lg text-gray-700">
                MAHE's campus—both physical and virtual—is more than just buildings. It is a lively, welcoming community where every student feels valued, supported, and motivated. The environment encourages academic excellence, personal development, creativity, and teamwork. Whether you are touring in person or exploring virtually as part of your MAHE University Online journey, you'll feel the warmth, inspiration, and positive energy that MAHE is known for. It is a place where students build knowledge, friendships, confidence, and unforgettable experiences while completing their <strong>MAHE Online Degrees</strong>.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Enhanced Courses Section */}
        <section id="ExploreCourses" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                Explore <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Courses</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Choose from industry-relevant programs designed for working professionals and fresh graduates
              </p>
            </div>

            {/* Quick Course Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                { name: 'MAHE Online MBA', desc: 'Master management, leadership & business strategy. Ideal for working professionals & future leaders' },
                { name: 'MAHE Online BCA', desc: 'Learn programming, databases & IT fundamentals. Start your journey in the tech and IT industry' },
                { name: 'MAHE Online MCA', desc: 'Advanced computing, AI, ML & cloud skills. Designed for tech professionals aiming for growth' },
                { name: 'MAHE Online BBA', desc: 'Strong foundation in business, finance & marketing. Perfect for students interested in corporate careers' },
                { name: 'MAHE Online MCom', desc: 'Deep knowledge of accounting, finance & taxation. Great for careers in banking, finance & auditing' },
                { name: 'MAHE Online BCom', desc: 'Core fundamentals of commerce & business analytics. Best for students starting their commerce journey' }
              ].map((course, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-orange-50 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{course.name}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{course.desc}</p>
                </div>
              ))}
            </div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-6 sm:space-y-8 md:space-y-12">
              {/* Enhanced Tab Buttons */}
              <div className="flex justify-center overflow-x-auto">
                <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg border border-gray-200">
                  {[
                    { value: 'all', label: 'All Programs' },
                    { value: 'ug', label: 'Undergraduate' },
                    { value: 'pg', label: 'Postgraduate' }
                  ].map((tab) => (
                    <Tabs.Trigger
                      key={tab.value}
                      value={tab.value}
                      className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${
                        activeTab === tab.value
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-white'
                      }`}
                    >
                      {tab.label}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </div>

              {/* Course Grid */}
              <Tabs.Content value={activeTab} className="outline-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {(activeTab === 'all' ? [...ugCourses, ...pgCourses] : 
                    activeTab === 'ug' ? ugCourses : pgCourses).map((course, idx) => (
                    <div key={idx} className="group">
                      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                        {/* Course Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={course.image}
                            alt={course.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {course.universityShort}
                            </span>
                          </div>
                        </div>

                        {/* Course Content */}
                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.course}</h3>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-600">
                              <span>⏱️</span>
                              <span className="text-sm">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <span>🎓</span>
                              <span className="text-sm">{course.eligibility}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <span>💰</span>
                              <span className="text-sm">₹{course.fees}</span>
                            </div>
                          </div>

                          <button 
                            onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Modern 360 Advantage */}
        <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(255,122,54,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-queens font-bold text-gray-900">Unlock The 360° Advantage</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto px-2">Comprehensive benefits designed to support your learning journey and career growth.</p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[{
                icon:'🎓', title:'Prestigious Degree', desc:'Globally recognized degree that opens doors worldwide.'
              },{
                icon:'📚', title:'Industry-Relevant Curriculum', desc:'Learn in-demand skills aligned with market needs.'
              },{
                icon:'💼', title:'Placement Assistance', desc:'End-to-end support with internships and jobs.'
              },{
                icon:'💳', title:'Easy Financing', desc:'Affordable no-cost EMI options for all learners.'
              }].map((b,i)=>(
                <div key={i} className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{b.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Financing + Scholarships */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
              <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Avail easy financing options</h3>
                <p className="text-orange-100 text-sm sm:text-base md:text-lg">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Get attractive scholarships</h3>
                <p className="text-blue-100 text-sm sm:text-base md:text-lg">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
              </div>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section id="KeyHighlights" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Key Highlights</span>
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Discover why MAHE University Online is known as one of the <strong>Best online universities in India</strong>. With flexible learning, expert faculty, modern digital tools, and globally recognised <strong>MAHE Online Degrees</strong>, the university offers a top-quality online education experience for every student.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: 'UGC-Entitled MAHE Online Degrees',
                  points: [
                    'All MAHE Online Courses and MAHE Online Programs are fully UGC-approved.',
                    'Degrees such as the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom hold the same value as regular on-campus degrees.'
                  ]
                },
                {
                  title: 'Wide Range of UG & PG Online Courses by MAHE',
                  points: [
                    'Students can choose from industry-focused online programs in business, IT, commerce, and management.',
                    'Popular programs include the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom.'
                  ]
                },
                {
                  title: 'Flexible Learning Anytime, Anywhere',
                  points: [
                    'Study at your own pace using recorded classes, live online lectures, and a 24/7 digital LMS.',
                    'Perfect for working professionals, regular students, and distance learners.'
                  ]
                },
                {
                  title: 'Industry-Aligned Curriculum',
                  points: [
                    'All MAHE Online Courses are created with input from industry experts to ensure the content is updated, relevant, and job-oriented.',
                    'Every program includes real-world case studies and modern learning tools.'
                  ]
                },
                {
                  title: 'Expert Faculty & High-Quality Teaching',
                  points: [
                    'Learn directly from MAHE\'s experienced professors, researchers, and industry specialists.',
                    'Each MAHE Online Program provides strong academic support from start to finish.'
                  ]
                },
                {
                  title: 'Affordable & Accessible Education',
                  points: [
                    'MAHE offers high-quality education at competitive and student-friendly fees, making it one of the Best online universities in India in terms of value and credibility.'
                  ]
                },
                {
                  title: 'Career Guidance & Placement Support',
                  points: [
                    'Students receive resume-building help, interview preparation, job support, and skill training.',
                    'MAHE prepares students for strong careers in business, IT, finance, technology, management, and more.'
                  ]
                },
                {
                  title: 'Trusted University with Decades of Excellence',
                  points: [
                    'Powered by Manipal Academy of Higher Education, a NAAC A++ accredited institution with global recognition.',
                    'MAHE University Online is known for academic excellence, strong learning outcomes, and student success.'
                  ]
                }
              ].map((highlight, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">{highlight.title}</h3>
                  <ul className="space-y-2">
                    {highlight.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section id="FeeStructure" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Fee Structure</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                { name: 'MAHE Online MBA', desc: 'Flexible and affordable management program. Suitable for working professionals. EMI payment options available. Full access to live and recorded classes.' },
                { name: 'MAHE Online BCA', desc: 'Budget-friendly program for students starting their IT career. Affordable for undergraduate learners. Easy semester-wise payment options.' },
                { name: 'MAHE Online MCA', desc: 'Priced to support students who want advanced technical skills. Includes industry-focused curriculum. Comes with digital tools and virtual labs.' },
                { name: 'MAHE Online BBA', desc: 'Cost-effective and ideal for students interested in business and management. Pay yearly or semester-wise. Study materials included in the fee.' },
                { name: 'MAHE Online MCom', desc: 'Affordable pricing for those aiming for careers in finance and accounting. One of the most economical PG programs. Includes academic support and digital resources.' },
                { name: 'MAHE Online BCom', desc: 'Designed to offer value at a pocket-friendly fee. Flexible fee payment options. Access to MAHE\'s digital LMS included.' }
              ].map((program, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">{program.name} Fee Structure</h3>
                  <p className="text-sm sm:text-base text-gray-700">{program.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What's Included in the Fees?</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4">Every fee paid for <strong>MAHE Online Courses</strong> includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  '24/7 access to MAHE\'s digital LMS',
                  'Live online classes',
                  'Recorded lecture sessions',
                  'Digital notes & study materials',
                  'Assessments and quizzes',
                  'Real-world case studies',
                  'Full student and academic support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-orange-500 text-lg">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-700 mt-4">This ensures great value for students pursuing <strong>MAHE Online Degrees</strong>.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Flexible Payment Options</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4">To make <strong>UG & PG online courses by MAHE</strong> accessible to all, MAHE University Online offers:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {['Semester-wise payment plans', 'EMI options through partnered platforms', 'Easy and secure online fee payment'].map((item, i) => (
                  <div key={i} className="bg-white p-4 sm:p-5 rounded-lg shadow-md text-center">
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-700 mt-6">These flexible options help students focus on learning without financial stress.</p>
              <p className="text-base sm:text-lg text-gray-700 mt-4">With reasonable fees, excellent teaching quality, and globally recognised <strong>MAHE Online Degrees</strong>, MAHE University Online continues to be one of the <strong>Best online universities in India</strong> for students seeking affordability along with academic excellence.</p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16 font-queens">Online Manipal Advantages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaStar className="text-yellow-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Flexible & Convenient Schedule</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
              </div>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaCertificate className="text-blue-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">At Par with On-Campus Degrees</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
              </div>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaUsers className="text-green-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Experienced Faculty & Mentors</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
              </div>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaBuilding className="text-purple-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Prestigious Manipal Alumni Network</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
              </div>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>
       <section>

         <div>
           <section className="relative py-20 bg-white">
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
                 className="text-center mb-8 sm:mb-12 md:mb-16"
               >
                 <h2 id="AdmissionProcess" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
                   Admission Process
                 </h2>
                 <div className="w-16 sm:w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
                 <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
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
                 className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200"
               >
                 <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-12 text-center">
                   Easy 4-Step Admission Process
                 </h3>
         
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 relative">
                   {/* Connecting Line */}
                   <div className="hidden md:block absolute top-20 sm:top-24 md:top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 to-orange-500 z-0 rounded-full"></div>
         
                   {[
                     {
                       number: "01",
                       title: "Choose Your MAHE Online Program",
                       desc: "Select from MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, or MAHE Online BCom.",
                     },
                     {
                       number: "02",
                       title: "Fill Out the Online Application Form",
                       desc: "Complete the application form with your personal and academic details.",
                     },
                     {
                       number: "03",
                       title: "Pay the Program Fee Online",
                       desc: "Make secure online payment through available payment options.",
                     },
                     {
                       number: "04",
                       title: "Get Confirmation & Start Learning",
                       desc: "Receive confirmation and student login credentials to begin your journey.",
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
                       <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 text-white shadow-2xl">
                         <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{step.number}</span>
                         <span className="text-[10px] xs:text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                       </div>
                       <h4 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2">
                         {step.title}
                       </h4>
                       <p className="text-gray-700 text-xs sm:text-sm md:text-base px-2">{step.desc}</p>
                     </motion.div>
                   ))}
                 </div>
               </motion.div>
               <div className="text-center mt-8 sm:mt-12">
                   <button 
                     onClick={() => setOpenModal({ type: 'apply' })}
                     className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                   >
                     <span className="hidden sm:inline">Apply Now</span>
                     <span className="sm:hidden">Apply</span>
                   </button>
               </div>
             </div>
           </section>
         </div>

          </section>
         

        {/* Certificate Section */}
        <section className="bg-[#002d5f] text-white py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="md:w-1/2 w-full">
              <Image width={600} height={400} src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/mahe-certi_dwtj6m.webp" alt="Certificate" className="rounded-xl sm:rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Recognized Online Degree from Manipal Academy of Higher Education</h2>
              <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
                Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                  UGC & AICTE Recognized Degrees
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                  Daily Live & Recorded Classes
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                  Global Collaborations with Ivy-League Institutions
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                  100% Placement & Internship Support
                </li>
              </ul>
              <div className="text-center mt-8 sm:mt-12">
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
        </section>

        {/* Placement Partners Section */}
        <section id="PlacementPartners" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Placement Partners</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                Top Companies That Hire MAHE University Online Students
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                Our placement partners include some of the most trusted and globally recognized brands:
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
              {['Accenture', 'Deloitte', 'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'EY', 'Cognizant', 'IBM', 'Capgemini', 'KPMG', 'Amazon', 'Flipkart', 'HDFC Bank', 'ICICI Bank', 'PwC', 'Tech Mahindra'].map((company, i) => (
                <div key={i} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                  <p className="text-sm sm:text-base font-semibold text-gray-800">{company}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Why Top Companies Choose MAHE Students?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  'Industry-ready curriculum aligned with modern skills',
                  'Practical training through projects and case studies',
                  'Soft skills & interview preparation provided to students',
                  'Strong reputation of MAHE University Online as one of the Best online universities in India',
                  'UGC-entitled MAHE Online Degrees ensuring credibility and recognition'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 text-lg mt-1">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Career Support You Can Trust</h3>
              <p className="text-base text-gray-700 mb-4">MAHE University Online provides:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {['Resume-building workshops', 'Mock interviews', 'Job readiness training', 'Internship opportunities', 'Dedicated placement cell guidance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-orange-500">•</span>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Placement Records Section */}
        <section id="PlacementRecords" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              Highlights of <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">MAHE Online Placement Records</span>
            </h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'High placement success rate across all MAHE Online Programs',
                  'Students hired in top companies like Deloitte, TCS, Infosys, HCL, Wipro, EY, IBM, Amazon & more',
                  'Strong outcomes for graduates of MAHE Online MBA in management, marketing, HR, and finance',
                  'Excellent results for MAHE Online BCA and MAHE Online MCA students in software, IT services, cloud, and data roles',
                  'Commerce programs such as MAHE Online MCom and MAHE Online BCom see strong placements in banking, finance, and accounting',
                  'Students from MAHE Online BBA secure roles in sales, operations, business development, and corporate support',
                  'Many learners experience career upgrades, salary hikes, and industry transitions after completing MAHE Online Degrees'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl font-bold mt-1">✓</span>
                    <span className="text-gray-700 text-base sm:text-lg flex-1">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-gray-700 mt-6 sm:mt-8">
                With excellent placement records, strong career support, and industry alignment, MAHE University Online ensures that every student pursuing <strong>MAHE Online Programs</strong> gets the right guidance and opportunities to grow professionally.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Premium Testimonials / Student Reviews */}
        <section id="StudentReviews" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                Student <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Reviews</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Hear from our students who have transformed their careers with MAHE University Online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  name: 'Aditi Sharma',
                  course: 'MAHE Online MBA',
                  text: 'Choosing MAHE University Online for my MBA was truly the best decision. The MAHE Online MBA program is flexible, well-structured, and perfect for working professionals like me. The live classes, case studies, and faculty support made learning easy and engaging. Today, I\'ve secured a promotion at my company thanks to the skills I gained through MAHE.'
                },
                {
                  name: 'Sneha Gupta',
                  course: 'MAHE Online BBA',
                  text: 'The MAHE Online BBA program helped me build strong basics in business and management. The faculty explains everything clearly, and the recorded classes help me revise whenever I want. MAHE University Online truly provides flexibility without compromising quality.'
                },
                {
                  name: 'Nikhil Verma',
                  course: 'MAHE Online MCA',
                  text: 'The MAHE Online MCA program has exceeded my expectations. The content is advanced and matches industry requirements. The faculty is supportive, and the virtual labs really helped me understand concepts. I feel well-prepared for roles like software developer and data analyst.'
                },
                {
                  name: 'Priya Nair',
                  course: 'MAHE Online MCom',
                  text: 'I joined the MAHE Online MCom program because it offered quality education at an affordable fee. The subjects are detailed, and the support team is always available to help. I would definitely recommend MAHE University Online to commerce students.'
                }
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 sm:mb-4">
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500 mb-2 sm:mb-3 md:mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-3 sm:pt-4">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">{testimonial.name}</h4>
                          <p className="text-orange-600 font-semibold text-sm sm:text-base md:text-lg">
                            {testimonial.course} Student
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Professional FAQ Section */}
        <section id="Faq" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                Everything you need to know about MAHE University Online Programs
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {[
                {
                  question: 'Is MAHE University Online UGC-approved?',
                  answer: 'Yes. MAHE University Online offers fully UGC-entitled MAHE Online Degrees, which hold the same value as regular on-campus degrees. All MAHE Online Courses meet the academic standards set by regulatory bodies.'
                },
                {
                  question: 'Are MAHE Online Degrees valid for jobs and higher studies?',
                  answer: 'Absolutely. All MAHE Online Programs, including the MAHE Online MBA, MAHE Online BCA, MAHE Online MCA, MAHE Online BBA, MAHE Online MCom, and MAHE Online BCom, are valid for government jobs, corporate roles, and further education like PhD or professional certifications.'
                },
                {
                  question: 'How does the online learning process work at MAHE?',
                  answer: 'Students of MAHE University Online get access to live online classes, recorded lecture videos, 24/7 digital LMS, assignments & quizzes, and discussion forums & faculty support. This makes UG & PG online courses by MAHE flexible and easy to follow.'
                },
                {
                  question: 'What are the eligibility criteria for MAHE Online Courses?',
                  answer: 'Eligibility varies by program: MAHE Online BCA / BBA / BCom – 10+2 from a recognised board; MAHE Online MBA / MCom / MCA – Bachelor\'s degree from a recognised university. Specific program requirements are mentioned in each course description.'
                },
                {
                  question: 'What is the fee structure for MAHE Online Programs?',
                  answer: 'The fee for MAHE Online Courses is affordable and varies program-wise. MAHE also provides flexible payment options, including semester-wise fees and EMIs.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700 text-sm sm:text-base md:text-lg"
                  >
                    <span className="pr-4 sm:pr-6 md:pr-8 flex-1">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <span className="text-lg sm:text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="Conclusion" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-queens">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Conclusion</span>
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MAHE University Online stands as one of the <strong>best online universities in India</strong>, offering high-quality education through flexible and industry-focused <strong>MAHE Online Courses</strong>, <strong>MAHE Online Programs</strong>, and UGC-entitled <strong>MAHE Online Degrees</strong>. Whether you choose the <strong>MAHE Online MBA</strong>, <strong>MAHE Online BCA</strong>, <strong>MAHE Online MCA</strong>, <strong>MAHE Online BBA</strong>, <strong>MAHE Online MCom</strong>, or <strong>MAHE Online BCom</strong>, each program is designed to build real-world skills, support career growth, and provide a future-ready learning experience.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-12">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
            </div>
          </div>
        </section>

        {/* Professional Hiring Partners Section */}
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top Companies</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Join the ranks of successful graduates working at leading organizations worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png", "/images/apple.jpg","https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp"].map((src, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
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
            <div className="text-center mt-8 sm:mt-12 md:mt-16">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Join Them?</h3>
                <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Start your journey with Manipal Academy of Higher Education Online and unlock endless career opportunities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-orange-600 font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base md:text-lg"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={() => setOpenModal({ type: 'enquire' })}
                    className="border-2 border-white text-white font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg"
                  >
                    Download Brochure
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
              universityName="Manipal Academy of Higher Education"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </section>

        {/* Premium Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal" className="h-12 w-auto" />
                  <span className="font-queens text-2xl text-white">Online Manipal</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled, NAAC A+ accredited online degrees designed for modern learners seeking career advancement.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">📞</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">💬</span>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com', 'MA JMC'].map((program, i) => (
                    <li key={i}>
                      <a onClick={() => setOpenModal ({ type: 'apply' })} className="text-gray-400 hover:text-orange-400 transition-colors cursor pointer">
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-3">
                  {['Admissions', 'Scholarships', 'Placements', 'FAQs', 'Contact Us'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Get Started</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+91 7042646766</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
                               {/* Popular Programs Section */}
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="border-t border-white/10 pt-8 mb-8"
                                  >
                                    <h4 className="text-lg font-bold mb-6 text-white text-center">
                                      Popular Programs & Specializations –Manipal Academy of Higher Education Online(MAHE) "  
                                    </h4>
                      
                                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                      {[
                                         "BBA Finance & Accounting - MAHE Online",
                                         "BBA Digital Marketing - MAHE Online",
                                         "BBA Enterepreneurship Management & Family Business - MAHE Online",
                                         "BBA Human Resource Management - MAHE Online",
                                         "BBA Data Analytics - MAHE Online",
                                         "BBA Retail & E-commerce Management - MAHE Online",

                                         "BCA Data Science and Analytics - MAHE Online",
                                         "BCA Cyber Security - MAHE Online",
                                         "BCA Cloud Computing - MAHE Online",

                                         "B.Com General - MAHE Online",

                                         "MBA Human Resource Management and Finance - MAHE Online",
                                         "MBA Finance and Marketing - MAHE Online",
                                         "MBA Marketing and Human Resource Management - MAHE Online",
                                         "MBA Marketing and Business Analytics - MAHE Online",
                                         "MBA Finance and Business Analytics - MAHE Online",
                                         "MBA Human Resource and Business Analytics - MAHE Online",
                                         "MBA Project Management - MAHE Online",
                                         "MBA Retail Management and Quick Commerce - MAHE Online",
                                         "MBA Artificial Intelligence Banking and Finance - MAHE Online",
                                         "MBA Other Fields (15+) - MAHE Online",

                                         "MCA AI & Data Science - MAHE Online",
                                        "MCA Cyber Security - MAHE Online",
                                          "MCA Cloud Computing - MAHE Online",
                                        "MCA Comprehensive Emerging Technologies - MAHE Online",
                                        "MCA AI & ML - MAHE Online",

                                         "M.Com General - MAHE Online",

                                         "MA Economics - MAHE Online",
                                         "MA Journalism and Mass Communication - MAHE Online"
                                         ]

                                    .map((keyword, index) => (
                                        <span
                                          key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                                          className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                                          title={keyword}
                                        >
                                          {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                                        </span>
                                      ))}
                                    </div>
                                  </motion.div>
                      

            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Manipal Academy of Higher Education Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </>
  );
};

export default Manipal;