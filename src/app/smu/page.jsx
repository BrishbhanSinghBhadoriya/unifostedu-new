'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FaBars, FaTimes } from 'react-icons/fa';
import EnquiryForm from '@/components/EnquiryForm';
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const SMU = () => {

 const ugCourses = [
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 or equivalent",
      fees: "₹75,000",
      specialization: "English + Sociology + Political Science",
      image: "/images/ba.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Bachelor of Arts (BA) in SMU Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 or equivalent",
      fees: "₹75,000",
      specialization: "General",
      image: "/images/bcom.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Bachelor of Commerce (B.Com) in SMU Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 50% marks",
      fees: "₹1,10,000",
      specialization: "Dual Specialization (Marketing, Finance, HR, Systems, Operations and Supply Chain Management, Healthcare Management)",
      image: "/images/mba.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Business Administration (MBA) in SMU Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 50% marks",
      fees: "₹98,000",
      specialization: "General",
      image: "/images/mca1.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Computer Applications (MCA) in SMU Online",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation in relevant stream",
      fees: "₹75,000",
      specialization: "English / Sociology / Political Science",
      image: "/images/ma1.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Arts (M.A.) in SMU Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce or equivalent",
      fees: "₹75,000",
      specialization: "General",
      image: "/images/bcom.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Commerce (M.Com) in SMU Online",
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
    question: "Is Sikkim Manipal University recognized by UGC?",
    answer:
      "Yes, Sikkim Manipal University (SMU) is recognized by the University Grants Commission (UGC) and approved by the Distance Education Bureau (UGC-DEB). All online programs offered by SMU are UGC-entitled and hold the same value as regular degrees.",
  },
  {
    question: "What online programs are offered by Sikkim Manipal University?",
    answer:
      "SMU offers a wide range of online undergraduate and postgraduate programs including MBA, MCA, B.Com, B.A., M.Com, and M.A. in various specializations. These programs are designed to provide flexibility while maintaining academic rigor.",
  },
  {
    question: "Are online degrees from SMU valid for government jobs?",
    answer:
      "Yes, online degrees from Sikkim Manipal University are valid for government jobs, competitive exams, and higher education. Being UGC-DEB approved, these degrees are recognized by government authorities and private organizations across India.",
  },
  {
    question: "What is the admission process for SMU online courses?",
    answer:
      "The admission process at SMU Online is completely online and straightforward. Candidates need to fill out the application form, submit required documents, and pay the application fee. The entire process can be completed from the comfort of your home.",
  },
  {
    question: "How much are the fees for online courses at SMU?",
    answer:
      "Fees for online programs at Sikkim Manipal University are affordable and vary by program. Undergraduate programs start from ₹75,000 while postgraduate programs range from ₹75,000 to ₹1,10,000 for the entire duration.",
  },
  {
    question: "Does SMU provide placement assistance?",
    answer:
      "Yes, Sikkim Manipal University offers comprehensive placement assistance to online students. This includes career counseling, resume building, interview preparation, and access to job opportunities through their placement cell.",
  },
  {
    question: "What is the duration of online programs?",
    answer:
      "Undergraduate programs at SMU Online typically span 3 years, while postgraduate programs have a duration of 2 years. The flexible learning approach allows students to complete programs at their own pace within the maximum time limit.",
  },
  {
    question: "Are the online degrees internationally recognized?",
    answer:
      "Yes, degrees from Sikkim Manipal University are recognized globally. SMU has a strong international presence and its degrees are accepted by employers and educational institutions worldwide.",
  },
  {
    question: "Can working professionals pursue online courses?",
    answer:
      "Absolutely! SMU Online programs are specifically designed for working professionals. The flexible schedule, recorded lectures, and online resources allow professionals to balance work and studies effectively.",
  },
  {
    question: "What is the difference between online and regular courses at SMU?",
    answer:
      "SMU Online programs provide the same UGC-entitled degree as regular programs. The key difference is the delivery mode - online programs offer flexibility while maintaining the same curriculum, faculty standards, and evaluation methods.",
  },
  {
    question: "Does the university offer scholarships for online programs?",
    answer:
      "Yes, Sikkim Manipal University offers various scholarships and financial aid options for deserving students. These include merit-based scholarships and special schemes for defense personnel and differently-abled students.",
  },
  {
    question: "Is technical support provided for online students?",
    answer:
      "Yes, SMU provides dedicated technical support to online students. From accessing the learning management system to attending live sessions, comprehensive support is available to ensure a smooth learning experience.",
  },
];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "MBA",
      university: "SMU",
      text: "The online MBA program at SMU helped me transition from a technical role to a management position. The flexible schedule allowed me to continue working while upgrading my skills."
    },
    {
      name: "Rahul Verma",
      course: "MCA",
      university: "SMU",
      text: "As a working professional in IT, SMU's MCA program provided me with the latest technical knowledge without disrupting my career. The faculty support was exceptional."
    },
    {
      name: "Anita Patel",
      course: "B.Com",
      university: "SMU",
      text: "Pursuing B.Com from SMU Online was the best decision. The affordable fees and quality education helped me build a strong foundation in commerce while managing my family responsibilities."
    },
    {
      name: "Deepak Singh",
      course: "MA Political Science",
      university: "SMU",
      text: "The MA program at SMU provided me with deep insights into political science. The online resources and faculty guidance were instrumental in my academic growth."
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  

  return (
    <>
      <Head>
        <title>Sikkim Manipal University Online | UGC Approved UG & PG Courses - UNIFOST</title>
        <meta name="description" content="Explore UGC-recognized online programs from Sikkim Manipal University. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="SMU Online, Sikkim Manipal University, SMU Distance Learning, MBA in SMU Online, MCA in SMU Online, B.Com in SMU Online, BA in SMU Online, M.Com in SMU Online, MA in SMU Online, Online Degrees India, UGC Approved, AICTE Approved" />
        <meta name="author" content="Sikkim Manipal University Online" />
        <meta name="robots" content="index, follow" /> 
        <link rel="canonical" href="https://unifostedu.com/smu" />
        <link href="https://fonts.cdnfonts.com/css/queens" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sikkim Manipal University Online | UGC Approved Online Degrees" />
        <meta property="og:description" content="UGC-recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning from Sikkim Manipal University." />
        <meta property="og:image" content="/images/smu-uni.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/smu" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sikkim Manipal University Online | UGC Approved Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Sikkim Manipal University. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="/images/smu-uni.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <style jsx>{`
        .queens { font-family: 'Queens', serif; }
      `}</style>
      
      <div className="queens overflow-x-hidden">
        {/* Header */}
       <header className="w-full fixed bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 lg:h-20">
      {/* Left Logo */}
      <div className="flex items-center gap-2 lg:gap-4">
        <img
          src="/images/manipallogo.webp"
          alt="SMU Logo"
          className="h-8 w-auto sm:h-10 lg:h-12"
        />
        <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
          <span className="text-[#f26722]">Online</span>{" "}
          <span className="text-gray-800">SMU</span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <FaBars className="w-5 h-5 text-gray-700" />
        </button>

        {/* Phone (Desktop) */}
        <a
          href="tel:+917042867717"
          className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f26722] transition-colors"
        >
           <FaPhone className="text-orange-500 rotate-90" />
          <span className="hidden lg:inline">+91-7042867717</span>
          <span className="lg:hidden">Call Now</span>
        </a>

        {/* Phone (Mobile) */}
        <a
          href="tel:+917042867717"
          className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#f26722]/10 rounded-full text-[#f26722] hover:bg-[#f26722]/20 transition-colors cursor-pointer"
        >
          📞
        </a>

        {/* Apply Button */}
        <button
          onClick={() => setOpenModal({ type: "apply" })}
          className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
        >
          <span className="hidden sm:inline">Apply Now</span>

          <span className="sm:hidden">Apply</span>
        </button>
      </div>
    </div>
  </div>
</header>

        <div className="max-w-screen-2xl mx-auto flex ">
          {/* Desktop Sidebar */}
        <aside className="fixed hidden lg:flex flex-col top-20 w-64 h-[calc(100vh-5rem)] px-4 py-8 self-start overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-sm z-40">
              <h3 className="text-lg font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">Page Contents</h3>
              <ul className="space-y-3 cursor-pointer">
                  {[
                     
               { id: "introduction", label: "Introduction" },
               { id: "campus-tour", label: "Campus Tour (Images, Videos)" },
               { id: "explore-courses", label: "Explore Online Courses" },
               { id: "key-highlights", label: "Key Highlights" },
               { id: "dates and session", label: "Admission Dates for UG & PG Programs" },
               { id: "explore-courses", label: "Fee Structure" },
               { id: "admission-process", label: "Admission Process" },
               { id: "dates and session", label: "Details of Upcoming & Ongoing Sessions" },
               { id: "placement-partners", label: "Placement Partners" },
               { id: "placement-record", label: "Placement Record" },
               { id: "student-review", label: "Student Reviews" },
               { id: "faqs", label: "FAQs" },
               { id: "reviews", label: "Sikkim Manipal University Reviews" },
               { id: "conclusion", label: "Conclusion" }



                  ].map((item) => (
                      <li key={item.id}>
                          <button
                              onClick={() => {
                                  const section = document.getElementById(item.id);
                                  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}
                            className="text-gray-700 hover:text-orange-600 font-semibold text-base transition-colors duration-200 w-full text-left py-2 cursor-pointer"
                          >
                              {item.label}
                          </button>
                      </li>
                  ))}
              </ul>
          </aside>

          <main className="flex-1 min-w-0 lg:pl-64 ">
            <div className="overflow-x-hidden pt-0">
       
                   {/* Mobile Sidebar */}
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
                           className="fixed top-0 left-0 w-[85vw] sm:w-80 h-full bg-white border-r shadow-2xl z-[1000] p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
                         >
                           <div className="flex items-center justify-between mb-8">
                             <h3 className="text-xl font-bold text-orange-600">Page Contents</h3>
                             <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                               <FaTimes className="w-5 h-5 text-gray-600" />
                             </button>
                           </div>
                           <ul className="space-y-4">
                              {[
                              { id: "introduction", label: "Introduction" },
                              { id: "campus-tour", label: "Campus Tour (Images, Videos)" },
                              { id: "explore-courses", label: "Explore Online Courses" },
                              { id: "key-highlights", label: "Key Highlights" },
                              { id: "dates and session", label: "Admission Dates for UG & PG Programs" },
                              { id: "fees", label: "Fee Structure" },
                              { id: "admission-process", label: "Admission Process" },
                              { id: "dates and session", label: "Details of Upcoming & Ongoing Sessions" },
                              { id: "placement-partners", label: "Placement Partners" },
                              { id: "placement-record", label: "Placement Record" },
                              { id: "student-review", label: "Student Reviews" },
                              { id: "faqs", label: "FAQs" },
                              { id: "reviews", label: "Sikkim Manipal University Reviews" },
                              { id: "conclusion", label: "Conclusion" }
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
                         </motion.aside>
                       </>
                     )}
                   </AnimatePresence>
        {/* Hero Section */}
        <section id="introduction" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 ">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/images/smu-uni.webp')] bg-cover bg-center opacity-200"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-purple-900/80"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f26722]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                {/* Accreditation Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">UGC Approved • AICTE Recognized</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="font-queens text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white">Transform Your</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                      Career with
                    </span>
                    <span className="block text-white">Sikkim Manipal</span>
                    <span className="block text-orange-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mt-1 sm:mt-2">
                      University (SMU)
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Earn UGC-recognized online degrees with flexible learning, expert mentorship, and career-focused programs from one of India's premier universities.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {[
                    { icon: '🎓', text: 'UGC Entitled Degrees' },
                    { icon: '💼', text: 'Placement Support' },
                    { icon: '💰', text: 'Affordable Fees' },
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
                    className="group bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30 flex items-center justify-center gap-3"
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
                  <h3 className="text-2xl font-bold text-white text-center">Why Choose SMU Online?</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '25+', label: 'Years Excellence' },
                      { number: '50K+', label: 'Students' },
                      { number: '90%', label: 'Satisfaction Rate' },
                      { number: '150+', label: 'Hiring Partners' }
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
                      {['Online MBA', 'MCA', 'B.Com', 'B.A.', 'M.Com', 'M.A.'].map((program, i) => ( 
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
        <section  className="bg-white py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-3">
      About Sikkim Manipal University Online (SMU Online)
    </h2>
    <div className="w-90 h-1 bg-black-500 rounded-full mb-8"></div>

    {/* Content */}
    <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
      <p>
        <strong>Sikkim Manipal University Online (SMU Online)</strong> is one of India’s
        leading UGC-approved online universities, offering high-quality degree programs
        that blend academic excellence with digital innovation. Established under the
        prestigious Sikkim Manipal University legacy, SMU Online has become a trusted name
        in distance and online learning across India.
      </p>

      <p>
        As a pioneer in online higher education, SMU Online empowers learners to pursue
        globally recognized degrees while maintaining a balance between personal and
        professional goals. With a strong focus on accessibility, affordability, and
        academic quality, it delivers education that transcends geographical barriers.
      </p>

      <p>
        The university offers a wide range of UGC-entitled online programs such as
        <strong> Online MBA, MCA, BBA, BCA,</strong> and <strong>BA</strong>, catering to
        the diverse needs of students and working professionals. Each program is crafted
        to meet evolving industry standards and ensure learners are job-ready upon
        graduation.
      </p>

      <p>
        Guided by the philosophy of{" "}
        <span className="italic">“Learning Anytime, Anywhere”</span>, SMU Online integrates
        live classes, interactive e-learning modules, AI-proctored assessments, and
        personalized academic support through an advanced Learning Management System (LMS).
      </p>

      <p>
        Recognized by <strong>UGC-DEB</strong> and accredited with <strong>NAAC A+</strong>,
        SMU Online maintains rigorous academic standards and a future-ready curriculum.
        Its commitment to quality, digital innovation, and student success places it among
        India’s top online universities.
      </p>

      <p>
        SMU Online represents <strong>credibility, flexibility,</strong> and
        <strong> innovation</strong> — empowering learners to build careers with confidence
        through career-focused online degrees.
      </p>

      <p>
        The faculty comprises experienced academicians and industry professionals who
        blend theory with real-world insights. The{" "}
        <strong>Learning Management System (LMS)</strong> ensures smooth access to
        lectures, study materials, and interactive forums — replicating traditional
        classroom engagement online.
      </p>

      <p>
        From admission to graduation, every learner receives continuous support through
        academic mentorship, personalized counseling, and placement guidance, ensuring a
        holistic and rewarding educational journey.
      </p>

      <p>
        With over two decades of excellence in distance education, SMU Online continues to
        redefine online higher education. Thousands of graduates have advanced their
        careers through its UGC-approved programs, enjoying recognition equal to
        on-campus degrees.
      </p>

      <p>
        SMU Online bridges the gap between technology and education — fostering{" "}
        <strong>global professionals</strong> ready to lead in a dynamic, digital-first
        world.
      </p>
    </div>
  </div>
</section>

        <section id="campus-tour" className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Campus Tour – Virtual Learning Experience
      </h2>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
        <p>
          While <strong>Sikkim Manipal University Online (SMU Online)</strong> operates in
          the digital space, it preserves the vibrancy and engagement of a real university
          environment through immersive virtual experiences.
        </p>

        <p>
          The <strong>SMU Online Virtual Campus Tour</strong> enables prospective learners
          to explore key aspects of the digital campus, including:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Interactive digital classrooms equipped with state-of-the-art technology for
            seamless learning.
          </li>
          <li>
            Recorded lectures and live sessions conducted by experienced faculty members
            and industry professionals.
          </li>
          <li>
            Access to online laboratories, extensive e-libraries, and academic research
            databases to support innovation and study.
          </li>
          <li>
            Engaging video tours of the Sikkim campus, nestled amid the Himalayan
            landscape, reflecting a perfect blend of nature and technology.
          </li>
        </ul>

        <p>
          Learners can also view faculty introduction videos, webinar recordings, and
          orientation modules that simplify the transition into the world of online
          education. The virtual campus platform replicates the sense of belonging,
          academic rigor, and interaction found in traditional university life — ensuring
          students feel truly connected to a reputed academic institution.
        </p>
      </div>
    </div>

    {/* Right Images */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
      <img
        src="/images/smu-uni.webp"
        alt="SMU Virtual Classroom"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
      />
      <img
        src="/images/smu-class.webp"
        alt="SMU Library"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
      />
      <img
        src="/images/smu-campus.webp"
        alt="SMU Online Interaction"
        className="rounded-2xl shadow-lg w-full h-auto object-cover sm:col-span-2"
      />
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
                  title: 'UGC Approved',
                  description: 'Globally recognized degrees with UGC entitlement'
                },
                {
                  icon: '💼',
                  title: 'Career Support',
                  description: 'Comprehensive placement assistance and career guidance'
                },
                {
                  icon: '💰',
                  title: 'Affordable Education',
                  description: 'Quality education at competitive fee structures'
                }
              ].map((feature, i) => (
                <div key={i} className="group text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-[#f26722] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
        <section id="recognitions" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Recognitions & <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Accreditations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized by leading accreditation bodies and regulatory authorities in India
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { img: '/images/ugc.webp', title: 'UGC Approved Online Degrees' },
                { img: '/images/aicte.webp', title: 'AICTE Recognized Programs' },
                { img: '/images/naac.webp', title: 'NAAC Accredited University' },
                { img: '/images/nirf.webp', title: 'Ranked Among Top Universities' },
                { img: '/images/IIRF.png', title: 'Top private university in North East' },
                { img: '/images/aiu.webp', title: 'Member of AIU' },
                { img: '/images/wes.webp', title: 'Internationally Recognized' },
                { img: '/images/The-Week.png', title: 'Amongst Top 10 Multidisciplinary Universities in East Zone' },
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
                      <p className="text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {item.title} 
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
         <section id="dates and session" className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-6xl mx-auto space-y-16">
    {/* Admission Dates Section */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Admission Dates for Various UG & PG Programs
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <strong>Sikkim Manipal University Online Admission Schedule 2025–26</strong>
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* January 2026 Intake */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold text-black mb-4">
            January 2026 Intake
          </h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>• Application Opens: <strong>1st November 2025</strong></li>
            <li>• Last Date to Apply: <strong>Closing Soon</strong></li>
            <li>• Batch Commences: <strong>Open soon</strong></li>
          </ul>
        </div>

        {/* July 2026 Intake */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold text-black mb-4">
            July 2026 Intake
          </h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>• Application Opens: <strong>Not Display</strong></li>
            <li>• Last Date to Apply: <strong>Not Display</strong></li>
            <li>• Batch Commences: <strong>Not Display</strong></li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mt-8">
        Admissions are conducted on a <strong>first-come, first-served basis</strong> and depend on eligibility criteria.
        Students are encouraged to apply early for their preferred intake. The
        <strong> SMU Online admission portal </strong> offers real-time application tracking and dedicated counselor support throughout the process.
      </p>
    </div>

    {/* Fee Structure Section */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Fee Structure 2025–26
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white rounded-2xl shadow-md">
          <thead className="bg-gray-100 text-gray-800 text-lg font-semibold">
            <tr>
              <th className="py-3 px-6 text-left">Program</th>
              <th className="py-3 px-6 text-left">Duration</th>
              <th className="py-3 px-6 text-left">Total Fee (INR)</th>
              <th className="py-3 px-6 text-left">Installment Option</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            
          
            <tr className="border-t">
              <td className="py-3 px-6">Online BA</td>
              <td className="py-3 px-6">3 Years</td>
              <td className="py-3 px-6">₹75,000 </td>
              <td className="py-3 px-6">Available</td>
            </tr>
             <tr className="border-t">
              <td className="py-3 px-6">Online BCom</td>
              <td className="py-3 px-6">3 Years</td>
              <td className="py-3 px-6">₹75,000</td>
              <td className="py-3 px-6">Available</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-6">Online MBA</td>
              <td className="py-3 px-6">2 Years</td>
              <td className="py-3 px-6">₹1,10,000</td>
              <td className="py-3 px-6">Available</td>
            </tr>
             <tr className="border-t">
              <td className="py-3 px-6">Online MCom</td>
              <td className="py-3 px-6">2 Years</td>
              <td className="py-3 px-6">₹75,000</td>
              <td className="py-3 px-6">Available</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-6">Online MCA</td>
              <td className="py-3 px-6">2 Years</td>
              <td className="py-3 px-6">₹98,000 </td>
              <td className="py-3 px-6">Available</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-6">Online MA</td>
              <td className="py-3 px-6">2 Years</td>
              <td className="py-3 px-6">₹75,000 </td>
              <td className="py-3 px-6">Available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mt-8">
        <strong>Sikkim Manipal University Online</strong> provides flexible financial options including
        <strong> EMI facilities, scholarships,</strong> and <strong>early-bird discounts</strong>.
        The transparent fee policy ensures students have a clear understanding of their total educational investment.
      </p>
    </div>
  </div>
</section>

        {/* Why Choose Sikkim Manipal University */}
        <section className="relative py-20 bg-[#0B0B10] text-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">
              {[
                {value:'25+', label:'Years of academic\nexcellence and trust'},
                {value:'50k+', label:'Successful alumni\nacross the globe'},
                {value:'90%', label:'Student satisfaction\nand success rate'},
                {value:'150+', label:'Corporate partners for\nplacements and internships'}
              ].map((s, i) => (
                <div key={i} className="text-left">
                  <div className="font-queens text-5xl sm:text-6xl md:text-7xl leading-none">{s.value}</div>
                  <p className="mt-3 text-sm sm:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Heading */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Why Students Choose SMU</h3>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Card 1 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🏅</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">UGC Approved Degrees</h4>
                <p className="text-gray-600 text-sm">Graduate with UGC-entitled degrees that are recognized by employers and institutions nationwide.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Advanced Learning Platform</h4>
                <p className="text-gray-600 text-sm">Access comprehensive study materials, recorded lectures, and interactive sessions online.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Expert Faculty</h4>
                <p className="text-gray-600 text-sm">Learn from experienced professors and industry experts with decades of teaching experience.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Career Services</h4>
                <p className="text-gray-600 text-sm">Comprehensive placement support including resume building and interview preparation.</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Global Alumni Network</h4>
                <p className="text-gray-600 text-sm">Join a network of 50,000+ alumni working in top companies across the world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Courses Section */}
        <section id="explore-courses" className="py-20 bg-white">
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
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${ 
                        activeTab === tab.value 
                          ? 'bg-gradient-to-r from-orange-500 to-[#f26722] text-white shadow-lg' 
                          : 'text-gray-700 hover:text-[#f26722] hover:bg-white' 
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
                            <span className="bg-[#f26722] text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                              <span className="text-sm">{course.fees}</span>
                            </div>
                          </div>

                          <button 
                            onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                            className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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
          <section id="fees" className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Online Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sikkim Manipal University Online offers a comprehensive portfolio of
            UGC-entitled online degree programs, enabling learners to pursue
            higher education from anywhere, at any time.
          </p>
        </div>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Undergraduate Online Programs
          </h3>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                1. Online Bachelor of Business Administration (BBA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                The SMU Online BBA program provides foundational knowledge in
                business management, marketing, human resources, and finance. It
                equips students with analytical and leadership skills essential
                for managerial success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                2. Online Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Aimed at aspiring IT professionals, the Online BCA program focuses
                on computer fundamentals, programming languages, web development,
                and database management — preparing students for careers in
                software development and IT support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                3. Online Bachelor of Arts (BA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                The Online BA program nurtures critical thinking and communication
                skills through diverse specializations in humanities and social
                sciences, offering holistic intellectual development.
              </p>
            </div>
          </div>
        </div>

        {/* Postgraduate Programs */}
        <div>
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Postgraduate Online Programs
          </h3>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                1. Online Master of Business Administration (MBA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                The flagship Online MBA from Sikkim Manipal University is among
                the top online MBA programs in India. Designed for working
                professionals, it offers specializations in Marketing, HR,
                Finance, Data Analytics, and Operations Management. Students
                benefit from practical case studies, live projects, and
                mentor-driven learning experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                2. Online Master of Computer Applications (MCA)
              </h4>
              <p className="text-gray-600 leading-relaxed">
                The Online MCA program prepares learners for advanced IT careers
                in artificial intelligence, data analytics, and software
                engineering. The curriculum emphasizes both technical depth and
                managerial perspective.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            Every online course at SMU Online integrates experiential learning,
            real-world application, and continuous assessment. Learners can
            personalize their academic journey through flexible schedules,
            ensuring the best blend of professional and personal balance.
          </p>
        </div>
      </div>
    </section>
        {/* Modern 360 Advantage */}
        <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
          <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(242,103,34,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl lg:text-5xl font-queens font-bold text-gray-900">Unlock The SMU Advantage</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Comprehensive benefits designed to support your learning journey and career growth.</p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
                icon:'🎓', title:'UGC Approved Degrees', desc:'Degrees recognized by University Grants Commission with nationwide acceptance.'
              },{
                icon:'📚', title:'Industry-Relevant Curriculum', desc:'Programs designed to meet current industry requirements and trends.'
              },{
                icon:'💼', title:'Placement Assistance', desc:'Comprehensive career support and placement opportunities.'
              },{
                icon:'💰', title:'Affordable Education', desc:'Quality education at competitive and affordable fee structures.'
              }].map((b,i)=>(
                <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{b.title}</h3> 
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Financing + Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="rounded-2xl p-8 bg-gradient-to-br from-orange-500 to-[#f26722] text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Easy Financing Options</h3>
                <p className="text-orange-100 text-lg">Flexible payment plans and EMI options to make quality education accessible to everyone.</p>
              </div>
              <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Dedicated Student Support</h3>
                <p className="text-blue-100 text-lg">24/7 academic and technical support to ensure smooth learning experience.</p>
              </div>
            </div>
          </div>
        </section>
          
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800 leading-relaxed">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-black mb-6">
          Why Choose Sikkim Manipal University Online (SMU Online)
        </h2>
        <p className="text-lg text-center mb-12 text-gray-700">
          Choosing the right university for your online education is crucial for academic success and career growth.
          Sikkim Manipal University Online (SMU Online) stands out as a preferred destination for learners who aspire
          to earn a recognized online degree without compromising on quality.
        </p>

        {/* Key Reasons */}
        <div className="space-y-8">
          {[
            {
              title: "1. UGC-Approved and NAAC Accredited",
              desc: "All programs at Sikkim Manipal University Online are UGC-entitled and recognized by AICTE. The university has also received NAAC A+ accreditation, ensuring that its online degrees meet the highest academic standards. Graduates can confidently use their qualifications for both government and private-sector opportunities in India and abroad.",
            },
            {
              title: "2. Wide Range of Online Programs",
              desc: "SMU Online offers a comprehensive selection of online courses such as Online MBA, Online MCA, Online BBA, Online BCA, and Online BA, enabling students to choose programs that align with their professional aspirations. These UGC-approved online degrees are designed to match modern industry requirements.",
            },
            {
              title: "3. Advanced Learning Management System (LMS)",
              desc: "The university’s state-of-the-art LMS platform provides 24/7 access to lectures, assignments, e-books, and recorded sessions. It supports self-paced learning, enabling students to study flexibly while maintaining professional and personal balance.",
            },
            {
              title: "4. Experienced Faculty and Industry Mentors",
              desc: "Sikkim Manipal University Online has a dedicated team of professors, researchers, and industry practitioners who bring a wealth of experience to every class. Their mentorship ensures that students gain practical insights alongside academic knowledge.",
            },
            {
              title: "5. Career-Oriented Curriculum",
              desc: "Every program at SMU Online is structured to meet the dynamic demands of the global job market. The curriculum emphasizes practical skills, case studies, and project-based learning. This career-focused approach helps students become industry-ready upon graduation.",
            },
            {
              title: "6. AI-Proctored Online Examinations",
              desc: "To maintain academic integrity, SMU Online conducts AI-proctored online exams that are flexible yet transparent. This system enables students to appear for exams securely from any location, offering convenience and credibility.",
            },
            {
              title: "7. Flexible and Affordable Fee Structure",
              desc: "Sikkim Manipal University Online ensures education remains accessible to all. It offers flexible payment options, including installments and EMI plans, allowing students from diverse backgrounds to pursue online degree programs without financial strain.",
            },
            {
              title: "8. Dedicated Student Support",
              desc: "The student support team at SMU Online assists learners throughout their academic journey — from admission to graduation. Students have access to academic counselors, tech support, and placement guidance 24/7 through the online portal.",
            },
            {
              title: "9. Strong Industry and Placement Network",
              desc: "SMU Online maintains partnerships with leading organizations across IT, Finance, Consulting, and Banking sectors. Recruiters such as TCS, Wipro, HDFC Bank, Deloitte, and IBM hire graduates from Sikkim Manipal University Online, making it one of the most employability-driven universities in India.",
            },
            {
              title: "10. Global Recognition and Alumni Network",
              desc: "With a global alumni base spread across 90+ countries, Sikkim Manipal University Online provides strong professional networking opportunities. The reputation of SMU Online ensures that its degrees are recognized both nationally and internationally.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Sections */}
        <div className="mt-16 space-y-10">
          {[
            {
              title: "Academic Excellence with a Digital Edge",
              desc: "The blend of academic rigor and technological innovation makes SMU Online a leader in digital education. Every student experiences a structured yet flexible learning model enriched with video lectures, quizzes, assignments, and faculty interactions.",
            },
            {
              title: "Empowering Working Professionals",
              desc: "SMU Online programs are designed to enhance career prospects without interrupting job commitments. Whether it’s an Online MBA for managers, an Online MCA for IT professionals, or an Online BBA for business aspirants, flexibility is key.",
            },
            {
              title: "Affordable Education with Global Standards",
              desc: "SMU Online offers world-class education at affordable costs. The transparent fee structure ensures quality education is accessible to all.",
            },
            {
              title: "Holistic Learning Ecosystem",
              desc: "Beyond academics, SMU Online emphasizes personality development, communication, and leadership. Virtual workshops, webinars, and lectures foster real-world exposure.",
            },
            {
              title: "Commitment to Quality and Integrity",
              desc: "SMU Online upholds strict academic standards, complying with UGC and NAAC guidelines. Continuous monitoring and feedback ensure its credibility.",
            },
            {
              title: "Lifelong Learning and Career Growth",
              desc: "Graduates become part of a lifelong learning community. Alumni benefit from ongoing career counseling, networking, and professional development opportunities.",
            },
          ].map((section, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-gray-100 to-gray-50 border-l-4 border-black p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                {section.title}
              </h3>
              <p>{section.desc}</p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-16 bg-black text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
          <p className="mb-4">
            Sikkim Manipal University Online (SMU Online) is more than just an
            institution — it is a digital gateway to global education. Its
            combination of academic excellence, flexible learning, affordable
            structure, and global recognition makes it one of the most
            sought-after UGC-approved online universities in India.
          </p>
          <p className="mb-4">
            By choosing SMU Online, students invest in a transformative journey
            that opens doors to professional advancement and lifelong success.
            Whether pursuing an Online MBA, Online MCA, Online BBA, or Online
            BCA, learners receive a globally recognized qualification that
            reflects both prestige and performance.
          </p>
          <p>
            SMU Online continues to redefine distance education through
            technology-driven innovation and a steadfast commitment to
            excellence — making it the ideal choice for learners who aim to
            build successful careers in today’s competitive world.
          </p>
        </div>
      </div>
    </section>
        {/* Why Choose Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 font-queens">SMU Online Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaStar className="text-yellow-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Flexible Learning Schedule</h3>
                <p className="text-gray-600 text-lg">Balance your education with personal and professional commitments through our flexible online learning platform.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaCertificate className="text-blue-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">UGC Recognized Degrees</h3>
                <p className="text-gray-600 text-lg">All online degrees are UGC-entitled and hold the same value as regular on-campus degrees.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaUsers className="text-green-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Experienced Faculty</h3>
                <p className="text-gray-600 text-lg">Learn from highly qualified faculty members with extensive academic and industry experience.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FaBuilding className="text-purple-500 text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Strong Alumni Network</h3>
                <p className="text-gray-600 text-lg">Join a network of 50,000+ successful alumni working in top companies across various industries.</p>
              </div>
            </div>
          </div>
        </section>
       
        {/* Admission Procedure */}
        <section id="admission-process" className="relative py-20 bg-white">
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
              <div className="w-24 h-1 bg-[#f26722] mx-auto mb-8 rounded-full"></div>
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
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 to-[#f26722] z-0 rounded-full"></div>
      
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
                              <div className="bg-gradient-to-br from-orange-400 to-[#f26722] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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

        {/* Certificate Section */}
        <section className="bg-[#002d5f] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image width={600} height={400} src="/images/smu.webp" alt="Certificate" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">UGC-Entitled Online Degree from Sikkim Manipal University</h2>
              <p className="mb-8 text-xl">
                Earn a recognized degree that holds the same value as a regular degree, with the flexibility to learn from anywhere at your own pace.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  UGC Recognized Online Degrees
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  Learn from Industry Experts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  Comprehensive Study Material
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f26722] rounded-full"></span>
                  Dedicated Student Support
                </li>
              </ul>
            </div>
          </div>
        </section>
         
       <section id="key-highlights" className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-6 md:px-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Key Highlights
    </h2>
    <p className="text-gray-600 mb-10 text-lg max-w-3xl mx-auto">
      Sikkim Manipal University Online stands out for its innovative approach to digital higher education.
      The following features define its reputation and success:
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
    {[
      {
        title: "UGC-Approved Online Degrees",
        desc: "All programs are recognized by UGC-DEB, ensuring credibility and acceptance in government and private sectors."
      },
      {
        title: "NAAC A+ Accredited University",
        desc: "A testament to academic excellence and quality assurance."
      },
      {
        title: "State-of-the-Art LMS",
        desc: "Offers 24/7 access to lectures, e-books, quizzes, and recorded sessions."
      },
      {
        title: "Live & Recorded Classes",
        desc: "Students can attend live faculty-led sessions or watch recordings at their convenience."
      },
      {
        title: "AI-Proctored Examinations",
        desc: "Transparent and secure online examination process."
      },
      {
        title: "Global Alumni Network",
        desc: "50,000+ graduates working in multinational corporations across the globe."
      },
      {
        title: "Dedicated Placement Assistance",
        desc: "Career counseling, virtual job fairs, and resume support."
      },
      {
        title: "Flexible Fee Options",
        desc: "Installment and EMI facilities for affordability."
      },
      {
        title: "Industry-Integrated Curriculum",
        desc: "Designed in collaboration with experts from IBM, TCS, and Deloitte."
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-start bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-all border border-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mt-1 mr-3 text-blue-600 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
          />
        </svg>
        <p className="text-gray-700 leading-relaxed">
          <strong>{item.title}:</strong> {item.desc}
        </p>
      </div>
    ))}
  </div>

  <div className="mt-12 text-center">
    <p className="text-gray-700 text-lg max-w-3xl mx-auto font-medium">
      SMU Online combines quality academics with real-world exposure — ensuring every learner 
      graduates <span className="text-blue-700 font-semibold">career-ready</span> and 
      <span className="text-blue-700 font-semibold"> globally competent</span>.
    </p>
  </div>
</section>

       <section id="placement-record" className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">
    {/* Placement Record Section */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Placement Record
      </h2>
      <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
        With over <span className="font-semibold text-black">two decades of academic excellence</span>, 
        SMU Online maintains an <span className="font-semibold text-black">85–90% placement success rate</span>.
      </p>
    </div>

    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl border border-gray-100 p-8 mb-12 hover:shadow-lg transition-all">
      <h3 className="text-2xl font-semibold text-black mb-6 text-center">
        Highlights
      </h3>
      <ul className="space-y-4 text-lg text-gray-800">
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Average package for MBA graduates:</strong> ₹6–8 LPA</span>
        </li>
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Top package:</strong> ₹18 LPA (International role)</span>
        </li>
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Leading recruiters:</strong> BFSI, IT, Consulting, and E-commerce sectors</span>
        </li>
        <li className="flex items-start">
          <span className="text-black text-xl mr-2">•</span>
          <span><strong>Career support:</strong> Resume writing, LinkedIn optimization, and mock interview training</span>
        </li>
      </ul>

      <p className="text-gray-700 mt-8 text-lg leading-relaxed text-center">
        Graduates of <span className="font-semibold text-black">Sikkim Manipal University Online</span> 
        are employed across <span className="font-semibold text-black">India, the Middle East, Southeast Asia,</span> 
        and <span className="font-semibold text-black">Europe</span> — a testament to the global recognition 
        of SMU’s online degrees.
      </p>
    </div>

    
  </div>
</section>


        {/* Premium Testimonials */}
        <section id="student-review" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Success <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our alumni who have transformed their careers with SMU Online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-[#f26722] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4"> 
                          <svg className="w-8 h-8 text-[#f26722] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-4">
                          <h4 className="font-bold text-gray-900 text-xl">{testimonial.name}</h4>
                          <p className="text-[#f26722] font-semibold text-lg">
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
        <section id="faqs" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about Sikkim Manipal University Online Programs
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
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#f26722] group-hover:text-white transition-all duration-300">
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
        <section id="placement-partners" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Top Companies</span>
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
              <div className="bg-gradient-to-r from-orange-500 to-[#f26722] rounded-3xl p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Them?</h3>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Start your journey with Sikkim Manipal University Online and unlock endless career opportunities
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
                    className="border-2 border-white text-white font-semibold px-12 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
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
              universityName="Sikkim Manipal University"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </section>
       <section id="reviews" className="bg-gradient-to-b from-black-50 via-white to-black-50 py-16 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">
    {/* Reviews Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Sikkim Manipal University Reviews
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Sikkim Manipal University Online has received consistent appreciation from students, alumni,
        and employers alike for its academic quality and career outcomes.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {/* Rating Cards */}
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all border border-gray-100">
        <h3 className="text-4xl font-bold text-black-700 mb-2">4.6/5</h3>
        <p className="text-gray-700 font-medium">Google Rating</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all border border-gray-100">
        <h3 className="text-4xl font-bold text-black-700 mb-2">96%</h3>
        <p className="text-gray-700 font-medium">Student Satisfaction</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all border border-gray-100">
        <h3 className="text-4xl font-bold text-black-700 mb-2">85%+</h3>
        <p className="text-gray-700 font-medium">Placement Record (Annually)</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
      <h4 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        Strengths Recognized by Students
      </h4>
      <ul className="space-y-3 text-gray-700 text-lg">
        <li className="flex items-start">
          <span className="text-black-600 text-xl mr-2">•</span>
          Responsive faculty and mentorship support.
        </li>
        <li className="flex items-start">
          <span className="text-black-600 text-xl mr-2">•</span>
          Industry-relevant course content.
        </li>
        <li className="flex items-start">
          <span className="text-black-600 text-xl mr-2">•</span>
          Flexible schedules and affordable fee structure.
        </li>
        <li className="flex items-start">
          <span className="text-black-600 text-xl mr-2">•</span>
          Efficient online examination system.
        </li>
      </ul>
    </div>

    <div className="text-center mt-12">
      <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
        SMU Online’s reputation as a top online university in India continues to grow,
        making it a preferred choice for learners seeking career-oriented online education.
      </p>
    </div>

    {/* Conclusion Section */}
    <div id="conclusion" className="mt-20 text-center max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Conclusion
      </h2>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Sikkim Manipal University Online (SMU Online) exemplifies the evolution of higher education through
        digital innovation. With UGC-approved online degrees, interactive learning systems, and robust placement
        assistance, it empowers learners to pursue education without boundaries.
      </p>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Whether it’s an <span className="font-semibold text-black-700">Online MBA</span>, 
        <span className="font-semibold text-black-700"> Online MCA</span>, 
        <span className="font-semibold text-black-700"> Online BBA</span>, or 
        <span className="font-semibold text-black-700"> Online BCA</span>, SMU Online ensures you gain academic excellence,
        flexibility, and career readiness — all under one trusted name.
      </p>
      <p className="text-gray-800 text-lg font-medium leading-relaxed">
        By choosing <span className="font-semibold text-black-700">Sikkim Manipal University Online</span>, 
        you invest in future-focused learning that aligns with your professional aspirations and global opportunities.
      </p>
    </div>
  </div>
</section>

        {/* Premium Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/images/manipallogo.webp" alt="SMU" className="h-12 w-auto" />
                  <span className="font-queens text-2xl text-white">Online SMU</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled online degrees from Sikkim Manipal University designed for modern learners seeking career advancement.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#f26722] transition-colors cursor-pointer">
                     <FaPhone className="text-orange-500 rotate-90" />
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#f26722] transition-colors cursor-pointer">
                    <span className="text-lg">💬</span>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'MCA', 'B.Com', 'B.A.', 'M.Com', 'M.A.'].map((program, i) => (
                    <li key={i}>
                      <a onClick={() => setOpenModal({ type: 'enquary' })} className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">
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
                    <div className="w-10 h-10 bg-[#f26722] rounded-full flex items-center justify-center">
                       <FaPhone className="text-black-500 rotate-90" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+91-7042867717</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
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
                                "BA English + Sociology + Political Science - SMU Online",
                                "B.Com General - SMU Online",
                                "MBA Dual Specialization (Marketing, Finance, HR, Systems, Operations and Supply Chain Management, Healthcare Management) - SMU Online",
                                "MCA General - SMU Online",
                                "MA English / Sociology / Political Science - SMU Online",
                                "M.Com General - SMU Online"
                                ]
                            .map((keyword, index) => (
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
              
                         
            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Sikkim Manipal University Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        </div>
        </main>
      </div>
      </div>
    </>
  );
};

export default SMU;