import React from 'react'
import { FaBriefcase, FaUserTie } from 'react-icons/fa'
import { OpenModalState } from '../../../../types/Modal'
const ExploreClasses = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  return (
   <section className="py-12 bg-white border-t border-gray-100">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-10">
         <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
           Explore <span className="text-orange-600">Online Classes</span> at Manipal
         </h3>
         <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
           Discover a new world of learning with <strong>Manipal University Jaipur Online (Manipal Online)</strong> —
           your trusted destination for the best online degrees in Jaipur. Whether you're a working professional, entrepreneur, or student searching for an <i>online degree near me</i>, Manipal Online offers flexible, career-focused programs designed for your success.
         </p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
         <div>
           <div className="flex items-center mb-4">
             <FaUserTie className="text-2xl text-orange-500 mr-3" />
             <h3 className="text-xl font-semibold text-gray-800">Online MBA with Manipal</h3>
           </div>
           <p className="text-gray-700 mb-3">
             The highly sought-after <strong>online MBA</strong> is crafted for future leaders who wish to build advanced management expertise and global business insight. Enjoy live classes, interactive case studies, and mentorship from industry experts—all from your home.
           </p>
           <p className="text-gray-600 text-sm">For professionals searching for an <i>"online MBA near me"</i>, this program blends flexibility with industry relevance.</p>
         </div>
         <div>
           <div className="flex items-center mb-4">
             <FaBriefcase className="text-2xl text-orange-400 mr-3" />
             <h3 className="text-xl font-semibold text-gray-800">Online BBA Near Me</h3>
           </div>
           <p className="text-gray-700 mb-3">
             Aspiring professionals can opt for Manipal's <strong>online BBA</strong>, a comprehensive undergraduate program in business and management. Build strong foundations in business strategy, marketing, and leadership—while learning analytical thinking essential for the modern workplace.
           </p>
           <p className="text-gray-600 text-sm">Perfect for those seeking an <i>online BBA near me</i> from a top college in Jaipur.</p>
         </div>
       </div>
       <div className="bg-orange-50 border-l-4 border-orange-400 rounded-xl p-6 mb-8 max-w-5xl mx-auto text-gray-800 border border-orange-200">
         <p className="mb-3">
           Recognized as a <strong>top college in Jaipur</strong>, Manipal University Jaipur provides accredited, industry-aligned degrees with both academic credibility and practical relevance. Enjoy access to advanced learning tools, 24×7 support, and a successful alumni network.
         </p>
         <p>
           Take your career to new heights—<span className="font-semibold text-orange-700">explore an online MBA with Manipal, BBA, or other online degree programs today</span>. Join Manipal Online—where excellence meets flexibility and innovation shapes your future.
         </p>
       </div>
       <div className="text-center">
         <button 
           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02]"
           onClick={() => setOpenModal({ type: 'enquire' })}
         >
           Explore Programs & Apply Now
         </button>
       </div>
     </div>
   </section>
  )
}

export default ExploreClasses