import React from "react";
import Link from "next/link";



type Course = {
  name: string;
  duration: string;
  fees: string;
  eligibility: string;
  specializations: string;
  Link: string;
};

type OpenModalState =
  | {
      type: "apply" | "enquire";
      program?: string;
    }
  | null;

type CoursesTableProps = {
  ugCourses: Course[];
  pgCourses: Course[];
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};



const CoursesTable: React.FC<CoursesTableProps> = ({
  ugCourses,
  pgCourses,
  setOpenModal,
}) => {
  const renderTable = (title: string, courses: Course[]) => (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-blue-500 mb-4">{title}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-orange-500 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left text-orange-600">Course Name</th>
              <th className="border px-4 py-2 text-orange-600">Duration</th>
              <th className="border px-4 py-2 text-orange-600">Fees</th>
              <th className="border px-4 py-2 text-orange-600">Eligibility</th>
              <th className="border px-4 py-2 text-orange-600">Specializations</th>
              <th className="border px-4 py-2 text-orange-600">Action</th>
              <th className="border px-4 py-2 text-orange-600">View Details</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="border px-4 py-2 font-medium text-blue-600">
                  {course.name}
                </td>
                <td className="border px-4 py-2 text-center">
                  {course.duration}
                </td>
                <td className="border px-4 py-2 text-center">
                  {course.fees}
                </td>
                <td className="border px-4 py-2">
                  {course.eligibility}
                </td>
                <td className="border px-4 py-2">
                  {course.specializations}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-white border border-orange-500 text-orange-500 px-3 py-1 rounded-full text-xs cursor-pointer"
                    onClick={() =>
                      setOpenModal({
                        type: "enquire",
                        program: course.name,
                      })
                    }
                  >
                    Enquire
                  </button>
                </td>
                <td className="border px-4 py-2 text-center">
                  <Link href={course.Link} className="bg-white border border-blue-500 text-blue-500 px-3 py-1 rounded-full text-xs cursor-pointer">
                    Click
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {renderTable("UG Programs", ugCourses)}
      {renderTable("PG Programs", pgCourses)}
    </section>
  );
};

export default CoursesTable;
