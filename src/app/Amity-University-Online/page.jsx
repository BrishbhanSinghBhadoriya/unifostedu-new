"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnquireCard from "@/components/EnquireCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaAward, FaGraduationCap, FaGlobe } from "react-icons/fa";
import AccreditationSection from "@/components/AccreditationSection";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  BookOpen,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  Search,
  Menu,
} from "lucide-react";
import {
  FaBookOpen,
  FaBook,
  FaUniversity,
  FaUserFriends,
  FaClipboardCheck,
  FaUserTie,
  FaRobot,
  FaBriefcase,
} from "react-icons/fa";

import { Inter, Playfair_Display } from "next/font/google";
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
import {
  Briefcase,
  TrendingUp,
  Calendar,
  CalendarDays,
  Clock,
  CheckCircle2,
  Laptop,
} from "lucide-react";
import PageContent from "@/components/PageContent/PageContent";

const SECTION_ITEMS = [
  { id: "HeroSection", label: "Introduction" },
  { id: "AboutAmity", label: "About Amity" },
  { id: "Courses", label: "Explore Courses" },
  { id: "highlights", label: "Key Highlights" },
  { id: "Scholarship", label: "Scholarships" },
  { id: "AdmissionProcedure", label: "Admission Process" },
  { id: "UpcomingSessions", label: "Upcoming Sessions" },
  { id: "OnlineVsRegular", label: "Online vs Regular" },
  { id: "PlacementRecord", label: "Placement Record" },
  { id: "HiringPartners", label: "Hiring Partners" },
  { id: "RegionalOutreach", label: "Study From Cities" },
  { id: "ResourceLinks", label: "More Resources" },
  { id: "FAQs", label: "FAQs" },
];
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const AmityLandingPage = () => {
  const [openModal, setOpenModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionItems = SECTION_ITEMS;
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,65,000- ₹2,25,000",
      specialization:
        "BBA (General, Data Analytics, Travel And Tourism Management, Professional Certificate in Business Analytics)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      alt: "BBA from amity online university",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000 - ₹2,25,000",
      specialization:
        "BCA (General, Cloud and Security, Software Engineering, Data Science, Data Engineering(HCL Tech), Data Analytics, Software Engineering(HCL Tech))",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp",
      alt: "BCA from amity online university",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹2,50,000",
      specialization:
        "B.Com (General, Hons, International Finance & Accounting)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      alt: "B.Com from amity online university",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹1,70,000",
      specialization:
        "BA (General, Journalism and Mass Communication, Native Languages(Kannada,Malayalam, Tamil, Telugu), English, Sociology, Political Science, Economics)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp",
      alt: "BA from amity online university",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,99,000 - ₹2,99,000",
      specialization:
        "MBA (General, Information Technology Management, Dual Specialization, Human Resource Analytics, Data Science, Business Analytics, International Finance Management,Hospital Management, Digital Entrepreneurship, Digital Marketing Management, Entrepreneurship & Leadership Management, Finance & Accounting Management, Hospitality Management, Global Finance Market, Insurance Management, Marketing & Sales Management, Petroleum & Natural Gas, Production and Operations Management, Retail Management)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      alt: "MBA from amity online university",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "₹170,000- ₹2,50,000",
      specialization:
        "MCA (General, Cyber Security, Blockchain Technology, Machine Learning and Artificial Intelligence, Augmented Reality and Virtual Reality, Software Engineering)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp",
      alt: "MCA from amity online university",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹1,20,000",
      specialization: "General, Financial Management, Financial Technology",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327469/mcom-online-image_e79tno.webp",
      alt: "M.Com from amity online university",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,30,000 - ₹1,70,000",
      specialization:
        "MA ( Journalism and Mass Communication, Public Policy & Governance)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      alt: "MA from amity online university",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,50,000",
      specialization: "Data Science",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327469/mcom-online-image_e79tno.webp",
      alt: "M.Sc from amity online university",
    },
  ];

  const ug_pgCourses = [
    {
      course: "BBA + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,45,800",
      specialization: "BBA + MBA",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      alt: "BBA + MBA from amity online university",
    },
    {
      course: "BCA + MCA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,04,000",
      specialization: "BCA + MCA",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp",
      alt: "BCA + MCA from amity online university",
    },
    {
      course: "B.Com + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹2,83,100 - ₹3,05,000",
      specialization: "B.Com + MBA",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327469/mcom-online-image_e79tno.webp",
      alt: "B.Com + MBA from amity online university",
    },
  ];

  const metaKeywords = [
    "Amity University Online MBA",
    "Amity University Online degrees",
    "Amity University Online fees structure",
    "Amity University Online admission process",
    "Amity University Online placement assistance",
    "Amity University Online eligibility",
    "Amity University Online scholarships",
    "Amity University Online BBA program",
    "Amity University Online BCA program",
    "Amity University Online MCA program",
    "Amity online degree valid for government jobs",
    "online MBA Delhi Amity University",
    "online MBA Mumbai Amity",
    "online MBA Bangalore Amity",
    "flexible online programs Amity University",
    "Amity University Online vs regular degree"
  ];

  const metaKeywordString = metaKeywords.join(", ");

  const metaDescription =
    "Explore UGC-entitled Amity University Online MBA, BBA, BCA, MCA and M.Com degrees. Review 2025 fees structure, admission process, scholarships, placement assistance, and flexible learning options.";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    alternateName: "Amity Online",
    url: "https://unifostedu.com/amity-university-online",
    logo: "https://unifostedu.com/amity.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 7042646766",
      contactType: "admissions",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/AmityUniversityOnline",
      "https://www.linkedin.com/school/amity-university-online/",
      "https://x.com/AmityUniversity",
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Amity University Online MBA",
    description:
      "UGC-entitled, NAAC A+ accredited online MBA from Amity University Online with 24 specialisations and dedicated placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Amity University Online",
      sameAs: "https://unifostedu.com/amity-university-online",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      startDate: "2025-01-15",
      endDate: "2027-01-14",
      location: {
        "@type": "VirtualLocation",
        url: "https://amityonline.com",
      },
      instructor: {
        "@type": "Person",
        name: "Global Faculty & Industry Mentors",
      },
      offers: {
        "@type": "Offer",
        url: "https://unifostedu.com/amity-university-online",
        priceCurrency: "INR",
        price: "299000",
        availability: "https://schema.org/InStock",
        validFrom: "2024-11-01",
      },
    },
  };

  const cityHighlights = [
    {
      city: "Delhi NCR",
      focus:
        "Professionals searching for an online MBA Delhi Amity University choose the platform for weekend mentoring hubs and corporate networking events in Gurugram and Noida.",
    },
    {
      city: "Mumbai & Pune",
      focus:
        "Finance and marketing aspirants across Mumbai and Pune prefer the online MBA Mumbai Amity pathway and BBA programs for industry projects with BFSI, media, and retail partners.",
    },
    {
      city: "Bangalore & Hyderabad",
      focus:
        "Tech talent in Bangalore and Hyderabad opt for the online MBA Bangalore Amity specialisations alongside MCA and BCA programs featuring virtual labs, AI, cyber security, and cloud modules.",
    },
    {
      city: "Kolkata & Eastern India",
      focus:
        "Learners from Kolkata, Bhubaneswar, and Guwahati opt for flexible Amity University Online degrees to qualify for government jobs and PSU roles without relocating.",
    },
  ];

  const faqData = [
    {
      question: "Is the Amity University Online MBA UGC-entitled and NAAC A+ accredited?",
      answer:
        "Yes. Amity University Online holds UGC entitlement and NAAC A+ accreditation, so the online MBA and every other Amity University Online degree carries the same recognition as an on-campus qualification.",
    },
    {
      question: "Is an Amity University Online degree valid for government jobs and abroad?",
      answer:
        "Absolutely. Amity University Online degrees are accepted for government jobs in India and are globally recognized, making them suitable for higher studies or international employment opportunities.",
    },
    {
      question: "What is the 2025 Amity University Online MBA fees structure?",
      answer:
        "For the 2025 intake, the Amity University Online MBA fees structure ranges from ₹1,99,000 to ₹2,99,000 depending on the specialization. Flexible EMI plans and no-cost installment options are available for working professionals.",
    },
    {
      question: "Does Amity University Online provide placement assistance?",
      answer:
        "Yes. Amity University Online offers dedicated placement assistance including virtual job fairs, resume mentoring, interview preparation, and connections with 500+ hiring partners across India.",
    },
    {
      question: "Can working professionals pursue the Amity University Online MBA?",
      answer:
        "The Amity University Online MBA is built for working professionals, featuring weekend live classes, on-demand video lectures, and a flexible assessment schedule so you can study without leaving your job.",
    },
    {
      question: "What is the admission process for Amity University Online degrees?",
      answer:
        "The Amity University Online admission process is completely digital: submit the application form, upload academic documents, pay the registration fee, and await counseling confirmation via email or phone.",
    },
    {
      question: "What are the eligibility criteria for Amity University Online BBA, BCA, and MCA?",
      answer:
        "For UG programs like the Amity University Online BBA and BCA, you need a 10+2 pass from a recognized board. For the MCA, candidates must have a relevant bachelor’s degree with mathematics or computer science exposure.",
    },
    {
      question: "Does Amity University Online offer scholarships or EMI support?",
      answer:
        "Yes. Amity University Online extends merit scholarships, corporate partner discounts, and 0% EMI support to help learners manage fees for programs like the online MBA, BBA, and MCA.",
    },
    {
      question: "How does Amity University Online compare with other online universities?",
      answer:
        "Amity University Online combines NAAC A+ accreditation, global collaborations, and over 25,000 alumni, making it a top alternative when you compare Amity University Online with other UGC-approved online universities in India.",
    },
    {
      question: "Are Amity University Online degrees globally recognized?",
      answer:
        "Yes. Every Amity University Online degree follows global academic standards, includes WES evaluation support, and is valued by employers across North America, Europe, the Middle East, and Asia.",
    },
  ];

  const SectionHeader = ({ icon: Icon, title, description }) => (
    <div className="text-center mb-12">
      <Icon className="mx-auto text-4xl text-orange-500 mb-4" />
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    course: "",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!sectionItems.length) return undefined;

    const observerOptions = {
      root: null,
      threshold: 0.25,
      rootMargin: "-45% 0px -45% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionItems.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionItems.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sectionItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here, for example using fetch:
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Enquiry submitted successfully!');
        // Optionally, reset the form
        setFormData({ fullName: "", phoneNumber: "", email: "", course: "", state: "" });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const courses = [
    "MBA (Master of Business Administration)",
    "BBA (Bachelor of Business Administration)",
    "MCA (Master of Computer Applications)",
    "BCA (Bachelor of Computer Applications)",
    "M.Com (Master of Commerce)",
    "B.Com (Bachelor of Commerce)",
    "MA (Master of Arts)",
    "BA (Bachelor of Arts)",
  ];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Chandigarh",
  ];

  const stats = [
    { number: "1.6L+", label: "Students Enrolled", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "100%", label: "Placement Assistance", icon: CheckCircle },
    { number: "200+", label: "Corporate Partners", icon: Globe },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "UGC Approved Degrees",
      description:
        "All programs are UGC approved and globally recognized for academic excellence",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description:
        "Degrees recognized by WES, international universities and multinational corporations",
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      description:
        "24/7 access to learning materials with AI-powered personalized study plans",
    },
    {
      icon: Star,
      title: "Industry Expert Faculty",
      description: "Learn from experienced professionals and industry leaders",
    },
  ];


  const specializations = [
    {
      program: "MBA",
      count: "18+ Specializations",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mbaSpecialization_ubxfpt.webp",
    },
    {
      program: "BBA",
      count: "2 Specializations",
      color: "bg-green-50 border-green-200 text-green-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bbaSpecialization_zjisuk.webp",
    },
    {
      program: "MCA",
      count: "5+ Specializations",
      color: "bg-purple-50 border-purple-200 text-purple-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mcaSpecialization_bp7v01.webp",
    },
    {
      program: "BCA",
      count: "6 Specializations",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327068/bcaSpecialization_uwowv1.webp",
    },
  ];
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };
  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(sectionItems[0]?.id ?? null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <React.Fragment>
      <Head>
        <title>Online MBA &amp; Degrees | Amity University Online (NAAC A+)</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywordString} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifostedu.com/amity-university-online" />
        <meta property="og:title" content="Online MBA &amp; Degrees | Amity University Online (NAAC A+)" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifostedu.com/amity-university-online" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327155/girlImage_w9ulny.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online MBA &amp; Degrees | Amity University Online (NAAC A+)" />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327155/girlImage_w9ulny.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      </Head>
      <div className="min-h-screen bg-white relative" style={{ overflowX: "hidden" }}>
      
        <motion.header
          className="bg-white shadow-sm fixed top-0 left-0 w-full z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <div className="w-20 sm:w-24 md:w-[122px] h-8 sm:h-9 md:h-10 relative">
                  <Image
                    src="/amity.svg"
                    alt="Amity University Online"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-2"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden md:inline">+91 7042646766</span>
                  <span className="md:hidden">Call</span>
                </Button>
                <Button
                  onClick={() => setOpenModal({ type: "enquiry" })}
                  size="sm"
                  className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-[#452971] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-1.5 md:py-2 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Enquire Now</span>
                  <span className="sm:hidden">Enquire</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                </Button>
                {/* Mobile Menu Button */}
                <Button 
                  onClick={() => setIsMobileMenuOpen(true)} 
                  variant="ghost" 
                  size="icon"
                  className="lg:hidden w-8 h-8 sm:w-10 sm:h-10"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>
          </div>
        </motion.header>

        
        {/* Notification Bar - Optimized */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-2 sm:py-2.5 md:py-3 mt-[56px] sm:mt-[64px] md:mt-[70px] mb-0">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center">
            <motion.div
              className="font-semibold flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">August 2025 Admissions Open</span>
              </div>
              <span className="hidden sm:inline text-gray-700">•</span>
              <span className="whitespace-nowrap">Scholarships up to 15% Available</span>
              <span className="hidden sm:inline text-gray-700">•</span>
              <span className="whitespace-nowrap">Limited Time Offer</span>
            </motion.div>
          </div>
        </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row">
          {/* Left Sidebar - Hidden on Mobile, Sticky on Desktop */}
        <PageContent 
          sectionItems={sectionItems} 
          activeSection={activeSection} 
          ismobilemenuopen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        
        <main className="flex-1 min-w-0 lg:pl-64">
            {/* Hero Section - Fully Responsive */}

            <section
              id="HeroSection"
              className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                  {/* Left Content */}
                  <div
                    className={`flex-1 w-full lg:min-w-[300px] ${inter.className} order-2 lg:order-1`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Badge */}
                      <Badge className="mb-3 sm:mb-4 font-semibold px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 bg-white flex items-center gap-1.5 sm:gap-2 w-fit">
                        <Image
                          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/UGC_India_Logo_9d01833e1b_nsyboy.svg"
                          alt="UGC Approved"
                          width={20}
                          height={20}
                          className="sm:w-6 sm:h-6 md:w-[30px] md:h-[30px] rounded-full"
                        />
                        <span className="text-gray-500 text-xs sm:text-sm md:text-base">
                          UGC Approved
                        </span>
                      </Badge>

                      {/* Heading */}
                      <h1
                        className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3`}
                      >
                        Amity University Online MBA &amp; Degrees
                        <span className="block text-transparent bg-clip-text bg-yellow-600">
                          UGC-Entitled NAAC A+ Programs for 2025
                        </span>
                      </h1>

                      {/* Description */}
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-5 md:mb-6 max-w-2xl leading-relaxed">
                        Explore the Amity University Online MBA, BBA, BCA, MCA, and M.Com programmes designed for working
                        professionals across India.{" "}
                        <span className="font-semibold">Join 1.6 lakh+</span>{" "}
                        learners leveraging flexible online degrees, live mentoring, and placement assistance to advance
                        their careers.
                      </p>

                      {/* Program Cards - Responsive Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                        {specializations.map((item, index) => (
                          <motion.div
                            key={index}
                            className="rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                          >
                            {/* Image */}
                            <div className="h-20 sm:h-24 md:h-32 lg:h-40 w-full">
                              <img
                                src={item.image}
                                alt={item.program}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            {/* Text Section */}
                            <div className="bg-[#0d1b4c] text-white py-1.5 sm:py-2 md:py-3 text-center">
                              <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                                {item.program}
                              </div>
                              <div className="text-[10px] sm:text-xs md:text-sm opacity-90 mt-0.5">
                                {item.count}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Buttons - Responsive */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                        <Button
                          size="lg"
                          className="bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer px-4 sm:px-6 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 lg:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                          onClick={() => setOpenModal({ type: "apply" })}
                        >
                          Apply Now
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="cursor-pointer border-2 border-gray-300 hover:border-blue-400 px-4 sm:px-6 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 lg:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                          onClick={() => setOpenModal({ type: "enquiry" })}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 rotate-180 sm:rotate-0" />
                          Enquire Now
                        </Button>
                      </div>

                      {/* Stats - Responsive Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8 + index * 0.1,
                            }}
                          >
                            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2 text-yellow-500" />
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                              {stat.number}
                            </div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Content - Image */}
                  <div className="flex-1 w-full lg:min-w-[250px] lg:max-w-[400px] order-1 lg:order-2">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="flex justify-center lg:justify-end"
                    >
                      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-64 md:h-80 lg:h-[520px] xl:h-[680px]">
                        <Image
                          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327155/girlImage_w9ulny.webp"
                          alt="Amity University Online virtual classroom"
                          fill
                          className="object-contain"
                          priority
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Amity University Online Section - Responsive */}
            <section
              id="AboutAmity"
              className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-3 sm:px-4 md:px-6 font-[Inter] relative"
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="max-w-5xl mx-auto relative z-10 text-center">
                {/* Heading Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-6 sm:mb-8 md:mb-10"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    About Amity University Online
                  </h2>
                  <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-yellow-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 text-left md:text-justify"
                >
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Amity University Online is India’s one of the recognised
                    UGC-approved online university, which offers high-class
                    online degree programs designed for learners, working
                    professionals, and entrepreneurs who aim to enhance their
                    skills and advance their careers in the future. It is ranked
                    among the best online universities in India, Amity Online
                    offers globally recognized online MBA in India 2025, online
                    BBA, online MCA, online M.Com, online BA, and online BCA
                    programs are designed to deliver the best online courses for
                    their excellence with flexibility.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Our mission and vision are to make quality online education
                    in India that can be accessible to all — whether someone is
                    searching for the best online MBA in India, top online MBA
                    for working professionals, or affordable online degree
                    programs with industry relevance and flexible for everyone.
                    Amity Online provides feature of digital learning ecosystem
                    with the help of AI driven tools, live online classes,
                    recorded lectures, personalized mentorship, and career
                    support.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Students from cities such as Delhi, Mumbai, Bangalore,
                    Chennai, Hyderabad, and Kolkata choose Amity University
                    Online because it offers recognized online degrees in India
                    which is accepted by employers throughout the world.If
                    you're looking for an online MBA near me, online MBA in
                    India top-ranked, or online MBA for freshers, Amity delivers
                    flexibility, credibility, and global exposure to everyone
                    who are willing to persue degree.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Amity Online's MBA program in India is designed in such a
                    way for both fresh graduates and working professionals
                    seeking online MBA in India for career growth. Our AICTE and
                    UGC-approved online MBA courses specialize in HR, Finance,
                    Marketing, Analytics, International Business, and Digital
                    Marketing — which makes Amity one of the best universities
                    for online education in India.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Not only MBA, Amity University Online offers a range of
                    online undergraduate and postgraduate degrees such as online
                    BBA, online M.Com, online MA, online MCA, and online BCA.
                    Every program is designed and emphasize real-world learning,
                    practical exposure, and interactive course delivery, which
                    are aligned with NEP 2020 online education goals.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Amity Online stands out among various top online
                    universities in India 2025 because of its strong global
                    collaborations, placement support, and advanced learning
                    technologies, which they use in their courses.If you're
                    pursuing an online MBA in Delhi, online degree in Mumbai, or
                    distance education in India, you will gain academic
                    experiences from one of the India's most reputed
                    universities, which will make you job-ready and give you
                    confidence to excel in your academics and build your great
                    future.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-6 sm:mt-8 md:mt-10 text-center"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                      onClick={() => setOpenModal({ type: "apply" })}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 hover:border-blue-400 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
                      onClick={() => setOpenModal({ type: "enquiry" })}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Enquire Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Courses Section with Tabs - Responsive */}
            <section
              id="Courses"
              className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white px-3 sm:px-4 md:px-6 font-[Inter] relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className="bg-yellow-400 text-center mb-6 sm:mb-8 md:mb-12 p-4 sm:p-5 md:p-6 rounded-lg">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-wide mb-2 text-black">
                    Explore Our Programs
                  </h2>
                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Find the perfect course to launch or advance your career.
                  </p>
                </div>

                {/* Shadcn Tabs - Responsive */}
                <Tabs defaultValue="ug" className="w-full">
                  <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
                    <TabsList className="grid w-full max-w-full sm:max-w-md md:max-w-2xl grid-cols-3 bg-white p-1 sm:p-2 md:p-5 rounded-full gap-1 sm:gap-2">
                      <TabsTrigger
                        value="ug"
                        className="px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                       data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                       hover:bg-gray-50 data-[state=inactive]:text-gray-600 cursor-pointer"
                      >
                        <span className="hidden sm:inline">Undergraduate</span>
                        <span className="sm:hidden">UG</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="pg"
                        className="px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                       data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                       hover:bg-gray-50 data-[state=inactive]:text-gray-600 cursor-pointer"
                      >
                        <span className="hidden sm:inline">Postgraduate</span>
                        <span className="sm:hidden">PG</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="integrated"
                        className="px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                       data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                       hover:bg-gray-50 data-[state=inactive]:text-gray-600 cursor-pointer"
                      >
                        <span className="hidden sm:inline">Integrated</span>
                        <span className="sm:hidden">IG</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Tab Content */}
                  <TabsContent value="ug" className="mt-4 sm:mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {ugCourses.map((item, index) => (
                          <div
                            key={`ug-${item.course}-${index}`}
                            className="w-full"
                          >
                            <EnquireCard
                              {...item}
                              universityName="Amity University Online"
                              uniqueId={`ug-${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="pg" className="mt-4 sm:mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {pgCourses.map((item, index) => (
                          <div
                            key={`pg-${item.course}-${index}`}
                            className="w-full"
                          >
                            <EnquireCard
                              {...item}
                              universityName="Amity University Online"
                              uniqueId={`pg-${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="integrated" className="mt-4 sm:mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {ug_pgCourses.map((item, index) => (
                          <div
                            key={`integrated-${item.course}-${index}`}
                            className="w-full"
                          >
                            <EnquireCard
                              {...item}
                              universityName="Amity University Online"
                              uniqueId={`integrated-${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            <div id="highlights">
              <section className="bg-gradient-to-b from-white to-indigo-50 py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto text-center">
                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
                  >
                    Key Highlights of Amity University Online
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
                  >
                    Amity Online combines world-class education with flexibility
                    and innovation, helping learners gain global exposure while
                    staying connected to strong Indian academic roots.
                  </motion.p>

                  {/* Highlight Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {/* Card 1 */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        UGC-Approved & NAAC A+ Accredited
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Recognized by top Indian authorities for maintaining
                        world-class academic standards.
                      </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                      <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        Globally Recognized Online Degrees
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        India's first university offering online MBA & BBA
                        programs with global recognition.
                      </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                      <Laptop className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        100% Online & Accessible Worldwide
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Study anytime, anywhere with full online access to
                        lectures and resources.
                      </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        Industry-Aligned Global Faculty
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Programs designed and taught by top educators and global
                        industry experts.
                      </p>
                    </motion.div>

                    {/* Card 5 */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                      <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        24×7 Digital Learning Access
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Unlimited access to recorded lectures, study materials,
                        and online library.
                      </p>
                    </motion.div>

                    {/* Card 6 */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                      <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        Career Support & Internship
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Personalized placement guidance and internship
                        opportunities for all learners.
                      </p>
                    </motion.div>
                  </div>

                  {/* Bottom Paragraph */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-12 text-gray-700 text-base max-w-3xl mx-auto"
                  >
                    Amity Online stands out for blending{" "}
                    <strong>global academic excellence</strong> with{" "}
                    <strong>Indian values</strong>, empowering students to gain
                    knowledge, skills, and confidence to excel in their
                    professional journey.
                  </motion.p>
                </div>
              </section>
            </div>

            <AccreditationSection
              title="Education with Global Recognition"
              description="Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide."
              stats={[
                {
                  value: "95%",
                  label: "Employment Rate Within 6 Months",
                  color: "text-blue-700",
                  bg: "bg-blue-50",
                },
                {
                  value: "50+",
                  label: "Countries with Alumni Network",
                  color: "text-green-700",
                  bg: "bg-green-50",
                },
                {
                  value: "10+",
                  label: "Industry Partnerships",
                  color: "text-purple-700",
                  bg: "bg-purple-50",
                },
              ]}
              benefits={[
                {
                  title: "Global Mobility",
                  description:
                    "Our degrees are recognized internationally, enabling you to pursue opportunities worldwide.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>`,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Rigorous accreditation processes ensure our programs meet the highest educational standards.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>`,
                },
                {
                  title: "Industry Connections",
                  description:
                    "Our partnerships with leading organizations provide valuable networking and career opportunities.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>`,
                },
                {
                  title: "Career Advancement",
                  description:
                    "Employers value accredited degrees, giving our graduates a competitive edge in the job market.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>`,
                },
              ]}
              accreditations={[
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp", alt: "WES", name: "WES" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp", alt: "AIU", name: "AIU" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp", alt: "ACU", name: "ACU" },
              ]}
              internationalRecognition={[
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp", alt: "QS Ranking", name: "QS" },
                {
                  src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wasc_emgnvc.webp",
                  alt: "WASC Accreditation",
                  name: "WASC",
                },
                {
                  src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/the_zp4hxg.webp",
                  alt: "Times Higher Education",
                  name: "THE",
                },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327853/qaa_anjp5o.webp", alt: "QAA UK", name: "QAA UK" },
              ]}
              successStories={[
                {
                  name: "Aisha Sharma",
                  initials: "AS",
                  color: "bg-blue-100 text-blue-600",
                  text: "The international recognition of my degree allowed me to secure a position with a leading tech firm in Singapore immediately after graduation.",
                },
                {
                  name: "Rahul Mehta",
                  initials: "RM",
                  color: "bg-green-100 text-green-600",
                  text: "The accreditation status of my program made the admission process to Stanford seamless. My credits transferred without any issues.",
                },
              ]}
              trust={{
                text: "Trusted by 25,000+ Students",
                subtext:
                  "Our accreditations ensure quality education recognized globally",
              }}
            />

            <section className="bg-gray-50 py-12 px-6 md:px-20">
              <div className="max-w-9xl mx-auto text-gray-800 leading-relaxed">
                {/* Main Title */}

                <section className="bg-white py-16 px-6 md:px-20">
                  <div className=" mx-auto text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-10">
                      🎓 Amity University Online Courses &amp; Fees Structure 2025
                    </h2>
                    <p>
                      Amity University Online offers NAAC A+ accredited UG and PG programs that match industry demand while
                      enabling flexible learning. Review the latest Amity University Online fees structure, compare
                      specialisations, and choose an online MBA, BBA, BCA, MCA, or M.Com that fits your career goals.
                      Executive certificates and short-term programmes are also available for professionals who need rapid
                      upskilling.
                    </p>
                    {/* Undergraduate Courses */}
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">
                      Undergraduate (UG) Courses
                    </h3>
                    <div className="overflow-x-auto mb-12">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-yellow-100 text-gray-900">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Course
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Duration
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Eligibility
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Fees
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Specializations
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {ugCourses.map((course, index) => (
                            <tr
                              key={index}
                              className="hover:bg-yellow-50 transition duration-200 ease-in-out"
                            >
                              <td className="border border-gray-300 px-4 py-3 font-semibold">
                                {course.course}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.duration}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.eligibility}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.fees}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.specialization}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Postgraduate Courses */}
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">
                      Postgraduate (PG) Courses
                    </h3>
                    <div className="overflow-x-auto mb-12">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-yellow-100 text-gray-900">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Course
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Duration
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Eligibility
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Fees
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Specializations
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {pgCourses.map((course, index) => (
                            <tr
                              key={index}
                              className="hover:bg-yellow-50 transition duration-200 ease-in-out"
                            >
                              <td className="border border-gray-300 px-4 py-3 font-semibold">
                                {course.course}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.duration}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.eligibility}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.fees}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.specialization}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Integrated Courses */}
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">
                      Integrated (UG + PG) Courses
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-yellow-100 text-gray-900">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Course
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Duration
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Eligibility
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Fees
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Specializations
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {ug_pgCourses.map((course, index) => (
                            <tr
                              key={index}
                              className="hover:bg-yellow-50 transition duration-200 ease-in-out"
                            >
                              <td className="border border-gray-300 px-4 py-3 font-semibold">
                                {course.course}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.duration}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.eligibility}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.fees}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {course.specialization}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                  className="text-center mb-12 md:mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>

                  <div className="max-w-5xl mx-auto relative z-10 text-center">
                    {/* Heading Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="mb-10"
                    >
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Amity University Online?
                      </h2>
                      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-100 text-left md:text-justify"
                    >
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Choosing Amity University Online means getting enrolled
                        in one of India’s top UGC-approved online universities
                        recognized by NAAC that combine academic excellence,
                        industry relevance, and global recognition in one place.
                        Amity Online helps students to achieve their goals
                        through flexible, affordable, and accredited online
                        degree programs in India that are designed for today’s
                        digital world.
                      </p>
                      <p className="text-blue-700 text-lg leading-relaxed mb-6">
                        1. UGC-Approved and Globally Recognized
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Amity University Online is a UGC-entitled and
                        NAAC-accredited online university in India, ensuring
                        that every online degree, online MBA, or online BBA you
                        earn is recognized by government bodies throughout the
                        world. Our programs meet the standard quality of
                        education set by the Government of India and are
                        accepted by top organizations worldwide.
                      </p>
                      <p className="text-blue-700 text-lg leading-relaxed mb-6">
                        2. Flexible Learning for Everyone
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        If you’re a working professional, a fresh graduate, or a
                        career switcher, Amity Online gives you complete
                        learning flexibility at your doorstep. You can study at
                        your own pace through recorded classes, live virtual
                        sessions, and AI-driven platforms that are accessible
                        anytime, anywhere to every student who is enrolled. It’s
                        perfect for students seeking an online MBA in India for
                        working professionals or distance education in India
                        with maximum convenience and flexibility.
                      </p>

                      <p className="text-blue-700 text-lg leading-relaxed mb-6">
                        3. Industry-Driven Curriculum
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        All online courses are designed by academic experts and
                        industry leaders to ensure practical knowledge and
                        real-world application at Amity University Online. Our
                        online MBA, online BCA, online M.Com, and online MCA
                        programs focus on developing in-demand skills in areas
                        like Business Analytics, Finance, HR, Marketing, and
                        Data Science — ensuring you stay ahead in the
                        competitive job market and build your future.
                      </p>
                      <p className="text-blue-700 text-lg leading-relaxed mb-6">
                        4. Global Exposure and Expert Faculty
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Amity Online connects you to a network of international
                        universities, global faculty members, and corporate
                        mentors. You learn from the world class educators,
                        industry experts, and professionals that are experienced
                        from leading organizations throughout the world — making
                        Amity one of the top online universities in India 2025
                        for global exposure and professional networking that
                        will help in future not only in India but in foreign
                        too.
                      </p>
                      <p className="text-blue-700 text-lg leading-relaxed mb-6">
                        5. Career Guidance and Placement Support
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        From the moment you enroll, Amity Online provides
                        dedicated placement assistance, resume workshops,
                        personalized mentoring sessions, and a full-time
                        counsellor will be assigned who will help you throughout
                        your journey. Our counselors will guide you in finding
                        the right career path and choosing it after completing
                        your online degree in India. Thousands of Amity Online
                        alumni now work in Fortune 500 companies, startups, and
                        multinational organizations.{" "}
                      </p>
                      <p className="text-blue-700 text-lg leading-relaxed mb-6">
                        6. Technology-Enabled Learning Experience
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Amity University Online learning platform features include AI-powered dashboards, immersive virtual
                        classrooms, and interactive course materials that keep participation high. Learners can track their
                        progress, connect with peers, and access 24x7 academic support from any device.
                      </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="mt-10 text-center"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg rounded-full cursor-pointer"
                          onClick={() => setOpenModal({ type: "apply" })}
                        >
                          Apply Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-gray-300 hover:border-blue-400 px-8 py-3 text-lg rounded-full cursor-pointer"
                          onClick={() => setOpenModal({ type: "enquiry" })}
                        >
                          <ArrowRight className="w-5 h-5 mr-2" />
                          Enquire Now
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                        <CardContent className="p-4 md:p-6 text-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-1 md:mb-1">
                            <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                          </div>
                          <h3 className="text-base md:text-lg font-semibold text-gray-900  md:mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            <section
              id="OnlineVsRegular"
              className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-6 md:px-10"
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Amity University Online vs Regular Degrees
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    Compare the Amity University Online MBA and degree programmes with traditional on-campus study to see
                    why thousands of working professionals choose flexible e-learning without compromising government job
                    eligibility or placement support.
                  </p>
                </motion.div>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 bg-white rounded-2xl shadow-sm">
                    <thead className="bg-yellow-100 text-gray-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm md:text-base font-semibold border border-gray-200">
                          Key Factors
                        </th>
                        <th className="px-4 py-3 text-left text-sm md:text-base font-semibold border border-gray-200">
                          Amity University Online
                        </th>
                        <th className="px-4 py-3 text-left text-sm md:text-base font-semibold border border-gray-200">
                          Regular On-Campus Degree
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          factor: "Accreditation & Validity",
                          online: "UGC-entitled, NAAC A+ accredited; valid for government jobs and international admissions.",
                          regular: "UGC-recognised; valid globally.",
                        },
                        {
                          factor: "Learning Flexibility",
                          online: "Live + recorded classes, LMS access 24x7, assessments designed for working professionals.",
                          regular: "Fixed lecture schedules, mandatory campus attendance.",
                        },
                        {
                          factor: "Fees Structure",
                          online:
                            "₹99,000–₹2,99,000 with EMIs, scholarships, and pay-per-semester options for online MBA & BBA.",
                          regular: "₹2,50,000+ per year plus hostel and relocation costs.",
                        },
                        {
                          factor: "Placement & Career Services",
                          online: "Dedicated virtual career fairs, placement portal, global alumni community, LinkedIn mentoring.",
                          regular: "On-campus drives for final-year students, alumni networks limited to campus batches.",
                        },
                        {
                          factor: "Network & Exposure",
                          online: "Pan-India cohort, international faculty, industry webinars, virtual campus tours.",
                          regular: "Primarily campus cohort, in-person events.",
                        },
                      ].map((row, index) => (
                        <tr key={row.factor} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 border border-gray-200 text-sm md:text-base font-semibold text-gray-900">
                            {row.factor}
                          </td>
                          <td className="px-4 py-3 border border-gray-200 text-sm md:text-base text-gray-700">
                            {row.online}
                          </td>
                          <td className="px-4 py-3 border border-gray-200 text-sm md:text-base text-gray-700">
                            {row.regular}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Amity Online Degree Validity
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Amity University Online degrees are listed on the UGC-DEB portal and carry a NAAC A+ rating. They are
                      officially valid for UPSC, SSC, banking examinations, PSU roles, and for WES credential evaluation when
                      you apply abroad. Learners receive the same university transcript and convocation certificate.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      When to Choose Amity University Online
                    </h3>
                    <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                      <li>
                        <strong>Working professionals</strong> who need an online MBA near Delhi, Mumbai, Bangalore, or any
                        metro without quitting their job.
                      </li>
                      <li>
                        <strong>Fresh graduates</strong> seeking a cost-effective Amity University Online BBA or BCA with
                        placement assistance and industry certifications.
                      </li>
                      <li>
                        <strong>Government job aspirants</strong> who want a recognised Amity online degree while preparing
                        for competitive examinations.
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </section>
            <section className="py-16 bg-white px-6">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-1"
                  {...fadeIn}
                ></motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: <FaBookOpen className="text-2xl" />,
                      title: "Diverse learning mediums",
                      text: "E-books, printed & audio books, videos to suit all styles.",
                    },
                    {
                      icon: <FaUserTie className="text-2xl" />,
                      title: "Dedicated Academic Advisor",
                      text: "Experts to guide every step of your career.",
                    },
                    {
                      icon: <FaRobot className="text-2xl" />,
                      title: "AI-Professor AMI",
                      text: "Powered by ChatGPT-4 for better learning.",
                    },
                    {
                      icon: <FaBriefcase className="text-2xl" />,
                      title: "Career Services",
                      text: "Workshops, internships, resume support.",
                    },
                    {
                      icon: <FaBook className="text-2xl" />,
                      title: "Doorstep delivery",
                      text: "Only online university delivering physical books.",
                    },
                    {
                      icon: <FaUniversity className="text-2xl" />,
                      title: "Metaverse Campus",
                      text: "Explore campus in metaverse.",
                    },
                    {
                      icon: <FaUserFriends className="text-2xl" />,
                      title: "Offline Experiences",
                      text: "On-campus orientation and peer bonding.",
                    },
                    {
                      icon: <FaClipboardCheck className="text-2xl" />,
                      title: "Placement Opportunities",
                      text: "Resume prep and interview assistance.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                      whileHover={{ y: -5 }}
                      variants={fadeIn}
                    >
                      <div className="text-blue-600 bg-blue-50 p-4 rounded-full mb-5">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Partnership Section */}
            <section id="HiringPartners" className="py-12 md:py-16 bg-white text-black">
              <div id="Company" className="sr-only" aria-hidden="true"></div>
              <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/hockey_jwo1y7.webp"
                    alt="Amity University Online industry partnership with Hockey India"
                    width={900}
                    height={500}
                    className="rounded-xl shadow-lg object-cover"
                  />
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Strategic Partnership with Hockey India
                  </h2>
                  <p className="text-black text-base md:text-lg mb-6">
                    Online Amity University has collaborated with Hockey India
                    to empower players with world-class education and exclusive
                    benefits:
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 text-black text-sm md:text-base">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                      Special scholarships for hockey athletes across India.
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5" />
                      Flexible online learning to balance sports & academics.
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5" />
                      Recognition from UGC & NAAC ensures credibility of the
                      degree.
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-6"></div>
                </motion.div>
              </div>
              
            </section>
          
            <div id="record">
              <div >
                <section
                  id="Scholarship"
                  className="bg-white py-12 px-6 md:px-20"
                >
                  <div className="max-w-5xl mx-auto text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-10">
                      🎓 Amity Online Scholarship & Fee Concession Details
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
                      Amity online scholarship programs support professionals, defence personnel, alumni, and high achievers
                      with fee waivers up to 100%. Combine scholarships with the Amity University Online fees structure and
                      EMI plans to make your online MBA or BBA even more affordable.
                    </p>

                    {/* Scholarship Table */}
                    <h3 className="text-2xl font-semibold mb-4">
                      Scholarship Categories
                    </h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-yellow-100 text-gray-900">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Select Category
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Scholarship Credit
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Eligibility Criteria
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              Divyaang (for Persons with Special Needs)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              20%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              Valid certificate of disability as per government
                              norms.
                            </td>
                          </tr>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              Defence Personnel
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              20%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              Minimum 2 years of service in the defence forces
                              with a valid Identity Card number.
                            </td>
                          </tr>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              Amity University Alumni
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              20%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              Amity University UG/PG alumni.
                            </td>
                          </tr>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              Merit-Based
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              20%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              Academic excellence with minimum 85% aggregate in
                              the previous qualification.
                            </td>
                          </tr>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              Sports Scholarship (CHAMPS)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              30% – 100%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              State, national, or international-level
                              sportspersons with valid sports federation
                              affiliation.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Other Fee Concessions Table */}
                    <h3 className="text-2xl font-semibold mb-4">
                      💰 Other Fee Concessions
                    </h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-yellow-100 text-gray-900">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Concession Type
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Discount
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Eligibility Criteria
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              On Full Fee Payment
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              8% – 12%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              Upon upfront payment of the full program fee.
                            </td>
                          </tr>
                          <tr className="hover:bg-yellow-50 transition duration-200">
                            <td className="border border-gray-300 px-4 py-3">
                              On Annual Fee Payment
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              5%
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              Upon upfront payment of the annual program fee.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Note */}
                    <p className="text-gray-600 mt-4 text-sm">
                      🔍 <strong>Note:</strong> Scholarship approval is subject
                      to verification of documents.
                    </p>
                  </div>
                </section>

            <section id="AdmissionProcedure" className="relative py-20 bg-white">
                  {/* Decorative Blobs */}
                  <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>

                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="text-center mb-16"
                    >
                      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        Admission Procedure
                      </h2>
                      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
                      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Admissions for <strong>Amity University Online</strong>{" "}
                        programs are open <strong>throughout the year</strong>,
                        offering complete flexibility to learners from diverse
                        backgrounds. The university follows{" "}
                        <strong>multiple admission cycles</strong> annually,
                        enabling students to choose the session that best fits
                        their academic or professional schedule.
                      </p>

                      <div  className="bg-gray-50 p-6 rounded-xl shadow-sm mt-6 max-w-3xl mx-auto">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          📅 Important Admission Dates
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                          <li>
                            <strong>January Intake:</strong> Applications open
                            in <strong>December</strong>
                          </li>
                          <li>
                            <strong>April Intake:</strong> Applications open in{" "}
                            <strong>March</strong>
                          </li>
                          <li>
                            <strong>July Intake:</strong> Applications open in{" "}
                            <strong>June</strong>
                          </li>
                          <li>
                            <strong>October Intake:</strong> Applications open
                            in <strong>September</strong>
                          </li>
                        </ul>
                      </div>

                      <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                        Students can apply directly for programs such as
                        <strong> Online MBA</strong>,{" "}
                        <strong>Online BBA</strong>, <strong>Online BCA</strong>
                        ,<strong>Online BA</strong>, <strong>Online MCA</strong>
                        , and <strong>Online M.Com</strong>
                        through the official Amity University Online portal.
                      </p>
                    </motion.div>

                    {/* 4-Step Process */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
                        Easy 4-Step Admission Process
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 z-0 rounded-full"></div>

                        {[
                          {
                            number: "01",
                            title: "Application Form",
                            desc: "Fill the online application form on the university portal.",
                          },
                          {
                            number: "02",
                            title: "Documents & Fee",
                            desc: "Upload required documents and pay the application fee.",
                          },
                          {
                            number: "03",
                            title: "Confirmation",
                            desc: "Receive confirmation and student login credentials.",
                          },
                          {
                            number: "04",
                            title: "Enrollment",
                            desc: "Complete fee payment and begin your classes.",
                          },
                        ].map((step, index) => (
                          <motion.div
                            key={index}
                            className="text-center relative z-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                          >
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                              <span className="text-3xl md:text-4xl font-bold">
                                {step.number}
                              </span>
                              <span className="text-xs md:text-sm uppercase font-semibold mt-1">
                                Step
                              </span>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-700 text-sm md:text-base">
                              {step.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>
              </div>
              <section id="UpcomingSessions" className="bg-gradient-to-br from-indigo-50 to-white py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                  {/* Title Section */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-indigo-700 mb-6"
                  >
                    Upcoming and Ongoing Sessions
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
                  >
                    Amity Online runs four academic sessions every year to
                    ensure continuous learning opportunities. Students can join
                    at any cycle and start their academic journey early. The
                    flexible admission process allows learners to begin without
                    waiting for a full year.
                  </motion.p>

                  {/* Session Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <CalendarDays className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        January 2026 Batch
                      </h3>
                      <p className="text-gray-600">
                        <strong>Applications now open</strong> for the January
                        2026 intake. Secure your spot in India’s top-ranked
                        online university.
                      </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        April 2026 Batch
                      </h3>
                      <p className="text-gray-600">
                        <strong>Pre-registration ongoing</strong>. Get early
                        access and stay ahead in your learning goals.
                      </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        July 2026 Batch
                      </h3>
                      <p className="text-gray-600">
                        <strong>Early bird scholarships</strong> are now
                        available for the July session. Enroll early and save
                        your academic year!
                      </p>
                    </motion.div>
                  </div>

                  {/* Bottom Note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-gray-700 text-base max-w-3xl mx-auto"
                  >
                    Ongoing sessions also allow mid-term enrollments for select
                    programs. Amity Online’s flexible academic calendar ensures
                    students can join anytime without losing an academic year.
                  </motion.p>
                </div>
              </section>
            </div>

            {/* Certificate + Benefits */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                    <Image
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amicri_t0imga.webp"
                      alt="Amity University Certificate"
                      width={500}
                      height={350}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[Poppins]">
                    Globally Recognized Online Degree
                  </h2>
                  <p className="mb-6 text-gray-600 text-lg">
                    Amity University online programs offer daily live classes,
                    career assistance, and hands-on LMS learning with Ivy League
                    tie-ups.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">
                    Benefits of Online Amity University
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Daily LIVE Classes by International Faculty",
                      "Career Assistance & Virtual Job Fairs",
                      "International Collaboration with Ivy League",
                      "Immersive Learning via World-Class LMS",
                      "Industry-Relevant Curriculum",
                      "Flexible Learning Schedule",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </section>
            {/* Hiring Partners */}
            <section id="PlacementRecord" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative font-[Inter]">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Placement Record
                  </h2>
                  <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    <strong>Amity University Online</strong> recorded a 92% placement conversion for the 2024–25 cohort.
                    Learners leveraged Amity University Online placement assistance to secure roles in technology, analytics,
                    BFSI, consulting, marketing, and high-growth startups.
                  </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {[
                    {
                      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
                      title: "92% Placement Conversion",
                      desc: "Career outcomes tracked across online MBA, BBA, and MCA batches.",
                    },
                    {
                      icon: <Users className="w-8 h-8 text-yellow-500" />,
                      title: "700+ Corporate Partners",
                      desc: "Global brands and Indian enterprises hire Amity Online graduates.",
                    },
                    {
                      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
                      title: "₹7.6 LPA Average CTC",
                      desc: "For online MBA and postgraduate programmes in 2024.",
                    },
                    {
                      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
                      title: "12 Virtual Job Fairs",
                      desc: "Live hiring weeks, mock interviews, and LinkedIn profile clinics.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition"
                    >
                      <div className="flex justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Closing Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
                >
                  Amity Online not only focuses on academic excellence but also
                  on <strong>employability</strong>, helping students transform
                  their online degrees into successful careers through
                  continuous industry collaborations and professional training
                  support.
                </motion.p>
              </div>
            </section>
            <section id="RegionalOutreach" className="py-16 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Study Online from Delhi, Mumbai, Bangalore &amp; Beyond
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    Whether you&apos;re searching for an “online MBA near me” or want a flexible Amity University Online
                    degree while working in metro cities, our digital campus supports learners across India with weekend live
                    sessions, city-specific mentoring, and dedicated counsellors.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cityHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.city}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {highlight.city}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {highlight.focus}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 bg-blue-900 text-white rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-3">Nationwide Support for Amity Online Learners</h3>
                  <p className="text-sm md:text-base leading-relaxed text-blue-100">
                    Our admissions advisors connect with students across Tier-1 and Tier-2 cities, helping you choose the
                    right Amity University Online programme, understand the latest fees structure, and align your online
                    degree with regional career opportunities. Join the monthly Amity online campus tour webinars to explore
                    the digital classrooms, placement labs, and learner success stories before you enrol.
                  </p>
                </div>
              </div>
            </section>
            <section id="HiringPartners" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-12" {...fadeIn}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">
                    Our Hiring Partners
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Top companies that recruit Amity Online University graduates
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {[
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/8_otnhv8.webp",
                    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp",
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-md transition-all border border-gray-100"
                      whileHover={{ y: -5, scale: 1.05 }}
                      variants={fadeIn}
                    >
                      <div className="relative w-full h-12">
                        <Image
                          src={src}
                          alt="Top companies hiring Amity University online graduates"
                          width={100}
                          height={100}
                          loading="lazy"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <section id="sessions" className="py-16 bg-blue-900 text-white">
              <div className="max-w-5xl mx-auto text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">
                    Begin Your Educational Journey with Amity Online
                  </h2>
                  <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                    Join thousands of students who have transformed their
                    careers with Amity University's UGC-entitled online degrees
                  </p>
                </motion.div>
              </div>
            </section>
            <section id="ResourceLinks" className="py-14 bg-slate-900 text-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">Explore More Amity Online Resources</h2>
                  <p className="text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
                    Continue your research with deep dives into the Amity University Online MBA curriculum, scholarships,
                    and placement services. These internal links help you compare options and take the next step confidently.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      href: "/bookdemo",
                      label: "Schedule an Amity University Online MBA counselling session",
                    },
                    {
                      href: "/services",
                      label: "Understand Amity Online placement assistance & career services",
                    },
                    {
                      href: "/blog",
                      label: "Read career guides on online MBA and distance learning trends",
                    },
                    {
                      href: "/blog/CareerAfterOnlineMBA",
                      label: "Career outcomes after an online MBA from Amity University Online",
                    },
                    {
                      href: "/Amity-University-Online#Scholarship",
                      label: "Scholarships and financing tips for Amity University Online degrees",
                    },
                    {
                      href: "/courses/mba",
                      label: "Compare online MBA programmes from top universities in India",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-4 text-sm md:text-base transition-all hover:bg-slate-800 hover:border-yellow-400"
                    >
                      <span className="font-medium text-slate-100 group-hover:text-yellow-300 leading-relaxed">
                        {item.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-yellow-400 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section id="FAQs" className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-3 sm:px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
                FAQs on Amity University Online MBA &amp; Degrees
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4"
                  >
                    <button
                      type="button"
                      className="w-full text-left flex justify-between items-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl gap-2 cursor-pointer transition-colors hover:text-indigo-600"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className="flex-1">{faq.question}</span>
                      <span className="ml-2 text-indigo-500 text-lg sm:text-xl md:text-2xl flex-shrink-0">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <p
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* JSON-LD for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqData.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  }),
                }}
              />
            </section>

            {/* Footer - Responsive */}
            <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-12">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <div className="w-20 sm:w-[100px] md:w-[122px] h-6 sm:h-8 md:h-10 relative">
                        <Image
                          src="/amity.svg"
                          alt="Amity University Online"
                          fill
                          className="bg-white object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Transforming lives through quality education and
                      innovation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
                      Quick Links
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                      <li>
                        <a
                          href="#Courses"
                          className="hover:text-white transition-colors"
                        >
                          Programs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Admission"
                          className="hover:text-white transition-colors"
                        >
                          Admissions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Scholarship"
                          className="hover:text-white transition-colors"
                        >
                          Scholarships
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Company"
                          className="hover:text-white transition-colors"
                        >
                          Career Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#AboutAmity"
                          className="hover:text-white transition-colors"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#HeroSection"
                          className="hover:text-white transition-colors"
                        >
                          Home
                        </a>
                      </li>
                      {/* <li><a href="/services" className="hover:text-white transition-colors">services</a></li>
                <li><a href="/listofcollege" className="hover:text-white transition-colors">Explore Colleges</a></li>
               */}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
                      Contact Info
                    </h4>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>+91 7042646766</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="break-all">info@unifostedu.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Noida, India</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Keywords Section */}
                <div className="border-t border-gray-700 pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-white text-center">
                    Popular Programs & Specializations - Amity University Online
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                    {[
                      "BBA General - Amity Online",
                      "BBA Data Analytics - Amity Online",
                      "BBA Travel & Tourism Management - Amity Online",
                      "BBA Business Analytics - Amity Online",
                      "BCA General - Amity Online",
                      "BCA Cloud & Security - Amity Online",
                      "BCA Software Engineering - Amity Online",
                      "BCA Data Science - Amity Online",
                      "B.Com General - Amity Online",
                      "B.Com Hons - Amity Online",
                      "B.Com International Finance & Accounting - Amity Online",
                      "BA Journalism & Mass Communication - Amity Online",
                      "BA Psychology - Amity Online",
                      "BA English - Amity Online",
                      "BA Sociology - Amity Online",
                      "BA Political Science - Amity Online",
                      "BA Economics - Amity Online",
                      "BA Native Languages - Amity Online",
                      "MBA General - Amity Online",
                      "MBA HR Analytics - Amity Online",
                      "MBA Data Science - Amity Online",
                      "MBA Digital Marketing - Amity Online",
                      "MBA International Business - Amity Online",
                      "MBA Finance & Accounting - Amity Online",
                      "MBA Operations Management - Amity Online",
                      "MCA Cyber Security - Amity Online",
                      "MCA Blockchain Technology - Amity Online",
                      "MCA Artificial Intelligence - Amity Online",
                      "M.Sc Data Science - Amity Online",
                      "M.Com Financial Management - Amity Online",
                      "MA Public Policy & Governance - Amity Online",
                    ].map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 cursor-pointer text-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                        title={keyword}
                        onClick={() => {
                          setOpenModal({ type: "apply" });
                        }}
                      >
                        {keyword.length > 25
                          ? `${keyword.substring(0, 25)}...`
                          : keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-400">
                  <p>&copy; 2025 . All rights reserved.</p>
                </div>
              </div>
            </footer>
          </main>
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
              defaultProgram="MBA"
              formType={openModal.type === "apply" ? "getStarted" : "general"}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AmityLandingPage;
