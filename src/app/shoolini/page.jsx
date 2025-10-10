'use client';
import React from 'react';
import { useState } from 'react';
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
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Button } from '@/components/ui/button';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const Shoolini = () => {
const [openModal, setOpenModal] = useState(null);
  const ugCourses = [
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 pass with Commerce",
      fees: "	₹75,000/-",
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
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
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

        <section id="hero" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
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
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">

      {/* Left Content */}
      <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-8 sm:py-12 lg:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Main Heading */}
         

         

          {/* Badge Text */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
            {["Flexible Learning", "Research-Focused", "Career-Oriented Programs"].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              size="lg"
              className="bg-red-500 hover:from-blue-600 hover:to-green-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            onClick={() =>{setOpenModal({type:'apply'})}}>
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white-500 text-black  hover:border-white hover:bg-white text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto "
               onClick={() =>{setOpenModal({type:'Enquire Now'})}} >
              Enquire Now
            </Button>
          </div>
        </motion.div>
      </div>

    
    </div>
  </div>
</section>

   { /* About Shoolini University Hero Section */}
   <HeroSection
  universityName=" About Shoolini University Online"
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

      {/* Why Choose Shoolini */}
  

      {/* Admission Process */}
      <AdmissionProcedure/> 


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

      {/* Hiring Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at Shoolini</h2>
          <p className="text-xl text-gray-600">Trusted by global companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/nestle.webp", "/images/decathlon.webp", "/images/icici.webp", "/images/lt.webp", "/images/hindustanunilever.webp", "/images/lg.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src={src} alt="Recruiter" className="h-12 object-contain" />
            </div>
          ))}
          
        </div>
      </section>
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
