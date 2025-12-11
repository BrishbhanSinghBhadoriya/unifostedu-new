import React from 'react'
import course from '@/data/amity.json';

const CoursesPage = async ({params}) => {
    const {courses} = await params;
    const coursesData = course[courses];
  return (
    <div>
        <h1>Courses Page {courses}</h1>
    </div>
  )
}

export default CoursesPage