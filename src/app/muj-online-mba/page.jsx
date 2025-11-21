'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaBars, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaTimes, FaCheckCircle, FaGraduationCap, FaMoneyBillWave, FaClock, FaLaptop, FaChartLine, FaHandshake, FaAward, FaChevronDown } from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import AccreditationSection from '@/components/AccreditationSection';
import { ChevronDown } from 'lucide-react';

const MUJOnlineMBAPage = () => {
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
      question: "Is Manipal Online MBA valid and recognized?",
      answer: "Yes. MUJ Online MBA is UGC-entitled, NAAC A+ accredited, and treated at par with on-campus degrees. Your certificate does not mention 'online'."
    },
    {
      question: "What is the fee structure and EMI support?",
      answer: "Program fee is transparent and payable semester-wise. MUJ partners with NBFCs/banks for zero or low-cost EMIs so you can learn now and pay gradually."
    },
    {
      question: "Which specialization should I choose?",
      answer: "Marketing and Finance remain evergreen, whereas Business Analytics and IT are trending for tech-led roles. Pick a track aligned with your role, passion, and job market demand."
    },
    {
      question: "How does the online learning platform work?",
      answer: "You receive Online Manipal login credentials to access recorded/live classes, e-content, assignments, discussion boards, and a dedicated student app."
    },
    {
      question: "What career support is offered?",
      answer: "Career labs cover CV building, mock interviews, job readiness bootcamps, and alumni networking. Most learners leverage the MBA for promotions or role switches."
    },
    {
      question: "Is Manipal Online MBA worth it for working professionals?",
      answer: "Absolutely. You earn a premium MBA without career breaks, apply new skills immediately, and access a national network—resulting in higher roles and pay."
    }
  ];

  const specializations = [
    { name: "Marketing Management", for: "Branding, digital campaigns, GTM strategies" },
    { name: "Finance Management", for: "Financial modeling, investments, strategic finance" },
    { name: "Human Resource Management", for: "Talent strategies, employee engagement, HR analytics" },
    { name: "Operations Management", for: "Supply chain, process excellence, logistics" },
    { name: "Information Technology Management", for: "Digital transformation, product strategy, data insights" },
    { name: "Business Analytics", for: "Predictive analytics, BI tools, data storytelling" }
  ];

  const jobRoles = [
    "Marketing & Growth Manager, Brand Strategist",
    "Financial Analyst, Investment Associate",
    "HR Business Partner, Talent Development Lead",
    "Operations Lead, Supply Chain Specialist",
    "Product Manager, Business Consultant",
    "Entrepreneur / Startup Founder"
  ];

  const industries = [
    "IT & Technology Services",
    "Banking & Financial Services",
    "Consulting & Business Services",
    "FMCG & Retail",
    "Healthcare & Pharmaceuticals",
    "Manufacturing & Industrial"
  ];

  const admissionSteps = [
    { step: 1, title: "Register on Online Manipal Portal", desc: "Verify your email/phone and create account" },
    { step: 2, title: "Fill Digital Application", desc: "Provide academic and professional details" },
    { step: 3, title: "Upload Documents", desc: "Mark sheets, ID proof, photo, and supporting documents" },
    { step: 4, title: "Application Screening", desc: "Some tracks may require online assessment" },
    { step: 5, title: "Receive Offer & Pay Fees", desc: "Complete payment (full/semester/EMI options)" },
    { step: 6, title: "Start Learning Journey", desc: "Get LMS credentials, attend orientation" }
  ];

  const highlights = [
    {
      icon: FaCertificate,
      title: "UGC-Entitled & NAAC A+",
      desc: "Degree holds the same value as on-campus MBA, globally recognized."
    },
    {
      icon: FaBookOpen,
      title: "Career-Focused Curriculum",
      desc: "Live classes, simulations, case studies, and capstone projects."
    },
    {
      icon: FaUserTie,
      title: "Designed for Working Pros",
      desc: "Weekend live sessions + recorded lectures for flexible learning."
    },
    {
      icon: FaUsers,
      title: "Dedicated Student Support",
      desc: "Academic mentors, career coaches, and technical help desk."
    }
  ];

  const feeCards = [
    {
      icon: FaMoneyBillWave,
      title: "Transparent Program Fee",
      desc: "Industry-aligned MBA that costs significantly less than traditional programs."
    },
    {
      icon: FaChartLine,
      title: "EMI & Education Loans",
      desc: "0% or low-cost EMI plans via partner NBFCs and banks."
    },
    {
      icon: FaCheckCircle,
      title: "All-Inclusive Pricing",
      desc: "Includes LMS access, e-content, exam fees, and student support."
    },
    {
      icon: FaBriefcase,
      title: "Strong ROI",
      desc: "Graduates report 30-50% average salary hikes within 2 years."
    }
  ];

  return (
    <div>
      <Head>
        <title>Manipal Online MBA | Master of Business Administration | MUJ Online</title>
        <meta name="description" content="UGC-approved Online MBA from Manipal University Jaipur. 2-year flexible program with multiple specializations. NAAC A+ accredited. Apply now for career advancement." />
        <meta name="keywords" content="Manipal Online MBA, MUJ MBA Online, Online MBA, Master of Business Administration Online, UGC Approved MBA, NAAC A+ MBA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/muj-mba-online" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
       
      <div className="poppins overflow-x-hidden flex">
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
                  
                </h1>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
                
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                > 
                  <FaPhone className="text-base sm:text-lg" />
                  <span className="hidden lg:inline">+91 7042646766</span>
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

        {/* Desktop Sidebar */}
        <aside className="fixed hidden lg:flex flex-col top-20 w-64 h-[calc(100vh-5rem)] px-4 py-8 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
          <h3 className="text-lg font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">Page Contents</h3>
          <ul className="space-y-3 flex-1">
            {[
              { id: "overview", label: "Overview" },
              { id: "highlights", label: "Why Choose" },
              { id: "eligibility", label: "Eligibility" },
              { id: "duration", label: "Duration & Mode" },
              { id: "fees", label: "Fees Structure" },
              { id: "specializations", label: "Specializations" },
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
                    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors duration-200 text-left cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 min-w-0 lg:pl-64">
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
                  className="fixed top-0 left-0 w-[85vw] sm:w-72 h-full bg-white border-r shadow-xl z-[1000] p-4 sm:p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
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
                      { id: "specializations", label: "Specializations" },
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
                          className="text-gray-700 hover:text-orange-600 font-semibold text-base transition-colors duration-200 w-full text-left py-2 cursor-pointer"
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
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1763727192/mba-online-image_rzrmnc.webp"
                alt="Manipal Online MBA"
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
                    <span className="text-sm sm:text-base">UGC-Entitled • NAAC A+</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block">Online MBA</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Transform Your Career
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    UGC-approved 2-year online MBA program with flexible learning, multiple specializations, and career-focused curriculum from NAAC A+ accredited Manipal University Jaipur.
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
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

                  <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
                    {["2 Years • 4 Semesters", "Live + Recorded Classes", "EMI Options Available", "Placement Support"].map((item) => (
                      <span key={item} className="flex items-center gap-2">
                        <FaCheckCircle className="text-orange-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
            <section className=" mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-lg">
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
    Why Manipal Online MBA
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    Online education in India has grown rapidly since 2020, and leading this
    evolution is the <strong>Manipal Online MBA</strong> from Manipal University
    Jaipur (MUJ). With <strong>NAAC A+</strong> accreditation, UGC-entitled
    status, and a strong academic legacy, it is considered one of the most
    reliable and career-focused online MBA programs in the country.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Whether you are a working professional aiming for promotion, a graduate
    seeking a competitive MBA, or a career switcher preparing for leadership
    roles, the Manipal Online MBA provides the flexibility, recognition, and
    industry relevance needed to excel.
  </p>

  <p className="text-gray-700 leading-relaxed">
    In a highly competitive job market, employers seek candidates who possess
    modern business skills, strategic thinking, and practical exposure to
    real-world tools. The Online MBA from Manipal bridges this gap through an
    updated curriculum, hands-on projects, and a digital-first learning
    ecosystem designed to meet today’s industry demands.
  </p>
</section>

          {/* Overview Section */}
          <section id="overview" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal University Jaipur Online MBA Overview
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
                    The <strong>Online MBA</strong> is:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>A 2-year postgraduate degree (4 semesters)</li>
                    <li>Offered fully online via the Online Manipal platform</li>
                    <li>Designed for working professionals who want career advancement without career breaks</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                    The programme focuses on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Advanced business fundamentals (strategy, leadership, analytics)</li>
                    <li>Digital transformation and technology management</li>
                    <li>Strategic thinking and decision-making capabilities</li>
                    <li>Leadership and organizational development</li>
                  </ul>
                </div>
              </div>

              {/* At a Glance */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Manipal Online MBA at a Glance</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaGraduationCap className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600 text-sm">2 Years (4 Semesters)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaMoneyBillWave className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Total Fee</h4>
                    <p className="text-gray-600 text-sm">₹1,50,000 - ₹2,00,000*</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaCheckCircle className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Eligibility</h4>
                    <p className="text-gray-600 text-sm">Graduation (50% minimum)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaAward className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Recognition</h4>
                    <p className="text-gray-600 text-sm">UGC Entitled, NAAC A+</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">*Fee varies by specialization</p>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section id="highlights" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Manipal Online MBA?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <item.icon className="text-orange-600 text-4xl flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Recognition & Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  MUJ is NAAC A+ accredited, AICTE approved, and part of the globally respected Manipal Group. The
                  online MBA is fully UGC-entitled—ideal for job applications, promotions, and overseas prospects.
                </p>
              </div>
            </div>
          </section>

          {/* Fees Section */}
          <section id="fees" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal Online MBA Fees & Payment Structure
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Invest confidently in a degree that pays you back through faster promotions and better job opportunities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {feeCards.map((card, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                    <div className="flex items-start gap-4">
                      <card.icon className="text-orange-600 text-3xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                        <p className="text-gray-700">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                        <td className="px-4 py-4 text-gray-700">₹1,50,000 - ₹2,00,000</td>
                        <td className="px-4 py-4 text-gray-700">₹37,500 - ₹50,000 per semester</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">NRI Students</td>
                        <td className="px-4 py-4 text-gray-700">~USD 2,500 - 3,300 total</td>
                        <td className="px-4 py-4 text-gray-700">USD 625 - 825 per semester</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>Additional Information:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Scholarship options available for meritorious students</li>
                    <li>EMI options starting from ₹4,999/month</li>
                    <li>Corporate reimbursement programs supported</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Section */}
          <section id="eligibility" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility Criteria for Manipal Online MBA
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Eligibility:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Bachelor's degree in any discipline from a recognized university</li>
                      <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
                      <li>Final-year students can apply, provided they submit documents before course start</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Requirements:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Reliable internet connection and laptop/desktop</li>
                      <li>Basic digital literacy and computer skills</li>
                      <li>Commitment of 10-15 hours per week for studies</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-white rounded-xl p-4 border border-orange-200">
                  <p className="text-gray-700">
                    <strong>Pro tip:</strong> Keep soft copies of all mark sheets and ID proofs ready. Admissions operate
                    on a rolling basis, so early applicants receive faster confirmation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Duration & Mode Section */}
          <section id="duration" className="py-12 sm:py-16 md:py-20 bg-white">
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
                      <li><strong>Standard Duration:</strong> 2 years (4 semesters)</li>
                      <li><strong>Maximum Duration:</strong> Up to 4 years to complete the degree (flexible)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaLaptop className="text-orange-600" />
                      Learning Mode
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Online learning management system (LMS)</li>
                      <li>Recorded video lectures + live interactive sessions</li>
                      <li>E-books, study materials, and case studies</li>
                      <li>Online assignments and proctored exams</li>
                      <li>Discussion forums and peer collaboration</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                    <p className="text-gray-700">
                      <strong>This structure makes it ideal for:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Working professionals wanting career advancement without quitting jobs</li>
                      <li>Entrepreneurs and business owners seeking formal management education</li>
                      <li>Recent graduates looking to enhance employability with a premium MBA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specializations Section */}
          <section id="specializations" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Specialization
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  MUJ lets you personalize the MBA journey by offering high-demand majors. Each pathway features expert
                  faculty, curated electives, and domain projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {specializations.map((spec, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.name}</h3>
                    <p className="text-gray-700 mb-4">{spec.for}</p>
                    <div className="flex items-center text-sm text-orange-600 font-semibold">
                      <FaCheckCircle className="mr-2" />
                      High Demand Field
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How to Pick the Right Track?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Map it to your current role or desired career switch</li>
                    <li>Assess industry demand via LinkedIn and job boards</li>
                    <li>Consider your long-term career aspirations</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Evaluate your strengths and interests</li>
                    <li>Research salary trends and growth opportunities</li>
                    <li>Leverage MUJ mentors to validate your choice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Syllabus Section */}
          <section id="syllabus" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Program Structure & Learning Experience
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Semesters 1 & 2: Foundations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Managerial Economics, Accounting & Finance</li>
                    <li>Marketing, HR, Operations & Supply Chain Management</li>
                    <li>Business Analytics, Research Methodology</li>
                    <li>Business Communication and Corporate Ethics</li>
                    <li>IT for Managers and Organizational Behavior</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Semesters 3 & 4: Advanced + Capstone</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Strategic Management and Business Policy</li>
                    <li>Entrepreneurship and Project Management</li>
                    <li>Specialization electives (6–8 courses)</li>
                    <li>Industry projects and simulations</li>
                    <li>Dissertation/Capstone Project</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Learning Methodology</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Attend live sessions, revisit recordings anytime, join discussion forums, submit assignments digitally,
                  and collaborate with peers through Online Manipal's award-winning LMS.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: "🎥", title: "Recorded Lectures", desc: "Access anytime" },
                    { icon: "🔴", title: "Live Sessions", desc: "Interactive classes" },
                    { icon: "📚", title: "E-Resources", desc: "Study materials" },
                    { icon: "💬", title: "Discussion Forums", desc: "Peer learning" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Career Scope Section */}
          <section id="career" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career Support & Job Outcomes
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  MUJ's Career Services team ensures you capitalize on your MBA with structured guidance and employer connects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-orange-600" />
                    Career Support Services
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Career Mentoring", desc: "1:1 consultations to craft personalized growth roadmaps" },
                      { title: "Resume & Profile Labs", desc: "LinkedIn & CV makeovers aligned with target roles" },
                      { title: "Mock Interviews", desc: "HR + technical mock rounds with live feedback" },
                      { title: "Corporate Networking", desc: "Access to Manipal alumni, CXO talks, and industry webinars" }
                    ].map((service, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBuilding className="text-orange-600" />
                    Popular Job Roles
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {jobRoles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <p className="text-gray-700">
                      <strong>Average Salary Hike:</strong> 30-50% within 2 years of completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join thousands of professionals who have accelerated their careers with Manipal Online MBA
                </p>
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Start Your Application
                </button>
              </div>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Is MUJ Online MBA Worth It?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Judge the program across the metrics that matter to modern professionals.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                        <th className="px-4 py-4 text-left font-semibold">Value Delivered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { aspect: "Academic Credibility", value: "UGC-approved degree from MUJ with NAAC A+ legacy" },
                        { aspect: "Flexibility", value: "Weekend classes, recorded lectures, mobile LMS" },
                        { aspect: "Cost Advantage", value: "Pay per semester or via EMI; no hidden charges" },
                        { aspect: "Skill Outcomes", value: "Case studies, simulations, capstone, and career labs" },
                        { aspect: "Network", value: "Pan-India cohort of managers, entrepreneurs, and technologists" }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-4 font-semibold text-gray-900">{row.aspect}</td>
                          <td className="px-4 py-4 text-gray-700">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>Who benefits the most?</strong> Working professionals aiming for leadership, career switchers,
                    entrepreneurs scaling ventures, and graduates who want a premium MBA alongside early work experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Admission Process Section */}
          <section id="admission" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Admission Process
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Follow these steps to secure your seat in the next intake.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4 mb-12">
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

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Documents Checklist</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "10th, 12th, and graduation mark sheets + degree certificate",
                    "Government-issued ID (Aadhaar/PAN/Passport/Driving License)",
                    "Passport-size photographs in JPEG format",
                    "Work experience letters (if applicable)",
                    "Category certificates for reserved seats (if applicable)"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>Need help?</strong> Call +91 70426 46766 for application guidance, EMI assistance, or syllabus
                    walkthroughs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* UNIFOST Helps Section */}
          <section id="unifost" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How UNIFOST Helps You with Manipal Online MBA
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing a university is not just about clicking "Apply Now." Students often struggle with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li>Comparing Manipal with other UGC-approved online MBAs</li>
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
                        <p className="text-gray-700 font-semibold mb-1">2. Compare Manipal Online MBA with other top online MBA options</p>
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
                  Frequently Asked Questions
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
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
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

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white max-w-2xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-lg mb-6">Our counselors are here to help you make the right decision.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 cursor-pointer"
                    >
                      Apply Now
                    </button>
                    <a
                      href="tel:+917042867717"
                      className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                    >
                      Call Counselor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add other sections like Accreditation, Placement Partners, etc. from your BBA page */}
          {/* You can reuse the same components for Accreditation, Placement Partners, etc. */}

        </main>
      </div>

      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your MBA Application' : 'Enquire About MBA Program'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
          universityName="Manipal University Jaipur"
          defaultProgram="MBA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

export default MUJOnlineMBAPage;