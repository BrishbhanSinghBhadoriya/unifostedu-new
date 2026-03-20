import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface CityHighlight {
  city: string;
  focus: string;
}

interface OutReachProps {
  cityHighlights: CityHighlight[];
  setOpenModal: (value: any) => void;
  openModal?: any;
}

const OutReach: React.FC<OutReachProps> = ({ cityHighlights = [], setOpenModal }) => {
  return (
    <div>
      <section id="RegionalOutreach" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Study Online from Delhi, Mumbai, Bangalore &amp; Beyond
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Whether you're searching for an “online MBA degree program near me” or want a flexible 
              Amity University Online degree program while working in metro cities, our digital 
              campus supports learners across India with weekend live sessions, 
              city-specific mentoring, and dedicated counsellors.
            </p>
          </motion.div>

          {/* City Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-6 
                           shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.city}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {highlight.focus}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Blue Section */}
          <div className="mt-10 bg-blue-900 text-white rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-3">
              Nationwide Support for Amity Online Learners
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-blue-100">
              Our admissions advisors connect with students across Tier-1 and 
              Tier-2 cities, helping you choose the right Amity University Online 
              programme, understand the latest fees 2026 structure, and align your online 
              degree with regional career opportunities. Join the monthly Amity online 
              campus tour webinars to explore the digital classrooms, placement labs, 
              and learner success stories before you enrol.
            </p>
          </div>

        </div>

        {/* Enquire Button */}
        <div className="w-full flex justify-center mt-6">
          <Button
            onClick={() => setOpenModal({ type: "enquiry" })}
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

export default OutReach
