import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AboutMoreInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 md:px-8">

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2 text-blue-600 font-semibold text-lg mb-4"
      >
        <span>
          {open ? "Hide more information" : "About more information"}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Animated Content */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          open
            ? "max-h-[4000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-2">

         <p> A key strength of Narsee Monjee Institute of Management Studies Online lies in the credibility and recognition of its programs. All courses offered under the online mode fall under NMIMS online programs approved by UGC, providing complete assurance of degree validity and nationwide acceptance. Choosing NMIMS online programs approved by UGC means students can confidently use their qualifications for employment, higher studies, and professional growth. This recognition makes NMIMS (Narsee Monjee Institute of Management Studies) a trusted choice for online education in India. </p> <p> NMIMS Distance & Online Education is designed with a learner-centric approach, ensuring that academic content is relevant, practical, and aligned with current industry requirements. The curriculum offered through Narsee Monjee Institute of Management Studies Online is regularly updated to reflect changing market trends, helping learners acquire in-demand skills. By combining academic theory with practical applications, NMIMS ensures that students gain knowledge that can be directly applied in their professional lives. </p> <p> Another significant advantage of choosing NMIMS is NMIMS online education with placement assistance. The university understands that learners pursue education not only for knowledge but also for career advancement. NMIMS online education with placement assistance focuses on enhancing employability by offering career guidance, resume-building support, interview preparation, and exposure to industry practices. Through NMIMS online education with placement assistance, students gain confidence and readiness to compete in today’s dynamic job market. </p> <p> The flexibility offered by NMIMS Distance & Online Education makes it suitable for a wide range of learners. Whether you are a working professional aiming for career growth, a student seeking a recognized online degree, or an entrepreneur looking to strengthen your business knowledge, Narsee Monjee Institute of Management Studies Online provides a learning environment that adapts to your goals. With the support of the NMIMS Online Learning Platform, learners can study at their own pace while maintaining academic discipline. Quality education at NMIMS is supported by experienced faculty members who bring both academic expertise and industry experience. Through the NMIMS Online Learning Platform, students interact with faculty members, participate in discussions, and receive timely feedback. This interaction ensures that learning through NMIMS Distance & Online Education remains engaging, guided, and outcome-driven. </p> <p> Trust, credibility, and learner satisfaction are at the core of NMIMS (Narsee Monjee Institute of Management Studies). The university’s commitment to delivering NMIMS online programs approved by UGC reflects its focus on maintaining academic integrity and regulatory compliance. Students enrolling in Narsee Monjee Institute of Management Studies Online benefit from a structured academic framework that balances flexibility with quality assurance. With growing demand for online education, NMIMS continues to invest in technology, curriculum development, and learner support systems. The NMIMS Online Learning Platform is continuously enhanced to improve user experience and learning effectiveness. This ensures that students enrolled through NMIMS Distance & Online Education receive a seamless and reliable online learning journey. For learners looking to advance their careers with a trusted institution, Apply for NMIMS Online Course is a step toward recognized and career-focused education. When you Apply for NMIMS Online Course, you gain access to UGC-recognized programs, expert faculty, and comprehensive learner support. Choosing to Apply for NMIMS Online Course means investing in an education system that values quality, flexibility, and professional growth. In today’s competitive world, choosing the right university is crucial. NMIMS (Narsee Monjee Institute of Management Studies) stands out as a preferred destination for online education due to its academic reputation, advanced NMIMS Online Learning Platform, and commitment to NMIMS online education with placement assistance. The combination of NMIMS Distance & Online Education and industry-relevant learning ensures that students are prepared for both present and future career opportunities. By enrolling in Narsee Monjee Institute of Management Studies Online, learners become part of an institution that prioritizes excellence, innovation, and student success. With NMIMS online programs approved by UGC, flexible learning through NMIMS Distance & Online Education, and career support via NMIMS online education with placement assistance, NMIMS continues to redefine the standards of online higher education in India. If you are ready to take the next step toward academic and professional growth, Apply for NMIMS Online Course and begin your journey with NMIMS (Narsee Monjee Institute of Management Studies) today. </p>

        </div>
      </div>
    </div>
  );
};

export default AboutMoreInfo;
