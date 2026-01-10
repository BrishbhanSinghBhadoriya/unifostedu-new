'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaStar, FaCertificate, FaBuilding, FaUser, FaPhone, FaWhatsapp, FaLaptop, FaBook, FaGraduationCap, FaIndustry, FaUserCircle, FaUniversity, FaMoneyBillWave, FaRupeeSign, FaChalkboardTeacher, FaBars, FaTimes } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AccreditationSection from "@/components/AccreditationSection";
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from 'next/head';
import Image from 'next/image';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { MdSupportAgent } from "react-icons/md";
// import { BiBookContent } from "react-icons/bi";
// import { BsBuildingCheck } from "react-icons/bs";
// import { AiOutlineSchedule } from "react-icons/ai";
import { ChevronDown } from "lucide-react";
import PageContent from "@/components/PageContent/PageContent";
import { OpenModalState } from '../../../types/Modal';
const LpuOnline = () => {
  const sectionItem = [
                    { id: "introduction", label: "Introduction" },
                    { id: "campus-tour", label: "Campus Tour" },
                    { id: "courses", label: "Explore Online Courses & Fees Structure" },
                    { id: "highlights", label: "Key Highlights" },
                    { id: "admission-dates", label: "Admission & Exam Details " },     
                    { id: "admission-process", label: "Admission Process" },
                    { id: "placement-partners", label: "Placement Partners" },   
                    { id: "faq", label: "Student Reviews & FAQ" },
                    { id: "conclusion", label: "Conclusion" }
                ]
         const [activeSection, setActiveSection] = useState(sectionItem[0]?.id ?? null);
              
      
                 useEffect(() => {
                     if (!sectionItem.length) return undefined;
                 
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
                 
                     sectionItem.forEach((section) => {
                       const element = document.getElementById(section.id);
                       if (element) {
                         observer.observe(element);
                       }
                     });
                 
                     return () => {
                       sectionItem.forEach((section) => {
                         const element = document.getElementById(section.id);
                         if (element) {
                           observer.unobserve(element);
                         }
                       });
                       observer.disconnect();
                     };
                   }, [sectionItem]);
  // Introduction content
  const introductionContent = {
    title: "About LPU Online: Redefining Education for India 2025",
    description: `In the dynamic landscape of modern education, LPU Online stands as a beacon of innovation and accessibility. As the digital arm of Lovely Professional University, one of India's largest and most renowned educational institutions, LPU Online is dedicated to delivering high-quality, UGC-entitled degrees to students and working professionals across the country and beyond. The mission of LPU Online is to break down geographical and financial barriers, making world-class education not just a dream, but an achievable reality for everyone. Whether you are searching for the best online MBA in India, a cutting-edge online data science course, or a practical digital marketing certification online, LPU Online provides a robust, flexible, and recognized platform to propel your career forward in 2025 and the future.`,
    pillars: `The ecosystem at LPU Online is built on three core pillars: Quality, Flexibility, and Recognition. Every online degree and certificate in web development is crafted by industry experts and seasoned academics, ensuring the curriculum is not only theoretically sound but also pragmatically aligned with the demands of the global job market. The learning experience is powered by a state-of-the-art Learning Management System (LMS). This intuitive platform provides students with 24/7 access to engaging video lectures, e-books, interactive assignments, and virtual labs, creating a truly immersive online and distance learning environment. This makes LPU Online a premier choice among the top online universities in India for those who need to balance their education with personal and professional commitments.`
  };

  const whyChooseLPU = {
    title: "Why Choose LPU Online? Your Gateway to a Brighter Future",
    description: `When you compare online universities in India, LPU Online consistently emerges as a top contender. But what exactly sets it apart? The decision to choose LPU Online is an investment in a future-proof career, supported by a multitude of compelling benefits designed for the aspirants of 2025.`,
    reasons: [
      {
        title: "UGC-Entitled and Nationally Recognized Degrees",
        description: `The foremost concern for any student considering online courses is validity. Rest assured, every online degree offered by LPU Online is fully entitled by the University Grants Commission (UGC). This national recognition means your qualification, be it an online MBA in India or a B.Com, will be valued by employers, government bodies, and other educational institutions across India. This crucial factor places LPU Online high on the list of recognized online universities in India, giving you the confidence that your investment is secure and your credential is powerful.`
      },
      {
        title: "A Curriculum Designed for the Real World",
        description: `The academic programs at LPU Online are not created in an ivory tower. They are meticulously designed in consultation with industry leaders to ensure relevance. For instance, the online data science course India incorporates the latest tools and programming languages like Python and R, while the digital marketing certification online covers everything from SEO and SEM to social media analytics and content marketing. Similarly, the ai and ml certification India delves into machine learning algorithms and AI applications that are revolutionizing industries. This focus on practical, employable skills ensures that graduates are job-ready from day one.`
      },
      {
        title: "Unmatched Flexibility for Working Professionals and Freshers",
        description: `The core of online education is flexibility, and LPU Online has perfected this art. The platform is a boon for working professionals who aspire to upskill or earn a higher degree like an executive MBA online India without pausing their careers. There are no fixed class timings; you can access your lectures, complete assignments, and prepare for exams according to your own schedule, whether you are in Delhi, Mumbai, Bangalore, or Chennai. This flexibility also extends to freshers who may be preparing for other competitive exams or pursuing personal interests alongside their degree.`
      },
      {
        title: "Affordable Education with Transparent Fee Structure",
        description: `LPU Online is committed to making quality education affordable. When you compare course fees online for similar programs offered by other best online universities in India, you will find that LPU Online offers exceptional value. The fees structure is transparent, with no hidden costs, making an affordable online MBA India a reality for thousands of students. This commitment to affordability ensures that financial constraints do not hinder talent and ambition.`
      },
      {
        title: "Learn from the Best in the Business",
        description: `The faculty at LPU Online comprises a blend of seasoned academicians and industry veterans who bring a wealth of knowledge and real-world experience into the virtual classroom. Their expertise ensures that the learning is not just about passing exams but about understanding concepts and their practical applications. This high-quality instruction is a consistent highlight in positive LPU online courses reviews and is a critical component of the university's success.`
      },
      {
        title: "Simplified Admission Process",
        description: `The admission process at LPU Online is streamlined and user-friendly. It is often a key differentiator for those looking for an online MBA without entrance exam, as the process is generally based on academic merit. Prospective students can easily initiate their journey by filling out an online application. To help with this decision, the university offers the opportunity to book free counseling for courses or talk to education expert online, providing clarity and guidance at every step. You can also download course guide or university info pack download to have all the information at your fingertips.`
      }
    ]
  };

 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,50,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Business Administration (BBA) in LPU Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,50,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Computer Applications (BCA) in LPU Online",
    },
   
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum ",
      fees: "80,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Bachelor of Arts (BA) in LPU Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: " Bachelor’s degree (any discipline) or equivalent",
      fees: "2,00,000",
      specialization: "HR, Finance, Marketing, Operations, Analytics, Digital Marketing, Data Science, IT, International Business, Banking, Healthcare, Logistics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Business Administration (MBA) in LPU Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT) With Mathematics",
      fees: "1,48,000",
      specialization: "ML & AI, Data Science, Cybersecurity, Full Stack, AR/VR & Game Development", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Computer Applications (MCA) in LPU Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,00,000",
      specialization: "General,", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Commerce (M.Com) in LPU Online",
    },
     {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation ",
      fees: "80,000",
      specialization: "Sociology, English, Political Science, History", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Arts(MA) in LPU Online",
     },
      {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000",
      specialization: "Mathematics, Economics", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: "Lovely Professional University",
      universityShort: "LPU",
      alt: "Master of Science(M.Sc) in LPU Online",
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

 useEffect(() => {
 
   const timer= setTimeout(()=>{
   setOpenModal((type: OpenModalState) => type === null ? { type: 'enquire' } : type);
   },3000)
   return () => clearTimeout(timer);       
   },[])

  // Prevent scrolling when mobile menu is open
 

  return (
    <div className="bg-gray-50 poppins">
      <Head>
        <title>LPU Online Degrees | Lovely Professional University UG & PG Courses - UNIFOST</title>
        <meta name="description" content="Explore globally recognized online programs from Lovely Professional University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="LPU Online, Lovely Professional University, LPU Online Degrees, BBA in LPU Online, BCA in LPU Online, B.Com in LPU Online, MBA in LPU Online, MCA in LPU Online, M.Com in LPU Online, BA in LPU Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Lovely Professional University Online Degrees" />
        <meta name="robots" content="index, follow" /> 
        <link rel="canonical" href="https://unifostedu.com/lpu-online" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LPU Online Degrees | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/lpu-online" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LPU Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Lovely Professional University. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; } // This can be moved to a global stylesheet
      `}</style>
        
      <div className="max-w-screen-2xl mx-auto flex">
        {/* Desktop Sidebar */}
           <PageContent sectionItems={sectionItem} activeSection={activeSection} ismobilemenuopen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <main className="flex-1 min-w-0 lg:pl-72">
          <div className="overflow-x-hidden pt-16 lg:pt-20">
            {/* Professional Responsive Header */}
            <header className="w-full fixed bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 top-0 left-0 right-0 z-50">
              <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
                  {/* Left Logo */}
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                    <img 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/LPU-Online-Logo_blodcq.svg" 
                      alt="LPU Online Logo" 
                      className="h-6 w-auto sm:h-8 lg:h-12" 
                    />
                  </div>

                  {/* Right Side - Responsive */}
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
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
                      href="tel:+917042646766"
                      className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-orange-600 transition-colors"
                    > 
                      <FaPhone className="text-orange-500 rotate-90" />
                      <span className="hidden lg:inline">+91 7042646766</span>
                    </a>
                    
                    {/* Apply Button */}
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
                    >
                      <span className="hidden sm:inline">Apply Now</span>
                      <span className="sm:hidden">Apply</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>

          

        {/* Premium Hero Section */}
        <section id="introduction" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0">
  <Image
    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu3_mzvr6y.webp"
    alt="LPU Online student studying on a laptop"
              fill
    className="object-cover object-center"
    priority
  />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full ">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
              
              {/* Left Content */}
              <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 lg:py-24 w-full px-4 sm:px-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-3 sm:space-y-6"
                >
                  {/* University Badge */}
                  <div className="inline-flex items-center gap-1 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-6 py-1.5 sm:py-3 border border-white/30">
                    <img 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/LPU-Online-Logo_blodcq.svg" 
                      alt="LPU Logo" 
                      className="h-5 sm:h-8 w-auto" 
                    />
                    <span className="text-xs sm:text-lg font-semibold">Lovely Professional University</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
                    <span className="block">Transform Your</span>
                    <span className="block text-[#ff6900] font-semibold">
                      Future with LPU Online
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl text-shadow">
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
                     <Button // Replaced button with Button component for consistency
                       size="lg"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                       onClick={() => setOpenModal({ type: 'apply' })}
                     >
                       Apply Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                     </Button>
                     <Button // Replaced button with Button component for consistency
                       size="lg"
                       variant="outline"
                      className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto bg-gray-600 "
                       onClick={() => setOpenModal({ type: 'enquire' })}
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
          

        {/* About Section / Campus Tour */}
        <section id="campus-tour" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 text-center">
              About <span className="text-orange-500">LPU Online</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
             LPU Online, known as Lovely Professional University Online, is one of the leading platform which offers online degrees in Jalandhar and have secured position among the top colleges in India. It is one of the reputed MBA colleges in Punjab, LPU Online stands at the front of innovation in distance education, and provides a flexible and high-quality learning experience. Learners searching for online courses near me, top online courses near me, or the best university for online degree in Jalandhar often find LPU Online as their preferred destination for professional advancement and global recognition.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
             Established with vision of equality education for everyone, LPU Online extends the tradition of Lovely Professional University, one of India’s top colleges in India. Through its advanced online platform which support students, LPU Online enables learners to pursue online MBA from distance, BBA, MCA, and various other best courses in LPU without limitations. The university’s programs are structured to meet the academic and professional needs of today’s learners, making it one of the best options for distance courses in Punjab.   </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed">
             Students choosing LPU Online benefit from a digital learning that enhances flexibility, engagement, and skill development. As one of the recognized MBA colleges in Punjab, the institution offers programs that prepare learners for leadership roles in business, technology, and management. With LPU Online, students from across India gain access to world-class education that can be pursued anytime, anywhere — whether they are professionals looking for online degrees in Jalandhar or students searching for top online courses near me.     </p>
          </div>

          {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8  md:pt-15">
    {/* Heading */}
    <div className="text-center mb-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        LPU Online – Bridging Distance and Education
      </h2>
      <div className="mx-auto h-1 w-20 bg-yellow-400 rounded-full"></div>
    </div>

    {/* Text Section Only */}
    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        In the world of technology, <span className="font-semibold text-blue-700">LPU Online</span> acts as a bridge between quality education and accessibility. Ranked among the top colleges in India, it provides programs that combine academic competition with real-world experience. Its distance courses in Punjab have empowered thousands of learners to upgrade their qualifications while maintaining work-life balance.
      </p>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        For those pursuing an <span className="font-semibold text-blue-700">online MBA from distance</span>, LPU Online stands out among MBA colleges in Punjab for its industry-oriented curriculum and experienced faculty. The program focuses on business strategy, leadership, and innovation—making it one of the best courses in LPU for professionals aiming to accelerate their careers. Students across India searching for <span className="italic">online courses near me</span> often choose LPU Online for its interactive lectures, live sessions, and comprehensive learning support.
      </p>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        Every course under LPU Online—whether a management degree or a computer application program—is designed to meet evolving global education standards. With LPU Online, learners can earn <span className="font-semibold text-blue-700">online degrees in Jalandhar</span> that hold national and international credibility, opening doors to global opportunities. This makes LPU Online not just the best university for online degrees in Jalandhar but also a benchmark among top colleges in India for modern digital education.
      </p>
    </div>
  </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
  {/* Academic Excellence Section */}
  <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
    <div className="text-center mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Academic Excellence and Innovation
      </h3>
      <div className="mx-auto h-1 w-16 bg-yellow-400 rounded-full"></div>
    </div>

    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        <span className="font-semibold text-blue-700">LPU Online</span> combines technology, quality content, and expert faculty to deliver excellence in digital education. As one of the <span className="font-semibold">top colleges in India</span>, it continues to lead in offering <span className="font-semibold">distance courses in Punjab</span> that are flexible, affordable, and globally recognized.
      </p>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        Students seeking <span className="italic">online courses near me</span> find that LPU Online’s curriculum and virtual infrastructure replicate the traditional classroom experience—enhanced with advanced e-learning tools. The platform offers programs ranging from <span className="font-semibold">online MBA from distance</span> to undergraduate and postgraduate degrees in commerce, computer science, arts, and management.
      </p>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        Among all <span className="font-semibold">MBA colleges in Punjab</span>, LPU Online remains a top choice due to its unique blend of academic expertise and practical exposure. The <span className="font-semibold">best courses in LPU</span> integrate case studies, projects, and industry-driven modules that develop analytical and managerial capabilities.
      </p>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        By pursuing <span className="font-semibold">online degrees in Jalandhar</span> through LPU Online, students gain access to international learning resources and expert mentorship. The institution’s focus on outcome-based learning ensures that every graduate is equipped for success in today’s competitive world.
      </p>
    </div>
  </div>
          
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
                <div id="campus-tour">
                 
                  
                 
                </div>
              <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">Campus Tour</h2>
      <p className="text-lg text-gray-600">
        Explore LPU Online’s World-Class Learning Environment
      </p>
    </div>
                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {[
                    { icon: FaCertificate, title: "UGC & NAAC Recognized", desc: "Globally recognized degrees" },
                    { icon: FaLaptop, title: "Advanced LMS Platform", desc: "Interactive learning system" },
                    { icon: FaIndustry, title: "Industry-Oriented", desc: "Career-focused curriculum" },
                    { icon: FaUser, title: "Expert Faculty", desc: "Experienced mentors" },
                    { icon: FaClipboardCheck, title: "AI Proctored Exams", desc: "Secure online assessments" },
                    { icon: FaBriefcase, title: "Placement Support", desc: "Career assistance" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base truncate">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recognitions */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-3 sm:p-4 md:p-6 border border-orange-100">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2">
                    <FaStar className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
                    Recognitions & Accreditations
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4">
                    {['UGC Approval by DEB', 'NAAC A++ Accreditation', 'WES Recognition (Canada & USA)'].map((recognition, index) => (
                      <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-sm">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-xs md:text-sm font-medium text-gray-700">{recognition}</span>
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
                className="space-y-3 sm:space-y-4 md:space-y-6 mt-4 sm:mt-0"
              >
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp" 
                    alt="LPU Online Campus"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                
                <div className="relative group">
                  <Image
    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327203/images_mwnhd8.jpg" 
    alt="LPU Online Students"
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
</div>

        <p className="mt-8 mb-[10px] text-lg sm:text-xl text-black-600 leading-relaxed"> </p>
           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
  While <span className="font-bold text-black mx-1">LPU Online</span> offers the convenience of digital learning, it is backed by the monumental infrastructure and legacy of its parent university. Imagine a <span className="font-bold text-black mx-1">campus tour</span> that showcases sprawling acres of academic blocks, state-of-the-art labs, modern libraries, and vibrant student life—this is the foundation upon which <span className="font-bold text-black mx-1">LPU Online</span> is built. Although you will be studying remotely, you gain access to a wealth of digital resources, including recorded lectures from esteemed faculty, virtual labs, and a comprehensive e-library. Prospective students can <span className="font-bold text-black mx-1">explore online courses</span> through virtual <span className="font-bold text-black mx-1">campus tour</span> videos and interactive sessions, giving them a feel of the LPU ecosystem from the comfort of their homes. This unique blend of a strong physical university and a dynamic <span className="font-bold text-black mx-1">online</span> learning environment sets <span className="font-bold text-black mx-1">LPU Online</span> apart from other <span className="font-bold text-black mx-1">distance learning universities India</span>.
</p>
         
                 
        
      </div>
    </section>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
         <section className="bg-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-6">
    {/* Section Header */}
         <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">LPU Online Benefits</h2>
      
    </div>

    {/* Section Content */}
    <div className="space-y-10 text-gray-700 leading-relaxed text-justify">
      <p>
        The <strong>LPU Online campus tour</strong> offers a glimpse into the
        remarkable world of Lovely Professional University Online, one of the
        top universities in India for higher education and distance learning.
        Through the virtual campus tour of LPU Online, students can explore the
        university’s modern infrastructure, interactive classrooms, digital
        libraries, and global learning spaces — all designed to replicate the
        immersive experience of studying on a physical campus.
      </p>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          1. The Digital Learning Environment
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
         At LPU Online, the campus extends beyond physical boundaries. The LPU Online virtual campus is equipped with smart classrooms, AI-driven learning tools, and interactive study platforms that foster engagement and collaboration. Through the LPU Online campus tour, learners witness how advanced digital systems ensure seamless communication between faculty and students, enabling the most efficient online learning in India. Every part of the LPU Online infrastructure — from its LMS (Learning Management System) to digital evaluation systems — reflects the university’s commitment to modern education and career-focused learning.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          2. Library and Learning Resources
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
          The LPU Online digital library is a hub of academic excellence, providing access to thousands of e-books, journals, and research databases. During the LPU Online campus tour, students can explore this vast collection that supports continuous learning and research in fields like management, computer science, and commerce. The LPU Online e-library is open 24/7, ensuring that every learner can study anytime, anywhere — a key advantage of choosing LPU Online for distance education.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          3. Student Support and Counseling
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
        The LPU Online campus tour also introduces learners to the student support system — a network of academic advisors, career counselors, and technical support staff who guide students throughout their journey. LPU Online is known for offering one of the most student-friendly ecosystems among the best online universities in India. Through the virtual tour, students can view how support is integrated into every stage of the learning process, from admission to graduation.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          4. Global Classrooms and Industry Integration
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
           The LPU Online campus tour highlights its global learning ecosystem, connecting students from across the world. The LPU Online virtual classrooms are interactive spaces where international exposure meets academic innovation. Learners gain insights from industry experts, live webinars, and career development workshops that bridge the gap between theory and practice. With this immersive experience, the LPU Online campus mirrors the diversity and inclusivity of an international university setting.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          5. Faculty and Mentorship
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
          As part of the LPU Online campus tour, prospective students can learn about the expert faculty members who drive academic excellence at the university. The LPU Online teaching staff includes Ph.D. holders, researchers, and industry professionals dedicated to mentoring students toward success. Every program, including LPU Online MBA, BCA, MCA, and B.Com online, is supported by personalized guidance, ensuring learners receive the same mentorship as on the physical campus.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          6. Innovation, Research, and Virtual Events
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
          The LPU Online campus tour showcases how innovation drives every aspect of learning. The university regularly organizes virtual conferences, hackathons, webinars, and research seminars, allowing online students to participate actively in intellectual discussions. LPU Online maintains an engaging environment that encourages students to innovate, collaborate, and grow beyond academic boundaries — a key reason why it ranks among the top universities for online education in India.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          7. Career Development and Placement
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
         A major highlight of the LPU Online virtual campus tour is its career advancement center, which prepares students for the professional world. The center provides resume-building workshops, mock interviews, and internship guidance. By integrating real-world exposure into the LPU Online education system, students are empowered to achieve global employability and success.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          8. Alumni Network and Student Community
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
          The LPU Online alumni network connects thousands of graduates working across top global companies. Through the LPU Online campus tour, visitors can experience the strength of this network and the vibrant student community that continues to expand worldwide. Being part of LPU Online means being part of a community that celebrates diversity, learning, and lifelong success.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black-600 mb-2">
          9. Why the Campus Tour Matters
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-600 leading-relaxed mb-4 sm:mb-6">
           For anyone exploring the best online university in India, the LPU Online campus tour is an essential step. It gives students firsthand experience of how LPU combines academic innovation, technology-driven education, and student-centered learning into one dynamic platform. The LPU Online campus isn’t just about virtual classrooms — it’s about connecting, collaborating, and creating opportunities for every learner to succeed.
        </p>
      </div>
    </div>
  </div>
</section>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

        {/* Enhanced Statistics Section */}
        <section id="" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose <span className="text-orange-500">LPU Online?</span> 
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
           <p className="mt-8 mb-[10px] text-lg sm:text-xl text-black-600 leading-relaxed">
            When it comes to online education, the choice of university defines your future. Here’s why students and professionals across India choose LPU Online over other MBA colleges in Punjab and top colleges in India:
             </p>
            <h3 className=" mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
                1. Globally Recognized Degrees
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                All programs offered by LPU Online are UGC-entitled and recognized worldwide. Whether you are pursuing online degrees in Jalandhar or enrolling from another city, your credentials from the best university for online degree in Jalandhar hold immense value. Graduates from LPU Online have successfully built careers in national and international companies, making it one of the most credible MBA colleges in Punjab.     </p>
                <h3 className=" mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
               2. Flexible and Accessible Learning
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
               The flexible study options at LPU Online are ideal for students and working professionals seeking online courses near me or top online courses near me. Learners can attend live classes, watch recorded lectures, and submit assignments digitally. This flexibility allows individuals to manage their education and career simultaneously while benefiting from one of the best distance courses in Punjab.     </p>
                <h3 className="mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
                3. Industry-Oriented Curriculum
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Among the best courses in LPU, the online MBA from distance is particularly popular for its relevance to modern business challenges. The curriculum is designed with insights from industry experts, ensuring that every subject contributes to employability. This practical approach makes LPU Online a standout among MBA colleges in Punjab and a trusted institution for career-focused online degrees in Jalandhar.     </p>
                <h3 className="mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
              4. Experienced Faculty and Mentorship
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
               As part of one of the top colleges in India, LPU Online provides access to a diverse and highly qualified faculty. Students enrolled in distance courses in Punjab or pursuing online degrees in Jalandhar receive academic mentorship and professional guidance. This personalized learning environment ensures that students feel supported and motivated throughout their programs.     </p>
             
              <h3 className="mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
              5. Cutting-Edge Digital Learning Platform
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              The virtual campus of LPU Online offers advanced features such as AI-based tracking, discussion forums, and digital resource libraries. For students searching for online courses near me or top online courses near me, the university provides a highly interactive experience. This technological infrastructure reinforces LPU Online’s reputation as the best university for online degree in Jalandhar.      </p>
               <h3 className="mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
               6. Affordable Education and Scholarships
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
               Among the top colleges in India, LPU Online is known for its affordability and transparency. The distance courses in Punjab offered here come with flexible payment options, financial assistance, and scholarships, making it easier for learners from diverse backgrounds to pursue their academic goals. Whether it’s an online MBA from distance or a technical degree, affordability meets excellence at LPU Online.    </p>
               <h3 className=" mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
             7. Career Support and Global Exposure
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
               LPU Online offers dedicated career services, placement drives, and professional networking opportunities. The best courses in LPU are not just academically strong but also career-oriented, ensuring that graduates are job-ready. As one of the most progressive MBA colleges in Punjab, LPU Online connects students to industry leaders and international recruiters, making education a stepping-stone to success.      </p>
               <h3 className="mt-8 mb-[10px] text-3xl font-bold text-center mb-10">
             Empowering Learners Across India
            </h3>
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Every year, thousands of students searching for online courses near me, top online courses near me, or distance courses in Punjab choose LPU Online for its quality, accessibility, and innovation. Recognized among the top colleges in India, LPU Online continues to empower learners with a future-ready education model. From online MBA from distance programs to technical and creative degrees, LPU Online has something for every learner.    </p>
               
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Whether you are based in Punjab, Delhi, Mumbai, or any other part of India, LPU Online ensures that higher education is within reach. With strong student support and global credibility, it has earned the reputation of being the best university for online degree in Jalandhar. Students pursuing online degrees in Jalandhar enjoy personalized mentorship, continuous assessments, and an advanced digital learning experience that fosters confidence and growth.    </p>
            
             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
               The university’s consistent recognition among the top colleges in India reflects its commitment to academic integrity, inclusivity, and excellence. Learners enrolled in the best courses in LPU not only gain a degree but also the skills and perspective needed to succeed in a fast-changing world. For anyone exploring online MBA from distance or distance courses in Punjab, LPU Online remains the most trusted choice.
             </p>

              <h3 className="mt-8 mb-[10px] text-3xl font-bold text-center mb-10"> Conclusion</h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">In today’s competitive landscape, LPU Online represents a perfect balance between innovation, flexibility, and quality. As one of the top colleges in India, it provides access to globally recognized online degrees in Jalandhar and the most in-demand distance courses in Punjab. Students aiming to pursue an online MBA from distance, or those exploring the best courses in LPU, find the platform ideal for both academic and career growth.
                    From its position among the MBA colleges in Punjab to its recognition as the best university for online degree in Jalandhar, LPU Online continues to redefine the future of education. Whether you’re searching for online courses near me or top online courses near me, LPU Online offers a path that combines excellence, flexibility, and success.
                   Join LPU Online today — a leader among the top colleges in India, empowering learners with online degrees in Jalandhar, distance courses in Punjab, and globally valued credentials that shape the leaders of tomorrow.
              </p>
          </div>
        </section>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

        {/* Professional Rankings & Accreditation Section */}
        <section id="accreditations" className="py-16 bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Rankings & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized by leading accreditation bodies and ranked among India's top universities
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp', title: 'NAAC A++ Accreditation University' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp', title: 'UGC Entitled Online Degrees' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp', title: "Amongst India's top 50 Universities" },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Norms Compliant' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp', title: 'Globally Recognized Online Degrees' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp', title: 'Member of ACU' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp', title: 'AIU Recognized' },
                { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp', title: 'QS Ranking' },
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

        {/* Why Choose Lovely Professional University */}
        <section className="relative py-20 bg-[#0B0B10] text-white overflow-hidden mt-10"> 
          {/* Subtle grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">
              {[
                {value:'30+', label:'Countries and 1000+ towns & cities- our students span the globe'},
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
             <div
      className="max-w-4xl mx-auto my-4 p-5 bg-orange-500 text-white rounded-lg shadow-lg"
      role="note"
      aria-label="Scholarship information"
    >
      <strong className="block mb-2 text-lg font-bold">
        Scholarship Information:
      </strong>

      <p className="text-base leading-relaxed font-medium">
        Scholarships are available according to each university's official
        guidelines. Eligibility and scholarship amounts vary by program.
        Please connect with our counsellors for accurate details and
        application assistance.
      </p>
    </div>
        {/* Enhanced Courses Section */}
        <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
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

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8 sm:space-y-12">
              {/* Enhanced Tab Buttons */}
              <div className="flex justify-center">
                <TabsList className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 sm:p-2 shadow-xl border border-gray-200">
                  {[
                    { value: 'all', label: 'All Programs' },
                    { value: 'ug', label: 'Undergraduate' },
                    { value: 'pg', label: 'Postgraduate' }
                  ].map((tab) => ( 
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                        activeTab === tab.value
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                      data-state-active="true"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Course Grid */}
              <TabsContent value={activeTab} className="outline-none">
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
              </TabsContent>
            </Tabs>
            
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed space-y-4  py-6 px-6 md:px-20">
  <span className="font-bold text-black mx-1">LPU Online</span> boasts a diverse and industry-relevant portfolio designed for 
  <span className="font-bold text-black mx-1">freshers</span> and 
  <span className="font-bold text-black mx-1">working professionals</span> alike. When you decide to 
  <span className="font-bold text-black mx-1">explore online courses</span> at LPU, you open doors to a future-proof career. Here are some of the flagship programs you can pursue:
</p>

<ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
  <li>
    <span className="font-bold text-black mx-1">Online MBA in India:</span> This is one of the most sought-after 
    <span className="font-bold text-black mx-1">online MBA programs India</span> has to offer. It is an ideal 
    <span className="font-bold text-black mx-1">online MBA for working professionals</span> seeking to advance their careers without putting them on hold. Specializations in Marketing, Finance, HR, and IT make it a versatile choice. Many students search for an 
    <span className="font-bold text-black mx-1">online MBA without entrance exam</span>, and LPU's streamlined 
    <span className="font-bold text-black mx-1">admission process</span> is designed to be accessible.
  </li>

  <li>
    <span className="font-bold text-black mx-1">Online Data Science Course India:</span> For those looking to dive into the world of big data and AI, this 
    <span className="font-bold text-black mx-1">online data science course</span> provides cutting-edge curriculum and hands-on projects, making it a top choice for an 
    <span className="font-bold text-black mx-1">ai and ml certification India</span>.
  </li>

  <li>
    <span className="font-bold text-black mx-1">Digital Marketing Certification Online:</span> This program equips you with the skills needed in the digital age. It's a comprehensive 
    <span className="font-bold text-black mx-1">digital marketing certification online</span> that covers everything from SEO to social media marketing.
  </li>

  <li>
    <span className="font-bold text-black mx-1">Certificate in Web Development:</span> A perfect 
    <span className="font-bold text-black mx-1">certificate in web development</span> for 
    <span className="font-bold text-black mx-1">freshers</span> looking to build a career in tech or 
    <span className="font-bold text-black mx-1">working professionals</span> aiming to upskill.
  </li>

  <li>
    <span className="font-bold text-black mx-1">Executive MBA Online India:</span> Tailored for seasoned professionals, this 
    <span className="font-bold text-black mx-1">executive MBA online India</span> focuses on strategic leadership and advanced management concepts.
  </li>
</ul>

<p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-6">
  These programs are structured to be 
  <span className="font-bold text-black mx-1">affordable</span> and are recognized among the 
  <span className="font-bold text-black mx-1">best online universities in India</span>.
</p>

  
          </div>
        </section>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
        {/*key highlight*/}
       <section className="bg-gradient-to-b from-white to-blue-50 py-6 px-6 md:px-20">
  <div className="max-w-7xl mx-auto text-center">
    {/* Header */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
        🎓  Key Highlights of LPU
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
      The LPU Online Campus Tour showcases the perfect blend of innovation,
      technology, and global education that defines Lovely Professional
      University Online. This virtual experience lets learners explore
      world-class academic excellence — reimagined for the digital era.
    </p>

    {/* Highlights Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {/* 1. Smart Learning Infrastructure */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-black-500 mb-2">
          Smart Learning Infrastructure
        </h3>
        <p className="text-gray-700">
          The LPU Online Campus is powered by AI-driven tools, interactive
          classrooms, and a robust LMS. Students engage in real time through
          video lectures, digital whiteboards, and discussion forums.
        </p>
      </div>

      {/* 2. Digital Library Access */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-black-500 mb-2">
          Digital Library Access
        </h3>
        <p className="text-gray-700">
          Students can explore a vast digital library featuring thousands of
          e-books, journals, and research papers — supporting 24/7 continuous
          learning and academic growth.
        </p>
      </div>

      {/* 3. Expert Faculty & Mentorship */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-black-500 mb-2">
          Expert Faculty & Mentorship
        </h3>
        <p className="text-gray-700">
          Learn from globally recognized professors and industry leaders who
          combine academic excellence with practical experience to guide your
          professional journey.
        </p>
      </div>

      {/* 4. Career Development Hub */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-black-500 mb-2">
          Career Development Hub
        </h3>
        <p className="text-gray-700">
          The virtual campus includes specialized career services for
          placements, internships, and professional training, ensuring career
          readiness and success.
        </p>
      </div>

      {/* 5. Global Learning Ecosystem */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-black-500 mb-2">
          Global Learning Ecosystem
        </h3>
        <p className="text-gray-700">
          LPU Online connects learners across the globe, promoting cultural
          diversity and international collaboration in a truly global learning
          environment.
        </p>
      </div>
    </div>
  </div>
</section>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>


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

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

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
                <FaUser className="text-green-500 text-4xl mb-6" />
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
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
        {/* Admission Procedure Section */}
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
        {/* This section seems to be a duplicate of the one above, I'll remove it to avoid redundancy */}
                  {/* ===================== LPU Admission & Exam Section ===================== */}
<section id="admission-dates" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
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
    <article id="admission-process-details" className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl mb-10 shadow-md">
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
    <article id="fees" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-10 shadow-md">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">LPU Fee Structure</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Registration Fee:</strong> ₹500 (for LPU Online admission).</li>
        <li><strong>LPUNEST Application Fee:</strong> Separate charge for soft or printed kit versions.</li>
        <li><strong>Program Fees:</strong> Varies by degree and semester — available on the official LPU site.</li>
        <li><strong>Examination Fees:</strong> May be included in semester fees depending on the program.</li>
      </ul>
    </article>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

    {/* ===== About LPU Online ===== */}
    <article id="sessions" className="bg-gray-50 border-l-4 border-gray-500 p-4 sm:p-6 rounded-xl mb-6 sm:mb-10 shadow-md">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">About LPU Online Programs</h3>
      <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
        <li><strong>UGC Approved:</strong> All programs are UGC-entitled and recognized nationwide.</li>
        <li><strong>Flexible Learning:</strong> Study at your own pace with recorded lectures and e-books.</li>
        <li><strong>Batch Schedule:</strong> New sessions typically start in <strong>January</strong> and <strong>July</strong> each year.</li>
        <li><strong>Academic Support:</strong> Access to online faculty support, e-content, and discussion forums.</li>
      </ul>
    </article>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
  </div>
</section> 

        {/* Certificate Section */}
        <section className="bg-[#002d5f] text-white py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-12">
            <div className="w-full md:w-1/2">
              <Image width={600} height={400} src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu-certificate_lyegrn.webp" alt="Certificate" className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">Recognized Online Degree from Lovely Professional University </h2>
              <p className="mb-4 sm:mb-8 text-base sm:text-lg md:text-xl">
                Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
              </p>
              <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base md:text-lg">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  UGC & AICTE Recognized Degrees
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Daily Live & Recorded Classes
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Global Collaborations with Industry Partners
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  100% Placement & Internship Support
                </li>
              </ul>
            </div>
          </div>
        </section>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
        <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
  {/* Placement Record Section */}
  <div className="bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-md p-8 sm:p-12 mb-16 text-center">
    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
      Placement <span className="text-[#f45100]">Record</span>
    </h3>
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
      The <span className="font-semibold text-black">placement record</span> of
      <span className="font-semibold text-black"> LPU Online</span> is a testament to the quality of its education and
      the employability of its graduates. Students from programs like the
      <span className="font-semibold text-black"> online MBA in India</span> and
      <span className="font-semibold text-black"> online data science course India</span> have been successfully placed in roles
      such as <span className="font-semibold text-black">Business Analyst</span>,
      <span className="font-semibold text-black"> Digital Marketing Manager</span>,
      <span className="font-semibold text-black"> Data Scientist</span>, and
      <span className="font-semibold text-black"> Project Manager</span>, with competitive compensation packages.
    </p>
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
      The university's dedicated placement cell provides
      <span className="font-semibold text-black"> career counseling sessions online</span> and professional training to
      prepare students for interviews, contributing to a strong
      <span className="font-semibold text-black"> placement record</span>.
    </p>
  </div>

  {/* Student Reviews & FAQ Section */}
  <div className="bg-gradient-to-b from-white to-orange-50 rounded-2xl shadow-md p-8 sm:p-12 text-center">
    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
      Student <span className="text-[#f45100]">Reviews</span> & FAQ
    </h3>
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
      Before enrolling, checking
      <span className="font-semibold text-black"> LPU Online Courses</span> reviews is a wise step. Generally,
      <span className="font-semibold text-black"> student reviews</span> highlight the flexible learning schedule, high-quality
      study materials, and the real-world value of the degree in the job market.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
      <button  onClick={() => setOpenModal({ type: 'enquire' })} className="bg-[#f45100] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition duration-300 cursor-pointer">
        Read Student Reviews
      </button>
      <button  onClick={() => setOpenModal({ type: 'enquire' })} className="border border-[#f45100] text-[#f45100] font-semibold py-3 px-8 rounded-full hover:bg-[#f45100] hover:text-white transition duration-300 cursor-pointer">
        View FAQs
      </button>
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>

        {/* Professional FAQ Section */}
        <section id="" className="py-20 bg-white "> 
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-center">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  onClick={() => setOpenModal({ type: 'apply' })}
                  >
                  Apply Now
                
                 </Button>
                 </div>
        </section>
          
        {/* Professional Hiring Partners Section */} 
        <section id="placement-partners" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 ">
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
              {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png", "/images/apple.jpg","https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp"].map((src, i) => (
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
            <div id="conclusion" className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Them?</h3>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Start your journey with LPU Online and unlock endless career opportunities
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-orange-600 font-semibold px-12 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg cursor-pointer"
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
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu2_o13j1s.png"
              universityName="Lovely Professional University Online"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
          )}
        </section>
        <section className="max-w-5xl mx-auto px-4 py-12 text-center bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-sm mt-12">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
    Your <span className="text-[#f45100]">Future with LPU Online</span>
  </h2>

  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
    In conclusion, <span className="font-semibold text-black">LPU Online</span> presents a formidable opportunity for anyone
    seeking to enhance their qualifications through a flexible and reputable platform. Whether your goal is to pursue an
    <span className="font-semibold text-black"> online MBA in India</span>, gain a
    <span className="font-semibold text-black"> digital marketing certification online</span>, or earn an
    <span className="font-semibold text-black"> AI and ML certification India</span>,
    <span className="font-semibold text-black"> LPU Online</span> provides the tools and recognition you need to succeed.
  </p>

  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
    Its <span className="font-semibold text-black">affordable fee structure</span>, straightforward
    <span className="font-semibold text-black"> admission process</span>, and strong
    <span className="font-semibold text-black"> placement record</span> make it a top contender among the
    <span className="font-semibold text-black"> best online universities in India</span>.
  </p>

  <div className="mt-10">
    <a
      href="#courses"
      className="inline-block bg-[#f45100] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
    >
      Explore Courses
    </a>
  </div>
</section>

        {/* Premium Footer */}
        <footer id="footer" className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-300 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 relative overflow-hidden "> 
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
                      <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/LPU-Online-Logo_blodcq.svg" alt="LPU" className="h-8 sm:h-10 w-auto" />
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
                      <FaPhone className="text-orange-400 text-sm sm:text-base rotate-90" />
                  </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-700">
                      <FaWhatsapp className="text-green-400 text-sm sm:text-base" />
                  </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-700">
                      <FaUser className="text-blue-400 text-sm sm:text-base" />
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
                      <a onClick = {() => setOpenModal({ type: 'apply',})} className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group-hover:translate-x-2 cursor-pointer">
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
                    { name: 'FAQs', href: '#Faq', icon: FaUser }
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
                  <FaPhone className="text-orange-500 rotate-90" />
                  Get Started
                </h4> 
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <FaPhone className="text-white text-sm sm:text-base rotate-90" />
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm text-gray-400">Call Us</p>
                        <p className="text-white font-bold text-base sm:text-lg">+917042646766</p>
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
                      onClick={() => setOpenModal({ type: 'enquire' })}
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
          </main>
      </div>
    </div>
  );
};

export default LpuOnline;