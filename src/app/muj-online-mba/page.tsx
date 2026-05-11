'use client';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import PageContent from '@/components/PageContent/PageContent';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaAward, FaBars, FaBookOpen, FaBriefcase, FaBuilding, FaCertificate, FaChartLine, FaCircleCheck, FaClock, FaGraduationCap, FaLaptop, FaMoneyBillWave, FaPhone, FaUser, FaUserTie } from "react-icons/fa6";
import { X } from "lucide-react";
type ModalState = {
  type: 'apply' | 'enquiry';
  program?: string;
} | null;
const MUJOnlineMBAPage = () => {
  const sectionItem = [
              { id: "overview", label: "Overview" },
              { id: "highlights", label: "Why Choose" },
              { id: "eligibility", label: "Eligibility" },
              { id: "duration", label: "Duration & Mode" },
              { id: "fees", label: "Fees Structure" },
              { id: "specializations", label: "Specializations" },
              { id: "syllabus", label: "Syllabus" },
              { id: "career", label: "Career Scope" },
              { id: "admission", label: "Admission Process" },
              { id: "unifost", label: "How UNIFOST Helps" },
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
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

   const toggleFAQ = (index: number): void => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const faqData = [
    {
      question: "Is Manipal Online MBA valid and recognized?",
      answer: "Yes. MUJ Online MBA is UGC-entitled, NAAC A+ accredited, and treated at par with on-campus degrees. Your certificate does not mention 'online'."
    },
    {
      question: "What is the fee structure and EMI support?",
      answer: "Program fee is transparent and payable semester-wise. MUJ partners with NBFCs/banks for zero or low-cost EMIs so you can learn now and pay gradually."
    },
    {
      question: "Which specialization should I choose?",
      answer: "Marketing and Finance remain evergreen, whereas Business Analytics and IT are trending for tech-led roles. Pick a track aligned with your role, passion, and job market demand."
    },
    {
      question: "How does the online learning platform work?",
      answer: "You receive Online Manipal login credentials to access recorded/live classes, e-content, assignments, discussion boards, and a dedicated student app."
    },
    {
      question: "What career support is offered?",
      answer: "Career labs cover CV building, mock interviews, job readiness bootcamps, and alumni networking. Most learners leverage the MBA for promotions or role switches."
    },
    {
      question: "Is Manipal Online MBA worth it for working professionals?",
      answer: "Absolutely. You earn a premium MBA without career breaks, apply new skills immediately, and access a national network—resulting in higher roles and pay."
    }
  ];

  // ✅ UPDATED: All 13 Specializations with Professional Descriptions
  const specializations = [
    { 
      name: "Digital Marketing", 
      for: "Social media strategy, content marketing, SEO/SEM, email campaigns, brand positioning, digital analytics" 
    },
    { 
      name: "Marketing Management", 
      for: "Branding, market research, GTM strategies, consumer behavior, brand strategy, campaign management" 
    },
    { 
      name: "Analytics & Data Science", 
      for: "Predictive analytics, BI tools, data storytelling, statistical modeling, AI/ML applications, business intelligence" 
    },
    { 
      name: "IT & FinTech", 
      for: "Digital transformation, blockchain, payment systems, digital banking, cybersecurity, tech innovation" 
    },
    { 
      name: "Finance Management", 
      for: "Financial modeling, investments, strategic finance, corporate finance, portfolio management, risk analysis" 
    },
    { 
      name: "Human Resource Management", 
      for: "Talent acquisition, employee engagement, HR analytics, organizational development, compensation & benefits" 
    },
    { 
      name: "Banking, Financial Services & Insurance (BFSI)", 
      for: "Banking regulations, insurance products, wealth management, financial advisory, compliance framework" 
    },
    { 
      name: "Operations Management", 
      for: "Supply chain optimization, process excellence, logistics, lean management, operational efficiency" 
    },
    { 
      name: "International Business", 
      for: "Global trade, cross-border strategy, export-import, international markets, geopolitical insights" 
    },
    { 
      name: "Information Systems Management", 
      for: "IT governance, systems strategy, digital infrastructure, cloud computing, enterprise solutions" 
    },
    { 
      name: "Project Management", 
      for: "PMP certification prep, agile, PRINCE2, stakeholder management, resource planning, risk management" 
    },
    { 
      name: "Supply Chain Management", 
      for: "Logistics optimization, vendor management, procurement strategy, inventory control, demand planning" 
    },
    { 
      name: "Retail Management & Quick Commerce", 
      for: "Omnichannel strategy, customer experience, e-commerce, retail analytics, quick commerce models, store operations" 
    }
  ];

  const jobRoles = [
    "Marketing & Growth Manager, Brand Strategist",
    "Financial Analyst, Investment Associate",
    "HR Business Partner, Talent Development Lead",
    "Operations Lead, Supply Chain Specialist",
    "Product Manager, Business Consultant",
    "Entrepreneur / Startup Founder"
  ];

  const industries = [
    "IT & Technology Services",
    "Banking & Financial Services",
    "Consulting & Business Services",
    "FMCG & Retail",
    "Healthcare & Pharmaceuticals",
    "Manufacturing & Industrial"
  ];

  const admissionSteps = [
    { step: 1, title: "Register on Online Manipal Portal", desc: "Verify your email/phone and create account" },
    { step: 2, title: "Fill Digital Application", desc: "Provide academic and professional details" },
    { step: 3, title: "Upload Documents", desc: "Mark sheets, ID proof, photo, and supporting documents" },
    { step: 4, title: "Application Screening", desc: "Some tracks may require online assessment" },
    { step: 5, title: "Receive Offer & Pay Fees", desc: "Complete payment (full/semester/EMI options)" },
    { step: 6, title: "Start Learning Journey", desc: "Get LMS credentials, attend orientation" }
  ];

  const highlights = [
    {
      icon: FaCertificate,
      title: "UGC-Entitled & NAAC A+",
      desc: "Degree holds the same value as on-campus MBA, globally recognized."
    },
    {
      icon: FaBookOpen,
      title: "Career-Focused Curriculum",
      desc: "Live classes, simulations, case studies, and capstone projects."
    },
    {
      icon: FaUserTie,
      title: "Designed for Working Pros",
      desc: "Weekend live sessions + recorded lectures for flexible learning."
    },
    {
      icon: FaUser,
      title: "Dedicated Student Support",
      desc: "Academic mentors, career coaches, and technical help desk."
    }
  ];

  const feeCards = [
    {
      icon: FaMoneyBillWave,
      title: "Transparent Program Fee",
      desc: "Industry-aligned MBA that costs significantly less than traditional programs."
    },
    {
      icon: FaChartLine,
      title: "EMI & Education Loans",
      desc: "0% or low-cost EMI plans via partner NBFCs and banks."
    },
    {
      icon:  FaCircleCheck,
      title: "All-Inclusive Pricing",
      desc: "Includes LMS access, e-content, exam fees, and student support."
    },
    {
      icon: FaBriefcase,
      title: "Strong ROI",
      desc: "Graduates report 30-50% average salary hikes within 2 years."
    }
  ];

  return (
    <div>
      <Head>
        <title>Manipal Online MBA Jaipur | Fees, Specializations & Admission 2026</title>
        <meta name="description" content="Enroll in Manipal Online MBA from MUJ (UGC-Entitled & NAAC A+). Explore 13+ specializations, flexible EMI options, and dedicated placement support. Apply for the 2026 batch today!" />
        <meta name="keywords" content="Manipal Online MBA, MUJ Online MBA Jaipur, Online MBA India 2026, Best UGC Approved Online MBA, Manipal University Jaipur MBA Online Fees, Online MBA with Placement Support, NAAC A+ Online MBA University, MUJ MBA Specializations, Manipal Online MBA Admission Process, Working Professionals Online MBA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/muj-online-mba" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
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
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-600">
                  
                </h1>
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
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp"
                  alt="Professional student pursuing Manipal Online MBA"
                  className="object-cover object-center"
                  priority
                  sizes="100vw"
                  width={1920}
                  height={1080}
                />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
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
                  <span className="block">Online MBA Degree Program</span>
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Manipal University Jaipur</span>
                </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    UGC-approved 2-year online MBA program with flexible learning, multiple specializations, and career-focused curriculum from NAAC A+ accredited Manipal University Jaipur.
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
                        < FaCircleCheck className="text-orange-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
            <section className="mx-auto p-6 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100 mt-12 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                  <span className="w-2 h-10 bg-orange-600 rounded-full"></span>
                  Why Manipal Online MBA?
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Online education in India has grown rapidly since 2020, and leading this evolution is the <strong className="text-orange-600">Manipal Online MBA</strong> from Manipal University Jaipur (MUJ). With <strong className="text-gray-900">NAAC A+</strong> accreditation, UGC-entitled status, and a strong academic legacy, it is considered one of the most reliable and career-focused online MBA programs in the country.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Whether you are a working professional aiming for promotion, a graduate seeking a competitive MBA, or a career switcher preparing for leadership roles, the Manipal Online MBA provides the flexibility, recognition, and industry relevance needed to excel.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                      <p className="text-gray-800 font-medium italic">
                        "The Online MBA from Manipal bridges the gap through an updated curriculum, hands-on projects, and a digital-first learning ecosystem designed to meet today's industry demands."
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "NAAC Grade", value: "A+", color: "bg-blue-50 text-blue-700" },
                      { label: "Accreditation", value: "UGC", color: "bg-orange-50 text-orange-700" },
                      { label: "Duration", value: "2 Years", color: "bg-green-50 text-green-700" },
                      { label: "Specializations", value: "13+", color: "bg-purple-50 text-purple-700" }
                    ].map((stat, i) => (
                      <div key={i} className={`${stat.color} p-6 rounded-2xl text-center border border-white shadow-sm hover:shadow-md transition-shadow`}>
                        <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                        <div className="text-sm font-semibold opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          {/* Overview Section */}
          <section id="overview" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal University Jaipur Online MBA Overview
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
                    alt="Manipal University Jaipur"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>MUJ</strong> belongs to the Manipal group and is recognized by <strong>UGC</strong>. It has an <strong>A+ grade from NAAC</strong>. The online programs are entitled by UGC; thus, these programs will carry the same academic value as any on-campus degree.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The <strong>Online MBA</strong> is:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>A 2-year postgraduate degree (4 semesters)</li>
                    <li>Offered fully online via the Online Manipal platform</li>
                    <li>Designed for working professionals who want career advancement without career breaks</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                    The programme focuses on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Advanced business fundamentals (strategy, leadership, analytics)</li>
                    <li>Digital transformation and technology management</li>
                    <li>Strategic thinking and decision-making capabilities</li>
                    <li>Leadership and organizational development</li>
                  </ul>
                </div>
              </div>

              {/* At a Glance */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Manipal Online MBA at a Glance</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaGraduationCap className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600 text-sm">2 Years (4 Semesters)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaMoneyBillWave className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Total Fee</h4>
                    <p className="text-gray-600 text-sm">₹1,50,000 - ₹2,00,000*</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    < FaCircleCheck className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Eligibility</h4>
                    <p className="text-gray-600 text-sm">Graduation (50% minimum)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <FaAward className="text-orange-600 text-3xl mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Recognition</h4>
                    <p className="text-gray-600 text-sm">UGC Entitled, NAAC A+</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">*Fee varies by specialization</p>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section id="highlights" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Manipal Online MBA?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <item.icon className="text-3xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Recognition & Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  MUJ is NAAC A+ accredited, AICTE approved, and part of the globally respected Manipal Group. The
                  online MBA is fully UGC-entitled—ideal for job applications, promotions, and overseas prospects.
                </p>
              </div>
            </div>
          </section>

          {/* Fees Section */}
          <section id="fees" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal Online MBA Fees & Payment Structure
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Invest confidently in a degree that pays you back through faster promotions and better job opportunities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {feeCards.map((card, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-gradient-to-br from-white to-orange-50/30 rounded-2xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 flex-shrink-0 shadow-inner">
                        <card.icon className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">{card.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        <th className="px-4 py-4 text-left font-semibold">Category</th>
                        <th className="px-4 py-4 text-left font-semibold">Total Program Fee</th>
                        <th className="px-4 py-4 text-left font-semibold">Semester-wise Fee*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Indian Students</td>
                        <td className="px-4 py-4 text-gray-700">₹1,80,000</td>
                        <td className="px-4 py-4 text-gray-700">₹45,000 per semester</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>Additional Information:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Scholarship options available for meritorious students</li>
                    <li>EMI options starting from ₹4,999/month</li>
                    <li>Corporate reimbursement programs supported</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Section */}
          <section id="eligibility" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility Criteria for Manipal Online MBA
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Eligibility:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Bachelor's degree in any discipline from a recognized university</li>
                      <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
                      <li>Final-year students can apply, provided they submit documents before course start</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Requirements:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Reliable internet connection and laptop/desktop</li>
                      <li>Basic digital literacy and computer skills</li>
                      <li>Commitment of 10-15 hours per week for studies</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-white rounded-xl p-4 border border-orange-200">
                  <p className="text-gray-700">
                    <strong>Pro tip:</strong> Keep soft copies of all mark sheets and ID proofs ready. Admissions operate
                    on a rolling basis, so early applicants receive faster confirmation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Duration & Mode Section */}
          <section id="duration" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Duration & Mode of Learning
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaClock className="text-orange-600" />
                      Duration
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Standard Duration:</strong> 2 years (4 semesters)</li>
                      <li><strong>Maximum Duration:</strong> Up to 4 years to complete the degree (flexible)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaLaptop className="text-orange-600" />
                      Learning Mode
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Online learning management system (LMS)</li>
                      <li>Recorded video lectures + live interactive sessions</li>
                      <li>E-books, study materials, and case studies</li>
                      <li>Online assignments and proctored exams</li>
                      <li>Discussion forums and peer collaboration</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                    <p className="text-gray-700">
                      <strong>This structure makes it ideal for:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Working professionals wanting career advancement without quitting jobs</li>
                      <li>Entrepreneurs and business owners seeking formal management education</li>
                      <li>Recent graduates looking to enhance employability with a premium MBA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specializations Section - MODERNIZED & CLICKABLE */}
          <section id="specializations" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  13+ Industry-Ready Specializations
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tailor your MBA to your career goals. Click on any specialization to get a detailed syllabus and expert counseling.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {specializations.map((spec, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setOpenModal({ type: 'enquiry', program: `MBA - ${spec.name}` })}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-orange-200 relative overflow-hidden"
                  >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition-all duration-500 group-hover:bg-orange-100 group-hover:scale-150 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                          <FaGraduationCap className="text-2xl" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-100">
                          Most Popular
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {spec.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {spec.for}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500 font-medium">
                          < FaCircleCheck className="text-green-500 mr-2" />
                          Job-Linked
                        </div>
                        <div className="flex items-center text-orange-600 font-bold text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Enquire Now
                          <FaArrowRight className="ml-2 w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Internal Linking / Backlinking Section */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-orange-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Explore More Programs at MUJ</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Manipal University Jaipur offers a wide range of UGC-approved online degrees. Whether you're looking for undergraduate programs or other postgraduate options, we have the right path for you.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: "Online BCA", href: "/muj-online-bca" },
                          { name: "Online BBA", href: "/muj-online-bba" },
                          { name: "Online MCA", href: "/muj-online-mca" },
                          { name: "Online B.Com", href: "/muj-online-bcom" },
                          { name: "Online M.Com", href: "/muj-online-mcom" }
                        ].map((link, i) => (
                          <a 
                            key={i}
                            href={link.href}
                            className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 border border-orange-100"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Links for MBA Aspirants</h4>
                      <ul className="space-y-3">
                        <li>
                          <a href="/blog/ManipalVsAmityOnlineMBA" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                            Manipal vs Amity: Which Online MBA is Better?
                          </a>
                        </li>
                        <li>
                          <a href="/blog/CareerAfterOnlineMBA" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                            Top Career Opportunities After Online MBA
                          </a>
                        </li>
                        <li>
                          <a href="/blog/ScholarshipAndEMI" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                            Guide to Online MBA Scholarships & EMI Options
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Syllabus Section */}
          <section id="syllabus" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Program Structure & Learning Experience
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Semesters 1 & 2: Foundations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Managerial Economics, Accounting & Finance</li>
                    <li>Marketing, HR, Operations & Supply Chain Management</li>
                    <li>Business Analytics, Research Methodology</li>
                    <li>Business Communication and Corporate Ethics</li>
                    <li>IT for Managers and Organizational Behavior</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Semesters 3 & 4: Advanced + Capstone</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Strategic Management and Business Policy</li>
                    <li>Entrepreneurship and Project Management</li>
                    <li>Specialization electives (6–8 courses)</li>
                    <li>Industry projects and simulations</li>
                    <li>Dissertation/Capstone Project</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Learning Methodology</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Attend live sessions, revisit recordings anytime, join discussion forums, submit assignments digitally,
                  and collaborate with peers through Online Manipal's award-winning LMS.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: "🎥", title: "Recorded Lectures", desc: "Access anytime" },
                    { icon: "🔴", title: "Live Sessions", desc: "Interactive classes" },
                    { icon: "📚", title: "E-Resources", desc: "Study materials" },
                    { icon: "💬", title: "Discussion Forums", desc: "Peer learning" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Career Scope Section */}
          <section id="career" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career Support & Job Outcomes
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  MUJ's Career Services team ensures you capitalize on your MBA with structured guidance and employer connects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-orange-600" />
                    Career Support Services
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Career Mentoring", desc: "1:1 consultations to craft personalized growth roadmaps" },
                      { title: "Resume & Profile Labs", desc: "LinkedIn & CV makeovers aligned with target roles" },
                      { title: "Mock Interviews", desc: "HR + technical mock rounds with live feedback" },
                      { title: "Corporate Networking", desc: "Access to Manipal alumni, CXO talks, and industry webinars" }
                    ].map((service, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBuilding className="text-orange-600" />
                    Popular Job Roles
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {jobRoles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <p className="text-gray-700">
                      <strong>Average Salary Hike:</strong> 30-50% within 2 years of completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join thousands of professionals who have accelerated their careers with Manipal Online MBA
                </p>
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Start Your Application
                </button>
              </div>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Is MUJ Online MBA Worth It?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Judge the program across the metrics that matter to modern professionals.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                        <th className="px-4 py-4 text-left font-semibold">Value Delivered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { aspect: "Academic Credibility", value: "UGC-approved degree from MUJ with NAAC A+ legacy" },
                        { aspect: "Flexibility", value: "Weekend classes, recorded lectures, mobile LMS" },
                        { aspect: "Cost Advantage", value: "Pay per semester or via EMI; no hidden charges" },
                        { aspect: "Skill Outcomes", value: "Case studies, simulations, capstone, and career labs" },
                        { aspect: "Network", value: "Pan-India cohort of managers, entrepreneurs, and technologists" }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-4 font-semibold text-gray-900">{row.aspect}</td>
                          <td className="px-4 py-4 text-gray-700">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>Who benefits the most?</strong> Working professionals aiming for leadership, career switchers,
                    entrepreneurs scaling ventures, and graduates who want a premium MBA alongside early work experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Admission Process Section */}
          <section id="admission" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Admission Process
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Follow these steps to secure your seat in the next intake.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6 mb-12">
                {admissionSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Documents Checklist</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "10th, 12th, and graduation mark sheets + degree certificate",
                    "Government-issued ID (Aadhaar/PAN/Passport/Driving License)",
                    "Passport-size photographs in JPEG format",
                    "Work experience letters (if applicable)",
                    "Category certificates for reserved seats (if applicable)"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center gap-3">
                      < FaCircleCheck className="text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-700">
                    <strong>Need help?</strong> Call +91 70426 46766 for application guidance, EMI assistance, or syllabus
                    walkthroughs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* UNIFOST Helps Section */}
          <section id="unifost" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Expert Guidance from <span className="text-orange-600">UNIFOST</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We don't just provide information; we help you build your future with the right educational choices.
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Choosing an online university is a life-changing decision. Students often face confusion when comparing top institutions like Manipal, Amity, and LPU.
                    </p>
                    <div className="space-y-4">
                      {[
                        "UGC & NAAC approval verification",
                        "Specialization vs Career goal mapping",
                        "Fee comparison & ROI analysis",
                        "Work-study balance strategies"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-orange-50">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                            < FaCircleCheck className="text-sm" />
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600 rounded-2xl rotate-12 -z-10 opacity-10"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-orange-100 pb-4">Our Commitment</h3>
                    <div className="space-y-6">
                      {[
                        { title: "Verified Information", desc: "No confusion, only UGC & NAAC verified data." },
                        { title: "Personalized Comparison", desc: "Compare Manipal with top alternatives on all metrics." },
                        { title: "Goal-Based Selection", desc: "Choose tracks (Marketing, HR, etc.) based on your 5-year plan." },
                        { title: "End-to-End Support", desc: "From application to document upload and fee planning." }
                      ].map((help, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                            <span className="font-bold">{i+1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{help.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{help.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white max-w-2xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-lg mb-6">Our counselors are here to help you make the right decision.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 cursor-pointer"
                    >
                      Apply Now
                    </button>
                    <a
                      href="tel:+917042646766"
                      className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                    >
                      Call Counselor
                    </a>
                  </div>
                </div>
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
                     Compare Top Online MBA Programs
                   </h4>
                   <div className="flex flex-wrap justify-center gap-3 mb-8">
                     {[
                       { name: "Amity Online MBA", href: "/amity/amity-online-mba" },
                       { name: "LPU Online MBA", href: "/lpu-online" },
                       { name: "Jain Online MBA", href: "/jain" },
                       { name: "Chandigarh University Online MBA", href: "/cuOnline" },
                       { name: "Manipal Online MCA", href: "/muj-online-mca" },
                       { name: "Manipal Online BBA", href: "/muj-online-bba" },
                       { name: "Manipal Online BCA", href: "/muj-online-bca" }
                     ].map((link, index) => (
                       <a
                         key={index}
                         href={link.href}
                         className="bg-white/5 backdrop-blur-sm text-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-orange-600 hover:text-white transition-all duration-300 border border-white/10 hover:border-orange-600"
                       >
                         {link.name}
                       </a>
                     ))}
                   </div>

                   <h4 className="text-lg font-bold mb-6 text-white text-center">
                     Popular Specializations – MUJ Online
                   </h4>
     
                   <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                     {[
                       "MBA Marketing - MUJ Online",
                       "MBA Finance - MUJ Online",
                       "MBA HR - MUJ Online",
                       "MBA Analytics - MUJ Online",
                       "MBA IT & FinTech - MUJ Online",
                       "MBA Operations - MUJ Online",
                       "MBA International Business - MUJ Online",
                       "MBA Project Management - MUJ Online",
                       "MBA Supply Chain - MUJ Online",
                       "MBA Retail Management - MUJ Online"
                     ].map((keyword, index) => (
                       <span
                         key={index} 
                         className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                         onClick={() => setOpenModal({ type: "enquiry", program: keyword })}
                       >
                         {keyword}
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
          title={openModal.type === 'apply' ? 'Start Your MBA Application' : 'Enquire About MBA Program'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
          universityName="Manipal University Jaipur"
          defaultProgram="MBA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

export default MUJOnlineMBAPage;