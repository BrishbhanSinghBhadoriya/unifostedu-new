'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EnquiryForm from "@/components/EnquiryForm";
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CareerAssessmentModal from "@/components/CareerAssessmentModal";
import { 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  ArrowRight,
  Download,
  Phone,
  Mail,
  Zap,
  Users,
  Shield
} from 'lucide-react';

type TestimonialType = {
  id: number;
  name: string;
  company: string;
  quote: string;
  role?: string;
};

type CareerStageType = {
  id: string;
  title: string;
  description: string;
};

type AssessmentCardType = {
  id: number;
  title: string;
  description: string;
  cta: string;
  options: Array<{
    id: number;
    title: string;
    lang: string;
  }>;
};

const AnimatedNumber = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = 0;
    const increment = target / (duration / 50);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}+</span>;
};

export default function CareerFinderPro() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState<any>("getStarted");
  const [selectedAssessment, setSelectedAssessment] = useState<AssessmentCardType | null>(null);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
const [showCareerAssessment, setShowCareerAssessment] = useState(false);
const [selectedCareerOption, setSelectedCareerOption] = useState<{
  id: number;
  title: string;
  lang: string;
} | null>(null);
const assessments: AssessmentCardType[] = [
  {
    id: 1,
    title: 'Career Analysis for 11th & 12th Class',
    description: 'Are you a high school student? Looking for a bright future? Take our assessment and know your capacity.',
    cta: 'Start Now',
    options: [
      // PCM (Physics, Chemistry, Maths) Students
      { id: 1, title: "Career Planning for 11th or 12th PCM (Maths) Students - Engineering Path", lang: "ENGLISH" },
      { id: 2, title: "Career Planning for 11th or 12th PCM (Maths) Students - IIT JEE Preparation", lang: "HINDI" },
      { id: 3, title: "Career Planning for 11th or 12th PCM (Maths) Students - Computer Science", lang: "ENGLISH" },
      { id: 4, title: "Career Planning for 11th or 12th PCM (Maths) Students - Data Science & AI", lang: "TAMIL" },
      
      // PCB (Physics, Chemistry, Biology) Students
      { id: 5, title: "Career Planning for 11th or 12th PCB (Bio) Students - Medical Path", lang: "GUJARATI" },
      { id: 6, title: "Career Planning for 11th or 12th PCB (Bio) Students - NEET Preparation", lang: "GUJARATI" },
      { id: 7, title: "Career Planning for 11th or 12th PCB (Bio) Students - Biotechnology", lang: "MARATHI" },
      { id: 8, title: "Career Planning for 11th or 12th PCB (Bio) Students - Nursing & Healthcare", lang: "TAMIL" },
      
      // Commerce Students
      { id: 9, title: "Career Planning for 11th or 12th Commerce Students - CA/Accountancy", lang: "TAMIL" },
      { id: 10, title: "Career Planning for 11th or 12th Commerce Students - Finance & Banking", lang: "HINDI" },
      { id: 11, title: "Career Planning for 11th or 12th Commerce Students - Business Administration", lang: "KANNADA" },
      { id: 12, title: "Career Planning for 11th or 12th Commerce Students - Economics & Investment", lang: "TAMIL" },
      
      // Arts Students
      { id: 13, title: "Career Planning for 11th or 12th Arts Students - Civil Services", lang: "ENGLISH" },
      { id: 14, title: "Career Planning for 11th or 12th Arts Students - Journalism & Media", lang: "HINDI" },
      { id: 15, title: "Career Planning for 11th or 12th Arts Students - Psychology & Counseling", lang: "TELUGU" },
      { id: 16, title: "Career Planning for 11th or 12th Arts Students - History & Archaeology", lang: "GUJARATI" },
      
      // PCMB (All Four Subjects)
      { id: 17, title: "Career Planning for 11th or 12th PCMB Students - Multiple Options", lang: "MARATHI" },
      { id: 18, title: "Career Planning for 11th or 12th PCMB Students - Science & Commerce", lang: "KANNADA" },
      { id: 19, title: "Career Planning for 11th or 12th PCB (Bio) Students - Pharmacy Path", lang: "TELUGU" },
      { id: 20, title: "Career Planning for 11th or 12th PCM (Maths) Students - Actuarial Science", lang: "PUNJABI" }
    ]
  },
  
  {
    id: 2,
    title: 'Career Analysis for Graduates',
    description: 'A graduate looking for career clarity? Click on \'Start Now\' and find your perfect path.',
    cta: 'Start Now',
    options: [
      // MBA & Management
      { id: 21, title: "Management & MBA Entrance Planning - CAT/MAT/GMAT", lang: "ENGLISH" },
      { id: 22, title: "Management & MBA Entrance Planning - General Management", lang: "HINDI" },
      { id: 23, title: "Management & MBA Entrance Planning - Executive MBA", lang: "ENGLISH" },
      { id: 24, title: "Management & MBA Entrance Planning - Specialized MBA (Finance, Marketing, HR)", lang: "TAMIL" },
      
      // Government Jobs
      { id: 25, title: "Government Job Preparation Analysis - UPSC Civil Services", lang: "ENGLISH" },
      { id: 26, title: "Government Job Preparation Analysis - SSC Exams", lang: "HINDI" },
      { id: 27, title: "Government Job Preparation Analysis - Banking & Insurance", lang: "GUJARATI" },
      { id: 28, title: "Government Job Preparation Analysis - Railway & Defense", lang: "MARATHI" },
      
      // Technical & IT Career
      { id: 29, title: "Technical & IT Career Path - Full Stack Development", lang: "ENGLISH" },
      { id: 30, title: "Technical & IT Career Path - Cloud Computing & DevOps", lang: "KANNADA" },
      { id: 31, title: "Technical & IT Career Path - Data Science & Machine Learning", lang: "TELUGU" },
      { id: 32, title: "Technical & IT Career Path - Cybersecurity & Ethical Hacking", lang: "TAMIL" },
      
      // Creative & Design
      { id: 33, title: "Creative Arts & Design Opportunities - UI/UX Design", lang: "ENGLISH" },
      { id: 34, title: "Creative Arts & Design Opportunities - Graphic Design & Branding", lang: "HINDI" },
      { id: 35, title: "Creative Arts & Design Opportunities - Animation & VFX", lang: "PUNJABI" },
      { id: 36, title: "Creative Arts & Design Opportunities - Digital Marketing & Content Creation", lang: "GUJARATI" },
      
      // Professional Services
      { id: 37, title: "Professional Services - Chartered Accountancy (CA)", lang: "ENGLISH" },
      { id: 38, title: "Professional Services - Company Secretary (CS)", lang: "HINDI" },
      { id: 39, title: "Professional Services - Legal Practice & Law", lang: "KANNADA" },
      { id: 40, title: "Professional Services - Consulting & Audit", lang: "MARATHI" }
    ]
  },
  
  {
    id: 3,
    title: 'Career Analysis for Professionals',
    description: 'Are you already a professional but seeking to explore further in your desired field? Don\'t delay—take our assessment now.',
    cta: 'Start Now',
    options: [
      // Executive Leadership
      { id: 41, title: "Executive Leadership Assessment - Senior Management Path", lang: "ENGLISH" },
      { id: 42, title: "Executive Leadership Assessment - C-Suite Development", lang: "HINDI" },
      { id: 43, title: "Executive Leadership Assessment - Director & VP Track", lang: "ENGLISH" },
      { id: 44, title: "Executive Leadership Assessment - Entrepreneurship & Business Ownership", lang: "TAMIL" },
      
      // Career Pivot
      { id: 45, title: "Mid-Career Pivot Analysis - Technology Transition", lang: "ENGLISH" },
      { id: 46, title: "Mid-Career Pivot Analysis - Finance & Banking Career Switch", lang: "HINDI" },
      { id: 47, title: "Mid-Career Pivot Analysis - Sales & Business Development", lang: "GUJARATI" },
      { id: 48, title: "Mid-Career Pivot Analysis - Human Resources & Talent Management", lang: "MARATHI" },
      
      // Skill Development
      { id: 49, title: "Skill Gap & Promotion Readiness - Technical Skills Assessment", lang: "KANNADA" },
      { id: 50, title: "Skill Gap & Promotion Readiness - Leadership & Soft Skills", lang: "TELUGU" },
      { id: 51, title: "Skill Gap & Promotion Readiness - Digital Transformation Skills", lang: "TAMIL" },
      { id: 52, title: "Skill Gap & Promotion Readiness - Industry-Specific Certifications", lang: "PUNJABI" },
      
      // Specialization
      { id: 53, title: "Specialization Pathways - Niche Market Expertise", lang: "ENGLISH" },
      { id: 54, title: "Specialization Pathways - Advanced Certifications", lang: "HINDI" },
      { id: 55, title: "Specialization Pathways - International Career Opportunities", lang: "GUJARATI" },
      { id: 56, title: "Specialization Pathways - Research & Development Career", lang: "MARATHI" },
      
      // Work-Life Balance
      { id: 57, title: "Work-Life Balance Analysis - Remote Work Opportunities", lang: "ENGLISH" },
      { id: 58, title: "Work-Life Balance Analysis - Consulting & Project-Based Work", lang: "KANNADA" },
      { id: 59, title: "Work-Life Balance Analysis - Part-Time & Flexible Careers", lang: "TELUGU" },
      { id: 60, title: "Work-Life Balance Analysis - Sabbatical & Career Break Planning", lang: "TAMIL" }
    ]
  },
  
  {
    id: 4,
    title: 'Personality + Interest + EQ Assessment',
    description: 'This assessment helps to discover the passion to find the right career. This tool analyzes your habits, thinking, emotions, creativity, communication, interests, skills, and morals.',
    cta: 'Start Now',
    options: [
      // Personality Profiling
      { id: 61, title: "Comprehensive Personality Profiling - Myers-Briggs Type Indicator", lang: "ENGLISH" },
      { id: 62, title: "Comprehensive Personality Profiling - Big Five Personality Assessment", lang: "HINDI" },
      { id: 63, title: "Comprehensive Personality Profiling - DISC Behavioral Analysis", lang: "ENGLISH" },
      { id: 64, title: "Comprehensive Personality Profiling - Strengths & Weaknesses Mapping", lang: "TAMIL" },
      
      // Emotional Intelligence (EQ)
      { id: 65, title: "Emotional Intelligence (EQ) Test - Self-Awareness Assessment", lang: "GUJARATI" },
      { id: 66, title: "Emotional Intelligence (EQ) Test - Relationship Management Skills", lang: "MARATHI" },
      { id: 67, title: "Emotional Intelligence (EQ) Test - Emotional Regulation & Resilience", lang: "KANNADA" },
      { id: 68, title: "Emotional Intelligence (EQ) Test - Social Skills & Empathy", lang: "TELUGU" },
      
      // Interest Inventory
      { id: 69, title: "Interest Inventory Mapping - Strong Interest Inventory", lang: "ENGLISH" },
      { id: 70, title: "Interest Inventory Mapping - Career Interest Profiler", lang: "HINDI" },
      { id: 71, title: "Interest Inventory Mapping - Passion & Hobby Analysis", lang: "TAMIL" },
      { id: 72, title: "Interest Inventory Mapping - Work Style Preference", lang: "PUNJABI" },
      
      // Values & Morals
      { id: 73, title: "Values & Morals Assessment - Life Values Alignment", lang: "ENGLISH" },
      { id: 74, title: "Values & Morals Assessment - Ethical Framework Analysis", lang: "GUJARATI" },
      { id: 75, title: "Values & Morals Assessment - Purpose & Meaning Exploration", lang: "MARATHI" },
      { id: 76, title: "Values & Morals Assessment - Social Impact & Sustainability Focus", lang: "KANNADA" },
      
      // Creativity & Innovation
      { id: 77, title: "Creativity & Innovation Assessment - Creative Thinking Test", lang: "TELUGU" },
      { id: 78, title: "Creativity & Innovation Assessment - Problem Solving Skills", lang: "ENGLISH" },
      { id: 79, title: "Creativity & Innovation Assessment - Innovation Potential", lang: "HINDI" },
      { id: 80, title: "Creativity & Innovation Assessment - Artistic & Design Aptitude", lang: "TAMIL" }
    ]
  },
  
  {
    id: 5,
    title: 'Career Analysis for Homemakers and Sabbatical',
    description: 'Are you looking for a fulfilling career as a dedicated homemaker? Find answers to all your queries and personalized career guidance in a single click.',
    cta: 'Start Now',
    options: [
      // Work from Home
      { id: 81, title: "Work from Home Opportunities - Online Tutoring & Education", lang: "ENGLISH" },
      { id: 82, title: "Work from Home Opportunities - Content Writing & Blogging", lang: "HINDI" },
      { id: 83, title: "Work from Home Opportunities - Virtual Assistance & Administration", lang: "TAMIL" },
      { id: 84, title: "Work from Home Opportunities - Digital Marketing & Social Media Management", lang: "GUJARATI" },
      
      // Freelancing & Gig Economy
      { id: 85, title: "Freelancing & Gig Economy Path - Graphic Design & Creative Services", lang: "MARATHI" },
      { id: 86, title: "Freelancing & Gig Economy Path - Web Development & Coding", lang: "KANNADA" },
      { id: 87, title: "Freelancing & Gig Economy Path - Translation & Language Services", lang: "TELUGU" },
      { id: 88, title: "Freelancing & Gig Economy Path - Consulting & Expert Services", lang: "PUNJABI" },
      
      // Re-entry into Corporate
      { id: 89, title: "Re-entry into Corporate World - Part-Time Corporate Roles", lang: "ENGLISH" },
      { id: 90, title: "Re-entry into Corporate World - Contract & Project-Based Work", lang: "HINDI" },
      { id: 91, title: "Re-entry into Corporate World - Skill Upgrading & Training Programs", lang: "GUJARATI" },
      { id: 92, title: "Re-entry into Corporate World - Women-Centric Job Opportunities", lang: "MARATHI" },
      
      // Entrepreneurship
      { id: 93, title: "Entrepreneurship & Self-Employment - Starting Your Own Business", lang: "KANNADA" },
      { id: 94, title: "Entrepreneurship & Self-Employment - Home-Based Business Ideas", lang: "TELUGU" },
      { id: 95, title: "Entrepreneurship & Self-Employment - E-Commerce & Online Store", lang: "TAMIL" },
      { id: 96, title: "Entrepreneurship & Self-Employment - Social Enterprise & NGO Work", lang: "ENGLISH" },
      
      // Passion Projects
      { id: 97, title: "Passion Projects & Personal Growth - Creative Pursuits", lang: "HINDI" },
      { id: 98, title: "Passion Projects & Personal Growth - Hobby Monetization", lang: "PUNJABI" },
      { id: 99, title: "Passion Projects & Personal Growth - Community Service & Volunteering", lang: "GUJARATI" },
      { id: 100, title: "Passion Projects & Personal Growth - Personal Development & Wellness", lang: "MARATHI" }
    ]
  }
];

  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: 'Deepansh',
      company: 'HCL',
      quote: 'What an amazing career suitability tool to help you understand yourself & get an idea of ideal career that you\'re suited for!'
    },
    {
      id: 2,
      name: 'Mudit',
      company: 'Accenture',
      quote: 'I like how detailed it was. Not just, \'what are you interested in?\' but how your personality & personal preferences play into a career fit.'
    },
    {
      id: 3,
      name: 'Piyush',
      company: 'Infosys',
      quote: 'Really Outstanding! I can see my characteristics & all the jobs that I can obtain. Now I can see options right in front of me.'
    },
    {
      id: 4,
      name: 'Ananya',
      company: 'Online BBA, Gwalior',
      quote: 'Finding yourself is the beginning of a successful career. Know your strengths, Know your Interest, Know your career.'
    }
  ];

  const careerStages: CareerStageType[] = [
    {
      id: 'professionals',
      title: 'Working Professionals',
      description: 'Be your best self at work. Learn what makes you unique and how well-suited you are to your past, current, and future career choices.'
    },
    {
      id: 'college',
      title: 'College Students & Graduates',
      description: 'Unsure about what to do after college? See the range of careers you can pursue with your interests, personality, and education.'
    },
    {
      id: 'changers',
      title: 'Career Changers',
      description: 'Looking to make a career change? Thinking about going back to school? Career Finder will point you in the right direction.'
    },
    {
      id: 'highschool',
      title: 'High School Students',
      description: 'Discover your true potential and all of the options you have after high school. Then see which path is right for you.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Sora:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Sora', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2563eb, #0891b2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navigation */}
    

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                  🚀 Career Discovery Platform
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black leading-tight">
                Discover <br />
                <span className="gradient-text">Your Perfect Career</span>
                <br />
                <span className="text-gray-900">in 25 Mins</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Make Smart Decisions with our AI-Powered Career Guidance Tools & Expert Career Counsellors
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => {
                    setModalType("getStarted");
                    setShowEnquiryModal(true);
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition text-base"
                >
                  Get Started
                  <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition text-base">
                  Learn More
                </button>
              </div>

              <div className="flex gap-6 pt-3 flex-wrap">
                {[
                  { icon: '👥', text: '500K+ Students' },
                  { icon: '⭐', text: '4.9/5 Rating' },
                  { icon: '🎯', text: '100% Confidential' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="text-xl">{stat.icon}</span>
                    {stat.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
           <div className="relative h-80 md:h-96 animate-slideInRight">
  <img
    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1774420382/carreartest_iutdzy.png"
    alt="Career Banner"
    className="w-full h-full object-cover rounded-2xl shadow-lg"
  />
</div>
          </div>
        </div>
      </section>

      {/* Three Column Feature Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: '01',
                title: 'Assessment',
                
                description: 'Reflect upon your past experiences and future goals, and learn what makes you unique.'
              },
              {
                number: '02',
                title: 'Career Options',
            
                description: 'Find the path that\'s right for you based on your strengths, interests, and personality.'
              },
              {
                number: '03',
                title: 'Library',
            
                description: 'Explore over 1,000 careers and degrees. Learn who thrives in them and why.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-6 group cursor-pointer">
                <div className="text-3xl font-black text-black  transition">
                  {feature.number}
                  
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Psychometric Assessment Section */}
<section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
        Psychometric <span className="gradient-text">Career Assessments</span>
      </h2>
      <p className="text-lg text-gray-600">Choose an assessment that fits your career stage</p>
    </div>

    {/* UPDATED GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assessments.map((assessment, index) => {

        const bgColors = [
          "bg-blue-50 border-blue-100",
          "bg-green-50 border-green-100",
          "bg-yellow-50 border-yellow-100",
          "bg-purple-50 border-purple-100",
          "bg-pink-50 border-pink-100",
          "bg-cyan-50 border-cyan-100"
        ];

        return (
          <div
            key={assessment.id}
            className={`card-hover rounded-2xl p-8 shadow-md border transition-all hover:shadow-xl hover:-translate-y-1 ${bgColors[index % bgColors.length]}`}
          >
            <div className="mb-6 flex items-start justify-between">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-xl shadow-lg">
                {assessment.id}
              </span>
              <span className="text-4xl opacity-10">📋</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {assessment.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {assessment.description}
            </p>

            <button 
              onClick={() => {
                setSelectedAssessment(assessment);
                setShowAssessmentModal(true);
              }}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition group"
            >
              {assessment.cta}
              <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
            </button>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Success Stories Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-lg text-gray-600">Hear from students who found their perfect career</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="card-hover bg-white rounded-2xl p-8 border border-gray-200 shadow-md cursor-pointer"
                onClick={() => setActiveTestimonial(idx)}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  {testimonial.company && (
                    <p className="text-sm text-gray-500 mt-1">at {testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-gray-400 font-bold text-sm tracking-widest hover:text-blue-600 transition uppercase">
              VIEW ALL STORIES →
            </button>
          </div>
        </div>
      </section>

      {/* Millions Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        </div>

        <div className="relative max-w-5xl mx-auto px-2 sm:px-3 lg:px-4 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            We've helped <br />
            <span className="inline-block">
              <AnimatedNumber target={1000000} /> Students
            </span>
            <br />
            find their ideal careers.
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of successful students who discovered their perfect career path
          </p>
          <button 
            onClick={() => {
              setModalType("getStarted");
              setShowEnquiryModal(true);
            }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition shadow-xl"
          >
            Start Your Assessment Now
          </button>
        </div>
      </section>

      {/* Career Stages Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 text-center mb-16">
            For every <span className="gradient-text">career stage</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerStages.map((stage) => (
              <div
                key={stage.id}
                className="card-hover group bg-white rounded-2xl p-8 shadow-md border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div />
                  <span className="text-5xl opacity-10 group-hover:opacity-20 transition">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {stage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16">
            Why <span className="gradient-text">trust us?</span>
          </h2>

          <div className="space-y-12">
            {[
              {
                icon: Users,
                title: 'Built by Expert Career Counselors & Data Scientists',
                description: 'All Questions are unique & have a deep meaning to understand the students.'
              },
              {
                icon: Zap,
                title: 'Over 400 million questions answered',
                description: 'The world of work changes in real time — and so do our analytics. Our algorithms continuously improve with millions of daily data points.'
              },
              {
                icon: Shield,
                title: 'Your data is safe with us',
                description: 'We firmly believe that you own your data, not us. We never sell your personal data to third parties.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white group-hover:scale-110 transition">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal}>
  <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-6 md:my-12 p-4 sm:p-6">
    <DialogHeader>
      <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
        {modalType === "getStarted" ? "Get Started with Unifost" : "Schedule a Video Call"}
      </DialogTitle>
    </DialogHeader>
    <EnquiryForm 
      formType={modalType}
      onSubmitted={() => {
        setShowEnquiryModal(false);
        toast.success("Our counselors will connect with you as soon as possible", {
          style: {
            fontSize: '25px',
            fontWeight: 'bold',
            padding: '16px 24px',
          },
          icon: '✅',
        });
        
        setTimeout(() => {
          if (selectedCareerOption) {
            setShowCareerAssessment(true);
          }
        }, 800);
      }}
    />
  </DialogContent>
</Dialog>

{/* Assessment Detail Modal */}
<Dialog open={showAssessmentModal} onOpenChange={setShowAssessmentModal}>
  <DialogContent className="max-w-[98vw] sm:max-w-[95vw] lg:max-w-[90vw] xl:max-w-[1300px] w-full p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
    <DialogHeader className="px-8 py-5 border-b bg-white sticky top-0 z-10 flex flex-row items-center justify-between">
      <DialogTitle className="text-xl font-bold text-gray-900 tracking-tight">
        {selectedAssessment?.title}
      </DialogTitle>
    </DialogHeader>

    {/* Main Body — fixed height, side-by-side */}
    <div className="flex flex-col lg:flex-row" style={{ height: "80vh" }}>

     {/* LEFT — Only Image Full Cover */}
<div className="w-full lg:w-[260px] lg:min-w-[260px] h-full flex items-center justify-center flex-shrink-0">
  <img
    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1774434382/endLessCareear_ignwn5.png"
    alt="Career Illustration"
    className="w-full h-full object-contain"
  />
</div>

      {/* RIGHT — Scrollable IDs grid */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            {selectedAssessment?.options?.length} Options Available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {selectedAssessment?.options?.map((option) => (
                <div 
                  key={option.id}
                  onClick={() => {
                    setShowAssessmentModal(false);
                    setModalType("getStarted");
                    setShowEnquiryModal(true);
                    setSelectedCareerOption(option);
                  }}
                  className="group cursor-pointer p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
                >
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-black tracking-wide mb-3">
                  # {option.id}
                </span>
                <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">
                  {option.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{option.lang}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase group-hover:text-blue-400 transition-colors">
                  {option.lang}
                </span>
                <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <ArrowRight className="text-blue-500 group-hover:text-white transition-colors" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DialogContent>
  </Dialog>

  <CareerAssessmentModal 
    open={showCareerAssessment} 
    onOpenChange={setShowCareerAssessment} 
    selectedOption={selectedCareerOption} 
    assessmentTitle={selectedAssessment?.title || "Career Assessment"} 
  />
      </div>
    );
}