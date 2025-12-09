import LazySection from '@/components/LazySection'
import React from 'react'
import { motion } from "framer-motion";
import { FaGraduationCap, FaIndustry, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';

const AdvantageManipal = () => {
  return (
     <LazySection>
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advantages of <span className="text-orange-500">Manipal University</span>?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class education with flexible learning, global recognition, and comprehensive support
            </p>
          </motion.div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: '100% Flexible Learning',
                description: 'Learn at your own pace with recorded lectures and live sessions',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: FaIndustry,
                title: 'Industry Relevant Curriculum',
                description: 'Globally recognized degrees with UGC entitlement',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: FaUniversity,
                title: 'At Par with On-Campus Degrees',
                description: '100% placement assistance and career guidance',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: FaMoneyBillWave,
                title: '100% Placement Assistance',
                description: 'No-cost EMI options and scholarships available',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-200 h-full">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
      </section>
      </LazySection>
  )
}

export default AdvantageManipal