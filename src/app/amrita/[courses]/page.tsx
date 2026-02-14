import React from 'react'
import coursesData from '@/data/amritacourse.json';
import { notFound } from 'next/navigation';
import SlugClient from './_components/SlugClient';

const CoursesPage = async ({ params }: { params: Promise<{ courses: string }> }) => {
  const { courses } = await params;
  
  // Find the course object from the array using the slug (courses param)
  const foundCourse = coursesData.courses.find((c) => c.slug === courses);

  if (!foundCourse) {
    return notFound();
  }

  return (
    <SlugClient course={foundCourse} />
  )
}

export default CoursesPage