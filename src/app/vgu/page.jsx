'use client';
import React from 'react';
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaFileAlt, FaGraduationCap } from 'react-icons/fa';

const EnquireButton = ({ course }) => {
//   const navigate = useNavigate();
  const university = "VGU University";

  const handleClick = () => {
    // navigate(`/enquiry?course=${encodeURIComponent(course)}&university=${encodeURIComponent(university)}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md"
    >
      Enquire Now
    </button>
  );
};

const Vgu = () => {
  const ugCourses = [
    {
      title: 'B.Tech (CSE, Civil, ECE, ME)',
      duration: '4 Years',
      eligibility: '10+2 with PCM',
      fee: '₹1,50,000/year'
    },
    {
      title: 'BBA',
      duration: '3 Years',
      eligibility: '10+2 in any stream',
      fee: '₹90,000/year'
    },
    {
      title: 'BCA',
      duration: '3 Years',
      eligibility: '10+2 with Mathematics',
      fee: '₹95,000/year'
    }
  ];

  const pgCourses = [
    {
      title: 'M.Tech (CSE, Structural, VLSI)',
      duration: '2 Years',
      eligibility: 'B.Tech in relevant field',
      fee: '₹1,00,000/year'
    },
    {
      title: 'MBA',
      duration: '2 Years',
      eligibility: 'Graduation in any stream',
      fee: '₹1,20,000/year'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      
        <title>VGU University - Courses, Admissions, Enquiry</title>
      

      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to VGU University</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          VGU (Vivekananda Global University) is a top-ranked private university located in Jaipur, offering world-class education and facilities.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Undergraduate Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ugCourses.map((course, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Eligibility:</strong> {course.eligibility}</p>
              <p><strong>Fee:</strong> {course.fee}</p>
              <div className="mt-4">
                <EnquireButton course={course.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Postgraduate Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgCourses.map((course, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Eligibility:</strong> {course.eligibility}</p>
              <p><strong>Fee:</strong> {course.fee}</p>
              <div className="mt-4">
                <EnquireButton course={course.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Why Choose VGU?</h2>
        <ul className="list-none space-y-3 text-gray-700">
          <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AICTE & UGC approved programs</li>
          <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Excellent placement record with top companies</li>
          <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Highly qualified faculty and industry exposure</li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li className="flex items-center"><FaFileAlt className="text-blue-600 mr-2" /> Fill the online application form</li>
          <li className="flex items-center"><FaGraduationCap className="text-blue-600 mr-2" /> Appear for entrance exam/interview</li>
          <li className="flex items-center"><FaCheckCircle className="text-blue-600 mr-2" /> Receive offer letter</li>
          <li className="flex items-center"><FaCheckCircle className="text-blue-600 mr-2" /> Complete enrollment</li>
        </ol>
      </section>

      <section className="my-10 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6">Course Details</h2>
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 text-left">Course</th>
              <th className="py-2 px-4 text-left">Duration</th>
              <th className="py-2 px-4 text-left">Eligibility</th>
              <th className="py-2 px-4 text-left">Fee</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...ugCourses, ...pgCourses].map((course, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{course.title}</td>
                <td className="py-2 px-4">{course.duration}</td>
                <td className="py-2 px-4">{course.eligibility}</td>
                <td className="py-2 px-4">{course.fee}</td>
                <td className="py-2 px-4">
                  <EnquireButton course={course.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Vgu;
