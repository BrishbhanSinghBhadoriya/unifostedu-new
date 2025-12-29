import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, TrendingUp, Users }from "lucide-react";


const Placements = () => {
  return (
    <div>
        <section id="PlacementRecord" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative font-[Inter]">
                      {/* Background Pattern */}
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
        
                      <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Heading */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className="text-center mb-12"
                        >
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Placement Record
                          </h2>
                          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
                          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            <strong>Amity University Online</strong> recorded a 92% placement conversion for the 2024–25 cohort.
                            Learners leveraged Amity University Online placement assistance to secure roles in technology, analytics,
                            BFSI, consulting, marketing, and high-growth startups.
                          </p>
                        </motion.div>
        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                          {[
                            {
                              icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
                              title: "92% Placement Conversion",
                              desc: "Career outcomes tracked across online MBA, BBA, and MCA batches.",
                            },
                            {
                              icon: <Users className="w-8 h-8 text-yellow-500" />,
                              title: "700+ Corporate Partners",
                              desc: "Global brands and Indian enterprises hire Amity Online graduates.",
                            },
                            {
                              icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
                              title: "₹7.6 LPA Average CTC",
                              desc: "For online MBA and postgraduate programmes in 2024.",
                            },
                            {
                              icon: <Calendar className="w-8 h-8 text-yellow-500" />,
                              title: "12 Virtual Job Fairs",
                              desc: "Live hiring weeks, mock interviews, and LinkedIn profile clinics.",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7, delay: index * 0.2 }}
                              viewport={{ once: true }}
                              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition"
                            >
                              <div className="flex justify-center mb-4">
                                {item.icon}
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                          ))}
                        </div>
        
                        {/* Closing Paragraph */}
                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="text-center text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
                        >
                          Amity Online not only focuses on academic excellence but also
                          on <strong>employability</strong>, helping students transform
                          their online degrees into successful careers through
                          continuous industry collaborations and professional training
                          support.
                        </motion.p>
                      </div>
                  
        
                    </section>
    </div>
  )
}

export default Placements