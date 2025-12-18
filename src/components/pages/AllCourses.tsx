"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FaClock, FaUsers, FaGraduationCap, FaBriefcase, FaUserTie, FaBook, FaUniversity, FaLaptopCode, FaChartLine, FaPalette, FaBalanceScale } from "react-icons/fa";
import Link from "next/link";

export function AllCourses({ courses = [] }) {

    const getCourseHref = (title) => {
        const map = {
          "MBA Online": "/courses/mba-online",
          "MSC Online": "/courses/msc-online",
          "BBA Online": "/courses/bba-online",
          "MCA Online": "/courses/mca-online",
          "BCA Online": "/courses/bca-online",
          "M.Com Online": "/courses/mcom-online",
          "B.Com Online": "/courses/bcom-online",
          "MA Online": "/courses/ma-online",
          "BA Online": "/courses/ba-online",
          "MAJMC Online": "/courses/majmc-online",
          "BAJMC Online": "/courses/bajmc-online",
        };
        return map[title] || "/coursesearch";
      };

    const iconMap = {
      "mba": FaUserTie,
      "msc": FaLaptopCode,
      "bba": FaBriefcase,
      "mca": FaLaptopCode,
      "bca": FaLaptopCode,
      "m.com": FaChartLine,
      "b.com": FaChartLine,
      "ma": FaBook,
      "ba": FaBook,
      "majmc": FaPalette,
      "bajmc": FaPalette,
    };

    const getIcon = (course) => {
        if (course.icon && iconMap[course.icon]) return iconMap[course.icon];
        
        const title = course.title?.toLowerCase() || "";
        if (title.includes("mba") || title.includes("management")) return FaUserTie;
        if (title.includes("bba")) return FaBriefcase;
        if (title.includes("mca") || title.includes("bca") || title.includes("computer") || title.includes("tech")) return FaLaptopCode;
        if (title.includes("com") || title.includes("commerce")) return FaChartLine;
        if (title.includes("arts") || title.includes("ma ") || title.includes("ba ")) return FaBook;
        if (title.includes("jmc") || title.includes("journalism")) return FaPalette;
        
        return FaGraduationCap;
    };

    const CourseIcon = ({ course }) => {
        const Icon = getIcon(course);
        return <Icon className="text-white text-xl sm:text-2xl" />;
    };
    const MotionDiv=motion('div');

    
  return (
    <div>
         <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-10 sm:mb-14" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight text-[#001e3c] mb-2">
              Select the Best Programs
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore curated online programs from leading universities.
            </p>
          </MotionDiv>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mx-auto mb-6 sm:mb-8 grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ug">UG</TabsTrigger>
              <TabsTrigger value="pg">PG</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {courses.map((course, index) => (
                  <Link
                    key={index}
                    href={getCourseHref(course.title)}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative rounded-xl cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-600 to-cyan-600 transform translate-y-full group-hover:translate-y-0 opacity-90 transition-transform duration-700 ease-out"></div>
                      <div className="relative z-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:translate-y-[-4px] group-hover:scale-[1.01] group-hover:bg-transparent group-hover:border-transparent">
                        <div
                          className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                        >
                          <CourseIcon course={course} />
                        </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">
                          {course.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">
                          {course.desc}
                        </p>
                        <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600 group-hover:text-white/90 group-hover:border-white/20">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#00ffe0]" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUsers className="text-[#00ffe0]" />
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ug">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {courses
                  .filter((c) => c.level === "UG")
                  .map((course, index) => (
                  <Link
                    key={index}
                    href={getCourseHref(course.title)}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative rounded-xl cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-600 to-cyan-600 transform translate-y-full group-hover:translate-y-0 opacity-90 transition-transform duration-700 ease-out"></div>
                      <div className="relative z-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:translate-y-[-4px] group-hover:scale-[1.01] group-hover:bg-transparent group-hover:border-transparent">
                          <div
                            className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            <CourseIcon course={course} />
                          </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                          <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">
                            {course.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">
                            {course.desc}
                          </p>
                        <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600 group-hover:text-white/90 group-hover:border-white/20">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#00ffe0]" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUsers className="text-[#00ffe0]" />
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pg">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {courses
                  .filter((c) => c.level === "PG")
                  .map((course, index) => (
                  <Link
                    key={index}
                    href={getCourseHref(course.title)}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative rounded-xl cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-600 to-cyan-600 transform translate-y-full group-hover:translate-y-0 opacity-90 transition-transform duration-700 ease-out"></div>
                      <div className="relative z-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:translate-y-[-4px] group-hover:scale-[1.01] group-hover:bg-transparent group-hover:border-transparent">
                          <div
                            className={`bg-gradient-to-br ${course.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            <CourseIcon course={course} />
                          </div>
                        <Badge className="mb-2 sm:mb-3 bg-[#00ffe0]/10 text-[#001e3c] ring-1 ring-[#00ffe0]/40 text-[11px] sm:text-xs font-medium group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/40">
                          {course.tag}
                        </Badge>
                          <h3 className="text-base sm:text-lg font-semibold text-[#001e3c] mb-1.5 group-hover:text-white">
                            {course.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-gray-600 mb-3 sm:mb-3.5 leading-relaxed group-hover:text-white/90">
                            {course.desc}
                          </p>
                        <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-600 group-hover:text-white/90 group-hover:border-white/20">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#00ffe0]" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUsers className="text-[#00ffe0]" />
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}