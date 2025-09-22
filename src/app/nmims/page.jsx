'use client';
import React from 'react';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaGlobe,
  FaAward,
  FaBookOpen,
  FaLaptop,
  FaHeadset
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
const Nmims = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 from a recognized board with minimum 50% marks",
      fees: "₹1,45,000",
      specialization: "General Management, Digital Marketing, Finance, Human Resources",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in NMIMS Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 with commerce stream and minimum 50% marks",
      fees: "₹94,000",
      specialization: "Accounting, Finance, Taxation, Banking",
      image: "/images/bcom.webp",
      alt: "Bachelor of Commerce (B.Com) in NMIMS Online",
    },
  
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline with minimum 50% marks",
      fees: "₹1,44,000",
      specialization: "Finance, Marketing, Human Resources, Operations, Business Analytics, International Business, Digital Marketing, Supply Chain Management",
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in NMIMS Online",
    },
    {
      course: "Master of Business Administration (WX)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 55% marks and 3 year Experince",
      fees: "₹4,00,000",
      specialization: "Applied Finance, Digital Marketing, Leadership & Strategy, Marketing, Operations & Suppyv Chain",
      image: "/images/mca1.webp",
      alt: "Master of Business Administration (WX) in NMIMS Online",
    },
  ]

  return (
    <>
      <Head>
        <title>NMIMS Online Degrees | Accredited UG & PG Programs</title>
        <meta name="description" content="NMIMS Global Online offers UGC-entitled, NAAC A++ accredited online programs including MBA, BBA, B.Com, and more. Flexible learning with global recognition." />
        <meta name="keywords" content="NMIMS Online, NMIMS Global, Online MBA in NMIMS online, BBA Online NMIMS, B.Com in NMIMS Online,  UGC approved online courses, NAAC A++ university" />
        <meta name="author" content="NMIMS Global Online University" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="canonical" href="https://www.unifostedu.com/nmims" />

        {/* Open Graph */}
        <meta property="og:title" content="NMIMS Online Degrees | Accredited UG & PG Programs" />
        <meta property="og:description" content="UGC-Entitled & NAAC A++ accredited online courses from NMIMS Global. Learn anytime, anywhere with flexible UG & PG programs." />
        <meta property="og:image" content="/images/nmims.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/nmims" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NMIMS Online Degrees | Accredited UG & PG Programs" />
        <meta name="twitter:description" content="Study at NMIMS Global Online. UGC-approved & NAAC A++ accredited online UG & PG programs designed for working professionals." />
        <meta name="twitter:image" content="/images/nmims.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Hero Section */}
      <div>
  <HeroSection
    universityName="NMIMS Global Online"
    location="Mumbai, Maharashtra, India"
    type="Deemed-to-be University"
    nirfRank="24" 
    rating="4.7/5"
    description="UGC Entitled | NAAC A++ Accredited | Flexible Online Learning"
    description2={`
      NMIMS(SVKM's Narsee Monjee Institute of Management Studies) Global is a premier education institute offering UGC-entitled and NAAC A++ accredited online programs with 
      flexible learning, a vibrant student community, and personalized mentorship. 
      With 1.25L+ students across 600+ cities, NMIMS Global provides world-class education with industry-ready programs.
    `}
    badgeText="NAAC A++ Accredited | UGC Entitled"
    imgSrc="/images/nmims.webp"
    imgAlt="NMIMS Global Online Campus"
    students="1.25L+"
    partners="200+"
    campus="Mumbai Campus"
    highlights={[
      { icon: <FaAward className="text-blue-600" />, text: "NAAC A++ Accredited" },
      { icon: <FaCertificate className="text-blue-600" />, text: "UGC Entitled Degrees" },
      { icon: <FaUsers className="text-blue-600" />, text: "1.25L+ Students" },
      { icon: <FaStar className="text-blue-600" />, text: "4.7/5 Student Rating" },
    ]}
  />
</div>


      {/* University Stats */}
      <div>
  <AccreditationSection
    title="Why Choose NMIMS Global Online?"
    description="NMIMS Global Online offers NAAC A++ accredited and UGC entitled online degree programs, trusted by 1.25L+ students across 600+ cities, with excellent student ratings."
    stats={[]} 
    benefits={[
      {
        title: "Students",
        description: "Join a thriving community of over 1.25 lakh learners across India and abroad.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>`,
      },
      {
        title: "Cities",
        description: "Access learning from 600+ cities with NMIMS Global’s digital reach.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20M12 2v20"></path>
                  </svg>`,
      },
      {
        title: "Accreditation",
        description: "Recognized with the highest NAAC A++ grade accreditation, ensuring global trust.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
      {
        title: "Rating",
        description: "Highly rated by students with an impressive 4.7/5 score.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC A++" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
      { src: "/images/nba.webp", alt: "NBA", name: "NBA" },
      { src: "/images/qs.webp", alt: "QS", name: "QS Ranking" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>


      {/* Undergraduate Programs */}
      <section className="py-16 px-6 bg-gray-50 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-[#001e3c] font-[Poppins] mb-12">
            Undergraduate Programs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start content-start">
            {ugCourses.map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="NMIMS" />
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="py-16 px-6 bg-white font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-[#001e3c] font-[Poppins] mb-12">
            Postgraduate Programs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start content-start">
            {pgCourses.map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="NMIMS" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NMIMS */}
      <section className="py-16 px-6 bg-gray-50 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#001e3c] font-[Poppins] mb-12">
            Why Choose NMIMS Online?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaAward,
                title: "UGC-Entitled & NAAC A++",
                description: "Recognized by UGC and accredited with NAAC A++ grade"
              },
              {
                icon: FaUsers,
                title: "1.25L+ Global Learners",
                description: "Join a diverse community of students worldwide"
              },
              {
                icon: FaLaptop,
                title: "Live + Recorded Sessions",
                description: "Flexible learning with expert-led interactive sessions"
              },
              {
                icon: FaHeadset,
                title: "Personalized Mentorship",
                description: "Get individual guidance from industry experts"
              },
              {
                icon: FaBuilding,
                title: "Industry Recognition",
                description: "Recognized by top corporates across industries"
              },
              {
                icon: FaGlobe,
                title: "600+ Cities Network",
                description: "Strong alumni network across major cities"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-[#001e3c] text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#001e3c] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
    <AdmissionProcedure/> 

      
      {/* Certificate Section - NMIMS */}
<section className="bg-[#7b1fa2] text-white py-16 px-6 font-[Inter]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Certificate Image */}
    <div className="md:w-1/2">
      <Image width={100} height={100} loading="lazy" src="/images/nmims-certi.webp" alt="NMIMS Certificate" className="rounded-lg shadow-lg w-full" />
    </div>

    {/* Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Recognized Online Degree from NMIMS University
      </h2>
      <p className="mb-6 text-lg">
        Earn a prestigious UGC-entitled degree from NMIMS, one of India’s top-ranked universities, 
        designed for working professionals and students aspiring to build global careers.
      </p>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li> NAAC A++ Accredited University</li>
        <li>Live Interactive + Recorded Sessions</li>
        <li>Strong Industry-Aligned Curriculum</li>
        <li>Dedicated Career & Placement Assistance</li>
      </ul>
    </div>
  </div>
</section>


 {/* Hiring Partners */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
          <p className="text-xl text-gray-600">Top Hiring Partners of Nmims</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
      "/images/aditya-birla.webp",
      "/images/airtel.webp",
      "/images/aurobindo.webp",
      "/images/bajaj-allianz.webp",
      "/images/bharti-airtel.webp",
      "/images/bosch.webp",
      "/images/cipla.webp",
      "/images/coca-cola.webp",
      "/images/cyient.webp",
      "/images/diageo.webp",
      "/images/ey.webp",
      "/images/fedex.webp",
      "/images/hero.webp",
      "/images/himalaya.webp",
      "/images/hinduja.webp",
      "/images/icici.webp",
      "/images/iifl.webp",
      "/images/india-mart.webp",
      "/images/infosys.webp",
      "/images/maruti.webp",
      "/images/nestle.webp",
      "/images/oyo.webp",
      "/images/pepsico.webp",
      "/images/samsung.webp",
      
    ].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Nmims;
