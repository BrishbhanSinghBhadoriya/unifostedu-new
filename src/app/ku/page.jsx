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
const KU = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Business Administration",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Computer Applications",
      image: "/images/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Commerce",
      image: "/images/bcom.jpeg",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹98,545",
      specialization: "General Management",
      image: "/images/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹76,667",
      specialization: "Computer Applications",
      image: "/images/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹54,036",
      specialization: "Commerce",
      image: "/images/m.com.jpeg",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹72,661",
      specialization: "English, Journalism & Mass Communication, Political Science",
      image: "/images/ma1.jpeg",
    },
    {
      course: "MBA (Specializations)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹119,845",
      specialization: "Finance Management, Information Technology Management, Human Resource Management, Marketing, Business Analytics",
      image: "/images/mba.jpeg",
    },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      <head>

        <title>Kurukshetra University Online - UG & PG Courses in India</title>
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
        <meta property="og:image" content="/images/ku.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kurukshetrauniversityonline.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kurukshetra University Online - UG & PG Courses in India" />
        <meta name="twitter:description" content="Explore online undergraduate and postgraduate programs offered by Kurukshetra University Online, NAAC A++ accredited, Haryana, India." />
        <meta name="twitter:image" content="/images/ku.jpg" />
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
            <img src="/images/ku.jpg" alt="Kurukshetra University" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003b59] font-[Poppins] mb-6">
            Kurukshetra University Online Courses
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore undergraduate and postgraduate online degree programs from Kurukshetra University. 
            Experience the perfect blend of tradition and innovation in education from one of Haryana's premier NAAC A++ accredited universities.
          </p>
        </div>
      </section>

      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Kurukshetra University" />
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
              <EnquireCard key={index} {...item} universityName="Kurukshetra University" />
            ))}
          </div>
        </div>
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
          <img src="/images/ugc.png" alt="UGC" className="h-16 object-contain" />
          <img src="/images/naac.png" alt="NAAC" className="h-16 object-contain" />
          <img src="/images/nirf.png" alt="NIRF" className="h-16 object-contain" />
          <img src="/images/aiu.png" alt="AIU" className="h-16 object-contain" />
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
                description: "Fill the online application form on the university portal",
              },
              {
                step: "Step 2",
                description: "Upload required documents and pay the application fee",
              },
              {
                step: "Step 3",
                description: "Receive confirmation and student login credentials",
              },
              {
                step: "Step 4",
                description: "Complete fee payment and begin your classes",
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
            <img
              src="/images/ku-certi.webp"
              alt="Kurukshetra University Certificate"
              className="w-full max-w-md mx-auto rounded shadow-lg"
            />
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
              <img src="/images/company.png" alt="Company" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src="/images/company1.png" alt="Microsoft" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src="/images/company9.jpg" alt="Company 9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src="/images/com10.png" alt="Company 10" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KU;