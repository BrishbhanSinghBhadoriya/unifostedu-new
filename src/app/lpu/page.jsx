'use client';
import React, { useState } from "react";
// import Image from 'next/image';
import HeroSection from "@/components/HeroSection";
import AccreditationSection from "@/components/AccreditationSection";

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
import EnquireCard from '@/components/EnquireCard';
import Image from 'next/image';
import AdmissionProcedure from "@/components/AdmissionProcedure";


const Lpu = () => {
  const [activeTab, setActiveTab] = useState('ug');
  
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000",
      specialization: "General",
      image: "/images/bba.webp",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹ 1,50,000",
      specialization: "General",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelor's of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "₹ 1,20,000",
      specialization: "General",
      image: "/images/ma1.webp",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 2,00,000",
      specialization: "Human Resource Management, Finance, Marketing, Operations Management, Business Analytics, Digital Marketing, Data Science, Information Technology, International Business, Banking & Financial Services, Hospital & Healthcare Management, Logistics & Supply Chain Management",
      image: "/images/mba.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT) & equivalent degree with 50%",
      fees: "₹ 1,48,000",
      specialization: "Machine Learning & Artificial Intelligence (ML & AI), Data Science, Cybersecurity, Full Stack Web Development, Augmented Reality/Virtual Reality (AR/VR) & Game Development", 
      image: "/images/mca1.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹ 1,00,000",
      specialization: "General", 
      image: "/images/m.com.webp",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 80,000",
      specialization: "English, History, Political Science, Sociology,",
      image: "/images/ma1.webp",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 80,000",
      specialization: "Mathmatics, Economics",
      image: "/images/ma1.webp",
    },
  ];

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
    <HeroSection
  universityName="Lovely Professional University Online"
  location="Jalandhar, Punjab, India"
  type="Private University"
  nirfRank="38"
  rating="4.7/5"
  description="NAAC A++ Accredited | One of India’s Largest Universities | 100% Online Programs"
  description2="
             Lovely Professional University (LPU) is a top-ranking university in India in various academic disciplines, ranked by NIRF. LPU Online is no different as it is one of the top online education providers in India
              
             The university has various affiliations including recognition from University Grants Commission (UGC), All India Council for Technical Education (AICTE), and World Education Services (WES). The university has been ranked by NIRF, WURI, and The World University Rankings 2022. The quality of education this university provides is quite evident from its NAAC A++ grading.
             "
  badgeText="UGC, AICTE, WES, NAAC A++ Recognized"
  imgSrc="/images/lpu.webp"
  imgAlt="Lovely Professional University Online Campus"
  students="45K"
  partners="700"
  campus="Jalandhar Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Learning" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career Support" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Recognized Degrees" },
  ]}
/>  
<div>
      <AccreditationSection
        title="Why Choose LPU Online?"
        description="Access flexible learning, expert faculty, career support, and globally recognized degrees."
        stats={[]} // No numerical stats in this section
        benefits={[
          {
            title: "Flexible Learning",
            description: "Access recorded lectures, live classes, and study materials anytime, anywhere.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                      </svg>`,
          },
          {
            title: "Expert Faculty",
            description: "Learn from experienced professors and industry experts.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>`,
          },
          {
            title: "Career Support",
            description: "Resume building, interview preparation, and placement assistance.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                      </svg>`,
          },
          {
            title: "UGC Recognized",
            description: "Degrees equivalent to on-campus programs with global recognition.",
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
          { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
          { src: "/images/qs.webp", alt: "QS Ranking", name: "QS" },
        ]}
        internationalRecognition={[]}
        successStories={[]}
      />
    </div>


      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
  {ugCourses.map((item, index) => (
    <EnquireCard key={index} {...item} universityName="Lovely Professional University Online" />
  ))}
</div>

        </div>
      </section>

      {/* PG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
  {pgCourses.map((item, index) => (
    <EnquireCard key={index} {...item} universityName="Lovely Professional University Online" />
  ))}
</div>

        </div>
      </section>



     {/*Admission Steps*/}
     <AdmissionProcedure />


      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/lpu-certificate.webp" alt="LPU Online Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from LPU
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              LPU Online provides comprehensive services including live classes, recorded lectures, 
              academic counseling, and career support to help students succeed in their professional journeys.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefits of LPU Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Interactive live classes with industry experts</li>
              <li>Placement assistance and career counseling</li>
              <li>UGC-recognized degrees equivalent to on-campus programs</li>
              <li>Flexible learning with 24/7 access to study materials</li>
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
              Top hiring partners at LPU Online
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Lpu;