'use client';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import PageContent from '@/components/PageContent/PageContent';
import { Button } from '@/components/ui/button';
import * as Tabs from '@radix-ui/react-tabs';
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaAward,
  FaBars,
  FaBookOpen,
  FaBrain,
  FaBriefcase,
  FaCertificate,
  FaChartLine,
  
  FaClock,
  FaCloud,
  FaGears,
  FaGraduationCap, FaMoneyBillWave,
  FaPhone,
  FaShield,
  FaUser,
  FaUserTie
} from "react-icons/fa6";
import { X } from "lucide-react";
type ModalState = {
  type: 'apply' | 'enquiry';
  program?: string;
} | null;
const MUJOnlineMCAPage = () => {
  const sectionItem = [
              { id: "overview", label: "Overview" },
              { id: "highlights", label: "Why Choose MUJ" },
              { id: "specializations", label: "Specializations" },
              { id: "syllabus", label: "Syllabus" },
              { id: "eligibility", label: "Eligibility" },
              { id: "fees", label: "Fees Structure" },
              { id: "career", label: "Career Scope" },
              { id: "admission", label: "Admission Process" },
              { id: "faq", label: "FAQs" }
            ];
             const [activeSection, setActiveSection] = useState(sectionItem[0]?.id ?? null);
                   
                                
                     useEffect(() => {
                                               if (!sectionItem.length) return undefined;
                                           
                                               const observerOptions = {
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
  const [openModal, setOpenModal] = useState<ModalState>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

   const toggleFAQ = (index: number): void => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const faqData = [
    {
      question: "Is Manipal Online MCA valid and recognized?",
      answer: "Yes. MUJ Online MCA is UGC-entitled, NAAC A+ accredited, and treated at par with on-campus degrees. Your certificate does not mention 'online'."
    },
    {
      question: "What is the fee structure and EMI support?",
      answer: "The program fee is transparent and payable semester-wise. MUJ partners with financial institutions for zero or low-cost EMI options so you can learn now and pay gradually."
    },
    {
      question: "Which specialization should I choose?",
      answer: "AI & Data Science and AI & ML are excellent for roles in modern data-driven companies. Cloud Computing and Cybersecurity offer stable, high-demand career paths. Choose a track aligned with your interests and career goals."
    },
    {
      question: "How does the online learning platform work?",
      answer: "You receive login credentials to the Online Manipal platform to access recorded & live classes, e-content, assignments, discussion boards, and a dedicated student app."
    },
    {
      question: "What career support is offered?",
      answer: "Manipal's career services include resume building, mock interviews, and access to job portals and hiring drives to connect you with potential employers."
    },
    {
      question: "Is Manipal Online MCA worth it for working professionals?",
      answer: "Absolutely. It allows you to earn a premium MCA degree without a career break, apply new skills to your job immediately, and access a national network of professionals, often resulting in promotions and salary hikes."
    }
  ];

  const specializations = [
    { 
        name: "AI & Data Science",
        description: "Focuses on predictive analytics, deep learning, big data, and neural networks.",
        icon: FaBrain,
        careers: "Data Scientist, BI Analyst, ML Engineer"
    },
    { 
        name: "AI & ML",
        description: "Master advanced neural networks, computer vision, NLP, and reinforcement learning.",
        icon: FaGears,
        careers: "AI Specialist, ML Engineer, NLP Scientist"
    },
    { 
        name: "Cloud Computing",
        description: "Covers AWS, Microsoft Azure, cloud architecture, virtualization, and DevOps.",
        icon: FaCloud,
        careers: "Cloud Engineer, DevOps Analyst, Systems Architect"
    },
    { 
        name: "Cybersecurity",
        description: "Learn ethical hacking, network security, cryptography, and digital forensics.",
        icon: FaShield,
        careers: "Cybersecurity Analyst, Security Consultant, Ethical Hacker"
    },
  ];

  const syllabus = {
    semester1: ["Computer Fundamentals", "Object-Oriented Programming", "Database Management Systems", "Discrete Mathematics", "System Analysis & Design", "Practical Labs"],
    semester2: ["Data Structures", "Operating Systems", "Advanced Java", "Web Technologies", "Software Engineering", "Python Programming"],
    semester3: ["Specialization Elective 1", "Specialization Elective 2", "Machine Learning Basics", "Cloud Architecture Foundations", "Cybersecurity Fundamentals", "Project Work"],
    semester4: ["Advanced Specialization Electives", "Project / Internship", "Research Seminar", "Final Assessment"]
  };

  const careerRoles = [
    "Software Developer", "AI/ML Engineer", "Data Scientist", "Cloud Solutions Architect",
    "Cybersecurity Analyst", "Full-Stack Developer", "DevOps Engineer", "IT Project Manager", "System Analyst"
  ];

  const admissionSteps = [
    { step: 1, title: "Register on Online Manipal Portal", desc: "Visit the official website, verify your email/phone, and create an account." },
    { step: 2, title: "Fill Digital Application", desc: "Provide your academic and professional details accurately." },
    { step: 3, title: "Upload Documents", desc: "Upload mark sheets, ID proof, and other required documents." },
    { step: 4, title: "Pay Application Fee", desc: "Complete the application by paying the requisite fee online." },
    { step: 5, title: "Receive Offer & Pay Program Fees", desc: "Upon selection, receive your offer letter and complete the fee payment (full/semester/EMI)." },
    { step: 6, title: "Start Your Learning Journey", desc: "Get your LMS credentials and attend the orientation." }
  ];

  const highlights = [
    {
      icon: FaCertificate,
      title: "UGC-Entitled & NAAC A+",
      desc: "Degree holds the same value as an on-campus MCA, globally recognized."
    },
    {
      icon: FaBookOpen,
      title: "Industry-Ready Curriculum",
      desc: "Live classes, simulations, case studies, and a capstone project."
    },
    {
      icon: FaUserTie,
      title: "Designed for Working Professionals",
      desc: "Weekend live sessions and recorded lectures for flexible learning."
    },
    {
      icon: FaUser,
      title: "Dedicated Student Support",
      desc: "Academic mentors, career coaches, and a technical help desk."
    }
  ];

  const feeCards = [
    {
      icon: FaMoneyBillWave,
      title: "Transparent Program Fee",
      desc: "An industry-aligned MCA that costs significantly less than traditional programs."
    },
    {
      icon: FaChartLine,
      title: "EMI & Education Loans",
      desc: "0% or low-cost EMI plans available through partner financial institutions."
    },
    {
      icon: X,
      title: "All-Inclusive Pricing",
      desc: "Includes LMS access, e-content, examination fees, and student support."
    },
    {
      icon: FaBriefcase,
      title: "Strong Return on Investment",
      desc: "Graduates report significant salary hikes and career progression."
    }
  ];

  return (
    <div>
      <Head>
        <title>Manipal Online MCA | Master of Computer Applications | MUJ Online</title>
        <meta name="description" content="UGC-approved Online MCA from Manipal University Jaipur. 2-year flexible program with multiple specializations. NAAC A+ accredited. Apply now for a career in tech." />
        <meta name="keywords" content="Manipal Online MCA, MUJ MCA Online, Online MCA, Master of Computer Applications Online, UGC Approved MCA, NAAC A+ MCA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/muj-online-mca" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
        .tab-trigger[data-state='active'] {
            background-color: #f97316;
            color: white;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
      `}</style>
       
      <div className="poppins overflow-x-hidden">
        {/* Header */}
        <header className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                  alt="Manipal University Logo" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
                />
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
                
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                > 
                  <FaPhone className="text-base sm:text-lg" />
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call</span>
                </a>
                
                <a
                  href="tel:+917042646766"
                  className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  <FaPhone className="text-base" />
                </a>
                
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Sidebar */}
 <PageContent sectionItems={sectionItem} activeSection={activeSection} ismobilemenuopen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />      

        <main className="flex-1 min-w-0">
          

          {/* Hero Section */}
          <section className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] overflow-hidden pt-14 sm:pt-16 lg:pt-20">
            <div className="absolute inset-0">
              <Image
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1764067290/mca-online-image_p1t8pf.webp"
                  alt="A student learning with Manipal's Online MCA Program"
                  
                  className="object-cover object-center"
                  priority
                  sizes="100vw"
                  width={1920}
                  height={1080}
                />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center">
              <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 md:py-12 lg:py-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-3 sm:space-y-4 md:space-y-6"
                >
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                    <img 
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                      alt="Manipal University Jaipur Logo" 
                      className="h-6 sm:h-8 w-auto" 
                    />
                    <span className="text-sm sm:text-base">UGC-Entitled • NAAC A+</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block">Online MCA Degree Program</span>
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Manipal University Jaipur</span>
                </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    UGC-approved 2-year online Master of Computer Applications program with flexible learning, industry-aligned specializations, and career support from NAAC A+ accredited Manipal University Jaipur.
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                    >
                      Apply Now
                    </button>
                    <a
                      href="tel:+917042646766"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 border border-white/30"
                    >
                      <FaPhone className="inline mr-2" />
                      Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
                    {["2 Years • 4 Semesters", "Live + Recorded Classes", "EMI Options Available", "Placement Support"].map((item) => (
                      <span key={item} className="flex items-center gap-2">
                        <X className="text-orange-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal University Jaipur Online MCA Overview
                </h2>
                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Learn about one of India’s top online tech degrees, designed to build advanced technical skills in a flexible, 100% online format.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
                    alt="Manipal University Jaipur campus"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                   <p className="text-gray-700 leading-relaxed">
                    The <strong>Online MCA from Manipal University Jaipur (MUJ)</strong> is a postgraduate program designed for aspiring IT professionals. As a <strong>UGC-entitled and NAAC A+ accredited</strong> institution, MUJ ensures the online degree is recognized globally and valued by employers.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The program is ideal for both recent graduates and working professionals who want to upgrade their skills without pausing their careers.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Flexible Learning:</strong> Study at your own pace with live and recorded classes.</li>
                    <li><strong>Industry-Aligned:</strong> Curriculum focused on in-demand skills and technologies.</li>
                    <li><strong>Career Support:</strong> Dedicated placement assistance and networking opportunities.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Program at a Glance</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    {icon: FaClock, title: "Duration", desc: "2 Years (4 Semesters)"},
                    {icon: FaMoneyBillWave, title: "Total Fee", desc: "₹1,58,000"},
                    {icon: FaGraduationCap, title: "Eligibility", desc: "Bachelor's Degree (50%)"},
                    {icon: FaAward, title: "Recognition", desc: "UGC Entitled, NAAC A+"},
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center">
                      <item.icon className="text-orange-600 text-3xl mb-2 mx-auto" />
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section id="highlights" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Manipal Online MCA?
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <item.icon className="text-orange-600 text-4xl flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specializations Section */}
          <section id="specializations" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Future-Ready Specializations
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Personalize your MCA journey with high-demand specializations featuring expert faculty and domain-specific projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {specializations.map((spec, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="flex items-center gap-4 mb-3">
                        <spec.icon className="text-3xl text-orange-600" />
                        <h3 className="text-xl font-bold text-gray-900">{spec.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{spec.description}</p>
                    <p className="text-sm text-gray-600"><strong className="text-gray-800">Career Paths:</strong> {spec.careers}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Syllabus Section */}
          <section id="syllabus" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Program Curriculum
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A comprehensive syllabus covering foundational concepts and advanced technologies across four semesters.
                    </p>
                </div>

                <Tabs.Root defaultValue="sem1" className="w-full max-w-4xl mx-auto">
                    <Tabs.List className="flex flex-wrap justify-center gap-2 mb-8">
                        <Tabs.Trigger value="sem1" className="tab-trigger px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 bg-white shadow-sm hover:bg-orange-100">Semester 1</Tabs.Trigger>
                        <Tabs.Trigger value="sem2" className="tab-trigger px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 bg-white shadow-sm hover:bg-orange-100">Semester 2</Tabs.Trigger>
                        <Tabs.Trigger value="sem3" className="tab-trigger px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 bg-white shadow-sm hover:bg-orange-100">Semester 3</Tabs.Trigger>
                        <Tabs.Trigger value="sem4" className="tab-trigger px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 bg-white shadow-sm hover:bg-orange-100">Semester 4</Tabs.Trigger>
                    </Tabs.List>

                    {Object.entries(syllabus).map(([sem, subjects]) => (
                        <Tabs.Content key={sem} value={sem.replace('semester', 'sem')} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                           <div className="grid sm:grid-cols-2 gap-4">
                                {subjects.map((subject, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <X className="text-orange-500 flex-shrink-0" />
                                        <span className="text-gray-700">{subject}</span>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Content>
                    ))}
                </Tabs.Root>
            </div>
          </section>

          {/* Eligibility Section */}
          <section id="eligibility" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility & Admission
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Eligibility Criteria:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Bachelor's degree in any discipline from a recognized university.</li>
                      <li>Minimum 50% aggregate marks (45% for reserved categories).</li>
                      <li>Mathematics as a subject in Class 12 or graduation is required.</li>
                      <li>Final-year students can apply.</li>
                    </ul>
                </div>
                 <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Documents Required:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>10th, 12th, and graduation mark sheets.</li>
                      <li>Government-issued ID proof.</li>
                      <li>Passport-size photographs.</li>
                      <li>Work experience letters (if any).</li>
                    </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Fees Section */}
          <section id="fees" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Fees & Payment Structure
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                {feeCards.map((card, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <card.icon className="text-orange-600 text-3xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                        <p className="text-gray-700">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Career Scope Section */}
          <section id="career" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career Scope & Opportunities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  An MCA from Manipal opens doors to leadership roles in the fast-growing tech industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Job Roles:</h3>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                        {careerRoles.map((role, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-700">
                            <FaBriefcase className="text-orange-500" />
                            <span>{role}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                   <div>
                      <Image
                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1766473759/muj-carrer_e52xkh.png"
                        alt="Career opportunities"
                        width={600}
                        height={400}
                        className="w-full rounded-2xl shadow-lg"
                      />
                </div>
              </div>
            </div>
          </section>

          {/* Admission Process Section */}
          <section id="admission" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Simple Admission Process
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {admissionSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
           {/* Enhanced Footer */}
                  <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden mt-8">
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
                            <div className="flex items-center gap-3 mb-4 bg-white rounded-full p-3">
                              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal" className="h-10 w-auto" />
                             
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
                              {['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com', 'MAJMC'].map((program, i) => (
                                <li onClick={() => setOpenModal({ type: 'apply' })} key={i} className="hover:text-orange-400 transition-colors cursor-pointer">
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
                                { name: 'Scholarships', href: '#' },
                                { name: 'Placements', href: '#' },
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
                                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                                  <span className="text-orange-400">📞</span>
                                </div>
                                <span className="text-sm">+91 7042646766</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                                  <span className="text-orange-400">✉️</span>
                                </div>
                                <span className="text-sm">info@unifostedu.com</span>
                              </div>
                            </div>
                            
                            <Button 
                              onClick={() => setOpenModal({ type: 'apply' })}
                              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                            >
                              Apply Now
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    {/* Popular Programs & Specializations - MUJ */}
                      {/* Popular Programs Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-8 mb-8"
                      >
                        <h4 className="text-lg font-bold mb-6 text-white text-center">
                          Popular Programs & Specializations – Manipal University Jaipur (MUJ)
                        </h4>
          
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                          {[
                            // UG Courses
                            "BBA General - MUJ Online",
                            "BBA Finance & Accounting - MUJ Online",
                            "BBA Digital Marketing - MUJ Online",
                            "BBA Marketing -MUJ Online",
                            "BBA Entrepreneurship & Family Business - MUJ Online",
                            "BBA Human Resource Management - MUJ Online",
                            "BBA Data Analytics - MUJ Online",
                            "BBA Retail & E-commerce Management - MUJ Online",
                            "BCA General - MUJ Online",
                            "BCA Data Science & Analytics - MUJ Online",
                            "BCA Cyber Security - MUJ Online",
                            "BCA Cloud Computing - MUJ Online",
                            "B.Com General - MUJ Online",
                            // PG Courses
                            "MBA General - MUJ Online",
                            "MBA HR & Finance - MUJ Online",
                            "MBA Finance & Marketing - MUJ Online",
                            "MBA Marketing & HR - MUJ Online",
                            "MBA Marketing & Business Analytics - MUJ Online",
                            "MBA Finance & Business Analytics - MUJ Online",
                            "MBA Project Management - MUJ Online",
                            "MBA Retail Management & Quick Commerce - MUJ Online",
                            "MBA Artificial Intelligence in Banking & Finance - MUJ Online",
                            "MCA AI & Data Science - MUJ Online",
                            "MCA Cyber Security - MUJ Online",
                            "MCA Cloud Computing - MUJ Online",
                            "MCA Comprehensive Emerging Technologies - MUJ Online",
                            "MCA Artificial Intelligence & Machine Learning - MUJ Online",
                            "M.Com General - MUJ Online",
                            "MA Economics - MUJ Online",
                            "MA Journalism & Mass Communication - MUJ Online"
                          ].map((keyword, index) => (
                            <span
                              key={index} 
                              className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                              title={keyword}
                              onClick={() => {
                                    setOpenModal({ type: "apply" });
                                  }}
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
                        <p>&copy; {new Date().getFullYear()} Manipal University Online. All rights reserved.</p>
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
                      imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
                      universityName="Manipal University Online"
                      defaultProgram="MBA"
                      formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                    />
                  )}
        </main>
      </div>

      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your MCA Application' : 'Enquire About MCA Program'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
          universityName="Manipal University Jaipur"
          defaultProgram="MCA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

export default MUJOnlineMCAPage;
