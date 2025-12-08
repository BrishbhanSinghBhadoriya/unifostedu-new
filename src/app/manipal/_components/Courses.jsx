import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs';
import { use } from 'react'
import EnquireCard from '@/components/EnquireCard';
import { Button } from '@/components/ui/button';

const Courses = ({ ugCourses, pgCourses }) => {
      const [activeTab, setActiveTab] = useState('all');
      
  return (
      <section id="Courses" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Explore <span className="text-orange-500">Online Courses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Manipal University Jaipur Online offers a diverse portfolio of UG and PG online degree programs tailored for career growth and lifelong learning. 
                Each program follows an industry-relevant curriculum, designed to equip learners with job-ready skills.
              </p>
            </motion.div>

            {/* Course Categories */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Undergraduate Programs */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎓</span>
                    Undergraduate Online Degrees
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">1. Online BBA (Bachelor of Business Administration)</h4>
                      <p className="text-gray-600 text-sm">
                        Gain a solid foundation in business, finance, and management. This online BBA program helps students develop leadership and strategic thinking skills required in global business environments.
                      </p>
                      <div>
                       <Link href="/muj-online-bba">
                       <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 cursor-pointer">
                       More Information
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">2. Online BCA (Bachelor of Computer Applications)</h4>
                      <p className="text-gray-600 text-sm">
                        A three-year degree focused on computer science, programming, and IT applications. The online BCA from Manipal Online is ideal for students looking to enter the tech industry.
                      </p>
                       <div>
                       <Link href="/muj-online-bca">
                       <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                       More Information
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">3. Online BA (Bachelor of Arts)</h4>
                      <p className="text-gray-600 text-sm">
                        This flexible and interdisciplinary online BA degree enhances analytical, communication, and creative thinking abilities across humanities and social science subjects.
                      </p>
                       <div>
                       <Link href="/muj-online-ba">
                       <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition-all duration-300 cursor-pointer">
                        More Information
                       </button>
                         </Link>
                         </div>
                    </div>
                  </div>
                </div>

                {/* Postgraduate Programs */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    Postgraduate Online Degrees
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">1. Online MBA (Master of Business Administration)</h4>
                      <p className="text-gray-600 text-sm">
                        The flagship program of Manipal University Jaipur Online, the online MBA offers specializations in Marketing, HR, Finance, Operations, and Analytics. 
                        Designed for working professionals, it blends management theory with real-world business practices.
                      </p>
                       <div>
                       <Link href="/muj-online-mba">
                       <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 cursor-pointer">
                       More Information
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">2. Online MCA (Master of Computer Applications)</h4>
                      <p className="text-gray-600 text-sm">
                        A program built for tech enthusiasts and professionals looking to enhance their software development and data analytics skills.
                      </p>
                       <div>
                       <Link href="/muj-online-mca">
                       <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                       More Information
                       </button>
                         </Link>
                         </div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">3. Online M.Com (Master of Commerce)</h4>
                      <p className="text-gray-600 text-sm">
                        Designed for commerce graduates and professionals, this online M.Com program focuses on financial management, accounting, and business analytics.
                      </p>
                       <div>
                       <Link href="/manipal">
                       <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition-all duration-300 cursor-pointer">
                        More Information
                       </button>
                         </Link>
                         </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Certifications */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  Professional Certification Programs
                </h3>
                <p className="text-gray-700 mb-6">
                  In addition to degree programs, Manipal Online offers short-term and professional certifications in emerging fields such as Data Science, 
                  Digital Marketing, AI, and Project Management — ensuring continuous career development for learners across the globe.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="font-semibold text-gray-800">Data Science</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-semibold text-gray-800">Digital Marketing</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-semibold text-gray-800">Artificial Intelligence</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="font-semibold text-gray-800">Project Management</div>
                  </div>
                </div>
              </div>
            </div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8 sm:mb-12">
                <Tabs.List className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200">
                  <Tabs.Trigger 
                    value="all"   
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='all' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
                  >
                    All Programs
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="ug"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='ug' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
                  >
                    Undergraduate
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="pg"  
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300
                             ${activeTab==='pg' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`}
                  >
                    Postgraduate
                  </Tabs.Trigger>
                </Tabs.List>
              </div>

              <Tabs.Content value="all">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {([...ugCourses, ...pgCourses].slice(0, 8)).map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    >
                      <EnquireCard {...course} universityName="Manipal University Online" />
                    </motion.div>
                  ))}
                </motion.div>
                {/* <div className="mt-6 flex justify-center">
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('ug')} className="border-2">
                    Show more programs
                  </Button>
                </div> */}
              </Tabs.Content>

              {/* UG Courses */}
              <Tabs.Content value="ug">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {ugCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    >
                      <EnquireCard {...course} universityName="Manipal University Online" />
                    </motion.div>
                  ))}
                </motion.div>
              </Tabs.Content>

              {/* PG Courses */}
              <Tabs.Content value="pg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {pgCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    >
                      <EnquireCard {...course} universityName="Manipal University Online" />
                    </motion.div>
                  ))}
                </motion.div>
              </Tabs.Content>
    </Tabs.Root>
          </div>
</section>
  )
}

export default Courses