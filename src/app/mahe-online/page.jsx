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
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import Script from 'next/script';

const Manipal = () => {

 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Finance & Accounting, Digital Marketing, Enterepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "/images/bba-online-image.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "/images/manipal-online-mca.png",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Computer Applications (BCA) in Manipal Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "99,000",
      specialization: "General",
      image: "/images/bcom-online-image.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Commerce (B.Com) in Manipal Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,75,000",
      specialization: "Super/Dual(Human Resource Management and Finance, Finance and Marketing, Marketing and Human Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Artificial Intelligence Banking and Finance, 15 other fields)",
      image: "/images/mba-online-image.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML", 
      image: "/images/mca1.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,08,000",
      specialization: "General", 
      image: "/images/m.com.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Commerce (M.Com) in Manipal Online",
    },
  
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000 - 1,40,000",
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "/images/ma1.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Arts (MA) in Manipal Online",
    },
  ];
    

 const faqData = [
  {
    question: "Is Manipal Academy of Higher Education(MAHE)) recognized by UGC and NAAC?",
    answer:
      "Yes, Manipal Academy of Higher Education(MAHE)) (MAHE) is recognized by the University Grants Commission (UGC) and accredited by NAAC. Choosing an online program from Manipal Online University ensures you receive a credible and globally recognized degree. MAHE's accreditation guarantees that your online Manipal University degree meets high academic standards and is accepted by employers and educational institutions worldwide.",
  },
  {
    question: "What online programs are offered by Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Manipal Online University offers a wide range of online programs at MAHE, including Management, MBA, BBA, Computer Science, Data Science, BCA, MCA, and professional certificate courses. By enrolling in online courses from Manipal Academy of Higher Education(MAHE)), students can access flexible learning schedules while earning a degree from a top-ranked university.",
  },
  {
    question: "Are online degrees from Manipal Academy of Higher Education(MAHE)) valid for government jobs?",
    answer:
      "Yes, online degrees from Manipal Academy of Higher Education(MAHE)), approved by UGC-DEB, are valid for government jobs, competitive exams like UPSC, and higher education. Studying at Manipal Online University ensures your MAHE online degree is recognized by government authorities and other educational institutions.",
  },
  {
    question: "What is the admission process for online courses?",
    answer:
      "The admission process at Manipal Online University is simple and fully online. Prospective students can apply for MAHE online programs by filling out the application form, submitting the required documents, and completing the fee payment. Online Manipal University admissions are designed to be hassle-free, making it easy to enroll in programs from anywhere in India or abroad.",
  },
  {
    question: "How much are the fees for online courses at Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Fees for online programs at Manipal Academy of Higher Education(MAHE)) vary depending on the course. MAHE provides flexible payment options and no-cost EMI plans for online Manipal University students. By choosing an online Manipal University program, students can pursue quality education without financial stress.",
  },
  {
    question: "Does Manipal Academy of Higher Education(MAHE)) provide placement assistance?",
    answer:
      "Yes, Manipal Online University offers dedicated placement assistance to students of online programs at MAHE. Graduates from online Manipal University courses receive career guidance, networking opportunities, and support to find the right job in their respective fields. Choosing MAHE ensures strong career support even for online learners.",
  },
  {
    question: "What is the duration of online programs?",
    answer:
      "The duration of online programs at Manipal Academy of Higher Education(MAHE)) depends on the specific course. Most undergraduate online Manipal University programs run for 3–4 years, while postgraduate online MAHE programs range from 1–2 years. Studying at Manipal Online University provides flexibility to complete your degree while managing other commitments.",
  },
  {
    question: "Are the online degrees internationally recognized?",
    answer:
      "Yes, online degrees from Manipal Academy of Higher Education(MAHE)) are internationally recognized. Select online programs from Manipal Online University are WES-accredited, adding global value to your MAHE degree. Choosing online Manipal University ensures your degree holds weight for international job opportunities and higher studies abroad.",
  },
  {
    question: "Can working professionals pursue online courses?",
    answer:
      "Absolutely! Online programs from Manipal Academy of Higher Education(MAHE)) are designed for working professionals. MAHE's flexible schedule allows online Manipal University students to learn at their own pace without interrupting their careers. Enrolling in online Manipal University courses is ideal for career growth and skill enhancement while working.",
  },
  {
    question: "What is the difference between online and regular courses at Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Online Manipal University programs provide the same accredited degree as regular MAHE courses. The key difference is flexibility—students can access lectures, assignments, and live sessions digitally. Choosing an online program at Manipal Academy of Higher Education(MAHE)) offers quality education and the same global recognition without the need to attend a physical campus.",
  },
  {
    question: "Does the university offer scholarships for online programs?",
    answer:
      "Yes, Manipal Online University offers exclusive scholarships for meritorious students, defense personnel, government employees, and differently-abled learners. By enrolling in online programs at MAHE, students can avail financial support while earning a recognized degree from Manipal Academy of Higher Education(MAHE)).",
  },
  {
    question: "Is technical support provided for online students?",
    answer:
      "Yes, Manipal Online University provides dedicated technical support to online MAHE students. From accessing course materials to attending live sessions, online Manipal University ensures a smooth learning experience. Support is available for all online Manipal University programs, making it convenient and reliable for students.",
  },
];




  const testimonials = [
    {
      name: "Mohit Kumar",
      course: "MCA",
      university: "MAHE",
      text: "I always wanted to pursue my higher education dream without quitting my job, and MAHE has made it possible for me through their online degrees. My online MCA degree has given me wings to fly and chase my career aspirations."
    },
    {
      name: "Rajeev ",
      course: "B.Com",
      university: "MAHE",
      text: "Funding my undergraduate degree and my younger brother's education has been possible only because of Manipal Academy of Higher Education(MAHE))'s affordable online B.Com degree. Thanks to Online Manipal, I'm able to manage my work and academics. I believe this online degree will help me become personally and financially independent."
    },
    {
      name: "Sohil",
      course: "MBA",
      university: "MAHE",
      text: "As a working professional, I wanted to enhance my domain knowledge and move to managerial roles. I found Manipal Academy of Higher Education(MAHE))'s online MBA program as the right opportunity to climb up my career ladder. The program has helped me build new skills required to thrive in the industry."
    },
    {
      name: "Akshansh",
      course: "M.Com",
      university: "MAHE",
      text: "With over 2 years of work experience in accounting, I wanted to pursue an online M.Com degree to boost my career further and get a higher salary. Thanks to Online Manipal, I'm able to manage my work life and academic through flexible live classes and recorded sessions which are available on the portal."
    }
  ];
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');
  const [openModal, setOpenModal] = useState(null);
  const [activeTab, setActiveTab] = useState('all');


  

  return (
    <>
      <Head>
        <title> "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses - UNIFOST",</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal Academy of Higher Education Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal Academy of Higher Education(MAHE)), MAHE Online, BBA in MAHE Online, BCA in MAHE Online, B.Com in MAHE Online, MBA in MAHE Online, MCA in MAHE Online, M.Com in MAHE Online, MA in MAHE Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal Academy of Higher Education Online Degrees" />
        <meta name="robots" content="index, follow" /> 
        <link rel="canonical" href="https://unifostedu.com/manipal" />
        <link href="https://fonts.cdnfonts.com/css/queens" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Manipal Academy of Higher Education Online Degrees | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="/images/manipal.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal Academy of Higher Education Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal Academy of Higher Education. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="/images/manipal.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <style jsx>{`
        .queens { font-family: 'Queens', serif; }
      `}</style>
      
      <div className="queens">
        {/* Professional Responsive Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="/images/manipallogo.jpg" 
                  alt="Mahe Logo" 
                  className="h-8 w-auto sm:h-10 lg:h-12" 
                />
                <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                  <span className="text-[#ff7a36]">Online</span>{" "}
                  <span className="text-gray-800">Manipal</span>
                </h1>
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-orange-600 transition-colors"
                > 
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91-7042867717</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  📞
                </a>
                
                {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Premium Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('/images/mahe-uni.webp')] bg-cover bg-center opacity-200"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                {/* Accreditation Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">NAAC A+ Accredited • UGC Approved</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="font-queens text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white">Transform Your</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      Career with
                    </span>
                    <span className="block text-white">Manipal Academy of Higher Education</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Earn globally recognized degrees from Manipal Academy of Higher Education with 100% online learning and placement assistance.
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
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30 flex items-center justify-center gap-3"
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
                  <h3 className="text-2xl font-bold text-white text-center">Why Choose Manipal Academy of Higher Education Online?</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '50+', label: 'Countries' },
                      { number: '100K+', label: 'Students' },
                      { number: '93%', label: 'Positive ROI' },
                      { number: '200+', label: 'Hiring Partners' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-orange-400">{stat.number}</div>
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Statistics Section */}
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
                  title: 'NAAC A+ Accredited',
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
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

        {/* Professional Rankings & Accreditations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized by leading accreditation bodies and ranked among India's top universities
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { img: '/images/naac.webp', title: 'NAAC A+ Accredited University' },
                { img: '/images/ugc.webp', title: 'UGC-entitled Online Degrees' },
                { img: '/images/nirf.webp', title: "Amongst India's top 60 Universities in 2025" },
                { img: '/images/aicte.webp', title: 'AICTE Norms Compliant' },
                { img: '/images/wes.webp', title: 'Globally Recognized Online Degrees' },
                { img: '/images/acu.webp', title: 'Member of ACU' },
                { img: '/images/icas.webp', title: 'ICAS Canada' },
                { img: '/images/iqas.webp', title: 'IQAS' },
              ].map((item, i)=>(
                <div key={i} className="group">
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        width={400} 
                        height={260} 
                        className="w-full h-full max-h-24 sm:max-h-32 object-contain group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Manipal Academy of Higher Education */}
        <section className="relative py-20 bg-[#0B0B10] text-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">
              {[
                {value:'60+', label:'Countries and 2000+ towns &\ncities- our students span the globe'},
                {value:'100k+', label:'Learners have been empowered through Online Manipal'},
                {value:'93%', label:'Of students say their online degree has a positive ROI'},
                {value:'81%', label:'Of students find online is better than or equal to on-campus learning'}
              ].map((s, i) => (
                <div key={i} className="text-left">
                  <div className="font-queens text-5xl sm:text-6xl md:text-7xl leading-none">{s.value}</div>
                  <p className="mt-3 text-sm sm:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Heading */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Why Students Choose Us</h3>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Card 1 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🏅</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Degree from top ranked Manipal universities</h4>
                <p className="text-gray-600 text-sm">Graduate with UGC-entitled, NAAC A+ accredited degrees trusted by employers.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">C</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Exclusive Coursera access</h4>
                <p className="text-gray-600 text-sm">Free access to 10K+ courses and professional certificates from global partners.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Scholarships up to 30%</h4>
                <p className="text-gray-600 text-sm">Avail scholarships under merit, defense, alumni, and other categories.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Easy financing options</h4>
                <p className="text-gray-600 text-sm">Improved affordability with flexible financing and no-cost EMIs.</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Manipal alumni status</h4>
                <p className="text-gray-600 text-sm">Become part of a 200,000+ strong global alumni network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Courses Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Explore <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Programs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from industry-relevant programs designed for working professionals and fresh graduates
              </p>
            </div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-12">
              {/* Enhanced Tab Buttons */}
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
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-white'
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
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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

        {/* Modern 360 Advantage */}
        <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(255,122,54,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl lg:text-5xl font-queens font-bold text-gray-900">Unlock The 360° Advantage</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Comprehensive benefits designed to support your learning journey and career growth.</p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
                icon:'🎓', title:'Prestigious Degree', desc:'Globally recognized degree that opens doors worldwide.'
              },{
                icon:'📚', title:'Industry-Relevant Curriculum', desc:'Learn in-demand skills aligned with market needs.'
              },{
                icon:'💼', title:'Placement Assistance', desc:'End-to-end support with internships and jobs.'
              },{
                icon:'💳', title:'Easy Financing', desc:'Affordable no-cost EMI options for all learners.'
              }].map((b,i)=>(
                <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Financing + Scholarships */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="rounded-2xl p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Avail easy financing options</h3>
                <p className="text-orange-100 text-lg">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
              </div>
              <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Get attractive scholarships</h3>
                <p className="text-blue-100 text-lg">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 font-queens">Online Manipal Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaStar className="text-yellow-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Flexible & Convenient Schedule</h3>
                <p className="text-gray-600 text-lg">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaCertificate className="text-blue-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">At Par with On-Campus Degrees</h3>
                <p className="text-gray-600 text-lg">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaUsers className="text-green-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Experienced Faculty & Mentors</h3>
                <p className="text-gray-600 text-lg">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaBuilding className="text-purple-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Prestigious Manipal Alumni Network</h3>
                <p className="text-gray-600 text-lg">Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
              </div>
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
                 <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
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
                   <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 to-orange-500 z-0 rounded-full"></div>
         
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
                       <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
         

        {/* Certificate Section */}
        <section className="bg-[#002d5f] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image width={600} height={400} src="/images/MAHE-certi.webp" alt="Certificate" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Recognized Online Degree from Manipal Academy of Higher Education</h2>
              <p className="mb-8 text-xl">
                Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  UGC & AICTE Recognized Degrees
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Daily Live & Recorded Classes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Global Collaborations with Ivy-League Institutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  100% Placement & Internship Support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Premium Testimonials */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Success <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our alumni who have transformed their careers with Manipal Online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <svg className="w-8 h-8 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-4">
                          <h4 className="font-bold text-gray-900 text-xl">{testimonial.name}</h4>
                          <p className="text-orange-600 font-semibold text-lg">
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

        {/* Professional FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about Manipal Academy of Higher Education Online Programs
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
                    className="w-full text-left px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700 text-lg"
                  >
                    <span className="pr-8">{faq.question}</span>
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
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

        {/* Professional Hiring Partners Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top Companies</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join the ranks of successful graduates working at leading organizations worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {["/images/company.webp", "/images/company1.webp", "/images/company9.webp", "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp", "/images/ey.webp", "/images/ibm.webp", "/images/hp.webp", "/images/tata.png", "/images/apple.jpg","/images/hero.webp"].map((src, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
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
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Them?</h3>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Start your journey with Manipal Academy of Higher Education Online and unlock endless career opportunities
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-orange-600 font-semibold px-12 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
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
          </div>
          
          {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
              imageSrc="/images/online-manipal-form.webp"
              universityName="Manipal Academy of Higher Education"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </section>

        {/* Premium Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/images/manipallogo.jpg" alt="Manipal" className="h-12 w-auto" />
                  <span className="font-queens text-2xl text-white">Online Manipal</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled, NAAC A+ accredited online degrees designed for modern learners seeking career advancement.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">📞</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">💬</span>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com', 'MA JMC'].map((program, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
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
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Get Started</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+91-7042867717</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Manipal Academy of Higher Education Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Manipal;