import React from "react";
import Image from "next/image";
import {
  Award,
  Clock,
  Users,
  Laptop2,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const CertificatePrograms: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Certificate Programs
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Certificate Programs at NMIMS (Narsee Monjee Institute of Management
            Studies) help learners gain practical, job-relevant skills in a short
            duration through flexible and credible online learning.
          </p>
        </div>

        {/* Image + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">

          {/* Image Section */}
          <div className=" ">
            <Image
              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1767340564/nmims_certificate_eqeu5o.png"
              alt="NMIMS Certificate Programs"
              height={1200}
              width={600}
              loading="lazy"
              className="w-full h-[720px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-6 text-center">
              <Clock className="mx-auto h-8 w-8 text-blue-600 mb-3" />
              <p className="font-semibold text-gray-800">
                Short-Term Programs
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 border border-orange-100 p-6 text-center">
              <Users className="mx-auto h-8 w-8 text-orange-500 mb-3" />
              <p className="font-semibold text-gray-800">
                Students & Professionals
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 border border-blue-100 p-6 text-center">
              <Award className="mx-auto h-8 w-8 text-blue-600 mb-3" />
              <p className="font-semibold text-gray-800">
                Reputed University
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 border border-orange-100 p-6 text-center">
              <Laptop2 className="mx-auto h-8 w-8 text-orange-500 mb-3" />
              <p className="font-semibold text-gray-800">
                Online Learning Platform
              </p>
            </div>
          </div>
        </div>

        {/* Learning Experience */}
        <div className="mb-14 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Learning Experience
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {[
              "Live and recorded online sessions",
              "Digital study materials and resources",
              "Interactive assignments and assessments",
              "Faculty guidance and academic support",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Why Choose NMIMS Certificate Programs?
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Certificate programs from Narsee Monjee Institute of Management
            Studies Online combine academic credibility with practical learning.
            Learners can enhance their skills without committing to a long-term
            degree while studying flexibly through NMIMS Distance & Online
            Education.
          </p>
        </div>

        {/* Who Is It For */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
            <Briefcase className="text-orange-500" />
            Who Should Apply?
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>• Fresh graduates looking to strengthen their profiles</li>
            <li>• Working professionals planning to upskill or reskill</li>
            <li>• Entrepreneurs seeking practical business knowledge</li>
            <li>• Individuals exploring career transitions</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CertificatePrograms;
