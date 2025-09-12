'use client';
import React from 'react';
import {
  FaBookOpen,
  FaUserTie,
  FaRobot,
  FaBriefcase,
  FaBook,
  FaUniversity,
  FaUserFriends,
  FaClipboardCheck,
  FaGraduationCap,
  FaAward,
  FaGlobe,
} from "react-icons/fa";
import { motion } from 'framer-motion';
import EnquireCard from '@/components/EnquireCard';
import Image from 'next/image';
import AdmissionProcess from '@/components/AdmissionProcess';

const Amity = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,65,000- 2,25,000",
      specialization: "BBA (General,Data Analytics, Travel And Tourism Management, Professional Certificate in Business Analytics) ",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,50,000 - 2,25,000",
      specialization: " BCA, (General, Cloud and Security, Software Engineering, Data Science, Data Engineering(HCL Tech), Data Analytics,Software Engineering(HCL Tech))",
      image: "/images/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "99,000 - 2,50,000",
      specialization: "B.Com(General, Hons,International Finance & Accounting",
      image: "/images/bcom.jpeg",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "99,000 - 1,70,000",
      specialization: "BA(General, Journalism and Mass Communication, Native Languages(Kannada,Malayalam, Tamil, Telugu), Psychology, English, Sociology, Political Science,Economics)",
      image: "/images/ba.jpeg",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,99,000 - 2,99,000",
      specialization: "MBA(General,Information Technology Management, Dual Specialization, Human Resource Analytics, Data Science, Business Analytics, International Business Management, Digital Entrepreneurship, Digital Marketing Management,Entrepreneurship & Leadership Management,Finance & Accounting Management,Hospitality Management,Global Finance Market,Insurance Management,Marketing & Sales Management,Petroleum & Natural Gas,Producation and Operations Management,Retail Management )",
      image: "/images/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "170,000- 2,50,000",
      specialization: "MCA(General, Cyber Security, Blockchain Technology , Machine Learning and Artificial Intelligence, Augmented Reality and Virtual Reality, Software Engineering,",
      image: "/images/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,20,000",
      specialization: "General, Financial Management, Financial Technology",
      image: "/images/m.com.jpeg",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,30,000 - 2,50,000",
      specialization: " MA(Psychology, Journalism and Mass Communication, Public Policy& Governance,English, Sociology",
      image: "/images/ma1.jpeg",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation ",
      fees: "2,50,000",
      specialization: "Data Science",
      image: "/images/m.com.jpeg",
    },
  ];

  const ug_pgCourses = [
    {
      course: "BBA + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "3,45,800",
      specialization: "BBA + MBA",
      image: "/images/mba.jpeg",
    },
    {
      course: "BCA+ MCA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "3,04,000",
      specialization: "BCA+ MCA",
      image: "/images/mca1.jpeg",
    },
    {
      course: "B.Com + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "2,83,100 - 3,05,000",
      specialization: "B.Com + MBA",
      image: "/images/m.com.jpeg",
    },
  ];

  const highlights = [
    {
      img: "/images/wasc.png",
      title: "WASC Accreditation (USA)",
      description: "Amity Online is India's only university accredited by the Western Association of Schools and Colleges — a distinguished recognition of global academic excellence.",
    },
    {
      img: "/images/wes.png",
      title: "WES Recognition",
      description: "Degrees recognised by World Education Services (WES) Canada & USA, enabling smoother pathways for higher studies and global career mobility.",
    },
    {
      img: "/images/qs.png",
      title: "QS Ranked Online MBA",
      description: "Amity Online offers India's only Online MBA ranked by QS under Asia Pacific Top 10 - a global recognition for academic strength, learner outcomes, and digital innovation.",
    },
    {
      img: "/images/qaa.png",
      title: "QAA (UK) Accreditation",
      description: "Accredited by the UK's Quality Assurance Agency (QAA), assuring students of globally benchmarked academic quality.",
    },
    {
      img: "/images/the.webp",
      title: "Times Higher Education Employability Rankings",
      description: "Amity University is ranked among the best globally for graduate employability and employer reputation by Times Higher Education.",
    },
    {
      img: "/images/pan-india.png",
      title: "Pan-India Campus Access & Offline Events",
      description: "Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation - blending digital convenience with real-world connection.",
    },
    {
      img: "/images/amigo.png",
      title: "Amigo: Learning On-the-Go",
      description: "The Amigo app makes learning seamless and mobile — attend live classes, track progress, access materials, and more on your schedule.",
    },
    {
      img: "/images/ai-tutor.png",
      title: "Prof. Ami: Your AI-Powered Personal Tutor",
      description: "Meet Prof. Ami — your always-on, AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.",
    },
    {
      img: "/images/indu-Certi.png",
      title: "Industry Certifications for Better Employability",
      description: "Gain an edge with in-demand certifications from top industry bodies and partners — integrated within your program to boost your skills and CV.",
    },
    {
      img: "/images/internship.png",
      title: "Internship Opportunities",
      description: "Access curated internships with leading companies through our corporate network, helping you gain real-world experience and stand out in the job market.",
    },
    {
      img: "/images/ai-application.png",
      title: "AI-Powered Career Discovery Platform",
      description: "From mock interviews and resume building to job search and easy-apply tools — our AI-powered platform ensures you're career-ready from day one.",
    },
    {
      img: "/images/people.png",
      title: "beSocial App for Campus Life",
      description: "Your virtual student hub — the beSocial app lets you network, join clubs, attend events, and be part of a vibrant, online-first community.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

   return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight font-[Poppins]">
              Online Amity University
            </h1>
            
            {/* NIRF Ranking and Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-800 font-semibold text-sm">NIRF Rank: 29</span>
              </div>
              <div className="flex items-center">
                {[1].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-700 font-medium">4.8/5</span>
              </div>
            </div>

            <p className="text-lg font-medium text-gray-700 mb-6">
              Private University in Noida, Uttar Pradesh, India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Amity University online programs have revolutionized higher education in India, offering UGC-approved degrees with flexible learning options. Whether you're a working professional or a fresh graduate, online Amity University provides world-class education through innovative digital platforms.<br/>
              Amity provides you a perfect blend of academic as well as digital learning. It provides you a wide range of online degrees in various specialization like<b> Digital Marketing, Data Science, Business Analytics, Finance, Human Resource Management, International Business, Cyber Security, Cloud Computing, Artificial Intelligence</b> and many more.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r">
              <p className="text-blue-800">
                India's first university recognised by UGC for providing online degree programs by expert faculty.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
            <Image
              src="/images/amitypic.png"
              alt="Online Amity University campus with modern infrastructure and digital learning facilities"
              width={600}
              height={400}
              className="relative rounded-xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Accreditation Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Globally Recognized & Accredited</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Amity Online University holds prestigious accreditations from leading educational bodies worldwide</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { src: "/images/ugc.png", alt: "UGC", name: "UGC" },
              { src: "/images/aicte.png", alt: "AICTE", name: "AICTE" },
              { src: "/images/nirf.png", alt: "NIRF", name: "NIRF" },
              { src: "/images/wes.png", alt: "WES", name: "WES" },
              { src: "/images/aiu.png", alt: "AIU", name: "AIU" },
              { src: "/images/acu.png", alt: "CARRES", name: "ACU" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="h-16 w-16 relative mb-3">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UG Courses */}
      <section className="py-16 bg-gray-50 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-blue-600 mr-3"></div>
              <FaGraduationCap className="text-blue-600 text-xl" />
              <div className="w-12 h-0.5 bg-blue-600 ml-3"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Undergraduate Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Comprehensive bachelor's degrees designed to build strong foundations for your career</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {ugCourses.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <EnquireCard {...item} universityName="Amity University Online" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PG Courses */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-blue-600 mr-3"></div>
              <FaAward className="text-blue-600 text-xl" />
              <div className="w-12 h-0.5 bg-blue-600 ml-3"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Postgraduate Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Advanced degrees to specialize and accelerate your professional growth</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {pgCourses.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <EnquireCard {...item} universityName="Amity University Online" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrated Courses */}
      <section className="py-16 bg-gray-50 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-blue-600 mr-3"></div>
              <FaGlobe className="text-blue-600 text-xl" />
              <div className="w-12 h-0.5 bg-blue-600 ml-3"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Integrated Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Seamless educational pathways combining undergraduate and postgraduate studies</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {ug_pgCourses.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <EnquireCard {...item} universityName="Amity University Online" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Amity */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Why Choose Amity Online University?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Experience the perfect blend of academic excellence and digital innovation</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <FaBookOpen className="text-2xl" />, title: "Diverse learning mediums", text: "E-books, printed & audio books, videos to suit all styles." },
              { icon: <FaUserTie className="text-2xl" />, title: "Dedicated Academic Advisor", text: "Experts to guide every step of your career." },
              { icon: <FaRobot className="text-2xl" />, title: "AI-Professor AMI", text: "Powered by ChatGPT-4 for better learning." },
              { icon: <FaBriefcase className="text-2xl" />, title: "Career Services", text: "Workshops, internships, resume support." },
              { icon: <FaBook className="text-2xl" />, title: "Doorstep delivery", text: "Only online university delivering physical books." },
              { icon: <FaUniversity className="text-2xl" />, title: "Metaverse Campus", text: "Explore campus in metaverse." },
              { icon: <FaUserFriends className="text-2xl" />, title: "Offline Experiences", text: "On-campus orientation and peer bonding." },
              { icon: <FaClipboardCheck className="text-2xl" />, title: "Placement Opportunities", text: "Resume prep and interview assistance." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="text-blue-600 bg-blue-50 p-4 rounded-full mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights/Features */}
      {/* Improved Amity University Advantages Section */}
<section className="py-12 relative overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-900">
  {/* Subtle animated elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full filter blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Poppins]">Amity Online Advantages</h2>
      <p className="text-blue-100 max-w-2xl mx-auto">
        Discover what makes Amity Online a leader in digital education
      </p>
    </motion.div>

    {/* Compact grid layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {highlights.map((item, idx) => (
        <motion.div 
          key={idx} 
          className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200 hover:-translate-y-1 cursor-pointer min-h-[180px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Icon */}
          <div className="mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center p-2 shadow-md">
              <div className="w-6 h-6 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-blue-100 text-xs leading-tight line-clamp-3">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Compact stats bar */}
    <motion.div 
      className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-white">50K+</div>
        <div className="text-blue-200 text-xs">Students</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">100+</div>
        <div className="text-blue-200 text-xs">Programs</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">95%</div>
        <div className="text-blue-200 text-xs">Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">500+</div>
        <div className="text-blue-200 text-xs">Partners</div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Admission Process */}
      <AdmissionProcess />

      {/* Certificate + Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
              <Image 
                src="/images/amicri.jpeg" 
                alt="Amity University Certificate" 
                width={500} 
                height={350} 
                className="relative rounded-xl shadow-xl w-full"
              />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[Poppins]">Globally Recognized Online Degree</h2>
            <p className="mb-6 text-gray-600 text-lg">Amity University online programs offer daily live classes, career assistance, and hands-on LMS learning with Ivy League tie-ups.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Benefits of Online Amity University</h3>
            <ul className="space-y-3">
              {[
                "Daily LIVE Classes by International Faculty",
                "Career Assistance & Virtual Job Fairs",
                "International Collaboration with Ivy League",
                "Immersive Learning via World-Class LMS",
                "Industry-Relevant Curriculum",
                "Flexible Learning Schedule"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Our Hiring Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Top companies that recruit Amity Online University graduates</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              "/images/company.png", "/images/company1.png", "/images/company9.jpg", 
              "/images/com10.png", "/images/companany4.png", "/images/company6.png", 
              "/images/companany5.png", "/images/adove.png", "/images/samsung.png",
              "/images/3.webp", "/images/4.webp", "/images/5.webp", 
              "/images/6.webp", "/images/7.webp", "/images/8.webp", "/images/9.webp"
            ].map((src, i) => (
              <motion.div 
                key={i} 
                className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-md transition-all border border-gray-100"
                whileHover={{ y: -5, scale: 1.05 }}
                variants={fadeIn}
              >
                <div className="relative w-full h-12">
                  <Image
                    src={src}
                    alt="Top companies hiring Amity University online graduates"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">Begin Your Educational Journey with Amity Online</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with Amity University's UGC-entitled online degrees
            </p>
            
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Amity;