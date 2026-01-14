"use client"
import React, { useState } from 'react';
import { Program, Specialization, FAQ } from 'types/NmimsSlug';
import {
  CheckCircle, BookOpen, Award, Briefcase, Users, HelpCircle, FileText,
  GraduationCap, Clock, Star, ArrowRight, ChevronDown, ChevronLeft,
  ChevronRight, ChevronUp, Target, Building2, PlayCircle, Mail, Phone
} from 'lucide-react';
import AnimatedCounter from '../../_Componets/AnimatedCounter';
import { OpenModalState } from 'types/Modal';
import Header from "../../_Componets/Header";
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { NavLink } from "types/navigation";
import FeeNotes from '../../_Componets/FeeNotes';
interface SlugClientProps {
  courseData: Program;
}

const SlugClient = ({ courseData }: SlugClientProps) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [highlightSlide, setHighlightSlide] = useState(0);
  const [careerSlide, setCareerSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [regStep, setRegStep] = useState(0);

  if (!courseData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-10 text-center shadow-lg max-w-md">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-red-700 mb-2">Course Not Found</h1>
          <p className="text-gray-600">The course you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const { about, approval, eligibility, specializations, courseFees, totalFee, curriculum, faqs, notes, scholarship, cancellation  } = courseData;
const sectionMap = [
  { key: "about", label: "Overview", id: "#overview" },
  { key: "approval", label: "Approvals", id: "#approval" },
  { key: "eligibility", label: "Eligibility", id: "#eligibility" },
  { key: "specializations", label: "Specializations", id: "#specializations" },
  { key: "courseFees", label: "Fees", id: "#fees" },
  { key: "curriculum", label: "Curriculum", id: "#curriculum" },
  { key: "faqs", label: "FAQs", id: "#faqs" },
];

const navigationLinks: NavLink[] = sectionMap
  .filter(({ key }) => !!(courseData as any)[key])
  .map(({ label, id }) => ({
    name: label,
    href: id,
  }));

  interface HighlightItem {
    number: string;
    title?: string;
    description?: string;
    gradient?: string;
    icon?: React.ReactNode;
    placeholder?: boolean;
  }
  const keyHighlights: HighlightItem[] = [
    {
      number: "1",
      title: "Be industry-ready",
      description: "Equip yourself with skill sets and industry readiness with UGC-entitled programs from India's Leading Online Learning Institute.",
      gradient: "from-orange-500 to-orange-600",
      icon: <Award className="w-12 h-12" />
    },
    { number: "2",
      title: "Robust curriculum",
      description:"Gain exposure to industry-relevant curriculum and academic rigour recognised by top corporate organisations and start-ups in India.",
      gradient: "from-purple-600 to-purple-700",
      icon: <Briefcase className="w-12 h-12" />
    },
    {
      number: "3",  
      title:"Renowned Faculty",
      description:"Apply invaluable insights from renowned academicians from IITs, IIMs and industry veterans to your coursework and enhance your skills.",
      gradient: "from-purple-600 to-purple-700",
      icon: <Star className="w-12 h-12" />
    },
  
    {
      number: "4",
      title: "Practical Learning",
      description:"Enhanced learning experience under the guidance of reputed academicians with access to live and recorded lectures anytime, anywhere.",
      gradient: "from-purple-600 to-purple-700",
      icon: <BookOpen className="w-12 h-12" />
    }
  ];
    const [isOpen, setIsOpen] = useState(false);

  if (!about) return null;


  const preview =
    typeof about === "string"
      ? about.slice(0, 200) + (about.length > 200 ? "..." : "")
      : null;
 const [activeIndex, setActiveIndex] = useState(0); 
  
  const careerServices = [
    {
      title: "Access to Job Portal",
      icon: <Building2 className="w-16 h-16" />,
      description: "Get a 6-month access to IIMJobs, Updazz & Hirist to find a role of your choice, get your job applications highlighted and improve profile ranking."
    },
    {
      title: "Coaching",
      icon: <Target className="w-16 h-16" />,
      description: "One-on-one personalised guidance by an expert coach to create a strategic roadmap for your career and achieve your professional goals."
    },
    {
      title: "Profile Development",
      icon: <Users className="w-16 h-16" />,
      description: "Get expert mentoring on Resume building, Social Media Profiling and Personal Branding to increase your chances of getting shortlisted."
    },
    {
      title: "Practice Interviews",
      icon: <Briefcase className="w-16 h-16" />,
      description: "One-on-one practice interview sessions to enhance your chances of succeeding at interviews for jobs, career change or promotions."
    },
    {
      title: "Assessment",
      icon: <FileText className="w-16 h-16" />,
      description: "Assessment of your cognitive and behavioural skills through aptitude and psychometric tests to identify the most suitable career path."
    }
  ];
 const [openModal, setOpenModal] = useState<OpenModalState>({ type: 'apply' });
  const registrationSteps = [
    {
      step: "1",
      title: "Registration",
      description: "Register online at online.nmims.edu. Fill up the Registration Form online and pay the mentioned Admission Processing fee."
    },
    {
      step: "2",
      title: "Document Submission",
      description: "Candidate can upload the Gazette Attested photocopies of their documents.",
      documents: ["Academic Documents", "Photo Identity", "Passport Size Photograph"]
    },
    {
      step: "3",
      title: "Fee Payment",
      description: "Modes of Payment:",
      modes: ["Online", "Demand Draft in favour of 'SVKM's NMIMS' payable at Mumbai", "(Finance options available)"]
    }
  ];

  const nextCareerSlide = () => setCareerSlide((prev) => (prev + 1) % Math.max(1, careerServices.length - 2));
  const prevCareerSlide = () => setCareerSlide((prev) => (prev - 1 + Math.max(1, careerServices.length - 2)) % Math.max(1, careerServices.length - 2));

  const nextRegStep = () => setRegStep((prev) => (prev + 1) % registrationSteps.length);
  const prevRegStep = () => setRegStep((prev) => (prev - 1 + registrationSteps.length) % registrationSteps.length);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Header
        navigationLinks={navigationLinks}
  setOpenModal={setOpenModal}
/>
      {/* Fixed Enquire Now Sidebar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button 
          className="bg-purple-600 text-white px-4 py-3 rounded-l-lg font-bold text-sm tracking-wider shadow-lg hover:bg-purple-700 transition-all"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          onClick={() => setOpenModal({ type: 'enquire' })}
        >
          Enquire Now ▼
        </button>
      </div>

      
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 pt-24 pb-16 overflow-hidden">
    
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-40 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white">
              <p className="text-sm font-semibold uppercase tracking-wider mb-4">Degree In Online Mode</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">{courseData.name}</h1>
              
              <button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all mb-8">
                DOWNLOAD BROCHURE
              </button>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-orange-400 font-bold">Gain exposure</span>
                  <span className="text-white"> to</span>
                  <p className="text-gray-200">management trends</p>
                </div>
                <div>
                  <span className="text-orange-400 font-bold">Learn to</span>
                  <span className="text-white"> leverage</span>
                  <p className="text-gray-200">managerial skills</p>
                </div>
              </div>
            </div>

            {/* Right - Image Placeholder */}
        
<div className="relative h-96">
  <div className="w-full h-full bg-white/10 mt-12 backdrop-blur-sm rounded-2xl 
                  flex items-center justify-center overflow-hidden">

    {courseData?.image ? (
      <img
        src={courseData.image}
        alt={courseData.name || "Course Image"}
        className="w-full h-full mt-4 object-cover object-center rounded-2xl"
      />
    ) : (
      <div className="text-white text-center">
        <GraduationCap className="w-24 h-24 mx-auto mb-4" />
        <p className="text-xl">
          {courseData?.name || "Student on Laptop"}
        </p>
      </div>
    )}

  </div>
</div>


          </div>
        </div>
      </section>
     
        
          
          {/* Stats Section */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
  <div>
    <h3 className="text-5xl font-bold text-orange-400 mb-2">
      <AnimatedCounter target={157000} />
    </h3>
    <p className="text-lg">Lives transformed</p>
  </div>

  <div>
    <h3 className="text-5xl font-bold text-orange-400 mb-2">
      <AnimatedCounter target={82000} />
    </h3>
    <p className="text-lg">Alumni across the world</p>
  </div>

  <div>
    <h3 className="text-5xl font-bold text-orange-400 mb-2">
      <AnimatedCounter target={8000} />
    </h3>
    <p className="text-lg">Firms hired our alumni</p>
  </div>
</div>    

      {/* Overview Section */}
      <div className="max-w-8xl mx-auto px-4 py-6 bg-white rounded-lg shadow">
  
  {/* Heading */}
  <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
    Overview in NMIMS
  </h3>

  {/* Content */}
  <div className="prose text-black-700 text-center">
    {typeof about === "string" ? (
      <p>{isOpen ? about : preview}</p>
    ) : (
      <div dangerouslySetInnerHTML={{ __html: about as any }} />
    )}
  </div>

  {/* Toggle Button */}
  {typeof about === "string" && about.length > 200 && (
    <div className="text-center mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
      >
        {isOpen ? "Show Less" : "More Information"}
      </button>
    </div>
  )}
</div>


    
      {/* Key Highlights Section */}
      <section className="py-16 bg-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Key Highlights</h2>
          <p className="text-center text-white mb-12 max-w-3xl mx-auto">
            The  {courseData.name} program is thoughtfully designed to build deep general management and leadership skills, setting the base for a bright career.
          </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {keyHighlights.map((highlight, idx) => {
    const isActive = activeIndex === idx;

    return (
      <div
        key={idx}
        onClick={() => setActiveIndex(idx)}
        className={`
          rounded-2xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300
          ${isActive ? "bg-orange-500 text-white" : "bg-purple-300 text-purple-900"}
        `}
      >
        {/* ACTIVE CARD */}
        {isActive ? (
          <>
            <div className="absolute top-4 right-4 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
              {highlight.icon}
            </div>

            <h3 className="text-6xl font-bold mb-4">
              {highlight.number}
            </h3>

            <h4 className="text-xl font-bold mb-3">
              {highlight.title}
            </h4>

            <p className="text-sm leading-relaxed mb-4">
              {highlight.description}
            </p>

            <ArrowRight className="absolute bottom-4 right-4 w-6 h-6" />
          </>
        ) : (
          /* INACTIVE CARD */
          <div className="flex items-center justify-center h-full">
            <h3 className="text-9xl font-bold text-purple-700/40">
              {highlight.number}
            </h3>
          </div>
        )}
      </div>
    );
  })}
</div>

        </div>
      </section>
   {/* Approvals Section */}
    <div className="max-w-8xl mx-auto px-4 py-6 bg-white rounded-lg shadow">
  
  {/* Heading */}
  <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
    Approvals & Recognitions in NMIMS
  </h3>

  {/* Content */}
  <div className="prose text-black-700 text-center">
    {typeof about === "string" ? (
      <p>{isOpen ? about : preview}</p>
    ) : (
      <div dangerouslySetInnerHTML={{ __html: about as any }} />
    )}
  </div>

  {/* Toggle Button */}
  {typeof about === "string" && about.length > 200 && (
    <div className="text-center mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
      >
        {isOpen ? "Show Less" : "More Information"}
      </button>
    </div>
  )}
  </div>
      {/* Choose Your Program Section */}
  {specializations && specializations.length > 0 && (
  <section id="specializations" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Choose Your Program
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Leapfrog in your corporate career with {courseData.name} Online. A program that offers work-life-study balance, exposure to management trends and robust industry-relevant specialisations.
      </p>

      {/* Specializations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations.map((spec, idx) => {
          const [isOpen, setIsOpen] = useState(false); 

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all"
            >
              {/* Top Purple Area: Image + Arrow */}
              <div
                className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white relative h-48 flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* Image */}
                {spec.image && (
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="relative z-10 fill object-contain bg-white/10 p-2 rounded-xl"
                  />
                )}

                {/* Arrow */}
                <div
                  className="absolute bottom-4 right-4 text-2xl transform transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▼
                </div>
              </div>

              {/* Bottom Content: Expandable */}
              <div
                className={`p-6 transition-all duration-500 ${
                  isOpen ? "max-h-full" : "max-h-0 overflow-hidden"
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.name}</h3>

                {spec.description && (
                  <p className="text-gray-700 mb-2 text-sm">{spec.description}</p>
                )}

                {Array.isArray(spec.highlights) && spec.highlights.length > 0 && (
                  <ul className="list-disc pl-5 mb-2 text-gray-700 text-sm">
                    {spec.highlights.map((h: string, i: number) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                {spec.suitability && (
                  <p className="text-gray-600 italic text-sm">{spec.suitability}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
)}

 {/* Program Structure Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Program Structure</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            This {courseData.name} (Online) equips participants with essential management skills and the confidence to achieve their goals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-6xl font-bold text-orange-500 mb-2">{courseData.duration}</h3>
              <p className="text-sm text-gray-600 font-semibold">Years<br />Duration</p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold text-orange-500 mb-2">4</h3>
              <p className="text-sm text-gray-600 font-semibold">Years Validity</p>
            </div>
          <div className="text-center">
             <h3 className="text-6xl font-bold text-orange-500 mb-2">
                 {courseData.terms || courseData.samesters}
               </h3>

                <p className="text-sm text-gray-600 font-semibold">
                   {courseData.terms ? "Terms" : "Semesters"}
                  </p>
                 </div>

            <div className="text-center">
              <FileText className="w-16 h-16 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-semibold">Evaluation: IA<br />+ TEE</p>
            </div>
          </div>

          <div className="bg-purple-100 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 flex items-end space-x-2 mr-64">
              <div className="w-16 h-24 bg-purple-600 rounded-t-lg"></div>
              <div className="w-16 h-32 bg-purple-600 rounded-t-lg"></div>
              <div className="w-16 h-40 bg-purple-600 rounded-t-lg"></div>
            </div>
            <button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all relative z-10">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>
      {/* Curriculum Section */}
      {curriculum && (
        <section id="curriculum" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.isArray(curriculum) ? curriculum.map((sem: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-purple-600 mb-4">
                    {sem.term || sem.semester || `Part ${idx + 1}`}
                     </h3>
                  <ul className="space-y-2">
                    {sem.subjects && Array.isArray(sem.subjects) ? sem.subjects.map((sub: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    )) : <p className="text-sm text-gray-500">Subjects details available in brochure.</p>}
                  </ul>
                </div>
              )) : <div className="col-span-2 text-center text-gray-600">Curriculum details available in brochure.</div>}
            </div>
          </div>
        </section>
      )}

     

      {/* Learning Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Learning Experience</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Get a healthy work-life-study balance with this program designed for working professionals delivered through the latest learning management systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Study at your own convenience</h3>
              <div className="mb-6 flex items-center justify-center h-32">
                <Clock className="w-32 h-32 text-purple-600" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access the Student Zone on our portal and mobile app to access all your courseware and other relevant information.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Learn using online resources</h3>
              <div className="mb-6 flex items-center justify-center h-32">
                <BookOpen className="w-32 h-32 text-purple-600" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Avail study material like e-books, journals, and lecture transcripts. Get 24X7 access to recorded lectures and interact with faculty.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Dedicated student success team</h3>
              <div className="mb-6 flex items-center justify-center h-32">
                <Users className="w-32 h-32 text-purple-600" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Submit your query via Ticketing Tool under Student Support, schedule a callback, or use Chat Option (Mon-Sat, 9 AM to 7 PM).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Certificate Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Program Certificate</h2>
              <p className="text-lg leading-relaxed">
                Celebrate your achievement with an official certificate from NMIMS CDOE, marking your commitment to excellence and knowledge
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="mb-4 text-gray-400 text-sm">SAMPLE</div>
                <div className="w-20 h-20 bg-gray-300 mx-auto mb-4 rounded"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">XXXXXX XXXXXX</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Has successfully completed all academic requirements<br />
                  for the award of the degree of
                </p>
                <p className="text-lg font-bold text-purple-600 mb-6">
                  Master of Business Administration<br />
                  (Specialization)
                </p>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500">Official Signature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Services Section with Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Career Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Empower your career with targeted assessments, personalised coaching and professional development tools to navigate job markets confidently and secure the roles you aspire to.
          </p>

          <div className="relative">
            <button onClick={prevCareerSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextCareerSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careerServices.slice(careerSlide, careerSlide + 3).map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-purple-600">{service.title.split(' ')[0]}</span>
                    {service.title.split(' ').length > 1 && (
                      <span className="text-pink-600"> {service.title.split(' ').slice(1).join(' ')}</span>
                    )}
                  </h3>
                  <div className="mb-6 flex justify-center text-orange-500">
                    {service.icon}
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, careerServices.length - 2) }).map((_, idx) => (
                <div key={idx} className={`w-3 h-3 rounded-full ${idx === careerSlide ? 'bg-orange-500' : 'bg-purple-300'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Hiring Partners Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
      Hiring Partner
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Build your career with various multinational companies, corporations and
      start-ups across industries & geographies as hiring partners.
    </p>

    {/* Partners Grid */}
    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">

      {[
        { name: "TCS", logo: "/images/tcs.webp" },
        { name: "ICICI", logo: "/images/icici.webp" },
        { name: "IBM", logo: "/images/ibm.webp" },
        { name: "Flipcart", logo: "/images/flipkart.webp" },
        { name: "Deloitte", logo: "/images/deloitte.webp" },
        { name: "Tech-Mahindra", logo: "/images/tech-mahindra.webp" },
      ].map((company, idx) => (
        <div
          key={idx}
          className="w-full h-24 flex items-center justify-center 
                     bg-gray-50 rounded-lg p-4 
                     border border-gray-200 
                     hover:shadow-md transition"
        >
          <img
            src={company.logo}
            alt={company.name}
            className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      ))}

    </div>
  </div>
</section>


     {/* Testimonials Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Testimonials</h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Learn from the alumni about their learning experience in NMIMS CDOE and how it has helped them in accelerating their careers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          name: "Perna Kumari", 
          quote: "Thank you, NMIMS, for boosting my confidence.", 
          bg: "bg-gray-300", 
          image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102289/sonal_c8xgej.jpg" 
        },
        { 
          name: "Supriya D.", 
          quote: "I'm confident this course will support my career progression.", 
          bg: "bg-gray-300", 
          image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763101215/Sneha_tmk0yf.jpg" 
        },
        { 
          name: "Amardeep", 
          quote: "I highly recommend NMIMS for online education.", 
          bg: "bg-purple-600", 
          image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102290/amit_laq7ku.jpg"
        }
      ].map((testimonial, idx) => (
        <div key={idx} className="text-center">
          <p className="text-xl italic text-gray-700 mb-6">"{testimonial.quote}"</p>
          <div className={`relative w-64 h-64 mx-auto mb-4 rounded-2xl overflow-hidden ${testimonial.bg} flex items-center justify-center`}>
            {testimonial.image && (
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <h4 className="text-lg font-bold text-purple-600">{testimonial.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Batch Profile Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Batch Profile</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Be a part of a diverse group of skilled working professionals from various career paths by becoming an NMIMS alumnus.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-orange-400 rounded-2xl p-12 h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-xl font-semibold">Diversity Chart</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-between">
                <p className="text-lg">Students from across top corporates and start-ups of India & across the world</p>
                <h3 className="text-5xl font-bold">7500</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-between">
                <p className="text-lg">Students from across these pincodes of India country</p>
                <h3 className="text-5xl font-bold">8000</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Process</h2>
          
          {/* Important Dates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Important Dates</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {['New Admission', 'Re-registration'].map((type, i) => (
                <div key={i} className="bg-purple-100 rounded-2xl overflow-hidden">
                  <div className="bg-purple-600 text-white px-6 py-3 font-bold">{type} Schedule</div>
                  <div className="p-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-orange-500">
                          <th className="text-left py-2 text-orange-500">Particulars</th>
                          <th className="text-left py-2 text-orange-500">Dates</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="py-3 text-gray-600">Registration Starts</td><td>22nd Sept, 2025</td></tr>
                        <tr className="border-b"><td className="py-3 text-gray-600">Admission without Late Fees</td><td>22nd Sept - 31st Jan, 2026</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Eligibility</h3>
            <div id="eligibility" className="bg-gray-50 rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center text-orange-500 text-6xl">✓</div>
              <div>
                <p className="text-lg font-bold mb-4">The {courseData.name} program eligibility:</p>
                <div className="text-gray-700">
                  {typeof eligibility === 'string' ? <p>{eligibility}</p> : (eligibility as any)?.description || "Bachelor's Degree in any discipline with minimum 50% marks (45% for SC/ST/OBC/PwD)."}
                </div>
              </div>
            </div>
          </div>
{/* Fees Section */}
{(courseFees || totalFee) && (
  <div id="fees" className="mb-12">
    <h3 className="text-2xl font-bold text-purple-600 mb-6">Fees Structure</h3>
    <p className="text-gray-600 mb-6">Check the total, annual, and semester-wise fees for this program.</p>

    <div className="grid md:grid-cols-3 gap-6">

      {(courseFees ? [
        {
          type: "Total Program Fees",
          description: "Complete program fee",
          amount: courseFees.total || "Refer Brochure"
        },
        {
          type: "Annual Fees",
          description: "Pay once for the full year",
          amount: courseFees.annual || "Refer Brochure"
        },
        {
          type: "Semester-wise Fees",
          description: "Pay per semester",
          amount: courseFees.semester || "Refer Brochure"
        }
      ] : [
        {
          type: "Total Program Fees",
          description: "Complete program fee",
          amount: totalFee || "Refer Brochure"
        }
      ]).map((fee, idx) => (
        <div key={idx} className="rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          
          {/* Card Header */}
          <div className="bg-orange-500 text-white p-6">
            <h4 className="text-2xl font-bold mb-2">{fee.type}</h4>
            <p>{fee.description}</p>
          </div>
          
          {/* Card Body */}
          <div className="bg-white p-6 text-center">
            <p className="text-purple-600 font-bold text-xl mb-2">{courseData.name}</p>
            <p className="text-4xl font-bold text-gray-900">{fee.amount}</p>
          </div>

        </div>
      ))}

    </div>
  </div>
)}
{courseData?.feePolicy && (() => {
  const feePolicy = courseData.feePolicy;

  return (
    <section className="w-full mt-6 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Notes */}
        <div className="bg-gray-400 rounded-2xl shadow-sm p-8 space-y-4 text-black">
          <p>
            <strong>Note:</strong> {feePolicy.notes.noteText}
          </p>

          <ul className="list-disc pl-6 space-y-2">
            {feePolicy.notes.points.map((item, i) => (
              <li key={i}>
                {item.replace(
                  "{FULL_FEE}",
                  feePolicy.notes.fullFee
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Scholarship */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold mb-4">
            {feePolicy.scholarship.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {feePolicy.scholarship.description}
          </p>
        </div>

        {/* Cancellation */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold mb-2">
            {feePolicy.cancellation.title}
          </h3>
          <p className="text-gray-500">
            {feePolicy.cancellation.description}
          </p>
        </div>

      </div>
    </section>
  );
})()}


          {/* Registration Process */}
          <div className="mb-16">
  <h3 className="text-3xl font-bold text-purple-600 mb-2">
    Registration Process
  </h3>
  <p className="text-gray-600 mb-10">
    Simple step-by-step process for enrolling in the program.
  </p>

  <div className="relative">

    {/* Navigation Buttons */}
    <button
      onClick={() => setRegStep(Math.max(0, regStep - 1))}
      className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 
                 bg-white rounded-full p-3 shadow-lg hover:scale-105 transition"
    >
      <ChevronLeft className="w-6 h-6 text-purple-600" />
    </button>

    <button
      onClick={() => setRegStep(Math.min(3, regStep + 1))}
      className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                 bg-white rounded-full p-3 shadow-lg hover:scale-105 transition"
    >
      <ChevronRight className="w-6 h-6 text-purple-600" />
    </button>

    {/* Steps */}
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: "1",
          title: "Registration",
          desc: "Fill the online registration form and pay the admission processing fee.",
        },
        {
          step: "2",
          title: "Document Submission",
          desc: "Upload attested copies of academic documents, photo ID and passport size photograph.",
        },
        {
          step: "3",
          title: "Fee Payment",
          desc: "Pay fees online or via demand draft in favour of 'SVKM’s NMIMS' payable at Mumbai.",
        },
        {
          step: "4",
          title: "Confirmation",
          desc: "After verification, your admission will be confirmed and student number will be issued.",
        },
      ].map((s, i) => {
        const active = i === regStep;

        return (
          <div
            key={i}
            className={`relative rounded-2xl p-8 border transition-all duration-300
              ${
                active
                  ? "bg-purple-600 text-white shadow-2xl scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:shadow-lg"
              }`}
          >
            {/* Step Number Circle */}
            <div
              className={`absolute -top-5 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                ${
                  active
                    ? "bg-white text-purple-600"
                    : "bg-purple-100 text-purple-600"
                }`}
            >
              {s.step}
            </div>

            <h4 className="text-xl font-bold mb-4 mt-4">
              {s.title}
            </h4>

            <p
              className={`text-sm leading-relaxed ${
                active ? "text-purple-100" : "text-gray-600"
              }`}
            >
              {s.desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Info Session CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-2">INFO SESSION</h3>
            <p>Share your email for next infosession</p>
          </div>
          <button onClick={() => setOpenModal({ type: 'enquire' })} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg">
            SIGN UP
          </button>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section id="faqs" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Key FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border rounded-xl overflow-hidden">
                  <button onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} className="w-full px-6 py-4 text-left font-semibold flex justify-between bg-white hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">{i+1}</span>
                      {faq.question}
                    </span>
                    <ChevronUp className={`w-5 h-5 transition-transform ${activeFAQ === i ? '' : 'rotate-180'}`} />
                  </button>
                  {activeFAQ === i && (
                    <div className="px-6 py-4 bg-gray-50 border-t text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Student Portal</li>
                <li>All Programs</li>
                <li>Admission Process</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">NMIMS CDOE</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>About NMIMS</li>
                <li>Faculty</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
       </div>
       </footer>
       {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1766467891/nmimsenquary_exxyyv.png"
          universityName="NMIMS Global Online"
          defaultProgram={openModal.program || courseData.name}
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
       </div>
  )};
  export default SlugClient            