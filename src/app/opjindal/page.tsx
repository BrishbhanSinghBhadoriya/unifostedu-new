'use client';
import React, { useState, useEffect, FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageContent from '@/components/PageContent/PageContent';
import { IconType } from 'react-icons';
import {
  FaBookOpen,
  FaUserTie,
  FaPhone,
  FaRobot,
  FaUserGraduate,
  FaLaptop,
  FaRupeeSign,
  FaBriefcase,
  FaClock,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaGlobe,
  FaBook,
  FaUniversity,
  FaHandsHelping,
  
  FaClipboardCheck,
  FaBars,
  FaTimes,
} from "react-icons/fa6";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import EnquireCard from '@/components/EnquireCard';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { Button } from '@/components/ui/button';

interface SectionItem {
  id: string;
  label: string;
}

interface Course {
  course: string;
  duration: string;
  eligibility: string;
  fees: string;
  specialization: string;
  image: string;
  alt: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

type ModalState = {
  type: 'apply' | 'enquiry';
  program?: string;
} | null;

const sectionItem: SectionItem[] = [
  { id: "Home", label: "Introduction" },
  { id: "campus-tour", label: "Campus Tour (Images & Videos)" },
  { id: "opju-online-courses", label: "Explore Online Courses" },
  { id: "key-highlights", label: "Key Highlights" },
  { id: "admission-dates", label: "Admission Dates for UG & PG Programs" },
  { id: "fees-structure", label: "Fees Structure" },
  { id: "Admission", label: "Admission Process" },
  { id: "sessions-details", label: "Details of Upcoming & Ongoing Sessions" },
  { id: "placement-partners", label: "Placement Partners" },
  { id: "placement-record", label: "Placement Record" },
  { id: "student-reviews", label: "Student Reviews" },
  { id: "faq", label: "FAQs" },
  { id: "opju-reviews", label: "OP Jindal University Online Reviews" },
];

const ugCourses: Course[] = [
  {
    course: "BBA (4 Specialization)",
    duration: "3 Years",
    eligibility: "10+2 Pass, Applicants less than 50% marks in 10+2 will be required to appear for the Jindal Scholastic Aptitude Test (JSAT)",
    fees: "₹2,00,000 /-",
    specialization: "Finance, Marketing, Human Resources, Operation Management Supply Chain",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
    alt: "BBA in OP Jindal University",
  },
  {
    course: "B.Sc in Psycology(Blended)",
    duration: "3 Years",
    eligibility: "10+2 Pass, If less than 50%: Must clear JSAT (min 50%) or submit, SAT/ACT/LNAT-UK score or complete a JGU MOOC",
    specialization: "Psychology",
    fees: "₹3,00,000 /-",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327851/op-psycology_ae5kax.png",
    alt: "B.Sc in Psycology(Blended) in OP Jindal University",
  },
  {
    course: "B.Sc in Risk Management",
    duration: "3 Years",
    eligibility: "Minimum 50% in Class 12, with either Maths, Physics, Business Maths, Statistics, or IT / MIS as one of the subjects.Exemptions from JSAT for students scoring: SAT (≥1100) ACT (≥27) UGAT/CUET (≥60 percentile)",
    specialization: "Risk Management",
    fees: "₹3,00,000 /-",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327851/op-psycology_ae5kax.png",
    alt: "B.Sc in Psycology in OP Jindal University",
  },
  {
    course: "B.Com in International Accounting & Finance",
    duration: "3 Years",
    eligibility: "Eligibility: Minimum 50% in Class 12, with either of Maths, Physics, Business Maths, Statistics, or IT / MIS as one of the subjects",
    specialization: "International Accounting & Finance",
    fees: "₹3,00,000 /-",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327851/op-psycology_ae5kax.png",
    alt: "B.Sc in Psycology in OP Jindal University",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Are OP Jindal University Online degrees recognized?",
    answer:
      "Yes, OP Jindal University Online offers UGC-entitled degrees that hold the same value as regular on-campus programs.",
  },
  {
    question: "Can working professionals apply for online programs?",
    answer:
      "Absolutely. The online format of Jindal Online University is designed for working professionals seeking flexibility and career advancement.",
  },
  {
    question: "What learning resources are provided?",
    answer:
      "Students receive access to e-books, recorded lectures, digital libraries, discussion forums, and continuous faculty support throughout their learning journey.",
  },
  {
    question: "Does OPJU Online offer placement support?",
    answer:
      "Yes, OP Jindal University Online provides dedicated career counseling, resume assistance, and placement guidance to help students achieve professional success.",
  },
  {
    question: "Is the fee affordable?",
    answer:
      "Yes, the fee structure is transparent, affordable, and designed to make quality education accessible to all learners.",
  },
];


const OPJindal: FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(sectionItem[0]?.id ?? null);

                      
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [openModal, setOpenModal] = useState<ModalState>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  

  const toggleFAQ = (index: number) => {
   setOpenIndex(openIndex === index ? null : index);
};
 useEffect(() => {
     const timer = setTimeout(() => {
       setOpenModal({ type: 'apply' });
     }, 3000);
     return () => clearTimeout(timer);
   }, []);

   const sliderImages = [
      
      'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327836/opjindal-banner2_wpbugp.webp',
      'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327837/opjindal-banner3_gtwjsl.webp',
      'https://res.cloudinary.com/didkrwhbu/image/upload/v1763543204/opjindal_banner41_oppjgn.jpg',
      

    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
      }, 3000); 
  
      return () => {
        clearInterval(timer);
      };
    }, [sliderImages.length]);
    const handleOnclickEnquiry = () => {

      setOpenModal({ type: 'enquiry' });
    };

  const pgCourses: Course[] = [
    
    {
      course: "MA in Teaching English to Speakers of Other languages (TESOL)",
      duration: "12 Months(3 Trimester)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      specialization: "Teaching English to Speakers of Other languages (TESOL)",
      fees: "₹2,50,000/- ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327837/op-masters2_yj8q41.webp",
      alt: "MA i Teaching English to Speakers of Other languages (TESOL) in OP Jindal University",
    },
     {
      course: "M.A. in Museology & Cultural Heritage",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      specialization: "Museology & Cultural Heritage",
      fees: "₹2,50,000/- ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327837/op-masters2_yj8q41.webp",
      alt: "MA Museology & Cultural Heritage in OP Jindal University",
    },
      {
      course: "M.A. in International Relations, Security and Strategy",
      duration: "12-24 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      specialization: "International Relations, Security and Strategy",
      fees: "₹3,00,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327840/op-masters4_kgkbhl.webp",
      alt: "M.A.  International Relations, Security and Strategy in OP Jindal University",
    },
    {
      course: "M.A. in Educational Leadership & Governance",
      duration: "12 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      specialization: "Educational Leadership & Governance",
      fees: "₹3,00,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327840/op-masters4_kgkbhl.webp",
      alt: "M.A.  Educational Leadership & Governance in OP Jindal University",
    },
    {
      course: "M.Sc in Environmental chnage and Sustainability",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      specialization: "Environmental chnage and Sustainability",
      fees: "₹2,50,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc in Environmental chnage and Sustainability in OP Jindal University",
    },
    {
      course: "M.Sc. in Design Thinking & Innovation & Strategy",
      duration: "12 Months",
      eligibility: "Minimum 60% marks in both Class 10 and Class 12.Minimum 50% marks in a bachelor's degree ",
      specialization: "Design Thinking & Innovation & Strategy",
      fees: "₹2,50,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc Design Thinking & Innovation & Strategy in OP Jindal University",
    },
     {
      course: "M.Sc. in  Artificial Intelligence & Finance",
      duration: "12 Months",
      eligibility: "Minimum 60% marks in both Class 10 and Class 12.Minimum 50% marks in a bachelor's degree ",
      specialization: "Artificial Intelligence & Financ",
      fees: "₹2,75,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc Artificial Intelligence & Finance in OP Jindal University",
    },
     {
      course: "M.Sc. In Global Health and Development.",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university. Govt. Issued ID Proof (Passport for International Applicants)",
      specialization: "Global Health and Development",
      fees: "₹2,50,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc  Global Health and Development in OP Jindal University",
    },
      {
      course: "M.Sc. in Global Risk Management",
      duration: "12 Months",
      eligibility: "Undergraduate degree with at least 50% marks Candidates with less than 50% marks must: Appear for the JSAT examination, andAttend a mandatory interview",
      specialization: "Global Risk Management",
      fees: "₹2,75,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc  Global Risk Management in OP Jindal University",
    },
      
      {
      course: "M.Sc. in Development Studies",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university. Govt. Issued ID Proof (Passport for International Applicants)",
      specialization: "Development Studies",
      fees: "₹2,50,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc  Development Studies in OP Jindal University",
    },
       {
      course: "M.Sc. in Strategic Communication.",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university. Govt. Issued ID Proof (Passport for International Applicants)",
      specialization: "in Strategic Communication",
      fees: "₹2,50,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc in in Strategic Communication in OP Jindal University",
    },

     {
      course: "M.Sc in International Accounting & Finance from JGU (Accredited by ACCA, UK.)",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university. Govt. Issued ID Proof (Passport for International Applicants)",
      specialization: "International Accounting & Finance",
      fees: "₹2,75,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc International Accounting & Finance from JGU (Accredited by ACCA, UK.)in OP Jindal University",
    },

     {
      course: "M.Sc. in Artificial Intelligence and Data Science",
      duration: "12 Months",
      eligibility: "Bachelor’s degree from any recognized university. Govt. Issued ID Proof (Passport for International Applicants)",
      specialization: "Artificial Intelligence and Data Science",
      fees: "₹2,75,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327838/op-masters3_amikm8.webp",
      alt: "M.Sc  in Artificial Intelligence and Data Sciencein OP Jindal University",
    },
    {
      course: "M.A. in India Studies",
      duration: "12 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      specialization: "India Studies",
      fees: "₹2,50,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327840/op-masters4_kgkbhl.webp",
      alt: "MA India Studies in OP Jindal University",
    },
     {
      course: "MA in Public Policy",
      duration: "12 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      specialization: "Public Policy",
      fees: "₹3,00,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327840/op-masters4_kgkbhl.webp",
      alt: "MA Public Policy in OP Jindal University",
    },
     {
      course: "Master of Design in User Experience",
      duration: "12 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      specialization: "Design in User Experience",
      fees: "₹5,00,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327840/op-masters4_kgkbhl.webp",
      alt: "Master of Design in User Experience",
    },
    {
      course: "Master in Enterpreneurship and Family Business",
      duration: "1 Years(4 terms)",
      eligibility: "A Bachelor’s degree, Active involvement as an entrepreneurial family member ",
      specialization: "Enterpreneurship and Family Business",
      fees: "₹2,75,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327837/op-masters1_g752dn.webp",
      alt: "Master in Enterpreneurship and Family Business in OP Jindal University",

    },
    {
      course: "MBA in Business Analytics",
      duration: "12 Months",
      eligibility: "The eligibility criteria for the online MBA in Business Analytics programme require a bachelor’s degree from a recognised university in India. A minimum of 50% marks in any discipline is required for graduation.",
      specialization: "Business Analytics",
      fees: "₹2,00,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327851/op-masters5_zkvcwa.webp",
      alt: "MBA in Business Analytics in OP Jindal University",
    },
    {
      course: "MBA in Business & Law",
      duration: "12 Months",
      eligibility: "Bachelor's degree in any discipline with a minimum 50% aggregate score from a recognized university.  ",
      specialization: "Business & Law",
      fees: "₹3,00,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "MBA in Business & Law in OP Jindal University",
    },
    
    {
      course: "MBA ",
      duration: "12 Months",
      eligibility: "Bachelor's degree in any discipline with a minimum 50% aggregate score from a recognized university.  ",
      specialization: "Finance, Human Resource Management, Marketing, Strategy & Leadership, Supply Chain & Operations, AI for Business, Digital Finance",
      fees: "₹1,80,000/-",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "MBA  in OP Jindal University",
    },
  ];


  return (
    <>
       <Head>
        <title>OP Jindal University | Online & On-Campus Programs</title>
        <meta
          name="description"
          content="OP Jindal University offers globally recognized UG & PG programs in Law, Business, Psychology, Public Policy, and more. Apply for online and on-campus programs."
        />
        <meta
          name="keywords"
          content="OP Jindal University, JGU Online, Jindal Global University, BBA, MBA, MA, MSc, Law Programs, Business Analytics, Public Policy, Distance Learning India"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="OP Jindal University | Online & On-Campus Programs" />
        <meta
          property="og:description"
          content="Explore undergraduate and postgraduate programs from OP Jindal University. Globally recognized, NAAC accredited, and industry-ready education."
        />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.opjindal.edu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OP Jindal University | Online & On-Campus Programs" />
        <meta
          name="twitter:description"
          content="Globally ranked OP Jindal University offers UG & PG courses in Business, Law, Psychology, and more. Apply now."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
           <style jsx>{`
    .roboto { 
      font-family: 'Roboto', sans-serif; 
    }
    * { 
      box-sizing: border-box; 
    }
    body { 
      overflow-x: hidden; 
    }
  `}</style>
         <div className="roboto overflow-x-hidden">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <header className="w-full bg-[#06336d] backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Left Logo */}
                    <div className="flex items-center gap-2 lg:gap-4">
                      <img 
                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_banner_qhx3sb.png" 
                        alt="Logo_OP Jindal" 
                        className="h-12 w-50 sm:h-10 lg:h-12" 
                      />
                     
                    </div>
      
                    {/* Right Side - Responsive */}
                    <div className="flex items-center gap-2 sm:gap-4">
                      {/* Phone - Hidden on small screens */}
                      {/* Mobile Menu Button */}
                      <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                        className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <FaBars className="w-5 h-5 text-white" />
                      </button>
                      <a
                        href="tel:+917042646766"
                        className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-orange-600 transition-colors"
                      > 
                        <FaPhone className="text-blue-500 rotate-90" />
                        <span className="text-white lg:inline">+91 7042646766</span>
                        <span className="lg:hidden">Call Now</span>
                      </a>
                      
                      {/* Mobile Phone Icon */}
                      <a
                        href="tel:+917042646766"
                        className="sm:hidden flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                      >
                        <FaPhone className="text-blue-500 rotate-90" />
                      </a>
                      
                      {/* Apply Button */}
                      <button 
                        onClick={() => setOpenModal({ type: 'apply' })}
                        className="bg-white hover:bg-white text-blue font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-500/25 text-sm sm:text-base cursor-pointer"
                      >
                        <span className="hidden sm:inline ">Apply Now</span>
                        <span className="sm:hidden">Apply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              
      <div className="max-w-screen-2xl mx-auto flex w-full">
        {/* Desktop Sidebar */}
       <PageContent sectionItems={sectionItem} activeSection={activeSection} ismobilemenuopen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} /> 

        {/* Main Content Wrapper */}
        <main className="flex-1 min-w-0 lg:pl-64">
          <div className="overflow-x-hidden pt-16 lg:pt-20">
           
            
            {/* Image Slider Section */}
 <section 
  id="Home" 
  className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden"
>
  <AnimatePresence initial={false}>
    <motion.div
      key={currentSlide}
      className="absolute inset-1"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Image
        src={sliderImages[currentSlide]}
        alt="Slider Image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
  </AnimatePresence>
</section>


 
<section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
          OP Jindal University Online
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg leading-relaxed text-center text-gray-700 mb-12">
          OP Jindal University Online is one of India’s leading digital
          universities, setting benchmarks in high-quality, flexible, and
          globally recognized online education. Built on innovation and
          technology, it empowers students to pursue world-class learning
          anytime, anywhere.
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaUniversity className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Academic Excellence</h3>
            <p className="text-gray-600 text-sm">
              Courses designed to meet global standards and evolving industry needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaLaptopCode className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Digital Learning</h3>
            <p className="text-gray-600 text-sm">
              Advanced LMS, live sessions, and virtual classrooms ensure engaging learning.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaGlobe className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Global Recognition</h3>
            <p className="text-gray-600 text-sm">
              Internationally relevant programs that prepare learners for global careers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaUsers className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">
              Industry-experienced mentors bridge theory with real-world practice.
            </p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="space-y-6 text-gray-700 text-justify">
          <p>
            The mission of OP Jindal University Online is to bridge the gap between traditional education and modern digital learning. Students from all backgrounds gain access to flexible programs that meet international standards while maintaining academic integrity, innovation, and inclusivity.
          </p>
          <p>
            Every program emphasizes experiential learning, digital engagement, and academic depth. Through virtual classrooms and interactive tools, students receive the same credibility as on-campus education — making every course a step toward professional success.
          </p>
          <p>
            With a user-friendly learning management system, live lectures, discussion boards, and real-time assessments, Jindal Online offers a dynamic and supportive digital ecosystem for learners across the globe.
          </p>
          <p>
            The university’s commitment to innovation ensures that every degree remains relevant in the fast-changing global landscape. Students graduate with the skills, confidence, and knowledge needed to thrive in their professional journeys.
          </p>
        </div>

        {/* Closing Line */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800">
            A Legacy of Digital Excellence
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl mx-auto">
            OP Jindal University Online isn’t just an institution—it’s a movement toward
            lifelong learning and global empowerment. Where technology meets tradition,
            leaders of the future are born.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white" id="campus-tour">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
      Campus Tour <span className="text-[#ffc107]"></span>
    </h2>

    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
      Experience the modern infrastructure and world-class facilities of{" "}
      <span className="font-semibold text-black">OP Jindal University</span> from the comfort of
      your home. The <span className="text-[#ffc107] font-semibold">Online Campus Tour</span> offers
      an immersive glimpse into the institution’s academic environment.
    </p>

    {/* Grid for Images or Video Thumbnails */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
      {[
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/op-jgu-campus1_ugjwyz.webp",
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327834/op-jgu-campus2_mccwd9.webp",
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327834/op-jgu-campus3_mth0wz.webp",
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/op-jgu-campus4_bcskow.webp",
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/op-jgu-campus5_vectrg.webp",
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/op-jgu-campus6_jvx7n4.webp",
      ].map((src, i) => (
        <div
          key={i}
          className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img
            src={src}
            alt={`Campus tour ${i + 1}`}
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

    <div className="text-center">
      <p className="text-gray-700 mb-6 leading-relaxed">
        From advanced digital classrooms to virtual libraries, innovation labs, and
        state-of-the-art learning systems, OP Jindal University Online ensures students stay
        connected to the spirit of campus life.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Every virtual tour showcases <span className="text-[#ffc107] font-semibold">interactive platforms</span>,{" "}
        <span className="text-[#ffc107] font-semibold">student engagement activities</span>, and{" "}
        <span className="text-[#ffc107] font-semibold">academic tools</span> that make OP Jindal
        University Online a truly global digital learning experience.
      </p>
    </div>
  </div>
</section>

      {/* Hero Section */}
   <HeroSection
  universityName="About OP Jindal University"
  universityNameClass= "text-[#003b59]"
  location="Sonipat, Haryana, India"
  type="Private University"
  nirfRank="100+" 
  rating="4.4" 
  description="OP Jindal University Leading private university known for excellence in Law, Business, Engineering, and Public Policy"
  description2={`
    OP Jindal University offers globally recognized online degrees, enabling students to learn at their doorstep without any problems. 
    The university provides programs in diverse fields including Law, Business, Liberal Arts, Psychology, Economics, Media, Journalism, Architecture, Design, Banking, Finance, Environment, Public Policy, Public Health, Languages, and International Relations. 
    Courses are designed to meet students' academic and professional needs through interdisciplinary learning and practical application, preparing them for the global workforce.
  `}
  badgeText="Globally Recognized | Interdisciplinary Learning | Practical Applications"
  imgSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327836/opjindal_banner1_fmf7ba.webp"
  imgAlt="OP Jindal University Campus"
  students="25K+" 
  partners="100+" 
  campus="Sonipat Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Interdisciplinary Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career-Oriented Courses" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>
   <section className="py-16 bg-white" id="opju-online-courses">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Explore Online Courses
    </h2>
    <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
      OP Jindal University Online offers a wide range of UGC-approved undergraduate and postgraduate programs 
      designed to meet the evolving demands of modern industries. Each program emphasizes academic excellence, 
      flexibility, and practical relevance to help learners advance their careers.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
      {[
        "Online MBA Programs",
        "Online BBA Programs",
        "Online MCA & Computer Science Programs",
        "Online MA in Public Policy & International Relations",
        "Online BCom & BA Programs",
        "Online Data Science & Artificial Intelligence Courses",
      ].map((course, index) => (
        <div
          key={index}
          className="p-6 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800">{course}</h3>
        </div>
      ))}
    </div>

    <p className="text-gray-600 mt-10 leading-relaxed max-w-4xl mx-auto">
      Each course offered by OP Jindal University Online is developed by industry experts and academic leaders, 
      ensuring a balance between theoretical depth and practical skills. Learners can access study materials anytime, 
      join live classes, and engage directly with faculty through an advanced digital learning platform.
    </p>

    <p className="text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
      OPJU Online maintains the same academic standards, integrity, and credibility as its on-campus programs — 
      empowering students to achieve their academic and professional goals from anywhere.
    </p>
  </div>
</section>

    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* UG COURSES TABLE */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Undergraduate (UG) Courses
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Eligibility</th>
                <th className="px-4 py-2 text-left">Fees</th>
                <th className="px-4 py-2 text-left">Specialization</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {ugCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-blue-50 transition-all duration-200"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {course.course}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                  <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                  <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {course.specialization}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setOpenModal({ type: 'enquiry', program: course.course })}
                      className="bg-black text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                    >
                      Enquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
        {/* PG COURSES TABLE */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Postgraduate (PG) Courses
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Eligibility</th>
                <th className="px-4 py-2 text-left">Fees</th>
                <th className="px-4 py-2 text-left">Specialization</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pgCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-green-50 transition-all duration-200"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {course.course}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                  <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                  <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {Array.isArray(course.specialization)
                      ? course.specialization.join(", ")
                      : course.specialization || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={handleOnclickEnquiry}
                      className="bg-black text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                    >
                      Enquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327836/opjindal_banner1_fmf7ba.webp"
              universityName="OP Jindal Global University Online"
              defaultProgram={openModal.program || "MBA"}
              formType={openModal.type}
            />
          )}
    </section> 
    <section className="py-16 bg-gray-50" id="fees-structure">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Fees Structure
    </h2>

    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
      The fee structure at OP Jindal University Online is designed to make higher education 
      both affordable and accessible. Students can conveniently pay their fees in easy installments 
      through secure online payment gateways.
    </p>

    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-left">
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Affordable and Flexible:</strong> Students have the option to pay their fees in convenient installments 
            using secure digital payment methods.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Transparent Fee Policy:</strong> The OPJU Online fee structure is fully transparent, 
            with no hidden costs. All tuition, registration, and examination fees are clearly detailed 
            in the admission brochure and on the official website.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Scholarships and Financial Aid:</strong> OP Jindal University Online provides merit-based scholarships 
            and financial assistance for deserving candidates, ensuring that financial constraints 
            never hinder academic goals.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>

     <div>
  <AccreditationSection
    title="Why Choose OP Jindal University?"
    description="Blending innovative curriculum, expert faculty, tech-driven learning, and strong placements for holistic development."
    stats={[]} 
    benefits={[
      {
        title: "Innovative Curriculum",
        description: "Blends theory with practical exposure.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                    </svg>`,             

      },
      {
        title: "Expert Faculty",
        description: "Renowned academicians and industry leaders.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>`,
      },
      {
        title: "Tech-Driven Learning",
        description: "Smart classrooms and advanced labs.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                  </svg>`,
      },
      {
        title: "Strong Placements",
        description: "Top companies hire our graduates.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                    </svg>`,
      },
      {
        title: "Global Exposure",
        description: "International exchange programs and collaborations.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
      {
        title: "Modern Campus",
        description: "State-of-the-art facilities for learning and living.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z"></path>
                  </svg>`,
      },
      {
        title: "Holistic Development",
        description: "Focus on academics, sports, and culture.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>`,
      },
      {
        title: "Industry Tie-ups",
        description: "Collaborations for internships and projects.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
      { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
      { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>


   <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-gray-800">
        {/* Heading */}
       
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          Choosing OP Jindal University Online means choosing an education that blends
          global recognition, digital flexibility, and real-world impact.
          Here’s what makes Jindal Online a trusted choice for thousands of learners worldwide.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaGlobe className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Globally Recognized & UGC-Entitled Programs
            </h3>
            <p className="text-gray-600">
              All programs are UGC-approved and globally accepted, carrying equal value
              to on-campus degrees for worldwide career opportunities.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaClock className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Flexible Learning Environment
            </h3>
            <p className="text-gray-600">
              Study anytime, anywhere. The online platform enables learners to
              balance education with work or personal commitments seamlessly.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaChalkboardTeacher className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Industry-Aligned Curriculum
            </h3>
            <p className="text-gray-600">
              Designed in collaboration with industry experts, ensuring every
              course is skill-focused and aligned with professional demands.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaUserGraduate className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Experienced Faculty
            </h3>
            <p className="text-gray-600">
              Learn from distinguished educators and professionals who bring
              academic excellence and industry experience to every session.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaLaptop className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Interactive Digital Learning Platform
            </h3>
            <p className="text-gray-600">
              Access live classes, recorded lectures, e-books, and online discussions
              through a state-of-the-art virtual learning system.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaRupeeSign className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Affordable & Transparent Fee Structure
            </h3>
            <p className="text-gray-600">
              Flexible payment plans, transparent pricing, and scholarship options
              make quality education accessible to every learner.
            </p>
          </div>

          {/* 7 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaBriefcase className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Career Support & Placement Assistance
            </h3>
            <p className="text-gray-600">
              Dedicated placement cell offering guidance, resume-building sessions,
              and access to top hiring partners for career advancement.
            </p>
          </div>

          {/* 8 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaUsers className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Global Networking Opportunities
            </h3>
            <p className="text-gray-600">
              Connect with a vibrant international community of students, alumni,
              and professionals for global exposure and collaborations.
            </p>
          </div>

          {/* 9 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <FaHandsHelping className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              24×7 Learning Support
            </h3>
            <p className="text-gray-600">
              A dedicated support system provides academic and technical assistance
              around the clock for a smooth learning experience.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">
            Building Careers, Empowering Futures
          </h3>
          <p className="text-gray-700 text-lg">
            At OP Jindal University Online, education is not just about earning
            a degree — it’s about creating leaders ready to make an impact in
            a rapidly evolving global world.
          </p>
        </div>
      </div>
    </section>

      <section className="py-16 bg-gray-50" id="key-highlights">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Key Highlights of OP Jindal University Online
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
      OP Jindal University Online stands out as a pioneer in digital higher education, 
      offering learners a blend of academic excellence, flexibility, and global recognition. 
      Each program is crafted to deliver an enriching learning experience that matches the quality of on-campus education.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
      {[
        "UGC-Entitled & NAAC Accredited Programs ensuring credibility and recognition.",
        "Flexible, 100% Online Learning Format for self-paced study.",
        "Globally Recognized Degrees accepted worldwide.",
        "Access to Recorded Lectures and Live Sessions for interactive learning.",
        "Dedicated Student Support and Career Guidance throughout the journey.",
        "Affordable Fee Structure with Easy Installment Options.",
        "Experienced Faculty and Industry Mentors providing real-world insights.",
        "Global Alumni Network offering lifelong professional connections.",
        "Internship and Placement Assistance ensuring employability.",
        "24×7 Learning Management System (LMS) Access for continuous learning.",
      ].map((highlight, index) => (
        <div
          key={index}
          className="bg-white p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex items-start"
        >
          <span className="text-blue-600 text-lg font-bold mr-3">•</span>
          <p className="text-gray-700 text-base leading-relaxed">{highlight}</p>
        </div>
      ))}
    </div>
  </div>
</section>
   <section className="py-16 bg-white" id="admission-dates">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Admission Dates for UG & PG Programs
    </h2>

    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
      OP Jindal University Online follows a flexible, semester-based admission process, 
      allowing students to enroll during multiple intakes throughout the year. 
      This system ensures that learners can begin their academic journey at a time that suits their schedule and goals.
    </p>

    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-left shadow-sm">
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Multiple Intakes:</strong> Admissions are open for various sessions, providing flexibility for UG and PG aspirants.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Online Application:</strong> Students can apply through the official OPJU Online Admission Portal with a simple and secure registration process.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Regular Updates:</strong> Important dates, registration deadlines, and counseling schedules are published on the official website.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <p>
            <strong>Early Admission Benefits:</strong> Early applicants receive priority counseling and advance access to course materials.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>


        {/* Admission Procedure */}
              <section id='Admission' className="relative py-20 bg-white">
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
                      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
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
                                    Easy 4-Step Admission Process Graph
                                  </h3>
                          
                                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                                    {/* Connecting Line */}
                                    <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-blue-600 z-0 rounded-full"></div>
                          
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
                                        <div className="bg-blue-600 rounded-full w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
        <section  className="bg-gray-50 py-16 px-6 md:px-20" id="OP Jindal-admission">
           <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
               OP Jindal Online Admission Process
             </h2>
             <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
               The admission process at <span className="font-semibold text-blue-600">OP Jindal Online</span> 
               is smooth and transparent. With the guidance of a dedicated 
               <span className="font-semibold text-blue-600"> UniFost Counsellor</span>, students receive 
               complete assistance from enquiry to successful enrollment.
             </p>
     
             <div className="space-y-8 text-gray-700">
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   1. Submit Enquiry Form
                 </h3>
                 <p>
                   Begin by filling out the online enquiry form on the UniFost website. 
                   A UniFost Counsellor will contact you to understand your course 
                   interest, background, and eligibility.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   2. Counselling & Course Selection
                 </h3>
                 <p>
                   Your counsellor will provide detailed information about OP Jindal Online 
                   programs, eligibility criteria, and fee structure. They will help 
                   you choose the most suitable UG or PG program for your career goals.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   3. Document Verification
                 </h3>
                 <p>
                   Upload scanned copies of your academic documents and ID proof. 
                   The UniFost Counsellor verifies your details to confirm eligibility 
                   before proceeding to the next step.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   4. Application Form Submission
                 </h3>
                 <p>
                   Complete the OP Jindal Online application form under the supervision of 
                   your counsellor. All details are reviewed carefully to ensure accuracy 
                   and avoid any processing delays.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   5. Payment of Fees
                 </h3>
                 <p>
                   Make a secure online payment for your selected course. Once the 
                   payment is successfully completed, you will receive a confirmation 
                   and fee receipt via email.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   6. Admission Confirmation
                 </h3>
                 <p>
                   After verification, you’ll receive your official admission letter 
                   from OP Jindal Online. Your UniFost Counsellor will then assist you with 
                   LMS login credentials, induction schedule, and onboarding support.
                 </p>
               </div>
             </div>
     
             <div className="mt-12 border-t border-gray-200 pt-6 text-center">
               <p className="text-gray-700 max-w-3xl mx-auto">
                 Apply through <span className="font-semibold text-blue-600"> UniFost </span> 
                 for personalized guidance, faster processing, and complete support 
                 throughout your admission journey with  Online.
               </p>
             </div>
           </div>
         </section>
                   {/*  Add Quick Comparison Table */}
     <section id='QuickComparison' className="py-16 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center mb-12">
           <span className="text-[#821812]">Online vs Regular</span> Degree Comparison
         </h2>
         
         <div className="overflow-x-auto">
           <table className="w-full border-collapse">
             <thead>
               <tr className="bg-[#ffc107] text-white">
                 <th className="p-4 text-left">Feature</th>
                 <th className="p-4 text-center">OP Jindal University Online</th>
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

      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327834/op-certificate_b7snzo.webp" alt="OP Jindal Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from OP Jindal University</h2>
            <p className="mb-6 text-lg">Keep your future shine with a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Get Global Exposure</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
              <li>Mentorship with proper counselling</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white" id="sessions-details">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Details of Upcoming and Ongoing Sessions
    </h2>

    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
      OP Jindal University Online conducts multiple academic sessions every year for its 
      undergraduate and postgraduate programs. Students can easily check details of upcoming sessions 
      through the university’s online academic calendar.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">📘 Upcoming Sessions</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <p>
              New academic sessions begin multiple times each year for UG and PG programs.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <p>
              Students can view detailed schedules and important dates on the 
              <strong> OPJU Online Academic Calendar</strong>.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <p>
              Each new session starts with an engaging <strong>Orientation Program</strong> 
              and live introduction classes led by experienced faculty.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🎓 Ongoing Sessions</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <p>
              Current batches are actively participating in live classes, group discussions, and digital workshops.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <p>
              Students engage in <strong>continuous assessments, projects, and interactive learning modules</strong> 
              to strengthen academic performance.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <p>
              The LMS ensures smooth access to lectures, study materials, and real-time progress tracking.
            </p>
          </li>
        </ul>
      </div>
    </div>

   
  </div>
</section>
  

      {/* Hiring Companies */}
<section id="placement-partners" className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at OP Jindal University</h2>
    <p className="text-xl text-gray-600">Trusted by leading global brands</p>
    <p className="text-black-600 leading-relaxed max-w-3xl mx-auto mb-10">
      OP Jindal University Online has built strong relationships with leading global and national corporations.
      Its placement partners include top organizations from sectors like IT, management, banking, consulting, 
      and data analytics. Through virtual internships, career counseling, and placement training, the university 
      ensures students gain relevant industry exposure even while learning remotely. 
      Corporate tie-ups and professional networking opportunities help learners build successful careers in 
      reputed companies after completing OP Jindal University Online programs.
    </p>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327033/aditya-birla_dln4ym.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/airtel_odc32s.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327033/aurobindo_myymk4.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/bajaj-allianz_w5copv.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bharti-airtel_hoajg1.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bosch_psoaob.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/cipla_l21bms.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/coca-cola_krqtyj.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327108/cyient_o0zzp3.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327128/diageo_ezhnzr.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/fedex_ztxmsk.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/himalaya_vworlj.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hinduja_tuhqdi.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icici_1_quita6.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327203/iifl_sihlun.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327203/india-mart_liq79t.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/infosys_vk4d5g.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/maruti_ofcgtx.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nestle_bibwqx.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327851/oyo_u0luvj.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327852/pepsico_lwhvcn.webp",
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp",
      
    ].map((src, i) => (
      <div
        key={i}
        className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Image width={100} height={100} loading="lazy" src={src} alt="Recruiter" className="h-12 object-contain" />
      </div>
    ))}
  </div>
</section>
{/* Placement Record Section */}
<section id="placement-record" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      Placement Record
    </h2>

    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
      The placement record of OP Jindal University Online reflects the university’s commitment to employability 
      and skill-based learning. Graduates from OPJU’s online programs have been successfully placed in reputed 
      companies and startups, holding positions in business management, data analysis, marketing, finance, IT, 
      and more. The university’s dedicated placement cell offers resume-building workshops, mock interviews, 
      and mentorship programs to prepare students for global job markets.
    </p>

    {/* Placement Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      <div className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
        <p className="text-gray-700">Placement Success Rate</p>
      </div>

      <div className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-4xl font-bold text-blue-600 mb-2">300+</h3>
        <p className="text-gray-700">Hiring Partners</p>
      </div>

      <div className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-4xl font-bold text-blue-600 mb-2">₹12 LPA</h3>
        <p className="text-gray-700">Highest Package Offered</p>
      </div>
    </div>
  </div>
</section>
{/* Student Reviews Section */}
<section id="student-reviews" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      Student Reviews
    </h2>

    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
      Students of OP Jindal University Online consistently praise the university for its academic excellence,
      responsive support system, and flexible learning structure. Many learners appreciate the balance between
      self-paced learning and interactive live sessions. Reviews highlight the value of the digital learning
      experience, emphasizing that OP Jindal University Online provides not just a degree but real professional growth.
      Alumni also commend the networking opportunities and mentorship provided by industry leaders.
    </p>

    {/* Reviews Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
        <p className="text-gray-700 italic mb-4">
          “The flexibility of the OPJU Online program allowed me to balance work and study easily. The recorded lectures
          and live sessions were incredibly useful!”
        </p>
        <h4 className="font-semibold text-gray-800">— Aditi Sharma</h4>
        <p className="text-sm text-gray-500">MBA Student</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
        <p className="text-gray-700 italic mb-4">
          “The mentorship and support I received from faculty and industry experts helped me grow professionally and
          apply concepts directly in my workplace.”
        </p>
        <h4 className="font-semibold text-gray-800">— Rohan Mehta</h4>
        <p className="text-sm text-gray-500">BBA Student</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
        <p className="text-gray-700 italic mb-4">
          “OPJU Online provides an amazing learning environment. The digital platform is smooth, and the academic team
          is always there to guide you.”
        </p>
        <h4 className="font-semibold text-gray-800">— Sneha Patel</h4>
        <p className="text-sm text-gray-500">MCA Student</p>
      </div>
    </div>
  </div>
</section>


{/* OP Jindal University Online Reviews Section */}
<section id="opju-reviews" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      OP Jindal University Online Reviews
    </h2>

    <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
      OP Jindal University Online has earned an excellent reputation for its dedication to academic excellence and innovation.
      Thousands of students across India and abroad have benefitted from its flexible online learning model, industry-ready curriculum,
      and personalized student support. The reviews consistently highlight OP Jindal University Online’s strong academic framework,
      global recognition, and commitment to quality education.
    </p>

    <p className="text-gray-700 font-medium max-w-3xl mx-auto">
      Choosing OP Jindal University Online means investing in a future built on <span className="text-blue-600">knowledge</span>,
      <span className="text-blue-600"> innovation</span>, and <span className="text-blue-600">success</span>.
    </p>
  </div>
</section>
   <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Get all your queries about OP Jindal University Online answered here
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-500 hover:to-blue-600 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-yellow-500 text-lg"
              >
                <span className="pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* Answer Section */}
              {openIndex === index && (
                <div className="px-8 py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                  <p className="text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
         <Button
  onClick={() => setOpenModal({ type: 'apply' })}
  className="w-full bg-[#ffc107] text-blue-500  font-semibold px-4 py-2  /* smaller size */rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 hover:bg-[#e0a800] cursor-pointer my-4              /* top & bottom spacing */ "
>
  Apply Now
</Button>

      </div>
    </section>
<footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-50" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
                        {/* Company Info */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_banner_qhx3sb.png" alt="OP Jindal University Logo" className="h-10 w-auto" />
                              <span className="text-xl font-bold text-[#ffc107]">OP Jindal</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              UGC-entitled, NAAC A+ accredited online degrees designed for modern learners. 
                              Transform your career with globally recognized programs.
                            </p>
                            
                            {/* Social Media */}
                            <div className="flex space-x-4">
                              {[
                                { icon: '📘', label: 'Facebook' },
                                { icon: '📷', label: 'Instagram' },
                                { icon: '🐦', label: 'Twitter' },
                                { icon: '💼', label: 'LinkedIn' }
                              ].map((social, i) => (
                                <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                                  <span className="text-lg">{social.icon}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
          
                        {/* Programs */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            <h4 className="text-white font-bold mb-4 text-lg">Programs</h4>
                            <ul className="space-y-3 text-sm">
                              {['MBA', 'BBA',  'BCA', 'MCA'].map((program, i) => (
                                <li key={i} onClick = {() => setOpenModal({ type: 'apply',})} className="hover:text-[#ffc107] transition-colors cursor-pointer">
                                  {program}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
          
                        {/* Resources */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
                            <ul className="space-y-3 text-sm">
                              {[
                                { name: 'Admissions', href: '#Admission' },
                                { name: 'About', href: '#Home' },
                                { name: 'Placements', href: '#Partner' },
                                { name: 'FAQs', href: '#Faq' },
                                { name: 'Quick Comparison', href: '#QuickComparison' },
                                { name: 'Fees Structure', href: '#Admission' }
                              ].map((link, i) => (
                                <li key={i}>
                                  <a href={link.href} className="hover:text-[#d9235c] transition-colors">
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
          
                        {/* Contact */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                          >
                            <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                
                                <a href="tel:+917042646766" className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200" title="Call us"  aria-label="Email us at info@unifostedu.com">
                                             
                                           <FaPhone className="text-blue-500 rotate-90" />
                                            </a>
                                <span className="text-sm">+91 7042646766</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                                  <span className="text-orange-400">✉️</span>
                                </div>
                                <a href="mailto:info@unifostedu.com" className='p-2 rounded-lg hover:bg-slate-100 text-blue-500 transition-all duration-200' title='Email us' aria-label='Email us at info@unifostedu.com'>
                                <span className="text-sm">info@unifostedu.com</span>
                                </a>
                              </div>
                            </div>
                            
                            <Button
                            onClick={() => setOpenModal({ type: 'apply' })}
                               className="w-full bg-[#ffc107] text-blue-500 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 hover:bg-[#e0a800] cursor-pointer"
                            >
                          Apply Now
                             </Button>

                          </motion.div>
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
                          Popular Programs & Specializations – OP Jindal Online University 
                        </h4>
          
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
 { [
  // UG Courses
  "BBA (Finance) - OP Jindal University",
  "BBA (Marketing) - OP Jindal University",
  "BBA (Human Resources) - OP Jindal University",
  "BBA (Operation Management Supply Chain) - OP Jindal University",
  "B.Sc in Psychology - OP Jindal University",

  // PG Courses
  "Master in Entrepreneurship and Family Business - OP Jindal University",
  "MA in Teaching English to Speakers of Other Languages (TESOL) - OP Jindal University",
  "M.Sc in Environmental Change and Sustainability - OP Jindal University",
  "MA Public Policy - OP Jindal University",
  "MBA in Business Analytics - OP Jindal University",
  "MBA in Business Law - OP Jindal University"
  
]

                        .map((keyword, index) => (
                            <span
                              key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                              className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#d9235c]  hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                              title={keyword}
                            >
                              {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                            </span>
                          ))}
                        </div>
                      </motion.div>
          
                      {/* Copyright */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="pt-8 pb-6 text-center text-sm text-gray-400 border-t border-white/10"
                      >
                        <p>&copy; {new Date().getFullYear()} OP Jindal Online University". All rights reserved.</p>
                        <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
                      </motion.div>
                    </div>
                  </footer>
                  
</div>
</main>
</div>
</div>
    </>
  );
};

export default OPJindal;
