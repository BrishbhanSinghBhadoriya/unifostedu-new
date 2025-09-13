'use client';

import React from 'react';
import EnquireCard from '@/components/EnquireCard';
import {
  FaBookOpen,
  FaUserTie,
  FaBriefcase,
  FaClipboardCheck,
} from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs'
import AdmissionProcedure from '@/components/AdmissionProcedure';


 const metadata = {
  title: "Kurukshetra University Online - UG & PG Courses in India",
  description: "Explore online undergraduate (BBA, BCA, B.Com) and postgraduate (MBA, MCA, M.Com, MA) programs offered by Kurukshetra University Online, NAAC A++ accredited. Flexible and career-focused education in Haryana, India.",
  keywords: "Kurukshetra University Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, NAAC A++ University, Online Degree Programs Haryana, Distance Learning, Online Courses India",
  openGraph: {
    title: "Kurukshetra University Online - UG & PG Courses in India",
    description: "Explore online undergraduate and postgraduate programs offered by Kurukshetra University Online, NAAC A++ accredited, Haryana, India.",
    images: ["/images/ku.webp"],
  },
};

const KU = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Business Administration",
      image: "/images/bba.webp",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Computer Applications",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Commerce",
      image: "/images/bcom.webp",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹98,545",
      specialization: "General Management",
      image: "/images/mba.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹76,667",
      specialization: "Computer Applications",
      image: "/images/mca1.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹54,036",
      specialization: "Commerce",
      image: "/images/m.com.webp",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹72,661",
      specialization: "English, Journalism & Mass Communication, Political Science",
      image: "/images/ma1.webp",
    },
    {
      course: "MBA (Specializations)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹119,845",
      specialization: "Finance Management, Information Technology Management, Human Resource Management, Marketing, Business Analytics",
      image: "/images/mba.webp",
    },
  ];
 
  const allCourses = [
    ...ugCourses.map(course => ({ ...course, type: "UG" })),
    ...pgCourses.map(course => ({ ...course, type: "PG" })),
    
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      <head>

        <title>Kurukshetra University Online </title>
        <meta
          name="description"
          content="Explore online undergraduate (BBA, BCA, B.Com) and postgraduate (MBA, MCA, M.Com, MA) programs offered by Kurukshetra University Online, NAAC A++ accredited. Flexible and career-focused education in Haryana, India."
        />
        <meta
          name="keywords"
          content="Kurukshetra University Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, NAAC A++ University, Online Degree Programs Haryana, Distance Learning, Online Courses India"
        />
        <meta name="author" content="Kurukshetra University Online" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Kurukshetra University Online - UG & PG Courses in India" />
        <meta property="og:description" content="Explore online undergraduate and postgraduate programs offered by Kurukshetra University Online, NAAC A++ accredited, Haryana, India." />
        <meta property="og:image" content="/images/ku.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kurukshetrauniversityonline.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kurukshetra University Online - UG & PG Courses in India" />
        <meta name="twitter:description" content="Explore online undergraduate and postgraduate programs offered by Kurukshetra University Online, NAAC A++ accredited, Haryana, India." />
        <meta name="twitter:image" content="/images/ku.webp" />
      </head>
      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Shape Your Future with Kurukshetra University Online
            </h1>
            <br />
            <p><span className="font-semibold text-gray-700">State University in Kurukshetra, Haryana, India.</span><br /><br /></p>
            <p className="text-gray-700 text-lg">
              Kurukshetra University Online offers UGC-entitled online degree programs with a legacy of academic excellence. 
              Established in 1956, the university is named after the ancient land of Kurukshetra, renowned as the setting of the epic Mahabharata.
              <br /><br />
              With NAAC 'A++' grade accreditation, Kurukshetra University provides quality education that combines traditional values with modern learning approaches to help students build successful careers.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image width={100} height={100} loading='lazy' src="/images/ku.webp" alt="Kurukshetra University" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003b59] font-[Poppins] mb-6">
            Kurukshetra University Online Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore undergraduate and postgraduate online degree programs from Kurukshetra University. 
            Experience the perfect blend of tradition and innovation in education from one of Haryana's premier NAAC A++ accredited universities.
          </p>
        </div>
      </section>

<section className="py-12 px-6 bg-white font-[Inter]">
  <h2 className="text-2xl font-bold text-center mb-6 text-[#003b59] font-[Poppins]">
    Kurukshetra University Online Programs
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
          <EnquireCard key={idx} {...course} universityName="Kurukshetra University Online" />
        ))}
      </div>
    </Tabs.Content>

    {/* UG Courses */}
    <Tabs.Content value="ug">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        {ugCourses.map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName="Kurukshetra University Online" />
        ))}
      </div>
    </Tabs.Content>

    {/* PG Courses */}
    <Tabs.Content value="pg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        {pgCourses.map((course, idx) => (
          <EnquireCard key={idx} {...course} universityName=" Kurukshetra University Online" />
        ))}
      </div>
    </Tabs.Content>
  </Tabs.Root>
</section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Kurukshetra University Online?
          </h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-start text-left">
            <FaBookOpen className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Diverse Learning Resources</h4>
            <p className="text-gray-600 text-sm">
              Access to e-books, video lectures, and interactive learning materials tailored to different learning styles
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <FaUserTie className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty Support</h4>
            <p className="text-gray-600 text-sm">
              Learn from experienced faculty members and receive personalized academic guidance throughout your program
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <FaBriefcase className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Development Services</h4>
            <p className="text-gray-600 text-sm">
              Enhance your employability with resume workshops, interview preparation, and career counseling
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <FaClipboardCheck className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Placement Assistance</h4>
            <p className="text-gray-600 text-sm">
              Get support in connecting with potential employers through our placement cell and industry partnerships
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Recognized & Accredited By
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-20 px-4">
          <Image width={100} height={100} loading='lazy' src="/images/ugc.webp" alt="UGC" className="h-16 object-contain" />
          <Image width={100} height={100} loading='lazy'src="/images/naac.webp" alt="NAAC" className="h-16 object-contain" />
          <Image width={100} height={100} loading='lazy'src="/images/nirf.webp" alt="NIRF" className="h-16 object-contain" />
          <Image width={100} height={100} loading='lazy'src="/images/aiu.webp" alt="AIU" className="h-16 object-contain" />
        </div>
      </section>
   {/* Admission Procedure */}
      <AdmissionProcedure />

      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading='lazy' src="/images/ku-certi.webp" alt="Kurukshetra University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
              
            
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from Kurukshetra University
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Kurukshetra University Online offers flexible learning opportunities with the same rigor and value as on-campus programs. 
              Our online degrees are designed for working professionals and students who need flexibility without compromising on quality.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefits of KU Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC-entitled degrees recognized nationwide</li>
              <li>Learn from experienced faculty members</li>
              <li>Flexible learning schedule to balance work and study</li>
              <li>Comprehensive study material and online resources</li>
              <li>Affordable fee structure with easy payment options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Alumni Work At
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Reputed organizations where KU graduates have built successful careers
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100}loading="lazy" src="/images/company.webp" alt="Company" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100}loading="lazy" src="/images/company1.webp" alt="Microsoft" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100}loading="lazy" src="/images/company9.webp" alt="Company 9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100}loading="lazy" src="/images/com10.webp" alt="Company 10" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KU;