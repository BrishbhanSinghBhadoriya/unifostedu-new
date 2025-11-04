'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import {
  FaBookOpen,
  FaUserTie,
  FaUniversity,
  FaBriefcase,
  FaClipboardCheck,
  FaGlobe,
  FaLaptopCode,
  FaUserFriends,
  FaLightbulb
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
const Vgu = () => {
  const ugCourses = [
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board ",
      fees: "₹1,32,000/-",
      specialization: "'Full-stack development, cybersecurity, and software project management'  'Al, machine learning, deep learning, and chatbot development'  'Data mining, analytics, R & Python, big data, visualization' 'Virtualization, cloud platforms, cryptography, ethical hacking' 'UX research, wireframing, usability testing, visual tools'  'DLT, smart contracts, blockchain architecture, Ethereum'",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelore of Arts(BA)",
      duration: "3 Years",
      eligibility: "10+2 in any stream",
      fees: "₹72,000/-",
      specialization: "Economics + Public Policy + Computer Applications, Public Policy + English, English + History + Political Science, Computer Applications + Public Policy/IR, Political Science + International Relations + Public Policy, 51+ COMBINATIONS AVAILABLE'",
      image: "/images/ba.webp",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board.",
      fees: "₹1,32,000/-",
      specialization: "General, Digital Marketing, Retail Management, Fintech",
      image: "/images/bba.webp",
    },
   
  ];

  const pgCourses = [
    {
      course: "Masters of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: '₹1,50,000 - 2,40,000',
      specialization: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'Information Technology Management', 'Helthcare Management', 'Agribusiness Management', 'International Business'],
      image: "/images/mba.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University." ,
      fees: "₹1,50,000/-",
      specialization: "Software Engineering & Development, Data Science & Analytics, Cyber Security, Cloud & Devops, web & App Development, Blockchain & Emerging Technologies, Database Management",
      image: "/images/mca.webp",
    },
     {
      course: "Master of Arts (English)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University.",
      fees: "₹72,000/-",
      specialization: "English",
      image: "/images/ma.webp",
    },
    {
      course: "Master of Science (Maths)",
      duration: "2 Years",
      eligibility: "Graduates with BA / BSc degree with Mathematics as one of the three main subjects.",
      fees: "₹72,000/-",
      specialization: " Mathematics",
      image: "/images/ma1.webp",
    },
    {
      course: "Master of Arts Journalism and Mass Communication (MAJMC)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: "₹72,000/-",
      
      image: "/images/ma1.webp",
    }

  ];
  

  const faqData = [
    {
      question: "Is VGU (Vivekananda Global University) UGC approved for online degrees?",
      answer: "Yes, Vivekananda Global University (VGU) is fully recognized by UGC and approved to offer online degree programs. All online degrees from VGU are equivalent to regular degrees and are valid for higher education, government jobs, and employment opportunities."
    },
    {
      question: "What is the fee structure for VGU online courses?",
      answer: "VGU online course fees vary by program: BCA and BBA cost ₹1,32,000 for 3 years, BA costs ₹72,000 for 3 years, MBA costs ₹1,50,000 to ₹2,40,000 for 2 years, MCA costs ₹1,50,000 for 2 years, and MA programs (English, Maths, MAJMC) cost ₹72,000 for 2 years."
    },
    {
      question: "What are the eligibility criteria for VGU online MBA program?",
      answer: "To pursue MBA at VGU online, candidates must have completed graduation in any stream from a recognized university. The program offers 9 specializations including Finance, Marketing, Human Resources, Operations, Business Analytics, IT Management, Healthcare Management, Agribusiness Management, and International Business."
    },
    {
      question: "Does VGU provide placement assistance for online students?",
      answer: "Yes, VGU offers 100% placement assistance for online students. Top recruiters include Samsung, Airtel, ICICI, Nestle, TCS, PepsiCo, Decathlon, L&T, Hindustan Unilever, LG, and many more leading companies across various industries."
    },
    {
      question: "What specializations are available in VGU online BCA program?",
      answer: "VGU online BCA offers 6 industry-relevant specializations: Full-stack Development, AI & Machine Learning, Data Science & Analytics, Cloud Computing & Virtualization, UX/UI Design, and Blockchain & Ethereum technologies. Each specialization is designed to meet current industry demands."
    },
    {
      question: "What specializations are available in VGU online MBA program?",
      answer: "VGU offers 9 MBA specializations: Finance, Marketing, Human Resources, Operations, Business Analytics, Information Technology Management, Healthcare Management, Agribusiness Management, and International Business - all designed for career advancement."
    },
    {
      question: "Can I pursue VGU online degree while working?",
      answer: "Absolutely! VGU's online programs are specifically designed for working professionals with flexible schedules, recorded lectures, weekend classes, and an industry-relevant curriculum that allows you to balance work and studies effectively without compromising either."
    },
    {
      question: "What is the duration of online programs at VGU Jaipur?",
      answer: "Undergraduate programs (BCA, BBA, BA) at VGU are 3 years duration, while postgraduate programs (MBA, MCA, MA) are 2 years duration. All courses follow a semester-based system with regular assessments, projects, and practical work."
    },
    {
      question: "Are VGU online degrees valid for government jobs and competitive exams?",
      answer: "Yes, VGU online degrees are UGC-approved and AICTE recognized, making them completely valid for all government job applications, state and central government recruitments, higher education admissions, and competitive examinations like UPSC, SSC, Banking, etc."
    },
    {
      question: "What documents are required for admission to VGU online courses?",
      answer: "Required documents include: 10th and 12th mark sheets and certificates, graduation mark sheet and degree (for PG courses), passport-sized photographs, Aadhar card/government ID proof, category certificate if applicable, migration/transfer certificate, and any relevant work experience letters."
    },
    {
      question: "Does VGU offer scholarships for online students?",
      answer: "Yes, VGU provides merit-based scholarships for deserving students. Scholarships are awarded based on academic performance, entrance test scores, financial need, and other criteria. Contact the admission team at +91-7042867717 for detailed scholarship information and eligibility."
    },
    {
      question: "What is the admission process for VGU online programs?",
      answer: "VGU admission process has 4 simple steps: 1) Fill the online application form on the university portal, 2) Upload required documents and pay the application fee, 3) Receive admission confirmation and student login credentials, 4) Complete the full fee payment and begin your classes."
    },
    {
      question: "How are classes conducted in VGU online programs?",
      answer: "VGU conducts classes through a combination of live interactive sessions with expert faculty and pre-recorded video lectures. Students get access to a comprehensive Learning Management System (LMS) with study materials, assignments, quizzes, project work, and regular doubt-clearing sessions."
    },
    {
      question: "What makes VGU different from other online universities in Rajasthan?",
      answer: "VGU stands out with its UGC & AICTE recognition, NAAC accreditation, modern infrastructure in Jaipur, expert faculty with industry experience, 25+ global partnerships, strong placement support, industry-driven curriculum, and a track record of producing 25,000+ successful graduates."
    },
    {
      question: "What specializations are available in VGU online MCA program?",
      answer: "VGU online MCA offers 7 cutting-edge specializations: Software Engineering & Development, Data Science & Analytics, Cyber Security, Cloud & DevOps, Web & App Development, Blockchain & Emerging Technologies, and Database Management - aligned with industry 4.0 requirements."
    },
    {
      question: "What is the difference between VGU online degree and regular campus degree?",
      answer: "Both VGU online and regular campus degrees carry the same UGC recognition and validity. The key differences are: Online offers flexible timing and location-independent learning at more affordable fees, while campus requires fixed schedules and physical presence but offers more direct campus interactions."
    },
    {
      question: "Can I get internship opportunities while studying VGU online programs?",
      answer: "Yes, VGU provides internship opportunities and industry projects as part of the curriculum. Students get hands-on experience through live projects, industry collaborations, and internship placements with partner companies, helping them build practical skills and professional networks."
    },
    {
      question: "Is VGU NAAC accredited and NIRF ranked?",
      answer: "Yes, VGU is NAAC accredited and recognized by UGC, AICTE, and other regulatory bodies. The university has NIRF ranking of 100+ and maintains high academic standards with modern infrastructure, qualified faculty, and industry-relevant curriculum for student success."
    }
  ];
      useEffect(() => {
          
    
          const timer= setTimeout(()=>{
           setOpenModal(true)
          },3000)
          return () => clearTimeout(timer);
    
           
    },[])
  const [openIndex, setOpenIndex] = useState(null);        
  const [openModal, setOpenModal] = useState(null);

  
  return (
    <>
      
        <title>VGU University - Courses, Admissions, Enquiry</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      <Head>
        <title>VGU University Jaipur - Courses, Admissions & Enquiry</title>
        <meta name="description" content="Vivekananda Global University (VGU), Jaipur offers top-ranked undergraduate and postgraduate programs in management, computer applications, arts, and sciences. Apply now for admissions, explore courses, and secure your future." />
        <meta name="keywords" content="VGU University, VGU Jaipur, Vivekananda Global University, BCA, BBA, BA, MBA, MCA, UG courses, PG courses, Admissions, Enquiry, Jaipur University" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/vgu-university" />
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="VGU University Jaipur - Courses, Admissions & Enquiry" />
        <meta property="og:description" content="Explore UG & PG programs at Vivekananda Global University, Jaipur. Get admissions, course details, and career guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/vgu-university" />
        <meta property="og:image" content="https://unifostedu.com/images/vgu-uni.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"/>

      </Head>

       <style jsx>{`
  .vgu-font { 
    font-family: 'Montserrat', 'Open Sans', sans-serif; 
  }
  * { 
    box-sizing: border-box; 
  }
  body { 
    overflow-x: hidden; 
  }
`}</style>

<div className="vgu-font overflow-x-hidden">
           <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="/images/vgulogo.webp" 
                  alt="Logo_vgu" 
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
                  <span className="hidden lg:inline">+91-7042867717</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#821812] rounded-full text-white hover:bg-[#821812] transition-colors"
                >
                  📞
                </a>
                
                {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-[#821812] hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-500/25 text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline ">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      {/* Hero Section */}
      
      <section id="Admission" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden pt-16 lg:pt-20">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/vguonline.webp"
            alt="vgu online university"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Content Container */}
        <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
      
          {/* Left Content */}
          <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-8 sm:py-12 lg:py-24 w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Badge Text */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-10 sm:mt-12">
        {["Flexible Learning", "Research-Focused", "Career-Oriented Programs"].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/30"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium">{text}</span>
          </div>
        ))}
      </div>
            </motion.div>
          </div>
        </div>
      
        {/* Buttons at the bottom of the hero section */}
        <div className="absolute bottom-8 left-4 md:left-0 flex flex-col sm:flex-row gap-4 px-4 z-10">
            <Button
              size="lg"
              className="bg-white hover:bg-[#821812] text-black font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 curser-hover"
              onClick={() => setOpenModal({ type: 'apply' })}
            >
              Apply Now
            </Button>
      
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-[#821812] font-bold px-8 py-3 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300"
              onClick={() => setOpenModal({ type: 'Enquire Now' })}
            >
              Enquire Now
            </Button>
        </div>
        </div>
      
      </section>
     <HeroSection
  universityName="Vivekananda Global University (VGU) Jaipur"
  universityNameClass="text-[#821812]" 
  location="Jaipur, Rajasthan, India"
  type="Private University"
  nirfRank="100+" 
  rating="4.2"  
  description="Top-ranked UGC & AICTE recognized university in Jaipur offering world-class education, modern infrastructure, and global learning opportunities."
  description2={`
    Vivekananda Global University (VGU) is one of the leading private universities in Rajasthan, 
    providing diverse undergraduate and postgraduate programs across engineering, management, 
    arts, and sciences.  

    With a strong focus on innovation, research, and holistic development, VGU equips students 
    with the knowledge and skills to excel in a global job market. Recognized for its 
    modern campus, expert faculty, and industry-driven curriculum, it ensures both academic 
    and professional success. 
  `}
  badgeText="UGC & AICTE Recognized | Innovation Driven | Global Learning"
  imgSrc="/images/vgu-uni.webp"
  imgAlt="VGU University Campus"
  students="25K+" 
  partners="25+" 
  campus="VGU Jaipur Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Diverse Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty & Mentorship" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Learning Opportunities" },
    { icon: <FaLightbulb className="text-blue-600" />, text: "Innovation & Research Focus" },
  ]}
 
/>
     

        <div>
  <AccreditationSection
    title="Why Choose VGU University?"
    description="Vivekananda Global University (VGU), Jaipur, is a top-ranked UGC & AICTE recognized private university offering modern learning, expert faculty, global exposure, strong placements, and vibrant campus life."
    stats={[]} // Currently no numerical stats provided for VGU
    benefits={[
      {
        title: "Modern Learning",
        description: "Smart classrooms, labs, and interactive sessions for enhanced education.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" 
  class="w-6 h-6" fill="none" viewBox="0 0 24 24" 
  stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
</svg>`

      },
      {
        title: "Expert Faculty",
        description: "Highly qualified professors with academic excellence and industry experience.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/></svg>`,
      },
      {
        title: "UGC Approved",
        description: "Recognized programs ensuring credibility and career growth.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
      },
      {
        title: "Strong Placements",
        description: "Top companies recruit VGU graduates with competitive packages.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" 
  class="w-6 h-6" fill="none" viewBox="0 0 24 24" 
  stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5v14"/>
</svg>`

      },
      {
        title: "Global Exposure",
        description: "International tie-ups, collaborations, and student exchange programs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
      },
      {
        title: "Industry Projects",
        description: "Hands-on learning through internships and real-world projects.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>`,
      },
      {
        title: "Vibrant Campus Life",
        description: "Student clubs, cultural activities, and sports for holistic growth.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 20c0-5.33 9.33-8 10-8s10 2.67 10 8v2H2v-2z"/></svg>`,
      },
      {
        title: "Career Guidance",
        description: "Workshops, internships, resume-building, and placement support.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/></svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
      { src: "/images/bci.webp", alt: "BCI", name: "Bar Council of India (BCI)" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>

      {/* UG & PG Course Cards */}
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
            </tr>
          ))}
        </tbody>
      </table>
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
          <tr className="bg-[#821812] text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Vivekananda Global University (VGU),</th>
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
             
    {/* Admission Procedure */}
     <section className="relative py-20 bg-white">
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
             <div className="w-24 h-1 bg-[#821812] mx-auto mb-8 rounded-full"></div>
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
                           Easy 4-Step Admission Process
                         </h3>
                 
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                           {/* Connecting Line */}
                           <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-[#821812] z-0 rounded-full"></div>
                 
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
                               <div className="bg-[#821812] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
         

      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/vgu-certificate.webp" alt="VGU Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Degree from VGU University</h2>
            <p className="mb-6 text-lg">VGU offers top-notch academic programs with industry tie-ups, live projects, and holistic career support.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of VGU</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Industry-relevant curriculum</li>
              <li>Placement support and internships</li>
              <li>State-of-the-art campus and labs</li>
              <li>Exposure to global learning opportunities</li>
            </ul>
          </div>
        </div>
      </section>


          {/* Professional FAQ Section */}
        <section id='Faq' className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
                Frequently Asked <span className="bg-[#821812] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Everything you need to know about Vivekananda Global University (VGU) Programs
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
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#821812] hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-white"
                  >
                    <span className="text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#821812] group-hover:text-white transition-all duration-300">
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

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Graduates Work At</h2>
          <p className="text-xl text-gray-600">Top hiring partners of VGU</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/nestle.webp", "/images/decathlon.webp", "/images/icici.webp", "/images/company.webp", "/images/company1.webp", "/images/company9.webp", 
              "/images/com10.webp", "/images/companany4.webp", 
              "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp",
              "/images/3.webp", "/images/4.webp", "/images/5.webp", 
              "/images/6.webp", "/images/7.webp", "/images/9.webp", "/images/lt.webp", "/images/hindustanunilever.webp", "/images/lg.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
          {openModal && (
                        <ApplyEnquiryModal
                          open={!!openModal}
                          onOpenChange={(v) => !v && setOpenModal(null)}
                          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                          imageSrc="/images/vgu_form.webp"
                          universityName="Vivekananda Global University (VGU)"
                          defaultProgram="MBA"
                          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                        />
                      )}
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
                              <img src="/images/vgu_logo.jpeg" alt="vgu University Logo" className="h-10 w-auto bg-white" />
                              <span className="text-xl font-bold text-[#821812]">VGU</span>
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
                                <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#821812] transition-colors cursor-pointer">
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
                              {['MBA', 'BBA',  'BCA', 'M.Com', 'B.Com','M.Sc.', 'MA'].map((program, i) => (
                                <li key={i} onClick = {() => setOpenModal({ type: 'apply',})} className="hover:text-[#821812] transition-colors cursor-pointer">
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
                                { name: 'About', href: '#About' },
                                { name: 'Placements', href: '#Placement' },
                                { name: 'FAQs', href: '#Faq' },
                                { name: 'Quick Comparison', href: '#QuickComparison' },
                                { name: 'Fees Structure', href: '#Fees' }
                              ].map((link, i) => (
                                <li key={i}>
                                  <a href={link.href} className="hover:text-[#821812] transition-colors">
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
                                             
                                             <span className="text-[#821812]-400">📞</span>
                                            </a>
                                <span className="text-sm">+91-7042867717</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#821812] rounded-full flex items-center justify-center">
                                  <span className="text-orange-400">✉️</span>
                                </div>
                                <a href="mailto:info@unifostedu.com" className='p-2 rounded-lg hover:bg-slate-100 transition-all duration-200' title='Email us' aria-label='Email us at info@unifostedu.com'>
                                <span className="text-sm">info@unifostedu.com</span>
                                </a>
                              </div>
                            </div>
                            
                            <Button 
                              onClick={() => setOpenModal({ type: 'apply' })}
                              className="w-full bg-[#821812] hover:from-[#821812] hover:from-[#821812] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
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
                          Popular Programs & Specializations – Vivekananda Global University (VGU)"  
                        </h4>
          
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                          {[
                           // UG Courses
                            "BCA Full Stack Development - VGU Online",
                            "BCA Cyber Security - VGU Online",
                            "BCA Artificial Intelligence & Machine Learning - VGU Online",
                            "BCA Data Science & Analytics - VGU Online",
                            "BCA Cloud Computing - VGU Online",
                            "BCA Blockchain & Ethereum - VGU Online",
                            "BA Economics, Public Policy & Computer Applications - VGU Online",
                            "BA English, History & Political Science - VGU Online",
                            "BA International Relations & Public Policy - VGU Online",
                            "BBA General - VGU Online",
                            "BBA Digital Marketing - VGU Online",
                            "BBA Retail Management - VGU Online",
                            "BBA Fintech - VGU Online",

                           // PG Courses
                           "MBA Finance - VGU Online",
                           "MBA Marketing - VGU Online",
                           "MBA Human Resources - VGU Online",
                           "MBA Operations - VGU Online",
                           "MBA Business Analytics - VGU Online",
                           "MBA IT Management - VGU Online",
                           "MBA Healthcare Management - VGU Online",
                           "MBA Agribusiness Management - VGU Online",
                           "MBA International Business - VGU Online",
                           "MCA Software Engineering & Development - VGU Online",
                           "MCA Data Science & Analytics - VGU Online",
                           "MCA Cyber Security - VGU Online",
                           "MCA Cloud & DevOps - VGU Online",
                           "MCA Web & App Development - VGU Online",
                           "MCA Blockchain & Emerging Technologies - VGU Online",
                           "MCA Database Management - VGU Online",
                           "MA English - VGU Online",
                          "M.Sc Mathematics - VGU Online",
                          "MA Journalism & Mass Communication (MAJMC) - VGU Online"
                          ]
                        .map((keyword, index) => (
                            <span
                              key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                              className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
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
                        <p>&copy; {new Date().getFullYear()} Vivekananda Global University (VGU)". All rights reserved.</p>
                        <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
                      </motion.div>
                    </div>
                  </footer>
                  </div>
    </>
  );
};

export default Vgu;
