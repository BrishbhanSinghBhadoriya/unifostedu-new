"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import UniversityDateSlider from "@/components/UniversityDateSlider";
import { Playfair_Display, Inter } from "next/font/google";
import PageContent from "@/components/PageContent/PageContent";
import Introduction from "./_components/Introduction";
import About from "./_components/About";
import Headers from "./_components/Headers";
import { OpenModalState } from "../../../types/Modal";

// Fonts at module scope so Next.js can preload them server-side.
// Removed Playfair weights 400/500 (not used) — 700/800 only, cuts 2 font files.
// Inter is already in root layout; preload:false avoids duplicate preload link.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  preload: true,
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false, // root layout already loads Inter; no duplicate preload
});

// ── Below-fold sections: ssr: true (default) so server sends full HTML.
// ── Removing ssr: false was the single biggest LCP/FCP improvement.
const Courses       = dynamic(() => import("./_components/Courses"), { ssr: false });
const Highlights    = dynamic(() => import("./_components/Highlights"));
const Accreditation = dynamic(() => import("./_components/Accreditation"));
const FeeStructure  = dynamic(() => import("./_components/FeeStructure"));
const Feature       = dynamic(() => import("./_components/Feature"));
const OnlineRegular = dynamic(() => import("./_components/OnlineRegular"));
const Resources     = dynamic(() => import("./_components/Resources"));
const HiringPartners= dynamic(() => import("./_components/HiringPartners"));
const Scholarship   = dynamic(() => import("./_components/Scholarship"));
const Certificate   = dynamic(() => import("./_components/Certificate"));
const Placements    = dynamic(() => import("./_components/Placements"));
const OutReach      = dynamic(() => import("./_components/OutReach"));
const Achievements  = dynamic(() => import("./_components/Achievements"));
const CTA           = dynamic(() => import("./_components/CTA"));
const ResourceLinks = dynamic(() => import("./_components/ResourceLinks"));
const Faq           = dynamic(() => import("./_components/Faq"));
const Footer        = dynamic(() => import("./_components/Footer"));
// Modal stays ssr:false — only opens on user interaction, never LCP-critical
const ApplyEnquiryModal = dynamic(() => import("@/components/ApplyEnquiryModal"), { ssr: false });
const UniversityComparison = dynamic(() => import("@/components/SEO/UniversityComparison"));

const SECTION_ITEMS = [
  { id: "HeroSection",        label: "Introduction" },
  { id: "AboutAmity",         label: "About Amity" },
  { id: "Courses",            label: "Explore Courses" },
  { id: "highlights",         label: "Key Highlights" },
  { id: "Scholarship",        label: "Scholarships" },
  { id: "AdmissionProcedure", label: "Admission Process" },
  { id: "UpcomingSessions",   label: "Upcoming Sessions" },
  { id: "OnlineVsRegular",    label: "Online vs Regular" },
  { id: "PlacementRecord",    label: "Placement Record" },
  { id: "HiringPartners",     label: "Hiring Partners" },
  { id: "RegionalOutreach",   label: "Study From Cities" },
  { id: "ResourceLinks",      label: "More Resources" },
  { id: "FAQs",               label: "FAQs" },
];

// Static data moved outside the component — no re-creation on every render
const ugCourses = [
  { course: "Bachelor of Business Administration (BBA)", duration: "3 Years", eligibility: "10+2 Pass", fees: "₹1,99,000- ₹2,50,000", specialization: "BBA -General, Data Analytics In collaboration with HCL Tech,Business Analytics in Collaboration with KPMG, Travel And Tourism Management", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp", alt: "BBA from amity online university" },
  { course: "Bachelor of Computer Applications (BCA)", duration: "3 Years", eligibility: "10+2 Pass", fees: "₹1,75,000 - ₹2,50,000", specialization: "BCA-General, Cloud and Security In collaboration with TCS iON,Applied Data Engineering In collaboration with KPMG, Data Analytics In collaboration with TCS iON, Data Engineering In collaboration with HCL Tech, Software Engineering In collaboration with HCL Tech, Financial Technology And AI In collaboration withpaytm", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp", alt: "BCA from amity online university" },
  { course: "Bachelor of Commerce (B.Com)", duration: "3 Years", eligibility: "10+2 Pass", fees: "₹1,15,000 - ₹2,75,000", specialization: "B.Com-General, Hons, International Finance & Accounting", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp", alt: "B.Com from amity online university" },
  { course: "Bachelor of Arts (BA)", duration: "3 Years", eligibility: "10+2 Pass", fees: "₹1,15,000 - ₹1,90,000", specialization: "BA-General, Journalism and Mass Communication, Vernacular Languages, English, Sociology, Political Science, Economics)", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327036/ba_hakemz.webp", alt: "BA from amity online university" },
];

const pgCourses = [
  { course: "Master of Business Administration (MBA)", duration: "2 Years", eligibility: "Graduation", fees: "₹2,25,000 - ₹3,29,000", specialization: "MBA - Business Analytics, Data Science, Digital Entrepreneurship, Digital Marketing Management, Entrepreneurship and Leadership Management, Finance and Accounting Management, Global Finance Market, Hospitality Management, Human Resource Management, Human Resources Analytics, Information Technology Management, Insurance Management, International Business Management, International Finance (ACCA), Marketing & Sales Management, Production and Operations Management, Retail Management, General Management", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp", alt: "MBA from amity online university" },
  { course: "Master of Computer Applications (MCA)", duration: "2 Years", eligibility: "Graduation ", fees: "₹1,90,000- ₹2,75,000", specialization: "MCA-General, Cyber Security In collaboration with HCL Tech, Blockchain Technology And Management,Machine Learning and Artificial Intelligence, Machine Learning and Artificial Intelligence In collaboration with TCS iON, Software Engineering,Financial Technology & AI In collaboration with Paytm", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp", alt: "MCA from amity online university" },
  { course: "Master of Commerce (M.Com)", duration: "2 Years", eligibility: "Graduation ", fees: "₹1,50,000", specialization: "General, Financial Management, Financial Technology", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327469/mcom-online-image_e79tno.webp", alt: "M.Com from amity online university" },
  { course: "Master of Arts (MA)", duration: "2 Years", eligibility: "Graduation", fees: "₹1,50,000 - ₹1,90,000", specialization: "MA ( Journalism and Mass Communication, Public Policy & Governance)", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327388/ma1_rqnrla.webp", alt: "MA from amity online university" },
  { course: "Master of Science (M.Sc)", duration: "2 Years", eligibility: "Graduation", fees: "₹2,50,000", specialization: "Data Science", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327469/mcom-online-image_e79tno.webp", alt: "M.Sc from amity online university" },
];

const ug_pgCourses = [
  { course: "BBA + MBA", duration: "4.5-5 Years", eligibility: "10+2 With recognised boards", fees: "₹4,02,800", specialization: "BBA + MBA", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp", alt: "BBA + MBA from amity online university" },
  { course: "BCA + MCA", duration: "4.5-5 Years", eligibility: "10+2 With recognised boards", fees: "₹3,55,300", specialization: "BCA + MCA", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca-online-image_w3f0sx.webp", alt: "BCA + MCA from amity online university" },
  { course: "B.Com + MBA", duration: "4.5-5 Years", eligibility: "10+2 With recognised boards", fees: "₹3,23,000", specialization: "B.Com + MBA", image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327469/mcom-online-image_e79tno.webp", alt: "B.Com + MBA from amity online university" },
];

const cityHighlights = [
  { city: "Delhi NCR", focus: "Professionals searching for an online MBA Delhi Amity University choose the platform for weekend mentoring hubs and corporate networking events in Gurugram and Noida." },
  { city: "Mumbai & Pune", focus: "Finance and marketing aspirants across Mumbai and Pune prefer the online MBA Mumbai Amity pathway and BBA programs for industry projects with BFSI, media, and retail partners." },
  { city: "Bangalore & Hyderabad", focus: "Tech talent in Bangalore and Hyderabad opt for the online MBA Bangalore Amity specialisations alongside MCA and BCA programs featuring virtual labs, AI, cyber security, and cloud modules." },
  { city: "Kolkata & Eastern India", focus: "Learners from Kolkata, Bhubaneswar, and Guwahati opt for flexible Amity University Online degree programs to qualify for government jobs and PSU roles without relocating." },
];

const AmityLandingPage = () => {
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const [activeSection, setActiveSection] = useState<string | null>(SECTION_ITEMS[0]?.id ?? null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25,
      rootMargin: "-45% 0px -45% 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    SECTION_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ overflowX: "hidden" }}>
      <Headers setOpenModal={setOpenModal} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="w-full">
        <div className="pt-[56px] sm:pt-[58px] md:pt-[58px]">
          <div className="bg-[#1A325D] text-gray-900 py-2 sm:py-2.5 md:py-3 mb-0">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center">
              <UniversityDateSlider
                currentDate="JULY 2026 Session Admission Start"
                nextUpdateDate="Early Bird Discount Available"
                information="Limited Seats Available - Apply Now!"
                special="Average of 15% - 40% salary growth"
                color="#1A325D"
                backgroundColor="#1A325D"
                textColor="#f4f4f8"
              />
            </div>
          </div>

          <PageContent
            sectionItems={SECTION_ITEMS}
            activeSection={activeSection}
            ismobilemenuopen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            mode="breadcrumb"
            progressive
            position="sticky"
            topOffsetClass="top-[calc(4rem+6px)] lg:top-[calc(5rem+6px)]"
            scrollOffset={96}
            breadcrumbPaddingClass="px-0 py-2"
          />

          <Introduction inter={inter} playfair={playfair} openModal={openModal} setOpenModal={setOpenModal} />
          <About openModal={openModal} setOpenModal={setOpenModal} />
          <Courses ugCourses={ugCourses} pgCourses={pgCourses} ug_pgCourses={ug_pgCourses} openModal={openModal} setOpenModal={setOpenModal} />
          <Highlights openModal={openModal} setOpenModal={setOpenModal} />
          <Accreditation />
          <FeeStructure ugCourses={ugCourses} pgCourses={pgCourses} ug_pgCourses={ug_pgCourses} openModal={openModal} setOpenModal={setOpenModal} />
          <Feature setOpenModal={setOpenModal} openModal={openModal} />
          <OnlineRegular />
          <Resources />
          <Achievements />
          <Scholarship setOpenModal={setOpenModal} openModal={openModal} />
          <Certificate setOpenModal={setOpenModal} openModal={openModal} />
          <Placements />
          <OutReach cityHighlights={cityHighlights} setOpenModal={setOpenModal} openModal={openModal} />
          <HiringPartners setOpenModal={setOpenModal} />
          <CTA />
          <ResourceLinks setOpenModal={setOpenModal} openModal={openModal} />
          <Faq openModal={openModal} setOpenModal={setOpenModal} />
          <UniversityComparison currentUni="Amity University Online" />
          <Footer setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      </main>

      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === "apply" ? "Start Your Application" : "Enquire Now"}
          subtitle={openModal.type === "apply" ? "Fill the quick form to begin your admission process" : "Share your details and our counselor will reach out"}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amityForm_xdbvvf.webp"
          universityName="Amity University Online"
          defaultProgram="MBA"
          formType={openModal.type === "apply" ? "getStarted" : "general"}
        />
      )}
    </div>
  );
};

export default AmityLandingPage;
