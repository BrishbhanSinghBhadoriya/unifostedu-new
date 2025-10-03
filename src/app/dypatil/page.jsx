'use client';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import EnquireCard from '@/components/EnquireCard';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from 'next/image';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const Dypatil = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const toggleExpanded = (type, index) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${type}-${index}`]: !prev[`${type}-${index}`]
    }));
  };

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fees: "₹1,45,400",
      eligibility: "10+2 Pass",
      specialization: "IT & System Management, International Business Management, Retail Management, Banking, Financial Services and Insurance Management, Shipping & Logistics Management, Marketing Management, Human Resource Management (HRM), Finance Management, E-commerce Management ",
      image: "/images/bba.webp",
      alt: "Bachelor of Business Administration (BBA) in Dy Patil ",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹1,40,000",
      eligibility: "Graduation with 50% Marks",
      specialization: "General",
      image: "/images/mca1.webp",
      alt: "Master of Computer Applications (MCA) in Dy Patil ",
    },
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,89,400",
      specialization: "Marketing Management, Human Resource Management, Finance Management, IT Management, Project Management, Operations Management, Hospital Administration & Healthcare Management, International Business Management, FinTech Management, Business Analytics Management, Artificial Intelligence & Machine Learning Management, Logistics, Materials & Supply Chain Management, Blockchain Management, Digital Marketing Management, Agri-Business Management",
      image: "/images/mba.webp",
      alt: "Master of Business Administration (MBA) in Dy Patil ",
    },
  ];

  // Function to render expandable content
  const renderExpandableContent = (content, type, index, limit = 80) => {
    const isExpanded = expandedItems[`${type}-${index}`];
    const shouldTruncate = content.length > limit;
    const displayText = shouldTruncate && !isExpanded 
      ? `${content.substring(0, limit)}...` 
      : content;
    
    return (
      <div>
        <p className="mt-1 text-gray-700">
          {displayText}
          {shouldTruncate && (
            <button 
              onClick={() => toggleExpanded(type, index)}
              className="text-blue-600 font-medium ml-1 flex items-center"
            >
              {isExpanded ? 'Show less' : 'More'} 
              {isExpanded ? <FaChevronUp className="ml-1" size={12} /> : <FaChevronDown className="ml-1" size={12} />}
            </button>
          )}
        </p>
      </div>
    );
  };

  // Course Card Component
  const CourseCard = ({ item, index, type }) => {
    return (
      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <Image
            src={item.image} 
            alt={item.course} 
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h4 className="text-xl font-bold text-gray-900 mb-3 font-[Poppins]">{item.course}</h4>
          
          <div className="space-y-3 mb-4 flex-grow">
            <div className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Duration</span>
              <span className="ml-2 text-gray-700">{item.duration}</span>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Fees</span>
              <span className="ml-2 text-gray-700">{item.fees}</span>
            </div>
            
            <div>
              <div className="flex">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Specialization</span>
              </div>
              {renderExpandableContent(item.specialization, `${type}-specialization`, index)}
            </div>
            
            <div>
              <div className="flex">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Eligibility</span>
              </div>
              {renderExpandableContent(item.eligibility, `${type}-eligibility`, index)}
            </div>
          </div>
          
          <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 w-full">
            Enquire Now
          </button>
        </div>
      </div>
    );
  };

  // Career Support Component
  const CareerSupport = () => {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nurturing Your Career Dreams : <br />
              <span className="text-[#b3202e]">Together, We Build Success</span>
            </h2>
            <div className="w-32 h-1 bg-[#b3202e] mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                IC
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Industry Connections
                </h3>
                <p className="text-gray-600">
                  Taps into strong industry ties, broadening students' access to desirable job prospects.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp delay-200">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                S1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Support One-on-one
                </h3>
                <p className="text-gray-600">
                  Personalized career counseling, guiding students to align skills, interests and goals.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp delay-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                MI
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mock Interviews
                </h3>
                <p className="text-gray-600">
                  Refines communication and confidence by having mock interviews.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fadeInUp delay-500">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#b3202e] to-[#a6192e] text-white text-2xl font-bold">
                NE
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Networking Events
                </h3>
                <p className="text-gray-600">
                  Organizes events for students to network with professionals, employers, and alumni.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>
    );
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
     
      <Head>
        <title>DY Patil University Online </title>
        <meta 
          name="description" 
          content=" DY Patil University Online to pursue flexible UG and PG programs like BBA, MCA, and MBA. UGC-approved, NAAC A++ accredited, with career support and global recognition." 
        />
        <meta 
          name="keywords" 
          content="DY Patil University Online, Online BBA, Online MCA, Online MBA, UGC approved university, NAAC A++ accreditation, Online degrees India, Flexible learning, Career growth programs, Online higher education" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/dypatil/" />
      </Head>

      {/* Header and Banner Section */}
      <div className="w-full">
        {/* Header */}
<header className="flex justify-between items-center px-6 py-3 bg-white shadow">
  {/* Left Logo */}
  <div className="flex items-center space-x-4">
    <img
      src="/images/dpulogo.png"
      alt="DPU Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Right Side */}
  <div className="flex items-center space-x-6">
    {/* Apply Now Button */}
    <button 
    onClick={() => setOpenModal('apply')}
    className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white px-5 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-opacity">
      Apply Now
    </button>
       {/* Enquiry Modal */}
      {showEnquiryModal && (
              <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
                <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                      Get Started with Dr. DY Patil University
                    </DialogTitle>
                  </DialogHeader>
                  <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} universityName="Jain University Jaipur" />
                </DialogContent>
              </Dialog>
            )}

    
    <img src="/images/ugc.webp" alt="UGC Logo" className="h-17" />
    <img src="/images/aicte.webp" alt="AICTE Logo" className="h-20" />

    {/* Call button */}
    <a
      href="tel:+919071029441"
      className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white px-5 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-opacity"
    >
      +91-7042867717
    </a>
  </div>
</header>

        {/* Banner */}
        <div
          className="relative w-full h-[500px] flex items-center"
          style={{
            backgroundImage: "url('/images/dpu1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay with Gradient for Better Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
            {/* Left Content */}
            <div className="text-white max-w-lg">
              <p className="text-lg sm:text-xl font-medium drop-shadow-lg">
                Scale Your Career with D. Y. Patil
              </p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold drop-shadow-lg">
                <span className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] px-3 py-2 rounded text-white shadow-lg">
                  Online MBA
                </span>
              </h1>
              <p className="mt-4 text-lg font-medium drop-shadow-lg">
                Powered with Gen AI Tools
              </p>

              {/* Features */}
              <div className="mt-6 space-y-2 text-sm sm:text-base drop-shadow-lg">
                <p className="flex items-center">
                  ✅ Get Scholarship upto *Rs 10000/-
                </p>
                <p className="flex items-center">✅ Zero Cost EMI Available</p>
                <p className="flex items-center">
                  ✅ International Student exchange Programs in Dubai and Malaysia
                </p>
              </div>

              {/* Admission Open */}
              <div className="mt-6">
                <p className="text-xl sm:text-2xl font-semibold bg-white text-[#0c254a] inline-block px-4 py-2 rounded shadow-lg">
                  Admissions Open 2025
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Section - Bottom of Banner */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-r from-[#d91c5c] to-[#b11747] text-white py-3 px-6">
              <p className="text-center text-sm sm:text-base font-medium">
                <span className="font-semibold">Eligibility:</span> Graduate in any discipline, from a recognized University. Min 50% for regular and 45% for category students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tools Section */}
      <section
        className="w-full py-16"
        style={{
          background: "linear-gradient(180deg, #E91C63 0%, #9C144A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            AI Tools Covered
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
              <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                Logistics, Materials, and Supply Chain Management
              </h3>
              <ul className="space-y-3 text-sm">
                <li>✅ <b>Llamasoft AI</b> (AI-driven logistics decision-making)</li>
                <li>✅ <b>FourKites AI</b> (Real-time supply chain visibility)</li>
                <li>✅ <b>Project44 AI</b> (AI-powered freight management)</li>
                <li>✅ <b>Blume Global AI</b> (AI in supply chain automation)</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
              <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                Blockchain Management
              </h3>
              <ul className="space-y-3 text-sm">
                <li>✅ <b>IBM Blockchain AI</b> (AI for smart contract management)</li>
                <li>✅ <b>Hyperledger Fabric</b> (Enterprise blockchain AI solutions)</li>
                <li>✅ <b>Ethereum AI</b> (AI-powered decentralized applications)</li>
                <li>✅ <b>Chainalysis AI</b> (AI in blockchain security & compliance)</li>
                <li>✅ <b>Consensys AI</b> (AI-driven blockchain finance tools)</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
              <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                Digital Marketing Management
              </h3>
              <ul className="space-y-3 text-sm">
                <li>✅ <b>SurferSEO AI & Clearscope</b> (AI-driven SEO optimization)</li>
                <li>✅ <b>Adzooma AI</b> (AI-powered digital ad management)</li>
                <li>✅ <b>ChatGPT & Jasper AI</b> (AI-powered content generation)</li>
                <li>✅ <b>Albert AI</b> (AI-driven digital marketing automation)</li>
                <li>✅ <b>Canva AI</b> (AI-powered creative design)</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 text-left">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
              <h3 className="text-lg font-semibold text-center mb-4 text-[#0c254a]">
                AgriBusiness Management
              </h3>
              <ul className="space-y-3 text-sm">
                <li>✅ <b>Taranis AI</b> (AI for precision farming)</li>
                <li>✅ <b>Prospera AI</b> (AI-powered farm management)</li>
                <li>✅ <b>aWhere AI</b> (AI for weather-based agribusiness decisions)</li>
                <li>✅ <b>AgNext AI</b> (AI-driven supply chain for agriculture)</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </section>

      <div>
        <AccreditationSection
          title="Why Choose DY Patil Online?"
          description="Recognized by UGC, NAAC A+, and AICTE. DY Patil offers flexible online learning with expert faculty, career services, and placement support."
          stats={[]}
          benefits={[
            {
              title: "UGC-Approved & Accredited",
              description: "Recognized by UGC and accredited by NAAC A+.",
              iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                        </svg>`,
            },
            {
              title: "Experienced Faculty",
              description: "Learn from top educators and industry experts.",
              iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>`,
            },
            {
              title: "Career Services",
              description: "Internships, workshops & job readiness programs.",
              iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                        </svg>`,
            },
            {
              title: "Placement Support",
              description: "Placement help for your dream job.",
              iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7h20L12 2zm0 2.18L18.9 7H5.1L12 4.18zM4 9v11h16V9H4zm2 2h12v7H6v-7z"></path>
                        </svg>`,
            },
          ]}
          accreditations={[
            { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
            { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
            { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
            { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
            { src: "/images/wes.webp", alt: "WES", name: "WES" },
          ]}
          internationalRecognition={[]}
          successStories={[]}
        />
      </div>

      {/* Courses */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">UG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start content-start">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Dr. DY Patil Online" />
            ))}
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">PG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start content-start">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} universityName="Dr. DY Patil Online" />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <AdmissionProcedure />

      {/* Career Support Section */}
      <CareerSupport />

      <section className="bg-[#E91C63] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Certificate Image */}
          <div className="flex-1">
            <Image
              src="/images/dycertificates.webp"
              alt="Dr. DY Patil"
              width={100} 
              height={100} 
              loading="lazy"
              className="w-full max-w-md mx-auto rounded shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from Dr. DY Patil Online University
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Dr. DY Patil Online provides a great opportunity to earn a degree from a prestigious institution. The online programs are designed to be flexible and accessible, allowing students to balance their studies with work and personal commitments.
              The degrees offered are equivalent to on-campus programs and are recognized globally. With a focus on quality education, Dr. DY Patil Online ensures that students receive the same level of academic rigor and support as traditional students.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits of Dr. DY Patil Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Regular Live classes that help students to learn with a flexible time.</li>
              <li>Career Assistance & Exclusive Virtual Job Fairs</li>
              <li>Equivalent to Dr. DY Patil (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
              <li>Hands-on & Immersive Learning through world-Class Experince</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
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
              <Image src="/images/3.webp" width={100} height={100} loading="lazy" alt="Company" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/4.webp" width={100} height={100} loading="lazy" alt="Microsoft" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/5.webp" width={100} height={100} loading="lazy" alt="Company 9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/6.webp" width={100} height={100} loading="lazy" alt="Company 10" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/7.webp" width={100} height={100} loading="lazy" alt="Company4" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/8.webp" width={100} height={100} loading="lazy" alt="Company 6" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/9.webp" width={100} height={100} loading="lazy" alt="Companany5" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/company1.webp" width={100} height={100} loading="lazy" alt="Adove" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/company6.webp" width={100} height={100} loading="lazy" alt="Samsung4" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/nestle.webp" width={100} height={100} loading="lazy" alt="Samsung8" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/microsoft.webp" width={100} height={100} loading="lazy" alt="Samsung9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/icici.webp" width={100} height={100} loading="lazy" alt="Samsung" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image src="/images/hp.webp" width={100} height={100} loading="lazy" alt="Samsung2" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* University Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">DY Patil Vidyapeeth Pune</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Premier online education platform offering UGC-recognized degrees with industry-relevant 
                specializations in MBA, Healthcare Management, and emerging technologies.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <span className="text-sm font-semibold">UGC Approved</span>
                </div>
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  <span className="text-sm font-semibold">NAAC A++</span>
                </div>
                <div className="bg-purple-600 text-white p-2 rounded-lg">
                  <span className="text-sm font-semibold">AICTE</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online MBA Programs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Admission Process</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fee Structure</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="mt-1">📍</span>
                  <span>DY Patil Vidyapeeth, Pune, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <a href="tel:+917042867717" className="hover:text-white transition-colors">+91-7042867717</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📧</span>
                  <a href="mailto:admissions@dypatilonline.com" className="hover:text-white transition-colors">admissions@dypatilonline.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-4 text-white text-center">Popular Programs & Specializations</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "DY Patil Vidyapeeth Pune", "DY Patil Pune", "DY Patil Online MBA", 
                "MBA Hospitality Management", "Dy Patil Pune Online MBA", "DPU COL",
                "MBA in Hospital and Health Care Management", "DPUONLINE", "DPU COL",
                "DVP ONLINE MBA", "Master in Healthcare Administration", "Master Degree in Healthcare Management",
                "Master Healthcare Management", "MBA Healthcare Administration Online", "Online MBA in Hospital Management",
                "MBA in Healthcare Management", "MBA in Hospital Administration", "Dr. D.Y. Patil Vidyapeeth Online MBA",
                "Dr. D.Y. PATIL Online MBA", "Dr. D.Y. Patil Online MBA Fees", "Online MBA Dr. D.Y. Patil",
                "Dr. D.Y. Patil University- Online MBA", "Dr. D.Y. Patil, Pune", "Online MBA - Dr. D.Y. Patil University",
                "Online MBA Fees", "Dr. D.Y. Patil Online Courses", "Dr. D.Y. Patil Online University",
                "Dr. D.Y. Patil Online MBA Certificate", "Dr. D.Y. Patil Distance MBA", "D Y Patil Distance MBA Fees",
                "D Y Patil Distance Education", "Dr. D.Y. Patil Distance Learning", "Dr. D.Y. Patil University Online",
                "Online MBA in Fintech", "Online MBA in Finance", "Online MBA in IT Management",
                "Online MBA in Project Management", "Online MBA in Operations Management", "Online MBA in HRM",
                "Online MBA in Human Resource", "Online MBA in Internal Business", "Online MBA in Business Analytics",
                "Online MBA in AI & ML", "Online MBA in Artificial Intelligence", "Online MBA in Machine Learning",
                "Online MBA in Logistics Management", "Online MBA in Supply Chain Management", "Online MBA in Blockchain Management",
                "Online MBA in Digital Marketing", "Online MBA in Agribusiness Management", "Online MBA in Marketing Management"
              ].map((keyword, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                  title={keyword}
                >
                  {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                Copyright © 2025 DY Patil Vidyapeeth. All Rights Reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dypatil;