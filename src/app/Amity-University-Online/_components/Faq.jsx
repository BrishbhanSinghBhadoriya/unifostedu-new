import React from 'react'
import {Button} from '@/components/ui/button'

const Faq = ({faqData, openIndex, setOpenIndex}) => {
    
  return (
    <div>
        <section id="FAQs" className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-3 sm:px-4">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
                        FAQs on Amity University Online MBA &amp; Degrees
                      </h2>
        
                      <div className="space-y-3 sm:space-y-4">
                        {faqData.map((faq, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4"
                          >
                            <button
                              type="button"
                              className="w-full text-left flex justify-between items-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl gap-2 cursor-pointer transition-colors hover:text-indigo-600"
                              onClick={() => toggleFAQ(index)}
                              aria-expanded={openIndex === index}
                              aria-controls={`faq-answer-${index}`}
                              id={`faq-question-${index}`}
                            >
                              <span className="flex-1">{faq.question}</span>
                              <span className="ml-2 text-indigo-500 text-lg sm:text-xl md:text-2xl flex-shrink-0">
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
                       hover:text-white hover:bg-[#452971] 
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