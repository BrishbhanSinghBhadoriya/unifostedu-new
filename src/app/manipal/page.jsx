'use client';
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
      image: "/images/manipal-online-mca.png",
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
      image: "/images/bcom-online-image.webp",
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
      specialization: "Super/Dual(Human Resource Management and Finance, Finance and Marketing, Marketing and Human Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Artificial Intelligence Banking and Finance, 15 other fields)",
      image: "/images/mba-online-image.webp",
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
      image: "/images/mca1.webp",
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
      image: "/images/m.com.webp",
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
      image: "/images/ma1.webp",
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
    question: "Is Manipal University Jaipur recognized by UGC and NAAC?",
    answer:
      "Yes, Manipal University Jaipur (MUJ) is recognized by the University Grants Commission (UGC) and accredited by NAAC. Choosing an online program from Manipal Online University ensures you receive a credible and globally recognized degree. MUJ’s accreditation guarantees that your online Manipal University degree meets high academic standards and is accepted by employers and educational institutions worldwide.",
  },
  {
    question: "What online programs are offered by Manipal University Jaipur?",
    answer:
      "Manipal Online University offers a wide range of online programs at MUJ, including Management, MBA, BBA, Computer Science, Data Science, BCA, MCA, and professional certificate courses. By enrolling in online courses from Manipal University Jaipur, students can access flexible learning schedules while earning a degree from a top-ranked university.",
  },
  {
    question: "Are online degrees from Manipal University Jaipur valid for government jobs?",
    answer:
      "Yes, online degrees from Manipal University Jaipur, approved by UGC-DEB, are valid for government jobs, competitive exams like UPSC, and higher education. Studying at Manipal Online University ensures your MUJ online degree is recognized by government authorities and other educational institutions.",
  },
  {
    question: "What is the admission process for online courses?",
    answer:
      "The admission process at Manipal Online University is simple and fully online. Prospective students can apply for MUJ online programs by filling out the application form, submitting the required documents, and completing the fee payment. Online Manipal University admissions are designed to be hassle-free, making it easy to enroll in programs from anywhere in India or abroad.",
  },
  {
    question: "How much are the fees for online courses at Manipal University Jaipur?",
    answer:
      "Fees for online programs at Manipal University Jaipur vary depending on the course. MUJ provides flexible payment options and no-cost EMI plans for online Manipal University students. By choosing an online Manipal University program, students can pursue quality education without financial stress.",
  },
  {
    question: "Does Manipal University Jaipur provide placement assistance?",
    answer:
      "Yes, Manipal Online University offers dedicated placement assistance to students of online programs at MUJ. Graduates from online Manipal University courses receive career guidance, networking opportunities, and support to find the right job in their respective fields. Choosing MUJ ensures strong career support even for online learners.",
  },
  {
    question: "What is the duration of online programs?",
    answer:
      "The duration of online programs at Manipal University Jaipur depends on the specific course. Most undergraduate online Manipal University programs run for 3–4 years, while postgraduate online MUJ programs range from 1–2 years. Studying at Manipal Online University provides flexibility to complete your degree while managing other commitments.",
  },
  {
    question: "Are the online degrees internationally recognized?",
    answer:
      "Yes, online degrees from Manipal University Jaipur are internationally recognized. Select online programs from Manipal Online University are WES-accredited, adding global value to your MUJ degree. Choosing online Manipal University ensures your degree holds weight for international job opportunities and higher studies abroad.",
  },
  {
    question: "Can working professionals pursue online courses?",
    answer:
      "Absolutely! Online programs from Manipal University Jaipur are designed for working professionals. MUJ’s flexible schedule allows online Manipal University students to learn at their own pace without interrupting their careers. Enrolling in online Manipal University courses is ideal for career growth and skill enhancement while working.",
  },
  {
    question: "What is the difference between online and regular courses at Manipal University Jaipur?",
    answer:
      "Online Manipal University programs provide the same accredited degree as regular MUJ courses. The key difference is flexibility—students can access lectures, assignments, and live sessions digitally. Choosing an online program at Manipal University Jaipur offers quality education and the same global recognition without the need to attend a physical campus.",
  },
  {
    question: "Does the university offer scholarships for online programs?",
    answer:
      "Yes, Manipal Online University offers exclusive scholarships for meritorious students, defense personnel, government employees, and differently-abled learners. By enrolling in online programs at MUJ, students can avail financial support while earning a recognized degree from Manipal University Jaipur.",
  },
  {
    question: "Is technical support provided for online students?",
    answer:
      "Yes, Manipal Online University provides dedicated technical support to online MUJ students. From accessing course materials to attending live sessions, online Manipal University ensures a smooth learning experience. Support is available for all online Manipal University programs, making it convenient and reliable for students.",
  },
];




  const testimonials = [
    {
      name: "Menka Sharma",
      course: "MCA",
      university: "MUJ",
    //  image: "/images/menka-sharma.webp",
      text: "I always wanted to pursue my higher education dream without quitting my job, and MUJ has made it possible for me through their online degrees. My online MCA degree has given me wings to fly and chase my career aspirations."
    },
    {
      name: "Sahana K",
      course: "B.Com",
      university: "MUJ",
     // image: "/images/sahana-k.webp",
      text: "Funding my undergraduate degree and my younger brother’s education has been possible only because of Manipal University Jaipur’s affordable online B.Com degree. Thanks to Online Manipal, I’m able to manage my work and academics. I believe this online degree will help me become personally and financially independent."
    },
    {
      name: "Sabin Lamichchane",
      course: "MBA",
      university: "MUJ",
     // image: "/images/sabin-lamichchane.webp",
      text: "As a working professional, I wanted to enhance my domain knowledge and move to managerial roles. I found Manipal University Jaipur’s online MBA program as the right opportunity to climb up my career ladder. The program has helped me build new skills required to thrive in the industry."
    },
    {
      name: "Syed Abdul Faizan",
      course: "M.Com",
      university: "MUJ",
     // image: "/images/syed-abdul.webp",
      text: "With over 2 years of work experience in accounting, I wanted to pursue an online M.Com degree to boost my career further and get a higher salary. Thanks to Online Manipal, I’m able to manage my work life and academic through flexible live classes and recorded sessions which are available on the portal."
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
      
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      
       <Head>
        <title>Manipal University Online Jaipur, Rajasthan | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal University Jaipur, MUJ Online, BBA in muj Online, BCA in muj Online, B.Com in muj Online, MBA in muj Online, MCA in muj Online, M.Com in muj Online, MA in muj Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal University Online" />
        <meta name="robots" content="index, follow" /> 
         <link rel="canonical" href="https://unifostedu.com/manipal" />
         <link href="https://fonts.cdnfonts.com/css/queens" rel="stylesheet" />
         
        {/* Open Graph */}
        <meta property="og:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="/images/manipal.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal University Jaipur. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="/images/manipal.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Manipal University Jaipur Online",
      "alternateName": "Online Manipal",
      "url": "https://unifostedu.com/manipal",
      "logo": "https://unifostedu.com/images/manipallogo.jpg",
      "description": "UGC-entitled online degrees from NAAC A+ accredited Manipal University Jaipur",
      "telephone": "+91-7042867717",
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
        .queens { font-family: 'Queens', serif; }
      `}</style>
      <div className="queens">
      
         
      
      {/* Professional Responsive Header */}
      <header className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left Logo */}
            <div className="flex items-center gap-2 lg:gap-4">
              <img 
                src="/images/manipallogo.jpg" 
                alt="Manipal University Logo" 
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


  {/* Modern Hero Section */}
  <section className="relative min-h-screen  overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[url('/images/manipal.webp')] bg-cover bg-center opacity-200"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>
    
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-3 py-2 sm:px-4 sm:py-2 text-orange-300 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">NAAC A+ Accredited University</span>
            <span className="sm:hidden">NAAC A+ Accredited</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-queens text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-white">Transform Your</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Future with
              </span>
              <span className="block text-white">Manipal University</span>
              <span className="block text-orange-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mt-1 sm:mt-2">
                Jaipur (MUJ)
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Globally recognized online degrees with flexible learning, expert mentorship, and career-focused programs.
            </p>
          </div>

          {/* Course Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['MBA', 'BBA', 'MCA', 'BCA', 'MCOM', 'BCOM', 'MAJMC'].map((course, i) => (
              <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300">
                {course}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button 
              onClick={() => setOpenModal({ type: 'apply' })}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 cursor-pointer text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
            >
              Apply Now
            </button>
           
          </div>
        </div>

        {/* Right Content - Accreditations */}
        <div className="lg:pl-8 xl:pl-12 order-2 lg:order-2">
          <div className=" rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Recognized & Accredited</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { src: '/images/naac.webp', label: 'NAAC A+', sublabel: 'Accredited' },
                { src: '/images/ugc.webp', label: 'UGC', sublabel: 'Entitled' },
                { src: '/images/qs.webp', label: 'Global', sublabel: 'Recognition' },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className=" rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                    <Image 
                      src={item.src} 
                      alt={item.label} 
                      width={80} 
                      height={80} 
                      className="mx-auto h-12 sm:h-16 w-auto object-contain mb-2 sm:mb-3" 
                    />
                    <h4 className="text-white font-semibold text-sm sm:text-lg">{item.label}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400">50+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400">100%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Placement Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>

 {/* Professional Statistics Section */}
 <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-tight">
                  100% Flexible <br className="hidden sm:block"/> Learning
                </h3>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaIndustry className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-tight">
                  Industry Relevant <br className="hidden sm:block"/> Curriculum
                </h3>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUniversity className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-tight">
                  At Par with <br className="hidden sm:block"/> On-Campus Degrees
                </h3>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaMoneyBillWave className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-tight">
                  100% Placement <br className="hidden sm:block"/> Assistance
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Professional Rankings & Accreditations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditations</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by leading accreditation bodies and ranked among India's top universities
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      width={400} 
                      height={260} 
                      className="w-full h-full max-h-24 sm:max-h-32 object-contain group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div className="px-3 py-4 sm:px-4 sm:py-5">
                    <p className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unlock 360 Advantage */}
      

{/* Why Choose Manipal University Online - As per reference */}
<section className="relative py-16 md:py-24 bg-[#0B0B10] text-white overflow-hidden">
  {/* Subtle grid pattern */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
      {[{value:'60+', label:'Countries and 2000+ towns &\ncities- our students span the globe'},
        {value:'100k+', label:'Learners have been empowered through Online Manipal'},
        {value:'93%', label:'Of students say their online degree has a positive ROI'},
        {value:'81%', label:'Of students find online is better than or equal to on-campus learning'}].map((s, i) => (
        <div key={i} className="text-left">
          <div className="font-queens text-5xl sm:text-6xl md:text-7xl leading-none">{s.value}</div>
          <p className="mt-3 text-sm sm:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Heading */}
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Students Choose Us</h3>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Card 1 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🏅</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Degree from top ranked Manipal universities</h4>
        <p className="text-gray-600 text-sm">Graduate with UGC-entitled, NAAC A+ accredited degrees trusted by employers.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">C</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Exclusive Coursera access</h4>
        <p className="text-gray-600 text-sm">Free access to 10K+ courses and professional certificates from global partners.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Scholarships up to 30%</h4>
        <p className="text-gray-600 text-sm">Avail scholarships under merit, defense, alumni, and other categories.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center mb-4">
          <span className="text-2xl">💳</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Easy financing options</h4>
        <p className="text-gray-600 text-sm">Improved affordability with flexible financing and no-cost EMIs.</p>
      </div>

      {/* Card 5 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Manipal alumni status</h4>
        <p className="text-gray-600 text-sm">Become part of a 200,000+ strong global alumni network.</p>
      </div>
    </div>
  </div>
</section>

      {/* Professional Courses Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
        Manipal University <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Programs</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Choose from our comprehensive range of undergraduate and postgraduate programs designed for working professionals
      </p>
    </div>

    <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8 sm:mb-12">
        <Tabs.List className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
          <Tabs.Trigger 
            value="all"   
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                     ${activeTab==='all' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
          >
            All Programs
          </Tabs.Trigger>
          <Tabs.Trigger 
            value="ug"  
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                     ${activeTab==='ug' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
          >
            Undergraduate
          </Tabs.Trigger>
          <Tabs.Trigger 
            value="pg"  
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                     ${activeTab==='pg' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
          >
            Postgraduate
          </Tabs.Trigger>
        </Tabs.List>
      </div>

    <Tabs.Content value="all">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {[...ugCourses, ...pgCourses,].map((course, idx) => (
            <div key={idx} className="transform hover:-translate-y-1 transition-all duration-300">
              <EnquireCard {...course} universityName="Manipal University Online" />
            </div>
          ))}
        </div>
      </Tabs.Content>

      {/* UG Courses */}
    <Tabs.Content value="ug">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {ugCourses.map((course, idx) => (
            <div key={idx} className="transform hover:-translate-y-1 transition-all duration-300">
              <EnquireCard {...course} universityName="Manipal University Online" />
            </div>
          ))}
        </div>
      </Tabs.Content>

      {/* PG Courses */}
    <Tabs.Content value="pg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {pgCourses.map((course, idx) => (
            <div key={idx} className="transform hover:-translate-y-1 transition-all duration-300">
              <EnquireCard {...course} universityName="Manipal University Online" />
            </div>
          ))}
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</section>

     {/*360 section*/}

  
  
    {/* Modern 360 Advantage */}
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1200px 300px at 10% -10%, rgba(255,122,54,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-queens font-bold text-gray-900">Unlock The 360° Advantage</h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-3xl mx-auto">Comprehensive benefits designed to support your learning journey and career growth.</p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[{
            icon:'🎓', title:'Prestigious Degree', desc:'Globally recognized degree that opens doors worldwide.'
          },{
            icon:'📚', title:'Industry-Relevant Curriculum', desc:'Learn in-demand skills aligned with market needs.'
          },{
            icon:'💼', title:'Placement Assistance', desc:'End-to-end support with internships and jobs.'
          },{
            icon:'💳', title:'Easy Financing', desc:'Affordable no-cost EMI options for all learners.'
          }].map((b,i)=>(
            <div key={i} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Financing + Scholarships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <h3 className="text-2xl font-bold mb-2">Avail easy financing options</h3>
            <p className="text-orange-100">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <h3 className="text-2xl font-bold mb-2">Get attractive scholarships</h3>
            <p className="text-blue-100">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</p>
          </div>
        </div>
      </div>
    </section>
  



      {/* Why Choose Section */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Online Manipal Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaStar className="text-yellow-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible & Convenient Schedule</h3>
              <p className="text-gray-600">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaCertificate className="text-blue-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">At Par with On-Campus Degrees</h3>
              <p className="text-gray-600">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaUsers className="text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Faculty & Mentors</h3>
              <p className="text-gray-600">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FaBuilding className="text-purple-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prestigious Manipal Alumni Network</h3>
              <p className="text-gray-600">Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Manipal Section  */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-orange-600">Manipal University Jaipur</span>
        </h2>
        <div className="prose prose-lg text-gray-700 space-y-4">
          <p>
            Manipal University Jaipur (MUJ) is a premier institution offering globally recognized online degrees through Online Manipal. 
            Established in 2011, MUJ has quickly become one of India's leading universities with NAAC A+ accreditation and UGC approval.
          </p>
          <p>
            With over 100,000+ learners worldwide, Manipal Online delivers industry-relevant education through flexible learning models. 
            Our online programs in MBA, BBA, MCA, BCA, M.Com, B.Com, and MA are designed for working professionals who want to upskill 
            without career breaks.
          </p>
          <p>
            Manipal University Jaipur's online degrees are WES-accredited and accepted globally for employment and higher education. 
            Students benefit from live classes, recorded sessions, expert faculty, placement assistance, and membership in the 
            200,000+ strong Manipal alumni network spanning 50+ countries.
          </p>
        </div>
      </div>
      <div>
        <img src="/images/manipal.webp" alt="Manipal University Jaipur Campus" className="rounded-2xl shadow-2xl" />
      </div>
    </div>
  </div>
</section>

{/* Program Benefits Section */}
<section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose <span className="text-orange-600">Online Manipal University Programs?</span>
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">UGC-Entitled Online Degrees</h3>
        <p className="text-gray-600">
          All Manipal University Jaipur online programs are UGC-DEB approved and equivalent to regular degrees. 
          Valid for government jobs, competitive exams like UPSC, SSC, and higher education in India and abroad.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Learning Model</h3>
        <p className="text-gray-600">
          Study anytime, anywhere with Manipal Online's hybrid learning approach. Access live interactive classes, 
          recorded lectures, digital study materials, and LMS platform 24/7 from desktop or mobile devices.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Relevant Curriculum</h3>
        <p className="text-gray-600">
          MUJ online courses feature updated curriculum aligned with industry demands. Learn practical skills in 
          emerging areas like Data Science, AI, Digital Marketing, Cloud Computing, and Business Analytics.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Faculty & Mentorship</h3>
        <p className="text-gray-600">
          Learn from experienced professors and industry experts at Manipal University Jaipur. Benefit from 
          personalized mentorship, doubt-clearing sessions, and career guidance throughout your program.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">100% Placement Assistance</h3>
        <p className="text-gray-600">
          Get dedicated placement support from Manipal Online's career services team. Access job opportunities, 
          resume building workshops, interview preparation, and connections with 2000+ hiring partners.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Global Alumni Network</h3>
        <p className="text-gray-600">
          Join the prestigious Manipal alumni community of 200,000+ graduates across 50+ countries. Leverage 
          networking opportunities, mentorship programs, and alumni chapters worldwide for career growth.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Eligibility & Admission Section */}
<section id='Admission' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">
      Eligibility & <span className="text-orange-600">Admission Process</span>
    </h2>
    
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Eligibility Criteria for MUJ Online Programs</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-bold text-lg mb-2">Undergraduate Programs (BBA, BCA, B.Com)</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>10+2 or equivalent from recognized board</li>
              <li>Minimum 40% aggregate marks</li>
              <li>Age: No upper age limit</li>
              <li>Open for all streams (Science, Commerce, Arts)</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-lg mb-2">Postgraduate Programs (MBA, MCA, M.Com, MA)</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Bachelor's degree from UGC-recognized university</li>
              <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
              <li>MCA requires Mathematics/Statistics in 10+2 or graduation</li>
              <li>Working professionals and fresh graduates both eligible</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-6">Simple Admission Process</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold mb-1">Fill Application Form</h4>
              <p className="text-gray-600">Complete online application with basic details and program preference</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold mb-1">Document Verification</h4>
              <p className="text-gray-600">Upload educational certificates, ID proof, and photographs for verification</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold mb-1">Fee Payment</h4>
              <p className="text-gray-600">Pay admission fee online with flexible EMI options available</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-bold mb-1">Enrollment Confirmation</h4>
              <p className="text-gray-600">Receive admission confirmation and access to LMS portal within 48 hours</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setOpenModal({ type: 'apply' })}
          className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all"
        >
          Start Your Application Now
        </button>
      </div>
    </div>
  </div>
</section>

{/* Fee Structure Section */}
<section id='Fees' className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-4">
      Affordable <span className="text-orange-600">Fee Structure</span>
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Manipal University Jaipur offers competitive fee structure with flexible payment options and no-cost EMI 
      facilities. Scholarships available up to 30% for eligible students.
    </p>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Add fee cards for each program */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">BBA Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹1,35,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 3 years</li>
          <li>✓ No-cost EMI starting ₹3,750/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">BCA Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹1,35,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 3 years</li>
          <li>✓ No-cost EMI starting ₹3,750/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">B.Com Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹99,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 3 years</li>
          <li>✓ No-cost EMI starting ₹/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">MBA Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹1,75,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 2 years</li>
          <li>✓ No-cost EMI starting ₹/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">MCA Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹1,58,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 2 years</li>
          <li>✓ No-cost EMI starting ₹/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">M.Com Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹1,08,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 2 years</li>
          <li>✓ No-cost EMI starting ₹/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>
      

      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-2">MA Online</h3>
        <div className="text-3xl font-bold text-orange-600 mb-4">₹80,000-₹1,40,000</div>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>✓ Total program fee for 3 years</li>
          <li>✓ No-cost EMI starting ₹/month</li>
          <li>✓ All study materials included</li>
          <li>✓ Exam fee included</li>
        </ul>
      </div>
    </div>
  </div>
</section>

   {/* Admission Procedure */}

   <AdmissionProcedure />


      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image width={100} height={100} src="/images/muj-certi.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognized Online Degree from Manipal University</h2>
            <p className="mb-6 text-lg">
              Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC & AICTE Recognized Degrees</li>
              <li>Daily Live & Recorded Classes</li>
              <li>Global Collaborations with Ivy-League Institutions</li>
              <li>100% Placement & Internship Support</li>
            </ul>
          </div>
        </div>
      </section>
      
       
    {/*  Add Location-Based Section (for local SEO) */}
<section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      Online Manipal Programs <span className="text-orange-600">Available Across India</span>
    </h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[
        'Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 
        'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
        'Jaipur', 'Lucknow', 'Chandigarh', 'Indore'
      ].map(city => (
        <div key={city} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
          <div className="text-2xl mb-2">📍</div>
          <h3 className="font-bold text-sm">{city}</h3>
          <p className="text-xs text-gray-600">Online Programs</p>
        </div>
      ))}
    </div>
    
    <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
      Manipal University Jaipur's online programs are accessible from anywhere in India. 
      Students from Delhi, Mumbai, Bangalore, and 2000+ cities trust MUJ for quality online education.
    </p>
  </div>
</section>


      {/*  Add Quick Comparison Table */}
<section id='QuickComparison' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-orange-600">Online vs Regular</span> Degree Comparison
    </h2>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Online Manipal</th>
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
      {/* Professional Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Real Stories, <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Real Impact</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our learners who have transformed their careers with Manipal University Online
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-orange-500 mx-auto sm:mx-0 mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-sm sm:text-base text-orange-600 font-semibold">
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
        <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about Manipal University Jaipur Online Programs
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
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
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

      {/* Professional Hiring Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
              Our Students Work At <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top Companies</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join the ranks of successful graduates working at leading organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {["/images/company.webp", "/images/company1.webp", "/images/company9.webp", "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp", "/images/ey.webp", "/images/ibm.webp", "/images/hp.webp", "/images/tata.png", "/images/apple.jpg","/images/hero.webp"].map((src, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
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
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Join Them?</h3>
              <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Start your journey with Manipal University Online and unlock endless career opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Apply Now
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
            universityName="Manipal University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </section>

      {/* Professional Footer */}
      <footer className="bg-[#0B0B10] text-gray-300 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/manipallogo.jpg" alt="Manipal" className="h-8 w-auto" />
                <span className="font-queens text-xl text-white">Online Manipal</span>
              </div>
              <p className="text-sm text-gray-400">UGC-entitled, NAAC A+ accredited online degrees designed for modern learners.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>MBA</li>
                <li>BBA</li>
                <li>MCA</li>
                <li>BCA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href="#Admission" className="hover:text-white transition-colors">Admissions</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
                 <li><a href="#Faq" className="hover:text-white transition-colors">FAQs</a></li>
                 <li><a href="#QuickComparison" className="hover:text-white transition-colors">Quick Comparison</a></li>
                 <li><a href="#Fees" className="hover:text-white transition-colors">Fees Structure</a></li>
              
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="text-sm">📞 +91-7042867717</p>
              <p className="text-sm">✉️ info@unifostedu.com</p>
              <button onClick={() => setOpenModal({ type: 'apply' })} className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm">Apply Now</button>
            </div>
          </div>
          {/* Popular Programs & Specializations - MUJ */}
<div className="border-t border-gray-700 pt-8 mb-8">
  <h4 className="text-lg font-semibold mb-4 text-white text-center">
    Popular Programs & Specializations – Manipal University Jaipur (MUJ)
  </h4>

  <div className="flex flex-wrap justify-center gap-2">
    {[
      // UG Courses
      "BBA General - MUJ Online",
      "BBA Finance & Accounting - MUJ Online",
      "BBA Digital Marketing - MUJ Online",
      "BBA Entrepreneurship & Family Business - MUJ Online",
      "BBA Human Resource Management - MUJ Online",
      "BBA Data Analytics - MUJ Online",
      "BBA Retail & E-commerce Management - MUJ Online",

      "BCA General - MUJ Online",
      "BCA Data Science & Analytics - MUJ Online",
      "BCA Cyber Security - MUJ Online",
      "BCA Cloud Computing - MUJ Online",

      "B.Com General - MUJ Online",

      // PG Courses
      "MBA General - MUJ Online",
      "MBA HR & Finance - MUJ Online",
      "MBA Finance & Marketing - MUJ Online",
      "MBA Marketing & HR - MUJ Online",
      "MBA Marketing & Business Analytics - MUJ Online",
      "MBA Finance & Business Analytics - MUJ Online",
      "MBA Project Management - MUJ Online",
      "MBA Retail Management & Quick Commerce - MUJ Online",
      "MBA Artificial Intelligence in Banking & Finance - MUJ Online",

      "MCA AI & Data Science - MUJ Online",
      "MCA Cyber Security - MUJ Online",
      "MCA Cloud Computing - MUJ Online",
      "MCA Comprehensive Emerging Technologies - MUJ Online",
      "MCA Artificial Intelligence & Machine Learning - MUJ Online",

      "M.Com General - MUJ Online",

      "MA Economics - MUJ Online",
      "MA Journalism & Mass Communication - MUJ Online"
    ].map((keyword, index) => (
      <span
        key={index}
        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-gray-700 hover:text-white transition-colors cursor-default"
        title={keyword}
      >
        {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
      </span>
    ))}
  </div>
</div>

          <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Manipal University Online. All rights reserved.</div>
        </div>
      </footer>
      </>
  );
};

export default Manipal;


