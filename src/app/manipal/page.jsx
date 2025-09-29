'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import {
  FaBookOpen,
  FaUserTie,
  FaRobot,
  FaBriefcase,
  FaBook,
  FaUniversity,
  FaUserFriends,
  FaClipboardCheck,
  FaGraduationCap,
  FaAward,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
  FaClock,
  FaMoneyBillWave,
  FaCertificate,
  FaCheckCircle,
  FaFileAlt,
  FaBuilding
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

// Course Card Component
const CourseCard = ({ course, duration, eligibility, fees, specialization, image, universityName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={course}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {universityName}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-[Poppins] line-clamp-2">{course}</h3>
        
        {/* Key Info Icons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-2">
              <FaClock className="text-blue-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-medium text-gray-900">{duration}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-2">
              <FaCertificate className="text-blue-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Eligibility</p>
              <p className="text-sm font-medium text-gray-900 line-clamp-1">{eligibility}</p>
            </div>
          </div>
        </div>
        
        {/* Fees */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Total Fees</span>
            <span className="text-lg font-bold text-blue-700">₹{fees}</span>
          </div>
        </div>

        {/* Expandable Specialization */}
        <div className="mt-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <span className="text-sm font-medium text-blue-600">Specializations Available</span>
            {isExpanded ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
          </button>
          
          {isExpanded && (
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-700">{specialization}</p>
            </div>
          )}
          
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Section Header Component
const SectionHeader = ({ icon: Icon, title, description }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <motion.div 
      className="text-center mb-12"
      {...fadeIn}
    >
      <div className="inline-flex items-center justify-center mb-4">
        <div className="w-12 h-0.5 bg-blue-600 mr-3"></div>
        <div className="text-blue-600 text-xl">
          <Icon />
        </div>
        <div className="w-12 h-0.5 bg-blue-600 ml-3"></div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">{title}</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
    </motion.div>
  );
};

const Manipal = () => {
  const ugCourses = [
=======
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

const Manipal = () => {

 const ugCourses = [
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
<<<<<<< HEAD
      specialization: "Finance & Accounting, Digital Marketing, Enterepreneurship Management & Family Business, Human Resource Management, Data Analytics, Retail & E-commerce Management",
      image: "/images/bba.jpeg",
=======
      specialization: "Finance & Accounting, Digital Marketing, Enterepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "/images/bba.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "/images/bca.webp",
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
      image: "/images/bcom.webp",
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
      image: "/images/mba.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
<<<<<<< HEAD
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies, AI & ML", 
      image: "/images/mca1.jpeg",
=======
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML", 
      image: "/images/mca1.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
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
<<<<<<< HEAD
      specialization: "Economics, Journalism and Mass Communication",
      image: "/images/ma1.jpeg",
=======
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "/images/ma1.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Arts (MA) in Manipal Online",
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
    },
  ];
    

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

  const highlights = [
    {
      img: "/images/naac.png",
      title: "NAAC Accreditation",
      description: "Manipal University is accredited by NAAC, ensuring quality education standards.",
    },
    {
      img: "/images/ugc.png",
      title: "UGC Recognition",
      description: "Degrees recognized by University Grants Commission (UGC), ensuring quality education and nationwide acceptance.",
    },
    {
      img: "/images/aicte.png",
      title: "AICTE Approved",
      description: "Programs approved by AICTE, ensuring industry relevance and quality standards.",
    },
    {
      img: "/images/aiu.png",
      title: "AIU Recognition",
      description: "Recognized by the Association of Indian Universities (AIU), facilitating global mobility for graduates.",
    },
    {
      img: "/images/nba.png",
      title: "NBA Accreditation",
      description: "Selected programs accredited by NBA, ensuring quality technical education.",
    },
    {
      img: "/images/pan-india.png",
      title: "Pan-India Student Community",
      description: "Join a diverse community of learners from across India, fostering rich cultural and academic exchange.",
    },
    {
      img: "/images/amigo.png",
      title: "Flexible Learning Platform",
      description: "Advanced learning management system allowing students to learn at their own pace and convenience.",
    },
    {
      img: "/images/ai-tutor.png",
      title: "Expert Faculty Support",
      description: "Access to experienced faculty members and industry experts for academic guidance and mentorship.",
    },
    {
      img: "/images/indu-Certi.png",
      title: "Industry-Relevant Curriculum",
      description: "Programs designed in collaboration with industry leaders to ensure employability and career readiness.",
    },
    {
      img: "/images/internship.png",
      title: "Internship Opportunities",
      description: "Access to curated internships with leading companies through extensive corporate network.",
    },
    {
      img: "/images/ai-application.png",
      title: "Career Development Support",
      description: "Comprehensive career services including resume building, interview preparation, and placement assistance.",
    },
    {
      img: "/images/people.png",
      title: "Global Alumni Network",
      description: "Join a prestigious network of alumni working in top companies worldwide.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <>
      <Head>
        <title>Manipal University Online Jaipur, Rajasthan | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal University Jaipur, MUJ Online, BBA in muj Online, BCA in muj Online, B.Com in muj Online, MBA in muj Online, MCA in muj Online, M.Com in muj Online, MA in muj Online, Manipal Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal University Online" />
<<<<<<< HEAD
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/manipal" />
=======
        <meta name="robots" content="index, follow" /> 
         <link rel="canonical" href="https://unifostedu.com/manipal" />
         <link href="https://fonts.cdnfonts.com/css/queens" rel="stylesheet" />
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
         
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
      </Head>
<<<<<<< HEAD
      
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-6 font-[Inter] border-b border-gray-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDc3ZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxNSIvPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* University Badge */}
            <div className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full w-fit shadow-sm border border-blue-100">
              <FaUniversity className="text-sm" />
              <span className="text-sm font-medium">UGC Entitled Online Degrees</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-[Poppins]">
              Say Hi to your future with <span className="text-blue-600">Manipal University Online</span>
            </h1>
            
            {/* Location and Basic Info */}
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-sm">Jaipur, Rajasthan, India</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm">Private University</div>
            </div>

            <p className="text-base font-medium text-gray-600">
              India's Premier Private University | 100% Online Learning
            </p>
            
            {/* Key Highlights with Icons */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
                { icon: <FaUserTie className="text-blue-600" />, text: "Industry Curriculum" },
                { icon: <FaClipboardCheck className="text-blue-600" />, text: "Placement Assistance" },
                { icon: <FaRobot className="text-blue-600" />, text: "Expert Faculty" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 text-xs">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Manipal University Online transforms careers with globally recognized online degrees delivered at your doorstep. 
              With top-class accreditations and flexible learning, it offers quality education with personalized mentorship.
              It provides a unique blend of academic excellence and industry relevance, ensuring students are well-prepared for the future.
              <br/><br/>
              Ranked among the top private universities in India, Manipal offers diverse programs in business and technology 
              with strong academic support and vibrant digital learning.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
              <p className="text-blue-700 text-sm flex items-start">
                <FaBookOpen className="mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                <span>Private University in Jaipur, Rajasthan, India with UGC and AICTE approved online programs.</span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center text-sm">
                <FaGraduationCap className="mr-2" />
                Explore Programs
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-md opacity-70"></div>
            
            {/* Image Container with Badges */}
            <div className="relative rounded-xl shadow-md overflow-hidden border border-gray-200">
              <Image
                src="/images/manipal.png"
                alt="Manipal University Online campus with modern infrastructure and digital learning facilities"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              
              {/* Floating Badges */}
              <div className="absolute -top-2 -right-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaGraduationCap className="text-blue-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">25K+ Students</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaBriefcase className="text-blue-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">200+ Partners</span>
              </div>
              
              {/* Location Badge */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-xs font-medium text-gray-700">Jaipur Campus</span>
=======
      <style jsx>{`
        .queens { font-family: 'Queens', serif; }
      `}</style>
      <div className="queens">
      
         
      
      <div className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-40">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/manipallogo.jpg" alt="Logo" className="h-10 w-auto" />
          <h1 className="font-baskervville text-3xl md:text-5xl font-extrabold">
          <span className="text-[#ff7a36] bold">Online</span>{" "}
          <span className="text-gray-800 bold">Manipal</span>
          </h1>

         </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+917304000444"
            className="flex items-center gap-2 text-gray-700 font-medium"
          > 
            📞 +91-7042867717
          </a>
          <button 
            onClick={() => setOpenModal({ type: 'apply' })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>

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


  {/* Manipal-style Banner + Form */}
  <section className="relative bg-[#0f0f12] overflow-hidden">
  <div className="absolute inset-0 bg-[url('/images/manipal.webp')] bg-cover bg-center"></div>


    <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="font-baskervville text-3xl text-black md:text-5xl font-extrabold leading-tight">
        <h1 className=" font-queens text-3xl md:text-5xl font-extrabold leading-tight">
          NAAC A+ Accredited
          <span className="block">Online Degrees from</span>
          <span className="block text-[#ff7a36] mt-2">Manipal University Jaipur (MUJ)</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">MBA | BBA | MCA | BCA | MCOM | BCOM | MAJMC</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { src: '/images/naac.webp', label: 'NAAC A+\nAccredited' },
            { src: '/images/ugc.webp', label: 'UGC\nEntitled' },
            { src: '/images/qs.webp', label: 'Global Recognition' },
          ].map((item, i) => (
            <div key={i} className=" rounded-xl p-4  text-center text-white">
              <Image src={item.src} alt="rank" width={80} height={80} className="mx-auto h-16 w-auto object-contain" />
              <p className="text-sm mt-2 whitespace-pre-line">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      
      
    </div>
  </section>

 {/* Statistics Section */}
 <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaGraduationCap className="text-5xl text-indigo-500 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">100% flexible <br/> learning</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaIndustry className="text-5xl text-gray-500 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Industry relevant <br/> curriculum</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaUniversity className="text-5xl text-red-500 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">At par with <br/> on-campus degrees</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-5xl text-yellow-500 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">100% placement <br/> assistance</h3>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Rankings & Accreditations grid (compact) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-gray-900 mb-6">Rankings & Accreditations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
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
              <div key={i} className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
                <Image src={item.img} alt={item.title} width={400} height={260} className="w-full h-36 object-contain bg-gray-50" />
                <div className="px-3 py-2 text-sm font-medium text-gray-800 text-center">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unlock 360 Advantage */}
      <section className="relative py-16 bg-[#fcf3df]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Unlock The 360° Advantage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <FaBook className="text-4xl text-green-500" />, title: 'Globally recognized Prestigious Degree' },
              { icon: <FaLaptop className="text-4xl text-blue-500" />, title: 'Industry relevant curriculum' },
              { icon: <FaUsers className="text-4xl text-purple-500" />, title: '100% placement assistance' },
              { icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />, title: 'Easy Financing Options' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border">
                <div className="flex items-center gap-4">
                  {f.icon}
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border">
              <FaMoneyBillWave className="text-5xl text-yellow-500 flex-shrink-0" />
              <div>
                <div className="font-semibold">Avail easy financing options</div>
                <div className="text-sm text-gray-600">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border">
              <FaMoneyBillWave className="text-5xl text-yellow-500 flex-shrink-0" />
              <div>
                <div className="font-semibold">Get attractive scholarships</div>
                <div className="text-sm text-gray-600">Exclusive scholarships for defense personnel, govt. employees, differently-abled & meritorious students.</div>
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Accreditation Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
                Education with Excellence Recognition
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our accredited programs open doors to opportunities and ensure your qualifications are recognized nationwide.
              </p>
            </motion.div>
            
            {/* Stats and Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div 
                className="bg-blue-50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-700 mb-2">85%</div>
                <div className="text-gray-700">Employment Rate Within 6 Months</div>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">30+</div>
                <div className="text-gray-700">Countries with Alumni Network</div>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-700 mb-2">15+</div>
                <div className="text-gray-700">Years of Academic Excellence</div>
              </motion.div>
            </div>
            
            {/* Program Highlights */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 font-[Poppins] text-center">Benefits of Our Accredited Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Career Mobility</h4>
                    <p className="text-sm opacity-90">Our degrees are recognized nationally, enabling you to pursue opportunities across India.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Quality Assurance</h4>
                    <p className="text-sm opacity-90">Rigorous accreditation processes ensure our programs meet high educational standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Industry Connections</h4>
                    <p className="text-sm opacity-90">Our partnerships with organizations provide valuable networking and career opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Career Advancement</h4>
                    <p className="text-sm opacity-90">Employers value accredited degrees, giving our graduates a competitive edge in the job market.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Vertical Accreditation Sidebar */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center font-[Poppins] border-b border-gray-200 pb-3">
                Accreditations & Recognitions
              </h3>
              
              <div className="space-y-4">
                {[
                  { src: "/images/ugc.png", alt: "UGC", name: "UGC" },
                  { src: "/images/aicte.png", alt: "AICTE", name: "AICTE" },
                  { src: "/images/naac.png", alt: "NAAC", name: "NAAC" },
                  { src: "/images/aiu.png", alt: "AIU", name: "AIU" },
                  { src: "/images/nba.png", alt: "NBA", name: "NBA" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 border border-gray-100"
                  >
                    <div className="h-8 w-8 relative mr-3 flex-shrink-0">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
              
              {/* International Recognition Section */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide text-center">
                  International Recognition
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { src: "/images/qs.png", alt: "QS Ranking", name: "QS" },
                    { src: "/images/acu.png", alt: "ACU", name: "ACU" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                      <div className="h-6 w-6 relative mb-1">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-600 text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Trust Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Trusted by 25,000+ Students</span>
                </div>
                <p className="text-xs text-gray-500">Our accreditations ensure quality education recognized nationally</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UG Courses Section */}
      <section className="py-16 bg-gray-50 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            icon={FaGraduationCap}
            title="Undergraduate Programs"
            description="Comprehensive bachelor's degrees designed to build strong foundations for your career"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugCourses.map((item, index) => (
              <CourseCard key={index} {...item} universityName="Manipal University Online" />
            ))}
          </div>
        </div>
      </section>

      {/* PG Courses Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            icon={FaAward}
            title="Postgraduate Programs"
            description="Advanced degrees to specialize and accelerate your professional growth"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pgCourses.map((item, index) => (
              <CourseCard key={index} {...item} universityName="Manipal University Online" />
            ))}
=======
<div>
  <AccreditationSection
    title="Why Choose Manipal University Online?"
    description="Manipal University Online offers globally recognized online degrees with flexible learning, expert mentorship, and strong career support to help you achieve your future goals.You should choose Manipal University Online for a prestigious degree with flexible, affordable learning, access to a global Manipal alumni network, a diverse online community, specialized courses, and the benefit of internationally recognized qualifications. Online Manipal's programs are designed for working professionals and aspiring students to acquire in-demand skills from a highly-ranked institution.  
"
    stats={[]} // No numerical stats provided
    benefits={[
      {
        title: "Top-Ranked Private University",
        description: "Recognized as one of India’s best private institutions.", 
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 .5l9 4.5v11l-9 4.5-9-4.5v-11L12 .5zM12 3.31L5.5 6.5v8l6.5 3.25 6.5-3.25v-8L12 3.31z"></path></svg>`
      },
      {
        title: "Globally Recognized Degrees",
        description: "Accredited programs accepted worldwide by top employers.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-15.86c3.94.49 7 3.85 7 7.93s-3.06 7.44-7 7.93V4.07z"></path></svg>`
      },
      {
        title: "Flexible & Personalized Learning",
        description: "Learn anytime, anywhere with tailored academic support.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></svg>`
      },
      {
        title: "Expert Faculty Mentorship",
        description: "One-on-one guidance by experienced mentors & professors.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>`
      },
      {
        title: "UGC & AICTE Approved",
        description: "Degrees entitled by UGC and recognized by AICTE.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg>`
      },
      {
        title: "Global Alumni Network",
        description: "Join a network of learners from 50+ countries.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"></path></svg>`
      },
      {
        title: "Career Support",
        description: "Internships, placements, resume help, and interview prep.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg>`
      },
      {
        title: "Digital Resources",
        description: "Access e-books, recorded classes, and online labs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"></path></svg>`
      },
      <h4>Manipal University Online ensures the highest standards of education through accreditations from reputed bodies like UGC and NAAC, guaranteeing the quality and credibility of your degree. These accreditations make your online degree widely accepted by employers and other educational institutions, enhancing its value for career opportunities and further studies. UGC-DEB approval is particularly essential for pursuing government jobs and appearing for competitive exams such as UPSC. Additionally, international recognition, like WES accreditation, adds significant global value to your qualification. With an accredited degree from Manipal University Online, you gain stronger career prospects, increased earning potential, and a solid foundation for growth in a competitive professional environment.</h4>
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
      { src: "/images/nba.webp", alt: "NBA", name: "NBA" }, 
      { src: "/images/qs.webp", alt: "QS", name: "QS World Ranking" },
      { src: "/images/acu.webp", alt: "ACU", name: "Association of Commonwealth Universities (ACU)" },
    ]}
    internationalRecognition={[]} 
    successStories={[]}
/>
</div>

      {/* Courses Offered */}
    
<section className="py-12 px-6 bg-white font-[Inter]">
  <h2 className="text-2xl font-bold text-center mb-6 text-[#003b59] font-[Poppins]">
    Manipal University Online Programs
  </h2>

    <Tabs.Root defaultValue="all" className="w-full">
    <Tabs.List className="flex justify-center gap-4 mb-6">
      <Tabs.Trigger value="all"   className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                   hover:bg-blue-600 hover:text-white transition-colors duration-300
                   radix-state-active:bg-blue-600 radix-state-active:text-white">All</Tabs.Trigger>
      <Tabs.Trigger value="ug"  className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                   hover:bg-blue-600 hover:text-white transition-colors duration-300
                   radix-state-active:bg-blue-600 radix-state-active:text-white">UG</Tabs.Trigger>
      <Tabs.Trigger value="pg"  className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold 
                   hover:bg-blue-600 hover:text-white transition-colors duration-300
                   radix-state-active:bg-blue-600 radix-state-active:text-white">PG</Tabs.Trigger>
     
    </Tabs.List>

    {/* All Courses */}
    <Tabs.Content value="all">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
        {[...ugCourses, ...pgCourses,].map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName="Manipal University Online" />
        ))}
      </div>
    </Tabs.Content>

    {/* UG Courses */}
    <Tabs.Content value="ug">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
        {ugCourses.map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName="Manipal University Online" />
        ))}
      </div>
    </Tabs.Content>

    {/* PG Courses */}
    <Tabs.Content value="pg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
        {pgCourses.map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName="Manipal University Online" />
        ))}
      </div>
    </Tabs.Content>
  </Tabs.Root>
</section>

     {/*360 section*/}

  
  
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-12"
      style={{
        backgroundColor: "darksalmon",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Container */}
      <div className="max-w-6xl w-full bg-darksalmon rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-darksalmon text-black text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            Unlock The 360° Advantage
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience comprehensive benefits designed to support your
            educational journey and career growth
          </p>
        </div>

        {/* Advantages */}
        <div className="flex flex-wrap p-8">
          {/* Left column */}
          <div className="flex-1 min-w-[300px] p-4">
            <div className="flex items-start mb-6">
              <div className="bg-[#f0f5ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-[#2a5298]">🎓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e3c72] mb-1">
                  Globally recognized Prestigious Degree
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Earn a degree that holds value worldwide and opens doors to
                  international opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#f0f5ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-[#2a5298]">📚</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e3c72] mb-1">
                  Industry relevant curriculum
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn skills that are directly applicable to current industry
                  demands and future trends.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 min-w-[300px] p-4">
            <div className="flex items-start mb-6">
              <div className="bg-[#f0f5ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-[#2a5298]">💼</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e3c72] mb-1">
                  100% placement assistance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Get comprehensive support in finding the right job
                  opportunities after completing your program.
                </p>
              </div>
            </div>

            <div className="flex items-start">
               <div className="bg-[#f0f5ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-[#2a5298]">🔄</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e3c72] mb-1">
                  Easy Financing Options
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Flexible payment plans to make quality education accessible to
                  everyone.
                </p>
              </div>
            </div>
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
          </div>
        </div>

        {/* Financing & Scholarship */}
        <div className="bg-gray-50 border-t border-gray-200 flex flex-wrap items-center p-8">
          <div className="flex-1 min-w-[300px] pr-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-[#1e3c72] mb-3">
              Avail easy financing options
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With our no-cost EMIs, we let your learning take the spotlight
              without the stress of financing. Our flexible payment plans are
              designed to support your educational goals without financial
              burden.
            </p>
          </div>

          <div className="flex-1 min-w-[300px] bg-[#eef4ff] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#1e3c72] mb-3">
              Get attractive scholarships
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Exclusive scholarships designed for defense personnel, government
              employees, differently-abled people & meritorious students. We
              believe in rewarding talent and supporting diverse learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  



<<<<<<< HEAD
      {/* Why Choose Manipal */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Why Choose Manipal Online University?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Experience the perfect blend of academic excellence and digital innovation</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <FaBookOpen className="text-2xl" />, title: "Diverse learning mediums", text: "E-books, printed & audio books, videos to suit all styles." },
              { icon: <FaUserTie className="text-2xl" />, title: "Dedicated Academic Advisor", text: "Experts to guide every step of your career." },
              { icon: <FaRobot className="text-2xl" />, title: "Expert Faculty Support", text: "Access to experienced faculty members for better learning." },
              { icon: <FaBriefcase className="text-2xl" />, title: "Career Services", text: "Workshops, internships, resume support." },
              { icon: <FaBook className="text-2xl" />, title: "Flexible Learning", text: "Learn at your own pace with advanced LMS." },
              { icon: <FaUniversity className="text-2xl" />, title: "Prestigious Recognition", text: "UGC and AICTE approved programs." },
              { icon: <FaUserFriends className="text-2xl" />, title: "Global Community", text: "Connect with learners from across India." },
              { icon: <FaClipboardCheck className="text-2xl" />, title: "Placement Opportunities", text: "Resume prep and interview assistance." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="text-blue-600 bg-blue-50 p-4 rounded-full mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights/Features */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Poppins]">Manipal Online Advantages</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Discover what makes Manipal Online a leader in digital education
=======
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
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
            </p>
          </motion.div>

          {/* Compact grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200 hover:-translate-y-1 cursor-pointer min-h-[180px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center p-2 shadow-md">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-blue-100 text-xs leading-tight line-clamp-3">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Compact stats bar */}
          <motion.div 
            className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25K+</div>
              <div className="text-blue-200 text-xs">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-blue-200 text-xs">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-blue-200 text-xs">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-blue-200 text-xs">Partners</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            Admission Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {[
              {
                step: "Step 1",
                description: "Fill the registration form and create unique login credentials (on the official website)",
              },
              {
                step: "Step 2",
                description: "Fill in your details (including educational qualifications) and pay the application and semester fees",
              },
              {
                step: "Step 3",
                description: "Upload the necessary documents",
              },
              {
                step: "Step 4",
                description: "Submit the application form",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Line connector */}
                {index !== 0 && (
                  <div className="absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900 z-0"></div>
                )}

                {/* Circle with border */}
                <div className="z-10 w-6 h-6 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
                </div>

                {/* Step label */}
                <h4 className="mt-4 font-semibold text-lg">{item.step}</h4>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Certificate + Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
              <Image 
                src="/images/muj-certi.jpeg" 
                alt="Manipal University Certificate" 
                width={500} 
                height={350} 
                className="relative rounded-xl shadow-xl w-full"
              />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[Poppins]">Globally Recognized Online Degree</h2>
            <p className="mb-6 text-gray-600 text-lg">Manipal University online programs offer flexible learning, career assistance, and industry-relevant curriculum with global recognition.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Benefits of Online Manipal University</h3>
            <ul className="space-y-3">
              {[
                "UGC & AICTE Recognized Degrees",
                "Flexible Learning Schedule",
                "International Collaborations",
                "100% Placement & Internship Support",
                "Industry-Relevant Curriculum",
                "Prestigious Alumni Network"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Our Hiring Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Top companies that recruit Manipal Online University graduates</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              "/images/company.png", "/images/company1.png", "/images/company9.jpg", 
              "/images/com10.png", "/images/companany4.png", "/images/company6.png", 
              "/images/companany5.png", "/images/adove.png", "/images/samsung.png",
              "/images/3.webp", "/images/4.webp", "/images/5.webp", 
              "/images/6.webp", "/images/7.webp", "/images/8.webp", "/images/9.webp"
            ].map((src, i) => (
              <motion.div 
                key={i} 
                className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-md transition-all border border-gray-100"
                whileHover={{ y: -5, scale: 1.05 }}
                variants={fadeIn}
              >
                <div className="relative w-full h-12">
                  <Image
                    src={src}
                    alt="Top companies hiring Manipal University online graduates"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
=======
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Real Stories, Real Impact</h2>
          <p className="text-center text-gray-600 mb-12">Hear from our learners who have transformed their careers with Manipal University Online.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <FaUserCircle className="w-24 h-24 text-gray-300" />
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.course}, {testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       

        <section className="max-w-6xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3c72] mb-8 text-center">
        Frequently Asked Questions – Manipal University Jaipur
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center font-medium text-gray-800 transition-colors duration-200"
            >
              <span>{faq.question}</span>
              <span className="text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-5 py-4 text-gray-700 bg-white animate-[fadeIn_0.3s_ease-in-out]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      {/* Hiring Partners */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
          <p className="text-lg text-gray-600 mt-2">Top Hiring Partners of Manipal Online</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {["/images/company.webp", "/images/company1.webp", "/images/company9.webp", "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp", "/images/ey.webp", "/images/ibm.webp", "/images/hp.webp", "/images/tata.png", "/images/apple.jpg","/images/hero.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
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
      </>
  );
};

export default Manipal;