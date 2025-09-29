"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";

import EnquiryForm from "@/components/EnquiryForm";
import AccreditationSection from "@/components/AccreditationSection";

export default function ChandigarhPage() {
  const [activeCategory, setActiveCategory] = useState("PG"); // PG or UG
  const [current, setCurrent] = useState(0);

  const ugCourses = [
    {
      title: "Bachelor of Arts - Journalism & Mass Communication (BA-JMC)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,66,668",
      specialization: "Journalism, Media Studies",
      image: "/images/ba-jmc.webp",
    },
    {
      title: "Bachelor of Business Administration - Business Analytics (BBA - KPMG)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,60,000",
      specialization: "Business Analytics with KPMG",
      image: "/images/bba.webp",
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 Pass",
      fees: "₹1,68,000",
      specialization: "Marketing, HR, Entrepreneurship, Digital Marketing, Fin-Tech",
      image: "/images/bba.webp",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years(6 Semesters)",
      eligibility: "10+2 or equivalent",
      fees: "₹1,70,000",
      specialization: "IT & Systems",
      image: "/images/bca.webp",
    },
  ];

  const pgCourses = [
    {
      title: "Master of Business Administration - Business Analytics (MBA - KPMG)",
      duration: "2 Years(4 Semesters)",
      eligibility: "Bachelor degree in any discipline or professional programs (CA/ICWA etc.)",
      fees: "₹2,00,000",
      specialization: "Business Analytics with KPMG",
      image: "/images/mba.webp",
    },
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,10,668",
      specialization: "Finance, Marketing, HR, IT, Operations, International Business, Digital Marketing, Fin-Tech",
      image: "/images/mba.webp",
    },
    {
      title: "Master of Computer Applications - AI & ML",
      duration: "2 Years",
      eligibility: "BCA/B.Sc(IT/CS)/B.E/B.Tech",
      fees: "₹1,40,000",
      specialization: "AI, ML, Data Analytics, Cloud Computing, Full Stack",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Science - Data Science",
      duration: "2 Years",
      eligibility: "Bachelor's in BA/BCA/B.Sc/BE/B.Tech",
      fees: "₹1,46,668",
      specialization: "Full Stack, Web Development",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Computer Applications - Cloud Computing (AWS Academy)",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation",
      fees: "₹1,40,000",
      specialization: "Cloud, AWS, DevOps, Full Stack",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Computer Applications - Data Analytics",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation with Math/Stats/Programming",
      fees: "₹1,40,000",
      specialization: "Big Data, Data Mining",
      image: "/images/mca1.webp",
    },
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "BCA/B.Sc/BE/B.Tech or any graduation",
      fees: "₹1,40,000",
      specialization: "General IT, Software Development",
      image: "/images/mca.webp",
    },
    {
      title: "Master of Science (Mathematics)",
      duration: "2 Years",
      eligibility: "Bachelor's with Math",
      fees: "₹1,00,000",
      specialization: "Pure Math, Applied Math",
      image: "/images/mba.webp",
    },
    {
      title: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline or BA(Hons.)",
      fees: "₹1,00,000",
      specialization: "Psychology, English, Economics",
      image: "/images/ma1.webp",
    },
  ];

  const courses = activeCategory === "PG" ? pgCourses : ugCourses;
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const visibleCourses = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleCourses.push(courses[(current + i) % courses.length]);
  }

  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header & Hero Section */}
      <header className="bg-white shadow-md fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <img src="/images/chandigarh.webp" alt="Chandigarh University" className="h-12" />
          <div className="flex items-center gap-4">
            <a href="tel:+917042867717" className="flex items-center gap-2 text-gray-700 font-medium">
              📞 +91-7042867717
            </a>
            <button 
              onClick={() => setOpenModal({ type: 'apply' })}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] mt-[90px] mb-[10px]">
        <Image src="/images/chandigarh.webp" alt="Chandigarh University Banner" width={1800} height={1200} className="object-cover object-center" priority />
      </section>

      {/* Accreditation & Why Choose Section */}
      <AccreditationSection
        title="Why Choose Chandigarh University Online?"
        description="Learn flexibly with expert mentorship, AI-driven LMS, and career support — all with globally recognized UGC-entitled degrees."
        stats={[]}
        benefits={[]}
        accreditations={[
          { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
          { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
          { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
          { src: "/images/wes.webp", alt: "WES", name: "WES" },
        ]}
      />

      {/* UG/PG Programs Carousel */}
      <main className="pt-32 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-center font-semibold mb-10">
          Explore Chandigarh University Online Programs
        </h1>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-6 py-4 w-60 rounded-l-xl text-xl ${activeCategory === "PG" ? "bg-[#e60000] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => { setActiveCategory("PG"); setCurrent(0); }}
          >
            PG Programs
            <span className="block text-sm">(After Graduation)</span>
          </button>
          <button
            className={`px-6 py-4 w-60 text-xl ${activeCategory === "UG" ? "bg-[#e60000] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => { setActiveCategory("UG"); setCurrent(0); }}
          >
            UG Programs
            <span className="block text-sm">(After 12th)</span>
          </button>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 z-10 shadow-lg"
          >
            Prev
          </button>
          <div className="flex gap-4 justify-center">
            {visibleCourses.map((program, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <img src={program.image} alt={program.title} className="w-full h-60 object-cover" />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-medium text-[#f58225] mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-2"><span className="font-semibold">Duration:</span> {program.duration}</p>
                      <p className="text-gray-600 mb-2"><span className="font-semibold">Eligibility:</span> {program.eligibility}</p>
                      <p className="text-gray-600 mb-2 truncate"><span className="font-semibold">Specialization:</span> {program.specialization}</p>
                    </div>
                    <p className="text-gray-600 font-medium mt-4">
                      Fees: <span className="text-[#f58225] font-semibold border border-[#f58225] p-1 rounded">{program.fees}</span>
                    </p>
                    <div className="mt-4">
                      <a href="#" className="inline-block bg-[#f58228] text-white font-bold py-2 px-4 rounded hover:bg-red-700">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 z-10 shadow-lg"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
