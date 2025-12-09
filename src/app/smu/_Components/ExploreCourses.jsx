import * as Tabs from '@radix-ui/react-tabs';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const ExploreCourses = ({setOpenModal, openModal, ugCourses, pgCourses}) => {
 const [activeTab, setActiveTab] = useState('all');
  return (
    <section id="explore-courses" className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                   Explore <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Programs</span>
                 </h2>
                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                   Choose from industry-relevant programs designed for working professionals and fresh graduates
                 </p>
               </div>
   
               <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-12">
                 {/* Enhanced Tab Buttons */}
                 <div className="flex justify-center">
                   <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
                     {[
                       { value: 'all', label: 'All Programs' },
                       { value: 'ug', label: 'Undergraduate' },
                       { value: 'pg', label: 'Postgraduate' }
                     ].map((tab) => (
                       <Tabs.Trigger
                         key={tab.value}
                         value={tab.value}
                         className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                           activeTab === tab.value 
                             ? 'bg-gradient-to-r from-orange-500 to-[#f26722] text-white shadow-lg' 
                             : 'text-gray-700 hover:text-[#f26722] hover:bg-white' 
                         }`}
                       >
                         {tab.label}
                       </Tabs.Trigger>
                     ))}
                   </Tabs.List>
                 </div>
   
                 {/* Course Grid */}
                 <Tabs.Content value={activeTab} className="outline-none">
                   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                     {(activeTab === 'all' ? [...ugCourses, ...pgCourses] : 
                       activeTab === 'ug' ? ugCourses : pgCourses).map((course, idx) => (
                       <div key={idx} className="group">
                         <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                           {/* Course Image */}
                           <div className="relative h-48 overflow-hidden">
                             <Image
                               src={course.image}
                               alt={course.alt}
                               fill
                               className="object-cover group-hover:scale-110 transition-transform duration-500"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                             <div className="absolute bottom-4 left-4">
                               <span className="bg-[#f26722] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                 {course.universityShort}
                               </span>
                             </div>
                           </div>
   
                           {/* Course Content */}
                           <div className="p-6 space-y-4">
                             <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.course}</h3>
                             
                             <div className="space-y-2">
                               <div className="flex items-center gap-2 text-gray-600">
                                 <span>⏱️</span>
                                 <span className="text-sm">{course.duration}</span>
                               </div>
                               <div className="flex items-center gap-2 text-gray-600">
                                 <span>🎓</span>
                                 <span className="text-sm">{course.eligibility}</span>
                               </div>
                               <div className="flex items-center gap-2 text-gray-600">
                                 <span>💰</span>
                                 <span className="text-sm">{course.fees}</span>
                               </div>
                               <div className="flex items-start gap-2 text-gray-600">
                                 <span className="mt-1">⭐</span>
                                 <span className="text-sm"><strong>Specialization:</strong> {course.specialization}</span>
                               </div>
                             </div>
   
                             <button 
                               onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                               className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                             >
                               Apply Now
                             </button>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </Tabs.Content>
               </Tabs.Root>
             </div>
           </section>
  )
}

export default ExploreCourses