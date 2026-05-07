"use client";

import React from "react";
import { stats } from "./data";

const Stats = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                <stat.icon className="text-2xl sm:text-3xl text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001e3c] mb-1 sm:mb-2">{stat.number}</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;


