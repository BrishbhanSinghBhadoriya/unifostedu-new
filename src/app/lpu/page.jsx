'use client';
import React, { useState } from "react";
// import Image from 'next/image';

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
import Head from 'next/head';
import Image from 'next/image';
const Lpu = () => {
  const [activeTab, setActiveTab] = useState('ug');
  
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000",
      specialization: "General",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹ 1,50,000",
      specialization: "General",
      image: "/images/bca.jpeg",
    },
    {
      course: "Bachelor's of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "₹ 1,20,000",
      specialization: "General",
      image: "/images/ma1.jpeg",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 2,00,000",
      specialization: "Human Resource Management, Finance, Marketing, Operations Management, Business Analytics, Digital Marketing, Data Science, Information Technology, International Business, Banking & Financial Services, Hospital & Healthcare Management, Logistics & Supply Chain Management",
      image: "/images/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT) & equivalent degree with 50%",
      fees: "₹ 1,48,000",
      specialization: "Machine Learning & Artificial Intelligence (ML & AI), Data Science, Cybersecurity, Full Stack Web Development, Augmented Reality/Virtual Reality (AR/VR) & Game Development", 
      image: "/images/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹ 1,00,000",
      specialization: "General", 
      image: "/images/m.com.jpeg",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 80,000",
      specialization: "English, History, Political Science, Sociology,",
      image: "/images/ma1.jpeg",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹ 80,000",
      specialization: "Mathmatics, Economics",
      image: "/images/ma1.jpeg",
    },
  ];

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
       <head>

         <title>LPU Online Degrees | Lovely Professional University Courses</title>
        <meta
          name="description"
          content="Explore LPU online programs. UGC-recognized degrees with NAAC A++ accreditation. Enquire now for BBA, BCA, MBA, MCA, M.Com, MA, and M.Sc courses."
        />
        <meta
          name="keywords"
          content="LPU Online, Lovely Professional University Online, BBA Online, BCA Online, MBA Online, MCA Online, M.Com Online, MA Online, M.Sc Online, Distance Learning India, NAAC A++, UGC Recognized Online Degree, Flexible Online Education, Online Courses LPU"
        />
        <meta name="author" content="Lovely Professional University" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="LPU Online Degrees | Lovely Professional University Courses" />
        <meta property="og:description" content="Explore online undergraduate and postgraduate programs offered by LPU Online, NAAC A++ accredited. Flexible and career-focused education." />
        <meta property="og:image" content="/images/lpu.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lpuonline.in" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LPU Online Degrees | Lovely Professional University Courses" />
        <meta name="twitter:description" content="Explore online undergraduate and postgraduate programs offered by LPU Online, NAAC A++ accredited. Flexible and career-focused education." />
        <meta name="twitter:image" content="/images/lpu.png" />
       </head>
      

      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Transform Your Career with LPU Online
            </h1><br />
            <p> <span className="font-semibold text-gray-700">Private University in Jalandhar, Punjab, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
              Lovely Professional University (LPU) is a NAAC A++ accredited institution offering UGC-entitled online degree programs designed to provide flexible and quality education.<br /><br />
              With over 30,000 students on campus and a strong focus on innovation, LPU Online brings the same academic excellence through its digital platform, making education accessible to learners across India.
            </p>

            
          </div>
          <div className="md:w-1/2">
            <Image width={100} height={100} src="/images/lpu.png" alt="Lovely Professional University" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003b59] font-[Poppins] mb-6">
            LPU Online Degree Programs
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore undergraduate and postgraduate online degree programs from LPU. Experience quality, flexibility, and career-focused education from one of India's top NAAC A++ accredited universities.
          </p>
        </div>
      </section>

      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Lovely Professional University Online" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose LPU Online?
          </h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-start text-left">
            <FaBookOpen className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h4>
            <p className="text-gray-600 text-sm">
              Access recorded lectures, live classes, and study materials anytime, anywhere
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <FaUserTie className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h4>
            <p className="text-gray-600 text-sm">
              Learn from experienced professors and industry experts
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <FaBriefcase className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Support</h4>
            <p className="text-gray-600 text-sm">
              Resume building, interview preparation, and placement assistance
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <FaClipboardCheck className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">UGC Recognized</h4>
            <p className="text-gray-600 text-sm">
              Degrees equivalent to on-campus programs with global recognition
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Recognized & Accredited By
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-20 px-4">
          <Image width={100} height={100}  src="/images/ugc.png" alt="UGC" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/aicte.png" alt="AICTE" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/naac.png" alt="NAAC" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/nirf.png" alt="NIRF" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/wes.png" alt="WES" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/aiu.png" alt="AIU" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/qs.png" alt="RECOGIN" className="h-16 object-contain" />
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            Admission Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {[
              {
                step: "Step 1",
                description: "Fill the registration form on LPU Online portal",
              },
              {
                step: "Step 2",
                description: "Submit required documents and pay fees",
              },
              {
                step: "Step 3",
                description: "Complete verification process",
              },
              {
                step: "Step 4",
                description: "Get login credentials and start learning",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index !== 0 && (
                  <div className="absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900 z-0"></div>
                )}
                <div className="z-10 w-6 h-6 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
                </div>
                <h4 className="mt-4 font-semibold text-lg">{item.step}</h4>
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} src="/images/lpu.jpg" alt="LPU Online Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
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
              <Image width={100} height={100} src="/images/company.png" alt="Company" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/company1.png" alt="Microsoft" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/company9.jpg" alt="Company 9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/com10.png" alt="Company 10" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/companany4.png" alt="Company4" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/company6.png" alt="Company 6" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/companany5.png" alt="Companany5" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src="/images/adove.png" alt="Adove" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lpu;