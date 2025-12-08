'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaBars, FaStar, FaCertificate, FaBuilding, FaUsers, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave, FaTimes } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";
import LazySection from '@/components/LazySection';
import PageContent from '@/components/PageContent/PageContent';
import Introduction from './_components/Introduction';
import Hero from './_components/Hero';
import WhyChoose from './_components/WhyChoose';
import ExploreClasses from './_components/ExploreClasses';
import CampusTour from './_components/CampusTour';
import AdvantageManipal from './_components/AdvantageManipal';
import RankingAccreditionsManipal from './_components/RankingAccreditionsManipal';
import WhyChooseManipal from './_components/WhyChooseManipal';
import Courses from './_components/Courses';
import KeyHighlights from './_components/KeyHighlights';
import AdmissionDatesManipal from './_components/AdmissionDatesManipal';
import AdvantagesManipal from './_components/AdvantagesManipal';
import About from './_components/About';
import ProgramBenefit from './_components/ProgramBenefit';
import AdmissionFeesProcessSessions from './_components/AdmissionFeesProcessSessions';
import PlacementPartners from './_components/PlacementPartners';
import PlacementRecord from './_components/PlacementRecord';
import CertificateLocation from './_components/CertificateLocation';
import ComparisonStudentReviews from './_components/ComparisonStudentReviews';
import FooterManipal from './_components/FooterManipal';
import { optimizeCloudinary } from '@/utils/cloudinary';


const Manipal = () => {

 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Finance & Accounting, Digital Marketing,Marketing, Entrepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipal-online-mca_moc5om.png",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Computer Applications (BCA) in Manipal Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "99,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Commerce (B.Com) in Manipal Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,75,000",
      specialization: "Super/Dual(Digital Marketing, Marketing, Analytics and Data Science, IT & Fintech, Finance Management, Human Resource Management, BFSI, Operations Management, International Business, Information Systems Management, Project Management, Supply Chain Management, Retail Management)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,08,000",
      specialization: "General", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Commerce (M.Com) in Manipal Online",
    },
  
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000 - 1,40,000",
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Arts (MA) in Manipal Online",
    },
  ];
    
const [showStickyCTA, setShowStickyCTA] = useState(false);
useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 const faqData = [
  {
    question: "Is Manipal University Jaipur Online approved by UGC?",
    answer:
      "Yes, Manipal University Jaipur Online is UGC-entitled and NAAC A+ accredited. All online degrees are valid and globally recognized."
  },
  {
    question: "Are the online MBA and online BCA degrees equivalent to regular programs?",
    answer:
      "Yes, all Manipal Online degrees hold the same recognition as traditional on-campus programs."
  },
  {
    question: "Can international students apply for Manipal Online programs?",
    answer:
      "Yes, students from over 50 countries enroll in Manipal University Jaipur Online each year."
  },
  {
    question: "What learning support does MUJ Online offer?",
    answer:
      "Students receive access to 24×7 LMS, live lectures, recorded classes, digital library, and dedicated student support teams."
  },
  {
    question: "Does Manipal Online provide placement assistance?",
    answer:
      "Yes, MUJ Online has a strong placement and career guidance cell offering job connections and industry mentorship."
  }
];
useEffect(() => {
      

      const timer= setTimeout(()=>{
       setOpenModal(true)
      },3000)
      return () => clearTimeout(timer);

       
},[])





  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');
  const [openModal, setOpenModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const sectionItems = [
    { id: "HeroSection", label: "Introduction" },
    { id: "CampusTour", label: "Campus Tour" },
    { id: "Courses", label: "Explore Courses" },
    { id: "KeyHighlights", label: "Key Highlights" },
    { id: "AdmissionDates", label: "Admission Dates" },
    { id: "Fees", label: "Fees Structure" },
    { id: "Admission", label: "Admission Process" },
   ];
   const activeSection = sectionItems[0]?.id ?? null;

  

  

  return (
    <>
       <Head>
        <title>Manipal University Online Jaipur, Rajasthan | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal University Jaipur, MUJ Online, BBA in muj Online, BCA in muj Online, B.Com in muj Online, MBA in muj Online, MCA in muj Online, M.Com in muj Online, MA in muj Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal University Online" />
        <meta name="robots" content="index, follow" />
         <link rel="canonical" href="https://unifostedu.com/manipal" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
         
        {/* Open Graph */}
        <meta property="og:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal University Jaipur. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Manipal University Jaipur Online",
      "alternateName": "Online Manipal",
      "url": "https://unifostedu.com/manipal",
      "logo": "https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
      "description": "UGC-entitled online degrees from NAAC A+ accredited Manipal University Jaipur",
      "telephone": "+91 7042646766",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/manipalonline",
        "https://www.linkedin.com/school/manipal-university-jaipur"
      ]
    })}
  </script>

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })}
  </script>

  {/* Course Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Online MBA from Manipal University Jaipur",
      "description": "UGC-approved online MBA with 21+ specializations",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Manipal University Jaipur",
        "sameAs": "https://unifostedu.com/manipal"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "duration": "P2Y",
        "courseFee": {
          "@type": "PriceSpecification",
          "price": "175000",
          "priceCurrency": "INR"
        }
      }
    })}
  </script>
      </Head>
      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
      <div className="poppins overflow-x-hidden break-words hyphens-auto">
      
         
      
      {/* Professional Responsive Header - Optimized */}
      <header className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Left Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
              <Image 
                src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg")} 
                alt="Manipal University Logo"
                width={200}
                height={200}
                 
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
              />
              <h1 className="font-queens text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold whitespace-nowrap">
                
              </h1>
          </div>

            {/* Right Side - Responsive */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
              {/* Mobile Menu Button */}
               {/* Mobile Menu Button */}
             <button
              onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
                 >
                 <FaBars className="w-5 h-5 text-gray-700" />
                 </button>
              
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
              </div>
            </div>
          </div>
      </header>

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row w-full">
        {/* Left Sidebar - Optimized */}
        <PageContent 
          sectionItems={sectionItems} 
          activeSection={activeSection} 
          ismobilemenuopen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Sidebar - Enhanced */}
        

        {/* Main Content */}
        <main className="flex-1 min-w-0 lg:ml-64 pt-14 sm:pt-16 lg:pt-20">

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                Get Started with Manipal University
              </DialogTitle>
            </DialogHeader>
            <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} universityName="Manipal University Jaipur" />
          </DialogContent>
        </Dialog>
      )}

     <Introduction setOpenModal={setOpenModal} openModal={openModal}/>
     <Hero setOpenModal={setOpenModal} openModal={openModal}/>
       
<WhyChoose setOpenModal={setOpenModal} openModal={openModal}/>

{/* Explore Online Classes Section - Professionally Styled */}
<ExploreClasses setOpenModal={setOpenModal} openModal={openModal}/>

{/* Campus Tour Section */}
<CampusTour setOpenModal={setOpenModal} openModal={openModal}/>

  {/* Enhanced Statistics Section */}
  <AdvantageManipal/>

      {/* Professional Rankings & Accreditations Section */}
      <RankingAccreditionsManipal/>

      {/* Unlock 360 Advantage */}
      

{/* Why Choose Manipal University Online - As per reference */}
<WhyChooseManipal/>

        {/* Enhanced Courses Section */}
     <Courses  ugCourses={ugCourses} pgCourses={pgCourses}/>

{/* Key Highlights Section */}
<KeyHighlights setOpenModal={setOpenModal} openModal={openModal}/>

{/* Admission Dates Section */}
<AdmissionDatesManipal setOpenModal={setOpenModal} openModal={openModal}/>

     {/*360 section*/}

  
  
    {/* Modern 360 Advantage */}
  <AdvantagesManipal/>

      {/* About Manipal Section  */}
<About/>

{/* Program Benefits Section */}
<ProgramBenefit/>

{/* Eligibility & Admission Section */}
<AdmissionFeesProcessSessions setOpenModal={setOpenModal} openModal={openModal}/>

{/* Placement Partners Section */}
<PlacementPartners setOpenModal={setOpenModal} openModal={openModal}/>

{/* Placement Record Section */}
<PlacementRecord setOpenModal={setOpenModal} openModal={openModal}/>

   


      {/* Certificate Section */}
     <CertificateLocation/>


      {/*  Add Quick Comparison Table */}
<ComparisonStudentReviews/>

        {/* Professional FAQ Section */}
      

        </main>
      </div>

        {/* Enhanced Footer */}
       <FooterManipal setOpenModal={setOpenModal} openModal={openModal}/> 
       
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
        </div>
    </>
  );
};


export default Manipal;
