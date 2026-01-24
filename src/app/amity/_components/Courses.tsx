import React from 'react'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import EnquireCard from "@/components/EnquireCard";
import { OpenModalState } from '../../../../types/Modal'
type ExploreCoursesProps = {
  ugCourses: any[];
  pgCourses: any[];
  ug_pgCourses: any[];
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
  openModal: OpenModalState;
};


const Courses : React.FC<ExploreCoursesProps> = ({
  ugCourses,
  pgCourses,
  ug_pgCourses,
  setOpenModal,
  openModal,
}) => {
  const [activeTab, setActiveTab] = useState('all');
      
    
  return (
    <div><section
                  id="Courses"
                  className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white px-3 sm:px-4 md:px-6 font-[Inter] relative"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
    
                  <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-yellow-400 text-center mb-6 sm:mb-8 md:mb-12 p-4 sm:p-5 md:p-6 rounded-lg">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-wide mb-2 text-black">
                        Explore Our Programs
                      </h2>
                      <p className="text-black text-sm sm:text-base md:text-lg">
                        Find the perfect course to launch or advance your career.
                      </p>
                    </div>
    
                    {/* Shadcn Tabs - Responsive */}
                    <Tabs defaultValue="ug" className="w-full">
                      <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
                        <TabsList className="grid w-full max-w-full sm:max-w-md md:max-w-2xl grid-cols-3 bg-white p-1 sm:p-2 md:p-5 rounded-full gap-1 sm:gap-2">
                          <TabsTrigger
                            value="ug"
                            className="px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                           data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                           hover:bg-gray-50 data-[state=inactive]:text-gray-600 cursor-pointer"
                          >
                            <span className="hidden sm:inline">Undergraduate</span>
                            <span className="sm:hidden">UG</span>
                          </TabsTrigger>
                          <TabsTrigger
                            value="pg"
                            className="px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                           data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                           hover:bg-gray-50 data-[state=inactive]:text-gray-600 cursor-pointer"
                          >
                            <span className="hidden sm:inline">Postgraduate</span>
                            <span className="sm:hidden">PG</span>
                          </TabsTrigger>
                          <TabsTrigger
                            value="integrated"
                            className="px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                           data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                           hover:bg-gray-50 data-[state=inactive]:text-gray-600 cursor-pointer"
                          >
                            <span className="hidden sm:inline">Integrated</span>
                            <span className="sm:hidden">IG</span>
                          </TabsTrigger>
                        </TabsList>
                      </div>
    
                      {/* Tab Content */}
                      <TabsContent value="ug" className="mt-4 sm:mt-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {ugCourses.map((item, index) => (
                              <div
                                key={`ug-${item.course}-${index}`}
                                className="w-full"
                              >
                                <EnquireCard
                                  {...item}
                                  universityName="Amity University Online"
                                  uniqueId={`ug-${index}`}
                                />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>
    
                      <TabsContent value="pg" className="mt-4 sm:mt-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {pgCourses.map((item, index) => (
                              <div
                                key={`pg-${item.course}-${index}`}
                                className="w-full"
                              >
                                <EnquireCard
                                  {...item}
                                  universityName="Amity University Online"
                                  uniqueId={`pg-${index}`}
                                />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>
    
                      <TabsContent value="integrated" className="mt-4 sm:mt-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {ug_pgCourses.map((item, index) => (
                              <div
                                key={`integrated-${item.course}-${index}`}
                                className="w-full"
                              >
                                <EnquireCard
                                  {...item}
                                  universityName="Amity University Online"
                                  uniqueId={`integrated-${index}`}
                                />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </section>
    </div>
  )
}

export default Courses