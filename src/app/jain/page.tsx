'use client';
import AccreditationSection from '@/components/AccreditationSection';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import EnquireCard from '@/components/EnquireCard';
import PageContent from "@/components/PageContent/PageContent";
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import UniversityDateSlider from '@/components/UniversityDateSlider';
import { useEffect, useState } from 'react';
import {
  FaChevronDown,
  FaPhone
} from "react-icons/fa";
import { OpenModalState } from '../../../types/Modal';
const Jain = () => {
  const selectionItem = [
    { id: "HeroSection", label: "Hero" },
    { id: "Introduction", label: "Introduction" },
    { id: "Rankings", label: "Rankings" },
    { id: "Programs", label: "Explore Courses" },
    { id: "ProgramsOffered", label: "Programs Offered" },
    { id: "KeyHighlights", label: "Key Highlights" },
    { id: "Eligibility", label: "Eligibility" },
    { id: "Admission", label: "Admission Process" },
    { id: "Companies", label: "Placement Partners" },
    { id: "Faq", label: "FAQs" },
  ];

  const [activeSection, setActiveSection] = useState(selectionItem[0]?.id ?? null);


  useEffect(() => {
    if (!selectionItem.length) return undefined;

    const observerOptions = {
      root: null,
      threshold: 0.25,
      rootMargin: "-45% 0px -45% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    selectionItem.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      selectionItem.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [selectionItem]);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const rankings = [
    {
      id: 1,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp",
      alt: "UGC Logo",
      text: "JAIN (Deemed-to-be University) awarded Graded Autonomy by University Grants Commission (UGC)",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_rodfbn.png",
      alt: "NAAC Logo",
      text: "National Assessment and Accreditation Council (NAAC) has awarded 'A++' Grade",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp",
      alt: "QS World University Rankings",
      text: "Ranked 91–95 among the top Indian Universities",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp",
      alt: "NIRF Logo",
      text: "Ranked 68th in the Country",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16M8 6v12M16 6v12" />
        </svg>
      ),
      title: "Live Interactive Classes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14v7m0-7L3 9m9 5l9-5" />
        </svg>
      ),
      title: "Recorded Lectures",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M3 12h18" />
          <path d="M3 4h9v16H3z" />
        </svg>
      ),
      title: "Industry Oriented Curriculum",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 20h18M9 20V10h6v10" />
        </svg>
      ),
      title: "Career Growth",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Experiential Learning",
    },
  ];

  const featuressec = [
    {
      title: "Credibility",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
        </svg>
      ),
    },
    {
      title: "Global Curriculum",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
      ),
    },
    {
      title: "Learning Methodology",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M4 4h16v6H4z" />
        </svg>
      ),
    },
    {
      title: "25 Key Skills for Success",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20l4-16M12 20L8 4M12 20l8-8M12 20L4 12" />
        </svg>
      ),
    },
    {
      title: "Cutting-edge Technology",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a8 8 0 01-14.8 0M4.6 9a8 8 0 0114.8 0" />
        </svg>
      ),
    },
    {
      title: "Personalised Support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a6 6 0 1112 0v2" />
        </svg>
      ),
    },
  ];

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,50,000-2,40,000",
      specialization: "Finance & Marketing, Digital Marketing, HRM, Data Science and Analytics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "Bachelor of Business Administration (BBA) in Jain University Online",
    },

    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,35,000 -1,65,000",
      specialization: "Computer Science and IT, Data Science and Analytics, Cyber Security, Artificial Intelligence, Cloud Computing",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      alt: "Bachelor of Computer Applications (BCA) in Jain University Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,05,000- 2,28,000",
      specialization: "Online Bachelor of Commerce, Corporate Accounting, International Finance & Accounting (ACCA)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      alt: "Bachelor of Commerce (B.Com) in Jain University Online",
    },

  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,96,000 - 2,50,000 ",
      specialization: "Human Resource Management and Finance, Finance and Marketing, Marketing and Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Information Technology Management, Healthcare Management, Supply Chain, Production and Operations Management, Business Intelligence and Analytics, Entrepreneurship and Venture Creation, International Finance, Data Science and Analytics, E-commerce, Artificial Intelligence and Human Resource Management, Digital Marketing, Banking and Finance, Technology Management, General Management, AI-Driven Marketing, AI-Driven Finance, AI-Driven Business Strategy, AI-Driven Human Resource Management,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "Master of Business Administration (MBA) in Jain University Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "1,60,000-2,00,000",
      specialization: "DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "Master of Computer Applications (MCA) in Jain University Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,10,000-1,81,000",
      specialization: "Accounting and Finance,International Finance (Accredited by ACCA, UK), Professional Accounting and Finance (Accredited by CPA, US)(45,500)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      alt: "Master of Commerce (M.Com) in Jain University Online",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "90,000",
      specialization: "Jainology in Comparative Religion and Philosophy, English, Economics, Public Policy",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      alt: "Master of Arts (MA) in Jain University Online",
    },
  ];

  useEffect(() => {


    const timer = setTimeout(() => {
      setOpenModal((type: OpenModalState) => type === null ? { type: 'enquire' } : type);
    }, 3000)
    return () => clearTimeout(timer);
  }, [])

  const faqData = [
    {
      question: "Is Jain University Online UGC approved?",
      answer: "Yes, Jain University Online is recognized by the University Grants Commission (UGC) and all its online programs are valid and accredited under the UGC guidelines for online education."
    },
    {
      question: "What is the duration of the online MBA program?",
      answer: "The online MBA program at Jain University is a 2-year program divided into 4 semesters, offering flexibility for working professionals to complete their degree."
    },
    {
      question: "Are the online degrees equivalent to on-campus degrees?",
      answer: "Yes, the online degrees awarded by Jain University Online are equivalent to their on-campus counterparts and hold the same value. The degree certificate does not mention 'online' mode of study."
    },
    {
      question: "What specializations are available in the online MBA?",
      answer: "Jain University offers multiple specializations including Human Resource Management, Finance, Marketing, Business Analytics, Information Technology Management, Healthcare Management, Digital Marketing, Artificial Intelligence, and many more emerging fields."
    },
    {
      question: "Is there any placement assistance for online students?",
      answer: "Yes, Jain University provides comprehensive career support including placement assistance, virtual job fairs, resume building workshops, interview preparation, and access to 2,000+ hiring partners."
    },
    {
      question: "What is the eligibility criteria for the online MBA?",
      answer: "Candidates must have a bachelor's degree from a recognized university with minimum 50% marks. Work experience is preferred but not mandatory for admission."
    },
    {
      question: "Are there any EMI options available?",
      answer: "Yes, Jain University offers zero-cost EMI options through various financial partners to make education affordable for students."
    },
    {
      question: "How are the online classes conducted?",
      answer: "Classes are conducted through live interactive sessions, recorded lectures, virtual learning platforms, and include regular assessments, assignments, and doubt-clearing sessions with faculty."
    },
    {
      question: "What is the fee structure for online programs?",
      answer: "Fee structure varies by program. For example, MBA ranges from ₹1,96,000 to ₹2,16,000, BBA is ₹1,95,000, and BCA ranges from ₹1,35,000 to ₹1,65,000 for the entire program duration."
    },
    {
      question: "Is there any scholarship available?",
      answer: "Yes, Jain University offers various scholarships based on academic merit, sports achievements, and for economically disadvantaged students. Specific details can be obtained from the admissions team."
    }
  ];

  const allCourses = [
    ...ugCourses.map(course => ({ ...course, type: "UG" })),
    ...pgCourses.map(course => ({ ...course, type: "PG" })),
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />



      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-2 flex-nowrap">
            {/* Logo - Left Side */}
            <div className="flex-shrink min-w-0">
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png"
                alt="Jain University Online Logo"
                width={240}
                height={80}
                className="object-contain max-w-full h-auto w-40 sm:w-56"
              />
            </div>

            {/* Contact + Menu - Right Side (kept on single line) */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                className="inline-flex items-center p-2 rounded-md border hover:bg-gray-50 cursor-pointer"
              >
                =

              </button>

              {/* Phone Number */}
              <a href="tel:+917042867717" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#001C54] to-[#b91c1c] text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <FaPhone className="text-white text-sm rotate-100" />
                <span className="font-semibold text-sm whitespace-nowrap">+91 70428 67717</span>
              </a>
              {/* Phone (Mobile) */}
              <a
                href="tel:+917042867717"
                className="sm:hidden flex items-center justify-center w-10 h-10 bg-white-500 rounded-full text-[#f26722] hover:bg-red-700 transition-colors cursor-pointer"
              >
                📞
              </a>
              {/* Apply Now Button */}
              <button
                onClick={() => setOpenModal(type => type === null ? { type: 'apply' } : type)}
                className="bg-gradient-to-r from-[#001C54] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-sm whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

       
      <PageContent sectionItems={selectionItem} activeSection={activeSection} ismobilemenuopen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      {/* Add padding to the top of the first section to account for fixed header */}
      <div className="pt-16 overflow-x-hidden break-words hyphens-auto lg:ml-64">
         <UniversityDateSlider
                      currentDate="January 2026 Session"
                      nextUpdateDate="Applications Closing on 14 Feb 2026"
                      information="Limited Seats Available - Apply Now!"
                      special="Average of 50% salary growth"
                      color="#1619e4"
                      backgroundColor="#ebeb12"
                      textColor="#1a08db"
                    />



        {/* Modern Hero Section - Optimized Spacing */}
        <section
          id="HeroSection"
          className="relative min-h-[90vh] sm:min-h-screen overflow-hidden pt-20 sm:pt-24"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 opacity-90"></div>

          {/* Watermark Image */}
          <div className="absolute inset-0 opacity-10 sm:opacity-20">
            <Image
              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp"
              alt="Watermark Background"
              width={800}
              height={600}
              className="object-cover"
              priority
            />
          </div>

          {/* Animated Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-60 h-40 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-rose-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
            <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

              {/* LEFT CONTENT */}
              <div className="text-gray-900 space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">

                <h5 className="font-[calibri] text-xl sm:text-2xl md:text-3xl leading-tight">
                  Uplift your Career with
                </h5>

                <h1 className="font-[Calibri] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#001C54] to-[#b91c1c] bg-clip-text text-transparent leading-tight">
                  Jain University Online
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-xl mx-auto lg:mx-0">
                  Globally recognized online degrees with flexible learning, expert mentorship, and career-focused programs.
                </p>

                {/* COURSE TAGS */}
                <div className="bg-[#001C54] w-fit mx-auto lg:mx-0 flex flex-wrap">
                  {['MBA', 'MCA', 'M.COM', 'MA', 'BBA', 'B.COM', 'BCA'].map((course, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 text-white font-bold text-xs sm:text-sm uppercase border-r last:border-none"
                    >
                      {course}
                    </div>
                  ))}
                </div>

                {/* BUTTON + BADGES */}
                <div className="space-y-4">

                  {/* CTA Button */}
                  <div className="flex justify-center lg:justify-start">
                    <button
                      onClick={() => setOpenModal(type => type === null ? { type: 'apply' } : type)}
                      className="bg-gradient-to-r from-[#001C54] to-[#b91c1c] hover:from-[#0b2b77] hover:to-[#991b1b] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg text-sm sm:text-base"
                    >
                      Apply Now
                    </button>
                  </div>

                  {/* Recognitions */}
                  <div className="flex justify-center lg:justify-start gap-6 flex-wrap">
                    <div className="text-center">
                      <Image
                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp"
                        alt="NAAC A++"
                        width={60}
                        height={60}
                        className="h-12 w-auto object-contain"
                      />
                      <p className="text-gray-700 text-xs font-medium">NAAC A++</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp"
                        alt="UGC"
                        width={60}
                        height={60}
                        className="h-12 w-auto object-contain"
                      />
                      <p className="text-gray-700 text-xs font-medium">UGC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE CONTENT */}
              <div className="order-1 lg:order-2">
                <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
                  <div className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-300 rounded-xl p-4 shadow-xl min-h-[260px] sm:min-h-[350px] md:min-h-[450px] flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327240/jainimg_swo4tp.png"
                      alt="Student"
                      width={500}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow z-20">
                    <p className="text-gray-900 font-semibold text-xs">50,000+ Successful Graduates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <div className="w-6 h-10 border-2 border-gray-900/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-900/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>


        {/* Introduction - Text Section */}
        <section id="Introduction" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black-900 mb-4">Jain University Online – Empowering Future Leaders with World-Class Online Degrees</h2>
            <div className="text-black-800 leading-relaxed space-y-4 text-lg md:text-xl">
              <p>
                In today's fast-changing world, learners seek flexible, career-oriented education that aligns with their goals.
                <strong>JAIN (Deemed-to-be University) Online</strong>, widely known as <strong>JAIN Online</strong>, stands as one of India's
                premier platforms for higher education. Headquartered in Bangalore, JAIN Online delivers
                <strong>UGC-entitled</strong> and <strong>NAAC A+ accredited</strong> programs that are trusted and recognized nationwide.
              </p>
              <p>
                Designed for working professionals, graduates, and lifelong learners, these programs combine
                <strong>academic excellence</strong> with <strong>industry relevance</strong>. Students gain the flexibility to study
                anytime, anywhere — while learning directly from distinguished faculty members and top industry experts.
              </p>
              <p>
                With its modern digital learning tools and a strong focus on career advancement,
                <strong>JAIN Online</strong> empowers students to earn prestigious online degrees and
                thrive in a competitive global environment.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-6 md:p-10 rounded-2xl shadow-md space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-black-800 mb-4">
                About Us
              </h2>

              <p className="text-lg md:text-xl leading-relaxed">
                <strong>JAIN Online</strong> is the digital learning arm of
                <strong> JAIN (Deemed-to-be University)</strong> — one of India's most reputed and trusted universities.
                Recognized as a leading institution for online education in Bangalore, JAIN is renowned for its
                <strong> expert faculty, strong industry connections,</strong> and a large network of
                <strong>successful alumni</strong> across diverse fields.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                Through <strong>JAIN Online</strong>, learners can now experience world-class education from the comfort
                of their homes. The university offers a wide range of <strong>UGC-entitled</strong> online programs designed
                to meet the demands of today's industries and future careers.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl shadow-inner space-y-3">
                <h3 className="text-2xl font-semibold text-black-700 mb-2">Popular Online Programs:</h3>
                <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
                  <li><strong>Online MBA</strong> – For aspiring leaders in business and management.</li>
                  <li><strong>Online BCA</strong> – Ideal for those passionate about programming, IT, and software development.</li>
                  <li><strong>Online MCA</strong> – For graduates looking to master advanced computing, AI, and data analytics.</li>
                  <li><strong>Online BBA</strong> – Perfect for students eager to explore business, marketing, and entrepreneurship.</li>
                  <li><strong>Online MCom</strong> – Tailored for learners aiming to advance in accounting, finance, and commerce.</li>
                </ul>
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                Every program at <strong>JAIN Online</strong> is crafted to deliver <strong>practical knowledge,
                  real-world exposure,</strong> and <strong>strong career opportunities</strong> — empowering students to
                achieve academic excellence and professional success in a digital-first world.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black-50 to-white text-gray-800 p-6 md:p-10 rounded-2xl shadow-md space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black-800 mb-8">
              🎓 Programs at a Glance
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-black-700 mb-2">💼 Online MBA</h3>
                <p className="text-lg leading-relaxed">
                  A two-year management program that builds <strong>leadership, problem-solving,</strong> and
                  <strong> business acumen</strong>. It includes <strong>live projects, case studies,</strong> and
                  <strong> expert mentorship</strong> to ensure excellent placement opportunities after graduation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-black-700 mb-2">💻 Online BCA</h3>
                <p className="text-lg leading-relaxed">
                  Designed for aspiring tech professionals, this program covers
                  <strong> programming, data structures, web design,</strong> and
                  <strong> software development</strong> — preparing students for a dynamic IT career.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-black-700 mb-2">🖥️ Online MCA</h3>
                <p className="text-lg leading-relaxed">
                  An advanced IT program focused on <strong>coding, AI, data science,</strong> and
                  <strong> software engineering</strong>. It helps students build expertise for high-demand
                  roles in the global technology sector.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-black-700 mb-2">📊 Online BBA</h3>
                <p className="text-lg leading-relaxed">
                  A comprehensive business program designed for future <strong>managers and entrepreneurs.</strong>
                  The curriculum emphasizes <strong>business fundamentals, management skills,</strong> and
                  <strong> marketing strategies</strong> for a successful corporate journey.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-2">
                <h3 className="text-2xl font-semibold text-black-700 mb-2">💰 Online MCom</h3>
                <p className="text-lg leading-relaxed">
                  A postgraduate program tailored for those interested in <strong>finance, taxation,</strong> and
                  <strong> commerce.</strong> The course equips learners for professional success in
                  <strong>banking, accounting,</strong> and <strong>corporate finance</strong>.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Why Choose Jain University Online */}


        {/* Programs Offered Table */}
        <section id="ProgramsOffered" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Programs Offered by Jain University Online</h2>
            <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
              <table className="w-full text-left min-w-[640px]">
                <thead className="bg-gray-100 text-gray-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Program</th>
                    <th className="px-4 py-3 font-semibold">Duration</th>
                    <th className="px-4 py-3 font-semibold">Eligibility</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">Online MBA Jain University</td>
                    <td className="px-4 py-3">2 Years</td>
                    <td className="px-4 py-3">Graduation</td>
                    <td className="px-4 py-3">Management</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Online BBA Jain University</td>
                    <td className="px-4 py-3">3 Years</td>
                    <td className="px-4 py-3">12th Pass</td>
                    <td className="px-4 py-3">Business Administration</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Online BCA Jain University</td>
                    <td className="px-4 py-3">3 Years</td>
                    <td className="px-4 py-3">12th Pass</td>
                    <td className="px-4 py-3">Computer Applications</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Online MCA Jain University</td>
                    <td className="px-4 py-3">2 Years</td>
                    <td className="px-4 py-3">Graduation (preferably BCA/CS)</td>
                    <td className="px-4 py-3">IT & Software</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose Jain University Online */}
        <section className="bg-white text-black-800 py-12 px-6 md:px-16 rounded-2xl shadow-md space-y-12">

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black-800">
              🌐 Why Choose JAIN Online?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Choosing where to study online is an important decision.
              Here's why <strong>JAIN Online</strong> is one of the best options for students and professionals
              seeking quality education with flexibility.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                ✅ 1. Accredited and Respected University
              </h3>
              <p className="text-lg leading-relaxed">
                All programs are <strong>UGC-approved</strong> and offered by a
                <strong> NAAC A+ accredited</strong> university.
                You earn a <strong>recognized online degree</strong> accepted by employers across India.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                🎯 2. Industry-Relevant Curriculum
              </h3>
              <p className="text-lg leading-relaxed">
                Programs like <strong>MBA, BCA, MCA, BBA,</strong> and <strong>MCom</strong>
                are designed with input from industry experts.
                Students learn <strong>job-ready skills</strong> such as data analysis,
                software design, digital marketing, and leadership.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                ⏰ 3. Flexible and Convenient Learning
              </h3>
              <p className="text-lg leading-relaxed">
                Study <strong>anytime, anywhere</strong> with both live and recorded classes.
                JAIN Online allows you to balance your education with work or personal life
                while earning a prestigious online degree.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                👩‍🏫 4. Expert Faculty and Mentors
              </h3>
              <p className="text-lg leading-relaxed">
                Learn from experienced professors and corporate mentors who simplify complex topics
                and guide you through every step of your academic journey.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                💼 5. Best Placements and Career Support
              </h3>
              <p className="text-lg leading-relaxed">
                JAIN Online maintains strong ties with leading companies.
                Students receive <strong>placement training, resume assistance,</strong> and
                <strong>career counseling</strong> to achieve top positions in reputed organizations.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                💻 6. Modern and Interactive Learning
              </h3>
              <p className="text-lg leading-relaxed">
                Participate in engaging <strong>live sessions, projects,</strong> and
                <strong>online discussions</strong>. The learning experience is collaborative and
                interactive—just like a classroom.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-2">
              <h3 className="text-2xl font-semibold text-black-700 mb-2">
                🌍 7. Accessible from Anywhere in India
              </h3>
              <p className="text-lg leading-relaxed">
                Whether you're in <strong>Bangalore, Delhi, Jaipur,</strong> or any other city,
                JAIN Online lets you earn a top-quality degree without relocation.
              </p>
            </div>
          </div>

          <div>
            <AccreditationSection
              title="Accreditations & Recognition Jain University Online?"
              description="Explore diverse learning mediums, dedicated academic advisors, career services, and placement opportunities with Jain University Online."
              stats={[]}
              benefits={[
                {
                  title: "Diverse Learning Mediums",
                  description: "We understand that every learner is different. That’s why our programs are delivered through a variety of learning formats including e-books, printed books, audiobooks, and engaging video lectures. Whether you prefer reading, listening, or visual learning, our flexible content delivery ensures you can study in a way that matches your personal learning style, schedule, and pace.",
                  iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                    </svg>`,
                },
                {
                  title: "Dedicated Academic Advisor",
                  description: "From enrollment to graduation, you are never alone in your journey. Each student is assigned a dedicated academic advisor who provides personalized guidance, helps with course planning, resolves academic queries, and supports you in staying on track. Our advisors are experienced professionals committed to helping you achieve both your academic and career goals.",
                  iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                    </svg>`,
                },
                {
                  title: "Career Services",
                  description: "Our support goes beyond academics. We prepare you for the real world with career-focused training, including resume-building workshops, mock interviews, internship opportunities, and mentorship from industry experts. These services help you develop confidence, professional skills, and workplace readiness required to stand out in today’s competitive job market.",
                  iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                    </svg>`,
                },
                {
                  title: "Placement Opportunities",
                  description: "We actively assist students in securing job opportunities through our placement assistance programs. From interview preparation and soft skills training to resume optimization and employer connections, we ensure you are fully prepared to step into your professional career. Our goal is to help you transition smoothly from learning to earning.",
                  iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                    </svg>`,
                },
              ]}
              accreditations={[
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp", alt: "WES", name: "WES" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp", alt: "AIU", name: "AIU" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327071/careers_grslii.png", alt: "Careers", name: "Careers" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/auap_n1ea9m.webp", alt: "AUAP", name: "AUAP" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327279/ksurf_udejgt.webp", alt: "KSURF", name: "KSURF" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/recogin_wm3gqn.webp", alt: "Recognition", name: "Recognition" },
              ]}
              internationalRecognition={[]}
              successStories={[]}
            />
          </div>
          <div className="pt-10 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black-800 mb-6">
              🚀 How JAIN Online Builds Your Career
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              Every program at <strong>JAIN Online</strong> is structured to help students grow professionally.
              Courses include <strong>real-world projects, internship opportunities,</strong> and
              <strong>hands-on training</strong> that enhance employability and confidence.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mt-4">
              Graduates from <strong>Online MBA, BBA, MCA,</strong> and <strong>MCom</strong> programs
              have secured top roles in leading organizations—thanks to JAIN's
              <strong>industry reputation and strong placement network.</strong>
            </p>
          </div>
          <div id="KeyTakeaway" className="py-12 sm:py-16 bg-gradient-to-r from-yellow-50 to-blue-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">🌟 Key Takeaway</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                JAIN University Online is one of India's leading universities for online degrees in Bangalore.
                It offers top online degrees in management, commerce, and computer applications with best
                placements and global recognition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you want flexible, affordable, and trusted education that helps you grow in your career —
                choose <span className="font-semibold text-blue-700">JAIN Online</span>. Enroll today in programs like
                <span className="font-semibold text-blue-700"> Online MBA</span>,
                <span className="font-semibold text-blue-700"> Online BCA</span>,
                <span className="font-semibold text-blue-700"> Online MCA</span>,
                <span className="font-semibold text-blue-700"> Online BBA</span>, or
                <span className="font-semibold text-blue-700"> Online MCom</span>,
                and start your journey toward success.
              </p>
            </div>
          </div>

        </section>

        {/* Campus Tour */}
        <section
          id="CampusTour"
          className="py-12 sm:py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">


            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black-800">
                🏫 Campus Tour
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-black-700">
                A Glimpse of JAIN University Campus
              </h3>
            </div>


            <div className="max-w-5xl mx-auto text-black-800 text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                The <strong>JAIN University</strong> main campus in Bangalore is peaceful, green, and
                full of energy — a perfect blend of <strong>nature, technology, and innovation.</strong>
                With modern classrooms, digital libraries, computer labs, and innovation centers,
                the campus fosters creativity and academic excellence.
              </p>

              <p>
                Through <strong>JAIN Online</strong>, this same spirit is brought to the digital world.
                Students enjoy a <strong>virtual campus</strong> experience that offers the same quality of
                education, mentorship, and community — anytime, anywhere.
              </p>

              <p>
                Whether you're pursuing an <strong>Online MBA, BCA, MCA, BBA,</strong> or <strong>MCom</strong>,
                you'll feel connected to a <strong>vibrant learning community</strong> that inspires growth,
                collaboration, and innovation.
              </p>
            </div>


            <div>
              <p className="text-black-700 text-center text-lg md:text-xl mb-6">
                Though fully online, <strong>JAIN Online</strong> recreates a vibrant campus environment through:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  '💻 Live & recorded interactive online classes',
                  '📚 Digital library with e-books, journals & global resources',
                  '💬 Discussion forums & peer learning communities',
                  '🧪 Virtual labs for IT and technology programs',
                  '🎓 Industry webinars, workshops & expert mentorship',
                  '💼 Career guidance and placement support'
                ].map((point, i) => (
                  <li
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 text-gray-800 hover:shadow-md transition"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* Explore Courses */}
        <section id="ExploreCourses" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Online Courses at Jain University Online</h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Undergraduate Online Degrees</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><span className="font-semibold">Online BBA Jain University</span> – Learn business fundamentals, leadership, marketing, finance, and strategy.</li>
                <li><span className="font-semibold">Online BCA Jain University</span> – Build expertise in programming, web/app development, networking, and databases.</li>
                <li><span className="font-semibold">Online B.Com Jain University</span> – Develop analytical and communication skills with flexible subject options.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Postgraduate Online Degrees</h3>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Online MBA Jain University</span> – Flagship degree with specializations: Marketing, Finance, HR, Logistics & Supply Chain, Systems & Ops, Business Analytics, and more.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><span className="font-semibold">Online MCA Jain University</span> – Focused on AI, cloud, full‑stack, and data science skills.</li>
                <li><span className="font-semibold">Online M.Com Jain University</span> – Financial analytics, taxation, banking & corporate finance.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill & Career Certifications (Add-On)</h3>
              <ul className="flex flex-wrap gap-2 text-gray-800">
                {['Digital Marketing', 'Project Management', 'Data Science & AI', 'Cybersecurity', 'Business Analytics'].map((c, i) => (
                  <li key={i} className="bg-gray-100 rounded-full px-3 py-1 border">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Admission Dates */}
        <section id="AdmissionDates" className="py-12 sm:py-16 bg-gradient-to-br from-yellow-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Admission Dates for UG & PG Online Degrees</h2>
            <p className="text-gray-700 mb-6">Admission Open for 2025–2026 Academic Session</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { program: 'Online MBA Jain University', status: 'Open' },
                { program: 'Online MCA Jain University', status: 'Open' },
                { program: 'Online M.Com Jain University', status: 'Open' },
                { program: 'Online MA Jain University', status: 'Open' },
                { program: 'Online BBA Jain University', status: 'Open' },
                { program: 'Online BCA Jain University', status: 'Open' },
                { program: 'Online B.Com Jain University', status: 'Open' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900">{item.program}</h3>
                  <p className="text-green-600 font-medium mt-1">✅ {item.status}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6">Early applicants may receive scholarship benefits and counseling support for program selection.</p>
          </div>
        </section>

        {/* Fees Structure */}
        <section id="Fees" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Fees Structure – Online Degrees Jain University</h2>
            <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Program</th>

                    <th className="px-4 py-3 text-left font-semibold">Payment Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {['Online MBA Jain University', 'Online MCA Jain University', 'Online M.Com Jain University', 'Online BBA Jain University', 'Online BCA Jain University', 'Online B.Com Jain University'].map((name, idx) => (

                    <tr key={idx}>
                      <td className="px-4 py-3">{name}</td>

                      <td className="px-4 py-3">Semester/EMI</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-gray-700">
              <p className="font-semibold mb-2">Scholarships Available:</p>
              <p>✅ Working professionals ✅ Defense personnel ✅ Merit-based students ✅ Financial assistance options</p>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section id="EligibilityCriteria" className="py-12 sm:py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-2">UG Courses (BBA, BCA, B.Com)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>10+2 from a recognized board</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-2">PG Courses (MBA, MCA, M.Com., MA)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Bachelor's degree with minimum required marks</li>
                  <li>Work experience recommended (for MBA)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-4">Programs are open to Indian & International students.</p>
          </div>
        </section>

        {/* Sessions */}
        <section id="Sessions" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ongoing Sessions & Academic Calendar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['January', 'April', 'July', 'October'].map((month, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border text-center">
                  <p className="text-lg font-semibold text-gray-900">{month} Intake</p>
                  <p className="text-green-700 mt-1">✅ Flexible entry</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Record */}
        <section id="PlacementRecord" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Placement Record</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Strong average placement rate across programs</li>
              <li>Highest outcomes in Online MBA and Online MCA</li>
              <li>Career services: resume building, mock interviews, placement drives, industry mentors</li>
            </ul>
          </div>
        </section>

        {/* Student Reviews */}
        <section id="StudentReviews" className="py-16 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">🎓 Student Reviews</h2>
              <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
                Hear what students have to say about their learning journey at <span className="font-semibold text-blue-700">JAIN University Online</span>.
                These testimonials reflect how flexible learning, expert faculty, and practical courses help students achieve real success.
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "⭐ Priya Sharma – Online MBA (Marketing)",
                  text: "I chose JAIN Online for my online MBA, and it has been an amazing experience. The teachers are very supportive, and the classes are easy to follow. I could study while working full-time. Compared to an online MBA with Manipal, JAIN's program feels more personal and practical."
                },
                {
                  name: "⭐ Rohit Verma – Online BBA (General Management)",
                  text: "I was searching for an online BBA near me, and I found JAIN Online. The lessons are clear, and the platform is simple to use. I also got great career advice and internship support. It's the best online degree in Jaipur for anyone who wants flexible learning and good guidance."
                },
                {
                  name: "⭐ Sneha Iyer – Online MBA (Finance)",
                  text: "I wanted an online degree near me that was respected by employers. With JAIN Online, I found both quality and flexibility. The online MBA course helped me learn practical business skills. It truly feels like studying at a top college in Bangalore from my home."
                },
                {
                  name: "⭐ Arjun Patel – BBA (Entrepreneurship)",
                  text: "I compared many universities, including those offering an online MBA with Manipal, but I liked JAIN Online the most. The study material is great, the support team is helpful, and the teachers make learning interesting. It's a perfect choice for online learners."
                },
                {
                  name: "⭐ Muskan Khan – Online MBA (HR Management)",
                  text: "The online MBA program at JAIN Online is very well planned. I learned from industry experts and worked on real projects. The flexibility allowed me to manage my job and studies easily. I can confidently say this is the best online degree in Jaipur."
                },
                {
                  name: "⭐ Aditya Rao – Online BCom (Accounting & Finance)",
                  text: "While looking for an online degree near me, I came across JAIN Online. The online classes are smooth, and the teachers explain everything clearly. It's amazing how a top college in Bangalore has made such a good online platform."
                },
                {
                  name: "⭐ Nikita Singh – Online MBA (Business Analytics)",
                  text: "I joined the online MBA at JAIN Online, and it's been great. The program is practical, and I learned new tools that helped me at work. If you're thinking about an online MBA with Manipal, you should also check out JAIN — it's equally strong and student-friendly."
                },
                {
                  name: "⭐ Ravi Joshi – BBA (Digital Marketing)",
                  text: "I live in Jaipur and wanted the best online degree in Bangalore. JAIN Online gave me exactly what I needed — flexible study, good mentors, and real-world projects. The learning experience is easy and enjoyable."
                },
                {
                  name: "⭐ Megha Das – Online MBA (International Business)",
                  text: "The online platform of JAIN Online is very user-friendly. The teachers are professional, and the study materials are detailed. No matter where you are — Jaipur, Delhi, or Bangalore — JAIN offers the best online degree near me with global exposure."
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl shadow-sm hover:shadow-lg p-6 transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">{review.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-800 text-lg font-medium mb-4">
                Ready to start your success story with <span className="text-blue-700 font-semibold">JAIN University Online?</span>
              </p>
              <button onClick={() => setOpenModal(type => type === null ? { type: 'apply' } : type)} className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition duration-300 cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>
        </section>


        {/* Reviews & Rankings */}
        <section id="JainReviews" className="py-12 sm:py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Jain Reviews & Rankings</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>NAAC A+ Accreditation ✅</li>
              <li>Ranked among top online universities in India ✅</li>
              <li>Strong academic reputation & global recognition ✅</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section id="Conclusion" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p>Jain University Online is shaping future-ready graduates with flexible, affordable, globally recognized online degrees. Whether you select an Online MBA Jain University, Online BCA Jain University, or any other course — you receive quality learning, expert support, and strong career advantages.</p>
            <ul className="list-disc list-inside mt-4">
              <li>Upgrade your career with UGC approved online degree programs</li>
              <li>Study anytime, anywhere — without interrupting your job</li>
              <li>Unlock global opportunities with a respected Jain University Online qualification</li>
            </ul>
            <div className="mt-6">
              <button onClick={() => setOpenModal(type => type === null ? { type: 'apply' } : type)} className="bg-gradient-to-r from-[#001C54] to-[#b91c1c] text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition cursor-pointer">Apply Now</button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id=" " className="bg-[#001C54] text-white py-6 px-4">
          <div className="max-w-7xl mx-auto relative">
            {/* Horizontal Dotted Line - Top */}
            <div className="border-dotted border-t-[1px] border-white/30 w-full absolute top-3 sm:hidden"></div>

            {/* Vertical Dotted Line - Center */}
            <div className="border-dotted border-l-[1px] border-white/30 h-full absolute left-1/2 transform -translate-x-1/2 sm:hidden"></div>

            <div className="flex flex-wrap justify-center md:justify-between items-center md:h-[120px]">

              {/* 40+ In-Demand Electives */}
              <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%] md:border-dotted md:border-r-[1px] md:border-white/30">
                <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">40 +</h3>
                <p className="text-xs font-medium font-[Inter] text-center">In-Demand Electives</p>
              </div>

              {/* 2,000+ Hiring Corporates */}
              <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%] md:border-dotted md:border-r-[1px] md:border-white/30">
                <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">2,000 +</h3>
                <p className="text-xs font-medium font-[Inter] text-center">Hiring Corporates</p>
              </div>

              {/* 20,000+ Courses on LinkedIn Learning */}
              <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%] md:border-dotted md:border-r-[1px] md:border-white/30">
                <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">20,000 +</h3>
                <p className="text-xs font-medium font-[Inter] text-center">Courses on LinkedIn Learning</p>
              </div>

              {/* 0 Cost EMI Option */}
              <div className="flex flex-col items-center justify-center xl:h-full gap-1 py-3 md:py-0 w-[120px] md:w-[25%]">
                <h3 className="text-xl md:text-2xl font-bold font-[Poppins]">0 Cost</h3>
                <p className="text-xs font-medium font-[Inter] text-center">EMI Option</p>
              </div>
            </div>
          </div>
        </section>


        <section id="Rankings" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading with Lines */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex-grow border-t-4 border-gray-400"></div>
              <h2 className="mx-4 text-3xl md:text-4xl font-bold text-blue-900">
                RANKINGS
              </h2>
              <div className="flex-grow border-t-4 border-gray-400"></div>
            </div>
            {/* Rankings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rankings.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white p-6 text-center flex flex-col items-center"
                >
                  {/* Full Dotted Border */}
                  <div className="absolute inset-0 border-4 border-dotted border-blue-500 rounded-lg"></div>

                  {/* Yellow Corners (Attached to Border) */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-400 rounded-tr-lg"></div>

                  {/* Content */}
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={80}
                    height={80}
                    className="mb-4 object-contain relative z-10"
                  />
                  <p className="text-gray-700 text-sm md:text-base font-medium relative z-10">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>




        <section id="Programs" className="py-12 px-6 bg-white font-[Inter]">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#003b59] font-[Poppins]">
            Jain University Online Programs
          </h2>

          <Tabs.Root defaultValue="all" className="w-full">
            <Tabs.List className="flex justify-center gap-4 mb-6">
              <Tabs.Trigger value="all" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                     hover:bg-blue-600 hover:text-white transition-colors duration-300
                     radix-state-active:bg-blue-600 radix-state-active:text-white">All</Tabs.Trigger>
              <Tabs.Trigger value="ug" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                     hover:bg-blue-600 hover:text-white transition-colors duration-300
                     radix-state-active:bg-blue-600 radix-state-active:text-white">UG</Tabs.Trigger>
              <Tabs.Trigger value="pg" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                     hover:bg-blue-600 hover:text-white transition-colors duration-300
                     radix-state-active:bg-blue-600 radix-state-active:text-white">PG</Tabs.Trigger>
            </Tabs.List>

            {/* All Courses */}
            <Tabs.Content value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
                {[...ugCourses, ...pgCourses].map((course, idx) => (
                  <EnquireCard key={idx} {...course} universityName="Jain University Online" />
                ))}
              </div>
            </Tabs.Content>

            {/* UG Courses */}
            <Tabs.Content value="ug">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
                {ugCourses.map((course, idx) => (
                  <EnquireCard key={idx} {...course} universityName="Jain University Online" />
                ))}
              </div>
            </Tabs.Content>

            {/* PG Courses */}
            <Tabs.Content value="pg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
                {pgCourses.map((course, idx) => (
                  <EnquireCard key={idx} {...course} universityName="Jain University Online" />
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </section>
        <section id="ExploreCourses" className="py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
              🎓 Explore Online Courses
            </h2>
            <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
              JAIN University Online offers a wide range of UGC-approved online degrees in Bangalore that combine
              flexibility, academic excellence, and real-world learning. Every course is designed to prepare students
              for success in their chosen careers — with top online degrees and best placements in reputed companies.
              Whether you want to build a business career, master computer science, or grow in finance,
              JAIN Online has the perfect program for you.
            </p>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Online MBA */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">💼 Online MBA – Master of Business Administration</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Take the next step in your career with JAIN's online MBA program. This two-year management degree helps you
                  develop leadership, decision-making, and problem-solving skills through live projects, case studies, and mentorship.
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mb-3">
                  <li>Specializations in Marketing, Finance, HR, Data Analytics, and International Business</li>
                  <li>Career support and top placements across India</li>
                </ul>
                <p className="text-gray-800 font-medium text-sm">
                  Ideal for working professionals and business leaders.
                </p>
              </div>

              {/* Online BCA */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">💻 Online BCA – Bachelor of Computer Applications</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Start your tech journey with JAIN's online BCA program. Learn programming, databases, and web development to
                  prepare for roles in IT, software development, and data analytics.
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mb-3">
                  <li>Hands-on learning with cloud computing & web design</li>
                  <li>Strong foundation for pursuing the online MCA</li>
                </ul>
                <p className="text-gray-800 font-medium text-sm">
                  Perfect for tech-focused students seeking flexibility.
                </p>
              </div>

              {/* Online MCA */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🖥️ Online MCA – Master of Computer Applications</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Advance your IT career with JAIN's online MCA program focused on artificial intelligence, data science,
                  and modern software engineering practices.
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mb-3">
                  <li>Guided projects by industry experts</li>
                  <li>Top placements in IT firms and startups</li>
                </ul>
                <p className="text-gray-800 font-medium text-sm">
                  Recognized and valued by global employers.
                </p>
              </div>

              {/* Online BBA */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">📊 Online BBA – Bachelor of Business Administration</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Build your business and management foundation with JAIN's online BBA. Learn marketing, finance, and
                  entrepreneurship directly from corporate mentors.
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mb-3">
                  <li>Real-world projects and placement assistance</li>
                  <li>Ideal for aspiring managers and entrepreneurs</li>
                </ul>
                <p className="text-gray-800 font-medium text-sm">
                  Begin your corporate journey with confidence.
                </p>
              </div>

              {/* Online MCom */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">💰 Online MCom – Master of Commerce</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Advance in finance and commerce through JAIN's online MCom. Master accounting, taxation, auditing, and business law.
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mb-3">
                  <li>Career support in banking, corporate finance, and accounting</li>
                  <li>Top online commerce degree with global recognition</li>
                </ul>
                <p className="text-gray-800 font-medium text-sm">
                  Designed for ambitious learners seeking growth.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-800 text-lg font-medium mb-4">
                Explore your path to success with <span className="text-blue-700 font-semibold">JAIN University Online</span>.
              </p>
              <button onClick={() => setOpenModal(type => type === null ? { type: 'apply' } : type)} className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition duration-300 cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>
        </section>
        <section id="KeyHighlights" className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
              🌟 Key Highlights of JAIN University Online
            </h2>
            <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover what makes JAIN University Online one of India's most trusted and dynamic platforms for
              higher education. From global recognition to flexible online learning — here's why students choose JAIN Online.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Highlight 1 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🎓 UGC-Approved and NAAC A+ Accredited University</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Earn your degree from one of India's top universities in Bangalore. JAIN Online is UGC-approved and NAAC A+ accredited — ensuring global recognition and trust.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">💼 Job-Oriented Online Programs</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Choose from career-focused programs like Online MBA, Online BBA, and more — designed to meet modern industry needs and open doors to top job opportunities.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🕒 100% Online Learning – Study Anytime, Anywhere</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Learn at your convenience through live and recorded sessions. Study from home, from anywhere in India — with full academic support and interactive tools.
                </p>
              </div>

              {/* Highlight 4 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🎯 Specialized Online MBA Courses</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Advance your management career with industry-driven online MBA specializations. Learn through case studies, real projects, and mentorship from experts.
                </p>
              </div>

              {/* Highlight 5 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">👩‍🏫 Experienced Teachers and Mentors</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Gain insights from expert professors and corporate professionals who bring real-world knowledge to your online classroom.
                </p>
              </div>

              {/* Highlight 6 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">💼 Placement and Career Support</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Receive full placement assistance, resume workshops, and interview training to transform your degree into real career success.
                </p>
              </div>

              {/* Highlight 7 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🧠 Interactive and Engaging Learning</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Attend live classes, watch recorded sessions, and participate in discussion forums that make learning engaging and interactive.
                </p>
              </div>

              {/* Highlight 8 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🌍 Global Alumni Network</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Join a worldwide community of successful JAIN alumni. Stay connected across India and abroad for lifelong learning and professional growth.
                </p>
              </div>

              {/* Highlight 9 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">💳 Easy and Flexible Fee Options</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  JAIN Online offers EMI plans, scholarships, and transparent fee structures to make education accessible and stress-free for every learner.
                </p>
              </div>

              {/* Highlight 10 */}
              <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300 sm:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🧭 Virtual Campus Experience</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Take a virtual tour of JAIN's modern Bangalore campus — experience digital classrooms, innovation centers, and interactive learning just like being on campus.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-800 text-lg font-medium mb-4">
                Ready to build your future with <span className="text-blue-700 font-semibold">JAIN University Online?</span>
              </p>
              <button onClick={() => setOpenModal(type => type === null ? { type: 'apply' } : type)} className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition duration-300 cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#001f54] text-white py-12">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              — Why should you pursue an Online Degree from JAIN (Deemed-to-be University)? —
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  {feature.icon}
                  <p className="font-semibold text-lg">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission process */}
        <div>
          <section id="Admission" className="relative py-20 bg-white">
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
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
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
                  <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 z-0 rounded-full"></div>

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
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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



        <section id="Eligibility" className="bg-[#003366] py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Certificate Image */}
            <div className="flex-1">
              <Image width={500} height={400} loading='lazy' src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327279/jainonlined_wg8465.webp" alt="Jain Online" className="w-full max-w-md mx-auto rounded shadow-lg" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Online Degree from Jain University Online
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                Jain University Online provides many services that has the benefits of e-lectures, counselling from academic advisors, career assistance, etc.
              </p>

              <h3 className="text-xl font-semibold mb-2">Benefits of Jain University Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Daily LIVE Classes by Faculty of International Repute</li>
                <li>Career Assistance & Exclusive Virtual Job Fairs</li>
                <li>Equivalent to JAIN (Deemed-to-be University) on-campus program degrees Globally recognized</li>
                <li>Hands-on & Immersive Learning through world-Class Experince</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto text-center px-6">
            {/* Heading */}
            <div className="flex items-center justify-center mb-10">
              <div className="h-[1px] bg-black flex-1"></div>
              <h2 className="px-4 text-2xl md:text-3xl font-bold text-[#001f54]">
                #ItAllAddsUp
              </h2>
              <div className="h-[1px] bg-black flex-1"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {featuressec.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between border border-gray-200 shadow-sm p-6 rounded-md h-full"
                >
                  {feature.icon}
                  <p className="font-semibold text-lg mt-4">{feature.title}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Partners Section */}
        <section id="Companies" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
                Our Top Hiring Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Jain University graduates are placed in leading companies across various industries
              </p>
            </motion.div>

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
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp" alt="Samsung3" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp" alt="Samsung4" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp" alt="Samsung5" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp" alt="Samsung6" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp" alt="Samsung7" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/8_otnhv8.webp" alt="Samsung8" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp" alt="Samsung9" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp" alt="Samsung" className="h-12 object-contain" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#001C54] to-[#b91c1c] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about Jain University Online programs, admissions, and more.
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
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#001C54] focus:ring-opacity-20 rounded-lg cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4 font-[Inter]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <FaChevronDown
                        className={`text-[#001C54] transition-colors ${openFaqIndex === index ? 'text-[#b91c1c]' : ''
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
                      <p className="text-gray-600 leading-relaxed font-[Inter]">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">


              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#0d2c6c] text-white py-10 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 tracking-wide">
              ONE-STOP STUDY DESTINATION
            </h2>

            {/* Content Wrapper */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain1_j2579m.webp"
                  alt="Jain University"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  JAIN (Deemed-to-be University)
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Promoted by Jain Group, the university is recognized among the top
                  universities in India and considered a preferred learner-centric
                  destination for students from different countries across the globe.
                  Known for its emphasis on education, entrepreneurship, research and
                  sports, JAIN (Deemed-to-be University) has some of the best minds in
                  the educational and research fields, and centres that inspire
                  entrepreneurship and innovative thinking.
                </p>
              </div>
            </div>

            {/* Footer Line */}
            <div className="text-center text-xs text-gray-300 mt-8 border-t border-gray-500 pt-4">
              © Copyrights JAIN UNIVERSITY All Rights Reserved
            </div>
          </div>
        </section>

        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_q9svec.png"
            universityName="Jain University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </div>
    </>
  );
};

export default Jain;