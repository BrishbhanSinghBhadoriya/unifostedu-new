// File: src/pages/universities/Nmims.jsx
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaFileAlt, FaGraduationCap } from 'react-icons/fa';

const EnquireCard = ({ course, duration, fee, eligibility, specialization, image }) => {
  //const navigate = useNavigate();
  const university = 'NMIMS';

  const handleClick = () => {
    //navigate(`/enquiry?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-blue-100">
      <img src={image} alt={course} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{course}</h3>
        <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {duration}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Fee:</strong> {fee}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Eligibility:</strong> {eligibility}</p>
        {specialization && <p className="text-sm text-gray-600 mb-2"><strong>Specialization:</strong> {specialization}</p>}
        <button
          onClick={handleClick}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all text-sm"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

const Nmims = () => {
  const ugCourses = [
    {
      course: 'BBA',
      duration: '3 Years',
      fee: '₹1,50,000',
      eligibility: '10+2 from a recognized board',
      specialization: '',
      image: '/ug/bba.png'
    },
    {
      course: 'B.Com',
      duration: '3 Years',
      fee: '₹1,20,000',
      eligibility: '10+2 with commerce stream',
      specialization: '',
      image: '/ug/bcom.png'
    },
    {
      course: 'BA (Liberal Arts)',
      duration: '3 Years',
      fee: '₹1,30,000',
      eligibility: '10+2 in any stream',
      specialization: '',
      image: '/ug/ba.png'
    }
  ];

  const pgCourses = [
    {
      course: 'MBA (All Specializations)',
      duration: '2 Years',
      fee: '₹1,44,000',
      eligibility: 'Graduation in any discipline',
      specialization: 'Finance, Marketing, HRM, Operations, Business Mgmt',
      image: '/pg/mba.png'
    },
    {
      course: 'M.Sc. Applied Finance',
      duration: '2 Years',
      fee: '₹1,20,000',
      eligibility: 'Bachelor’s degree in Finance or related field',
      specialization: '',
      image: '/pg/msc.png'
    }
  ];

  return (
    <>
      <Helmet>
        <title>NMIMS Online - Courses, Fees & Admissions</title>
      </Helmet>

      <section className="py-16 px-6 font-[Inter] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 font-[Poppins] mb-6">
              Welcome to NMIMS Global Online
            </h1>
            <p className="text-gray-700 text-lg">
              NMIMS Global is a premier education institute offering UGC-entitled and NAAC A+ accredited online programs with flexible learning, a vibrant student community, and personalized mentorship.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/nmims.png" alt="NMIMS" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 font-[Poppins] mb-12">Undergraduate Programs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugCourses.map((course, idx) => <EnquireCard key={idx} {...course} />)}
          </div>

          <h2 className="text-4xl font-bold text-center text-blue-800 font-[Poppins] mt-20 mb-12">Postgraduate Programs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pgCourses.map((course, idx) => <EnquireCard key={idx} {...course} />)}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 font-[Poppins] mb-10">Why Choose NMIMS Online?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {[
              'UGC-Entitled and NAAC A+ accredited university',
              'AICTE approved MBA programs',
              'Over 1.25 lakh global learners',
              'Live + recorded expert-led sessions',
              'Flexible LMS platform with mentorship',
              'Placement and internship support',
              'Recognized by top corporates across industries',
              'Strong alumni network across 600+ cities'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-10 font-[Poppins]">Admission Process</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
            {[
              'Submit online application',
              'Upload academic & ID documents',
              'Pay program fee securely',
              'Begin learning via LMS'
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <FaFileAlt className="text-blue-700 text-4xl mb-4 mx-auto" />
                <p className="text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nmims;
