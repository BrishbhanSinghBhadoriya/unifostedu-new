import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
const colleges = [
 {
    name: "Amity University Online",
    logo: "/images/amitylogo.jpg",
    ranking: "NIRF-29",
    location: "Noida, UP",
    fee: "₹1.2L - ₹3.45L",
    courses: ["MBA", "BBA", "BCA", "MCA", "more"],
    description: "One of India's leading private universities with comprehensive online programs."
  },
  {
    name: "Manipal University Online",
    logo: "/images/manipallogo.jpg",
    ranking: "NIRF-73",
    location: "Jaipur, Rajasthan",
    fee: "₹1.5L - ₹2.92L",
    courses: ["MBA", "BBA", "BCA", "MCA","more"],
    description: "Pioneer in online education with industry-aligned curriculum."
  },
  {
    name: "Lovely Professional University Online",
    logo: "/images/lpulogo.png",
    ranking: "NIRF-38",
    location: "Phagwara, Punjab",
    fee: "₹80K - ₹2L",
    courses: ["MBA", "BBA", "BCA", "MCA","more"],
    description: "Known for practical learning and strong industry connections."
  },
  {
    name: "University of Petroleum and Energy Studies Online",
    logo: "/images/upeslogo.png",
    ranking: "NIRF-41",
    location: "Dehradun, Uttarakhand",
    fee: "₹1.5L - ₹2.2L",
    courses: ["MBA", "BBA", "BCA", "MCA","more"],
    description: "Specialized in energy and petroleum studies with online programs."
  },
  {
    name: "Narsee Monjee Institute of Management Studies Online",
    logo: "/images/nmimslogo.jpg",
    ranking: "NIRF-21",
    location: "Mumbai, Maharashtra",
    fee: "₹94K - ₹3.5L",
    courses: ["MBA", "BBA", "BCom", "MBA (WX)",],
    description: "Premier management institute with comprehensive online offerings."
  },
  {
    name: "Sharda University Online",
    logo: "/images/shardalogo.png",
    ranking: "NIRF-87",
    location: "Greater Noida, UP",
    fee: "₹80K - ₹1.5L",
    courses: ["MBA", "BBA", "BCA", "MCA","more"],
    description: "Affordable quality education with modern online infrastructure."
  },
  {
    name: "Dr. DY Patil Online",
    logo: "/images/dypatillogo.png",
    ranking: "NIRF-63",
    location: "Navi Mumbai, Maharashtra",
    fee: "₹1.4L - ₹1.9L",
    courses: ["MBA", "BBA",  "MCA",],
    description: "Established university with diverse online program portfolio."
  },
  {
    name: "Jain University Online",
    logo: "/images/jainlogo.png",
    ranking: "NIRF-77",
    location: "Bangalore, Karnataka",
    fee: "₹1.28L - ₹2.6L",
    courses: ["MBA", "BBA", "BCA", "MCA","more"],
    description: "Innovative learning approaches with strong academic foundation."
  },
  {
    name: "Chandigarh University Online",
    logo: "/images/chandigarh.jpg",
    ranking: "NIRF-36",
    location: "Chandigarh",
    fee: "₹1L - ₹2L",
    courses: ["MBA", "BBA", "BCA", "MCA","more"],
    description: "Northern India's prominent university with online programs."
  }
];

export default function ListofCollege() {
     <Head>
      <title>Top Online Colleges in India | Compare Fees, Courses & Rankings</title>
      
      <meta name="description" content="Explore top online colleges in India including Amity, Manipal, LPU, Chandigarh University, and more. Compare fees, courses, rankings, and choose the best online program for your career." />
      
      <meta name="keywords" content="Online colleges India, top online universities, Amity online, Manipal online, LPU online, Chandigarh University online, online courses India, distance learning, online degree programs, compare online colleges" />
      
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Unifost" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content="Top Online Colleges in India | Compare Fees, Courses & Rankings" />
      <meta property="og:description" content="Discover and compare top online colleges in India including Amity, Manipal, LPU, Chandigarh University and more. Find the best online program for your career." />
      <meta property="og:image" content="/images/college-banner.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://unifostedu.com/listofcollege" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Top Online Colleges in India | Compare Fees, Courses & Rankings" />
      <meta name="twitter:description" content="Explore and compare top online colleges in India including Amity, Manipal, LPU, Chandigarh University and more. Find your ideal online program today." />
      <meta name="twitter:image" content="/images/college-banner.webp" />
    </Head>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Explore <span className="text-[#00ffe0]">Colleges</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top universities offering online programs across India. Compare rankings, fees, and course offerings to find your perfect fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image width={100} height={100} src={college.logo} alt={`${college.name} logo`} className="w-16 h-16 object-contain rounded-lg mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{college.name}</h2>
                    <p className="text-sm text-gray-600">{college.location}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
                    {college.ranking}
                  </span>
                  <span className="text-gray-700 font-medium">{college.fee}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{college.description}</p>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Available Courses:</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/universities/${college.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full bg-[#00ffe0] text-[#001e3c] text-center py-2 px-4 rounded-lg font-semibold hover:bg-[#00e6cc] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can not find what you are looking for? Contact our counselors for personalized guidance.
          </p>
          <Link 
            href="/bookdemo"
            className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
          >
            Get Free Counseling
          </Link>
        </div>
      </div>
    </div>
  );
}
