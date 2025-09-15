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
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "1,80,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology (FinTech), Marketing Management, Human Resource Management",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Business Administration (BBA) Hons",
      duration: "4 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "2,40,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology (FinTech), Marketing Management, Human Resource Management",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Commerce (Professional)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "2,94,000",
      specialization: "General",
      image: "/images/bcom.jpeg",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,92,000",
      specialization: "Healthcare Management, Finance, Marketing, Operations Management, Pharmaceutical Management, Business Analytics Management, Logistics & Supply Chain Management, Data Science, Human Resource Management",
      image: "/images/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,20,000",
      specialization: "AI & ML, Cloud Computing, Cyber Security, Full Stack Development", 
      image: "/images/mca1.jpeg",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "50% in Graduation",
      fees: "2,80,000",
      specialization: "Data Science, Business Analytics", 
      image: "/images/m.com.jpeg",
    },
  ];

  const highlights = [
    {
      img: "/images/naac.png",
      title: "NAAC A++ Accreditation",
      description: "Manipal Academy of Higher Education is one of the few institutions in India with the prestigious NAAC A++ accreditation.",
    },
    {
      img: "/images/ugc.png",
      title: "UGC Recognition",
      description: "Degrees recognized by University Grants Commission (UGC), ensuring quality education and nationwide acceptance.",
    },
    {
      img: "/images/nirf.png",
      title: "NIRF Ranked",
      description: "Ranked #4 by NIRF among Indian universities, demonstrating academic excellence and institutional quality.",
    },
    {
      img: "/images/aiu.png",
      title: "AIU Recognition",
      description: "Recognized by the Association of Indian Universities (AIU), facilitating global mobility for graduates.",
    },
    {
      img: "/images/qs.png",
      title: "QS World Rankings",
      description: "Featured in QS World University Rankings, reflecting international standards of education.",
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
      description: "Join a prestigious network of alumni including notable figures like Satya Nadella and Vikas Khanna.",
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
        <title>Manipal Online Degrees | Manipal Academy of Higher Education Courses</title>
        <meta name="description" content="Explore online programs from Manipal Academy of Higher Education (MAHE). NAAC A++ accredited, UGC recognized degrees. Enquire now for BBA, BBA Hons, B.Com, MBA, MCA, M.Sc courses." />
        <meta name="keywords" content="Manipal Online, MAHE Online, BBA Online, BBA Hons Online, B.Com Online, MBA Online, MCA Online, M.Sc Online, Distance Learning India, NAAC A++, UGC Recognized Online Degree, Flexible Online Education, Online Courses MAHE" />
        <meta name="author" content="Manipal Academy of Higher Education" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Manipal Online Degrees | Manipal Academy of Higher Education Courses" />
        <meta property="og:description" content="Explore undergraduate and postgraduate online programs from MAHE, NAAC A++ accredited. Flexible and career-focused education." />
        <meta property="og:image" content="/images/mahe-uni.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal Online Degrees | Manipal Academy of Higher Education Courses" />
        <meta name="twitter:description" content="Explore online undergraduate and postgraduate programs from MAHE, NAAC A++ accredited. Flexible and career-focused education." />
        <meta name="twitter:image" content="/images/mahe-uni.webp" />
      </Head>
      
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
              <span className="text-sm font-medium">NAAC A++ Accredited</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-[Poppins]">
              Manipal <span className="text-blue-600">University Online</span>
            </h1>
            
            {/* Location and Basic Info */}
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-sm">Manipal, Karnataka, India</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm">Private University</div>
            </div>
            
            {/* NIRF Ranking and Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
                <FaAward className="text-yellow-500 mr-1.5 text-sm" />
                <span className="text-gray-700 font-semibold text-sm">NIRF Rank: 4</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="w-3.5 h-3.5 text-yellow-400 fill-current mr-0.5"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-gray-700 font-medium text-sm">4.7/5</span>
              </div>
            </div>

            <p className="text-base font-medium text-gray-600">
              India's Premier NAAC A++ Accredited University | 100% Online Learning
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
              Manipal Academy of Higher Education (MAHE) is synonymous with excellence in higher education. 
              MAHE is one of India's leading academic and research institutions with a NAAC A++ rating and 
              prestigious Institution of Eminence (IoE) recognition. The institution has been offering 
              world-class education across diverse streams since 1953.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
              <p className="text-blue-700 text-sm flex items-start">
                <FaBookOpen className="mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                <span>Notable alumni include Satya Nadella (Microsoft CEO), Vikas Khanna (Celebrity Chef), and Dr. Devi Prasad Shetty (Renowned Cardiac Surgeon).</span>
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
                src="/images/mahe-uni.webp"
                alt="Manipal Academy of Higher Education campus"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              
              {/* Floating Badges */}
              <div className="absolute -top-2 -right-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaGraduationCap className="text-blue-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">30K+ Students</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaBriefcase className="text-blue-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">300+ Partners</span>
              </div>
              
              {/* Location Badge */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-xs font-medium text-gray-700">Manipal Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide.
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
                <div className="text-4xl font-bold text-blue-700 mb-2">90%</div>
                <div className="text-gray-700">Employment Rate Within 6 Months</div>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
                <div className="text-gray-700">Countries with Alumni Network</div>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-700 mb-2">65+</div>
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
                    <h4 className="font-semibold text-lg mb-1">Global Mobility</h4>
                    <p className="text-sm opacity-90">Our degrees are recognized internationally, enabling you to pursue opportunities worldwide.</p>
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
                    <p className="text-sm opacity-90">Rigorous accreditation processes ensure our programs meet the highest educational standards.</p>
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
                    <p className="text-sm opacity-90">Our partnerships with leading organizations provide valuable networking and career opportunities.</p>
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
                  { src: "/images/naac.png", alt: "NAAC", name: "NAAC A++" },
                  { src: "/images/nirf.png", alt: "NIRF", name: "NIRF" },
                  { src: "/images/aiu.png", alt: "AIU", name: "AIU" },
                  { src: "/images/acu.png", alt: "ACU", name: "ACU" },
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
                    { src: "/images/nba.png", alt: "NBA Accreditation", name: "NBA" },
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
                  <span className="text-sm font-medium text-gray-700">Trusted by 30,000+ Students</span>
                </div>
                <p className="text-xs text-gray-500">Our accreditations ensure quality education recognized globally</p>
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
          </div>
        </div>
      </section>

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
              { icon: <FaUniversity className="text-2xl" />, title: "Prestigious Alumni Network", text: "Join notable alumni like Satya Nadella and Vikas Khanna." },
              { icon: <FaUserFriends className="text-2xl" />, title: "Global Community", text: "Connect with learners from 50+ countries." },
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
              <div className="text-2xl font-bold text-white">30K+</div>
              <div className="text-blue-200 text-xs">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">65+</div>
              <div className="text-blue-200 text-xs">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">90%</div>
              <div className="text-blue-200 text-xs">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">300+</div>
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
                src="/images/mahe-certi.webp" 
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
        </div>
      </section>
    </>
  );
};

export default Manipal;