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
//   const navigate = useNavigate();
  const university = "OP Jindal University";

  const handleClick = () => {
    // navigate(`/enquiry?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}`);
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

const OPJindal = () => {
  const ugCourses = [
    
    {
      course: "BBA (4 Specialization)",
      duration: "3 Years",
      eligibility: "10+2 Pass, Applicants less than 50% marks in 10+2 will be required to appear for the Jindal Scholastic Aptitude Test (JSAT)",
      fees: "₹2,00,000 /-",
      specialization: "Finance, Marketing, Human Resources, Operation Management Supply Chain",
      image: "/bba.jpeg",
    },
    {
      course: "B.Sc in Psycology",
      duration: "3 Years",
      eligibility: "10+2 Pass, If less than 50%: Must clear JSAT (min 50%) or submit, SAT/ACT/LNAT-UK score or complete a JGU MOOC",
      fees: "₹3,00,000 /-",
      
      image: "/op-psycology.png",
    },
    
  ];

  const pgCourses = [
    {
      course: "Master in Enterpreneurship and Family Business",
      duration: "1 Years(4 terms)",
      eligibility: "A Bachelor’s degree, Active involvement as an entrepreneurial family member ",
      fees: "₹2,75,000/-",
      image: "/op-masters1.png",
    },
    {
      course: "MA in Teaching English to Speakers of Other Lnaguages(TESOL)",
      duration: "12 Months(3 Trimester)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      fees: "₹2,50,000/- ",
      image: "/op-masters2.png",
    },
    {
      course: "M.Sc in Environmental chnage and Sustainability",
      duration: "12 Months(4 Terms)",
      eligibility: "Bachelor’s degree from any recognized university with at least 50% marks Govt. Issued ID Proof (Passport for international applicants)",
      fees: "₹2,50,000/-",
      image: "/op-masters3.png",
    },
    {
      course: "MA Public Policy",
      duration: "12-24 Months",
      eligibility: "An undergraduate degree in any discipline from any recognised university in India or abroad.",
      fees: "₹3,00,000/-",
      image: "/op-masters4.png",
    },
    {
      course: "MBA in Business Analytics",
      duration: "12-24 Months",
      eligibility: "The eligibility criteria for the online MBA in Business Analytics programme require a bachelor’s degree from a recognised university in India. A minimum of 50% marks in any discipline is required for graduation.",
      fees: "₹2,00,000/-",
      image: "/op-masters5.png",
    },
    {
      course: "MBA in Business Law",
      duration: "12 Months",
      eligibility: "Bachelor's degree in any discipline with a minimum 50% aggregate score from a recognized university.  ",
      fees: "₹3,00,000/-",
      image: "/mba.jpeg",
    },
    
  ];

  return (
    <>
      {/* <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Helmet> */}

      {/* Hero Section */}
      <section className="bg-white-100 py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-snug font-[Poppins]">
               OP Jindal University
            </h1>
            <br />
            <p> <span className="font-semibold text-gray-700"> Leading private university known for excellence in Law, Business, Engineering, and Public Policy in Sonipat, Haryana, India.</span><br /><br /></p>
            <p className="text-gray-700 text-lg">
              OP Jindal University offers globally recognized online degree which helps students to learn at there door step without any problems. 
              O.P. Jindal Global University offers programmes in diverse fields such as Law, Business, Liberal Arts, Psychology, Economics, Media, Journalism, Architecture, Design, Banking, Finance, Environment, Public Policy, Public Health, Languages, and International Relations. Our courses are designed to meet students' academic and professional needs through interdisciplinary learning and practical application, preparing them for the global workforce. 
            </p>
          </div>
          <motion.img
            src="/opjindal.png"
            alt="OP Jindal University"
            className="rounded-xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* UG & PG Course Cards */}
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

      {/* Why Choose Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose OP Jindal University?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[{
            icon: <FaBookOpen />, title: "Innovative Curriculum", text: "Blends theory with practical exposure."
          }, {
            icon: <FaUserTie />, title: "Expert Faculty", text: "Renowned academicians and industry leaders."
          }, {
            icon: <FaRobot />, title: "Tech-Driven Learning", text: "Smart classrooms and advanced labs."
          }, {
            icon: <FaBriefcase />, title: "Strong Placements", text: "Top companies hire our graduates."
          }, {
            icon: <FaBook />, title: "Global Exposure", text: "International exchange programs and collaborations."
          }, {
            icon: <FaUniversity />, title: "Modern Campus", text: "State-of-the-art facilities for learning and living."
          }, {
            icon: <FaUserFriends />, title: "Holistic Development", text: "Focus on academics, sports, and culture."
          }, {
            icon: <FaClipboardCheck />, title: "Industry Tie-ups", text: "Collaborations for internships and projects."
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
          <img src="/ugc.png" alt="UGC" className="h-16 object-contain" />
          <img src="/naac.png" alt="NAAC" className="h-16 object-contain" />
          <img src="/aicte.png" alt="AICTE" className="h-16 object-contain" />
         
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {["Register Online", "Fill Form", "Verify Documents", "Start Your Journey"].map((desc, index) => (
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
            <img src="/op-certificate.png" alt="OP Jindal Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from OP Jindal University</h2>
            <p className="mb-6 text-lg">Keep your future shine with a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Get Global Exposure</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
              <li>Mentorship with proper counselling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Companies */}
<section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at OP Jindal University</h2>
    <p className="text-xl text-gray-600">Trusted by leading global brands</p>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      "/aditya-birla.png",
      "/airtel.png",
      "/aurobindo.png",
      "/bajaj-allianz.png",
      "/bharti-airtel.png",
      "/bosch.png",
      "/cipla.png",
      "/coca-cola.png",
      "/cyient.png",
      "/diageo.png",
      "/ey.png",
      "/fedex.png",
      "/hero.png",
      "/himalaya.png",
      "/hinduja.png",
      "/icici.png",
      "/iifl.png",
      "/india-mart.png",
      "/infosys.png",
      "/maruti.png",
      "/nestle.png",
      "/oyo.png",
      "/pepsico.png",
      "/samsung.png",
      
    ].map((src, i) => (
      <div
        key={i}
        className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <img src={src} alt="Recruiter" className="h-12 object-contain" />
      </div>
    ))}
  </div>
</section>


    </>
  );
};

export default OPJindal;
