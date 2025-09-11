"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { universityLogos } from "./data";

const UniversityLogoSlider = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) setItemsToShow(3);
      else if (width < 640) setItemsToShow(4);
      else if (width < 768) setItemsToShow(5);
      else if (width < 1024) setItemsToShow(6);
      else setItemsToShow(7);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 backdrop-blur-sm shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent" />

          {/* Shimmer line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <motion.div
            className="flex items-stretch"
            animate={{ x: [0, -100 * (universityLogos.length / itemsToShow) + "%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity, repeatType: "loop", pause: isPaused }}
          >
            {[...universityLogos, ...universityLogos].map((university, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center p-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="h-20 sm:h-24 w-full flex items-center justify-center rounded-xl bg-white/80 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <img
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-h-10 sm:max-h-12 md:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniversityLogoSlider;


