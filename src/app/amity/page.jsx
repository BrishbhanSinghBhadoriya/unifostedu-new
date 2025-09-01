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
} from "react-icons/fa";
import { motion } from 'framer-motion';
import EnquireCard from '@/components/EnquireCard';

const Amity = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,65,000- 2,25,000",
      specialization: "BBA (General,Data Analytics,   Travel And Tourism Management, Professional Certificate in Business Analytics) ",
      image: "/images/bba.jpeg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,50,000 - 2,25,000",
      specialization: " BCA, (General, Cloud  and Security, Software Engineering,  Data Science, Data Engineering(HCL Tech), Data Analytics,Software Engineering(HCL Tech))",
      image: "/images/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "99,000 - 2,50,000",
      specialization: "B,Com(General, Hons,International Finance & Accounting",
      image: "/images/bcom.jpeg",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "99,000 - 1,70,000",
      specialization: "BA(Genral, Jornalism and Mass Communication, Native Languages(Kannada,Malayalam, Tamil, Telugu), Psychology, English, Sociology, Political Science,Economics)",
      image: "/images/ba.jpeg",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,99,000 - 2,99,000",
      specialization: "MBA(General,Information Technology Management, Dual Specilization, Human Resource Analytics, Data Science, Business Analytics, International Business Management, Digital Enterpreneurship, Digital Marketing Management,Enterpreneurship & Leadership Management,Finance & Accounting Management,Hospitality Management,Global Finance Market,Insurance Management,Marketing & Sales Management,Petroleum & Natural Gas,Producation and Operations Management,Retail Management )",
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

  ] 
  
   {
  const highlights = [
    {
      img: "/images/wasc.png",
      title: "WASC Accreditation (USA)",
      description:
        "Amity Online is India's only university accredited by the Western Association of Schools and Colleges — a distinguished recognition of global academic excellence.",
    },
    {
      img: "/images/wes.png",
      title: "WES Recognition",
      description:
        "Degrees recognised by World Education Services (WES) Canada & USA, enabling smoother pathways for higher studies and global career mobility.",
    },
    {
      img: "/images/qs.png",
      title: "QS Ranked Online MBA",
      description:
        "Amity Online offers India's only Online MBA ranked by QS under Asia Pacific Top 10 - a global recognition for academic strength, learner outcomes, and digital innovation.",
    },
    {
      img: "/images/qaa.png",
      title: "QAA (UK) Accreditation",
      description:
        "Accredited by the UK's Quality Assurance Agency (QAA), assuring students of globally benchmarked academic quality.",
    },
    {
      img: "/images/the.webp",
      title: "Times Higher Education Employability Rankings",
      description:
        "Amity University is ranked among the best globally for graduate employability and employer reputation by Times Higher Education.",
    },
    {
      img: "/images/pan-india.png",
      title: "Pan-India Campus Access & Offline Events",
      description:
        "Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation - blending digital convenience with real-world connection.",
    },
    {
      img: "/images/amigo.png",
      title: "Amigo: Learning On-the-Go",
      description:
        "The Amigo app makes learning seamless and mobile — attend live classes, track progress, access materials, and more on your schedule.",
    },
    {
      img: "/images/ai-tutor.png",
      title: "Prof. Ami: Your AI-Powered Personal Tutor",
      description:
        "Meet Prof. Ami — your always-on, AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.",
    },

    {
      img: "/images/indu-Certi.png",
      title: "Industry Certifications for Better Employability",
      description:
        "Gain an edge with in-demand certifications from top industry bodies and partners — integrated within your program to boost your skills and CV.",
    },
    {
      img: "/images/internship.png",
      title: "Internship Opportunities",
      description:
        "Access curated internships with leading companies through our corporate network, helping you gain real-world experience and stand out in the job market.",
    },
    {
      img: "/images/ai-application.png",
      title: "AI-Powered Career Discovery Platform",
      description:
        "From mock interviews and resume building to job search and easy-apply tools — our AI-powered platform ensures you’re career-ready from day one.",
    },
    {
      img: "/images/people.png",
      title: "beSocial App for Campus Life",
      description:
        "Your virtual student hub — the beSocial app lets you network, join clubs, attend events, and be part of a vibrant, online-first community.",
    },
  ];

  

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      

      {/* Hero Section */}
      <section className="bg-white-100 py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-snug font-[Poppins]">
              Build a great career with Amity University Online
            </h1>
            <p> <span className="font-semibold text-gray-700">Private University in Noida, Uttar Pradesh, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
             Amity University online offers student a globally recognised degree programs as well as certification courses to enhance and boost up the career for future aspect.<br />
              It is India's first university recognised by UGC for providing online degree programs by expert facility.<br />
              It is mainly designed for working profressionals and students who want to persue a good degree but dur to some factors they couldn't complete the degree, Amity University has provided a great opportunity for them to complete their dream life and achieve whatever they want.
            </p>
            
          </div>
          <motion.img
            src="/images/amitypic.png"
            alt="Amity University"
            className="rounded-xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* UG & PG Course Cards */}
      {[{ title: "Undergraduate Courses", list: ugCourses }, { title: "Postgraduate Courses", list: pgCourses }, { title: "UG +PG", list: ug_pgCourses }].map((section, idx) => (
        <section key={idx} className="py-12 bg-white px-6 font-[Inter]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.list.map((item, index) => <EnquireCard key={index} {...item} universityName="Amity University Online" />)}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Amity */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Amity Online?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[{
            icon: <FaBookOpen />, title: "Diverse learning mediums", text: "E-books, printed & audio books, videos to suit all styles."
          }, {
            icon: <FaUserTie />, title: "Dedicated Academic Advisor", text: "Experts to guide every step of your career."
          }, {
            icon: <FaRobot />, title: "AI-Professor AMI", text: "Powered by ChatGPT-4 for better learning."
          }, {
            icon: <FaBriefcase />, title: "Career Services", text: "Workshops, internships, resume support."
          }, {
            icon: <FaBook />, title: "Doorstep delivery", text: "Only online university delivering physical books."
          }, {
            icon: <FaUniversity />, title: "Metaverse Campus", text: "Explore campus in metaverse."
          }, {
            icon: <FaUserFriends />, title: "Offline Experiences", text: "On-campus orientation and peer bonding."
          }, {
            icon: <FaClipboardCheck />, title: "Placement Opportunities", text: "Resume prep and interview assistance."
          }].map((item, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Recognized & Accredited By</h2>
        <div className="flex flex-wrap justify-center items-center gap-20 px-4">
          <img src="/images/ugc.png" alt="UGC" className="h-16 object-contain" />
          <img src="/images/aicte.png" alt="AICTE" className="h-16 object-contain" />
          
           
           {/* <img src="/images/naac.png" alt="NAAC" className="h-16 object-contain" /> */}
           <img src="/images/nirf.png" alt="NIRF" className="h-16 object-contain" />
           <img src="/images/wes.png" alt="WES" className="h-16 object-contain" />
           <img src="/images/aiu.png" alt="AIU" className="h-16 object-contain" />
          <img src="/images/acu.png" alt="CARRES" className="h-16 object-contain" />
         
         <img src="/images/unwto.png" alt="UNWTO" className="h-16 object-contain" />
         <img src="/images/recogin.webp" alt="RECOGIN" className="h-16 object-contain" />
         <img src="/images/10.webp" alt="11" className="h-16 object-contain" />
           <img src="/images/qaa.png" alt="QAA" className="h-16 object-contain" />
           <img src="/images/11.png" alt="11" className="h-16 object-contain" />
        </div>
      </section>
     <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
         Highlights of Amity Online
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, idx) => (
            <div key={idx} className="text-center">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 h-14 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Admission Process */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {["Fill registration form", "Enter details & pay fees", "Upload documents", "Submit form"].map((desc, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index !== 0 && <div className="absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900 z-0"></div>}
                <div className="z-10 w-6 h-6 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
                </div>
                <h4 className="mt-4 font-semibold text-lg">Step {index + 1}</h4>
                <p className="mt-2 text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img src="/images/amicri.jpeg" alt="Amity University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Online Degree from Amity Online University</h2>
            <p className="mb-6 text-lg">Amity Online offers daily live classes, career assistance, and hands-on LMS learning with Ivy League tie-ups.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of Amity Online</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Daily LIVE Classes by International Faculty</li>
              <li>Career Assistance & Virtual Job Fairs</li>
              <li>International Collaboration with Ivy League</li>
              <li>Immersive Learning via World-Class LMS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our learners work at</h2>
          <p className="text-xl text-gray-600">Top hiring partners at Amity Online</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/company.png", "/images/company1.png", "/images/company9.jpg", "/images/com10.png", "/images/companany4.png", "/images/company6.png", "/images/companany5.png", "/images/adove.png", "/images/samsung.png","/images/3.webp",  "/images/4.webp",  "/images/5.webp",  "/images/6.webp",  "/images/7.webp",  "/images/8.webp",  "/images/9.webp",].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
   }
};

export default Amity;