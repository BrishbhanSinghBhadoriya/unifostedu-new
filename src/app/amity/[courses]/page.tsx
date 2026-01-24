import React from 'react'
import course from '@/data/amitycourses.json'
import dynamic from "next/dynamic";
import Headers from '../_components/Headers';
import Footer from '../_components/Footer';
import { motion } from 'framer-motion';
import SlugClient from './_components/SlugClient';
import { CourseDataFromJSON } from 'types/AmitySlug';

const CoursesPage = async ({ params }: { params: { courses: string } }) => {
  const { courses } = await params;
  const coursesData =  course[courses as keyof CourseDataFromJSON];



  return (
    <SlugClient courseData={coursesData} />
  )
}

export default CoursesPage