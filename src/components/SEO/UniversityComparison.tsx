import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const relatedUniversities = [
  {
    name: "Amity University Online",
    link: "/amity",
    rating: "4.8",
    tags: ["UGC Approved", "NAAC A+"]
  },
  {
    name: "Manipal University Jaipur",
    link: "/manipal",
    rating: "4.7",
    tags: ["NAAC A+", "UGC Entitled"]
  },
  {
    name: "LPU Online",
    link: "/lpu-online",
    rating: "4.8",
    tags: ["NAAC A++", "UGC Approved"]
  },
  {
    name: "JAIN University Online",
    link: "/jain",
    rating: "4.7",
    tags: ["NAAC A+", "UGC Approved"]
  },
  {
    name: "NMIMS Online",
    link: "/nmims",
    rating: "4.7",
    tags: ["NAAC A++", "UGC Approved"]
  },
  {
    name: "Amrita University Online",
    link: "/amrita",
    rating: "4.9",
    tags: ["NAAC A++", "UGC Approved"]
  }
];

const UniversityComparison = ({ currentUni }: { currentUni?: string }) => {
  const filteredUnis = relatedUniversities.filter(uni => uni.name !== currentUni);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare with Other Top Online Universities
          </h2>
          <p className="text-gray-600 text-lg">
            Make an informed decision by comparing fees, rankings, and courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnis.map((uni, idx) => (
            <Link 
              key={idx} 
              href={uni.link}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-500 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  {uni.name}
                </h3>
                <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star size={14} className="fill-current mr-1" />
                  <span className="text-sm font-bold">{uni.rating}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {uni.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-blue-600 font-semibold text-sm">
                <span>View Admission Details</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/university-list"
            className="inline-flex items-center text-blue-600 font-bold hover:underline"
          >
            <span>View All 20+ Partner Universities</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UniversityComparison;
