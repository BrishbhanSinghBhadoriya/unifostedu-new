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
    Star,
    Phone,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlugClientProps {
    courseData: CourseDetails | IntegratedProgramDetails;
}

const SpecCard = ({ spec }: { spec: Specialization }) => {
    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-full flex flex-col">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                {spec.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3 sm:line-clamp-4 leading-relaxed flex-grow">
                {spec.description}
            </p>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">Program Fee</p>
                    <p className="text-sm sm:text-base font-bold text-gray-900">{spec.fee}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <CheckCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </div>
            </div>
        </div>
    );
};

const SlugClient = ({ courseData }: SlugClientProps) => {
    const [openModal, setOpenModal] = useState<{ type: string } | null>(null);
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

            {/* Top Banner Section */}
            <section className="bg-white border-b border-gray-200 pt-20 sm:pt-24 pb-8 sm:pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Column - Course Info */}
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                                    {about?.title || "Amity Online Program"}
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
                                    <span className="text-yellow-600 font-semibold hover:underline cursor-pointer">
                                        (667 Reviews)
                                    </span>
                                </div>

                                {/* Approvals Logos with Icons */}
                                <div className="mb-6">
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">Recognized & Approved By</p>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        {approval?.ugc_deb && (
                                            <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-yellow-200/50 shadow-sm hover:shadow-md transition-all">
                                                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-yellow-50 rounded-xl flex items-center justify-center border-2 border-yellow-300 shadow-sm">
                                                    <Image 
                                                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" 
                                                        alt="UGC DEB" 
                                                        width={50} 
                                                        height={50} 
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-700 font-semibold text-center">UGC DEB</span>
                                                <span className="text-[10px] text-gray-500 text-center">Approved</span>
                                            </div>
                                        )}
                                        {approval?.aicte && (
                                            <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-yellow-200/50 shadow-sm hover:shadow-md transition-all">
                                                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-yellow-50 rounded-xl flex items-center justify-center border-2 border-yellow-300 shadow-sm">
                                                    <Image 
                                                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp" 
                                                        alt="AICTE" 
                                                        width={50} 
                                                        height={50} 
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-700 font-semibold text-center">AICTE</span>
                                                <span className="text-[10px] text-gray-500 text-center">Recognized</span>
                                            </div>
                                        )}
                                        <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-yellow-200/50 shadow-sm hover:shadow-md transition-all">
                                            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-yellow-50 rounded-xl flex items-center justify-center border-2 border-yellow-300 shadow-sm">
                                                <Image 
                                                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp" 
                                                    alt="NIRF" 
                                                    width={50} 
                                                    height={50} 
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-xs text-gray-700 font-semibold text-center">NIRF</span>
                                            <span className="text-[10px] text-gray-500 text-center">Ranked 32nd</span>
                                        </div>
                                        {approval?.naac && (
                                            <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-yellow-200/50 shadow-sm hover:shadow-md transition-all">
                                                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-yellow-50 rounded-xl flex items-center justify-center border-2 border-yellow-300 shadow-sm">
                                                    <Image 
                                                        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1763124771/NAAC-A_g3pb34.webp" 
                                                        alt="NAAC" 
                                                        width={50} 
                                                        height={50} 
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-700 font-semibold text-center">NAAC</span>
                                                <span className="text-[10px] text-gray-500 text-center">Grade {approval.naac.grade}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                                        Amity University Online is recognized by top regulatory bodies ensuring your degree is valid, respected, and valued globally for government jobs, private sector employment, and higher education.
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                                    <Button
                                        onClick={() => setOpenModal({ type: 'apply' })}
                                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Apply to University
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        onClick={() => setOpenModal({ type: 'enquiry' })}
                                        variant="outline"
                                        className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Talk to University
                                    </Button>
                                </div>

                                {/* Offers */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                                        <span>Subsidy Cashback Available* ₹5,000</span>
                                        <HelpCircle className="w-4 h-4" />
                                    </div>
                                    <div className="text-orange-600 font-medium text-sm">
                                        Offer* valid till December 30th, 11 PM
                                    </div>
                                </div>

                                {/* Additional Links */}
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-1 text-sm transition-colors">
                                        <span className="text-lg">+</span>
                                        Add to Compare
                                    </button>
                                    <button className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-1 text-sm transition-colors">
                                        <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
                                        Download Brochure
                                    </button>
                                </div>

                                {/* Let's Talk Section */}
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-gray-600 text-sm mb-3">Not sure what you are looking for?</p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white shadow-sm"></div>
                                            ))}
                                        </div>
                                        <button className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center gap-1 transition-colors">
                                            Let's Talk
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Get personalized guidance from our education experts
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Promotional Banner */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] sm:h-[600px] lg:h-[650px]">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                {about?.heroImage ? (
                                    <Image
                                        src={about.heroImage}
                                        alt="Amity University Campus"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500"></div>
                                )}
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex flex-col justify-between p-6 sm:p-8">
                                <div className="flex justify-between items-start">
                                    <div className="bg-yellow-500 px-4 py-2 rounded-lg font-bold text-sm text-white shadow-lg">
                                        AMITY UNIVERSITY ONLINE
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="bg-yellow-500/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-semibold text-white">
                                            Subsidy Cashback Available*
                                        </div>
                                        <div className="bg-green-600 px-3 py-1.5 rounded text-xs font-semibold text-white">
                                            Admission On Going
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center text-white">
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
                                        RANKED AMONGST THE
                                    </div>
                                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                                        TOP 3%
                                    </div>
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                        UNIVERSITIES GLOBALLY
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold mt-4 opacity-90">
                                        BE PART OF UNIVERSITY RANKED AMONGST THE TOP 3% UNIVERSITY GLOBALLY
                                    </p>
                                </div>

                                <div className="flex justify-center gap-3">
                                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                                        <span className="text-xs font-bold text-white">QS WORLD UNIVERSITY RANKINGS</span>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                                        <span className="text-xs font-bold text-white">THE Times Higher Education</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-1 pb-16">

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-white via-yellow-50/40 via-orange-50/30 to-yellow-50/20 pb-16 sm:pb-20 pt-12 sm:pt-16 overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-yellow-400/10 backdrop-blur-sm text-orange-700 text-xs font-bold uppercase tracking-wider border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <Award className="w-4 h-4" />
                                    <span>Amity University Online</span>
                                </div>

                                {/* Main Title */}
                                <div className="space-y-3">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
                                        <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                                            {about?.title || "Amity Online Program"}
                                        </span>
                                    </h1>
                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-gray-600 font-semibold">4.5/5</span>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-yellow-600 font-medium hover:underline cursor-pointer">667 Reviews</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
                                    {about?.description}
                                </p>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    {about?.duration && (
                                        <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-4">
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="relative flex items-center gap-3">
                                                <div className="p-2.5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-md">
                                                    <Clock className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Duration</p>
                                                    <p className="text-base font-bold text-gray-900 mt-0.5">{about.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {about?.mode && (
                                        <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-4">
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="relative flex items-center gap-3">
                                                <div className="p-2.5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md">
                                                    <Globe className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Mode</p>
                                                    <p className="text-base font-bold text-gray-900 mt-0.5">{about.mode}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Key Benefits */}
                                {about?.keyBenefits && Array.isArray(about.keyBenefits) && (
                                    <div className="pt-4">
                                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
                                            Key Benefits
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {about.keyBenefits.map((benefit: string, idx) => (
                                                <div key={idx} className="group flex items-start gap-3 text-sm text-gray-700 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300">
                                                    <div className="mt-0.5 p-1 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                                                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                                                    </div>
                                                    <span className="leading-relaxed font-medium">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        onClick={() => setOpenModal({ type: 'apply' })}
                                        className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-6 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button
                                        onClick={() => setOpenModal({ type: 'enquiry' })}
                                        variant="outline"
                                        className="border-2 border-gray-300 hover:border-yellow-500 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 px-8 py-6 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Talk to Expert
                                    </Button>
                                </div>
                            </div>

                            {/* Right Image Section */}
                            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                                {/* Decorative Background Shapes */}
                                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-orange-200/40 via-blue-200/40 to-purple-200/40 rounded-[2.5rem] transform rotate-3 blur-xl"></div>
                                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-100/60 via-blue-100/60 to-purple-100/60 rounded-3xl transform -rotate-2"></div>
                                
                                {/* Main Image Container */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                    {about?.heroImage ? (
                                        <Image
                                            src={about.heroImage}
                                            alt={about?.title || "Course Overview"}
                                            width={800}
                                            height={600}
                                            priority
                                            className="w-full h-auto max-h-[550px] sm:max-h-[650px] object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <Image
                                            src="/images/amity/mbaherosection.jpeg"
                                            alt="Hero Placeholder"
                                            width={800}
                                            height={600}
                                            className="w-full h-auto max-h-[550px] sm:max-h-[650px] object-cover rounded-3xl"
                                        />
                                    )}
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                                </div>

                                {/* Floating Stats Cards */}
                                <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-yellow-200 max-w-[220px] sm:max-w-[260px] hidden md:block hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                                            <Award className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="font-bold text-gray-900 text-sm">UGC Approved</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {approval?.aicte?.icon && (
                                            <div className="p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                                                <Image src={approval.aicte.icon} alt="AICTE" width={32} height={32} className="object-contain" />
                                            </div>
                                        )}
                                        {approval?.ugc_deb?.icon && (
                                            <div className="p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                                                <Image src={approval.ugc_deb.icon} alt="UGC" width={32} height={32} className="object-contain" />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2 leading-tight">
                                        Recognized by top regulatory bodies
                                    </p>
                                </div>

                                {/* Top Right Badge */}
                                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full shadow-xl font-bold text-xs sm:text-sm hidden lg:block animate-bounce">
                                    <span className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-white" />
                                        Top Rated
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approvals Section (Detailed) */}
                <section className="py-12 sm:py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden text-white shadow-2xl">
                            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 hidden md:block">
                                <Award className="w-96 h-96" />
                            </div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Accreditations & Approvals</h2>
                                    <p className="text-blue-100 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                        Our programs are recognized by top regulatory bodies, ensuring your degree is valid, respected, and valued globally.
                                    </p>

                                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                                        {approval?.ugc_deb && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-colors">
                                                <h3 className="font-bold text-base sm:text-lg mb-1">UGC-DEB</h3>
                                                <p className="text-xs sm:text-sm text-blue-100">{approval.ugc_deb.status}</p>
                                            </div>
                                        )}
                                        {approval?.naac && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-colors">
                                                <h3 className="font-bold text-base sm:text-lg mb-1">NAAC {approval.naac.grade}</h3>
                                                <p className="text-xs sm:text-sm text-blue-100">Accredited University</p>
                                            </div>
                                        )}
                                        {approval?.aicte && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-colors">
                                                <h3 className="font-bold text-base sm:text-lg mb-1">AICTE</h3>
                                                <p className="text-xs sm:text-sm text-blue-100">Approved Technical Courses</p>
                                            </div>
                                        )}
                                        {approval?.aiu && (
                                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-colors">
                                                <h3 className="font-bold text-base sm:text-lg mb-1">AIU</h3>
                                                <p className="text-xs sm:text-sm text-blue-100">Member Association</p>
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
                                            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto object-contain drop-shadow-2xl bg-white rounded-full p-4 sm:p-6"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                {whoCanApply && (
                    <section className="py-12 sm:py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">

                                <div className="order-2 md:order-1 relative flex justify-center">
                                    {/* Background Shape */}
                                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform -rotate-2 max-w-full sm:max-w-[420px] mx-auto"></div>

                                    {whoCanApply?.image && (
                                        <Image
                                            src={whoCanApply.image}
                                            alt="Who Can Apply"
                                            width={600}
                                            height={700}
                                            className="
        relative
        rounded-2xl
        shadow-xl
        w-full
        max-w-full
        sm:max-w-[500px]
        md:max-w-[600px]
        h-auto
        max-h-[500px]
        sm:max-h-[600px]
        md:max-h-[700px]
        object-contain
        object-center
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
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
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
                        </div>
                    </section>
                )}

                {/* Specializations */}
                {specializations && (
                    <section className="py-12 sm:py-16 lg:py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                            {/* Heading */}
                            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    Choose Your Specialization
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600 px-4">
                                    Tailor your degree to your career goals with our diverse range of specializations.
                                </p>
                            </div>

                            {/* Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">

                                {/* LEFT CARDS */}
                                <div className="space-y-4 md:space-y-6 order-1 lg:order-1">
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
                                    <div className="relative flex justify-center my-6 md:my-8 lg:my-0 order-2 lg:order-2 md:col-span-2 lg:col-span-1">
                                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform -rotate-2 max-w-full sm:max-w-[400px] mx-auto"></div>

                                        <Image
                                            src={specializationImage}
                                            alt="Specializations"
                                            width={400}
                                            height={600}
                                            className="
                relative
                rounded-2xl
                shadow-xl
                w-full
                max-w-full
                sm:max-w-[350px]
                md:max-w-[400px]
                h-auto
                max-h-[400px]
                sm:max-h-[500px]
                md:max-h-[600px]
                object-contain
                object-center
              "
                                        />
                                    </div>
                                )}

                                {/* RIGHT CARDS */}
                                <div className="space-y-4 md:space-y-6 order-3 lg:order-3 md:col-span-2 lg:col-span-1">
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

                {/* Course Fees */}
                {courseFees && (
                    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-50 rounded-lg">
                                    <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Course Fees</h2>
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
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                                            <p className="text-xs text-gray-400 font-bold uppercase mb-2">Education Loan Partners</p>
                                            <div className="flex flex-wrap gap-2">
                                                {courseFees.loanPartners.map((partner, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                                                        {partner}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {courseFees?.image && (
                                <div className="mt-6 rounded-2xl overflow-hidden h-48 relative">
                                    <Image
                                        src={courseFees.image}
                                        alt="Financial Aid"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                                        <p className="text-white font-bold text-lg">Invest in your future with flexible payment plans</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Sample Certificate */}
                {certifications && (
                    <section className="py-12 sm:py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-purple-50 rounded-lg">
                                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sample Certificate</h2>
                            </div>

                            <div className="relative group perspective-1000">
                                <div className="absolute inset-0 bg-purple-100 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                                <div className="relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-xl">
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
                                                    width={300}
                                                    height={225}
                                                    className="rounded-lg shadow-md border border-gray-200 w-full max-w-[300px] h-auto"
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
                    </section>
                )}

                {/* Syllabus */}
                {syllabus_curriculum && (
                    <section className="py-12 sm:py-16 bg-gray-50">
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
                                                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 sm:p-6">
                                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Curriculum</h2>
                                            <p className="text-white/80 text-xs sm:text-sm">Designed by industry experts to keep you ahead.</p>
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
                                    <div className="mb-6 sm:mb-8">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Syllabus & Curriculum</h2>
                                        <p className="text-sm sm:text-base text-gray-600">A comprehensive breakdown of what you will learn.</p>
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
                    <section className="py-12 sm:py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 mb-8 sm:mb-12 items-center">
                                <div className="md:w-1/2 w-full">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Placements & Career Support</h2>
                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
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
                                    <div className="md:w-1/2 w-full">
                                        <Image
                                            src={placementPartners.image}
                                            alt="Career Support"
                                            width={600}
                                            height={350}
                                            className="w-full h-auto max-h-[300px] sm:max-h-[350px] object-contain rounded-2xl shadow-xl"
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
                    <section className="py-12 sm:py-16 bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
                                <p className="text-sm sm:text-base text-gray-600">Find answers to common questions about the program.</p>
                            </div>

                            <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                                {faqImage && (
                                    <div className="hidden md:block">
                                        <Image
                                            src={faqImage}
                                            alt="FAQ Support"
                                            width={300}
                                            height={400}
                                            className="w-full max-w-[280px] lg:max-w-[300px] h-auto max-h-[400px] object-contain rounded-2xl shadow-lg sticky top-24"
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
                    <section className="py-12 sm:py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <span className="font-bold text-gray-900">Student Success Stories</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
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

                                <div className="relative h-full min-h-[400px] sm:min-h-[500px] hidden lg:block">
                                    {studentReview?.image && (
                                        <Image
                                            src={studentReview.image}
                                            alt="Happy Student"
                                            fill
                                            className="object-cover rounded-3xl shadow-2xl"
                                            sizes="(max-width: 1024px) 0vw, 50vw"
                                        />
                                    )}
                                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-white/50">
                                        <p className="text-gray-900 font-medium text-sm sm:text-base text-center">
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
