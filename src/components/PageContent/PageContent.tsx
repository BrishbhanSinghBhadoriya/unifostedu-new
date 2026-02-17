"use client";

import { useEffect, useState } from "react";

type PageContentProps = {
  sectionItems: { id: string; label: string }[];
  activeSection: string | null;
  ismobilemenuopen?: boolean;
  onClose?: () => void;
  progressive?: boolean;
  topOffsetClass?: string;
  scrollOffset?: number;
  mode?: "chips" | "breadcrumb" | "both";
  position?: "sticky" | "fixed";
  
};

const PageContent = ({
  sectionItems,
  activeSection,
  progressive = false,
  topOffsetClass = "top-[88px] sm:top-[96px] md:top-[104px]",
  scrollOffset = 100,
  mode = "chips",
  position = "sticky",
}: PageContentProps) => {
  const [currentActiveSection, setCurrentActiveSection] = useState<
    string | null
  >(activeSection);
  const [maxIndexReached, setMaxIndexReached] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let activeId: string | null = null;

      for (let i = 0; i < sectionItems.length; i++) {
        const section = document.getElementById(sectionItems[i].id);

        if (section && scrollPosition >= section.offsetTop) {
          activeId = sectionItems[i].id;
        }
      }

      setCurrentActiveSection(activeId);
      if (progressive && activeId) {
        const idx = sectionItems.findIndex((s) => s.id === activeId);
        if (idx !== -1) {
          setMaxIndexReached((prev) => (idx > prev ? idx : prev));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionItems, progressive]);

  useEffect(() => {
    if (!progressive) return;
    if (!activeSection) return;
    const idx = sectionItems.findIndex((s) => s.id === activeSection);
    if (idx !== -1) setMaxIndexReached(idx);
  }, [activeSection, progressive, sectionItems]);

  const handleSectionClick = (itemId: string) => {
    const section = document.getElementById(itemId);

    if (section) {
      const headerOffset = scrollOffset;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const visibleItems = (() => {
    if (!progressive) return sectionItems;
    const idx = Math.max(maxIndexReached, 0);
    return sectionItems.slice(0, idx + 1);
  })();

  return (
    <div className="w-full">
      <nav
        className={`${position} ${topOffsetClass} z-40 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm ${
          position === "fixed" ? "left-0 right-0 w-full" : ""
        }`}
      >
        {mode !== "breadcrumb" && (
          <div className="px-4 py-3">
            <ul className="flex items-center gap-2 overflow-x-auto">
              {visibleItems.map((item) => {
                const isActive = currentActiveSection === item.id;
                return (
                  <li key={item.id} className="shrink-0">
                    <button
                      onClick={() => handleSectionClick(item.id)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm transition-colors ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {mode !== "chips" && (
          <div className="px-4 py-2">
            <div className="flex flex-wrap items-center gap-1">
              {visibleItems.map((item, idx) => {
                const isActive = currentActiveSection === item.id;
                return (
                  <div key={item.id} className="flex items-center gap-1">
                    <button
                      onClick={() => handleSectionClick(item.id)}
                      className={`text-xs sm:text-sm uppercase tracking-wide ${
                        isActive
                          ? "text-indigo-700 font-semibold"
                          : "text-gray-600 hover:text-indigo-700"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {item.label}
                    </button>
                    {idx < visibleItems.length - 1 && (
                      <span className="text-gray-400">›</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default PageContent;
