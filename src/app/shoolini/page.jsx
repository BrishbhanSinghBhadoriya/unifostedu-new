'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import {
  FaBookOpen, FaUserTie, FaRobot, FaBriefcase, FaBook, FaUniversity,FaGraduationCap,FaGlobe,
  FaUserFriends, FaClipboardCheck
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Head from 'next/head';
import EnquireCard from '@/components/EnquireCard';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import { Button } from '@/components/ui/button';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const ShooliniFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Is Shoolini University UGC approved for online degrees?",
      answer: "Yes, Shoolini University is fully recognized by UGC and approved to offer online degree programs. All online degrees are equivalent to regular degrees and are valid for higher education and employment."
    },
    {
      question: "What is the fee structure for Shoolini University online courses?",
      answer: "The fee varies by program: BBA/BCA costs ₹90,000 (₹63,000 upfront + ₹27,000 after placement), B.Com costs ₹75,000, MBA costs ₹1,40,000 (₹98,000 upfront + ₹42,000 after placement), Executive MBA costs ₹1,80,000, MSc Data Science costs ₹1,20,000, and MA programs range from ₹42,000 to ₹1,00,000."
    },
    {
      question: "What are the eligibility criteria for Shoolini University online MBA?",
      answer: "Candidates must have a Bachelor's degree of minimum 3 years duration from a recognized university with at least 50% marks. Work experience is preferred but not mandatory for regular MBA. Executive MBA typically requires work experience."
    },
    {
      question: "Does Shoolini University provide placement assistance for online students?",
      answer: "Yes, Shoolini University offers dedicated placement support for online students. Top recruiters include Nestle, ICICI, L&T, Decathlon, Hindustan Unilever, and LG. The university has a unique payment model where a portion of fees is paid only after placement."
    },
    {
      question: "How is Shoolini University ranked globally?",
      answer: "Shoolini University is ranked among the top 200 universities globally by QS World Rankings. It is also recognized as one of India's top innovators and patent filers, with strong emphasis on research and innovation."
    },
    {
      question: "What specializations are available in Shoolini University online MBA?",
      answer: "Shoolini offers 16+ MBA specializations including Marketing Management, Finance, HR, Operations & Supply Chain, IT Management, Digital Marketing, Data Science & Business Analytics, Banking & Insurance, Tourism Management, Pharma & Healthcare, Retail Management, and Direct Selling Management."
    },
    {
      question: "Can I pursue Shoolini University online degree while working?",
      answer: "Absolutely! Shoolini's online programs are designed for working professionals with flexible learning schedules, weekend classes, recorded lectures, and industry-relevant curriculum that allows you to balance work and studies effectively."
    },
    {
      question: "What is the duration of online programs at Shoolini University?",
      answer: "Undergraduate programs (BBA, BCA, B.Com) are 3 years duration, while postgraduate programs (MBA, MSc, MA) are 2 years duration. The courses follow a semester-based system with regular assessments and project work."
    },
    {
      question: "Are Shoolini University online degrees valid for government jobs?",
      answer: "Yes, Shoolini University online degrees are UGC-approved and are valid for all government job applications, higher education, and competitive examinations where a recognized degree is required."
    },
    {
      question: "What documents are required for admission to Shoolini University online courses?",
      answer: "Required documents include: 10th and 12th mark sheets, graduation mark sheet and degree certificate (for PG courses), passport-sized photographs, Aadhar card, category certificate (if applicable), transfer/migration certificate, and work experience letters (for Executive MBA)."
    },
    {
      question: "Does Shoolini University offer scholarships for online students?",
      answer: "Yes, Shoolini University provides merit-based scholarships for deserving students. Scholarships are awarded based on academic performance, entrance test scores, and other criteria. Contact the admission team for detailed scholarship information."
    },
    {
      question: "What is the admission process for Shoolini University online programs?",
      answer: "The admission process involves 4 simple steps: 1) Fill the online application form, 2) Upload required documents and pay application fee, 3) Receive confirmation and student login credentials, 4) Complete fee payment and begin classes."
    },
    {
      question: "How are classes conducted in Shoolini University online programs?",
      answer: "Classes are conducted through a combination of live interactive sessions and recorded lectures. Students get access to a learning management system (LMS) with study materials, assignments, quizzes, and project work. Live doubt-clearing sessions are also conducted regularly."
    },
    {
      question: "What makes Shoolini University different from other online universities?",
      answer: "Shoolini stands out with its global QS ranking, research-driven curriculum, unique payment model (pay after placement option), 50+ industry partners, experienced faculty with international exposure, and strong focus on innovation with top patent filings in India."
    },
    {
      question: "Can I get study materials and books for Shoolini University online courses?",
      answer: "Yes, all students receive comprehensive digital study materials, e-books, video lectures, case studies, and reference materials through the LMS. Additional physical books may be provided for certain courses based on program requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Shoolini University online programs, admissions, fees, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our admission counselors are here to help you. Get personalized guidance for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917042867717"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Call: +91-7042867717
            </a>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-500 font-semibold rounded-full border-2 border-red-500 hover:bg-red-50 transition-all duration-300">
              💬 Chat with Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Main Shoolini Component
const Shoolini = () => {
  const [openModal, setOpenModal] = useState(null);
  
  const ugCourses = [
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 pass with Commerce",
      fees: "₹75,000/-",
      specialization: "Accounting, Finance and Taxation",
      image: "/images/bcom.webp",
      alt: "Bachelor of Commerce at Shoolini University",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 in any discipline with 40% marks in last qualifying examination",
      fees: "(63,000/- + 27,000/-) = ₹90,000/-  [ ₹27,000/-(Only to be paid after Placement)]",
      specialization: "HR, Marketing, Finance, Digital Marketing, Computer Science, Direct Selling",
      image: "/images/shoolini-bba.webp",
      alt: "Bachelor of Business Administration at Shoolini University",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 in any discipline with 40% marks in last qualifying examination. Reservation of seats as per government policies. ",
      fees: "(63,000/- + 27,000/-) = ₹90,000/-  [ ₹27,000/-(Only to be paid after Placement)]",
      specialization: "Machine Learning, Data Science, Cyber Secruity and Artificial Intelligence",
      image: "/images/shoolini-bca.webp",
      alt: "Bachelor of Computer Applications at Shoolini University",
    }
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.",
      fees: "(98,000/- + 42,000/-) = ₹1,40,000/- [ ₹42,000/-(Only to be paid after Placement)]",
      specialization: "Marketing Management, Operation & Supply Chain Management, Agri Business Management, Human Resource Management, IT Management, Biotechnology Management, Financial Management, Tourism Management, Food Technology Management, Digital Marketing, Real Estate Management, Pharma & Health Care Management,Retail Management,Direct Selling Management,Banking & Insurance,Data Science & Business Analytics",
      image: "/images/shoolini-mba.webp",
      alt: "Master of Business Administration at Shoolini University",
    },
    {
      course: "Executive MBA",
      duration: "2 Years",
      eligibility: "Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.",
      fees: "₹1,80,000/-",
      specialization: "Marketing Management, Operation & Supply Chain Management, Agri Business Management, Human Resource Management, IT Management, Biotechnology Management, Financial Management, Tourism Management, Food Technology Management, Digital Marketing, Real Estate Management, Pharma & Health Care Management,Retail Management,Direct Selling Management,Banking & Insurance,Data Science & Business Analytics",
      image: "/images/shoolini-mba.webp",
      alt: "Executive MBA at Shoolini University",
    },
    {
      course: "MSC in Data science ",
      duration: "2 Years",
      eligibility: "Graduation in Life Sciences",
      fees: "₹1,20,000/-",
      specialization: "Data Science",
      image: "/images/shoolini-mca.webp",
      alt: "Master of Science in Data Science at Shoolini University",
    },
    {
      course: "Master of Arts (M.A) ",
      duration: "2 Years",
      eligibility: "Bachelor's degree with any discipline with minimum of 40% marks. 60% marks in case of International Students in the qualifying examination.",
      fees: "42,000-1,00,000",
      specialization: "English Literature, journalism and Mass Communication",
      image: "/images/shoolini-ma.webp",
      alt: "Master of Arts in shoolini University",
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <Head>
        <title>Shoolini University Online Programs | Fees, Courses & Admission</title>
        <meta name="description" content="Explore UG & PG online programs at Shoolini University. Check eligibility, fees, placements & apply online." />
        <meta name="keywords" content="Shoolini University Online, Shoolini MBA Online, Shoolini BBA Online, Shoolini BCA Online, Shoolini Online Courses, Shoolini Admission, Shoolini Fees" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
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
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img 
                  src="/images/logo_shoolini.webp" 
                  alt="Logo_shoolini" 
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
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  📞
                </a>
                
                {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-500/25 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section id="About" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden pt-16 lg:pt-20">
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0">
    <Image
      src="/images/shoolini_banner.png"
      alt="Shoolini University Campus"
      fill
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-4 px-4 z-10">
      <Button
        size="lg"
        className="bg-red-500 hover:bg-white text-black font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
        onClick={() => setOpenModal({ type: 'apply' })}
      >
        Apply Now
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="bg-white text-black hover:bg-red-500 font-bold px-8 py-3 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300"
        onClick={() => setOpenModal({ type: 'Enquire Now' })}
      >
        Enquire Now
      </Button>
  </div>
  </div>

</section>

   { /* About Shoolini University Hero Section */}
   <HeroSection
  universityName=" About Shoolini University Online"
  universityNameClass="text-red-500"
  location="Solan, Himachal Pradesh, India"
  type="Private University"
  nirfRank="Top 200 "
  rating="4.3"
  description="Research-Oriented Programs | Flexible Online & Hybrid Learning | Globally Recognized Degrees"
  description2={`
    Shoolini University is a top-ranked research-oriented university offering globally recognized programs in science, management, agriculture, and technology — with the flexibility of online and hybrid learning.
    
    Ranked among the top 200 universities globally by QS, Shoolini University focuses on research, innovation, and student success.
    Our online degree programs are designed to secure your future, give your career a competitive edge, and ensure great placements or selection in leading international universities. You only pay once your desired outcome is achieved.
  `}
  badgeText="Flexible Learning | Research-Focused | Career-Oriented Programs"
  imgSrc="/images/shoolini-uni.webp"
  imgAlt="Shoolini University Campus"
  students="20K+" 
  partners="50+"
  campus="Solan Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Career-Oriented" },
    { icon: <FaGraduationCap className="text-blue-600" />, text: "Academic Excellence" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>

       <div>
  <AccreditationSection
    title="Why Choose Shoolini University?"
    description="Shoolini University is one of India’s top innovators and patent filers, globally recognized for its research-driven education, experienced faculty, and career-oriented programs."
    stats={[]} // No numerical stats
    benefits={[
      {
        title: "Research-Driven Education",
        description: "One of India’s top patent filers and innovators.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>`,
      },
      {
        title: "Experienced Faculty",
        description: "Faculty with global experience and industry exposure.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>`,
      },
      {
        title: "Global Rankings",
        description: "Ranked among top universities globally by QS.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.33 9.74-8 11-4.67-1.26-8-6-8-11V6l8-4z"/>
                  </svg>`,
      },
      {
        title: "Career-Oriented Programs",
        description: "Job-ready curriculum and live industry projects.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/wes.webp", alt: "WES Rankings", name: "WES Rankings" },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.list.map((item, index) => <EnquireCard key={index} {...item} />)}
            </div>
          </div>
        </section>
      ))}
         

         <section id='Fees' className="py-10 px-4 md:px-12 bg-gray-50">
  <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
    Shoolini University Courses
  </h1>

  {/* UG Courses Table */}
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">
      Undergraduate (UG) Courses
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm md:text-base">
        <thead className="bg-blue-100 text-gray-800">
          <tr>
            <th className="border p-3 text-left">Course Name</th>
            <th className="border p-3 text-left">Duration</th>
            <th className="border p-3 text-left">Eligibility</th>
            <th className="border p-3 text-left">Fees</th>
            <th className="border p-3 text-left">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Bachelor of Commerce (B.Com)
            </td>
            <td className="border p-3">3 Years</td>
            <td className="border p-3">10+2 pass with Commerce</td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹75,000/-
            </td>
            <td className="border p-3">
              Accounting, Finance and Taxation
            </td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Bachelor of Business Administration (BBA)
            </td>
            <td className="border p-3">3 Years</td>
            <td className="border p-3">
              10+2 in any discipline with 40% marks in last qualifying
              examination
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              (63,000/- + 27,000/-) = ₹90,000/- [ ₹27,000/-(Only to be paid
              after Placement)]
            </td>
            <td className="border p-3">
              HR, Marketing, Finance, Digital Marketing, Computer Science,
              Direct Selling
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Bachelor of Computer Applications (BCA)
            </td>
            <td className="border p-3">3 Years</td>
            <td className="border p-3">
              10+2 in any discipline with 40% marks in last qualifying
              examination. Reservation of seats as per government policies.
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              (63,000/- + 27,000/-) = ₹90,000/- [ ₹27,000/-(Only to be paid
              after Placement)]
            </td>
            <td className="border p-3">
              Machine Learning, Data Science, Cyber Security and Artificial
              Intelligence
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* PG Courses Table */}
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">
      Postgraduate (PG) Courses
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm md:text-base">
        <thead className="bg-blue-100 text-gray-800">
          <tr>
            <th className="border p-3 text-left">Course Name</th>
            <th className="border p-3 text-left">Duration</th>
            <th className="border p-3 text-left">Eligibility</th>
            <th className="border p-3 text-left">Fees</th>
            <th className="border p-3 text-left">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Master of Business Administration (MBA)
            </td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">
              Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              (98,000/- + 42,000/-) = ₹1,40,000/- [ ₹42,000/-(Only to be paid
              after Placement)]
            </td>
            <td className="border p-3">
              Marketing, Operations, HR, IT, Biotech, Finance, Tourism, Food
              Tech, Digital Marketing, Data Science & Business Analytics
            </td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="border p-3 font-medium">Executive MBA</td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">
              Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹1,80,000/-
            </td>
            <td className="border p-3">
              Marketing, HR, Operations, IT, Digital Marketing, Finance, Data
              Science, etc.
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">MSc in Data Science</td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">Graduation in Life Sciences</td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹1,20,000/-
            </td>
            <td className="border p-3">Data Science</td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="border p-3 font-medium">Master of Arts (M.A)</td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">
              Bachelor's degree with any discipline with minimum of 40% marks.
              (60% for International Students)
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹42,000 - ₹1,00,000
            </td>
            <td className="border p-3">
              English Literature, Journalism and Mass Communication
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


            {/*  Add Quick Comparison Table */}
<section id='QuickComparison' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-red-600">Online vs Regular</span> Degree Comparison
    </h2>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">shoolini university online</th>
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
                     <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full"></div>
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
                       <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-red-400 to-red-500 z-0 rounded-full"></div>
             
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
                           <div className="bg-gradient-to-br from-red-400 to-red-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
            <Image width={100} height={100} loading="lazy" src="/images/shoolini-ccertificate.webp" alt="Shoolini Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from Shoolini University</h2>
            <p className="mb-6 text-lg">Boost your skills with online degrees from a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Global QS Rankings</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
            </ul>
          </div>
        </div>
      </section>
        <section id='Faq'><ShooliniFAQ /></section>

      
      {/* Hiring Companies */}
      <section id='Placement' className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at Shoolini</h2>
          <p className="text-xl text-gray-600">Trusted by global companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/nestle.webp", "/images/decathlon.webp", "/images/icici.webp", "/images/company.webp", "/images/company1.webp", "/images/company9.webp", 
              "/images/com10.webp", "/images/companany4.webp", 
              "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp",
              "/images/3.webp", "/images/4.webp", "/images/5.webp", 
              "/images/6.webp", "/images/7.webp", "/images/9.webp", "/images/lt.webp", "/images/hindustanunilever.webp", "/images/lg.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
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
                        <img src="/images/logo_shoolini.webp" alt="Shoolini University Logo" className="h-10 w-auto bg-white" />
                        <span className="text-xl font-bold text-red">shoolini</span>
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
                        {['MBA', 'BBA',  'BCA', 'M.Com', 'B.Com','M.Sc.', 'MA'].map((program, i) => (
                          <li key={i} onClick = {() => setOpenModal({ type: 'apply',})} className="hover:text-orange-400 transition-colors cursor-pointer">
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
                            <a href={link.href} className="hover:text-orange-400 transition-colors">
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
                        className="w-full bg-red-500 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
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
                    Popular Programs & Specializations – Shoolini University Online  
                  </h4>
    
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {[
                     "BBA General - Shoolini Online",
                     "BBA HR, Marketing, Finance - Shoolini Online",
                     "BBA Digital Marketing - Shoolini Online",
                     "BBA Computer Science - Shoolini Online",
                     "BBA Direct Selling - Shoolini Online",
                     "BCA General - Shoolini Online",
                     "BCA Machine Learning - Shoolini Online",
                     "BCA Data Science - Shoolini Online",
                     "BCA Cyber Security - Shoolini Online",
                     "BCA Artificial Intelligence - Shoolini Online",
                     "B.Com Accounting, Finance & Taxation - Shoolini Online",

                     // PG Courses
                     "MBA Marketing Management - Shoolini Online",
                     "MBA Operation & Supply Chain Management - Shoolini Online",
                     "MBA Agri Business Management - Shoolini Online",
                     "MBA Human Resource Management - Shoolini Online",
                     "MBA IT Management - Shoolini Online",
                     "MBA Biotechnology Management - Shoolini Online",
                     "MBA Financial Management - Shoolini Online",
                     "MBA Tourism Management - Shoolini Online",
                     "MBA Food Technology Management - Shoolini Online",
                     "MBA Digital Marketing - Shoolini Online",
                     "MBA Real Estate Management - Shoolini Online",
                     "MBA Pharma & Health Care Management - Shoolini Online",
                     "MBA Retail Management - Shoolini Online",
                     "MBA Direct Selling Management - Shoolini Online",
                     "MBA Banking & Insurance - Shoolini Online",
                     "MBA Data Science & Business Analytics - Shoolini Online",
                     "Executive MBA - Shoolini Online",
                     "M.Sc Data Science - Shoolini Online",
                     "MA English Literature - Shoolini Online",
                     "MA Journalism & Mass Communication - Shoolini Online",
                    ].map((keyword, index) => (
                      <span
                        key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                        className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
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
                  <p>&copy; {new Date().getFullYear()} shoolini University Online. All rights reserved.</p>
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
                imageSrc="/images/shoolini_form1.png"
                universityName="Shoolini Online University"
                defaultProgram="MBA"
                formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
              />
            )}
       </div>
    </>
  );
};

export default Shoolini;
