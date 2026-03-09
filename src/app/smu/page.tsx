'use client';
import PageContent from '@/components/PageContent/PageContent';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { optimizeCloudinary } from '@/utils/cloudinary';
import { useEffect, useState } from 'react';
import { FaPhone } from "react-icons/fa";
import AdvantageWhyChoose from "./_Components/AdvantageWhyChoose";
import CompusTour from "./_Components/CompusTour";
import DatesSession from "./_Components/DatesSession";
import ExploreCourses from "./_Components/ExploreCourses";
import FeesSMU from "./_Components/FeesSMU";
import Footer from "./_Components/Footer";
import Introducation from "./_Components/Introducation";
import KeyhighlightFaq from "./_Components/KeyhighlightFaq";
import LegacyAdmissionCertificate from "./_Components/LegacyAdmissionCertificate";
import PlacementRecordPartnersReview from "./_Components/PlacementRecordPartnersReview";
import Recognitions from "./_Components/Recognitions";
import Review from "./_Components/Review";
import SmuOnlineContent from "./_Components/SmuOnlineContent";
import UniversityDateSlider from '@/components/UniversityDateSlider';



const SMU = () => {
  const sectionItem = [

    { id: "introduction", label: "Introduction" },
    { id: "campus-tour", label: "Campus Tour" },
    { id: "dates and session", label: "Admission Dates " },
    { id: "explore-courses", label: "Courses and Fee Structure" },
    { id: "admission-process", label: "Admission Process" },
    { id: "key-highlights", label: "Highlights" },
    { id: "faqs", label: "FAQs" },
    { id: "placement-record", label: "Placement Record" },
    { id: "student-review", label: "Student Reviews" },
    { id: "placement-partners", label: "Placement Partners" },
    { id: "reviews", label: " Reviews" },
    { id: "conclusion", label: "Conclusion" },


  ];
  const [activeSection, setActiveSection] = useState(sectionItem[0]?.id ?? null);


  useEffect(() => {
    if (!sectionItem.length) return undefined;

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

    sectionItem.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionItem.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sectionItem]);
  const ugCourses = [
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 or equivalent",
      fees: "₹75,000",
      specialization: "English , Sociology , Political Science",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Bachelor of Arts (BA) in SMU Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 or equivalent",
      fees: "₹75,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Bachelor of Commerce (B.Com) in SMU Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 50% marks",
      fees: "₹1,10,000",
      specialization: "Dual Specialization (Marketing, Finance, HR, Systems, Operations and Supply Chain Management, Healthcare Management)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Business Administration (MBA) in SMU Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation with minimum 50% marks",
      fees: "₹98,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Computer Applications (MCA) in SMU Online",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation in relevant stream",
      fees: "₹75,000",
      specialization: "English / Sociology / Political Science",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Arts (M.A.) in SMU Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce or equivalent",
      fees: "₹75,000",
      specialization: "Finance, Marketing",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      university: "Sikkim Manipal University",
      universityShort: "SMU",
      alt: "Master of Commerce (M.Com) in SMU Online",
    },
  ];


  useEffect(() => {


     const timer= setTimeout(()=>{
     setOpenModal({ type: 'apply' } as any)
      },3000)
      return () => clearTimeout(timer);


  }, [])




  const heroBadges = [
    { label: "UGC Entitled", detail: "Globally valid degrees" },
    { label: "NAAC A+", detail: "Trusted academic legacy" },
    { label: "AI-Proctored", detail: "Secure online exams" },
  ];

  const heroStats = [
    { value: "30+", label: "Years of Excellence" },
    { value: "50K+", label: "Alumni Network" },
    { value: "150+", label: "Hiring Partners" },
    { value: "4.7/5", label: "Learner Score" },
  ];

  const heroFeatureChips = [
    { icon: "🎓", text: "UGC-Entitled Degrees" },
    { icon: "💼", text: "Career Studio Support" },
    { icon: "💰", text: "Flexible Fee Plans" },
    { icon: "🌍", text: "Global Recognition" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "MBA",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763101215/Sneha_tmk0yf.jpg",
      text: "The online MBA program at SMU helped me transition from a technical role to a management position. The flexible schedule allowed me to continue working while upgrading my skills."
    },
    {
      name: "Rahul Verma",
      course: "MCA",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102290/amit_laq7ku.jpg",
      text: "As a working professional in IT, SMU's MCA program provided me with the latest technical knowledge without disrupting my career. The faculty support was exceptional."
    },
    {
      name: "Anita Patel",
      course: "B.Com",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102177/riya1_qsbhqy.jpg",
      text: "Pursuing B.Com from SMU Online was the best decision. The affordable fees and quality education helped me build a strong foundation in commerce while managing my family responsibilities."
    },
    {
      name: "Deepak Singh",
      course: "MA Political Science",
      university: "SMU",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102223/pritik_i2s3ch.jpg",
      text: "The MA program at SMU provided me with deep insights into political science. The online resources and faculty guidance were instrumental in my academic growth."
    }
  ];


 const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenIndex(prev => (prev === index ? null : index));
};

 
  const [modalType, setModalType] = useState('getStarted');
 type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

const [openModal, setOpenModal] = useState<OpenModalState>(null);

  const [activeTab, setActiveTab] = useState('all');

  const openWhatsAppSupport = () => {
    if (typeof window === "undefined") return;
    window.open("https://wa.me/917042646766", "_blank", "noopener,noreferrer");
  };

  const quickActionCards = [
    {
      title: "Talk to an Advisor",
      desc: "Get a personalised roadmap in minutes",
      icon: "🤝",
      cta: "Book a Call",
      action: () => setOpenModal({ type: "apply" }),
    },
    {
      title: "WhatsApp Support",
      desc: "Ask questions & get instant updates",
      icon: "💬",
      cta: "Chat Now",
      action: openWhatsAppSupport,
    },
    {
      title: "Download Program Kit",
      desc: "Compare fees, eligibility & outcomes",
      icon: "📄",
      cta: "Get Brochure",
      action: () => setOpenModal({ type: "enquire" }),
    },
  ];




  return (
    <>
      <style jsx>{`
        .font-queens {
          font-family: 'Queens', serif;
        }
        .font-manrope {
          font-family: 'Manrope', 'Inter', system-ui, sans-serif;
        }
        .font-playfair {
          font-family: 'Playfair Display', 'Times New Roman', serif;
        }
      `}</style>

      <div className="font-manrope overflow-x-hidden text-base md:text-lg lg:text-xl">
        {/* Header */}
        <header className="w-full fixed bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg"
                  alt="SMU Logo"
                  className="h-8 w-auto sm:h-10 lg:h-12"
                />
                <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                  <span className="text-[#f26722]">Online</span>{" "}
                  <span className="text-gray-800">SMU</span>
                </h1>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-4">

                {/* Phone (Desktop) */}
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f26722] transition-colors"
                >
                  <FaPhone className="text-orange-500 rotate-90" />
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>

                {/* Phone (Mobile) */}
                <a
                  href="tel:+917042646766"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#f26722]/10 rounded-full text-[#f26722] hover:bg-[#f26722]/20 transition-colors cursor-pointer"
                >
                  📞
                </a>

                {/* Apply Button */}
                <button
                  onClick={() => setOpenModal({ type: "apply" })}
                  className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline">Apply Now</span>

                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>
        
        
        <PageContent
          sectionItems={sectionItem}
          activeSection={activeSection}
          progressive
          topOffsetClass="top-16 lg:top-20"
          scrollOffset={160}
          mode="breadcrumb"
          position="fixed"
        />

        <div className="pt-16 lg:pt-20 mt-10 lg:mt-12">
          <UniversityDateSlider
             currentDate="January 2026 Session"
             nextUpdateDate="Applications Closing on 11 March 2026"
             information="Limited Seats Available - Apply Now!"
             special="Average of 50% salary growth"
             color="#dc2626"
             backgroundColor="#fee2e2"
             textColor="#991b1b"
          /> 
        </div>
        <div className="max-w-screen-2xl mx-auto">
          <main className="flex-1 min-w-0">
            
            <div className="overflow-x-hidden pt-0">


              {/* Hero Section */}
              <Introducation setOpenModal={setOpenModal}  />


              {/* Quick Action Panel */}

              <SmuOnlineContent setOpenModal={setOpenModal} />


              <CompusTour setOpenModal={setOpenModal}/>




              {/* Enhanced Statistics Section */}


              {/* Professional Rankings & Accreditations Section */}
              <Recognitions setOpenModal={setOpenModal} />

              <DatesSession setOpenModal={setOpenModal}/>


              {/* Enhanced Courses Section */}
              <ExploreCourses ugCourses={ugCourses} pgCourses={pgCourses} setOpenModal={setOpenModal}  />

              <FeesSMU setOpenModal={setOpenModal}/>
              {/* Modern 360 Advantage */}



              {/* Why Choose Section */}
              <AdvantageWhyChoose setOpenModal={setOpenModal}/>
              <section className="w-full bg-white text-gray-800 mt-2">
                <div className="max-w-5xl mx-auto space-y-10 px-4">

                  {/* Legacy of Quality */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">A Legacy of Quality and Trust</h2>
                    <p className="leading-relaxed">
                      SMU Online carries forward the trust and excellence of the Manipal Education Group, which has educated
                      millions globally. Courses are designed by experienced teachers and industry experts to ensure they
                      remain practical and up-to-date. Students gain access to digital libraries, 24/7 study materials, live
                      discussions, and continuous mentor support. Whether you live in Delhi, Patna, Mumbai, or abroad, you can
                      earn a UGC-approved online degree from Sikkim Manipal University that is recognized worldwide. This
                      strong reputation makes SMU Online one of the top choices for online BCom, online MCom, online MBA, and
                      BBA programs in India.
                    </p>
                  </div>

                  {/* Empowering Learners */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Empowering Learners for the Future</h2>
                    <p className="leading-relaxed">
                      Today's workplaces demand digital skills, business understanding, and financial knowledge. The Online
                      MCom and Online BCom programs from Sikkim Manipal University are designed to prepare learners with
                      exactly these skills. The curriculum integrates case studies, interactive assessments, and live
                      industry projects to ensure students gain hands-on experience. Graduates find strong career
                      opportunities in banking, auditing, taxation, and finance. Meanwhile, the Online MBA and BBA programs
                      help build managerial and entrepreneurial confidence for leadership roles.
                    </p>
                  </div>

                  {/* Recognition and Global Acceptance */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Recognition and Global Acceptance</h2>
                    <p className="leading-relaxed">
                      A major benefit of studying at Sikkim Manipal University Online is the global acceptance of its degrees.
                      All programs — including Online MCom, Online BCom, Online MBA, and BBA — are UGC-approved and hold the
                      same value as on-campus programs. Employers and universities worldwide recognize the academic standards
                      of SMU Online, giving learners an advantage in both career opportunities and higher education.
                    </p>
                  </div>

                  {/* Technology Driven Learning */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Technology-Driven Learning Experience</h2>
                    <p className="leading-relaxed mb-4">
                      SMU Online uses advanced digital tools to deliver an interactive and seamless learning experience.
                      Students benefit from:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Live virtual classes</li>
                      <li>AI-based assessments</li>
                      <li>Progress tracking</li>
                      <li>24/7 access to e-resources and recorded lectures</li>
                    </ul>
                    <p className="leading-relaxed mt-3">
                      Every online degree provides access to e-books, discussion forums, doubt-clearing sessions, and
                      placement guidance — ensuring an engaging and supportive learning journey.
                    </p>
                  </div>

                  {/* Affordable & Flexible */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Affordable and Flexible Education</h2>
                    <p className="leading-relaxed">
                      Sikkim Manipal University Online ensures education remains both flexible and affordable. Programs like
                      the Online MCom, Online BCom, and Online MBA come with easy EMI plans and reasonable fees. Students can
                      balance academics with work or personal commitments, making SMU Online a preferred choice for working
                      professionals. This approach has helped SMU rank among India's best universities for online MCom, online
                      BBA programs, and UGC-approved online degrees.
                    </p>
                  </div>

                  {/* Career Focus */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Building Careers, Not Just Degrees</h2>
                    <p className="leading-relaxed">
                      At SMU Online, education goes beyond academics — it focuses on career development. Students receive
                      career counseling, resume-building support, mock interview sessions, and participate in virtual job
                      fairs. Graduates from Online BCom and Online MCom programs secure roles in top industries such as
                      banking, finance, and consulting. With a strong emphasis on employability, Sikkim Manipal University
                      Online ensures students gain not just a degree, but a pathway to a successful and rewarding career.
                    </p>
                  </div>

                </div>
              </section>

              {/* Admission Procedure */}


              {/* Certificate Section */}

              <LegacyAdmissionCertificate setOpenModal={setOpenModal}/>






              {/* Professional FAQ Section */}
              <KeyhighlightFaq setOpenModal={setOpenModal} />



              {/* Premium Testimonials */}


              {/* Professional Hiring Partners Section */}
              <PlacementRecordPartnersReview setOpenModal={setOpenModal} />
              <Review setOpenModal={setOpenModal} />

              {/* Premium Footer */}
              <Footer setOpenModal={setOpenModal}/>
       {openModal && (
  <ApplyEnquiryModal
    open={true}
    onOpenChange={(v) => {
      if (!v) setOpenModal(null);
    }}
    title={
      openModal.type === 'apply'
        ? 'Start Your Application'
        : 'Enquire Now'
    }
    subtitle={
      openModal.type === 'apply'
        ? 'Fill the quick form to begin your admission process'
        : 'Share your details and our counselor will reach out'
    }
    imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
    universityName="Sikkim Manipal University"
    defaultProgram={openModal.program ?? 'MBA'}
    formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
    showImage
  />
)}



            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SMU;
