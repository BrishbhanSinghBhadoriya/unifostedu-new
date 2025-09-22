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
  FaGlobe
} from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import EnquiryForm from '@/components/EnquiryForm';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcess from '@/components/AdmissionProcess';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import EnquireCard from '@/components/EnquireCard';


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
      image: "/images/bba.webp",
      alt: "BBA from amity online university",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000 - ₹2,25,000",
      specialization: "BCA (General, Cloud and Security, Software Engineering, Data Science, Data Engineering(HCL Tech), Data Analytics, Software Engineering(HCL Tech))",
      image: "/images/bca.webp",
      alt: "BCA from amity online university",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹2,50,000",
      specialization: "B.Com (General, Hons, International Finance & Accounting)",
      image: "/images/bcom.webp",
      alt: "B.Com from amity online university",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹1,70,000",
      specialization: "BA (General, Journalism and Mass Communication, Native Languages(Kannada,Malayalam, Tamil, Telugu), Psychology, English, Sociology, Political Science, Economics)",
      image: "/images/ba.webp",
      alt: "BA from amity online university",
    
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,99,000 - ₹2,99,000",
      specialization: "MBA (General, Information Technology Management, Dual Specialization, Human Resource Analytics, Data Science, Business Analytics, International Business Management, Digital Entrepreneurship, Digital Marketing Management, Entrepreneurship & Leadership Management, Finance & Accounting Management, Hospitality Management, Global Finance Market, Insurance Management, Marketing & Sales Management, Petroleum & Natural Gas, Production and Operations Management, Retail Management)",
      image: "/images/mba.webp",
      alt: "MBA from amity online university",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "₹170,000- ₹2,50,000",
      specialization: "MCA (General, Cyber Security, Blockchain Technology, Machine Learning and Artificial Intelligence, Augmented Reality and Virtual Reality, Software Engineering)",
      image: "/images/mca1.webp",
      alt: "MCA from amity online university",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹1,20,000",
      specialization: "General, Financial Management, Financial Technology",
      image: "/images/m.com.webp",
      alt: "M.Com from amity online university",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,30,000 - ₹2,50,000",
      specialization: "MA (Psychology, Journalism and Mass Communication, Public Policy & Governance, English, Sociology)",
      image: "/images/ma1.webp",
      alt: "MA from amity online university",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,50,000",
      specialization: "Data Science",
      image: "/images/m.com.webp",
      alt: "M.Sc from amity online university",
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
      alt: "BBA + MBA from amity online university",
    },
    {
      course: "BCA + MCA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,04,000",
      specialization: "BCA + MCA",
      image: "/images/mca1.webp",
      alt: "BCA + MCA from amity online university",
    },
    {
      course: "B.Com + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹2,83,100 - ₹3,05,000",
      specialization: "B.Com + MBA",
      image: "/images/m.com.webp",
      alt: "B.Com + MBA from amity online university",
    },
  ];


  const highlights = [
    {
      img: "/images/wasc.webp",
      alt: "WASC Accreditation",
      title: "WASC Accreditation (USA)",
      description: "Amity Online is India's only university accredited by the Western Association of Schools and Colleges — a distinguished recognition of global academic excellence.",
    },
    {
      img: "/images/wes.webp",
      alt: "WES Recognition",
      title: "WES Recognition",
      description: "Degrees recognised by World Education Services (WES) Canada & USA, enabling smoother pathways for higher studies and global career mobility.",
    },
    {
      img: "/images/qs.webp",
      alt: "QS Ranked Online MBA",
      title: "QS Ranked Online MBA",
      description: "Amity Online offers India's only Online MBA ranked by QS under Asia Pacific Top 10 - a global recognition for academic strength, learner outcomes, and digital innovation.",
    },
    {
      img: "/images/qaa.webp",
      alt: "QAA (UK) Accreditation",
      title: "QAA (UK) Accreditation",
      description: "Accredited by the UK's Quality Assurance Agency (QAA), assuring students of globally benchmarked academic quality.",
    },
    {
      img: "/images/the.webp",
      alt: "Times Higher Education",
      title: "Times Higher Education Employability Rankings",
      description: "Amity University is ranked among the best globally for graduate employability and employer reputation by Times Higher Education.",
    },
    {
      img: "/images/pan-india.webp",
      alt: "Pan-India Campus Access",
      title: "Pan-India Campus Access & Offline Events",
      description: "Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation - blending digital convenience with real-world connection.",
    },
    {
      img: "/images/amigo.webp",
      alt: "Amigo Learning",
      title: "Amigo: Learning On-the-Go",
      description: "The Amigo app makes learning seamless and mobile — attend live classes, track progress, access materials, and more on your schedule.",
    },
    {
      img: "/images/ai-tutor.webp",
      alt: "Prof. Ami: Your AI-Powered Personal Tutor",
      title: "Prof. Ami: Your AI-Powered Personal Tutor",
      description: "Meet Prof. Ami — your always-on, AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.",
    },
    {
      img: "/images/indu-Certi.webp",
      alt: "Industry Certifications for Better Employability",
      title: "Industry Certifications for Better Employability",
      description: "Gain an edge with in-demand certifications from top industry bodies and partners — integrated within your program to boost your skills and CV.",
    },
    {
      img: "/images/internship.webp",
      alt: "Internship Opportunities",
      title: "Internship Opportunities",
      description: "Access curated internships with leading companies through our corporate network, helping you gain real-world experience and stand out in the job market.",
    },
    {
      img: "/images/ai-application.webp",
      alt: "AI-Powered Career Discovery Platform",
      title: "AI-Powered Career Discovery Platform",
      description: "From mock interviews and resume building to job search and easy-apply tools — our AI-powered platform ensures you're career-ready from day one.",
    },
    {
      img: "/images/people.webp",
      alt: "BeSocial App for Campus Life",
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
<HeroSection
  universityName="Amity University Online"
  location="Noida, Uttar Pradesh, India"
  type="Private University"
  nirfRank="29"
  rating="4.8/5"
  description="India's Premier Private University | 100% Online Learning"
  description2={`
    Amity University Online programs have revolutionized higher education in India, offering UGC-approved degrees with flexible learning options. Whether you're a working professional or a fresh graduate, online Amity University provides world-class education through innovative digital platforms.
    
    Amity University Online offer a wide range of undergraduate, postgraduate, and integrated courses in fields like Business Administration, Computer Applications, Commerce, Arts, and more. Our curriculum is designed in collaboration with industry experts to ensure relevance and employability.
  `}
  badgeText="UGC Entitled Online Degrees"
  imgSrc="/images/amitypic.webp"
  imgAlt="Amity University Online"
  students="50K+"
  partners="500+"
  campus="Noida Campus"
  highlights={[
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Accreditation" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Industry Curriculum" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "Placement Assistance" },
    { icon: <FaRobot className="text-blue-600" />, text: "AI-Powered Learning" },
  ]}
/>


{/* Accreditation Badges with Enhanced Content */}
<div>
  <AccreditationSection
    title="Education with Global Recognition"
    description="Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide."
    stats={[
      { value: "95%", label: "Employment Rate Within 6 Months", color: "text-blue-700", bg: "bg-blue-50" },
      { value: "50+", label: "Countries with Alumni Network", color: "text-green-700", bg: "bg-green-50" },
      { value: "10+", label: "Industry Partnerships", color: "text-purple-700", bg: "bg-purple-50" },
    ]}
    benefits={[
      {
        title: "Global Mobility",
        description: "Our degrees are recognized internationally, enabling you to pursue opportunities worldwide.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>`,
      },
      {
        title: "Quality Assurance",
        description: "Rigorous accreditation processes ensure our programs meet the highest educational standards.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>`,
      },
      {
        title: "Industry Connections",
        description: "Our partnerships with leading organizations provide valuable networking and career opportunities.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>`,
      },
      {
        title: "Career Advancement",
        description: "Employers value accredited degrees, giving our graduates a competitive edge in the job market.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
      { src: "/images/wes.webp", alt: "WES", name: "WES" },
      { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
      { src: "/images/acu.webp", alt: "ACU", name: "ACU" },
    ]}
    internationalRecognition={[
      { src: "/images/qs.webp", alt: "QS Ranking", name: "QS" },
      { src: "/images/wasc.webp", alt: "WASC Accreditation", name: "WASC" },
      { src: "/images/the.webp", alt: "Times Higher Education", name: "THE" },
      { src: "/images/qaa.webp", alt: "QAA UK", name: "QAA UK" },
    ]}
    successStories={[
      {
        name: "Aisha Sharma",
        initials: "AS",
        color: "bg-blue-100 text-blue-600",
        text: "The international recognition of my degree allowed me to secure a position with a leading tech firm in Singapore immediately after graduation.",
      },
      {
        name: "Rahul Mehta",
        initials: "RM",
        color: "bg-green-100 text-green-600",
        text: "The accreditation status of my program made the admission process to Stanford seamless. My credits transferred without any issues.",
      },
    ]}
    trust={{
      text: "Trusted by 25,000+ Students",
      subtext: "Our accreditations ensure quality education recognized globally",
    }}
  />
</div>





{/* UG Courses Section */}
      <section className="py-16 bg-gray-50 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            icon={FaGraduationCap}
            title="Undergraduate Programs"
            description="Comprehensive bachelor's degrees designed to build strong foundations for your career"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start content-start">
            {ugCourses.map((item, index) => (
              <EnquireCard key={`ug-${item.course}-${index}`} {...item} universityName="Amity University Online" uniqueId={`ug-${index}`} />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start content-start">
            {pgCourses.map((item, index) => (
              <EnquireCard key={`pg-${item.course}-${index}`} {...item} universityName="Amity University Online" uniqueId={`pg-${index}`} />
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
              <EnquireCard key={`integrated-${item.course}-${index}`} {...item} universityName="Amity University Online" uniqueId={`integrated-${index}`} />
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
<section className="py-12 relative overflow-hidden ">
  {/* Subtle animated elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-10 left-10 w-40 h-40  rounded-full filter blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 font-[Poppins]">Amity Online Advantages</h2>
      <p className="text-black-100 max-w-2xl mx-auto">
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
                  width={100}
                  height={100}
                  loading='lazy'
                  
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-base font-semibold text-black mb-2 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-black-100 text-xs leading-tight line-clamp-3">
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
        <div className="text-2xl font-bold text-black">50K+</div>
        <div className="text-black-200 text-xs">Students</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-black">100+</div>
        <div className="text-black-200 text-xs">Programs</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-black">95%</div>
        <div className="text-black-200 text-xs">Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-black">500+</div>
        <div className="text-black-200 text-xs">Partners</div>
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
                src="/images/amicri.webp" 
                alt="Amity University Certificate" 
                width={500} 
                height={350} 
                loading='lazy'
               
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
              "/images/company.webp", "/images/company1.webp", "/images/company9.webp", 
              "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", 
              "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp",
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
                    width={100}
                    height={100}
                    loading='lazy'
                 
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