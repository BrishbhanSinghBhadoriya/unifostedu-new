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

const ManipalBAPage = () => {
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
      question: "Is Manipal Online BA degree valid?",
      answer: "Yes. Manipal University Jaipur is UGC-entitled and NAAC A+ accredited, and its online degrees are recognized at par with on-campus degrees in India."
    },
    {
      question: "Can I do Manipal Online BA while working?",
      answer: "Yes. The entire programme is designed for flexible online learning, with recorded lectures and online assessments. Many learners are working professionals."
    },
    {
      question: "What is the total fee for Manipal Online BA?",
      answer: "For Indian students, the total program fee is affordable with flexible payment options. You should always cross-check the latest fee on the official website before applying."
    },
    {
      question: "Do I have to visit the campus for classes or exams?",
      answer: "No, it is a fully online programme, including classes and exams, conducted through the Online Manipal platform and proctored systems."
    },
    {
      question: "Can I pursue an MA/MBA after Manipal Online BA?",
      answer: "Yes. Since it is a recognized bachelor's degree, you can appear for postgraduate entrance exams or apply for MA, MBA, MSW, B.Ed programs that accept UGC-recognized BA degrees."
    }
  ];

  const specializations = [
    { name: "English", for: "Students interested in literature, writing, communication, and teaching careers" },
    { name: "Political Science", for: "Those aiming for civil services, public policy, law, or political analysis" },
    { name: "Economics", for: "Students interested in economic analysis, policy-making, banking, and research" },
    { name: "Psychology", for: "Learners interested in human behavior, counseling, HR, and social services" },
    { name: "Sociology", for: "Those interested in social research, community development, and NGO work" }
  ];

  const jobRoles = [
    "Content Writer/Editor",
    "HR Executive",
    "Social Media Manager",
    "Public Relations Assistant",
    "Education & Training Coordinator",
    "Social Worker",
    "Research Assistant",
    "NGO Program Manager",
    "Customer Success Specialist",
    "Policy Analyst (entry level)",
    "Journalism roles (editorial, reporting)"
  ];

  const industries = [
    "Education & Teaching",
    "Media & Journalism",
    "NGOs & Social Development",
    "Corporate Communications",
    "Public Administration",
    "Human Resources",
    "Content Creation & Digital Media"
  ];

  const admissionSteps = [
    { step: 1, title: "Fill Application Form", desc: "Provide basic details, academic history, and (if applicable) work experience." },
    { step: 2, title: "Pay Application / Registration Fee", desc: "This creates your application profile." },
    { step: 3, title: "Upload Documents", desc: "10th & 12th marksheets, ID proof, photo, etc." },
    { step: 4, title: "Pay Programme Fee (Full or Semester-wise)", desc: "Choose your payment mode (EMI / semester)." },
    { step: 5, title: "Confirm Admission", desc: "Once documents & payment are verified, university issues enrolment confirmation and LMS access." }
  ];

  return (
    <div>
      <Head>
        <title>Manipal Online BA | Bachelor of Arts | MUJ Online</title>
        <meta name="description" content="Explore UGC-approved Online BA from Manipal University Jaipur. 3-year flexible program with multiple specializations. Apply now for recognized degree." />
        <meta name="keywords" content="Manipal Online BA, MUJ BA Online, Online BA, Bachelor of Arts Online, UGC Approved BA, NAAC A+ BA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/muj-ba-online" />
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
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer "
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
                alt="Manipal Online BA"
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
                    
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block">Online BA</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Transform Your Career
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    UGC-approved 3-year online BA program with flexible learning, multiple specializations, and career-focused curriculum from NAAC A+ accredited Manipal University Jaipur.
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
                </motion.div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal University Jaipur & Online BA Overview
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
                    The <strong>Online BA</strong> is:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>A 3-year undergraduate degree (6 semesters)</li>
                    <li>Offered fully online via the Online Manipal platform</li>
                    <li>Designed for students after 10+2 and working professionals who want structured arts education with flexibility</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                    The programme focuses on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Humanities and social sciences fundamentals</li>
                    <li>Critical thinking and analytical skills</li>
                    <li>Communication, research and writing abilities</li>
                    <li>Modern skill-building for contemporary careers</li>
                  </ul>
                </div>
              </div>

              {/* At a Glance */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Manipal Online BA at a Glance</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaGraduationCap className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600 text-sm">3 Years (6 Semesters)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaMoneyBillWave className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Total Fee</h4>
                    <p className="text-gray-600 text-sm">Affordable with EMI options</p>
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
                  Why Choose Manipal Online BA?
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
                        <li>Literature, political science, economics</li>
                        <li>Psychology, sociology, communication skills</li>
                        <li>Research methods and analytical thinking</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-2">
                        This gives students a strong foundation in humanities combined with modern skills that employers actually look for.
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
                        Students can choose specializations such as:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>English</li>
                        <li>Political Science</li>
                        <li>Economics</li>
                        <li>Psychology</li>
                        <li>Sociology</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        This will help you shape your BA in accordance with your career goal, be it civil services, teaching, corporate roles, or social work.
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
                  Eligibility Criteria for Manipal Online BA
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Eligibility:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Completed 10+2 from a recognized national or state board in any stream</li>
                      <li>Minimum marks: 40% aggregate or above</li>
                      <li>Relaxation for reserved categories (as per university norms)</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      <strong>No Age Limit:</strong> All age groups can apply. Foreign/NRI students are eligible with equivalent qualifications.
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
                      <li>Access to e-books & digital library</li>
                      <li>Dedicated student mentor support</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                    <p className="text-gray-700">
                      <strong>This structure makes it ideal for:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Students who want to avoid relocation/hostel costs</li>
                      <li>Working professionals wanting a degree upgrade without quitting their job</li>
                      <li>UPSC/SSC aspirants preparing for competitive exams</li>
                      <li>Career switchers looking to formalize their education</li>
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
                  Manipal Online BA Fees & Payment Structure
                </h2>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        <th className="px-4 py-4 text-left font-semibold">Category</th>
                        <th className="px-4 py-4 text-left font-semibold">Program Features</th>
                        <th className="px-4 py-4 text-left font-semibold">Payment Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Indian Students</td>
                        <td className="px-4 py-4 text-gray-700">Affordable fee structure with quality education</td>
                        <td className="px-4 py-4 text-gray-700">Easy EMIs, Pay-per-semester mode</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Financial Aid</td>
                        <td className="px-4 py-4 text-gray-700">No-cost EMI plans available</td>
                        <td className="px-4 py-4 text-gray-700">Scholarships for eligible students</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Value</td>
                        <td className="px-4 py-4 text-gray-700">High ROI with recognized degree</td>
                        <td className="px-4 py-4 text-gray-700">Flexible payment options</td>
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
                    <li>No-cost EMI plans available through partner financial institutions</li>
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
                  Manipal Online BA Syllabus & Specializations (Overview)
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Core Subjects (Typical Themes Across Semesters)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Foundation courses in humanities and social sciences</li>
                    <li>Communication and writing skills</li>
                    <li>Research methodology</li>
                    <li>Critical thinking and analytical skills</li>
                    <li>Contemporary social issues</li>
                    <li>Indian and world history/culture</li>
                    <li>Environmental studies</li>
                    <li>Computer applications</li>
                  </ul>
                  <p className="text-gray-700 mt-4 italic">These build a strong arts and humanities foundation.</p>
                </div>

                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Specializations (Available Options)</h3>
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

              {/* Semester-wise Curriculum */}
              <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Semester-Wise Curriculum Overview</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map(semester => (
                    <div key={semester} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="font-bold text-orange-700 mb-3">Semester {semester}</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Core discipline subjects</li>
                        <li>• Foundation courses</li>
                        <li>• Skill enhancement</li>
                        <li>• Elective subjects</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Career Scope Section */}
          <section id="career" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career Scope After Manipal Online BA
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 sm:p-8 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-orange-600" />
                    1) Job Roles After Online BA
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
                    2) Industries That Commonly Hire BA Graduates
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {industries.map((industry, idx) => (
                      <li key={idx}>{industry}</li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-white rounded-lg p-4 border border-orange-200">
                    <p className="text-gray-700">
                      <strong>Online BA is especially useful for:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Students who want to pursue MA/MBA later</li>
                      <li>UPSC/SSC aspirants preparing for competitive exams</li>
                      <li>Working professionals who want to upgrade their qualifications</li>
                      <li>Career switchers moving into education, media, or social work</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Higher Studies Options */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Higher Studies Options After BA</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "MA Programs", desc: "Specialize in your chosen field" },
                    { title: "MBA", desc: "Move into management roles" },
                    { title: "MSW", desc: "Social work and community development" },
                    { title: "B.Ed", desc: "Teaching and education careers" },
                    { title: "Law (LLB)", desc: "Legal profession" },
                    { title: "Mass Communication", desc: "Media and journalism" },
                    { title: "Competitive Exams", desc: "UPSC, SSC, Banking" },
                    { title: "Research Programs", desc: "M.Phil, Ph.D opportunities" }
                  ].map((option, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <h4 className="font-bold text-blue-700 mb-2">{option.title}</h4>
                      <p className="text-sm text-gray-600">{option.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Choose Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Who Should Choose Manipal Online BA?
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This program is ideal for:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li><strong>Students who want flexibility</strong> - Perfect for those who cannot relocate or attend full-time college</li>
                  <li><strong>UPSC/SSC aspirants</strong> - The subjects support competitive exam preparation</li>
                  <li><strong>Students aiming for MA/MBA</strong> - Strong foundation for postgraduate studies</li>
                  <li><strong>Working professionals</strong> - Upgrade your profile while keeping your job</li>
                  <li><strong>Career switchers</strong> - Specializations give direction for new opportunities in education, media, social work, etc.</li>
                  <li><strong>Those interested in humanities</strong> - Build a career in writing, research, teaching, or social sciences</li>
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
                  How UNIFOST Helps You with Manipal Online BA
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing a university is not just about clicking "Apply Now." Students often struggle with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li>Comparing Manipal with other UGC-approved online BAs</li>
                  <li>Understanding which specialization fits their career goals</li>
                  <li>Evaluating fees vs ROI for arts degrees</li>
                  <li>Managing work + study balance</li>
                  <li>Planning higher studies after BA</li>
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
                        <p className="text-gray-700 font-semibold mb-1">2. Compare Manipal Online BA with other top online BA options</p>
                        <p className="text-gray-600 text-sm">on Fees, Specializations, Career services, Flexibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-semibold mb-1">3. Choose the right specialization</p>
                        <p className="text-gray-600 text-sm">(English, Political Science, Economics, Psychology, Sociology) based on your goals.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-semibold mb-1">4. Get step-by-step support in the admission process</p>
                        <p className="text-gray-600 text-sm">from shortlisting to document upload and fee planning.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-semibold mb-1">5. Career counseling and roadmap planning</p>
                        <p className="text-gray-600 text-sm">for higher studies or job opportunities after BA.</p>
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
                  FAQs About Manipal Online BA
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
            </div>
          </section>

          {/* Final Thoughts Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                  The Manipal Online BA is a strong choice for students and professionals who want:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg mb-8 text-left max-w-2xl mx-auto">
                  <li>A recognized, flexible arts degree</li>
                  <li>Humanities foundation + modern skill development</li>
                  <li>Reasonable fees compared to many private on-campus programs</li>
                  <li>The option to work, prepare for competitive exams, or pursue side projects while studying</li>
                  <li>Multiple specialization options for targeted career paths</li>
                </ul>
                <p className="text-lg sm:text-xl leading-relaxed mb-8">
                  But every learner is different. The best choice depends on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg mb-8 text-left max-w-2xl mx-auto">
                  <li>Your career aspirations (corporate, teaching, civil services, etc.)</li>
                  <li>Your budget and payment preferences</li>
                  <li>Your current stage (student / working / competitive exam preparation)</li>
                  <li>Your interest in specific humanities disciplines</li>
                </ul>
                <p className="text-xl sm:text-2xl font-semibold">
                  That's where platforms like UNIFOST make a difference - by helping you turn a confusing decision into a clear, confident one.
                </p>
                <div className="mt-8">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </section>

        
                {/* Final Thoughts Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
                      <p className="text-lg sm:text-xl leading-relaxed mb-6">
                        The Manipal Online BA is a strong choice for students and professionals who want:
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
                          className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
        
                {/* Accreditation Section */}
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
                       {/* Enhanced Footer */}
                       <div>
                              <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden mt-8">
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
                               </div>
                       {openModal && (
                                <ApplyEnquiryModal
                                  open={!!openModal}
                                  onOpenChange={(v) => !v && setOpenModal(null)}
                                  title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                                  subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                                  imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
                                  universityName="Manipal University Jaipur"
                                  defaultProgram="MBA"
                                  formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                                />
                              )}

        </main>
      </div>
      
      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
          universityName="Manipal University Jaipur"
          defaultProgram="BA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

export default ManipalBAPage;