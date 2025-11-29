import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";

const PageContent = ({ sectionItems, activeSection , ismobilemenuopen }) => {
  console.log("ismobilemenuopen", ismobilemenuopen);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(ismobilemenuopen);

  return (
    <div>
        <aside className="hidden lg:flex flex-col fixed top-[88px] sm:top-[96px] md:top-[104px] w-64 h-[calc(100vh-6rem)] px-4 py-6 self-start overflow-y-auto border-r border-gray-200 bg-white/95 backdrop-blur-sm z-40">
          <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Page Contents
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {sectionItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const section = document.getElementById(item.id);
                        if (section)
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className={`text-xs md:text-sm transition-colors duration-200 text-left w-full py-1.5 px-2 rounded hover:bg-indigo-50 ${
                        isActive ? "text-indigo-700 font-semibold bg-indigo-50" : "text-gray-700 font-medium"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>
          <AnimatePresence>
          {ismobilemenuopen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!ismobilemenuopen)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 w-[85vw] sm:w-72 h-full bg-white border-r shadow-xl z-50 p-4 sm:p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
              > 
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-600">Page Contents</h3>
                  <button onClick={() => setIsMobileMenuOpen(!ismobilemenuopen)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <FaTimes className="w-5 h-5 text-gray-60b b0" />
                  </button>
                </div>
                <ul className="space-y-2 sm:space-y-3 flex-1">
                  {sectionItems.map((item) => (
                  
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          const section = document.getElementById(item.id);
                          if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                          setIsMobileMenuOpen(!ismobilemenuopen);
                        }}
                        className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 w-full text-left py-2.5 px-3 rounded-lg"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
          
    </div>
  )
}

export default PageContent