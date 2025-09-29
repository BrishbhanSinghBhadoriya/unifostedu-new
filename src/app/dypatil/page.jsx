'use client';
import React, { useState } from 'react';
import {
  FaBookOpen,
  FaUserTie,
  FaBriefcase,
  FaClipboardCheck,
  FaGraduationCap,
  FaAward,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaUniversity,
  FaRobot,
  FaBook,
  FaUserFriends,
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
<<<<<<< HEAD

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
              <FaBookOpen className="text-blue-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-medium text-gray-900">{duration}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-2">
              <FaClipboardCheck className="text-blue-600 text-sm" />
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
            <span className="text-lg font-bold text-blue-700">{fees}</span>
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
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
            Enquire Now
          </button>
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

=======
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
const Dypatil = () => {
    const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fees: "₹1,45,400",
      eligibility: "10+2 Pass",
      specialization: "IT & System Management, International Business Management, Retail Management, Banking, Financial Services and Insurance Management, Shipping & Logistics Management, Marketing Management, Human Resource Management (HRM), Finance Management, E-commerce Management ",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in Dy Patil ",
    },
  
   
  ];

  const pgCourses = [
   
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹1,40,000",
      eligibility: "Graduation with 50% Marks",
       specialization: "General",
      image: "/images/mca1.webp",
      alt: "Master of Computer Applications (MCA) in Dy Patil ",
    },
    

    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,89,400",
      specialization: "Marketing Management, Human Resource Management, Finance Management, IT Management, Project Management, Operations Management, Hospital Administration & Healthcare Management, International Business Management, FinTech Management, Business Analytics Management, Artificial Intelligence & Machine Learning Management, Logistics, Materials & Supply Chain Management, Blockchain Management, Digital Marketing Management, Agri-Business Management",

      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in Dy Patil ",
    },
  ];


  const highlights = [
    {
      icon: <FaUniversity />,
      title: "UGC-Approved & Accredited",
      description: "Recognized by UGC and accredited by NAAC A++."
    },
    {
      icon: <FaUserTie />,
      title: "Experienced Faculty",
      description: "Learn from top educators and industry experts."
    },
    {
      icon: <FaBriefcase />,
      title: "Career Services",
      description: "Internships, workshops & job readiness programs."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Placement Support",
      description: "Placement help for your dream job."
    },
    {
      icon: <FaGlobe />,
      title: "Global Recognition",
      description: "Degrees recognized internationally for higher studies."
    },
    {
      icon: <FaRobot />,
      title: "Tech-Enabled Learning",
      description: "Advanced LMS platform for seamless online education."
    }
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
        <title>DY Patil University Online | UGC-Approved Online Degrees</title>
        <meta 
          name="description" 
          content="DY Patil University Online offers UGC-approved online programs like BBA, MCA, and MBA with NAAC A++ accreditation. Flexible learning with career support." 
        />
        <meta 
          name="keywords" 
          content="DY Patil University Online, Online BBA, Online MCA, Online MBA, UGC approved university, NAAC A++ accreditation, Online degrees India" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/dypatil/" />
      </Head>
<<<<<<< HEAD
      
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-6 font-[Inter] border-b border-gray-100">
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
              Dr. DY Patil <span className="text-blue-600">University Online</span>
            </h1>
            
            {/* Location and Basic Info */}
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-sm">Pune, Maharashtra, India</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm">Private University</div>
            </div>
            
            {/* NAAC Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
                <FaAward className="text-yellow-500 mr-1.5 text-sm" />
                <span className="text-gray-700 font-semibold text-sm">NAAC A++ Accredited</span>
              </div>
            </div>

            <p className="text-base font-medium text-gray-600">
              Premier Private University | 100% Online Learning | Industry-Relevant Curriculum
            </p>
            
            {/* Key Highlights with Icons */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
                { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
                { icon: <FaClipboardCheck className="text-blue-600" />, text: "Placement Support" },
                { icon: <FaRobot className="text-blue-600" />, text: "Tech-Enabled Learning" },
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
              Dr. DY Patil University offers flexible online degrees in collaboration with industry leaders, aimed at career growth for students and professionals alike. Join to access expert faculty and 24/7 learning support. Our online platform provides flexibility for working professionals and students to learn at their own pace while receiving quality education from experienced faculty.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
              <p className="text-blue-700 text-sm flex items-start">
                <FaBookOpen className="mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                <span>UGC-recognized online degree programs with NAAC A++ accreditation for quality education.</span>
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
                src="/images/dypatil.png"
                alt="Dr. DY Patil University Online Campus"
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
                <span className="text-xs font-medium text-gray-700">Pune Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* Accreditation Section for DY Patil University Online */}
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
          Education with National Recognition
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our accredited programs meet the highest standards of quality education and are recognized across India.
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
          <div className="text-4xl font-bold text-green-700 mb-2">25+</div>
          <div className="text-gray-700">Years of Educational Excellence</div>
        </motion.div>
        
        <motion.div 
          className="bg-purple-50 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-purple-700 mb-2">15+</div>
          <div className="text-gray-700">Industry Partnerships</div>
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
              <h4 className="font-semibold text-lg mb-1">National Recognition</h4>
              <p className="text-sm opacity-90">Our degrees are recognized across India, enabling you to pursue opportunities nationwide.</p>
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
          
          <p className="mt-4">Our accreditations demonstrate our commitment to maintaining these high standards across all our programs and services.</p>
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-semibold">PS</span>
              </div>
              <div>
                <h4 className="font-semibold">Priya Singh</h4>
                <p className="text-sm text-gray-500">MBA Graduate, 2022</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The industry-relevant curriculum and UGC recognition of my degree helped me secure a management position at a leading healthcare company."</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">RK</span>
              </div>
              <div>
                <h4 className="font-semibold">Rahul Kumar</h4>
                <p className="text-sm text-gray-500">BCA Graduate, 2021</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The flexibility of online learning combined with DY Patil's strong industry connections helped me transition into a software development role while continuing my studies."</p>
          </div>
        </div>
      </motion.div>
=======
    <HeroSection
  universityName="DY Patil University Online"
  location="Pune, Maharashtra, India"
  type="Private University"
  nirfRank="100+" 
  rating="4.3" 
  description="NAAC A++ Accredited | UGC & AICTE Approved | Flexible Online Degrees"
  description2={`
    DY Patil University Online offers flexible online degrees in collaboration with Harvard, aimed at career growth 
    for students and professionals alike. With expert faculty and 24/7 learning support, learners gain both 
    academic knowledge and practical skills. 

    DY Patil University Online is recognized by the University Grants Commission (UGC) and the All India Council 
    for Technical Education (AICTE), and accredited by NAAC with an A++ grade. It offers a range of undergraduate 
    and postgraduate programs in Business Administration, Computer Applications, and more. 

    DY Patil University Online provide online platform ensures flexibility for working professionals and students to learn at their own pace 
    while receiving quality education from experienced faculty.
  `}
  badgeText="UGC | AICTE | NAAC A++ Recognized"
  imgSrc="/images/dypatil.webp"
  imgAlt="DY Patil University Online Campus"
  students="20K+" 
  partners="100+" 
  campus="Pune Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Learning" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career Growth" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC & AICTE Recognized" },
  ]}
/>


<div>
  <AccreditationSection
    title="Why Choose DY Patil Online?"
    description="Recognized by UGC, NAAC A+, and AICTE. DY Patil offers flexible online learning with expert faculty, career services, and placement support."
    stats={[]} // Currently no numerical stats
    benefits={[
      {
        title: "UGC-Approved & Accredited",
        description: "Recognized by UGC and accredited by NAAC A+.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                  </svg>`,
      },
      {
        title: "Experienced Faculty",
        description: "Learn from top educators and industry experts.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>`,
      },
      {
        title: "Career Services",
        description: "Internships, workshops & job readiness programs.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                  </svg>`,
      },
      {
        title: "Placement Support",
        description: "Placement help for your dream job.",
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
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>

      {/*  Courses */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">UG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start content-start">
                          {ugCourses.map((item, index) => (
                <EnquireCard key={index} {...item} universityName="Dr. DY Patil Online" />
              ))}
          </div>
        </div>
      </section>

      {/*  Certificate */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">PG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start content-start">
                          {pgCourses.map((item, index) => (
                <EnquireCard key={index} {...item} universityName="Dr. DY Patil Online" />
              ))}
          </div>
        </div>
      </section>


      {/* Admission Steps */}
     <AdmissionProcedure />

    

      <section className="bg-[#003366] py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Certificate Image */}
    <div className="flex-1">
      <Image
        src="/images/dycertificates.webp"
        alt="Dr. DY Patil"width={100} height={100} loading="lazy"
        className="w-full max-w-md mx-auto rounded shadow-lg"
      />
    </div>

      {/* Text Content */}
    <div className="flex-1 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Online Degree from Dr. DY Patil Online University
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Dr. DY Patil Online provides a great opportunity to earn a degree from a prestigious institution. The online programs are designed to be flexible and accessible, allowing students to balance their studies with work and personal commitments.
        The degrees offered are equivalent to on-campus programs and are recognized globally. With a focus on quality education, Dr. DY Patil Online ensures that students receive the same level of academic rigor and support as traditional students.
      </p>

      <h3 className="text-xl font-semibold mb-2">Benefits of Dr. DY Patil Online</h3>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Regular Live classes that help students to learn with a flexible time.</li>
        <li>Career Assistance & Exclusive Virtual Job Fairs</li>
        <li>Equivalent to Dr. DY Patil (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
        <li>Hands-on & Immersive Learning through world-Class Experince</li>
      </ul>
>>>>>>> 886539d0e17c1f18cf25e9983d345d4bee432e28
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
            { src: "/images/naac.png", alt: "NAAC", name: "NAAC 'A++' Grade" },
            { src: "/images/wes.png", alt: "WES", name: "WES" },
            { src: "/images/nirf.png", alt: "NIRF", name: "NIRF" },
            
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
        
        {/* State Government Recognition */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide text-center">
            Government Recognition
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {[
              { src: "/images/punegovt.png", alt: "Government of Maharashtra", name: "Govt. of Maharashtra" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                <div className="h-8 w-8 relative mb-1">
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
            description="Comprehensive bachelor's degrees designed to build strong foundations for your career"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ugCourses.map((item, index) => (
              <CourseCard key={index} {...item} universityName="Amity University Online" />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pgCourses.map((item, index) => (
              <CourseCard key={index} {...item} universityName="Amity University Online" />
            ))}
          </div>
        </div>
      </section>


{/* Why Choose Dy Patil University Online */}
<section className="py-16 bg-white px-6">
  <div className="max-w-7xl mx-auto">
    <motion.div 
      className="text-center mb-16"
      {...fadeIn}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Why Choose DY Patil Online University?</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">Experience quality education with industry-relevant curriculum and flexible learning options</p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      variants={staggerChildren}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {[
        { icon: <FaBookOpen className="text-2xl" />, title: "Flexible Learning", text: "Learn at your own pace with recorded lectures and live sessions." },
        { icon: <FaUserTie className="text-2xl" />, title: "Industry Expert Faculty", text: "Learn from experienced professionals and academic experts." },
        { icon: <FaRobot className="text-2xl" />, title: "Advanced LMS Platform", text: "User-friendly learning management system for seamless education." },
        { icon: <FaBriefcase className="text-2xl" />, title: "Career Support", text: "Dedicated placement cell and career guidance services." },
        { icon: <FaBook className="text-2xl" />, title: "Comprehensive Study Material", text: "Well-structured e-learning content and resources." },
        { icon: <FaUniversity className="text-2xl" />, title: "University Recognition", text: "UGC-entitled degrees with national recognition." },
        { icon: <FaUserFriends className="text-2xl" />, title: "Peer Networking", text: "Connect with professionals across industries." },
        { icon: <FaClipboardCheck className="text-2xl" />, title: "Industry Alignment", text: "Curriculum designed to meet current industry requirements." },
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

{/* Dy Patil University Advantages Section */}
<section className="py-12 relative overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-900">
  {/* Subtle animated elements */}
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
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Poppins]">DY Patil Online Advantages</h2>
      <p className="text-blue-100 max-w-2xl mx-auto">
        Discover what makes DY Patil Online a preferred choice for distance education
      </p>
    </motion.div>

    {/* Dy Patil specific highlights */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[
        {
          img: "/images/ugc.png",
          title: "UGC Entitled Degrees",
          description: "All our programs are UGC-recognized, ensuring your degree has national validity and acceptance."
        },
        {
          img: "/images/naac.png",
          title: "NAAC 'A' Grade Accreditation",
          description: "Recognized with NAAC 'A' grade, reflecting our commitment to quality education standards."
        },
        {
          img: "/images/flexible-learning.png",
          title: "Flexible Learning Schedule",
          description: "Balance your education with personal and professional commitments through our flexible schedule."
        },
        {
          img: "/images/industry-curriculum.png",
          title: "Industry-Relevant Curriculum",
          description: "Curriculum designed in consultation with industry experts to ensure job readiness."
        },
        {
          img: "/images/digital-library.png",
          title: "Digital Library Access",
          description: "24/7 access to extensive digital library resources and research materials."
        },
        {
          img: "/images/placement-support.png",
          title: "Placement Assistance",
          description: "Comprehensive placement support with access to our corporate network and job portal."
        },
        {
          img: "/images/student-support.png",
          title: "Dedicated Student Support",
          description: "Round-the-clock academic and administrative support for all our students."
        },
        {
          img: "/images/affordable-education.png",
          title: "Affordable Education",
          description: "Quality education at competitive fees with flexible payment options available."
        },
        {
          img: "/images/interactive-learning.png",
          title: "Interactive Learning",
          description: "Live sessions, discussion forums, and interactive assignments for engaging learning."
        },
        {
          img: "/images/assessment.png",
          title: "Continuous Assessment",
          description: "Regular assessments and feedback to track your progress and understanding."
        },
        {
          img: "/images/alumni-network.png",
          title: "Strong Alumni Network",
          description: "Join our extensive alumni network for networking and career opportunities."
        },
        {
          img: "/images/technical-support.png",
          title: "Technical Support",
          description: "Comprehensive technical support for uninterrupted learning experience."
        }
      ].map((item, idx) => (
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

    {/* Stats bar for Dy Patil */}
    <motion.div 
      className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-white">25+</div>
        <div className="text-blue-200 text-xs">Years of Excellence</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">50+</div>
        <div className="text-blue-200 text-xs">Programs</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">90%</div>
        <div className="text-blue-200 text-xs">Satisfaction Rate</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">15K+</div>
        <div className="text-blue-200 text-xs">Students</div>
      </div>
    </motion.div>
  </div>
</section>

{/* Certificate + Benefits for Dy Patil */}
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
          src="/images/dycertificates.webp" 
          alt="DY Patil University Certificate" 
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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[Poppins]">Nationally Recognized Online Degree</h2>
      <p className="mb-6 text-gray-600 text-lg">DY Patil University online programs offer flexible learning, industry-relevant curriculum, and comprehensive support for working professionals and students.</p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Benefits of Online DY Patil University</h3>
      <ul className="space-y-3">
        {[
          "UGC-recognized degrees with national acceptance",
          "Industry-relevant curriculum designed by experts",
          "Flexible learning schedule for working professionals",
          "Comprehensive digital learning resources",
          "Regular live sessions with experienced faculty",
          "Dedicated placement and career support",
          "Access to digital library and learning materials",
          "Strong alumni network and industry connections"
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

       


      {/* Hiring Partners Section */}

      
<section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">
        Our learners work at
      </h2>
      <p className="text-xl text-gray-600 mt-2">
        Top hiring partners at Jain Online
      </p>
    </div>

    {/* Logo Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/3.webp" width={100} height={100} loading="lazy"alt="Company" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/4.webp" width={100} height={100} loading="lazy"alt="Microsoft" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/5.webp" width={100} height={100} loading="lazy"alt="Company 9" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/6.webp" width={100} height={100} loading="lazy"alt="Company 10" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/7.webp" width={100} height={100} loading="lazy"alt="Company4" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/8.webp" width={100} height={100} loading="lazy" alt="Company 6" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/9.webp" width={100} height={100} loading="lazy"alt="Companany5" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/company1.webp" width={100} height={100} loading="lazy"alt="Adove" className="h-12 object-contain" />
      </div>
<div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/company6.webp" width={100} height={100} loading="lazy"alt="Samsung4" className="h-12 object-contain" />
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/nestle.webp" width={100} height={100} loading="lazy"alt="Samsung8" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/microsoft.webp"width={100} height={100} loading="lazy" alt="Samsung9" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/icici.webp" width={100} height={100} loading="lazy"alt="Samsung" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/hp.webp" width={100} height={100} loading="lazy"alt="Samsung2" className="h-12 object-contain" />
      </div>
      \
      {/* Add more cards here as needed */}
    </div>
  </div>
</section>
    </>
  );
};


export default Dypatil;
