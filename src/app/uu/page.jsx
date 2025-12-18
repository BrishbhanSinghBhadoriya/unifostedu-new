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
  FaLaptop,
  FaHeadset,
  FaBuilding,
  FaBriefcase,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaTimes,
  FaBars,
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

const SECTION_ITEMS = [
  { id: "Introduction", label: "Introduction" },
  { id: "AboutUs", label: "About Us" },
  { id: "WhyChoose", label: "Why Choose UU Online" },
  { id: "CampusTour", label: "Campus Tour" },
  { id: "ExploreCourses", label: "Explore Online Courses" },
  { id: "KeyHighlights", label: "Key Highlights" },
  { id: "AdmissionDates", label: "Admission Dates" },
  { id: "FeeStructures", label: "Fee Structures" },
  { id: "AdmissionProcess", label: "Admission Process" },
  { id: "UpcomingSessions", label: "Upcoming Sessions" },
  { id: "PlacementPartners", label: "Placement Partners" },
  { id: "PlacementRecords", label: "Placement Records" },
  { id: "StudentReviews", label: "Student Reviews" },
  { id: "FAQs", label: "FAQs" },
];

const UttaranchalUniversity = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Introduction');
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(SECTION_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsSidebarOpen(false);
    }
  };
  const sliderImages = [
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327865/uu_banner_z4cs2w.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327866/uu_banner1_n54uyp.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-banner3_n0pwl6.jpg',
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOnclickEnquiry = (programName) => {
   
    setOpenModal({ type: 'enquiry', program: programName });
  };

  const ugCourses = [
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 pass from a recognized board",
      fees: "₹72,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp",
      alt: "Bachelor of Arts (BA) in Uttaranchal University Online",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 pass from a recognized board",
      fees: "₹1,20,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "Bachelor of Business Administration (BBA) in Uttaranchal University Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 pass from a recognized board",
      fees: "₹1,20,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      alt: "Bachelor of Computer Applications (BCA) in Uttaranchal University Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any field from a recognized university with a minimum of 40% marks in aggregate OR below 40% with eligibility test",
      fees: "₹1,40,000",
      specialization: "Marketing, Digital, Human Resource, Business Analytics, Finance, International Business, Information Technology Management, Logistics & Supply Chain Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "Master of Business Administration (MBA) in Uttaranchal University Online",
    },
    {
      course: "Executive MBA",
      duration: "2 Years",
      eligibility: "Graduation in any field from a recognized university with relevant work experience",
      fees: "₹3,10,000",
      specialization: "Business Analytics, HR Analytics, Finance Analytics, Banking and Finance",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
      alt: "Executive MBA in Uttaranchal University Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduate in Computer Applications/CS/IT/Engineering with 50% marks (45% reserved) OR Graduate with Mathematics at 10+2 or graduation level",
      fees: "₹1,20,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "Master of Computer Applications (MCA) in Uttaranchal University Online",
    },
  ];

  const faqData = [
    {
      question: "What is Uttaranchal University Online?",
      answer: "Uttaranchal University Online is the digital learning platform of Uttaranchal University Dehradun. It offers flexible and affordable online degrees in Dehradun and online courses in Uttarakhand through a modern and easy-to-use online system.",
    },
    {
      question: "Are the online degrees valid?",
      answer: "Yes. All programs are UGC-approved and offered by a NAAC A+ university online. This makes every degree from Uttaranchal University Online valid for jobs, higher studies, and government exams across India.",
    },
    {
      question: "Which courses are available online?",
      answer: "You can choose from many programs, including: Online MBA from Uttaranchal University, Online BBA from Uttaranchal University, Online BCA from Uttaranchal University, Online MCA from Uttaranchal University, Online MCom from Uttaranchal University, and Online BA from Uttaranchal University. These are among the most trusted online degrees in Dehradun and online courses in Uttarakhand.",
    },
    {
      question: "Is Uttaranchal University Online affordable?",
      answer: "Yes. The university offers affordable online degrees in India with flexible EMIs, making quality education accessible for students from all backgrounds.",
    },
    {
      question: "Is this the best online university in Dehradun?",
      answer: "Many students consider Uttaranchal University Online one of the best online university in Dehradun because of its NAAC A+ accreditation, strong academics, and flexible learning system.",
    },
    {
      question: "Is it a top online university in Uttarakhand?",
      answer: "Yes. With high-quality teaching and modern digital tools, the university is widely regarded as a top online university in Uttarakhand.",
    },
    {
      question: "What are the job opportunities after Online MBA?",
      answer: "There are excellent job opportunities after online MBA from Uttaranchal University. Students can pursue careers in management, HR, marketing, finance, operations, and leadership roles across industries.",
    },
    {
      question: "Can working professionals apply?",
      answer: "Absolutely. All programs like the Online MBA, Online MCA, and Online BBA from Uttaranchal University are designed for flexible learning, making them perfect for working professionals.",
    },
    {
      question: "How do I apply for admission?",
      answer: "You can apply directly on the Uttaranchal University Online portal. Choose your course, upload documents, pay the fee, and get quick admission confirmation.",
    },
    {
      question: "Is the degree recognized across India?",
      answer: "Yes. Degrees from Uttaranchal University Dehradun are recognized nationally, making it a respected top online university in India for online education.",
    },
  ];

  return (
    <>
      <Head>
        <title>Uttaranchal University Online | UGC Approved Degrees | Admission 2025</title>
        <meta name="description" content="Uttaranchal University Online offers UGC-approved degrees in MBA, BBA, BCA, MCA, BA, and Executive MBA. Join 50,000+ students with flexible learning, expert faculty, and 100% placement assistance." />
        <meta name="keywords" content="Uttaranchal University Online, UU Online, Online MBA, Online BBA, Online BCA, Online MCA, Executive MBA, UGC approved online courses, Distance Learning India" />
        <link rel="canonical" href="https://unifostedu.com/uttaranchal-university" />
        <meta property="og:title" content="Uttaranchal University Online | UGC Approved Programs" />
        <meta property="og:description" content="Join UU Online for UGC-approved degrees with flexible learning, expert faculty, and placement assistance." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style jsx>{`
        .uu-font { 
          font-family: 'Montserrat', 'Open Sans', sans-serif; 
        }
        * { 
          box-sizing: border-box; 
        }
        body { 
          overflow-x: hidden; 
        }
        .sidebar-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .sidebar-hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="uu-font overflow-x-hidden">
        {/* Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex items-center gap-2 lg:gap-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Toggle menu"
                >
                  <FaBars size={20} />
                </button>
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_logo_bksobh.webp" 
                  alt="Uttaranchal University Logo" 
                  className="h-12 w-50 sm:h-10 lg:h-12" 
                />
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-blue-600 transition-colors"
                > 
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  📞
                </a>
                
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <aside
          className={`fixed top-16 lg:top-20 left-0 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] w-64 px-4 py-6 border-r border-gray-200 bg-white shadow-sm z-50 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:block lg:shadow-none lg:z-40 overflow-y-auto sidebar-hide-scrollbar`}
        >
          <div className="flex items-center justify-between pb-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Page Contents</h3>
            <button
              className="text-gray-500 hover:text-gray-700 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={18} />
            </button>
          </div>
          <nav className="mt-4 space-y-2 overflow-y-auto h-[calc(100%-12rem)] pr-2 sidebar-hide-scrollbar">
            {SECTION_ITEMS.map((item) => { 
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item.id)}
                  className={`w-full text-left text-sm transition-colors rounded-md px-3 py-2 ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
           </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:pl-64">
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
                alt={`Uttaranchal University Slide ${currentSlide + 1}`}
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

        {/* Introduction Section */}
        <section id="Introduction" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Uttaranchal University Online – Introduction
              </h1>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  Uttaranchal University Online is one of the fastest-growing and most trusted platforms for online education in India. It is built on the strong academic base of Uttaranchal University Dehradun, a well-known institution in Uttarakhand. Through Uttaranchal University Online, students from any city can study from home without leaving their job, family, or responsibilities. This is why many learners prefer it when searching for online degrees in Dehradun, online courses in Uttarakhand, or recognized online programs across India.
                </p>
                <p>
                  Located in the beautiful surroundings of Uttarakhand, Uttaranchal University Dehradun has a long history of offering excellent education. Today, through Uttaranchal University Online, the same quality is delivered in a simple, flexible, and affordable format. Many students call it the best online university in Dehradun because it offers a wide range of programs, expert teachers, and an easy-to-use digital platform. Whether you want to study business, technology, commerce, or arts, the university provides some of the best online degrees in Dehradun.
                </p>
                <p>
                  As a top online university in Uttarakhand, Uttaranchal University Uttarakhand is known for high-quality learning and strong academic values. The university offers many popular online programs such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Online MBA from Uttaranchal University</li>
                  <li>Online BBA from Uttaranchal University</li>
                  <li>Online BCA from Uttaranchal University</li>
                  <li>Online MCA from Uttaranchal University</li>
                  <li>Online MCom from Uttaranchal University</li>
                  <li>Online BA from Uttaranchal University</li>
                </ul>
                <p>
                  Students across India trust these programs because they are updated, industry-ready, and designed to help them build strong careers.
                </p>
                <p>
                  The university is also a NAAC A+ university online, which shows its high academic standards. Being a top online university in India, Uttaranchal University Dehradun maintains strong teaching methods, practical learning, and a modern online platform. Students who join Uttaranchal University Online get degrees recognized by employers and respected for their value.
                </p>
                <p>
                  Another strong reason students prefer this university is its affordable online degrees in India. Many universities charge very high fees for online programs, but Uttaranchal University Online keeps its fees affordable so students from all backgrounds can study easily. Whether you choose the Online MBA from Uttaranchal University or the Online BCA from Uttaranchal University, affordability is always a big advantage.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
           
           </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="AboutUs" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                 About Us – Uttaranchal University Online
              </h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  Uttaranchal University Online is the digital learning platform of Uttaranchal University Dehradun, one of the most respected universities in Uttarakhand. The main aim of Uttaranchal University Online is to offer high-quality, flexible, and career-focused education to every student—whether they live in large cities or small rural towns. As a NAAC A+ university online, the university offers programs that match global education standards.
                </p>
                <p>
                  Students choose Uttaranchal University Online because it uses the best digital tools, experienced teachers, and a simple learning system. All the online degrees in Dehradun offered here maintain the same quality as the on-campus programs. Whether it is the Online MBA from Uttaranchal University or the Online BBA from Uttaranchal University, each program is created by experts who understand industry needs.
                </p>
                <p>
                  As a top online university in Uttarakhand, Uttaranchal University Uttarakhand ensures that learning is smooth and accessible. Students can join live classes, watch recorded sessions, download study materials, and attempt exams online. This makes it easy for working professionals, homemakers, or busy students to continue their education.
                </p>
                <p>
                  The university offers many programs, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Online MBA from Uttaranchal University</li>
                  <li>Online BBA from Uttaranchal University</li>
                  <li>Online BCA from Uttaranchal University</li>
                  <li>Online MCA from Uttaranchal University</li>
                  <li>Online MCom from Uttaranchal University</li>
                  <li>Online BA from Uttaranchal University</li>
                </ul>
                <p>
                  These courses are among the most preferred online courses in Uttarakhand, and thousands of students choose them every year.
                </p>
                <p>
                  Because of its strong academic background, many students see Uttaranchal University Online as a top online university in India. It is also a popular choice for people searching for affordable online degrees in India, as the fees are reasonable and the quality is high. The degrees earned here are accepted by employers and universities, making them valuable for career growth.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
          </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section id="WhyChoose" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                 Why Choose Uttaranchal University Online?
              </h2>
              <div className="text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> NAAC A+ University Online</h3>
                  <p>
                    Uttaranchal University Dehradun is graded NAAC A+, which means it meets very high academic standards. Degrees earned through Uttaranchal University Online are respected and globally accepted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Best Online University in Dehradun</h3>
                  <p>
                    Students call it the best online university in Dehradun because it provides strong academics, good faculty, and a modern learning system that is easy to use.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Top Online University in Uttarakhand</h3>
                  <p>
                    Students across the state trust Uttaranchal University Uttarakhand as a top online university in Uttarakhand due to its excellent online education setup.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Wide Range of Online Degrees in Dehradun</h3>
                  <p>You can choose from many programs:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Online MBA from Uttaranchal University</li>
                    <li>Online BBA from Uttaranchal University</li>
                    <li>Online BCA from Uttaranchal University</li>
                    <li>Online MCA from Uttaranchal University</li>
                    <li>Online MCom from Uttaranchal University</li>
                    <li>Online BA from Uttaranchal University</li>
                  </ul>
                  <p className="mt-2">These are among the most popular online degrees in Dehradun and online courses in Uttarakhand.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Job Opportunities After Online MBA</h3>
                  <p>
                    One major benefit is the strong job opportunities after online MBA. The Online MBA from Uttaranchal University prepares students for leadership, management, and corporate careers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Affordable Online Degrees in India</h3>
                  <p>
                    Many students choose this university because it offers truly affordable online degrees in India with flexible fee payment options.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Top Online University in India</h3>
                  <p>
                    Because of its teaching quality and online learning system, the university is seen as a top online university in India.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Modern and Easy Learning</h3>
                  <p>
                    Students get live classes, recordings, online notes, quizzes, and online exams, making Uttaranchal University Online one of the most advanced online courses in Uttarakhand.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Strong Support from Teachers</h3>
                  <p>
                    Faculty from Uttaranchal University Dehradun support students throughout their learning journey. Whether you choose the Online MBA, Online BCA, or Online MCom from Uttaranchal University, you receive full academic guidance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Study Anytime, Anywhere</h3>
                  <p>
                    Students can study from home, office, or any location. This flexibility makes Uttaranchal University Uttarakhand a top choice for working professionals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Campus Tour Section */}
        <section id="CampusTour" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Campus Tour
              </h2>
              <div className="text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed">
                <p>
                  Step into the world of Uttaranchal University Online, where digital learning connects with the beautiful and modern campus of Uttaranchal University Dehradun. Even when you study from home, the energy, quality, and learning environment of the real campus are a big part of your journey. This mix of nature, innovation, and strong academics makes the university one of the best online university in Dehradun, a top online university in Uttarakhand, and a growing top online university in India.
                </p>
                
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Experience the Campus Atmosphere</h3>
                  <p>
                    The real campus of Uttaranchal University Uttarakhand is surrounded by the natural beauty of Dehradun. When you imagine walking through the campus, you see:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Green lawns and peaceful surroundings</li>
                    <li>Modern buildings with smart classrooms</li>
                    <li>Creative spaces that encourage new ideas</li>
                    <li>Faculty areas where teachers prepare online lessons</li>
                    <li>A calm and motivating environment for all students</li>
                  </ul>
                  <p className="mt-2">
                    These campus spaces help create the learning experience you enjoy through Uttaranchal University Online, even if you study from home through online degrees in Dehradun.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Smart Classrooms & Digital Learning Studios</h3>
                  <p>
                    Many online programs—like the Online MBA from Uttaranchal University, Online BBA from Uttaranchal University, and Online BA from Uttaranchal University—are supported by high-tech classrooms and studios on campus.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Smart screens and digital boards</li>
                    <li>Special studios for online teaching</li>
                    <li>High-quality audio and video tools</li>
                    <li>Modern interactive technology</li>
                  </ul>
                  <p className="mt-2">
                    These tools support all online programs, including the Online BCA from Uttaranchal University, Online MCA from Uttaranchal University, and Online MCom from Uttaranchal University.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Advanced Computer Labs</h3>
                  <p>
                    The campus has advanced computer labs that help students in IT-based programs.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Latest and updated software</li>
                    <li>High-speed systems for coding</li>
                    <li>Lab support for online learners</li>
                    <li>Useful tools for BCA, MCA, and MCom courses</li>
                  </ul>
                  <p className="mt-2">
                    This gives online learners practical knowledge, even while they study from home.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Digital Library & Research Spaces</h3>
                  <p>
                    The digital library provides thousands of resources to support all programs.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>E-books, journals, and research papers</li>
                    <li>Online study materials</li>
                    <li>Research help for the Online MBA, Online MCom, and Online BA</li>
                    <li>24×7 digital access from anywhere in India</li>
                  </ul>
                  <p className="mt-2">
                    This makes Uttaranchal University Online one of the best platforms for online degrees in Dehradun.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Virtual Campus Experience</h3>
                  <p>
                    Even when studying remotely, students can experience campus life through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Virtual campus tours</li>
                    <li>Online workshops</li>
                    <li>Live industry guest sessions</li>
                    <li>Interactive webinars</li>
                    <li>Student networking events</li>
                  </ul>
                  <p className="mt-2">
                    These activities help Uttaranchal University Online feel like a real campus for students across India.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">A NAAC A+ University Online</h3>
                  <p>
                    As a NAAC A+ university online, the campus shows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>High academic quality</li>
                    <li>Strong academic systems</li>
                    <li>Modern and well-built infrastructure</li>
                    <li>A supportive and student-friendly environment</li>
                  </ul>
                  <p className="mt-2">
                    These same qualities shape the digital platform, making the university a top online university in Uttarakhand and a trusted choice for affordable online degrees in India.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className='flex justify-center mt-6 border-t pt-4 space-y-3'>
           <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
            </div>
        </section>

        {/* Explore Online Courses Section */}
        <section id="ExploreCourses" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Online Courses
              </h2>
              <div className="text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  At Uttaranchal University Online, you get modern and flexible learning that helps you build a strong future. Whether you want to study business, technology, or humanities, the university offers many online courses in Uttarakhand that match your goals. With the support of Uttaranchal University Dehradun, all programs are credible online degrees in Dehradun, backed by the trust of a NAAC A+ university online and a top online university in India.
                </p>
                
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4"> What Programs Are Available?</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Undergraduate Courses</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Online BBA from Uttaranchal University</strong> – A popular business program that gives you a strong foundation. It is known as one of the best online BBA in Dehradun and across Uttarakhand.</li>
                      <li><strong>Online BCA from Uttaranchal University</strong> – Great for students who enjoy technology. Through CU Online BCA admission, you learn programming, databases, and IT basics.</li>
                      <li><strong>Online BA from Uttaranchal University</strong> – Perfect for students interested in arts, communication, or humanities with a flexible study schedule.</li>
                      <li><strong>Other online degrees in Dehradun</strong> – Includes commerce and related subjects for students who want more options.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Postgraduate / Advanced Courses</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Online MBA from Uttaranchal University</strong> – A top program for future leaders. It is known as one of the best online MBA in Uttarakhand and offers industry projects, leadership training, and great job opportunities after online MBA.</li>
                      <li><strong>Online MCA from Uttaranchal University</strong> – Ideal for tech lovers and considered one of the best programs for IT career growth.</li>
                      <li><strong>Online MCom from Uttaranchal University</strong> – Suitable for students who want to grow in commerce, finance, and business analytics.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4"> Why These Programs Stand Out</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fully online and accessible from anywhere, making it one of the best online university in Dehradun.</li>
                    <li>Designed by experienced teachers from Uttaranchal University Dehradun, a top online university in Uttarakhand.</li>
                    <li>All programs are UGC approved online degrees Uttaranchal University.</li>
                    <li>Flexible learning with live classes, recorded sessions, and online discussion forums.</li>
                    <li>Wide range of subjects from business to technology, offering something for everyone.</li>
                    <li>Career-focused programs that match the current job market.</li>
                    <li>Affordable fees, offering truly affordable online degrees in India.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4"> How to Get Started</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li><strong>Choose your course</strong> – Business (BBA, MBA), tech (BCA, MCA), or arts (BA) at Uttaranchal University Online.</li>
                    <li><strong>Submit your application</strong> – Enroll in one of the online courses in Uttarakhand and complete your registration.</li>
                    <li><strong>Study online</strong> – Join live classes or watch recordings, submit assignments, and participate in discussions from home.</li>
                    <li><strong>Start your career</strong> – With a degree from a top online university in India, you'll be ready for strong career opportunities, including job opportunities after online MBA.</li>
                  </ol>
                </div>

                <p className="mt-6">
                  Explore the wide range of programs at Uttaranchal University Online and join a learning community that values flexibility, quality, and career growth. Whether you choose the Online MBA from Uttaranchal University, Online BBA, Online BCA, Online MCA, or Online BA from Uttaranchal University, you are choosing one of the most trusted online education platforms in India.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Section with Tabs */}
        <section id='courses' className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Uttaranchal University Online Courses
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore undergraduate and postgraduate online degree programs with UGC recognition and NAAC accreditation. 
                Experience quality, flexibility, and career-focused education from Uttaranchal University.
              </p>
            </motion.div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8 sm:mb-12">
                <Tabs.List className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200">
                  <Tabs.Trigger 
                    value="all"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='all' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                  >
                    All Programs
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="ug"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='ug' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                  >
                    Undergraduate
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="pg"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='pg' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                  >
                    Postgraduate
                  </Tabs.Trigger>
                </Tabs.List>
              </div>

              <Tabs.Content value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {[...ugCourses, ...pgCourses].map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="Uttaranchal University Online"/>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="ug">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {ugCourses.map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="Uttaranchal University Online"/>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="pg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {pgCourses.map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="Uttaranchal University Online"/>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section id="KeyHighlights" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Key Highlights
              </h2>
              <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 ml-4">
                <li>A NAAC A+ university online known for quality and trust</li>
                <li>Supported by the strong reputation of Uttaranchal University Dehradun</li>
                <li>Offers a wide range of online degrees in Dehradun and online courses in Uttarakhand</li>
                <li>Programs include Online MBA, Online BBA, Online BCA, Online MCA, Online MCom, and Online BA from Uttaranchal University</li>
                <li>Recognized as a top online university in Uttarakhand and a top online university in India</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Admission Dates Section */}
        <section id="AdmissionDates" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Admission Dates
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Admission dates and upcoming session information will be updated here. Please contact our admission counselors for the latest information.
              </p>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
           </div>
          </div>
        </section>

        {/* Fee Structures Section */}
        <section id="FeeStructures" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fee Structures
              </h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  The fee structure at Uttaranchal University Online is designed to be affordable and student-friendly, making it one of the best options for affordable online degrees in India. Whether you choose the Online MBA from Uttaranchal University, Online BBA from Uttaranchal University, or the Online BCA, Online MCA, Online MCom, or Online BA from Uttaranchal University, the university ensures every student can access quality education at a reasonable cost.
                </p>
                <p>
                  As a top online university in Uttarakhand and one of the best online university in Dehradun, the institution offers transparent fees, easy EMIs, and no hidden charges. Students from across India trust Uttaranchal University Dehradun because the programs offer great value and recognized credentials.
                </p>
                <p>
                  With flexible payment options, quick online fee submission, and complete clarity in pricing, Uttaranchal University Online stands out as a reliable and affordable choice for students seeking high-quality online degrees in Dehradun and online courses in Uttarakhand.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
           </div>
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
                          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm cursor-pointer"
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
                          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm cursor-pointer"
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
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_form_ipzqyg.webp"
              universityName="Uttaranchal University Online"
              defaultProgram={openModal.program || "MBA"}
              formType={openModal.type}
            />
          )}
        </section>

        {/* Accreditation Section */}
        <div>
          <AccreditationSection
            title="Why Choose Uttaranchal University Online?"
            description="UU University offers globally recognized online degrees with expert faculty, flexible learning, cutting-edge digital platform, and comprehensive career support to help you succeed in the modern world."
            stats={[]} 
            benefits={[
              {
                title: "Global Recognition",
                description: "Our degrees are recognized worldwide, opening doors to international opportunities.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
              },
              {
                title: "200+ Expert Faculty",
                description: "Learn from industry veterans and academic experts with real-world experience.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/></svg>`,
              },
              {
                title: "Cutting-Edge Curriculum",
                description: "Programs updated regularly to match latest industry trends and technologies.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>`,
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace with 24/7 access to learning materials and recorded lectures.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/></svg>`,
              },
              {
                title: "100% Placement Support",
                description: "Resume building, interview prep, and job placement assistance with 100+ corporate partners.",
                iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path> </svg>`,
              },
              {
                title: "50,000+ Students",
                description: "Join a thriving community of learners from across India and abroad.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 20c0-5.33 9.33-8 10-8s10 2.67 10 8v2H2v-2z"/></svg>`,
              },
              {
                title: "Advanced Digital Platform",
                description: "Interactive live classes, doubt clearing sessions, online assessments, and mobile learning app.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>`,
              },
              {
                title: "24/7 Learning Resources",
                description: "Access to e-books, recorded lectures, online labs, and peer collaboration anytime.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`,
              },
            ]}
            accreditations={[
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp", alt: "WES", name: "WES" },
            ]}
            internationalRecognition={[]}
            successStories={[]}
          />
        </div>

        {/* Learning Platform Features */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced <span className="text-yellow-300">Learning Platform</span></h2>
              <p className="text-xl text-blue-200">Experience seamless learning with our state-of-the-art digital campus</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Interactive Live Classes", icon: "🎥" },
                    { title: "24/7 Access to Resources", icon: "📚" },
                    { title: "Doubt Clearing Sessions", icon: "💬" },
                    { title: "Online Assessment", icon: "📝" },
                    { title: "Peer Collaboration", icon: "👥" },
                    { title: "Mobile Learning App", icon: "📱" },
                  ].map((feature, index) => (
                    <div key={index} className="bg-blue-800 p-4 rounded-lg flex items-center">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <span className="font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <Image width={500} height={400} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/learning_platform_mm4iyv.webp" alt="Learning Platform" className="rounded-xl shadow-2xl border-4 border-blue-700" />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                    Experience The Future of Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section id="AdmissionProcess" className="relative py-20 bg-white">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
                     
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Admission Process
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                A simple, transparent, and student-friendly admission process designed to help you begin your learning journey smoothly.
              </p>
              
              <div className="max-w-4xl mx-auto text-left space-y-6 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Step 1: Register Online</h3>
                  <p className="text-gray-700">
                    Visit the official Uttaranchal University Online portal and create your account. Choose your preferred program from the available online degrees in Dehradun and online courses in Uttarakhand.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Step 2: Fill Out the Application Form</h3>
                  <p className="text-gray-700">
                    Enter your personal and academic details. Upload the required documents and select programs such as the Online MBA, Online BCA, or Online MCom from Uttaranchal University.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Step 3: Pay the Application Fee</h3>
                  <p className="text-gray-700">
                    Make the payment online through UPI, net banking, or card. The secure process supports all programs offered by the best online university in Dehradun.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Step 4: Get Admission Confirmation</h3>
                  <p className="text-gray-700">
                    After verification, you will receive your official admission confirmation. You are now ready to begin your journey with a top online university in Uttarakhand and pursue affordable online degrees in India.
                  </p>
                </div>
                <div className="mt-6 border-t pt-4 space-y-3">
                  <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
           </div>
          </div>
              </div>
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
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-blue-600 z-0 rounded-full"></div>
                     
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
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
              <span className="text-blue-700">Online vs Regular</span> Degree Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">UU Online</th>
                    <th className="p-4 text-center">Regular Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['UGC Recognition', '✅ Yes', '✅ Yes'],
                    ['NAAC Accreditation', '✅ Accredited', '✅ Accredited'],
                    ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
                    ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
                    ['Location', '✅ From Anywhere', '❌ Campus Only'],
                    ['Cost', '✅ More Affordable', '❌ Higher Fees'],
                    ['Placement Support', '✅ 100% Available', '✅ Available']
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
            <div className="mt-6 border-t pt-4 space-y-3">
              <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
          </div>
          </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="bg-[#003366] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Image width={500} height={400} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu-certificate_srzmjx.webp" alt="UU Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Online Degree from Uttaranchal University
              </h2>
              <p className="mb-6 text-lg">
                Earn a prestigious UGC-approved degree from Uttaranchal University, designed for working professionals 
                and students seeking flexible learning options with globally recognized credentials.
              </p>
              <h3 className="text-xl font-semibold mb-2">Benefits of UU Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Live Classes by Industry Experts</li>
                <li>Career Assistance & Exclusive Virtual Job Fairs</li>
                <li>Globally Recognized UGC-Approved Degrees</li>
                <li>Practical & Immersive Learning</li>
                <li>24/7 Access to Learning Resources</li>
                <li>Robust Alumni Network of 50,000+ Students</li>
                <li>Flexible Learning Options</li>
                <li>100+ Corporate Partners for Placements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Upcoming Sessions Section */}
        <section id="UpcomingSessions" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Details of Upcoming Sessions
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Information about upcoming admission sessions and batch start dates will be updated here. Please contact our admission team for the latest session details.
              </p>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
            </div>
          </div>
        </section>

        {/* Placement Partners Section */}
        <section id="PlacementPartners" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Placement Partners
              </h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  Uttaranchal University Online has strong connections with top national and international companies, making it one of the best online university in Dehradun and a trusted top online university in Uttarakhand for career growth. Students from programs like the Online MBA from Uttaranchal University, Online BBA, Online BCA, Online MCA, Online MCom, and Online BA from Uttaranchal University receive excellent placement support.
                </p>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4"> Top Placement Partners Include:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    {['Amazon', 'Wipro', 'Infosys', 'TCS', 'HCL', 'Deloitte', 'Accenture', 'Capgemini', 'Tech Mahindra', 'Cognizant', 'HDFC Bank', 'ICICI Bank', 'Aditya Birla Group'].map((company, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-700">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6">
                  These companies regularly hire graduates because Uttaranchal University Dehradun offers strong academic training, practical learning, and industry-aligned online courses in Uttarakhand. The university also provides resume support, interview preparation, and career guidance, helping students achieve great job opportunities after online MBA and other programs.
                </p>
                <p>
                  With recognized and affordable online degrees in India, Uttaranchal University Online prepares students for real corporate success.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
          </div>
          </div>
        </section>

        {/* Placement Records Section */}
        <section id="PlacementRecords" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Placement Records
              </h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Key Placement Highlights</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Over 2356+ students placed in recent years.</li>
                    <li>More than 750 recruiters visited campus and digital platforms.</li>
                    <li>Highest package reached up to INR 1.5 Crore for some students.</li>
                    <li>Strong career opportunities reported for students after programs like the Online MBA from Uttaranchal University and more.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why this Matters</h3>
                  <p>
                    By choosing Uttaranchal University Online and one of its UGC approved online degrees, students get recognized qualifications plus access to meaningful job outcomes. As a platform associated with a NAAC A+ university online, the institution supports students in building strong professional futures through its affordable online degrees in India model.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
              
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-30 px bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>

           </div>
          </div>
        </section>

        {/* Student Reviews Section */}
        <section id="StudentReviews" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Student Reviews
              </h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Riya Gupta – Online MBA Student</h3>
                  <p className="text-gray-700 italic">
                    "I chose the Online MBA from Uttaranchal University because I wanted flexibility and quality. With Uttaranchal University Online, I can study from home and still get excellent teaching. The platform is user-friendly and the faculty is very supportive. It is definitely one of the best online university in Dehradun for my career goals."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Aman Verma – Online BBA Student</h3>
                  <p className="text-gray-700 italic">
                    "The Online BBA from Uttaranchal University gave me a strong business foundation. I learned marketing, finance, and entrepreneurship with interactive sessions through online degrees in Dehradun. I feel confident choosing this program from one of the top online university in Uttarakhand."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Simran Kaur – Online BCA Student</h3>
                  <p className="text-gray-700 italic">
                    "I applied through Online BCA from Uttaranchal University and the Uttaranchal University Online experience has been great. The labs, digital resources, and practical lessons helped me understand IT and coding well. It is a smart choice for online courses in Uttarakhand."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Mohit Singh – Online MCA Student</h3>
                  <p className="text-gray-700 italic">
                    "Studying Online MCA from Uttaranchal University was perfect for me. I work full-time and needed something flexible. With this NAAC A+ university online, I get good quality, and I see real job skills being taught. It's one of the most trusted top online university in India for tech courses."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Neha Sharma – Online MCom Student</h3>
                  <p className="text-gray-700 italic">
                    "The Online MCom from Uttaranchal University is strong in commerce topics. The online learning system of Uttaranchal University Online made it easy to study from home while working. Good value for money and nearly as good as a campus degree."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2"> Ravi Patel – Online BA Student</h3>
                  <p className="text-gray-700 italic">
                    "I chose the Online BA from Uttaranchal University because I wanted flexibility. The sessions were simple, recorded so I could watch later. With the reputation of Uttaranchal University Dehradun, I felt secure about my decision for an affordable online degree in India."
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-700">
                These reviews show how Uttaranchal University Online successfully delivers quality learning, flexibility, and recognized degrees for students across India. Whether you pick the Online MBA, Online BBA, Online BCA, Online MCA, Online MCom, or Online BA, you join one of the best platforms for modern online education.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="FAQs" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about Uttaranchal University Online Programs
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
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-700"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
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
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className='flex justify-center'>
            <button
              onClick={() => {
                setOpenModal({ type: 'apply' });
                setIsSidebarOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </button>
            </div>
          </div>
        </section>

        {/* Hiring Partners */}
        <section id='Partner' className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
              <p className="text-xl text-gray-600 mt-2">Top Hiring Partners of Uttaranchal University</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/tcs_mpq9no.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/lt_akwpfk.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/sap_wtbuz0.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icici_1_quita6.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/infosys_vk4d5g.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/coca-cola_krqtyj.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp",
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
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_logo_bksobh.webp" alt="UU Logo" className="h-10 w-auto bg-white rounded p-1" />
                    <span className="text-xl font-bold text-blue-500">UU Online</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    UGC-approved, NAAC accredited online degrees designed for modern learners. 
                    Transform your career with globally recognized programs from Uttaranchal University.
                  </p>
                  
                  {/* Social Media */}
                  <div className="flex space-x-4">
                    {[
                      { icon: '📘', label: 'Facebook' },
                      { icon: '📷', label: 'Instagram' },
                      { icon: '🐦', label: 'Twitter' },
                      { icon: '💼', label: 'LinkedIn' }
                    ].map((social, i) => (
                      <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
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
                    {['MBA', 'Executive MBA', 'MCA', 'BBA', 'BCA', 'BA'].map((program, i) => (
                      <li key={i} onClick={() => setOpenModal({ type: 'apply' })} className="hover:text-blue-500 transition-colors cursor-pointer">
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
                        <a href={link.href} className="hover:text-blue-500 transition-colors">
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
                      <a href="tel:+917042867717" className="p-2 rounded-lg hover:bg-blue-900 transition-all duration-200">
                        <span className="text-blue-400">📞</span>
                      </a>
                      <span className="text-sm">+91 7042646766</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="mailto:info@unifostedu.com" className="p-2 rounded-lg hover:bg-blue-900 transition-all duration-200">
                        <span className="text-blue-400">✉️</span>
                      </a>
                      <span className="text-sm">info@unifostedu.com</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
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
                Popular Programs & Specializations – Uttaranchal University Online
              </h4>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "BA General - UU Online",
                  "BBA General - UU Online",
                  "BCA General - UU Online",
                  "MBA Marketing - UU Online",
                  "MBA Digital Marketing - UU Online",
                  "MBA Human Resource - UU Online",
                  "MBA Business Analytics - UU Online",
                  "MBA Finance - UU Online",
                  "MBA International Business - UU Online",
                  "MBA IT Management - UU Online",
                  "MBA Logistics & Supply Chain - UU Online",
                  "Executive MBA Business Analytics - UU Online",
                  "Executive MBA HR Analytics - UU Online",
                  "Executive MBA Finance Analytics - UU Online",
                  "Executive MBA Banking & Finance - UU Online",
                  "MCA General - UU Online",
                  "Online Degree Uttaranchal University",
                  "UU Distance Learning Programs",
                  "Uttaranchal University Admission 2025",
                  "UU Online MBA Fees",
                  "Best Online University India",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-blue-500"
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
              <p>&copy; {new Date().getFullYear()} Uttaranchal University Online. All rights reserved.</p>
              <p className="mt-2 text-xs">UGC-Approved | NAAC Accredited | Globally Recognized</p>
            </motion.div>
          </div>
        </footer>
        </main>

        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_form_ipzqyg.webp"
            universityName="Uttaranchal University Online"
            defaultProgram={openModal.program || "MBA"}
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </div>
    </>
  );
};

export default UttaranchalUniversity;