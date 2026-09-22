import React from 'react'
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Achievements = () => {
  return (
    <div>
      <section id="HiringPartners" className="py-12 md:py-16 bg-white text-black">
        <div id="Company" className="sr-only" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/hockey_jwo1y7.webp"
              alt="Amity University Online industry partnership with Hockey India"
              width={900}
              height={500}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Strategic Partnership with Hockey India
            </h2>
            <p className="text-black text-base md:text-lg mb-6">
              Online Amity University has collaborated with Hockey India to empower players with world-class education
              and exclusive benefits:
            </p>
            <ul className="space-y-3 text-black text-sm md:text-base">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                Special scholarships for hockey athletes across India.
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5" />
                Flexible online learning to balance sports &amp; academics.
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5" />
                Recognition from UGC &amp; NAAC ensures credibility of the degree programs.
              </li>
            </ul>
            <div className="mt-6" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
