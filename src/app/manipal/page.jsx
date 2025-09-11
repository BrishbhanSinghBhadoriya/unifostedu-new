'use client';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
//import { Helmet } from 'react-helmet';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import EnquireCard from '@/components/EnquireCard';
import Head from 'next/head';
import Image from 'next/image';

const Manipal = () => {
 const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Finance & Accounting, Digital Marketing, Enterepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "/images/bba.webp",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "/images/bca.webp",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "99,000",
      specialization: "General",
      image: "/images/bcom.webp",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,75,000",
      specialization: "Super/Dual(Human Resource Management and Finance, Finance and Marketing, Marketing and Human Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Artificial Intelligence Banking and Finance, 15 other fields)",
      image: "/images/mba.webp",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,58,000",
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML", 
      image: "/images/mca1.webp",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "1,08,000",
      specialization: "General", 
      image: "/images/m.com.webp",
    },
  
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000 - 1,40,000",
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "/images/ma1.webp",
    },
  ];


  

  return (
    <>
      
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      
       <Head>
        <title>Manipal University Online Jaipur, Rajasthan | Accredited Online Degrees</title>
        <meta name="description" content="Explore globally recognized online programs from Manipal University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals." />
        <meta name="keywords" content="Manipal Online, Manipal University Jaipur, MUJ Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, Online Degrees India, Distance Learning, UGC Approved, AICTE Approved" />
        <meta name="author" content="Manipal University Online" />
        <meta name="robots" content="index, follow" />
         <link rel="canonical" href="https://unifostedu.com/manipal" />
         
        {/* Open Graph */}
        <meta property="og:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta property="og:description" content="Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning." />
        <meta property="og:image" content="/images/manipal.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onlinedegree.in/manipal" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manipal University Online | Accredited Online Degrees" />
        <meta name="twitter:description" content="Enroll in UGC and AICTE approved online courses at Manipal University Jaipur. Learn with flexibility and global recognition." />
        <meta name="twitter:image" content="/images/manipal.webp" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {/* Intro Section */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] leading-tight mb-4 font-[Poppins]">
              Say Hii to your future with Manipal University Online
            </h1><br />
            <p> <span className="inline-block px-3 py-1 rounded-full bg-white text-[#1a365d] border border-blue-100 shadow-sm text-sm font-semibold">Private University in Jaipur, Rajasthan, India.</span><br /><br/></p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Manipal University Online transforms careers with globally recognized online degrees delivered at your doorstep. With top-class accreditations and flexible learning, it offers quality education with personalized mentorship.
              It provides a unique blend of academic excellence and industry relevance, ensuring students are well-prepared for the future. 
              <br /><br />
              Ranked among the top private universities in India, Manipal offers diverse programs in business and technology with strong academic support and vibrant digital learning.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-r from-blue-400/50 via-indigo-400/50 to-cyan-400/50 shadow-md">
              <div className="rounded-2xl bg-white overflow-hidden">
                <Image width={100} height={100} src="/images/manipal.webp" alt="Manipal University" className="w-full h-auto object-contain" />
              </div>
            </div>
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
              <EnquireCard key={index} {...item} universityName="Manipal University Online" />
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
              <EnquireCard key={index} {...item} universityName="Manipal University Online" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
     {/* Why Choose Manipal */}
<section className="py-14 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d]">Why Choose Manipal University Online?</h2>
    <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4]"></div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
      <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl mb-4 shadow-sm">{item.icon}</div>
        <h4 className="text-lg font-semibold text-[#1a365d] mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
</section>

       {/* Accreditation Logos */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Recognized & Accredited By</h2>
        <div className="flex flex-wrap justify-center items-center gap-20">
          <Image width={100} height={100} src="/images/ugc.webp" alt="UGC" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/aicte.webp" alt="AICTE" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/naac.webp" alt="NAAC" className="h-16 object-contain" />
          
         
          <Image width={100} height={100} src="/images/aiu.webp" alt="AIU" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/nba.webp" alt="NBA" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/qs.webp" alt="QS" className="h-16 object-contain" />
          <Image width={100} height={100} src="/images/acu.webp" alt="ACU" className="h-16 object-contain" />
          
          
          


        </div>
      </section>


      {/* Admission Procedure */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
  <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
    
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
            <div className="hidden md:block absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900/40 z-0"></div>
          )}

          {/* Circle with border */}
          <div className="z-10 w-8 h-8 rounded-full border-4 border-blue-700 bg-white flex items-center justify-center shadow">
            <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
          </div>

          {/* Step label */}
          <h4 className="mt-4 font-semibold text-lg text-[#1a365d]">{item.step}</h4>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Certificate Section */}
      <section className="bg-[#002d5f] text-white py-16 px-6 font-[Inter]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image width={100} height={100} src="/images/muj-certi.webp" alt="Certificate" className="rounded-lg shadow-lg w-full" />
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
      <section className="py-14 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d]">Our Students Work At</h2>
          <p className="text-lg sm:text-xl text-gray-600">Top Hiring Partners of Manipal Online</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {["/images/company.webp", "/images/company1.webp", "/images/company9.webp", "/images/com10.webp", "/images/companany4.webp", "/images/company6.webp", "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp"].map((src, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center justify-center hover:shadow-lg transition-all">
              <Image width={100} height={100} src={src} alt="Company" className="h-10 sm:h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Manipal;
