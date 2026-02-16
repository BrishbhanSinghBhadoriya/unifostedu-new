import React from 'react';
import { FaBuilding, FaCertificate, FaStar, FaUser } from 'react-icons/fa6';

type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const AdvantageWhyChoose: React.FC<IntroducationProps> = ({ setOpenModal }) => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-red-50 via-white to-blue-50">
      
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 300px at 10% -10%, rgba(242,103,34,.09), transparent), radial-gradient(1200px 300px at 90% 110%, rgba(59,130,246,.08), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Unlock The SMU Advantage
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
            Comprehensive benefits designed to support your learning journey and career growth.
          </p>
        </div>

        {/* BENEFIT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🎓", title: "UGC Approved Degrees", desc: "Recognized degrees with nationwide acceptance." },
            { icon: "📚", title: "Industry Curriculum", desc: "Programs aligned with modern industry trends." },
            { icon: "💼", title: "Placement Support", desc: "Career guidance and placement assistance." },
            { icon: "💰", title: "Affordable Fees", desc: "Quality education at budget-friendly cost." },
          ].map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE TEXT BLOCK */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-3xl font-bold text-center mb-6">
            Why Choose SMU Online
          </h3>

          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Sikkim Manipal University Online offers UGC-approved degrees, flexible learning,
            experienced faculty, industry-relevant curriculum, and strong placement support.
            Its advanced LMS, AI-proctored exams, and global alumni network make it one of the
            most trusted online universities in India for career-focused learners.
          </p>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setOpenModal({ type: "apply" })}
              className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* ICON FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaStar className="text-yellow-500 text-3xl" />, title: "Flexible Schedule", desc: "Study anytime, anywhere." },
            { icon: <FaCertificate className="text-blue-500 text-3xl" />, title: "UGC Degrees", desc: "Valid and recognized qualifications." },
            { icon: <FaUser className="text-green-500 text-3xl" />, title: "Expert Faculty", desc: "Learn from experienced mentors." },
            { icon: <FaBuilding className="text-purple-500 text-3xl" />, title: "Strong Alumni", desc: "Join a powerful professional network." },
          ].map((f, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default AdvantageWhyChoose
