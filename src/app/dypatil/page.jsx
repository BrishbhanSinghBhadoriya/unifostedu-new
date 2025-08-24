'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { FaBookOpen, FaUserTie, FaBriefcase, FaClipboardCheck } from "react-icons/fa";

const EnquireCard = ({ course, duration, fees, specialization, image }) => {
//   const navigate = useNavigate();
  const university = "DY Patil University";

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
          <p className="text-sm text-gray-600"><strong>Fees:</strong> {fees}</p>
           <p className="text-sm text-gray-600"><strong>Specialization,:</strong> {specialization}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition w-full"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Dypatil = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      fees: "₹1,45,400",
      eligibility: "10+2 Pass",
      specialization: "Finance Management , Retail Management, E-Commerce Management,Marketing Management,  Human Resource Management, It and System Management, Internatinal Business Management, Banking Financial Services and Insurance Management ",
      image: "/bba.jpeg",
    },
  
   
  ];

  const pgCourses = [
   
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹1,40,000",
      eligibility: "Graduation with 50% Marks",
       specialization: "General",
      image: "/mca1.jpeg",
    },
    

    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,89,400",
      specialization: "Human Resource Management, Marketing Management,Operation Management,Finance Management,IT Management,Business Analytics Management, Fintech Management, Project Management, Agribusiness Management, International Business Management, Digital Marketing Management,Logistics, Materials & Supply Chain ,Artificial Intelligence & Machine Learning,",

      image: "/mba.jpeg",
    },
  ];

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
     

      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
             DY Patil University Online 
            </h1>
            <p> <span className="font-semibold text-gray-700">Private University in Pune, Maharasthtra, India.</span><br /><br/></p>
            <br />
            <p className="text-gray-700 text-lg">
              DY Patil University offers flexible online degrees in collaboration with Harvard, aimed at career growth for students and professionals alike. Join to access expert faculty and 24/7 learning support.DY Patil University Online is recognized by the University Grants Commission (UGC) and the All India Council for Technical Education (AICTE). It's also accredited by NAAC with an A++ grade. We offer a range of undergraduate and postgraduate programs in fields like Business Administration, Computer Applications, and more. Our online platform provides flexibility for working professionals and students to learn at their own pace while receiving quality education from experienced faculty.  
            </p>
            
          </div>
          
          <div className="md:w-1/2">
            <img src="/dypatil.png" alt="DY Patil University" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/*  Courses */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">UG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/*  Certificate */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">PG Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 px-6 bg-gray-100 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10 font-[Poppins]">
            Why Choose DY Patil Online?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <FaBookOpen />, title: "UGC-Approved & Accredited", desc: "Recognized by UGC and accredited by NAAC A+." },
              { icon: <FaUserTie />, title: "Experienced Faculty", desc: "Learn from top educators and industry experts." },
              { icon: <FaBriefcase />, title: "Career Services", desc: "Internships, workshops & job readiness programs." },
              { icon: <FaClipboardCheck />, title: "Placement Support", desc: "Placement help for your dream job." }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
                <div className="text-3xl text-blue-700 mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="bg-white py-12 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 font-[Poppins]">
            Admission Procedure
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              "Apply online by filling out the application form.",
              "Upload required academic documents.",
              "Pay the program fee securely.",
              "Receive confirmation and start learning!"
            ].map((step, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Step {idx + 1}</h3>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Recognized & Accredited By</h2>
        <div className="flex flex-wrap justify-center items-center gap-20 px-4">
          <img src="/ugc.png" alt="UGC" className="h-16 object-contain" />
          <img src="/aicte.png" alt="AICTE" className="h-16 object-contain" />
          
           
           <img src="/naac.png" alt="NAAC" className="h-16 object-contain" />
           <img src="/nirf.png" alt="NIRF" className="h-16 object-contain" />
           <img src="/wes.png" alt="WES" className="h-16 object-contain" />
            </div>
      </section>

      <section className="bg-[#003366] py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Certificate Image */}
    <div className="flex-1">
      <img
        src="/dycertificates.webp"
        alt="Dr. DY Patil"
        className="w-full max-w-md mx-auto rounded shadow-lg"
      />
    </div>

      {/* Text Content */}
    <div className="flex-1 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Online Degree from Dr. DY Patil Online University
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Dr. DY Patil Online provides a great opportunity to earn a degree from a prestigious institution. The online programs are designed to be flexible and accessible, allowing students to balance their studies with work and personal commitments.
        The degrees offered are equivalent to on-campus programs and are recognized globally. With a focus on quality education, Dr. DY Patil Online ensures that students receive the same level of academic rigor and support as traditional students.
      </p>

      <h3 className="text-xl font-semibold mb-2">Benefits of Dr. DY Patil Online</h3>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Regular Live classes that help students to learn with a flexible time.</li>
        <li>Career Assistance & Exclusive Virtual Job Fairs</li>
        <li>Equivalent to Dr. DY Patil (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
        <li>Hands-on & Immersive Learning through world-Class Experince</li>
      </ul>
    </div>
  </div>
</section>
      {/* Hiring Partners Section */}

      
<section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">
        Our learners work at
      </h2>
      <p className="text-xl text-gray-600 mt-2">
        Top hiring partners at Jain Online
      </p>
    </div>

    {/* Logo Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/3.webp" alt="Company" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/4.webp" alt="Microsoft" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/5.webp" alt="Company 9" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/6.webp" alt="Company 10" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/7.webp" alt="Company4" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/8.webp" alt="Company 6" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/9.webp" alt="Companany5" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/company1.png" alt="Adove" className="h-12 object-contain" />
      </div>
            

      

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/company6.png" alt="Samsung4" className="h-12 object-contain" />
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/nestle.jpg" alt="Samsung8" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/microsoft.jpg" alt="Samsung9" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/icici.jpg" alt="Samsung" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/hp.jpg" alt="Samsung2" className="h-12 object-contain" />
      </div>
      \
      {/* Add more cards here as needed */}
    </div>
  </div>
</section>
    </>
  );
};


export default Dypatil;
