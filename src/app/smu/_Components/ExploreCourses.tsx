'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';

type Course = {
  course: string;
  duration: string;
  eligibility: string;
  fees: string;
  specialization: string;
  image: string;
  alt: string;
  university: string;
  universityShort: string;
};

type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type ExploreCoursesProps = {
  ugCourses: Course[];
  pgCourses: Course[];
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const ExploreCourses: React.FC<ExploreCoursesProps> = ({
  ugCourses,
  pgCourses,
  setOpenModal,
  
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ug' | 'pg'>('all');

  const courses =
    activeTab === 'all'
      ? [...ugCourses, ...pgCourses]
      : activeTab === 'ug'
      ? ugCourses
      : pgCourses;

  return (
    <section id="explore-courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
            Explore{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Online Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from industry-relevant programs designed for working professionals and fresh graduates
          </p>
        </div>

        {/* Tabs */}
        <Tabs.Root value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <div className="flex justify-center mb-12">
            <Tabs.List className="inline-flex bg-gray-100 rounded-2xl p-2 shadow">
              {[
                { value: 'all', label: 'All Programs' },
                { value: 'ug', label: 'Undergraduate' },
                { value: 'pg', label: 'Postgraduate' },
              ].map(tab => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className={`px-6 py-3 rounded-xl font-semibold transition ${
                    activeTab === tab.value
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>

          {/* Course Cards */}
          <Tabs.Content value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg border overflow-hidden">

                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      {course.universityShort}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold">{course.course}</h3>

                    <p>⏱️ {course.duration}</p>
                    <p>🎓 {course.eligibility}</p>
                    <p>💰 {course.fees}</p>
                    <p>
                      ⭐ <strong>Specialization:</strong> {course.specialization}
                    </p>

                    <button
                      onClick={() =>
                        setOpenModal({ type: 'apply', program: course.course })
                      }
                      className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl"
                    >
                      Apply Now
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default ExploreCourses;
