"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
  chipsPaddingClass?: string;
  breadcrumbPaddingClass?: string;
};

const PageContent = ({
  sectionItems,
  activeSection,
  ismobilemenuopen = false,
  onClose,
  progressive = false,
  topOffsetClass = "top-[88px] sm:top-[96px] md:top-[104px]",
  scrollOffset = 100,
  mode = "chips",
  position = "sticky",
  chipsPaddingClass = "px-4 py-3",
  breadcrumbPaddingClass = "px-4 py-2",
}: PageContentProps) => {
  const [currentActiveSection, setCurrentActiveSection] = useState<
    string | null
  >(activeSection);
  const [maxIndexReached, setMaxIndexReached] = useState(0);

  useEffect(() => {
    let ticking = false;

    const run = () => {
      ticking = false;
      const scrollPosition = window.scrollY + 150;
      let activeId: string | null = null;

      for (let i = 0; i < sectionItems.length; i++) {
        const section = document.getElementById(sectionItems[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          activeId = sectionItems[i].id;
        }
      }

      setCurrentActiveSection((prev) => (prev === activeId ? prev : activeId));

      if (progressive && activeId) {
        const idx = sectionItems.findIndex((s) => s.id === activeId);
        if (idx !== -1) {
          setMaxIndexReached((prev) => (idx > prev ? idx : prev));
        }
      }
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(run);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    run();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionItems, progressive]);

  useEffect(() => {
    if (!progressive) return;
    if (!activeSection) return;
    const idx = sectionItems.findIndex((s) => s.id === activeSection);
    if (idx !== -1) setMaxIndexReached((prev) => (idx > prev ? idx : prev));
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
      if (onClose) onClose();
    }
  };

  const visibleItems = (() => {
    if (!progressive) return sectionItems;
    const idx = Math.max(maxIndexReached, 0);
    return sectionItems.slice(0, idx + 1);
  })();

  const progressPercent = (() => {
    if (!sectionItems.length) return 0;
    const denom = Math.max(sectionItems.length - 1, 1);
    const idx = progressive ? maxIndexReached : sectionItems.findIndex((s) => s.id === currentActiveSection);
    if (idx <= 0) return 0;
    if (idx >= denom) return 100;
    return Math.round((idx / denom) * 100);
  })();

  return (
    <div className="w-full">
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block ${position} ${topOffsetClass} z-40 w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm ${
          position === "fixed" ? "left-0 right-0 w-full" : ""
        }`}
      >
        {progressive && (
          <div className="w-full h-1 bg-gray-200">
            <div
              className="h-1 bg-indigo-600 transition-[width] duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
        {mode !== "breadcrumb" && (
          <div className={chipsPaddingClass}>
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
          <div className={breadcrumbPaddingClass}>
            <div className="flex flex-wrap items-center gap-1 w-full">
              {visibleItems.map((item, idx) => {
                const isActive = currentActiveSection === item.id;
                return (
                  <div key={item.id} className="flex items-center gap-1">
                    <button
                      onClick={() => handleSectionClick(item.id)}
                      className={`text-xs sm:text-sm uppercase tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-indigo-700 font-bold"
                          : "text-gray-500 hover:text-indigo-700"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {item.label}
                    </button>
                    {idx < visibleItems.length - 1 && (
                      <span className="text-gray-300">›</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Sidebar/Modal */}
      {ismobilemenuopen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quick navigation"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="font-bold text-lg">Quick Navigation</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {visibleItems.map((item) => {
                  const isActive = currentActiveSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSectionClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-indigo-600 text-white font-medium"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageContent;
