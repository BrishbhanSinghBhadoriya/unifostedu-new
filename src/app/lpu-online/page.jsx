'use client';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AccreditationSection from "@/components/AccreditationSection";
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const LpuOnline = () => {

 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,20,000",
      specialization: "Finance, Marketing, Human Resources, Digital Marketing, Entrepreneurship",
      image: "/images/bba-online-image.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Business Administration (BBA) in LPU Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,20,000",
      specialization: "Data Science, Cloud Computing, Full Stack Development, Cyber Security",
      image: "/images/bca.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Computer Applications (BCA) in LPU Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "90,000",
      specialization: "General, Accounting & Finance, E-commerce",
      image: "/images/bcom-online-image.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Commerce (B.Com) in LPU Online",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "80,000",
      specialization: "General, Psychology, Economics, Political Science",
      image: "/images/ma1.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Arts (BA) in LPU Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,60,000",
      specialization: "HR, Finance, Marketing, Operations, Analytics, Digital Marketing, Data Science, IT, International Business, Banking, Healthcare, Logistics",
      image: "/images/mba.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Business Administration (MBA) in LPU Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation in BCA/B.Sc(IT)",
      fees: "1,48,000",
      specialization: "ML & AI, Data Science, Cybersecurity, Full Stack, AR/VR & Game Development", 
      image: "/images/mca1.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Computer Applications (MCA) in LPU Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "95,000",
      specialization: "General, Accounting, Finance", 
      image: "/images/m.com.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Commerce (M.Com) in LPU Online",
    },
  ];
    
  

 const faqData = [
  {
    question: "Is Lovely Professional University recognized by UGC and NAAC?",
    answer:
      "Yes, Lovely Professional University is recognized by the University Grants Commission (UGC) and accorangeited by NAAC with 'A++' grade. Choosing an online program from LPU Online ensures you receive a corangeible and globally recognized degree. LPU's accorangeitation guarantees that your online degree meets high academic standards and is accepted by employers and educational institutions worldwide.",
  },
  {
    question: "What online programs are offeorange by Lovely Professional University?",
    answer:
      "LPU Online offers a wide range of online programs including Management, MBA, BBA, Computer Science, Data Science, BCA, MCA, B.Com, M.Com, and BA programs. By enrolling in online courses from LPU, students can access flexible learning schedules while earning a degree from a top-ranked university.",
  },
  {
    question: "Are online degrees from LPU valid for government jobs?",
    answer:
      "Yes, online degrees from Lovely Professional University, approved by UGC-DEB, are valid for government jobs, competitive exams like UPSC, and higher education. Studying at LPU Online ensures your degree is recognized by government authorities and other educational institutions.",
  },
  {
    question: "What is the admission process for online courses?",
    answer:
      "The admission process at LPU Online is simple and fully online. Prospective students can apply for LPU online programs by filling out the application form, submitting the requiorange documents, and completing the fee payment. LPU Online admissions are designed to be hassle-free, making it easy to enroll in programs from anywhere in India or abroad.",
  },
  {
    question: "How much are the fees for online courses at LPU?",
    answer:
      "Fees for online programs at Lovely Professional University vary depending on the course. LPU provides flexible payment options and no-cost EMI plans for online students. By choosing an LPU Online program, students can pursue quality education without financial stress.",
  },
  {
    question: "Does LPU provide placement assistance?",
    answer:
      "Yes, LPU Online offers dedicated placement assistance to students of online programs. Graduates from LPU Online courses receive career guidance, networking opportunities, and support to find the right job in their respective fields. Choosing LPU ensures strong career support even for online learners.",
  },
  {
    question: "What is the duration of online programs?",
    answer:
      "The duration of online programs at Lovely Professional University depends on the specific course. Most undergraduate online programs run for 3 years, while postgraduate online programs range from 2 years. Studying at LPU Online provides flexibility to complete your degree while managing other commitments.",
  },
  {
    question: "Are the online degrees internationally recognized?",
    answer:
      "Yes, online degrees from Lovely Professional University are internationally recognized. LPU Online programs hold global recognition, adding international value to your degree. Choosing LPU Online ensures your degree holds weight for international job opportunities and higher studies abroad.",
  },
  {
    question: "Can working professionals pursue online courses?",
    answer:
      "Absolutely! Online programs from Lovely Professional University are designed for working professionals. LPU's flexible schedule allows online students to learn at their own pace without interrupting their careers. Enrolling in LPU Online courses is ideal for career growth and skill enhancement while working.",
  },
  {
    question: "What is the difference between online and regular courses at LPU?",
    answer:
      "LPU Online programs provide the same accorangeited degree as regular LPU courses. The key difference is flexibility—students can access lectures, assignments, and live sessions digitally. Choosing an online program at Lovely Professional University offers quality education and the same global recognition without the need to attend a physical campus.",
  },
  {
    question: "Does the university offer scholarships for online programs?",
    answer:
      "Yes, LPU Online offers exclusive scholarships for meritorious students, defense personnel, government employees, and differently-abled learners. By enrolling in online programs at LPU, students can avail financial support while earning a recognized degree.",
  },
];




  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "MBA",
      university: "LPU",
      text: "The online MBA program at LPU helped me transition from a technical role to a management position. The flexible schedule allowed me to continue working while studying."
    },
    {
      name: "Priya Singh",
      course: "BCA",
      university: "LPU",
      text: "As a fresh graduate, LPU's online BCA program gave me the technical skills and industry exposure needed to secure a job as a software developer in a top IT company."
    },
    {
      name: "Amit Kumar",
      course: "BBA",
      university: "LPU",
      text: "The online BBA program at LPU provided me with practical business knowledge and networking opportunities that helped me start my own business venture."
    },
    {
      name: "Neha Gupta",
      course: "MCA",
      university: "LPU",
      text: "LPU's online MCA program offeorange the perfect blend of theoretical knowledge and practical skills. The placement assistance helped me land a job with a 60% salary hike."
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
  useEffect(() => {
      

    const timer= setTimeout(()=>{
     setOpenModal(true)
    },3000)
    return () => clearTimeout(timer);

     
},[])



  

  return (
    <>
      <Head>
        <title>LPU Online Degrees | Lovely Professional University UG & PG Courses - UNIFOST</title>
        <meta name="description" content="Explore globally recognized online programs from Lovely Professional University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="LPU Online, Lovely Professional University, LPU Online Degrees, BBA in LPU Online, BCA in LPU Online, B.Com in LPU Online, MBA in LPU Online, MCA in LPU Online, M.Com in LPU Online, BA in LPU Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Lovely Professional University Online Degrees" />
        <meta name="robots" content="index, follow" /> 
        <link rel="canonical" href="https://unifostedu.com/lpu-online" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LPU Online Degrees | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="/images/lpu.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/lpu-online" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LPU Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Lovely Professional University. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="/images/lpu.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
      
      <div className="poppins overflow-x-hidden">
        {/* Professional Responsive Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="/images/LPU-Online-Logo.svg" 
                  alt="LPU Logo" 
                  className="h-8 w-auto sm:h-10 lg:h-12" 
                />
                
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
                  className="bg-orange-500 hover:bg-orange-600text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Premium Hero Section */}
        <section id="hero" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0">
  <Image
    src="/images/lpu3.webp"
    alt="LPU Banner"
              fill
    className="object-cover object-center"
    priority
  />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
              
              {/* Left Content */}
              <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-8 sm:py-12 lg:py-24 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* University Badge */}
                  <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/30">
                    <img 
                      src="/images/LPU-Online-Logo.svg" 
                      alt="LPU Logo" 
                      className="h-6 sm:h-8 w-auto" 
                    />
                    <span className="text-sm sm:text-lg font-semibold">Lovely Professional University</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Transform Your</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Future with LPU Online
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                    UGC-approved online degrees with NAAC A++ accreditation. 
                    Flexible learning, expert mentorship, and global recognition.
                  </p>

                  {/* Key Features */}
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {['UGC Approved', 'NAAC A++', 'Global Recognition', 'Flexible Learning'].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/30">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                 {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                     <Button
                       size="lg"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                       onClick={() => setOpenModal({ type: 'apply' })}
                     >
                       Apply Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                     </Button>
                     <Button
                       size="lg"
                       variant="outline"
                      className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto bg-gray-600 "
                       onClick={() => setOpenModal({ type: 'enquiry' })}
                     >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                       Enquire Now
                     </Button>
                   </div>
                </motion.div>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="flex-1 max-w-md lg:max-w-lg lg:ml-12 w-full mt-8 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-2 gap-3 sm:gap-4"
                >
                  {/* Stat Card 1 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">50K+</div>
                    <div className="text-white text-xs sm:text-sm font-medium">Students</div>
    </div>

                  {/* Stat Card 2 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">25+</div>
                    <div className="text-white text-xs sm:text-sm font-medium">Programs</div>
    </div>

                  {/* Stat Card 3 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">95%</div>
                    <div className="text-white text-xs sm:text-sm font-medium">Success Rate</div>
    </div>
                  
                  {/* Stat Card 4 */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">24/7</div>
                    <div className="text-white text-xs sm:text-sm font-medium">Support</div>
  </div>
                </motion.div>
              </div>
            </div>
          </div>

         
</section>
          

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 lg:space-y-8"
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    About <span className="text-orange-500">LPU Online</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    LPU Online offers UGC-entitled online degree programs from Lovely Professional University, 
                    providing various undergraduate and postgraduate options in fields like business, commerce, 
                    and computer applications.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: FaCertificate, title: "UGC & NAAC Recognized", desc: "Globally recognized degrees" },
                    { icon: FaLaptop, title: "Advanced LMS Platform", desc: "Interactive learning system" },
                    { icon: FaIndustry, title: "Industry-Oriented", desc: "Career-focused curriculum" },
                    { icon: FaUsers, title: "Expert Faculty", desc: "Experienced mentors" },
                    { icon: FaClipboardCheck, title: "AI Proctored Exams", desc: "Secure online assessments" },
                    { icon: FaBriefcase, title: "Placement Support", desc: "Career assistance" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recognitions */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-4 sm:p-6 border border-orange-100">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <FaStar className="text-orange-500" />
                    Recognitions & Accreditations
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {['UGC Approval by DEB', 'NAAC A++ Accreditation', 'WES Recognition (Canada & USA)'].map((recognition, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-1 sm:py-2 shadow-sm">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{recognition}</span>
        </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Images */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="relative group">
                  <Image
    src="/images/lpu.webp" 
    alt="LPU Online"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                
                <div className="relative group">
                  <Image
    src="/images/images.jpeg" 
    alt="LPU Online Additional"
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
</div>
      </div>
    </section>

        {/* Enhanced Statistics Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose <span className="text-orange-500">LPU Online</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Experience world-class education with flexible learning, global recognition, and comprehensive support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: FaLaptop,
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with recorded lectures and live sessions',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: FaCertificate,
                  title: 'NAAC A++ Accredited',
                  description: 'Globally recognized degrees with UGC entitlement',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: FaBriefcase,
                  title: 'Career Support',
                  description: '100% placement assistance and career guidance',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaMoneyBillWave,
                  title: 'Easy Financing',
                  description: 'No-cost EMI options and scholarships available',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 h-full">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                      {feature.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Rankings & Accorangeitations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accorangeitations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized by leading accorangeitation bodies and ranked among India's top universities
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { img: '/images/naac.webp', title: 'NAAC A++ Accorangeited University' },
                { img: '/images/ugc.webp', title: 'UGC-entitled Online Degrees' },
                { img: '/images/nirf.webp', title: "Amongst India's top 50 Universities" },
                { img: '/images/aicte.webp', title: 'AICTE Norms Compliant' },
                { img: '/images/wes.webp', title: 'Globally Recognized Online Degrees' },
                { img: '/images/acu.webp', title: 'Member of ACU' },
                { img: '/images/aiu.webp', title: 'AIU Recognized' },
                { img: '/images/qs.webp', title: 'QS Ranking' },
              ].map((item, i)=>(
                <div key={i} className="group">
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        width={200} 
                        height={160} 
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

        {/* Why Choose Lovely Professional University */}
        <section id="About" className="relative py-20 bg-[#0B0B10] text-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">
              {[
                {value:'30+', label:'Countries and 1000+ towns &\ncities- our students span the globe'},
                {value:'50k+', label:'Learners have been empoweorange through LPU Online'},
                {value:'90%', label:'Of students say their online degree has a positive ROI'},
                {value:'85%', label:'Of students find online is better than or equal to on-campus learning'}
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
                <h4 className="text-xl font-semibold mb-2">Degree from top ranked LPU</h4>
                <p className="text-gray-600 text-sm">Graduate with UGC-entitled, NAAC A++ accorangeited degrees trusted by employers.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">C</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Industry-Relevant Curriculum</h4>
                <p className="text-gray-600 text-sm">Curriculum designed in collaboration with industry experts and updated regularly.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Scholarships up to 25%</h4>
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
                <h4 className="text-xl font-semibold mb-2">LPU alumni status</h4>
                <p className="text-gray-600 text-sm">Become part of a 300,000+ strong global alumni network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Courses Section */}
        <section id="Courses" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Explore <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Programs</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from industry-relevant programs designed for working professionals and fresh graduates
              </p>
            </motion.div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-8 sm:space-y-12">
              {/* Enhanced Tab Buttons */}
              <div className="flex justify-center">
                <Tabs.List className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 sm:p-2 shadow-xl border border-gray-200">
                  {[
                    { value: 'all', label: 'All Programs' },
                    { value: 'ug', label: 'Undergraduate' },
                    { value: 'pg', label: 'Postgraduate' }
                  ].map((tab) => (
                    <Tabs.Trigger
                      key={tab.value}
                      value={tab.value}
                      className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                        activeTab === tab.value
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      {tab.label}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </div>

              {/* Course Grid */}
              <Tabs.Content value={activeTab} className="outline-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {(activeTab === 'all' ? [...ugCourses, ...pgCourses] : 
                    activeTab === 'ug' ? ugCourses : pgCourses).map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden h-full">
                        {/* Course Image */}
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <Image
                            src={course.image}
                            alt={course.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                              {course.universityShort}
                            </span>
                          </div>
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                              <span className="text-xs sm:text-sm font-semibold text-gray-800">₹{course.fees}</span>
                            </div>
                          </div>
                        </div>

                        {/* Course Content */}
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                              {course.course}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                              {course.specialization}
                            </p>
                          </div>
                          
                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-orange-600 text-xs sm:text-sm">⏱️</span>
                            </div>
                              <span className="text-xs sm:text-sm font-medium">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 text-xs sm:text-sm">🎓</span>
                              </div>
                              <span className="text-xs sm:text-sm font-medium">{course.eligibility}</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 text-xs sm:text-sm">💰</span>
                              </div>
                              <span className="text-xs sm:text-sm font-medium">₹{course.fees}</span>
                            </div>
                          </div>

                          <div className="pt-3 sm:pt-4 border-t border-gray-100">
                          <button 
                            onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
                          >
                            Apply Now
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 inline" />
                          </button>
                        </div>
                      </div>
                    </div>
                    </motion.div>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>

        {/* Lpu Advantage */}
        <section id="Scholarship" className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(228,0,43,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl lg:text-5xl font-queens font-bold text-gray-900">LPU Advantage</h2>
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
                  <div className="w-16 h-16 rounded-xl bg-white text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
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
              <div className="rounded-2xl p-8 bg-black text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">Get attractive scholarships</h3>
                <p className="text-blue-100 text-lg">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 font-queens">LPU Online Advantages</h2>
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
                <h3 className="text-2xl font-semibold mb-4">Prestigious LPU Alumni Network</h3>
                <p className="text-gray-600 text-lg">Be a part of the prestigious LPU alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Procedure Section */}
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
                    desc: "Upload requiorange documents and pay the application fee.",
                  },
                  {
                    number: "03",
                    title: "Confirmation",
                    desc: "Receive confirmation and student login corangeentials.",
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
        
                  {/* ===================== LPU Admission & Exam Section ===================== */}
<section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
      LPU Online Admission & Exam Details 2025
    </h2>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed mb-8">
      Lovely Professional University (LPU) offers both online and campus-based programs. 
      The admission and examination processes differ depending on the mode of learning. 
      For online programs, admission is direct and flexible, whereas campus programs require 
      LPUNEST — a university-level entrance and scholarship test. Below is a detailed overview.
    </p>

    {/* ===== LPU Online Admission ===== */}
    <article className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl mb-10 shadow-md">
      <h3 className="text-2xl font-semibold text-orange-600 mb-3">
        LPU Online Admission & Exams
      </h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Direct Admission:</strong> Based on educational qualifications, no entrance exam required.</li>
        <li><strong>Registration & Program Fee:</strong> Pay a small registration fee followed by program fees.</li>
        <li><strong>LMS Credentials:</strong> Once approved, students receive Learning Management System (LMS) login details.</li>
        <li><strong>ABC & DEB IDs:</strong> Candidates must generate their Academic Bank of Credits (ABC) and DEB IDs for UGC-approved online programs.</li>
      </ul>
    </article>


    {/* ===== Fees Section ===== */}
    <article className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-10 shadow-md">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">LPU Fee Structure</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Registration Fee:</strong> ₹500 (for LPU Online admission).</li>
        <li><strong>LPUNEST Application Fee:</strong> Separate charge for soft or printed kit versions.</li>
        <li><strong>Program Fees:</strong> Varies by degree and semester — available on the official LPU site.</li>
        <li><strong>Examination Fees:</strong> May be included in semester fees depending on the program.</li>
      </ul>
    </article>

    {/* ===== About LPU Online ===== */}
    <article className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-xl mb-10 shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">About LPU Online Programs</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>UGC Approved:</strong> All programs are UGC-entitled and recognized nationwide.</li>
        <li><strong>Flexible Learning:</strong> Study at your own pace with recorded lectures and e-books.</li>
        <li><strong>Batch Schedule:</strong> New sessions typically start in <strong>January</strong> and <strong>July</strong> each year.</li>
        <li><strong>Academic Support:</strong> Access to online faculty support, e-content, and discussion forums.</li>
      </ul>
    </article>

  
  </div>
</section>

        {/* Certificate Section */}
        <section className="bg-[#002d5f] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image width={600} height={400} src="/images/lpu-certificate.webp" alt="Certificate" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Recognized Online Degree from Lovely Professional University</h2>
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
                  Global Collaborations with Industry Partners
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
                Hear from our alumni who have transformed their careers with LPU Online
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
        <section id="Faq" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about LPU Online Programs
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
        <section id="Partners" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
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
                  Start your journey with LPU Online and unlock endless career opportunities
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
              imageSrc="/images/lpu2.png"
              universityName="Lovely Professional University Online"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </section>

        {/* Premium Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-300 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-gray-700/50">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <img src="/images/LPU-Online-Logo.svg" alt="LPU" className="h-8 sm:h-10 w-auto" />
                </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">LPU Online</h3>
                      <p className="text-orange-400 text-xs sm:text-sm font-medium">Lovely Professional University</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
                    UGC-entitled, NAAC A++ accredited online degrees designed for modern learners seeking career advancement.
                  </p>
                  
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-700">
                      <FaPhone className="text-orange-400 text-sm sm:text-base" />
                  </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-700">
                      <FaWhatsapp className="text-green-400 text-sm sm:text-base" />
                  </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-700">
                      <FaUsers className="text-blue-400 text-sm sm:text-base" />
                </div>
                  </div>
                </motion.div>
              </div>

              {/* Programs */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8 flex items-center gap-2">
                  <FaGraduationCap className="text-orange-500" />
                  Programs
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {['BBA Finance', 'BBA Marketing', 'BBA Human Resources', 'BCA Data Science', 'BCA Cyber Security', 'B.Com Accounting & Finance', 'MBA HR', 'MBA Data Science', 'MCA Full Stack', 'M.Com Accounting'].map((program, i) => (
                    <div key={i} className="group">
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group-hover:translate-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-xs sm:text-sm">{program}</span>
                      </a>
                    </div>
                  ))}
              </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8 flex items-center gap-2">
                  <FaBuilding className="text-orange-500" />
                  Quick Links
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { name: 'Programs', href: '#Courses', icon: FaBookOpen },
                    { name: 'Admissions', href: '#Admission', icon: FaClipboardCheck },
                    { name: 'Scholarships', href: '#Scholarship', icon: FaStar },
                    { name: 'Career Services', href: '#Partners', icon: FaBriefcase },
                    { name: 'About Us', href: '#About', icon: FaUserCircle },
                    { name: 'FAQs', href: '#Faq', icon: FaUsers }
                  ].map((link, i) => (
                    <div key={i} className="group">
                      <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 sm:gap-3 group-hover:translate-x-2">
                        <link.icon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                        <span className="text-xs sm:text-sm">{link.name}</span>
                      </a>
            </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h4 className="text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8 flex items-center gap-2">
                  <FaPhone className="text-orange-500" />
                  Get Started
                </h4>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <FaPhone className="text-white text-sm sm:text-base" />
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm text-gray-400">Call Us</p>
                        <p className="text-white font-bold text-base sm:text-lg">+91-7042867717</p>
                    </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">Available 24/7 for your queries</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
                  >
                    Apply Now
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 inline" />
                    </button>
                    
                    <button 
                      onClick={() => setOpenModal({ type: 'enquiry' })}
                      className="w-full border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      Download Brochure
                  </button>
                </div>
              </div>
              </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-6 sm:pt-8 text-center space-y-3 sm:space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Lovely Professional University Online. All rights reserved.
              </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
                  <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
              </div>
              
              <div className="pt-3 sm:pt-4 border-t border-gray-700/50">
                <p className="text-gray-600 text-xs">
                  UGC Approved | NAAC A++ Accredited | AICTE Recognized
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LpuOnline;