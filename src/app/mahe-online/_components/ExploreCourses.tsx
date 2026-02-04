import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import Link from 'next/link';
import { OpenModalState } from '../../../../types/Modal';

type ExploreCoursesProps = {
  ugCourses: any[];
  pgCourses: any[];
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
  openModal: OpenModalState;
};

const ExploreCourses: React.FC<ExploreCoursesProps> = ({
  ugCourses,
  pgCourses,
  setOpenModal,
  openModal,
}) => {
  const [activeTab, setActiveTab] = useState('all');

  const quickCourses = [
    {
      name: 'MAHE Online MBA',
      desc: 'Master management, leadership & business strategy. Ideal for working professionals & future leaders',
      slug: 'online-mca-mahe',
    },
    {
      name: 'MAHE Online MCA',
      desc: 'Advanced computing, AI, ML & cloud skills. Designed for tech professionals aiming for growth',
      slug: 'online-mca-mahe',
    },
    {
      name: 'MAHE Online BBA (Hons.)',
      desc: 'Strong foundation in business, finance & marketing. Perfect for students interested in corporate careers',
      slug: 'online-bba-honors-mahe',
    },
     {
      name: 'MAHE Online BBA',
      desc: 'Strong foundation in business, finance & marketing. Perfect for students interested in corporate careers',
      slug: 'online-bba-mahe',
    },
    {
      name: 'MAHE Online MSc.(Data Science)',
      desc: 'Deep knowledge of accounting, finance & taxation. Great for careers in banking, finance & auditing',
      slug: 'online-msc-data-science-mahe',
    },
    {
      name: 'MAHE Online MSc.(Business Analytics)',
      desc: 'Deep knowledge of accounting, finance & taxation. Great for careers in banking, finance & auditing',
      slug: 'online-msc-business-analytics-mahe',
    },
    {
      name: 'MAHE Online BCom',
      desc: 'Core fundamentals of commerce & business analytics. Best for students starting their commerce journey',
      slug: 'bcom',
    },
  ];

  const coursesToShow =
    activeTab === 'all'
      ? [...ugCourses, ...pgCourses]
      : activeTab === 'ug'
      ? ugCourses
      : pgCourses;

  return (
    <section id="ExploreCourses" className="mt-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-queens">
            Explore{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Online Courses
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from industry-relevant programs designed for working professionals and fresh graduates
          </p>
        </div>

        {/* 🔥 Quick Course Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {quickCourses.map((course, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white to-orange-50 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">
                  {course.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {course.desc}
                </p>
              </div>

              {/* Click More */}
              <div className="mt-4">
                <Link
                  href={`/mahe-online/${course.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-all"
                >
                  Click More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <Tabs.List className="inline-flex bg-gray-100 rounded-xl p-2 shadow border">
              {[
                { value: 'all', label: 'All Programs' },
                { value: 'ug', label: 'Undergraduate' },
                { value: 'pg', label: 'Postgraduate' },
              ].map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.value
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>

          {/* Course Cards */}
          <Tabs.Content value={activeTab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {coursesToShow.map((course, idx) => (
                <Link
                  key={idx}
                  href={`/mahe-online/${course.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border">
                    <div className="relative h-48">
                      <Image
                        src={course.image}
                        alt={course.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {course.course}
                      </h3>

                      <div className="flex justify-between items-center">
                        <span className="text-orange-600 font-semibold text-sm">
                          View Details →
                        </span>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenModal({ type: 'enquire' });
                          }}
                          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* Apply Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setOpenModal({ type: 'apply' })}
            className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;
