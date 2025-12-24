import course from '@/data/amitycourses.json';
import { CourseDataFromJSON } from 'types/AmitySlug';
import SlugClient from './_components/SlugClient';

const CoursesPage = async ({ params }: { params: { courses: string } }) => {
  const { courses } = await params;
  const coursesData =  course[courses as keyof CourseDataFromJSON];



  return (
    <SlugClient courseData={coursesData} />
  )
}

export default CoursesPage