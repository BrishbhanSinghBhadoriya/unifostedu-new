'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';

interface CourseraProps {
  setOpenModal: (modal: any) => void;
  openModal: any;
}

const CourseraSection: React.FC<CourseraProps> = ({ setOpenModal, openModal }) => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const courseCategories = [
    {
      category: "Data Science & AI",
      icon: "🤖",
      courses: [
        { name: "Machine Learning by Andrew Ng", provider: "Stanford University", rating: "4.9/5", duration: "11 weeks" },
        { name: "Data Science Specialization", provider: "Johns Hopkins University", rating: "4.8/5", duration: "8 months" },
        { name: "Deep Learning Specialization", provider: "deeplearning.AI", rating: "4.9/5", duration: "5 months" },
        { name: "AI for Everyone", provider: "deeplearning.AI", rating: "4.7/5", duration: "5 hours" },
        { name: "Neural Networks and Deep Learning", provider: "deeplearning.AI", rating: "4.8/5", duration: "4 weeks" },
        { name: "Supervised Machine Learning", provider: "deeplearning.AI", rating: "4.9/5", duration: "3 weeks" },
      ]
    },
    {
      category: "Web Development",
      icon: "💻",
      courses: [
        { name: "HTML, CSS, and Javascript for Web Developers", provider: "Johns Hopkins University", rating: "4.8/5", duration: "8 weeks" },
        { name: "Responsive Web Design", provider: "Coursera", rating: "4.7/5", duration: "7 weeks" },
        { name: "Full Stack Web Development", provider: "University of Michigan", rating: "4.8/5", duration: "7 months" },
        { name: "React Basics", provider: "Meta", rating: "4.6/5", duration: "4 weeks" },
        { name: "Advanced CSS and SASS", provider: "Coursera", rating: "4.7/5", duration: "4 weeks" },
        { name: "JavaScript Algorithms and Data Structures", provider: "Coursera", rating: "4.8/5", duration: "5 weeks" },
      ]
    },
    {
      category: "Cloud Computing",
      icon: "☁️",
      courses: [
        { name: "AWS Fundamentals Specialization", provider: "Amazon Web Services", rating: "4.8/5", duration: "3 months" },
        { name: "Google Cloud Platform Fundamentals", provider: "Google Cloud", rating: "4.7/5", duration: "4 weeks" },
        { name: "Microsoft Azure Fundamentals", provider: "Microsoft", rating: "4.6/5", duration: "4 weeks" },
        { name: "Cloud Computing Basics", provider: "LearnQuest", rating: "4.5/5", duration: "3 weeks" },
        { name: "AWS Machine Learning", provider: "Amazon Web Services", rating: "4.7/5", duration: "6 weeks" },
        { name: "Kubernetes and Docker", provider: "Linux Academy", rating: "4.8/5", duration: "8 weeks" },
      ]
    },
    {
      category: "Digital Marketing",
      icon: "📱",
      courses: [
        { name: "Digital Marketing & E-commerce Specialization", provider: "University of Michigan", rating: "4.7/5", duration: "6 months" },
        { name: "Social Media Marketing", provider: "Meta", rating: "4.6/5", duration: "4 weeks" },
        { name: "Google Analytics for Beginners", provider: "Google", rating: "4.8/5", duration: "2 weeks" },
        { name: "Content Marketing", provider: "University of Colorado", rating: "4.5/5", duration: "4 weeks" },
        { name: "SEO Fundamentals", provider: "Coursera", rating: "4.6/5", duration: "4 weeks" },
        { name: "Email Marketing Campaign", provider: "Coursera", rating: "4.7/5", duration: "3 weeks" },
      ]
    },
    {
      category: "Business & Management",
      icon: "💼",
      courses: [
        { name: "Project Management Essentials", provider: "University of California", rating: "4.7/5", duration: "4 weeks" },
        { name: "Leadership and Management", provider: "University of Michigan", rating: "4.6/5", duration: "6 weeks" },
        { name: "Business Strategy Specialization", provider: "University of Virginia", rating: "4.8/5", duration: "5 months" },
        { name: "Entrepreneurship", provider: "Wharton University", rating: "4.7/5", duration: "6 weeks" },
        { name: "Organizational Behavior", provider: "University of Minnesota", rating: "4.6/5", duration: "4 weeks" },
        { name: "Financial Accounting", provider: "University of Pennsylvania", rating: "4.8/5", duration: "5 weeks" },
      ]
    },
    {
      category: "Programming Languages",
      icon: "👨‍💻",
      courses: [
        { name: "Python for Everybody Specialization", provider: "University of Michigan", rating: "4.8/5", duration: "8 months" },
        { name: "Java Programming Fundamentals", provider: "University of Padua", rating: "4.6/5", duration: "4 weeks" },
        { name: "C++ For C Programmers", provider: "University of California", rating: "4.5/5", duration: "4 weeks" },
        { name: "JavaScript Basics", provider: "Codio", rating: "4.7/5", duration: "4 weeks" },
        { name: "Go Programming Language", provider: "Coursera", rating: "4.6/5", duration: "5 weeks" },
        { name: "Rust Programming", provider: "Coursera", rating: "4.8/5", duration: "6 weeks" },
      ]
    },
    {
      category: "Design & UX",
      icon: "🎨",
      courses: [
        { name: "UX Design Specialization", provider: "University of Michigan", rating: "4.8/5", duration: "6 months" },
        { name: "Google UX Design Professional Certificate", provider: "Google", rating: "4.7/5", duration: "6 months" },
        { name: "Graphic Design Basics", provider: "California College of the Arts", rating: "4.6/5", duration: "4 weeks" },
        { name: "Web Design for Everybody", provider: "University of Michigan", rating: "4.7/5", duration: "6 months" },
        { name: "UI/UX Design", provider: "Coursera", rating: "4.7/5", duration: "4 weeks" },
        { name: "Figma Design Tool Masterclass", provider: "Coursera", rating: "4.8/5", duration: "5 weeks" },
      ]
    },
    {
      category: "Business Analytics",
      icon: "📊",
      courses: [
        { name: "Business Analytics Specialization", provider: "University of Pennsylvania", rating: "4.8/5", duration: "8 months" },
        { name: "Data Analysis with Python", provider: "IBM", rating: "4.7/5", duration: "4 weeks" },
        { name: "SQL for Data Analysis", provider: "University of Colorado", rating: "4.6/5", duration: "4 weeks" },
        { name: "Excel Skills for Data Analytics", provider: "Macquarie University", rating: "4.8/5", duration: "5 weeks" },
        { name: "Power BI Desktop", provider: "Coursera", rating: "4.7/5", duration: "6 weeks" },
        { name: "Tableau Data Visualization", provider: "Coursera", rating: "4.8/5", duration: "4 weeks" },
      ]
    },
    {
      category: "Cybersecurity",
      icon: "🔒",
      courses: [
        { name: "Cybersecurity Specialization", provider: "University of Maryland", rating: "4.7/5", duration: "8 months" },
        { name: "Google Cybersecurity Professional Certificate", provider: "Google", rating: "4.8/5", duration: "6 months" },
        { name: "Ethical Hacking", provider: "Coursera", rating: "4.6/5", duration: "6 weeks" },
        { name: "Network Security", provider: "Coursera", rating: "4.7/5", duration: "5 weeks" },
        { name: "Cloud Security", provider: "Cloud Security Alliance", rating: "4.6/5", duration: "4 weeks" },
        { name: "Information Security Management", provider: "Coursera", rating: "4.7/5", duration: "4 weeks" },
      ]
    },
  ];

  // ✅ FIX: Alag timeouts use karo - pehle enquiry modal close, phir courses modal open
  const handleEnquirySubmit = () => {
    setEnquirySubmitted(true);

    // Step 1: 500ms baad enquiry modal band karo
    setTimeout(() => {
      setShowEnquiryModal(false);
      setEnquirySubmitted(false);
    }, 500);

    // Step 2: 800ms baad courses modal kholo (enquiry modal ke fully unmount hone ke baad)
    setTimeout(() => {
      setShowCoursesModal(true);
    }, 800);
  };

  return (
    <>
      {/* Main Coursera Section */}
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 sm:p-10 border border-orange-200 hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="flex items-start gap-4 mb-6">
          <span className="text-orange-600 font-bold text-3xl bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">2</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Free Coursera Access for Manipal Students</h3>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Manipal University</strong> offers <strong>premium Coursera access completely FREE</strong> to all enrolled students.
          Through this exclusive partnership with Coursera, you get unlimited access to <strong>world-class courses</strong> from top-tier institutions
          and leading tech companies — without paying a single rupee. This is a <strong>lifetime opportunity</strong> to upskill and enhance your career profile
          while you're still a student.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg p-5 border border-orange-100">
            <h4 className="font-bold text-orange-600 text-lg mb-3 flex items-center gap-2">
              <span>📚</span> What You Get
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Access to 7000+ courses across all domains</span></li>
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Industry-recognized certificates from major companies</span></li>
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Specializations and professional certificates</span></li>
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Beginner to advanced level courses</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-5 border border-orange-100">
            <h4 className="font-bold text-orange-600 text-lg mb-3 flex items-center gap-2">
              <span>🎯</span> Key Advantages
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Zero subscription cost — completely free</span></li>
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Learn from Google, Amazon, IBM, Microsoft experts</span></li>
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Flexible, self-paced learning schedule</span></li>
              <li className="flex gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Certificates add value to your resume</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-100 rounded-lg p-6 mb-8 border-l-4 border-orange-600">
          <h4 className="font-bold text-gray-900 text-lg mb-3">🚀 Why This Matters for Your Career</h4>
          <p className="text-gray-800 leading-relaxed">
            While pursuing your degree, you can simultaneously <strong>develop in-demand skills</strong> in AI, Data Science, Web Development,
            Cloud Computing, Digital Marketing, and 100+ other fields. When you graduate, your resume will showcase not just your degree
            but also <strong>10-15 verified Coursera certificates</strong>, making you a standout candidate for top employers.
            Companies like Google, Amazon, and Meta actively recognize Coursera credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
            <p className="text-3xl font-bold text-orange-600 mb-2">7000+</p>
            <p className="text-gray-700 font-medium">Courses Available</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
            <p className="text-3xl font-bold text-orange-600 mb-2">₹0</p>
            <p className="text-gray-700 font-medium">Cost for Students</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
            <p className="text-3xl font-bold text-orange-600 mb-2">360+</p>
            <p className="text-gray-700 font-medium">Partner Universities</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <h4 className="font-bold text-gray-900 text-lg">📋 Popular Course Categories:</h4>
          <div className="flex flex-wrap gap-2">
            {["Data Science", "AI & Machine Learning", "Web Development", "Cloud Computing", "Digital Marketing", "Business Analytics", "Python Programming", "UX Design", "Cybersecurity"].map((category, idx) => (
              <span key={idx} className="bg-orange-200 text-orange-900 px-4 py-2 rounded-full text-sm font-medium">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mb-8">
          <h4 className="font-bold text-gray-900 text-lg mb-3">⚡ How to Get Started</h4>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Fill the enquiry form below to express your interest</li>
            <li>Explore our complete course catalog with 9+ categories</li>
            <li>Log in to your Manipal University student portal</li>
            <li>Access your free Coursera account with your credentials</li>
            <li>Start learning and earning certificates today!</li>
          </ol>
        </div>

        <p className="text-gray-600 text-center text-sm italic mb-6">
          This benefit is exclusive to Manipal University students and is valid throughout your enrollment period.
        </p>

        <button
          onClick={() => setShowEnquiryModal(true)}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer text-center"
        >
          Explore Free Coursera Courses Now →
        </button>
      </div>

      {/* ✅ FIX: modal prop hata diya — bahar click se close nahi hoga, aur overlapping issue bhi solve */}
      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                {enquirySubmitted ? '✓ Thank You!' : 'Get Free Coursera Access'}
              </DialogTitle>
            </DialogHeader>
            {!enquirySubmitted ? (
              <EnquiryForm
                onSubmitted={handleEnquirySubmit}
                formType="general"
                universityName="Manipal University Jaipur"
              />
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <p className="text-lg font-semibold text-gray-700 mb-2">Enquiry Successfully Submitted!</p>
                <p className="text-gray-500">Courses catalog load ho raha hai...</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}

      {/* ✅ FIX: modal prop hata diya — properly render hoga ab */}
      {/* Courses Modal */}
      {showCoursesModal && (
        <Dialog open={showCoursesModal} onOpenChange={setShowCoursesModal}>
          <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-0 z-[50001]">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-8 text-white sticky top-0 z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">🎓 Explore Coursera Courses</h2>
                  <p className="text-orange-100">7000+ world-class courses available FREE for Manipal students</p>
                </div>
                <button
                  onClick={() => setShowCoursesModal(false)}
                  className="text-2xl font-bold hover:text-orange-200 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Courses Content */}
            <div className="p-8 space-y-8">
              {courseCategories.map((category, catIdx) => (
                <div key={catIdx} className="border-b-2 border-orange-100 pb-8 last:border-b-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-3xl">{category.icon}</span>
                    {category.category}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.courses.map((course, courseIdx) => (
                      <div
                        key={courseIdx}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base leading-tight">
                          {course.name}
                        </h4>
                        <div className="space-y-2 text-xs sm:text-sm">
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600">
                              <span className="font-semibold">By:</span> {course.provider}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              <span className="font-semibold">Duration:</span> {course.duration}
                            </span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-semibold">
                              ⭐ {course.rating}
                            </span>
                          </div>
                        </div>
                        <button className="mt-3 w-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold py-2 rounded transition text-xs sm:text-sm">
                          View Course
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 sticky bottom-0">
              <button
                onClick={() => setShowCoursesModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition"
              >
                Close
              </button>
              <button
                onClick={() => setShowCoursesModal(false)}
                className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 rounded-lg transition"
              >
                Start Learning Now →
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CourseraSection;