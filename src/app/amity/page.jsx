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
  FaCertificate
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

const Amity = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,65,000- ₹2,25,000",
      specialization: "BBA (General, Data Analytics, Travel And Tourism Management, Professional Certificate in Business Analytics)",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000 - ₹2,25,000",
      specialization: "BCA (General, Cloud and Security, Software Engineering, Data Science, Data Engineering(HCL Tech), Data Analytics, Software Engineering(HCL Tech))",
      image: "/images/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹2,50,000",
      specialization: "B.Com (General, Hons, International Finance & Accounting)",
      image: "/images/bcom.jpeg",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹1,70,000",
      specialization: "BA (General, Journalism and Mass Communication, Native Languages(Kannada,Malayalam, Tamil, Telugu), Psychology, English, Sociology, Political Science, Economics)",
      image: "/images/ba.jpeg",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,99,000 - ₹2,99,000",
      specialization: "MBA (General, Information Technology Management, Dual Specialization, Human Resource Analytics, Data Science, Business Analytics, International Business Management, Digital Entrepreneurship, Digital Marketing Management, Entrepreneurship & Leadership Management, Finance & Accounting Management, Hospitality Management, Global Finance Market, Insurance Management, Marketing & Sales Management, Petroleum & Natural Gas, Production and Operations Management, Retail Management)",
      image: "/images/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "₹170,000- ₹2,50,000",
      specialization: "MCA (General, Cyber Security, Blockchain Technology, Machine Learning and Artificial Intelligence, Augmented Reality and Virtual Reality, Software Engineering)",
      image: "/images/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹1,20,000",
      specialization: "General, Financial Management, Financial Technology",
      image: "/images/m.com.webp",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,30,000 - ₹2,50,000",
      specialization: "MA (Psychology, Journalism and Mass Communication, Public Policy & Governance, English, Sociology)",
      image: "/images/ma1.jpeg",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,50,000",
      specialization: "Data Science",
      image: "/images/m.com.webp",
    },
  ];

  const ug_pgCourses = [
    {
      course: "BBA + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,45,800",
      specialization: "BBA + MBA",
      image: "/images/mba.webp",
    },
    {
      course: "BCA + MCA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,04,000",
      specialization: "BCA + MCA",
      image: "/images/mca1.jpeg",
    },
    {
      course: "B.Com + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹2,83,100 - ₹3,05,000",
      specialization: "B.Com + MBA",
      image: "/images/m.com.webp",
    },
  ];


  const highlights = [
    {
      img: "/images/wasc.webp",
      title: "WASC Accreditation (USA)",
      description: "Amity Online is India's only university accredited by the Western Association of Schools and Colleges — a distinguished recognition of global academic excellence.",
    },
    {
      img: "/images/wes.webp",
      title: "WES Recognition",
      description: "Degrees recognised by World Education Services (WES) Canada & USA, enabling smoother pathways for higher studies and global career mobility.",
    },
    {
      img: "/images/qs.webp",
      title: "QS Ranked Online MBA",
      description: "Amity Online offers India's only Online MBA ranked by QS under Asia Pacific Top 10 - a global recognition for academic strength, learner outcomes, and digital innovation.",
    },
    {
      img: "/images/qaa.webp",
      title: "QAA (UK) Accreditation",
      description: "Accredited by the UK's Quality Assurance Agency (QAA), assuring students of globally benchmarked academic quality.",
    },
    {
      img: "/images/the.webp",
      title: "Times Higher Education Employability Rankings",
      description: "Amity University is ranked among the best globally for graduate employability and employer reputation by Times Higher Education.",
    },
    {
      img: "/images/pan-india.webp",
      title: "Pan-India Campus Access & Offline Events",
      description: "Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation - blending digital convenience with real-world connection.",
    },
    {
      img: "/images/amigo.webp",
      title: "Amigo: Learning On-the-Go",
      description: "The Amigo app makes learning seamless and mobile — attend live classes, track progress, access materials, and more on your schedule.",
    },
    {
      img: "/images/ai-tutor.webp",
      title: "Prof. Ami: Your AI-Powered Personal Tutor",
      description: "Meet Prof. Ami — your always-on, AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.",
    },
    {
      img: "/images/indu-Certi.webp",
      title: "Industry Certifications for Better Employability",
      description: "Gain an edge with in-demand certifications from top industry bodies and partners — integrated within your program to boost your skills and CV.",
    },
    {
      img: "/images/internship.webp",
      title: "Internship Opportunities",
      description: "Access curated internships with leading companies through our corporate network, helping you gain real-world experience and stand out in the job market.",
    },
    {
      img: "/images/ai-application.webp",
      title: "AI-Powered Career Discovery Platform",
      description: "From mock interviews and resume building to job search and easy-apply tools — our AI-powered platform ensures you're career-ready from day one.",
    },
    {
      img: "/images/people.webp",
      title: "beSocial App for Campus Life",
      description: "Your virtual student hub — the beSocial app lets you network, join clubs, attend events, and be part of a vibrant, online-first community.",
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
        Online Amity <span className="text-blue-600">University</span>
      </h1>
      
      {/* Location and Basic Info */}
      <div className="flex items-center gap-3 text-gray-600">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span className="text-sm">Noida, Uttar Pradesh, India</span>
        </div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="text-sm">Private University</div>
      </div>
      
      {/* NIRF Ranking and Rating */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
          <FaAward className="text-yellow-500 mr-1.5 text-sm" />
          <span className="text-gray-700 font-semibold text-sm">NIRF Rank: 29</span>
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
          <span className="ml-1 text-gray-700 font-medium text-sm">4.8/5</span>
        </div>
      </div>

      <p className="text-base font-medium text-gray-600">
        India's Premier Private University | 100% Online Learning
      </p>
      
      {/* Key Highlights with Icons */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: <FaGlobe className="text-blue-600" />, text: "Global Accreditation" },
          { icon: <FaUserTie className="text-blue-600" />, text: "Industry Curriculum" },
          { icon: <FaClipboardCheck className="text-blue-600" />, text: "Placement Assistance" },
          { icon: <FaRobot className="text-blue-600" />, text: "AI-Powered Learning" },
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
        Amity University online programs have revolutionized higher education in India, offering UGC-approved degrees with flexible learning options. Whether you're a working professional or a fresh graduate, online Amity University provides world-class education through innovative digital platforms.
      <br/> We offer a wide range of undergraduate, postgraduate, and integrated courses in fields like Business Administration, Computer Applications, Commerce, Arts, and more. Our curriculum is designed in collaboration with industry experts to ensure relevance and employability.  
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
        <p className="text-blue-700 text-sm flex items-start">
          <FaBookOpen className="mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
          <span>India's first university recognised by UGC for providing online degree programs by expert faculty.</span>
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
          src="/images/amitypic.png"
          alt="Online Amity University campus with modern infrastructure and digital learning facilities"
          width={600}
          height={400}
          className="w-full h-auto"
          priority
        />
        
        {/* Floating Badges */}
        <div className="absolute -top-2 -right-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
          <FaGraduationCap className="text-blue-600 text-xl mb-1" />
          <span className="text-xs font-bold text-gray-800 text-center">50K+ Students</span>
        </div>
        
        <div className="absolute -bottom-2 -left-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
          <FaBriefcase className="text-blue-600 text-xl mb-1" />
          <span className="text-xs font-bold text-gray-800 text-center">500+ Partners</span>
        </div>
        
        {/* Location Badge */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
          <svg className="w-3.5 h-3.5 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span className="text-xs font-medium text-gray-700">Noida Campus</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* Accreditation Badges with Enhanced Content */}
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
          Education with Global Recognition
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
          <div className="text-4xl font-bold text-blue-700 mb-2">95%</div>
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
          <div className="text-4xl font-bold text-purple-700 mb-2">10+</div>
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
                <h4 className="font-semibold">Aisha Sharma</h4>
                
              </div>
            </div>
            <p className="text-gray-700 italic">"The international recognition of my degree allowed me to secure a position with a leading tech firm in Singapore immediately after graduation."</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">RM</span>
              </div>
              <div>
                <h4 className="font-semibold">Rahul Mehta</h4>
                
              </div>
            </div>
            <p className="text-gray-700 italic">"The accreditation status of my program made the admission process to Stanford seamless. My credits transferred without any issues."</p>
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
            { src: "/images/nirf.png", alt: "NIRF", name: "NIRF" },
            { src: "/images/wes.png", alt: "WES", name: "WES" },
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
              { src: "/images/wasc.png", alt: "WASC Accreditation", name: "WASC" },
              { src: "/images/the.webp", alt: "Times Higher Education", name: "THE" },
              { src: "/images/qaa.png", alt: "QAA UK", name: "QAA UK" },
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

      {/* Integrated Courses Section */}
      <section className="py-16 bg-gray-50 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            icon={FaGlobe}
            title="Integrated Programs"
            description="Seamless educational pathways combining undergraduate and postgraduate studies"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ug_pgCourses.map((item, index) => (
              <CourseCard key={index} {...item} universityName="Amity University Online" />
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Amity */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Why Choose Amity Online University?</h2>
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
              { icon: <FaRobot className="text-2xl" />, title: "AI-Professor AMI", text: "Powered by ChatGPT-4 for better learning." },
              { icon: <FaBriefcase className="text-2xl" />, title: "Career Services", text: "Workshops, internships, resume support." },
              { icon: <FaBook className="text-2xl" />, title: "Doorstep delivery", text: "Only online university delivering physical books." },
              { icon: <FaUniversity className="text-2xl" />, title: "Metaverse Campus", text: "Explore campus in metaverse." },
              { icon: <FaUserFriends className="text-2xl" />, title: "Offline Experiences", text: "On-campus orientation and peer bonding." },
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
      {/* Improved Amity University Advantages Section */}
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
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Poppins]">Amity Online Advantages</h2>
      <p className="text-blue-100 max-w-2xl mx-auto">
        Discover what makes Amity Online a leader in digital education
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
        <div className="text-2xl font-bold text-white">50K+</div>
        <div className="text-blue-200 text-xs">Students</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">100+</div>
        <div className="text-blue-200 text-xs">Programs</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">95%</div>
        <div className="text-blue-200 text-xs">Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">500+</div>
        <div className="text-blue-200 text-xs">Partners</div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Admission Process */}
     
      <AdmissionProcedure />

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
                src="/images/amicri.jpeg" 
                alt="Amity University Certificate" 
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
            <p className="mb-6 text-gray-600 text-lg">Amity University online programs offer daily live classes, career assistance, and hands-on LMS learning with Ivy League tie-ups.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Benefits of Online Amity University</h3>
            <ul className="space-y-3">
              {[
                "Daily LIVE Classes by International Faculty",
                "Career Assistance & Virtual Job Fairs",
                "International Collaboration with Ivy League",
                "Immersive Learning via World-Class LMS",
                "Industry-Relevant Curriculum",
                "Flexible Learning Schedule"
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
            <p className="text-gray-600 max-w-3xl mx-auto">Top companies that recruit Amity Online University graduates</p>
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
                    alt="Top companies hiring Amity University online graduates"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">Begin Your Educational Journey with Amity Online</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with Amity University's UGC-entitled online degrees
            </p>
            
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Amity;