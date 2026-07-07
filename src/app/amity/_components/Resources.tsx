import React from 'react'
import { FaBook, FaBookOpen, FaBriefcase, FaClipboardCheck, FaRobot, FaBuilding, FaUser, FaUserTie } from 'react-icons/fa6';

const items = [
  { icon: <FaBookOpen className="text-2xl" aria-hidden="true" />, title: "Diverse learning mediums", text: "E-books, printed & audio books, videos to suit all styles." },
  { icon: <FaUserTie className="text-2xl" aria-hidden="true" />, title: "Dedicated Academic Advisor", text: "Experts to guide every step of your career." },
  { icon: <FaRobot className="text-2xl" aria-hidden="true" />, title: "AI-Professor AMI", text: "Powered by ChatGPT-4 for better learning." },
  { icon: <FaBriefcase className="text-2xl" aria-hidden="true" />, title: "Career Services", text: "Workshops, internships, resume support." },
  { icon: <FaBook className="text-2xl" aria-hidden="true" />, title: "Doorstep delivery", text: "Only online university delivering physical books." },
  { icon: <FaBuilding className="text-2xl" aria-hidden="true" />, title: "Metaverse Campus", text: "Explore campus in metaverse." },
  { icon: <FaUser className="text-2xl" aria-hidden="true" />, title: "Offline Experiences", text: "On-campus orientation and peer bonding." },
  { icon: <FaClipboardCheck className="text-2xl" aria-hidden="true" />, title: "Placement Opportunities", text: "Resume prep and interview assistance." },
];

const Resources: React.FC = () => {
  return (
    <section className="py-16 bg-white px-6" aria-labelledby="resources-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform duration-200 border border-gray-100"
            >
              <div className="text-blue-600 bg-blue-50 p-4 rounded-full mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
