import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <div>
        <section id="sessions" className="py-16 bg-blue-900 text-white">
              <div className="max-w-5xl mx-auto text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">
                    Begin Your Educational Journey with Amity Online
                  </h2>
                  <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                    Join thousands of students who have transformed their
                    careers with Amity University's UGC-entitled online degree programs
                  </p>
                </motion.div>
              </div>
            </section>
    </div>
  )
}

export default CTA