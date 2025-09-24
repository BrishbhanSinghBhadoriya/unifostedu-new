'use client';

import React from 'react';
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
import { motion } from 'framer-motion';
import EnquireCard from '@/components/EnquireCard';
import Image from 'next/image';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';



const Chandigarh = () => {
 const ugCourses = [
  {
    course: "Bachelor of Arts - Journalism & Mass Communication (BA-JMC)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,66,668/-",
    specialization: "Journalism, Media Studies",
    image: "/images/ba-jmc.webp",
    alt: "BA-JMC in Chandigarh University Online",
  },
  {
    course: "Bachelor of Business Administration - Business Analytics (BBA - KPMG)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,60,000/-",
    specialization: "Business Analytics with KPMG,",
    image: "/images/bba.webp",
    alt: "BBA - KPMG in Chandigarh University Online", 
  },
  {
    course: "Bachelor of Business Administration (BBA)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,68,000/-",
    specialization: "Marketing, HR, Enterpreneurship, Digital Marketing, Fin-Tech,etc",
    image: "/images/bba.webp",
    alt: "BBA in Chandigarh University Online",
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
    fees: "1,70,000/-",
    specialization: "IT & Systems",
    image: "/images/bca.webp",
    alt: "BCA in Chandigarh University Online",
  },
  
];


  const pgCourses = [
  {
    course: "Master of Business Administration - Business Analytics (MBA - KPMG)",
    duration: "2 Years(4 Semesters)",
    eligibility: "Bachelor degree in any discipline from recognized University/ Institution. Graduates of recognized professional programs like CA/ ICWA etc. are also eligible to apply.",
    fees: "2,00,000/-",
    specialization: "Business Analytics with KPMG",
    image: "/images/mba.webp",
    alt: "MBA - KPMG in Chandigarh University Online",
  },
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Graduation",
    fees: "2,10,668/-",
    specialization: "Finance, Marketing, HR, IT, HR, Operations, International Business, Digital Marketing, Fin-Tech, etc.",
    image: "/images/bba.webp",
    alt: "MBA - KPMG in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications - AI & ML",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) .",
    fees: "1,40,000/-",
    specialization: "Artificial Intelligence, Machine Learning, Data Analytics, Cloud Computing, Full Stack Development",
    image: "/images/mca.webp",
    alt: "M.C.A. AI & ML in Chandigarh University Online",
  },
  {
    course: "Master of Science - Data Science",
    duration: "2 Years",
    eligibility: "Candidate must have completed bachelor's degree in B.A/ BCA/ B.Sc. (Statistics or Mathematics or Computer Science) / B.E/ B.Tech .",
    fees: "1,46,668/-",
    specialization: "Full Stack, Web Development",
    image: "/images/mca.webp",
    alt: "M.Sc. Data Science in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications - Cloud Computing (AWS Academy)",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree.",
    fees: "1,40,000/-",
    specialization: "Cloud Infrastructure, AWS, Data Analytics, DevOps, Full Stack Development",
    image: "/images/mca.webp",
    alt: "M.C.A. Cloud Computing  in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications - Data Analytics",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree (e.g.: B.E/ B.Tech / B.Sc. / B.Com. / B.A/ B.Voc) with Mathematics, Business Mathematics, Programming or Statistics at 10+2 level or at Graduation level.",
    fees: "1,40,000/-",
    specialization: "Big Data, Data Mining",
    image: "/images/mca1.webp",
    alt: "M.C.A. Data Analytics  in Chandigarh University Online",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree",
    fees: "1,40,000/-",
    specialization: "General IT, Software Development",
    image: "/images/mca.webp",
    alt: "M.C.A in Chandigarh University Online",
  },
  {
    course: "Master of Science (Mathematics)",
    duration: "2 Years",
    eligibility: "Bachelor's Degree with Mathematics as compulsory subject from a recognized Board / University.",
    fees: "1,00,000/-",
    specialization: "Pure Mathematics, Applied Mathematics",
    image: "/images/mba.webp",
    alt: "M.Sc in Chandigarh University Online",
  },
  {
    course: "Master of Arts (MA)",
    duration: "2 Years",
    eligibility: "Graduation in any discipline or equivalemnt, preferably with English as a subject OR Bachelor's of Arts (Hons.) ",
    fees: "1,00,000/-",
    specialization: "Psychology, English, Economics",
    image: "/images/ma1.webp",
    alt: "MA in Chandigarh University Online",
  },
];

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      <Head>
        <title>Chandigarh University Online Programs | Fees & Admission</title>
        <meta name="description" content="Chandigarh University Online UG & PG programs. Check fees, eligibility, admission process and enquire now." />
        <meta name="keywords" content="Chandigarh University Online, CU Online, BBA Online, MBA Online, MCA Online, Data Science, Cloud Computing, Accredited Online Degrees" />
      </Head>

      <HeroSection
      universityName="Chandigarh University Online"
      location="Chandigarh, India"
      type="Private University"
      nirfRank="" // Add if available
      rating="4.3" // Add if available
      description="UGC-entitled degrees | Industry-Oriented Programs | Flexible Learning"
      description2={`
        Chandigarh University Online offers UGC-entitled degrees and industry-oriented programs to help learners achieve global recognition. 
        With a flexible learning environment, expert faculty, and modern LMS, it enables working professionals and students to elevate their 
        careers while learning from anywhere. 

        Chandigarh University Online has become a top choice for those seeking quality education in India, with a focus on practical skills and career readiness. 
        We are committed to providing a transformative learning experience that prepares students for success in the global job market.
      `}
      badgeText="UGC Entitled | NAAC Accredited"
      imgSrc="/images/chandigarh.webp"
      imgAlt="Chandigarh University Online Campus"
      students="—20K+" 
      partners="10+" 
      campus="Chandigarh Campus"
      highlights={[
        { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Learning" },
        { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
        { icon: <FaBriefcase className="text-blue-600" />, text: "Career Readiness" },
        { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Recognized Degrees" },
      ]}
    />

    <div>
  <AccreditationSection
    title="Why Choose Chandigarh University Online?"
    description="Learn flexibly with expert mentorship, AI-driven LMS, and career support — all with globally recognized UGC-entitled degrees."
    stats={[]} 
    benefits={[
      {
        title: "Flexible Learning",
        description: "Self-paced learning with recorded and live sessions.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                  </svg>`,
      },
      {
        title: "Expert Mentorship",
        description: "Faculty with global exposure and corporate experience.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>`,
      },
      {
        title: "AI-driven LMS",
        description: "Smart Learning Management System with analytics.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 3.53 2.61 6.43 6 6.92V18h2v-2.08c3.39-.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7z"></path>
                  </svg>`,
      },
      {
        title: "Career Support",
        description: "Placement assistance, mock interviews & resume building.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                  </svg>`,
      },
      {
        title: "Industry-ready Curriculum",
        description: "Courses designed with input from top companies.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"></path>
                  </svg>`,
      },
      {
        title: "UGC-Entitled Degrees",
        description: "Recognized degrees with global value.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7h20L12 2zm0 2.18L18.9 7H5.1L12 4.18zM4 9v11h16V9H4zm2 2h12v7H6v-7z"></path>
                  </svg>`,
      },
      {
        title: "Global Alumni Network",
        description: "Connect and grow with professionals worldwide.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 
                    1.34-3 3 1.34 3 3 3zm-8 0c1.66 
                    0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 
                    8s1.34 3 3 3zm0 2c-2.67 
                    0-8 1.34-8 4v2h8v-2c0-1.1.9-2 
                    2-2h2c1.1 0 2 .9 2 2v2h8v-2c0-2.66-5.33-4-8-4H8z"></path>
                  </svg>`,
      },
      {
        title: "Affordable Fees",
        description: "Top-quality education at budget-friendly cost.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 
                    9 12 5.16-1.26 9-6.45 
                    9-12V5l-9-4zm0 2.18L18.9 
                    7H5.1L12 3.18zM12 21c-4.42-1.13-8-5.25-8-10V7.43l8 
                    3.56 8-3.56V11c0 4.75-3.58 8.87-8 10z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/wes.webp", alt: "WES", name: "WES" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>


      {/* UG & PG Courses */}
      {[{ title: "Undergraduate Courses", list: ugCourses }, { title: "Postgraduate Courses", list: pgCourses }].map((section, idx) => (
        <section key={idx} className="py-12 bg-white px-6 font-[Inter]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
              {section.list.map((item, index) => <EnquireCard key={index} {...item} />)}
            </div>
          </div>
        </section>
      ))}

    

      {/* Admission Process */}
      <AdmissionProcedure/>

      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image src="/images/certificate-cu.webp" alt="Chandigarh University Certificate" width={100} height={100} loading="lazy" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Earn Your Online Degree from Chandigarh University</h2>
            <p className="mb-6 text-lg">Chandigarh University Online Enhance your career with daily live classes, skill-based training, and global recognition.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of Chandigarh University Online</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Interactive Live & Recorded Sessions</li>
              <li>Personalized Career Support</li>
              <li>Global Exposure & Alumni Network</li>
              <li>Affordable, Flexible & Recognized Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our learners work at</h2>
          <p className="text-xl text-gray-600">Trusted by leading companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/microsoft.webp", "/images/ibm.webp", "/images/flipkart.webp", "/images/deloitte.webp", "/images/amazon.webp", "/images/sap.webp", "/images/hp.webp", "/images/samsung.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src={src} alt="Company" width={100} height={100} loading="lazy" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Chandigarh;
