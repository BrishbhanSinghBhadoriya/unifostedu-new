import React from 'react';
import Link from 'next/link';

const colleges = [
  {
    name: "Amity University Online",
    logo: "/amitylogo.jpg",
    ranking: "Top 10",
    location: "Noida, UP",
    fee: "₹1.2L - ₹2.5L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "One of India's leading private universities with comprehensive online programs."
  },
  {
    name: "Manipal University Online",
    logo: "/manipallogo.jpg",
    ranking: "Top 5",
    location: "Manipal, Karnataka",
    fee: "₹1.5L - ₹3L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Pioneer in online education with industry-aligned curriculum."
  },
  {
    name: "Lovely Professional University Online",
    logo: "/lpulogo.png",
    ranking: "Top 20",
    location: "Phagwara, Punjab",
    fee: "₹90K - ₹2L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Known for practical learning and strong industry connections."
  },
  {
    name: "UPES Online",
    logo: "/upeslogo.png",
    ranking: "Top 15",
    location: "Dehradun, Uttarakhand",
    fee: "₹1.8L - ₹3.2L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Specialized in energy and petroleum studies with online programs."
  },
  {
    name: "NMIMS Online",
    logo: "/nmimslogo.jpg",
    ranking: "Top 8",
    location: "Mumbai, Maharashtra",
    fee: "₹2L - ₹3.5L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Premier management institute with comprehensive online offerings."
  },
  {
    name: "Sharda University Online",
    logo: "/shardalogo.png",
    ranking: "Top 30",
    location: "Greater Noida, UP",
    fee: "₹80K - ₹1.5L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Affordable quality education with modern online infrastructure."
  },
  {
    name: "DY Patil Online",
    logo: "/dypatillogo.png",
    ranking: "Top 25",
    location: "Navi Mumbai, Maharashtra",
    fee: "₹1.1L - ₹2.2L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Established university with diverse online program portfolio."
  },
  {
    name: "Jain University Online",
    logo: "/jainlogo.png",
    ranking: "Top 12",
    location: "Bangalore, Karnataka",
    fee: "₹1.3L - ₹2.6L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Innovative learning approaches with strong academic foundation."
  },
  {
    name: "VGU Online",
    logo: "/vgulogo.png",
    ranking: "Top 35",
    location: "Jaipur, Rajasthan",
    fee: "₹70K - ₹1.3L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Emerging university with modern online education facilities."
  },
  {
    name: "Chandigarh University Online",
    logo: "/chandigarh.png",
    ranking: "Top 18",
    location: "Chandigarh",
    fee: "₹1L - ₹2L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Northern India's prominent university with online programs."
  },
  {
    name: "OP Jindal University",
    logo: "/opjindal.png",
    ranking: "Top 22",
    location: "Raigarh, Chhattisgarh",
    fee: "₹1.2L - ₹2.3L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Industry-focused education with practical learning approach."
  },
  {
    name: "Shoolini University Online",
    logo: "/shoolini.jpg",
    ranking: "Top 28",
    location: "Solan, Himachal Pradesh",
    fee: "₹75K - ₹1.4L",
    courses: ["MBA", "BBA", "BCA", "MCA"],
    description: "Mountain university offering quality online education."
  }
];

export default function ListofCollege() {
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
                  <img 
                    src={college.logo} 
                    alt={`${college.name} logo`} 
                    className="w-16 h-16 object-contain rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{college.name}</h3>
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
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Courses:</h4>
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
