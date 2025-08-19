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
  }
};

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  try {
    const { slug } = await params;
    console.log('Received slug:', slug); // Debug log
    
    const course = courseData[slug as keyof typeof courseData];
    console.log('Found course:', course); // Debug log
    
    if (!course) {
      console.log('Course not found for slug:', slug); // Debug log
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

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Universities */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaSearch className="inline w-4 h-4 mr-2" />
                    Search Universities
                  </label>
                  <input
                    type="text"
                    placeholder="Search by name or location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                  />
                </div>

                {/* Filter by Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline w-4 h-4 mr-2" />
                    Filter by Location
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent">
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter by Specialization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaBook className="inline w-4 h-4 mr-2" />
                    Filter by Specialization
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent">
                    {specializations.slice(0, 10).map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {course.universities.length} Universities Found
              </h2>
              <p className="text-gray-600">
                Showing results for {course.title} programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {course.universities.map((university, index) => (
                <div
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-white overflow-hidden"
                >
                  <Card className="h-full border-0 shadow-none">
                    {/* University Image with Rating Badge */}
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <img 
                          src={university.image} 
                          alt={university.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextElement = target.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="hidden items-center justify-center w-full h-full bg-gradient-to-br from-[#00ffe0] to-[#00e6cc]">
                          <FaUniversity className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white border-0">
                        <FaStar className="w-3 h-3 mr-1" />
                        {university.rating}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#001e3c] transition-colors">
                        {university.name}
                      </CardTitle>
                      <CardDescription className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#00ffe0]" />
                        {university.location}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <div className="space-y-3">
                        {/* Specializations */}
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Specializations:</p>
                          <div className="space-y-1">
                            {university.specializations.slice(0, 3).map((spec: string, specIndex: number) => (
                              <div key={specIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-[#00ffe0] rounded-full mr-2"></div>
                                {spec}
                              </div>
                            ))}
                            {university.specializations.length > 3 && (
                              <div className="text-sm text-[#00ffe0] font-medium">
                                +{university.specializations.length - 3} more
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Key Info */}
                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center text-sm text-gray-600">
                            <FaClock className="w-4 h-4 mr-2 text-[#00ffe0]" />
                            <span>{university.duration}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FaMoneyBillWave className="w-4 h-4 mr-2 text-[#00ffe0]" />
                            <span>{university.fee}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex flex-wrap gap-1">
                            {university.features.map((feature: string, featureIndex: number) => (
                              <Badge key={featureIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button 
                        className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white group-hover:bg-[#00ffe0] group-hover:text-[#001e3c] transition-all duration-300"
                        asChild
                      >
                        <Link href={`/universities/${university.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Details
                          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
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
