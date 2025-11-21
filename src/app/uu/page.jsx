'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBookOpen,
  FaUserTie,
  FaGraduationCap,
  FaGlobe,
  FaAward,
  FaCertificate,
  FaUsers,
  FaLaptop,
  FaHeadset,
  FaBuilding,
  FaBriefcase,
  FaClipboardCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const UttaranchalUniversity = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
       
 
       const timer= setTimeout(()=>{
        setOpenModal(true)
       },3000)
       return () => clearTimeout(timer);
 
        
 },[])
  const sliderImages = [
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327865/uu_banner_z4cs2w.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327866/uu_banner1_n54uyp.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-banner3_n0pwl6.jpg',
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOnclickEnquiry = (programName) => {
    console.log('Enquiry button clicked for:', programName);
    setOpenModal({ type: 'enquiry', program: programName });
  };

  const ugCourses = [
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 pass from a recognized board",
      fees: "₹72,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp",
      alt: "Bachelor of Arts (BA) in Uttaranchal University Online",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 pass from a recognized board",
      fees: "₹1,20,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "Bachelor of Business Administration (BBA) in Uttaranchal University Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 pass from a recognized board",
      fees: "₹1,20,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      alt: "Bachelor of Computer Applications (BCA) in Uttaranchal University Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any field from a recognized university with a minimum of 40% marks in aggregate OR below 40% with eligibility test",
      fees: "₹1,40,000",
      specialization: "Marketing, Digital, Human Resource, Business Analytics, Finance, International Business, Information Technology Management, Logistics & Supply Chain Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "Master of Business Administration (MBA) in Uttaranchal University Online",
    },
    {
      course: "Executive MBA",
      duration: "2 Years",
      eligibility: "Graduation in any field from a recognized university with relevant work experience",
      fees: "₹1,40,000",
      specialization: "Business Analytics, HR Analytics, Finance Analytics, Banking and Finance",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
      alt: "Executive MBA in Uttaranchal University Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduate in Computer Applications/CS/IT/Engineering with 50% marks (45% reserved) OR Graduate with Mathematics at 10+2 or graduation level",
      fees: "₹1,20,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "Master of Computer Applications (MCA) in Uttaranchal University Online",
    },
  ];

  const faqData = [
    {
      question: "Is Uttaranchal University Online degree valid and recognized?",
      answer: "Yes, Uttaranchal University Online degrees are UGC-approved and NAAC accredited. They hold the same value as regular degrees and are recognized by employers globally and for higher education.",
    },
    {
      question: "What is the eligibility criteria for UU Online programs?",
      answer: "For UG programs (BA, BBA, BCA), candidates need 10+2 pass from a recognized board. For PG programs (MBA, Executive MBA), graduation with 40% marks is required. For MCA, graduation in CS/IT or with Mathematics background is needed.",
    },
    {
      question: "What is the fee structure for Uttaranchal University Online courses?",
      answer: "BA costs ₹72,000, BBA costs ₹1,20,000, BCA costs ₹1,20,000, MBA costs ₹1,40,000, Executive MBA costs ₹1,40,000, and MCA costs ₹1,20,000. Fees can be paid in installments.",
    },
    {
      question: "Can I work while studying at UU Online?",
      answer: "Absolutely! UU Online programs are designed for working professionals with flexible learning schedules, recorded sessions, and weekend classes allowing you to balance work and studies effectively.",
    },
    {
      question: "Does Uttaranchal University Online provide placement assistance?",
      answer: "Yes, UU Online offers comprehensive career services including resume building, interview preparation, placement assistance, and access to job opportunities through their strong industry network with 100+ corporate partners.",
    },
    {
      question: "What is the mode of examination for UU Online students?",
      answer: "All examinations and assessments are conducted online through UU's secure Learning Management System (LMS). Students can take exams from anywhere with proper proctoring and monitoring.",
    },
    {
      question: "How are classes conducted in UU Online programs?",
      answer: "Classes are conducted through interactive live sessions with faculty and pre-recorded video lectures. Students get 24/7 access to comprehensive study materials, e-books, assignments, and online labs through the LMS.",
    },
    {
      question: "What makes Uttaranchal University Online different from other universities?",
      answer: "UU Online stands out with its UGC & NAAC recognition, 50,000+ students, expert faculty with industry experience, advanced digital platform, 24/7 learning resources, strong placement support, and globally recognized degrees.",
    },
    {
      question: "What specializations are available in MBA program?",
      answer: "MBA program offers 8 specializations: Marketing, Digital Marketing, Human Resource, Business Analytics, Finance, International Business, IT Management, and Logistics & Supply Chain Management.",
    },
    {
      question: "Is there any entrance exam for admission to UU Online programs?",
      answer: "For most programs, admission is based on qualifying examination marks. However, candidates with below 40% marks in graduation need to clear an eligibility test for MBA programs.",
    },
  ];

  return (
    <>
      <Head>
        <title>Uttaranchal University Online | UGC Approved Degrees | Admission 2025</title>
        <meta name="description" content="Uttaranchal University Online offers UGC-approved degrees in MBA, BBA, BCA, MCA, BA, and Executive MBA. Join 50,000+ students with flexible learning, expert faculty, and 100% placement assistance." />
        <meta name="keywords" content="Uttaranchal University Online, UU Online, Online MBA, Online BBA, Online BCA, Online MCA, Executive MBA, UGC approved online courses, Distance Learning India" />
        <link rel="canonical" href="https://unifostedu.com/uttaranchal-university" />
        <meta property="og:title" content="Uttaranchal University Online | UGC Approved Programs" />
        <meta property="og:description" content="Join UU Online for UGC-approved degrees with flexible learning, expert faculty, and placement assistance." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style jsx>{`
        .uu-font { 
          font-family: 'Montserrat', 'Open Sans', sans-serif; 
        }
        * { 
          box-sizing: border-box; 
        }
        body { 
          overflow-x: hidden; 
        }
      `}</style>

      <div className="uu-font overflow-x-hidden">
        {/* Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_logo_bksobh.webp" 
                  alt="Uttaranchal University Logo" 
                  className="h-12 w-50 sm:h-10 lg:h-12" 
                />
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-blue-600 transition-colors"
                > 
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  📞
                </a>
                
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline">Apply Now</span>
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
                alt={`Uttaranchal University Slide ${currentSlide + 1}`}
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
          universityName="About Uttaranchal University Online"
          universityNameClass="text-blue-700"
          location="Dehradun, Uttarakhand, India"
          type="Private University"
          nirfRank="100+" 
          rating="4.1/5"
          description="UGC Recognized Programs | Global Learning Community | Industry-Relevant Curriculum"
          description2={`
            Uttaranchal University offers world-class online education designed for working professionals 
            and students seeking flexible learning options. Our programs combine academic excellence with 
            practical skills to prepare you for success in today's competitive job market. With 50,000+ students, 
            200+ expert faculty, and 100+ corporate partners, UU is your gateway to a bright future.
          `}
          badgeText="UGC Approved | 50K+ Students | 100+ Corporate Partners"
          imgSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp"
          imgAlt="Uttaranchal University Campus"
          students="50,000+"
          partners="100+"
          campus="Dehradun Campus"
          highlights={[
            { icon: <FaBookOpen className="text-blue-600" />, text: "Industry-Relevant Curriculum" },
            { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
            { icon: <FaBriefcase className="text-blue-600" />, text: "100% Placement Assistance" },
            { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Recognized Degrees" },
          ]}
        />

        {/* Courses Section with Tabs */}
        <section id='courses' className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Uttaranchal University Online Courses
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore undergraduate and postgraduate online degree programs with UGC recognition and NAAC accreditation. 
                Experience quality, flexibility, and career-focused education from Uttaranchal University.
              </p>
            </motion.div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8 sm:mb-12">
                <Tabs.List className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200">
                  <Tabs.Trigger 
                    value="all"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='all' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                  >
                    All Programs
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="ug"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='ug' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                  >
                    Undergraduate
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="pg"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='pg' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                  >
                    Postgraduate
                  </Tabs.Trigger>
                </Tabs.List>
              </div>

              <Tabs.Content value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {[...ugCourses, ...pgCourses].map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="Uttaranchal University Online"/>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="ug">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {ugCourses.map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="Uttaranchal University Online"/>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="pg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                  {pgCourses.map((item, index) => (
                    <EnquireCard key={index} {...item} universityName="Uttaranchal University Online"/>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>

        {/* Course Tables */}
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
                    <tr key={index} className="border-t hover:bg-blue-50 transition-all duration-200">
                      <td className="px-4 py-3 font-medium text-gray-800">{course.course}</td>
                      <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                      <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                      <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                      <td className="px-4 py-3 text-gray-700">{course.specialization}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setOpenModal({ type: 'enquiry', program: course.course })}
                          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm cursor-pointer"
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
                    <tr key={index} className="border-t hover:bg-green-50 transition-all duration-200">
                      <td className="px-4 py-3 font-medium text-gray-800">{course.course}</td>
                      <td className="px-4 py-3 text-gray-700">{course.duration}</td>
                      <td className="px-4 py-3 text-gray-700">{course.eligibility}</td>
                      <td className="px-4 py-3 text-gray-700">{course.fees}</td>
                      <td className="px-4 py-3 text-gray-700">{course.specialization}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleOnclickEnquiry(course.course)}
                          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm cursor-pointer"
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
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_form_ipzqyg.webp"
              universityName="Uttaranchal University Online"
              defaultProgram={openModal.program || "MBA"}
              formType={openModal.type}
            />
          )}
        </section>

        {/* Accreditation Section */}
        <div>
          <AccreditationSection
            title="Why Choose Uttaranchal University Online?"
            description="UU University offers globally recognized online degrees with expert faculty, flexible learning, cutting-edge digital platform, and comprehensive career support to help you succeed in the modern world."
            stats={[]} 
            benefits={[
              {
                title: "Global Recognition",
                description: "Our degrees are recognized worldwide, opening doors to international opportunities.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
              },
              {
                title: "200+ Expert Faculty",
                description: "Learn from industry veterans and academic experts with real-world experience.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/></svg>`,
              },
              {
                title: "Cutting-Edge Curriculum",
                description: "Programs updated regularly to match latest industry trends and technologies.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace with 24/7 access to learning materials and recorded lectures.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/></svg>`,
              },
              {
                title: "100% Placement Support",
                description: "Resume building, interview prep, and job placement assistance with 100+ corporate partners.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>`,
              },
              {
                title: "50,000+ Students",
                description: "Join a thriving community of learners from across India and abroad.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 20c0-5.33 9.33-8 10-8s10 2.67 10 8v2H2v-2z"/></svg>`,
              },
              {
                title: "Advanced Digital Platform",
                description: "Interactive live classes, doubt clearing sessions, online assessments, and mobile learning app.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>`,
              },
              {
                title: "24/7 Learning Resources",
                description: "Access to e-books, recorded lectures, online labs, and peer collaboration anytime.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`,
              },
            ]}
            accreditations={[
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
              { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp", alt: "WES", name: "WES" },
            ]}
            internationalRecognition={[]}
            successStories={[]}
          />
        </div>

        {/* Learning Platform Features */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced <span className="text-yellow-300">Learning Platform</span></h2>
              <p className="text-xl text-blue-200">Experience seamless learning with our state-of-the-art digital campus</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Interactive Live Classes", icon: "🎥" },
                    { title: "24/7 Access to Resources", icon: "📚" },
                    { title: "Doubt Clearing Sessions", icon: "💬" },
                    { title: "Online Assessment", icon: "📝" },
                    { title: "Peer Collaboration", icon: "👥" },
                    { title: "Mobile Learning App", icon: "📱" },
                  ].map((feature, index) => (
                    <div key={index} className="bg-blue-800 p-4 rounded-lg flex items-center">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <span className="font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <Image width={500} height={400} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/learning_platform_mm4iyv.webp" alt="Learning Platform" className="rounded-xl shadow-2xl border-4 border-blue-700" />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                    Experience The Future of Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Procedure */}
        <section id='Admission' className="relative py-20 bg-white">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
                     
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                A simple, transparent, and student-friendly admission process designed to help you begin your learning journey smoothly.
              </p>
            </motion.div>
                     
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
                Easy 4-Step Admission Process
              </h3>
                     
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-blue-600 z-0 rounded-full"></div>
                     
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
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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

        {/* Quick Comparison Table */}
        <section id='QuickComparison' className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-blue-700">Online vs Regular</span> Degree Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">UU Online</th>
                    <th className="p-4 text-center">Regular Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['UGC Recognition', '✅ Yes', '✅ Yes'],
                    ['NAAC Accreditation', '✅ Accredited', '✅ Accredited'],
                    ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
                    ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
                    ['Location', '✅ From Anywhere', '❌ Campus Only'],
                    ['Cost', '✅ More Affordable', '❌ Higher Fees'],
                    ['Placement Support', '✅ 100% Available', '✅ Available']
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

        {/* Certificate Section */}
        <section className="bg-[#003366] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Image width={500} height={400} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu-certificate_srzmjx.webp" alt="UU Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Online Degree from Uttaranchal University
              </h2>
              <p className="mb-6 text-lg">
                Earn a prestigious UGC-approved degree from Uttaranchal University, designed for working professionals 
                and students seeking flexible learning options with globally recognized credentials.
              </p>
              <h3 className="text-xl font-semibold mb-2">Benefits of UU Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Live Classes by Industry Experts</li>
                <li>Career Assistance & Exclusive Virtual Job Fairs</li>
                <li>Globally Recognized UGC-Approved Degrees</li>
                <li>Practical & Immersive Learning</li>
                <li>24/7 Access to Learning Resources</li>
                <li>Robust Alumni Network of 50,000+ Students</li>
                <li>Flexible Learning Options</li>
                <li>100+ Corporate Partners for Placements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about Uttaranchal University Online Programs
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-700"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <span className="text-lg font-bold">{openIndex === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 sm:px-8 sm:py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Partners */}
        <section id='Partner' className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
              <p className="text-xl text-gray-600 mt-2">Top Hiring Partners of Uttaranchal University</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/tcs_mpq9no.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/lt_akwpfk.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/sap_wtbuz0.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icici_1_quita6.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/infosys_vk4d5g.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/coca-cola_krqtyj.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp",
                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp",
              ].map((src, i) => (
                <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                  <Image width={100} height={100} loading="lazy" src={src} alt={`Company ${i + 1}`} className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden">
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
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_logo_bksobh.webp" alt="UU Logo" className="h-10 w-auto bg-white rounded p-1" />
                    <span className="text-xl font-bold text-blue-500">UU Online</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    UGC-approved, NAAC accredited online degrees designed for modern learners. 
                    Transform your career with globally recognized programs from Uttaranchal University.
                  </p>
                  
                  {/* Social Media */}
                  <div className="flex space-x-4">
                    {[
                      { icon: '📘', label: 'Facebook' },
                      { icon: '📷', label: 'Instagram' },
                      { icon: '🐦', label: 'Twitter' },
                      { icon: '💼', label: 'LinkedIn' }
                    ].map((social, i) => (
                      <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
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
                    {['MBA', 'Executive MBA', 'MCA', 'BBA', 'BCA', 'BA'].map((program, i) => (
                      <li key={i} onClick={() => setOpenModal({ type: 'apply' })} className="hover:text-blue-500 transition-colors cursor-pointer">
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
                      { name: 'Home', href: '#Home' },
                      { name: 'Courses', href: '#courses' },
                      { name: 'Admissions', href: '#Admission' },
                      { name: 'Placements', href: '#Partner' },
                      { name: 'FAQs', href: '#Faq' },
                      { name: 'Quick Comparison', href: '#QuickComparison' }
                    ].map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="hover:text-blue-500 transition-colors">
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
                      <a href="tel:+917042867717" className="p-2 rounded-lg hover:bg-blue-900 transition-all duration-200">
                        <span className="text-blue-400">📞</span>
                      </a>
                      <span className="text-sm">+91 7042646766</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="mailto:info@unifostedu.com" className="p-2 rounded-lg hover:bg-blue-900 transition-all duration-200">
                        <span className="text-blue-400">✉️</span>
                      </a>
                      <span className="text-sm">info@unifostedu.com</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
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
                Popular Programs & Specializations – Uttaranchal University Online
              </h4>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "BA General - UU Online",
                  "BBA General - UU Online",
                  "BCA General - UU Online",
                  "MBA Marketing - UU Online",
                  "MBA Digital Marketing - UU Online",
                  "MBA Human Resource - UU Online",
                  "MBA Business Analytics - UU Online",
                  "MBA Finance - UU Online",
                  "MBA International Business - UU Online",
                  "MBA IT Management - UU Online",
                  "MBA Logistics & Supply Chain - UU Online",
                  "Executive MBA Business Analytics - UU Online",
                  "Executive MBA HR Analytics - UU Online",
                  "Executive MBA Finance Analytics - UU Online",
                  "Executive MBA Banking & Finance - UU Online",
                  "MCA General - UU Online",
                  "Online Degree Uttaranchal University",
                  "UU Distance Learning Programs",
                  "Uttaranchal University Admission 2025",
                  "UU Online MBA Fees",
                  "Best Online University India",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-blue-500"
                    title={keyword}
                  >
                    {keyword.length > 30 ? `${keyword.substring(0, 30)}...` : keyword}
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
              <p>&copy; {new Date().getFullYear()} Uttaranchal University Online. All rights reserved.</p>
              <p className="mt-2 text-xs">UGC-Approved | NAAC Accredited | Globally Recognized</p>
            </motion.div>
          </div>
        </footer>

        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_form_ipzqyg.webp"
            universityName="Uttaranchal University Online"
            defaultProgram={openModal.program || "MBA"}
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </div>
    </>
  );
};

export default UttaranchalUniversity;