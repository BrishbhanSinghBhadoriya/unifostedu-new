'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, color, scale } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBook,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaTimes,
  
  FaBookOpen,
  
  FaHome,
  FaVideo,
  
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaGlobe,
  FaUserTie,
  
  FaShieldAlt,
  FaComments,
  FaCompass
} from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import EnquiryForm from "@/components/EnquiryForm";

// Data arrays
const heroSlides = [
  { src: "/slider/slider-1.png", alt: "Compare before you decide" },
  { src: "/slider/slider-2.png", alt: "Your One-Stop Platform for Online Universities" },
  { src: "/slider/banner-3.png", alt: "Search • Compare • Choose • Succeed" }
];
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

  const router = useRouter();
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
  const toggleUniversity = (name) => {
    const slug = slugify(name);
    setSelectedUniversities((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug].slice(0, 3)
    );
  };
  const canCompare = selectedUniversities.length >= 2 && selectedUniversities.length <= 3;
  const startCompare = () => {
    if (!canCompare) return;
    router.push(`/compare?u=${selectedUniversities.join(',')}`);
  };

  // Hero slider
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Full-width Slider */}
      <section className="relative text-white">
        <div className="relative w-full">
          {/* Slides */}
          <div className="relative h-[260px] sm:h-[380px] md:h-[500px] bg-[#0b1c2a]">
            {heroSlides.map((s, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === slide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={s.src} alt={s.alt} className="w-full h-full object-contain" />
                {/* Overlay */}
                <div className="absolute inset-0 " />
              </div>
            ))}
          </div>

          {/* Content overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto text-center px-4" />
          </div>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === slide ? 'bg-[#00ffe0]' : 'bg-white/60'} transition-colors`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
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

          {/* Compare selector sticky bar */}
          <div className="sticky top-2 z-10 mb-4">
            <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur border rounded-xl p-3 flex items-center justify-between gap-3 shadow-sm">
              <div className="text-sm text-gray-700">
                Selected: <span className="font-semibold">{selectedUniversities.length}</span> / 3
                {selectedUniversities.length > 0 && (
                  <span className="ml-2 text-gray-500">{selectedUniversities.join(', ')}</span>
                )}
              </div>
              <Button disabled={!canCompare} onClick={startCompare} className="bg-[#001e3c] hover:bg-[#003b6c] text-white">
                Compare Selected
              </Button>
            </div>
          </div>

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
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={selectedUniversities.includes(college.name.toLowerCase().replace(/\s+/g, '-'))}
                            onChange={() => toggleUniversity(college.name)}
                            className="h-4 w-4 rounded border-gray-300 text-[#001e3c] focus:ring-[#00ffe0]"
                          />
                          <span>Select to compare</span>
                        </label>
                        <span className="text-xs text-gray-500">Pick 2–3</span>
                      </div>
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
                        <Button type="button" onClick={(e)=>e.stopPropagation()} className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white">Enquiry Now</Button>
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

      
    
      {/* Accreditation */}
      <section
        className="py-16 px-6"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          color: "#ffffff",
        }}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-3">
            <span role="img" aria-label="scroll">📜</span> Accreditation & Recognition
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
            We only partner with universities that are recognized and accredited by the top education authorities in India and globally.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { src: "/ugc.png", label: "UGC Approved", desc: "Recognized by the University Grants Commission for offering quality higher education." },
              { src: "/aicte.png", label: "AICTE Recognized", desc: "Approved by the All India Council for Technical Education for technical programs." },
              { src: "/naac.png", label: "NAAC Accredited", desc: "Accredited by NAAC for maintaining academic excellence and infrastructure." },
              { src: "/iso.png", label: "ISO Certified", desc: "Certified for quality management systems as per international standards." },
              { src: "/aiu.png", label: "AIU Member", desc: "Member of Association of Indian Universities promoting academic equivalence." },
              { src: "/nirf.png", label: "NIRF Ranked", desc: "Ranked under the National Institutional Ranking Framework." },
              { src: "/ioe.png", label: "IOE Recognized", desc: "Recognized as Institution of Eminence by the Government of India." },
              { src: "/crisil.png", label: "CRISIL Rated", desc: "Rating from CRISIL for academic and operational performance." },
              { src: "/icar.png", label: "ICAR Approved", desc: "Approved by the Indian Council of Agricultural Research." },
              { src: "/wes.png", label: "WES Recognized", desc: "Degrees recognized by World Education Services for global equivalency." },
              { src: "/nabh.png", label: "NABH Accredited", desc: "Applicable to healthcare programs with NABH compliance." },
              { src: "/iacbe.png", label: "IACBE Member", desc: "Member of the International Accreditation Council for Business Education." },
              { src: "/aacsb.png", label: "AACSB Accredited", desc: "Top-tier accreditation for business schools worldwide." },
              { src: "/qaa.png", label: "QAA Approved", desc: "Quality assurance by the UK-based QAA." },
              { src: "/wasc.png", label: "WASC Accredited", desc: "Accredited by the Western Association of Schools and Colleges." },
              { src: "/qs.png", label: "QS Ranked", desc: "Ranked in the QS World University Rankings." },
              { src: "/acu.png", label: "ACU Member", desc: "Member of the Association of Commonwealth Universities." },
              { src: "/unwto.png", label: "UNWTO Certified", desc: "Certified by United Nations World Tourism Organization." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg backdrop-blur-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => alert(`${item.label}\n\n${item.desc}`)}
                data-aos="zoom-in"
              >
                <div className="flex flex-col items-center text-center">
                  <img src={item.src} alt={item.label} className="w-12 h-12 object-contain mb-2" />
                  <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Cities */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-800 py-16 px-6 text-white overflow-hidden relative" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">🏫 Study Cities Across India</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">Explore top universities across India is major educational hubs.</p>

          <div className="overflow-hidden relative backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="flex gap-10 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].flatMap((_, i) =>
                cities.map((city, idx) => (
                  <motion.div
                    key={`city-${i}-${idx}`}
                    whileHover={{ y: -6 }}
                    className="min-w-[150px] flex flex-col items-center text-center bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <img src={city.img} alt={city.city} className="w-16 h-16 object-contain mb-2 rounded-full border border-white/20 shadow" />
                    <p className="text-white font-semibold text-sm">{city.city}</p>
                    <p className="text-blue-200 text-xs">{city.state}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-16 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">🚀 Meet Our Visionary Founders</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">The brilliant minds behind UniFost, shaping the future of education with passion and purpose.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Priyansh Mishra",
                role: "Co-Founder & Director",
                img: "/priyansh.jpg",
                desc: "Priyansh Mishra, a visionary leader committed to revolutionizing education through innovation and accessibility, has poured his heart, energy, and vision into building UniFost with unwavering passion and dedication.",
                quote: "Innovation in education is not an option — it's a necessity."
              },
              {
                name: "Aman Pawar",
                role: "Co-Founder & Director",
                img: "/aman.jpg",
                desc: "Aman Pawar is the driving force behind UniFost—blending vision with action, and passion with purpose. His tireless efforts and hands-on leadership have shaped a platform that puts students first.",
                quote: "Students deserve guidance that goes beyond academics."
              }
            ].map((founder, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-blue-200 hover:border-blue-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img src={founder.img} alt={founder.name} className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-md" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{founder.name}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{founder.role}</span>
                <p className="text-gray-700 mt-4 mb-4">{founder.desc}</p>
                <p className="italic text-blue-700 text-sm">"{founder.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Landing;
