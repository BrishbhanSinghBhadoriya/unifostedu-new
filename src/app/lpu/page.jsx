'use client';
import React, { useState } from "react";
// import Image from 'next/image';
import HeroSection from "@/components/HeroSection";
import AccreditationSection from "@/components/AccreditationSection";
import EnquireCard from "@/components/EnquireCard";

// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
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
  FaChalkboardTeacher,
  FaLaptopCode,
  FaChartLine,
  FaQuoteLeft // <-- Add this line
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import AdmissionProcedure from "@/components/AdmissionProcedure";

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
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {universityName}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-[Poppins] line-clamp-2">{course}</h3>
        
        {/* Key Info Icons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-lg mr-2">
              <FaClock className="text-red-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-medium text-gray-900">{duration}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-lg mr-2">
              <FaCertificate className="text-red-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Eligibility</p>
              <p className="text-sm font-medium text-gray-900 line-clamp-1">{eligibility}</p>
            </div>
          </div>
        </div>
        
        {/* Fees */}
        <div className="mb-4 p-3 bg-red-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Total Fees</span>
            <span className="text-lg font-bold text-red-700">{fees}</span>
          </div>
        </div>

        {/* Expandable Specialization */}
        <div className="mt-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <span className="text-sm font-medium text-red-600">Specializations Available</span>
            {isExpanded ? <FaChevronUp className="text-red-600" /> : <FaChevronDown className="text-red-600" />}
          </button>
          
          {isExpanded && (
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-700">{specialization}</p>
            </div>
          )}
          
          <div className="flex gap-3">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
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
        <div className="w-12 h-0.5 bg-red-600 mr-3"></div>
        <div className="text-red-600 text-xl">
          <Icon />
        </div>
        <div className="w-12 h-0.5 bg-red-600 ml-3"></div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">{title}</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
    </motion.div>
  );
};

const Lpu = () => {
    const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000",
      specialization: "General",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in LPU Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹ 1,50,000",
      specialization: "General",
      image: "/images/bca.webp",
      alt: "Bachelor of Computer Applications (BCA) in LPU Online",
    },
    {
      course: "Bachelor's of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "₹ 1,20,000",
      specialization: "General",
      image: "/images/ma1.webp",
      alt: "Bachelor's of Arts (BA) in LPU Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 2,00,000",
      specialization: "Human Resource Management, Finance, Marketing, Operations Management, Business Analytics, Digital Marketing, Data Science, Information Technology, International Business, Banking & Financial Services, Hospital & Healthcare Management, Logistics & Supply Chain Management",
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in LPU Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT) & equivalent degree with 50%",
      fees: "₹ 1,48,000",
      specialization: "Machine Learning & Artificial Intelligence (ML & AI), Data Science, Cybersecurity, Full Stack Web Development, Augmented Reality/Virtual Reality (AR/VR) & Game Development", 
      image: "/images/mca1.webp",
      alt: "Master of Computer Applications (MCA) in LPU Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹ 1,00,000",
      specialization: "General", 
      image: "/images/m.com.webp",
      alt: "Master of Commerce (M.Com) in LPU Online",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 80,000",
      specialization: "English, History, Political Science, Sociology,",
      image: "/images/ma1.webp",
      alt: "Master of Arts (MA) in LPU Online",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 80,000",
      specialization: "Mathmatics, Economics",
      image: "/images/ma1.webp",
      alt: "Master of Science (M.Sc) in LPU Online",
    },
  ]; 
  
  const highlights = [
    {
      img: "/images/naac.png",
      title: "NAAC A++ Grade Accreditation",
      description: "LPU is accredited with A++ grade by NAAC, the highest accreditation for educational institutions.",
    },
    {
      img: "/images/nirf.png",
      title: "NIRF Ranking 2023",
      description: "Ranked 38th among universities in India by NIRF 2023, demonstrating academic excellence.",
    },
    {
      img: "/images/qs.png",
      title: "QS World University Rankings",
      description: "Ranked among top universities in QS World University Rankings and QS Asia University Rankings.",
    },
    {
      img: "/images/aricent.png",
      title: "Industry Partnerships",
      description: "Collaborations with 500+ leading companies including Microsoft, Google, Amazon, and IBM.",
    },
    {
      img: "/images/placement.png",
      title: "Placement Record",
      description: "1000+ companies visited campus with highest package of ₹ 3 Crore per annum.",
    },
    {
      img: "/images/global.png",
      title: "Global Opportunities",
      description: "MoUs with 200+ foreign universities for student exchange and collaborative programs.",
    },
    {
      img: "/images/online-learning.png",
      title: "Interactive Learning Platform",
      description: "State-of-the-art LMS with live classes, recorded lectures, and interactive sessions.",
    },
    {
      img: "/images/industry.png",
      title: "Industry-Relevant Curriculum",
      description: "Curriculum designed in consultation with industry experts to ensure employability.",
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
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
    <HeroSection
  universityName="Lovely Professional University Online"
  location="Jalandhar, Punjab, India"
  type="Private University"
  nirfRank="38"
  rating="4.7/5"
  description="NAAC A++ Accredited | One of India’s Largest Universities | 100% Online Programs"
  description2="
             Lovely Professional University (LPU) is a top-ranking university in India in various academic disciplines, ranked by NIRF. Lovely Professional University Online is no different as it is one of the top online education providers in India
              
             The university has various affiliations including recognition from University Grants Commission (UGC), All India Council for Technical Education (AICTE), and World Education Services (WES). The university has been ranked by NIRF, WURI, and The World University Rankings 2022. The quality of education this university provides is quite evident from its NAAC A++ grading.
             "
  badgeText="UGC, AICTE, WES, NAAC A++ Recognized"
  imgSrc="/images/lpu.webp"
  imgAlt="Lovely Professional University Online Campus"
  students="45K"
  partners="700"
  campus="Jalandhar Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Learning" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career Support" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Recognized Degrees" },
  ]}
/>  
<div>
      <AccreditationSection
        title="Why Choose Lovely Professional University Online?"
        description="Access flexible learning, expert faculty, career support, and globally recognized degrees."
        stats={[]} 
        benefits={[
          {
            title: "Flexible Learning",
            description: "Access recorded lectures, live classes, and study materials anytime, anywhere.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                      </svg>`,
          },
          {
            title: "Expert Faculty",
            description: "Learn from experienced professors and industry experts.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>`,
          },
          {
            title: "Career Support",
            description: "Resume building, interview preparation, and placement assistance.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                      </svg>`,
          },
          {
            title: "UGC Recognized",
            description: "Degrees equivalent to on-campus programs with global recognition.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7h20L12 2zm0 2.18L18.9 7H5.1L12 4.18zM4 9v11h16V9H4zm2 2h12v7H6v-7z"></path>
                      </svg>`,
          },
        ]}
        accreditations={[
          { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
          { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
          { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
          { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
          { src: "/images/wes.webp", alt: "WES", name: "WES" },
          { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
          { src: "/images/qs.webp", alt: "QS Ranking", name: "QS" },
        ]}
        internationalRecognition={[]}
        successStories={[]}
      />
    </div>


      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
  {ugCourses.map((item, index) => (
    <EnquireCard key={index} {...item} universityName="Lovely Professional University Online" />
  ))}
</div>

        </div>
      </section>

      {/* PG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
  {pgCourses.map((item, index) => (
    <EnquireCard key={index} {...item} universityName="Lovely Professional University Online" />
  ))}
</div>

        </div>
      </section>



     {/*Admission Steps*/}
     <AdmissionProcedure />


      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/lpu-certificate.webp" alt="LPU Online Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from Lovely Professional University
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Lovely Online provides comprehensive services including live classes, recorded lectures, 
              academic counseling, and career support to help students succeed in their professional journeys.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefits of LPU Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Interactive live classes with industry experts</li>
              <li>Placement assistance and career counseling</li>
              <li>UGC-recognized degrees equivalent to on-campus programs</li>
              <li>Flexible learning with 24/7 access to study materials</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our learners work at
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Top hiring partners at LPU Online
            </p>
          </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Lpu;
