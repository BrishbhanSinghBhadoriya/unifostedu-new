"use client";
import React, { memo } from 'react'
import { BookOpen, Briefcase, CheckCircle2, Globe, Laptop, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Highlight card data
const highlightCards = [
  {
    icon: CheckCircle2,
    title: "UGC-Approved & NAAC A+ Accredited",
    description: "Recognized by top Indian authorities for maintaining world-class academic standards."
  },
  {
    icon: Globe,
    title: "Globally Recognized Online Degrees Programs",
    description: "India's first university offering online MBA & BBA programs with global recognition."
  },
  {
    icon: Laptop,
    title: "100% Online & Accessible Worldwide",
    description: "Study anytime, anywhere with full online access to lectures and resources."
  },
  {
    icon: Users,
    title: "Industry-Aligned Global Faculty",
    description: "Programs designed and taught by top educators and global industry experts."
  },
  {
    icon: BookOpen,
    title: "24×7 Digital Learning Access",
    description: "Unlimited access to recorded lectures, study materials, and online library."
  },
  {
    icon: Briefcase,
    title: "Career Support & Internship",
    description: "Personalized placement guidance and internship opportunities for all learners."
  }
];

// Memoized card component
const HighlightCard = memo(({ card }) => (
  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
    <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4 mx-auto" />
    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
      {card.title}
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">
      {card.description}
    </p>
  </div>
));
HighlightCard.displayName = 'HighlightCard';

const Highlights = ({setOpenModal}) => {
  return (
    <section id="highlights" className="bg-gradient-to-b from-white to-indigo-50 py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading - No animation */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
          Key Highlights of Amity University Online
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
          Amity Online combines world-class education with flexibility
          and innovation, helping learners gain global exposure while
          staying connected to strong Indian academic roots.
        </p>

        {/* Highlight Cards - No animations for mobile performance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {highlightCards.map((card, index) => (
            <HighlightCard key={index} card={card} />
          ))}
        </div>

        {/* Bottom Paragraph */}
        <p className="mt-8 sm:mt-10 md:mt-12 text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
          Amity Online stands out for blending{" "}
          <strong>global academic excellence</strong> with{" "}
          <strong>Indian values</strong>, empowering students to gain
          knowledge, skills, and confidence to excel in their
          professional journey.
        </p>

        
      </div>
    </section>
  )
}

export default memo(Highlights);