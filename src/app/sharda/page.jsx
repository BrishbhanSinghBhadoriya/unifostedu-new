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
} from "react-icons/fa";
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
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
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "₹1,05,000",
      specialization: "General,",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelor of Arts (Hons.)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹105,000",
      specialization: " Political Science,",
      image: "/images/ba.webp",
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
    },
      
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Candidates must hold a BCA/Bachelor's in Computer Science Engineering oran equivalent degree, or a B.Sc./B.Com./B.A. with Mathematics at 10+2 orgraduation level (with bridge courses as needed).",
      fees: "₹1,00,000",
      specialization: "Computer Science and Information Technology, Data Science",
      image: "/images/mca1.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹50,000",
      specialization: "Master of commerce",
      image: "/images/m.com.webp",
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
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Study Smarter with Sharda University Online
            </h1>
            <p> <span className="font-semibold text-gray-700">Private University in Greater Noida, Uttar Pradesh, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
              Sharda University Online is NAAC A+ accredited and offers globally recognized online degrees. Join learners from over 85 countries and experience academic excellence with dedicated career support and world-class faculty.
            </p>
            <p className="text-gray-700 text-lg">
              Sharda University Online is a platform for distance and online education launched by Sharda University in 2023. It offers a variety of undergraduate and postgraduate courses, including online BA, MBA, MCA, BBA, and BCA programs. The platform emphasizes flexibility, accessibility, and affordability, allowing students to pursue their education while balancing work and other commitments. 
            </p>
            
          </div>
          <div className="md:w-1/2">
            <Image width={100} height={100} loading="lazy" src="/images/sharda.webp" alt="Sharda University" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

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

      {/* Why Choose */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Sharda Online?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-start text-left">
            <FaBookOpen className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h4>
            <p className="text-gray-600 text-sm">
              Flexible e-books, recorded lectures, audio books, and discussion forums.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <FaUserTie className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h4>
            <p className="text-gray-600 text-sm">
              Learn from experienced professionals and globally recognized professors.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <FaBriefcase className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Focused</h4>
            <p className="text-gray-600 text-sm">
              Resume building, internships, interview preparation, and job fairs.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <FaClipboardCheck className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Placement Support</h4>
            <p className="text-gray-600 text-sm">
              Guaranteed placement assistance with top hiring partners across domains.
            </p>
          </div>
        </div>
      </section>

      {/* Recognized & Accredited */}
      <section className="py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Recognized & Accredited By</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 px-4">
          {["ugc", "aicte", "naac",  "nirf", "aiu"].map((logo, i) => (
            <Image width={100} height={100} loading="lazy" key={i} src={`/images/${logo}.webp`} alt={logo.toUpperCase()} className="h-16 object-contain" />
          ))}
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
