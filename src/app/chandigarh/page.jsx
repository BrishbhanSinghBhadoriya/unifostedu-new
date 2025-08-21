'use client';

import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
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

const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
  //const navigate = useNavigate();
  const university = "Chandigarh University";

  const handleClick = () => {
//    navigate(`/enquiry?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
      <img src={image} alt={course} className="h-40 w-full object-cover sm:h-48" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{course}</h3>
          <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {duration}</p>
          <p className="text-sm text-gray-600"><strong>Eligibility:</strong> {eligibility}</p>
          {fees && <p className="text-sm text-gray-600"><strong>Fees:</strong> {fees}</p>}
          {specialization && <p className="text-sm text-gray-600"><strong>Specialization:</strong> {specialization}</p>}
        </div>
        <div className="mt-4">
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-center block font-semibold hover:opacity-90 transition w-full"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Chandigarh = () => {
 const ugCourses = [
  {
    course: "Bachelor of Arts - Journalism & Mass Communication (BA-JMC)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,66,668/-",
    specialization: "Journalism, Media Studies",
    image: "/ba-jmc.jpg",
  },
  {
    course: "Bachelor of Business Administration - Business Analytics (BBA - KPMG)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,60,000/-",
    specialization: "Business Analytics with KPMG,",
    image: "/bba.jpeg",
  },
  {
    course: "Bachelor of Business Administration (BBA)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 Pass",
    fees: "1,68,000/-",
    specialization: "Marketing, HR, Enterpreneurship, Digital Marketing, Fin-Tech,etc",
    image: "/bba.jpeg",
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years(6 Semesters)",
    eligibility: "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
    fees: "1,70,000/-",
    specialization: "IT & Systems",
    image: "/bca.jpeg",
  },
  
];


  const pgCourses = [
  {
    course: "Master of Business Administration - Business Analytics (MBA - KPMG)",
    duration: "2 Years(4 Semesters)",
    eligibility: "Bachelor degree in any discipline from recognized University/ Institution. Graduates of recognized professional programs like CA/ ICWA etc. are also eligible to apply.",
    fees: "2,00,000/-",
    specialization: "Business Analytics with KPMG",
    image: "/mba.jpeg",
  },
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Graduation",
    fees: "2,10,668/-",
    specialization: "Finance, Marketing, HR, IT, HR, Operations, International Business, Digital Marketing, Fin-Tech, etc.",
    image: "/bba.jpeg",
  },
  {
    course: "Master of Computer Applications - AI & ML",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) .",
    fees: "1,40,000/-",
    specialization: "Artificial Intelligence, Machine Learning, Data Analytics, Cloud Computing, Full Stack Development",
    image: "/mca.jpeg",
  },
  {
    course: "Master of Science - Data Science",
    duration: "2 Years",
    eligibility: "Candidate must have completed bachelor's degree in B.A/ BCA/ B.Sc. (Statistics or Mathematics or Computer Science) / B.E/ B.Tech .",
    fees: "1,46,668/-",
    specialization: "Full Stack, Web Development",
    image: "/mca.jpeg",
  },
  {
    course: "Master of Computer Applications - Cloud Computing (AWS Academy)",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree.",
    fees: "1,40,000/-",
    specialization: "Cloud Infrastructure, AWS, Data Analytics, DevOps, Full Stack Development",
    image: "/mca.jpeg",
  },
  {
    course: "Master of Computer Applications - Data Analytics",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree (e.g.: B.E/ B.Tech / B.Sc. / B.Com. / B.A/ B.Voc) with Mathematics, Business Mathematics, Programming or Statistics at 10+2 level or at Graduation level.",
    fees: "1,40,000/-",
    specialization: "Big Data, Data Mining",
    image: "/mca1.jpeg",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree",
    fees: "1,40,000/-",
    specialization: "General IT, Software Development",
    image: "/mca.jpeg",
  },
  {
    course: "Master of Science (Mathematics)",
    duration: "2 Years",
    eligibility: "Bachelor's Degree with Mathematics as compulsory subject from a recognized Board / University.",
    fees: "1,00,000/-",
    specialization: "Pure Mathematics, Applied Mathematics",
    image: "/mba.jpeg",
  },
  {
    course: "Master of Arts (MA)",
    duration: "2 Years",
    eligibility: "Graduation in any discipline or equivalemnt, preferably with English as a subject OR Bachelor's of Arts (Hons.) ",
    fees: "1,00,000/-",
    specialization: "Psychology, English, Economics",
    image: "/ma1.jpeg",
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
              Career with Chandigarh University Online
            </h1>
            <p> <span className="font-semibold text-gray-700"> Chandigarh, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
              Chandigarh University Online offers UGC-entitled degrees and industry-oriented programs to help learners achieve global recognition. With a flexible learning environment, expert faculty, and modern LMS, it enables working professionals and students to elevate their careers while learning from anywhere.
              This has become a top choice for those seeking quality education in India, with a focus on practical skills and career readiness. We are committed to providing a transformative learning experience that prepares students for success in the global job market.
            </p>
          </div>
          <motion.img
            src="/chandigarh.jpg"
            alt="Chandigarh University"
            className="rounded-xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* UG & PG Courses */}
      {[{ title: "Undergraduate Courses", list: ugCourses }, { title: "Postgraduate Courses", list: pgCourses }].map((section, idx) => (
        <section key={idx} className="py-12 bg-white px-6 font-[Inter]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.list.map((item, index) => <EnquireCard key={index} {...item} />)}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Chandigarh Online */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Chandigarh University Online?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { icon: <FaBookOpen />, title: "Flexible Learning", text: "Self-paced learning with recorded and live sessions." },
            { icon: <FaUserTie />, title: "Expert Mentorship", text: "Faculty with global exposure and corporate experience." },
            { icon: <FaRobot />, title: "AI-driven LMS", text: "Smart Learning Management System with analytics." },
            { icon: <FaBriefcase />, title: "Career Support", text: "Placement assistance, mock interviews & resume building." },
            { icon: <FaBook />, title: "Industry-ready Curriculum", text: "Courses designed with input from top companies." },
            { icon: <FaUniversity />, title: "UGC-Entitled Degrees", text: "Recognized degrees with global value." },
            { icon: <FaUserFriends />, title: "Global Alumni Network", text: "Connect and grow with professionals worldwide." },
            { icon: <FaClipboardCheck />, title: "Affordable Fees", text: "Top-quality education at budget-friendly cost." }
          ].map((item, i) => (
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
          <img src="/ugc.png" alt="UGC" className="h-16 object-contain" />
          <img src="/aicte.png" alt="AICTE" className="h-16 object-contain" />
          <img src="/naac.png" alt="NAAC" className="h-16 object-contain" />
          <img src="/wes.png" alt="KPMG" className="h-16 object-contain" />
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {["Register Online", "Fill Details & Pay", "Upload Documents", "Start Learning"].map((desc, index) => (
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
            <img src="/certificate-cu.jpg" alt="Chandigarh University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Earn Your Online Degree from Chandigarh University</h2>
            <p className="mb-6 text-lg">Enhance your career with daily live classes, skill-based training, and global recognition.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of Chandigarh Online</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Interactive Live & Recorded Sessions</li>
              <li>Personalized Career Support</li>
              <li>Global Exposure & Alumni Network</li>
              <li>Affordable, Flexible & Recognized Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our learners work at</h2>
          <p className="text-xl text-gray-600">Trusted by leading companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/microsoft.jspg", "/ibm.png", "/flipkart.png", "/deloitte.png", "/amazon.png", "/sap.png", "/hp.png", "/samsung.png"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Chandigarh;