"use client";

import { CheckCircle, ClipboardList, MonitorCheck, Award, Clock } from "lucide-react";

const ExaminationPatternNMIMS = () => {
  const steps = [
    {
      title: "Continuous Internal Assessment",
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
      points: [
        "Online quizzes and assignments",
        "Case studies and practical tasks",
        "Participation through NMIMS Online Learning Platform",
        "Regular evaluation to track progress",
      ],
    },
    {
      title: "End-Term Online Examination",
      icon: <MonitorCheck className="w-6 h-6 text-orange-600" />,
      points: [
        "Conducted via secure NMIMS Online Learning Platform",
        "Objective and descriptive questions (as per course)",
        "Time-bound and monitored for fairness",
        "UGC-approved NMIMS online program structure",
      ],
    },
    {
      title: "Evaluation & Grading System",
      icon: <Award className="w-6 h-6 text-green-600" />,
      points: [
        "Evaluation by qualified NMIMS faculty",
        "Transparent grading criteria",
        "Balanced internal and final exam weightage",
        "Results published online",
      ],
    },
    {
      title: "Flexibility & Learner Convenience",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      points: [
        "Fully online exam format",
        "Ideal for working professionals",
        "No travel or location constraints",
        "Advance exam schedule notification",
      ],
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 text-center mb-6">
          Examination Pattern at NMIMS
        </h2>

        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
          The examination pattern followed by <strong>NMIMS (Narsee Monjee Institute of Management Studies)</strong> is
          transparent, structured, and student-friendly. Through NMIMS Online Learning Platform, assessments ensure
          academic integrity while supporting flexible learning.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Step {index + 1}: {step.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why it works */}
        <div className="mt-14 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Why This Examination Pattern Works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            <div className="flex gap-2 items-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Reduces exam stress
            </div>
            <div className="flex gap-2 items-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Flexible online exams
            </div>
            <div className="flex gap-2 items-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              UGC-recognized structure
            </div>
            <div className="flex gap-2 items-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Career-oriented evaluation
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExaminationPatternNMIMS;
