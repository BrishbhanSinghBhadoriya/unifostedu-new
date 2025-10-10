'use client';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
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
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import Script from 'next/script';
import { Laptop, MessageSquare, Users, Clock } from "lucide-react";
import Link from "next/link";
const UniversityPage = () => {
  // University data - you can replace this with your actual data
  const universityData = {
    name: "Shardha University Name",
    shortName: "Sharda",
    logo: "/images/shardalogos.webp",
    heroImage: "/images/university-hero.webp",
    description: "Globally recognized university offering quality online education",
    themeColor: "#EC027C",
    accreditation: "NAAC A+",
    phone: "+91-7042867717"
  };

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,05,000",
      specialization: "General",
      image: "/images/bba-online-image.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Business Administration (BBA)",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,05,000",
      specialization: "General",
      image: "/images/bca-online-image.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Computer Applications (BCA)",
    },
    {
      course: "Bachelor of Art(Hons.) (BA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,05,000",
      specialization: "Political Science,",
      image: "/images/bcom-online-image.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Art (BA)",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,00,000",
      specialization: "Finance,Sales And Marketing, Human Resources Management,Data Science And Business Analytics, HelthCare And Hospital Management",
      image: "/images/mba-online-image.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Business Administration (MBA)",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,00,000",
      specialization: "Data Science, Computer Science And Information Technology",
      image: "/images/mca-online-image.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Computer Applications (MCA)",
    },
      {
      course: "Master of Commerce (M.Com) ",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "50,000",
      specialization: "Public Accounting",
      image: "/images/mcom-online-image.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Computer Applications (MCA)",
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
      question: "Is Sharda University Online approved by UGC and recognized for online degrees?",
      answer: `
      Yes. Sharda University Online is officially recognized by the University Grants Commission (UGC) and approved by the Distance Education Bureau (DEB), which means all degrees offered through online mode are fully valid and carry the same recognition as regular on-campus degrees. 
      The university holds a prestigious NAAC A+ accreditation and is ranked 86th in the NIRF 2025 university ranking list. Sharda Online also has the QS I-GAUGE E-LEAD certification for excellence in digital learning — ensuring credibility, academic quality, and national recognition.
      Employers and government bodies across India accept Sharda Online degrees for higher education and job applications.`
    },
    {
      question: "Is Sharda University Online good for working professionals?",
      answer: `
      Absolutely. Sharda University Online is designed specifically for working professionals and fresh graduates who wish to continue learning while managing their careers or personal schedules. 
      The university provides flexible study options through its advanced Learning Management System (LMS), allowing students to attend live sessions or watch recorded lectures at their convenience. 
      Course materials, assignments, and quizzes are accessible 24/7, which means professionals can study at their own pace without disturbing their work-life balance. 
      Additionally, dedicated academic mentors and placement teams guide students throughout their journey — from skill building to final job placements.`
    },
    {
      question: "What are the top online courses offered by Sharda University?",
      answer: `
      Sharda University Online offers a wide range of undergraduate and postgraduate degree programs that are industry-oriented and career-focused. Popular online courses include:
      - **Online BBA (Bachelor of Business Administration):** Ideal for those aiming to build management and entrepreneurship skills.
      - **Online BCA (Bachelor of Computer Applications):** Perfect for students interested in IT, data science, or software development.
      - **Online BA(hons.) (Bachelor of Art):** Students pursuing this program develop strong analytical, research, and communication skills that prepare them for careers in civil services, public policy, journalism, law, and academia. B.A. in Political Science also serves as an excellent foundation for UPSC and other competitive exams, as it enhances knowledge of current affairs and government structures.
      - **Online MBA (Master of Business Administration):** Offers specializations in Marketing, Finance, HR, and Business Analytics.
      - **Online MCA (Master of Computer Applications):** Designed for graduates aiming to pursue careers in AI, Data Science, Cloud Computing, or Cyber Security.
      - **Online M.Com (Master of Commerce)(Public Accounting)
      All online programs are developed by experienced faculty members and reviewed regularly to match current industry standards.`
    },
    {
      question: "What is the admission process for Sharda University Online 2025?",
      answer: `
      The admission process for Sharda University Online is simple and fully digital:
      1️⃣ Visit the official Sharda University website (www.sharda.ac.in or online.sharda.ac.in).  
      2️⃣ Fill out the online application form with personal and academic details.  
      3️⃣ Pay the registration fee — ₹1,500 for male and ₹1,000 for female candidates.  
      4️⃣ Appear for the Sharda University Admission Test (SUAT), an online aptitude-based exam.  
      5️⃣ Shortlisted students may be invited for an online counseling session or personal interview (for some programs).  
      6️⃣ After approval, students receive their enrollment number and can begin classes on the LMS platform.
      
      The process is transparent, quick, and student-friendly, allowing learners to apply from any location in India or abroad.`
    },
    {
      question: "What is the fee structure for Sharda University Online courses?",
      answer: `
      The online degree fee structure at Sharda University is affordable compared to other private universities, and easy EMI options are also available.  
      - **Online BBA:** ₹1,05,000 total (can be paid semester-wise).  
      - **Online BCA:** ₹1,05,000 total.  
      - **Online BA(hons.):** ₹1,05,000 total.  
      - **Online MBA:** ₹1,00,000 total (₹25,000 per semester).  
      - **Online MCA:** ₹1,00,000 total.
      - **Online M.Com:** ₹50,000 total.
      Students can pay fees in flexible installments or avail zero-cost EMI plans through finance partners. Sharda University also provides scholarships for meritorious students, which can reduce tuition costs significantly.`
    },
    {
      question: "What kind of placement assistance does Sharda University Online offer?",
      answer: `
      Sharda University Online provides complete placement support to all enrolled students through its Career Development Cell (CDC). The university has tie-ups with top national and international companies for internships and full-time job placements.  
      Placement services include:
      - Resume writing and LinkedIn profile optimization.  
      - Soft skill and communication workshops.  
      - Mock interviews and aptitude preparation.  
      - Career counseling and mentorship programs.  
      - Job fairs and industry networking sessions.  
      
      Students have been successfully placed in reputed organizations across IT, finance, marketing, and management domains.`
    },
    {
      question: "Does Sharda University Online offer scholarships or EMI options?",
      answer: `
      Yes. Sharda University offers a wide range of merit-based and need-based scholarships for students enrolling in online programs.  
      Scholarships are awarded based on academic performance in previous exams, SUAT scores, or other qualifying criteria.  
      Some students may receive partial or full tuition fee waivers. To retain the scholarship, maintaining a minimum CGPA (like 8.0) and required attendance is mandatory.  
      Additionally, students can choose to pay through **no-cost EMI** or flexible monthly installments, making education accessible to everyone.`
    },
    {
      question: "How does the online learning system (LMS) of Sharda University work?",
      answer: `
      Sharda University uses a world-class Learning Management System (LMS) that acts as a complete digital classroom. Students can:
      - Attend live interactive classes with faculty.  
      - Access recorded lectures anytime.  
      - Participate in group discussions and quizzes.  
      - Submit assignments and projects online.  
      - Download e-books and study materials from the digital library.  
      
      The LMS also supports performance tracking, progress reports, and feedback systems to ensure that every learner receives a personalized learning experience.`
    },
  
    {
      question: "Are online degrees from Sharda University valid internationally?",
      answer: `
      Yes. Sharda University Online degrees are globally recognized. The university has partnerships and collaborations with academic institutions and corporations across more than 95 countries.  
      Graduates have successfully used their Sharda degrees to pursue higher education and career opportunities abroad. The UGC and NAAC A+ accreditation further ensure international credibility and acceptance.`
    },
    {
      question: "Why should I choose Sharda University Online over other online universities?",
      answer: `
      Sharda University stands out among India’s top online universities because of its strong academic reputation, diverse student community, and quality digital learning infrastructure.  
      - **Accredited Excellence:** NAAC A+, NIRF Rank 86, UGC-Entitled.  
      - **Global Learning:** Students from 95+ countries.  
      - **Career-Focused:** Industry-relevant curriculum and expert faculty.  
      - **Affordability:** Flexible payment, EMI, and scholarship options.  
      - **Reputation:** Part of Sharda Group — a trusted name in education since 2009.
      
      This combination of quality, affordability, and employability makes Sharda University Online a top choice for modern learners.`
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
  .queens {
    font-family: 'Queens', serif;
  }

  .poppins {
    font-family: "Poppins", "Helvetica Neue", Arial, sans-serif;
  }

  section {
    padding: 40px;
  }
`}</style>


<div className="poppins overflow-x-hidden">
        {/* Header */}
        <div className="queens overflow-x-hidden">
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src={universityData.logo} 
                  alt={`${universityData.name} Logo`} 
                  className="h-8 w-auto sm:h-10 lg:h-12" 
                />
                 {/* <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                  <span style={{ color: universityData.themeColor }}>Online</span>{" "}
                  <span className="text-gray-800">{universityData.shortName}</span>
                </h1> */}
              </div>

              {/* Contact & Apply */}
              <div className="flex items-center gap-2 sm:gap-4">
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
      </div>
        {/* Hero Section */}
          <div className="queens overflow-x-hidden">
         <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
         <div className="absolute inset-0 overflow-x-auto no-scrollbar">
          <div className="absolute inset-0 bg-[url('/images/sharda.webp')] bg-cover bg-center opacity-200"></div>
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
                      {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'BA'].map((program, i) => (
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
          </div>
        </section>
        </div>
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
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
        

        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-12xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600">Technology</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          At UniFost, we leverage cutting-edge technology to create an engaging
          and interactive online learning experience for every student.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Laptop className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Advanced LMS
            </h3>
            <p className="text-gray-600 text-sm">
              State-of-the-art Learning Management System (LMS) offering a
              near face-to-face, immersive learning experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <MessageSquare className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Smart Communication
            </h3>
            <p className="text-gray-600 text-sm">
              Easily resolve all queries with our built-in chat and messaging
              feature for instant mentor support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community Learning
            </h3>
            <p className="text-gray-600 text-sm">
              Join online forums and peer groups to collaborate and share ideas
              through diverse discussions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Clock className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Anytime Access
            </h3>
            <p className="text-gray-600 text-sm">
              Get instant and convenient access to all learning materials
              anytime, anywhere at your own pace.
            </p>
          </div>
        </div>
      </div>
    </section>
        {/* Courses Section */}
        <section className="py-20 bg-white">
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
              

              <section className="bg-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto text-gray-900">
    {/* Section Header */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      🎓 Sharda Online – Learn from Anywhere
    </h2>
    <p className="text-center text-gray-700 mb-12 text-lg md:text-xl">
      Launched in <span className="font-semibold">2023</span> by Sharda University, 
      Sharda Online is a modern digital learning platform providing undergraduate and postgraduate programs for students seeking flexibility and quality education.
    </p>
             <section id="Courses" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🎓 Sharda Online – Courses Overview
        </h2>

        {/* Undergraduate Courses */}
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
          Undergraduate (UG) Courses
        </h3>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Fees (₹)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
              </tr>
            </thead>
            <tbody>
              {ugCourses.map((course, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-200 ease-in-out"
                >
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {course.course}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Postgraduate Courses */}
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
          Postgraduate (PG) Courses
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Fees (₹)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
              </tr>
            </thead>
            <tbody>
              {pgCourses.map((course, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-200 ease-in-out"
                >
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {course.course}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section> 
    {/* Undergraduate Courses */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
        Undergraduate Programs (UG)
      </h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><span className="font-semibold">BA in Political Science:</span> Gain a strong foundation in political theories, governance, and international relations. Ideal for careers in government, public policy, research, and administration.</li>
        <li><span className="font-semibold">BBA (Bachelor of Business Administration):</span> Focus on business management principles with specializations such as Finance, Marketing, HR, and Entrepreneurship.</li>
        <li><span className="font-semibold">BCA (Bachelor of Computer Applications):</span> Build expertise in software development, data science, cyber security, and cloud computing.</li>
      </ul>
    </div>

    {/* Postgraduate Courses */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
        Postgraduate Programs (PG)
      </h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><span className="font-semibold">MBA (Master of Business Administration):</span> Specializations include Human Resource Management, Marketing Management, Finance, and Healthcare & Hospital Management.</li>
        <li><span className="font-semibold">MCA (Master of Computer Applications):</span> Focus on advanced computing, AI, data science, and emerging technologies.</li>
        <li><span className="font-semibold">M.Com (Master of Commerce) in Public Accounting:</span> Gain expertise in accounting, taxation, auditing, and financial management for careers in corporate finance and accounting.</li>
      </ul>
    </div>

    {/* Why Choose Sharda Online */}
    <div className="bg-blue-50 rounded-lg p-6 md:p-10">
      <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
        Why Choose Sharda Online?
      </h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>State-of-the-art Learning Management System (LMS) for an immersive learning experience.</li>
        <li>Interactive online forums and peer discussions for diverse perspectives.</li>
        <li>Industry-relevant curriculum designed by expert faculty.</li>
        <li>Placement assistance and global recognition from Sharda University.</li>
        <li>Flexible learning, allowing students to study anytime, anywhere.</li>
      </ul>
    </div>

    <p className="mt-8 text-center text-gray-700 text-lg">
      Sharda Online empowers students to advance their careers, gain new skills, and pursue higher education with a globally recognized degree from anywhere in the world.
    </p>
  </div>
</section>

                  {/*  Add Quick Comparison Table */}
<section id='QuickComparison' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-[#f7188b]">Online vs Regular</span> Degree Comparison
    </h2>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Sharda Online University</th>
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
       
                 </section>



              {/* Certificate + Benefits */}
                    <section className="bg-[#003366] py-8 px-4 overflow-hidden">
                      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                          <Image width={100} height={100} loading="lazy" src="/images/certificateshardaonline.webp" alt="certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
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

                    
                      <section id="Courses" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🎓 Sharda Online – Courses Overview
        </h2>

        {/* Undergraduate Courses */}
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
          Undergraduate (UG) Courses
        </h3>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Fees (₹)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
              </tr>
            </thead>
            <tbody>
              {ugCourses.map((course, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-200 ease-in-out"
                >
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {course.course}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Postgraduate Courses */}
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
          Postgraduate (PG) Courses
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Fees (₹)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
              </tr>
            </thead>
            <tbody>
              {pgCourses.map((course, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-200 ease-in-out"
                >
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {course.course}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                  <td className="border border-gray-300 px-4 py-3">{course.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>   

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
       
    
           <section className="py-12 bg-gray-100">
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
                <Image width={100} height={100} loading="lazy" src="/images/company.webp" alt="Company" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/company1.webp" alt="Microsoft" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/company9.webp" alt="Company 9" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/com10.webp" alt="Company 10" className="h-12 object-contain" />
              </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/companany4.webp" alt="Company4" className="h-12 object-contain" />
              </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/company6.webp" alt="Company 6" className="h-12 object-contain" />
              </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/companany5.webp" alt="Companany5" className="h-12 object-contain" />
              </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/adove.webp" alt="Adove" className="h-12 object-contain" />
              </div>
                    
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/3.webp" alt="Samsung3" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/4.webp" alt="Samsung4" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/5.webp" alt="Samsung5" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/6.webp" alt="Samsung6" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/7.webp" alt="Samsung7" className="h-12 object-contain" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/8.webp" alt="Samsung8" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/9.webp" alt="Samsung9" className="h-12 object-contain" />
              </div>
        
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Image width={100} height={100} loading="lazy" src="/images/samsung.webp" alt="Samsung" className="h-12 object-contain" />
              </div>
              {/* Add more cards here as needed */}
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-20 bg-white">
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
                  className="bg-white text-[#f7188b] font-semibold px-12 py-4 rounded-full hover:bg-[#f7188b]/10 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
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
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8 overflow-hidden">
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
                      <button onClick={() => setOpenModal({ type: 'apply' })} className="text-gray-400 hover:text-[#f7188b] transition-colors">
                        {program}
                      </button>
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
                      <Link href="#" className="text-gray-400 hover:text-[#f7188b] transition-colors">
                        {item}
                      </Link>
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
            imageSrc="/images/sharda1.webp"
            universityName={universityData.name}
            defaultProgram={openModal.program || 'MBA'}
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
        
      </div>
    </>
  );
};

export default UniversityPage;