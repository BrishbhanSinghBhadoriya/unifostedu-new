import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { optimizeCloudinary } from '@/utils/cloudinary';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const LegacyAdmissionCertificate: React.FC<IntroducationProps> = ({ setOpenModal }) => {

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12 text-gray-800">

        {/* Legacy */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            A Trusted Legacy of Academic Excellence
          </h2>
          <p className="leading-relaxed">
            Online programs combine academic strength with modern digital learning
            to ensure students receive practical, industry-relevant knowledge.
            Learners benefit from expert-designed curriculum, digital libraries,
            faculty interaction, and continuous academic support — allowing them
            to study from anywhere without pausing their career.
          </p>
        </div>

        {/* Future Ready */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Future-Ready Learning for Modern Careers
          </h2>
          <p className="leading-relaxed">
            Programs are structured to develop analytical thinking, business
            understanding, and real-world problem-solving skills through
            case studies, assignments, and interactive assessments. Students
            graduate with strong foundations in finance, management, and
            strategic decision-making.
          </p>
        </div>

        {/* Recognition */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Globally Recognized and Employer-Accepted Degrees
          </h2>
          <p className="leading-relaxed">
            Qualifications follow approved academic standards equivalent to
            campus-based education. This ensures graduates can pursue jobs,
            higher studies, and professional certifications confidently both
            in India and abroad.
          </p>
        </div>

        {/* Technology */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Interactive Technology-Driven Learning Experience
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Live virtual lectures with faculty interaction</li>
            <li>Recorded sessions for flexible revision</li>
            <li>Discussion forums and doubt-solving sessions</li>
            <li>AI-based progress tracking</li>
            <li>Access to e-books and research material</li>
          </ul>
        </div>

        {/* Affordability */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Flexible and Affordable Learning Options
          </h2>
          <p className="leading-relaxed">
            Programs are designed for both fresh learners and working
            professionals. Flexible schedules, reasonable fees, and installment
            options make it easier to continue education while managing
            personal and professional commitments.
          </p>
        </div>

        {/* Career */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Career Support Beyond Academics
          </h2>
          <p className="leading-relaxed">
            Students receive career guidance, resume-building assistance,
            interview preparation, and access to hiring opportunities. The
            focus is not just on earning a degree but building a successful
            professional future.
          </p>
        </div>

        {/* Admission */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Simple 4-Step Admission Process
          </h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Fill the online application form</li>
            <li>Upload required documents</li>
            <li>Receive admission confirmation</li>
            <li>Start your classes and learning journey</li>
          </ol>
        </div>

      </div>
    </section>
  )
}

export default LegacyAdmissionCertificate
