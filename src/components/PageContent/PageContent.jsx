import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";

const PageContent = ({ sectionItems, activeSection, ismobilemenuopen, onClose }) => {
  console.log(sectionItems, "sectionItems", activeSection, "activeSection", ismobilemenuopen, "ismobilemenuopen", onClose, "onClose");
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(ismobilemenuopen);
  const [currentActiveSection, setCurrentActiveSection] = useState(activeSection);

  // Sync with parent state
  useEffect(() => {
    setIsMobileMenuOpen(ismobilemenuopen);
  }, [ismobilemenuopen]);

  console.log(currentActiveSection, "currentActiveSection");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
  
      let activeId = currentActiveSection; // fallback
  
      for (let i = 0; i < sectionItems.length; i++) {
        const section = document.getElementById(sectionItems[i].id);
  
        if (section) {
          const sectionTop = section.offsetTop;
  
          if (scrollPosition >= sectionTop) {
            activeId = sectionItems[i].id; // keep updating
          }
        }
      }
  
      setCurrentActiveSection(activeId);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionItems]);
  
  const handleClose = () => {
    setIsMobileMenuOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleSectionClick = (itemId) => {
    const section = document.getElementById(itemId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    handleClose();
  };

  return (
    <div>
        <aside className="hidden lg:flex flex-col fixed top-[88px] sm:top-[96px] md:top-[104px] w-64 h-[calc(100vh-6rem)] px-4 py-6 self-start overflow-y-auto border-r border-gray-200 bg-white/95 backdrop-blur-sm z-40">
          <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Page Contents
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {sectionItems.map((item) => {
                const isActive = currentActiveSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleSectionClick(item.id)}
                      className={`text-xs md:text-sm transition-colors duration-200 text-left w-full py-1.5 px-2 rounded hover:bg-indigo-50 ${
                        isActive ? "text-indigo-700 font-semibold bg-indigo-50 border-l-2 border-indigo-600" : "text-gray-700 font-medium"
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
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[9998] lg:hidden"
                onClick={handleClose}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 w-[85vw] sm:w-72 h-full bg-white border-r shadow-xl z-[9999] p-4 sm:p-6 flex flex-col overflow-y-auto will-change-transform lg:hidden"
              > 
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-600">Page Contents</h3>
                  <button 
                    onClick={handleClose} 
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Close menu"
                  >
                    <FaTimes className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <ul className="space-y-2 sm:space-y-3 flex-1">
                  {sectionItems.map((item) => {
                    const isActive = currentActiveSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSectionClick(item.id)}
                          className={`w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
                            isActive 
                              ? "text-orange-700 font-semibold bg-orange-50 border-l-2 border-orange-600" 
                              : "text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium sm:font-semibold"
                          } text-sm sm:text-base`}
                          aria-current={isActive ? "true" : undefined}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
          
    </div>
  )
}

export default PageContent