import React, { useState } from 'react'
import Headers from '../../_components/Headers';
import Footer from '../../_components/Footer';
import {CourseDetails, IntegratedProgramDetails, Specialization } from 'types/AmitySlug';

interface SlugClientProps {
    courseData: CourseDetails | IntegratedProgramDetails;
}


const SlugClient = ({ courseData }: SlugClientProps) => {
    const [openModal, setOpenModal] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    if (!courseData) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Headers setOpenModal={setOpenModal} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <h1 className="text-2xl font-semibold text-red-700 mb-2">
                            Course not found
                        </h1>
                        <p className="text-gray-700">
                            The course you are looking for does not exist. Please go back to the Amity Online courses page and select a valid program.
                        </p>
                    </div>
                </main>
                <Footer setOpenModal={setOpenModal} openModal={openModal} />
            </div>
        );
    }

    const { about, approval, whoCanApply, specializations, courseFees, certifications, syllabus_curriculum, placementPartners, faq, studentReview } = courseData as CourseDetails;

    const renderSyllabus = () => {
        if (!syllabus_curriculum) return null;

        return Object.entries(syllabus_curriculum)
            .filter(([key]) => key !== "evaluationPattern")
            .map(([key, subjects]) => (
                <div key={key} className="bg-gray-50 rounded-xl p-4 md:p-5">
                    <h4 className="font-semibold text-gray-900 mb-3 uppercase tracking-wide text-xs md:text-sm">
                        {key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").toUpperCase()}
                    </h4>
                    <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                        {Array.isArray(subjects) &&
                            subjects.map((subject) => (
                                <li key={subject}>{subject}</li>
                            ))}
                    </ul>
                </div>
            ));
    };
    return (
        <div className="min-h-screen bg-white flex flex-col" style={{ overflowX: "hidden" }}>
            <Headers setOpenModal={setOpenModal} setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
                {/* Hero / Overview */}
                <section className="mb-10 md:mb-14">
                    <div className="grid gap-8 md:grid-cols-[2fr,1.3fr] items-start">
                        <div>
                            <p className="text-xs md:text-sm font-medium text-orange-500 uppercase tracking-[0.15em] mb-2">
                                Amity University Online • Program Overview
                            </p>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                {about?.title || "Amity Online Program"}
                            </h1>
                            <p className="text-sm md:text-base text-gray-700 mb-4">
                                {about?.university || "Amity University Online"}
                            </p>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {about?.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {about?.duration && (
                                    <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs md:text-sm text-orange-700 border border-orange-100">
                                        <span className="font-semibold mr-1.5">Duration:</span> {about.duration}
                                    </div>
                                )}
                                {about?.mode && (
                                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs md:text-sm text-blue-700 border border-blue-100">
                                        <span className="font-semibold mr-1.5">Mode:</span> {about.mode}
                                    </div>
                                )}
                            </div>

                            {about?.keyBenefits && Array.isArray(about.keyBenefits) && (
                                <div className="mt-6">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                        Key Benefits
                                    </h3>
                                    <div className="grid gap-2 sm:grid-cols-2">
                                        {about.keyBenefits.map((benefit: string) => (
                                            <div
                                                key={benefit}
                                                className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                                            >
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Info Card (Approvals & Highlights) */}
                        <aside className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
                                Approvals & Recognition
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-gray-800">
                                {approval?.ugc_deb && (
                                    <div className="border-b border-gray-100 pb-2">
                                        <p className="font-semibold">UGC-DEB</p>
                                        <p className="text-gray-700">{approval.ugc_deb.status}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            {approval.ugc_deb.description}
                                        </p>
                                    </div>
                                )}
                                {approval?.naac && (
                                    <div className="border-b border-gray-100 pb-2">
                                        <p className="font-semibold">NAAC</p>
                                        <p className="text-gray-700">Grade {approval.naac.grade}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            {approval.naac.description}
                                        </p>
                                    </div>
                                )}
                                {approval?.aicte && (
                                    <div className="border-b border-gray-100 pb-2">
                                        <p className="font-semibold">AICTE</p>
                                        <p className="text-gray-700">{approval.aicte.status}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            {approval.aicte.description}
                                        </p>
                                    </div>
                                )}
                                {approval?.aiu && (
                                    <div>
                                        <p className="font-semibold">AIU</p>
                                        <p className="text-gray-700">{approval.aiu.status}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            {approval.aiu.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {approval?.degreeRecognition && Array.isArray(approval.degreeRecognition) && (
                                <div className="mt-4">
                                    <p className="text-xs font-semibold text-gray-900 mb-1.5">
                                        Degree Validity
                                    </p>
                                    <ul className="space-y-1 text-xs text-gray-700 list-disc list-inside">
                                        {approval.degreeRecognition.map((item: string) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </aside>
                    </div>
                </section>


                {(whoCanApply || specializations) && (
                    <section className="mb-10 md:mb-14">
                        <div className="grid gap-8 md:grid-cols-2">
                            {whoCanApply && (
                                <div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                        Who Can Apply?
                                    </h2>
                                    <div className="space-y-3 text-sm md:text-base text-gray-700">
                                        {whoCanApply.eligibility && (
                                            <p>
                                                <span className="font-semibold">Eligibility: </span>
                                                {whoCanApply.eligibility}
                                            </p>
                                        )}
                                        {whoCanApply.minimumMarks && (
                                            <p>
                                                <span className="font-semibold">Minimum Marks: </span>
                                                {whoCanApply.minimumMarks}
                                            </p>
                                        )}
                                        {whoCanApply.preferredSubjects && (
                                            <p>
                                                <span className="font-semibold">Preferred Subjects: </span>
                                                {whoCanApply.preferredSubjects}
                                            </p>
                                        )}
                                        {whoCanApply.entranceExam && (
                                            <p>
                                                <span className="font-semibold">Entrance Exam: </span>
                                                {whoCanApply.entranceExam}
                                            </p>
                                        )}
                                        {whoCanApply.ageLimit && (
                                            <p>
                                                <span className="font-semibold">Age Limit: </span>
                                                {whoCanApply.ageLimit}
                                            </p>
                                        )}
                                    </div>

                                    {whoCanApply.idealCandidates && Array.isArray(whoCanApply.idealCandidates) && (
                                        <div className="mt-4">
                                            <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                                Ideal For
                                            </h3>
                                            <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                                                {whoCanApply.idealCandidates.map((item: string) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {whoCanApply.documentsRequired && Array.isArray(whoCanApply.documentsRequired) && (
                                        <div className="mt-4">
                                            <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                                Documents Required
                                            </h3>
                                            <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                                                {whoCanApply.documentsRequired.map((doc: string) => (
                                                    <li key={doc}>{doc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                            {specializations && (
                                <div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                        Specializations
                                    </h2>
                                    <div className="space-y-3">
                                        {Array.isArray(specializations)
                                            ? specializations.map((spec) => (
                                                <div
                                                    key={spec.name}
                                                    className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm"
                                                >
                                                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                                        {spec.name}
                                                    </h3>
                                                    {spec.fee && (
                                                        <p className="text-xs md:text-sm text-orange-600 font-medium mt-1">
                                                            Fee: {spec.fee}
                                                        </p>
                                                    )}
                                                    {spec.description && (
                                                        <p className="text-xs md:text-sm text-gray-700 mt-2">
                                                            {spec.description}
                                                        </p>
                                                    )}
                                                </div>
                                            ))
                                            : (Object.values(specializations) as Specialization[]).map((spec) => (
                                                <div
                                                    key={spec.name}
                                                    className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm"
                                                >
                                                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                                        {spec.name}
                                                    </h3>
                                                    {spec.fee && (
                                                        <p className="text-xs md:text-sm text-orange-600 font-medium mt-1">
                                                            Fee: {spec.fee}
                                                        </p>
                                                    )}
                                                    {spec.description && (
                                                        <p className="text-xs md:text-sm text-gray-700 mt-2">
                                                            {spec.description}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Fees & Certifications */}
                {(courseFees || certifications) && (
                    <section className="mb-10 md:mb-14">
                        <div className="grid gap-8 md:grid-cols-2">
                            {courseFees && (
                                <div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                        Fee Structure
                                    </h2>
                                    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6 space-y-3 text-sm md:text-base text-gray-700">
                                        {courseFees.feeRange && (
                                            <p>
                                                <span className="font-semibold">Total Program Fees: </span>
                                                {courseFees.feeRange}
                                            </p>
                                        )}
                                        {courseFees.semesterWiseApprox && (
                                            <p>
                                                <span className="font-semibold">Approx. Per Semester: </span>
                                                {courseFees.semesterWiseApprox}
                                            </p>
                                        )}

                                        {courseFees.paymentOptions && Array.isArray(courseFees.paymentOptions) && (
                                            <div className="mt-3">
                                                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                                    Payment Options
                                                </h3>
                                                <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                                                    {courseFees.paymentOptions.map((opt) => (
                                                        <li key={opt}>{opt}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {courseFees.loanPartners && Array.isArray(courseFees.loanPartners) && (
                                            <div className="mt-3">
                                                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                                    Education Loan Partners
                                                </h3>
                                                <p className="text-sm text-gray-700">
                                                    {courseFees.loanPartners.join(", ")}
                                                </p>
                                            </div>
                                        )}

                                        {courseFees.feeIncludes && Array.isArray(courseFees.feeIncludes) && (
                                            <div className="mt-3">
                                                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                                    Fee Includes
                                                </h3>
                                                <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                                                    {courseFees.feeIncludes.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {certifications && (
                                <div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                        Degree & Certifications
                                    </h2>
                                    <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm space-y-3 text-sm md:text-base text-gray-700">
                                        {certifications.degreeAwarded && (
                                            <p>
                                                <span className="font-semibold">Degree Awarded: </span>
                                                {certifications.degreeAwarded}
                                            </p>
                                        )}
                                        {certifications.degreeModeMentioned !== undefined && (
                                            <p>
                                                <span className="font-semibold">Mode Mentioned on Degree: </span>
                                                {certifications.degreeModeMentioned ? "Yes" : "No"}
                                            </p>
                                        )}

                                        {certifications.certificateValidity &&
                                            Array.isArray(certifications.certificateValidity) && (
                                                <div className="mt-2">
                                                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                                        Degree Valid For
                                                    </h3>
                                                    <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                                                        {certifications.certificateValidity.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                        {certifications.additionalCertificates &&
                                            Array.isArray(certifications.additionalCertificates) && (
                                                <div className="mt-2">
                                                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                                        Additional Certificates
                                                    </h3>
                                                    <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                                                        {certifications.additionalCertificates.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                        {certifications.verification && (
                                            <p className="text-xs md:text-sm text-gray-600 mt-2">
                                                <span className="font-semibold">Verification: </span>
                                                {certifications.verification}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Syllabus */}
                {syllabus_curriculum && (
                    <section className="mb-10 md:mb-14">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            Syllabus & Curriculum
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {renderSyllabus()}
                        </div>
                        {syllabus_curriculum.evaluationPattern && (
                            <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-5 text-sm text-gray-800">
                                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                    Evaluation Pattern
                                </h3>
                                <p>
                                    <span className="font-semibold">Internal Assessment: </span>
                                    {syllabus_curriculum.evaluationPattern.internalAssessment}
                                </p>
                                <p>
                                    <span className="font-semibold">Final Exam: </span>
                                    {syllabus_curriculum.evaluationPattern.finalExam}
                                </p>
                                {syllabus_curriculum.evaluationPattern.examMode && (
                                    <p>
                                        <span className="font-semibold">Exam Mode: </span>
                                        {syllabus_curriculum.evaluationPattern.examMode}
                                    </p>
                                )}
                            </div>
                        )}
                    </section>
                )}

                {/* Placements */}
                {placementPartners && (
                    <section className="mb-10 md:mb-14">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            Placements & Career Support
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {placementPartners.topRecruiters && (
                                <div className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                        Top Recruiters
                                    </h3>
                                    <ul className="space-y-1.5 text-xs md:text-sm text-gray-700 list-disc list-inside">
                                        {placementPartners.topRecruiters.map((company) => (
                                            <li key={company}>{company}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {placementPartners.jobRoles && (
                                <div className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                        Popular Job Roles
                                    </h3>
                                    <ul className="space-y-1.5 text-xs md:text-sm text-gray-700 list-disc list-inside">
                                        {placementPartners.jobRoles.map((role) => (
                                            <li key={role}>{role}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 md:p-5">
                                {placementPartners.averageSalary && (
                                    <p className="text-sm md:text-base text-gray-900 mb-2">
                                        <span className="font-semibold">Average Salary: </span>
                                        {placementPartners.averageSalary}
                                    </p>
                                )}
                                {placementPartners.careerSupport && (
                                    <div className="mt-2">
                                        <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                            Career Support
                                        </h3>
                                        <ul className="space-y-1.5 text-xs md:text-sm text-gray-700 list-disc list-inside">
                                            {placementPartners.careerSupport.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQs */}
                {faq && Array.isArray(faq) && (
                    <section className="mb-10 md:mb-14">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faq.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm"
                                >
                                    <p className="text-sm md:text-base font-semibold text-gray-900">
                                        {item.question}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-700 mt-1.5">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Student Reviews */}
                {studentReview && (
                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            Student Reviews
                        </h2>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6">
                            {studentReview.averageRating && (
                                <p className="text-sm md:text-base text-gray-900 mb-2">
                                    <span className="font-semibold">Average Rating: </span>
                                    {studentReview.averageRating} / 5
                                </p>
                            )}
                            {studentReview.studentCount && (
                                <p className="text-xs md:text-sm text-gray-700 mb-3">
                                    {studentReview.studentCount}
                                </p>
                            )}
                            {studentReview.positiveFeedback &&
                                Array.isArray(studentReview.positiveFeedback) && (
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {studentReview.positiveFeedback.map((feedback) => (
                                            <span
                                                key={feedback}
                                                className="inline-flex items-center rounded-full bg-white border border-gray-200 px-3 py-1 text-xs md:text-sm text-gray-800"
                                            >
                                                {feedback}
                                            </span>
                                        ))}
                                    </div>
                                )}
                        </div>
                    </section>
                )}
            </main>

            <Footer setOpenModal={setOpenModal} openModal={openModal} />
        </div>
    )
}

export default SlugClient