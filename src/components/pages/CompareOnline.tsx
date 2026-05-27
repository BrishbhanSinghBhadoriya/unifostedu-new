import React from 'react'
import { FaArrowRight, FaScaleBalanced, FaCompassDrafting, FaStar, FaCircleCheck } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { colleges as staticColleges, slugify, getUniversityHref } from "./landing/data.js";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image.js';
import { UniversityList } from '../../data/UniversityList';
import { College } from 'types/LandingPageTypes.js';

interface CompareOnlineProps {
  colleges: College[];
  selectedUniversities: string[];
  toggleUniversity: (slug: string) => void;
}

const getUniversityLink = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("amity")) return "/Amity-University-Online";
  if (n.includes("lovely") || n.includes("lpu")) return "/lpu-online";
  if (n.includes("manipal university jaipur") || n.includes("muj") || n.includes("online manipal")) return "/manipal";
  if (n.includes("sikkim") || n.includes("smu")) return "/smu";
  if (n.includes("uttaranchal") || n.includes("uu")) return "/uu";
  if (n.includes("chandigarh") || n.includes("cu")) return "/cuOnline";
  if (n.includes("jain")) return "/jain";
  if (n.includes("dy patil") || n.includes("dypatil")) return "/dypatil";
  if (n.includes("jindal") || n.includes("op jindal")) return "/opjindal";
  if (n.includes("kurukshetra") || n.includes("ku")) return "/ku-online";
  if (n.includes("shoolini")) return "/shoolini";
  if (n.includes("vivekananda") || n.includes("vgu")) return "/vgu";
  if (n.includes("upes")) return "/upes";
  if (n.includes("sharda")) return "/sharda";
  if (n.includes("nmims") || n.includes("narsee")) return "/nmims";
  
  return `/university/${slugify(name)}`;
};

import { useIsMobile } from "@/utils/hooks";

const CompareOnline = ({ colleges: collegesFromProps, selectedUniversities, toggleUniversity }: CompareOnlineProps) => {
  const isMobile = useIsMobile();
  // Use colleges from props if available, otherwise fallback to static data
  const baseColleges = (staticColleges && staticColleges.length > 0)
    ? staticColleges
    : (collegesFromProps && collegesFromProps.length > 0)
      ? collegesFromProps
      : UniversityList;

  const colleges = isMobile ? baseColleges.slice(0, 8) : baseColleges;

  const router = useRouter();
  const canCompare = selectedUniversities.length >= 2 && selectedUniversities.length <= 3;

  const startCompare = () => {
    if (!canCompare) return;
    router.push(`/compare?u=${selectedUniversities.join(",")}`);
  };

  return (
    <div>
      <section id="compare-universities" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-3 sm:mb-4">
              Compare Online Universities
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Select up to 3 universities to compare fees, accreditation, placements and more
            </p>
          </div>

          {/* Compare Controls - Enhanced */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-2xl border border-blue-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md text-white">
                <FaCompassDrafting className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a365d]">
                  Compare Universities
                </h3>
                <p className="text-sm text-gray-700">
                  Selected:{" "}
                  <span className="font-bold text-blue-600">
                    {selectedUniversities.length}
                  </span>
                  /3
                  {selectedUniversities.length > 0 && (
                    <span className="ml-2 text-green-800 font-medium">
                      ({selectedUniversities.length} selected)
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button
              disabled={!canCompare}
              onClick={startCompare}
              className={`group px-6 sm:px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all text-sm sm:text-base ${canCompare
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transform hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              <FaArrowRight
                className={
                  canCompare
                    ? "group-hover:translate-x-1 transition-transform"
                    : ""
                }
              />
              Compare Now
            </button>
          </div>

          {/* Enhanced University Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, idx) => {
              const slug = slugify(college.name);
              const isSelected = selectedUniversities.includes(slug);

              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${!isMobile ? 'hover:-translate-y-1' : ''} ${isSelected
                      ? "ring-2 ring-blue-500 shadow-xl"
                      : "border border-blue-100 shadow-md hover:shadow-xl"
                    } bg-gradient-to-b from-white to-blue-50`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        <FaCircleCheck className="text-sm" />
                      </div>
                    </div>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 w-20 h-8"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    {/* University Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-white border border-blue-200 flex items-center justify-center p-2 ${isSelected ? "ring-2 ring-blue-500/30" : ""
                          }`}
                      >
                        <Image
                          src={college.logo}
                          alt={`${college.name} logo`}
                          width={80}
                          height={80}
                          loading="lazy"
                          className="max-h-10 sm:max-h-12 w-auto object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#1a365d] mb-1 line-clamp-2 leading-tight">
                          {college.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 text-xs font-medium">
                            {college.ranking}
                          </Badge>

                        </div>
                      </div>
                    </div>

                    {/* Fee Information */}
                    <div className="bg-blue-100/50 rounded-lg p-3 mb-4 border border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Approx. Fees:
                        </span>
                        <span className="text-sm font-bold text-blue-700">
                          {college.fee}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={getUniversityLink(college.name)}
                        className="flex-1 text-center text-sm font-semibold text-blue-600 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center"
                      >
                        View Details
                      </a>

                      <button
                        onClick={() => toggleUniversity(college.name)}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center ${isSelected
                            ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          }`}
                      >
                        {isSelected ? (
                          <>
                            <FaCircleCheck className="mr-1" />
                            Selected
                          </>
                        ) : (
                          <>
                            <FaScaleBalanced className="mr-1" />
                            Compare
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-opacity rounded-2xl pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Selection Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Tip: Select 2-3 universities to compare features side by side
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompareOnline