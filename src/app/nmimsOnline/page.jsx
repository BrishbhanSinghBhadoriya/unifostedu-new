'use client';

import React, { useState } from 'react';
import EnquireCard from '@/components/EnquireCard';
import {
  FaBookOpen,
  FaUserTie,
  FaBriefcase,
  FaClipboardCheck,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaRupeeSign,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { BsBuildingCheck } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronDown } from "lucide-react";
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const Nmims = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 from a recognized board with minimum 50% marks",
      fees: "₹1,45,000",
      specialization: "General Management, Digital Marketing, Finance, Human Resources",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in NMIMS Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 with commerce stream and minimum 50% marks",
      fees: "₹94,000",
      specialization: "Accounting, Finance, Taxation, Banking",
      image: "/images/bcom.webp",
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
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in NMIMS Online",
    },
    {
      course: "Master of Business Administration (WX)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 55% marks and 3 year Experience",
      fees: "₹4,00,000",
      specialization: "Applied Finance, Digital Marketing, Leadership & Strategy, Marketing, Operations & Supply Chain",
      image: "/images/mba-wx.webp",
      alt: "Master of Business Administration (WX) in NMIMS Online",
    },
  ];

  const allCourses = [
    ...ugCourses.map(course => ({ ...course, type: "UG" })),
    ...pgCourses.map(course => ({ ...course, type: "PG" })),
  ];

  const benefits = [
    {
      icon: <FaGraduationCap className="text-purple-600 text-4xl" />,
      title: "NAAC A++ Accredited",
      points: [
        "Highest accreditation grade from NAAC ensuring premium quality education.",
        "Globally recognized degrees with industry acceptance."
      ]
    },
    {
      icon: <BsBuildingCheck className="text-purple-600 text-4xl" />,
      title: "UGC Entitled Programs",
      points: [
        "All online programs are UGC-entitled and nationally recognized.",
        "Degrees hold same value as regular on-campus programs."
      ]
    },
    {
      icon: <MdSupportAgent className="text-purple-600 text-4xl" />,
      title: "24x7 Learning Support",
      points: [
        "Round-the-clock academic and technical support.",
        "Dedicated student relationship managers."
      ]
    },
    {
      icon: <AiOutlineSchedule className="text-purple-600 text-4xl" />,
      title: "Flexible Learning Schedule",
      points: [
        "Learn at your own pace with recorded lectures.",
        "Perfect for working professionals and students."
      ]
    },
    {
      icon: <FaUsers className="text-purple-600 text-4xl" />,
      title: "1.25L+ Student Community",
      points: [
        "Join India's largest online learning community.",
        "Network with professionals from 600+ cities."
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-600 text-4xl" />,
      title: "Industry Expert Faculty",
      points: [
        "Learn from experienced corporate professionals.",
        "Practical industry-oriented curriculum."
      ]
    },
    {
      icon: <FaRupeeSign className="text-purple-600 text-4xl" />,
      title: "Easy Payment Options",
      points: [
        "No-cost EMI options available.",
        "Scholarships for meritorious students."
      ]
    },
    {
      icon: <BiBookContent className="text-purple-600 text-4xl" />,
      title: "Advanced Digital Campus",
      points: [
        "State-of-the-art learning management system.",
        "Interactive live sessions and webinars."
      ]
    }
  ];

  const faqs = [
    {
      question: "What is NMIMS Global Online?",
      answer: `NMIMS Global Online is the digital learning initiative of SVKM's NMIMS (Narsee Monjee Institute of Management Studies), one of India's premier universities. Established in 1981, NMIMS has been a pioneer in management education and now brings the same quality education through flexible online programs designed for working professionals and students seeking career advancement.`
    },
    {
      question: "Is NMIMS Online degree valid?",
      answer: `Yes, NMIMS Global Online degrees are fully valid and recognized by UGC (University Grants Commission). The university holds NAAC A++ accreditation, the highest grade possible, ensuring that your degree is accepted by employers, government organizations, and other educational institutions across India and internationally.`
    },
    {
      question: "What courses are offered at NMIMS Global Online?",
      answer: `NMIMS Global Online offers carefully curated undergraduate and postgraduate programs:
      
      🔹 Undergraduate Programs (UG):
      - BBA (Bachelor of Business Administration)
      - B.Com (Bachelor of Commerce)

      🔹 Postgraduate Programs (PG):
      - MBA (Master of Business Administration)
      - MBA (WX) - Executive Program

      All programs are designed with industry relevance and future-ready curriculum.`
    },
    {
      question: "What is the eligibility for NMIMS Online courses?",
      answer: `Eligibility criteria vary by course:
      - For UG Programs: 10+2 pass with minimum 50% marks from recognized board
      - For PG Programs: Bachelor's degree with minimum 50% marks from recognized university
      - MBA (WX) requires 3 years of work experience along with graduation
      
      International students must submit equivalent qualifications.`
    },
    {
      question: "What is the fee structure of NMIMS Global Online?",
      answer: `NMIMS offers premium education at competitive fees:
      - BBA: ₹1,45,000 for full program
      - B.Com: ₹94,000 for full program
      - MBA: ₹1,44,000 for full program
      - MBA (WX): ₹4,00,000 for full program
      
      No-cost EMI options and scholarships available for eligible students.`
    },
    {
      question: "Does NMIMS Global Online provide placement assistance?",
      answer: `Yes, NMIMS provides comprehensive career support through:
      - Dedicated placement cell
      - Career counseling and resume building
      - Industry networking events
      - Interview preparation workshops
      - Access to NMIMS alumni network
      
      The university has strong corporate connections across sectors.`
    },
    {
      question: "What is the learning method at NMIMS Global Online?",
      answer: `NMIMS provides an immersive learning experience through:
      - Live interactive sessions with faculty
      - Recorded lectures for flexible learning
      - Comprehensive e-learning materials
      - Online assignments and assessments
      - Virtual labs and case studies
      - Peer discussion forums
      
      The platform is accessible on multiple devices.`
    },
    {
      question: "Are NMIMS Online degrees accepted abroad?",
      answer: `Yes, NMIMS degrees are globally recognized. The university's NAAC A++ accreditation and strong reputation make its degrees acceptable for higher education and employment worldwide. Many NMIMS alumni have pursued successful careers and further studies internationally.`
    },
    {
      question: "How are exams conducted at NMIMS Global Online?",
      answer: `Examinations at NMIMS Online are conducted through:
      - Online proctored examination system
      - Scheduled examination windows
      - Multiple choice and descriptive questions
      - Continuous evaluation through assignments
      - Project-based assessments
      
      Results are declared online and digital certificates are provided.`
    },
    {
      question: "How can I apply for NMIMS Global Online programs?",
      answer: `You can apply through these simple steps:
      1. Visit the official NMIMS Global Online portal
      2. Register and fill the online application form
      3. Upload required documents (marksheets, ID proof, photograph)
      4. Pay the application fee online
      5. Submit the application for review
      
      After verification, you will receive admission confirmation and LMS access.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>NMIMS Global Online - UG & PG Programs | NAAC A++ Accredited</title>
        <meta
          name="description"
          content="Explore online undergraduate (BBA, B.Com) and postgraduate (MBA, MBA WX) programs offered by NMIMS Global Online, NAAC A++ accredited. Premium education with flexible learning options."
        />
        <meta
          name="keywords"
          content="NMIMS Global Online, NMIMS Online, BBA Online NMIMS, B.Com Online NMIMS, MBA Online NMIMS, MBA WX, NAAC A++ University, Online Degree Programs Mumbai, Distance Learning, Premium Online Education"
        />
        <meta name="author" content="NMIMS Global Online" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="NMIMS Global Online - UG & PG Programs | NAAC A++ Accredited" />
        <meta property="og:description" content="Explore premium online undergraduate and postgraduate programs offered by NMIMS Global Online, NAAC A++ accredited, Mumbai, India." />
        <meta property="og:image" content="/images/nmims.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unifostedu.com/nmims" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NMIMS Global Online - UG & PG Programs | NAAC A++ Accredited" />
        <meta name="twitter:description" content="Explore premium online undergraduate and postgraduate programs offered by NMIMS Global Online, NAAC A++ accredited, Mumbai, India." />
        <meta name="twitter:image" content="/images/nmims.webp" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-md fixed top-0 w-full z-20">
          <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">
            <Image src="/images/nmims-logo.png" alt="NMIMS Global Online" width={100} height={100} className="h-12" />
            <div className="flex items-center gap-4">
              <a href="tel:+917042867717" className="flex items-center gap-2 text-gray-700 font-medium">
                📞 +91-7042867717
              </a>
              <button 
                onClick={() => setOpenModal({ type: 'apply' })}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative w-full h-[75vh] md:h-[85vh] mt-[90px] mb-[20px] font-[Poppins]">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/nmims.webp"
                  alt="NMIMS Global Online Programs"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                {/* Banner Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                    NMIMS Global Online
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
                    Advance your career with premium online UG & PG programs <br />
                    from India's leading NAAC A++ accredited university.
                  </p>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/nmims-banner2.jpg"
                  alt="NMIMS Online Learning"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Premium Online Education
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
                    Learn from industry experts with live interactive sessions <br />
                    and comprehensive digital learning resources.
                  </p>
                  <a
                    href="#admission-info"
                    className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
                  >
                    Get Admission Info
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/nmims-banner3.jpg"
                  alt="NMIMS Career Opportunities"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Join 1.25L+ Student Community
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
                    Become part of India's largest online learning network <br />
                    across 600+ cities worldwide.
                  </p>
                  <a
                    href="#courses"
                    className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* University Introduction Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side: Image */}
              <div>
                <Image
                  src="/images/nmims-campus.webp"
                  alt="NMIMS Global Online"
                  width={100}
                  height={100}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              {/* Right side: Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  Experience Premium Education with - <br />
                  <span className="bg-purple-600 text-white px-2 py-1 rounded">
                    NMIMS Global Online
                  </span>
                </h2>
                <p className="mt-4 text-gray-700">
                  <strong>NMIMS Global Online</strong> is the digital education initiative of 
                  <strong> SVKM's Narsee Monjee Institute of Management Studies</strong>, 
                  established in 1981 in <strong>Mumbai, Maharashtra</strong>. The university 
                  has earned the prestigious <strong>NAAC A++ grade accreditation</strong>, 
                  placing it among the top educational institutions in India.
                </p>
                <p className="mt-3 text-gray-700">
                  With over <strong>1.25 lakh students</strong> across <strong>600+ cities</strong>, 
                  NMIMS Global Online brings world-class education to your fingertips. Our programs 
                  are designed for working professionals and students who seek quality education 
                  with the flexibility to learn from anywhere.
                </p>
                <p className="mt-3 text-gray-700">
                  NMIMS is renowned for its industry-oriented curriculum, expert faculty, and 
                  strong corporate connections. Our online programs maintain the same academic 
                  rigor and quality standards as our on-campus programs, ensuring you receive 
                  a premium educational experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation & Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose NMIMS Global Online?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access premium learning resources, learn from industry experts, enhance your career prospects, 
                and join India's largest online learning community with NMIMS Global Online.
              </p>
            </div>

            {/* Accreditation Logos */}
            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              <img src="/images/ugc.webp" alt="UGC" className="h-16" />
              <img src="/images/naac.webp" alt="NAAC A++" className="h-16" />
              <img src="/images/aicte.webp" alt="AICTE" className="h-16" />
              <img src="/images/aiu.webp" alt="AIU" className="h-16" />
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Premium Learning Resources",
                  description: "Access to comprehensive e-books, video lectures, case studies, and industry research materials.",
                  icon: <FaBookOpen className="text-purple-600 text-3xl" />
                },
                {
                  title: "Industry Expert Faculty",
                  description: "Learn from experienced corporate professionals and academic experts with practical industry knowledge.",
                  icon: <FaUserTie className="text-purple-600 text-3xl" />
                },
                {
                  title: "Career Advancement Services",
                  description: "Comprehensive career support including resume building, interview preparation, and placement assistance.",
                  icon: <FaBriefcase className="text-purple-600 text-3xl" />
                },
                {
                  title: "Corporate Placement Support",
                  description: "Strong industry connections and dedicated placement cell for career opportunities with top companies.",
                  icon: <FaClipboardCheck className="text-purple-600 text-3xl" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section with Tabs */}
        <section id="courses" className="py-12 px-6 bg-white font-[Inter]">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#7b1fa2] font-[Poppins]">
            Explore NMIMS Global Online Programs
          </h2>

          {/* Tabs for Filter */}
          <Tabs.Root defaultValue="all" className="w-full">
            <Tabs.List className="flex justify-center gap-4 mb-10 flex-wrap">
              <Tabs.Trigger
                value="all"
                className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold 
                           hover:bg-[#7b1fa2] hover:text-white transition-colors duration-300
                           radix-state-active:bg-[#7b1fa2] radix-state-active:text-white"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="ug"
                className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold 
                           hover:bg-[#7b1fa2] hover:text-white transition-colors duration-300
                           radix-state-active:bg-[#7b1fa2] radix-state-active:text-white"
              >
                UG Programs
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pg"
                className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold 
                           hover:bg-[#7b1fa2] hover:text-white transition-colors duration-300
                           radix-state-active:bg-[#7b1fa2] radix-state-active:text-white"
              >
                PG Programs
              </Tabs.Trigger>
            </Tabs.List>

            {/* All Courses */}
            <Tabs.Content value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allCourses.map((course, idx) => (
                  <EnquireCard
                    key={idx}
                    {...course}
                    universityName="NMIMS Global Online"
                  />
                ))}
              </div>
            </Tabs.Content>

            {/* UG Courses */}
            <Tabs.Content value="ug">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {ugCourses.map((course, idx) => (
                  <EnquireCard
                    key={idx}
                    {...course}
                    universityName="NMIMS Global Online"
                  />
                ))}
              </div>
            </Tabs.Content>

            {/* PG Courses */}
            <Tabs.Content value="pg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {pgCourses.map((course, idx) => (
                  <EnquireCard
                    key={idx}
                    {...course}
                    universityName="NMIMS Global Online"
                  />
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-500">►</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Procedure */}
        <section id="admission-info" className="relative py-20 bg-gray-50">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-100 rounded-full blur-3xl animate-pulse"></div>

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
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                A streamlined, transparent admission process designed for working professionals 
                to begin their premium learning journey seamlessly.
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
                Simple 4-Step Admission Process
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-purple-400 to-purple-500 z-0 rounded-full"></div>

                {[
                  {
                    number: "01",
                    title: "Online Application",
                    desc: "Fill the digital application form on NMIMS portal.",
                  },
                  {
                    number: "02",
                    title: "Document Submission",
                    desc: "Upload required documents and pay application fee.",
                  },
                  {
                    number: "03",
                    title: "Profile Review",
                    desc: "Get admission confirmation and student credentials.",
                  },
                  {
                    number: "04",
                    title: "Fee Payment & Enrollment",
                    desc: "Complete program fee payment and start learning.",
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
                    <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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

        {/* Certificate + Benefits */}
        <section className="bg-[#7b1fa2] py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-1">
              <Image width={100} height={100} loading='lazy' src="/images/nmims-certi.webp" alt="NMIMS Global Online Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Premium Online Degree from NMIMS
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                NMIMS Global Online offers premium education with the same academic rigor and value 
                as on-campus programs. Our online degrees are designed for ambitious professionals 
                and students who seek quality education with maximum flexibility.
              </p>
              <h3 className="text-xl font-semibold mb-2">Benefits of NMIMS Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>NAAC A++ Accredited University</li>
                <li>UGC-entitled degrees with national recognition</li>
                <li>Learn from industry experts and corporate leaders</li>
                <li>Flexible learning with live and recorded sessions</li>
                <li>Strong corporate connections and placement support</li>
                <li>Access to 1.25L+ student community network</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Frequently Asked Questions (FAQs) – NMIMS Global Online
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-6 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your premium education journey' : 'Share your details and our counselor will reach out'}
              imageSrc="/images/nmims.webp"
              universityName="NMIMS Global Online"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </section>

        {/* Hiring Partners Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Our Alumni Work At
              </h2>
              <p className="text-xl text-gray-600 mt-2">
                Reputed organizations where NMIMS Global Online graduates have built successful careers
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "/images/aditya-birla.webp",
                "/images/airtel.webp",
                "/images/aurobindo.webp",
                "/images/bajaj-allianz.webp",
                "/images/bharti-airtel.webp",
                "/images/bosch.webp",
                "/images/cipla.webp",
                "/images/coca-cola.webp",
                "/images/cyient.webp",
                "/images/diageo.webp",
                "/images/ey.webp",
                "/images/fedex.webp",
                "/images/hero.webp",
                "/images/himalaya.webp",
                "/images/hinduja.webp",
                "/images/icici.webp",
              ].map((src, i) => (
                <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                  <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Important Links */}
            <div>
              <h3 className="text-white font-bold mb-4">IMPORTANT LINKS</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-400">Home</a></li>
                  <li><a href="#" className="hover:text-purple-400">About Us</a></li>
                  <li><a href="#" className="hover:text-purple-400">Programs</a></li>
                  <li><a href="#" className="hover:text-purple-400">Admissions</a></li>
                  <li><a href="#" className="hover:text-purple-400">UGC-DEB Approval</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-400">Student Portal</a></li>
                  <li><a href="#" className="hover:text-purple-400">FAQs</a></li>
                  <li><a href="#" className="hover:text-purple-400">Contact Us</a></li>
                  <li><a href="#" className="hover:text-purple-400">Mandatory Disclosure</a></li>
                  <li><a href="#" className="hover:text-purple-400">Public Notice</a></li>
                </ul>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-bold mb-4">ABOUT</h3>
              <p className="text-sm leading-6">
                NMIMS Global Online offers UGC-entitled online degree programs with NAAC A++ accreditation. 
                With over 1.25 lakh students across 600+ cities, we provide premium education that combines 
                academic excellence with industry relevance to help students build successful global careers.
              </p>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-white font-bold mb-4">GET IN TOUCH</h3>
              <p className="text-sm leading-6">
                NMIMS Global Access School<br />
                For Continuing Education (NGA-SCE)<br />
                Mumbai, Maharashtra, India
              </p>
              <p className="mt-3 text-sm">
                General Helpline No: <br />
                <a href="tel:+91-7042867717" className="text-yellow-400 font-semibold">+91-7042867717</a>
              </p>
              <p className="mt-2 text-sm">
                Email: <br />
                <a href="mailto:info@unifostedu.com" className="text-yellow-400 font-semibold">info@unifostedu.com</a>
              </p>
            </div>
          </div>

          {/* Logo + Social */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src="/images/nmims-logo.png" alt="NMIMS Global Online" width={100} height={100} className="h-10" />
              <div>
                <h2 className="text-white font-bold text-xl">NMIMS Global Online</h2>
                <p className="text-sm text-gray-400">Premium Education Since 1981</p>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
            All rights reserved | NMIMS Global Online
          </div>
        </footer>
      </div>
    </>
  );
};

export default Nmims;