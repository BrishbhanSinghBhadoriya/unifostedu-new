'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import {
  FaBookOpen,
  FaUserTie,
  FaUniversity,
  FaBriefcase,
  FaClipboardCheck,
  FaGlobe,
  FaLaptopCode,
  FaUserFriends
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Reusable EnquireCard component
const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
  const router = useRouter();
  const university = "VGU University";

  const handleClick = () => {
    // For Next.js use router.push instead of navigate
    router.push(`/enquiry?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}`);
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

const Vgu = () => {
  const ugCourses = [
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board ",
      fees: "₹1,32,000/-",
      specialization: "'Full-stack development, cybersecurity, and software project management'  'Al, machine learning, deep learning, and chatbot development'  'Data mining, analytics, R & Python, big data, visualization' 'Virtualization, cloud platforms, cryptography, ethical hacking' 'UX research, wireframing, usability testing, visual tools'  'DLT, smart contracts, blockchain architecture, Ethereum'",
      image: "/bca.jpeg",
    },
    {
      course: "Bachelore of Arts(BA)",
      duration: "3 Years",
      eligibility: "10+2 in any stream",
      fees: "₹72,000/-",
      specialization: "'Economics + Public Policy + Computer Applications' 'Public Policy + English' 'English + History + Political Science' 'Computer Applications + Public Policy/IR' 'Political Science + International Relations + Public Policy' '51+ COMBINATIONS AVAILABLE'",
      image: "/ba.jpg",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "Passed 10+2 examination in any stream from a recognized Board.",
      fees: "₹1,32,000/-",
      specialization: "General, Digital Marketing, Retail Management, Fintech",
      image: "/bba.jpeg",
    },
   
  ];

  const pgCourses = [
    {
      course: "Masters of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: "₹1,50,000-2,40,000/-",
      specialization: "Marketing Management, Human Resource Management, Financial Management, Operations Management, Information Technology Management,  Healthcare Management, Agri Business, International Business, ",
      image: "/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor 's Degree (any stream) of minimum 3 year duration",
      fees: "₹1,50,000/-",
      specialization: "Software Engineering & Development, Data Science & Analytics, Cyber Security, Cloud & Devops, web & App Development, Blockchain & Emerging Technologies, Database Management",
      image: "/mca.jpeg",
    },
     {
      course: "Master of Arts (English)",
      duration: "2 Years",
      eligibility: "Bachelor's Degree from a recognised University.",
      fees: "₹72,000/-",
      specialization: "English",
      image: "/ma.jpeg",
    },
    {
      course: "Master of Science (Maths)",
      duration: "2 Years",
      eligibility: "Graduates with BA / BSc degree with Mathematics as one of the three main subjects.",
      fees: "₹72,000/-",
      specialization: " Mathematics",
      image: "/ma1.jpeg",
    },
    {
      course: "Master of Arts Journalism and Mass Communication (MAJMC)",
      duration: "2 Years",
      eligibility: "Graduation in any stream",
      fees: "₹72,000/-",
      
      image: "/ma1.jpeg",
    }

  ];

  return (
    <>
      {/* <Helmet>
        <title>VGU University - Courses, Admissions, Enquiry</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Helmet> */}

      {/* Hero Section */}
      <section className="bg-white-100 py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-snug font-[Poppins]">
              Build Your Future with VGU University
            </h1>
            <p> <span className="font-semibold text-gray-700">Private University in Jaipur, Rajasthan, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
              VGU (Vivekananda Global University), Jaipur, is a top-ranked private university offering world-class education,
              modern infrastructure, and global learning opportunities for students across disciplines. It is recognized by UGC and AICTE, ensuring quality education and career growth.  
              With a focus on innovation and research, VGU provides a vibrant campus life with state-of-the-art facilities, expert faculty, and strong industry connections. The university offers a wide range of undergraduate and postgraduate programs in fields like engineering, management, arts, and sciences.
              VGU is committed to holistic development, equipping students with the skills and knowledge needed to  succeed in a competitive global job market.
            </p>
            
          </div>
          <motion.img
            src="/vgu1.png"
            alt="VGU University"
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

      {/* Why Choose VGU */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose VGU?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[{
            icon: <FaBookOpen />, title: "Modern Learning", text: "Smart classrooms, labs, and interactive sessions."
          }, {
            icon: <FaUserTie />, title: "Expert Faculty", text: "Highly qualified professors with industry experience."
          }, {
            icon: <FaUniversity />, title: "UGC Approved", text: "Recognized programs ensuring career growth."
          }, {
            icon: <FaBriefcase />, title: "Strong Placements", text: "Top companies recruiting VGU graduates."
          }, {
            icon: <FaGlobe />, title: "Global Exposure", text: "International tie-ups and student exchange programs."
          }, {
            icon: <FaLaptopCode />, title: "Industry Projects", text: "Hands-on learning through real-world projects."
          }, {
            icon: <FaUserFriends />, title: "Vibrant Campus Life", text: "Clubs, sports, and cultural activities."
          }, {
            icon: <FaClipboardCheck />, title: "Career Guidance", text: "Workshops, internships, and resume support."
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
          <img src="/aicte.png" alt="AICTE" className="h-16 object-contain" />
          <img src="/naac.png" alt="NAAC" className="h-16 object-contain" />
          <img src="/nirf.png" alt="NIRF" className="h-16 object-contain" />
          <img src="/bci.png" alt="BCI" className="h-16 object-contain" />
          
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {["Fill online application", "Appear for entrance/interview", "Receive offer letter", "Complete enrollment"].map((desc, index) => (
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
            <img src="/vgu-certificate.jpg" alt="VGU Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Degree from VGU University</h2>
            <p className="mb-6 text-lg">VGU offers top-notch academic programs with industry tie-ups, live projects, and holistic career support.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits of VGU</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Industry-relevant curriculum</li>
              <li>Placement support and internships</li>
              <li>State-of-the-art campus and labs</li>
              <li>Exposure to global learning opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Graduates Work At</h2>
          <p className="text-xl text-gray-600">Top hiring partners of VGU</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/samsung.png", "/airtel.png", "/icici.png", "/nestle.png", "/tcs.png", "/pepsico.png"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Vgu;