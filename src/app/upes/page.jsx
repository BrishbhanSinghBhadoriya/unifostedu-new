'use client';
import React from 'react';
import {
  FaBookOpen,
  FaUserTie,
  FaRobot,
  FaBriefcase,
  FaBook,
  FaUniversity,
  FaUserFriends,
  FaClipboardCheck,
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaAward,
  FaGlobe,
} from "react-icons/fa";

import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
const Upes = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000",
      specialization: "Operations Management, Financial Management, Human Resource Management, Marketing Management, BBA in Digital Business, BBA in Logistics and Supply Chain, BBA in International Business",
      image: "/images/bba.webp",
      alt: "BBA from UPES University Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000",
      specialization: "Cloud Computing, Cyber Security, Data Analytics, New age Technology",
      image: "/images/bca.webp",
      alt: "BCA from UPES University Online",
    },
    
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation with  50%",
      fees: "₹2,20,000",
      specialization: "Oil & Gas Management, Power Management, Logistics & Supply Chain Management, Business Analytics, Finance, Marketing, Human Resource Management, Infrastructure Management, International Business, Marketing Management, Human Resource Management, Operations Management, Operations Management, Financial Management, Digital Business",

      image: "/images/mba.webp",
      alt: "MBA from UPES University Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "₹1,70,000",
      specialization: "Artificial Intelligence and Machine Learning, Cyber Security and Forensics, Data Science ", 
      image: "/images/mca1.webp",
      alt: "MCA from UPES University Online",
    },
    
  ];

  return (
    <>
    
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <Head>
        <title>UPES University Online Courses | Admission, Fees & Enquiry</title>
        <meta
          name="description"
          content="Explore UPES online programs. Learn about fees, eligibility, and how to apply. Enquire now!"
        />
        <meta
          name="keywords"
          content="UPES University Online, UPES MBA, UPES BBA, UPES BCA, UPES MCA, Online Programs, Admission, Fees"
        />
        <link rel="canonical" href="https://unifostedu.com/upes" />
        <meta property="og:title" content="UPES University Online Courses" />
        <meta
          property="og:description"
          content="Explore UPES online degree programs with fees, eligibility, and admission details."
        />
        <meta property="og:image" content="/images/upes.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

 

      {/* Intro Section */}
      <HeroSection
  universityName="UPES University Online"
  location="Dehradun, Uttarakhand, India"
  type="Private University"
  nirfRank="41" 
  rating="4.4"  
  description="UPES (University of Petroleum and Energy Studies) is a leading institution in India offering UGC-entitled online degree programs with a focus on energy, technology, and business domains."
  description2={`
    Recognized for its industry-aligned curriculum, UPES provides students with 
    cutting-edge knowledge and skills to excel in their careers. 
    The university is known for its strong industry connections and focus on innovation. 
    With online and flexible learning, UPES is shaping the future of higher education in India.
  `}
  badgeText="UGC Entitled | Industry-Aligned Curriculum | Innovation Focus"
  imgSrc="/images/upes.webp"
  imgAlt="UPES University"
  students="25K+" 
  partners="100+" 
  campus="Dehradun Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Specialized Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Industry Connections" },
    { icon: <FaGraduationCap className="text-blue-600" />, text: "Academic Excellence" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>

 <div>
  <AccreditationSection
    title="Why Choose Sikkim Manipal University?"
    description="Sikkim Manipal University offers UGC-recognized online degrees with industry-relevant curriculum, flexible learning, career support, and a strong alumni network to help students succeed globally."
    stats={[]} 
    benefits={[
      {
        title: "Industry-Aligned Curriculum",
        description: "Programs designed in collaboration with industry experts to meet current market demands",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"/>
                  </svg>`,
      },
      {
        title: "Dedicated Academic Advisor",
        description: "Dedicated experts and advisor to guide you at every step of your professional career",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>`,
      },
      {
        title: "Career Services",
        description: "Be job-ready with resume building workshops, internships & industry mentorship",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/>
                  </svg>`,
      },
      {
        title: "Placement Opportunities",
        description: "Job interview prep, placement assistance & resume building for students to be job-ready",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
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

      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003b59] font-[Poppins] mb-6">
            UPES University Online Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            UPES University Explore undergraduate and postgraduate online degree programs . Experience quality, flexibility, and career-focused education from one of India's top universities in energy and technology domains.
          </p>
        </div>
      </section>

      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* PG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>



      {/* Admission Process */}
     <AdmissionProcedure/> 


      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/upes-certificate.webp" alt="UPES University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>

          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from UPES University
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              UPES University Online provides comprehensive services including e-lectures, counseling from academic advisors, career assistance, and more to help students succeed in their professional journeys.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits of UPES Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Live Classes by Industry Experts</li>
              <li>Career Assistance & Exclusive Virtual Job Fairs</li>
              <li>Globally recognized degrees equivalent to on-campus programs</li>
              <li>Practical & Immersive Learning through industry-relevant curriculum</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our learners work at
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Top hiring partners at UPES Online
            </p>
          </div>

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
              <Image width={100} height={100} loading="lazy" src="/images/ibm.webp" alt="Company4" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/company6.webp" alt="Company 6" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/tcs.webp" alt="Companany5" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/adove.webp" alt="Adove" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upes;
