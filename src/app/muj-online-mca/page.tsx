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
  FaGraduationCap,
  FaMoneyBillWave,
  FaPhone,
  FaShield,
  FaUser,
  FaUserTie,
  FaCheck,
  FaTrophy
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
    { id: "testimonials", label: "Success Stories" },
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

  // ==================== DATA ====================

  const faqData = [
    {
      question: "Is Manipal Online MCA valid and recognized for jobs?",
      answer: "Yes. MUJ Online MCA is UGC-entitled, NAAC A+ accredited, and treated equally with on-campus degrees. Your certificate does not mention 'online' and is recognized by all major employers globally. Many graduates have gotten promotions and salary hikes at top companies like TCS, Infosys, HCL, and Google."
    },
    {
      question: "What is the total fee structure and EMI support?",
      answer: "The total program fee is ₹1,58,000 for 2 years (4 semesters), payable semester-wise at ₹39,500 per semester. MUJ partners with financial institutions for zero or low-cost EMI options (typically 6-12 months) so you can learn now and pay gradually. Education loans are also available through banks."
    },
    {
      question: "Which specialization should I choose - AI, Cloud, or Cybersecurity?",
      answer: "Choose based on your interests and career goals: AI & Data Science and AI & ML are excellent for predictive roles in modern tech companies. Cloud Computing offers stable, high-demand paths in AWS, Azure roles. Cybersecurity is ideal if you want to be a security specialist or ethical hacker. We recommend taking the free career counseling session to decide."
    },
    {
      question: "How does the online learning platform work?",
      answer: "You get login credentials to the Online Manipal platform to access recorded classes (available 24/7), live sessions (mostly weekends), e-content modules, lab exercises, assignments, discussion forums, and a dedicated mobile app. Technical support is available 24/5."
    },
    {
      question: "What career support and job placement does MUJ offer?",
      answer: "Manipal's career services include one-on-one resume coaching, mock interviews, LinkedIn profile optimization, access to job portals, and connections to 500+ hiring partners. We host monthly recruitment drives. Alumni report average salary increments of 30-50% after graduation."
    },
    {
      question: "Is Manipal Online MCA worth it for working professionals?",
      answer: "Absolutely. It allows you to earn a premium MCA degree without a career break, apply new skills to your current job immediately, and access a national network of 5000+ professionals. Most working professionals report promotions, salary hikes (average 8-12 LPA post-graduation), and better job security within 6 months of completion."
    },
    {
      question: "What are the eligibility criteria?",
      answer: "Bachelor's degree from any recognized university with minimum 50% aggregate marks (45% for reserved categories). Mathematics as a subject in Class 12 or graduation is required. Final-year graduates can apply. There's no entrance exam; merit-based admission."
    },
    {
      question: "Can I work full-time while studying?",
      answer: "Yes, that's the main advantage! Classes are held on weekends (Saturday-Sunday) and all lectures are recorded. Most students balance full-time jobs with their MCA. Time commitment is 15-20 hours per week."
    }
  ];

  const specializations = [
    {
      name: "AI & Data Science",
      description: "Master predictive analytics, deep learning, big data, and neural networks. Learn tools like Python, TensorFlow, and Spark for real-world data challenges.",
      icon: FaBrain,
      careers: "Data Scientist, BI Analyst, ML Engineer, Analytics Manager",
      companies: "Google, Amazon, Microsoft, Flipkart, PhonePe"
    },
    {
      name: "AI & Machine Learning",
      description: "Deep dive into advanced neural networks, computer vision, NLP, and reinforcement learning. Build production-grade AI models.",
      icon: FaGears,
      careers: "AI Specialist, ML Engineer, NLP Scientist, AI Researcher",
      companies: "DeepMind, OpenAI, IBM, Accenture, Cognizant"
    },
    {
      name: "Cloud Computing",
      description: "Learn AWS, Microsoft Azure, GCP architecture, virtualization, serverless computing, and DevOps. Get cloud certification ready.",
      icon: FaCloud,
      careers: "Cloud Architect, DevOps Engineer, Cloud Solutions Specialist, Systems Architect",
      companies: "AWS, Microsoft Azure, Google Cloud, Dell, Cisco"
    },
    {
      name: "Cybersecurity",
      description: "Master ethical hacking, network security, cryptography, digital forensics, and penetration testing. Become a security expert.",
      icon: FaShield,
      careers: "Cybersecurity Analyst, Security Consultant, Ethical Hacker, SOC Manager",
      companies: "Cisco, Fortinet, CrowdStrike, Indian Banks, Government Agencies"
    },
  ];

  const syllabus = {
    semester1: [
      "Computer Fundamentals & Digital Systems",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems",
      "Discrete Mathematics & Algorithms",
      "System Analysis & Design",
      "Practical Labs"
    ],
    semester2: [
      "Data Structures & Applications",
      "Operating Systems & Kernel Programming",
      "Advanced Java & Design Patterns",
      "Web Technologies (HTML, CSS, JavaScript, React)",
      "Software Engineering & SDLC",
      "Python Programming for Data Science"
    ],
    semester3: [
      "Specialization Elective 1 (Choose from your specialization)",
      "Specialization Elective 2",
      "Machine Learning Basics & Applications",
      "Cloud Architecture Foundations",
      "Cybersecurity Fundamentals",
      "Project Work (Real-world application)"
    ],
    semester4: [
      "Advanced Specialization Electives",
      "Industry Project / Internship (4-6 weeks)",
      "Research Seminar & Thesis",
      "Comprehensive Final Assessment",
      "Career Preparation & Certifications"
    ]
  };

  const careerRoles = [
    "Software Developer / Engineer",
    "AI/ML Engineer",
    "Data Scientist",
    "Cloud Solutions Architect",
    "Cybersecurity Analyst",
    "Full-Stack Developer",
    "DevOps Engineer",
    "IT Project Manager",
    "System Analyst",
    "Backend Engineer"
  ];

  const admissionSteps = [
    { step: 1, title: "Register on Online Manipal Portal", desc: "Visit the official website, verify your email/phone, and create an account with basic details." },
    { step: 2, title: "Fill Complete Application Form", desc: "Provide your academic and professional details accurately. Take time to explain your career goals." },
    { step: 3, title: "Upload Required Documents", desc: "Upload mark sheets (10th, 12th, graduation), government ID, and passport photos." },
    { step: 4, title: "Pay Application Fee", desc: "Complete the application by paying the ₹500 application fee online. Money-back guarantee if not selected." },
    { step: 5, title: "Receive Offer & Begin Program", desc: "Upon selection (usually within 7 days), receive your offer letter and complete program fee payment (full, semester-wise, or EMI)." },
    { step: 6, title: "Start Your Learning Journey", desc: "Get your LMS credentials, attend orientation webinar, and join your batch. Live classes begin within 2 weeks." }
  ];

  const highlights = [
    {
      icon: FaCertificate,
      title: "UGC-Entitled & NAAC A+ Accredited",
      desc: "Degree holds the same value as on-campus MCA worldwide. Globally recognized by employers and universities."
    },
    {
      icon: FaBookOpen,
      title: "Industry-Ready Curriculum",
      description: "Live classes, real-world case studies, capstone projects, and internship with actual companies. Learn what industry needs."
    },
    {
      icon: FaUserTie,
      title: "Built for Working Professionals",
      desc: "Weekend live sessions (Saturday-Sunday) + recorded lectures available 24/7. Balance career and studies effortlessly."
    },
    {
      icon: FaUser,
      title: "Dedicated Student Support & Career Coaching",
      desc: "Academic mentors, career coaches, 24/5 technical support, and placement assistance through 500+ hiring partners."
    }
  ];

  const feeCards = [
    {
      icon: FaMoneyBillWave,
      title: "Transparent & Affordable Fee",
      desc: "Total ₹1,58,000 (₹39,500/semester) - significantly lower than on-campus programs which cost ₹3-7 lakhs."
    },
    {
      icon: FaChartLine,
      title: "EMI & Education Loans Available",
      desc: "0% or low-cost EMI (6-12 months) through partners. Flexible repayment matched to your salary hikes."
    },
    {
      icon: FaCheck,
      title: "All-Inclusive Pricing (No Hidden Charges)",
      desc: "Includes LMS access, e-content, exams, certifications, placement support, and student resources."
    },
    {
      icon: FaBriefcase,
      title: "Strong ROI - Salary Increase",
      desc: "Average 30-50% salary hike post-graduation. Total investment recovered within 12-18 months of employment."
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Senior Data Scientist at Google",
      company: "Google",
      salary: "₹20L annually",
      story: "Started as Software Engineer at ₹8L. After MCA in AI & Data Science, promoted to Senior Data Scientist. Salary doubled within 8 months."
    },
    {
      name: "Rohit Patel",
      role: "Cloud Solutions Architect at AWS",
      company: "AWS",
      salary: "₹22L+ annually",
      story: "Switched from backend development using Cloud Computing specialization. Now leads cloud migrations for enterprise clients."
    },
    {
      name: "Neha Gupta",
      role: "Cybersecurity Manager at Infosys",
      company: "Infosys",
      salary: "₹18L annually",
      story: "Career pivot from software QA to security. MCA Cybersecurity opened doors to leadership roles at top security firms."
    },
    {
      name: "Arun Kumar",
      role: "Senior AI/ML Engineer at Microsoft",
      company: "Microsoft",
      salary: "₹24L+ annually",
      story: "5 years as software engineer. MCA in AI & ML accelerated career. Now building AI products for Microsoft India."
    }
  ];

  const comparisonTable = [
    { feature: "Format", online: "100% Online", traditional: "Campus-based" },
    { feature: "Duration", online: "2 Years", traditional: "2 Years" },
    { feature: "Total Fee", online: "₹1,58,000", traditional: "₹3,00,000 - ₹7,00,000" },
    { feature: "Classes", online: "Weekends + Recorded", traditional: "Weekdays Full-time" },
    { feature: "Job Compatibility", online: "Perfect (15-20 hrs/week)", traditional: "Requires break" },
    { feature: "Recognition", online: "UGC Entitled, NAAC A+", traditional: "UGC Approved (varies)" },
    { feature: "Specializations", online: "4 High-demand tracks", traditional: "General or limited" },
    { feature: "Placement Support", online: "500+ hiring partners", traditional: "Campus only" }
  ];

  return (
    <div>
      <Head>
        {/* ==================== CRITICAL SEO UPDATES ==================== */}
        
        {/* Primary Meta Tags */}
        <title>Online MCA - Manipal University Jaipur | UGC Approved, NAAC A+ | 2-Year Program</title>
        <meta 
          name="description" 
          content="Manipal University Jaipur's UGC-approved Online MCA (2-year) with AI, Data Science, Cybersecurity, Cloud Computing specializations. NAAC A+ accredited. Flexible learning for working professionals. ₹1.58L with EMI options. Apply now!"
        />
        <meta 
          name="keywords" 
          content="Online MCA, Manipal Online MCA, MCA for Working Professionals, UGC Approved Online MCA, Best Online MCA India, NAAC A+ MCA, MCA AI Data Science, Online MCA Cybersecurity, MCA Flexible Learning, Online MCA Fees India"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://unifostedu.com/muj-online-mca" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/muj-online-mca" />
        <meta property="og:title" content="Manipal Online MCA | UGC Approved, NAAC A+ | 2-Year Program" />
        <meta property="og:description" content="Top-ranked Online MCA from Manipal University Jaipur with AI, Data Science, Cybersecurity specializations. Perfect for working professionals. ₹1.58L with EMI." />
        <meta property="og:image" content="https://unifostedu.com/images/manipal-mca-og.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="UNIFOST" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://unifostedu.com/muj-online-mca" />
        <meta name="twitter:title" content="Manipal Online MCA - Best for Working Professionals" />
        <meta name="twitter:description" content="UGC-Approved 2-Year Online MCA. AI, Data Science, Cybersecurity specializations. Apply Now!" />
        <meta name="twitter:image" content="https://unifostedu.com/images/manipal-mca-twitter.webp" />
        
        {/* Additional Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="UNIFOST" />
        <meta name="publisher" content="UNIFOST" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur, Rajasthan" />
        
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
                  alt="Manipal University Jaipur Logo" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
                />
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open navigation menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
                
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                  aria-label="Call us at 7042646766"
                > 
                  <FaPhone className="text-base sm:text-lg" />
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call</span>
                </a>
                
                <a
                  href="tel:+917042646766"
                  className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                  aria-label="Call us"
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
                alt="Manipal University Jaipur Online MCA student learning on flexible schedule with live and recorded classes"
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

                  {/* MAIN H1 - Only one H1 on page */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block">Online MCA Program</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Manipal University Jaipur - UGC Approved
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    UGC-approved 2-year online Master of Computer Applications with flexible learning, industry-aligned specializations in AI, Data Science, Cybersecurity & Cloud Computing, and dedicated career support from NAAC A+ accredited Manipal University Jaipur.
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
                        <FaCheck className="text-orange-400" />
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
                  What is Manipal Online MCA Program?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  India's premier online MCA degree designed for ambitious tech professionals who want to advance their careers without compromising on quality or flexibility.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
                    alt="Manipal University Jaipur Rajasthan campus main building aerial view"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The <strong>Online MCA from Manipal University Jaipur (MUJ)</strong> is a postgraduate program designed for aspiring IT professionals. As a <strong>UGC-entitled and NAAC A+ accredited</strong> institution, MUJ ensures the online degree is recognized globally and valued equally by top employers.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The program is ideal for both recent graduates and working professionals who want to upgrade their skills without pausing their careers.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Flexible Learning:</strong> Study at your own pace with live weekend classes and recorded lectures (24/7 access).</li>
                    <li><strong>Industry-Aligned Curriculum:</strong> Built with input from tech leaders - focused on in-demand skills.</li>
                    <li><strong>Career Transformation:</strong> Dedicated placement support connecting you with 500+ hiring partners.</li>
                    <li><strong>Affordable & Accessible:</strong> ₹1.58L total with flexible EMI payment options (zero or low-cost).</li>
                  </ul>
                  <a href="#specializations" className="text-orange-600 hover:text-orange-700 font-semibold inline-block mt-2">
                    Explore our 4 specializations →
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Program at a Glance</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: FaClock, title: "Duration", desc: "2 Years (4 Semesters)" },
                    { icon: FaMoneyBillWave, title: "Total Fee", desc: "₹1,58,000" },
                    { icon: FaGraduationCap, title: "Eligibility", desc: "Bachelor's (50%)" },
                    { icon: FaAward, title: "Recognition", desc: "UGC Entitled, NAAC A+" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                      <item.icon className="text-orange-600 text-3xl mb-2 mx-auto" />
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  MUJ Online MCA vs Traditional MCA - Side by Side
                </h2>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Feature</th>
                        <th className="px-4 py-3 text-left font-bold">MUJ Online MCA</th>
                        <th className="px-4 py-3 text-left font-bold">Traditional MCA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonTable.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-orange-50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-gray-900">{row.feature}</td>
                          <td className="px-4 py-3 text-orange-600 font-medium">{row.online}</td>
                          <td className="px-4 py-3 text-gray-700">{row.traditional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section id="highlights" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Manipal Online MCA?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need to succeed in tech, without the traditional classroom constraints.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex items-start gap-4">
                      <item.icon className="text-orange-600 text-4xl flex-shrink-0 mt-1" />
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
          <section id="specializations" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Future-Ready Specializations
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose a specialization aligned with your career goals. Each tracks features expert faculty, industry projects, and certifications.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {specializations.map((spec, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="flex items-center gap-4 mb-3">
                      <spec.icon className="text-4xl text-orange-600 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900">{spec.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{spec.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Career Paths:</strong> {spec.careers}</p>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Hiring Companies:</strong> {spec.companies}</p>
                    </div>
                    <a href="#admission" className="text-orange-600 hover:text-orange-700 font-semibold text-sm mt-3 inline-block">
                      Apply for this specialization →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Syllabus Section */}
          <section id="syllabus" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Program Curriculum - What You'll Learn
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  4-semester curriculum covering foundational concepts to advanced technologies. Each course includes theory, practical labs, and real-world projects.
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
                        <div key={index} className="flex items-start gap-3">
                          <FaCheck className="text-orange-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </Tabs.Content>
                ))}
              </Tabs.Root>
            </div>
          </section>

          {/* Eligibility Section */}
          <section id="eligibility" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility & Admission Criteria
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaCheck className="text-orange-600" />
                    Eligibility Requirements
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Bachelor's degree in any discipline from a recognized university</li>
                    <li>Minimum 50% aggregate marks (45% for SC/ST/OBC candidates)</li>
                    <li>Mathematics as a subject in Class 12 or graduation is required</li>
                    <li>Final-year students can apply</li>
                    <li>No entrance exam - Merit-based admission</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaCheck className="text-orange-600" />
                    Required Documents
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>10th, 12th, and graduation mark sheets (originals/verified)</li>
                    <li>Government-issued ID proof (Aadhaar, PAN, Passport)</li>
                    <li>Passport-size photographs (4-5)</li>
                    <li>Work experience letters (if applicable)</li>
                    <li>Caste certificate (if seeking reserved category)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Fees Section */}
          <section id="fees" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Fees & Payment Options
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Transparent, affordable pricing with flexible payment options so cost never stops you from advancing your career.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                {feeCards.map((card, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                    <div className="flex items-start gap-4">
                      <card.icon className="text-orange-600 text-3xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-gray-700">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Total Program Cost Breakdown</h3>
                <p className="text-lg mb-6 opacity-90">₹1,58,000 for 2-Year Online MCA</p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="opacity-80">Per Semester</p>
                    <p className="text-2xl font-bold">₹39,500</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="opacity-80">Monthly EMI (0%)*</p>
                    <p className="text-2xl font-bold">₹6,000</p>
                  </div>
                </div>
                <p className="text-xs opacity-75 mt-4">*EMI terms vary. Flexible plans available through partner institutions.</p>
              </div>
            </div>
          </section>

          {/* Career Scope Section */}
          <section id="career" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career Scope & Opportunities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  An MCA from Manipal opens doors to high-paying tech leadership roles in India's fastest-growing IT industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaBriefcase className="text-orange-600" />
                    High-Demand Job Roles
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                    {careerRoles.map((role, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                        <FaCheck className="text-orange-500 flex-shrink-0" />
                        <span className="font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1766473759/muj-carrer_e52xkh.png"
                    alt="Career growth and salary progression opportunities after Manipal Online MCA degree"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Average Salary & Growth Post-MCA</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <FaTrophy className="text-3xl text-orange-600 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Average Starting Salary</p>
                    <p className="text-3xl font-bold text-orange-600">₹12-15 LPA</p>
                  </div>
                  <div className="text-center">
                    <FaChartLine className="text-3xl text-orange-600 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Salary After 2 Years</p>
                    <p className="text-3xl font-bold text-orange-600">₹18-25 LPA</p>
                  </div>
                  <div className="text-center">
                    <FaTrophy className="text-3xl text-orange-600 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Growth Rate</p>
                    <p className="text-3xl font-bold text-orange-600">30-50%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Success Stories - MUJ Online MCA Alumni
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Real stories from graduates who transformed their careers with our program.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {successStories.map((story, i) => (
                  <div key={i} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{story.name}</h4>
                        <p className="text-sm text-orange-600 font-semibold">{story.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3">"{story.story}"</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">{story.company}</span>
                      <span className="text-green-600 font-bold">{story.salary}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Process Section */}
          <section id="admission" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Simple 6-Step Admission Process
                </h2>
                <p className="text-gray-600">From application to enrollment - completed in just 2 weeks!</p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {admissionSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-10">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  Start Your Application Now →
                </button>
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
                <p className="text-gray-600">Everything you need to know about Manipal Online MCA</p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none cursor-pointer hover:bg-orange-50 transition-colors"
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
                          <div className="px-6 py-4 bg-orange-50 border-t border-gray-200">
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

          {/* Footer */}
          <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden mt-8">
            {/* Footer content from original */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
              <p>&copy; {new Date().getFullYear()} Manipal University Online. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-2">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
            </div>
          </footer>
        </main>
      </div>

      {/* Modals */}
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