'use client';

import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface ContactProps {
  showContactInfo: boolean;
  setShowContactInfo: (show: boolean) => void;
}

const FooterContact: React.FC<ContactProps> = ({
  showContactInfo,
  setShowContactInfo,
}) => {
  return (
    <>
      <button
        onClick={() => setShowContactInfo(!showContactInfo)}
        className="group/btn relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02]"
      >
        <span className="relative z-10">
          {showContactInfo ? "Hide Contact" : "Contact Info"}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Contact Info Dropdown */}
      <div
        className={`mt-5 transition-all duration-500 ${
          showContactInfo
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm p-5 rounded-xl border border-white/10">
          <h4 className="text-cyan-300 font-semibold mb-3 text-center text-sm">
            Get In Touch
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 group/item">
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                <FaEnvelope className="text-cyan-400 text-sm" />
              </div>
              <a
                href="mailto:info@unifostedu.com"
                className="hover:text-cyan-300 transition-colors flex-1 text-sm"
              >
                info@unifostedu.com
              </a>
            </li>
            <li className="flex items-center gap-3 group/item">
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                <FaPhone className="text-cyan-400 text-sm" />
              </div>
              <span className="flex-1 text-sm">+91 7042646766</span>
            </li>
            <li className="flex items-center gap-3 group/item">
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                <FaLocationDot className="text-cyan-400 text-sm" />
              </div>
              <span className="flex-1 text-sm">Noida, Uttar Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

interface HiringInfoProps {
  showHiringInfo: boolean;
  setShowHiringInfo: (show: boolean) => void;
}

export const FooterHiringInfo: React.FC<HiringInfoProps> = ({
  showHiringInfo,
  setShowHiringInfo,
}) => {
  return (
    <>
      <button
        onClick={() => setShowHiringInfo(!showHiringInfo)}
        className="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02]"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
          We are Hiring
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Hiring Info Dropdown */}
      <div
        className={`mt-5 transition-all duration-500 ${
          showHiringInfo
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm text-gray-800 p-5 rounded-xl shadow-lg border border-white/20">
          <h4 className="text-center text-blue-800 font-bold mb-4 text-sm">
            Join Our Team!
          </h4>

          <div className="space-y-4">
            <div className="border-l-3 border-blue-500 pl-3">
              <p className="font-bold text-blue-800 mb-1 text-xs">
                Freshers (0–1 year)
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Graduate with strong communication skills
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@unifostedu.com"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-xs"
                >
                  <MdEmail className="text-sm" /> info@unifostedu.com
                </a>
                <a
                  href="https://wa.me/917042646766"
                  className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors text-xs"
                >
                  <FaWhatsapp className="text-sm" />
                  +91 7042646766
                </a>
              </div>
            </div>

            <div className="border-l-3 border-emerald-500 pl-3">
              <p className="font-bold text-emerald-800 mb-1 text-xs">
                Senior Career Counsellor (2+ years)
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Minimum 2 years EdTech industry experience
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@unifostedu.com"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-xs"
                >
                  <MdEmail className="text-sm" /> info@unifostedu.com
                </a>
                <a
                  href="https://wa.me/917042646766"
                  className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors text-xs"
                >
                  <FaWhatsapp className="text-sm" /> +91 7042646766
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;