import React from "react";

import { FaCheckCircle, FaFileAlt, FaGraduationCap, FaUniversity, FaCertificate, FaBuilding } from 'react-icons/fa';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck } from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';

export const metadata = {
  title: "Manipal Online Degrees | MAHE Courses",
  description: "Explore online programs from Manipal Academy of Higher Education (MAHE). NAAC A++ accredited, UGC recognized degrees. Enquire now for BBA, BBA Hons, B.Com, MBA, MCA, M.Sc courses.",
  keywords: "Manipal Online, MAHE Online, BBA in mahe Online, BBA in mahe Hons Online, B.Com in mahe Online, MBA in mahe Online, MCA in mahe Online, M.Sc in mahe Online, Manipal Online, Distance Learning India, NAAC A++, UGC Recognized Online Degree, Flexible Online Education, Online Courses MAHE",
  author: "Manipal Academy of Higher Education",
  robots: "index, follow",
  openGraph: {
    title: "Manipal Online Degrees | Manipal Academy of Higher Education Courses",
    description: "Explore undergraduate and postgraduate online programs from MAHE, NAAC A++ accredited. Flexible and career-focused education.",
    image: "/images/mahe-uni.webp",
    type: "website",
    url: "https://unifostedu.com/mahe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal Online Degrees | Manipal Academy of Higher Education Courses",
    description: "Explore online undergraduate and postgraduate programs from MAHE, NAAC A++ accredited. Flexible and career-focused education.",
    twitterImage: "/images/mahe-uni.webp",
  },
};

const Manipal = () => {
 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "1,80,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology (FinTech), Marketing Management, Human Resource Management",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in MAHE Online",
    },
     {
      course: "Bachelor of Business Administration (BBA)  Hons",
      duration: "4 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "2,40,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology (FinTech), Marketing Management, Human Resource Management",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) Hons in MAHE Online",
    },
   
    {
      course: "Bachelor of Commerce (Professional)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 50%",
      fees: " 2,94,000",
      specialization: "General",
      image: "/images/bcom.webp",
      alt: "Bachelor of Commerce (Professional) in MAHE Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,92,000",
      specialization: "Healthcare Management, Finance, Marketing, Operations Management, Pharmaceutical Management, Business Analytics Management, Logistics & Supply Chain Management, Data Science, Human Resource Management",
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in MAHE Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,20,000",
      specialization: "AI & ML, Cloud Computing, Cyber Security, Full Stack Development", 
      image: "/images/mca1.webp",
      alt: "Master of Computer Applications (MCA) in MAHE Online",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "50% in Graduation",
      fees: "2,80,000",
      specialization: "Data Science, Business Analytics", 
      image: "/images/m.com.webp",
      alt: "Master of Science (M.Sc) in MAHE Online",
    },
  
    
  ];


  

  return (
    <>
      {/* Intro Section */}
<div>
  <HeroSection
    universityName="Manipal Academy of Higher Education (MAHE)"
    location="Manipal, Karnataka, India"
    type="Private University"
    nirfRank="4"
    rating="NAAC A++"
    description="Institution of Eminence | NAAC A++ Accredited | Global Recognition | Excellence in Education since 1953"
    description2={`
      Manipal Academy of Higher Education (MAHE) is synonymous with excellence in higher education. 
      Recognized as an Institution of Eminence (IoE) with NAAC A++ rating, MAHE has been a pioneer in delivering world-class education across diverse streams since 1953. 
      Ranked #4 by NIRF, the university is home to a legacy of excellence and a network of notable alumni including Satya Nadella, Vikas Khanna, and Dr. Devi Prasad Shetty. 
      MAHE offers a wide range of in-demand bachelor's, master's, and professional certification programs in online mode to learners worldwide.
    `}
    badgeText="Institution of Eminence | NAAC A++ Accredited"
    imgSrc="/images/mahe-uni.webp"
    imgAlt="Manipal Academy of Higher Education Campus"
    students="35K+"   
    partners="15+"    
    campus="Manipal Campus"
    highlights={[
      { icon: <FaBookOpen className="text-blue-600" />, text: "World-Class Curriculum" },
      { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty & Mentors" },
      { icon: <FaBriefcase className="text-blue-600" />, text: "Career-Oriented Programs" },
      { icon: <FaClipboardCheck className="text-blue-600" />, text: "Institution of Eminence (IoE)" },
    ]}
  />
</div>

<div>
  <AccreditationSection
    title="Why Choose Manipal Academy of Higher Education?"
    description="Manipal Academy of Higher Education (MAHE) offers globally recognized degrees, expert mentorship, career support, and a legacy of academic excellence with strong accreditation."
    stats={[]} // No numerical stats
    benefits={[
      {
        title: "Top-Ranked Private University",
        description: "Recognized as one of India’s best private institutions.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.33 9.74-8 11-4.67-1.26-8-6-8-11V6l8-4z"/>
                  </svg>`,
      },
      {
        title: "Globally Recognized Degrees",
        description: "Accredited programs accepted worldwide by top employers.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                  </svg>`,
      },
      {
        title: "Flexible & Personalized Learning",
        description: "Learn anytime, anywhere with tailored academic support.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>`,
      },
      {
        title: "Expert Faculty Mentorship",
        description: "One-on-one guidance by experienced mentors & professors.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>`,
      },
      {
        title: "UGC & AICTE Approved",
        description: "Degrees entitled by UGC and recognized by AICTE.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"/>
                  </svg>`,
      },
      {
        title: "Global Alumni Network",
        description: "Join a network of learners from 50+ countries.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm-7 9c0-3 4-5 7-5s7 2 7 5v1H5v-1z"/>
                  </svg>`,
      },
      {
        title: "Career Support",
        description: "Internships, placements, resume help, and interview prep.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/>
                  </svg>`,
      },
      {
        title: "Digital Resources",
        description: "Access e-books, recorded classes, and online labs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z"/>
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
      { src: "/images/acu.webp", alt: "ACU", name: "ACU" },
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
              <EnquireCard key={index} {...item} universityName="Manipal University Online" />
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
              <EnquireCard key={index} {...item} universityName="Manipal Academy of Higher Educatione" />
            ))}
          </div>
        </div>
      </section>


      {/* Admission Procedure */}
    <AdmissionProcedure />


      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image width={100} height={100} loading="lazy" src="/images/mahe-certi.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognized Online Degree from Manipal Academy of Higher Education</h2>
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
              <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Manipal;