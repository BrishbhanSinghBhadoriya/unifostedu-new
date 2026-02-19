'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, use } from 'react';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaStar, FaCertificate, FaBuilding, FaUser, FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";
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
import PageContent from "@/components/PageContent/PageContent";
import HeroSection from "./_components/HeroSection";
import Accreditations from "./_components/Accreditations";
import Interoducation from "./_components/Interoducation";
import AboutUs from "./_components/AboutUs";
import WhyChoose from "./_components/WhyChoose";
import CampusTour from "./_components/CampusTour";
import ExploreCourses from "./_components/ExploreCourses";
import AdvantageHighlights from "./_components/AdvantageHighlights";
import Fees from "./_components/Fees";
import AdmissionProcess from "./_components/AdmissionProcess";
import Certification from "./_components/Certification";
import PlacementPartnerRecords from "./_components/PlacementPartnerRecords";
import StudentReviews from "./_components/StudentReviews";
import Faq from "./_components/Faq";
import HiringPartners from "./_components/HiringPartners";
import { OpenModalState } from '../../../types/Modal';
import UniversityDateSlider from '@/components/UniversityDateSlider';
const selectionItem = [
  { id: "HeroSection", label: "Introduction" },
  { id: "Introduction", label: "About MAHE" },
  { id: "AboutUs", label: "About Us" },
  { id: "FutureReady", label: "Future-Ready Platform" },
  { id: "UGCApproved", label: "UGC-Approved Degrees" },
  { id: "Leader", label: "Leader Among Universities" },
  { id: "WhyChoose", label: "Why Choose MAHE" },
  { id: "CampusTour", label: "Campus Tour" },
  { id: "ExploreCourses", label: "Explore Courses" },
  { id: "KeyHighlights", label: "Key Highlights" },
  { id: "FeeStructure", label: "Fee Structure" },
  { id: "AdmissionProcess", label: "Admission Process" },
  { id: "PlacementPartners", label: "Placement Partners" },
  { id: "PlacementRecords", label: "Placement Records" },
  { id: "StudentReviews", label: "Student Reviews" },
  { id: "Faq", label: "FAQs" },
  { id: "Conclusion", label: "Conclusion" },
];

const Manipal = () => {
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
           
 const ugCourses = [
   
      {
      id: "online-bba-honors-mahe",
      course: "Bachelor of Business Administration (Hons.)",
      duration: "4 Years",
      eligibility: "10+2, 10+3 Minimum 50%",
      fees: "2,40,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology, Marketing Management, human resource Management ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
     {
      id: "online-bba-mahe",
      course: "Bachelor of Business Administration ",
      duration: "3 Years",
      eligibility: "10+2, 10+3 Minimum 50%",
      fees: "1,80,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology, Marketing Management, human resource Management ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
   
    {
      id: "online-bcom-professional-mahe",
      course: "Bachelor of Commerce (B.Com)(Professional)",
      duration: "3 Years",
      eligibility: "10+2,10+3 Minimum 50%",
      fees: "2,94,000",
      specialization: "(Professional)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Bachelor of Commerce (B.Com) in Manipal Online",
    },
  ];

  const pgCourses = [
    {
      id: "online-mba-mahe",
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Working Professionals with min 50% in graduation",
      fees: "2,92,000",
      specialization: "Healthcare Management, Financial Technology, Marketing Management, Human Resource Management, Business Analytics, Data Science, Logistics and Supply Chain Management, Operations Management, Pharmaceutical Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      id: "online-mca-mahe",
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,20,000",
      specialization: "AI & ML, Cyber Security, Cloud Computing, Full Stack Development", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
    },
    {
      id: "online-msc-data-science-mahe",
      course: "Master of Science (M.Sc) - Data Science",
      duration: "2 Years",
      eligibility: "min 50% Graduation",
      fees: "2,80,000",
      specialization: "Data Science", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Science (M.Sc) Data Science in Manipal Online",
    },
    {
      id: "online-msc-business-analytics-mahe",
      course: "Master of Science (M.Sc) - Business Analytics",
      duration: "2 Years",
      eligibility: "min 50% Graduation",
      fees: "2,72,000",
      specialization: "Business Analytics", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      university: "Manipal Academy of Higher Education(MAHE))",
      universityShort: "MAHE",
      alt: "Master of Science (M.Sc) Business Analytics in Manipal Online",
    },
  ];
    
    
  useEffect(() => {

  const timer= setTimeout(()=>{
  setOpenModal((type: OpenModalState) => type === null ? { type: 'enquire' } : type);
  },3000)
  return () => clearTimeout(timer);       
  },[])
  

 const faqData = [
  {
    question: "Is Manipal Academy of Higher Education(MAHE)) recognized by UGC and NAAC?",
    answer:
      "Yes, Manipal Academy of Higher Education(MAHE)) (MAHE) is recognized by the University Grants Commission (UGC) and accredited by NAAC. Choosing an online program from Manipal Online University ensures you receive a credible and globally recognized degree. MAHE's accreditation guarantees that your online Manipal University degree meets high academic standards and is accepted by employers and educational institutions worldwide.",
  },
  {
    question: "What online programs are offered by Manipal Academy of Higher Education(MAHE))?",
    answer:
      "Manipal Online University offers a wide range of online programs at MAHE, including Management, MBA, BBA, Computer Science, Data Science, MCA, and professional certificate courses. By enrolling in online courses from Manipal Academy of Higher Education(MAHE)), students can access flexible learning schedules while earning a degree from a top-ranked university.",
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
      course: "BBA",
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
      course: "M.Sc",
      university: "MAHE",
      text: "With over 2 years of work experience in accounting, I wanted to pursue an online M.Sc. degree to boost my career further and get a higher salary. Thanks to Online Manipal, I'm able to manage my work life and academic through flexible live classes and recorded sessions which are available on the portal."
    },
    {
      name: "Priya Sharma",
      course: "MCA",
      university: "MAHE",
      text: "The online MCA program at MAHE is structured perfectly for students who want to balance studies with other commitments. The curriculum is up-to-date with industry standards."
    },
    {
      name: "Vikram Singh",
      course: "M.Com",
      university: "MAHE",
      text: "MAHE's online M.Com program provided me with deep insights into financial management. The faculty support and online resources were exceptional throughout the course."
    }
  ];
  

  const [openIndex, setOpenIndex] = useState<number | null>(null);
 

 const toggleFAQ = (index: number): void => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  

  return (
    <>
      <Head>
        <title> "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses - UNIFOST",</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal Academy of Higher Education Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal Academy of Higher Education(MAHE)), MAHE Online, BBA in MAHE Online, B.Com in MAHE Online, MBA in MAHE Online, MCA in MAHE Online, M.Com in MAHE Online, MA in MAHE Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal Academy of Higher Education Online Degrees" />
        <meta name="robots" content="index, follow" /> 
        <link rel="canonical" href="https://unifostedu.com/mahe-online" />
        <link href="https://fonts.cdnfonts.com/css/queens" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Manipal Academy of Higher Education Online Degrees | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />
        <meta property="og:type" content="website" />
       

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal Academy of Higher Education Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal Academy of Higher Education. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <style jsx>{`
        .font-queens {
          font-family: 'Playfair Display', 'Queens', serif;
        }
        .font-manrope {
          font-family: 'Manrope', 'Inter', system-ui, sans-serif;
        }
      `}</style>
      
      <div className="font-manrope overflow-x-hidden">
        {/* Professional Responsive Header - Optimized */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 z-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                  alt="Mahe Logo" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
                />
                <h1 className="font-queens text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold whitespace-nowrap">
                  
                </h1>
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">             
                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                > 
                  <span className="text-base sm:text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call</span>
                </a>
                
                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  <span className="text-base">📞</span>
                </a>
                
                {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
                  className="lg:hidden inline-flex items-center p-2 rounded-md border hover:bg-gray-50 cursor-pointer mr-2"
                >
                  <span className="text-xl">☰</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-16 overflow-x-hidden break-words hyphens-auto">
          <PageContent
            sectionItems={selectionItem}
            activeSection={activeSection}
            ismobilemenuopen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            mode="breadcrumb"
            position="sticky"
            progressive
            topOffsetClass="top-[calc(3.5rem+6px)] sm:top-[calc(4rem+6px)] lg:top-[calc(5rem+6px)]"
            scrollOffset={96}
            breadcrumbPaddingClass="px-0 py-2"
          />
            <UniversityDateSlider
                   currentDate="January 2026 Session"
                   nextUpdateDate="Applications Closing on 20 Feb 2026"
                   information="Limited Seats Available - Apply Now!"
                   special="Average of 50% salary growth"
                   color="#dc2626"
                   backgroundColor="#fee2e2"
                   textColor="#991b1b"
                 />  

        {/* Premium Hero Section - Fully Responsive */}
        <HeroSection openModal={openModal} setOpenModal={setOpenModal}/>

        {/* Quick Action Panel */}
       

        {/* Enhanced Statistics Section - Responsive */}
       

        {/* Professional Rankings & Accreditations Section - Responsive */}
       <Accreditations openModal={openModal} setOpenModal={setOpenModal} />

        {/* Introduction to MAHE University Online */}
       <Interoducation openModal={openModal} setOpenModal={setOpenModal} />

          {/* A Leader Among Online Universities in India */}
      <AboutUs openModal={openModal} setOpenModal={setOpenModal} />

        {/* Why Choose MAHE University Online */}
       <WhyChoose openModal={openModal} setOpenModal={setOpenModal} />


        {/* Campus Tour Section */}
       <CampusTour openModal={openModal} setOpenModal={setOpenModal} />


        {/* Enhanced Courses Section */}
       <ExploreCourses   ugCourses={ugCourses}
  pgCourses={pgCourses} openModal={openModal} setOpenModal={setOpenModal}/>


        {/* Modern 360 Advantage */}
        

        {/* Key Highlights Section */}
        <AdvantageHighlights openModal={openModal} setOpenModal={setOpenModal} />


        {/* Fee Structure Section */}
        

        {/* Why Choose Section */}
       <Fees openModal={openModal} setOpenModal={setOpenModal} />

      <AdmissionProcess openModal={openModal} setOpenModal={setOpenModal} />

         

        {/* Certificate Section */}
        <Certification openModal={openModal} setOpenModal={setOpenModal} />


        {/* Placement Partners Section */}
       

        {/* Placement Records Section */}
       <PlacementPartnerRecords openModal={openModal} setOpenModal={setOpenModal} />


        {/* Premium Testimonials / Student Reviews */}
       <StudentReviews  openModal={openModal} setOpenModal={setOpenModal}/>


   {/* Professional FAQ Section */}

   {/* Conclusion Section */}
      <Faq openModal={openModal} setOpenModal={setOpenModal}/>
     
        {/* Professional Hiring Partners Section */}
      <HiringPartners openModal={openModal} setOpenModal={setOpenModal} />


        {/* Premium Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className=" bg-white flex items-center gap-4 mb-6">
                  <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal" className="h-12 w-auto" />
                 
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
                  {['Online MBA', 'BBA', 'MCA',  'M.Com', 'B.Com', 'MA JMC'].map((program, i) => (
                    <li key={i}>
                      <a onClick={() => setOpenModal ({ type: 'apply' })} className="text-gray-400 hover:text-orange-400 transition-colors cursor pointer">
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
                      <p className="text-white font-semibold">+91 7042646766</p>
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
                               {/* Popular Programs Section */}
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="border-t border-white/10 pt-8 mb-8"
                                  >
                                    <h4 className="text-lg font-bold mb-6 text-white text-center">
                                      Popular Programs & Specializations –Manipal Academy of Higher Education Online(MAHE) "  
                                    </h4>
                      
                                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                      {[
                                         "BBA Finance & Accounting - MAHE Online",
                                         "BBA Digital Marketing - MAHE Online",
                                         "BBA Enterepreneurship Management & Family Business - MAHE Online",
                                         "BBA Human Resource Management - MAHE Online",
                                         "BBA Data Analytics - MAHE Online",
                                         "BBA Retail & E-commerce Management - MAHE Online",

                                      

                                         "B.Com General - MAHE Online",

                                         "MBA Human Resource Management and Finance - MAHE Online",
                                         "MBA Finance and Marketing - MAHE Online",
                                         "MBA Marketing and Human Resource Management - MAHE Online",
                                         "MBA Marketing and Business Analytics - MAHE Online",
                                         "MBA Finance and Business Analytics - MAHE Online",
                                         "MBA Human Resource and Business Analytics - MAHE Online",
                                         "MBA Project Management - MAHE Online",
                                         "MBA Retail Management and Quick Commerce - MAHE Online",
                                         "MBA Artificial Intelligence Banking and Finance - MAHE Online",
                                         "MBA Other Fields (15+) - MAHE Online",

                                         "MCA AI & Data Science - MAHE Online",
                                        "MCA Cyber Security - MAHE Online",
                                          "MCA Cloud Computing - MAHE Online",
                                        "MCA Comprehensive Emerging Technologies - MAHE Online",
                                        "MCA AI & ML - MAHE Online",

                                         "M.Com General - MAHE Online",

                                         "MA Economics - MAHE Online",
                                         "MA Journalism and Mass Communication - MAHE Online"
                                         ]

                                    .map((keyword, index) => (
                                        <span
                                          key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                                          className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                                          title={keyword}
                                        >
                                          {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                                        </span>
                                      ))}
                                    </div>
                                  </motion.div>
                      

            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Manipal Academy of Higher Education Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
         {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
              universityName="Manipal Academy of Higher Education"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Manipal;