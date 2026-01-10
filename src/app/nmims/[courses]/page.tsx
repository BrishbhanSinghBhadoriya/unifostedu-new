import course from "@/data/nmimscourses.json";
import { CourseDataFromJSON, Program } from "types/NmimsSlug";
import SlugClient from "./_components/SlugClient";

type ProgramKey = keyof CourseDataFromJSON["programs"];

interface PageProps {
  params: Promise<{
    courses: string;
  }>;
}

const CoursesPage = async ({ params }: PageProps) => {
  const { courses } = await params;

  // ✅ safety check
  if (!courses) {
    return <div>Invalid route</div>;
  }

  const data = course as CourseDataFromJSON;
  const programs = data.programs;

  
  if (!programs || !Object.prototype.hasOwnProperty.call(programs, courses)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-red-100">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Course Not Found
          </h1>
          <p className="text-gray-600">
            The requested course "{courses}" could not be found.
          </p>
        </div>
      </div>
    );
  }

  const key = courses as ProgramKey;
  const coursesData: Program = programs[key];

  return <SlugClient courseData={coursesData} />;
};

export default CoursesPage;
