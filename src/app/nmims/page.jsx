'use client';
import React from 'react';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaGlobe,
  FaAward,
  FaBookOpen,
  FaLaptop,
  FaHeadset
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import EnquireCard from '@/components/EnquireCard';

const Nmims = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 from a recognized board with minimum 50% marks",
      fees: "₹1,50,000",
      specialization: "General Management, Digital Marketing, Finance, Human Resources",
      image: "/bba.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 with commerce stream and minimum 50% marks",
      fees: "₹1,20,000",
      specialization: "Accounting, Finance, Taxation, Banking",
      image: "/bcom.jpeg",
    },
    {
      course: "Bachelor of Arts (BA) Liberal Arts",
      duration: "3 Years",
      eligibility: "10+2 in any stream with minimum 50% marks",
      fees: "₹1,30,000",
      specialization: "Psychology, Sociology, Economics, English Literature",
      image: "/ba.jpeg",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 with Mathematics and minimum 50% marks",
      fees: "₹1,60,000",
      specialization: "Software Development, Data Science, Web Technologies",
      image: "/bca.jpeg",
    }
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline with minimum 50% marks",
      fees: "₹1,44,000",
      specialization: "Finance, Marketing, Human Resources, Operations, Business Analytics, International Business, Digital Marketing, Supply Chain Management",
      image: "/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "BCA or B.Sc. in Computer Science with minimum 50% marks",
      fees: "₹1,35,000",
      specialization: "Software Engineering, Data Analytics, Cloud Computing, Cybersecurity",
      image: "/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "B.Com or related degree with minimum 50% marks",
      fees: "₹1,25,000",
      specialization: "Advanced Accounting, Financial Management, Taxation",
      image: "/m.com.jpeg",
    },
    {
      course: "Master of Science (M.Sc) Applied Finance",
      duration: "2 Years",
      eligibility: "Bachelor's degree in Finance or related field with minimum 50% marks",
      fees: "₹1,20,000",
      specialization: "Investment Management, Risk Management, Financial Modeling",
      image: "/m.com.jpeg",
    },
    {
      course: "Master of Arts (MA) Journalism & Mass Communication",
      duration: "2 Years",
      eligibility: "Graduation in any discipline with minimum 50% marks",
      fees: "₹1,40,000",
      specialization: "Digital Journalism, Public Relations, Advertising, Media Management",
      image: "/ma1.jpeg",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-6 font-[Inter] bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001e3c] font-[Poppins] mb-6">
              Welcome to NMIMS Global Online
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              NMIMS Global is a premier education institute offering UGC-entitled and NAAC A+ accredited online programs with flexible learning, a vibrant student community, and personalized mentorship.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#001e3c] font-semibold">
                <FaAward className="text-[#00ffe0] text-xl" />
                <span>NAAC A+ Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-[#001e3c] font-semibold">
                <FaCertificate className="text-[#00ffe0] text-xl" />
                <span>UGC Entitled</span>
              </div>
              <div className="flex items-center gap-2 text-[#001e3c] font-semibold">
                <FaUsers className="text-[#00ffe0] text-xl" />
                <span>1.25L+ Students</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/nmims.png" alt="NMIMS" className="rounded-xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-[#001e3c]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Students</h3>
              <p className="text-[#00ffe0] font-bold text-lg">1.25L+</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-8 h-8 text-[#001e3c]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cities</h3>
              <p className="text-[#00ffe0] font-bold text-lg">600+</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="w-8 h-8 text-[#001e3c]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accreditation</h3>
              <p className="text-[#00ffe0] font-bold text-lg">NAAC A+</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="w-8 h-8 text-[#001e3c]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rating</h3>
              <p className="text-[#00ffe0] font-bold text-lg">4.7/5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="py-16 px-6 bg-gray-50 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#001e3c] font-[Poppins] mb-12">
            Undergraduate Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ugCourses.map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="NMIMS" />
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="py-16 px-6 bg-white font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#001e3c] font-[Poppins] mb-12">
            Postgraduate Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pgCourses.map((course, idx) => (
              <EnquireCard key={idx} {...course} universityName="NMIMS" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NMIMS */}
      <section className="py-16 px-6 bg-gray-50 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#001e3c] font-[Poppins] mb-12">
            Why Choose NMIMS Online?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaAward,
                title: "UGC-Entitled & NAAC A+",
                description: "Recognized by UGC and accredited with NAAC A+ grade"
              },
              {
                icon: FaUsers,
                title: "1.25L+ Global Learners",
                description: "Join a diverse community of students worldwide"
              },
              {
                icon: FaLaptop,
                title: "Live + Recorded Sessions",
                description: "Flexible learning with expert-led interactive sessions"
              },
              {
                icon: FaHeadset,
                title: "Personalized Mentorship",
                description: "Get individual guidance from industry experts"
              },
              {
                icon: FaBuilding,
                title: "Industry Recognition",
                description: "Recognized by top corporates across industries"
              },
              {
                icon: FaGlobe,
                title: "600+ Cities Network",
                description: "Strong alumni network across major cities"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-[#001e3c] text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#001e3c] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-6 bg-white font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#001e3c] mb-12 font-[Poppins]">
            Admission Process
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
            {[
              {
                icon: FaFileAlt,
                title: "Submit Application",
                description: "Fill online application form with required details"
              },
              {
                icon: FaCertificate,
                title: "Upload Documents",
                description: "Submit academic records and ID documents"
              },
              {
                icon: FaGraduationCap,
                title: "Pay Program Fee",
                description: "Complete secure online payment"
              },
              {
                icon: FaLaptop,
                title: "Start Learning",
                description: "Access LMS and begin your journey"
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-[#001e3c] text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-[#001e3c] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your NMIMS Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get personalized guidance and book a free demo session with our education experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-[#00ffe0] text-[#001e3c] hover:bg-[#00e6cc] px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
              onClick={() => window.location.href = '/bookdemo'}
            >
              Book Free Demo
            </button>
            <button 
              className="border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c] px-8 py-3 text-lg font-semibold rounded-lg border-2 transition-colors"
              onClick={() => window.location.href = '/coursesearch'}
            >
              Explore More Courses
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nmims;
