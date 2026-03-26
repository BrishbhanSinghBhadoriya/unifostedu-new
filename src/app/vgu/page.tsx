'use client';
import AccreditationSection from '@/components/AccreditationSection';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import HeroSection from '@/components/HeroSection';
import PageContent from '@/components/PageContent/PageContent';
import { Button } from '@/components/ui/button';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from "framer-motion";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import UniversityDateSlider from '@/components/UniversityDateSlider';
import {
  FaBars,
  FaBookOpen,
  FaGlobe,
  FaLightbulb,
  FaUserTie
} from "react-icons/fa6";
const Vgu = () => {
  const selectionItem = [
    { id: "introduction", label: "Introduction" },
    { id: "campus-tour", label: "Campus Tour (Images, Videos)" },
    { id: "explore-courses", label: "Explore Online Courses and Fee Structure" },
    { id: "key-highlights", label: "Key Highlights" },

    { id: "admission-process", label: "Admission Process" },
    { id: "placement-partners", label: "Placement Partners" },
    { id: "placement-record", label: "Placement Record" },
    { id: "student-review", label: "Student Reviews" },
    { id: "faqs", label: "FAQs" },

    { id: "conclusion", label: "Conclusion" }
  ];

  const [activeSection, setActiveSection] = useState(selectionItem[0]?.id ?? null);

  useEffect(() => {
    if (!selectionItem.length) return undefined;

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

    selectionItem.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      selectionItem.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [selectionItem]);


  const ugCourses = [
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board ",
      fees: "1,32,000/-",
      specialization: "General, Data Science, Blockchain Technology, Artificial Intelligence, Cloud Tehnology & Information Security, UX",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
      alt: "BCA In VGU",
      universityShort: "VGU",
    },
    {
      course: "Bachelore of Arts(BA)",
      duration: "3 Years",
      eligibility: "10+2 in any stream",
      fees: "72,000/-",
      specialization: "Economics + Public Policy + Computer Applications, Public Policy + English, English + History + Political Science, Computer Applications + Public Policy/IR, Political Science + International Relations + Public Policy,",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp",
      alt: "BA In VGU",
      universityShort: "VGU",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board.",
      fees: "1,32,000/-",
      specialization: "General, Digital Marketing, Retail Management, Fintech",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
      alt: "BBA In VGU",
      universityShort: "VGU",

    },

  ];

  const pgCourses = [
    {
      course: "Masters of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: '1,50,000 - 2,40,000',
      specialization: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'Information Technology Management', 'Helthcare Management', 'Agribusiness Management', 'International Business'],
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "MBA In VGU",
      universityShort: "VGU",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University.",
      fees: "1,50,000/-",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
      alt: "MCA In VGU",
      universityShort: "VGU",
    },
    {
      course: "Master of Arts (English)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University.",
      fees: "72,000/-",
      specialization: "English",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma_ywzsnb.webp",
      alt: "MA In VGU",
      universityShort: "VGU",
    },
    {
      course: "Master of Science (Maths)",
      duration: "2 Years",
      eligibility: "Graduates with BA / BSc degree with Mathematics as one of the three main subjects.",
      fees: "72,000/-",
      specialization: " Mathematics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      alt: "MSc In VGU",
      universityShort: "VGU",
    },
    {
      course: "Master of Arts Journalism and Mass Communication (MAJMC)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: "72,000/-",


      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      alt: "MAJMC In VGU",
      universityShort: "VGU",
    }

  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedSpecializations, setExpandedSpecializations] = useState({});

  const faqData = [

    {
      question: "Is VGU Online UGC-approved?",
      answer:
        "Yes. VGU Online (Vivekananda Global University Online) offers UGC approved online degrees VGU for all its programs, including the Online MBA, Online BBA, Online MCom from VGU, and Online BCom from VGU. All degrees hold the same value as regular on-campus qualifications."
    },
    {
      question: "Is VGU Online a NAAC-accredited university?",
      answer:
        "Yes. Vivekananda Global University is a NAAC-accredited university, ensuring high academic quality, strong teaching standards, and credible online degree programs."
    },
    {
      question: "What online courses does VGU Online offer?",
      answer:
        "VGU Online Courses include: • Online MBA from Vivekananda Global University • Online BBA from Vivekananda Global University • Online MCom from VGU • Online BCom from VGU • Additional undergraduate and postgraduate online programs"
    },
    {
      question: "Is the online degree from Vivekananda Global University valid for jobs?",
      answer:
        "Absolutely. Every online degree from Vivekananda Global University is UGC-approved and widely accepted by government organizations, private companies, and global employers."
    },
    {
      question: "How do I apply for admission to VGU Online?",
      answer:
        "Follow the 4-step admission process: 1. Select your program 2. Fill the online form 3. Upload documents & pay the fee 4. Receive admission confirmation and LMS access"
    },
    {
      question: "Are VGU Online programs suitable for working professionals?",
      answer:
        "Yes. VGU Online University offers flexible learning with recorded lectures, live classes, and 24/7 LMS access—making it ideal for working professionals seeking affordable UGC approved online degrees in India."
    },
    {
      question: "Does VGU Online offer placement assistance?",
      answer:
        "Yes. VGU Online provides resume-building support, interview training, job-readiness sessions, and access to top placement partners like TCS, Deloitte, Infosys, Amazon, IBM, and more."
    },
    {
      question: "What is the fee structure for VGU Online courses?",
      answer:
        "The fee structure is affordable, with EMI options available. Fees vary by program, but all courses are designed to offer maximum value at a competitive cost."
    },
    {
      question: "Are the classes live or recorded?",
      answer:
        "VGU Online Courses include both live interactive sessions and recorded lectures, ensuring a flexible and convenient learning experience."
    },
    {
      question: "Can I study from outside India?",
      answer:
        "Yes. Students from anywhere in the world can enroll in VGU Online Courses, as the programs are fully digital and globally accessible."
    },

  ];
  useEffect(() => {


    const timer = setTimeout(() => {
      setOpenModal({ type: 'apply' } as any)
    }, 3000)
    return () => clearTimeout(timer);


  }, [])
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<{ type: string, program?: string } | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // expandedSpecializations already declared above; remove duplicate declaration
  useState<Record<string, boolean>>({});

  const toggleSpecialization = (courseId: string) => {
    setExpandedSpecializations(prev => ({
      ...prev,
      [courseId]: !prev[courseId as keyof typeof prev],
    }));
  };



  return (
    <>

      <title>VGU University - Courses, Admissions, Enquiry</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />


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
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgulogo_jrxgjd.webp"
                  alt="Logo_vgu"
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
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#821812] rounded-full text-white hover:bg-[#821812] transition-colors"
                >
                  📞
                </a>

                {/* Apply Button */}
                <button
                  onClick={() => setOpenModal({ type: 'apply' } as any)}
                  className="bg-[#821812] hover:bg-black-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-500/25 text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline ">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <div className="flex">
      
          {/* Desktop Sidebar */}
          
          <main className="flex-1 min-w-0 w-full"> 
              
              <div className="pt-10 lg:pt-20">
                        <UniversityDateSlider
                          currentDate="January 2026 Session"
                          nextUpdateDate="Applications Closing SOON"
                          information="Limited Seats Available - Apply Now!"
                          special="Average of 50% salary growth"
                          color="#dc2626"
                          backgroundColor="#fee2e2"
                          textColor="#991b1b"
                        />  
                      </div>
            <div className="overflow-x-hidden pt-0">

              <section
                id="Admission"
                className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
              >
                {/* Background Image Container with improved responsiveness */}
                <div className="absolute inset-0">
                  {/* Picture element for different screen sizes */}
                  <picture className="w-full h-full">
                    {/* Mobile - Portrait optimized crop */}
                    <source
                      media="(max-width: 640px)"
                      srcSet="https://res.cloudinary.com/didkrwhbu/image/upload/c_fill,g_center,w_640,h_1000,q_auto,f_auto/v1762327870/vguonline_orn06m.webp"
                    />
                    {/* Tablet - Balanced crop */}
                    <source
                      media="(max-width: 1024px)"
                      srcSet="https://res.cloudinary.com/didkrwhbu/image/upload/c_fill,g_center,w_1024,h_800,q_auto,f_auto/v1762327870/vguonline_orn06m.webp"
                    />
                    {/* Desktop - Wide crop */}
                    <img
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/c_fill,g_center,w_1920,h_1080,q_auto,f_auto/v1762327870/vguonline_orn06m.webp"
                      alt="VGU Online University"
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>

                  {/* Gradient Overlay - Responsive */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 sm:from-black/60 sm:via-black/30 sm:to-black/50"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Main Content Area */}
                  <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32 sm:pb-36 md:pb-40">
                    <div className="max-w-7xl mx-auto w-full">
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left Content */}
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                          className="flex-1 max-w-2xl text-white text-center lg:text-left"
                        >
                          <div className="space-y-4 sm:space-y-6">
                            {/* Badge */}
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                              className="inline-block"
                            >
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">

                              </span>
                            </motion.div>



                            {/* Description */}
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.6 }}
                              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >

                            </motion.p>

                            {/* Features */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8, duration: 0.6 }}
                              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-green-400"></span>
                                <span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-green-400"></span>
                                <span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-green-400"></span>
                                <span></span>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons Container - Fixed at bottom */}
                  <div className="relative z-20 pb-6 sm:pb-8 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="max-w-7xl mx-auto"
                    >
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                        <button
                          className="bg-white  hover:bg-[#821812] text-black hover:text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap cursor-pointer"
                          onClick={() => setOpenModal({ type: 'apply' } as any)}
                        >
                          Apply Now
                        </button>

                        <button
                          className="bg-white  hover:bg-[#821812] text-black hover:text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap cursor-pointer"
                          onClick={() => setOpenModal({ type: 'Enquire Now' } as any)}
                        >
                          Enquire Now
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Modal Preview (optional) */}
                {openModal && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {openModal.type === 'apply' ? 'Apply Now' : 'Enquire Now'}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Modal content will be here
                      </p>
                      <button
                        onClick={() => setOpenModal(null)}
                        className="w-full bg-[#821812] text-white py-3 rounded-full font-semibold hover:bg-[#6a1310] transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </section>
              <section id='introduction' className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">

                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    VGU Online – Vivekananda Global University Online
                  </h2>

                  {/* Intro Paragraph */}
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    VGU Online, also known as Vivekananda Global University Online, is one of India’s
                    fastest-growing and most trusted platforms for UGC-approved online degrees from VGU.
                    As a NAAC-accredited university, VGU Online is recognized for academic excellence,
                    modern digital learning, and globally accepted qualifications. Students can choose
                    from industry-focused programs such as the Online MBA, Online BBA, Online MCom, and
                    Online BCom from VGU—each offering flexibility, affordability, and strong career value.
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border mb-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                      About VGU Online – Vivekananda Global University Online
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      VGU Online (Vivekananda Global University Online) is the digital education platform of
                      Vivekananda Global University, a NAAC-accredited institution known for strong academics
                      and industry partnerships. Through VGU Online University, students can access high-quality,
                      UGC-approved online degrees without relocating to a physical campus.
                      <br /><br />
                      Every online degree from VGU offers global recognition, modern curriculum, case studies,
                      real-world projects, and a student-first learning environment—making VGU Online one of the
                      best online universities in India.
                    </p>

                    {/* Program List */}
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Popular VGU Online Programs:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                        <li>Online MBA from Vivekananda Global University</li>
                        <li>Online BBA from Vivekananda Global University</li>
                        <li>Online MCom from VGU</li>
                        <li>Online BCom from VGU</li>
                        <li>Other industry-focused VGU Online courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>




              <section id='campus-tour' className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">

                  {/* Section Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    VGU Online Campus Tour – Explore Digital Learning Excellence
                  </h2>

                  {/* GRID WRAPPER */}
                  <div className="grid md:grid-cols-2 gap-10">

                    {/* BLOCK 1 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Explore VGU’s Digital Classrooms
                      </h3>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        The virtual tour highlights modern, interactive digital classrooms designed for programs such as:
                      </p>

                      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                        <li>Online MBA from Vivekananda Global University</li>
                        <li>Online BBA from Vivekananda Global University</li>
                        <li>Online MCom from VGU</li>
                        <li>Online BCom from VGU</li>
                      </ul>

                      <p className="text-gray-700 leading-relaxed mb-2">These online classrooms include advanced features like:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>HD live lectures</li>
                        <li>Real-time chat and doubt solving</li>
                        <li>Smart presentations and screen sharing</li>
                        <li>Polls, quizzes, and breakout activities</li>
                      </ul>

                      <p className="text-gray-700 leading-relaxed mt-4">
                        This setup provides the same engaging and interactive experience as traditional on-campus classes.
                      </p>
                    </div>

                    {/* BLOCK 2 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        24/7 E-Libraries & Digital Study Resources
                      </h3>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        One of the best parts of the VGU Online Campus Tour is the extensive digital library.
                        Students enrolled in any online degree from Vivekananda Global University get access to:
                      </p>

                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Thousands of e-books</li>
                        <li>Research papers</li>
                        <li>Academic journals</li>
                        <li>Case studies</li>
                        <li>Subject-wise reading materials</li>
                      </ul>

                      <p className="text-gray-700 leading-relaxed mt-4">
                        These resources support all VGU Online Courses, making learning easier, more flexible,
                        and research-friendly.
                      </p>
                    </div>

                    {/* BLOCK 3 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Virtual Labs for Hands-on Learning
                      </h3>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        The virtual tour also includes access to virtual laboratories, especially useful for students in commerce, management, technology, or analytics programs. These labs allow learners to:
                      </p>

                      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                        <li>Apply concepts through simulations</li>
                        <li>Practice tools and techniques</li>
                        <li>Work on guided exercises</li>
                      </ul>

                      <p className="text-gray-700 leading-relaxed">
                        Programs like the Online MCom from VGU and Online BCom from VGU benefit greatly from these labs,
                        as they help students build practical financial and analytical skills.
                      </p>
                    </div>

                    {/* BLOCK 4 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Faculty Introductions & Webinar Hall
                      </h3>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        The VGU Online Campus Tour also features:
                      </p>

                      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                        <li>Faculty introduction videos</li>
                        <li>Guest lecture sessions</li>
                        <li>Masterclasses from industry experts</li>
                        <li>Webinar recordings</li>
                        <li>Orientation modules</li>
                      </ul>

                      <p className="text-gray-700 leading-relaxed">
                        These elements help students understand the teaching quality, academic expertise, and mentorship
                        culture at Vivekananda Global University Online, further proving its strength as a NAAC accredited
                        online university with high standards.
                      </p>
                    </div>

                  </div>
                </div>
              </section>



              <div>
                <AccreditationSection
                  title=" Accreditations and Recognitions, VGU University?"
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
                    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
                    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
                    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp", alt: "NAAC", name: "NAAC" },
                    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
                    { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bci_fhxjax.webp", alt: "BCI", name: "Bar Council of India (BCI)" },
                  ]}
                  internationalRecognition={[]}
                  successStories={[]}
                />
                <div className="mt-3 flex justify-center">
                  <Button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-1/2 mx-auto bg-[#821812] hover:from-[#821812] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </div>

              </div>
              <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">

                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Why Students Choose VGU Online University
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    Choosing VGU Online University means choosing a trusted, NAAC-accredited, and
                    industry-recognized online education platform. Here’s why thousands of students
                    prefer Vivekananda Global University Online for UGC approved online degrees:
                  </p>

                  {/* Grid Start */}
                  <div className="space-y-8">

                    {/* 1 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        1. UGC-Approved Online Degrees (Valid Everywhere)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        All VGU Online Courses follow UGC’s Online Education Regulations. This means every
                        degree—including the Online MBA from Vivekananda Global University, Online MCom
                        from VGU, and Online BCom from VGU—is valid and accepted by employers, government
                        bodies, and universities worldwide. <br /><br />
                        This is why many students call VGU the best online university in India – VGU Online,
                        especially for affordable UGC approved online degrees in India.
                      </p>
                    </div>

                    {/* 2 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        2. NAAC-Accredited Online University
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Vivekananda Global University Online is a NAAC-accredited online university, known for
                        high academic standards, strong faculty, and excellent student support. This
                        accreditation places VGU Online University among the top online degree programs in India.
                      </p>
                    </div>

                    {/* 3 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        3. Industry-Aligned Curriculum
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Every online degree from Vivekananda Global University is created with experts from
                        various industries. The curriculum focuses on:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                        <li>Business analytics</li>
                        <li>Finance and commerce</li>
                        <li>Management and leadership</li>
                        <li>Digital transformation</li>
                        <li>Entrepreneurship</li>
                        <li>Technology-driven learning</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        Courses like the Online MBA from Vivekananda Global University and Online BBA from
                        Vivekananda Global University include practical projects, case studies, and
                        real-world assignments.
                      </p>
                    </div>

                    {/* 4 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        4. Designed for Working Professionals
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        VGU Online Courses are flexible and easy to manage with work or personal
                        responsibilities. Students get 24/7 access to:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Study materials</li>
                        <li>Recorded lectures</li>
                        <li>Live classes</li>
                        <li>Assignments</li>
                        <li>Exams</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        This flexibility makes VGU ideal for working learners choosing programs like the
                        Online MBA, Online MCom from VGU, and Online BCom from VGU.
                      </p>
                    </div>

                    {/* 5 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        5. Affordable Fees + EMI Options
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        VGU Online provides some of the most affordable UGC approved online degrees in India.
                        EMI and flexible payment options make higher education accessible to everyone.
                      </p>
                    </div>

                    {/* 6 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        6. Advanced Digital Learning Platform
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Vivekananda Global University Online uses a modern LMS with:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Live online classes</li>
                        <li>Recorded video lectures</li>
                        <li>E-books and digital study materials</li>
                        <li>Assessments and quizzes</li>
                        <li>Discussion forums</li>
                        <li>Doubt-clearing support</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        This ensures a smooth and engaging learning experience throughout your VGU Online Courses.
                      </p>
                    </div>

                    {/* 7 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        7. Strong Support & Placement Assistance
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        VGU Online University offers strong academic and career support, including:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Resume building</li>
                        <li>Interview preparation</li>
                        <li>Job-readiness training</li>
                        <li>Placement assistance</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        This helps students of the Online MBA, Online BBA, Online MCom from VGU, and
                        Online BCom from VGU become confident and job-ready.
                      </p>
                    </div>

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
  The VGU Online Campus Tour gives students a simple, clear, and immersive experience of the digital world of Vivekananda Global University Online, one of India’s most trusted platforms for UGC approved online degrees VGU. Even though VGU Online University is fully online, it still offers the feel and excitement of a real university campus through its interactive, technology-rich virtual tour.
The virtual campus reflects the same quality, innovation, and global learning standards that make VGU Online one of the best online universities in India.
Through the campus tour, students can explore digital classrooms, study resources, and learning tools even before they take admission. With smooth navigation, high-quality visuals, and interactive features, learners get a real sense of what it’s like to study at Vivekananda Global University Online. This makes it easier for students to understand the learning system, teaching style, and overall experience before choosing their program.

 
  `}
                badgeText="UGC & AICTE Recognized | Innovation Driven | Global Learning"
                imgSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/vgu-uni_khh8pt.webp"
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
              <section id='explore-courses'></section>
              {/* Courses Section */}
              <section id="explore-courses" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      Explore <span className="bg-[#821812] bg-clip-text text-transparent">Online Programs</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Choose from industry-relevant programs designed for working professionals and fresh graduates
                    </p>
                  </div>

                  <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-12">

                    {/* Tabs */}
                    <div className="flex justify-center">
                      <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
                        {[
                          { value: "all", label: "All Programs" },
                          { value: "ug", label: "Undergraduate" },
                          { value: "pg", label: "Postgraduate" }
                        ].map((tab) => (
                          <Tabs.Trigger
                            key={tab.value}
                            value={tab.value}
                            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === tab.value
                                ? "bg-[#821812] text-white shadow-lg"
                                : "text-gray-700 hover:text-[#821812] hover:bg-white"
                              }`}
                          >
                            {tab.label}
                          </Tabs.Trigger>
                        ))}
                      </Tabs.List>
                    </div>

                    {/* Course Cards */}
                    <Tabs.Content value={activeTab} className="outline-none">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {(activeTab === "all"
                          ? [...ugCourses, ...pgCourses]
                          : activeTab === "ug"
                            ? ugCourses
                            : pgCourses
                        ).map((course, idx) => {

                          const courseId = `${activeTab}-${idx}`;

                          return (
                            <div key={courseId} className="group">
                              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                  <Image
                                    src={course.image}
                                    alt={course.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                  <div className="absolute bottom-4 left-4">
                                    <span className="bg-[#821812] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                      {course.universityShort}
                                    </span>
                                  </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                    {course.course}
                                  </h3>

                                  <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-2 text-sm">⏱️ {course.duration}</p>
                                    <p className="flex items-center gap-2 text-sm">🎓 {course.eligibility}</p>
                                    <p className="flex items-center gap-2 text-sm">💰 ₹{course.fees}</p>

                                    {/* Specialization */}
                                    {course.specialization && (
                                      <div>
                                        <p className={`text-sm ${!(expandedSpecializations as Record<string, boolean>)[courseId] && "line-clamp-2"}`}>
                                          {Array.isArray(course.specialization)
                                            ? course.specialization.join(", ")
                                            : course.specialization}
                                        </p>

                                        {(Array.isArray(course.specialization)
                                          ? course.specialization.join(", ").length > 80
                                          : course.specialization.length > 80) && (
                                            <button
                                              onClick={() => toggleSpecialization(courseId)}
                                              className="text-xs text-[#821812] font-semibold hover:underline mt-1"
                                            >
                                              {(expandedSpecializations as Record<string, boolean>)[courseId] ? "Show Less" : "Show More"}
                                            </button>
                                          )}
                                      </div>
                                    )}
                                  </div>

                                  {/* Apply Button */}
                                  <button
                                    onClick={() => setOpenModal({ type: "apply", program: course.course })}
                                    className="w-full bg-[#821812] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                  >
                                    Apply Now
                                  </button>
                                </div>

                              </div>
                            </div>
                          );
                        })}

                      </div>
                    </Tabs.Content>

                  </Tabs.Root>
                </div>
              </section>


              <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  {/* UG COURSES TABLE */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 sm:mb-8">
                    Undergraduate (UG) Courses
                  </h2>

                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto mb-12 sm:mb-16">
                    <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Course</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Duration</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Eligibility</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Fees</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Specialization</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Apply now</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {ugCourses.map((course, index) => (
                          <tr
                            key={index}
                            className="border-t hover:bg-blue-50 transition-all duration-200"
                          >
                            <td className="px-4 py-3 font-medium text-gray-800 text-sm sm:text-base">
                              {course.course}
                            </td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">{course.duration}</td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">{course.eligibility}</td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">{course.fees}</td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">
                              {course.specialization}
                            </td>
                            <td className="px-4 py-3">
                              <Button
                                onClick={() => setOpenModal({ type: 'apply' })}
                                className="bg-[#821812] hover:bg-black-600 text-white font-semibold px-3 py-2 rounded-full transition-all duration-300 text-xs"
                              >
                                Apply Now
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4 mb-8">
                    {ugCourses.map((course, index) => (
                      <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4 space-y-3">
                        <h3 className="font-bold text-gray-800 text-base border-b pb-2">{course.course}</h3>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-semibold">Duration:</span> <span className="text-gray-700">{course.duration}</span></div>
                          <div><span className="font-semibold">Eligibility:</span> <span className="text-gray-700">{course.eligibility}</span></div>
                          <div><span className="font-semibold">Fees:</span> <span className="text-gray-700">{course.fees}</span></div>
                          <div><span className="font-semibold">Specialization:</span> <span className="text-gray-700">{course.specialization}</span></div>
                          <div className="pt-2">
                            <Button
                              onClick={() => setOpenModal({ type: 'apply' })}
                              className="w-full bg-[#821812] hover:bg-black-600 text-white font-semibold py-2 rounded-full transition-all duration-300"
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* PG COURSES TABLE */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6 sm:mb-8">
                    Postgraduate (PG) Courses
                  </h2>

                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Course</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Duration</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Eligibility</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Fees</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Specialization</th>
                          <th className="px-4 py-2 text-left text-sm sm:text-base">Apply now</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {pgCourses.map((course, index) => (
                          <tr
                            key={index}
                            className="border-t hover:bg-green-50 transition-all duration-200"
                          >
                            <td className="px-4 py-3 font-medium text-gray-800 text-sm sm:text-base">
                              {course.course}
                            </td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">{course.duration}</td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">{course.eligibility}</td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">{course.fees}</td>
                            <td className="px-4 py-3 text-gray-700 text-sm sm:text-base">
                              {Array.isArray(course.specialization)

                                ? course.specialization.join(", ")
                                : course.specialization || "—"}
                            </td>
                            <td className="px-4 py-3">
                              <Button
                                onClick={() => setOpenModal({ type: 'apply' })}
                                className="bg-[#821812] hover:bg-black-600 text-white font-semibold px-3 py-2 rounded-full transition-all duration-300 text-xs"
                              >
                                Apply Now
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View for PG */}
                  <div className="md:hidden space-y-4">
                    {pgCourses.map((course, index) => (
                      <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4 space-y-3">
                        <h3 className="font-bold text-gray-800 text-base border-b pb-2">{course.course}</h3>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-semibold">Duration:</span> <span className="text-gray-700">{course.duration}</span></div>
                          <div><span className="font-semibold">Eligibility:</span> <span className="text-gray-700">{course.eligibility}</span></div>
                          <div><span className="font-semibold">Fees:</span> <span className="text-gray-700">{course.fees}</span></div>
                          <div><span className="font-semibold">Specialization:</span> <span className="text-gray-700">
                            {Array.isArray(course.specialization)
                              ? course.specialization.join(", ")
                              : course.specialization || "—"}
                          </span></div>
                          <div className="pt-2">
                            <Button
                              onClick={() => setOpenModal({ type: 'apply' })}
                              className="w-full bg-[#821812] hover:bg-black-600 text-white font-semibold py-2 rounded-full transition-all duration-300"
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">

                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Explore Online Courses
                  </h2>

                  {/* Intro Paragraph */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    VGU Online (Vivekananda Global University Online) offers a wide range of UGC approved
                    online degrees designed to help students build strong knowledge and practical skills.
                    As one of the best online universities in India, VGU Online University provides flexible
                    and career-focused programs suitable for students, working professionals, and lifelong
                    learners. With its advanced digital learning system, students can choose from some of
                    the top online degree programs in India and pick the course that matches their goals.
                    <br /><br />
                    With expert faculty, a modern LMS, and well-designed study material, VGU Online Courses
                    offer both academic quality and real-world relevance. Students can choose degrees like
                    the <strong>Online MBA from Vivekananda Global University</strong>,
                    <strong> Online BBA from Vivekananda Global University</strong>,
                    <strong> Online MCom from VGU</strong>, <strong>Online BCom from VGU</strong>,
                    and many other affordable UGC approved online degrees in India.
                  </p>

                  {/* UG Courses */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Undergraduate Online Courses (Simple English)
                    </h3>

                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        🎓 Online BBA from Vivekananda Global University
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The Online BBA program builds a strong base in business management, marketing, HR,
                        and operations. It prepares students for leadership roles or starting their own
                        business. As part of VGU Online Courses, it offers flexible learning with virtual
                        workshops and case studies.
                      </p>
                    </div>

                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        💼 Online BCom from VGU
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The Online BCom from VGU covers accounting, taxation, business analytics, and
                        corporate finance. It is one of the most affordable UGC approved online degrees
                        in India, helping students gain skills needed for careers in banking, finance, and
                        consulting.
                      </p>
                    </div>
                  </div>

                  {/* PG Courses */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Postgraduate Online Courses (Simple English)
                    </h3>

                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        🏆 Online MBA from Vivekananda Global University
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The Online MBA is the most popular program at VGU Online University and is known as
                        one of the top online degree programs in India. It offers specializations in
                        Marketing, HR, Finance, Business Analytics, and Operations. This program helps
                        working professionals improve their leadership and decision-making skills.
                      </p>
                    </div>

                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        📊 Online MCom from VGU
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The Online MCom from VGU is perfect for graduates who want deeper knowledge in
                        commerce, finance, and accounting. It includes advanced topics, data tools, and
                        case studies. As part of Vivekananda Global University Online, the degree is
                        respected and recognized by employers.
                      </p>
                    </div>
                  </div>

                  {/* Why Explore Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Why Explore VGU Online Courses? (Easy to Read)
                    </h3>

                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                      <li>100% UGC-approved online degrees VGU</li>
                      <li>NAAC-accredited university with strong academic quality</li>
                      <li>Affordable fees with EMI options</li>
                      <li>Globally recognized online degree from Vivekananda Global University</li>
                      <li>Curriculum designed with industry experts</li>
                      <li>24/7 LMS access with live and recorded classes</li>
                      <li>Placement support, internships, and career guidance</li>
                    </ul>
                  </div>

                  {/* Final Section */}
                  <div className="bg-gray-100 p-10 rounded-2xl shadow-sm border">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Shape Your Future with VGU Online
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you want to study for an Online MBA, an undergraduate program like the
                      Online BCom from VGU, or a management course like the Online BBA from
                      Vivekananda Global University, VGU Online offers the right mix of quality,
                      flexibility, and recognition.
                      <br /><br />
                      Start exploring VGU Online Courses today and begin your journey with one of the
                      best online universities in India – VGU Online, trusted for excellence,
                      innovation, and global standards.
                    </p>
                  </div>

                </div>
              </section>

              {/*  Add Quick Comparison Table */}
              <section id='QuickComparison' className="py-8 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                    <span className="text-[#821812]">Online vs Regular</span> Degree Comparison
                  </h2>

                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#821812] text-white">
                          <th className="p-4 text-left text-sm sm:text-base">Feature</th>
                          <th className="p-4 text-center text-sm sm:text-base">Vivekananda Global University (VGU)</th>
                          <th className="p-4 text-center text-sm sm:text-base">Regular Campus</th>
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
                            <td className="p-4 font-semibold text-sm sm:text-base">{feature}</td>
                            <td className="p-4 text-center text-sm sm:text-base">{online}</td>
                            <td className="p-4 text-center text-sm sm:text-base">{regular}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {[
                      ['UGC Recognition', '✅ Yes', '✅ Yes'],
                      ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
                      ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
                      ['Location', '✅ From Anywhere', '❌ Campus Only'],
                      ['Cost', '✅ More Affordable', '❌ Higher Fees'],
                      ['Placement Support', '✅ 100% Assistance', '✅ Available']
                    ].map(([feature, online, regular], i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <h3 className="font-bold text-gray-800 mb-3 text-base border-b pb-2">{feature}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-700">VGU Online:</span>
                            <span className="text-gray-800">{online}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-700">Regular Campus:</span>
                            <span className="text-gray-800">{regular}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex justify-center">
                  <Button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-1/2 mx-auto bg-[#821812] hover:from-[#821812] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </div>

              </section>


              <section id='fees' className="w-full bg-white text-black py-12 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                  {/* Heading */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-3">
                    Fee Structure – VGU Online
                  </h2>

                  {/* Introduction */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Every program under <strong>VGU Online Courses</strong> is designed with a
                    student-friendly fee structure so learners from different educational and
                    financial backgrounds can easily access high-quality online education.
                    The tuition fee includes complete access to all digital learning resources such as:
                  </p>

                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                    <li>Live & recorded classes</li>
                    <li>24/7 LMS access</li>
                    <li>Digital library</li>
                    <li>Virtual labs</li>
                    <li>Assignments & assessments</li>
                    <li>Faculty interaction</li>
                    <li>Career guidance & placement support</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-10">
                    This means the fee is not just for the degree — it covers a complete,
                    well-structured digital learning experience provided by
                    <strong> Vivekananda Global University Online</strong>.
                  </p>

                  {/* EMI Options */}
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Easy EMI & Installment Options
                    </h3>
                    <p className="text-gray-700 mb-4">
                      To make education accessible to everyone, <strong>VGU Online University</strong>
                      offers flexible EMI and installment plans. Students can choose from:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                      <li>Monthly EMI plans</li>
                      <li>Semester-wise payments</li>
                      <li>Zero-cost EMI (with selected partners)</li>
                    </ul>
                    <p className="text-gray-700">
                      These flexible payment options make it easier for learners to join programs like:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                      <li>Online MBA from Vivekananda Global University</li>
                      <li>Online MCom from VGU</li>
                      <li>Online BBA from Vivekananda Global University</li>
                      <li>Online BCom from VGU</li>
                    </ul>
                  </div>

                  {/* Value Pricing */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border mb-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Value-Based Pricing for Every Program
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Although fees vary by course, all <strong>VGU Online Courses</strong> are competitively
                      priced to offer strong academic value. Compared to many other online universities,
                      VGU Online remains affordable while providing:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>NAAC-accredited learning</li>
                      <li>Industry-aligned curriculum</li>
                      <li>Globally recognized degrees</li>
                      <li>Strong placement assistance</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      This makes every online degree from Vivekananda Global University a
                      <strong> smart and valuable investment</strong>.
                    </p>
                  </div>

                  {/* Scholarships */}
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Scholarships & Financial Support
                    </h3>
                    <p className="text-gray-700 mb-4">
                      <strong>VGU Online</strong> provides scholarships and financial support for eligible learners.
                      These may be available for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Working professionals</li>
                      <li>Women learners</li>
                      <li>High academic performers</li>
                      <li>Defense personnel</li>
                      <li>Economically weaker students</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      These scholarships help more learners access top online degree programs in India
                      through VGU Online.
                    </p>
                  </div>

                  {/* Why Students Trust */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Why Students Trust VGU Online’s Fee Structure
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Transparent pricing</li>
                      <li>No hidden charges</li>
                      <li>All learning resources included</li>
                      <li>Affordable for students & working professionals</li>
                      <li>Flexible payment options</li>
                      <li>Great return on investment with strong career outcomes</li>
                    </ul>
                  </div>
                </div>
              </section>


              <section id='key-highlights' className="w-full bg-white py-12 px-4 md:px-10 lg:px-16 text-gray-800">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Key Highlights of VGU Online
                  </h2>

                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-10 text-center">
                    VGU Online (Vivekananda Global University Online) is one of the best online universities in India,
                    known for its strong academics, modern digital learning, and globally accepted degrees.
                    VGU Online University offers UGC approved online degrees that meet today’s industry needs.
                    Below are the simple and clear highlights that show why students and working professionals
                    prefer VGU Online.
                  </p>

                  <div className="space-y-10">

                    {/* 1 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 UGC-Approved Online Degrees</h3>
                      <p className="text-gray-700 leading-relaxed">
                        All online programs — including the Online MBA from Vivekananda Global University, Online BBA,
                        Online MCom from VGU, and Online BCom from VGU — are approved by UGC-DEB, which means the
                        degrees are valid all over India and abroad.
                      </p>
                    </div>

                    {/* 2 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 NAAC-Accredited Online University</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Vivekananda Global University Online is a NAAC-accredited university, ensuring high-quality
                        teaching, a strong curriculum, and reliable student support.
                      </p>
                    </div>

                    {/* 3 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Top Online Degree Programs in India</h3>
                      <p className="text-gray-700 leading-relaxed">
                        With structured courses, industry-based subjects, and practical learning,
                        VGU Online Courses are ranked among the top online degree programs in India.
                      </p>
                    </div>

                    {/* 4 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Advanced Digital Learning Platform</h3>
                      <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        <li>24/7 study material access</li>
                        <li>Live and recorded classes</li>
                        <li>Interactive quizzes and assessments</li>
                        <li>Virtual labs</li>
                        <li>Digital libraries</li>
                      </ul>
                      <p className="mt-3 text-gray-700">This makes learning smooth and engaging.</p>
                    </div>

                    {/* 5 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Industry-Integrated Curriculum</h3>
                      <p className="text-gray-700 leading-relaxed">
                        All VGU Online Courses are created with experts from business, finance, IT, and management fields,
                        ensuring students learn skills that are used in real jobs.
                      </p>
                    </div>

                    {/* 6 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Flexible & Self-Paced Learning</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Students pursuing an online degree from Vivekananda Global University can study anytime
                        and anywhere. This flexibility is perfect for working professionals.
                      </p>
                    </div>

                    {/* 7 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Affordable Fees with EMI Options</h3>
                      <p className="text-gray-700 leading-relaxed">
                        VGU Online offers affordable UGC approved online degrees in India, along with EMI and flexible
                        payment options to support learners financially.
                      </p>
                    </div>

                    {/* 8 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Experienced Faculty & Mentor Support</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Students learn from highly qualified teachers who bring both academic knowledge
                        and industry experience.
                      </p>
                    </div>

                    {/* 9 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Career Assistance & Placement Support</h3>
                      <p className="text-gray-700 leading-relaxed">
                        VGU Online University provides resume support, interview training, and virtual placement
                        opportunities to help students build strong careers.
                      </p>
                    </div>

                    {/* 10 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">🔹 Strong Academic Reputation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As Vivekananda Global University Online, VGU is known across India for academic excellence,
                        research culture, and a student-first learning approach.
                      </p>
                    </div>

                  </div>
                </div>
              </section>


              {/* Admission Procedure */}
              <section id='admission-process' className="relative py-12 sm:py-20 bg-white">
                {/* Decorative Blobs */}
                <div className="absolute -top-20 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-32 -right-32 w-48 sm:w-72 h-48 sm:h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 sm:mb-16"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
                      Admission Procedure
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-[#821812] mx-auto mb-4 sm:mb-8 rounded-full"></div>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
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
                    className="mt-8 sm:mt-20 bg-white p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-12 text-center">
                      Easy 4-Step Admission Process
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 relative">
                      {/* Connecting Line */}
                      <div className="hidden md:block absolute top-20 sm:top-28 left-[10%] right-[10%] h-1 bg-[#821812] z-0 rounded-full"></div>

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
                          <div className="bg-[#821812] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-4 sm:mb-6 text-white shadow-2xl">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{step.number}</span>
                            <span className="text-xs sm:text-sm uppercase font-semibold mt-1">Step</span>
                          </div>
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-2">{step.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                </div>
                <div className="mt-3 flex justify-center">
                  <Button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-1/2 mx-auto bg-[#821812] hover:from-[#821812] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </div>


              </section>
              <section className="w-full bg-white text-gray-900 py-12 px-6">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-[#821812]">Admission Process</h2>

                  <p className="text-lg leading-relaxed mb-8">
                    The VGU Online (Vivekananda Global University Online) admission process is designed to be fast,
                    simple, and fully digital. Whether you’re applying for the Online MBA from Vivekananda Global
                    University, Online BBA, Online MCom from VGU, or Online BCom from VGU, the platform ensures a
                    smooth experience for all learners. As one of the best online universities in India, VGU Online
                    makes enrolling in UGC approved online degrees VGU simple and convenient.
                  </p>

                  <div className="bg-orange-50 border-l-4 border-[#821812] p-6 rounded-xl shadow-sm mb-10">
                    <h3 className="text-2xl font-semibold text-[#821812] mb-4"> 4-Step Admission Process</h3>

                    {/* Step 1 */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Step 1: Choose Your Program</h4>
                      <p className="text-base leading-relaxed">
                        Visit the official VGU Online portal and explore the wide range of VGU Online Courses,
                        including undergraduate and postgraduate options. Select the program that best matches your
                        academic and career goals.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Step 2: Fill Out the Online Application</h4>
                      <p className="text-base leading-relaxed">
                        Complete the digital application form with your personal and academic details. Upload required
                        documents such as mark sheets, ID proof, and photographs.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Step 3: Pay the Application Fee</h4>
                      <p className="text-base leading-relaxed">
                        Make a secure online payment through the university’s trusted gateway. All fee-related information
                        is transparent, making VGU one of the most affordable UGC approved online degrees in India.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold mb-2">Step 4: Receive Confirmation & Start Learning</h4>
                      <p className="text-base leading-relaxed">
                        After verification, you will receive an official admission confirmation email from Vivekananda
                        Global University Online along with your LMS login credentials. Begin accessing live classes,
                        recorded lectures, and all learning resources immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </section>


              {/* Certificate + Benefits */}
              <section className="bg-[#003366] py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-10">
                  <div className="flex-1 w-full">
                    <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgu-certificate_o79lcj.webp" alt="VGU Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
                  </div>
                  <div className="flex-1 text-white text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">Degree from VGU University</h2>
                    <p className="mb-4 sm:mb-6 text-base sm:text-lg">VGU offers top-notch academic programs with industry tie-ups, live projects, and holistic career support.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Benefits of VGU</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                      <li>Industry-relevant curriculum</li>
                      <li>Placement support and internships</li>
                      <li>State-of-the-art campus and labs</li>
                      <li>Exposure to global learning opportunities</li>
                    </ul>
                  </div>
                </div>
              </section>



              <section id='placement-partners' className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                    Placement Partners
                  </h2>

                  {/* Top Placement Partners List */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Top Placement Partners
                    </h3>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 leading-relaxed">
                      <li>✔ Tata Consultancy Services (TCS)</li>
                      <li>✔ Infosys</li>
                      <li>✔ Wipro</li>
                      <li>✔ IBM</li>
                      <li>✔ Accenture</li>
                      <li>✔ Amazon</li>
                      <li>✔ Flipkart</li>
                      <li>✔ HCL Technologies</li>
                      <li>✔ Capgemini</li>
                      <li>✔ Deloitte</li>
                      <li>✔ Cognizant (CTS)</li>
                      <li>✔ ICICI Bank</li>
                      <li>✔ HDFC Bank</li>
                      <li>✔ Kotak Mahindra Bank</li>
                      <li>✔ Byju’s & EdTech firms</li>
                      <li>✔ Aditya Birla Group</li>
                      <li>✔ Tech Mahindra</li>
                      <li>✔ Genpact</li>
                      <li>✔ Zomato & Swiggy Operations Teams</li>
                    </ul>
                  </div>

                  {/* Why Recruiters Choose Section */}
                  <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Why Recruiters Choose VGU Online Graduates
                    </h3>

                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      <li> Industry-aligned curriculum designed with experts</li>
                      <li> Strong communication, analytical, and managerial skills</li>
                      <li> Practical exposure through case studies & virtual internships</li>
                      <li> High professional discipline and work readiness</li>
                      <li> Value of online degree from Vivekananda Global University</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Companies */}
              <section className="py-8 sm:py-12 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 text-center mb-6 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Our Graduates Allso Work Here</h2>
                  <p className="text-lg sm:text-xl text-gray-600">Top hiring partners of VGU</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4">
                  {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nestle_bibwqx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327108/decathlon_zp87ip.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icici_1_quita6.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/lt_akwpfk.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hindustanunilever_qrh10l.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/lg_luyozv.webp"].map((src, i) => (
                      <div key={i} className="bg-white shadow-md rounded-lg p-2 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform">
                        <Image width={100} height={100} loading="lazy" src={src} alt="Company" className="h-8 sm:h-10 md:h-12 object-contain" />
                      </div>
                    ))}
                  {openModal && (
                    <ApplyEnquiryModal
                      open={!!openModal}
                      onOpenChange={(v) => !v && setOpenModal(null)}
                      title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                      subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                      imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgu_form_prrhfs.webp"
                      universityName="Vivekananda Global University (VGU)"
                      defaultProgram="MBA"
                      formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                    />
                  )}
                </div>

              </section>
              <section id='placement-record' className="w-full bg-white text-black py-12 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">

                  {/* Heading */}
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Placement Records
                  </h2>

                  {/* Description List */}
                  <div className="space-y-4 text-lg leading-relaxed text-gray-700">

                    <p>
                      • <strong>Strong Recruiter Network:</strong> Renowned companies like TCS, Infosys, Deloitte,
                      Wipro, HCL, ICICI Bank, Amazon, and IBM frequently hire VGU graduates.
                    </p>

                    <p>
                      • <strong>High Employability Programs:</strong> Degrees like the Online MBA from
                      Vivekananda Global University and Online BCom from VGU are designed with real-world skills
                      that make graduates job-ready.
                    </p>

                    <p>
                      • <strong>Career Training & Workshops:</strong> Resume-building sessions, interview
                      preparation workshops, aptitude training, and personality development programs offered regularly.
                    </p>

                    <p>
                      • <strong>Dedicated Placement Cell:</strong> The placement team at Vivekananda Global
                      University Online provides personalized support for each student to improve employability
                      and confidence.
                    </p>

                    <p>
                      • <strong>Internship Opportunities:</strong> Students pursuing VGU Online Courses receive
                      access to virtual internships and industry projects.
                    </p>

                    <p>
                      • <strong>Strong Alumni Success:</strong> VGU Online alumni hold positions across major
                      industries, creating a powerful professional network for new graduates.
                    </p>

                  </div>
                </div>
              </section>


              <section id='student-review' className="w-full bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Student Reviews
                  </h2>

                  <div className="space-y-8">
                    {/* Review 1 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-700">
                        “Perfect choice for working professionals”
                      </h3>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        I am enrolled in the Online MBA from Vivekananda Global University,
                        and the flexibility is incredible. The recorded lectures, live classes,
                        and LMS support make it easy to balance work and studies. VGU Online
                        truly stands among the best online universities in India.
                      </p>
                      <p className="mt-3 font-semibold text-gray-900">— Rohit Sharma, MBA Student</p>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-700">
                        “Practical learning with great value”
                      </h3>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        I pursued the Online BCom from VGU, and the curriculum gave me exactly
                        what I needed—finance skills, business basics, and practical exposure.
                        The fee structure is affordable, and the degree is UGC approved, which
                        gives me confidence for future opportunities.
                      </p>
                      <p className="mt-3 font-semibold text-gray-900">— Priya Singh, BCom Student</p>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-700">
                        “Industry-relevant and well structured”
                      </h3>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        The Online BBA from Vivekananda Global University has helped me improve
                        my management and communication skills. The content is industry-focused,
                        and the faculty is always supportive.
                      </p>
                      <p className="mt-3 font-semibold text-gray-900">— Aman Verma, BBA Student</p>
                    </div>

                    {/* Review 4 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-700">
                        “Excellent placement guidance”
                      </h3>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        Through VGU Online’s placement support, I received resume training,
                        interview practice, and internship opportunities. The guidance was extremely
                        helpful in securing my first job.
                      </p>
                      <p className="mt-3 font-semibold text-gray-900">— Simran Kaur, MCom Student</p>
                    </div>

                    {/* Review 5 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-700">
                        “Smooth and modern learning experience”
                      </h3>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        The LMS is very easy to use, and the study material is available 24/7.
                        VGU Online makes online learning feel real and interactive.
                      </p>
                      <p className="mt-3 font-semibold text-gray-900">— Deepak Mehta, MCA Student</p>
                    </div>

                    {/* Trusted by Thousands */}
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm">
                      <h3 className="text-2xl font-bold text-blue-800 text-center">
                        Trusted by Thousands of Learners
                      </h3>
                      <p className="text-gray-700 mt-3 text-center">
                        With strong academic quality, expert faculty, flexible schedules,
                        and recognized online degrees, VGU Online University continues to receive
                        outstanding feedback from students across the country.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Professional FAQ Section */}
              <section id='faqs' className="py-12 sm:py-16 lg:py-20 bg-white">
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
              <section id='conclusion' className="w-full bg-white text-gray-900 py-16 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto space-y-10">

                  {/* Heading */}
                  <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
                    Conclusion
                  </h2>

                  {/* Content */}
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      <strong>VGU Online (Vivekananda Global University Online)</strong> stands
                      as one of India's most trusted and innovative platforms for online higher
                      education. As a <strong>NAAC-accredited university</strong> offering
                      <strong> UGC approved online degrees</strong>, VGU Online has successfully
                      bridged the gap between quality education and accessibility, making
                      world-class learning available to students and working professionals across
                      India and beyond.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Why VGU Online is the Right Choice</h3>
                    <p>
                      Whether you're a fresh graduate looking to build a strong foundation
                      through the <strong>Online BBA from Vivekananda Global University</strong> or
                      <strong> Online BCom from VGU</strong>, or a working professional aiming to
                      advance your career with the <strong>Online MBA from Vivekananda Global University</strong> or
                      <strong> Online MCom from VGU</strong>, VGU Online provides the perfect blend of:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Academic Excellence</strong> – Industry-aligned curriculum designed by experts</li>
                      <li><strong>Flexibility</strong> – Study anytime, anywhere with 24/7 LMS access</li>
                      <li><strong>Affordability</strong> – Competitive fees with EMI options and scholarships</li>
                      <li><strong>Recognition</strong> – Globally accepted degrees approved by UGC-DEB</li>
                      <li><strong>Career Support</strong> – Strong placement assistance with top recruiters like TCS, Infosys, Deloitte, Amazon, and more</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-8">A Platform Built for Modern Learners</h3>
                    <p>
                      The modern learner needs more than just a degree—they need skills, flexibility,
                      and recognition. <strong>VGU Online University</strong> delivers on all fronts with:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Advanced digital learning tools and interactive classrooms</li>
                      <li>Experienced faculty with real-world industry knowledge</li>
                      <li>Practical exposure through case studies, projects, and virtual internships</li>
                      <li>A supportive learning community and dedicated mentorship</li>
                      <li>A proven track record of student success and career growth</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-8">Transform Your Future with VGU Online</h3>
                    <p>
                      Education is the foundation of personal and professional growth. By choosing
                      <strong> VGU Online Courses</strong>, you're not just earning a degree—you're
                      investing in a brighter, more secure future. With its commitment to quality,
                      innovation, and student success, <strong>Vivekananda Global University Online</strong>
                      continues to empower thousands of learners to achieve their dreams.
                    </p>

                    <p>
                      Ranked among the <strong>best online universities in India</strong>, VGU Online
                      offers <strong>affordable UGC approved online degrees in India</strong> that are
                      respected by employers, recognized globally, and designed for real-world success.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Take the First Step Today</h3>
                    <p>
                      Your journey toward academic excellence and career advancement begins here.
                      Explore <strong>VGU Online Courses</strong>, choose the program that aligns with
                      your goals, and join a growing community of successful learners who trust
                      <strong> VGU Online</strong> for quality, flexibility, and results.
                    </p>

                    <p className="font-semibold">
                      Start your learning journey with VGU Online—where education meets innovation,
                      and dreams meet reality.
                    </p>

                    <hr className="my-6" />

                    <p>
                      <strong>📞 Ready to enroll?</strong><br />
                      Visit the official VGU Online portal today and take the first step toward earning
                      your <strong>online degree from Vivekananda Global University</strong>—a decision
                      that will shape your future for years to come.
                    </p>

                    <p className="font-bold">VGU Online – Empowering Learners, Building Futures.</p>
                  </div>

                  {/* Enquiry Button */}
                  <div className="text-center pt-6">
                    <Button
                      onClick={() => setOpenModal({ type: 'apply' })}
                      className="w-full bg-[#821812] hover:from-[#821812] hover:from-[#821812] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                    >
                      Apply Now
                    </Button>
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
                          <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/vgu_logo_gctrpo.jpg" alt="vgu University Logo" className="h-10 w-auto bg-white" />
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
                          {['MBA', 'BBA', 'BCA', 'M.Com', 'B.Com', 'M.Sc.', 'MA'].map((program, i) => (
                            <li key={i} onClick={() => setOpenModal({ type: 'apply', })} className="hover:text-[#821812] transition-colors cursor-pointer">
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

                            <a href="tel:+917042646766" className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200" title="Call us" aria-label="Email us at info@unifostedu.com">

                              <span className="text-[#821812]-400">📞</span>
                            </a>
                            <span className="text-sm">+91 7042646766</span>
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
                    <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white text-center px-4">
                      Popular Programs & Specializations – Vivekananda Global University (VGU)"
                    </h4>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
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
                            key={index} onClick={() => setOpenModal({ type: 'apply', })}
                            className="bg-white/10 backdrop-blur-sm text-gray-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500 max-w-[200px] sm:max-w-none truncate sm:inline"
                            title={keyword}
                          >
                            <span className="hidden sm:inline">{keyword}</span>
                            <span className="sm:hidden">{keyword.length > 20 ? `${keyword.substring(0, 20)}...` : keyword}</span>
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
          </main>
        </div>

      </div>
    </>
  );
};

export default Vgu;
