"use client";

import { useState } from "react";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";

import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import AccreditationSection from "@/components/AccreditationSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const ugCourses = [
  {
    title: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    eligibility: "10+2 Pass",
    fees: "₹1,50,000",
    specialization: "General",
    image: "/images/bba.webp",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    eligibility: "10+2 Pass",
    fees: "₹1,50,000",
    specialization: "General",
    image: "/images/bca.webp",
  },
  {
    title: "Bachelor's of Arts (BA)",
    duration: "3 Years",
    eligibility: "10+2",
    fees: "₹1,20,000",
    specialization: "General",
    image: "/images/ma1.webp",
  },
];

const pgCourses = [
  {
    title: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Graduation",
    fees: "₹2,00,000",
    specialization:
      "HR, Finance, Marketing, Operations, Analytics, Digital Marketing, Data Science, IT, International Business, Banking, Healthcare, Logistics",
    image: "/images/mba.webp",
  },
  {
    title: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "Graduation in BCA/B.Sc(IT) & 50%",
    fees: "₹1,48,000",
    specialization:
      "ML & AI, Data Science, Cybersecurity, Full Stack, AR/VR & Game Development",
    image: "/images/mca1.webp",
  },
  {
    title: "Master of Commerce (M.Com)",
    duration: "2 Years",
    eligibility: "Graduation in Commerce",
    fees: "₹1,00,000",
    specialization: "General",
    image: "/images/m.com.webp",
  },
];

export default function LpuOnlinePage() {
  const [activeCategory, setActiveCategory] = useState("PG"); // PG or UG
  const [current, setCurrent] = useState(0);

  const courses = activeCategory === "PG" ? pgCourses : ugCourses;
  const itemsPerSlide = 3; // number of cards visible per slide

//   const nextSlide = () =>
//     setCurrent((prev) => (prev + itemsPerSlide) % courses.length);
//   const prevSlide = () =>
//     setCurrent(
//       (prev) => (prev - itemsPerSlide + courses.length) % courses.length
//     );

  // get visible slice
  
  const visibleCourses = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleCourses.push(courses[(current + i) % courses.length]);
  }

   const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [modalType, setModalType] = useState('getStarted');
    const [openModal, setOpenModal] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <img
            src="/images/LPU-Online-Logo.svg"
            alt="LPU Online"
            className="h-12"
          />
         <div className="flex items-center gap-4">
          <a
            href="tel:+917042867717"
            className="flex items-center gap-2 text-gray-700 font-medium"
          > 
            📞 +91-7042867717
          </a>
          <button 
            onClick={() => setOpenModal({ type: 'apply' })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer"
          >
            Apply Now
          </button>
        
      </div>
        </div>
        
      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[50001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                Get Started with Lovely Profesinals University
              </DialogTitle>
            </DialogHeader>
            <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} universityName="Manipal University Jaipur" />
          </DialogContent>
        </Dialog>
      )}
      </header>
       

<section className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] mt-[90px] mb-[10px]">
  {/* Background Image */}
  <Image
    src="/images/lpu.webp"
    alt="LPU Banner"
    height={1200}
    width={1800}
    className="object-cover object-center"
    priority
  />

    {/* Admission Form on Left Side */}
  <div className="absolute top-80 left-10  shadow-2xl rounded-2xl p-6 w-[90%] sm:w-[400px]">
    

                 {/* CTA Buttons */}
                   <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                     <Button
                       size="lg"
                       className="bg-yellow-400 hover:bg-orange-500 text-black cursor-pointer px-6 md:px-9 py-3 md:py-6 text-base md:text-lg rounded-full"
                       onClick={() => setOpenModal({ type: 'apply' })}
                     >
                       Apply Now
                       <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                     </Button>
                     <Button
                       size="lg"
                       variant="outline"
                       className=" cursor-pointer border-2 border-gray-300 hover:border-blue-400 px-6 md:px-9 py-3 md:py-6 text-base md:text-lg rounded-full"
                       onClick={() => setOpenModal({ type: 'enquiry' })}
                     >
                       <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                       Enquire Now
                     </Button>
                   </div>
              </div>

  {/* Accreditation Cards Container */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-6 bg-white/80 px-6 py-4 rounded-xl shadow-lg">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center">
      <img src="/images/ugc.webp" alt="UGC Approved" className="h-16 w-16 object-contain mb-2" />
      <p className="text-sm font-semibold">UGC Approved</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center">
      <img src="/images/aicte.webp" alt="AICTE Recognized" className="h-16 w-16 object-contain mb-2" />
      <p className="text-sm font-semibold">AICTE Recognized</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center">
      <img src="/images/naac-logo.png" alt="NAAC Accredited" className="h-16 w-16 object-contain mb-2" />
      <p className="text-sm font-semibold">NAAC Accredited</p>
    </div>
  </div>
</section>


       <div>
      <AccreditationSection
        title="Why Choose Lovely Professional University Online?"
        description="Access flexible learning, expert faculty, career support, and globally recognized degrees."
        stats={[]} 
        benefits={[
          {
            title: "Flexible Learning",
            description: "Access recorded lectures, live classes, and study materials anytime, anywhere.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 19h16V5H4v14zm0 0v2h16v-2H4z"></path>
                      </svg>`,
          },
          {
            title: "Expert Faculty",
            description: "Learn from experienced professors and industry experts.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>`,
          },
          {
            title: "Career Support",
            description: "Resume building, interview preparation, and placement assistance.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6V4H8v2H2v14h20V6h-6zM8 4h8v2H8V4zm12 16H4V8h16v12z"></path>
                      </svg>`,
          },
          {
            title: "UGC Recognized",
            description: "Degrees equivalent to on-campus programs with global recognition.",
            iconSvg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7h20L12 2zm0 2.18L18.9 7H5.1L12 4.18zM4 9v11h16V9H4zm2 2h12v7H6v-7z"></path>
                      </svg>`,
          },
        ]}
        accreditations={[
          { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
          { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
          { src: "/images/naac.webp", alt: "NAAC", name: "NAAC" },
          { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
          { src: "/images/wes.webp", alt: "WES", name: "WES" },
          { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
          { src: "/images/qs.webp", alt: "QS Ranking", name: "QS" },
        ]}
        internationalRecognition={[]}
        successStories={[]}
      />
    </div>
      {/* Main Content */}
      <main className="pt-32 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-center font-semibold mb-10">
          Explore LPU Online Programs
        </h1>

        {/* Program Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-6 py-4 w-60 rounded-l-xl text-xl ${
              activeCategory === "PG"
                ? "bg-[#f58228] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setActiveCategory("PG");
              setCurrent(0);
            }}
          >
            PG Programs
            <span className="block text-sm">(After Graduation)</span>
          </button>
          <button
            className={`px-6 py-4 w-60 text-xl ${
              activeCategory === "UG"
                ? "bg-[#f58228] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setActiveCategory("UG");
              setCurrent(0);
            }}
          >
            UG Programs
            <span className="block text-sm">(After 12th)</span>
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 z-10"
          >
            Prev
          </button> */}

          <div className="flex gap-4 justify-center">
            {visibleCourses.map((program, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 px-2"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-medium text-[#f58225] mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Duration:</span> {program.duration}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Eligibility:</span> {program.eligibility}
                      </p>
                      <p className="text-gray-600 mb-2 truncate">
                        <span className="font-semibold">Specialization:</span> {program.specialization}
                      </p>
                    </div>
                    <p className="text-gray-600 font-medium mt-4">
                      Fees:{" "}
                      <span className="text-[#f58225] font-semibold border border-[#f58225] p-1 rounded">
                        {program.fees}
                      </span>
                    </p>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="inline-block bg-[#f58228] text-white font-bold py-2 px-4 rounded hover:bg-orange-700"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <section>

         <div>
           <section className="relative py-20 bg-white">
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
                 <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
                 <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                   A simple, transparent, and student-friendly admission process
                   designed to help you begin your learning journey smoothly.
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
                   <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 to-orange-500 z-0 rounded-full"></div>
         
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
                       <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                         <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                         <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                       </div>
                       <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                         {step.title}
                       </h4>
                       <p className="text-gray-700 text-sm md:text-base">{step.desc}</p>
                     </motion.div>
                   ))}
                 </div>
               </motion.div>
             </div>
           </section>
         </div>

          </section>
         

         
               <section className="bg-[#003366] py-12 px-4">
                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
                   <div className="flex-1">
                     <Image width={100} height={100} loading="lazy" src="/images/lpu-certificate.webp" alt="LPU Online Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
                   </div>
                   <div className="flex-1 text-white">
                     <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                       Online Degree from Lovely Professional University
                     </h2>
                     <p className="mb-6 text-lg leading-relaxed">
                       Lovely Online provides comprehensive services including live classes, recorded lectures, 
                       academic counseling, and career support to help students succeed in their professional journeys.
                     </p>
                     <h3 className="text-xl font-semibold mb-2">Benefits of LPU Online</h3>
                     <ul className="list-disc list-inside space-y-2 text-base">
                       <li>Interactive live classes with industry experts</li>
                       <li>Placement assistance and career counseling</li>
                       <li>UGC-recognized degrees equivalent to on-campus programs</li>
                       <li>Flexible learning with 24/7 access to study materials</li>
                     </ul>
                   </div>
                 </div>
               </section>
         
               <section className="py-12 bg-gray-100">
                 <div className="max-w-6xl mx-auto px-4">
                   <div className="text-center mb-10">
                     <h2 className="text-3xl font-bold text-gray-800">
                       Our learners work at
                     </h2>
                     <p className="text-xl text-gray-600 mt-2">
                       Top hiring partners at LPU Online
                     </p>
                   </div>
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/company.webp" alt="Company" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/company1.webp" alt="Microsoft" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/company9.webp" alt="Company 9" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/com10.webp" alt="Company 10" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/companany4.webp" alt="Company4" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/company6.webp" alt="Company 6" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/companany5.webp" alt="Companany5" className="h-12 object-contain" />
                     </div>
                     <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                       <Image width={100} height={100} loading="lazy" src="/images/adove.webp" alt="Adove" className="h-12 object-contain" />
                     </div>
                   </div>
                 </div>
                  {openModal && (
                                     <ApplyEnquiryModal
                                       open={!!openModal}
                                       onOpenChange={(v) => !v && setOpenModal(null)}
                                       title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                                       subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                                       imageSrc="/images/lpu2.png"
                                       universityName="Lovely Professional University Online"
                                       defaultProgram="MBA"
                                       formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                                     />
                                   )}
               </section>
          {/* <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 z-10"
          >
            Next
          </button> */}
        </div>
      </main>
    </div>
  );
}
