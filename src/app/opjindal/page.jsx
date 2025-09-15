'use client';
import React from 'react';
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
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import EnquireCard from '@/components/EnquireCard';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';

const OPJindal = () => {
  const ugCourses = [
    
    {
      course: "BBA (4 Specialization)",
      duration: "3 Years",
      eligibility: "10+2 Pass, Applicants less than 50% marks in 10+2 will be required to appear for the Jindal Scholastic Aptitude Test (JSAT)",
      fees: "₹2,00,000 /-",
      specialization: "Finance, Marketing, Human Resources, Operation Management Supply Chain",
      image: "/images/bba.webp",
    },
    {
      course: "B.Sc in Psycology",
      duration: "3 Years",
      eligibility: "10+2 Pass, If less than 50%: Must clear JSAT (min 50%) or submit, SAT/ACT/LNAT-UK score or complete a JGU MOOC",
      fees: "₹3,00,000 /-",
      
      image: "/images/op-psycology.webp",
    },
    
  ];

  const pgCourses = [
    {
      course: "Master in Enterpreneurship and Family Business",
      duration: "1 Years(4 terms)",
      eligibility: "A Bachelor’s degree, Active involvement as an entrepreneurial family member ",
      fees: "₹2,75,000/-",
      image: "/images/op-masters1.webp",
    },
    {
      course: "MA in Teaching English to Speakers of Other languages (TESOL)",
      duration: "12 Months(3 Trimester)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      fees: "₹2,50,000/- ",
      image: "/images/op-masters2.webp",
    },
    {
      course: "M.Sc in Environmental chnage and Sustainability",
      duration: "12 Months(4 Terms)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      fees: "₹2,50,000/-",
      image: "/images/op-masters3.webp",
    },
    {
      course: "MA Public Policy",
      duration: "12-24 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      fees: "₹3,00,000/-",
      image: "/images/op-masters4.webp",
    },
    {
      course: "MBA in Business Analytics",
      duration: "12-24 Months",
      eligibility: "The eligibility criteria for the online MBA in Business Analytics programme require a bachelor’s degree from a recognised university in India. A minimum of 50% marks in any discipline is required for graduation.",
      fees: "₹2,00,000/-",
      image: "/images/op-masters5.webp",
    },
    {
      course: "MBA in Business Law",
      duration: "12 Months",
      eligibility: "Bachelor's degree in any discipline with a minimum 50% aggregate score from a recognized university.  ",
      fees: "₹3,00,000/-",
      image: "/images/mba.webp",
    },
    
  ];

  return (
    <>
       <Head>
        <title>OP Jindal University | Online & On-Campus Programs</title>
        <meta
          name="description"
          content="OP Jindal University offers globally recognized UG & PG programs in Law, Business, Psychology, Public Policy, and more. Apply for online and on-campus programs."
        />
        <meta
          name="keywords"
          content="OP Jindal University, JGU Online, Jindal Global University, BBA, MBA, MA, MSc, Law Programs, Business Analytics, Public Policy, Distance Learning India"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="OP Jindal University | Online & On-Campus Programs" />
        <meta
          property="og:description"
          content="Explore undergraduate and postgraduate programs from OP Jindal University. Globally recognized, NAAC accredited, and industry-ready education."
        />
        <meta property="og:image" content="/images/opjindal.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.opjindal.edu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OP Jindal University | Online & On-Campus Programs" />
        <meta
          name="twitter:description"
          content="Globally ranked OP Jindal University offers UG & PG courses in Business, Law, Psychology, and more. Apply now."
        />
        <meta name="twitter:image" content="/images/opjindal.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      

      {/* Hero Section */}
   <HeroSection
  universityName="OP Jindal University"
  location="Sonipat, Haryana, India"
  type="Private University"
  nirfRank="" // NIRF rank not provided
  rating="" // Rating not provided
  description="Leading private university known for excellence in Law, Business, Engineering, and Public Policy"
  description2={`
    OP Jindal University offers globally recognized online degrees, enabling students to learn at their doorstep without any problems. 
    The university provides programs in diverse fields including Law, Business, Liberal Arts, Psychology, Economics, Media, Journalism, Architecture, Design, Banking, Finance, Environment, Public Policy, Public Health, Languages, and International Relations. 
    Courses are designed to meet students' academic and professional needs through interdisciplinary learning and practical application, preparing them for the global workforce.
  `}
  badgeText="Globally Recognized | Interdisciplinary Learning | Practical Applications"
  imgSrc="/images/opjindal.webp"
  imgAlt="OP Jindal University Campus"
  students="NA" // Replace with real data if available
  partners="NA" // Replace with real data if available
  campus="Sonipat Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Interdisciplinary Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career-Oriented Courses" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>
     
     <div>
  <AccreditationSection
    title="Why Choose OP Jindal University?"
    description="Blending innovative curriculum, expert faculty, tech-driven learning, and strong placements for holistic development."
    stats={[]} // No numerical stats here
    benefits={[
      {
        title: "Innovative Curriculum",
        description: "Blends theory with practical exposure.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>`,
      },
      {
        title: "Expert Faculty",
        description: "Renowned academicians and industry leaders.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>`,
      },
      {
        title: "Tech-Driven Learning",
        description: "Smart classrooms and advanced labs.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                  </svg>`,
      },
      {
        title: "Strong Placements",
        description: "Top companies hire our graduates.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5v14"></path>
                  </svg>`,
      },
      {
        title: "Global Exposure",
        description: "International exchange programs and collaborations.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
      {
        title: "Modern Campus",
        description: "State-of-the-art facilities for learning and living.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z"></path>
                  </svg>`,
      },
      {
        title: "Holistic Development",
        description: "Focus on academics, sports, and culture.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>`,
      },
      {
        title: "Industry Tie-ups",
        description: "Collaborations for internships and projects.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>

      {/* UG & PG Course Cards */}
      {[{ title: "Undergraduate Courses", list: ugCourses }, { title: "Postgraduate Courses", list: pgCourses }].map((section, idx) => (
        <section key={idx} className="py-12 bg-white px-6 font-[Inter]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
              {section.list.map((item, index) => <EnquireCard key={index} {...item} />)}
            </div>
          </div>
        </section>
      ))}

      

      {/* Admission Process */}
      <AdmissionProcedure/> 


      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/op-certificate.webp" alt="OP Jindal Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from OP Jindal University</h2>
            <p className="mb-6 text-lg">Keep your future shine with a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Get Global Exposure</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
              <li>Mentorship with proper counselling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Companies */}
<section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at OP Jindal University</h2>
    <p className="text-xl text-gray-600">Trusted by leading global brands</p>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      "/images/aditya-birla.webp",
      "/images/airtel.webp",
      "/images/aurobindo.webp",
      "/images/bajaj-allianz.webp",
      "/images/bharti-airtel.webp",
      "/images/bosch.webp",
      "/images/cipla.webp",
      "/images/coca-cola.webp",
      "/images/cyient.webp",
      "/images/diageo.webp",
      "/images/ey.webp",
      "/images/fedex.webp",
      "/images/hero.webp",
      "/images/himalaya.webp",
      "/images/hinduja.webp",
      "/images/icici.webp",
      "/images/iifl.webp",
      "/images/india-mart.webp",
      "/images/infosys.webp",
      "/images/maruti.webp",
      "/images/nestle.webp",
      "/images/oyo.webp",
      "/images/pepsico.webp",
      "/images/samsung.webp",
      
    ].map((src, i) => (
      <div
        key={i}
        className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Image width={100} height={100} loading="lazy" src={src} alt="Recruiter" className="h-12 object-contain" />
      </div>
    ))}
  </div>
</section>


    </>
  );
};

export default OPJindal;
