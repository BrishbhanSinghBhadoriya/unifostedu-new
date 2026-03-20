import React from 'react'
import { useState } from 'react'
import { OpenModalState } from '../../../../types/Modal'

type ExploreCoursesProps = {
  ugCourses: any[];
  pgCourses: any[];
  ug_pgCourses: any[];
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
  openModal: OpenModalState;
};

const FeeStructure : React.FC<ExploreCoursesProps> = ({
  ugCourses,
  pgCourses,
  ug_pgCourses,
  setOpenModal,
  openModal,
}) => {
  const [activeTab, setActiveTab] = useState('all');

  // Function to render specializations as bullet points
  const renderSpecializations = (specialization: string | string[]) => {
    if (!specialization) return 'N/A';
    
    const specs = Array.isArray(specialization) 
      ? specialization 
      : typeof specialization === 'string' 
        ? specialization.split(',').map(s => s.trim())
        : [];
    
    return (
      <ul className="list-disc list-inside space-y-1">
        {specs.map((spec, idx) => (
          <li key={idx} className="text-sm">{spec}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-9xl mx-auto text-gray-800 leading-relaxed">
          <section className="bg-white py-16 px-6 md:px-20">
            <div className="mx-auto text-gray-800">
              <h2 className="text-3xl font-bold text-center mb-10">
                🎓 Amity University Online Courses &amp; Fees 2026 Structure 
              </h2>
              <p>
                Amity University Online offers NAAC A+ accredited UG and PG programs that match industry demand while
                enabling flexible learning. Review the latest Amity University Online fees 2026 structure, compare
                specialisations, and choose an online MBA, BBA, BCA, MCA, or M.Com that fits your career goals.
                Executive certificates and short-term programmes are also available for professionals who need rapid
                upskilling.
              </p>

              {/* Undergraduate Courses */}
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-900 pb-2">
                Undergraduate (UG) Courses
              </h3>
              <div className="overflow-x-auto mb-12">
                <table className="min-w-full border border-black">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fees</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ugCourses.map((course, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition duration-200 ease-in-out">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">{course.course}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          {renderSpecializations(course.specialization)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Postgraduate Courses */}
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-900 pb-2">
                Postgraduate (PG) Courses
              </h3>
              <div className="overflow-x-auto mb-12">
                <table className="min-w-full border border-black">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fees</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pgCourses.map((course, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition duration-200 ease-in-out">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">{course.course}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          {renderSpecializations(course.specialization)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Integrated Courses */}
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-900 pb-2">
                Integrated (UG + PG) Courses
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-black">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fees</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Specializations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ug_pgCourses.map((course, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition duration-200 ease-in-out">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">{course.course}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.duration}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.eligibility}</td>
                        <td className="border border-gray-300 px-4 py-3">{course.fees}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          {renderSpecializations(course.specialization)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;