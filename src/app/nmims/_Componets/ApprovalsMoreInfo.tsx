import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ApprovalsMoreInfo: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-4"
        >
          <span>Know More About Approvals</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Animated Content */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            open
              ? "max-h-[5000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed pt-2">

            <p>
              The framework of NMIMS Distance & Online Education is designed to maintain academic rigor while offering flexibility. Every course delivered through Narsee Monjee Institute of Management Studies Online follows a standardized curriculum, evaluation system, and quality assurance process.
            </p>

            <p>
              With growing demand for online education, NMIMS ensures its digital offerings meet all regulatory and academic benchmarks. The university continuously reviews systems to comply with NMIMS online programs approved by UGC.
            </p>

            <p>
              Through NMIMS online education with placement assistance, learners gain access to career-oriented support while pursuing officially approved and widely accepted degrees.
            </p>

            <p>
              The NMIMS Online Learning Platform ensures secure assessments, transparent evaluation, and consistent academic delivery across all programs.
            </p>

            <p>
              When students Apply for NMIMS Online Course, they enroll in a university that upholds regulatory compliance, academic integrity, and national recognition—ensuring qualifications are respected and future-ready.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ApprovalsMoreInfo;
