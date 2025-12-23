"use client"
import React, { useState } from 'react'
import Headers from '../../_components/Headers';
import Footer from '../../_components/Footer';
import { CourseDetails, IntegratedProgramDetails, Specialization } from 'types/AmitySlug';
import Image from 'next/image';
import { 
  CheckCircle, 
  BookOpen, 
  Award, 
  Briefcase, 
  Users, 
  HelpCircle, 
  FileText,
  GraduationCap,
  Clock,
  Globe,
  IndianRupee,
  Star
} from 'lucide-react';

interface SlugClientProps {
    courseData: CourseDetails | IntegratedProgramDetails;
}

const SpecCard = ({ spec }: { spec: Specialization }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group h-full flex flex-col">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
        <Award className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {spec.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
        {spec.description}
      </p>
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
         <div>
            <p className="text-xs text-gray-500 font-medium uppercase">Program Fee</p>
            <p className="text-sm font-bold text-gray-900">{spec.fee}</p>
         </div>
         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <CheckCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
         </div>
      </div>
    </div>
  );
};

const SlugClient = ({ courseData }: SlugClientProps) => {
    const [openModal, setOpenModal] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    if (!courseData) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Headers setOpenModal={setOpenModal} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                <main className="flex-1 max-w-5xl mx-auto px-4 py-16 flex items-center justify-center">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-10 text-center shadow-lg max-w-md">
                        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <HelpCircle className="w-8 h-8 text-red-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-red-700 mb-2">
                            Course Not Found
                        </h1>
                        <p className="text-gray-600">
                            The course you are looking for does not exist. Please go back to the courses page and select a valid program.
                        </p>
                    </div>
                </main>
                <Footer setOpenModal={setOpenModal} openModal={openModal} />
            </div>
        );
    }

    const { about, approval, whoCanApply, specializations, courseFees, certifications, syllabus_curriculum, placementPartners, faq, faqImage, studentReview, specializationImage } = courseData as CourseDetails;

    const renderSyllabus = () => {
        if (!syllabus_curriculum) return null;

        return Object.entries(syllabus_curriculum)
            .filter(([key]) => key !== "evaluationPattern")
            .map(([key, subjects]) => (
                <div key={key} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm">
                            {key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").toUpperCase()}
                        </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {Array.isArray(subjects) &&
                            subjects.map((subject) => (
                                <li key={subject} className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                                    <span>{subject}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            ));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans" style={{ overflowX: "hidden" }}>
            <Headers setOpenModal={setOpenModal} setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <main className="flex-1 pt-24 pb-16">
                
                {/* Hero Section */}
                <section className="relative bg-white pb-16 pt-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider border border-orange-100">
                                    <Award className="w-3 h-3" />
                                    Amity University Online
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                    {about?.title || "Amity Online Program"}
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    {about?.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-4 pt-2">
                                    {about?.duration && (
                                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
                                            <Clock className="w-5 h-5 text-blue-600" />
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase">Duration</p>
                                                <p className="text-sm font-bold text-gray-900">{about.duration}</p>
                                            </div>
                                        </div>
                                    )}
                                    {about?.mode && (
                                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
                                            <Globe className="w-5 h-5 text-green-600" />
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase">Mode</p>
                                                <p className="text-sm font-bold text-gray-900">{about.mode}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {about?.keyBenefits && Array.isArray(about.keyBenefits) && (
                                    <div className="pt-4">
                                        <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Key Benefits</h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {about.keyBenefits.map((benefit: string, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-blue-50 rounded-[2rem] transform rotate-2"></div>
                                {about?.heroImage ? (
                                    <Image
                                        src={about.heroImage}
                                        alt={about?.title || "Course Overview"}
                                        width={800}
                                        height={600}
                                        priority
                                        className="relative w-full h-auto rounded-2xl shadow-xl object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                                    />
                                ) : (
                                    <Image
                                        src="/images/amity/mbaherosection.jpeg"
                                        alt="Hero Placeholder"
                                        width={800}
                                        height={600}
                                        className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                                    />
                                )}
                                
                                {/* Floating Card - Approvals */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs hidden md:block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-green-50 rounded-lg">
                                            <Award className="w-5 h-5 text-green-600" />
                                        </div>
                                        <p className="font-bold text-gray-900 text-sm">Recognitions</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* Icons for approvals if available */}
                                        {approval?.aicte?.icon && (
                                            <Image src={approval.aicte.icon} alt="AICTE" width={30} height={30} className="object-contain" />
                                        )}
                                        {approval?.ugc_deb?.icon && (
                                            <Image src={approval.ugc_deb.icon} alt="UGC" width={30} height={30} className="object-contain" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approvals Section (Detailed) */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                                <Award className="w-96 h-96" />
                            </div>
                            
                            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Accreditations & Approvals</h2>
                                    <p className="text-blue-100 mb-8 leading-relaxed">
                                        Our programs are recognized by top regulatory bodies, ensuring your degree is valid, respected, and valued globally.
                                    </p>
                                    
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {approval?.ugc_deb && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                                <h3 className="font-bold text-lg mb-1">UGC-DEB</h3>
                                                <p className="text-sm text-blue-100">{approval.ugc_deb.status}</p>
                                            </div>
                                        )}
                                        {approval?.naac && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                                <h3 className="font-bold text-lg mb-1">NAAC {approval.naac.grade}</h3>
                                                <p className="text-sm text-blue-100">Accredited University</p>
                                            </div>
                                        )}
                                        {approval?.aicte && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                                <h3 className="font-bold text-lg mb-1">AICTE</h3>
                                                <p className="text-sm text-blue-100">Approved Technical Courses</p>
                                            </div>
                                        )}
                                        {approval?.aiu && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                                <h3 className="font-bold text-lg mb-1">AIU</h3>
                                                <p className="text-sm text-blue-100">Member Association</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                     {approval?.image && (
                                         <Image 
                                            src={approval.image} 
                                            alt="Approvals" 
                                            width={400} 
                                            height={400} 
                                            className="object-contain drop-shadow-2xl bg-white rounded-full p-6"
                                        />
                                     )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
               {(whoCanApply || specializations) && (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ================= WHO CAN APPLY ================= */}
      {whoCanApply && (
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="order-2 md:order-1 relative flex justify-center">
  {/* Background Shape */}
  <div className="absolute -inset-4 bg-orange-100 rounded-2xl transform -rotate-2 max-w-[420px] mx-auto"></div>

  {whoCanApply?.image && (
    <Image
      src={whoCanApply.image}
      alt="Who Can Apply"
      width={600}
      height={900}
      className="
        relative
        rounded-2xl
        shadow-lg
        w-full
        max-w-[600px]
        h-[900px]
        object-cover
        object-top
      "
    />
  )}
</div>


          {/* CONTENT */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Who Can Apply?
              </h2>
            </div>

            <div className="space-y-6">
              {whoCanApply.description && (
                <p className="text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-4 bg-white py-3 pr-3 shadow-sm rounded-r-lg">
                  {whoCanApply.description}
                </p>
              )}

              <div className="grid gap-4">
                {whoCanApply.eligibility && (
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Eligibility
                    </p>
                    <p className="font-medium text-gray-900">
                      {whoCanApply.eligibility}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  {whoCanApply.minimumMarks && (
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                        Min Marks
                      </p>
                      <p className="font-medium text-gray-900">
                        {whoCanApply.minimumMarks}
                      </p>
                    </div>
                  )}

                  {whoCanApply.ageLimit && (
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                        Age Limit
                      </p>
                      <p className="font-medium text-gray-900">
                        {whoCanApply.ageLimit}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {whoCanApply.documentsRequired && (
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" />
                    Documents Required
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {whoCanApply.documentsRequired.map((doc, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= SPECIALIZATIONS ================= */}
      {specializations && (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Specialization
        </h2>
        <p className="text-gray-600">
          Tailor your degree to your career goals with our diverse range of specializations.
        </p>
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-10 items-center">

        {/* LEFT CARDS */}
        <div className="space-y-6">
          {(Array.isArray(specializations)
            ? specializations
            : Object.values(specializations).filter((s) => typeof s === 'object' && s !== null)
          )
            .slice(0, 3)
            .map((spec, idx) => (
              <SpecCard key={idx} spec={spec as Specialization} />
            ))}
        </div>

        {/* CENTER IMAGE (FROM JSON) */}
        {specializationImage && (
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-orange-100 rounded-2xl transform -rotate-2 max-w-[420px] mx-auto"></div>

            <Image
              src={specializationImage}
              alt="Specializations"
              width={400}
              height={800}
              className="
                relative
                rounded-2xl
                shadow-lg
                max-w-[400px]
                h-[800px]
                object-cover
                object-top
              "
            />
          </div>
        )}

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          {(Array.isArray(specializations)
            ? specializations
            : Object.values(specializations).filter((s) => typeof s === 'object' && s !== null)
          )
            .slice(3, 6)
            .map((spec, idx) => (
              <SpecCard key={idx} spec={spec as Specialization} />
            ))}
        </div>

      </div>
    </div>
  </section>
)}

    </div>
  </section>
)}


                {/* Fees & Certifications */}
                {(courseFees || certifications) && (
                    <section className="py-16 bg-white overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-16">
                                {courseFees && (
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-green-50 rounded-lg">
                                                <IndianRupee className="w-6 h-6 text-green-600" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-900">Fee Structure</h2>
                                        </div>

                                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 shadow-sm relative">
                                            {/* Decorative Image */}
                                            <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                                                <Image src="/images/icons/ai-application.webp" alt="Fees" width={100} height={100} />
                                            </div>

                                            <div className="space-y-6 relative z-10">
                                                <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500 font-medium uppercase mb-1">Total Program Fee</p>
                                                        <p className="text-3xl font-bold text-gray-900">{courseFees.feeRange || "On Request"}</p>
                                                    </div>
                                                </div>
                                                
                                                {courseFees.semesterWiseApprox && (
                                                    <div className="bg-green-50 rounded-xl p-4 flex items-center gap-4">
                                                        <div className="bg-white p-2 rounded-full shadow-sm">
                                                            <IndianRupee className="w-5 h-5 text-green-600" />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-600 font-semibold uppercase">Per Semester</p>
                                                            <p className="font-bold text-green-800">{courseFees.semesterWiseApprox}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {courseFees.paymentOptions && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 text-sm">Payment Options</h4>
                                                        <ul className="grid grid-cols-2 gap-2">
                                                            {courseFees.paymentOptions.map((opt, i) => (
                                                                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                                    {opt}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {courseFees.loanPartners && (
                                                    <div className="pt-2">
                                                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">Loan Partners</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {courseFees.loanPartners.map((partner, i) => (
                                                                <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">
                                                                    {partner}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6 rounded-2xl overflow-hidden h-48 relative">
                                             {courseFees?.image && (
                                                 <Image 
                                                    src={courseFees.image} 
                                                    alt="Financial Aid" 
                                                    fill
                                                    className="object-cover"
                                                />
                                             )}
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                                                <p className="text-white font-bold text-lg">Invest in your future with flexible payment plans</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {certifications && (
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-purple-50 rounded-lg">
                                                <Award className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-900">Certification</h2>
                                        </div>

                                        <div className="relative group perspective-1000">
                                            <div className="absolute inset-0 bg-purple-100 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                                            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 shadow-xl">
                                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                                    <div className="flex-1 space-y-4">
                                                        {certifications.degreeAwarded && (
                                                            <div>
                                                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Degree Awarded</p>
                                                                <h3 className="text-xl font-bold text-gray-900">{certifications.degreeAwarded}</h3>
                                                            </div>
                                                        )}
                                                        <p className="text-sm text-gray-600 leading-relaxed">
                                                            {certifications.description || "Get a globally recognized degree upon completion."}
                                                        </p>
                                                        {certifications.verification && (
                                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                                                                <CheckCircle className="w-3 h-3" />
                                                                {certifications.verification}
                                                            </div>
                                                        )}
                                                    </div>
                                                    {certifications?.image && (
                                                        <div className="md:w-1/3 flex justify-center">
                                                            <Image
                                                                src={certifications.image}
                                                                alt="Certificate Sample"
                                                                width={200}
                                                                height={150}
                                                                className="rounded-lg shadow-md border border-gray-200"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                {certifications.certificateValidity && (
                                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                                        <h4 className="text-sm font-bold text-gray-900 mb-3">Degree Validity</h4>
                                                        <ul className="space-y-2">
                                                            {certifications.certificateValidity.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Syllabus */}
                {syllabus_curriculum && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
                                <div className="lg:sticky lg:top-24">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
                                        {syllabus_curriculum?.image && (
                                            <Image 
                                                src={syllabus_curriculum.image} 
                                                alt="Syllabus" 
                                                width={400} 
                                                height={500} 
                                                className="w-full object-cover h-[400px]"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                            <h2 className="text-2xl font-bold text-white mb-2">Curriculum</h2>
                                            <p className="text-white/80 text-sm">Designed by industry experts to keep you ahead.</p>
                                        </div>
                                    </div>
                                    
                                    {syllabus_curriculum.evaluationPattern && (
                                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-blue-600" />
                                                Evaluation Pattern
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Internal Assessment</span>
                                                    <span className="font-bold text-gray-900">{syllabus_curriculum.evaluationPattern.internalAssessment}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                                    <div className="bg-blue-500 h-full" style={{ width: syllabus_curriculum.evaluationPattern.internalAssessment }}></div>
                                                </div>
                                                <div className="flex justify-between pt-2">
                                                    <span className="text-gray-600">Final Exam</span>
                                                    <span className="font-bold text-gray-900">{syllabus_curriculum.evaluationPattern.finalExam}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                                    <div className="bg-purple-500 h-full" style={{ width: syllabus_curriculum.evaluationPattern.finalExam }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div>
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Syllabus & Curriculum</h2>
                                        <p className="text-gray-600">A comprehensive breakdown of what you will learn.</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {renderSyllabus()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Placements */}
                {placementPartners && (
                    <section className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                             <div className="flex flex-col md:flex-row gap-12 mb-12 items-center">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Placements & Career Support</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {placementPartners.description || "We provide dedicated career support to help you land your dream job."}
                                    </p>
                                    
                                    <div className="flex gap-6 mt-8">
                                        <div className="text-center">
                                            <p className="text-3xl font-bold text-blue-600">{placementPartners.averageSalary || "High"}</p>
                                            <p className="text-sm text-gray-500 font-medium">Avg Package</p>
                                        </div>
                                        <div className="w-px bg-gray-200"></div>
                                        <div className="text-center">
                                            <p className="text-3xl font-bold text-green-600">500+</p>
                                            <p className="text-sm text-gray-500 font-medium">Hiring Partners</p>
                                        </div>
                                    </div>
                                </div>
                                {placementPartners?.image && (
                                    <div className="md:w-1/2">
                                        <Image 
                                            src={placementPartners.image} 
                                            alt="Career Support" 
                                            width={600} 
                                            height={350} 
                                            className="rounded-2xl shadow-lg"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-blue-500" />
                                        Top Recruiters
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {placementPartners.topRecruiters?.map((company) => (
                                            <span key={company} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-100">
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-purple-500" />
                                        Job Roles
                                    </h3>
                                    <ul className="space-y-2">
                                        {placementPartners.jobRoles?.map((role) => (
                                            <li key={role} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                                {role}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <Award className="w-5 h-5 text-blue-200" />
                                        Career Services
                                    </h3>
                                    <ul className="space-y-3">
                                        {placementPartners.careerSupport?.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-sm text-blue-50">
                                                <CheckCircle className="w-4 h-4 text-blue-300 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQs */}
                {faq && Array.isArray(faq) && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                                <p className="text-gray-600">Find answers to common questions about the program.</p>
                            </div>
                            
                            <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                                {faqImage && (
                                    <div className="hidden md:block">
                                        <Image 
                                            src={faqImage} 
                                            alt="FAQ Support" 
                                            width={300} 
                                            height={400} 
                                            className="rounded-2xl shadow-md sticky top-24"
                                        />
                                    </div>
                                )}
                                <div className="space-y-4">
                                    {faq.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
                                        >
                                            <h3 className="font-bold text-gray-900 text-sm md:text-base flex gap-3">
                                                <span className="text-blue-500">Q.</span>
                                                {item.question}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-2 pl-6 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Student Reviews */}
                {studentReview && (
                    <section className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <span className="font-bold text-gray-900">Student Success Stories</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Hear from our <span className="text-blue-600">Students</span>
                                    </h2>
                                    
                                    <div className="flex items-end gap-4 mb-8">
                                        <div className="text-5xl font-bold text-gray-900">{studentReview.averageRating}</div>
                                        <div className="mb-2">
                                            <div className="flex text-yellow-400 mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-500">Average Rating</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-4">
                                        {Array.isArray(studentReview.studentsHand) && studentReview.studentsHand.map((student, index) => (
                                            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 relative">
                                                <div className="absolute top-6 right-6 text-6xl text-gray-200 font-serif leading-none">"</div>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                                        {student.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900">{student.name}</p>
                                                        <div className="flex text-yellow-400 text-xs">
                                                            {[...Array(Math.floor(Number(student.rating)))].map((_, i) => (
                                                                <Star key={i} className="w-3 h-3 fill-current" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 italic relative z-10 text-sm">
                                                    {student.review}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="relative h-full min-h-[500px] hidden lg:block">
                                    {studentReview?.image && (
                                        <Image 
                                            src={studentReview.image} 
                                            alt="Happy Student" 
                                            fill
                                            className="object-cover rounded-3xl shadow-2xl"
                                        />
                                    )}
                                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                                        <p className="text-gray-900 font-medium text-center">
                                            "Joining this program was the best decision for my career. The flexibility and curriculum are unmatched."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

            </main>

            <Footer setOpenModal={setOpenModal} openModal={openModal} />
        </div>
    )
}

export default SlugClient
