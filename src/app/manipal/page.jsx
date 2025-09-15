'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
//import { Helmet } from 'react-helmet';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
} from 'react-icons/fa';
import { 
  FaBookOpen, 
  FaUserTie, 
  FaBriefcase, 
  FaClipboardCheck 
} from "react-icons/fa";

import { useRouter } from 'next/navigation';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import { motion } from "framer-motion";
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';



const Manipal = () => {
 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Finance & Accounting, Digital Marketing, Enterepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "/images/bba.webp",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "99,000",
      specialization: "General",
      image: "/images/bcom.webp",
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
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML", 
      image: "/images/mca1.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,08,000",
      specialization: "General", 
      image: "/images/m.com.webp",
    },
  
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000 - 1,40,000",
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "/images/ma1.webp",
    },
  ];

   const allCourses = [
    ...ugCourses.map(course => ({ ...course, type: "UG" })),
    ...pgCourses.map(course => ({ ...course, type: "PG" })),
    
  ];

  

  return (
    <>
      
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      
       <Head>
        <title>Manipal University Online Jaipur, Rajasthan | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal University Jaipur, MUJ Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal University Online" />
        <meta name="robots" content="index, follow" />
         <link rel="canonical" href="https://unifostedu.com/manipal" />
         
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
  <HeroSection
  universityName="Manipal University Online"
  location="Jaipur, Rajasthan, India"
  type="Private University"
  nirfRank="" // If available later, fill here
  rating="4.6/5" // Approx, change if you have actual rating
  description="UGC Entitled | Globally Recognized Online Degrees | Flexible Learning with Expert Mentorship"
  description2={`
    Manipal University Online transforms careers with globally recognized online degrees delivered at your doorstep. 
    With top-class accreditations and flexible learning, it offers quality education with personalized mentorship. 

    It provides a unique blend of academic excellence and industry relevance, ensuring students are well-prepared 
    for the future. Ranked among the top private universities in India, Manipal offers diverse programs in business 
    and technology with strong academic support and vibrant digital learning.
  `}
  badgeText="UGC Entitled | NAAC Accredited | Globally Recognized"
  imgSrc="/images/manipal.webp"
  imgAlt="Manipal University Online Campus"
  students="25K+" // Approx or actual if you have
  partners="100+" // Placeholder, update with real data if available
  campus="Manipal Jaipur Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "World-Class Curriculum" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty & Mentors" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career-Oriented Programs" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Entitled Degrees" },
  ]}
/>

<div>
  <AccreditationSection
    title="Why Choose Manipal University Online?"
    description="Manipal University Online offers globally recognized online degrees with flexible learning, expert mentorship, and strong career support to help you achieve your future goals."
    stats={[]} // No numerical stats provided
    benefits={[
      {
        title: "Top-Ranked Private University",
        description: "Recognized as one of India’s best private institutions.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
      {
        title: "Globally Recognized Degrees",
        description: "Accredited programs accepted worldwide by top employers.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>`,
      },
      {
        title: "Flexible & Personalized Learning",
        description: "Learn anytime, anywhere with tailored academic support.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                  </svg>`,
      },
      {
        title: "Expert Faculty Mentorship",
        description: "One-on-one guidance by experienced mentors & professors.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>`,
      },
      {
        title: "UGC & AICTE Approved",
        description: "Degrees entitled by UGC and recognized by AICTE.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
      {
        title: "Global Alumni Network",
        description: "Join a network of learners from 50+ countries.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>`,
      },
      {
        title: "Career Support",
        description: "Internships, placements, resume help, and interview prep.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5v14"></path>
                  </svg>`,
      },
      {
        title: "Digital Resources",
        description: "Access e-books, recorded classes, and online labs.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z"></path>
                  </svg>`,
      },
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

      {/* Why Choose Section */}



   {/* Admission Procedure */}

   <AdmissionProcedure />


      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image width={100} height={100} src="/images/muj-certi.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognized Online Degree from Manipal University</h2>
            <p className="mb-6 text-lg">
              Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC & AICTE Recognized Degrees</li>
              <li>Daily Live & Recorded Classes</li>
              <li>Global Collaborations with Ivy-League Institutions</li>
              <li>100% Placement & Internship Support</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Hiring Partners */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
          <p className="text-xl text-gray-600">Top Hiring Partners of Manipal Online</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/company.webp", "/images/company1.webp", "/images/company9.webp", "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Manipal;
