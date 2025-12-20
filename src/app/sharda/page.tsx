'use client';

import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import PageContent from "@/components/PageContent/PageContent";
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

// Type definitions
interface SectionItem {
  id: string;
  label: string;
}

interface UniversityData {
  name: string;
  shortName: string;
  logo: string;
  heroImage: string;
  description: string;
  themeColor: string;
  accreditation: string;
  phone: string;
}

interface Course {
  course: string;
  duration: string;
  eligibility: string;
  fees: string;
  specialization: string | string[];
  image: string;
  university: string;
  universityShort: string;
  alt: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  image: string;
  course: string;
  university: string;
  text: string;
}

interface ModalState {
  type: 'apply' | 'enquire';
  program?: string;
}

const UniversityPage: React.FC = () => {
  const sectionItem: SectionItem[] = [
    { id: "introduction", label: "Introduction" },
    { id: "campus-tour", label: "Campus Tour" },
    { id: "explore-courses", label: "Explore Sharda University Online Courses" },
    { id: "key-highlights", label: "Key Highlights" },
    { id: "admission-dates", label: "Admission Dates (UG & PG)" },
    { id: "admission-process", label: "Admission Process" },
    { id: "Ongoing & Upcoming Admission Sessions", label: "Ongoing & Upcoming Admission Sessions" },
    { id: "placement-partners", label: "Placement Partners" },
    { id: "placement-record", label: "Placement Record" },
    { id: "student-reviews", label: "Student Reviews" },
    { id: "faqs", label: "FAQs" },
    { id: "university-reviews", label: "Sharda University Online Reviews" },
  ];

  const [activeSection, setActiveSection] = useState<string>(sectionItem[0]?.id ?? '');

  useEffect(() => {
    if (!sectionItem.length) return undefined;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.25,
      rootMargin: "-45% 0px -45% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionItem.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionItem.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sectionItem]);

  // University data
  const universityData: UniversityData = {
    name: "Sharda University",
    shortName: "Sharda",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/shardalogos_fecyer.webp",
    heroImage: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762587569/university-hero_ikhcch.webp",
    description: "Globally recognized university offering quality online education",
    themeColor: "#EC027C",
    accreditation: "NAAC A+",
    phone: "+91 7042646766"
  };

  const ugCourses: Course[] = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "1,20,000",
      specialization: "General,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Business Administration (BBA)",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed the (10+2) examination from State Board / CBSE / NIOS / IGCSE / IB /ICSE recognized by the State or Central Government.",
      fees: "1,20,000",
      specialization: "General,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Computer Applications (BCA)",
    },
    {
      course: "Bachelor of Arts (Hons.)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,05,000",
      specialization: "Political Science,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Bachelor of Commerce (B.Com)",
    },
  ];

  const pgCourses: Course[] = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor's Degree of minimum 3 years duration.",
      fees: "₹1,40,000 -₹1,96,000",
      specialization: ["Data Science and Analytics, Marketing, Healthcare and Hospital Administration, Human Resource Management, Finance"],
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Business Administration (MBA)",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree or Passed B.Sc./ B.Com./ B.A. with Mathematics at 10+2 Level or at Graduation Level",
      fees: "₹1,20,000",
      specialization: ["Computer Science and Information Technology, Data Science"],
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Computer Applications (MCA)",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹50,000-1,40,000",
      specialization: "public Accounting, Accounting And Finance",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: universityData.name,
      universityShort: universityData.shortName,
      alt: "Master of Commerce (M.Com) in Sharda Online",
    },
  ];

  const faqData: FAQ[] = [
    {
      question: "What is Sharda University Online?",
      answer: "Sharda University Online is the digital learning platform of Sharda University Greater Noida, one of the best universities in Delhi NCR. It offers UGC-approved online degree programs that allow students to study from anywhere while receiving the same quality education as on-campus programs."
    },
    {
      question: "Is Sharda University Online approved by UGC?",
      answer: "Yes, Sharda University Online is recognized by the University Grants Commission (UGC) and approved by the Distance Education Bureau (DEB). All degrees offered through online mode are valid, recognized, and carry the same weightage as regular on-campus programs."
    },
    {
      question: "Is Sharda University Online NAAC accredited?",
      answer: "Yes, Sharda University has been accredited with NAAC A+ grade, ensuring high-quality education and academic standards in its online degree programs."
    },
    {
      question: "Are online degrees from Sharda University valid for government jobs and higher studies?",
      answer: "Absolutely. Online degrees from Sharda University are valid for government jobs, competitive exams such as UPSC, SSC, Banking, and also accepted for higher education including MBA, PhD, or international studies."
    },
    {
      question: "What is the eligibility for online programs?",
      answer: "•	For Online BBA from Sharda University, students must have completed 10+2 in any stream.,   •	For Online MCA from Sharda University, candidates must have a bachelor's degree with mathematics or computer science.      •	For MBA at Sharda University, a bachelor's degree in any field is required.  "
    },
    {
      question: "What are the popular online courses offered by Sharda University?",
      answer: "Sharda University Online offers Undergraduate and Postgraduate programs including BBA, BCA, B.Com, MBA, MCA and several professional certificate courses. Specializations include Marketing, HR, Finance, Entrepreneurship, Business Analytics, AI, Data Science, Cyber Security, and Cloud Computing."
    },
    {
      question: "What is the eligibility criteria for admission?",
      answer: "For UG programs like BBA, BCA, and B.Com, a 10+2 pass with at least 40% marks is required. For PG programs like MBA and MCA, a bachelor's degree with at least 50% marks is mandatory."
    },
    {
      question: "What is the fee structure of Sharda University Online programs?",
      answer: "Fees vary depending on the program. For example, BBA and BCA cost ₹1,35,000 (total), B.Com is ₹99,000, MBA is ₹1,75,000, and MCA is ₹1,58,000. Easy EMI and installment options are available for students."
    },
    {
      question: "Does Sharda University Online offer placement assistance?",
      answer: "Yes, Sharda University Online provides 100% placement assistance, career counseling, resume building, interview preparation, and access to top recruiters through its strong industry network."
    },
    {
      question: "Can I pursue Sharda University Online courses while working?",
      answer: "Yes, all programs are designed to be flexible for working professionals and fresh graduates. You can attend live lectures or access recorded sessions at your convenience."
    },
    {
      question: "Is there any financial support or EMI option available?",
      answer: "Yes, Sharda University Online offers no-cost EMI, scholarships, and installment facilities to make education affordable for all students."
    },
    {
      question: "What is the admission procedure for Sharda University Online?",
      answer: "The process is simple: (1) Fill out the online application form, (2) Upload required documents (marksheets, ID proof), (3) Pay the registration fee, (4) Confirm admission with counseling and course selection, (5) Receive your enrollment confirmation and start learning."
    },
    {
      question: "Are Sharda University Online degrees accepted internationally?",
      answer: "Yes, Sharda University Online degrees are globally recognized and accepted by employers and universities across multiple countries, making it easier for students to pursue international opportunities."
    },
    {
      question: "How do online classes take place at Sharda University?",
      answer: "The university follows a blended learning approach with live virtual classes, recorded video lectures, e-study materials, discussion forums, and mentorship support. Students can study anytime and from anywhere."
    },
    {
      question: "Can I download the Sharda University Online brochure?",
      answer: "Yes, you can download the official brochure from the university website or request it via the enquiry form. The brochure contains detailed program structure, fee details, career prospects, and faculty information."
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Pratik",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102223/pritik_i2s3ch.jpg",
      course: "MBA",
      university: universityData.shortName,
      text: "The online program provided me with the flexibility to balance work and studies while receiving quality education."
    },
    {
      name: "Sonal",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102289/sonal_c8xgej.jpg",
      course: "BCA",
      university: universityData.shortName,
      text: "The curriculum was industry-relevant and the faculty support was exceptional throughout the program."
    },
    {
      name: "Riya Sharma",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102177/riya1_qsbhqy.jpg",
      course: "Online MBA Student",
      university: universityData.shortName,
      text: "I joined Sharda University Online for my MBA at Sharda University, and it has been a wonderful experience. The classes are well-organized, and the teachers explain everything clearly. I could manage my job and studies easily. The course content is very practical, and the support team is always available. Truly the best university in Delhi NCR for online learning!"
    },
    {
      name: "Amit Verma",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102290/amit_laq7ku.jpg",
      course: "Online BBA Student",
      university: universityData.shortName,
      text: "I was looking for an Online BBA from Sharda University, and it turned out to be the best decision. The platform is simple to use, and the teachers are very supportive. The recorded classes helped me revise whenever I wanted. The affordable Sharda University fees made it easier for me to continue my studies without stress."
    },
    {
      name: "Sneha Iyer ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763101215/Sneha_tmk0yf.jpg",
      course: "Online MCA Student",
      university: universityData.shortName,
      text: "I enrolled in the Online MCA from Sharda University because of my interest in software and IT. The online learning experience is great, and the study material is updated and easy to understand. The professors also guide us through projects and coding sessions. Sharda University Greater Noida has really built a strong online system for students like me."
    },
    {
      name: "Mohit Singh",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763101567/mohit_jlwtvf.jpg",
      course: "MBA at Sharda University",
      university: universityData.shortName,
      text: "The MBA at Sharda University helped me improve my leadership and business skills. The live classes and case studies gave me real-world exposure. The university's name also carries a lot of value in the corporate world. I would highly recommend Sharda University Online to anyone who wants a recognized degree with flexibility."
    },
  ];

  // State management
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<ModalState | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Auto-open modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number): void => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  return (
    <>
     <Head>
        <title>{`${universityData.name} Online Degrees | UG & PG Courses`}</title>
        <meta name="description" content={`Explore globally recognized online programs from ${universityData.name}. Flexible learning, expert mentorship, and career-focused degrees.`} />
        <meta name="keywords" content={`${universityData.name} Online, Online Degrees, UGC Approved, Distance Learning`} />
        <meta name="author" content={universityData.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/university" />

        {/* Open Graph */}
        <meta property="og:title" content={`${universityData.name} Online Degrees | Accredited Online Degrees`} />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content={universityData.heroImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/university" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${universityData.name} Online | Accredited Online Degrees`} />
        <meta name="twitter:description" content="Enroll in UGC approved online courses with flexible learning options." />
        <meta name="twitter:image" content={universityData.heroImage} />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className={inter.className}>
        {/* Header */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img
                  src={universityData.logo}
                  alt={`${universityData.name} Logo`}
                  className="h-8 w-auto sm:h-10 lg:h-12"
                />
                <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                  <span style={{ color: universityData.themeColor }}>Online</span>{" "}
                  <span className="text-gray-800">{universityData.shortName}</span>
                </h1>
              </div>

              {/* Contact & Apply */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  style={{ cursor: 'pointer' }}
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
                <a
                  href={`tel:${universityData.phone}`}
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f7188b] transition-colors"
                >
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">{universityData.phone}</span>
                  <span className="lg:hidden">Call Now</span>
                </a>

                <a
                  href={`tel:${universityData.phone}`}
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#f7188b]/10 rounded-full text-[#f7188b] hover:bg-[#f7188b]/20 transition-colors"
                >
                  📞
                </a>

                <button
                  onClick={() => setOpenModal({ type: 'apply' })}
                  style={{ cursor: 'pointer' }}
                  className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>
        
        <PageContent 
          sectionItems={sectionItem} 
          activeSection={activeSection} 
          ismobilemenuopen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
        
        <div className="max-w-screen-2xl mx-auto flex">
          <main className="flex-1 min-w-0 lg:pl-64">
            <div className="overflow-x-hidden">


              {/* Hero Section */}
              <section id="introduction" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp')] bg-cover bg-center opacity-200"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                      {/* Accreditation Badge */}
                      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">{universityData.accreditation} Accredited • UGC Approved</span>
                      </div>

                      {/* Main Heading */}
                      <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                          <span className="block text-white">Transform Your</span>
                          <span className="block bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">
                            Career with
                          </span>
                          <span className="block text-white">{universityData.name}</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                          Earn globally recognized degrees from {universityData.name} with 100% online learning and placement assistance.
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-2 gap-4 max-w-md">
                        {[
                          { icon: '🎓', text: 'UGC Entitled Degrees' },
                          { icon: '💼', text: 'Placement Support' },
                          { icon: '💰', text: 'Easy EMI Options' },
                          { icon: '🌍', text: 'Global Recognition' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-sm text-gray-300">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => setOpenModal({ type: 'apply' })}
                          className="group bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#f7188b]/30 flex items-center justify-center gap-3 cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>

                        <button
                          onClick={() => setOpenModal({ type: 'enquire' })}
                          className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
                        >
                          Download Brochure
                        </button>
                      </div>
                    </div>

                    {/* Right Content - Stats Card */}
                    <div className="lg:pl-8">
                      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                        <h3 className="text-2xl font-bold text-white text-center">Why Choose {universityData.name} Online?</h3>

                        <div className="grid grid-cols-2 gap-6">
                          {[
                            { number: '50+', label: 'Countries' },
                            { number: '100K+', label: 'Students' },
                            { number: '93%', label: 'Positive ROI' },
                            { number: '200+', label: 'Hiring Partners' }
                          ].map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className="text-3xl font-bold text-[#f7188b]">{stat.number}</div>
                              <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Quick Program Links */}
                        <div className="pt-6 border-t border-white/20">
                          <h4 className="text-white font-semibold mb-4 text-center">Popular Programs</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com'].map((program, i) => (
                              <span key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-white text-sm transition-all duration-300 cursor-pointer hover:scale-105">
                                {program}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white text-black-800">
                <div className="max-w-6xl mx-auto space-y-10">
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ee067f]">
                    Sharda University Online – Your Pathway to Global Online Learning
                  </h2>

                  {/* Introduction */}
                  <p className="text-lg leading-relaxed text-gray-700 ">
                    Sharda University Online  aims to make world-class education accessible to learners everywhere — across India and abroad — through its innovative online mode of learning. As one of the  top private universities in Greater Noida , Sharda University offers a wide range of  UGC-approved online courses  designed for both students and working professionals. Popular programs such as the  Online MBA at Sharda University ,  Online BBA at Sharda University ,  Online BCA , and  Online MCA  provide learners with practical knowledge, modern teaching methodologies, and expert mentorship from experienced faculty members. Students enjoy complete flexibility — they can learn at their own pace, attend  live classes , and access  recorded lectures  anytime. This convenient format supports professionals who wish to balance work and education. Focused on  skill development ,  career growth , and  real-world learning , Sharda University Online empowers students to earn a  recognized degree  from one of the  best universities in Delhi NCR . With  transparent and affordable Sharda University fees , learners gain access to high-quality education that suits their budget. The  Sharda University Admission 2025  process is simple and hassle-free, allowing applicants to begin their academic journey quickly. Whether you seek an  online BBA ,  online MCA , or any other  Sharda University Online course , this platform delivers flexible, affordable, and career-oriented education.  Sharda University Greater Noida  continues to set benchmarks in digital learning, making it a preferred choice for ambitious learners aiming for excellence and success. </p>
                  <p className="text-lg leading-relaxed text-gray-700 ">
                    Established with a mission to make higher education accessible to all — especially working professionals
                    and students who wish to continue their studies without relocating or pausing their careers — Sharda offers
                    a wide range of UGC-approved online degrees including  Online MBA ,  Online BBA ,
                    Online MCA ,  Online M.Com ,  Online BA , and
                    several skill-based certificate programs.
                  </p>

                  {/* Global Ecosystem */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">A Global Learning Ecosystem </h3>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                      Sharda Online  is part of the renowned Sharda Group of Institutions, known for diversity
                      and international exposure. With students from over  50+ countries , learners engage in a
                      multicultural academic environment that fosters global business, technology, and communication insights.
                    </p>

                    <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                      <li>Attend  live online classes  and access  recorded lectures  anytime.</li>
                      <li>Participate in quizzes, projects & group discussions.</li>
                      <li>Connect with peers and faculty digitally.</li>
                      <li>Track your progress through a personal dashboard.</li>
                    </ul>
                  </div>

                  {/* Recognition */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Recognized & Industry-Relevant Programs </h3>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                      All  Sharda Online courses  are designed with guidance from industry experts and corporate
                      leaders to ensure real-world learning and employability. The curriculum includes professional tools,
                      updated technology, and practical exposure.
                    </p>

                    <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                      <li> Online MBA Sharda University:  Specializations in Marketing, Finance, HR, Business Analytics, and more.</li>
                      <li> Online MCA Sharda University:  Focus on AI, Data Science, Cloud Computing, and Cybersecurity.</li>
                      <li> Online BBA Sharda University:  Build strong foundations in business and management.</li>
                    </ul>
                  </div>

                  {/* Government & Corporate Recognition */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Government & Corporate Recognition </h3>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                      All online degrees from Sharda University Online are  UGC-Entitled  and valid for both
                      government and private sector jobs. Graduates are also eligible for higher studies in India and abroad.
                    </p>
                    <p className="mt-3 text-gray-700 ">
                      Sharda has strong academic and industry collaborations with major organizations including:
                    </p>
                    <div className="flex flex-wrap gap-3 mt-3 text-sm sm:text-base text-gray-600">
                      <span className="bg-white shadow px-3 py-1 rounded-lg">Wipro</span>
                      <span className="bg-white shadow px-3 py-1 rounded-lg">TCS</span>
                      <span className="bg-white shadow px-3 py-1 rounded-lg">Amazon</span>
                      <span className="bg-white shadow px-3 py-1 rounded-lg">Deloitte</span>
                      <span className="bg-white shadow px-3 py-1 rounded-lg">KPMG</span>
                      <span className="bg-white shadow px-3 py-1 rounded-lg">Infosys</span>
                      <span className="bg-white shadow px-3 py-1 rounded-lg">Tech Mahindra</span>
                    </div>
                  </div>

                  {/* Flexible Learning */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Flexible & Student-Centered Learning</h3>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                      From admissions to examinations, every process is digital — making Sharda University Online one of the
                      most student-friendly platforms in India.
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                      <li>Online registration & document upload</li>
                      <li>Digital academic records</li>
                      <li>Online proctored exams</li>
                      <li>Easy EMI & installment payment options</li>
                    </ul>
                  </div>

                  {/* Faculty */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Skilled Faculty & Personalized Mentoring</h3>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                      The faculty team includes PhD scholars and industry experts who provide live interactive sessions,
                      weekly doubt-clearing classes, and  career counseling support  to ensure complete academic guidance.
                    </p>
                  </div>

                  {/* Global Vision */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">Global Vision, Digital Future </h3>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                      Sharda University Online  is preparing students for a future where digital innovation,
                      global communication, and technological skills define success. With its academic excellence, industry
                      collaborations, and modern learning ecosystem, it stands as one of India's fastest-growing and most
                      trusted online universities.
                    </p>
                  </div>
                </div>
              </section>
              <section className="bg-white text-black py-12 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                  {/* Section Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    About <span className="text-[#ee067f]">Sharda University Online</span>
                  </h2>

                  {/* Paragraph Section */}
                  <p className="text-lg leading-relaxed mb-6 ">
                    Located in  Greater Noida ,  Sharda University  is one of India's most respected and trusted
                    private universities, renowned for its  world-class infrastructure , advanced teaching methods,
                    and  international partnerships . With students from all over India and abroad,
                    Sharda University Greater Noida  has built a strong reputation as the
                    best university in Delhi NCR  for  quality education , innovation, and global learning.
                  </p>

                  <p className="text-lg leading-relaxed mb-6 ">
                    To make its education accessible to everyone,  Sharda University Online  offers the same
                    high-quality programs through digital learning. Students can now earn recognized and valuable degrees
                    from the comfort of their homes. The university provides several  Sharda University online courses
                    that are  flexible ,  affordable , and designed to match current industry needs.
                  </p>

                  {/* Course Highlights */}
                  <div className="bg-gray-50 border-l-4 border-[#ee067f] p-6 rounded-xl shadow-sm mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-[#ee067f]">Popular Programs Offered:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg ">
                      <li>
                        MBA at Sharda University  – A professional management program that builds
                        business ,  leadership , and  strategic thinking  skills to prepare
                        students for top corporate roles.
                      </li>
                      <li>
                        BBA at Sharda University  – A business foundation course for young students who want to
                        start a career in  management ,  marketing , or  entrepreneurship .
                      </li>
                      <li>
                        Online BCA from Sharda University  – A flexible online degree designed for learners who want
                        to study  technology  from anywhere while gaining  global exposure .
                      </li>
                      <li>
                        Online MCA from Sharda University  – A master's degree in  computer applications
                        that helps students grow in  technology ,  software development , and
                        IT management .
                      </li>
                    </ul>
                  </div>

                  {/* Additional Details */}
                  <p className="text-lg leading-relaxed mb-6 ">
                    All  Sharda University online courses  are created by experienced professors and industry experts.
                    The curriculum blends  theory  with  practical projects , helping students gain
                    real-world knowledge  and  hands-on experience .
                  </p>

                  <p className="text-lg leading-relaxed mb-6 ">
                    Another key advantage of  Sharda University Online  is its  affordability .
                    The university offers  transparent and reasonable fees  along with  installment
                    and  EMI options , making quality education possible for every student, regardless of background.
                  </p>

                  <p className="text-lg leading-relaxed mb-6 ">
                    With its simple  Sharda University Admission 2025  process, students can easily apply online,
                    choose their program, and start learning immediately. Whether you are planning to pursue an
                    MBA ,  BBA ,  Online BCA , or  Online MCA ,
                    you can be sure of earning a  recognized and respected degree  from the
                    best university in Delhi NCR .
                  </p>

                  <p className="text-lg leading-relaxed mb-8 ">
                    Sharda University Greater Noida  continues to lead among
                    private universities in Greater Noida , offering
                    flexible ,  career-focused education  through
                    Sharda University Online  — where  global learning  meets
                    digital convenience .
                  </p>

                  <button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Apply Now
                  </button>

                </div>
              </section>


              {/* 🎓 Campus Tour Section */}
              <section id="campus-tour" className=" px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-pink-50 text-gray-800">
                <div className="max-w-6xl mx-auto">
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ee067f] mb-12">
                    Campus Tour
                  </h2>
                  <div className="w-full   ">
                    <p className="text-black font-medium text-lg md:text-xl leading-relaxed ">
                      Welcome to  Sharda University Greater Noida , a modern and lively campus that represents
                      innovation ,   diversity , and   excellence . Spread across a large green area,
                      Sharda  is known as one of the  best universities in Delhi NCR  and is also among the
                      top private universities in Greater Noida . The campus features
                      smart classrooms ,   modern computer labs ,   digital libraries ,
                      innovation centers , and excellent   sports and cultural facilities . Every space at
                      Sharda is designed to help students   learn ,   grow , and   express their creativity .
                      The friendly and energetic environment makes it a true place for   learning  and   success .
                    </p>
                  </div>


                  {/* Content Section */}
                  <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                      <img
                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp"
                        alt="Sharda University Campus"
                        className="rounded-2xl shadow-md w-full h-80 object-cover"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 space-y-5">
                      <p className="text-lg text-gray-700 leading-relaxed ">
                        Even though you study online,  Sharda University  connects you with its
                        world-class physical campus located in  Greater Noida, NCR . Students can
                        explore campus facilities, innovation centers, libraries, and cultural infrastructure
                        through a virtual campus experience.
                      </p>

                      <h3 className="text-2xl font-semibold text-[#ee067f]">Campus Highlights:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed ">
                        <li> Hi-tech smart classrooms</li>
                        <li> Global student community (50+ nationalities)</li>
                        <li> International tie-ups and exchange programs</li>
                        <li> Modern labs and innovation centers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full py-12 px-8 md:px-24">
                    <p className="text-black font-medium text-lg md:text-xl leading-relaxed ">
                      Students of  Sharda University Online  can also feel connected to this experience through
                      virtual tours ,   live sessions , and   online campus events .
                      They get the same  quality education  and  academic support  as on-campus students.
                      Programs like  MBA at Sharda University ,  BBA at Sharda University ,
                      Online BCA from Sharda University , and  Online MCA from Sharda University
                      are taught by expert faculty using  advanced learning tools .
                    </p>

                    <p className="text-black font-medium text-lg md:text-xl leading-relaxed mt-6 ">
                      With  transparent and affordable Sharda University fees ,  flexible online study options ,
                      and  international exposure , Sharda attracts students from across India and abroad.
                      As  Sharda University admission 2025  opens, it's the perfect time to explore a campus where
                      innovation meets opportunity  — and where your journey toward  success  truly begins.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </section>



              {/* Features Section */}
              <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: '⏱️',
                        title: 'Flexible Learning',
                        description: 'Learn at your own pace with recorded lectures and live sessions'
                      },
                      {
                        icon: '🏆',
                        title: `${universityData.accreditation} Accredited`,
                        description: 'Globally recognized degrees with UGC entitlement'
                      },
                      {
                        icon: '💼',
                        title: 'Career Support',
                        description: '100% placement assistance and career guidance'
                      },
                      {
                        icon: '💰',
                        title: 'Easy Financing',
                        description: 'No-cost EMI options and scholarships available'
                      }
                    ].map((feature, i) => (
                      <div key={i} className="group text-center">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#f7188b] to-[#ec027c] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">{feature.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Courses Section */}
              <section id="explore-courses" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      Explore <span className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">Online Programs</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
                      Choose from industry-relevant programs designed for working professionals and fresh graduates
                    </p>
                  </div>

                  <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-12">
                    {/* Tab Buttons */}
                    <div className="flex justify-center">
                      <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
                        {[
                          { value: 'all', label: 'All Programs' },
                          { value: 'ug', label: 'Undergraduate' },
                          { value: 'pg', label: 'Postgraduate' }
                        ].map((tab) => (
                          <Tabs.Trigger
                            key={tab.value}
                            value={tab.value}
                            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === tab.value
                                ? 'bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white shadow-lg'
                                : 'text-gray-700 hover:text-[#f7188b] hover:bg-white'
                              }`}
                          >
                            {tab.label}
                          </Tabs.Trigger>
                        ))}
                      </Tabs.List>
                    </div>

                    {/* Course Grid */}
                    <Tabs.Content value={activeTab} className="outline-none">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {(activeTab === 'all' ? [...ugCourses, ...pgCourses] :
                          activeTab === 'ug' ? ugCourses : pgCourses).map((course, idx) => (
                            <div key={idx} className="group">
                              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                {/* Course Image */}
                                <div className="relative h-48 overflow-hidden">
                                  <Image
                                    src={course.image}
                                    alt={course.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                  <div className="absolute bottom-4 left-4">
                                    <span className="bg-[#f7188b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                      {course.universityShort}
                                    </span>
                                  </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-6 space-y-4">
                                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.course}</h3>

                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <span>⏱️</span>
                                      <span className="text-sm">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <span>🎓</span>
                                      <span className="text-sm">{course.eligibility}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <span>💰</span>
                                      <span className="text-sm">₹{course.fees}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-600">
                                      <span className="mt-1">⭐</span>
                                      <span className="text-sm"><strong>Specialization:</strong> {Array.isArray(course.specialization) ? course.specialization.join(', ') : course.specialization}</span>
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                                    className="w-full bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                  >
                                    Apply Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </Tabs.Content>
                  </Tabs.Root>
                </div>
              </section>
              {/* 🎓 Explore Online Courses Section */}
              <section className="w-full bg-white text-black py-16 px-6 md:px-20 lg:px-32">
                {/* Intro Section */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                    Sharda University Online – Learn Anytime, Anywhere
                  </h2>
                  <p className="text-lg leading-relaxed font-medium ">
                    Sharda University Online , the digital learning platform of  Sharda University Greater Noida , offers a wide range of
                    UGC-approved online courses  for today's learners. As one of the  best universities in Delhi NCR ,
                    Sharda provides  flexible ,  affordable , and  globally recognized  degree programs
                    that combine academic excellence with modern technology.
                  </p>
                  <p className="text-lg leading-relaxed font-medium ">
                    Each program at  Sharda University Online  is designed to help students gain  practical knowledge ,
                    industry exposure , and  career growth . Whether you are a student, a working professional,
                    or someone who wants to upskill, Sharda's online programs let you  study at your own pace  and build a
                    successful career.
                  </p>
                  <p className="text-lg leading-relaxed font-medium ">
                    With clear and affordable  Sharda University fees  and a simple  Sharda University admission 2025  process,
                    the university ensures that  quality education  is open to everyone.
                  </p>
                </div>

                {/* MBA Section */}
                <div className="mt-12 border-t pt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4"> MBA at Sharda University</h3>
                  <p className="text-lg leading-relaxed font-medium ">
                    The  MBA at Sharda University  is one of the most popular  Sharda University online courses .
                    It is designed for students who aspire to become  future business leaders  and  managers .
                    This two-year online program focuses on  marketing ,  finance ,  human resources ,
                    data analytics , and  strategy .
                  </p>
                  <p className="text-lg leading-relaxed font-medium mt-4 ">
                    Students learn through  live online classes ,  recorded video lectures , and
                    real-world projects  taught by  expert faculty  and  industry professionals .
                    As one of the top choices for  Sharda University admission 2025 , this online MBA helps students
                    build  global business knowledge  and secure  strong placement opportunities  after graduation.
                  </p>
                </div>

                {/* BBA Section */}
                <div className="mt-12 border-t pt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">📊 BBA at Sharda University / Online BBA from Sharda University</h3>
                  <p className="text-lg leading-relaxed font-medium ">
                    The  BBA at Sharda University  and  Online BBA from Sharda University  are ideal for students
                    who want to start their journey in  business  and  management . These programs cover
                    business management ,  marketing ,  entrepreneurship ,
                    economics , and  digital business .
                  </p>
                  <p className="text-lg leading-relaxed font-medium mt-4 ">
                    Students enjoy  flexible online learning  through  live sessions ,  recorded classes ,
                    and  practical assignments . The BBA program builds  leadership  and
                    problem-solving skills  that prepare students for successful careers in the  corporate world .
                  </p>
                </div>

                {/* MCA Section */}
                <div className="mt-12 border-t pt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4"> Online MCA from Sharda University</h3>
                  <p className="text-lg leading-relaxed font-medium ">
                    The  Online MCA from Sharda University  is perfect for students interested in
                    computers ,   software , and   technology . It covers
                    computer applications ,  artificial intelligence ,  web development ,
                    and  data analytics  — ideal for careers in  IT ,  programming ,
                    or  data science .
                  </p>
                  <p className="text-lg leading-relaxed font-medium mt-4 ">
                    Students gain hands-on experience through  industry projects ,  internships , and
                    expert mentorship . With  affordable Sharda University fees ,
                    flexible study hours , and  high-quality faculty guidance , this program blends
                    learning and opportunity seamlessly.
                  </p>
                </div>

                {/* Why Choose Section */}
                <div className="mt-12 border-t pt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6"> Why Choose Sharda University Online Courses?</h3>
                  <ul className="list-disc list-inside text-lg font-medium space-y-3 ">
                    <li> Offered by one of the  best universities in Delhi NCR </li>
                    <li>  100% online programs  with live and recorded classes</li>
                    <li>  Career-focused courses  with practical projects</li>
                    <li> Strong  placement support  and global recognition</li>
                    <li>  Affordable Sharda University fees  with EMI options</li>
                    <li> Simple  Sharda University admission 2025  process for all students</li>
                  </ul>
                </div>

                {/* Learn Anytime Section */}
                <div className="mt-12 border-t pt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4"> Learn Anytime, Anywhere</h3>
                  <p className="text-lg leading-relaxed font-medium ">
                    No matter where you live — in  Delhi NCR ,  Noida , or anywhere in India —
                    you can easily enroll in  Sharda University Online  and earn a  recognized degree .
                    The platform is  user-friendly  and designed for flexible, self-paced learning.
                  </p>
                  <p className="text-lg leading-relaxed font-medium mt-4 ">
                    As one of the  top private universities in Greater Noida ,
                    Sharda University Greater Noida  brings  academic excellence  and
                    digital learning  together. Thousands of students trust  Sharda University Online
                    for its  quality education  and  flexible programs  like
                    Online BBA ,   Online MCA , and   Online MBA .
                  </p>
                </div>

                {/* Start Journey Section */}
                <div className="mt-12 border-t pt-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6"> Start Your Journey Today</h3>
                  <p className="text-lg leading-relaxed font-medium mb-8 ">
                    Begin your academic and career journey with  Sharda University Online , part of the
                    best university in Delhi NCR . Explore programs such as
                    MBA at Sharda University ,  BBA at Sharda University ,
                    Online BBA from Sharda University , and  Online MCA from Sharda University .
                  </p>
                  <p className="text-lg leading-relaxed font-medium mb-10 ">
                    With  easy Sharda University admission 2025 ,  global exposure , and
                    affordable Sharda University fees , now is the best time to join one of
                    India's leading private universities  and take the next step toward your
                    dream career .
                  </p>
                  <button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm sm:text-base cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </section>



              <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-pink-50 text-black">
                <div className="max-w-6xl mx-auto space-y-12">
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ee067f]">
                    Why Choose Sharda University Online?
                  </h2>

                  {/* 1️⃣ UGC-Approved */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">1️. UGC-Approved and Globally Recognized Degrees </h3>
                    <p className="text-black bg-white text-lg leading-relaxed ">
                      All  Sharda University online courses  are  UGC-approved  and
                      globally recognized . Your degree from
                      Sharda University Online  holds the same value and respect as a regular
                      on-campus program from  Sharda University Greater Noida , ensuring you receive
                      a qualification that is both  credible  and
                      respected worldwide .
                    </p>
                    <ul className="list-disc pl-6 mt-3 text-black space-y-1">
                      <li>Government jobs</li>
                      <li>Private sector careers</li>
                      <li>Promotions & skill upgrades</li>
                      <li>Admissions for higher studies</li>
                    </ul>
                    <p className="mt-3 text-black ">
                      This ensures students have complete confidence in the value and credibility of their degree.
                    </p>
                  </div>

                  {/* 2️⃣ Career-Oriented Courses */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">2️.  Career-Focused Programs </h3>
                    <p className="text-black bg-white text-lg leading-relaxed ">
                      Each course, from  MBA at Sharda University  to
                      Online MCA from Sharda University , is created to prepare students
                      for  real jobs  and  professional success . The programs are
                      updated regularly to match  industry needs  and
                      future career trends .
                    </p>

                    <ul className="list-disc pl-6 mt-3 text-black space-y-1">
                      <li> Online MBA Sharda University</li>
                      <li> Online MCA Sharda University</li>
                      <li> Online BBA Sharda University</li>
                    </ul>
                    <p className="mt-3 text-black ">
                      focus on essential industry skills such as data analytics, leadership, innovation, and entrepreneurship — preparing learners for high-paying roles in fast-growing sectors.
                    </p>
                  </div>

                  {/* 3️⃣ Flexible Learning */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">3️. Flexible Learning for Busy Schedules </h3>
                    <p className="text-black bg-white text-lg leading-relaxed ">
                      With  Sharda University Online , you can study
                      anytime  and   anywhere . You get
                      recorded lectures ,   live online classes , and
                      easy-to-use study materials . It's perfect for
                      working professionals  who want to study while managing their
                      job  or   personal life .
                    </p>

                    <ul className="list-disc pl-6 mt-3 text-black space-y-1">
                      <li>. Recorded lectures</li>
                      <li>. Weekend live classes</li>
                      <li>. Assignments with flexible deadlines</li>
                    </ul>
                    <p className="mt-3 text-black ">
                      Ideal for working professionals, parents, and individuals looking to restart their academic journey.
                    </p>
                  </div>

                  {/* 4️⃣ Placement Support */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">4️. Strong Placement Support & Industry Network </h3>
                    <p className="text-lg leading-relaxed text-black ">
                      Sharda University Online prioritizes  career advancement  with dedicated support through:
                    </p>
                    <ul className="list-disc pl-6 mt-3 text-black space-y-1">
                      <li>. Virtual placement drives</li>
                      <li>. Resume & LinkedIn profile building</li>
                      <li>. Mock interviews with experts</li>
                      <li>. Internship and mentorship guidance</li>
                    </ul>
                    <p className="mt-3 text-black ">
                      Top recruiters actively hire Sharda Online graduates — making it one of the most career-driven online universities in India.
                    </p>
                  </div>

                  {/* 5️⃣ Affordable Fees */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">5️. Affordable Fees, Global Learning and EMI Options </h3>
                    <p className="text-black bg-white text-lg leading-relaxed ">
                      Sharda University fees  are  transparent  and  affordable .
                      Students also get  global exposure  through
                      international collaborations ,  online events , and
                      industry interactions . You get  quality education
                      at a  reasonable cost .
                    </p>

                    <ul className="list-disc pl-6 mt-3 text-black space-y-1">
                      <li>✔ Budget-friendly fees compared to other private universities</li>
                      <li>✔ No-cost EMI options</li>
                      <li>✔ Scholarships for eligible students</li>
                    </ul>
                  </div>

                  {/* 6️⃣ International Exposure */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">6️. International Exposure </h3>
                    <p className="text-lg leading-relaxed text-black ">
                      With global faculty, foreign student communities, and international learning events, Sharda Online offers
                      students a truly global academic experience — helping them think beyond borders and cultures.
                    </p>
                  </div>

                  {/* 7️⃣ Digital Infrastructure */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">7️. Advanced Digital Infrastructure </h3>
                    <p className="text-lg leading-relaxed text-black ">
                      The modern  LMS (Learning Management System)  ensures a seamless and engaging learning journey with:
                    </p>
                    <ul className="list-disc pl-6 mt-3 text-black space-y-1">
                      <li>. Recorded class access</li>
                      <li>.Interactive dashboards</li>
                      <li>.High-quality HD streaming</li>
                      <li>.Easy online examination system</li>
                    </ul>
                  </div>

                  {/* 8️⃣ Govt-Recognized */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">8️. Government-Recognized Online Degrees </h3>
                    <p className="text-lg leading-relaxed text-black ">
                      All degrees awarded by Sharda University Online hold the same value as traditional on-campus degrees —
                      ensuring equal job and academic opportunities.
                    </p>
                  </div>
                  {/*9 Expert Teachers and Mentors*/}
                  <h3 className="text-2xl font-semibold text-[#ee067f] mb-3"> 9️. Expert Teachers and Mentors</h3>
                  <p className="text-black bg-white text-lg leading-relaxed ">
                    Learn from  experienced professors  and
                    industry mentors  who make learning
                    simple  and   practical . They guide students
                    at every step and help them gain  useful knowledge  for the
                    real world .
                  </p>
                  {/*10 Part of a Leading Private University in Greater Noida*/}
                  <h3 className="text-2xl font-semibold text-[#ee067f] mb-3"> 1️0️. Part of a Leading Private University in Greater Noida</h3>
                  <p className="text-black bg-white text-lg leading-relaxed ">
                    Sharda University Greater Noida  is one of the most
                    reputed private universities  in Greater Noida and is ranked
                    among the  best universities in Delhi NCR . The university is
                    known for its  excellent faculty ,  strong placement record ,
                    and  innovative teaching methods .
                  </p>

                  {/* Final Verdict */}
                  <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#ee067f]">
                    <h3 className="text-2xl font-semibold text-[#ee067f] mb-3">🎓 Final Verdict: The Smart Choice for Future-Ready Careers</h3>
                    <p className="text-lg leading-relaxed text-black ">
                      Sharda University Online  offers the perfect blend of  recognition, flexibility, affordability, and career growth .
                      It is the ideal choice for students and professionals looking for globally accepted, future-proof education.
                    </p>
                  </div>
                </div>
              </section>
              <section id="key-highlights" className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-3xl font-bold text-[#ee067f] mb-10">
                    Key Highlights of Sharda University Online
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> UGC Entitled & NAAC Accredited</p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Global academic partnerships across <span className="text-[#ee067f]">30+ countries</span></p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Flexible learning via <span className="text-[#ee067f]">advanced LMS</span></p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Expert faculty & <span className="text-[#ee067f]">industry mentors</span></p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Accessible to <span className="text-[#ee067f]">working professionals</span></p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> EMI fee payment options available</p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> 100% online proctored examinations</p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Career support & <span className="text-[#ee067f]">placement assistance</span></p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Recorded + live sessions for <span className="text-[#ee067f]">best learning outcome</span></p>
                    </div>
                    <div className="p-6 border border-[#ee067f] rounded-2xl shadow-sm hover:shadow-md transition">
                      <p className="text-black font-semibold"> Internship & <span className="text-[#ee067f]">skill development guidance</span></p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="admission-dates" className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-16 lg:px-24 font-sans">
                <div className="max-w-6xl mx-auto text-center">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Admission Dates – UG & PG Online Programs
                  </h2>
                  <p className="text-gray-600 text-lg mb-10 ">
                    Sharda Online conducts multiple admission cycles every year.
                    <br />
                    <span className="font-semibold text-blue-600 text-xl">
                      Upcoming Admission Cycle: January / July 2026
                    </span>
                  </p>

                  {/* Table Section */}
                  <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="py-4 px-6 text-gray-800 font-semibold text-base">Program</th>
                          <th className="py-4 px-6 text-gray-800 font-semibold text-base">Eligibility</th>
                          <th className="py-4 px-6 text-gray-800 font-semibold text-base">Status</th>
                          <th className="py-4 px-6 text-gray-800 font-semibold text-base">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition">
                          <td className="py-4 px-6 text-gray-900 font-medium">Online MBA (Sharda University)</td>
                          <td className="py-4 px-6 text-gray-600">Graduation</td>
                          <td className="py-4 px-6 text-green-600 font-semibold">Admission Open</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => setOpenModal({ type: 'enquire', program: 'MBA' })}
                              className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm cursor-pointer"
                            >
                              Enquire Now
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition">
                          <td className="py-4 px-6 text-gray-900 font-medium">Online MCA (Sharda University)</td>
                          <td className="py-4 px-6 text-gray-600">BCA / B.Sc. IT or relevant degree</td>
                          <td className="py-4 px-6 text-green-600 font-semibold">Admission Open</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => setOpenModal({ type: 'enquire', program: 'MCA' })}
                              className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm cursor-pointer"
                            >
                              Enquire Now
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition">
                          <td className="py-4 px-6 text-gray-900 font-medium">Online BBA (Sharda University)</td>
                          <td className="py-4 px-6 text-gray-600">10+2 Pass</td>
                          <td className="py-4 px-6 text-green-600 font-semibold">Admission Open</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => setOpenModal({ type: 'enquire', program: 'BBA' })}
                              className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm cursor-pointer"
                            >
                              Enquire Now
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition">
                          <td className="py-4 px-6 text-gray-900 font-medium">Online BCA (Sharda University)</td>
                          <td className="py-4 px-6 text-gray-600">10+2 Pass (Govt. recognized board)</td>
                          <td className="py-4 px-6 text-yellow-600 font-semibold">Limited Seats</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => setOpenModal({ type: 'enquire', program: 'BCA' })}
                              className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm cursor-pointer"
                            >
                              Enquire Now
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition">
                          <td className="py-4 px-6 text-gray-900 font-medium">Online M.Com</td>
                          <td className="py-4 px-6 text-gray-600">B.Com / Equivalent</td>
                          <td className="py-4 px-6 text-green-600 font-semibold">Admission Open</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => setOpenModal({ type: 'enquire', program: 'M.Com' })}
                              className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm cursor-pointer"
                            >
                              Enquire Now
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition">
                          <td className="py-4 px-6 text-gray-900 font-medium">Online BA</td>
                          <td className="py-4 px-6 text-gray-600">10+2 Pass (Govt. recognized board)</td>
                          <td className="py-4 px-6 text-green-600 font-semibold">Admission Open</td>

                          <td className="py-4 px-6">
                            <button
                              onClick={() => setOpenModal({ type: 'enquire', program: 'BA' })}
                              className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm cursor-pointer"
                            >
                              Enquire Now
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Bottom Note */}
                  <p className="text-gray-600 mt-10 text-lg max-w-3xl mx-auto leading-relaxed ">
                    Learners are encouraged to apply early due to the high demand for Sharda University Online programs.
                  </p>
                </div>
              </section>


              <section>
                <div id="admission-process">
                  <div>
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
                          <div className="w-24 h-1 bg-[#f7188b] mx-auto mb-8 rounded-full"></div>
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
                            <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-[#f7188b] z-0 rounded-full"></div>

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
                                <div className="bg-[#f7188b] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
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
                      <div className="w-full bg-white py-14 px-6 lg:px-20 text-gray-900">
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl md:text-4xl font-bold text-black-500 text-center mb-12">
                            Admission Process – Step-by-Step
                          </h2>

                          <div className="space-y-10">

                            {/* Step 1 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
                              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                Step 1: Submit Your Application Form
                              </h3>
                              <p className="text-gray-700 leading-relaxed mb-3">First Fill this  Form</p>
                              {/* Apply Button */}
                              <button
                                onClick={() => setOpenModal({ type: 'apply' })}
                                className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f7188b]/25 text-sm sm:text-base cursor-pointer"
                              >
                                Apply Now
                              </button>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                Begin your admission process by submitting the online application form on the official
                                Sharda University admission portal with the help of Counsellor.
                              </p>
                              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                                <li>Enter your basic details such as name, email, and contact number.</li>
                                <li>Select your preferred program — UG, PG, or Online Courses.</li>
                                <li>Fill in the required fields and submit the application form.</li>
                              </ul>


                            </div>

                            {/* Step 2 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
                              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                Step 2: Register & Complete Your Profile
                              </h3>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                After submitting the application form, create your account and begin completing your profile.
                              </p>
                              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                <li>Enter academic details and upload your recent photograph.</li>
                                <li>Upload scanned copies of documents like mark sheets and ID proof.</li>
                                <li>Select the exact course such as MBA, Online BBA, or Online MCA.</li>
                                <li>Review all information carefully before submitting.</li>
                              </ul>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
                              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                Step 3: Pay the Application Fee
                              </h3>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                Complete your application by paying the required fee securely.
                              </p>
                              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                <li>Pay using credit card, debit card, net banking, or UPI.</li>
                                <li>All fee details are clearly mentioned on the official portal.</li>
                                <li>You will receive a confirmation message and receipt instantly.</li>
                              </ul>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
                              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                Step 4: Admission Confirmation
                              </h3>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                Once your documents and payment are verified, your application moves to evaluation.
                              </p>
                              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                <li>Selected candidates receive an offer letter via email.</li>
                                <li>
                                  For programs like MBA/PGDM, you may need to appear for interviews or entrance exams
                                  (e.g., XAT 2026, CUET UG 2026).
                                </li>
                                <li>After confirmation, complete your enrollment and begin your academic journey.</li>
                              </ul>
                            </div>

                          </div>
                        </div>

                      </div>

                    </section>
                  </div>
                </div>

              </section>

              <section id="Ongoing & Upcoming Admission Sessions" className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-6 lg:px-20 text-gray-900">
                <div className="max-w-6xl mx-auto">

                  {/* Section Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-black-500 text-center mb-12">
                    Ongoing & Upcoming Admission Sessions
                  </h2>

                  {/* Ongoing Admissions */}
                  <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      Ongoing Admissions 2026–2027
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 ">
                      Admissions for the 2026–2027 academic year are now open at
                      <span className="font-semibold"> Sharda University Greater Noida</span> and
                      <span className="font-semibold"> Sharda University Online</span>. Apply for UG, PG, and online degree programs across streams like Management, Computer Applications, Commerce, and more.
                      Whether you prefer traditional on-campus learning or flexible online programs, this is the perfect time to start your academic journey with one of the top universities in Delhi NCR.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Highlights of Ongoing Admissions:</h4>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li>Open for Undergraduate (UG) and Postgraduate (PG) programs</li>
                      <li>Admission available through  UG 2026 and XAT 2026 (for MBA)</li>
                      <li>Easy online application process with digital document submission</li>
                      <li>Affordable fees and scholarship options</li>
                      <li>Programs offered at both Greater Noida Campus and Sharda Online</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-4 ">
                      Students are advised to apply early and complete the
                      <span className="font-semibold"> Sharda University Admission 2026</span> process before deadlines close.
                    </p>
                  </div>

                  {/* Upcoming Admissions */}
                  <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                      Upcoming Admissions 2026
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 ">
                      The next admission cycle for the 2026-2027 academic session will begin soon.
                      <span className="font-semibold"> Sharda University Greater Noida</span> and
                      <span className="font-semibold"> Sharda University Online</span> will open applications for new batches of UG, PG, and online programs starting early next year.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Important Upcoming Dates:</h4>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li> UG 2027 Registration: Expected Dates Coming</li>
                      <li>Next Online Program Cycle: Starting soon for the 2027 batch</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-4 ">
                      For detailed schedules, eligibility, and updates, stay tuned to the
                      <span className="font-semibold"> official Sharda University admission portal.</span>
                    </p>
                  </div>

                </div>
              </section>


              {/* Certificate + Benefits */}
              <section className="bg-[#003366] py-12 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-1">
                    <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327074/certificateshardaonline_tyy6cu.webp" alt="certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
                  </div>
                  <div className="flex-1 text-white">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Online Degree from Sharda Online University</h2>
                    <p className="mb-6 text-lg ">Earn a UGC-Entitled, Globally Recognized Degree with Sharda Online!</p>
                    <h3 className="text-xl font-semibold mb-2"></h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>UGC-Entitled & NAAC A+ Accredited</li>
                      <li>Degree from a Globally Ranked University</li>
                      <li>Recognized & Accepted in India and Abroad</li>
                      <li>Equivalent to Sharda's On-Campus Programs</li>
                    </ul>
                  </div>
                </div>
              </section>



              {/* FAQ Section */}
              <section id="faqs" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      Frequently Asked <span className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 ">
                      Everything you need to know about {universityData.name} Online Programs
                    </p>
                  </div>

                  <div className="space-y-6">
                    {faqData.map((faq, index) => (
                      <div
                        key={index}
                        className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full text-left px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#f7188b]/10 hover:to-[#ec027c]/10 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-[#f7188b] text-lg cursor-pointer"
                        >
                          <span className="pr-8">{faq.question}</span>
                          <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#f7188b] group-hover:text-white transition-all duration-300">
                            <span className="text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
                          </div>
                        </button>
                        {openIndex === index && (
                          <div className="px-8 py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                            <p className="text-lg leading-relaxed ">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              {/* Placement Record Section */}
              <section id="placement-record" className="bg-gray-50 py-16 px-6 md:px-20 font-sans">
                <div className="max-w-6xl mx-auto">
                  {/* Placement Record Heading */}
                  <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                    Placement Record
                  </h2>

                  <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 ">
                    Sharda University Online has a strong placement network with thousands of global alumni.
                    Students pursuing online degrees benefit from:
                  </p>

                  {/* Benefits List */}
                  <ul className="text-gray-800 text-lg space-y-2 mb-10 max-w-2xl mx-auto list-disc list-inside ">
                    <li>Industry-driven skills</li>
                    <li>Corporate mentorship</li>
                    <li>Virtual placement drives</li>
                  </ul>

                  {/* Top Job Roles */}
                  <div className="bg-white shadow-md rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                      Top Job Roles:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 text-base">
                      <p> Business Analyst</p>
                      <p> Software Developer</p>
                      <p> HR Manager</p>
                      <p> Marketing Executive</p>
                      <p> Data Analyst</p>
                      <p> Project Coordinator</p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Testimonials Section */}
              <section id="student-reviews" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      Success <span className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] bg-clip-text text-transparent">Stories</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
                      Hear from our alumni who have transformed their careers with {universityData.name} Online
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                          <div className="flex items-start gap-6">
                            {/* Left Column: Avatar and Details */}
                            <div className="flex-shrink-0 w-40 text-center">
                              <div className="relative w-32 h-32 mx-auto">
                                {testimonial.image ? (
                                  <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-[#f7188b] to-[#ec027c] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                )}
                              </div>
                              <div className="mt-4">
                                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                <p className="text-[#f7188b] font-semibold text-sm">
                                  {testimonial.course}
                                </p>
                              </div>
                            </div>

                            {/* Right Column: Quote */}
                            <div className="flex-1">
                              <div className="mb-4">
                                <svg className="w-8 h-8 text-[#f7188b] mb-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-gray-700 text-lg leading-relaxed italic ">
                                  "{testimonial.text}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="placement-partners" className="py-12 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                  {/* Heading */}
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Our learners work at
                    </h2>
                    <p className="text-xl text-gray-600 mt-2 ">
                      Top hiring partners at Jain Online
                    </p>
                  </div>

                  {/* Logo Cards */}
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
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp" alt="Company4" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp" alt="Company 6" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp" alt="Companany5" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp" alt="Adove" className="h-12 object-contain" />
                    </div>


                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp" alt="Samsung3" className="h-12 object-contain" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp" alt="Samsung4" className="h-12 object-contain" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp" alt="Samsung5" className="h-12 object-contain" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp" alt="Samsung6" className="h-12 object-contain" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp" alt="Samsung7" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/8_otnhv8.webp" alt="Samsung8" className="h-12 object-contain" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp" alt="Samsung9" className="h-12 object-contain" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp" alt="Samsung" className="h-12 object-contain" />
                    </div>
                    {/* Add more cards here as needed */}
                  </div>
                </div>
              </section>
              {/* Student Reviews Section */}
              <section id="university-reviews" className="bg-white py-16 px-6 md:px-20 font-sans border-t border-gray-200">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
                    Student Reviews for Sharda University Online
                  </h2>

                  {/* Reviews Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Review 1 */}
                    <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Online MBA Student
                      </h3>
                      <p className="text-gray-600 ">
                        "Classes are well organized and faculty support is excellent. The Online MBA Sharda University
                        program helped me get a promotion."
                      </p>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Online MCA Student
                      </h3>
                      <p className="text-gray-600 ">
                        "The curriculum is updated as per industry trends, especially AI & Data Science.
                        LMS is smooth and interactive."
                      </p>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Online BBA Student
                      </h3>
                      <p className="text-gray-600 ">
                        "The flexibility of Sharda University Online allowed me to study while managing my family business."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA Section */}
              <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className="bg-gradient-to-r from-[#f7188b] to-[#ec027c] rounded-3xl p-12 text-white max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h3>
                    <p className="text-xl text-[#f7188b]/90 mb-8 max-w-2xl mx-auto ">
                      Join thousands of successful graduates and transform your career with {universityData.name} Online
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <button
                        onClick={() => setOpenModal({ type: 'apply' })}
                        className="bg-white text-[#f7188b] font-semibold px-12 py-4 rounded-full hover: transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg cursor-pointer"
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => setOpenModal({ type: 'enquire' })}
                        className="border-2 border-white text-white font-semibold px-12 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
                      >
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                      <div className="flex bg-white items-center gap-4 mb-6">
                        <img src={universityData.logo} alt={universityData.name} className="h-12 w-auto" />
                        <span className="text-2xl text-white font-bold">Online {universityData.shortName}</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-6 ">
                        UGC-entitled, {universityData.accreditation} accredited online degrees designed for modern learners.
                      </p>
                    </div>

                    {/* Programs */}
                    <div>
                      <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                      <ul className="space-y-3">
                        {['Online MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com'].map((program, i) => (
                          <li key={i}>
                            <a href="#" className="text-gray-400 hover:text-[#f7188b] transition-colors">
                              {program}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support */}
                    <div>
                      <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                      <ul className="space-y-3">
                        {['Admissions', 'Scholarships', 'Placements', 'FAQs', 'Contact Us'].map((item, i) => (
                          <li key={i}>
                            <a href="#" className="text-gray-400 hover:text-[#f7188b] transition-colors">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div>
                      <h4 className="text-white font-bold text-lg mb-6">Get Started</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white">📞</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Call Us</p>
                            <p className="text-white font-semibold">{universityData.phone}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setOpenModal({ type: 'apply' })}
                          className="w-full bg-gradient-to-r from-[#f7188b] to-[#ec027c] hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </div>
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
                      Popular Programs & Specializations –Manipal Academy of Higher Education Online(MAHE) "
                    </h4>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {[
                        "BBA General - Sharda Online",
                        "BCA General - Sharda Online",
                        "BA Political Science - Sharda Online",

                        "MBA Finance - Sharda Online",
                        "MBA Sales And Marketing - Sharda Online",
                        "MBA Human Resources Management - Sharda Online",
                        "MBA Data Science And Business Analytics - Sharda Online",
                        "MBA HelthCare And Hospital Management - Sharda Online",

                        "MCA Data Science - Sharda Online",
                        "MCA Computer Science And Information Technology - Sharda Online",

                        "M.Com Public Accounting - Sharda Online"
                      ]


                        .map((keyword, index) => (
                          <span
                            key={index} onClick={() => setOpenModal({ type: 'apply', })}
                            className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                            title={keyword}
                          >
                            {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                          </span>
                        ))}
                    </div>
                  </motion.div>

                  {/* Bottom */}
                  <div className="pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                      © {new Date().getFullYear()} {universityData.name} Online. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>

              {/* Modal */}
              {openModal && (
                <ApplyEnquiryModal
                  open={!!openModal}
                  onOpenChange={(v) => !v && setOpenModal(null)}
                  title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                  subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                  imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda1_eehdkh.webp"
                  universityName={universityData.name}
                  defaultProgram={openModal.program || 'MBA'}
                  formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UniversityPage;