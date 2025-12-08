import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Globe, GraduationCap, Star, StarIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";



const Feature = () => {
     const features = [
        {
          icon: GraduationCap,
          title: "UGC Approved Degrees",
          description:
            "All programs are UGC approved and globally recognized for academic excellence",
        },
        {
          icon: Globe,
          title: "Global Recognition",
          description:
            "Degrees recognized by WES, international universities and multinational corporations",
        },
        {
          icon: BookOpen,
          title: "Flexible Learning",
          description:
            "24/7 access to learning materials with AI-powered personalized study plans",
        },
        {
          icon: StarIcon,
          title: "Industry Expert Faculty",
          description: "Learn from experienced professionals and industry leaders",
        },
      ];
    
  return (
    <div>
         <section className="py-12 md:py-16 lg:py-20 bg-white">
                      <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <motion.div
                          className="text-center mb-12 md:mb-16"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          {/* Background Pattern */}
                          <div
                            className="absolute inset-0 opacity-40"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                          ></div>
        
                          <div className="max-w-5xl mx-auto relative z-10 text-center">
                            {/* Heading Section */}
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="mb-10"
                            >
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose Amity University Online?
                              </h2>
                              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
                            </motion.div>
        
                            {/* Main Content */}
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              viewport={{ once: true }}
                              className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-100 text-left md:text-justify"
                            >
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Choosing Amity University Online means getting enrolled
                                in one of India’s top UGC-approved online universities
                                recognized by NAAC that combine academic excellence,
                                industry relevance, and global recognition in one place.
                                Amity Online helps students to achieve their goals
                                through flexible, affordable, and accredited online
                                degree programs in India that are designed for today’s
                                digital world.
                              </p>
                              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                                1. UGC-Approved and Globally Recognized
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Amity University Online is a UGC-entitled and
                                NAAC-accredited online university in India, ensuring
                                that every online degree, online MBA, or online BBA you
                                earn is recognized by government bodies throughout the
                                world. Our programs meet the standard quality of
                                education set by the Government of India and are
                                accepted by top organizations worldwide.
                              </p>
                              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                                2. Flexible Learning for Everyone
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed">
                                If you’re a working professional, a fresh graduate, or a
                                career switcher, Amity Online gives you complete
                                learning flexibility at your doorstep. You can study at
                                your own pace through recorded classes, live virtual
                                sessions, and AI-driven platforms that are accessible
                                anytime, anywhere to every student who is enrolled. It’s
                                perfect for students seeking an online MBA in India for
                                working professionals or distance education in India
                                with maximum convenience and flexibility.
                              </p>
        
                              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                                3. Industry-Driven Curriculum
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                All online courses are designed by academic experts and
                                industry leaders to ensure practical knowledge and
                                real-world application at Amity University Online. Our
                                online MBA, online BCA, online M.Com, and online MCA
                                programs focus on developing in-demand skills in areas
                                like Business Analytics, Finance, HR, Marketing, and
                                Data Science — ensuring you stay ahead in the
                                competitive job market and build your future.
                              </p>
                              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                                4. Global Exposure and Expert Faculty
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Amity Online connects you to a network of international
                                universities, global faculty members, and corporate
                                mentors. You learn from the world class educators,
                                industry experts, and professionals that are experienced
                                from leading organizations throughout the world — making
                                Amity one of the top online universities in India 2025
                                for global exposure and professional networking that
                                will help in future not only in India but in foreign
                                too.
                              </p>
                              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                                5. Career Guidance and Placement Support
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                From the moment you enroll, Amity Online provides
                                dedicated placement assistance, resume workshops,
                                personalized mentoring sessions, and a full-time
                                counsellor will be assigned who will help you throughout
                                your journey. Our counselors will guide you in finding
                                the right career path and choosing it after completing
                                your online degree in India. Thousands of Amity Online
                                alumni now work in Fortune 500 companies, startups, and
                                multinational organizations.{" "}
                              </p>
                              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                                6. Technology-Enabled Learning Experience
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Amity University Online learning platform features include AI-powered dashboards, immersive virtual
                                classrooms, and interactive course materials that keep participation high. Learners can track their
                                progress, connect with peers, and access 24x7 academic support from any device.
                              </p>
                            </motion.div>
        
                            {/* CTA Buttons */}
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                              viewport={{ once: true }}
                              className="mt-10 text-center"
                            >
                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                  size="lg"
                                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg rounded-full cursor-pointer"
                                  onClick={() => setOpenModal({ type: "apply" })}
                                >
                                  Apply Now
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
        
                                <Button
                                  size="lg"
                                  variant="outline"
                                  className="border-2 border-gray-300 hover:border-blue-400 px-8 py-3 text-lg rounded-full cursor-pointer"
                                  onClick={() => setOpenModal({ type: "enquiry" })}
                                >
                                  <ArrowRight className="w-5 h-5 mr-2" />
                                  Enquire Now
                                </Button>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                          {features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ y: -5 }}
                            >
                              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4 md:p-6 text-center">
                                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-1 md:mb-1">
                                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                  </div>
                                  <h3 className="text-base md:text-lg font-semibold text-gray-900  md:mb-1">
                                    {feature.title}
                                  </h3>
                                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                    {feature.description}
                                  </p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </section>
    </div>
  )
}

export default Feature