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
  FaChartLine
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import AdmissionProcess from '@/components/AdmissionProcess';

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

const Chandigarh = () => {
   const ugCourses = [
  {
    course: "Bachelor of Arts - Journalism & Mass Communication (BA-JMC)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,66,668/-",
    specialization: "Journalism, Media Studies",
    image: "/images/ba-jmc.webp",
    alt: "BA-JMC in Chandigarh University Online",
  },
  {
    course: "Bachelor of Business Administration - Business Analytics (BBA - KPMG)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,60,000/-",
    specialization: "Business Analytics with KPMG,",
    image: "/images/bba.webp",
    alt: "BBA - KPMG in Chandigarh University Online", 
  },
  {
    course: "Bachelor of Business Administration (BBA)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,68,000/-",
    specialization: "Marketing, HR, Enterpreneurship, Digital Marketing, Fin-Tech,etc",
    image: "/images/bba.webp",
    alt: "BBA in Chandigarh University Online",
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
    fees: "1,70,000/-",
    specialization: "IT & Systems",
    image: "/images/bca.webp",
    alt: "BCA in Chandigarh University Online",
  },
  
];


  const pgCourses = [
  {
    course: "Master of Business Administration - Business Analytics (MBA - KPMG)",
    duration: "2 Years(4 Semesters)",
    eligibility: "Bachelor degree in any discipline from recognized University/ Institution. Graduates of recognized professional programs like CA/ ICWA etc. are also eligible to apply.",
    fees: "2,00,000/-",
    specialization: "Business Analytics with KPMG",
    image: "/images/mba.webp",
    alt: "MBA - KPMG in Chandigarh University Online",
  },
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Graduation",
    fees: "2,10,668/-",
    specialization: "Finance, Marketing, HR, IT, HR, Operations, International Business, Digital Marketing, Fin-Tech, etc.",
    image: "/images/bba.webp",
    alt: "MBA - KPMG in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications - AI & ML",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) .",
    fees: "1,40,000/-",
    specialization: "Artificial Intelligence, Machine Learning, Data Analytics, Cloud Computing, Full Stack Development",
    image: "/images/mca.webp",
    alt: "M.C.A. AI & ML in Chandigarh University Online",
  },
  {
    course: "Master of Science - Data Science",
    duration: "2 Years",
    eligibility: "Candidate must have completed bachelor's degree in B.A/ BCA/ B.Sc. (Statistics or Mathematics or Computer Science) / B.E/ B.Tech .",
    fees: "1,46,668/-",
    specialization: "Full Stack, Web Development",
    image: "/images/mca.webp",
    alt: "M.Sc. Data Science in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications - Cloud Computing (AWS Academy)",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree.",
    fees: "1,40,000/-",
    specialization: "Cloud Infrastructure, AWS, Data Analytics, DevOps, Full Stack Development",
    image: "/images/mca.webp",
    alt: "M.C.A. Cloud Computing  in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications - Data Analytics",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree (e.g.: B.E/ B.Tech / B.Sc. / B.Com. / B.A/ B.Voc) with Mathematics, Business Mathematics, Programming or Statistics at 10+2 level or at Graduation level.",
    fees: "1,40,000/-",
    specialization: "Big Data, Data Mining",
    image: "/images/mca1.webp",
    alt: "M.C.A. Data Analytics  in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree",
    fees: "1,40,000/-",
    specialization: "General IT, Software Development",
    image: "/images/mca.webp",
    alt: "M.C.A in Chandigarh University Online",
  },
  {
    course: "Master of Science (Mathematics)",
    duration: "2 Years",
    eligibility: "Bachelor's Degree with Mathematics as compulsory subject from a recognized Board / University.",
    fees: "1,00,000/-",
    specialization: "Pure Mathematics, Applied Mathematics",
    image: "/images/mba.webp",
    alt: "M.Sc in Chandigarh University Online",
  },
  {
    course: "Master of Arts (MA)",
    duration: "2 Years",
    eligibility: "Graduation in any discipline or equivalemnt, preferably with English as a subject OR Bachelor's of Arts (Hons.) ",
    fees: "1,00,000/-",
    specialization: "Psychology, English, Economics",
    image: "/images/ma1.webp",
    alt: "MA in Chandigarh University Online",
  },
];
  const highlights = [
    {
      img: "/images/naac.png",
      title: "NAAC A+ Grade Accreditation",
      description: "Chandigarh University is accredited with A+ grade by NAAC, ensuring high-quality education standards.",
    },
    {
      img: "/images/nirf.png",
      title: "NIRF Ranking 2023",
      description: "Ranked 28th among universities in India by NIRF 2023, demonstrating academic excellence.",
    },
    {
      img: "/images/qs.png",
      title: "QS World University Rankings",
      description: "Ranked among top universities in QS World University Rankings and QS Asia University Rankings.",
    },
    {
      img: "/images/aricent.png",
      title: "Industry Partnerships",
      description: "Collaborations with 300+ leading companies including Microsoft, IBM, SAP, and Amazon.",
    },
    {
      img: "/images/placement.png",
      title: "Placement Record",
      description: "900+ companies visited campus with highest package of ₹ 1.7 Crore per annum.",
    },
    {
      img: "/images/global.png",
      title: "Global Opportunities",
      description: "MoUs with 300+ foreign universities for student exchange and collaborative programs.",
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6 font-[Inter] border-b border-gray-100">
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
            <div className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full w-fit shadow-sm border border-blue-100">
              <FaUniversity className="text-sm" />
              <span className="text-sm font-medium">UGC Entitled Online Degrees</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-[Poppins]">
              Chandigarh <span className="text-blue-600">University Online</span>
            </h1>
            
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-sm">Mohali, Punjab, India</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm">Private University</div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
                <FaAward className="text-yellow-500 mr-1.5 text-sm" />
                <span className="text-gray-700 font-semibold text-sm">NAAC A+ Grade</span>
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
              Punjab's Premier Private University | 100% Online Learning
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FaGlobe className="text-blue-600" />, text: "Global Accreditation" },
                { icon: <FaUserTie className="text-blue-600" />, text: "Industry Curriculum" },
                { icon: <FaClipboardCheck className="text-blue-600" />, text: "Placement Assistance" },
                { icon: <FaRobot className="text-blue-600" />, text: "Interactive Learning" },
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
              Chandigarh University online programs offer UGC-approved degrees with flexible learning options. 
              Our industry-aligned curriculum, experienced faculty, and strong industry connections provide 
              students with the skills needed to excel in today's competitive job market.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
              <p className="text-blue-700 text-sm flex items-start">
                <FaBookOpen className="mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                <span>Among the top-ranked private universities in India with A+ grade accreditation by NAAC.</span>
              </p>
            </div>
            
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
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl blur-md opacity-70"></div>
            
            <div className="relative rounded-xl shadow-md overflow-hidden border border-gray-200">
              <Image
                src="/images/chandigarh.jpg"
                alt="Chandigarh University campus with modern infrastructure"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              
              <div className="absolute -top-2 -right-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaGraduationCap className="text-blue-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">1L+ Students</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
                <FaBriefcase className="text-blue-600 text-xl mb-1" />
                <span className="text-xs font-bold text-gray-800 text-center">900+ Partners</span>
              </div>
              
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-xs font-medium text-gray-700">Mohali Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Accreditation Section - Redesigned */}
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
          Chandigarh University is recognized by various national and international bodies for its academic excellence.
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
          <div className="text-4xl font-bold text-blue-700 mb-2">36</div>
          <div className="text-gray-700">NIRF Ranking</div>
        </motion.div>
        
        <motion.div 
          className="bg-green-50 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-green-700 mb-2">A+</div>
          <div className="text-gray-700">NAAC Grade</div>
        </motion.div>
        
        <motion.div 
          className="bg-purple-50 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-purple-700 mb-2">5+</div>
          <div className="text-gray-700">Professional Accreditations</div>
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
              <p className="text-sm opacity-90">Our accreditations from UGC, NAAC, and AICTE ensure our programs meet national quality standards.</p>
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
              <h4 className="font-semibold text-lg mb-1">Professional Recognition</h4>
              <p className="text-sm opacity-90">Accreditations from PCI and other professional bodies validate our specialized programs.</p>
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-semibold">AS</span>
              </div>
              <div>
                <h4 className="font-semibold">Amit Sharma</h4>
                <p className="text-sm text-gray-500">B.Pharmacy, 2021</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The PCI accreditation of the Pharmacy program helped me secure my license and start my practice immediately after graduation."</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">PK</span>
              </div>
              <div>
                <h4 className="font-semibold">Priya Kumar</h4>
                <p className="text-sm text-gray-500">MBA, 2020</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The AICTE approval and NAAC A+ accreditation made my degree highly valued by employers, helping me land a job at a top firm."</p>
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
            { src: "/images/naac.png", alt: "NAAC", name: "NAAC A+" },
            { src: "/images/nirf.png", alt: "NIRF", name: "NIRF Rank 36" },
            { src: "/images/aicte.png", alt: "AICTE", name: "AICTE" },
            
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
        
        {/* Ranking Section */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide text-center">
            National Rankings
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
              <span className="text-sm font-medium text-gray-700">NIRF Overall</span>
              <span className="text-sm font-bold text-blue-700">36</span>
            </div>
            
            
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
              <span className="text-sm font-medium text-gray-700">Pharmacy</span>
              <span className="text-sm font-bold text-blue-700">32</span>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ugCourses.map((item, index) => (
              <CourseCard key={index} {...item} universityName="Chandigarh University Online" />
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
              <CourseCard key={index} {...item} universityName="Chandigarh University Online" />
            ))}
          </div>
        </div>
      </section>

      
    

      {/* Why Choose CU Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Why Choose Chandigarh University Online?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Experience the perfect blend of academic excellence and industry relevance</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <FaChalkboardTeacher className="text-2xl" />, title: "Expert Faculty", text: "Learn from industry veterans and academic experts with years of experience." },
              { icon: <FaLaptopCode className="text-2xl" />, title: "Advanced LMS", text: "Interactive learning management system with live and recorded classes." },
              { icon: <FaBriefcase className="text-2xl" />, title: "Industry Connect", text: "Curriculum designed in consultation with industry leaders." },
              { icon: <FaClipboardCheck className="text-2xl" />, title: "Placement Support", text: "Dedicated placement cell with 900+ recruiting partners." },
              { icon: <FaGlobe className="text-2xl" />, title: "Global Recognition", text: "Degrees recognized internationally for further studies and employment." },
              { icon: <FaUserFriends className="text-2xl" />, title: "Peer Networking", text: "Connect with students from diverse backgrounds and industries." },
              { icon: <FaChartLine className="text-2xl" />, title: "Career Growth", text: "Programs designed to accelerate your career progression." },
              { icon: <FaBook className="text-2xl" />, title: "Comprehensive Study Material", text: "Access to e-books, research papers, and case studies." },
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
      <section className="py-12 relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Poppins]">Chandigarh University Advantages</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Discover what makes Chandigarh University a leader in quality education
            </p>
          </motion.div>

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
                
                <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-blue-100 text-xs leading-tight line-clamp-3">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1L+</div>
              <div className="text-blue-200 text-xs">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-blue-200 text-xs">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">96%</div>
              <div className="text-blue-200 text-xs">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">900+</div>
              <div className="text-blue-200 text-xs">Recruiters</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <AdmissionProcess />

      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image src="/images/certificate-cu.webp" alt="Chandigarh University Certificate" width={100} height={100} loading="lazy" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Earn Your Online Degree from Chandigarh University</h2>
            <p className="mb-6 text-lg">Chandigarh University Online Enhance your career with daily live classes, skill-based training, and global recognition.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of Chandigarh University Online</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Interactive Live & Recorded Sessions</li>
              <li>Personalized Career Support</li>
              <li>Global Exposure & Alumni Network</li>
              <li>Affordable, Flexible & Recognized Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our learners work at</h2>
          <p className="text-xl text-gray-600">Trusted by leading companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/microsoft.webp", "/images/ibm.webp", "/images/flipkart.webp", "/images/deloitte.webp", "/images/amazon.webp", "/images/sap.webp", "/images/hp.webp", "/images/samsung.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src={src} alt="Company" width={100} height={100} loading="lazy" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Chandigarh;
