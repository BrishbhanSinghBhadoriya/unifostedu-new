'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
//import { Helmet } from 'react-helmet';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import AdmissionProcedure from '@/components/AdmissionProcedure';
const Manipal = () => {
 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "1,80,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology (FinTech), Marketing Management, Human Resource Management",
      image: "/images/bba.webp",
    },
     {
      course: "Bachelor of Business Administration (BBA)  Hons",
      duration: "4 Years",
      eligibility: "10+2 Minimum 50%",
      fees: "2,40,000",
      specialization: "Healthcare Management, Business Analytics, Financial Technology (FinTech), Marketing Management, Human Resource Management",
      image: "/images/bba.webp",
    },
   
    {
      course: "Bachelor of Commerce (Professional)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 50%",
      fees: " 2,94,000",
      specialization: "General",
      image: "/images/bcom.webp",
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
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "2,20,000",
      specialization: "AI & ML, Cloud Computing, Cyber Security, Full Stack Development", 
      image: "/images/mca1.webp",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "50% in Graduation",
      fees: "2,80,000",
      specialization: "Data Science, Business Analytics", 
      image: "/images/m.com.webp",
    },
  
    
  ];


  

  return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      
       <Head>
        <title>Manipal Online Degrees | Manipal Academy of Higher Education Courses</title>
        <meta name="description" content="Explore online programs from Manipal Academy of Higher Education (MAHE). NAAC A++ accredited, UGC recognized degrees. Enquire now for BBA, BBA Hons, B.Com, MBA, MCA, M.Sc courses." />
        <meta name="keywords" content="Manipal Online, MAHE Online, BBA Online, BBA Hons Online, B.Com Online, MBA Online, MCA Online, M.Sc Online, Distance Learning India, NAAC A++, UGC Recognized Online Degree, Flexible Online Education, Online Courses MAHE" />
        <meta name="author" content="Manipal Academy of Higher Education" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Manipal Online Degrees | Manipal Academy of Higher Education Courses" />
        <meta property="og:description" content="Explore undergraduate and postgraduate online programs from MAHE, NAAC A++ accredited. Flexible and career-focused education." />
        <meta property="og:image" content="/images/mahe-uni.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal Online Degrees | Manipal Academy of Higher Education Courses" />
        <meta name="twitter:description" content="Explore online undergraduate and postgraduate programs from MAHE, NAAC A++ accredited. Flexible and career-focused education." />
        <meta name="twitter:image" content="/images/mahe-uni.webp" />
      </Head>
      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Manipal Academy of Higher Education
            </h1><br />
            <p> <span className="font-semibold text-gray-700">Private university in Manipal, Karnataka, India.</span><br /><br/></p>

            <p className="text-gray-700 text-lg">
             Manipal Academy of Higher Education (MAHE) is synonymous with excellence in higher education. MAHE is one of India’s leading academic and research institutions with a NAAC A++ rating and prestigious Institution of Eminence (IoE) recognition. The institution has been offering world-class education across diverse streams since 1953. It is ranked #4 by NIRF and has a track of notable alumni like Satya Nadella, Vikas Khanna, and Dr Devi Prasad Shetty. The university offers various in-demand bachelor’s, master’s, and professional certification programs in the online mode to professionals across the world.
              

            </p>
          </div>
          <div className="md:w-1/2">
            <Image width={100} height={100} loading="lazy" src="/images/mahe-uni.webp" alt="Mahe" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Courses Offered */}
    
      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Manipal Academy of Higher Educatione" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
     {/* Why Choose Mahe */}
<section className="py-12 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">Why Choose Manipal Academy of Higher Education?</h2>
    <hr className="mt-4 border-gray-300 w-24 mx-auto" />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {[
      {
        icon: <FaGraduationCap />,
        title: "Top-Ranked Private University",
        text: "Recognized as one of India’s best private institutions."
      },
      {
        icon: <FaUniversity />,
        title: "Globally Recognized Degrees",
        text: "Accredited programs accepted worldwide by top employers."
      },
      {
        icon: <FaFileAlt />,
        title: "Flexible & Personalized Learning",
        text: "Learn anytime, anywhere with tailored academic support."
      },
      {
        icon: <FaCheckCircle />,
        title: "Expert Faculty Mentorship",
        text: "One-on-one guidance by experienced mentors & professors."
      },
      {
        icon: <FaCertificate />,
        title: "UGC & AICTE Approved",
        text: "Degrees entitled by UGC and recognized by AICTE."
      },
      {
        icon: <FaBuilding />,
        title: "Global Alumni Network",
        text: "Join a network of learners from 50+ countries."
      },
      {
        icon: <FaCheckCircle />,
        title: "Career Support",
        text: "Internships, placements, resume help, and interview prep."
      },
      {
        icon: <FaCheckCircle />,
        title: "Digital Resources",
        text: "Access e-books, recorded classes, and online labs."
      }
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-start text-left">
        <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.text}</p>
      </div>
    ))}
  </div>
</section>

       {/* Accreditation Logos */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Recognized & Accredited By</h2>
        <div className="flex flex-wrap justify-center items-center gap-20">
          <Image width={100} height={100} loading="lazy" src="/images/ugc.webp" alt="UGC" className="h-16 object-contain" />
          <Image width={100} height={100} loading="lazy" src="/images/aicte.webp" alt="AICTE" className="h-16 object-contain" />
          <Image width={100} height={100} loading="lazy" src="/images/naac.webp" alt="NAAC" className="h-16 object-contain" />
          
         
          <Image width={100} height={100} loading="lazy" src="/images/aiu.webp" alt="AIU" className="h-16 object-contain" />
          <Image width={100} height={100} loading="lazy" src="/images/nba.webp" alt="NBA" className="h-16 object-contain" />
          <Image width={100} height={100} loading="lazy" src="/images/qs.webp" alt="QS" className="h-16 object-contain" />
          <Image width={100} height={100} loading="lazy" src="/images/acu.webp" alt="ACU" className="h-16 object-contain" />
          
          
          


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
