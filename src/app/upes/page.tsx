'use client';
import AccreditationSection from '@/components/AccreditationSection';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import EnquireCard from '@/components/EnquireCard';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import * as Tabs from '@radix-ui/react-tabs';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaBookOpen,
  FaGlobe,
  FaGraduationCap,
  FaUserTie
} from "react-icons/fa6";
import UniversityDateSlider from '@/components/UniversityDateSlider';
const Upes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [openModal, setOpenModal] =  useState<{ type: string,program?:string } |null >(null);
   const [openIndex, setOpenIndex] = useState<number | null>(null);
     useEffect(() => {
         
   
    const timer= setTimeout(()=>{
    setOpenModal({ type: 'apply' } as any)
    },3000)
    return () => clearTimeout(timer);
   
          
   },[])
   
  const faqData = [
    {
      question: "What is the eligibility criteria for UPES Online programs?",
      answer:
        "Eligibility varies depending on the course. Generally, candidates must have completed 10+2 for UG programs and a bachelor’s degree from a recognized university for PG programs.",
    },
    {
      question: "Is UPES Online recognized by UGC?",
      answer:
        "Yes, UPES Online offers UGC-entitled programs approved under the UGC (Online Education) Regulations, ensuring equal recognition as regular degrees.",
    },
    {
      question: "Can I study while working a full-time job?",
      answer:
        "Absolutely. UPES Online programs are designed for working professionals, offering flexible learning schedules and self-paced study options.",
    },
    {
      question: "How can UniFost Counsellors help in the admission process?",
      answer:
        "UniFost Counsellors provide complete guidance — from course selection and document verification to form submission and LMS onboarding after admission.",
    },
    {
      question: "What is the mode of examination for UPES Online students?",
      answer:
        "All assessments and examinations are conducted online through the university’s secure LMS platform, ensuring flexibility and convenience for all learners.",
    },
  ];
   const toggleFAQ = (index:number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };  
  const sliderImages = [
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327865/upes-mba_kljihd.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327866/upes-mca_zh1oml.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327864/upes-bba_xdinat.webp',
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/upes-bca_gmulwj.webp',
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
  
    setOpenModal({ type: 'enquiry' });
  };


  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,68,768",
      specialization: "Operations Management, Financial Management, Human Resource Management, Marketing Management, BBA in Digital Business, BBA in Logistics and Supply Chain, BBA in International Business",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "BBA from UPES University Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,68,768",
      specialization: "Cloud Computing, Cyber Security, Data Analytics, New age Technology",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      alt: "BCA from UPES University Online",
    },
    
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation with  50%",
      fees: "₹1,90,920- 2,40,000",
      specialization: "Oil & Gas Management, Power Management, Logistics & Supply Chain Management, Business Analytics, Finance, Human Resource Management, Infrastructure Management, International Business, Marketing Management, Human Resource Management, Operations Management, Financial Management, Digital Business",

      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "MBA from UPES University Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "₹1,85,448",
      specialization: "Artificial Intelligence and Machine Learning, Cyber Security and Forensics, Data Science ", 
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "MCA from UPES University Online",
    },
    
  ];

  return (
    <>
    
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <Head>
        <title>UPES University Online Courses | Admission, Fees & Enquiry</title>
        <meta
          name="description"
          content="Explore UPES online programs. Learn about fees, eligibility, and how to apply. Enquire now!"
        />
        <meta
          name="keywords"
          content="UPES University Online, UPES MBA, UPES BBA, UPES BCA, UPES MCA, Online Programs, Admission, Fees"
        />
        <link rel="canonical" href="https://unifostedu.com/upes" />
        <meta property="og:title" content="UPES University Online Courses" />
        <meta
          property="og:description"
          content="Explore UPES online degree programs with fees, eligibility, and admission details."
        />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
           <style jsx>{`
  .upes-font { 
    font-family: 'Montserrat', 'Open Sans', sans-serif; 
  }
  * { 
    box-sizing: border-box; 
  }
  body { 
    overflow-x: hidden; 
  }
`}</style>

<div className="upes-font overflow-x-hidden">
           <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327864/upes_logo_nogkrn.png" 
                  alt="Logo_upes" 
                  className="h-12 w-50 sm:h-10 lg:h-12" 
                />
               
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-orange-600 transition-colors"
                > 
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042646766"
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
        <div className="pt-16 lg:pt-20">
          <UniversityDateSlider
            currentDate="January 2026 Session"
            nextUpdateDate="Applications Closing on 11 March 2026"
            information="Limited Seats Available - Apply Now!"
            special="Average of 50% salary growth"
            color="#dc2626"
            backgroundColor="#fee2e2"
            textColor="#991b1b"
          />  
        </div>
      {/* Image Slider Section */}
      <section id='Home' className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          > <Image src={sliderImages[currentSlide]} alt={`UPES University Slide ${currentSlide + 1}`}
              width={1900}
              height={600}
              loading="lazy"
              style={{ objectFit: 'cover' }}
            
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

      {/* Intro Section */}
      <HeroSection
  universityName="About UPES"
  universityNameClass="text-[#d9235c]"
  location="Dehradun, Uttarakhand, India"
  type="Private University"
  nirfRank="41" 
  rating="4.4"  
  description="UPES (University of Petroleum and Energy Studies) is a leading institution in India offering UGC-entitled online degree programs with a focus on energy, technology, and business domains."
  description2={`
    Recognized for its industry-aligned curriculum, UPES provides students with 
    cutting-edge knowledge and skills to excel in their careers. 
    The university is known for its strong industry connections and focus on innovation. 
    With online and flexible learning, UPES is shaping the future of higher education in India.
  `}
  badgeText="UGC Entitled | Industry-Aligned Curriculum | Innovation Focus"
  imgSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp"
  imgAlt="UPES University"
  students="25K+" 
  partners="100+" 
  campus="Dehradun Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Specialized Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Industry Connections" },
    { icon: <FaGraduationCap className="text-blue-600" />, text: "Academic Excellence" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>

      {/* Courses Section with Tabs */}
      <section id='courses' className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            UPES University Online Courses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            UPES University Explore undergraduate and postgraduate online degree programs . Experience quality, flexibility, and career-focused education from one of India's top universities in energy and technology domains.
          </p>
          </motion.div>

          <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 sm:mb-12">
              <Tabs.List className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200"> <Tabs.Trigger 
                  value="all"   
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                           ${activeTab==='all' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700'}`}
                >
                  All
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="ug"   
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                           ${activeTab==='ug' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700'}`}
                >
                  Undergraduate
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="pg"  
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                           ${activeTab==='pg' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700'}`}
                >
                  Postgraduate
                </Tabs.Trigger>
               
              </Tabs.List>
            </div>

            <Tabs.Content value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                {[...ugCourses, ...pgCourses].map((item, index) => (
                  <EnquireCard key={index} {...item} universityName="UPES University Online"/>
                ))}
              </div>
            </Tabs.Content>




            <Tabs.Content value="ug">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                {ugCourses.map((item, index) => (
                  <EnquireCard key={index} {...item} universityName="UPES University Online"/>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="pg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start content-start">
                {pgCourses.map((item, index) => (
                  <EnquireCard key={index} {...item} universityName="UPES University Online"/>
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </section>
     

     
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
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762585497/upes-form_wis0ng.webp"
          universityName="UPES University Online"
          defaultProgram={openModal.program || "MBA"}
          formType={openModal.type}
        />
      )}
</section>
    <div>
       <AccreditationSection
    title="Why Choose UPES University Online?"
    description="UPES University offers UGC-recognized online degrees with industry-relevant curriculum, flexible learning, career support, and a strong alumni network to help students succeed globally."
    stats={[]} 
    benefits={[
      {
        title: "Industry-Aligned Curriculum",
        description: "Programs designed in collaboration with industry experts to meet current market demands",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"/>
                  </svg>`,
      },
      {
        title: "Dedicated Academic Advisor",
        description: "Dedicated experts and advisor to guide you at every step of your professional career",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>`,
      },
      {
        title: "Career Services",
        description: "Be job-ready with resume building workshops, internships & industry mentorship",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/>
                  </svg>`,
      },
      {
        title: "Placement Opportunities",
        description: "Job interview prep, placement assistance & resume building for students to be job-ready",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>`,
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
   <section className="bg-gray-50 py-16 px-6 md:px-20" id="upes-admission">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          UPES Online Admission Process
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          The admission process at <span className="font-semibold text-blue-600">UPES Online</span> 
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
              Your counsellor will provide detailed information about UPES Online 
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
              Complete the UPES Online application form under the supervision of 
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
              from UPES Online. Your UniFost Counsellor will then assist you with 
              LMS login credentials, induction schedule, and onboarding support.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Apply through <span className="font-semibold text-blue-600">UniFost</span> 
            for personalized guidance, faster processing, and complete support 
            throughout your admission journey with UPES Online.
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
            <th className="p-4 text-center">UPES University Online</th>
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
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327865/upes-certificate_fznbzc.webp" alt="UPES University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>

          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from UPES University
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              UPES University Online provides comprehensive services including e-lectures, counseling from academic advisors, career assistance, and more to help students succeed in their professional journeys.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits of UPES Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Live Classes by Industry Experts</li>
              <li>Career Assistance & Exclusive Virtual Job Fairs</li>
              <li>Globally recognized degrees equivalent to on-campus programs</li>
              <li>Practical & Immersive Learning through industry-relevant curriculum</li>
            </ul>
          </div>
        </div>
      </section>
            <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about UPES University Online Programs
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
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-red-50 hover:to-red-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
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
      <section id='Partner' className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our learners work at
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Top hiring partners at UPES Online
            </p>
          </div>
           
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp" alt="Company" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp" alt="Microsoft" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp" alt="Company 9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp" alt="Company 10" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp" alt="Company4" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp" alt="Company 6" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/tcs_mpq9no.webp" alt="Companany5" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp" alt="Adove" className="h-12 object-contain" />
            </div>
          </div>
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
                              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327864/upes_logo_nogkrn.png" alt="UPES University Logo" className="h-10 w-auto bg-white" />
                              <span className="text-xl font-bold text-[#d9235c]">UPES</span>
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
                                
                                <a href="tel:+917042646766" className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200" title="Call us"  aria-label="Email us at info@unifostedu.com">
                                             
                                             <span className="text-orange-400">📞</span>
                                            </a>
                                <span className="text-sm">+91 7042646766</span>
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
                          Popular Programs & Specializations – Vivekananda Global University (VGU)  
                        </h4>
          
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                          {[
  "BBA Operations Management - UPES Online",
  "BBA Financial Management - UPES Online",
  "BBA Human Resource Management - UPES Online",
  "BBA Marketing Management - UPES Online",
  "BBA Digital Business - UPES Online",
  "BBA Logistics and Supply Chain - UPES Online",
  "BBA International Business - UPES Online",

  "BCA Cloud Computing - UPES Online",
  "BCA Cyber Security - UPES Online",
  "BCA Data Analytics - UPES Online",
  "BCA New age Technology - UPES Online",
  
// PG Courses
  "MBA Oil & Gas Management - UPES Online",
  "MBA Power Management - UPES Online",
  "MBA Logistics & Supply Chain Management - UPES Online",
  "MBA Business Analytics - UPES Online",
  "MBA Finance - UPES Online",
  "MBA Marketing - UPES Online",
  "MBA Human Resource Management - UPES Online",
  "MBA Infrastructure Management - UPES Online",
  "MBA International Business - UPES Online",
  "MBA Operations Management - UPES Online",
  "MBA Financial Management - UPES Online",
  "MBA Digital Business - UPES Online",

  "MCA Artificial Intelligence and Machine Learning - UPES Online",
  "MCA Cyber Security and Forensics - UPES Online",
  "MCA Data Science - UPES Online"
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
                        <p>&copy; {new Date().getFullYear()} UPES University Online". All rights reserved.</p>
                        <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
                      </motion.div>
                    </div>
                  </footer>
             {openModal && (
                              <ApplyEnquiryModal
                                open={!!openModal}
                                onOpenChange={(v) => !v && setOpenModal(null)}
                                title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                                subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                                imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762585497/upes-form_wis0ng.webp"
                                universityName="UPSE University Online"
                                defaultProgram="MBA"
                                formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                              />
                            )}
      </div>

 </>
  );
};

export default Upes;
