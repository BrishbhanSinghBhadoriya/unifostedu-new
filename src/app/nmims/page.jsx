'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBookOpen,
  FaUserTie,
  FaGraduationCap,
  FaGlobe,
  FaAward,
  FaCertificate,
  FaUsers,
  FaStar,
  FaLaptop,
  FaHeadset,
  FaBuilding,
} from "react-icons/fa";
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const Nmims = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const sliderImages = [
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327722/nmims_banner1_rjvczo.jpg',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327722/nmims_banner2_vwnvlf.jpg',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327722/nmims_banner3_tatyhr.jpg',
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOnclickEnquiry = (programName) => {
    setOpenModal({ type: 'enquiry', program: programName });
  };

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 from a recognized board with minimum 50% marks",
      fees: "₹1,45,000",
      specialization: "General Management, Digital Marketing, Finance, Human Resources",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "Bachelor of Business Administration (BBA) in NMIMS Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 with commerce stream and minimum 50% marks",
      fees: "₹94,000",
      specialization: "Accounting, Finance, Taxation, Banking",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      alt: "Bachelor of Commerce (B.Com) in NMIMS Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline with minimum 50% marks",
      fees: "₹1,44,000",
      specialization: "Finance, Marketing, Human Resources, Operations, Business Analytics, International Business, Digital Marketing, Supply Chain Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "Master of Business Administration (MBA) in NMIMS Online",
    },
    {
      course: "Master of Business Administration (WX)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 55% marks and 3 year Experience",
      fees: "₹4,00,000",
      specialization: "Applied Finance, Digital Marketing, Leadership & Strategy, Marketing, Operations & Supply Chain",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "Master of Business Administration (WX) in NMIMS Online",
    },
  ];

  const faqData = [
    {
      question: "Is NMIMS Online degree valid and recognized?",
      answer: "Yes, NMIMS Online degrees are UGC-entitled and NAAC A++ accredited. They hold the same value as regular degrees and are recognized by employers and for higher education globally.",
    },
    {
      question: "What is the eligibility criteria for NMIMS Online programs?",
      answer: "For UG programs like BBA and B.Com, candidates need 10+2 with minimum 50% marks. For PG programs like MBA, a graduation degree with minimum 50% marks is required. MBA (WX) requires 3 years of work experience.",
    },
    {
      question: "What is the fee structure for NMIMS Online courses?",
      answer: "B.Com costs ₹94,000, BBA costs ₹1,45,000, MBA costs ₹1,44,000, and MBA (WX) costs ₹4,00,000. The fees can be paid in installments as per the university's payment plan.",
    },
    {
      question: "Can I work while studying at NMIMS Online?",
      answer: "Absolutely! NMIMS Online programs are designed for working professionals with flexible learning schedules, recorded sessions, and weekend classes that allow you to balance work and studies effectively.",
    },
    {
      question: "Does NMIMS Online provide placement assistance?",
      answer: "Yes, NMIMS Global Online offers dedicated career services including resume building, interview preparation, placement assistance, and access to exclusive job opportunities through their strong industry network.",
    },
    {
      question: "What is the mode of examination for NMIMS Online students?",
      answer: "All examinations and assessments are conducted online through NMIMS's secure Learning Management System (LMS). Students can take exams from anywhere with proper proctoring and monitoring.",
    },
    {
      question: "How are classes conducted in NMIMS Online programs?",
      answer: "Classes are conducted through a combination of live interactive sessions with faculty and pre-recorded video lectures. Students also get access to comprehensive study materials, e-books, and assignments through the LMS.",
    },
    {
      question: "What makes NMIMS Online different from other universities?",
      answer: "NMIMS stands out with its NAAC A++ accreditation (highest grade), 1.25L+ students across 600+ cities, 4.7/5 student rating, strong industry connections, personalized mentorship, and globally recognized degrees.",
    },
  ];

  return (
    <>
      <Head>
        <title>NMIMS Online Degrees | UGC Entitled & NAAC A++ Accredited Programs</title>
        <meta name="description" content="NMIMS Global Online offers UGC-entitled, NAAC A++ accredited online programs including MBA, BBA, B.Com. Flexible learning with global recognition. Join 1.25L+ students." />
        <meta name="keywords" content="NMIMS Online, NMIMS Global, Online MBA NMIMS, BBA Online NMIMS, B.Com NMIMS, UGC approved online courses, NAAC A++ university, NMIMS distance learning" />
        <link rel="canonical" href="https://unifostedu.com/nmims" />
        <meta property="og:title" content="NMIMS Online Degrees | Accredited UG & PG Programs" />
        <meta property="og:description" content="UGC-Entitled & NAAC A++ accredited online courses from NMIMS Global. Learn anytime, anywhere with flexible UG & PG programs." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style jsx>{`
        .nmims-font { 
          font-family: 'Montserrat', 'Open Sans', sans-serif; 
        }
        * { 
          box-sizing: border-box; 
        }
        body { 
          overflow-x: hidden; 
        }
      `}</style>

      <div className="nmims-font overflow-x-hidden">
        {/* Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327722/nmims_logo_rjlpi8.webp" 
                  alt="NMIMS Logo" 
                  className="h-12 w-50 sm:h-10 lg:h-12" 
                />
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-purple-600 transition-colors"
                > 
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                <a
                  href="tel:+917042646766"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full text-purple-600 hover:bg-purple-200 transition-colors"
                >
                  📞
                </a>
                
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-[#7b1fa2] hover:bg-purple-800 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Image Slider Section */}
        <section id='Home' className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-16">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image 
                src={sliderImages[currentSlide]} 
                alt={`NMIMS University Slide ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Hero Section */}
        <HeroSection
          universityName="About NMIMS Global Online"
          universityNameClass="text-[#7b1fa2]"
          location="Mumbai, Maharashtra, India"
          type="Deemed-to-be University"
          nirfRank="24" 
          rating="4.7/5"
          description="UGC Entitled | NAAC A++ Accredited | Flexible Online Learning"
          description2={`
            NMIMS (SVKM's Narsee Monjee Institute of Management Studies) Global is a premier education institute offering UGC-entitled and NAAC A++ accredited online programs with 
            flexible learning, a vibrant student community, and personalized mentorship. 
            With 1.25L+ students across 600+ cities, NMIMS Global provides world-class education with industry-ready programs.
          `}
          badgeText="NAAC A++ Accredited | UGC Entitled | 1.25L+ Students"
          imgSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp"
          imgAlt="NMIMS Global Online Campus"
          students="1.25L+"
          partners="200+"
          campus="Mumbai Campus"
          highlights={[
            { icon: <FaAward className="text-purple-600" />, text: "NAAC A++ Accredited" },
            { icon: <FaCertificate className="text-purple-600" />, text: "UGC Entitled Degrees" },
            { icon: <FaUsers className="text-purple-600" />, text: "1.25L+ Students" },
            { icon: <FaStar className="text-purple-600" />, text: "4.7/5 Rating" },
          ]}
        />

        {/* Courses Section with Tabs */}
        <section id='courses' className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                NMIMS Global Online Courses
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore undergraduate and postgraduate online degree programs with UGC recognition and NAAC A++ accreditation. 
                Experience quality, flexibility, and career-focused education from India's top university.
              </p>
            </motion.div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8 sm:mb-12">
                <Tabs.List className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200">
                  <Tabs.Trigger 
                    value="all"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='all' ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'}`}
                  >
                    All Programs
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="ug"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='ug' ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'}`}
                  >
                    Undergraduate
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="pg"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='pg' ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'}`}
                  >
                    Postgraduate
                  </Tabs.Trigger>
                </Tabs.List>
              </div>

              <Tabs.Content value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {[...ugCourses, ...pgCourses].map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="NMIMS Global Online"/>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="ug">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {ugCourses.map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="NMIMS Global Online"/>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="pg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {pgCourses.map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="NMIMS Global Online"/>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>

        {/* Course Tables */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* UG COURSES TABLE */}
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
              Undergraduate (UG) Courses
            </h2>
            <div className="overflow-x-auto mb-16">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Course</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                    <th className="px-4 py-2 text-left">Eligibility</th>
                    <th className="px-4 py-2 text-left">Fees</th>
                    <th className="px-4 py-2 text-left">Specialization</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {ugCourses.map((course, index) => (
                    <tr key={index} className="border-t hover:bg-blue-50 transition-all duration-200">
                      <td className="px-4 py-3 font-medium text-gray-800">{course.course}</td>
                      <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                      <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                      <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                      <td className="px-4 py-3 text-gray-700">{course.specialization}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setOpenModal({ type: 'enquiry', program: course.course })}
                          className="bg-[#7b1fa2] text-white px-3 py-1 rounded-md hover:bg-purple-700 transition-colors text-sm cursor-pointer"
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PG COURSES TABLE */}
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
              Postgraduate (PG) Courses
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Course</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                    <th className="px-4 py-2 text-left">Eligibility</th>
                    <th className="px-4 py-2 text-left">Fees</th>
                    <th className="px-4 py-2 text-left">Specialization</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {pgCourses.map((course, index) => (
                    <tr key={index} className="border-t hover:bg-green-50 transition-all duration-200">
                      <td className="px-4 py-3 font-medium text-gray-800">{course.course}</td>
                      <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                      <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                      <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                      <td className="px-4 py-3 text-gray-700">{course.specialization}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleOnclickEnquiry(course.course)}
                          className="bg-[#7b1fa2] text-white px-3 py-1 rounded-md hover:bg-purple-700 transition-colors text-sm cursor-pointer"
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327723/nmims_form_iaqoru.webp"
              universityName="NMIMS Global Online"
              defaultProgram={openModal.program || "MBA"}
              formType={openModal.type}
            />
          )}
        </section>

        {/* Accreditation Section */}
        <div>
          <AccreditationSection
            title="Why Choose NMIMS Global Online?"
            description="NMIMS Global Online offers NAAC A++ accredited and UGC entitled online degree programs, trusted by 1.25L+ students across 600+ cities, with excellent student ratings and strong industry connections."
            stats={[]} 
            benefits={[
              {
                title: "1.25L+ Students",
                description: "Join a thriving community of over 1.25 lakh learners across India and abroad.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                          </svg>`,
              },
              {
                title: "600+ Cities",
                description: "Access learning from 600+ cities with NMIMS Global's digital reach.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>`,
              },
              {
                title: "NAAC A++ Grade",
                description: "Recognized with the highest NAAC A++ grade accreditation, ensuring global trust.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                          </svg>`,
              },
              {
                title: "4.7/5 Rating",
                description: "Highly rated by students with an impressive 4.7/5 score.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                          </svg>`,
              },
              {
                title: "Live + Recorded Classes",
                description: "Flexible learning with expert-led interactive sessions and recorded content.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                          </svg>`,
              },
              {
                title: "Personalized Mentorship",
                description: "Get individual guidance from industry experts and dedicated mentors.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                          </svg>`,
              },
              {
                title: "Industry Recognition",
                description: "Recognized by top corporates across industries for quality education.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 4h16v16H4z"></path>
                          </svg>`,
              },
              {
                title: "Career Support",
                description: "Dedicated placement cell with resume building and interview preparation.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                          </svg>`,
              },
            ]}
            accreditations={[
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC A++" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp", alt: "AIU", name: "AIU" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327643/nba_n9wp3z.webp", alt: "NBA", name: "NBA" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp", alt: "QS", name: "QS Ranking" },
            ]}
            internationalRecognition={[]}
            successStories={[]}
          />
        </div>

        {/* Admission Procedure */}
        <section id='Admission' className="relative py-20 bg-white">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
                     
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="w-24 h-1 bg-[#7b1fa2] mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                A simple, transparent, and student-friendly admission process designed to help you begin your learning journey smoothly.
              </p>
            </motion.div>
                     
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
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-[#7b1fa2] z-0 rounded-full"></div>
                     
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
                    <div className="bg-[#7b1fa2] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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

        {/* Quick Comparison Table */}
        <section id='QuickComparison' className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#7b1fa2]">Online vs Regular</span> Degree Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#7b1fa2] text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">NMIMS Online</th>
                    <th className="p-4 text-center">Regular Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['UGC Recognition', '✅ Yes', '✅ Yes'],
                    ['NAAC Grade', '✅ A++ Grade', '✅ A++ Grade'],
                    ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
                    ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
                    ['Location', '✅ From Anywhere', '❌ Campus Only'],
                    ['Cost', '✅ More Affordable', '❌ Higher Fees'],
                    ['Placement Support', '✅ Available', '✅ Available']
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

        {/* Certificate Section */}
        <section className="bg-[#7b1fa2] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Image width={500} height={400} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327723/nmims-certi_crgspk.webp" alt="NMIMS Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Recognized Online Degree from NMIMS University
              </h2>
              <p className="mb-6 text-lg">
                Earn a prestigious UGC-entitled degree from NMIMS, one of India's top-ranked universities, 
                designed for working professionals and students aspiring to build global careers.
              </p>
              <h3 className="text-xl font-semibold mb-2">Benefits of NMIMS Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>NAAC A++ Accredited University</li>
                <li>Live Interactive + Recorded Sessions</li>
                <li>Strong Industry-Aligned Curriculum</li>
                <li>Dedicated Career & Placement Assistance</li>
                <li>Personalized Mentorship Program</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about NMIMS Global Online Programs
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
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-purple-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-purple-700"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
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

        {/* Hiring Partners */}
        <section id='Partner' className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
              <p className="text-xl text-gray-600 mt-2">Top Hiring Partners of NMIMS</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327033/aditya-birla_dln4ym.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/airtel_odc32s.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327033/aurobindo_myymk4.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/bajaj-allianz_w5copv.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bharti-airtel_hoajg1.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bosch_psoaob.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/cipla_l21bms.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/coca-cola_krqtyj.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327108/cyient_o0zzp3.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327128/diageo_ezhnzr.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/fedex_ztxmsk.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/himalaya_vworlj.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hinduja_tuhqdi.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icici_1_quita6.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327203/iifl_sihlun.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327203/india-mart_liq79t.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/infosys_vk4d5g.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/maruti_ofcgtx.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nestle_bibwqx.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327851/oyo_u0luvj.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327852/pepsico_lwhvcn.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp",
              ].map((src, i) => (
                <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                  <Image width={100} height={100} loading="lazy" src={src} alt={`Company ${i + 1}`} className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden">
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
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327722/nmims_logo_rjlpi8.webp" alt="NMIMS Logo" className="h-10 w-auto bg-white rounded p-1" />
                    <span className="text-xl font-bold text-[#7b1fa2]">NMIMS</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    UGC-entitled, NAAC A++ accredited online degrees designed for modern learners. 
                    Transform your career with globally recognized programs from NMIMS Global.
                  </p>
                  
                  {/* Social Media */}
                  <div className="flex space-x-4">
                    {[
                      { icon: '📘', label: 'Facebook' },
                      { icon: '📷', label: 'Instagram' },
                      { icon: '🐦', label: 'Twitter' },
                      { icon: '💼', label: 'LinkedIn' }
                    ].map((social, i) => (
                      <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
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
                    {['MBA', 'MBA (WX)', 'BBA', 'B.Com'].map((program, i) => (
                      <li key={i} onClick={() => setOpenModal({ type: 'apply' })} className="hover:text-[#7b1fa2] transition-colors cursor-pointer">
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
                      { name: 'Home', href: '#Home' },
                      { name: 'Courses', href: '#courses' },
                      { name: 'Admissions', href: '#Admission' },
                      { name: 'Placements', href: '#Partner' },
                      { name: 'FAQs', href: '#Faq' },
                      { name: 'Quick Comparison', href: '#QuickComparison' }
                    ].map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="hover:text-[#7b1fa2] transition-colors">
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
                      <a href="tel:+917042646766" className="p-2 rounded-lg hover:bg-purple-900 transition-all duration-200">
                        <span className="text-purple-400">📞</span>
                      </a>
                      <span className="text-sm">+91 7042646766</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="mailto:info@unifostedu.com" className="p-2 rounded-lg hover:bg-purple-900 transition-all duration-200">
                        <span className="text-purple-400">✉️</span>
                      </a>
                      <span className="text-sm">info@unifostedu.com</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-[#7b1fa2] hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </motion.div>
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
                Popular Programs & Specializations – NMIMS Global Online
              </h4>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "BBA General Management - NMIMS Online",
                  "BBA Digital Marketing - NMIMS Online",
                  "BBA Finance - NMIMS Online",
                  "BBA Human Resources - NMIMS Online",
                  "B.Com Accounting - NMIMS Online",
                  "B.Com Finance - NMIMS Online",
                  "B.Com Taxation - NMIMS Online",
                  "B.Com Banking - NMIMS Online",
                  "MBA Finance - NMIMS Online",
                  "MBA Marketing - NMIMS Online",
                  "MBA Human Resources - NMIMS Online",
                  "MBA Operations - NMIMS Online",
                  "MBA Business Analytics - NMIMS Online",
                  "MBA International Business - NMIMS Online",
                  "MBA Digital Marketing - NMIMS Online",
                  "MBA Supply Chain Management - NMIMS Online",
                  "MBA (WX) Applied Finance - NMIMS Online",
                  "MBA (WX) Digital Marketing - NMIMS Online",
                  "MBA (WX) Leadership & Strategy - NMIMS Online",
                  "MBA (WX) Marketing - NMIMS Online",
                  "MBA (WX) Operations & Supply Chain - NMIMS Online"
                ].map((keyword, index) => (
                  <span
                    key={index}
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#7b1fa2] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-purple-500"
                    title={keyword}
                  >
                    {keyword.length > 30 ? `${keyword.substring(0, 30)}...` : keyword}
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
              <p>&copy; {new Date().getFullYear()} NMIMS Global Online. All rights reserved.</p>
              <p className="mt-2 text-xs">UGC-Entitled | NAAC A++ Accredited | Globally Recognized</p>
            </motion.div>
          </div>
        </footer>

        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327723/nmims_form_iaqoru.webp"
            universityName="NMIMS Global Online"
            defaultProgram={openModal.program || "MBA"}
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </div>
    </>
  );
};

export default Nmims;