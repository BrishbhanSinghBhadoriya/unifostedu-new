'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaBars, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaTimes, FaCheckCircle, FaGraduationCap, FaMoneyBillWave, FaClock, FaLaptop, FaChartLine, FaHandshake, FaAward, FaChevronDown } from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import AccreditationSection from '@/components/AccreditationSection';
import Footer from '@/components/Footer';

const MUJBBAPage = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const faqData = [
    {
      question: "Is Manipal Online BBA degree valid?",
      answer: "Yes. Manipal University Jaipur is UGC-entitled and NAAC A+ accredited, and its online degrees are recognized at par with on-campus degrees in India."
    },
    {
      question: "Can I do Manipal Online BBA while working?",
      answer: "Yes. The entire programme is designed for flexible online learning, with recorded lectures and online assessments. Many learners are working professionals."
    },
    {
      question: "What is the total fee for Manipal Online BBA?",
      answer: "For Indian students, the total program fee is around ₹1,35,000 (₹22,500 per semester), as per current information. You should always cross-check the latest fee on the official website before applying."
    },
    {
      question: "Do I have to visit the campus for classes or exams?",
      answer: "No, it is a fully online programme, including classes and exams, conducted through the Online Manipal platform and proctored systems."
    },
    {
      question: "Can I pursue an MBA after Manipal Online BBA?",
      answer: "Yes. Since it is a recognized bachelor's degree, you can appear for MBA entrance exams or apply for PG programmes that accept UGC-recognized BBA degrees."
    }
  ];

  const specializations = [
    { name: "Human Resource Management (HRM)", for: "Students who want careers in HR, recruitment, training, employee relations" },
    { name: "Marketing", for: "Those interested in branding, sales, advertising, digital campaigns" },
    { name: "Finance & Accounting", for: "Students aiming at finance roles, banking, accounts, financial analysis" },
    { name: "Entrepreneurship & Family Business", for: "Learners from business families or those wanting to launch startups" },
    { name: "Data Analytics", for: "Students interested in data-driven decision-making, analytics roles" },
    { name: "Retail & E-commerce", for: "Aspirants for retail management, e-commerce operations & online business" },
    { name: "Digital Marketing", for: "Those targeting modern roles in SEO, social media, performance marketing" }
  ];

  const jobRoles = [
    "Marketing Executive / Digital Marketing Executive",
    "HR Executive / Talent Acquisition Associate",
    "Business Development Executive / Sales Coordinator",
    "Operations Executive / Client Servicing",
    "Financial Analyst (entry-level), Accounts Executive",
    "E-commerce Executive / Category Coordinator",
    "Entrepreneur / Small Business Owner"
  ];

  const industries = [
    "IT & ITES",
    "Banking & Financial Services",
    "Startups & e-commerce",
    "FMCG & Retail",
    "Consulting & Business Services"
  ];

  const admissionSteps = [
    { step: 1, title: "Fill Application Form", desc: "Provide basic details, academic history, and (if applicable) work experience." },
    { step: 2, title: "Pay Application / Registration Fee", desc: "This creates your application profile." },
    { step: 3, title: "Upload Documents", desc: "10th & 12th marksheets, ID proof, photo, etc." },
    { step: 4, title: "Pay Programme Fee (Full or Semester-wise)", desc: "Choose your payment mode (EMI / semester)." },
    { step: 5, title: "Confirm Admission", desc: "Once documents & payment are verified, university issues enrolment confirmation and LMS access." }
  ];

  return (
    <>
      <Head>
        <title>Manipal Online BBA | Bachelor of Business Administration | MUJ Online</title>
        <meta name="description" content="Explore UGC-approved Online BBA from Manipal University Jaipur. 3-year flexible program with multiple specializations. Apply now for recognized degree." />
        <meta name="keywords" content="Manipal Online BBA, MUJ BBA Online, Online BBA, Bachelor of Business Administration Online, UGC Approved BBA, NAAC A+ BBA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/muj-bba-online" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>

      <div className="poppins overflow-x-hidden">
        {/* Header */}
        <header className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                  alt="Manipal University Logo" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
                />
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-600">
                  MUJ Online BBA
                </h1>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
                
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                > 
                  <FaPhone className="text-base sm:text-lg" />
                  <span className="hidden lg:inline">+91-7042867717</span>
                  <span className="lg:hidden">Call</span>
                </a>
                
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  <FaPhone className="text-base" />
                </a>
                
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

        {/* Mobile Menu */}
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
                    { id: "overview", label: "Overview" },
                    { id: "highlights", label: "Why Choose" },
                    { id: "eligibility", label: "Eligibility" },
                    { id: "duration", label: "Duration & Mode" },
                    { id: "fees", label: "Fees Structure" },
                    { id: "syllabus", label: "Syllabus" },
                    { id: "career", label: "Career Scope" },
                    { id: "admission", label: "Admission Process" },
                    { id: "unifost", label: "How UNIFOST Helps" },
                    { id: "faq", label: "FAQs" }
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
                <button 
                  onClick={() => {
                    setOpenModal({ type: 'apply' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer mt-4"
                >
                  Apply Now
                </button>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] overflow-hidden pt-14 sm:pt-16 lg:pt-20">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp"
              alt="Manipal Online BBA"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center">
            <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 md:py-12 lg:py-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3 sm:space-y-4 md:space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <img 
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                    alt="Manipal Logo" 
                    className="h-6 sm:h-8 w-auto" 
                  />
                  <span className="text-sm sm:text-base font-semibold">Manipal University Jaipur</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block">Online BBA</span>
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Transform Your Career
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  UGC-approved 3-year online BBA program with flexible learning, multiple specializations, and career-focused curriculum from NAAC A+ accredited Manipal University Jaipur.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Apply Now
                  </button>
                  <a
                    href="tel:+917042867717"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 border border-white/30"
                  >
                    <FaPhone className="inline mr-2" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manipal University Jaipur & Online BBA Overview
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
                  alt="Manipal University Jaipur"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>MUJ</strong> belongs to the Manipal group and is recognized by <strong>UGC</strong>. It has an <strong>A+ grade from NAAC</strong>. The online programs are entitled by UGC; thus, these programs will carry the same academic value as any on-campus degree.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The <strong>Online BBA</strong> is:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>A 3-year undergraduate degree (6 semesters)</li>
                  <li>Offered fully online via the Online Manipal platform</li>
                  <li>Designed for students after 10+2 and working professionals who want structured business education with flexibility</li>
                </ul>
                <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                  The programme focuses on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Business fundamentals (marketing, finance, HR, operations)</li>
                  <li>Digital skills (analytics, MIS, e-commerce, digital marketing)</li>
                  <li>Communication, leadership and critical thinking</li>
                </ul>
              </div>
            </div>

            {/* At a Glance */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Manipal Online BBA at a Glance</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <FaGraduationCap className="text-orange-600 text-3xl mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                  <p className="text-gray-600 text-sm">3 Years (6 Semesters)</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <FaMoneyBillWave className="text-orange-600 text-3xl mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Total Fee</h4>
                  <p className="text-gray-600 text-sm">₹1,35,000</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <FaCheckCircle className="text-orange-600 text-3xl mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Eligibility</h4>
                  <p className="text-gray-600 text-sm">10+2 (40% minimum)</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <FaAward className="text-orange-600 text-3xl mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Recognition</h4>
                  <p className="text-gray-600 text-sm">UGC Entitled, NAAC A+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section id="highlights" className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Manipal Online BBA?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaCertificate className="text-orange-600 text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Recognized & Trusted Degree</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The entitlement from UGC, combined with NAAC A+ accreditation, makes the degree valid for higher studies, jobs in private and public sectors, and competitive exams where a recognized bachelor's is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-orange-600 text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Career-Focused Curriculum</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      The syllabus encompasses subjects such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Business communication, marketing management, financial accounting</li>
                      <li>Business analytics, MIS, international business, digital marketing, retail & e-commerce</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-2">
                      This gives students a strong foundation in business, combined with modern digital skills that employers actually look for.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaLaptop className="text-orange-600 text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Flexible Learning for Students & Working Professionals</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Learn anywhere, at your own pace</li>
                      <li>Access recorded lectures & e-content 24/7</li>
                      <li>Ideal for students wanting to work and study together, or those who cannot relocate for regular college.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaChartLine className="text-orange-600 text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. Multiple Specializations</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      In later semesters, students can choose electives/specializations such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>HR Management</li>
                      <li>Marketing</li>
                      <li>Finance & Accounting</li>
                      <li>Entrepreneurship & Family Business</li>
                      <li>Data Analytics</li>
                      <li>Retail & E-commerce</li>
                      <li>Digital Marketing</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      This will help you shape your BBA in accordance with your career goal, be it a corporate job, family business, startup, or analytics-related role.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eligibility Criteria for Manipal Online BBA
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Eligibility:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Completed 10+2 from a recognized national or state board in any stream</li>
                    <li>Completed 10+3 diploma from a recognized institute.</li>
                    <li>Minimum marks: 40% aggregate or above</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">
                    <strong>Admission to the online BBA is generally open to all, regardless of age.</strong> There is generally no age limit for admission to the online BBA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Duration & Mode Section */}
        <section id="duration" className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Duration & Mode of Learning
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaClock className="text-orange-600" />
                    Duration
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Standard Duration:</strong> 3 years (6 semesters)</li>
                    <li><strong>Maximum Duration:</strong> Up to 6 years to complete the degree (flexible)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaLaptop className="text-orange-600" />
                    Learning Mode
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Online learning management system (LMS)</li>
                    <li>Recorded video lectures + e-texts</li>
                    <li>Live doubt-clearing and sessions (as per schedule)</li>
                    <li>Online assignments and proctored exams</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>This structure makes it ideal for:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Students who want to avoid relocation/hostel costs</li>
                    <li>Working professionals wanting a degree upgrade without quitting their job</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manipal Online BBA Fees & Payment Structure
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Category</th>
                      <th className="px-4 py-4 text-left font-semibold">Total Program Fee</th>
                      <th className="px-4 py-4 text-left font-semibold">Semester-wise Fee*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-4 font-semibold text-gray-900">Indian Students</td>
                      <td className="px-4 py-4 text-gray-700">₹1,35,000 (approx.)</td>
                      <td className="px-4 py-4 text-gray-700">₹22,500 per semester (6 semesters)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-4 font-semibold text-gray-900">NRI Students</td>
                      <td className="px-4 py-4 text-gray-700">~USD 2,046 total</td>
                      <td className="px-4 py-4 text-gray-700">USD 341 per semester</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-semibold text-gray-900">Foreign Nationals</td>
                      <td className="px-4 py-4 text-gray-700">~USD 2,388 total</td>
                      <td className="px-4 py-4 text-gray-700">USD 398 per semester</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-orange-50 rounded-xl p-4 border border-orange-100">
                <p className="text-gray-700">
                  <strong>Additional Information:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                  <li>Scholarship options (merit, defense, alumni, etc., on Online Manipal)</li>
                  <li>EMI / instalment options on semester payments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section id="syllabus" className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manipal Online BBA Syllabus & Specializations (Overview)
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">1) Core Subjects (Typical Themes Across Semesters)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Principles of Management</li>
                  <li>Business Communication & Soft Skills</li>
                  <li>Financial Accounting & Cost Accounting</li>
                  <li>Marketing Management</li>
                  <li>Human Resource Management</li>
                  <li>Organizational Behaviour</li>
                  <li>Business Statistics & Business Analytics</li>
                  <li>Management Information Systems (MIS)</li>
                  <li>International Business Management</li>
                </ul>
                <p className="text-gray-700 mt-4 italic">These build a strong management foundation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">2) Specializations / Electives (Later Semesters)</h3>
                <div className="space-y-4">
                  {specializations.map((spec, idx) => (
                    <div key={idx} className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{spec.name}</h4>
                      <p className="text-sm text-gray-600">{spec.for}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Scope Section */}
        <section id="career" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Career Scope After Manipal Online BBA
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaBriefcase className="text-orange-600" />
                  1) Job Roles After Online BBA
                </h3>
                <p className="text-gray-700 mb-4">Graduates can explore roles such as:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {jobRoles.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaBuilding className="text-orange-600" />
                  2) Industries That Commonly Hire BBA Graduates
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {industries.map((industry, idx) => (
                    <li key={idx}>{industry}</li>
                  ))}
                </ul>
                <div className="mt-6 bg-white rounded-lg p-4 border border-orange-200">
                  <p className="text-gray-700">
                    <strong>Online BBA is especially useful for:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Students who want to pursue an MBA later</li>
                    <li>Working professionals who want to move from non-business backgrounds into management roles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Choose Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who Should Choose Manipal Online BBA?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                You should consider Manipal Online BBA if:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>You've completed 10+2 and want a recognized BBA but can't attend a full-time on-campus college</li>
                <li>You're a working professional who wants structured business education alongside your job</li>
                <li>You're from a business family / startup background and want to formalize your business knowledge</li>
                <li>You want a cost-effective, flexible alternative to expensive private BBA programs in metro cities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section id="admission" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Admission Works - Step-by-Step Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {admissionSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* UNIFOST Helps Section */}
        <section id="unifost" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How UNIFOST Helps You with Manipal Online BBA
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Choosing a university is not just about clicking "Apply Now." Students often struggle with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Comparing Manipal with other UGC-approved online BBAs</li>
                <li>Understanding which specialization fits their career</li>
                <li>Evaluating fees vs ROI</li>
                <li>Managing work + study balance</li>
              </ul>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">At UNIFOST, we help you:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1. Check UGC & NAAC approvals</p>
                      <p className="text-gray-600 text-sm">of universities you're considering (no confusion, only verified info).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">2. Compare Manipal Online BBA with other top online BBA options</p>
                      <p className="text-gray-600 text-sm">on Fees, Specializations, Career services, Flexibility</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">3. Choose the right specialization</p>
                      <p className="text-gray-600 text-sm">(Marketing, HR, Finance, Analytics, etc.) based on your goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">4. Get step-by-step support in the admission process</p>
                      <p className="text-gray-600 text-sm">from shortlisting to document upload and fee planning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                FAQs About Manipal Online BBA
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Thoughts Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-6">
                The Manipal Online BBA is a strong choice for students and professionals who want:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mb-8 text-left max-w-2xl mx-auto">
                <li>A recognized, flexible degree</li>
                <li>Business fundamentals + modern digital skills</li>
                <li>Reasonable fees compared to many private on-campus programs</li>
                <li>The option to work, intern or pursue side projects while studying</li>
              </ul>
              <p className="text-lg sm:text-xl leading-relaxed mb-8">
                But every learner is different. The best choice depends on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mb-8 text-left max-w-2xl mx-auto">
                <li>Your budget</li>
                <li>Your career goal</li>
                <li>Your current stage (student / working / break year)</li>
              </ul>
              <p className="text-xl sm:text-2xl font-semibold">
                That's where platforms like UNIFOST make a difference - by helping you turn a confusing decision into a clear, confident one.
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation Section */}
        <AccreditationSection
          title="Accreditations & Recognitions"
          description="Manipal University Jaipur Online is recognized by leading educational bodies"
          accreditations={[
            { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC Entitled" },
            { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC A+" },
            { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE Approved" }
          ]}
        />

        {/* Apply Modal */}
        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onClose={() => setOpenModal(null)}
          />
        )}
      </div>
      {/* Desktop-only Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
};

export default MUJBBAPage;