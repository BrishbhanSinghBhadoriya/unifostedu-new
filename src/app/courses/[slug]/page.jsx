import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SEOOptimizer from '@/components/SEOOptimizer';
import courseData from '@/data/courseData.json';
import Head from 'next/head';


import {
  FaSearch,
  
  FaGraduationCap,
  
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  
  FaUniversity,
  
  FaCalendarAlt
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CourseUniversitiesBrowser from '@/components/CourseUniversitiesBrowser';

// Generate metadata for course pages
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const courseData = {
    'mba-online': {
      title: 'Online MBA Programs in India | Top Specializations | UNIFOST',
      description: 'Compare India\'s leading UGC-approved online MBA programs with flexible schedules and career-focused specializations. Get expert guidance for MBA admissions from top universities like Amity, Manipal, NMIMS, and more.',
      keywords: ['Online MBA India', 'Online MBA Programs', 'MBA Distance Learning', 'UGC Approved MBA', 'MBA Specializations', 'Online Business Administration', 'MBA Career Guidance'],
      courseType: 'Master of Business Administration',
      duration: '2 Years',
      level: 'Postgraduate'
    },
    'mca-online': {
      title: 'Online MCA Programs in India | UNIFOST',
      description: 'Advance your tech career with industry-aligned online MCA programs from top Indian universities. Specializations in AI, Data Science, Cybersecurity, and more. Expert guidance for MCA admissions.',
      keywords: ['Online MCA India', 'Online MCA Programs', 'MCA Distance Learning', 'Computer Applications Master', 'MCA Specializations', 'Online Tech Education', 'MCA Career Guidance'],
      courseType: 'Master of Computer Applications',
      duration: '2 Years',
      level: 'Postgraduate'
    },
    'bba-online': {
      title: "Online BBA Programs in India | UNIFOST",
      description: 'Compare India\'s leading UGC-approved online BBA programs designed for aspiring business professionals. Get expert guidance for BBA admissions from top universities.',
      keywords: ['Online BBA India', 'Online BBA Programs', 'BBA Distance Learning', 'Bachelor Business Administration', 'BBA Specializations', 'Online Business Education', 'BBA Career Guidance'],
      courseType: 'Bachelor of Business Administration',
      duration: '3 Years',
      level: 'Undergraduate'
    },
    'bca-online': {
      title: "Online BCA Programs in India | UNIFOST",
      description: 'Build a solid foundation in computer science, programming, and software development with flexible online BCA programs from top Indian universities.',
      keywords: ['Online BCA India', 'Online BCA Programs', 'BCA Distance Learning', 'Bachelor Computer Applications', 'BCA Specializations', 'Online Computer Science', 'BCA Career Guidance'],
      courseType: 'Bachelor of Computer Applications',
      duration: '3 Years',
      level: 'Undergraduate'
    },
    'bcom-online': {
      title: 'Online B.Com Programs in India | UNIFOST',
      description: 'Build strong fundamentals in accounting, finance, taxation, and business with flexible UGC-approved online B.Com programs from top Indian universities.',
      keywords: ['Online BCom India', 'Online BCom Programs', 'BCom Distance Learning', 'Bachelor of Commerce', 'BCom Specializations', 'Online Commerce Education', 'BCom Career Guidance'],
      courseType: 'Bachelor of Commerce',
      duration: '3 Years',
      level: 'Undergraduate'
    },
    'ba-online': {
      title: 'Online BA Programs in India | UNIFOST',
      description: 'Build strong foundations in humanities and social sciences with flexible UGC-approved online BA programs from top Indian universities.',
      keywords: ['Online BA India', 'Online BA Programs', 'BA Distance Learning', 'Bachelor of Arts', 'BA Specializations', 'Online Humanities Education', 'BA Career Guidance'],
      courseType: 'Bachelor of Arts',
      duration: '3 Years',
      level: 'Undergraduate'
    },
    'bajmc-online': {
      title: 'Online BA Journalism & Mass Communication| UNIFOST',
      description: 'Launch your media career with comprehensive online BAJMC covering journalism, digital media, PR, advertising, and production with hands-on projects.',
      keywords: ['Online BAJMC India', 'Online BAJMC Programs', 'BAJMC Distance Learning', 'Journalism Mass Communication', 'BAJMC Specializations', 'Online Media Education', 'BAJMC Career Guidance'],
      courseType: 'Bachelor of Arts in Journalism & Mass Communication',
      duration: '3 Years',
      level: 'Undergraduate'
    },
    'mcom-online': {
      title: 'Online M.Com Programs in India | UNIFOST',
      description: 'Deepen your expertise in commerce, accounting, and finance with flexible online M.Com programs from top Indian universities.',
      keywords: ['Online MCom India', 'Online MCom Programs', 'MCom Distance Learning', 'Master of Commerce', 'MCom Specializations', 'Online Commerce Master', 'MCom Career Guidance'],
      courseType: 'Master of Commerce',
      duration: '2 Years',
      level: 'Postgraduate'
    },
    'ma-online': {
      title: 'Online MA Programs in India | UNIFOST',
      description: 'Explore humanities and social sciences with flexible online MA degrees from top Indian universities. Specializations in English, Psychology, Sociology, and more.',
      keywords: ['Online MA India', 'Online MA Programs', 'MA Distance Learning', 'Master of Arts', 'MA Specializations', 'Online Humanities Master', 'MA Career Guidance'],
      courseType: 'Master of Arts',
      duration: '2 Years',
      level: 'Postgraduate'
    },
    'majmc-online': {
      title: 'Online MA Journalism & Mass Communication | UNIFOST',
      description: 'Master journalism and mass communication with industry-focused curricula, practical projects, and expert mentorship from top online universities.',
      keywords: ['Online MAJMC India', 'Online MAJMC Programs', 'MAJMC Distance Learning', 'Journalism Mass Communication Master', 'MAJMC Specializations', 'Online Media Master', 'MAJMC Career Guidance'],
      courseType: 'Master of Arts in Journalism & Mass Communication',
      duration: '2 Years',
      level: 'Postgraduate'
    },
    'msc-online': {
      title: 'Online MSc Programs in India | UNIFOST',
      description: 'Advance your scientific career with specialized online MSc programs in Computer Science, Data Science, Mathematics, and more from top Indian universities.',
      keywords: ['Online MSc India', 'Online MSc Programs', 'MSc Distance Learning', 'Master of Science', 'MSc Specializations', 'Online Science Master', 'MSc Career Guidance'],
      courseType: 'Master of Science',
      duration: '2 Years',
      level: 'Postgraduate'
    }
  };

  const course = courseData[slug];
  
  if (!course) {
    return {
      title: 'Course Not Found | UNIFOST',
      description: 'The requested course could not be found. Explore our available online degree programs.',
    };
  }

  return {
    title: course.title,
    description: course.description,
    keywords: course.keywords,
    alternates: {
      canonical: `https://unifostedu.com/courses/${slug}`,
    },
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://unifostedu.com/courses/${slug}`,
      siteName: 'UNIFOST',
      images: [
        {
          url: 'images/uni.webp',
          width: 1200,
          height: 630,
          alt: `${course.courseType} - Online Programs in India`
        }
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@unifost',
      creator: '@unifost',
      title: course.title,
      description: course.description,
      images: ['images/uni.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    other: {
      'course-type': course.courseType,
      'course-duration': course.duration,
      'course-level': course.level,
    }
  };
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default async function CoursePage({ params }) {
  try {
    const { slug } = await params;
    // Try direct key match first
    let course = courseData[slug];

    // Fallback: match by slugifying known course labels (title/subtitle)
    if (!course) {
      const all = Object.values(courseData);
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

    // Generate structured data for the course page
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: 'UNIFOST',
        url: 'https://unifostedu.com'
      },
      coursePrerequisites: course.eligibility,
      educationalLevel: course.title.includes('Master') || course.title.includes('M') ? 'Postgraduate' : 'Undergraduate',
      timeRequired: course.duration,
      courseMode: 'Online',
      inLanguage: 'en',
      isAccessibleForFree: false,
      offers: {
        '@type': 'Offer',
        price: course.fee,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      },
      hasCourseInstance: course.universities.map(uni => ({
        '@type': 'CourseInstance',
        name: `${course.title} at ${uni.name}`,
        provider: {
          '@type': 'Organization',
          name: uni.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: uni.location.split(',')[0],
            addressRegion: uni.location.split(',')[1]?.trim() || 'India',
            addressCountry: 'IN'
          }
        },
        courseMode: 'Online',
        timeRequired: uni.duration,
        offers: {
          '@type': 'Offer',
          price: uni.fee,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock'
        }
      })),
      about: course.features.map(feature => ({
        '@type': 'Thing',
        name: feature
      })),
      teaches: course.universities.flatMap(uni => 
        Array.isArray(uni.specializations) ? uni.specializations : [uni.specializations]
      ).filter(Boolean).map(spec => ({
        '@type': 'Thing',
        name: spec
      }))
    };

    return (
      <>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
            <CourseUniversitiesBrowser universities={course.universities} courseTitle={course.title} />
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
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Duration</h2>
                  <p className="text-[#00ffe0] font-bold text-lg">{course.duration}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMoneyBillWave className="w-8 h-8 text-[#001e3c]" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Fee Range</h2>
                  <p className="text-[#00ffe0] font-bold text-lg">{course.fee}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="w-8 h-8 text-[#001e3c]" />
                  </div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">NIRF</h3>
                  <p className="text-[#00ffe0] font-bold text-lg">{course.NIRF}</p>
                
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Eligibility</h2>
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
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-[#00ffe0] mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaUniversity className="w-5 h-5 text-[#00ffe0] mr-2" />
                    Why Choose Online {course.title}?
                  </h2>
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

          {/* Compare Online Universities Section */}
         
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
                  className="bg-[#00ffe0] text-[#001e3c] hover:bg-[#00e6cc] px-8 py-3 text-lg font-semibold"
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
      </>
    );
  } catch (error) {
    console.error('Error in CoursePage:', error);
    notFound();
  }
}

export function generateStaticParams() {
  const extraSlugs = [
    'msc-online',
    'bba-online',
    'bca-online',
    'bcom-online',
    'ba-online',
    'bajmc-online',
    'mcom-online',
    'ma-online',
    'majmc-online'
  ];
  const slugs = Array.from(new Set([...Object.keys(courseData), ...extraSlugs]));
  return slugs.map((slug) => ({ slug }));
}