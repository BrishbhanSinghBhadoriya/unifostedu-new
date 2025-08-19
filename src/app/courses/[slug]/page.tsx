import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaStar,
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  FaArrowRight,
  FaFilter,
  FaUniversity,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt
} from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from '@/components/ImageWithFallback';
import CourseUniversitiesBrowser from '@/components/CourseUniversitiesBrowser';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

const courseData = {
  'mba-online': {
    title: 'MBA Online',
    subtitle: 'Master of Business Administration',
    description: 'Compare India\'s leading UGC-approved MBA programs with flexible schedules and career-focused specializations.',
    duration: '2 Years',
    fee: '₹1.2L - ₹3.5L',
    eligibility: 'Graduation in any discipline with 50% marks',
    features: [
      'Live online classes',
      'Industry expert faculty',
      'Placement assistance',
      'Flexible learning schedule',
      'UGC recognized degree'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.8,
        image: '/amity.png',
        specializations: ['General', 'Dual Specialization', 'Human Resource Analytics', 'Finance', 'Marketing', 'IT', 'Operations', 'International Business'],
        fee: '₹1.2L - ₹2.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Projects']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        rating: 4.6,
        image: '/manipal.png',
        specializations: ['Human Resource Management and Analytics', 'Finance and Marketing', 'Marketing and Human Resource Management', 'Business Analytics', 'Digital Marketing', 'Finance', 'Operations', 'International Business'],
        fee: '₹1.5L - ₹3L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'NMIMS',
        location: 'Mumbai, Maharashtra',
        rating: 4.7,
        image: '/nmims.png',
        specializations: ['Applied Finance', 'Business Administration', 'Business Analytics', 'Digital Marketing', 'Finance', 'Marketing', 'Operations', 'Human Resources'],
        fee: '₹2L - ₹3.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Placement Assistance', 'Quality Education']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.4,
        image: '/jain.png',
        specializations: ['MBA in Finance', 'MBA in Digital Marketing', 'MBA in Entrepreneurship', 'MBA in HR', 'MBA in Marketing'],
        fee: '₹1.3L - ₹2.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.5,
        image: '/lpu.png',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Information Technology', 'Operations Management'],
        fee: '₹90K - ₹2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'UPES Online',
        location: 'Dehradun, Uttarakhand',
        rating: 4.3,
        image: '/upes.png',
        specializations: ['Oil & Gas', 'Power Management', 'Logistics', 'Business Analytics', 'Finance'],
        fee: '₹1.8L - ₹3.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Focused', 'Expert Faculty', 'Placement Support']
      }
    ]
  },
  'mca-online': {
    title: 'MCA Online',
    subtitle: 'Master of Computer Applications',
    description: 'Advance your tech career with an industry-aligned MCA program offered by top online universities.',
    duration: '3 Years',
    fee: '₹1L - ₹3L',
    eligibility: 'BCA/B.Sc (CS/IT) or Graduation with Mathematics/Computer Science',
    features: [
      'Hands-on projects',
      'Specializations in emerging tech',
      'Expert faculty from industry',
      'Flexible schedules',
      'Career support'
    ],
    universities: [
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        rating: 4.6,
        image: '/manipal.png',
        specializations: ['Data Science', 'Artificial Intelligence & ML', 'Cloud Computing', 'Full Stack Development'],
        fee: '₹1.2L - ₹2.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Projects', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.5,
        image: '/lpu.png',
        specializations: ['Software Engineering', 'Cyber Security', 'Data Analytics', 'Cloud and DevOps'],
        fee: '₹90K - ₹2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Practical Curriculum', 'Career Guidance']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.4,
        image: '/amity.png',
        specializations: ['Data Science', 'Blockchain', 'AI/ML', 'Networking'],
        fee: '₹1.1L - ₹2.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Faculty']
      },
      {
        name: 'UPES Online',
        location: 'Dehradun, Uttarakhand',
        rating: 4.3,
        image: '/upes.png',
        specializations: ['Data Science', 'Big Data', 'AI & ML'],
        fee: '₹1.2L - ₹2.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Domain Focus', 'Industry Connect', 'Career Support']
      }
    ]
  },
  'bba-online': {
    title: 'BBA Online',
    subtitle: 'Bachelor of Business Administration',
    description: 'Compare India\'s leading UGC-approved BBA programs designed for aspiring business professionals.',
    duration: '3 Years',
    fee: '₹80K - ₹2.5L',
    eligibility: '10+2 in any stream with 45% marks',
    features: [
      'Comprehensive business curriculum',
      'Practical case studies',
      'Industry projects',
      'Career counseling',
      'Affordable education'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.7,
        image: '/amity.png',
        specializations: ['General Management', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹80K - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Projects']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        rating: 4.5,
        image: '/manipal.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹1L - ₹2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        rating: 4.4,
        image: '/sharda.png',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹70K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Connect', 'Career Support']
      }
    ]
  },
  'mcom-online': {
    title: 'M.Com Online',
    subtitle: 'Master of Commerce',
    description: 'Deepen your expertise in commerce, accounting, and finance with flexible online M.Com programs.',
    duration: '2 Years',
    fee: '₹80K - ₹2L',
    eligibility: 'B.Com or graduation with commerce-related subjects',
    features: [
      'Advanced accounting & finance',
      'Industry-relevant curriculum',
      'Live and recorded sessions',
      'Exam flexibility',
      'Placement guidance'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.5,
        image: '/amity.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹90K - ₹1.8L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Industry Faculty', 'Placement Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.4,
        image: '/lpu.png',
        specializations: ['Accounting & Taxation', 'Finance'],
        fee: '₹80K - ₹1.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable', 'Curriculum Focus', 'Career Services']
      }
    ]
  },
  'ma-online': {
    title: 'MA Online',
    subtitle: 'Master of Arts',
    description: 'Explore humanities and social sciences with flexible MA online degrees from top universities.',
    duration: '2 Years',
    fee: '₹70K - ₹1.6L',
    eligibility: 'Graduation in relevant discipline',
    features: [
      'Wide range of specializations',
      'Research and projects',
      'Live/recorded classes',
      'Flexible exams',
      'Career mentorship'
    ],
    universities: [
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        rating: 4.3,
        image: '/sharda.png',
        specializations: ['English', 'Psychology', 'Sociology'],
        fee: '₹70K - ₹1.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Counselling']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.4,
        image: '/amity.png',
        specializations: ['English', 'Public Policy', 'Psychology'],
        fee: '₹80K - ₹1.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Research Focus', 'Career Support']
      }
    ]
  }
};

type Course = typeof courseData[keyof typeof courseData];

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  try {
    const { slug } = await params;
    // Try direct key match first
    let course: Course | undefined = courseData[slug as keyof typeof courseData];

    // Fallback: match by slugifying known course labels (title/subtitle)
    if (!course) {
      const all = Object.values(courseData) as Course[];
      course = all.find((c) => {
        const titleSlug = slugify(c.title);
        const subtitleSlug = c.subtitle ? slugify(c.subtitle) : '';
        const combinedTitle = `${c.subtitle ?? ''} ${c.title}`.trim();
        const combinedSlug = slugify(combinedTitle);
        return (
          slug === titleSlug ||
          (!!subtitleSlug && slug === subtitleSlug) ||
          slug === combinedSlug ||
          slug.includes(titleSlug) ||
          (!!subtitleSlug && slug.includes(subtitleSlug))
        );
      });
    }

    if (!course) {
      notFound();
    }

    const locations = ['All', ...Array.from(new Set(course.universities.map((uni: any) => uni.location.split(',')[0])))];
    const specializations = ['All', ...Array.from(new Set(course.universities.flatMap((uni: any) => uni.specializations)))];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGraduationCap className="w-12 h-12 text-[#00ffe0]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Online {course.title} Universities in India
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              {course.description}
            </p>
          </div>
        </section>

        {/* Search, Filter, Sort + Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <CourseUniversitiesBrowser universities={course.universities as any} courseTitle={course.title} />
        </section>

        {/* Course Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About {course.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {course.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="w-8 h-8 text-[#001e3c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.duration}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMoneyBillWave className="w-8 h-8 text-[#001e3c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fee Range</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.fee}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="w-8 h-8 text-[#001e3c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eligibility</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.eligibility}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-[#00ffe0] mr-2" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {course.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="text-[#00ffe0] mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaUniversity className="w-5 h-5 text-[#00ffe0] mr-2" />
                  Why Choose Online {course.title}?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">Flexible learning schedule</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">UGC recognized degree</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">Industry expert faculty</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">Placement assistance</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your {course.title} Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get personalized guidance and book a free demo session with our education experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#00ffe0] text-[#001e3c] hover:bg-[#00ffe0] px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link href="/bookdemo">
                  <FaCalendarAlt className="w-5 h-5 mr-2" />
                  Book Free Demo
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c] px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link href="/coursesearch">
                  <FaSearch className="w-5 h-5 mr-2" />
                  Explore More Courses
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error in CoursePage:', error);
    notFound();
  }
}
