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

const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
//  const navigate = useNavigate();
  const university = "Jain University";

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

const Jain = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,95,000",
      specialization: "Online Bachelor of Business Administration, Digital Marketing, Healthcare Management, Data Science and Analytics",
      image: "/bba.jpeg",
    },
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "1,35,000 -1,65,000",
      specialization: "Computer Science and IT, Data Science and Analytics, Cyber Security, Artificial Intelligence, Cloud Computing",
      image: "/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees : "1,27,500",
      specialization: "Online Bachelor of Commerce, Corporate Accounting",
      image: "/bcom.jpeg",
    },
 
  ];

  

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,96,000 - 2,16,000 ",
      specialization: "Human Resource Management and Finance, Finance and Marketing,Marketing and Human Resource Management,Marketing and Business Analytics,Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, ,Artificial Intelligence  Banking and Finance, 15 other field,",

      image: "/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "1,60,000",
      specialization: "DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence" , 

      image: "/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,10,000",
      specialization: "Accounting and Finance, Professional Accounting and Finance (Accredited by CPA, US)", 
      image: "/m.com.jpeg",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "190,000",
      specialization: "Jainology in Comparative Religion and Philosophy, English, Economics, Public Policy",
      image: "/ma1.jpeg",
    },
  ];

  return (
    <>
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      
        {/* Intro Section */}
      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Bring a Bright Future with Jain University Online
            </h1><br />
            <p> <span className="font-semibold text-gray-700">Private University in Bengaluru, Karnataka, India.</span><br /><br/></p>
            <p className="text-gray-700 text-lg">
              Jain University Online is a part of NAAC A++ grade accreditation offering UGC-Entitled online degree programs intending to empower learners by providing the latest knowledge to help students effectively.<br /><br />
              30 years of excellence in education field, Jain University is one of the top universities in India with a strong focus on quality education and building a great future ahead for students and working professionals.
            </p>

            
          </div>
          <div className="md:w-1/2">
            <img src="/jain.png" alt="Jain University" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003b59] font-[Poppins] mb-6">
            Jain University Online Courses
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore undergraduate and postgraduate online degree programs from Jain University. Experience quality, flexibility, and career-focused education from one of India’s top NAAC A++ accredited universities.
          </p>
        </div>
      </section>


      {/* UG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* PG Cards */}
      <section className="py-12 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003b59] mb-6 font-[Poppins]">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

     <section className="py-12 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">
      Why Choose Jain online?
    </h2>
    <hr className="mt-4 border-gray-300 w-24 mx-auto" />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {/* Item 1 */}
    <div className="flex flex-col items-start text-left">
      <FaBookOpen className="text-blue-600 text-3xl mb-4" />
      <h4 className="text-lg font-semibold text-gray-900 mb-2">Diverse learning mediums</h4>
      <p className="text-gray-600 text-sm">
        E-books, printed & audio books, videos to cater your preferences & unique learning style
      </p>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-start text-left">
      <FaUserTie className="text-blue-600 text-3xl mb-4" />
      <h4 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Academic Advisor</h4>
      <p className="text-gray-600 text-sm">
        Dedicated experts and advisor to guide you at every step of your professional career
      </p>
    </div>

   

    {/* Item 4 */}
    <div className="flex flex-col items-start text-left">
      <FaBriefcase className="text-blue-600 text-3xl mb-4" />
      <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Services</h4>
      <p className="text-gray-600 text-sm">
        Be job-ready with resume building workshops, internships & industry mentorship
      </p>
    </div>

   


   

    {/* Item 8 */}
    <div className="flex flex-col items-start text-left">
      <FaClipboardCheck className="text-blue-600 text-3xl mb-4" />
      <h4 className="text-lg font-semibold text-gray-900 mb-2">Placement opportunities</h4>
      <p className="text-gray-600 text-sm">
        Job interview prep, placement assistance & resume building for students to be job-ready
      </p>
    </div>
  </div>
</section>
   

   <section className="py-10 bg-white">
  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
    Recognized & Accredited By
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-20 px-4">
    <img src="/ugc.png" alt="UGC" className="h-16 object-contain" />
    <img src="/aicte.png" alt="AICTE" className="h-16 object-contain" />
    <img src="/naac.png" alt="NAAC" className="h-16 object-contain" />
    <img src="/nirf.png" alt="NIRF" className="h-16 object-contain" />
    <img src="/wes.png" alt="WES" className="h-16 object-contain" />
    <img src="/aiu.png" alt="AIU" className="h-16 object-contain" />
    <img src="/careers.webp" alt="CARRES" className="h-16 object-contain" />
    <img src="/auap.webp" alt="AUAP" className="h-16 object-contain" />
    <img src="/ksurf.webp" alt="KSURF" className="h-16 object-contain" />
    <img src="/recogin.webp" alt="RECOGIN" className="h-16 object-contain" />
    
    

  </div>
</section>



      {/*Addimision process*/}
      <section className="bg-gray-100 py-10 px-4">
  <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
    
    {/* Centered Heading */}
    <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
      Admission Process
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
      {[
        {
          step: "Step 1",
          description:
            "Fill the registration form and create unique login credentials (on the official website)",
        },
        {
          step: "Step 2",
          description:
            "Fill in your details (including educational qualifications) and pay the application and semester fees",
        },
        {
          step: "Step 3",
          description: "Upload the necessary documents",
        },
        {
          step: "Step 4",
          description: "Submit the application form",
        },
      ].map((item, index) => (
        <div key={index} className="relative flex flex-col items-center">
          {/* Line connector */}
          {index !== 0 && (
            <div className="absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900 z-0"></div>
          )}

          {/* Circle with border */}
          <div className="z-10 w-6 h-6 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
          </div>

          {/* Step label */}
          <h4 className="mt-4 font-semibold text-lg">{item.step}</h4>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#003366] py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Certificate Image */}
    <div className="flex-1">
      <img
        src="/jainonlined.webp"
        alt="Amity University Certificate"
        className="w-full max-w-md mx-auto rounded shadow-lg"
      />
    </div>

    {/* Text Content */}
    <div className="flex-1 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Online Degree from Jain Online University
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Jain Online provides amity plus services that has the benefits of e-lectures, counselling from academic advisors, career assistance, etc.
      </p>

      <h3 className="text-xl font-semibold mb-2">Benefits of Jain Online</h3>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Daily LIVE Classes by Faculty of International Repute</li>
        <li>Career Assistance & Exclusive Virtual Job Fairs</li>
        <li>Equivalent to JAIN (Deemed-to-be University) on-campus program degrees   Globally recognized</li>
        <li>Hands-on & Immersive Learning through world-Class Experince</li>
      </ul>
    </div>
  </div>
</section>


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
        <img src="/company.png" alt="Company" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/company1.png" alt="Microsoft" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/company9.jpg" alt="Company 9" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/com10.png" alt="Company 10" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/companany4.png" alt="Company4" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/company6.png" alt="Company 6" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/companany5.png" alt="Companany5" className="h-12 object-contain" />
      </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/adove.png" alt="Adove" className="h-12 object-contain" />
      </div>
            

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/3.webp" alt="Samsung3" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/4.webp" alt="Samsung4" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/5.webp" alt="Samsung5" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/6.webp" alt="Samsung6" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/7.webp" alt="Samsung7" className="h-12 object-contain" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/8.webp" alt="Samsung8" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/9.webp" alt="Samsung9" className="h-12 object-contain" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
        <img src="/samsung.png" alt="Samsung" className="h-12 object-contain" />
      </div>
      {/* Add more cards here as needed */}
    </div>
  </div>
</section>





    </>
  );
};

export default Jain;
