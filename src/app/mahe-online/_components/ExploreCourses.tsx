import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'
import { OpenModalState } from '../../../../types/Modal'
type ExploreCoursesProps = {
  ugCourses: any[];
  pgCourses: any[];
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
  openModal: OpenModalState;
};

const ExploreCourses: React.FC<ExploreCoursesProps> = ({
  ugCourses,
  pgCourses,
  setOpenModal,
  openModal,
}) => {
  const [activeTab, setActiveTab] = useState('all');
      
  return (
    <section id="ExploreCourses" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-8 sm:mb-12 md:mb-16">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-queens">
                   Explore <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Online Courses</span>
                 </h2>
                 <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                   Choose from industry-relevant programs designed for working professionals and fresh graduates
                 </p>
               </div>
   
               {/* Quick Course Overview */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                 {[
                   { name: 'MAHE Online MBA', desc: 'Master management, leadership & business strategy. Ideal for working professionals & future leaders' },
                   { name: 'MAHE Online BCA', desc: 'Learn programming, databases & IT fundamentals. Start your journey in the tech and IT industry' },
                   { name: 'MAHE Online MCA', desc: 'Advanced computing, AI, ML & cloud skills. Designed for tech professionals aiming for growth' },
                   { name: 'MAHE Online BBA', desc: 'Strong foundation in business, finance & marketing. Perfect for students interested in corporate careers' },
                   { name: 'MAHE Online MCom', desc: 'Deep knowledge of accounting, finance & taxation. Great for careers in banking, finance & auditing' },
                   { name: 'MAHE Online BCom', desc: 'Core fundamentals of commerce & business analytics. Best for students starting their commerce journey' }
                 ].map((course, i) => (
                   <div key={i} className="bg-gradient-to-br from-white to-orange-50 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
                     <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{course.name}</h3>
                     <p className="text-sm sm:text-base text-gray-700">{course.desc}</p>
                   </div>
                 ))}
               </div>
   
               <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="space-y-6 sm:space-y-8 md:space-y-12">
                 {/* Enhanced Tab Buttons */}
                 <div className="flex justify-center overflow-x-auto">
                   <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg border border-gray-200">
                     {[
                       { value: 'all', label: 'All Programs' },
                       { value: 'ug', label: 'Undergraduate' },
                       { value: 'pg', label: 'Postgraduate' }
                     ].map((tab) => (
                       <Tabs.Trigger
                         key={tab.value}
                         value={tab.value}
                         className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${
                           activeTab === tab.value
                             ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                             : 'text-gray-700 hover:text-orange-600 hover:bg-white'
                         }`}
                       >
                         {tab.label}
                       </Tabs.Trigger>
                     ))}
                   </Tabs.List>
                 </div>
   
                 {/* Course Grid */}
                 <Tabs.Content value={activeTab} className="outline-none">
                   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                               <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                 {course.universityShort}
                               </span>
                             </div>
                           </div>
   
                           {/* Course Content */}
                           <div className="p-6 space-y-4">
                             <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.course}</h3>
                             <div className="text-sm text-gray-500 min-h-[40px]">
                                 {course.specialization.split(',').length > 1 ? (
                                   <>
                                     {course.specialization.split(',')[0]}
                                     <details className="inline">
                                       <summary className="text-orange-500 cursor-pointer text-xs focus:outline-none">...more</summary>
                                       <p className="mt-1">
                                         {course.specialization.split(',').slice(1).join(', ')}
                                       </p>
                                     </details>
                                   </>
                                 ) : (
                                   course.specialization
                                 )}
                               </div>
   
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
                                 <span className="text-sm">₹{course.fees}</span>
                               </div>
                             </div>
   
                             <button 
                               onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                               className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
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
               <div className="text-center mt-8 sm:mt-12">
                   <button 
                     onClick={() => setOpenModal({ type: 'apply' })}
                     className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                   >
                     <span className="hidden sm:inline">Apply Now</span>
                     <span className="sm:hidden">Apply</span>
                   </button>
               </div>
             </div>
           </section>
  )
}

export default ExploreCourses