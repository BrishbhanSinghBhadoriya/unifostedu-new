import React from "react";
import {
  Briefcase,
  GraduationCap,
  User,
  Building2,
  CheckCircle,
} from "lucide-react";

const WhoCanApply: React.FC = () => {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Who Can Apply?
          </h2>
          <p className="mt-3 text-lg text-black-600 max-w-3xl mx-auto">
            NMIMS Distance & Online Education is designed for learners from
            diverse backgrounds who seek flexibility, recognition, and
            career-focused learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="rounded-xl border-2 border-orange-600 g-gray-50 p-6 hover:shadow-md transition">
            <User className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">
              Open to All Learners
            </h3>
            <p className="text-black-700 leading-relaxed">
              Anyone who wants to continue their education with flexibility and
              a trusted university can apply for online programs at NMIMS
              (Narsee Monjee Institute of Management Studies). The programs are
              suitable for learners from different age groups, backgrounds, and
              career stages.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border-2 border-orange-600 g-gray-50 p-6 hover:shadow-md transition">
            <Briefcase className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">
              Working Professionals
            </h3>
            <p className="text-black-700 leading-relaxed">
              Professionals who want to upgrade their skills or earn a
              recognized degree while continuing their job can apply through
              NMIMS Distance & Online Education. The flexible learning structure
              and NMIMS Online Learning Platform allow them to study at their own
              pace.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border-2 border-orange-600 g-gray-50 p-6 hover:shadow-md transition">
            <GraduationCap className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">
              Students & Fresh Graduates
            </h3>
            <p className="text-black-700 leading-relaxed">
              Students who have completed their previous education and fresh
              graduates looking for flexible and recognized degree options can
              apply. All courses are NMIMS online programs approved by UGC,
              ensuring nationwide acceptance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border-2 border-orange-600 g-gray-50 p-6 hover:shadow-md transition">
            <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">
              Career-Focused Learners
            </h3>
            <p className="text-black-700 leading-relaxed">
              Learners who want industry-relevant knowledge and career growth
              can benefit from NMIMS online education with placement
              assistance. Along with quality education, students receive career
              support to prepare for the professional world.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl border-2 border-orange-600 g-gray-50 p-6 hover:shadow-md transition">
            <Building2 className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">
              Entrepreneurs & Business Owners
            </h3>
            <p className="text-black-700 leading-relaxed">
              Entrepreneurs and business owners who want to strengthen their
              management, leadership, and decision-making skills can also
              apply. The NMIMS Online Learning Platform supports flexible
              learning alongside business responsibilities.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl border-2 border-orange-600 g-blue-50 p-6 hover:shadow-md transition">
            <GraduationCap className="w-8 h-8 text-orange-700 mb-4" />
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">
              UGC-Recognized Degree Seekers
            </h3>
            <p className="text-black-700 leading-relaxed">
              Anyone looking for a UGC-recognized online degree from a reputed
              institution can confidently Apply for NMIMS Online Course. NMIMS
              ensures flexibility, academic quality, and long-term career
              value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
