import React from 'react';
import { notFound } from 'next/navigation';
import SlugClient, { CourseData } from './_Components/SlugClients';
import maheCoursesData from '@/data/mahecourses.json'; 

interface PageProps {
  params: Promise<{
    courses: string;
  }>;
}

const Page = async (props: PageProps) => {
  const params = await props.params;
  const course = maheCoursesData.courses.find((c) => c.id === params.courses);

  if (!course) {
    return notFound();
  }

  return <SlugClient courseData={course as unknown as CourseData} />;
};

export default Page;
