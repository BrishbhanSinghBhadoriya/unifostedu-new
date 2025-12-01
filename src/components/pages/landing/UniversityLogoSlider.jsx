"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { universityLogos } from "./data";
import Image from "next/image";

const UniversityLogoSlider = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setItemsToShow(6);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-1 bg-white">
      <div className="max-w-7xl mx-auto px-1">
        <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <motion.div className="flex" animate={{ x: [0, -100 * (universityLogos.length / itemsToShow) + "%"] }} transition={{ ease: "linear", duration: 40, repeat: Infinity, repeatType: "loop", pause: isPaused }}>
            {[...universityLogos, ...universityLogos].map((university, index) => (
              <div key={`${university.name}-${index}`} className="flex-shrink-0 flex items-center justify-center" style={{ width: `${100 / itemsToShow}%` }}>
                <div className="h-24 w-full flex items-center justify-center px-2">
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    width={120}
                    height={48}
                    loading="eager"
                    decoding="async"
                    unoptimized
                    className="max-h-14 max-w-full object-contain hover:scale-110 transition-transform duration-300"
                    style={{ width: "auto", height: "auto" }}
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


