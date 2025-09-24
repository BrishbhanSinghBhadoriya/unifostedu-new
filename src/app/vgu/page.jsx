'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import {
  FaBookOpen,
  FaUserTie,
  FaUniversity,
  FaBriefcase,
  FaClipboardCheck,
  FaGlobe,
  FaLaptopCode,
  FaUserFriends,
  FaLightbulb
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
const Vgu = () => {
  const ugCourses = [
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board ",
      fees: "₹1,32,000/-",
      specialization: "'Full-stack development, cybersecurity, and software project management'  'Al, machine learning, deep learning, and chatbot development'  'Data mining, analytics, R & Python, big data, visualization' 'Virtualization, cloud platforms, cryptography, ethical hacking' 'UX research, wireframing, usability testing, visual tools'  'DLT, smart contracts, blockchain architecture, Ethereum'",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelore of Arts(BA)",
      duration: "3 Years",
      eligibility: "10+2 in any stream",
      fees: "₹72,000/-",
      specialization: "Economics + Public Policy + Computer Applications, Public Policy + English, English + History + Political Science, Computer Applications + Public Policy/IR, Political Science + International Relations + Public Policy, 51+ COMBINATIONS AVAILABLE'",
      image: "/images/ba.webp",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board.",
      fees: "₹1,32,000/-",
      specialization: "General, Digital Marketing, Retail Management, Fintech",
      image: "/images/bba.webp",
    },
   
  ];

  const pgCourses = [
    {
      course: "Masters of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: '₹1,50,000 - 2,40,000',
      specialization: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'Information Technology Management', 'Helthcare Management', 'Agribusiness Management', 'International Business'],
      image: "/images/mba.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University." ,
      fees: "₹1,50,000/-",
      specialization: "Software Engineering & Development, Data Science & Analytics, Cyber Security, Cloud & Devops, web & App Development, Blockchain & Emerging Technologies, Database Management",
      image: "/images/mca.webp",
    },
     {
      course: "Master of Arts (English)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University.",
      fees: "₹72,000/-",
      specialization: "English",
      image: "/images/ma.webp",
    },
    {
      course: "Master of Science (Maths)",
      duration: "2 Years",
      eligibility: "Graduates with BA / BSc degree with Mathematics as one of the three main subjects.",
      fees: "₹72,000/-",
      specialization: " Mathematics",
      image: "/images/ma1.webp",
    },
    {
      course: "Master of Arts Journalism and Mass Communication (MAJMC)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: "₹72,000/-",
      
      image: "/images/ma1.webp",
    }

  ];

  return (
    <>
      
        <title>VGU University - Courses, Admissions, Enquiry</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      <Head>
        <title>VGU University Jaipur - Courses, Admissions & Enquiry</title>
        <meta name="description" content="Vivekananda Global University (VGU), Jaipur offers top-ranked undergraduate and postgraduate programs in management, computer applications, arts, and sciences. Apply now for admissions, explore courses, and secure your future." />
        <meta name="keywords" content="VGU University, VGU Jaipur, Vivekananda Global University, BCA, BBA, BA, MBA, MCA, UG courses, PG courses, Admissions, Enquiry, Jaipur University" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/vgu-university" />
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="VGU University Jaipur - Courses, Admissions & Enquiry" />
        <meta property="og:description" content="Explore UG & PG programs at Vivekananda Global University, Jaipur. Get admissions, course details, and career guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/vgu-university" />
        <meta property="og:image" content="https://unifostedu.com/images/vgu-uni.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
     <HeroSection
  universityName="Vivekananda Global University (VGU) Jaipur"
  location="Jaipur, Rajasthan, India"
  type="Private University"
  nirfRank="100+" 
  rating="4.2"  
  description="Top-ranked UGC & AICTE recognized university in Jaipur offering world-class education, modern infrastructure, and global learning opportunities."
  description2={`
    Vivekananda Global University (VGU) is one of the leading private universities in Rajasthan, 
    providing diverse undergraduate and postgraduate programs across engineering, management, 
    arts, and sciences.  

    With a strong focus on innovation, research, and holistic development, VGU equips students 
    with the knowledge and skills to excel in a global job market. Recognized for its 
    modern campus, expert faculty, and industry-driven curriculum, it ensures both academic 
    and professional success. 
  `}
  badgeText="UGC & AICTE Recognized | Innovation Driven | Global Learning"
  imgSrc="/images/vgu-uni.webp"
  imgAlt="VGU University Campus"
  students="25K+" 
  partners="25+" 
  campus="VGU Jaipur Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Diverse Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty & Mentorship" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Learning Opportunities" },
    { icon: <FaLightbulb className="text-blue-600" />, text: "Innovation & Research Focus" },
  ]}
/>
     

        <div>
  <AccreditationSection
    title="Why Choose VGU University?"
    description="Vivekananda Global University (VGU), Jaipur, is a top-ranked UGC & AICTE recognized private university offering modern learning, expert faculty, global exposure, strong placements, and vibrant campus life."
    stats={[]} // Currently no numerical stats provided for VGU
    benefits={[
      {
        title: "Modern Learning",
        description: "Smart classrooms, labs, and interactive sessions for enhanced education.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" 
  class="w-6 h-6" fill="none" viewBox="0 0 24 24" 
  stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
</svg>`

      },
      {
        title: "Expert Faculty",
        description: "Highly qualified professors with academic excellence and industry experience.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/></svg>`,
      },
      {
        title: "UGC Approved",
        description: "Recognized programs ensuring credibility and career growth.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
      },
      {
        title: "Strong Placements",
        description: "Top companies recruit VGU graduates with competitive packages.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" 
  class="w-6 h-6" fill="none" viewBox="0 0 24 24" 
  stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5v14"/>
</svg>`

      },
      {
        title: "Global Exposure",
        description: "International tie-ups, collaborations, and student exchange programs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
      },
      {
        title: "Industry Projects",
        description: "Hands-on learning through internships and real-world projects.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>`,
      },
      {
        title: "Vibrant Campus Life",
        description: "Student clubs, cultural activities, and sports for holistic growth.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 20c0-5.33 9.33-8 10-8s10 2.67 10 8v2H2v-2z"/></svg>`,
      },
      {
        title: "Career Guidance",
        description: "Workshops, internships, resume-building, and placement support.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/></svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
      { src: "/images/bci.webp", alt: "BCI", name: "Bar Council of India (BCI)" },
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
      <AdmissionProcedure />


      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/vgu-certificate.webp" alt="VGU Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Degree from VGU University</h2>
            <p className="mb-6 text-lg">VGU offers top-notch academic programs with industry tie-ups, live projects, and holistic career support.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of VGU</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Industry-relevant curriculum</li>
              <li>Placement support and internships</li>
              <li>State-of-the-art campus and labs</li>
              <li>Exposure to global learning opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Graduates Work At</h2>
          <p className="text-xl text-gray-600">Top hiring partners of VGU</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/samsung.webp", "/images/airtel.webp", "/images/icici.webp", "/images/nestle.webp", "/images/tcs.webp", "/images/pepsico.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Vgu;
