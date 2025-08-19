'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import {
  FaBook,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaBookOpen,
  FaLock,
  FaUserPlus,
  FaHome,
  FaVideo,
  FaSpinner,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaGlobe
} from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Data arrays
const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular", icon: FaGraduationCap, duration: "2 Years", students: "10K+" },
  { title: "MCA Online", desc: "Advance in tech with flexible learning", tag: "Top Rated", icon: FaBook, duration: "3 Years", students: "8K+" },
  { title: "M.Com Online", desc: "Deepen commerce expertise", tag: "Best Value", icon: FaBriefcase, duration: "2 Years", students: "6K+" },
  { title: "MA Online", desc: "Explore diverse specializations", tag: "Literature", icon: FaBookOpen, duration: "2 Years", students: "5K+" },
  { title: "MAJMC Online", desc: "Master journalism and mass communication", tag: "Media", icon: FaGlobe, duration: "2 Years", students: "4K+" },
  { title: "BBA Online", desc: "Management fundamentals for the digital age", tag: "Career Starter", icon: FaUsers, duration: "3 Years", students: "15K+" },
  { title: "BCA Online", desc: "Build a career in software development", tag: "Trending", icon: FaBook, duration: "3 Years", students: "12K+" },
  { title: "B.Com Online", desc: "Commerce education for business world", tag: "Business", icon: FaBriefcase, duration: "3 Years", students: "18K+" },
  { title: "BA Online", desc: "Liberal arts foundation for diverse careers", tag: "Arts", icon: FaBookOpen, duration: "3 Years", students: "9K+" },
  { title: "BAJMC Online", desc: "Journalism and mass communication basics", tag: "Media", icon: FaGlobe, duration: "3 Years", students: "7K+" }
];

const programs = [
  {
    category: "Postgraduate Degrees",
    programs: [
      { name: "Master of Business Administration (MBA)", duration: "2 Years", specializations: ["Finance", "Marketing", "HR", "IT"], icon: FaGraduationCap },
      { name: "Master of Computer Applications (MCA)", duration: "3 Years", specializations: ["Software Development", "Data Science", "AI/ML"], icon: FaBook },
      { name: "Master of Commerce (M.Com)", duration: "2 Years", specializations: ["Accounting", "Finance", "Economics"], icon: FaBriefcase },
      { name: "Master of Arts (MA)", duration: "2 Years", specializations: ["English", "Psychology", "Sociology"], icon: FaBookOpen }
    ]
  },
  {
    category: "Undergraduate Programs",
    programs: [
      { name: "Bachelor of Business Administration (BBA)", duration: "3 Years", specializations: ["Management", "Entrepreneurship", "Finance"], icon: FaUsers },
      { name: "Bachelor of Computer Applications (BCA)", duration: "3 Years", specializations: ["Programming", "Web Development", "Database"], icon: FaBook },
      { name: "Bachelor of Commerce (B.Com)", duration: "3 Years", specializations: ["Accounting", "Finance", "Marketing"], icon: FaBriefcase },
      { name: "Bachelor of Arts (BA)", duration: "3 Years", specializations: ["Literature", "History", "Philosophy"], icon: FaBookOpen }
    ]
  }
];

const colleges = [
  { name: "Amity University Online", ranking: "Top 10", fee: "₹1.2L - ₹2.5L" },
  { name: "Manipal University Online", ranking: "Top 5", fee: "₹1.5L - ₹3L" },
  { name: "Lovely Professional University Online", ranking: "Top 20", fee: "₹90K - ₹2L" },
  { name: "University of Petroleum and Energy Studies Online", ranking: "Top 15", fee: "₹1.8L - ₹3.2L" },
  { name: "Narsee Monjee Institute of Management Studies Online", ranking: "Top 8", fee: "₹2L - ₹3.5L" },
  { name: "Sharda University Online", ranking: "Top 30", fee: "₹80K - ₹1.5L" },
  { name: "Dr. DY Patil Online", ranking: "Top 25", fee: "₹1.1L - ₹2.2L" },
  { name: "Jain University Online", ranking: "Top 12", fee: "₹1.3L - ₹2.6L" }
];

const cities = [
  { city: "Delhi", state: "Delhi", img: "/delhi.png" },
  { city: "Mumbai", state: "Maharashtra", img: "/mumbai.png" },
  { city: "Bangalore", state: "Karnataka", img: "/banglore.png" },
  { city: "Chennai", state: "Tamil Nadu", img: "/chennai.png" },
  { city: "Hyderabad", state: "Telangana", img: "/hyderabad.png" },
  { city: "Pune", state: "Maharashtra", img: "/pune.png" },
  { city: "Kolkata", state: "West Bengal", img: "/kolkata.png" },
  { city: "Ahmedabad", state: "Gujarat", img: "/ahemdabad.png" }
];

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Gateway to{" "}
            <span className="text-[#00ffe0]">Online Education</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the best online courses from top universities across India
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/coursesearch"
              className="bg-[#00ffe0] text-[#001e3c] px-8 py-3 rounded-full font-semibold hover:bg-[#00e6cc] transition-colors"
            >
              Explore Courses
            </Link>
            <Link 
              href="/bookdemo"
              className="border border-[#00ffe0] text-[#00ffe0] px-8 py-3 rounded-full font-semibold hover:bg-[#00ffe0] hover:text-[#001e3c] transition-colors"
            >
              Book Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Select Best Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎯 Select Best Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pick the right program to unlock your future today!
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {programs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 200}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.programs.map((program, programIndex) => (
                    <Card 
                      key={programIndex}
                      className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50"
                      data-aos="fade-up"
                      data-aos-delay={categoryIndex * 200 + programIndex * 100}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center">
                            <program.icon className="w-6 h-6 text-[#001e3c]" />
                          </div>
                          <Badge variant="secondary" className="bg-[#00ffe0] text-[#001e3c] hover:bg-[#00e6cc]">
                            {program.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight text-gray-900 group-hover:text-[#001e3c] transition-colors">
                          {program.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaClock className="w-4 h-4" />
                            <span>{program.duration} Duration</span>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-700">Specializations:</p>
                            <div className="flex flex-wrap gap-1">
                              {program.specializations.map((spec, specIndex) => (
                                <Badge key={specIndex} variant="outline" className="text-xs">
                                  {spec}
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
                          <Link href={`/courses/${program.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}>
                            Explore Program
                            <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section with Shadcn UI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Online Courses
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a wide range of courses designed for your career growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center">
                        <course.icon className="w-6 h-6 text-[#001e3c]" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-[#00ffe0] text-[#001e3c] hover:bg-[#00e6cc] font-semibold"
                      >
                        {course.tag}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight text-gray-900 group-hover:text-[#001e3c] transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {course.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaClock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaUsers className="w-4 h-4" />
                        <span>{course.students} students enrolled</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">5.0</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white group-hover:bg-[#00ffe0] group-hover:text-[#001e3c] transition-all duration-300"
                      asChild
                    >
                      <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Learn More
                        <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Universities
            </h2>
            <p className="text-xl text-gray-600">
              Partner with India's leading educational institutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colleges.map((college, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center mb-3">
                      <FaUniversity className="w-6 h-6 text-[#001e3c]" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-[#001e3c] transition-colors">
                      {college.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{college.ranking}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="w-4 h-4 text-[#00ffe0]" />
                        <span className="text-sm text-gray-600">{college.fee}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c] transition-all duration-300"
                      asChild
                    >
                      <Link href={`/universities/${college.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Details
                        <FaArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Cities
            </h2>
            <p className="text-xl text-gray-600">
              Find courses in your preferred location
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="group text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#00ffe0] group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={city.img} 
                        alt={city.city} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="font-semibold text-gray-900 text-lg mb-1">
                      {city.city}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {city.state}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
