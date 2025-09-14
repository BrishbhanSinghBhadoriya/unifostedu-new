'use client';
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
  FaChalkboardTeacher,
  FaLaptopCode,
  FaChartLine,
  FaQuoteLeft
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {universityName}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-[Poppins] line-clamp-2">{course}</h3>
        
        {/* Key Info Icons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg mr-2">
              <FaClock className="text-green-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-medium text-gray-900">{duration}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg mr-2">
              <FaCertificate className="text-green-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Eligibility</p>
              <p className="text-sm font-medium text-gray-900 line-clamp-1">{eligibility}</p>
            </div>
          </div>
        </div>
        
        {/* Fees */}
        <div className="mb-4 p-3 bg-green-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Total Fees</span>
            <span className="text-lg font-bold text-green-700">{fees}</span>
          </div>
        </div>

        {/* Expandable Specialization */}
        <div className="mt-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <span className="text-sm font-medium text-green-600">Specializations Available</span>
            {isExpanded ? <FaChevronUp className="text-green-600" /> : <FaChevronDown className="text-green-600" />}
          </button>
          
          {isExpanded && (
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-700">{specialization}</p>
            </div>
          )}
          
          <div className="flex gap-3">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
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
        <div className="w-12 h-0.5 bg-green-600 mr-3"></div>
        <div className="text-green-600 text-xl">
          <Icon />
        </div>
        <div className="w-12 h-0.5 bg-green-600 ml-3"></div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">{title}</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
    </motion.div>
  );
};

const Jain = () => {
    const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,95,000",
      specialization: "Online Bachelor of Business Administration, Digital Marketing, Healthcare Management, Data Science and Analytics",
      image: "/images/bba.jpeg",
    },
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,35,000 -1,65,000",
      specialization: "Computer Science and IT, Data Science and Analytics, Cyber Security, Artificial Intelligence, Cloud Computing",
      image: "/images/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees : "1,27,500",
      specialization: "Online Bachelor of Commerce, Corporate Accounting",
      image: "/images/bcom.jpeg",
    },
 
  ];

  

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,96,000 - 2,16,000 ",
      specialization: "Human Resource Management and Finance, Finance and Marketing, Marketing and Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Information Technology Management, Healthcare Management, Supply Chain, Production and Operations Management, Business Intelligence and Analytics, Entrepreneurship and Venture Creation, International Finance, Data Science and Analytics, E-commerce, Artificial Intelligence and Human Resource Management, Digital Marketing, Banking and Finance, Technology Management, General Management, AI-Driven Marketing, AI-Driven Finance, AI-Driven Business Strategy, AI-Driven Human Resource Management,",

      image: "/images/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "1,60,000",
      specialization: "DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence" , 

      image: "/images/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,10,000",
      specialization: "Accounting and Finance, Professional Accounting and Finance (Accredited by CPA, US)", 
      image: "/images/m.com.jpeg",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "190,000",
      specialization: "Jainology in Comparative Religion and Philosophy, English, Economics, Public Policy",
      image: "/images/ma1.jpeg",
    },
  ];

  
  const highlights = [
    {
      img: "/images/naac.png",
      title: "NAAC A++ Grade Accreditation",
      description: "Jain University is accredited with A++ grade by NAAC, the highest accreditation for educational institutions.",
    },
    {
      img: "/images/nirf.png",
      title: "NIRF Ranking 2023",
      description: "Ranked among top universities in India by NIRF 2023, demonstrating academic excellence.",
    },
    {
      img: "/images/qs.png",
      title: "QS World University Rankings",
      description: "Ranked among top universities in QS World University Rankings for innovation.",
    },
    {
      img: "/images/industry.png",
      title: "Industry Partnerships",
      description: "Collaborations with 300+ leading companies including Microsoft, IBM, Amazon, and Deloitte.",
    },
    {
      img: "/images/placement.png",
      title: "Placement Record",
      description: "Strong placement record with highest package of ₹ 18 LPA.",
    },
    {
      img: "/images/global.png",
      title: "Global Opportunities",
      description: "International collaborations with universities across USA, UK, Australia and more.",
    },
    {
      img: "/images/online-learning.png",
      title: "Interactive Learning Platform",
      description: "State-of-the-art LMS with live classes, recorded lectures, and interactive sessions.",
    },
    {
      img: "/images/curriculum.png",
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-teal-50 py-12 px-6 font-[Inter] border-b border-gray-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDY2MzMiIHN0cm9rZS13aWR0aD0iMC41Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxNSIvPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full w-fit shadow-sm border border-green-100">
              <FaUniversity className="text-sm" />
              <span className="text-sm font-medium">UGC Entitled Online Degrees</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-[Poppins]">
              Jain <span className="text-green-700">University Online</span>
            </h1>
            
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm">Deemed-to-be University</div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-green-100">
                <FaAward className="text-yellow-500 mr-1.5 text-sm" />
                <span className="text-gray-700 font-semibold text-sm">NAAC A++ Grade</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-green-100">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="w-3.5 h-3.5 text-yellow-400 fill-current mr-0.5"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-gray-700 font-medium text-sm">4.3/5</span>
              </div>
            </div>

            <p className="text-base font-medium text-gray-600">
              Ranked Among Top Universities in India | 100% Online Learning
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FaGlobe className="text-green-700" />, text: "Global Accreditation" },
                { icon: <FaUserTie className="text-green-700" />, text: "Industry Curriculum" },
                { icon: <FaClipboardCheck className="text-green-700" />, text: "Placement Assistance" },
                { icon: <FaRobot className="text-green-700" />, text: "Interactive Learning" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-green-100 p-1.5 rounded-full mr-2">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 text-xs">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Jain University online programs offer UGC-approved degrees with flexible learning options. 
              Our industry-aligned curriculum, experienced faculty, and strong industry connections provide 
              students with the skills needed to excel in today's competitive job market.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-700 p-3 rounded-r">
              <p className="text-green-700 text-sm flex items-start">
                <FaBookOpen className="mt-0.5 mr-2 text-green-700 flex-shrink-0" />
                <span>Among the top-ranked universities in India with A++ grade accreditation by NAAC.</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-800 transition-all flex items-center text-sm">
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
            <div className="absolute -inset-3 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl blur-md opacity-70"></div>
            
            <div className="relative rounded-xl shadow-md overflow-hidden border border-gray-200">
              <Image
                src="/images/jain.png"
                alt="Jain University campus with modern infrastructure"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              
              <div className="absolute -top-2 -right-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaGraduationCap className="text-green-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">15,000+ Students</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaBriefcase className="text-green-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">300+ Partners</span>
              </div>
              
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5 text-green-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-xs font-medium text-gray-700">Bangalore Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Accreditation Section with Enhanced Design */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
    {/* Enhanced Main Content */}
    <div className="lg:w-3/4">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
          Recognitions & Accreditations
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Jain University is recognized by various national and international bodies for its academic excellence and global standards.
        </p>
      </motion.div>
      
      {/* Stats and Value Proposition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          className="bg-green-50 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-green-700 mb-2">A++</div>
          <div className="text-gray-700">NAAC Grade</div>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-blue-700 mb-2">77</div>
          <div className="text-gray-700">NIRF Ranking</div>
        </motion.div>
        
        <motion.div 
          className="bg-purple-50 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-purple-700 mb-2">10+</div>
          <div className="text-gray-700">Accreditations</div>
        </motion.div>
      </div>
      
      {/* Accreditation Logos Grid */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        
      </motion.div>
      
      {/* Program Highlights */}
      <motion.div 
        className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 font-[Poppins] text-center">What Our Accreditations Mean</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
              <FaAward className="text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Quality Education</h4>
              <p className="text-sm opacity-90">NAAC A++ accreditation signifies the highest quality standards in education.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
              <FaGlobe className="text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Global Recognition</h4>
              <p className="text-sm opacity-90">WES recognition ensures your degree is valid for further studies abroad.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
              <FaBriefcase className="text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Industry Relevance</h4>
              <p className="text-sm opacity-90">AICTE approval ensures curriculum meets industry requirements.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
              <FaClipboardCheck className="text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Career Advancement</h4>
              <p className="text-sm opacity-90">Employers value accredited degrees, giving our graduates a competitive edge.</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Accreditation Value Explanation */}
      <motion.div 
        className="bg-gray-50 rounded-2xl p-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-[Poppins] text-center">Why Accreditation Matters</h3>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Accreditation serves as a vital quality assurance mechanism in higher education. It validates that an institution meets rigorous standards of excellence in:</p>
          
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Curriculum quality</strong> - Ensuring programs are relevant, current, and comprehensive</li>
            <li><strong>Faculty qualifications</strong> - Maintaining high standards for teaching staff expertise</li>
            <li><strong>Student support services</strong> - Providing adequate resources for student success</li>
            <li><strong>Educational outcomes</strong> - Demonstrating measurable student learning and achievement</li>
            <li><strong>Institutional integrity</strong> - Upholding ethical practices and financial stability</li>
          </ul>
          
          <p className="mt-4">Our multiple accreditations demonstrate our commitment to maintaining these high standards across all our programs and services.</p>
        </div>
      </motion.div>
      
      {/* Student Success Stories */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-[Poppins] text-center">Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">AS</span>
              </div>
              <div>
                <h4 className="font-semibold">Amit Sharma</h4>
                <p className="text-sm text-gray-500">B.Pharmacy, 2021</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The accreditations helped me secure my license and start my practice immediately after graduation."</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-semibold">PK</span>
              </div>
              <div>
                <h4 className="font-semibold">Priya Kumar</h4>
                <p className="text-sm text-gray-500">MBA, 2020</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The NAAC A++ accreditation made my degree highly valued by employers, helping me land a job at a top firm."</p>
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
            { src: "/images/naac.png", alt: "NAAC", name: "NAAC A++" },
            { src: "/images/nirf.png", alt: "NIRF", name: "NIRF Rank 77" },
            { src: "/images/wes.png", alt: "WES", name: "WES" },
            { src: "/images/aiu.png", alt: "AIU", name: "AIU" },
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-green-50 border border-gray-100"
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
        
        {/* Ranking Section */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide text-center">
            National Rankings
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
              <span className="text-sm font-medium text-gray-700">NIRF Overall</span>
              <span className="text-sm font-bold text-green-700">77</span>
            </div>
            
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
              <span className="text-sm font-medium text-gray-700">University</span>
              <span className="text-sm font-bold text-green-700">45</span>
            </div>
          </div>
        </div>
        
        {/* Trust Indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-sm font-medium text-gray-700">Trusted by 15,000+ Students</span>
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
            description="Build a strong foundation with Jain University's industry-relevant bachelor's degrees"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugCourses.map((item, index) => (
              <CourseCard
                key={index}
                course={item.course}
                duration={item.duration}
                eligibility={item.eligibility}
                fees={item.fees}
                specialization={item.specialization}
                image={item.image}
                universityName="Jain Online"
              />
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
            description="Advance your career with Jain University's specialized master's degrees"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pgCourses.map((item, index) => (
              <CourseCard
                key={index}
                course={item.course}
                duration={item.duration}
                eligibility={item.eligibility}
                fees={item.fees}
                specialization={item.specialization}
                image={item.image}
                universityName="Jain Online"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Jain University Online Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full -translate-y-36 translate-x-36 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full translate-y-32 -translate-x-32 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
              <span className="text-green-800">Jain University</span> Online Programs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the flexible and affordable online education opportunities offered by Jain University
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative mr-4 bg-green-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JU</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 font-[Poppins]">Jain University</h3>
                    <p className="text-gray-600 text-sm">Established 1990 • NAAC A++ Accredited</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Jain University is a leading educational institution in India known for its academic excellence and innovation. The university offers a diverse range of programs through its online division, providing quality education to students across the country.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-50 p-3 rounded-lg text-center border border-green-100">
                    <div className="text-xl font-bold text-green-800">15,000+</div>
                    <div className="text-xs text-green-600">Online Students</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center border border-teal-100">
                    <div className="text-xl font-bold text-teal-800">100+</div>
                    <div className="text-xs text-teal-600">Programs Offered</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-[Poppins] border-b border-gray-200 pb-3">
                  Key Features of Jain Online
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <FaUniversity className="text-green-700" />,
                      title: "UGC-DEB Approved Programs",
                      description: "All online programs are recognized by University Grants Commission"
                    },
                    {
                      icon: <FaClock className="text-green-700" />,
                      title: "Flexible Learning Schedule",
                      description: "Learn at your own pace with recorded lectures and 24/7 access"
                    },
                    {
                      icon: <FaMoneyBillWave className="text-green-700" />,
                      title: "Affordable Fee Structure",
                      description: "Competitive pricing with various payment options and EMI facilities"
                    },
                    {
                      icon: <FaUserFriends className="text-green-700" />,
                      title: "Diverse Student Community",
                      description: "Join a vibrant community of students from different backgrounds"
                    },
                    {
                      icon: <FaClipboardCheck className="text-green-700" />,
                      title: "Placement Assistance",
                      description: "Dedicated career services to help students secure employment"
                    },
                    {
                      icon: <FaBook className="text-green-700" />,
                      title: "Comprehensive Study Material",
                      description: "Well-structured curriculum with industry-relevant content"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-colors">
                      <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-[Poppins] border-b border-gray-200 pb-3">
                  Popular Online Programs
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      program: "BBA (Bachelor of Business Administration)",
                      duration: "3 Years",
                      fees: "₹1,95,000"
                    },
                    {
                      program: "BCA (Bachelor of Computer Applications)",
                      duration: "3 Years",
                      fees: "₹1,65,000"
                    },
                    {
                      program: "B.Com (Bachelor of Commerce)",
                      duration: "3 Years",
                      fees: "₹1,27,000"
                    },
                    {
                      program: "MBA (Master of Business Administration)",
                      duration: "2 Years",
                      fees: "₹2,16,000"
                    },
                    {
                      program: "MCA (Master of Computer Applications)",
                      duration: "2 Years",
                      fees: "₹1,60,000"
                    },
                    {
                      program: "M.Com (Master of Commerce)",
                      duration: "2 Years",
                      fees: "₹1,10,000"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-3 rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                      <h4 className="font-medium text-gray-900 mb-1">{item.program}</h4>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{item.duration}</span>
                        <span className="font-semibold text-green-800">{item.fees}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-800 to-teal-700 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4 font-[Poppins]">Accreditations & Recognition</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <FaAward className="text-lg" />
                    </div>
                    <span>NAAC A++ Accreditation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <FaGraduationCap className="text-lg" />
                    </div>
                    <span>UGC-DEB Recognized Programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <FaGlobe className="text-lg" />
                    </div>
                    <span>Member of Association of Indian Universities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <FaBriefcase className="text-lg" />
                    </div>
                    <span>Industry Partnerships with 300+ Companies</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-[Poppins]">
                  Want More Information About Jain University?
                </h3>
                <p className="text-gray-600 mb-4">
                  Get detailed prospectus, fee structure, and admission process for Jain Online programs
                </p>
                
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full">
                  Contact Admission Counselor
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Comprehensive information about all programs and admission requirements
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-8">
            Admission Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {[
              {
                step: "Step 1",
                description: "Fill the registration form on Jain Online portal",
              },
              {
                step: "Step 2",
                description: "Submit required documents and pay fees",
              },
              {
                step: "Step 3",
                description: "Complete verification process",
              },
              {
                step: "Step 4",
                description: "Get login credentials and start learning",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index !== 0 && (
                  <div className="absolute -left-1/2 top-5 w-full h-0.5 bg-green-900 z-0"></div>
                )}
                <div className="z-10 w-6 h-6 rounded-full border-4 border-green-900 bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-green-900 rounded-full"></div>
                </div>
                <h4 className="mt-4 font-semibold text-lg">{item.step}</h4>
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="bg-[#004d40] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/jainonlined.webp" alt="Jain University Online Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from Jain University
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Jain University Online provides comprehensive services including live classes, recorded lectures, 
              academic counseling, and career support to help students succeed in their professional journeys.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefits of Jain Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Interactive live classes with industry experts</li>
              <li>Placement assistance and career counseling</li>
              <li>UGC-recognized degrees equivalent to on-campus programs</li>
              <li>Flexible learning with 24/7 access to study materials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
<section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
        Our Top Hiring Partners
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Jain University graduates are placed in leading companies across various industries
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/company.png" alt="Company" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/company1.png" alt="Microsoft" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/company9.jpg" alt="Company 9" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/com10.png" alt="Company 10" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/companany4.png" alt="Company4" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/company6.png" alt="Company 6" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/companany5.png" alt="Companany5" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/adove.png" alt="Adove" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/3.webp" alt="Samsung3" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/4.webp" alt="Samsung4" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/5.webp" alt="Samsung5" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/6.webp" alt="Samsung6" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/7.webp" alt="Samsung7" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/8.webp" alt="Samsung8" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/9.webp" alt="Samsung9" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform h-24">
        <Image width={100} height={100} loading="lazy" src="/images/samsung.png" alt="Samsung" className="h-12 object-contain" />
      </div>
    </motion.div>

    {/* Placement Statistics */}
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-[Poppins]">Placement Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-700 mb-2">300+</div>
          <div className="text-sm text-gray-600">Companies Visited</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-700 mb-2">₹18 LPA</div>
          <div className="text-sm text-gray-600">Highest Package</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-700 mb-2">92%</div>
          <div className="text-sm text-gray-600">Placement Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-700 mb-2">1500+</div>
          <div className="text-sm text-gray-600">Students Placed</div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Our dedicated placement cell provides career counseling, resume building, interview preparation, 
          and connects students with top recruiters across industries.
        </p>
      </div>
    </motion.div>
  </div>
</section>
    </>
  );
};

export default Jain;
