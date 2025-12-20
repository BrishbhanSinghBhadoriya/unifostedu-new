import Link from 'next/link';
import { notFound } from 'next/navigation';
import courseData from '@/data/courseData.json';


import {
  FaSearch,

  FaGraduationCap,

  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,

  FaUniversity,

  FaCalendarAlt
} from "react-icons/fa6";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CourseUniversitiesBrowser from '@/components/CourseUniversitiesBrowser';

export interface University {
  name: string;
  location: string;
  NIRF?: string;
  rating: number;
  image: string;
  specializations: string[];
  fee: string;
  duration: string;
  accreditation: string;
  features: string[];
}
export interface CourseDetail {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  fee: string;
  eligibility: string;
  features: string[];
  universities: University[];
}

export async function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({
    slug,
  }));
}

// Generate metadata for course pages
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const course = (courseData as Record<string, CourseDetail>)[slug];

  if (!course) {
    return {
      title: 'Course Not Found | UNIFOST',
      description: 'The requested course page could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const courseTitle = course.title || `Online ${course.subtitle || slug} Programs in India`;
  const courseDescription = course.description || `Explore ${courseTitle} from top UGC-approved universities in India. Compare fees, eligibility, and career prospects.`;

  return {
    title: `${courseTitle} | UNIFOST`,
    description: courseDescription,

    alternates: {
      canonical: `https://unifostedu.com/courses/${slug}`,
    },
    openGraph: {
      title: `${courseTitle} | UNIFOST`,
      description: courseDescription,
      url: `https://unifostedu.com/courses/${slug}`,
      siteName: "UNIFOST",

      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: courseTitle,
      description: courseDescription,

    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ISR with revalidation
export const revalidate = 86400; // Revalidate every 24 hours
export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    // Try direct key match first
    let course: CourseDetail | undefined = (courseData as Record<string, CourseDetail>)[slug];

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
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Eligibility</h2>
                  <p className="text-[#00ffe0] font-bold text-lg">{course.eligibility || 'Graduation in any discipline'}</p>
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