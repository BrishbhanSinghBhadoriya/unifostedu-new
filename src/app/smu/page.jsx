'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
} from 'react-icons/fa';
import { FaBookOpen, FaUserTie,  FaGlobe } from "react-icons/fa";

import Head from 'next/head';
import Image from 'next/image';
import EnquireCard from '@/components/EnquireCard';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';



const SMU = () => {
  
 const ugCourses = [
  {
    course: "Bachelor of Arts (BA)",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    fees: "₹75,000",
    specialization: "English + Sociology + Political Science",
    image: "/images/ba.webp",
    alt: "Bachelor of Arts (BA) in SMU Online",
  },
  {
    course: "Bachelor of Commerce (B.Com)",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    fees: "₹75,000",
    specialization: "Genral",
    image: "/images/bcom.webp",
    alt: "Bachelor of Commerce (B.Com) in SMU Online",
  },
];

const pgCourses = [
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Graduation with minimum 50% marks",
    fees: "₹1,10,000",
    specialization: "dual Specialization(Marketing, Finance, HR, systems, Operations and Supply Chain Management, Healthcare Management)",
    image: "/images/mba.webp",
    alt: "Master of Business Administration (MBA) in SMU Online",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "Graduation in minimum 50% marks",
    fees: "₹98,000",
    specialization: "General",
    image: "/images/mca1.webp",
    alt: "Master of Computer Applications (MCA) in SMU Online",
  },
  {
    course: "Master of Arts ",
    duration: "2 Years",
    eligibility: "Graduation in relevant stream",
    fees: "₹75,000",
    specialization: "English / Sociology / Political Science",
    image: "/images/ma1.webp",
    alt: "Master of Arts (M.A.) in SMU Online",
  },
  {
    course: "Master of Commerce (M.Com)",
    duration: "2 Years",
    eligibility: "Graduation in Commerce or equivalent",
    fees: "₹75,000",
    specialization: "General",
    image: "/images/bcom.webp",
    alt: "Master of Commerce (M.Com) in SMU Online",
  },
];

  return (
    <>

     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />,
      <Head>
        <title>Sikkim Manipal University (SMU) Online | Courses, Fees & Admission</title>
        <meta 
          name="description" 
          content="Sikkim Manipal University (SMU) offers UGC-recognized online UG & PG programs like MBA in SMU, MCA in SMU, B.Com in SMU, and BA in SMU, and BA in SMU. Explore fees, eligibility, admission process, and placement support." 
        />
        <meta 
          name="keywords" 
          content="Sikkim Manipal University Online, SMU MBA Online, SMU MCA, SMU Online Courses, SMU Admission, SMU Distance Learning, SMU Fees, Online BA, Online B.Com" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/smu" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      {/* Intro Section */}
    <HeroSection
  universityName="Sikkim Manipal University Online"
  location="Sikkim, India"
  type="Private University"
  nirfRank="100+" // Agar rank available ho to replace karein
  rating="4.3"  // Agar rating available ho to replace karein
  description="Sikkim Manipal University offers industry-relevant online programs with UGC recognition. With a focus on flexible learning and career advancement, SMU provides quality education that fits your schedule while maintaining academic excellence."
  description2={`
    SMU's online degrees are designed to help working professionals upskill and 
    advance in their careers without putting their lives on hold. 
    With a wide variety of undergraduate and postgraduate programs, SMU ensures 
    accessibility, flexibility, and career growth opportunities.
  `}
  badgeText="UGC Recognized | Flexible Learning | Career Advancement"
  imgSrc="/images/smu-uni.webp"
  imgAlt="Sikkim Manipal University"
  students="25K+" 
  partners="200+" 
  campus="Sikkim Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Career-Oriented" },
    { icon: <FaGraduationCap className="text-blue-600" />, text: "Academic Excellence" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>
   
    {/* Why Choose Section */}
      <div>
  <AccreditationSection
    title="Why Choose Sikkim Manipal University?"
    description="Sikkim Manipal University offers UGC-recognized online degrees with industry-relevant curriculum, flexible learning, career support, and a strong alumni network to help students succeed globally."
    stats={[]} 
    benefits={[
      {
        title: "UGC Recognized Degrees",
        description: "All programs are recognized by the University Grants Commission.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l4 8H8l4-8zm0 12a4 4 0 110-8 4 4 0 010 8zm-6 6h12v-2H6v2z"/>
                  </svg>`,
      },
      {
        title: "Industry-Relevant Curriculum",
        description: "Programs designed to meet current industry requirements.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"/>
                  </svg>`,
      },
      {
        title: "Flexible Learning Options",
        description: "Study at your own pace with online resources.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>`,
      },
      {
        title: "Expert Faculty",
        description: "Learn from experienced professors and industry experts.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>`,
      },
      {
        title: "Placement Assistance",
        description: "Career support and placement opportunities.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/>
                  </svg>`,
      },
      {
        title: "Strong Alumni Network",
        description: "Connect with professionals across industries.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 20c0-5.33 9.33-8 10-8s10 2.67 10 8v2H2v-2z"/>
                  </svg>`,
      },
      {
        title: "Digital Learning Platform",
        description: "Access to comprehensive online learning resources.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v12H4V6z"/>
                  </svg>`,
      },
      {
        title: "Affordable Education",
        description: "Quality education at competitive fee structures.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
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
      {/* Courses Offered */}
    
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

     


      {/* Admission Procedure */}
    <AdmissionProcedure/> 


      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image width={100} height={100} loading="lazy" src="/images/smu.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">UGC-Entitled Online Degrees from SMU</h2>
            <p className="mb-6 text-lg">
              Earn a recognized degree that holds the same value as a regular degree, with the flexibility to learn from anywhere.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC Recognized Online Degrees</li>
              <li>Learn from Industry Experts</li>
              <li>Comprehensive Study Material</li>
              <li>Dedicated Student Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
          <p className="text-xl text-gray-600">Top Hiring Partners of SMU</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/company.webp", "/images/company1.webp", "/images/company9.webp", "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", "/images/adove.webp", "/images/samsung.webp","/images/ey.webp","/images/ibm.webp","/images/hp.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SMU;