'use client';

import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import EnquireCard from '@/components/EnquireCard';
import {
  FaBookOpen,
  FaUserTie,
  FaRobot,
  FaBriefcase,
  FaBook,
  FaUniversity,
  FaUserFriends,
  FaClipboardCheck,
} from "react-icons/fa";
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import * as Tabs from '@radix-ui/react-tabs'

const Jain = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,95,000",
      specialization: "Online Bachelor of Business Administration, Digital Marketing, Healthcare Management, Data Science and Analytics",
      image: "/images/bba.webp",
    },
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,35,000 -1,65,000",
      specialization: "Computer Science and IT, Data Science and Analytics, Cyber Security, Artificial Intelligence, Cloud Computing",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees : "1,27,500",
      specialization: "Online Bachelor of Commerce, Corporate Accounting",
      image: "/images/bcom.webp",
    },
 
  ];

  

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,96,000 - 2,16,000 ",
      specialization: "Human Resource Management and Finance, Finance and Marketing, Marketing and Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Information Technology Management, Healthcare Management, Supply Chain, Production and Operations Management, Business Intelligence and Analytics, Entrepreneurship and Venture Creation, International Finance, Data Science and Analytics, E-commerce, Artificial Intelligence and Human Resource Management, Digital Marketing, Banking and Finance, Technology Management, General Management, AI-Driven Marketing, AI-Driven Finance, AI-Driven Business Strategy, AI-Driven Human Resource Management,",

      image: "/images/mba.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "1,60,000",
      specialization: "DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence" , 

      image: "/images/mca1.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,10,000",
      specialization: "Accounting and Finance, Professional Accounting and Finance (Accredited by CPA, US)", 
      image: "/images/m.com.webp",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "190,000",
      specialization: "Jainology in Comparative Religion and Philosophy, English, Economics, Public Policy",
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
        <div>
      <HeroSection
        universityName="Jain University Online"
        location="Bengaluru, Karnataka, India"
        type="Private University"
        nirfRank="77" // If not available, keep blank
        rating="4.5" // If not available, keep blank
        description="NAAC A++ Accredited | UGC Entitled Online Degree Programs | Empowering Learners with Latest Knowledge"
        description2={`
          Jain University Online is part of the NAAC A++ grade accredited institution offering online degree programs to empower learners. 
          With 30 years of excellence in education, Jain University is one of India’s top universities with a strong focus on quality education 
          and building a great future for students and working professionals.
        `}
        badgeText="NAAC A++ Accredited | UGC Entitled Online Degrees"
        imgSrc="/images/jain.webp"
        imgAlt="Jain University Online Campus"
        students="30K+" // Approximate/replace as needed
        partners="10+" // If no data, keep placeholder
        campus="Bengaluru Campus"
        highlights={[
          { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Learning" },
          { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
          { icon: <FaBriefcase className="text-blue-600" />, text: "Career Support" },
          { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Entitled Degrees" },
        ]}
      />
    </div>
    

    <div>
  <AccreditationSection
    title="Why Choose Jain Online?"
    description="Explore diverse learning mediums, dedicated academic advisors, career services, and placement opportunities with Jain University Online."
    stats={[]} // No numerical stats here
    benefits={[
      {
        title: "Diverse Learning Mediums",
        description: "E-books, printed & audio books, videos to cater your preferences & unique learning style.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>`,
      },
      {
        title: "Dedicated Academic Advisor",
        description: "Dedicated experts and advisors to guide you at every step of your professional career.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>`,
      },
      {
        title: "Career Services",
        description: "Be job-ready with resume building workshops, internships & industry mentorship.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                  </svg>`,
      },
      {
        title: "Placement Opportunities",
        description: "Job interview prep, placement assistance & resume building for students to be job-ready.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
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
      { src: "/images/careers.webp", alt: "Careers", name: "Careers" },
      { src: "/images/auap.webp", alt: "AUAP", name: "AUAP" },
      { src: "/images/ksurf.webp", alt: "KSURF", name: "KSURF" },
      { src: "/images/recogin.webp", alt: "Recognition", name: "Recognition" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>


   <section className="py-12 px-6 bg-white font-[Inter]">
  <h2 className="text-2xl font-bold text-center mb-6 text-[#003b59] font-[Poppins]">
    Jain University Online Programs
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        {[...ugCourses, ...pgCourses,].map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName="Jain University Online" />
        ))}
      </div>
    </Tabs.Content>

    {/* UG Courses */}
    <Tabs.Content value="ug">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        {ugCourses.map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName="Jain University Online" />
        ))}
      </div>
    </Tabs.Content>

    {/* PG Courses */}
    <Tabs.Content value="pg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        {pgCourses.map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName=" Jain University Online" />
        ))}
      </div>
    </Tabs.Content>
  </Tabs.Root>
</section>




      {/*Addimision process*/}
     <AdmissionProcedure/>
<section className="bg-[#003366] py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Certificate Image */}
    <div className="flex-1">
      <Image width={100} height={100} loading='lazy' src="/images/jainonlined.webp" alt="Amity University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
    </div>

    {/* Text Content */}
    <div className="flex-1 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Online Degree from Jain Online University
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Jain Online provides amity plus services that has the benefits of e-lectures, counselling from academic advisors, career assistance, etc.
      </p>

      <h3 className="text-xl font-semibold mb-2">Benefits of Jain Online</h3>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Daily LIVE Classes by Faculty of International Repute</li>
        <li>Career Assistance & Exclusive Virtual Job Fairs</li>
        <li>Equivalent to JAIN (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
        <li>Hands-on & Immersive Learning through world-Class Experince</li>
      </ul>
    </div>
  </div>
</section>


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
            

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/3.webp" alt="Samsung3" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/4.webp" alt="Samsung4" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/5.webp" alt="Samsung5" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/6.webp" alt="Samsung6" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/7.webp" alt="Samsung7" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/8.webp" alt="Samsung8" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/9.webp" alt="Samsung9" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image width={100} height={100} loading="lazy" src="/images/samsung.webp" alt="Samsung" className="h-12 object-contain" />
      </div>
      {/* Add more cards here as needed */}
    </div>
  </div>
</section>





    </>
  );
};

export default Jain;
