'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AccreditationSectionProps } from "types/AccreditationSection";

const AccreditationSection: React.FC<AccreditationSectionProps> = ({
  title = "Education with Global Recognition",
  description = "Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide.",
  stats = [],
  benefits = [],
  accreditations = [],
  internationalRecognition = [],
  successStories = [],
  trust,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:w-3/4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* STATS */}
          {stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-xl text-center ${stat.bg}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          {/* BENEFITS */}
          {benefits.length > 0 && (
            <motion.div
              className="bg-gradient-to-r from-gray-800 to-purple-800 rounded-2xl p-8 text-white mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center font-[Poppins]">
                Benefits of Our Accredited Programs
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div
                      className="bg-white/20 p-2 rounded-lg mr-4"
                      dangerouslySetInnerHTML={{ __html: benefit.iconSvg }}
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm opacity-90">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          className="lg:w-1/4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-md border p-5 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-3">
              Accreditations & Recognitions
            </h3>

            <div className="space-y-4">
              {accreditations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center p-3 rounded-lg border hover:bg-blue-50"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={40}
                    height={40}
                  />
                  <span className="ml-3 text-sm font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* TRUST */}
            {trust && (
              <div className="mt-6 pt-4 border-t text-center">
                <p className="text-sm font-medium text-gray-700">
                  {trust.text}
                </p>
                {trust.subtext && (
                  <p className="text-xs text-gray-500 mt-1">
                    {trust.subtext}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccreditationSection;
