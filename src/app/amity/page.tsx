"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import UniversityDateSlider from "@/components/UniversityDateSlider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Menu,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Inter, Playfair_Display } from "next/font/google";
import PageContent from "@/components/PageContent/PageContent";

import Introduction from "./_components/Introduction";
import About from "./_components/About";
import Headers from "./_components/Headers";
import { OpenModalState } from '../../../types/Modal';

import EnquiryForm from "@/components/EnquiryForm";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
const Courses = dynamic(() => import("./_components/Courses"), { ssr: false });
const Highlights = dynamic(() => import("./_components/Highlights"), { ssr: false });
const Accreditation = dynamic(() => import("./_components/Accreditation"), { ssr: false });
const FeeStructure = dynamic(() => import("./_components/FeeStructure"), { ssr: false });
const Feature = dynamic(() => import("./_components/Feature"), { ssr: false });
const OnlineRegular = dynamic(() => import("./_components/OnlineRegular"), { ssr: false });
const Resources = dynamic(() => import("./_components/Resources"), { ssr: false });
const HiringPartners = dynamic(() => import("./_components/HiringPartners"), { ssr: false });
const Scholarship = dynamic(() => import("./_components/Scholarship"), { ssr: false });
const Certificate = dynamic(() => import("./_components/Certificate"), { ssr: false });
const Placements = dynamic(() => import("./_components/Placements"), { ssr: false });
const OutReach = dynamic(() => import("./_components/OutReach"), { ssr: false });
const Achievements = dynamic(() => import("./_components/Achievements"), { ssr: false });
const CTA = dynamic(() => import("./_components/CTA"), { ssr: false });
const ResourceLinks = dynamic(() => import("./_components/ResourceLinks"), { ssr: false });
const Faq = dynamic(() => import("./_components/Faq"), { ssr: false });
const Footer = dynamic(() => import("./_components/Footer"), { ssr: false });
const ApplyEnquiryModal = dynamic(() => import("@/components/ApplyEnquiryModal"), { ssr: false });

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
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const sectionItems = SECTION_ITEMS;
 
  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,65,000- ₹2,25,000",
      specialization:
        "BBA -General, Data Analytics In collaboration with HCL Tech, Travel And Tourism Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      alt: "BBA from amity online university",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000 - ₹2,25,000",
      specialization:
        "BCA-General, Cloud and Security In collaboration with TCS iON, Data Analytics In collaboration with TCS iON, Data Engineering In collaboration with HCL Tech, Software Engineering In collaboration with HCL Tech, Financial Technology And AI In collaboration withpaytm",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp",
      alt: "BCA from amity online university",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹2,50,000",
      specialization:
        "B.Com-General, Hons, International Finance & Accounting",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      alt: "B.Com from amity online university",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹85,000 - ₹1,70,000",
      specialization:
        "BA-General, Journalism and Mass Communication, Vernacular Languages, English, Sociology, Political Science, Economics)",
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
        "MBA -General, Information Technology Management, Dual Specialization, Data Science, Business Analytics, International Finance Management,Hospital and Healthcare Management In collaboration with Medersity / Appollo Hospital , Digital Marketing Management, Entrepreneurship & Leadership Management, Finance & Accounting Management,   Marketing & Sales Management, Petroleum & Natural Gas, Production and Operations Management, Retail Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      alt: "MBA from amity online university",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation ",
      fees: "₹170,000- ₹2,75,000",
      specialization:
        "MCA-General, Cyber Security In collaboration with HCL Tech, Blockchain Technology And Management,Machine Learning and Artificial Intelligence, Machine Learning and Artificial Intelligence In collaboration with TCS iON, Software Engineering,Financial Technology & AI In collaboration with Paytm",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp",
      alt: "MCA from amity online university",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation ",
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
      eligibility: "10+2 With recognised boards",
      fees: "₹3,45,800",
      specialization: "BBA + MBA",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      alt: "BBA + MBA from amity online university",
    },
    {
      course: "BCA + MCA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With recognised boards",
      fees: "₹3,04,000",
      specialization: "BCA + MCA",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp",
      alt: "BCA + MCA from amity online university",
    },
    {
      course: "B.Com + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With recognised boards",
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
    "Amity University Online vs regular degree programs"
  ];

  const metaKeywordString = metaKeywords.join(", ");

  const metaDescription =
    "Explore UGC-entitled Amity University Online MBA, BBA, BCA, MCA and M.Com degree programs. Review 2025 fees structure, admission process, scholarships, placement assistance.";


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
        "Learners from Kolkata, Bhubaneswar, and Guwahati opt for flexible Amity University Online degree programs to qualify for government jobs and PSU roles without relocating.",
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
        "Absolutely. Amity University Online degree programs are accepted for government jobs in India and are globally recognized, making them suitable for higher studies or international employment opportunities.",
    },
    {
      question: "What is the 2026 Amity University Online MBA fees 2026 structure?",
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
const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="text-center mb-12">
    <Icon className="mx-auto text-4xl text-orange-500 mb-4" />
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);




  
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(
  sectionItems[0]?.id ?? null
);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <React.Fragment>
      <div className="min-h-screen bg-white" style={{ overflowX: "hidden" }}>

       <Headers setOpenModal={setOpenModal} setIsMobileMenuOpen={setIsMobileMenuOpen}/>

       
        
       

        <main className="w-full">
          <div className="pt-[56px] sm:pt-[58px] md:pt-[58px]">
            <div className="bg-[#3526dc] text-gray-900 py-2 sm:py-2.5 md:py-3 mb-0">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center">
                <UniversityDateSlider
                  currentDate="January 2026 Session"
                  nextUpdateDate="Applications Closing on 20 March 2026"
                  information="Limited Seats Available - Apply Now!"
                  special="Average of 50% salary growth"
                  color="blue-900"
                  backgroundColor="blue-900"
                  textColor="#f4f4f8"
                />
              </div>
            </div>
            <Introduction inter={inter} playfair={playfair} openModal={openModal} setOpenModal={setOpenModal}/>
            <About openModal={openModal} setOpenModal={setOpenModal}/>
            <Courses ugCourses={ugCourses} pgCourses={pgCourses} ug_pgCourses={ug_pgCourses} openModal={openModal} setOpenModal={setOpenModal}/>
            <Highlights openModal={openModal} setOpenModal={setOpenModal}/>
            <Accreditation/>
            <FeeStructure ugCourses={ugCourses} pgCourses={pgCourses} ug_pgCourses={ug_pgCourses} openModal={openModal} setOpenModal={setOpenModal}/>
            <Feature setOpenModal={setOpenModal} openModal={openModal}/>
            <OnlineRegular/>
            <Resources fadeIn={fadeIn} staggerChildren={staggerChildren}/>
            <Achievements/> 
           <Scholarship setOpenModal={setOpenModal} openModal={openModal}/>
           <Certificate setOpenModal={setOpenModal} openModal={openModal}/>
           <Placements/>
           <OutReach
              cityHighlights={cityHighlights}
              setOpenModal={setOpenModal}
              openModal={openModal}
            />
            <HiringPartners fadeIn={fadeIn} staggerChildren={staggerChildren}  setOpenModal={setOpenModal}/>
            <CTA/>
            <ResourceLinks setOpenModal={setOpenModal} openModal={openModal}/>
            <Faq
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
            <Footer setOpenModal={setOpenModal} openModal={openModal} />
          </div>
        </main>
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
    </React.Fragment>
  );
};

export default AmityLandingPage;
