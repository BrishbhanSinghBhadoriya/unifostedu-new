'use client';

import React, { useState,useEffect } from 'react';
import EnquireCard from '@/components/EnquireCard';
import {
  FaBookOpen,
  FaUserTie,
  FaBriefcase,
  FaClipboardCheck,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaRupeeSign,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { BsBuildingCheck } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import Head from 'next/head';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronDown } from "lucide-react";
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
const KU = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Business Administration",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Computer Applications",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹72,661",
      specialization: "Commerce",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹98,545",
      specialization: "General Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹76,667",
      specialization: "Computer Applications",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹54,036",
      specialization: "Commerce",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹72,661",
      specialization: "English, Journalism & Mass Communication, Political Science",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
    },
    {
      course: "MBA (Specializations)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹119,845",
      specialization: "Finance Management, Information Technology Management, Human Resource Management, Marketing, Business Analytics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
    },
  ];

  const allCourses = [
    ...ugCourses.map(course => ({ ...course, type: "UG" })),
    ...pgCourses.map(course => ({ ...course, type: "PG" })),
  ];

  const benefits = [
    {
      icon: <FaGraduationCap className="text-blue-600 text-4xl" />,
      title: "UGC Entitled Programs",
      points: [
        "Recognition by the UGC ensures credibility, quality & nationwide acceptance.",
        "KU Online degree is respected by academicians & corporate leaders."
      ]
    },
    {
      icon: <BsBuildingCheck className="text-blue-600 text-4xl" />,
      title: "NAAC A++ Accredited",
      points: [
        "Highest accreditation grade from NAAC ensuring quality education.",
        "Legacy of excellence since 1956 with strong academic foundation."
      ]
    },
    {
      icon: <MdSupportAgent className="text-blue-600 text-4xl" />,
      title: "24x7 Learner Support",
      points: [
        "Comprehensive online support & resources available anytime.",
        "Dedicated student support team for academic assistance."
      ]
    },
    {
      icon: <AiOutlineSchedule className="text-blue-600 text-4xl" />,
      title: "Flexible Learning Schedule",
      points: [
        "Study at your own pace with recorded lectures.",
        "Balance work, life and education effectively."
      ]
    },
    {
      icon: <FaUsers className="text-blue-600 text-4xl" />,
      title: "Career & Placement Assistance",
      points: [
        "Networking opportunities and career guidance.",
        "Industry partnerships for better career prospects."
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
      title: "Experienced Faculty",
      points: [
        "Learn from qualified professionals with academic expertise.",
        "Rich and insightful learning experiences."
      ]
    },
    {
      icon: <FaRupeeSign className="text-blue-600 text-4xl" />,
      title: "Affordable Fee Structure",
      points: [
        "Scholarships & easy installment options available.",
        "Value for money education with quality content."
      ]
    },
    {
      icon: <BiBookContent className="text-blue-600 text-4xl" />,
      title: "Advanced Learning Management System",
      points: [
        "User-friendly LMS for seamless learning experience.",
        "Access to e-books, video lectures and study materials."
      ]
    }
  ];
   
  useEffect(() => {
        
  
        const timer= setTimeout(()=>{
         setOpenModal(true)
        },3000)
        return () => clearTimeout(timer);
  
         
  },[])
  
  const faqs = [
    {
      question: "What is Kurukshetra University Online?",
      answer: `Kurukshetra University Online is the distance and online education wing of Kurukshetra University, established in 1956. It offers UGC-entitled online degree programs designed for working professionals, fresh graduates, and learners who need flexibility in their education. KU Online combines traditional academic excellence with modern digital learning approaches.`
    },
    {
      question: "Is Kurukshetra University Online degree valid?",
      answer: `Yes, Kurukshetra University Online degrees are fully valid and recognized by UGC (University Grants Commission). The university holds NAAC A++ accreditation, the highest grade possible, ensuring quality education that is accepted by employers, government organizations, and other universities across India and abroad.`
    },
    {
      question: "What courses are offered at Kurukshetra University Online?",
      answer: `Kurukshetra University Online offers a range of undergraduate and postgraduate programs:
      
      🔹 Undergraduate Programs (UG):
      - BBA (Bachelor of Business Administration)
      - BCA (Bachelor of Computer Applications)
      - B.Com (Bachelor of Commerce)

      🔹 Postgraduate Programs (PG):
      - MBA (Master of Business Administration)
      - MCA (Master of Computer Applications)
      - M.Com (Master of Commerce)
      - MA in various specializations

      All programs are designed with industry relevance and future-ready curriculum.`
    },
    {
      question: "What is the eligibility for Kurukshetra University Online courses?",
      answer: `Eligibility criteria vary by course:
      - For UG Programs: 10+2 pass from a recognized board
      - For PG Programs: Bachelor's degree from a recognized university
      - Some programs may have specific subject requirements

      International students must submit equivalent qualifications recognized by relevant authorities.`
    },
    {
      question: "What is the fee structure of Kurukshetra University Online?",
      answer: `KU Online offers an affordable fee structure:
      - UG Programs: Approximately ₹72,661 for full program
      - PG Programs: Range from ₹54,036 to ₹119,845 depending on the program
      
      Scholarships and installment options are available for eligible students.`
    },
    {
      question: "Does Kurukshetra University Online provide placement assistance?",
      answer: `Yes, KU Online provides career support and placement assistance through:
      - Career counseling sessions
      - Resume building workshops
      - Industry interface programs
      - Placement opportunities with partner companies
      
      The university has a strong alumni network that helps in career growth.`
    },
    {
      question: "What is the learning method at Kurukshetra University Online?",
      answer: `KU Online provides a comprehensive learning experience through:
      - Recorded video lectures by expert faculty
      - Digital e-learning materials and resources
      - Online assignments and assessments
      - Discussion forums for peer interaction
      - Regular doubt-clearing sessions
      
      The learning is self-paced with flexibility to study from anywhere.`
    },
    {
      question: "Are Kurukshetra University Online degrees accepted abroad?",
      answer: `Yes, Kurukshetra University degrees are globally recognized. The university is NAAC A++ accredited and its degrees are accepted by employers and educational institutions worldwide. Many alumni have pursued higher education and careers abroad with KU degrees.`
    },
    {
      question: "How are exams conducted at Kurukshetra University Online?",
      answer: `Examinations at KU Online are conducted through:
      - Online proctored examination system
      - Scheduled examination windows
      - Both objective and subjective type questions
      - Assignment-based evaluations
      
      Results are declared online and certificates are sent to students.`
    },
    {
      question: "How can I apply for Kurukshetra University Online programs?",
      answer: `You can apply through these simple steps:
      1. Visit the official Kurukshetra University Online portal
      2. Register and fill the application form with required details
      3. Upload necessary documents (marksheets, ID proof, photograph)
      4. Pay the application fee online
      5. Submit the application and wait for confirmation
      
      After verification, you will receive login credentials to access the learning portal.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <Head>
        <title>Kurukshetra University Online - UG & PG Courses in India</title>
        <meta
          name="description"
          content="Explore online undergraduate (BBA, BCA, B.Com) and postgraduate (MBA, MCA, M.Com, MA) programs offered by Kurukshetra University Online, NAAC A++ accredited. Flexible and career-focused education in Haryana, India."
        />
        <meta
          name="keywords"
          content="Kurukshetra University Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, NAAC A++ University, Online Degree Programs Haryana, Distance Learning, Online Courses India"
        />
        <meta name="author" content="Kurukshetra University Online" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Kurukshetra University Online - UG & PG Courses in India" />
        <meta property="og:description" content="Explore online undergraduate and postgraduate programs offered by Kurukshetra University Online, NAAC A++ accredited, Haryana, India." />
        <meta property="og:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kurukshetrauniversityonline.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kurukshetra University Online - UG & PG Courses in India" />
        <meta name="twitter:description" content="Explore online undergraduate and postgraduate programs offered by Kurukshetra University Online, NAAC A++ accredited, Haryana, India." />
        <meta name="twitter:image" content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp" />
      </Head>

      <div className="min-h-screen bg-gray-50 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md fixed top-0 w-full z-20">
  <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">

    {/* Logo */}
    <Image
      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku-logo_nqbxot.png"
      alt="Kurukshetra University"
      width={100}
      height={100}
      className="h-12"
    />

    {/* Desktop Phone + Apply */}
    <div className="hidden sm:flex items-center gap-4">
      <a
        href="tel:+917042867717"
        className="flex items-center gap-2 text-gray-700 font-medium"
      >
        📞 +91 7042646766
      </a>

      <button
        onClick={() => setOpenModal({ type: 'apply' })}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer"
      >
        Apply Now
      </button>
    </div>

    {/* Mobile Phone + Apply */}
    <div className="flex sm:hidden items-center gap-3">

      {/* Phone Icon */}
      <a
        href="tel:+917042867717"
        className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
      >
        📞
      </a>

      {/* Apply Button (small size) */}
      <button
        onClick={() => setOpenModal({ type: 'apply' })}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
      >
        Apply
      </button>

    </div>

  </div>
</header>

          {/*hero section*/}
      <section className="relative w-full h-[75vh] md:h-[85vh] mt-[90px] mb-[20px] font-[Poppins]">
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    navigation
    pagination={{ clickable: true }}
    className="w-full h-full"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <div className="relative w-full h-full">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp"
          alt="Kurukshetra University Online Programs"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Banner Content */}
       <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
       <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
        Kurukshetra University Online
       </h1>
       <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
       Advance your career with globally recognized <br />
       online UG & PG programs from KU Online.
       </p>
       <button
       onClick={() => setOpenModal(true)}
      className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
       >
      Apply Now
      </button>
      </div>

      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div className="relative w-full h-full">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/ku-banner2_l6hqp0.jpg"
          alt="KU Online Programs"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Flexible Online Learning
          </h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
            Learn from anywhere, anytime with world-class <br />
            faculty and innovative e-learning modules.
          </p>
          <a
            href="#admission-info"
            className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
          >
            Get Admission Info
          </a>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <div className="relative w-full h-full">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327281/ku-banner3_c0gb6a.jpg"
          alt="KU Online Courses"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Explore UG & PG Programs
          </h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
            Choose from a wide range of industry-ready <br />
            undergraduate and postgraduate programs.
          </p>
          <a
            href="#courses"
            className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>

        {/* University Introduction Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side: Image */}
              <div>
                <Image
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp"
                  alt="Kurukshetra University"
                  width={100}
                  height={100}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              {/* Right side: Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  Discover the Legacy of Excellence at - <br />
                  <span className="bg-blue-600 text-white px-2 py-1 rounded">
                    Kurukshetra University Online
                  </span>
                </h2>
                <p className="mt-4 text-gray-700">
                  <strong>Kurukshetra University</strong> is a premier institution of higher education 
                  established in 1956 in the historic city of <strong>Kurukshetra, Haryana</strong>. 
                  The university has earned the prestigious <strong>NAAC A++ grade accreditation</strong>, 
                  placing it among the top educational institutions in India.
                </p>
                <p className="mt-3 text-gray-700">
                  <strong>Kurukshetra University Online</strong> offers UGC-entitled degree programs 
                  that combine academic rigor with the flexibility needed by today's learners. 
                  With a legacy of over six decades in education, KU Online brings quality learning 
                  to your doorstep through its advanced digital platform.
                </p>
                <p className="mt-3 text-gray-700">
                  Named after the ancient land of Kurukshetra, renowned as the setting of the epic Mahabharata, 
                  the university embodies the spirit of knowledge and wisdom. Our online programs are designed 
                  to help working professionals and students achieve their career goals while maintaining 
                  their personal and professional commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation & Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Kurukshetra University Online?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access diverse learning resources, get faculty guidance, boost your employability, 
                and benefit from placement assistance with Kurukshetra University Online.
              </p>
            </div>

            {/* Accreditation Logos */}
            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" alt="UGC" className="h-16" />
              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp" alt="NAAC A++" className="h-16" />
              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp" alt="NIRF" className="h-16" />
              <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp" alt="AIU" className="h-16" />
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Diverse Learning Resources",
                  description: "Access to e-books, video lectures, and interactive learning materials tailored to different learning styles.",
                  icon: <FaBookOpen className="text-blue-600 text-3xl" />
                },
                {
                  title: "Expert Faculty Support",
                  description: "Learn from experienced faculty members and receive personalized academic guidance throughout your program.",
                  icon: <FaUserTie className="text-blue-600 text-3xl" />
                },
                {
                  title: "Career Development Services",
                  description: "Enhance your employability with resume workshops, interview preparation, and career counseling.",
                  icon: <FaBriefcase className="text-blue-600 text-3xl" />
                },
                {
                  title: "Placement Assistance",
                  description: "Get support in connecting with potential employers through our placement cell and industry partnerships.",
                  icon: <FaClipboardCheck className="text-blue-600 text-3xl" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section with Tabs */}
         <section id="courses" className="py-12 px-6 bg-white font-[Inter]">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#e60000] font-[Poppins]">
        Explore kurukshetra University Online Programs
      </h2>

      {/* Tabs for Filter */}
      <Tabs.Root defaultValue="all" className="w-full">
        <Tabs.List className="flex justify-center gap-4 mb-10 flex-wrap">
          <Tabs.Trigger
            value="all"
            className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold 
                       hover:bg-[#e60000] hover:text-white transition-colors duration-300
                       radix-state-active:bg-[#e60000] radix-state-active:text-white"
          >
            All
          </Tabs.Trigger>
          <Tabs.Trigger
            value="ug"
            className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold 
                       hover:bg-[#e60000] hover:text-white transition-colors duration-300
                       radix-state-active:bg-[#e60000] radix-state-active:text-white"
          >
            UG Programs
          </Tabs.Trigger>
          <Tabs.Trigger
            value="pg"
            className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold 
                       hover:bg-[#e60000] hover:text-white transition-colors duration-300
                       radix-state-active:bg-[#e60000] radix-state-active:text-white"
          >
            PG Programs
          </Tabs.Trigger>
        </Tabs.List>

        {/* All Courses */}
        <Tabs.Content value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allCourses.map((course, idx) => (
              <EnquireCard
                key={idx}
                {...course}
                universityName="Chandigarh University Online"
              />
            ))}
          </div>
        </Tabs.Content>

        {/* UG Courses */}
        <Tabs.Content value="ug">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ugCourses.map((course, idx) => (
              <EnquireCard
                key={idx}
                {...course}
                universityName="Chandigarh University Online"
              />
            ))}
          </div>
        </Tabs.Content>

        {/* PG Courses */}
        <Tabs.Content value="pg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pgCourses.map((course, idx) => (
              <EnquireCard
                key={idx}
                {...course}
                universityName="Chandigarh University Online"
              />
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 border border-black-200 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-black-600 mb-3">{benefit.title}</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500">►</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Procedure */}
        <section id="admission-info" className="relative py-20 bg-gray-50">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-400 to-blue-500 z-0 rounded-full"></div>

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
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-1">
              <Image width={100} height={100} loading='lazy' src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327281/ku-certi_dguqgj.webp" alt="Kurukshetra University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Online Degree from Kurukshetra University
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                Kurukshetra University Online offers flexible learning opportunities with the same rigor and value as on-campus programs.
                Our online degrees are designed for working professionals and students who need flexibility without compromising on quality.
              </p>
              <h3 className="text-xl font-semibold mb-2">Benefits of KU Online</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>UGC-entitled degrees recognized nationwide</li>
                <li>Learn from experienced faculty members</li>
                <li>Flexible learning schedule to balance work and study</li>
                <li>Comprehensive study material and online resources</li>
                <li>Affordable fee structure with easy payment options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Frequently Asked Questions (FAQs) – Kurukshetra University Online
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800"
                  >
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
          </div>
           {openModal && (
                    <ApplyEnquiryModal
                      open={!!openModal}
                      onOpenChange={(v) => !v && setOpenModal(null)}
                      title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                      subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                      imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp"
                      universityName="Kurukshetra University Online"
                      defaultProgram="MBA"
                      formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                    />
                  )}
        </section>


          <section className="py-12 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Our Alumni Work At
                    </h2>
                    <p className="text-xl text-gray-600 mt-2">
                      Reputed organizations where Kurukshetra University Online graduates have built successful careers
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp" alt="Company" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp" alt="Microsoft" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp" alt="Company 9" className="h-12 object-contain" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp" alt="Company 10" className="h-12 object-contain" />
                    </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp" alt="Company 10" className="h-12 object-contain" />
                    </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp" alt="Company 10" className="h-12 object-contain" />
                    </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp" alt="Company 10" className="h-12 object-contain" />
                    </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <Image width={100} height={100}loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp" alt="Company 10" className="h-12 object-contain" />
                    </div>
                  </div>
                </div>
              </section>


        {/* Footer */}
        <footer className="bg-[#1a1a1a] text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Important Links */}
            <div>
              <h3 className="text-white font-bold mb-4">IMPORTANT LINKS</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <ul className="space-y-2">
                  <li><a href="#Home" className="hover:text-blue-400">Home</a></li>
                  <li><a href="#About Us" className="hover:text-blue-400">About Us</a></li>
                  <li><a href="#Courses" className="hover:text-blue-400">Programs</a></li>
                  <li><a href="#Admission" className="hover:text-blue-400">Admissions</a></li>
                  <li><a href="#Aggredation" className="hover:text-blue-400">UGC-DEB Approval</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400">Student Portal</a></li>
                  <li><a href="#faq" className="hover:text-blue-400">FAQs</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                  <li><a href="#" className="hover:text-blue-400">Mandatory Disclosure</a></li>
                  <li><a href="#" className="hover:text-blue-400">Public Notice</a></li>
                </ul>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-bold mb-4">ABOUT</h3>
              <p className="text-sm leading-6">
                Kurukshetra University Online offers UGC-entitled online degree programs with a legacy of academic excellence since 1956.
                With NAAC A++ accreditation, we provide quality education that combines traditional values with modern learning approaches
                to help students build successful careers in today's competitive world.
              </p>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-white font-bold mb-4">GET IN TOUCH</h3>
              <p className="text-sm leading-6">
                Kurukshetra University<br />
                Kurukshetra, Haryana<br />
                India - 136119
              </p>
              <p className="mt-3 text-sm">
                General Helpline No: <br />
                <a href="tel:+91 7042646766" className="text-yellow-400 font-semibold">+91 7042646766</a>
              </p>
              <p className="mt-2 text-sm">
                Email: <br />
                <a href="mailto:info@unifostedu.com" className="text-yellow-400 font-semibold">info@unifostedu.com</a>
              </p>
            </div>
          </div>

          {/* Logo + Social */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku-logo_nqbxot.png" alt="KU Online" width={100} height={100} className="h-10" />
              <div>
                <h2 className="text-white font-bold text-xl">KU Online</h2>
                <p className="text-sm text-gray-400">Quality Education Since 1956</p>
              </div>
            </div>
          </div>
               <div className="border-t border-gray-700 pt-8 mb- 8">
            <h4 className="text-lg font-semibold mb-4 text-white text-center">Popular Programs & Specializations</h4>
            <div className="flex flex-wrap justify-center gap-2 cursor-pointer">
              {[
  "BBA Business Administration - KU Online",
  "BCA Computer Applications - KU Online",
  "B.Com Commerce - KU Online",

  "MBA General Management - KU Online",
  "MCA Computer Applications - KU Online",
  "M.Com Commerce - KU Online",
  "MA English - KU Online",
  "MA Journalism - KU Online",
  "MA Mass Communication - KU Online",
  "MA Political Science - KU Online",

  "MBA Finance Management - KU Online",
  "MBA Information Technology Management - KU Online",
  "MBA Human Resource Management - KU Online",
  "MBA Marketing - KU Online",
  "MBA Business Analytics - KU Online"
]
.map((keyword, index) => (
                <span onClick={()=>(setOpenModal('apply'))}
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                  title={keyword}
                >
                  {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                </span>
              ))}
            </div>
          </div>
          {/* Bottom Note */}
          <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
            All rights reserved | Kurukshetra University Online
          </div>
        </footer>
      </div>
    </>
  );
};

export default KU;