"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EnquiryForm from "@/components/EnquiryForm";
import AccreditationSection from "@/components/AccreditationSection";
import { FaGraduationCap, FaUsers, FaChalkboardTeacher, FaRupeeSign } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { BsBuildingCheck } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { ChevronDown } from "lucide-react";
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

export default function ChandigarhPage() {
  const [activeCategory, setActiveCategory] = useState("PG"); // PG or UG
  const [current, setCurrent] = useState(0);

  const ugCourses = [
    {
      title: "Bachelor of Arts - Journalism & Mass Communication (BA-JMC)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,66,668",
      specialization: "Journalism, Media Studies",
      image: "/images/ba-jmc.webp",
    },
    {
      title: "Bachelor of Business Administration - Business Analytics (BBA - KPMG)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,60,000",
      specialization: "Business Analytics with KPMG",
      image: "/images/bba.webp",
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,68,000",
      specialization: "Marketing, HR, Entrepreneurship, Digital Marketing, Fin-Tech",
      image: "/images/bba-online-image.webp",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 or equivalent",
      fees: "₹1,70,000",
      specialization: "IT & Systems",
      image: "/images/bca-online-image.webp/images/bca.webp",
    },
  ];

  const pgCourses = [
    {
      title: "Master of Business Administration - Business Analytics (MBA - KPMG)",
      duration: "2 Years(4 Semesters)",
      eligibility: "Bachelor degree in any discipline or professional programs (CA/ICWA etc.)",
      fees: "₹2,00,000",
      specialization: "Business Analytics with KPMG",
      image: "/images/mba.webp",
    },
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,10,668",
      specialization: "Finance, Marketing, HR, IT, Operations, International Business, Digital Marketing, Fin-Tech",
      image: "/images/mba-online-image.webp",
    },
    {
      title: "Master of Computer Applications - AI & ML",
      duration: "2 Years",
      eligibility: "BCA/B.Sc(IT/CS)/B.E/B.Tech",
      fees: "₹1,40,000",
      specialization: "AI, ML, Data Analytics, Cloud Computing, Full Stack",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Science - Data Science",
      duration: "2 Years",
      eligibility: "Bachelor's in BA/BCA/B.Sc/BE/B.Tech",
      fees: "₹1,46,668",
      specialization: "Full Stack, Web Development",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Computer Applications - Cloud Computing (AWS Academy)",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation",
      fees: "₹1,40,000",
      specialization: "Cloud, AWS, DevOps, Full Stack",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Computer Applications - Data Analytics",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation with Math/Stats/Programming",
      fees: "₹1,40,000",
      specialization: "Big Data, Data Mining",
      image: "/images/mca1.webp",
    },
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation",
      fees: "₹1,40,000",
      specialization: "General IT, Software Development",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Science (Mathematics)",
      duration: "2 Years",
      eligibility: "Bachelor's with Math",
      fees: "₹1,00,000",
      specialization: "Pure Math, Applied Math",
      image: "/images/mba.webp",
    },
    {
      title: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline or BA(Hons.)",
      fees: "₹1,00,000",
      specialization: "Psychology, English, Economics",
      image: "/images/ma1.webp",
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
  const [openModal, setOpenModal] = useState(false);
//   const [openModal, setOpenModal] = useState(null);
  const benefits = [
    {
      icon: <FaGraduationCap className="text-red-500 text-4xl" />,
      title: "UGC Entitled Programs",
      points: [
        "Recognition by the UGC, India is a stamp of approval for credibility, quality & acceptance.",
        "CU Online degree is held in high regard by academicians & corporate leaders globally."
      ]
    },
    {
      icon: <BsBuildingCheck className="text-red-500 text-4xl" />,
      title: "HBPE & KPMG Empowered Courses",
      points: [
        "Backed by prestigious universities and globally renowned courses.",
        "VIP access to insights from industry stalwarts & global faculties."
      ]
    },
    {
      icon: <MdSupportAgent className="text-red-500 text-4xl" />,
      title: "24x7 Learner Support + On-Demand Examination",
      points: [
        "Comprehensive online support & resources anytime.",
        "Freedom to schedule exams when you’re ready."
      ]
    },
    {
      icon: <AiOutlineSchedule className="text-red-500 text-4xl" />,
      title: "Interactive Industry Expert Sessions",
      points: [
        "Engage in real-time discussions with industry leaders.",
        "Gain confidence & practical know-how from interactive experiences."
      ]
    },
    {
      icon: <FaUsers className="text-red-500 text-4xl" />,
      title: "Career & Placement Assistance",
      points: [
        "Networking opportunities, internships & job placements.",
        "Industry partnerships for career growth."
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-red-500 text-4xl" />,
      title: "Globally Acclaimed Faculty",
      points: [
        "Learn from acclaimed professionals with vast expertise.",
        "Rich & insightful learning experiences."
      ]
    },
    {
      icon: <FaRupeeSign className="text-red-500 text-4xl" />,
      title: "Affordable & Flexible Fee Structure",
      points: [
        "Scholarships & discounts available.",
        "Pay per seat with flexible options."
      ]
    },
    {
      icon: <BiBookContent className="text-red-500 text-4xl" />,
      title: "World Class Learning Management System (LMS)",
      points: [
        "Advanced LMS for seamless learning.",
        "Personalized digital learning experience."
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
    question: "What is Chandigarh University Online?",
    answer: `Chandigarh University Online (CU Online) is the Centre for Distance and Online Education (CDOE) of Chandigarh University. It offers UGC-entitled, AICTE-approved online bachelor's and master's degree programs designed for working professionals, fresh graduates, and learners across India and abroad. CU Online combines academic excellence with flexibility, allowing students to study from anywhere while receiving globally recognized degrees.`
  },
  {
    question: "Is Chandigarh University Online degree valid?",
    answer: `Yes, CU Online degrees are fully valid and recognized by UGC (University Grants Commission). All programs are entitled by UGC-DEB, making them equivalent to regular on-campus degrees. Chandigarh University has also been accredited with NAAC A+ and holds global recognition, ensuring your degree is accepted by employers, corporates, and universities in India and abroad.`
  },
  {
    question: "What courses are offered at Chandigarh University Online?",
    answer: `Chandigarh University Online offers a wide range of undergraduate and postgraduate programs across multiple disciplines:
    
    🔹 Undergraduate Programs (UG):
    - BBA (Bachelor of Business Administration)
    - BCA (Bachelor of Computer Applications)
    - BA (Bachelor of Arts)
    - B.Com (Bachelor of Commerce)

    🔹 Postgraduate Programs (PG):
    - MBA (Master of Business Administration) with specializations like Marketing, Finance, HR, IT, International Business, Data Analytics, etc.
    - MCA (Master of Computer Applications)
    - M.Com (Master of Commerce)
    - MA in English, Psychology, Sociology, and more

    These programs are designed with industry relevance and future-ready skills in mind.`
  },
  {
    question: "What is the eligibility for Chandigarh University Online courses?",
    answer: `Eligibility criteria vary by course:
    - For UG Programs: Candidates must have completed 10+2 from a recognized board.
    - For PG Programs: A bachelor's degree from a recognized university in a relevant field is required.
    - Some programs may require specific subject combinations or a minimum percentage.

    International students must submit equivalent qualifications recognized by relevant authorities.`
  },
  {
    question: "What is the fee structure of Chandigarh University Online?",
    answer: `CU Online offers an affordable and flexible fee structure. Fees vary depending on the program:
    - UG Programs: ₹25,000 – ₹35,000 per year
    - PG Programs (MBA, MCA, M.Com, MA): ₹30,000 – ₹50,000 per year

    Scholarships and installment options are available. Students can pay semester-wise or annually, making it budget-friendly for working professionals and students.`
  },
  {
    question: "Does Chandigarh University Online provide placement assistance?",
    answer: `Yes, CU Online provides strong career support and placement assistance. Students gain access to:
    - 300+ top recruiters and corporate partners
    - Virtual placement drives and job fairs
    - Industry mentorship programs
    - Resume building workshops and interview preparation
    - Internships and live projects with leading companies
    
    Many CU Online graduates have secured roles in MNCs, IT companies, consulting firms, and startups across India and abroad.`
  },
  {
    question: "What is the learning method at Chandigarh University Online?",
    answer: `CU Online provides a world-class Learning Management System (LMS) which includes:
    - Live interactive classes by expert faculty
    - Recorded video lectures (accessible anytime)
    - Digital e-learning materials, case studies, and projects
    - Discussion forums and peer-to-peer interaction
    - On-demand doubt clearing and 24/7 academic support
    
    The learning is flexible and completely online, making it easy for students to balance work, study, and personal commitments.`
  },
  {
    question: "Are Chandigarh University Online degrees accepted abroad?",
    answer: `Yes, CU Online degrees are globally recognized. The university is ranked among top Indian private universities and collaborates with international institutions. Many alumni pursue higher education and jobs abroad with CU Online degrees. Employers worldwide accept the degree as equivalent to traditional on-campus degrees.`
  },
  {
    question: "How are exams conducted at Chandigarh University Online?",
    answer: `Examinations at CU Online are conducted through an online proctored system:
    - Students can schedule exams at their convenience within the exam window.
    - AI-enabled remote proctoring ensures transparency and fairness.
    - Exams include objective as well as subjective questions, case studies, and projects.
    - Results are declared online with transcripts and degree certificates sent digitally and physically.`
  },
  {
    question: "How can I apply for Chandigarh University Online programs?",
    answer: `You can apply online in a few steps:
    1. Visit the official Chandigarh University Online website.
    2. Register and fill out the application form with personal and academic details.
    3. Upload scanned documents (marksheets, ID proof, photograph, etc.).
    4. Pay the application fee and confirm your admission.
    
    After verification, you will receive confirmation and access to the LMS to begin your learning journey.`
  }
];

   const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header & Hero Section */}
      <header className="bg-white shadow-md fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">
          <img src="/images/logo-cu.png" alt="Chandigarh University" className="h-12" />
          <div className="flex items-center gap-4">
            <a href="tel:+917042867717" className="flex items-center gap-2 text-gray-700 font-medium">
              📞 +91-7042867717
            </a>
            <button 
              onClick={() => setOpenModal({ type: 'apply' })}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative w-full h-[70vh] mt-[90px] mb-[10px]">
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
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image
            src="/images/banner-cu1.webp"
            alt="Fake Banner 1"
            width={1400}
            height={800}
            className="object-cover object-center w-full h-full"
            priority
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Image
            src="/images/banner-cu2.jpg"
            alt="Fake Banner 2"
            width={1400}
            height={800}
            className="object-cover object-center w-full h-full"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Image
            src="/images/banner-cu3.jpg"
            alt="Fake Banner 3"
            width={1400}
            height={800}
            className="object-cover object-center w-full h-full"
          />
        </SwiperSlide>

         {/* Slide 4 */}
        <SwiperSlide>
          <Image
            src="/images/banner-cu4.jpg"
            alt="Fake Banner 3"
            width={1400}
            height={800}
            className="object-cover object-center w-full h-full"
          />
        </SwiperSlide>

         {/* Slide 5 */}
        <SwiperSlide>
          <Image
            src="/images/banner-cu5.jpg"
            alt="Fake Banner 3"
            width={1400}
            height={800}
            className="object-cover object-center w-full h-full"
          />
        </SwiperSlide>

         {/* Slide 6 */}
        <SwiperSlide>
          <Image
            src="/images/banner-cu4.jpg"
            alt="Fake Banner 3"
            width={1400}
            height={800}
            className="object-cover object-center w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </section>
<section className="py-10 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left side: Image */}
      <div>
        <img
          src="/images/chandigarh.webp"
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
          <strong>Chandigarh University (CU)</strong> is a leading Indian
          institution offering a unique blend of academic excellence and
          professional growth. Situated in the vibrant city of{" "}
          <strong>Mohali, Punjab</strong>, CU has rapidly emerged as one of the{" "}
          <strong>fastest-growing private universities</strong> in Asia.
        </p>
        <p className="mt-3 text-gray-700">
          <strong>Chandigarh University Online</strong> offers UGC-entitled
          degrees and industry-oriented programs to help learners achieve global
          recognition. With a flexible learning environment, expert faculty, and
          modern LMS, it enables working professionals and students to elevate
          their careers while learning from anywhere.
        </p>
        <p className="mt-3 text-gray-700">
          Chandigarh University Online has become a top choice for those seeking
          quality education in India, with a strong focus on{" "}
          <strong>practical skills</strong> and{" "}
          <strong>career readiness</strong>. We are committed to providing a
          transformative learning experience that prepares students for success
          in the global job market.
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
          { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
          { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
          { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
          { src: "/images/wes.webp", alt: "WES", name: "WES" },
        ]}
      />

      {/* UG/PG Programs Carousel */}
      <main className="pt-32 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-center font-semibold mb-10">
          Explore Chandigarh University Online Programs
        </h1>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-6 py-4 w-60  text-xl ${activeCategory === "PG" ? "bg-[#e60000] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => { setActiveCategory("PG"); setCurrent(0); }}
          >
            PG Programs
            <span className="block text-sm">(After Graduation)</span>
          </button>
          <button
            className={`px-6 py-4 w-60 text-xl ${activeCategory === "UG" ? "bg-[#e60000] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => { setActiveCategory("UG"); setCurrent(0); }}
          >
            UG Programs
            <span className="block text-sm">(After 12th)</span>
          </button>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 z-10 shadow-lg"
          >
            Prev
          </button>
          <div className="flex gap-4 justify-center">
            {visibleCourses.map((program, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <img src={program.image} alt={program.title} className="w-full h-60 object-cover" />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-medium text-red-500 mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-2"><span className="font-semibold">Duration:</span> {program.duration}</p>
                      <p className="text-gray-600 mb-2"><span className="font-semibold">Eligibility:</span> {program.eligibility}</p>
                      <p className="text-gray-600 mb-2 truncate"><span className="font-semibold">Specialization:</span> {program.specialization}</p>
                    </div>
                    <p className="text-gray-600 font-medium mt-4">
                      Fees: <span className="text-red-500 font-semibold border border-[#f58225] p-1 rounded">{program.fees}</span>
                    </p>
                    <div className="mt-4">
                        <button
                         onClick={() => setOpenModal({ type: 'apply', program: program.title })}
                         className="inline-block bg-black text-white font-bold py-2 px-4 rounded hover:bg-red-700 w-full text-center"
                        >
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 z-10 shadow-lg"
          >
            Next
          </button>
        </div>
        
      </main>
      
       <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 border border-red-200 rounded-lg shadow-sm hover:shadow-md transition bg-white">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-red-600 mb-3">{benefit.title}</h3>
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
      </div>
    </section>

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
                 className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
               >
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
            <section className="bg-black py-12 px-4">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <Image src="/images/certificate-cu.webp" alt="Chandigarh University Certificate" width={100} height={100} loading="lazy" className="w-full max-w-md mx-auto rounded shadow-lg" />
                </div>
                <div className="flex-1 text-white">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">Earn Your Online Degree from Chandigarh University</h2>
                  <p className="mb-6 text-lg">Chandigarh University Online Enhance your career with daily live classes, skill-based training, and global recognition.</p>
                  <h3 className="text-xl font-semibold mb-2">Benefits of Chandigarh University Online</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Interactive Live & Recorded Sessions</li>
                    <li>Personalized Career Support</li>
                    <li>Global Exposure & Alumni Network</li>
                    <li>Affordable, Flexible & Recognized Programs</li>
                  </ul>
                </div>
              </div>
            </section>

             
             <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions (FAQs) – Chandigarh University Online
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
                            onOpenChange={(isOpen) => {
                            if (!isOpen) setOpenModal(null);
                               }}

                            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                            imageSrc="/images/girlImage.webp"
                            universityName="chandigarh University Online"
                            defaultProgram="MBA"
                            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                          />
                        )}
    </section>

             <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Important Links */}
        <div>
          <h3 className="text-white font-bold mb-4">IMPORTANT LINKS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Home</a></li>
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Vision & Mission</a></li>
              <li><a href="#" className="hover:text-red-500">Events</a></li>
              <li><a href="#" className="hover:text-red-500">How to Apply</a></li>
              <li><a href="#" className="hover:text-red-500">Admission Guideline</a></li>
              <li><a href="#" className="hover:text-red-500">UGC-DEB Approval</a></li>
              <li><a href="#" className="hover:text-red-500">Online Degree</a></li>
              <li><a href="#" className="hover:text-red-500">Equivalence</a></li>
              <li><a href="#" className="hover:text-red-500">Education Loan</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Student Stories</a></li>
              <li><a href="#" className="hover:text-red-500">FAQs</a></li>
              <li><a href="#" className="hover:text-red-500">Office Hours</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500">CIQA Report</a></li>
              <li><a href="#" className="hover:text-red-500">Student Facilitation</a></li>
              <li><a href="#" className="hover:text-red-500">Mandatory Disclosure</a></li>
              <li><a href="#" className="hover:text-red-500">Public Notice</a></li>
              <li><a href="#" className="hover:text-red-500">Regular Programs Admissions</a></li>
            </ul>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-bold mb-4">ABOUT</h3>
          <p className="text-sm leading-6">
            Chandigarh University's  for  Online Education  
            has an array of online bachelor's and master's programs to help you achieve your educational goals. 
            The courses are globally benchmarked, with industry exposure, and regular interface with 
            top-notch industry experts. Your education at Chandigarh University will be steeped in global learning.
          </p>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-white font-bold mb-4">GET IN TOUCH</h3>
          <p className="text-sm leading-6">
            Chandigarh University<br />
            NH-05 Chandigarh-Ludhiana Highway,<br />
            Mohali, Punjab (INDIA)
          </p>
          <p className="mt-3 text-sm">
            General Helpline No: <br />
            <a href="tel:+91-7042867717" className="text-yellow-400 font-semibold">+91-7042867717</a>
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
          <img src="/images/cu-logo.webp" alt="CU Online" className="h-10" />
          <div>
            <h2 className="text-white font-bold text-xl">CU Online</h2>
            <p className="text-sm text-gray-400">Discover. Learn. Empower.</p>
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
  "MA Economics - CU Online"
]

      
                                          .map((keyword, index) => (
                                              <span
                                                key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                                                className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                                                title={keyword}
                                              >
                                                {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
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
    
  );
}
