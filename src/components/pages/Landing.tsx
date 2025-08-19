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
  FaGlobe,
  FaUserTie,
  FaQuestionCircle,
  FaShieldAlt,
  FaComments,
  FaCompass
} from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import EnquiryForm from "@/components/EnquiryForm";

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
          
          <Tabs defaultValue="all" className="w-full" data-aos="fade-up">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto bg-white/60 backdrop-blur shadow-sm rounded-xl p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#001e3c] data-[state=active]:text-white rounded-lg">
                All Programs
              </TabsTrigger>
              <TabsTrigger value="pg" className="data-[state=active]:bg-[#001e3c] data-[state=active]:text-white rounded-lg">
                Postgraduate Degrees
              </TabsTrigger>
              <TabsTrigger value="ug" className="data-[state=active]:bg-[#001e3c] data-[state=active]:text-white rounded-lg">
                Undergraduate Programs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...programs[0].programs, ...programs[1].programs].map((program, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50">
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
                      <Button className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white group-hover:bg-[#00ffe0] group-hover:text-[#001e3c] transition-all duration-300" asChild>
                        <Link href={`/courses/${program.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}>
                          Explore Program
                          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pg" className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs[0].programs.map((program, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50">
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
                      <Button className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white group-hover:bg-[#00ffe0] group-hover:text-[#001e3c] transition-all duration-300" asChild>
                        <Link href={`/courses/${program.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}>
                          Explore Program
                          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ug" className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs[1].programs.map((program, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50">
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
                      <Button className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white group-hover:bg-[#00ffe0] group-hover:text-[#001e3c] transition-all duration-300" asChild>
                        <Link href={`/courses/${program.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}>
                          Explore Program
                          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Explore Universities Section with Enquiry Modal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🏛 Explore Over Universities</h2>
            <p className="text-xl text-gray-600">Find the right university and enquire instantly to get personalized guidance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colleges.map((college, index) => (
              <motion.div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center mb-3">
                      <FaUniversity className="w-6 h-6 text-[#001e3c]" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-[#001e3c] transition-colors">{college.name}</CardTitle>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white">Enquiry Now</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[560px]">
                        <DialogHeader>
                          <DialogTitle>Enquiry for {college.name}</DialogTitle>
                        </DialogHeader>
                        <EnquiryForm universityName={college.name} />
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform That Supports You End-to-End</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need in one place — from expert advice to post-admission support!</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaUserTie, title: "Expert Counsellors", desc: "Personalized guidance for the right program and university." },
              { icon: FaUniversity, title: "Top Universities", desc: "Handpicked, UGC-approved institutions you can trust." },
              { icon: FaVideo, title: "Video Counselling", desc: "Face-to-face sessions from anywhere, at your convenience." },
              { icon: FaHome, title: "Home Counselling", desc: "Get assistance at home for forms, documents and more." },
              { icon: FaComments, title: "Q&A Panel", desc: "Clear all your doubts with quick expert responses." },
              { icon: FaBook, title: "Post Admission Guide", desc: "Step-by-step help after admission till you settle in." },
              { icon: FaShieldAlt, title: "Verify Your University", desc: "Authenticity checks so you enroll with confidence." },
              { icon: FaCompass, title: "Career Guidance", desc: "Plan your career path with mentorship and tools." }
            ].map((item, idx) => (
              <motion.div key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
                <Card className="relative overflow-hidden group border-2 hover:border-[#00ffe0] transition-all">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#00ffe0]/20 group-hover:bg-[#00ffe0]/30 transition-colors" />
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-lg flex items-center justify-center mb-3">
                      {React.createElement(item.icon, { className: "w-6 h-6 text-[#001e3c]" })}
                    </div>
                    <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      
    </div>
  );
};

export default Landing;
