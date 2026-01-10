"use client"
import React, { useState } from 'react';
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
import { Program, Specialization, FAQ } from 'types/NmimsSlug';
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
    Star,
    Phone,
    ArrowRight,
    ChevronDown,
    
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type ModalType = "apply" | "enquire";

interface ModalState {
  type: ModalType;
  course?: string;
}

interface SlugClientProps {
    courseData: Program;
}

const SpecCard = ({ spec }: { spec: Specialization }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Award className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                {spec.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-4 leading-relaxed flex-grow">
                {spec.description}
            </p>
            {spec.fee && (
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                        <p className="text-xs text-gray-500 font-medium uppercase">Program Fee</p>
                        <p className="text-base font-bold text-gray-900">{spec.fee}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <CheckCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </div>
                </div>
            )}
        </div>
    );
};

const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                        className="w-full px-6 py-4 text-left font-medium flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <span className="text-gray-900 font-semibold">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`} />
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SlugClient = ({ courseData }: SlugClientProps) => {
   const [openModal, setOpenModal] = useState<ModalState | null>(null);

    if (!courseData) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-10 text-center shadow-lg max-w-md">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <HelpCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-red-700 mb-2">
                        Course Not Found
                    </h1>
                    <p className="text-gray-600">
                        The course you are looking for does not exist. Please go back to the courses page.
                    </p>
                </div>
            </div>
        );
    }

    const { 
        about, 
        approval, 
        eligibility, 
        specializations, 
        courseFees, 
        curriculum, 
        faqs,
        scholarship
    } = courseData;

    const renderSyllabus = () => {
        if (!curriculum) return null;

        return Object.entries(curriculum)
            .filter(([key, val]) => Array.isArray(val) && key !== "evaluationPattern" && key !== "learningApproach" && key !== "learningMethods")
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
                            [...new Set(subjects.filter(Boolean))].map((subject: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                                <span>{subject}</span>
                            </li>
                            ))}
                    </ul>
                </div>
            ));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
            
            {/* Top Banner Section */}
            <section className="bg-white border-b border-gray-200 pt-20 sm:pt-24 pb-8 sm:pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Column - Course Info */}
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                                    <Award className="w-3 h-3" />
                                    <span>NMIMS Online</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
                                    {courseData.fullName || courseData.name}
                                </h1>

                                {/* Rating & Reviews */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400 opacity-50'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">(4.5/5 Rating)</span>
                                </div>

                                {/* Approvals - Dynamic from JSON */}
                                {approval && (
                                    <div className="flex items-center gap-3 flex-wrap">
                                        {approval.ugcDeb && (
                                            <div className="flex flex-col items-center gap-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm min-w-[80px]">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase">UGC-DEB</span>
                                                <span className="text-xs font-semibold text-green-600">{approval.ugcDeb.status || "Approved"}</span>
                                            </div>
                                        )}
                                        {approval.ugc && (
                                            <div className="flex flex-col items-center gap-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm min-w-[80px]">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase">UGC</span>
                                                <span className="text-xs font-semibold text-green-600">{approval.ugc.status || "Recognized"}</span>
                                            </div>
                                        )}
                                        {approval.naac && (
                                            <div className="flex flex-col items-center gap-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm min-w-[80px]">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase">NAAC</span>
                                                <span className="text-xs font-semibold text-blue-600">{approval.naac.grade || approval.naac.status || "Accredited"}</span>
                                            </div>
                                        )}
                                        {approval.aiu && (
                                            <div className="flex flex-col items-center gap-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm min-w-[80px]">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase">AIU</span>
                                                <span className="text-xs font-semibold text-purple-600">Member</span>
                                            </div>
                                        )}
                                        {approval.deemedUniversity && (
                                            <div className="flex flex-col items-center gap-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm min-w-[80px]">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase">University</span>
                                                <span className="text-xs font-semibold text-blue-600">{approval.deemedUniversity.status === "Yes" ? "Deemed" : approval.deemedUniversity.status}</span>
                                            </div>
                                        )}
                                        {approval.aicte && (
                                            <div className="flex flex-col items-center gap-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm min-w-[80px]">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase">AICTE</span>
                                                <span className="text-xs font-semibold text-green-600">{approval.aicte.status || "Approved"}</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                    <Button
                                        onClick={() => setOpenModal({ type: 'apply', course: courseData.name })}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                    <Button
                                        onClick={() => setOpenModal({ type: 'enquire', course: courseData.name })}
                                        variant="outline"
                                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 rounded-xl font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                        Brochure
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Hero Image or Gradient */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px]">
                             {about?.heroImage ? (
                                <Image
                                    src={about.heroImage}
                                    alt={courseData.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white p-8 text-center">
                                    <GraduationCap className="w-24 h-24 mb-6 opacity-80" />
                                    <h3 className="text-3xl font-bold mb-2">Advance Your Career</h3>
                                    <p className="text-blue-100 text-lg">with NMIMS Online {courseData.name}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-1 pb-16">
                
                {/* About Section */}
                <section className="py-12 sm:py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Program</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {about.description}
                            </p>
                        </div>
                        
                        {/* Highlights/Key Benefits */}
                        {(about.highlights || about.keyBenefits) && (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {(about.highlights || about.keyBenefits)?.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Eligibility / Who Can Apply Section */}
                {eligibility && (
                    <section className="py-12 sm:py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who Can Apply?</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Users className="w-6 h-6 text-blue-600" />
                                        Eligibility Criteria
                                    </h3>
                                    <div className="space-y-4">
                                        {eligibility.qualification && (
                                            <div>
                                                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Qualification</p>
                                                <p className="text-gray-900 font-medium">{eligibility.qualification}</p>
                                            </div>
                                        )}
                                        {eligibility.minimumMarks && (
                                            <div>
                                                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Minimum Marks</p>
                                                <p className="text-gray-900 font-medium">{eligibility.minimumMarks}</p>
                                            </div>
                                        )}
                                        {eligibility.entranceExam && (
                                            <div>
                                                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Entrance Exam</p>
                                                <p className="text-gray-900 font-medium">{eligibility.entranceExam}</p>
                                            </div>
                                        )}
                                         {eligibility.workExperience && (
                                            <div>
                                                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Work Experience</p>
                                                <p className="text-gray-900 font-medium">{eligibility.workExperience}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Briefcase className="w-6 h-6 text-blue-600" />
                                        Ideal For
                                    </h3>
                                    <ul className="space-y-3">
                                        {(eligibility.idealCandidates || eligibility.suitability)?.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Specializations Section */}
                {specializations && specializations.length > 0 && (
                    <section className="py-12 sm:py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specializations Offered</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {specializations.map((spec, idx) => (
                                    <SpecCard key={idx} spec={spec} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Curriculum Section */}
                {curriculum && (
                    <section className="py-12 sm:py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Curriculum & Syllabus</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {renderSyllabus()}
                            </div>
                        </div>
                    </section>
                )}

                {/* Fees Section */}
                {courseFees && (
                    <section className="py-12 sm:py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                                
                                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4">Program Fees</h2>
                                        <p className="text-blue-100 mb-8 text-lg">Invest in your future with our affordable and flexible payment plans.</p>
                                        
                                        <div className="space-y-4">
                                            {(courseFees.includes || courseFees.feeIncludes || courseFees.coverage)?.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="p-1 bg-white/20 rounded-full">
                                                        <CheckCircle className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="text-blue-50 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
                                        <p className="text-blue-100 uppercase text-sm font-bold mb-2">Total Program Fee</p>
                                        <div className="flex items-baseline gap-2 mb-6">
                                            <span className="text-4xl sm:text-5xl font-extrabold">{courseFees.totalFee}</span>
                                        </div>
                                        
                                        <Button 
                                            onClick={() => setOpenModal({ type: 'enquire', course: courseData.name })}
                                            className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-colors"
                                        >
                                            Get Fee Breakdown
                                        </Button>
                                        
                                        {courseFees.paymentOptions && (
                                            <div className="mt-4 pt-4 border-t border-white/10">
                                                <p className="text-sm text-blue-100 text-center">
                                                    {courseFees.paymentOptions.join(" • ")}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                 {/* Scholarship Section */}
                 {scholarship && scholarship.available && (
                    <section className="py-12 sm:py-16 bg-yellow-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                             <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                                <Award className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scholarship Available</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                {scholarship.details || "Merit-based scholarships are available for eligible students. Contact us to check your eligibility."}
                            </p>
                             <Button
                                onClick={() => setOpenModal({ type: 'enquire', course: courseData.name })}
                                className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all"
                            >
                                Check Eligibility
                            </Button>
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                {faqs && faqs.length > 0 && (
                    <section className="py-12 sm:py-16 bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </section>
                )}

            </main>

             {/* Modal */}
            
        </div>
    );
};

export default SlugClient;
