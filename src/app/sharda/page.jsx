'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import { Inter, Playfair_Display } from "next/font/google";
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import { FaBars, FaTimes } from 'react-icons/fa';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const UniversityPage = () => {
  // University data - you can replace this with your actual data
  const universityData = {
    name: "Shardha University Name",
    shortName: "Sharda",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/shardalogos_fecyer.webp",
    heroImage: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762587569/university-hero_ikhcch.webp",
    description: "Globally recognized university offering quality online education",
    themeColor: "#EC027C",
    accreditation: "NAAC A+",
    phone: "+91-7042867717"
  };

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "General,",
      specialization: "Finance, Marketing, HR, Entrepreneurship",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Business Administration (BBA)",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "1,20,000",
      specialization: "General,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Computer Applications (BCA)",
    },
    {
      course: "Bachelor of Arts (Hons.)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,05,000",
      specialization: "Political Science,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Commerce (B.Com)",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor’s Degree of minimum 3 years duration.",
      fees: "₹1,40,000 -₹1,96,000",
      specialization: ["Data Science and Analytics, Marketing, Healthcare and Hospital Administration, Human Resource Management, Sales and Marketing, Finance"],
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Business Administration (MBA)",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree or Passed B.Sc./ B.Com./ B.A. with Mathematics at 10+2 Level or at Graduation Level",
      fees: "₹1,20,000",
      specialization: ["Computer Science and Information Technology, Data Science"],
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Computer Applications (MCA)",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹50,000-1,40,000",
      specialization: "Master of commerce",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Commerce (M.Com) in Sharda Online",
    },
  ];

   useEffect(() => {
         
   
         const timer= setTimeout(()=>{
          setOpenModal(true)
         },3000)
         return () => clearTimeout(timer);
   
          
   },[])
   
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const faqData = [
  {
    question: "Is Sharda University Online approved by UGC?",
    answer: "Yes, Sharda University Online is recognized by the University Grants Commission (UGC) and approved by the Distance Education Bureau (DEB). All degrees offered through online mode are valid, recognized, and carry the same weightage as regular on-campus programs."
  },
  {
    question: "Is Sharda University Online NAAC accredited?",
    answer: "Yes, Sharda University has been accredited with NAAC A+ grade, ensuring high-quality education and academic standards in its online degree programs."
  },
  {
    question: "Are online degrees from Sharda University valid for government jobs and higher studies?",
    answer: "Absolutely. Online degrees from Sharda University are valid for government jobs, competitive exams such as UPSC, SSC, Banking, and also accepted for higher education including MBA, PhD, or international studies."
  },
  {
    question: "What are the popular online courses offered by Sharda University?",
    answer: "Sharda University Online offers Undergraduate and Postgraduate programs including BBA, BCA, B.Com, MBA, MCA and several professional certificate courses. Specializations include Marketing, HR, Finance, Entrepreneurship, Business Analytics, AI, Data Science, Cyber Security, and Cloud Computing."
  },
  {
    question: "What is the eligibility criteria for admission?",
    answer: "For UG programs like BBA, BCA, and B.Com, a 10+2 pass with at least 40% marks is required. For PG programs like MBA and MCA, a bachelor's degree with at least 50% marks is mandatory."
  },
  {
    question: "What is the fee structure of Sharda University Online programs?",
    answer: "Fees vary depending on the program. For example, BBA and BCA cost ₹1,35,000 (total), B.Com is ₹99,000, MBA is ₹1,75,000, and MCA is ₹1,58,000. Easy EMI and installment options are available for students."
  },
  {
    question: "Does Sharda University Online offer placement assistance?",
    answer: "Yes, Sharda University Online provides 100% placement assistance, career counseling, resume building, interview preparation, and access to top recruiters through its strong industry network."
  },
  {
    question: "Can I pursue Sharda University Online courses while working?",
    answer: "Yes, all programs are designed to be flexible for working professionals and fresh graduates. You can attend live lectures or access recorded sessions at your convenience."
  },
  {
    question: "Is there any financial support or EMI option available?",
    answer: "Yes, Sharda University Online offers no-cost EMI, scholarships, and installment facilities to make education affordable for all students."
  },
  {
    question: "What is the admission procedure for Sharda University Online?",
    answer: "The process is simple: (1) Fill out the online application form, (2) Upload required documents (marksheets, ID proof), (3) Pay the registration fee, (4) Confirm admission with counseling and course selection, (5) Receive your enrollment confirmation and start learning."
  },
  {
    question: "Are Sharda University Online degrees accepted internationally?",
    answer: "Yes, Sharda University Online degrees are globally recognized and accepted by employers and universities across multiple countries, making it easier for students to pursue international opportunities."
  },
  {
    question: "How do online classes take place at Sharda University?",
    answer: "The university follows a blended learning approach with live virtual classes, recorded video lectures, e-study materials, discussion forums, and mentorship support. Students can study anytime and from anywhere."
  },
  {
    question: "Can I download the Sharda University Online brochure?",
    answer: "Yes, you can download the official brochure from the university website or request it via the enquiry form. The brochure contains detailed program structure, fee details, career prospects, and faculty information."
  }
];


  const testimonials = [
    {
      name: "Pratik",
      course: "MBA",
      university: universityData.shortName,
      text: "The online program provided me with the flexibility to balance work and studies while receiving quality education."
    },
    {
      name: "Sonal",
      course: "BCA",
      university: universityData.shortName,
      text: "The curriculum was industry-relevant and the faculty support was exceptional throughout the program."
    }
  ];

  // State management
  const [openIndex, setOpenIndex] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const toggleFAQ = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  return (
    <>
      <Head>
        <title>{`${universityData.name} Online Degrees | UG & PG Courses`}</title>
        <meta name="description" content={`Explore globally recognized online programs from ${universityData.name}. Flexible learning, expert mentorship, and career-focused degrees.`} />
        <meta name="keywords" content={`${universityData.name} Online, Online Degrees, UGC Approved, Distance Learning`} />
        <meta name="author" content={universityData.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/university" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${universityData.name} Online Degrees | Accredited Online Degrees`} />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content={universityData.heroImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/university" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${universityData.name} Online | Accredited Online Degrees`} />
        <meta name="twitter:description" content="Enroll in UGC approved online courses with flexible learning options." />
        <meta name="twitter:image" content={universityData.heroImage} />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

         <style jsx>{`
        .queens { font-family: 'Queens', serif; }
      `}</style>
      <div className="queens">
        {/* Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src={universityData.logo} 
                  alt={`${universityData.name} Logo`} 
                  className="h-8 w-auto sm:h-10 lg:h-12" 
                />
                 <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                  <span style={{ color: universityData.themeColor }}>Online</span>{" "}
                  <span className="text-gray-800">{universityData.shortName}</span>
                </h1>
              </div>

              {/* Contact & Apply */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
                <a
                  href={`tel:${universityData.phone}`}
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f7188b] transition-colors"
                > 
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">{universityData.phone}</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                <a
                  href={`tel:${universityData.phone}`}
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#f7188b]/10 rounded-full text-[#f7188b] hover:bg-[#f7188b]/20 transition-colors"
                >
                  📞
                </a>
                
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-screen-2xl mx-auto flex">
          {/* Desktop Sidebar */}
          <aside className="fixed hidden lg:flex flex-col top-20 w-64 h-[calc(100vh-5rem)] px-4 py-8 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
              <h3 className="text-lg font-bold mb-6 text-pink-600 border-b-2 border-pink-200 pb-2">Page Contents</h3>
              <ul className="space-y-3">
                  {[
                                { id: "introduction", label: "Introduction" },
                                { id: "campus-tour", label: "Campus Tour" },
                                { id: "explore-courses", label: "Explore Sharda University Online Courses" },
                                { id: "key-highlights", label: "Key Highlights" },
                                { id: "admission-dates", label: "Admission Dates (UG & PG)" },
                                { id: "admission-process", label: "Admission Process" },
                                { id: "placement-partners", label: "Placement Partners" },
                                { id: "placement-record", label: "Placement Record" },
                                { id: "student-reviews", label: "Student Reviews" },
                                { id: "faqs", label: "FAQs" },
                                { id: "university-reviews", label: "Sharda University Online Reviews" },

                  ].map((item) => (
                      <li key={item.id}>
                          <button
                              onClick={() => {
                                  const section = document.getElementById(item.id);
                                  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}
                              className="text-gray-700 hover:text-pink-600 font-medium text-sm transition-colors duration-200 text-left cursor-pointer"
                          >
                              {item.label}
                          </button>
                      </li>
                  ))}
              </ul>
          </aside>

          <main className="flex-1 min-w-0 lg:pl-64">
            <div className="overflow-x-hidden pt-16 lg:pt-20">
       
                   {/* Mobile Sidebar */}
                   <AnimatePresence>
                     {isMobileMenuOpen && (
                       <>
                         <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] lg:hidden"
                           onClick={() => setIsMobileMenuOpen(false)}
                         />
                         <motion.aside
                           initial={{ x: "-100%" }}
                           animate={{ x: 0 }}
                           exit={{ x: "-100%" }}
                           transition={{ type: "spring", stiffness: 300, damping: 30 }}
                           className="fixed top-0 left-0 w-[85vw] sm:w-80 h-full bg-white border-r shadow-2xl z-[1000] p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
                         >
                           <div className="flex items-center justify-between mb-8">
                             <h3 className="text-xl font-bold text-pink-600">Page Contents</h3>
                             <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                               <FaTimes className="w-5 h-5 text-gray-600" />
                             </button>
                           </div>
                           <ul className="space-y-4">
                              {[
                                { id: "introduction", label: "Introduction" },
                                { id: "campus-tour", label: "Campus Tour" },
                                { id: "explore-courses", label: "Explore Sharda University Online Courses" },
                                { id: "key-highlights", label: "Key Highlights" },
                                { id: "admission-dates", label: "Admission Dates (UG & PG)" },
                                { id: "admission-process", label: "Admission Process" },
                               
                                { id: "placement-partners", label: "Placement Partners" },
                                { id: "placement-record", label: "Placement Record" },
                                { id: "student-reviews", label: "Student Reviews" },
                                { id: "faqs", label: "FAQs" },
                                { id: "university-reviews", label: "Sharda University Online Reviews" },

                             ].map((item) => (
                               <li key={item.id}>
                                 <button
                                   onClick={() => {
                                     const section = document.getElementById(item.id);
                                     if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                     setIsMobileMenuOpen(false);
                                   }}
                                   className="text-gray-700 hover:text-orange-600 font-semibold text-base transition-colors duration-200 w-full text-left py-2"
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
        {/* Hero Section */}
        <section id="introduction" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp')] bg-cover bg-center opacity-200"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                {/* Accreditation Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{universityData.accreditation} Accredited • UGC Approved</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white">Transform Your</span>
                    <span className="block bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">
                      Career with
                    </span>
                    <span className="block text-white">{universityData.name}</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Earn globally recognized degrees from {universityData.name} with 100% online learning and placement assistance.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {[
                    { icon: '🎓', text: 'UGC Entitled Degrees' },
                    { icon: '💼', text: 'Placement Support' },
                    { icon: '💰', text: 'Easy EMI Options' },
                    { icon: '🌍', text: 'Global Recognition' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="group bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#f7188b]/30 flex items-center justify-center gap-3"
                  >
                    <span>Apply Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'enquire' })}
                    className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="lg:pl-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center">Why Choose {universityData.name} Online?</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '50+', label: 'Countries' },
                      { number: '100K+', label: 'Students' },
                      { number: '93%', label: 'Positive ROI' },
                      { number: '200+', label: 'Hiring Partners' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-[#f7188b]">{stat.number}</div>
                        <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Program Links */}
                  <div className="pt-6 border-t border-white/20">
                    <h4 className="text-white font-semibold mb-4 text-center">Popular Programs</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com'].map((program, i) => (
                        <span key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-white text-sm transition-all duration-300 cursor-pointer hover:scale-105">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-pink-50 text-gray-800">
  <div className="max-w-6xl mx-auto space-y-10">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ee067f]">
      Sharda University Online – Your Pathway to Global Online Learning
    </h2>

    {/* Introduction */}
    <p className="text-lg leading-relaxed text-gray-700">
      <strong>Sharda University Online</strong> is a prestigious UGC-entitled university located in 
      Greater Noida, NCR, offering world-class online education for learners across India and abroad. 
      With a strong legacy in global education and a NAAC-accredited status, it delivers flexible, 
      career-oriented programs through cutting-edge digital platforms.
    </p>
    <p className="text-lg leading-relaxed text-gray-700">
      Established with a mission to make higher education accessible to all — especially working professionals 
      and students who wish to continue their studies without relocating or pausing their careers — Sharda offers 
      a wide range of UGC-approved online degrees including <strong>Online MBA</strong>, <strong>Online BBA</strong>, 
      <strong>Online MCA</strong>, <strong>Online M.Com</strong>, <strong>Online BA</strong>, and 
      several skill-based certificate programs.
    </p>

    {/* Global Ecosystem */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">A Global Learning Ecosystem 🌍</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Sharda Online</strong> is part of the renowned Sharda Group of Institutions, known for diversity 
        and international exposure. With students from over <strong>50+ countries</strong>, learners engage in a 
        multicultural academic environment that fosters global business, technology, and communication insights.
      </p>

      <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
        <li>Attend <strong>live online classes</strong> and access <strong>recorded lectures</strong> anytime.</li>
        <li>Participate in quizzes, projects & group discussions.</li>
        <li>Connect with peers and faculty digitally.</li>
        <li>Track your progress through a personal dashboard.</li>
      </ul>
    </div>

    {/* Recognition */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Recognized & Industry-Relevant Programs ✅</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        All <strong>Sharda Online courses</strong> are designed with guidance from industry experts and corporate 
        leaders to ensure real-world learning and employability. The curriculum includes professional tools, 
        updated technology, and practical exposure.
      </p>

      <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
        <li><strong>Online MBA Sharda University:</strong> Specializations in Marketing, Finance, HR, Business Analytics, and more.</li>
        <li><strong>Online MCA Sharda University:</strong> Focus on AI, Data Science, Cloud Computing, and Cybersecurity.</li>
        <li><strong>Online BBA Sharda University:</strong> Build strong foundations in business and management.</li>
      </ul>
    </div>

    {/* Government & Corporate Recognition */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Government & Corporate Recognition 🏆</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        All online degrees from Sharda University Online are <strong>UGC-Entitled</strong> and valid for both 
        government and private sector jobs. Graduates are also eligible for higher studies in India and abroad.
      </p>
      <p className="mt-3 text-gray-700">
        Sharda has strong academic and industry collaborations with major organizations including:
      </p>
      <div className="flex flex-wrap gap-3 mt-3 text-sm sm:text-base text-gray-600">
        <span className="bg-white shadow px-3 py-1 rounded-lg">Wipro</span>
        <span className="bg-white shadow px-3 py-1 rounded-lg">TCS</span>
        <span className="bg-white shadow px-3 py-1 rounded-lg">Amazon</span>
        <span className="bg-white shadow px-3 py-1 rounded-lg">Deloitte</span>
        <span className="bg-white shadow px-3 py-1 rounded-lg">KPMG</span>
        <span className="bg-white shadow px-3 py-1 rounded-lg">Infosys</span>
        <span className="bg-white shadow px-3 py-1 rounded-lg">Tech Mahindra</span>
      </div>
    </div>

    {/* Flexible Learning */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Flexible & Student-Centered Learning</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        From admissions to examinations, every process is digital — making Sharda University Online one of the 
        most student-friendly platforms in India.
      </p>
      <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
        <li>Online registration & document upload</li>
        <li>Digital academic records</li>
        <li>Online proctored exams</li>
        <li>Easy EMI & installment payment options</li>
      </ul>
    </div>

    {/* Faculty */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Skilled Faculty & Personalized Mentoring</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        The faculty team includes PhD scholars and industry experts who provide live interactive sessions, 
        weekly doubt-clearing classes, and <strong>career counseling support</strong> to ensure complete academic guidance.
      </p>
    </div>

    {/* Global Vision */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Global Vision, Digital Future 🌐</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Sharda University Online</strong> is preparing students for a future where digital innovation, 
        global communication, and technological skills define success. With its academic excellence, industry 
        collaborations, and modern learning ecosystem, it stands as one of India’s fastest-growing and most 
        trusted online universities.
      </p>
    </div>
  </div>
</section>
   
 {/* 🎓 Campus Tour Section */}
<section id="campus-tour" className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-pink-50 text-gray-800">
  <div className="max-w-6xl mx-auto">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ee067f] mb-12">
      Campus Tour
    </h2>

    {/* Content Section */}
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp" 
          alt="Sharda University Campus"
          className="rounded-2xl shadow-md w-full h-80 object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 space-y-5">
        <p className="text-lg text-gray-700 leading-relaxed">
          Even though you study online, <strong>Sharda University</strong> connects you with its
          world-class physical campus located in <strong>Greater Noida, NCR</strong>. Students can
          explore campus facilities, innovation centers, libraries, and cultural infrastructure
          through a virtual campus experience.
        </p>

        <h3 className="text-2xl font-semibold text-[#ee067f]">Campus Highlights:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>✅ Hi-tech smart classrooms</li>
          <li>✅ Global student community (50+ nationalities)</li>
          <li>✅ International tie-ups and exchange programs</li>
          <li>✅ Modern labs and innovation centers</li>
        </ul>
      </div>
    </div>
  </div>
</section>



        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '⏱️',
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with recorded lectures and live sessions'
                },
                {
                  icon: '🏆',
                  title: `${universityData.accreditation} Accredited`,
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#f7188b] to-[#ec027c] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="explore-courses" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Explore <span className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">Online Programs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from industry-relevant programs designed for working professionals and fresh graduates
              </p>
            </div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-12">
              {/* Tab Buttons */}
              <div className="flex justify-center">
                <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
                  {[
                    { value: 'all', label: 'All Programs' },
                    { value: 'ug', label: 'Undergraduate' },
                    { value: 'pg', label: 'Postgraduate' }
                  ].map((tab) => (
                    <Tabs.Trigger
                      key={tab.value}
                      value={tab.value}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === tab.value
                          ? 'bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#f7188b] hover:bg-white'
                      }`}
                    >
                      {tab.label}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </div>

              {/* Course Grid */}
              <Tabs.Content value={activeTab} className="outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                            <span className="bg-[#f7188b] text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                            className="w-full bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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
          </div>
        </section>
    {/* 🎓 Explore Online Courses Section */}
<section className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-black-50 text-gray-900">
  <div className="max-w-6xl mx-auto space-y-10">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black-600">
      Explore Online Courses at Sharda University Online
    </h2>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
      <strong>Sharda University Online</strong> offers <strong>UGC-approved online degrees</strong> 
      across management, IT, commerce, and arts. Each program is carefully designed to meet 
      <strong> industry skill demands</strong> and prepare learners for career excellence.
    </p>

    {/* Table Section */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg shadow-md bg-white">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left text-lg font-semibold">Program</th>
            <th className="py-3 px-4 text-left text-lg font-semibold">Specializations Available</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-800">
          <tr>
            <td className="py-3 px-4 font-medium">Online MBA (Master of Business Administration)</td>
            <td className="py-3 px-4">Data Science and Analytics, Marketing, Healthcare and Hospital Administration, Human Resource Management, Sales and Marketing, FinanceMarketing, HR, Finance, Busines</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-medium">Online MCA (Master of Computer Applications)</td>
            <td className="py-3 px-4">Computer Science and Information Technology, Data Science</td>
          </tr>
           <tr>
            <td className="py-3 px-4 font-medium">Online M.Com (Master of Commerce)</td>
            <td className="py-3 px-4">Accounting & Finance, Public Accountion</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-medium">Online BBA (Bachelor of Business Administration)</td>
            <td className="py-3 px-4">General</td>
          </tr>
           <tr>
            <td className="py-3 px-4 font-medium">Online BCA (Bachelor of Computer Applications)</td>
            <td className="py-3 px-4">General</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-medium">Online BA (Bachelor of Arts)</td>
            <td className="py-3 px-4">Political Science</td>
          </tr>
          
        </tbody>
      </table>
    </div>

    {/* Closing Paragraph */}
    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
      Each course under <strong>Sharda University Online</strong> is crafted for 
      <strong> professional growth</strong>, featuring <strong>live interactive classes</strong>, 
      <strong> recorded lectures</strong>, engaging <strong>discussion forums</strong>, and 
      <strong> project-based assessments</strong>.
    </p>
  </div>
</section>

       <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-pink-50 text-black">
  <div className="max-w-6xl mx-auto space-y-12">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ee067f]">
      Why Choose Sharda University Online?
    </h2>

    {/* 1️⃣ UGC-Approved */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">1️⃣ UGC-Approved & NAAC Accredited ✅</h3>
      <p className="text-lg leading-relaxed text-black">
        Degrees from <strong>Sharda University Online</strong> are officially recognized and valid for:
      </p>
      <ul className="list-disc pl-6 mt-3 text-black space-y-1">
        <li>Government jobs</li>
        <li>Private sector careers</li>
        <li>Promotions & skill upgrades</li>
        <li>Admissions for higher studies</li>
      </ul>
      <p className="mt-3 text-black">
        This ensures students have complete confidence in the value and credibility of their degree.
      </p>
    </div>

    {/* 2️⃣ Career-Oriented Courses */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">2️⃣ Career-Oriented Online Courses 🎯</h3>
      <p className="text-lg leading-relaxed text-black">
        Programs like:
      </p>
      <ul className="list-disc pl-6 mt-3 text-black space-y-1">
        <li>📌 Online MBA Sharda University</li>
        <li>📌 Online MCA Sharda University</li>
        <li>📌 Online BBA Sharda University</li>
      </ul>
      <p className="mt-3 text-black">
        focus on essential industry skills such as data analytics, leadership, innovation, and entrepreneurship — preparing learners for high-paying roles in fast-growing sectors.
      </p>
    </div>

    {/* 3️⃣ Flexible Learning */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">3️⃣ Flexible Learning for Busy Schedules 🕒</h3>
      <p className="text-lg leading-relaxed text-black">
        Study anytime, anywhere, at your own pace:
      </p>
      <ul className="list-disc pl-6 mt-3 text-black space-y-1">
        <li>✅ Recorded lectures</li>
        <li>✅ Weekend live classes</li>
        <li>✅ Assignments with flexible deadlines</li>
      </ul>
      <p className="mt-3 text-black">
        Ideal for working professionals, parents, and individuals looking to restart their academic journey.
      </p>
    </div>

    {/* 4️⃣ Placement Support */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">4️⃣ Strong Placement Support & Industry Network 💼</h3>
      <p className="text-lg leading-relaxed text-black">
        Sharda University Online prioritizes <strong>career advancement</strong> with dedicated support through:
      </p>
      <ul className="list-disc pl-6 mt-3 text-black space-y-1">
        <li>⭐ Virtual placement drives</li>
        <li>⭐ Resume & LinkedIn profile building</li>
        <li>⭐ Mock interviews with experts</li>
        <li>⭐ Internship and mentorship guidance</li>
      </ul>
      <p className="mt-3 text-black">
        Top recruiters actively hire Sharda Online graduates — making it one of the most career-driven online universities in India.
      </p>
    </div>

    {/* 5️⃣ Affordable Fees */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">5️⃣ Affordable Fees & EMI Options 💰</h3>
      <p className="text-lg leading-relaxed text-black">
        Education should be accessible to all. Sharda University Online offers:
      </p>
      <ul className="list-disc pl-6 mt-3 text-black space-y-1">
        <li>✔ Budget-friendly fees compared to other private universities</li>
        <li>✔ No-cost EMI options</li>
        <li>✔ Scholarships for eligible students</li>
      </ul>
    </div>

    {/* 6️⃣ International Exposure */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">6️⃣ International Exposure 🌍</h3>
      <p className="text-lg leading-relaxed text-black">
        With global faculty, foreign student communities, and international learning events, Sharda Online offers 
        students a truly global academic experience — helping them think beyond borders and cultures.
      </p>
    </div>

    {/* 7️⃣ Digital Infrastructure */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">7️⃣ Advanced Digital Infrastructure 💻</h3>
      <p className="text-lg leading-relaxed text-black">
        The modern <strong>LMS (Learning Management System)</strong> ensures a seamless and engaging learning journey with:
      </p>
      <ul className="list-disc pl-6 mt-3 text-black space-y-1">
        <li>✅ Recorded class access</li>
        <li>✅ Interactive dashboards</li>
        <li>✅ High-quality HD streaming</li>
        <li>✅ Easy online examination system</li>
      </ul>
    </div>

    {/* 8️⃣ Govt-Recognized */}
    <div>
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">8️⃣ Government-Recognized Online Degrees 🏛️</h3>
      <p className="text-lg leading-relaxed text-black">
        All degrees awarded by Sharda University Online hold the same value as traditional on-campus degrees — 
        ensuring equal job and academic opportunities.
      </p>
    </div>

    {/* Final Verdict */}
    <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#ee067f]">
      <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">🎓 Final Verdict: The Smart Choice for Future-Ready Careers</h3>
      <p className="text-lg leading-relaxed text-black">
        <strong>Sharda University Online</strong> offers the perfect blend of <strong>recognition, flexibility, affordability, and career growth</strong>. 
        It is the ideal choice for students and professionals looking for globally accepted, future-proof education.
      </p>
    </div>
  </div>
</section>
<section id="key-highlights" className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-[#ee067f] mb-10">
      Key Highlights of Sharda University Online
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ UGC Entitled & NAAC Accredited</p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Global academic partnerships across <span class="text-[#ee067f]">30+ countries</span></p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Flexible learning via <span class="text-[#ee067f]">advanced LMS</span></p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Expert faculty & <span class="text-[#ee067f]">industry mentors</span></p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Accessible to <span class="text-[#ee067f]">working professionals</span></p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ EMI fee payment options available</p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ 100% online proctored examinations</p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Career support & <span class="text-[#ee067f]">placement assistance</span></p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Recorded + live sessions for <span class="text-[#ee067f]">best learning outcome</span></p>
      </div>
      <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="text-black font-semibold">✅ Internship & <span class="text-[#ee067f]">skill development guidance</span></p>
      </div>
    </div>
  </div>
</section>

<section id="admission-dates" className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-16 lg:px-24 font-sans">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
      Admission Dates – UG & PG Online Programs
    </h2>
    <p className="text-gray-600 text-lg mb-10">
      Sharda Online conducts multiple admission cycles every year.  
      <br />
      <span className="font-semibold text-blue-600 text-xl">
        📌 Upcoming Admission Cycle: January / July 2026
      </span>
    </p>

    {/* Table Section */}
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-blue-50">
          <tr>
            <th className="py-4 px-6 text-gray-800 font-semibold text-base">Program</th>
            <th className="py-4 px-6 text-gray-800 font-semibold text-base">Eligibility</th>
            <th className="py-4 px-6 text-gray-800 font-semibold text-base">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 text-gray-900 font-medium">Online MBA (Sharda University)</td>
            <td className="py-4 px-6 text-gray-600">Graduation</td>
            <td className="py-4 px-6 text-green-600 font-semibold">Admission Open ✅</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 text-gray-900 font-medium">Online MCA (Sharda University)</td>
            <td className="py-4 px-6 text-gray-600">BCA / B.Sc. IT or relevant degree</td>
            <td className="py-4 px-6 text-green-600 font-semibold">Admission Open ✅</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 text-gray-900 font-medium">Online BBA (Sharda University)</td>
            <td className="py-4 px-6 text-gray-600">10+2 Pass</td>
            <td className="py-4 px-6 text-green-600 font-semibold">Admission Open ✅</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 text-gray-900 font-medium">Online BCA (Sharda University)</td>
            <td className="py-4 px-6 text-gray-600">10+2 Pass (Govt. recognized board)</td>
            <td className="py-4 px-6 text-yellow-600 font-semibold">Limited Seats ⏳</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 text-gray-900 font-medium">Online M.Com</td>
            <td className="py-4 px-6 text-gray-600">B.Com / Equivalent</td>
            <td className="py-4 px-6 text-green-600 font-semibold">Admission Open ✅</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 text-gray-900 font-medium">Online BA</td>
            <td className="py-4 px-6 text-gray-600">10+2 Pass (Govt. recognized board)</td>
            <td className="py-4 px-6 text-green-600 font-semibold">Admission Open ✅</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Bottom Note */}
    <p className="text-gray-600 mt-10 text-lg max-w-3xl mx-auto leading-relaxed">
      Learners are encouraged to apply early due to the high demand for Sharda University Online programs.
    </p>
  </div>
</section>


          <section>
       <div id="admission-process">
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
                        className="text-center mb-16"
                      >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                          Admission Procedure
                        </h2>
                        <div className="w-24 h-1 bg-[#f7188b] mx-auto mb-8 rounded-full"></div>
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
                          <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-[#f7188b] z-0 rounded-full"></div>
                
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
                              <div className="bg-[#f7188b] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
              </div>
       
                 </section>



              {/* Certificate + Benefits */}
                    <section className="bg-[#003366] py-12 px-4">
                      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                          <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327074/certificateshardaonline_tyy6cu.webp" alt="certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
                        </div>
                        <div className="flex-1 text-white">
                          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Online Degree from Sharda Online University</h2>
                          <p className="mb-6 text-lg">Earn a UGC-Entitled, Globally Recognized Degree with Sharda Online!</p>
                          <h3 className="text-xl font-semibold mb-2"></h3>
                          <ul className="list-disc list-inside space-y-2">
                            <li>UGC-Entitled & NAAC A+ Accredited</li>
                            <li>Degree from a Globally Ranked University</li>
                            <li>Recognized & Accepted in India and Abroad</li>
                            <li>Equivalent to Sharda’s On-Campus Programs</li>
                          </ul>
                        </div>
                      </div>
                    </section>   

        {/* Testimonials Section */}
        <section id="student-reviews" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Success <span className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our alumni who have transformed their careers with {universityData.name} Online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#f7188b] to-[#ec027c] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <svg className="w-8 h-8 text-[#f7188b] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-4">
                          <h4 className="font-bold text-gray-900 text-xl">{testimonial.name}</h4>
                          <p className="text-[#f7188b] font-semibold text-lg">
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
       
    
           <section id="placement-partners" className="py-12 bg-gray-100">
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
                    
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp" alt="Samsung3" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp" alt="Samsung4" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp" alt="Samsung5" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp" alt="Samsung6" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp" alt="Samsung7" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/8_otnhv8.webp" alt="Samsung8" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp" alt="Samsung9" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp" alt="Samsung" className="h-12 object-contain" />
              </div>
              {/* Add more cards here as needed */}
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section id="faqs" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about {universityData.name} Online Programs
              </p>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#f7188b]/10 hover:to-[#ec027c]/10 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-[#f7188b] text-lg"
                  >
                    <span className="pr-8">{faq.question}</span>
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#f7188b] group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
         {/* Placement Record Section */}
<section id="placement-record" className="bg-gray-50 py-16 px-6 md:px-20 font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Placement Record Heading */}
    <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
      Placement Record
    </h2>

    <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
      Sharda University Online has a strong placement network with thousands of global alumni.
      Students pursuing online degrees benefit from:
    </p>

    {/* Benefits List */}
    <ul className="text-gray-800 text-lg space-y-2 mb-10 max-w-2xl mx-auto list-disc list-inside">
      <li>Industry-driven skills</li>
      <li>Corporate mentorship</li>
      <li>Virtual placement drives</li>
    </ul>

    {/* Top Job Roles */}
    <div className="bg-white shadow-md rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-blue-500 mb-4">
        Top Job Roles:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 text-base">
        <p>📌 Business Analyst</p>
        <p>📌 Software Developer</p>
        <p>📌 HR Manager</p>
        <p>📌 Marketing Executive</p>
        <p>📌 Data Analyst</p>
        <p>📌 Project Coordinator</p>
      </div>
    </div>
  </div>
</section>

{/* Student Reviews Section */}
<section id="university-reviews" className="bg-white py-16 px-6 md:px-20 font-sans border-t border-gray-200">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
      Student Reviews for Sharda University Online
    </h2>

    {/* Reviews Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Review 1 */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          ⭐ Online MBA Student
        </h3>
        <p className="text-gray-600">
          “Classes are well organized and faculty support is excellent. The Online MBA Sharda University
          program helped me get a promotion.”
        </p>
      </div>

      {/* Review 2 */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          ⭐ Online MCA Student
        </h3>
        <p className="text-gray-600">
          “The curriculum is updated as per industry trends, especially AI & Data Science.
          LMS is smooth and interactive.”
        </p>
      </div>

      {/* Review 3 */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          ⭐ Online BBA Student
        </h3>
        <p className="text-gray-600">
          “The flexibility of Sharda University Online allowed me to study while managing my family business.”
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] rounded-3xl p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h3>
              <p className="text-xl text-[#f7188b]/90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful graduates and transform your career with {universityData.name} Online
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-[#f7188b] font-semibold px-12 py-4 rounded-full hover: transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => setOpenModal({ type: 'enquire' })}
                  className="border-2 border-white text-white font-semibold px-12 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex bg-white items-center gap-4 mb-6">
                  <img src={universityData.logo} alt={universityData.name} className="h-12 w-auto" />
                  <span className="text-2xl text-white font-bold">Online {universityData.shortName}</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled, {universityData.accreditation} accredited online degrees designed for modern learners.
                </p>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com'].map((program, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-[#f7188b] transition-colors">
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
                      <a href="#" className="text-gray-400 hover:text-[#f7188b] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Get Started</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">{universityData.phone}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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
                                     "BBA General - Sharda Online",
                                      "BCA General - Sharda Online",
                                      "BA Political Science - Sharda Online",

                                     "MBA Finance - Sharda Online",
                                     "MBA Sales And Marketing - Sharda Online",
                                      "MBA Human Resources Management - Sharda Online",
                                    "MBA Data Science And Business Analytics - Sharda Online",
                                    "MBA HelthCare And Hospital Management - Sharda Online",

                                    "MCA Data Science - Sharda Online",
                                     "MCA Computer Science And Information Technology - Sharda Online",

                                    "M.Com Public Accounting - Sharda Online"
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
                © {new Date().getFullYear()} {universityData.name} Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Modal */}
        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda1_eehdkh.webp"
            universityName={universityData.name}
            defaultProgram={openModal.program || 'MBA'}
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
        </div>
        </main>
        </div>
      </div>
    </>
  );
};

export default UniversityPage;