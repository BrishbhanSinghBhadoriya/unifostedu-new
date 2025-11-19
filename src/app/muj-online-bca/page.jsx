'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaBars, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaTimes, FaCheckCircle, FaGraduationCap, FaMoneyBillWave, FaClock, FaLaptop, FaChartLine, FaHandshake, FaAward, FaChevronDown } from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import AccreditationSection from '@/components/AccreditationSection';

const MUJBCAPage = () => {
  const [openModal, setOpenModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Navigation Section Data (for sidebar or scroll-tabs)
  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'highlights', label: 'Key Highlights' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'fees', label: 'Fees Structure' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'learning', label: 'Learning Experience' },
    { id: 'careers', label: 'Career Scope' },
    { id: 'admission', label: 'Admission Process' },
    { id: 'unifost', label: 'How UNIFOST Helps' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="poppins overflow-x-hidden flex">
      <Head>
        <title>Manipal Online BCA | Bachelor of Computer Applications | MUJ Online</title>
        <meta name="description" content="Explore UGC-approved Online BCA from Manipal University Jaipur. Flexible, affordable, and industry-relevant program for future-ready tech careers. Free UNIFOST counseling." />
        <meta name="keywords" content="Manipal Online BCA, MUJ BCA Online, Online BCA, Bachelor of Computer Applications, UGC Approved BCA, NAAC A+ BCA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/muj-bca-online" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      {/* Header */}
      <header className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal University Logo" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-600">
                
              </h1>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu" className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                <FaBars className="w-5 h-5 text-gray-700" />
              </button>
              <a href="tel:+917042867717" className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors">
                <FaPhone className="text-base sm:text-lg" />
                <span className="hidden lg:inline">+91-7042867717</span>
                <span className="lg:hidden">Call</span>
              </a>
              <a href="tel:+917042867717" className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors">
                <FaPhone className="text-base" />
              </a>
              <button onClick={() => setOpenModal({ type: 'apply' })} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap">
                <span className="hidden sm:inline">Enquire Now</span>
                <span className="sm:hidden">Enquire</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      <ApplyEnquiryModal open={!!openModal} onOpenChange={(o) => setOpenModal(o ? { type: 'apply' } : null)} universityName="Manipal University Online" defaultProgram="BCA" formType="general" imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp" />

      {/* --- Desktop Sidebar Navigation --- */}
      <aside className="fixed hidden lg:flex flex-col top-20 w-64 h-[calc(100vh-5rem)] px-4 py-8 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
        <h3 className="text-lg font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">Page Contents</h3>
        <ul className="space-y-3 flex-1">
          {navSections.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  const section = document.getElementById(item.id);
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors duration-200 text-left cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* --- Mobile Sidebar/Drawer Navigation --- */}
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
                <h3 className="text-lg font-bold text-orange-600">Page Contents</h3>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <FaTimes className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <ul className="space-y-3 flex-1">
                {navSections.map((item) => (
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
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      {/* --- End Sidebars --- */}

      <main className="flex-1 min-w-0 lg:pl-64">
        {/* Hero Section */}
        <section className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] overflow-hidden pt-14 sm:pt-16 lg:pt-20">
          <div className="absolute inset-0">
            <Image src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp" alt="Manipal Online BCA" fill className="object-cover object-center" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center">
            <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 md:py-12 lg:py-20">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal Logo" className="h-6 sm:h-8 w-auto" />
                  <span className="font-semibold tracking-wider">Online BCA</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block">Manipal Online BCA</span>
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Everything You Need to Know</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  UGC-approved, 3-year online BCA program with trending specializations, 24x7 student support and industry-ready digital learning experience from NAAC A+ accredited Manipal University Jaipur.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button onClick={() => setOpenModal({ type: 'apply' })} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">Enquire Now</button>
                  <a href="tel:+917042867717" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 border border-white/30"><FaPhone className="inline mr-2" />Call Now</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manipal Online BCA – Complete Guide</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Everything you need to know before choosing the Online BCA program from Manipal University Jaipur (MUJ).
              </p>
            </div>
            <div className="space-y-8 text-gray-800 leading-relaxed">
              <p><strong>Why Online BCA Is Becoming No.1 in India:</strong> The technology revolution means every sector—IT, fintech, healthcare, logistics, e-commerce—needs highly skilled tech professionals. BCA remains one of the most sought-after undergraduate degrees for those pursuing IT and software careers. Rising college fees, relocation costs, and the need to balance academics and skills make online BCA programs popular for their flexibility, affordability, and industry-aligned curriculum.</p>
              <p><strong>Why Manipal University Jaipur (MUJ)?</strong> With NAAC A+ accreditation, a modern LMS, experienced faculty, and UGC (DEB)-entitlement, Manipal Online BCA is trusted by students nationwide. MUJ’s online BCA offers live classes, recordings, digital library, quizzes, proctored exams, and 24/7 support on the Online Manipal platform — making your degree equally valid for jobs, government exams, and further studies as any regular degree.</p>
              <p>This professional guide covers eligibility, fees, syllabus, career scope, and detailed insights to help you decide if Manipal Online BCA is right for your future.</p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="bg-gradient-to-r from-cyan-50 to-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 items-center">
            {/* Left */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Key Highlights of Manipal Online BCA</h3>
              <ul className="list-disc ml-5 text-lg space-y-2">
                <li>UGC-Entitled and NAAC A+ university – degree is globally valid</li>
                <li>Industry-aligned and constantly updated syllabus</li>
                <li>Modern digital learning platform (live + recorded sessions, e-library)</li>
                <li>Specializations in Data Science, AI, Full Stack Development, Cybersecurity, Business Analytics, Cloud Computing</li>
                <li>Smart LMS, virtual labs, hands-on coding and projects</li>
                <li>Proctored online exams, 24/7 student support</li>
                <li>Affordable fee structure with multiple EMI and scholarship options</li>
                <li>Strong Manipal brand value and placement guidance</li>
              </ul>
              <div className="mt-6">
                <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Enquire Now</Button>
              </div>
            </div>
            {/* Right Hero Banner Image */}
            <div className="hidden lg:block flex-shrink-0 w-96 rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
              <Image  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" alt="Online BCA - Student" width={500} height={630} className="object-cover" />
            </div>
          </div>
        </section>

        {/* At a Glance/Program Details Section */}
        <section id="program-details" className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Manipal Online BCA at a Glance</h3>
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
            <div className="mt-8">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Enquire Now</Button>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section id="eligibility" className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Eligibility Criteria</h3>
            <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
              <li>Passed 10+2 with mathematics/statistics/business maths/computer science OR any stream with foundational Mathematics</li>
              <li>Minimum 50% aggregate marks (5% relaxation for SC/ST/OBC as per university policy)</li>
              <li>No age bar – students of all ages can apply</li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Check Eligibility</Button>
            </div>
          </div>
        </section>

        {/* Fees Structure Section */}
        <section id="fees" className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Manipal Online BCA Fees</h3>
            <ul className="list-disc ml-6 text-gray-700 mb-4 text-lg space-y-1">
              <li>Total course fee: <strong>₹1,35,000</strong> (can be paid per semester, i.e., ₹22,500/sem)</li>
              <li>Multiple EMI plans – including No-Cost EMI via financing partners</li>
              <li>Scholarships available for eligible students</li>
            </ul>
            <div className="text-sm text-gray-600 mt-2">*Additional benefits: EMI, scholarships, and transparent fee policy. No hidden charges for materials or exams.</div>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Check Fees & Offers</Button>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Manipal Online BCA Syllabus</h3>
            <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1 mb-8">
              <li><strong>Semester-wise core subjects:</strong> Fundamentals of programming, modern web, networking, data science, AI, software engineering, databases, and contemporary computing tools.</li>
              <li><strong>Elective specializations:</strong> Data Science, Artificial Intelligence, Full Stack Development, Business Analytics, Cybersecurity, Cloud Computing – so you can align your study with your career goals.</li>
              <li>Virtual coding labs for practice & debugging. Assignments, quizzes, and live projects help strengthen your practical skills.</li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Download Detailed Syllabus</Button>
            </div>
          </div>
        </section>

        {/* Learning Experience Section */}
        <section id="learning" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Learning Experience at Manipal Online BCA</h3>
            <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1 mb-8">
              <li>Modern and easy-to-use digital LMS with all e-books, videos, and assignments in one place</li>
              <li>Attend interactive live classes or learn via recorded sessions—flexibility for all schedules</li>
              <li>Virtual Labs for programming-based subjects to practice coding and debugging skills</li>
              <li>Continuous evaluation: assignments, quizzes, projects, regular progress checks</li>
              <li>Proctored online exams: give your exams from anywhere, securely</li>
              <li>Career support: placement portal, resume building, mock interviews, workshops</li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Explore Learning Features</Button>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Career Opportunities After Manipal Online BCA</h3>
            <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1 mb-6">
              <li>IT and software companies, MNCs, startups, EdTech, data analytics & cybersecurity firms</li>
              <li>Popular job roles: Software Developer, Web Developer, Data Analyst, System/Network Admin, Cloud Associate, QA Tester, UI/UX Associate, IT Executive</li>
              <li>Salary range: varies with skills & projects; strong growth for students with skills, internships & project work</li>
              <li>Eligible for postgraduate: MCA, MBA, MSc-CS, Data Science, Cloud, AI/ML specializations</li>
              <li>Degree valid for private and government jobs</li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Get Career Guidance</Button>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section id="admission" className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Admission Process for Manipal Online BCA</h3>
            <ol className="ml-6 text-gray-700 text-lg mb-6 space-y-1 list-decimal">
              <li>Submit application form</li>
              <li>Upload 10th and 12th marksheets, ID proof, and a passport-size photo</li>
              <li>Pay registration fee</li>
              <li>University verifies documents</li>
              <li>Pay semester fee/set up EMI</li>
              <li>Get LMS credentials within 3–5 days</li>
            </ol>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Apply Now</Button>
            </div>
          </div>
        </section>

        {/* UNIFOST Support Section */}
        <section id="unifost" className="bg-[#f9f6ff] py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Why Choose Manipal Online BCA with UNIFOST?</h3>
            <ul className="list-disc list-inside max-w-2xl mx-auto text-gray-700 text-lg mb-8 text-left">
              <li>1:1 Career Counselling – clarify your interests, strengths and goals to find the best fit</li>
              <li>University comparison for an ideal match—Manipal and other top options</li>
              <li>End-to-end application and fee planning support</li>
              <li>Personalized roadmap for internships, skills, and certifications</li>
              <li>Lifelong support for higher studies (MCA, MBA, Data Science, etc.) and job search</li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => setOpenModal({ type: 'apply' })} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">Get Free Counseling</Button>
            </div>
            <div className="mt-10 mx-auto max-w-3xl text-left text-sm text-blue-800 bg-blue-50 p-5 rounded-xl">
              <p>
                <strong>Is Manipal Online BCA Worth It?</strong><br/>
                Yes – Manipal Online BCA is UGC-approved, delivered by a NAAC A+ university, industry-aligned, and globally recognized. The flexible online format, trending specializations, and strong placement ecosystem make it one of the best online BCA choices in India.
                <br/><br/>
                <strong>Still unsure which program or specialization is right for you?</strong><br/>
                Book a free UNIFOST counseling session and get professional, unbiased advice before taking the next step in your career.
              </p>
            </div>
          </div>
        </section>

      
              {/* Final Thoughts Section */}
              <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-6">
                      The Manipal Online BCA is a strong choice for students and professionals who want:
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
              Manipal Online has achieved impressive placement outcomes across domains. Graduates from online MBA, online MCA, and online BCA programs have secured roles in management, IT, consulting, finance, and marketing.
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
  );
};

export default MUJBCAPage;
