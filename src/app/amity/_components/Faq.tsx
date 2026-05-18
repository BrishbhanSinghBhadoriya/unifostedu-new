import React from 'react'
import {Button} from '@/components/ui/button'
import { OpenModalState } from '../../../../types/Modal'
const Faq = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
 const faqData = [
    {
      question: "Is the Amity University Online MBA UGC-entitled and NAAC A+ accredited?",
      answer:
        "Yes. Amity University Online holds UGC entitlement and NAAC A+ accreditation, so the online MBA and every other Amity University Online degree carries the same recognition as an on-campus qualification.",
    },
    {
      question: "Is an Amity University Online degree valid for government jobs and abroad?",
      answer:
        "Absolutely. Amity University Online degree programs are accepted for government jobs in India and are globally recognized, making them suitable for higher studies or international employment opportunities.",
    },
    {
      question: "What is the 2026 Amity University Online MBA fees structure?",
      answer:
        "For the 2026 intake, the Amity University Online MBA fees structure ranges from ₹1,99,000 to ₹2,99,000 depending on the specialization. Flexible EMI plans and no-cost installment options are available for working professionals.",
    },
    {
      question: "Does Amity University Online provide placement assistance?",
      answer:
        "Yes. Amity University Online offers dedicated placement assistance including virtual job fairs, resume mentoring, interview preparation, and connections with 500+ hiring partners across India.",
    },
    {
      question: "Can working professionals pursue the Amity University Online MBA?",
      answer:
        "The Amity University Online MBA is built for working professionals, featuring weekend live classes, on-demand video lectures, and a flexible assessment schedule so you can study without leaving your job.",
    },
    {
      question: "What is the admission process for Amity University Online degrees?",
      answer:
        "The Amity University Online admission process is completely digital: submit the application form, upload academic documents, pay the registration fee, and await counseling confirmation via email or phone.",
    },
    {
      question: "What are the eligibility criteria for Amity University Online BBA, BCA, and MCA?",
      answer:
        "For UG programs like the Amity University Online BBA and BCA, you need a 10+2 pass from a recognized board. For the MCA, candidates must have a relevant bachelor’s degree with mathematics or computer science exposure.",
    },
    {
      question: "Does Amity University Online offer scholarships or EMI support?",
      answer:
        "Yes. Amity University Online extends merit scholarships, corporate partner discounts, and 0% EMI support to help learners manage fees for programs like the online MBA, BBA, and MCA.",
    },
    {
      question: "How does Amity University Online compare with other online universities?",
      answer:
        "Amity University Online combines NAAC A+ accreditation, global collaborations, and over 25,000 alumni, making it a top alternative when you compare Amity University Online with other UGC-approved online universities in India.",
    },
    {
      question: "Are Amity University Online degrees globally recognized?",
      answer:
        "Yes. Every Amity University Online degree follows global academic standards, includes WES evaluation support, and is valued by employers across North America, Europe, the Middle East, and Asia.",
    },
  ];   
  return (
    <div className="relative z-10 pointer-events-auto">
        <section id="FAQs" className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-3 sm:px-4">
          
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
                        FAQs on Amity University Online MBA &amp; Degree Programs
                      </h2>
        
                      <div className="space-y-3 sm:space-y-4">
                        {faqData.map((faq, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4"
                          >
                            <button
                              type="button"
                              className="w-full text-left flex justify-between items-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl gap-2 cursor-pointer transition-colors hover:text-blue-900"
                              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                              aria-expanded={openIndex === index}
                              aria-controls={`faq-answer-${index}`}
                              id={`faq-question-${index}`}
                            >
                              <span className="flex-1">{faq.question}</span>
                              <span className="ml-2 text-blue-900 text-lg sm:text-xl md:text-2xl flex-shrink-0">
                                {openIndex === index ? "-" : "+"}
                              </span>
                            </button>
                            {openIndex === index && (
                              <p
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed"
                              >
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
        
                      {/* JSON-LD for SEO */}
                      <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                          __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: faqData.map((faq) => ({
                              "@type": "Question",
                              name: faq.question,
                              acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                              },
                            })),
                          }),
                        }}
                      />
        
                      <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => setOpenModal({ type: "apply" })}
            size="lg"
            className="bg-yellow-400 text-black border border-black 
                       hover:text-white hover:bg-blue-900 
                       text-sm sm:text-base px-6 sm:px-8 py-2.5 
                       rounded-lg shadow-md transition-all duration-300
                       hover:scale-105 cursor-pointer"
          >
            <span className="hidden sm:inline">Enquire Now</span>
            <span className="sm:hidden">Enquire</span>
          </Button>
        </div>
        
                    </section>
        
    </div>
  )
}

export default Faq