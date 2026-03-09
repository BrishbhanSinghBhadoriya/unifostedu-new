'use client';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import EnquiryForm from '@/components/EnquiryForm';
import PageContent from '@/components/PageContent/PageContent';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { optimizeCloudinary } from '@/utils/cloudinary';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import About from './_components/About';
import AdmissionDatesManipal from './_components/AdmissionDatesManipal';
import AdmissionFeesProcessSessions from './_components/AdmissionFeesProcessSessions';
import AdvantageManipal from './_components/AdvantageManipal';
import AdvantagesManipal from './_components/AdvantagesManipal';
import CampusTour from './_components/CampusTour';
import CertificateLocation from './_components/CertificateLocation';
import ComparisonStudentReviews from './_components/ComparisonStudentReviews';
import Courses from './_components/Courses';
import ExploreClasses from './_components/ExploreClasses';
import FaqReviewsHiring from './_components/FaqReviewsHiring';
import FooterManipal from './_components/FooterManipal';
import Hero from './_components/Hero';
import Introduction from './_components/Introduction';
import KeyHighlights from './_components/KeyHighlights';
import PlacementPartners from './_components/PlacementPartners';
import PlacementRecord from './_components/PlacementRecord';
import ProgramBenefit from './_components/ProgramBenefit';
import RankingAccreditionsManipal from './_components/RankingAccreditionsManipal';
import WhyChooseManipal from './_components/WhyChooseManipal';
import { OpenModalState } from '../../../types/Modal';
import UniversityDateSlider from '@/components/UniversityDateSlider';

const Manipal = () => {

  const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Finance & Accounting, Digital Marketing,Marketing, Entrepreneurship Management & Family Business, Human Resource Management,  Data Analytics, Retail & E-commerce Management",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Business Administration (BBA) in Manipal Online",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "1,35,000",
      specialization: "Data Science and Analytics, Cyber Security, Cloud Computing",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipal-online-mca_moc5om.png",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Computer Applications (BCA) in Manipal Online",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Minimum 40%",
      fees: "99,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327070/bcom-online-image_pdmurc.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Bachelor of Commerce (B.Com) in Manipal Online",
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "50% Graduation",
      fees: "1,75,000",
      specialization: "Super/Dual(Digital Marketing, Marketing, Analytics and Data Science, IT & Fintech, Finance Management, Human Resource Management, BFSI, Operations Management, International Business, Information Systems Management, Project Management, Supply Chain Management, Retail Management)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Business Administration (MBA) in Manipal Online",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: " Graduation",
      fees: "1,58,000",
      specialization: "AI & Data Science, Cyber Security, Cloud Computing, Comprehensive Emerging Technologies,AI & ML",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Computer Applications (MCA) in Manipal Online",
    },
    {
      course: "Master of science (M.Sc.)",
      duration: "2 Years",
      eligibility: "Graduation ",
      fees: "80,000",
      specialization: "Mathematics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1771066433/amrita_overview_t6ofin.png",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Commerce (M.Com) in Manipal Online",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Any Discipline ",
      fees: "1,08,000",
      specialization: "General",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/m.com_libbpo.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Commerce (M.Com) in Manipal Online",
    },

    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "80,000 ",
      specialization: " Economics,MA (Journalism and Mass Communication)",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp",
      university: "Manipal University Jaipur",
      universityShort: "MUJ",
      alt: "Master of Arts (MA) in Manipal Online",
    },
  ];

  const [showStickyCTA, setShowStickyCTA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const faqData = [
    {
      question: "Is Manipal University Jaipur Online approved by UGC?",
      answer:
        "Yes, Manipal University Jaipur Online is UGC-entitled and NAAC A+ accredited. All online degrees are valid and globally recognized."
    },
    {
      question: "Are the online MBA and online BCA degrees equivalent to regular programs?",
      answer:
        "Yes, all Manipal Online degrees hold the same recognition as traditional on-campus programs."
    },
    {
      question: "Can international students apply for Manipal Online programs?",
      answer:
        "Yes, students from over 50 countries enroll in Manipal University Jaipur Online each year."
    },
    {
      question: "What learning support does MUJ Online offer?",
      answer:
        "Students receive access to 24×7 LMS, live lectures, recorded classes, digital library, and dedicated student support teams."
    },
    {
      question: "Does Manipal Online provide placement assistance?",
      answer:
        "Yes, MUJ Online has a strong placement and career guidance cell offering job connections and industry mentorship."
    }
  ];
  useEffect(() => {


    const timer = setTimeout(() => {
      setOpenModal((type: OpenModalState) => type === null ? { type: 'enquire' } : type);
    }, 3000)
    return () => clearTimeout(timer);


  }, [])

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionItems = [
    { id: "HeroSection", label: "Introduction" },
    { id: "CampusTour", label: "Campus Tour" },
    { id: "Courses", label: "Explore Courses" },
    { id: "KeyHighlights", label: "Key Highlights" },
    { id: "AdmissionDates", label: "Admission Dates" },
    { id: "Fees", label: "Fees Structure" },
    { id: "Admission", label: "Admission Process" },
  ];
  const activeSection = sectionItems[0]?.id ?? null;





  return (
    <>



      <style jsx>{`
        .poppins { font-family: 'Poppins', sans-serif; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
      `}</style>
      <div className="poppins overflow-x-hidden break-words hyphens-auto">



        {/* Professional Responsive Header */}
        <header className="w-full fixed top-0 left-0 bg-white/98 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 min-h-[64px]">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
                <Image
                  src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg")}
                  alt="Manipal University Logo"
                  width={200}
                  height={200}
                  className="h-7 sm:h-9 md:h-11 lg:h-12 w-auto"
                />
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <FaBars className="w-5 h-5 text-gray-700" />
                </button>

                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base hover:text-orange-600 transition-colors"
                >
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call</span>
                </a>

                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042646766"
                  className="sm:hidden flex items-center justify-center w-9 h-9 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  <span className="text-base">📞</span>
                </a>

                {/* Apply Button */}
                <button
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

         
          
          {/* Left Sidebar */}
          <div className="mt-[64px] sm:mt-[72px] md:mt-[80px]">
            <PageContent
              sectionItems={sectionItems}
              activeSection={activeSection}
              ismobilemenuopen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              progressive
              position="fixed"
              topOffsetClass="top-[64px] sm:top-[72px] md:top-[80px]"
              mode="chips"
            />
          </div>
          
          {/* Main Content */}
          <main className="flex-1 min-w-0 pt-32 md:pt-36 lg:pt-16">

            {/* Enquiry Modal */}
            {showEnquiryModal && (
              <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
                <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                      Get Started with Manipal University
                    </DialogTitle>
                  </DialogHeader>
                  <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} universityName="Manipal University Jaipur" />
                </DialogContent>
              </Dialog>
            )}
            <UniversityDateSlider
                  currentDate="January 2026 Session"
                  nextUpdateDate="Applications Closing on 11 March 2026"
                  information="Limited Seats Available - Apply Now!"
                  special="Average of 50% salary growth"
                  color="#dc2626"
                  backgroundColor="#fee2e2"
                  textColor="#991b1b"
                />
            {/* Introduction Hero Section */}
            <Introduction setOpenModal={setOpenModal} openModal={openModal} />

            {/* Welcome Section */}
            <Hero setOpenModal={setOpenModal} openModal={openModal} />

            {/* Why Choose Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Why Choose <span className="text-orange-600">Manipal University Jaipur Online?</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8 sm:space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">1.</span>
                      <span>Accredited, Respected Degrees</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Manipal Online</strong> degrees are <strong>UGC-entitled</strong> and backed by
                      <strong>Manipal University Jaipur (MUJ)</strong> — a <strong>NAAC A+ accredited</strong> institution.
                      This recognition positions Manipal among the <strong>best online degree in Jaipur</strong> options for quality and credibility.
                      If you are searching for <em>"top college in Jaipur"</em>, institutional accreditation makes
                      <strong>Manipal Online</strong> a trusted choice for long-term career growth.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">2.</span>
                      <span>Career-Driven, Industry-Aligned Curriculum</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The <strong>online MBA with Manipal</strong> is designed with input from industry leaders and offers
                      immediate workplace relevance. With specializations in <strong>Digital Marketing, Business Analytics, Finance,
                        Healthcare Management, and IT & Fintech</strong>, learners can tailor their studies to market needs.
                      Those exploring <em>"online MBA near me"</em> will find that Manipal's case-based learning and applied projects
                      enhance real-world employability.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">3.</span>
                      <span>Flexible Learning that Fits Busy Lives</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Flexibility is one of the main reasons learners search <em>"online degree near me."</em>
                      <strong>Manipal Online</strong> combines asynchronous video lectures, live interactive sessions,
                      recorded classes, and hands-on assignments — allowing learners to balance work, study, and personal life.
                      Programs like the <strong>online BBA</strong> and <strong>online MBA</strong> make it easy for professionals
                      to pursue top-tier education without relocating.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">4.</span>
                      <span>Experienced Faculty and Industry Mentors</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Courses are led by academic experts and industry mentors who bring real-world experience to every class.
                      Whether pursuing an <strong>online BBA</strong> or the <strong>online MBA with Manipal</strong>,
                      students benefit from updated curricula that remain relevant and industry-focused.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">5.</span>
                      <span>Strong Career Services and Networking</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Manipal Online</strong> supports learners through career guidance, placement preparation,
                      interview training, and access to a strong alumni network. These services help students become
                      <strong>job-ready and industry-connected</strong> from day one.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">6.</span>
                      <span>Technology-Enabled, Applied Learning</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Learners gain hands-on experience through <strong>virtual labs, live projects, group assignments,
                        and simulations</strong>. This approach ensures practical understanding and real-world application
                      across every online degree offered by Manipal Online.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">7.</span>
                      <span>Programs and Pathways: From BBA to MBA</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Manipal Online</strong> offers programs across management, commerce, computing, and the arts.
                      Its flagship <strong>online MBA</strong> is a 24-month career-focused degree, while undergraduate programs
                      like the <strong>online BBA</strong> and <strong>BCA</strong> equip learners with strong business and
                      technical foundations — making Manipal a top choice for the
                      <em>best online degree in Jaipur</em>.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">8.</span>
                      <span>Admissions, Fees, and Financial Support</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The admission process is <strong>simple, digital, and transparent</strong>, supported by EMI options
                      and scholarships. From application to graduation, Manipal provides <strong>academic advisors, mentorship,
                        technical assistance, and career counseling</strong> — ensuring every learner's success journey.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">9.</span>
                      <span>Industry Projects, Internships, and Applied Learning</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Real-world projects, internships, and capstone assignments are integrated into each program.
                      For students searching <em>"online MBA near me,"</em> these experiences help demonstrate
                      practical expertise and strengthen employability.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">10.</span>
                      <span>Alumni Outcomes and Employer Recognition</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Graduates of <strong>Manipal University Jaipur</strong> and <strong>Manipal Online</strong>
                      hold leadership roles in consulting, fintech, healthcare, analytics, and marketing.
                      The strong employer reputation of Manipal degrees ensures alumni are recognized
                      across industries worldwide.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">11.</span>
                      <span>Comparing Manipal Online with Other Options</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When comparing <em>"top colleges in Jaipur"</em> or searching for the
                      <em>"best online degree in Jaipur,"</em> <strong>Manipal Online</strong> stands apart with
                      <strong>NAAC A+ accreditation, expert faculty, and flexible programs</strong> that combine
                      academic depth with industry relevance and career support.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-2xl">12.</span>
                      <span>Application Tips and Success Strategies</span>
                    </h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li><strong>Review Program Curriculum:</strong> Compare modules and specializations with your career goals before choosing the <strong>online MBA with Manipal</strong>.</li>
                      <li><strong>Plan Your Study Schedule:</strong> Create a consistent plan to balance professional and academic commitments.</li>
                      <li><strong>Leverage Career Services:</strong> Utilize placement assistance, alumni mentorship, and resume workshops to maximize outcomes.</li>
                      <li><strong>Build a Portfolio:</strong> Document your projects and internships to showcase skills to future employers.</li>
                    </ul>
                  </div>

                  <div className="mt-10 sm:mt-12 text-center">
                    <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
                      If you are exploring options like the <strong>online MBA with Manipal</strong> or the
                      <strong>best online degree in Jaipur</strong>, <strong>Manipal Online</strong> offers
                      accredited programs, flexible schedules, and hands-on learning pathways that empower you to
                      reach your professional goals.
                    </p>
                    <p className="text-gray-900 text-xl sm:text-2xl font-bold mb-8">
                      Start your journey today with Manipal Online!
                    </p>
                    <button
                      onClick={() => setOpenModal({ type: 'enquire' })}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 text-base sm:text-lg shadow-lg hover:shadow-xl"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Explore Online Classes Section */}
            <ExploreClasses setOpenModal={setOpenModal} openModal={openModal} />

            {/* Campus Tour Section */}
            <CampusTour setOpenModal={setOpenModal} openModal={openModal} />

            {/* Enhanced Statistics Section */}
            <AdvantageManipal />

            {/* Professional Rankings & Accreditations Section */}
            <RankingAccreditionsManipal />

            {/* Why Choose Manipal University Online */}
            <WhyChooseManipal />

            {/* Enhanced Courses Section */}
            <Courses ugCourses={ugCourses} pgCourses={pgCourses} setOpenModal={setOpenModal} openModal={openModal} />

            {/* Key Highlights Section */}
            <KeyHighlights setOpenModal={setOpenModal} openModal={openModal} />

            {/* Admission Dates Section */}
            <AdmissionDatesManipal setOpenModal={setOpenModal} openModal={openModal} />

            {/* Modern 360 Advantage */}
            <AdvantagesManipal />

            {/* About Manipal Section */}
            <About />

            {/* Program Benefits Section */}
            <ProgramBenefit />

            {/* Eligibility & Admission Section */}
            <AdmissionFeesProcessSessions setOpenModal={setOpenModal} openModal={openModal} />

            {/* Placement Partners Section */}
            <PlacementPartners setOpenModal={setOpenModal} openModal={openModal} />

            {/* Placement Record Section */}
            <PlacementRecord setOpenModal={setOpenModal} openModal={openModal} />

            {/* Certificate Section */}
            <CertificateLocation />


            {/*  Add Quick Comparison Table */}
            <ComparisonStudentReviews />

            {/* Professional FAQ Section */}
            <FaqReviewsHiring setOpenModal={setOpenModal} openModal={openModal} />

          </main>
        

        {/* Enhanced Footer */}
        <FooterManipal setOpenModal={setOpenModal} openModal={openModal} />

        {openModal && (
          <ApplyEnquiryModal
            open={!!openModal}
            onOpenChange={(v) => !v && setOpenModal(null)}
            title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
            subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
            imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
            universityName="Manipal University Online"
            defaultProgram="MBA"
            formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          />
        )}
      </div>
    </>
  );
};


export default Manipal;
