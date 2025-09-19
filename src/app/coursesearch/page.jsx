"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "@/components/pages/landing/Hero";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular" },
  { title: "MCA Online", desc: "Advance in tech with flexible learning", tag: "Top Rated" },
  { title: "M.Com Online", desc: "Deepen commerce expertise", tag: "Best Value" },
  { title: "MA Online", desc: "Explore diverse specializations", tag: "Literature" },
  { title: "MAJMC Online", desc: "Master journalism and mass communication", tag: "Media" },
  { title: "BBA Online", desc: "Management fundamentals for the digital age", tag: "Career Starter" },
  { title: "BCA Online", desc: "Build a career in software development", tag: "Trending" },
  { title: "B.Com Online", desc: "Commerce education for business world", tag: "Business" },
  { title: "BA Online", desc: "Liberal arts foundation for diverse careers", tag: "Arts" },
  { title: "BAJMC Online", desc: "Journalism and mass communication basics", tag: "Media" },
];

export default function CourseSearch() {
  const router = useRouter();
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState("getStarted");

  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  return (
    <>
      <Hero onOpenModal={openModal} />

      <Head>
        <title>Search Online Courses | UniFost</title>
        <meta
          name="description"
          content="Find the perfect online course from top universities. Explore MBA, MCA, BBA, BCA, and more with career-oriented learning."
        />
        <meta
          name="keywords"
          content="Online Courses, MBA Online, MCA Online, BBA Online, BCA Online, UniFost, Study Online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unifost.com/courses" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Search <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect online course that matches your career goals and interests.
            </p>
          </motion.div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-blue-300 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                      {course.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{course.desc}</p>
                </div>
                <Link
                  href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="w-full text-center bg-blue-600 text-white py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Back Button */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/"
              className="bg-[#001e3c] text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-[#003b6c] hover:scale-105 transition-transform duration-300"
            >
              ← Back to Home
            </Link>
          </motion.div>

          
          <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
            <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-2 lg:my-1 p-4 sm:p-6 z-[30001]">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                  {modalType === "getStarted" && "Get Started with Unifost"}
                  {modalType === "videoCall" && "Book a Video Call"}
                  {modalType === "homeDemo" && "Book a Home Demo"}
                </DialogTitle>
              </DialogHeader>
              <EnquiryForm
                onSubmitted={() => setShowEnquiryModal(false)}
                formType={modalType}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
