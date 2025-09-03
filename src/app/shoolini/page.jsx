'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import {
  FaBookOpen, FaUserTie, FaRobot, FaBriefcase, FaBook, FaUniversity,
  FaUserFriends, FaClipboardCheck
} from "react-icons/fa";
import { motion } from 'framer-motion';

import EnquireCard from '@/components/EnquireCard';

const Shoolini = () => {
  const ugCourses = [
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 pass with Commerce",
      fees: "	₹75,000/-",
      specialization: "Accounting, Finance and Taxation",
      image: "/images/bcom.jpg",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 in any discipline with 40% marks in last qualifying examination",
      fees: "(63,000/- + 27,000/-) = ₹90,000/-  [ ₹27,000/-(Only to be paid after Placement)]",
      specialization: "HR, Marketing, Finance, Digital Marketing, Computer Science, Direct Selling",
      image: "/images/shoolini-bba.jpg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 in any discipline with 40% marks in last qualifying examination. Reservation of seats as per government policies. ",
      fees: "(63,000/- + 27,000/-) = ₹90,000/-  [ ₹27,000/-(Only to be paid after Placement)]",
      specialization: "Machine Learning, Data Science, Cyber Secruity and Artificial Intelligence",
      image: "/images/shoolini-bca.jpg",
    }
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.",
      fees: "(98,000/- + 42,000/-) = ₹1,40,000/- [ ₹42,000/-(Only to be paid after Placement)]",
      specialization: "Marketing Management, Operation & Supply Chain Management, Agri Business Management, Human Resource Management, IT Management, Biotechnology Management, Financial Management, Tourism Management, Food Technology Management, Digital Marketing, Real Estate Management, Pharma & Health Care Management,Retail Management,Direct Selling Management,Banking & Insurance,Data Science & Business Analytics",
      image: "/images/shoolini-mba.jpg",
    },
    {
      course: "Executive MBA",
      duration: "2 Years",
      eligibility: "Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.",
      fees: "₹1,80,000/-",
      specialization: "Marketing Management, Operation & Supply Chain Management, Agri Business Management, Human Resource Management, IT Management, Biotechnology Management, Financial Management, Tourism Management, Food Technology Management, Digital Marketing, Real Estate Management, Pharma & Health Care Management,Retail Management,Direct Selling Management,Banking & Insurance,Data Science & Business Analytics",
      image: "/images/shoolini-mba.jpg",
    },
    {
      course: "MSC in Data science ",
      duration: "2 Years",
      eligibility: "Graduation in Life Sciences",
      fees: "₹1,20,000/-",
      specialization: "Data Science",
      image: "/images/shoolini-mca.jpg",
    },
    {
      course: "Master of Arts (M.A) ",
      duration: "2 Years",
      eligibility: "Bachelor's degree with any discipline with minimum of 40% marks. 60% marks in case of International Students in the qualifying examination.",
      fees: "42,000-1,00,000",
      specialization: "English Literature, journalism and Mass Communication",
      image: "/images/shoolini-ma.jpg",
    }
  ];

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      

   { /* Hero Section */}
    <section className="bg-white-100 py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-snug font-[Poppins]">
              Make Your Future with Shoolini University Online
            </h1>
           <p> <span className="font-semibold text-gray-700"> Solan, Himachal Pradesh, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
              Shoolini University is a top-ranked research-oriented university offering globally recognized programs in science, management, agriculture, and technology — with the flexibility of online and hybrid learning. It is ranked among the top 200 universities globally by QS and is known for its strong focus on research, innovation, and student success. <br/>
              Shoolini University is a leader in outcome based higher education. Our online degree programs are designed to secure your future, first, and give your career a winning edge, be it through a great placement or selection in a leading international university. You only pay once your desired outcome is achieved.
            </p>
          </div>
          <motion.img
            src="/images/shoolini-uni.jpg"
            alt="Shoolini University"
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

      {/* Why Choose Shoolini */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Shoolini University?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { icon: <FaBookOpen />, title: "Research-Driven Education", text: "One of India’s top patent filers and innovators." },
            { icon: <FaUserTie />, title: "Experienced Faculty", text: "Faculty with global experience and industry exposure." },
            { icon: <FaUniversity />, title: "Global Rankings", text: "Ranked among top universities globally by QS." },
            { icon: <FaBriefcase />, title: "Career-Oriented Programs", text: "Job-ready curriculum and live industry projects." }
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
          <Image width={100} height={100} src="/images/ugc.png" alt="UGC" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/naac.png" alt="NAAC" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/wes.png" alt="WES Rankings" className="h-16 object-contain" />
         
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
            <Image width={100} height={100} src="/images/shoolini-ccertificate.jpg" alt="Shoolini Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from Shoolini University</h2>
            <p className="mb-6 text-lg">Boost your skills with online degrees from a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Global QS Rankings</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at Shoolini</h2>
          <p className="text-xl text-gray-600">Trusted by global companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/images/nestle.jpg", "/images/decathlon.jpg", "/images/icici.jpg", "/images/lt.jpg", "/images/hindustanunilever.jpg", "/images/lg.jpg"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} src={src} alt="Recruiter" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Shoolini;