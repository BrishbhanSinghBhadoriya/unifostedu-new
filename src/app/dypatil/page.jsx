'use client';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import EnquireCard from '@/components/EnquireCard';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck } from "react-icons/fa";
import Image from 'next/image';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
const Dypatil = () => {
   const [expandedItems, setExpandedItems] = useState({});
  
    const toggleExpanded = (type, index) => {
      setExpandedItems(prev => ({
        ...prev,
        [`${type}-${index}`]: !prev[`${type}-${index}`]
      }));
    };
  
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fees: "₹1,45,400",
      eligibility: "10+2 Pass",
      specialization: "IT & System Management, International Business Management, Retail Management, Banking, Financial Services and Insurance Management, Shipping & Logistics Management, Marketing Management, Human Resource Management (HRM), Finance Management, E-commerce Management ",
      image: "/images/bba.webp",
    },
  
   
  ];

  const pgCourses = [
   
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹1,40,000",
      eligibility: "Graduation with 50% Marks",
       specialization: "General",
      image: "/images/mca1.webp",
    },
    

    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,89,400",
      specialization: "Marketing Management, Human Resource Management, Finance Management, IT Management, Project Management, Operations Management, Hospital Administration & Healthcare Management, International Business Management, FinTech Management, Business Analytics Management, Artificial Intelligence & Machine Learning Management, Logistics, Materials & Supply Chain Management, Blockchain Management, Digital Marketing Management, Agri-Business Management",

      image: "/images/mba.webp",
    },
  ];



   // Function to render expandable content
    const renderExpandableContent = (content, type, index, limit = 80) => {
      const isExpanded = expandedItems[`${type}-${index}`];
      const shouldTruncate = content.length > limit;
      const displayText = shouldTruncate && !isExpanded 
        ? `${content.substring(0, limit)}...` 
        : content;
      
      return (

        <div>
          <p className="mt-1 text-gray-700">
            {displayText}
            {shouldTruncate && (
              <button 
                onClick={() => toggleExpanded(type, index)}
                className="text-blue-600 font-medium ml-1 flex items-center"
              >
                {isExpanded ? 'Show less' : 'More'} 
                {isExpanded ? <FaChevronUp className="ml-1" size={12} /> : <FaChevronDown className="ml-1" size={12} />}
              </button>
            )}
          </p>
        </div>
      );
    };
  

      // Course Card Component
  const CourseCard = ({ item, index, type }) => {
    return (
      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <Image
            src={item.image} 
            alt={item.course} 
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h4 className="text-xl font-bold text-gray-900 mb-3 font-[Poppins]">{item.course}</h4>
          
          <div className="space-y-3 mb-4 flex-grow">
            <div className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Duration</span>
              <span className="ml-2 text-gray-700">{item.duration}</span>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Fees</span>
              <span className="ml-2 text-gray-700">{item.fees}</span>
            </div>
            
            <div>
              <div className="flex">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Specialization</span>
              </div>
              {renderExpandableContent(item.specialization, `${type}-specialization`, index)}
            </div>
            
            <div>
              <div className="flex">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Eligibility</span>
              </div>
              {renderExpandableContent(item.eligibility, `${type}-eligibility`, index)}
            </div>
          </div>
          
          <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 w-full">
            Enquire Now
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
     
       <Head>
        <title>DY Patil University Online </title>
        <meta 
          name="description" 
          content=" DY Patil University Online to pursue flexible UG and PG programs like BBA, MCA, and MBA. UGC-approved, NAAC A++ accredited, with career support and global recognition." 
        />
        <meta 
          name="keywords" 
          content="DY Patil University Online, Online BBA, Online MCA, Online MBA, UGC approved university, NAAC A++ accreditation, Online degrees India, Flexible learning, Career growth programs, Online higher education" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/dypatil/" />
      </Head>
    <HeroSection
  universityName="DY Patil University Online"
  location="Pune, Maharashtra, India"
  type="Private University"
  nirfRank="" // Add if available
  rating="" // Add if available
  description="NAAC A++ Accredited | UGC & AICTE Approved | Flexible Online Degrees"
  description2={`
    DY Patil University offers flexible online degrees in collaboration with Harvard, aimed at career growth 
    for students and professionals alike. With expert faculty and 24/7 learning support, learners gain both 
    academic knowledge and practical skills. 

    DY Patil University Online is recognized by the University Grants Commission (UGC) and the All India Council 
    for Technical Education (AICTE), and accredited by NAAC with an A++ grade. It offers a range of undergraduate 
    and postgraduate programs in Business Administration, Computer Applications, and more. 

    The online platform ensures flexibility for working professionals and students to learn at their own pace 
    while receiving quality education from experienced faculty.
  `}
  badgeText="UGC | AICTE | NAAC A++ Recognized"
  imgSrc="/images/dypatil.webp"
  imgAlt="DY Patil University Online Campus"
  students="—" // Replace with actual numbers
  partners="—" // Replace with actual numbers
  campus="Pune Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Learning" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career Growth" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC & AICTE Recognized" },
  ]}
/>


<div>
  <AccreditationSection
    title="Why Choose DY Patil Online?"
    description="Recognized by UGC, NAAC A+, and AICTE. DY Patil offers flexible online learning with expert faculty, career services, and placement support."
    stats={[]} // Currently no numerical stats
    benefits={[
      {
        title: "UGC-Approved & Accredited",
        description: "Recognized by UGC and accredited by NAAC A+.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                  </svg>`,
      },
      {
        title: "Experienced Faculty",
        description: "Learn from top educators and industry experts.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>`,
      },
      {
        title: "Career Services",
        description: "Internships, workshops & job readiness programs.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                  </svg>`,
      },
      {
        title: "Placement Support",
        description: "Placement help for your dream job.",
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
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>

      {/*  Courses */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">UG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                          {ugCourses.map((item, index) => (
                <EnquireCard key={index} {...item} universityName="Dr. DY Patil Online" />
              ))}
          </div>
        </div>
      </section>

      {/*  Certificate */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">PG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                          {pgCourses.map((item, index) => (
                <EnquireCard key={index} {...item} universityName="Dr. DY Patil Online" />
              ))}
          </div>
        </div>
      </section>


      {/* Admission Steps */}
     <AdmissionProcedure />

    

      <section className="bg-[#003366] py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Certificate Image */}
    <div className="flex-1">
      <Image
        src="/images/dycertificates.webp"
        alt="Dr. DY Patil"width={100} height={100} loading="lazy"
        className="w-full max-w-md mx-auto rounded shadow-lg"
      />
    </div>

      {/* Text Content */}
    <div className="flex-1 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Online Degree from Dr. DY Patil Online University
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Dr. DY Patil Online provides a great opportunity to earn a degree from a prestigious institution. The online programs are designed to be flexible and accessible, allowing students to balance their studies with work and personal commitments.
        The degrees offered are equivalent to on-campus programs and are recognized globally. With a focus on quality education, Dr. DY Patil Online ensures that students receive the same level of academic rigor and support as traditional students.
      </p>

      <h3 className="text-xl font-semibold mb-2">Benefits of Dr. DY Patil Online</h3>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Regular Live classes that help students to learn with a flexible time.</li>
        <li>Career Assistance & Exclusive Virtual Job Fairs</li>
        <li>Equivalent to Dr. DY Patil (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
        <li>Hands-on & Immersive Learning through world-Class Experince</li>
      </ul>
    </div>
  </div>
</section>
      {/* Hiring Partners Section */}

      
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
        <Image src="/images/3.webp" width={100} height={100} loading="lazy"alt="Company" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/4.webp" width={100} height={100} loading="lazy"alt="Microsoft" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/5.webp" width={100} height={100} loading="lazy"alt="Company 9" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/6.webp" width={100} height={100} loading="lazy"alt="Company 10" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/7.webp" width={100} height={100} loading="lazy"alt="Company4" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/8.webp" width={100} height={100} loading="lazy" alt="Company 6" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/9.webp" width={100} height={100} loading="lazy"alt="Companany5" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/company1.webp" width={100} height={100} loading="lazy"alt="Adove" className="h-12 object-contain" />
      </div>
<div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/company6.webp" width={100} height={100} loading="lazy"alt="Samsung4" className="h-12 object-contain" />
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/nestle.webp" width={100} height={100} loading="lazy"alt="Samsung8" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/microsoft.webp"width={100} height={100} loading="lazy" alt="Samsung9" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/icici.webp" width={100} height={100} loading="lazy"alt="Samsung" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <Image src="/images/hp.webp" width={100} height={100} loading="lazy"alt="Samsung2" className="h-12 object-contain" />
      </div>
      \
      {/* Add more cards here as needed */}
    </div>
  </div>
</section>
    </>
  );
};


export default Dypatil;
