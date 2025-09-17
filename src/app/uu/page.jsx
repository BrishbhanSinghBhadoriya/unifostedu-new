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
  FaGlobe,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptop
} from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import EnquireCard from '@/components/EnquireCard';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import AdmissionProcedure from '@/components/AdmissionProcedure';
import {  FaUserTie, FaBriefcase, FaClipboardCheck, } from "react-icons/fa";


  // const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
  // const router = useRouter();  
  // const university = "Uttaranchal University";

  // const handleClick = () => {
  //    router.push(`/enquiry?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}`);
  // };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
//       <img src={image} alt={course} className="h-48 w-full object-cover" />
//       <div className="p-5 flex-1 flex flex-col justify-between">
//         <div>
//           <h3 className="text-xl font-bold text-gray-900 mb-3">{course}</h3>
//           <div className="flex items-center text-sm text-blue-600 mb-3">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span>{duration}</span>
//           </div>
//           <p className="text-sm text-gray-600 mb-2"><strong className="text-gray-800">Eligibility:</strong> {eligibility}</p>
//           {fees && <p className="text-sm text-gray-600 mb-2"><strong className="text-gray-800">Fees:</strong> {fees}</p>}
//           {specialization && <p className="text-sm text-gray-600"><strong className="text-gray-800">Specialization:</strong> {specialization}</p>}
//         </div>
//         <div className="mt-5">
//           <button
//             onClick={handleClick}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center block font-semibold hover:opacity-90 transition w-full shadow-md hover:shadow-lg"
//           >
//             Enquire Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const UU = () => {
  // Using data from the uu.pdf file
  const ugCourses = [
  {
    course: "Bachelor of Arts (BA)",
    duration: "3 Years",
    eligibility: "10+2 pass from a recognized board",
    fees: "₹72,000",
    specialization: "General",
    image: "/images/ba.webp",
  },
  {
    course: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    eligibility: "10+2 pass from a recognized board",
    fees: "₹1,20,000",
    specialization: "General",
    image: "/images/bba.webp",
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    eligibility: "10+2 pass from a recognized board",
    fees: "₹1,20,000",
    specialization: "General",
    image: "/images/bca.webp",
  },
];

const pgCourses = [
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility:
      "Graduation in any field from a recognized university with a minimum of 40% marks in aggregate OR below 40% with eligibility test",
    fees: "₹1,40,000",
    specialization:
      "Marketing, Digital, Human Resource, Business Analytics, Finance, International Business, Information Technology Management, Logistics & Supply Chain Management",
    image: "/images/mba.webp",
  },
  {
    course: "Executive MBA",
    duration: "2 Years",
    eligibility:
      "Graduation in any field from a recognized university with relevant work experience (specific criteria may vary)",
    fees: "₹1,40,000",
    specialization: "Business Analytics, HR Analytics, Finance Analytics,Banking and Finance",
    image: "/images/mca.webp",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility:
      "Graduate in Computer Applications/CS/IT/Engineering with 50% marks (45% reserved) OR Graduate with Mathematics at 10+2 or graduation level. If not studied, must complete a bridge course.",
    fees: "₹1,20,000",
    specialization: "General",
    image: "/images/mca1.webp",
  },
];


  return (
    <>
       <Head>
        <title>Uttaranchal University Online | Admission, Fees & Courses</title>
        <meta
          name="description"
          content="Explore Uttaranchal University Online Programs - MBA, BBA, BCA, MCA, and more. Learn about fees, eligibility, admission process, and career opportunities."
        />
        <meta
          name="keywords"
          content="Uttaranchal University Online, UU University, Online MBA, Online BBA, Online MCA, Online BCA, Executive MBA, Admission 2025, Fees, Distance Learning"
        />
        <link rel="canonical" href="https://unifostedu.com/uttaranchal-university" />
        <meta property="og:title" content="Uttaranchal University Online | Admission 2025" />
        <meta
          property="og:description"
          content="Join Uttaranchal University Online for UGC-approved UG & PG programs. Admission open for MBA, MCA, BBA, BCA, and more."
        />
        <meta property="og:image" content="/images/uu-uni.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      {/* Hero Section with Gradient Background */}
     <HeroSection
  universityName="UU University Online"
  location="Dehradun, Uttarakhand, India"
  type="Private University"
  nirfRank="100+" 
  rating="4.1"
  description="UGC Recognized Programs | Global Learning Community | Industry-Relevant Curriculum"
  description2={`
    UU University offers world-class online education designed for working professionals 
    and students seeking flexible learning options. 
    Our programs combine academic excellence with practical skills to prepare you for 
    success in today's competitive job market.
  `}
  badgeText="100% Online Learning | Placement Assistance | Expert Faculty"
  imgSrc="/images/uu-uni.webp"
  imgAlt="UU University Campus"
  students="50,000+"
  partners="100+"
  campus="Dehradun Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Industry-Relevant Curriculum" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Expert Faculty" },
    { icon: <FaBriefcase className="text-blue-600" />, text: "Placement Assistance" },
    { icon: <FaClipboardCheck className="text-blue-600" />, text: "UGC Recognized Degrees" },
  ]}
/>

<div>
  <AccreditationSection
    title="Why Choose UU University?"
    description="UU University offers globally recognized online degrees with expert faculty, flexible learning, cutting-edge digital platform, and comprehensive career support to help you succeed in the modern world."
    stats={[
      { number: "50,000+", label: "Students Enrolled" },
      { number: "200+", label: "Expert Faculty" },
      { number: "95%", label: "Satisfaction Rate" },
      { number: "100+", label: "Corporate Partners" },
    ]}
    benefits={[
      {
        title: "Global Recognition",
        description: "Our degrees are recognized worldwide, opening doors to international opportunities.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
      },
      {
        title: "Expert Faculty",
        description: "Learn from industry veterans and academic experts with real-world experience.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/></svg>`,
      },
      {
        title: "Cutting-Edge Curriculum",
        description: "Programs updated regularly to match latest industry trends and technologies.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
      },
      {
        title: "Flexible Learning",
        description: "Study at your own pace with 24/7 access to learning materials and recorded lectures.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 22h12V6H6v16zM8 2h8v2H8V2z"/></svg>`,
      },
      {
        title: "Placement Support",
        description: "Resume building, interview prep, and job placement assistance.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>`,
      },
      {
        title: "Robust Alumni Network",
        description: "Connect with a global alumni network across industries.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 20c0-5.33 9.33-8 10-8s10 2.67 10 8v2H2v-2z"/></svg>`,
      },
      {
        title: "Advanced Digital Platform",
        description: "Interactive live classes, doubt clearing sessions, online assessments, and mobile learning app.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>`,
      },
      {
        title: "24/7 Resources",
        description: "Access to e-books, recorded lectures, online labs, and peer collaboration anytime.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
      { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
      { src: "/images/wes.webp", alt: "WES", name: "World Education Services (WES)" },
    ]}
    internationalRecognition={[]}
    successStories={[]}
  />
</div>


      {/* Courses Offered */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-blue-700">Academic Programs</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of UGC-recognized programs designed to meet industry demands
          </p>
        </div>
    
        {/* UG Cards */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-200">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* PG Cards */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-200">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose <span className="text-blue-700">UU University</span>?</h2>
          <p className="text-xl text-gray-600">Discover the advantages of learning with us</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaGlobe className="text-3xl" />,
              title: "Global Recognition",
              text: "Our degrees are recognized worldwide, opening doors to international opportunities."
            },
            {
              icon: <FaChalkboardTeacher className="text-3xl" />,
              title: "Expert Faculty",
              text: "Learn from industry veterans and academic experts with real-world experience."
            },
            {
              icon: <FaLaptop className="text-3xl" />,
              title: "Cutting-Edge Curriculum",
              text: "Our programs are regularly updated to reflect the latest industry trends and technologies."
            },
            {
              icon: <FaBookOpen className="text-3xl" />,
              title: "Flexible Learning",
              text: "Study at your own pace with 24/7 access to learning materials and recorded lectures."
            },
            {
              icon: <FaCertificate className="text-3xl" />,
              title: "Placement Support",
              text: "Comprehensive career services including resume building, interview prep, and job placement."
            },
            {
              icon: <FaUniversity className="text-3xl" />,
              title: "Robust Alumni Network",
              text: "Join a network of successful professionals across various industries worldwide."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-full">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Platform Features */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced <span className="text-yellow-300">Learning Platform</span></h2>
            <p className="text-xl text-blue-200">Experience seamless learning with our state-of-the-art digital campus</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Interactive Live Classes", icon: "🎥" },
                  { title: "24/7 Access to Resources", icon: "📚" },
                  { title: "Doubt Clearing Sessions", icon: "💬" },
                  { title: "Online Assessment", icon: "📝" },
                  { title: "Peer Collaboration", icon: "👥" },
                  { title: "Mobile Learning App", icon: "📱" },
                ].map((feature, index) => (
                  <div key={index} className="bg-blue-800 p-4 rounded-lg flex items-center">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Image width={100} height={100} loading="lazy" src="/images/learning-platform.webp" alt="Learning Platform" className="rounded-xl shadow-2xl border-4 border-blue-700 max-w-full h-auto" />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                  Experience The Future of Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
     <AdmissionProcedure />


      {/* Certificate Section */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <Image width={100} height={100} loading="lazy" src="/images/uu-certificate.webp" alt="UU University Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
            
          </div>

          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Online Degree from Uttranchal University
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Uttranchal University Online provides comprehensive services including e-lectures, counseling from academic advisors, career assistance, and more to help students succeed in their professional journeys.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits of Uttranchal University Online</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Live Classes by Industry Experts</li>
              <li>Career Assistance & Exclusive Virtual Job Fairs</li>
              <li>Globally recognized degrees equivalent to on-campus programs</li>
              <li>Practical & Immersive Learning through industry-relevant curriculum</li>
              <li>24/7 Access to Learning Resources</li>
              <li>Robust Alumni Network</li>
              <li>Flexible Learning Options</li>
              <li>Dedicated Student Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our <span className="text-blue-700">Students Say</span></h2>
            <p className="text-xl text-gray-600">Hear from our successful alumni</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                course: "MBA Graduate",
                text: "The flexibility of UU's online MBA allowed me to balance my job and studies. The curriculum was practical and immediately applicable to my work."
                
              },
              {
                name: "Rahul Verma",
                course: "BCA Student",
                text: "The faculty support and learning resources are exceptional. I've gained valuable skills that helped me secure an internship at a tech company."
                
              },
              {
                name: "Anjali Patel",
                course: "Executive MBA",
                text: "As a working professional, the Executive MBA program was perfect for upgrading my skills without taking a career break. Highly recommended!"
                
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our learners work at
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Top hiring partners at Uttranchal University Online
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/tcs.webp" alt="Company" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/lt.webp" alt="Microsoft" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/company9.webp" alt="Company 9" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/com10.webp" alt="Company 10" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/companany4.webp" alt="Company4" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/sap.webp" alt="Company 6" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/icici.webp" alt="Companany5" className="h-12 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src="/images/adove.webp" alt="Adove" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of students who have advanced their careers with UU University's online programs</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
          </div>
          
          <p className="mt-8 text-blue-200">Applications for the next batch are now open. Limited seats available.</p>
        </div>
      </section>
    </>
  );
};

export default UU;