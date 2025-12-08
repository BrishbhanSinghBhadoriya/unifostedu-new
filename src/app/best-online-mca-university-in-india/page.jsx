"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
// Simulated components (replace with actual imports in your project)
const Card = ({ className, children }) => <div className={`rounded-lg ${className}`}>{children}</div>;
const CardContent = ({ className, children }) => <div className={className}>{children}</div>;
const Button = ({ className, children, onClick, size, variant }) => (
  <button className={`px-4 py-2 rounded-lg font-semibold transition-all ${className}`} onClick={onClick}>
    {children}
  </button>
);
const Input = ({ className, ...props }) => (
  <input className={`w-full px-3 py-2 border rounded-lg ${className}`} {...props} />
);
const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">{children}</label>
);
const Select = ({ children, onValueChange, value }) => {
  return (
    <select 
      className="w-full px-3 py-2 border rounded-lg bg-white"
      onChange={(e) => onValueChange(e.target.value)}
      value={value}
    >
      {children}
    </select>
  );
};
const SelectTrigger = ({ children }) => <>{children}</>;
const SelectContent = ({ children }) => <>{children}</>;
const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
const SelectValue = ({ placeholder }) => <option value="">{placeholder}</option>;
const Badge = ({ className, children }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${className}`}>{children}</span>
);
const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={className} data-active-tab={activeTab}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};
const TabsList = ({ children, className, activeTab, setActiveTab }) => (
  <div className={className}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);
const TabsTrigger = ({ value, children, className, activeTab, setActiveTab }) => (
  <button
    className={`${className} ${activeTab === value ? 'bg-blue-900 text-white' : ''}`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);
const TabsContent = ({ value, children, activeTab }) => (
  activeTab === value ? <div>{children}</div> : null
);

// Icons (simplified versions)
const GraduationCap = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
const Users = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const Globe = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Award = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const BookOpen = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const Star = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const CheckCircle = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Phone = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const Mail = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const MapPin = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ArrowRight = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const Menu = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const CheckCircle2 = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Laptop = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const Briefcase = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const TrendingUp = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const Calendar = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const CalendarDays = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const Clock = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const SECTION_ITEMS = [
  { id: "HeroSection", label: "Introduction" },
  { id: "Specializations", label: "Specializations" },
  { id: "highlights", label: "Key Highlights" },
  { id: "Fees", label: "Fees Structure" },
  { id: "Scholarship", label: "Scholarships" },
  { id: "AdmissionProcedure", label: "Admission Process" },
  { id: "Eligibility", label: "Eligibility" },
  { id: "Curriculum", label: "Curriculum" },
  { id: "PlacementRecord", label: "Placement Record" },
  { id: "FAQs", label: "FAQs" },
]; 

const AmityMCALandingPage = () => {
  const [openModal, setOpenModal] = useState(null);
  
  const [activeSection, setActiveSection] = useState(SECTION_ITEMS[0]?.id ?? null);
  const [openIndex, setOpenIndex] = useState(null);

  const specializations = [
    {
      name: "Machine Learning & AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "Software Engineering",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop",
      color: "bg-purple-50 border-purple-200",
    },
    {
      name: "Blockchain Technology & Management",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      color: "bg-green-50 border-green-200",
    },
    {
      name: "Cybersecurity with Collaboration from HCL Tech.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      color: "bg-red-50 border-red-200",
    },
    {
      name: "Financial Technology & AI In collaboration with Paytm)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      name: "Software Engineering",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      name: "Machine Learning & AI in collaboration with TCS iON",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      color: "bg-blue-50 border-blue-200",
    },
  ];

  const stats = [
    { number: "2 Years", label: "Program Duration", icon: Calendar },
    { number: "₹1.5-1.6L", label: "Total Program Fee", icon: Award },
    { number: "7+", label: "Specializations", icon: BookOpen },
    { number: "500+", label: "Hiring Partners", icon: Users },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "UGC & AICTE Approved",
      description: "Fully recognized degree equivalent to regular on-campus MCA",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "WASC, WES, and QAA accredited for international opportunities",
    },
    {
      icon: Laptop,
      title: "100% Online Learning",
      description: "350+ hours of recorded lectures with live interactive sessions",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description: "500+ hiring partners with dedicated career support services",
    },
  ];

  const faqData = [
    {
      question: "Is Amity Online MCA valid and recognized?",
      answer: "Yes, the Amity Online MCA is UGC-entitled, AICTE-approved, and NAAC A+ accredited. It holds the same value as a regular on-campus MCA degree and is accepted by employers and universities globally."
    },
    {
      question: "Can I work while pursuing Amity Online MCA?",
      answer: "Absolutely! The program is designed specifically for working professionals. All classes are online with flexible scheduling, allowing you to continue your job while studying."
    },
    {
      question: "What is the total fee for Amity Online MCA?",
      answer: "The total program fee is ₹1,60,000 (₹40,000 per semester). Discounts are available: ₹1,54,000 for annual payment and ₹1,50,000 for one-time payment. Zero-cost EMI options are also available."
    },
    {
      question: "Do I need Mathematics for MCA admission?",
      answer: "Students without Mathematics at 10+2 or graduation level can still apply after completing Amity's Bridge course successfully."
    },
    {
      question: "Is there an entrance exam for admission?",
      answer: "No entrance exam is required. Admission is based on merit in your qualifying degree (graduation marks)."
    },
    {
      question: "What specializations are offered in Amity Online MCA?",
      answer: "Seven specializations are available: General MCA, Machine Learning & AI, AR/VR, Blockchain Technology, Cybersecurity, Data Science, and Software Engineering."
    },
    {
      question: "Can I pursue PhD after Amity Online MCA?",
      answer: "Yes, you can pursue PhD in Computer Science or related fields from any recognized university, as Amity Online MCA is a valid postgraduate degree."
    },
    {
      question: "What is the placement support provided?",
      answer: "Amity Online has 500+ hiring partners and offers comprehensive placement support including virtual job fairs, resume building workshops, mock interviews, and career counseling."
    },
    {
      question: "Are physical books provided in the online MCA program?",
      answer: "Yes, Amity Online provides physical books delivered to your doorstep along with eBooks, audiobooks, and digital study materials."
    },
    {
      question: "What is the average salary after Amity Online MCA?",
      answer: "Freshers typically earn ₹4-7 LPA, while experienced professionals can earn ₹8-15 LPA. The highest package from Amity Online is ₹18 LPA."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setOpenModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!SECTION_ITEMS.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-45% 0px -45% 0px" }
    );

    SECTION_ITEMS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top Sticky Nav (replaces header and sidebar) */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center">
            <ul className="flex gap-1 md:gap-2 items-center overflow-x-auto no-scrollbar">
              {SECTION_ITEMS.map((item) => (
                <li key={item.id} className="flex-shrink-0">
                  <button
                    onClick={() => {
                      const section = document.getElementById(item.id);
                      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`text-xs md:text-sm transition-colors px-2 md:px-3 py-1 rounded-full border ${
                      activeSection === item.id
                        ? "text-indigo-700 font-semibold bg-indigo-50 border-indigo-200"
                        : "text-gray-700 hover:bg-indigo-50 border-transparent"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      

      <div className="max-w-screen-2xl mx-auto">
        <main className="flex-1">
          {/* Hero Section */}
          <section id="HeroSection" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div className="flex-1" {...fadeIn}>
                  <Badge className="mb-4 font-semibold border bg-white flex items-center gap-2 w-fit">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">UGC & AICTE Approved</span>
                  </Badge>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    Best Online MCA in India
                    <span className="block text-yellow-600 mt-2">Amity University 2025</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                    Pursue your Master of Computer Applications (MCA) online with India's first UGC-approved 
                    online university. 7+ specializations, 500+ hiring partners, and 100% placement assistance.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg rounded-full cursor-pointer"
                      onClick={() => setOpenModal({ type: "apply" })}
                    >
                      Apply Now
                     
                    </Button>
                    <Button
                      className="border-2 border-gray-300 hover:border-blue-400 bg-white px-8 py-6 text-lg rounded-full cursor-pointer"
                      onClick={() => setOpenModal({ type: "enquiry" })}
                    >
                      Download Brochure
                      
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-full h-96 md:h-[520px]">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop"
                      alt="Amity Online MCA Students"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About MCA Section */}
          <section id="AboutMCA" className="py-16 bg-white px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Amity Online MCA?
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
              </motion.div>

              <motion.div {...fadeIn} className="bg-white p-10 rounded-2xl shadow-lg border">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Amity University Online MCA is India's premier online Master of Computer Applications program, 
                  designed for aspiring IT professionals and career advancers. With UGC-DEB approval and AICTE 
                  recognition, this program offers the same credibility as traditional on-campus degrees.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The 2-year program features 350+ hours of recorded lectures, live interactive sessions, and 
                  comprehensive study materials. Students can choose from 7 specialized tracks including Machine 
                  Learning & AI, Cybersecurity, Blockchain, Data Science, and more.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  With flexible learning options, zero-cost EMI, and dedicated placement support from 500+ hiring 
                  partners, Amity Online MCA empowers you to advance your IT career without compromising your 
                  current job commitments.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Specializations Section */}
          <section id="Specializations" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Specialization
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Select from 7 industry-aligned specializations to match your career goals
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${spec.color} border-2`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="h-48 w-full">
                      <img src={spec.image} alt={spec.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">{spec.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Highlights */}
          <section id="highlights" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Highlights of Amity Online MCA
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all border-0 shadow-sm">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Fees Structure */}
          <section id="Fees" className="py-16 bg-gradient-to-br from-indigo-50 to-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Transparent Fee Structure
                </h2>
                <p className="text-gray-600 text-lg">Multiple payment options to suit your budget</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Month-wise", amount: "₹ /month", total: "₹1,70,000 - ₹2,50,000 According the Specilization" },
                  { title: "Semester-wise", amount: "₹ /sem", total: "₹1,70,000 - ₹2,50,000 According the Specilization" },
                  { title: "Annual Payment", amount: "₹ /year", total: "₹1,70,000 - ₹2,50,000 According the Specilization" },
                  { title: "One-time Payment", amount: "₹1,70,000 - ₹2,50,000", total: "₹1,70,000 - ₹2,50,000   According the Specilization "  },
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{plan.amount}</div>
                    <div className="text-gray-600 mb-4">Total: {plan.total}</div>
                    <div className="text-sm font-semibold text-green-600">{plan.discount}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeIn} className="mt-8 bg-blue-900 text-white p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-3">Zero-Cost EMI Available</h4>
                <p className="text-blue-100">
                  Flexible EMI options: 12, 18, or 24 months with no interest or hidden charges
                </p>
              </motion.div>
            </div>
          </section>

          {/* Scholarship Section */}
          <section id="Scholarship" className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Scholarship Opportunities
                </h2>
              </motion.div>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 bg-white rounded-2xl">
                  <thead className="bg-yellow-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Category</th>
                      <th className="px-4 py-3 text-left font-semibold">Discount</th>
                      <th className="px-4 py-3 text-left font-semibold">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: "Merit-Based", disc: "20%", elig: "≥85% in graduation" },
                      { cat: "Defence Personnel", disc: "20%", elig: "Valid service certificate" },
                      { cat: "Sports (CHAMPS)", disc: "30-100%", elig: "State/National/International level" },
                      { cat: "Divyaang", disc: "20%", elig: "Valid disability certificate" },
                      { cat: "Alumni", disc: "20%", elig: "Amity University alumni" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold">{row.cat}</td>
                        <td className="px-4 py-3 text-green-600 font-bold">{row.disc}</td>
                        <td className="px-4 py-3 text-gray-600">{row.elig}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Admission Procedure */}
          <section id="AdmissionProcedure" className="py-16 bg-gradient-to-b from-white to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Simple Admission Process
                </h2>
                <p className="text-gray-600 text-lg">Get started in 4 easy steps</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { num: "01", title: "Online Registration", desc: "Fill the application form on our website" },
                  { num: "02", title: "Document Upload", desc: "Submit required academic documents" },
                  { num: "03", title: "Fee Payment", desc: "Choose your payment plan and pay" },
                  { num: "04", title: "Start Learning", desc: "Access LMS and begin your journey" },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-xl">
                      <span className="text-3xl font-bold">{step.num}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section id="Eligibility" className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility Criteria
                </h2>
              </motion.div>

              <motion.div {...fadeIn} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Educational Qualification</h4>
                      <p className="text-gray-600">Bachelor's degree in BCA, B.Tech/B.E. (CS/IT), B.Sc. (CS/IT), or any degree with Mathematics at 10+2</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Minimum Marks</h4>
                      <p className="text-gray-600">40% aggregate in qualifying degree (Bridge course available for below 40%)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">No Age Limit</h4>
                      <p className="text-gray-600">Open to both fresh graduates and working professionals</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Curriculum */}
          <section id="Curriculum" className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive Curriculum
                </h2>
                <p className="text-gray-600 text-lg">2-year program divided into 4 semesters</p>
              </motion.div>

              <Tabs defaultValue="sem1" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8 bg-white p-2 rounded-full">
                  <TabsTrigger value="sem1" className="rounded-full">Semester 1</TabsTrigger>
                  <TabsTrigger value="sem2" className="rounded-full">Semester 2</TabsTrigger>
                  <TabsTrigger value="sem3" className="rounded-full">Semester 3</TabsTrigger>
                  <TabsTrigger value="sem4" className="rounded-full">Semester 4</TabsTrigger>
                </TabsList>

                <TabsContent value="sem1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Foundation Semester</h3>
                    <ul className="space-y-3">
                      {["Programming Fundamentals", "Database Management Systems", "Data Structures and Algorithms", "Computer Organization", "Discrete Mathematics", "Professional Communication"].map((subject, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="sem2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Core Concepts</h3>
                    <ul className="space-y-3">
                      {["Object-Oriented Programming (Java)", "Operating Systems", "Computer Networks", "Software Engineering", "Web Technologies", "Management Information Systems"].map((subject, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="sem3">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Advanced Topics</h3>
                    <ul className="space-y-3">
                      {["Advanced Database Management", "Artificial Intelligence", "Machine Learning Basics", "Cloud Computing", "Mobile App Development", "Elective (Specialization)"].map((subject, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="sem4">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Specialization & Project</h3>
                    <ul className="space-y-3">
                      {["Advanced Specialization Topics", "Elective II", "Capstone Project", "Industry Training/Internship", "Research Methodology", "Emerging Technologies"].map((subject, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Placement Record */}
          <section id="PlacementRecord" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Outstanding Placement Record
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: TrendingUp, title: "₹4-18 LPA", desc: "Salary Range" },
                  { icon: Users, title: "500+", desc: "Hiring Partners" },
                  { icon: Briefcase, title: "100%", desc: "Placement Assistance" },
                  { icon: Award, title: "₹18 LPA", desc: "Highest Package" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl text-center shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {["TCS", "Infosys", "Wipro", "HCL", "IBM", "Accenture", "Amazon", "Cognizant", "Tech Mahindra", "Capgemini", "Oracle", "Microsoft"].map((company, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center h-20">
                    <span className="font-semibold text-gray-700 text-sm">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="FAQs" className="py-16 bg-gradient-to-br from-indigo-50 to-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 bg-white">
                    <button
                      type="button"
                      className="w-full text-left flex justify-between items-center font-semibold text-lg gap-2"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      <span className="text-indigo-500 text-2xl">{openIndex === index ? "-" : "+"}</span>
                    </button>
                    {openIndex === index && (
                      <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-900 text-white">
            <div className="max-w-5xl mx-auto text-center px-6">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Advance Your IT Career?
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                  Join 160,000+ learners who have transformed their careers with Amity Online MCA
                </p>
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg rounded-full"
                  onClick={() => setOpenModal({ type: "apply" })}
                >
                  Apply Now for January 2026
              
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="w-32 h-10 bg-white rounded flex items-center justify-center mb-4">
                 <img 
                 src="images/logos/amitylogo.jpg" 
                 alt="Amity Online" 
                 className="h-8 object-contain"
                 />
                </div>
                  <p className="text-gray-400 text-sm">Transforming lives through quality online education</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#Specializations" className="hover:text-white">Specializations</a></li>
                    <li><a href="#Fees" className="hover:text-white">Fees</a></li>
                    <li><a href="#Scholarship" className="hover:text-white">Scholarships</a></li>
                    <li><a href="#Eligibility" className="hover:text-white">Eligibility</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 7042646766</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>info@unifostedu.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2025 Amity University Online. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Modal */}
      {/* Apply / Enquiry Modal */}
               {openModal && (
                 <ApplyEnquiryModal
                   open={!!openModal}
                   onOpenChange={(v) => !v && setOpenModal(null)}
                   title={
                     openModal.type === "apply"
                       ? "Start Your Application"
                       : "Enquire Now"
                   }
                   subtitle={
                     openModal.type === "apply"
                       ? "Fill the quick form to begin your admission process"
                       : "Share your details and our counselor will reach out"
                   }
                   imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amityForm_xdbvvf.webp"
                   universityName="Amity University Online"
                   defaultProgram="MCA"
                   formType={openModal.type === "apply" ? "getStarted" : "general"}
                 />
               )}
    </div>
  );
};

export default AmityMCALandingPage;
