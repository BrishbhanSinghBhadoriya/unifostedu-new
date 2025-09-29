import React from 'react';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: "FAQs | Online University Degrees & Career Counseling - UNIFOST",
  description: "Find answers to frequently asked questions about online university degrees, UGC-approved courses, career counseling, admission process, and more. Get expert guidance for your education journey.",
  keywords: [
    "online university degrees FAQ",
    "UGC approved courses questions",
    "career counseling FAQ",
    "online education help",
    "university admission questions",
    "distance learning FAQ",
    "online degree guidance",
    "education counseling help"
  ],
  openGraph: {
    title: "FAQs | Online University Degrees & Career Counseling - UNIFOST",
    description: "Find answers to frequently asked questions about online university degrees, UGC-approved courses, career counseling, and more.",
    images: ["/images/faq-hero.webp"],
  },
};

const FAQPage = () => {
  const generalFAQs = [
    {
      question: "What is UNIFOST and how can it help me?",
      answer: "UNIFOST is India's leading EdTech platform that helps students choose the right online university degrees through expert career counseling. We provide personalized guidance, university comparison, and end-to-end support for UGC-approved online programs."
    },
    {
      question: "Are online university degrees recognized and valid?",
      answer: "Yes, all online university degrees we recommend are UGC-approved and fully recognized. These degrees have the same value as traditional campus programs and are accepted by employers, government organizations, and for higher studies worldwide."
    },
    {
      question: "How is online learning different from distance learning?",
      answer: "Online learning uses digital platforms with live classes, interactive content, and real-time interaction with faculty. Distance learning traditionally used printed materials and limited interaction. Online learning offers more engagement, flexibility, and modern learning tools."
    },
    {
      question: "Can I work while pursuing an online degree?",
      answer: "Absolutely! Online degrees are specifically designed for working professionals. They offer flexible schedules, recorded lectures, and weekend classes, allowing you to balance work and studies effectively."
    },
    {
      question: "What courses are available through online universities?",
      answer: "We offer a wide range of UGC-approved online courses including MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and specialized programs in various fields. All courses are from top-ranked universities with industry-relevant curriculum."
    }
  ];

  const admissionFAQs = [
    {
      question: "What are the admission requirements for online degrees?",
      answer: "Admission requirements vary by program and university. Generally, you need relevant educational qualifications (10+2 for UG, graduation for PG), minimum percentage requirements, and valid documents. Our counselors will guide you through specific requirements for your chosen program."
    },
    {
      question: "How do I apply for online university degrees?",
      answer: "The application process is simple: 1) Choose your program and university, 2) Check eligibility requirements, 3) Fill the application form, 4) Submit required documents, 5) Pay application fees, 6) Attend counseling/interview if required. Our team provides complete guidance throughout this process."
    },
    {
      question: "Is there an entrance exam for online degrees?",
      answer: "Most online programs don't require entrance exams, but some universities may conduct aptitude tests or interviews. The admission process is generally merit-based on your academic qualifications. Our counselors will inform you about specific requirements for your chosen program."
    },
    {
      question: "What documents are required for admission?",
      answer: "Common documents include: 10th and 12th mark sheets, graduation certificates (for PG), identity proof, address proof, passport-size photographs, and any additional documents specified by the university. We provide a complete checklist for your application."
    },
    {
      question: "When do online degree admissions start?",
      answer: "Most universities have multiple admission cycles throughout the year. Generally, admissions are open in January, July, and sometimes in April/October. We keep you updated about admission deadlines and help you apply at the right time."
    }
  ];

  const careerFAQs = [
    {
      question: "What career opportunities are available after online degrees?",
      answer: "Online degrees open doors to the same career opportunities as traditional degrees. You can work in corporate sectors, government organizations, start your own business, or pursue higher studies. The degree value is the same, and employers recognize UGC-approved online degrees."
    },
    {
      question: "How does career counseling help in choosing the right degree?",
      answer: "Our career counselors assess your interests, skills, career goals, and academic background to recommend the most suitable programs. They provide insights about industry trends, job prospects, salary expectations, and help you make informed decisions about your education and career path."
    },
    {
      question: "Do online degrees help in getting jobs?",
      answer: "Yes, UGC-approved online degrees are fully recognized by employers. Many companies actively recruit from online programs. We also provide placement assistance, resume building, interview preparation, and connect you with our corporate partners for better job opportunities."
    },
    {
      question: "What is the salary potential after online degrees?",
      answer: "Salary depends on the program, university reputation, your skills, and experience. Generally, online degree holders earn similar salaries to traditional degree holders. MBA graduates can expect ₹4-15 lakhs, BBA graduates ₹3-8 lakhs, and technical degree holders ₹3-12 lakhs depending on the role and company."
    },
    {
      question: "Can I pursue higher studies after an online degree?",
      answer: "Absolutely! Online degrees are recognized for higher studies including master's programs, PhD, professional certifications, and international studies. Many students pursue advanced degrees or specialized certifications after completing their online undergraduate or postgraduate programs."
    }
  ];

  const technicalFAQs = [
    {
      question: "What technical requirements do I need for online learning?",
      answer: "You need a computer/laptop with internet connection, webcam, microphone, and basic computer skills. Most universities provide learning management systems that work on any device. We also provide technical support to help you get started with online learning."
    },
    {
      question: "How are online classes conducted?",
      answer: "Online classes include live lectures, recorded videos, interactive sessions, assignments, and virtual labs. You can attend live classes or watch recordings later. Classes are conducted through user-friendly platforms with chat features, screen sharing, and interactive tools."
    },
    {
      question: "What if I miss a live class?",
      answer: "No problem! Most universities record all live classes and make them available for later viewing. You can access recorded lectures, study materials, and assignments at your convenience. This flexibility is one of the key advantages of online learning."
    },
    {
      question: "How do I submit assignments and take exams online?",
      answer: "Assignments are submitted through the university's learning management system. Exams are conducted online with proctoring software to ensure integrity. Some universities also offer offline exam options at designated centers. We guide you through all technical processes."
    },
    {
      question: "Is there technical support available?",
      answer: "Yes, universities provide technical support for students. Additionally, our team offers technical assistance to help you with any issues related to online learning platforms, video conferencing, or other technical requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001e3c] to-[#003b6c] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about online university degrees, UGC-approved courses, career counseling, and admission processes. Get expert guidance for your education journey.
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <FAQ 
        faqs={generalFAQs}
        title="General Questions About Online University Degrees"
      />

      {/* Admission FAQs */}
      <FAQ 
        faqs={admissionFAQs}
        title="Admission Process & Requirements"
      />

      {/* Career FAQs */}
      <FAQ 
        faqs={careerFAQs}
        title="Career Opportunities & Job Prospects"
      />

      {/* Technical FAQs */}
      <FAQ 
        faqs={technicalFAQs}
        title="Technical Requirements & Online Learning"
      />

      {/* Contact CTA */}
      <section className="bg-[#001e3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our expert career counselors are here to help you with personalized guidance and answers to all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/bookdemo"
              className="px-8 py-3 bg-[#00ffe0] text-[#001e3c] font-semibold rounded-full hover:bg-[#00d4c4] transition-colors"
            >
              Book Free Counseling
            </a>
            <a
              href="tel:+919354735410"
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Call Us: +91 93547 35410
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
