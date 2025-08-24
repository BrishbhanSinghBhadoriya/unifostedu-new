'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
} from 'react-icons/fa';

// Reusable Enquire Button Component
const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
  const router = useRouter();  
  const university = "Sikkim Manipal University";

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

const SMU = () => {
  // Using data from the smu.pdf file
 const ugCourses = [
  {
    course: "Bachelor of Arts (BA)",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    fees: "₹75,000",
    image: "/ba.jpeg",
  },
  {
    course: "Bachelor of Commerce (B.Com)",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    fees: "₹75,000",
    image: "/bcom.jpeg",
  },
];

const pgCourses = [
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Graduation with minimum 50% marks",
    fees: "₹1,10,000",
    image: "/mba.jpeg",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "BBA or UG Degree with minimum 40% + 10th & 12th",
    fees: "₹98,000",
    image: "/mca1.jpeg",
  },
  {
    course: "Master of Arts (MA - English / Sociology / Political Science)",
    duration: "2 Years",
    eligibility: "Graduation in relevant stream",
    fees: "₹79,000",
    image: "/ma1.jpeg",
  },
  {
    course: "Master of Commerce (M.Com)",
    duration: "2 Years",
    eligibility: "Graduation in Commerce or equivalent",
    fees: "₹75,000",
    image: "/bcom.jpeg",
  },
];

  return (
    <>
      {/* Intro Section */}
      <section className="py-16 bg-white px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 font-[Poppins]">
              Advance Your Career with Sikkim Manipal University
            </h1><br />
            <p> <span className="font-semibold text-gray-700">Established University in Sikkim, India</span><br /><br/></p>

            <p className="text-gray-700 text-lg">
              Sikkim Manipal University offers industry-relevant online programs with UGC recognition. 
              With a focus on flexible learning and career advancement, SMU provides quality education 
              that fits your schedule while maintaining academic excellence.
              <br /><br />
              SMU's online degrees are designed to help working professionals upskill and advance in 
              their careers without putting their lives on hold.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/smu-uni.jpg" // You'll need to add this image
              alt="Sikkim Manipal University"
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Sikkim Manipal University?</h2>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaGraduationCap />,
              title: "UGC Recognized Degrees",
              text: "All programs are recognized by the University Grants Commission."
            },
            {
              icon: <FaUniversity />,
              title: "Industry-Relevant Curriculum",
              text: "Programs designed to meet current industry requirements."
            },
            {
              icon: <FaFileAlt />,
              title: "Flexible Learning Options",
              text: "Study at your own pace with online resources."
            },
            {
              icon: <FaCheckCircle />,
              title: "Expert Faculty",
              text: "Learn from experienced professors and industry experts."
            },
            {
              icon: <FaCertificate />,
              title: "Placement Assistance",
              text: "Career support and placement opportunities."
            },
            {
              icon: <FaBuilding />,
              title: "Strong Alumni Network",
              text: "Connect with professionals across industries."
            },
            {
              icon: <FaCheckCircle />,
              title: "Digital Learning Platform",
              text: "Access to comprehensive online learning resources."
            },
            {
              icon: <FaCheckCircle />,
              title: "Affordable Education",
              text: "Quality education at competitive fee structures."
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
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            Admission Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative">
            {[
              {
                step: "Step 1",
                description: "Fill the online application form with personal and educational details",
              },
              {
                step: "Step 2",
                description: "Upload required documents and pay the application fee",
              },
              {
                step: "Step 3",
                description: "Get provisional admission letter upon verification",
              },
              {
                step: "Step 4",
                description: "Complete fee payment and begin your classes",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index !== 0 && (
                  <div className="absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900 z-0"></div>
                )}

                <div className="z-10 w-6 h-6 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
                </div>

                <h4 className="mt-4 font-semibold text-lg">{item.step}</h4>
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
            <img src="/smu.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">UGC-Entitled Online Degrees from SMU</h2>
            <p className="mb-6 text-lg">
              Earn a recognized degree that holds the same value as a regular degree, with the flexibility to learn from anywhere.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>UGC Recognized Online Degrees</li>
              <li>Learn from Industry Experts</li>
              <li>Comprehensive Study Material</li>
              <li>Dedicated Student Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Students Work At</h2>
          <p className="text-xl text-gray-600">Top Hiring Partners of SMU</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["/company.png", "/company1.png", "/company9.jpg", "/com10.png", "/companany4.png", "/company6.png", "/adove.png", "/samsung.png","/ey.png","/ibm.png","/hp.png"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <img src={src} alt="Company" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SMU;