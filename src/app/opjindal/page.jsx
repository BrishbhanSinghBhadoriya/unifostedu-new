'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import Image from 'next/image';
import Head from 'next/head';
import EnquireCard from '@/components/EnquireCard';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { Button } from '@/components/ui/button';

const OPJindal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
 
  useEffect(() => {
      

      const timer= setTimeout(()=>{
       setOpenModal(true)
      },3000)
      return () => clearTimeout(timer);

       
},[])

   const sliderImages = [
      
      '/images/opjindal-banner2.webp',
      '/images/opjindal-banner3.webp',
      '/images/opjindal_banner4.webp',
      

    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 5 seconds
  
      return () => {
        clearInterval(timer);
      };
    }, [sliderImages.length]);
    const handleOnclickEnquiry = () => {
      console.log('Enquiry button clicked')
      setOpenModal({ type: 'enquiry' });
    };
  const ugCourses = [
    
    {
      course: "BBA (4 Specialization)",
      duration: "3 Years",
      eligibility: "10+2 Pass, Applicants less than 50% marks in 10+2 will be required to appear for the Jindal Scholastic Aptitude Test (JSAT)",
      fees: "₹2,00,000 /-",
      specialization: "Finance, Marketing, Human Resources, Operation Management Supply Chain",
      image: "/images/bba.webp",
      alt: "BBA in OP Jindal University",
    },
    {
      course: "B.Sc in Psycology",
      duration: "3 Years",
      eligibility: "10+2 Pass, If less than 50%: Must clear JSAT (min 50%) or submit, SAT/ACT/LNAT-UK score or complete a JGU MOOC",
      specialization: "Psychology",
      fees: "₹3,00,000 /-",
      image: "/images/op-psycology.webp",
      alt: "B.Sc in Psycology in OP Jindal University",
    },
    
  ];

  const pgCourses = [
    {
      course: "Master in Enterpreneurship and Family Business",
      duration: "1 Years(4 terms)",
      eligibility: "A Bachelor’s degree, Active involvement as an entrepreneurial family member ",
      fees: "₹2,75,000/-",
      image: "/images/op-masters1.webp",
      alt: "Master in Enterpreneurship and Family Business in OP Jindal University",

    },
    {
      course: "MA in Teaching English to Speakers of Other languages (TESOL)",
      duration: "12 Months(3 Trimester)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      fees: "₹2,50,000/- ",
      image: "/images/op-masters2.webp",
      alt: "MA in Teaching English to Speakers of Other languages (TESOL) in OP Jindal University",
    },
    {
      course: "M.Sc in Environmental chnage and Sustainability",
      duration: "12 Months(4 Terms)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      fees: "₹2,50,000/-",
      image: "/images/op-masters3.webp",
      alt: "M.Sc in Environmental chnage and Sustainability in OP Jindal University",
    },
    {
      course: "MA Public Policy",
      duration: "12-24 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      fees: "₹3,00,000/-",
      image: "/images/op-masters4.webp",
      alt: "MA Public Policy in OP Jindal University",
    },
    {
      course: "MBA in Business Analytics",
      duration: "12-24 Months",
      eligibility: "The eligibility criteria for the online MBA in Business Analytics programme require a bachelor’s degree from a recognised university in India. A minimum of 50% marks in any discipline is required for graduation.",
      fees: "₹2,00,000/-",
      image: "/images/op-masters5.webp",
      alt: "MBA in Business Analytics in OP Jindal University",
    },
    {
      course: "MBA in Business Law",
      duration: "12 Months",
      eligibility: "Bachelor's degree in any discipline with a minimum 50% aggregate score from a recognized university.  ",
      fees: "₹3,00,000/-",
      image: "/images/mba.webp",
      alt: "MBA in Business Law in OP Jindal University",
    },
    
  ];

  return (
    <>
       <Head>
        <title>OP Jindal University | Online & On-Campus Programs</title>
        <meta
          name="description"
          content="OP Jindal University offers globally recognized UG & PG programs in Law, Business, Psychology, Public Policy, and more. Apply for online and on-campus programs."
        />
        <meta
          name="keywords"
          content="OP Jindal University, JGU Online, Jindal Global University, BBA, MBA, MA, MSc, Law Programs, Business Analytics, Public Policy, Distance Learning India"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="OP Jindal University | Online & On-Campus Programs" />
        <meta
          property="og:description"
          content="Explore undergraduate and postgraduate programs from OP Jindal University. Globally recognized, NAAC accredited, and industry-ready education."
        />
        <meta property="og:image" content="/images/opjindal.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.opjindal.edu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OP Jindal University | Online & On-Campus Programs" />
        <meta
          name="twitter:description"
          content="Globally ranked OP Jindal University offers UG & PG courses in Business, Law, Psychology, and more. Apply now."
        />
        <meta name="twitter:image" content="/images/opjindal.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
           <style jsx>{`
    .roboto { 
      font-family: 'Roboto', sans-serif; 
    }
    * { 
      box-sizing: border-box; 
    }
    body { 
      overflow-x: hidden; 
    }
  `}</style>
         <div className="roboto overflow-x-hidden">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <header className="w-full bg-[#06336d] backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Left Logo */}
                    <div className="flex items-center gap-2 lg:gap-4">
                      <img 
                        src="/images/opjindal_banner.png" 
                        alt="Logo_OP Jindal" 
                        className="h-12 w-50 sm:h-10 lg:h-12" 
                      />
                     
                    </div>
      
                    {/* Right Side - Responsive */}
                    <div className="flex items-center gap-2 sm:gap-4">
                      {/* Phone - Hidden on small screens */}
                      <a
                        href="tel:+917042867717"
                        className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-orange-600 transition-colors"
                      > 
                        <span className="text-lg">📞</span>
                        <span className="text-white lg:inline">+91-7042867717</span>
                        <span className="lg:hidden">Call Now</span>
                      </a>
                      
                      {/* Mobile Phone Icon */}
                      <a
                        href="tel:+917042867717"
                        className="sm:hidden flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                      >
                        📞
                      </a>
                      
                      {/* Apply Button */}
                      <button 
                        onClick={() => setOpenModal({ type: 'apply' })}
                        className="bg-[#d9235c] hover:bg-black text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-500/25 text-sm sm:text-base cursor-pointer"
                      >
                        <span className="hidden sm:inline ">Apply Now</span>
                        <span className="sm:hidden">Apply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
            {/* Image Slider Section */}
           <section id='Home' className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-16">
  <AnimatePresence initial={false}>
    <motion.div
      key={currentSlide}
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <Image 
        src={sliderImages[currentSlide]} 
        alt={`OP Jindal University Slide ${currentSlide + 1}`}
        fill
        priority={currentSlide === 0}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
  </AnimatePresence>
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
    {sliderImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</section>

      {/* Hero Section */}
   <HeroSection
  universityName="About OP Jindal University"
  universityNameClass= "text-[#003b59]"
  location="Sonipat, Haryana, India"
  type="Private University"
  nirfRank="100+" 
  rating="4.4" 
  description="OP Jindal University Leading private university known for excellence in Law, Business, Engineering, and Public Policy"
  description2={`
    OP Jindal University offers globally recognized online degrees, enabling students to learn at their doorstep without any problems. 
    The university provides programs in diverse fields including Law, Business, Liberal Arts, Psychology, Economics, Media, Journalism, Architecture, Design, Banking, Finance, Environment, Public Policy, Public Health, Languages, and International Relations. 
    Courses are designed to meet students' academic and professional needs through interdisciplinary learning and practical application, preparing them for the global workforce.
  `}
  badgeText="Globally Recognized | Interdisciplinary Learning | Practical Applications"
  imgSrc="/images/opjindal_banner1.webp"
  imgAlt="OP Jindal University Campus"
  students="25K+" 
  partners="100+" 
  campus="Sonipat Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Interdisciplinary Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Career-Oriented Courses" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* UG COURSES TABLE */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Undergraduate (UG) Courses
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Eligibility</th>
                <th className="px-4 py-2 text-left">Fees</th>
                <th className="px-4 py-2 text-left">Specialization</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {ugCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-blue-50 transition-all duration-200"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {course.course}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                  <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                  <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {course.specialization}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setOpenModal({ type: 'enquiry', program: course.course })}
                      className="bg-black text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                    >
                      Enquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
        {/* PG COURSES TABLE */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Postgraduate (PG) Courses
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Eligibility</th>
                <th className="px-4 py-2 text-left">Fees</th>
                <th className="px-4 py-2 text-left">Specialization</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pgCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-green-50 transition-all duration-200"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {course.course}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                  <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                  <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {Array.isArray(course.specialization)
                      ? course.specialization.join(", ")
                      : course.specialization || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={handleOnclickEnquiry}
                      className="bg-black text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                    >
                      Enquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
              imageSrc="/images/opjindal_banner1.webp"
              universityName="OP Jindal Global University Online"
              defaultProgram={openModal.program || "MBA"}
              formType={openModal.type}
            />
          )}
    </section> 
     <div>
  <AccreditationSection
    title="Why Choose OP Jindal University?"
    description="Blending innovative curriculum, expert faculty, tech-driven learning, and strong placements for holistic development."
    stats={[]} 
    benefits={[
      {
        title: "Innovative Curriculum",
        description: "Blends theory with practical exposure.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>`,
      },
      {
        title: "Expert Faculty",
        description: "Renowned academicians and industry leaders.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>`,
      },
      {
        title: "Tech-Driven Learning",
        description: "Smart classrooms and advanced labs.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"></path>
                  </svg>`,
      },
      {
        title: "Strong Placements",
        description: "Top companies hire our graduates.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5v14"></path>
                  </svg>`,
      },
      {
        title: "Global Exposure",
        description: "International exchange programs and collaborations.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
      {
        title: "Modern Campus",
        description: "State-of-the-art facilities for learning and living.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z"></path>
                  </svg>`,
      },
      {
        title: "Holistic Development",
        description: "Focus on academics, sports, and culture.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>`,
      },
      {
        title: "Industry Tie-ups",
        description: "Collaborations for internships and projects.",
        iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>

      {/* UG & PG Course Cards */}
      {/* {[{ title: "Undergraduate Courses", list: ugCourses }, { title: "Postgraduate Courses", list: pgCourses }].map((section, idx) => (
        <section key={idx} className="py-12 bg-white px-6 font-[Inter]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
              {section.list.map((item, index) => <EnquireCard key={index} {...item} />)}
            </div>
          </div>
        </section>
      ))} */}

      

        {/* Admission Procedure */}
              <section id='Admission' className="relative py-20 bg-white">
               {/* Decorative Blobs */}
                 <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
                   <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
                          
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                      {/* Section Header */}
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                     >
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    Admission Procedure
                    </h2>
                      <div className="w-24 h-1 bg-[#d9235c] mx-auto mb-8 rounded-full"></div>
                      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                       A simple, transparent, and student-friendly admission process
                       designed to help you begin your learning journey smoothly.
                                  </p>
                                </motion.div>
                          
                                {/* 4-Step Process */}
                                <motion.div
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8 }}
                                  className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
                                >
                                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
                                    Easy 4-Step Admission Process Graph
                                  </h3>
                          
                                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                                    {/* Connecting Line */}
                                    <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-[#d9235c] z-0 rounded-full"></div>
                          
                                    {[
                                      {
                                        number: "01",
                                        title: "Application Form",
                                        desc: "Fill the online application form on the university portal.",
                                      },
                                      {
                                        number: "02",
                                        title: "Documents & Fee",
                                        desc: "Upload required documents and pay the application fee.",
                                      },
                                      {
                                        number: "03",
                                        title: "Confirmation",
                                        desc: "Receive confirmation and student login credentials.",
                                      },
                                      {
                                        number: "04",
                                        title: "Enrollment",
                                        desc: "Complete fee payment and begin your classes.",
                                      },
                                    ].map((step, index) => (
                                      <motion.div
                                        key={index}
                                        className="text-center relative z-10"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.3 }}
                                      >
                                        <div className="bg-[#d9235c] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                                          <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                                          <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                                          {step.title}
                                        </h4>
                                        <p className="text-gray-700 text-sm md:text-base">{step.desc}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              </div>
                            </section> 
        <section id='fees' className="bg-gray-50 py-16 px-6 md:px-20" id="OP Jindal-admission">
           <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
               OP Jindal Online Admission Process
             </h2>
             <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
               The admission process at <span className="font-semibold text-blue-600">OP Jindal Online</span> 
               is smooth and transparent. With the guidance of a dedicated 
               <span className="font-semibold text-blue-600"> UniFost Counsellor</span>, students receive 
               complete assistance from enquiry to successful enrollment.
             </p>
     
             <div className="space-y-8 text-gray-700">
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   1. Submit Enquiry Form
                 </h3>
                 <p>
                   Begin by filling out the online enquiry form on the UniFost website. 
                   A UniFost Counsellor will contact you to understand your course 
                   interest, background, and eligibility.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   2. Counselling & Course Selection
                 </h3>
                 <p>
                   Your counsellor will provide detailed information about OP Jindal Online 
                   programs, eligibility criteria, and fee structure. They will help 
                   you choose the most suitable UG or PG program for your career goals.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   3. Document Verification
                 </h3>
                 <p>
                   Upload scanned copies of your academic documents and ID proof. 
                   The UniFost Counsellor verifies your details to confirm eligibility 
                   before proceeding to the next step.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   4. Application Form Submission
                 </h3>
                 <p>
                   Complete the OP Jindal Online application form under the supervision of 
                   your counsellor. All details are reviewed carefully to ensure accuracy 
                   and avoid any processing delays.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   5. Payment of Fees
                 </h3>
                 <p>
                   Make a secure online payment for your selected course. Once the 
                   payment is successfully completed, you will receive a confirmation 
                   and fee receipt via email.
                 </p>
               </div>
     
               <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   6. Admission Confirmation
                 </h3>
                 <p>
                   After verification, you’ll receive your official admission letter 
                   from OP Jindal Online. Your UniFost Counsellor will then assist you with 
                   LMS login credentials, induction schedule, and onboarding support.
                 </p>
               </div>
             </div>
     
             <div className="mt-12 border-t border-gray-200 pt-6 text-center">
               <p className="text-gray-700 max-w-3xl mx-auto">
                 Apply through <span className="font-semibold text-blue-600">UniFost</span> 
                 for personalized guidance, faster processing, and complete support 
                 throughout your admission journey with  Online.
               </p>
             </div>
           </div>
         </section>
                   {/*  Add Quick Comparison Table */}
     <section id='QuickComparison' className="py-16 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center mb-12">
           <span className="text-[#821812]">Online vs Regular</span> Degree Comparison
         </h2>
         
         <div className="overflow-x-auto">
           <table className="w-full border-collapse">
             <thead>
               <tr className="bg-[#d9235c] text-white">
                 <th className="p-4 text-left">Feature</th>
                 <th className="p-4 text-center">OP Jindal University Online</th>
                 <th className="p-4 text-center">Regular Campus</th>
               </tr>
             </thead>
             <tbody>
               {[
                 ['UGC Recognition', '✅ Yes', '✅ Yes'],
                 ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
                 ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
                 ['Location', '✅ From Anywhere', '❌ Campus Only'],
                 ['Cost', '✅ More Affordable', '❌ Higher Fees'],
                 ['Placement Support', '✅ 100% Assistance', '✅ Available']
               ].map(([feature, online, regular], i) => (
                 <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                   <td className="p-4 font-semibold">{feature}</td>
                   <td className="p-4 text-center">{online}</td>
                   <td className="p-4 text-center">{regular}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
             </div>
           </section>

      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/op-certificate.webp" alt="OP Jindal Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from OP Jindal University</h2>
            <p className="mb-6 text-lg">Keep your future shine with a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Get Global Exposure</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
              <li>Mentorship with proper counselling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Companies */}
<section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at OP Jindal University</h2>
    <p className="text-xl text-gray-600">Trusted by leading global brands</p>
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
      <div
        key={i}
        className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Image width={100} height={100} loading="lazy" src={src} alt="Recruiter" className="h-12 object-contain" />
      </div>
    ))}
  </div>
</section>
<footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-50" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
                        {/* Company Info */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <img src="/images/opjindal_banner.png" alt="OP Jindal University Logo" className="h-10 w-auto" />
                              <span className="text-xl font-bold text-[#d9235c]">OP Jindal</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              UGC-entitled, NAAC A+ accredited online degrees designed for modern learners. 
                              Transform your career with globally recognized programs.
                            </p>
                            
                            {/* Social Media */}
                            <div className="flex space-x-4">
                              {[
                                { icon: '📘', label: 'Facebook' },
                                { icon: '📷', label: 'Instagram' },
                                { icon: '🐦', label: 'Twitter' },
                                { icon: '💼', label: 'LinkedIn' }
                              ].map((social, i) => (
                                <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                                  <span className="text-lg">{social.icon}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
          
                        {/* Programs */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            <h4 className="text-white font-bold mb-4 text-lg">Programs</h4>
                            <ul className="space-y-3 text-sm">
                              {['MBA', 'BBA',  'BCA', 'MCA'].map((program, i) => (
                                <li key={i} onClick = {() => setOpenModal({ type: 'apply',})} className="hover:text-[#d9235c] transition-colors cursor-pointer">
                                  {program}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
          
                        {/* Resources */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
                            <ul className="space-y-3 text-sm">
                              {[
                                { name: 'Admissions', href: '#Admission' },
                                { name: 'About', href: '#Home' },
                                { name: 'Placements', href: '#Partner' },
                                { name: 'FAQs', href: '#Faq' },
                                { name: 'Quick Comparison', href: '#QuickComparison' },
                                { name: 'Fees Structure', href: '#Admission' }
                              ].map((link, i) => (
                                <li key={i}>
                                  <a href={link.href} className="hover:text-[#d9235c] transition-colors">
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
          
                        {/* Contact */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                          >
                            <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                
                                <a href="tel:+917042867717" className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200" title="Call us"  aria-label="Email us at info@unifostedu.com">
                                             
                                             <span className="text-orange-400">📞</span>
                                            </a>
                                <span className="text-sm">+91-7042867717</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                                  <span className="text-orange-400">✉️</span>
                                </div>
                                <a href="mailto:info@unifostedu.com" className='p-2 rounded-lg hover:bg-slate-100 transition-all duration-200' title='Email us' aria-label='Email us at info@unifostedu.com'>
                                <span className="text-sm">info@unifostedu.com</span>
                                </a>
                              </div>
                            </div>
                            
                            <Button 
                              onClick={() => setOpenModal({ type: 'apply' })}
                              className="w-full bg-[#d9235c]  hover:from-[#821812] hover:from-[#821812] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                            >
                              Apply Now
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    
                      {/* Popular Programs Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-8 mb-8"
                      >
                        <h4 className="text-lg font-bold mb-6 text-white text-center">
                          Popular Programs & Specializations – OP Jindal Online University 
                        </h4>
          
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
 { [
  // UG Courses
  "BBA (Finance) - OP Jindal University",
  "BBA (Marketing) - OP Jindal University",
  "BBA (Human Resources) - OP Jindal University",
  "BBA (Operation Management Supply Chain) - OP Jindal University",
  "B.Sc in Psychology - OP Jindal University",

  // PG Courses
  "Master in Entrepreneurship and Family Business - OP Jindal University",
  "MA in Teaching English to Speakers of Other Languages (TESOL) - OP Jindal University",
  "M.Sc in Environmental Change and Sustainability - OP Jindal University",
  "MA Public Policy - OP Jindal University",
  "MBA in Business Analytics - OP Jindal University",
  "MBA in Business Law - OP Jindal University"
]

                        .map((keyword, index) => (
                            <span
                              key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                              className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#d9235c]  hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                              title={keyword}
                            >
                              {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                            </span>
                          ))}
                        </div>
                      </motion.div>
          
                      {/* Copyright */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="pt-8 pb-6 text-center text-sm text-gray-400 border-t border-white/10"
                      >
                        <p>&copy; {new Date().getFullYear()} OP Jindal Online University". All rights reserved.</p>
                        <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
                      </motion.div>
                    </div>
                  </footer>
</div>

    </>
  );
};

export default OPJindal;
