"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AccreditationSection from "@/components/AccreditationSection";
import {
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaRupeeSign,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { BsBuildingCheck } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { ChevronDown } from "lucide-react";
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
import Head from "next/head";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import { AnimatePresence } from "framer-motion";

const cuonline = () => {
  const [activeCategory, setActiveCategory] = useState("PG"); // PG or UG
  const [current, setCurrent] = useState(0);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ugCourses = [
    {
      title: "Bachelor of Arts - Journalism & Mass Communication (BA-JMC)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,66,668",
      specialization: "Journalism, Media Studies",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327037/ba-jmc_njfsqe.webp",
    },
    {
      title:
        "Bachelor of Business Administration - Business Analytics (BBA - KPMG)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,60,000",
      specialization: "Business Analytics with KPMG",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,68,000",
      specialization:
        "Marketing, HR, Entrepreneurship, Digital Marketing, Fin-Tech",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 or equivalent",
      fees: "₹1,70,000",
      specialization: "IT & Systems",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
    },
  ];

  const pgCourses = [
    {
      title:
        "Master of Business Administration - Business Analytics (MBA - KPMG)",
      duration: "2 Years(4 Semesters)",
      eligibility:
        "Bachelor degree in any discipline or professional programs (CA/ICWA etc.)",
      fees: "₹2,00,000",
      specialization: "Business Analytics with KPMG",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
    },
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,10,668",
      specialization:
        "Finance, Marketing, HR, IT, Operations, International Business, Digital Marketing, Fin-Tech",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
    },
    {
      title: "Master of Computer Applications - AI & ML",
      duration: "2 Years",
      eligibility: "BCA/B.Sc(IT/CS)/B.E/B.Tech",
      fees: "₹1,40,000",
      specialization: "AI, ML, Data Analytics, Cloud Computing, Full Stack",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
    },
    {
      title: "Master of Science - Data Science",
      duration: "2 Years",
      eligibility: "Bachelor's in BA/BCA/B.Sc/BE/B.Tech",
      fees: "₹1,46,668",
      specialization: "Full Stack, Web Development",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
    },
    {
      title: "Master of Computer Applications - Cloud Computing (AWS Academy)",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation",
      fees: "₹1,40,000",
      specialization: "Cloud, AWS, DevOps, Full Stack",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
    },
    {
      title: "Master of Computer Applications - Data Analytics",
      duration: "2 Years",
      eligibility:
        "BCA/B.Sc/BE/B.Tech or any graduation with Math/Stats/Programming",
      fees: "₹1,40,000",
      specialization: "Big Data, Data Mining",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
    },
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation",
      fees: "₹1,40,000",
      specialization: "General IT, Software Development",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
    },
    {
      title: "Master of Science (Mathematics)",
      duration: "2 Years",
      eligibility: "Bachelor's with Math",
      fees: "₹1,00,000",
      specialization: "Pure Math, Applied Math",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
    },
    {
      title: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline or BA(Hons.)",
      fees: "₹1,00,000",
      specialization: "Psychology, English, Economics",
      image:
        "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
    },
  ];

  const courses = activeCategory === "PG" ? pgCourses : ugCourses;
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const visibleCourses = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleCourses.push(courses[(current + i) % courses.length]);
  }

  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const benefits = [
    {
      icon: <FaGraduationCap className="text-red-500 text-4xl" />,
      title: "UGC Entitled Programs",
      points: [
        "Recognition by the UGC, India is a stamp of approval for credibility, quality & acceptance.",
        "CU Online degree is held in high regard by academicians & corporate leaders globally.",
      ],
    },
    {
      icon: <BsBuildingCheck className="text-red-500 text-4xl" />,
      title: "HBPE & KPMG Empowered Courses",
      points: [
        "Backed by prestigious universities and globally renowned courses.",
        "VIP access to insights from industry stalwarts & global faculties.",
      ],
    },
    {
      icon: <MdSupportAgent className="text-red-500 text-4xl" />,
      title: "24x7 Learner Support + On-Demand Examination",
      points: [
        "Comprehensive online support & resources anytime.",
        "Freedom to schedule exams when you’re ready.",
      ],
    },
    {
      icon: <AiOutlineSchedule className="text-red-500 text-4xl" />,
      title: "Interactive Industry Expert Sessions",
      points: [
        "Engage in real-time discussions with industry leaders.",
        "Gain confidence & practical know-how from interactive experiences.",
      ],
    },
    {
      icon: <FaUsers className="text-red-500 text-4xl" />,
      title: "Career & Placement Assistance",
      points: [
        "Networking opportunities, internships & job placements.",
        "Industry partnerships for career growth.",
      ],
    },
    {
      icon: <FaChalkboardTeacher className="text-red-500 text-4xl" />,
      title: "Globally Acclaimed Faculty",
      points: [
        "Learn from acclaimed professionals with vast expertise.",
        "Rich & insightful learning experiences.",
      ],
    },
    {
      icon: <FaRupeeSign className="text-red-500 text-4xl" />,
      title: "Affordable & Flexible Fee Structure",
      points: [
        "Scholarships & discounts available.",
        "Pay per seat with flexible options.",
      ],
    },
    {
      icon: <BiBookContent className="text-red-500 text-4xl" />,
      title: "World Class Learning Management System (LMS)",
      points: [
        "Advanced LMS for seamless learning.",
        "Personalized digital learning experience.",
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal({ type: "apply" });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "What is Chandigarh University Online?",
      answer: `Chandigarh University Online is the digital learning platform of Chandigarh University Mohali. It offers flexible online degrees in Chandigarh with the same academic quality as regular on-campus programs.`,
    },
    {
      question: "Are online degrees from CU Online Chandigarh valid?",
      answer: `Yes. All degrees offered are UGC approved online degrees Chandigarh University, which means they are valid for jobs, government exams, and higher studies in India and abroad.`,
    },
    {
      question: "What courses are offered at Chandigarh University Online?",
      answer: `CU Online Chandigarh offers:
• Best online MBA in Chandigarh
• Best online BBA in Chandigarh
• BCA (with smooth CU Online BCA admission)
• Other best online degree programs in Punjab in IT, business, and commerce.`,
    },
    {
      question: "How do I apply for CU Online BCA admission or other programs?",
      answer: `Visit the official Chandigarh University Online portal, fill out the form, upload documents, and pay the application fee. The entire process is quick and fully online.`,
    },
    {
      question: "Is Chandigarh University Online a good choice for working professionals?",
      answer: `Yes. CU Online Chandigarh offers flexible schedules, recorded classes, and easy access to study material, making it ideal for working professionals who want to study at their own pace.`,
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const sectionLinks = [
    { id: "HeroSection", label: "Introduction" },
    { id: "AboutUs", label: "About CU Online" },
    { id: "WhyChoose", label: "Why Choose" },
    { id: "WhatMakesSpecial", label: "What Makes Special" },
    { id: "CampusTour", label: "Campus Tour" },
    { id: "Courses", label: "Courses" },
    { id: "KeyHighlights", label: "Key Highlights" },
    { id: "TableOfContent", label: "Program Overview" },
    { id: "AdmissionDates", label: "Admission Dates" },
    { id: "FeeStructure", label: "Fee Structure" },
    { id: "AdmissionProcess", label: "Admission Process" },
    { id: "UpcomingSession", label: "Upcoming Sessions" },
    { id: "PlacementPartners", label: "Placement Partners" },
    { id: "PlacementRecords", label: "Placement Records" },
    { id: "StudentReviews", label: "Student Reviews" },
    { id: "Faq", label: "FAQs" },
  ];

  const handleSectionNavigation = (sectionId) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(sectionId);
    if (!element) return;
    const headerOffset = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Head>
        <title>
          Chandigarh University Online | UGC Approved UG & PG Courses - UNIFOST
        </title>
        <meta
          name="description"
          content="Explore UGC-recognized online programs from Chandigarh University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals."
        />
        <meta
          name="keywords"
          content="CU Online, Chandigarh University Online, CU Distance Learning, MBA in CU Online, MCA in CU Online, BBA in CU Online, BCA in CU Online, Online Degrees India, UGC Approved, AICTE Approved"
        />
        <meta name="author" content="Chandigarh University Online" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/cuOnline" />
      </Head>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        {/* Header */}
        <header className="w-full fixed bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/logo-cu_aoiyom.png"
                  alt="Chandigarh University"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isSidebarOpen}
                  className="lg:hidden inline-flex items-center p-2 rounded-md border hover:bg-gray-50">
                  <span className="text-xl">☰</span>
                </button>

                {/* Phone (Desktop) */}
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f26722] transition-colors">
                  <FaPhone className="text-red-500 rotate-90" />
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>

                {/* Phone (Mobile) */}
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-white-500 rounded-full text-[#f26722] hover:bg-red-700 transition-colors cursor-pointer">
                  📞
                </a>

                {/* Apply Button */}
                <button
                  onClick={() => {
                    setOpenModal({ type: "apply" });
                    setShowEnquiryModal(true);
                    setModalType("apply");
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                  <span className="hidden sm:inline">Apply Now</span>

                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enquiry Modal */}
          {showEnquiryModal && (
            <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
              <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                    Get Started with Chandigarh University Online
                  </DialogTitle>
                </DialogHeader>
                <EnquiryForm
                  onSubmitted={() => setShowEnquiryModal(false)}
                  formType={modalType}
                  universityName="Chandigarh University Online"
                />
              </DialogContent>
            </Dialog>
          )}
        </header>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 px-4 py-6 border-r border-gray-200 bg-white shadow-sm z-50 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:block lg:shadow-none lg:z-40`}>
          <div className="flex items-center justify-between pb-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Page Contents</h3>
            <button
              className="text-gray-500 hover:text-gray-700 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu">
              <FaTimes size={18} />
            </button>
          </div>
          <nav className="mt-4 space-y-2 overflow-y-auto h-[calc(100%-3.5rem)] pr-2">
            {sectionLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionNavigation(item.id)}
                className="w-full text-left text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md px-3 py-2 transition-colors">
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-6 border-t pt-4">
            <button
              onClick={() => {
                setOpenModal({ type: "apply" });
                setShowEnquiryModal(true);
                setModalType("apply");
                setIsSidebarOpen(false);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-full shadow-sm transition-all duration-300 cursor-pointer">
              Apply Now
            </button>
          </div>
        </aside>

        <main className="pt-24 pb-16 lg:pl-72">
          {/* Hero Banner */}
          <section
            id="HeroSection"
            className="relative w-full 
             h-[20vh]          
             sm:h-[65vh] 
             lg:h-[80vh]
             mb-6 px-4">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full rounded-2xl overflow-hidden bg-white">
            {/* Slide 1 */}
            <SwiperSlide>
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327055/banner-cu1_a6rmh0.webp"
                alt="Banner 1"
                width={1400}
                height={800}
                className="
          w-full h-full 
          object-cover         /* Mobile: full cover */
          sm:object-contain    /* Tablet/desktop: maintain aspect */
          object-center
          p-0 sm:p-4
        "
                priority
              />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/banner-cu2_wqusv8.jpg"
                alt="Banner 2"
                width={1400}
                height={800}
                className="
          w-full h-full 
          object-cover 
          sm:object-contain 
          object-center
          p-0 sm:p-4
        "
              />
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/banner-cu3_bqn5u5.jpg"
                alt="Banner 3"
                width={1400}
                height={800}
                className="
          w-full h-full 
          object-cover 
          sm:object-contain 
          object-center
          p-0 sm:p-4
        "
              />
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/banner-cu4_dwgigz.jpg"
                alt="Banner 4"
                width={1400}
                height={800}
                className="
          w-full h-full 
          object-cover 
          sm:object-contain 
          object-center
          p-0 sm:p-4
        "
              />
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/banner-cu5_isobmb.jpg"
                alt="Banner 5"
                width={1400}
                height={800}
                className="
          w-full h-full 
          object-cover 
          sm:object-contain 
          object-center
          p-0 sm:p-4
        "
              />
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/banner-cu4_dwgigz.jpg"
                alt="Banner 6"
                width={1400}
                height={800}
                className="
          w-full h-full 
          object-cover 
          sm:object-contain 
          object-center
          p-0 sm:p-4
        "
              />
            </SwiperSlide>
          </Swiper>
          <div className="text-left mt-8 sm:mt-12">
            <button
              onClick={() => {
                setOpenModal({ type: "apply" });
                setShowEnquiryModal(true);
                setModalType("apply");
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
              <span className="hidden sm:inline">Enquiry Now</span>
              <span className="sm:hidden">Enquiry</span>
            </button>
          </div>
        </section>

        <section id="AboutUs" className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side: Image */}
              <div>
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp"
                  alt="Chandigarh University"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              {/* Right side: Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  Discover the Legacy of Excellence at - <br />
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Chandigarh University Online
                  </span>
                </h2>
                <p className="mt-4 text-gray-700">
                  <strong>Chandigarh University Online</strong> is one of India's fastest-growing platforms for online education. Based in Punjab, <strong>Chandigarh University Mohali</strong> is known for its modern learning system and strong academic reputation. Through <strong>CU Online Chandigarh</strong>, thousands of students are now building their careers with flexible, industry-focused, and globally accepted online programs.
                </p>
                <p className="mt-3 text-gray-700">
                  As one of the <strong>best online university in Chandigarh</strong>, Chandigarh University Online allows students to study from anywhere. It is a great choice for students who want a strong education, working professionals who want to grow in their careers, and anyone looking for flexible online degrees. <strong>Chandigarh University Punjab</strong> offers programs that match every learner's needs.
                </p>
                <p className="mt-3 text-gray-700">
                  With <strong>UGC approved online degrees Chandigarh University</strong>, students receive fully recognized and valid qualifications. This makes Chandigarh University Online one of the <strong>top online university in Punjab</strong>. Students can choose from many popular courses, including the <strong>best online MBA in Chandigarh</strong>, the <strong>best online BBA in Chandigarh</strong>, and technology programs through <strong>CU Online BCA admission</strong>.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3"> About Us – Chandigarh University Online</h3>
                  <p className="mt-3 text-gray-700">
                    Chandigarh University Online is the official digital learning platform of <strong>Chandigarh University Mohali</strong>, a top-rated <strong>NAAC A+ accredited institution</strong> known for academic excellence across India. As one of the <strong>top NAAC A+ university online platforms</strong> in the country, CU Online Chandigarh brings high-quality education directly to students' homes through modern technology, expert teaching, and easy access to learning resources.
                  </p>
                  <p className="mt-3 text-gray-700">
                    The main purpose of Chandigarh University Online is to make learning accessible, flexible, and affordable for every student. No matter where students live—in Punjab, in another state, or outside India—they can study the same programs offered at the physical campus of <strong>Chandigarh University Punjab</strong>, but with the convenience of online classes. This helps students save time, balance work and studies, and learn at their own pace.
                  </p>
                  <p className="mt-3 text-gray-700">
                    The university offers many well-known online degree programs such as:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Online MBA (<strong>best online MBA in Chandigarh</strong>)</li>
                    <li>Online BBA (<strong>best online BBA in Chandigarh</strong>)</li>
                    <li>Online BCA (easy <strong>CU Online BCA admission</strong>)</li>
                    <li>Several other <strong>online degrees in Chandigarh</strong> across business, IT, and commerce</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    Each course is created with a strong academic base, industry guidance, and practical, job-focused skills. Since these programs are <strong>UGC approved online degrees Chandigarh University</strong>, they hold the same value as traditional on-campus degrees. This means students can apply for government jobs, private-sector roles, or higher studies with complete confidence.
                  </p>
                  <p className="mt-3 text-gray-700">
                    Students choose <strong>Chandigarh University Mohali</strong> because it offers modern learning methods, quality faculty, updated study materials, and a very supportive environment. This is why <strong>CU Online Chandigarh</strong> is considered one of the <strong>best online degree programs in Punjab</strong>, preferred by thousands of learners across India.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setOpenModal({ type: "apply" });
                  setShowEnquiryModal(true);
                  setModalType("apply");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="WhyChoose" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
               Why Choose Chandigarh University Online?
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Choosing the right online university is an important decision. Here's why thousands of students trust Chandigarh University Online for their education and career growth:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "UGC Approved Online Degrees",
                  content: "Every program offered by CU Online Chandigarh is a UGC approved online degrees Chandigarh University program. This ensures full validity for higher studies, government exams, and job applications in India and globally. Students can feel secure knowing their degree is fully recognized."
                },
                {
                  title: "Best Online University in Chandigarh",
                  content: "Chandigarh University Punjab is known as the best online university in Chandigarh because of its strong academics, advanced digital systems, experienced teachers, and excellent student support. CU Online makes sure that online students receive the same quality education as those studying on campus at Chandigarh University Mohali."
                },
                {
                  title: "Top Online University in Punjab",
                  content: "With thousands of students enrolling every year, CU Online Chandigarh consistently ranks as a top online university in Punjab. Its courses are designed to offer real-world learning and practical experience, helping students build successful careers."
                },
                {
                  title: "Best Online MBA in Chandigarh",
                  content: "The online MBA is one of the most loved programs. Known as the best online MBA in Chandigarh, it includes real industry projects, case studies, business simulations, and global learning modules. It is ideal for students and working professionals aiming for leadership roles."
                },
                {
                  title: "Best Online BBA in Chandigarh",
                  content: "The best online BBA in Chandigarh helps students build strong basics in marketing, finance, HR, business law, and entrepreneurship. It is one of the best online degree programs in Punjab for students starting their business career."
                },
                {
                  title: "CU Online BCA Admission",
                  content: "Students who want to study computers and IT prefer CU Online BCA admission because the program covers important areas like programming, networking, databases, and other digital tools. It is among the most popular online degrees in Chandigarh."
                },
                {
                  title: "NAAC A+ Accredited University",
                  content: "Chandigarh University Mohali is a top NAAC A+ university online, which means the university maintains very high standards in teaching, learning, and academic services. This accreditation gives students trust and global recognition."
                },
                {
                  title: "Study Anytime, Anywhere",
                  content: "One of the biggest benefits of Chandigarh University Online is flexibility. Students can attend recorded classes, join live sessions, and study from any location. This is especially helpful for working professionals, parents, and distance learners."
                },
                {
                  title: "Affordable Fees + EMI Options",
                  content: "CU Online Chandigarh offers an affordable fee structure for all courses. Students also get EMI payment options, making online degrees in Chandigarh accessible to learners from all backgrounds."
                },
                {
                  title: "Best Online Degree Programs in Punjab",
                  content: "Whether a student chooses management, IT, business, or commerce, CU Online Chandigarh offers some of the best online degree programs in Punjab with updated syllabi and industry-aligned learning."
                },
                {
                  title: "Global Recognition & Industry Exposure",
                  content: "As a top online university in Punjab, Chandigarh University Mohali collaborates with global companies, industry experts, and top organizations. Students get exposure through expert talks, internships, real projects, and workshops."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-red-600 mb-3">✔ {item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setOpenModal({ type: "apply" });
                  setShowEnquiryModal(true);
                  setModalType("apply");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                <span className="hidden sm:inline">Enquiry Now</span>
                <span className="sm:hidden">Enquiry</span>
              </button>
            </div>
          </div>
        </section>

        {/* What Makes Us Special Section */}
        <section id="WhatMakesSpecial" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
               What Makes Chandigarh University Online Special?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌐",
                  title: "Modern and Advanced Online Learning System",
                  content: "CU Online Chandigarh uses advanced online tools, a smart learning platform, and digital classrooms to deliver lessons, assignments, quizzes, and interactive sessions."
                },
                {
                  icon: "🎓",
                  title: "Safe, Recognized, and Trusted Degrees",
                  content: "Because CU Online offers UGC approved online degrees Chandigarh University, students receive degrees that are trusted across India and globally."
                },
                {
                  icon: "👨‍🏫",
                  title: "Experienced Teachers and Mentors",
                  content: "Teachers from Chandigarh University Mohali handle the online programs, ensuring high-quality academic delivery and real industry knowledge."
                },
                {
                  icon: "📚",
                  title: "Wide Choice of Online Courses",
                  content: "Students can choose programs in management, IT, commerce, and other fields. All these programs are considered among the best online degree programs in Punjab."
                },
                {
                  icon: "💼",
                  title: "Strong Career Support",
                  content: "CU Online Chandigarh provides resume support, interview preparation, career counselling, and placement guidance, making it a trusted learning system for future professionals."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Tour Section */}
        <section id="CampusTour" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
               Campus Tour
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp"
                  alt="Chandigarh University Campus"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to <strong>Chandigarh University Online</strong>, supported by the vibrant and modern campus of <strong>Chandigarh University Mohali</strong>. Even though <strong>CU Online Chandigarh</strong> offers completely digital learning, the physical campus of <strong>Chandigarh University Punjab</strong> shows the same spirit of energy, innovation, and academic excellence.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The campus has smart classrooms, advanced labs, digital libraries, and research centers. These features make the university one of the <strong>best online university in Chandigarh</strong> and a <strong>top online university in Punjab</strong>. Students who study <strong>online degrees in Chandigarh</strong>—including the <strong>best online MBA in Chandigarh</strong>, the <strong>best online BBA in Chandigarh</strong>, and those joining through <strong>CU Online BCA admission</strong>—stay connected to campus through virtual tours, online events, and workshops led by experts.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As a <strong>top NAAC A+ university online</strong>, Chandigarh University Mohali ensures that online students get a learning experience equal to on-campus students. Whether you choose business, management, technology, or any of the <strong>best online degree programs in Punjab</strong>, you become part of a learning culture built on creativity, innovation, and global quality.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Even while studying from home, Chandigarh University Online makes you feel like you are part of one of India's most modern and advanced campuses—where every classroom, every space, and every digital tool is designed to support your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation & Why Choose Section */}
        <AccreditationSection
          title="Why Choose Chandigarh University Online?"
          description="Learn flexibly with expert mentorship, AI-driven LMS, and career support — all with globally recognized UGC-entitled degrees."
          stats={[]}
          benefits={[]}
          accreditations={[
            {
              src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp",
              alt: "UGC",
              name: "UGC",
            },
            {
              src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp",
              alt: "AICTE",
              name: "AICTE",
            },
            {
              src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp",
              alt: "NAAC",
              name: "NAAC",
            },
            {
              src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp",
              alt: "WES",
              name: "WES",
            },
          ]}
        />
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => {
              setOpenModal({ type: "apply" });
              setShowEnquiryModal(true);
              setModalType("apply");
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
            <span className="hidden sm:inline">Enquiry Now</span>
            <span className="sm:hidden">Enquiry</span>
          </button>
        </div>

        {/* Explore Online Courses Section */}
        <section id="Courses" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
               Explore Online Courses
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>Chandigarh University Online</strong>, learning is flexible, modern, and designed to help you build a strong future. Whether you want to study business, technology, or management, <strong>CU Online Chandigarh</strong> offers many programs that support real career growth. With <strong>UGC approved online degrees Chandigarh University</strong>, students get high-quality education from the top-rated campus of <strong>Chandigarh University Mohali</strong>.
            </p>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              No matter where you live, you can now study some of the <strong>best online degree programs in Punjab</strong> right from your home. Thousands of students across India trust these courses.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center"> Online MBA – Best Online MBA in Chandigarh</h3>
              <p className="text-gray-700 text-center mb-6">
                Perfect for future leaders and managers. The Online MBA from Chandigarh University Online is one of the most popular programs offered by <strong>Chandigarh University Punjab</strong>. With industry-based subjects, live classes, and practical projects, it is ranked as one of the <strong>best online MBA in Chandigarh</strong> and a top choice in Punjab.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center"> Online BBA – Best Online BBA in Chandigarh</h3>
              <p className="text-gray-700 text-center mb-6">
                A great beginning for business students. The Online BBA at CU Online helps you learn important business skills like marketing, finance, HR, and entrepreneurship. It is known as one of the <strong>best online BBA in Chandigarh</strong> and one of the top online business courses in Punjab.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center"> Online BCA – CU Online BCA Admission</h3>
              <p className="text-gray-700 text-center mb-6">
                Start your journey in IT and computer science. The BCA program through <strong>CU Online BCA admission</strong> teaches the basics of IT, coding, databases, and computer applications. It is a top choice for students looking for <strong>online degrees in Chandigarh</strong> and one of the best tech programs in Punjab.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center"> Other Online Degrees in Chandigarh</h3>
              <p className="text-gray-700 text-center mb-6">
                Chandigarh University Online also offers many other flexible programs in commerce, arts, computer science, and management. All these courses are designed by expert faculty from <strong>Chandigarh University Mohali</strong>, keeping the university ranked as a <strong>top online university in Punjab</strong> and one of the <strong>best online university in Chandigarh</strong>.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4"> Why These Courses Are Special</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fully online and flexible</li>
                <li>UGC-approved and nationally recognized</li>
                <li>Modern LMS with live and recorded classes</li>
                <li>Career-focused and practical syllabus</li>
                <li>Industry-based and updated subjects</li>
              </ul>
              <p className="mt-4 text-gray-700">
                Whether you choose the <strong>best online MBA in Chandigarh</strong>, the <strong>best online BBA in Chandigarh</strong>, or apply for <strong>CU Online BCA admission</strong>, you join a future-ready learning system trusted across Punjab, Mohali, and Chandigarh University Online.
              </p>
            </div>

            {/* UG/PG Programs Carousel */}
            <div className="pt-8">
              <h3 className="text-2xl font-semibold text-center mb-10">
                Explore Chandigarh University Online Programs
              </h3>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              className={`px-6 py-4 w-60  text-xl ${
                activeCategory === "PG"
                  ? "bg-[#e60000] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setActiveCategory("PG");
                setCurrent(0);
              }}>
              PG Programs
              <span className="block text-sm">(After Graduation)</span>
            </button>
            <button
              className={`px-6 py-4 w-60 text-xl ${
                activeCategory === "UG"
                  ? "bg-[#e60000] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setActiveCategory("UG");
                setCurrent(0);
              }}>
              UG Programs
              <span className="block text-sm">(After 12th)</span>
            </button>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 z-10 shadow-lg">
              Prev
            </button>
            <div className="flex gap-4 justify-center">
              {visibleCourses.map((program, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-medium text-red-500 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          <span className="font-semibold">Duration:</span>{" "}
                          {program.duration}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <span className="font-semibold">Eligibility:</span>{" "}
                          {program.eligibility}
                        </p>
                        <p className="text-gray-600 mb-2 truncate">
                          <span className="font-semibold">Specialization:</span>{" "}
                          {program.specialization}
                        </p>
                      </div>
                      <p className="text-gray-600 font-medium mt-4">
                        Fees:{" "}
                        <span className="text-red-500 font-semibold border border-[#f58225] p-1 rounded">
                          {program.fees}
                        </span>
                      </p>
                      <div className="mt-4">
                        <button
                          onClick={() =>
                            setOpenModal({
                              type: "apply",
                              program: program.title,
                            })
                          }
                          className="inline-block bg-black text-white font-bold py-2 px-4 rounded hover:bg-red-700 w-full text-center">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 z-10 shadow-lg"></button>
          </div>
              <div className="text-center mt-8 sm:mt-12">
                <button
                  onClick={() => {
                    setOpenModal({ type: "apply" });
                    setShowEnquiryModal(true);
                    setModalType("apply");
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                  <span className="hidden sm:inline">Enquiry Now</span>
                  <span className="sm:hidden">Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section id="KeyHighlights" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
               Key Highlights
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Key highlights of Chandigarh University Online programs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 border border-red-200 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-red-600 mb-3">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500">►</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setOpenModal({ type: "apply" });
                  setShowEnquiryModal(true);
                  setModalType("apply");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                <span className="hidden sm:inline">Enquiry Now</span>
                <span className="sm:hidden">Enquiry</span>
              </button>
            </div>
          </div>
        </section>

        {/* Table of Content Section */}
        <section id="TableOfContent" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
               Table of Content
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Introduction</li>
                <li>About Us</li>
                <li>Why Choose Chandigarh University Online?</li>
                <li>What Makes Us Special?</li>
                <li>Campus Tour</li>
                <li>Explore Online Courses</li>
                <li>Key Highlights</li>
                <li>Admission Dates</li>
                <li>Fee Structure</li>
                <li>Admission Process</li>
                <li>Details of Upcoming Session</li>
                <li>Placement Partners</li>
                <li>Placement Records</li>
                <li>Student Reviews</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admission Dates Section */}
        <section id="AdmissionDates" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
               Admission Dates
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-xl text-gray-700">
                Admissions are open for the upcoming session. Please check the official website or contact us for specific dates.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section id="FeeStructure" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
               Fee Structure
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              The fee structure at <strong>Chandigarh University Online</strong> is made to be affordable and easy for students. Whether you choose the <strong>best online MBA in Chandigarh</strong>, the <strong>best online BBA in Chandigarh</strong>, or join through <strong>CU Online BCA admission</strong>, the university makes sure every learner can access high-quality education at a fair price. As one of the <strong>best online university in Chandigarh</strong>, CU offers flexible EMI options, clear fee details, and no hidden charges.
            </p>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Students from Punjab and all over India prefer <strong>Chandigarh University Online</strong> because it provides <strong>UGC approved online degrees Chandigarh University</strong> with great value. All programs offered by <strong>Chandigarh University Mohali</strong>—including business, management, and IT courses—are designed to keep education affordable without reducing academic quality.
            </p>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              With easy payment plans, simple online fee submission, and financial support options, <strong>CU Online Chandigarh</strong> stands out as one of the <strong>top online university in Punjab</strong> and a trusted choice for students looking for accessible online education.
            </p>
          </div>
        </section>

        {/* Admission Process Section */}
        <section id="AdmissionProcess" className="relative py-20 bg-white">
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
              className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                 Admission Process
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
              className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
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
                    transition={{ duration: 0.6, delay: index * 0.3 }}>
                    <div className="bg-gradient-to-br from-red-400 to-red-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                      <span className="text-3xl md:text-4xl font-bold">
                        {step.number}
                      </span>
                      <span className="text-xs md:text-sm uppercase font-semibold mt-1">
                        Step
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8 sm:mt-12">
                <button
                  onClick={() => {
                    setOpenModal({ type: "apply" });
                    setShowEnquiryModal(true);
                    setModalType("apply");
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                  <span className="hidden sm:inline">Enquiry Now</span>
                  <span className="sm:hidden">Enquiry</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Details of Upcoming Session Section */}
        <section id="UpcomingSession" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              . Details of Upcoming Session
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-center text-lg">
                For detailed information about the upcoming session, please contact our admission office or visit the official website.
              </p>
            </div>
          </div>
        </section>

        {/* Placement Partners Section */}
        <section id="PlacementPartners" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
               Placement Partners
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              <strong>Chandigarh University Online</strong> has a strong network of top placement partners that help students build successful careers. As one of the <strong>best online university in Chandigarh</strong> and a <strong>top online university in Punjab</strong>, <strong>CU Online Chandigarh</strong> works closely with leading national and international companies to provide real job opportunities for students.
            </p>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Whether you are studying the <strong>best online MBA in Chandigarh</strong>, the <strong>best online BBA in Chandigarh</strong>, or applying through <strong>CU Online BCA admission</strong>, you get access to placement support from some of the most trusted brands in the industry.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center"> Top Placement Partners Include:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Amazon", "Deloitte", "Infosys", "Wipro", "TCS", "IBM", 
                  "Accenture", "HCL", "Tech Mahindra", "Flipkart", "HDFC Bank", "ICICI Bank"
                ].map((company, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                    <p className="font-semibold text-gray-800">{company}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-gray-700 mb-4">
              These placement partners regularly hire talented students from <strong>Chandigarh University Mohali</strong> and now offer opportunities to online learners as well. With <strong>UGC approved online degrees Chandigarh University</strong>, students gain credibility and confidence while applying for top roles.
            </p>
            <p className="text-center text-gray-700 mb-6">
              <strong>CU Online Chandigarh</strong> also offers resume building, interview training, internship support, and career counseling to help students stand out.
            </p>
            <p className="text-center text-gray-700">
              By choosing <strong>Chandigarh University Online</strong>, you join a strong network of placement partners committed to helping you begin a successful career journey.
            </p>
          </div>
        </section>

        {/* Placement Records Section */}
        <section id="PlacementRecords" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
               Placement Records
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              <strong>Chandigarh University Online</strong> has an excellent placement record that makes it one of the <strong>best online university in Chandigarh</strong> and a preferred choice for students across India. With strong industry connections, expert training, and <strong>UGC approved online degrees Chandigarh University</strong>, students from <strong>CU Online Chandigarh</strong> step into the job market with confidence.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Placement Success Highlights:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Thousands of students placed across India and abroad</li>
                <li>High placement rate in management, business, and computer applications</li>
                <li>Strong recruiter network from Fortune 500 companies</li>
                <li>Internship and job opportunities for online learners</li>
                <li>Dedicated placement support from <strong>Chandigarh University Mohali</strong> team</li>
              </ul>
            </div>

            <p className="text-center text-gray-700 mb-4">
              Students in the Online MBA, Online BBA, Online BCA, and other <strong>online degrees in Chandigarh</strong> receive full support through training sessions, resume workshops, mock interviews, and expert guidance. This strong support system ensures that <strong>CU Online Chandigarh</strong> continues to rank among the <strong>top online university in Punjab</strong> with outstanding placement results.
            </p>
            <p className="text-center text-gray-700">
              With a focus on career growth, global skills, and industry-readiness, <strong>Chandigarh University Online</strong> gives students a powerful start to their professional journey.
            </p>
          </div>
        </section>

        {/* Student Reviews Section */}
        <section id="StudentReviews" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
               Student Reviews
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Riya Malhotra",
                  course: "Online MBA Student",
                  review: `"Studying the best online MBA in Chandigarh from Chandigarh University Online has been an amazing experience. The live classes, recorded lectures, and flexible schedule helped me study while working. CU Online Chandigarh truly feels like the best online university in Chandigarh."`
                },
                {
                  name: "Aman Singh",
                  course: "BBA Student",
                  review: `"The best online BBA in Chandigarh offered by Chandigarh University Mohali helped me build a strong business foundation. The teachers explain everything in simple language, and the LMS is very easy to use. I'm proud to study at a top online university in Punjab."`
                },
                {
                  name: "Simran Kaur",
                  course: "BCA Student",
                  review: `"I applied through CU Online BCA admission, and the process was very smooth. The lessons are clear, practical, and well-structured. As a tech student, I love how online degrees in Chandigarh give real-world IT skills."`
                },
                {
                  name: "Mohit Verma",
                  course: "MBA Student",
                  review: `"The placement support at Chandigarh University Online is excellent. From resume building to interview training, everything is helpful. I feel confident about my future after choosing the best online MBA in Chandigarh."`
                },
                {
                  name: "Neha Sharma",
                  course: "BBA Student",
                  review: `"I wanted the flexibility to study from home, and CU Online Chandigarh gave me exactly that. The online BBA program is updated, interactive, and perfect for busy students. Definitely one of the best online degree programs in Punjab."`
                },
                {
                  name: "Harsh Raj",
                  course: "MCA Student",
                  review: `"As an MCA student, I receive practical training and strong academic support from Chandigarh University Mohali. It is a great feeling to be part of one of the top NAAC A+ university online platforms."`
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold text-red-600 mb-2">{review.name}</h4>
                  <p className="text-gray-600 mb-3 italic">– {review.course}</p>
                  <p className="text-gray-700 leading-relaxed"> {review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate + Benefits */}
        <section className="bg-black py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327071/certificate-cu_srfqmo.webp"
                alt="Chandigarh University Certificate"
                width={100}
                height={100}
                loading="lazy"
                className="w-full max-w-md mx-auto rounded shadow-lg"
              />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Earn Your Online Degree from Chandigarh University
              </h2>
              <p className="mb-6 text-lg">
                Chandigarh University Online Enhance your career with daily live
                classes, skill-based training, and global recognition.
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Benefits of Chandigarh University Online
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Interactive Live & Recorded Sessions</li>
                <li>Personalized Career Support</li>
                <li>Global Exposure & Alumni Network</li>
                <li>Affordable, Flexible & Recognized Programs</li>
              </ul>
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setOpenModal({ type: "apply" });
                  setShowEnquiryModal(true);
                  setModalType("apply");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                  <span className="hidden sm:inline">Enquiry Now</span>
                  <span className="sm:hidden">Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="Faq" className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
               FAQ
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Frequently Asked Questions (FAQs) – Chandigarh University Online
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800">
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-6 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setOpenModal({ type: "apply" });
                  setShowEnquiryModal(true);
                  setModalType("apply");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer">
                <span className="hidden sm:inline">Enquiry Now</span>
                <span className="sm:hidden">Enquiry</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Important Links */}
            <div>
              <h3 className="text-white font-bold mb-4">IMPORTANT LINKS</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Vision & Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      How to Apply
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Admission Guideline
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      UGC-DEB Approval
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Online Degree
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Equivalence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Education Loan
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Student Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Office Hours
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      CIQA Report
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Student Facilitation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Mandatory Disclosure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Public Notice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Regular Programs Admissions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-bold mb-4">ABOUT</h3>
              <p className="text-sm leading-6">
                Chandigarh University's for Online Education has an array of
                online bachelor's and master's programs to help you achieve your
                educational goals. The courses are globally benchmarked, with
                industry exposure, and regular interface with top-notch industry
                experts. Your education at Chandigarh University will be steeped
                in global learning.
              </p>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-white font-bold mb-4">GET IN TOUCH</h3>
              <p className="text-sm leading-6">
                Chandigarh University
                <br />
                NH-05 Chandigarh-Ludhiana Highway,
                <br />
                Mohali, Punjab (INDIA)
              </p>
              <p className="mt-3 text-sm">
                General Helpline No: <br />
                <a
                  href="tel:+91 7042646766"
                  className="text-yellow-400 font-semibold">
                  +91 7042646766
                </a>
              </p>
              <p className="mt-2 text-sm">
                Email: <br />
                <a
                  href="mailto:info@unifostedu.com"
                  className="text-yellow-400 font-semibold">
                  info@unifostedu.com
                </a>
              </p>
            </div>
          </div>

          {/* Logo + Social */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327106/cu-logo_yd1wri.webp"
                alt="CU Online"
                className="h-10"
              />
              <div>
                <h2 className="text-white font-bold text-xl">CU Online</h2>
                <p className="text-sm text-gray-400">
                  Discover. Learn. Empower.
                </p>
              </div>
            </div>
          </div>
          {/* Popular Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8 mb-8">
            <h4 className="text-lg font-bold mb-6 text-white text-center">
              Popular Programs & Specializations – Chandigarh University Online
              (CU Online)
            </h4>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "BA Journalism - CU Online",
                "BA Media Studies - CU Online",

                "BBA Business Analytics (KPMG) - CU Online",
                "BBA Marketing - CU Online",
                "BBA HR - CU Online",
                "BBA Entrepreneurship - CU Online",
                "BBA Digital Marketing - CU Online",
                "BBA Fin-Tech - CU Online",

                "BCA IT & Systems - CU Online",

                "MBA Business Analytics (KPMG) - CU Online",
                "MBA Finance - CU Online",
                "MBA Marketing - CU Online",
                "MBA HR - CU Online",
                "MBA IT - CU Online",
                "MBA Operations - CU Online",
                "MBA International Business - CU Online",
                "MBA Digital Marketing - CU Online",
                "MBA Fin-Tech - CU Online",

                "MCA AI - CU Online",
                "MCA ML - CU Online",
                "MCA Data Analytics - CU Online",
                "MCA Cloud Computing - CU Online",
                "MCA Full Stack - CU Online",

                "M.Sc Data Science - CU Online",
                "M.Sc Full Stack - CU Online",
                "M.Sc Web Development - CU Online",

                "MCA Cloud Computing (AWS Academy) - CU Online",
                "MCA AWS - CU Online",
                "MCA DevOps - CU Online",

                "MCA Data Analytics - CU Online",
                "MCA Big Data - CU Online",
                "MCA Data Mining - CU Online",

                "MCA General IT - CU Online",
                "MCA Software Development - CU Online",

                "M.Sc Mathematics - CU Online",
                "M.Sc Pure Math - CU Online",
                "M.Sc Applied Math - CU Online",

                "MA Psychology - CU Online",
                "MA English - CU Online",
                "MA Economics - CU Online",
              ].map((keyword, index) => (
                <span
                  key={index}
                  onClick={() => setOpenModal({ type: "apply" })}
                  className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                  title={keyword}>
                  {keyword.length > 25
                    ? `${keyword.substring(0, 25)}...`
                    : keyword}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bottom Note */}
          <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
            All rights reserved | Unifostedu
          </div>
        </footer>
      </div>

      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={
            openModal.type === "apply"
              ? "Start Your Application"
              : "Enquire Now"
          }
          subtitle={
            openModal.type === "apply"
              ? "Fill the quick form to begin your admission process"
              : "Share your details and our counselor will reach out"
          }
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327155/girlImage_w9ulny.webp"
          universityName="Chandigarh University Online"
          defaultProgram={openModal.program || "MBA"}
          formType={openModal.type === "apply" ? "getStarted" : "general"}
        />
      )}
    </>
  );
};

export default cuonline;
