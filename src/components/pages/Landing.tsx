"use client";

import "aos/dist/aos.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Hero from "./landing/Hero";
const FAQ = dynamic(() => import("../FAQ"), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" /> 
});
const TestimonialSlider = dynamic(() => import("@/components/Testimonialslider"), { 
  ssr: false,
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />
});
const CompareOnline = dynamic(() => import("./CompareOnline"), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />
});
const Stats = dynamic(() => import("./landing/Stats"), { 
  ssr: false,
  loading: () => <div className="h-40 animate-pulse bg-gray-100 rounded-2xl" />
});
const TopOnlineUniversity = dynamic(() => import("../University/TopOnlineUniversity").then(mod => mod.TopOnlineUniversity), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />
});
const AllCourses = dynamic(() => import("./AllCourses").then(mod => mod.AllCourses), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />
});
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"), { 
  ssr: false 
});
const WorkflowRoadmap = dynamic(() => import("@/components/pages/WorkflowRoadmap"), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />
});
const UniversityLogoSlider = dynamic(() => import("./landing/UniversityLogoSlider"), { 
  ssr: false,
  loading: () => <div className="h-24 animate-pulse bg-gray-100" />
});

import { FaBriefcase, FaCompass, FaGlobe } from "react-icons/fa";
import { MdVideoCall, MdHome, MdVerifiedUser } from "react-icons/md";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AOS from "aos";
import { LandingPageProps } from "types/LandingPageTypes";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {

  FaCompass,
  FaGlobe,
  FaBriefcase,
};

const Landing = ({ data }: LandingPageProps) => {
  const {
    heroSlides = [],
    courses = [],
    features = [],
    cities = [],
    accreditationLogos = [],
    universityLogos = [],
    faqs = [],
    colleges = [],
  } = data || {};

  useEffect(() => {
    const initAOS = () => {
      AOS.init({ 
        duration: 800, 
        once: true,
        disable: 'mobile' // Disable on mobile to reduce TBT
      });
    };

    if (window.requestIdleCallback) {
      window.requestIdleCallback(initAOS);
    } else {
      setTimeout(initAOS, 100);
    }
  }, []);

  const router = useRouter();
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState<string>("getStarted");
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);

  const slugify = (name: string): string => name.toLowerCase().replace(/\s+/g, "-");

  const toggleUniversity = (name: string): void => {
    const slug = slugify(name);
    setSelectedUniversities((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug].slice(0, 3)
    );
  };

  const openModal = (type: string): void => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  const MotionDiv = motion.create('div');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Hero onOpenModal={openModal} heroSlides={heroSlides} />
      <UniversityLogoSlider universityLogos={universityLogos} />
      <WorkflowRoadmap onGetStartedClick={() => openModal("getStarted")} />
      <Stats />
      <AllCourses courses={courses} />

      <CompareOnline
        colleges={colleges}
        selectedUniversities={selectedUniversities}
        toggleUniversity={toggleUniversity}
      />

      <section id="top-partner-universities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16" data-aos="fade-up">
            <TopOnlineUniversity />
          </MotionDiv>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#001e3c] mb-3 sm:mb-4">
              Accreditation & Recognition
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We partner only with accredited and government-recognized institutions
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 animate-[accreditScroll_25s_linear_infinite] will-change-transform">
              {[...accreditationLogos, ...accreditationLogos].map((logo, idx) => (
                <div
                  key={`${logo._id}-${idx}`}
                  className="min-w-[80px] sm:min-w-[100px] md:min-w-[140px] rounded-xl p-3 sm:p-4 bg-white shadow-sm border border-gray-100 flex items-center justify-center h-16 sm:h-20 md:h-24"
                >
                    <Image
                    src={logo.imageUrl}
                    alt={logo.name || "Accreditation and recognition logo"}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    className="max-h-10 sm:max-h-12 md:max-h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            @keyframes accreditScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#001e3c] mb-4 sm:mb-6">
              Why Choose <span className="text-[#00ffe0]">Unifost</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the difference that personalized guidance makes in your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.iconKey] || MdVerifiedUser;
              return (
                <article
                  key={`${feature._id ?? feature.title ?? "feature"}-${index}`}
                  className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`bg-gradient-to-br ${feature.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    <Icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001e3c] mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Cities */}
      <section
        className="bg-[#08223a] py-16 px-6 text-white overflow-hidden relative content-auto"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Study Cities Across India
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
            Explore top universities across India's major educational hubs.
          </p>

          <div className="overflow-hidden relative backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="flex gap-10 animate-city-scroll whitespace-nowrap">
              {[...cities, ...cities].map((city, idx) => (
                <div
                  key={`${city.city}-${idx}`}
                  className="flex flex-col items-center gap-4 group cursor-pointer"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all duration-300">
                    <Image
                      src={city.img}
                      alt={city.city}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-lg font-medium group-hover:text-[#00ffe0] transition-colors">
                    {city.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes city-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-city-scroll {
            animation: city-scroll 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-city-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-10 sm:mb-14" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#001e3c] mb-2">
              Career Counseling Online & Virtual Learning Guidance
            </h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] mb-3"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Best Career Planning Services with trusted EdTech Solutions in India
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Video Call Counseling */}
            <MotionDiv
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <MdVideoCall className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">
                  Video Call Counseling
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Virtual learning guidance to compare accredited Online University Degree options, fees, and placements.
              </p>
              <button
                onClick={() => openModal("videoCall")}
                className="w-full bg-[#00d4c4] text-[#001e3c] py-2.5 rounded-xl font-semibold hover:bg-[#00c0b1] transition-colors"
              >
                Book Your Free Counseling
              </button>
            </MotionDiv>

            {/* Home Demo Counseling */}
            <MotionDiv
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <MdHome className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">
                  Home Demo Counseling
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Personalized in-home session for students and parents with trusted university comparisons and timelines.
              </p>
              <button
                onClick={() => openModal("homeDemo")}
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-2.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-cyan-700 transition-colors"
              >
                Schedule a Home Demo
              </button>
            </MotionDiv>

            {/* Career Planning */}
            <MotionDiv
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <FaCompass className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001e3c]">
                  Career Planning
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Strategic career roadmap aligned with in-demand skills and the best career planning services.
              </p>
              <button
                onClick={() => openModal("getStarted")}
                className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Start Your Journey Today
              </button>
            </MotionDiv>
          </div>

          {/* Trust bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-[#001e3c]">UGC-DEB/AICTE/NAAC</span> accredited partners
            </div>
            <div className="text-sm text-gray-600">Transparent, unbiased guidance</div>
            <div className="text-sm text-gray-600">Student-friendly support across India</div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqs.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
        title="Frequently Asked Questions About Online University Degrees"
      />

      {/* Final CTA */}
      <section className="py-14 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Ready to find your program?
            </h3>
            <p className="text-white/80 mt-2">
              Talk to our counselors and get a personalized shortlist.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => openModal("getStarted")}
              className="px-6 py-3 rounded-full bg-[#00d4c4] text-[#001e3c] font-semibold hover:bg-[#00c0b1] transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => openModal("videoCall")}
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </section>
      <TestimonialSlider />
      {showEnquiryModal && (
        <Dialog
          open={showEnquiryModal}
          onOpenChange={setShowEnquiryModal}
          modal={false}
        >
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-2 lg:my-1 p-4 sm:p-6 z-[30001]">
            <DialogHeader className="space-y-2">
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
      )}
    </div>
  );
};

export default Landing;