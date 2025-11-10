'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import { 
  FaUsers, FaUniversity, FaMapMarkerAlt, FaHeadset, FaVideo, FaHome, FaCertificate, 
  FaGraduationCap, FaUserTie, FaRocket, FaLightbulb, FaBullseye, FaBookOpen, 
  FaShieldAlt, FaTools, FaStar, FaQuoteLeft, FaAward, FaGlobe, FaLinkedin, FaFacebook
}from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toast } from 'sonner';
import Breadcrumb from '@/components/Breadcrumb';



export default function About() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState("getStarted");
  const [isVisible, setIsVisible] = useState(false);
  
  const openGetStarted = () => { setModalType("getStarted"); setShowEnquiryModal(true); };
  const openVideoCall = () => { setModalType("videoCall"); setShowEnquiryModal(true); };
  
  useEffect(() => { setIsVisible(true); }, []);

  const approachItems = [
    { 
      icon: <FaUserTie className="text-3xl text-white" />, 
      title: "Mentorship First", 
      desc: "Each student is paired with a dedicated mentor who provides continuous support throughout their academic journey.",
      steps: ["Personal mentor matching", "Regular progress check-ins", "Customized guidance plan"]
    },
    { 
      icon: <FaLightbulb className="text-3xl text-white" />, 
      title: "Holistic Development", 
      desc: "We focus on both academic excellence and personal growth to prepare students for real-world challenges.",
      steps: ["Academic skill building", "Soft skill development", "Career readiness training"]
    },
    { 
      icon: <FaBullseye className="text-3xl text-white" />, 
      title: "Outcome Focused", 
      desc: "Our programs are designed with clear career outcomes and measurable success metrics.",
      steps: ["Industry-aligned curriculum", "Performance tracking", "Employment outcome goals"]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UniFost",
    "url": "https://unifostedu.com",
    "logo": "https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
    "description": "UniFost is redefining how students discover and access quality education through personalized guidance and innovative technology.",
    "founder": [
      {
        "@type": "Person",
        "name": "Priyansh Mishra",
        "url": "https://www.linkedin.com/in/priyansh-mishra-14b9ba2a0/",
        "image": "https://unifostedu.com/priyansh.webp",
        "jobTitle": "Co-Founder & Director"
      },
      {
        "@type": "Person",
        "name": "Aman Pawar",
        "url": "https://www.linkedin.com/in/aman-pawar-a59b57218/",
        "image": "https://unifostedu.com/aman.webp",
        "jobTitle": "Co-Founder & Director"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Maharashtra",
      "addressLocality": "Pune",
      "postalCode": "411001"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91 9876543210",
      "email": "info@unifostedu.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/unifost",
      "https://www.facebook.com/unifostedu"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UniFost Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Personalized Video Counseling",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Counseling",
            "description": "One-on-one sessions with our expert counselors to help you make informed decisions about your education and career path."
          }
        },
        {
          "@type": "Offer",
          "name": "Home Demo Sessions",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Demo",
            "description": "Experience learning firsthand with trial sessions conducted at your convenience before committing to any program."
          }
        },
        {
          "@type": "Offer",
          "name": "Certified Programs",
          "itemOffered": {
            "@type": "Service",
            "name": "Certified Courses",
            "description": "Access to industry-recognized certifications and courses that enhance your employability and skills."
          }
        },
        {
          "@type": "Offer",
          "name": "Online Degree Guidance",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Degree",
            "description": "Comprehensive support for selecting and enrolling in accredited online degree programs from top institutions."
          }
        },
        {
          "@type": "Offer",
          "name": "University Admissions",
          "itemOffered": {
            "@type": "Service",
            "name": "University Admissions",
            "description": "Expert assistance in selecting and applying to traditional universities with high placement records."
          }
        },
        {
          "@type": "Offer",
          "name": "Skill Development",
          "itemOffered": {
            "@type": "Service",
            "name": "Skill Development",
            "description": "Specialized courses and workshops to bridge the gap between academic learning and industry requirements."
          }
        }
      ]
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c] to-[#003b6c] opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              About <span className="text-[#00ffe0]">Unifost</span>
            </h1>
            <div className="w-24 h-1 bg-[#00ffe0] mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-semibold md:font-bold text-white mb-8 leading-snug">
              Transforming <span className="text-[#00ffe0]">Education</span><br />
              One Student at a Time
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              UniFost helps students discover and access quality education with personalized guidance and modern technology.
            </p>
            <button onClick={openGetStarted} className="bg-[#00ffe0] cursor-pointer text-[#001e3c] px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl group">
              Get Started Today
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[ 
              { icon: <FaUsers className="text-3xl text-white" />, number: "5,000+", text: "Students Guided" },
              { icon: <FaUniversity className="text-3xl text-white" />, number: "25+", text: "Partner Institutions" },
              { icon: <FaMapMarkerAlt className="text-3xl text-white" />, number: "50+", text: "Cities Covered" },
              { icon: <FaHeadset className="text-3xl text-white" />, number: "24/7", text: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-[#001e3c] mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-[#001e3c] p-3 rounded-lg mr-4">
                  <FaBullseye className="text-2xl text-[#00ffe0]" />
                </div>
                <h3 className="text-3xl font-bold text-[#001e3c]">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize access to quality education by providing personalized guidance, innovative technology solutions, 
                and comprehensive support that empowers students to achieve their academic and career aspirations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-[#001e3c] p-3 rounded-lg mr-4">
                  <FaGlobe className="text-2xl text-[#00ffe0]" />
                </div>
                <h3 className="text-3xl font-bold text-[#001e3c]">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the world's most trusted education guidance platform, transforming how students discover, access, 
                and succeed in their educational journeys through technology-enabled personalized support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-[#00ffe0] mx-auto mb-8"></div>
            <h3 className="text-2xl text-gray-600 mb-8">Comprehensive Education Solutions</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end support for students at every stage of their academic journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/acard1_aaru4i.webp", title: "Personalized Video Counseling", desc: "One-on-one sessions with our expert counselors to help you make informed decisions about your education and career path.", icon: <FaVideo className="text-2xl" /> },
              { image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327031/acard6-2_h6wqrc.webp", title: "Home Demo Sessions", desc: "Experience learning firsthand with trial sessions conducted at your convenience before committing to any program.", icon: <FaHome className="text-2xl" /> },
              { image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/acard3_rkw0cv.webp", title: "Certified Programs", desc: "Access to industry-recognized certifications and courses that enhance your employability and skills.", icon: <FaCertificate className="text-2xl" /> },
              { image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/acard4_cflry8.webp", title: "Online Degree Guidance", desc: "Comprehensive support for selecting and enrolling in accredited online degree programs from top institutions.", icon: <FaGraduationCap className="text-2xl" /> },
              { image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327031/acard5_t1gih4.webp", title: "University Admissions", desc: "Expert assistance in selecting and applying to traditional universities with high placement records.", icon: <FaUniversity className="text-2xl" /> },
              { image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327031/acard6_qhf7ia.webp", title: "Skill Development", desc: "Specialized courses and workshops to bridge the gap between academic learning and industry requirements.", icon: <FaTools className="text-2xl" /> }
            ].map((service, index) => (
              <div key={index} className="relative bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden h-48">
                  <Image width={100} height={100} src={service.image} alt={service.title} loading='lazy' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-[#00ffe0] text-[#001e3c] p-3 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{service.icon}</div>
                </div>
                <div className="p-6 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffe0]/5 to-[#00d4c4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
  <div className="relative z-10">
    <h3 className="text-xl font-bold text-[#001e3c] mb-3 group-hover:text-[#003b6c] transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
      {service.desc}
    </p>

    {/* ✅ Button hamesha dikhega */}
    <div className="mt-6">
      <button
        onClick={openGetStarted}
        className="flex items-center text-white bg-[#00d4c4] px-4 py-2 rounded-lg font-semibold hover:bg-[#00ffe0] transition-colors duration-300"
      >
        Learn more <span className="ml-2">→</span>
      </button>
    </div>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Floating decorative shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#00ffe0]/20 to-[#00d4c4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-br from-[#00d4c4]/20 to-[#00ffe0]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">OUR APPROACH</h2>
            <div className="w-24 h-1 bg-[#00ffe0] mx-auto mb-8 rounded-full"></div>
            <h3 className="text-2xl text-gray-600 mb-8">Student-Centric Learning Philosophy</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe every student deserves personalized attention and guidance tailored to their unique needs and aspirations.
            </p>
          </motion.div>

          {/* Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Main Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl relative z-10">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#001e3c] mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{item.desc}</p>

                  {/* Steps List */}
                  <ul className="space-y-3">
                    {item.steps.map((step, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-[#00ffe0] rounded-full p-1 mt-1 mr-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Background Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffe0]/20 to-[#00d4c4]/20 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>

         {/* 4-Step Process */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
>
  <h3 className="text-3xl md:text-4xl font-bold text-[#001e3c] mb-12 text-center">
    Our 4-Step Process
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
    {/* Connecting Line */}
    <div className="hidden md:block absolute top-28 left-1/12 right-1/12 h-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] z-0 rounded-full"></div>

    {[
      { number: "01", title: "Assessment", desc: "Understanding student strengths and goals" },
      { number: "02", title: "Planning", desc: "Creating a personalized roadmap" },
      { number: "03", title: "Implementation", desc: "Guided execution of the plan" },
      { number: "04", title: "Achievement", desc: "Realizing educational and career goals" }
    ].map((step, index) => (
      <motion.div
        key={index}
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
      >
        <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
          <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
          <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
        </div>
        <h4 className="text-lg md:text-xl font-bold text-[#001e3c] mb-2">{step.title}</h4>
        <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
        </div>
      </section>

      {/* Founders Section */}
     <section className="py-20 bg-gradient-to-br from-[#1e1e50] to-[#2e2e7e] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Top Button */}
    <div className="text-center mb-6">
      <button className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] font-semibold text-sm md:text-base hover:scale-105 transform transition-all duration-300 shadow-lg">
        MEET OUR FOUNDERS
      </button>
    </div>

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Founders of UniFost</h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        The driving force behind UniFost's mission to transform education
      </p>
    </div>
  {/* Founder 1 */}
    <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
      <div className="relative">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327853/priyansh_hkubo0.jpg" 
          alt="Priyansh Mishra" 
          width={100}
          height={100}
          
          loading='lazy'
          className="rounded-2xl w-full object-cover shadow-lg"
         
        />
        <div className="absolute bottom-4 left-4 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg px-4 py-2 text-[#001e3c] font-bold shadow-lg">
          Co-Founder & Director
        </div>
      </div>
      <div className="bg-[#1e1e50]/70 p-8 rounded-2xl shadow-lg border border-white/10">
        <h3 className="text-3xl font-bold">PRIYANSH MISHRA</h3>
        <p className="text-teal-400 font-semibold">Founder & Director</p>
        <p className="text-lg md:text-2xl text-gray-100 mt-6 font-semibold leading-relaxed tracking-wide bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
         “Priyansh Mishra, a visionary leader committed to revolutionizing education through
         innovation and accessibility, has poured his heart, energy, and vision into building
         <span className="font-bold"> UniFost </span> with unwavering passion and dedication. 
          With a background in educational technology and student psychology, he ensures UniFost 
          remains student-centric.”
       </p>

        <div className="flex space-x-4 mt-6">
          <a 
        href="https://www.linkedin.com/in/priyansh-mishra-14b9ba2a0/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-teal-400 hover:text-white text-xl"
        >
  <FaLinkedin />
</a>

        </div>
        {/* <button className="mt-6 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300">
          Get in Touch
        </button> */}
      </div>
    </div>


    {/* Founder 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 bg-[#2e2e7e]/70 p-8 rounded-2xl shadow-lg border border-white/10">
        <h3 className="text-3xl font-bold">AMAN PAWAR</h3>
        <p className="text-pink-400 font-semibold">Founder & Director</p>
       <p className="text-lg md:text-2xl text-gray-100 mt-6 font-semibold leading-relaxed tracking-wide bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
  “Aman Pawar is the driving force behind <span className="font-bold">UniFost</span>—blending vision with action, and passion with purpose. His tireless efforts and hands-on leadership have shaped a platform that puts students first. With expertise in business strategy and digital education, he bridges the gap between academia and industry needs.”
</p>

        <div className="flex space-x-4 mt-6">
        <a 
  href="https://www.linkedin.com/in/aman-pawar-a59b57218/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-pink-400 hover:text-white text-xl"
>
  <FaLinkedin />
</a>

        </div>
        {/* <button className="mt-6 bg-gradient-to-r from-pink-400 to-pink-300 text-[#001e3c] px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300">
          Get in Touch
        </button> */}
      </div>
      <div className="relative order-1 md:order-2">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762603121/Mr._Aman_Pawar_myujir.jpg" 
          alt="Aman Pawar" 
          width={100}
          height={100}
          placeholder='empty'
          loading='lazy'
          className="rounded-2xl w-full object-cover shadow-lg"
        />
        <div className="absolute bottom-4 right-4 bg-gradient-to-br from-pink-400 to-pink-300 rounded-lg px-4 py-2 text-[#001e3c] font-bold shadow-lg">
          Co-Founder & Director
        </div>
      </div>
    </div>
  </div>
</section>
        


     <div className="w-full rounded-xl overflow-hidden shadow-lg">
  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6832009747964!2d77.31252000920001!3d28.579274275592528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d98ee6d3c5%3A0x34c5ea3d0f04f8a7!2sLogix%20Park!5e0!3m2!1sen!2sin!4v1757655392841!5m2!1sen!2sin"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 w-full h-full"
    ></iframe>
  </div>
</div>

{/* Enquiry Modal */}
<Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
  <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-6 md:my-12 p-4 sm:p-6">
    <DialogHeader>
      <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
        {modalType === "getStarted" ? "Get Started with Unifost" : "Schedule a Video Call"}
      </DialogTitle>
    </DialogHeader>
    <EnquiryForm 
      formType={modalType}
      onSubmitted={() => {
        setShowEnquiryModal(false);
        toast.success("Our counselors will connect with you as soon as possible", {
          style: {
            fontSize: '25px',
            fontWeight: 'bold',
            padding: '16px 24px',
          },
          icon: '✅',
        });
      }}
    />
  </DialogContent>
</Dialog>

{/* Closing CTA Section */}
<section className="py-20 bg-gradient-to-br from-[#001e3c] to-[#003b6c] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to take the next step?</h2>
    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
      Talk to our expert counselors and get a personalized roadmap for your goals.
    </p>
    <button
      onClick={openGetStarted}
      className="bg-[#00ffe0] cursor-pointer text-[#001e3c] px-8 py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl"
    >
      Talk to a Counselor
    </button>
  </div>
</section>




    </div>
    </>
  );
}