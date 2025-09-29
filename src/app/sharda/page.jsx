'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUserTie,
  FaBriefcase,
  FaClipboardCheck,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
const Sharda = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "₹1,05,000",
      specialization: "General,",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in Sharda Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "₹1,05,000",
      specialization: "General,",
      image: "/images/bca.webp",
      alt: "Bachelor of Computer Applications (BCA) in Sharda Online",
    },
    {
      course: "Bachelor of Arts (Hons.)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹105,000",
      specialization: " Political Science,",
      image: "/images/ba.webp",
      alt: "Bachelor of Arts (Hons.) in Sharda Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor’s Degree of minimum 3 years duration.",
      fees: "₹1,00,000- ₹1,60,000",
      specialization: ["Data Science and Analytics, Marketing, Healthcare and Hospital Administration, Human Resource Management, Sales and Marketing, Finance"],
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in Sharda Online",
    },
      
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Candidates must hold a BCA/Bachelor's in Computer Science Engineering oran equivalent degree, or a B.Sc./B.Com./B.A. with Mathematics at 10+2 orgraduation level (with bridge courses as needed).",
      fees: "₹1,00,000",
      specialization: "Computer Science and Information Technology, Data Science",
      image: "/images/mca1.webp",
      alt: "Master of Computer Applications (MCA) in Sharda Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹50,000",
      specialization: "Master of commerce",
      image: "/images/m.com.webp",
      alt: "Master of Commerce (M.Com) in Sharda Online",
    },
 
  ];

  return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      <Head>
  <title>Sharda University Online Programs | Fees & Admission</title>
  <meta name="description" content="Explore online UG & PG programs from Sharda University. Check fees, eligibility, and enquire now." />
</Head>

      {/* Intro Section */}
  <HeroSection
  universityName="Sharda University Online"
  location="Greater Noida, Uttar Pradesh, India"
  type="Private University"
  nirfRank="NAAC A+"
  rating="4.3"
  description="Sharda University Online is NAAC A+ accredited and offers globally recognized online degrees. Join learners from over 85 countries and experience academic excellence with dedicated career support and world-class faculty."
  description2={`
    Sharda University Online is a platform for distance and online education launched by Sharda University in 2023. 
    It offers a variety of undergraduate and postgraduate courses, including online BA, MBA, MCA, BBA, and BCA programs. 
    The platform emphasizes flexibility, accessibility, and affordability, allowing students to pursue their education while balancing work and other commitments.
  `}
  badgeText="NAAC A+ Accredited | Global Recognition | Flexible Online Learning"
  imgSrc="/images/sharda.webp"
  imgAlt="Sharda University"
  students="85+ Countries"
  partners="200+"
  campus="Greater Noida Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "World-Class Curriculum" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty & Mentors" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career-Oriented Programs" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Student Community" },
  ]}
/>


      <div>
  <AccreditationSection
    title="Why Choose Sharda Online?"
    description="Sharda University Online offers NAAC A+ accredited, globally recognized online degrees with expert faculty, interactive resources, career support, and placement opportunities."
    stats={[]} 
    benefits={[
      {
        title: "Interactive Learning",
        description: "Flexible e-books, recorded lectures, audio books, and discussion forums.",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" 
  class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
</svg>`

      },
      {
        title: "Expert Faculty",
        description: "Learn from experienced professionals and globally recognized professors.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>`,
      },
      {
        title: "Career Focused",
        description: "Resume building, internships, interview preparation, and job fairs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/>
                  </svg>`,
      },
      {
        title: "Placement Support",
        description: "Guaranteed placement assistance with top hiring partners across domains.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"/>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
      { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
    ]}
    internationalRecognition={[]} 
    successStories={[]} 
  />
</div>


      {/* Courses Offered */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Sharda University" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Sharda University" />
            ))}
          </div>
        </div>
      </section>

    
      
      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/certificateshardaonline.webp" alt="certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Online Degree from Sharda Online University</h2>
            <p className="mb-6 text-lg">Earn a UGC-Entitled, Globally Recognized Degree with Sharda Online!</p>
            <h3 className="text-xl font-semibold mb-2"></h3>
            <ul className="list-disc list-inside space-y-2">
              <li>UGC-Entitled & NAAC A+ Accredited</li>
              <li>Degree from a Globally Ranked University</li>
              <li>Recognized & Accepted in India and Abroad</li>
              <li>Equivalent to Sharda’s On-Campus Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <AdmissionProcedure/> 

      {/* Hiring Companies */}


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

export default Sharda;
