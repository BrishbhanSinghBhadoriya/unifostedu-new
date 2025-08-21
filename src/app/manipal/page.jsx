'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

//Reusable Enquire Button
const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
// const navigate = useNavigate();
const router = useRouter();  
const university = "Jain University";

  const handleClick = () => {
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

const Manipal = () => {
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: " Bachelor of Business Administration, Digital Marketing, Healthcare Management, Data Science and Analytics, Finance and Accounting",
      image: "/bba.jpeg",
    },
     {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: " Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "/bca.jpeg",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees : "99,000",
      specialization: "Online Bachelor of Commerce, Corporate Accounting",
      image: "/bcom.jpeg",
    },
 
  ];

  

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,75,000",
      specialization: "Human Resource Management and Finance, Finance and Marketing,Marketing and Human Resource Management,Marketing and Business Analytics,Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, ,Artificial Intelligence  Banking and Finance, 15 other field,",

      image: "/mba.jpeg",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
      specialization: "DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence" , 

      image: "/mca1.jpeg",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,08,000",
      specialization: "Accounting and Finance, Professional Accounting and Finance (Accredited by CPA, US)", 
      image: "/m.com.jpeg",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation ",
      fees: "2,80,000",
      specialization: "Data Science, Business Analytics",
      image: "/m.com.jpeg",
    },

    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "1,40,000",
      specialization: " MA( Journalism and Mass Communication, ",
      image: "/ma1.jpeg",
    },
  ];


  

  return (
    <>
      {/* <Helmet>
        <title>Manipal University Online - Courses, Fees & Admissions</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Helmet> */}

      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Say Hii to your future with Manipal University Online
            </h1><br />
            <p> <span className="font-semibold text-gray-700">Private University in Jaipur, Rajasthan, India.</span><br /><br/></p>

            <p className="text-gray-700 text-lg">
              Manipal University Online transforms careers with globally recognized online degrees delivered at your doorstep. With top-class accreditations and flexible learning, it offers quality education with personalized mentorship.
              It provides a unique blend of academic excellence and industry relevance, ensuring students are well-prepared for the future. 
              <br /><br />
              Ranked among the top private universities in India, Manipal offers diverse programs in business and technology with strong academic support and vibrant digital learning.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/manipal.png"
              alt="Manipal University"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Courses Offered */}
    
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

      {/* Why Choose Section */}
     {/* Why Choose Manipal */}
<section className="py-12 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">Why Choose Manipal University Online?</h2>
    <hr className="mt-4 border-gray-300 w-24 mx-auto" />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {[
      {
        icon: <FaGraduationCap />,
        title: "Top-Ranked Private University",
        text: "Recognized as one of India’s best private institutions."
      },
      {
        icon: <FaUniversity />,
        title: "Globally Recognized Degrees",
        text: "Accredited programs accepted worldwide by top employers."
      },
      {
        icon: <FaFileAlt />,
        title: "Flexible & Personalized Learning",
        text: "Learn anytime, anywhere with tailored academic support."
      },
      {
        icon: <FaCheckCircle />,
        title: "Expert Faculty Mentorship",
        text: "One-on-one guidance by experienced mentors & professors."
      },
      {
        icon: <FaCertificate />,
        title: "UGC & AICTE Approved",
        text: "Degrees entitled by UGC and recognized by AICTE."
      },
      {
        icon: <FaBuilding />,
        title: "Global Alumni Network",
        text: "Join a network of learners from 50+ countries."
      },
      {
        icon: <FaCheckCircle />,
        title: "Career Support",
        text: "Internships, placements, resume help, and interview prep."
      },
      {
        icon: <FaCheckCircle />,
        title: "Digital Resources",
        text: "Access e-books, recorded classes, and online labs."
      }
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-start text-left">
        <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.text}</p>
      </div>
    ))}
  </div>
</section>

       {/* Accreditation Logos */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Recognized & Accredited By</h2>
        <div className="flex flex-wrap justify-center items-center gap-20">
          <img src="/ugc.png" alt="UGC" className="h-16 object-contain" />
          <img src="/aicte.png" alt="AICTE" className="h-16 object-contain" />
          <img src="/naac.png" alt="NAAC" className="h-16 object-contain" />
          
         
          <img src="/aiu.png" alt="AIU" className="h-16 object-contain" />
          <img src="/nba.png" alt="NBA" className="h-16 object-contain" />
          <img src="/qs.png" alt="QS" className="h-16 object-contain" />
          <img src="/acu.png" alt="ACU" className="h-16 object-contain" />
          
          
          


        </div>
      </section>


      {/* Admission Procedure */}
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

      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img src="/muj-certi.jpeg" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognized Online Degree from Manipal University</h2>
            <p className="mb-6 text-lg">
              Learn at your pace, guided by experts, with a UGC-entitled degree that is accepted globally across industries and sectors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC & AICTE Recognized Degrees</li>
              <li>Daily Live & Recorded Classes</li>
              <li>Global Collaborations with Ivy-League Institutions</li>
              <li>100% Placement & Internship Support</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Hiring Partners */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
          <p className="text-xl text-gray-600">Top Hiring Partners of Manipal Online</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/company.png", "/company1.png", "/company9.jpg", "/com10.png", "/companany4.png", "/company6.png", "/companany5.png", "/adove.png", "/samsung.png"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Manipal;
