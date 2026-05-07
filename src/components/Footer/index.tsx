'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaLocationDot,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa6";
import BlogsDropdown from "@/components/BlogsDropdown";
import dynamic from 'next/dynamic';

const FooterContact = dynamic(() => import("./FooterContact"), { ssr: false });
const FooterHiringInfo = dynamic(() => import("./FooterContact").then(mod => mod.FooterHiringInfo), { ssr: false });
const FooterForm = dynamic(() => import("./FooterForm"), { ssr: false });
const FooterLinks = dynamic(() => import("./FooterLinks"), { ssr: false });
const FooterCareer = dynamic(() => import("./FooterCareer"), { ssr: false });
import { MenuKey } from "types/menu";

const Footer = () => {
  const pathname = usePathname();
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showHiringInfo, setShowHiringInfo] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [footerMenuOpen, setFooterMenuOpen] = useState<MenuKey>(null);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hideFooterRoutes = [
    "/amity",
    "/lpu-online",
    "/manipal",
    "/cuOnline",
    "/ku-online",
    "/bookdemo",
    "/smu",
    "/jain",
    "/dypatil",
    "/sharda",
    "/upes",
    "/vgu",
    "/shoolini",
    "/opjindal",
    "/nmims",
    "/uu",
    "/amrita",
    "/amity-online-mba-total-fees",
    "/best-online-mca-university-in-india",
    "/muj-online-bba",
    "/muj-online-bca",
    "/muj-online-ba",
    "/muj-online-mba",
    "/muj-online-mca",
    "/best-online-mca-for-working-professionals-in-india",
    "/top-online-bca-university-in-india",
  ];

  // Check if current pathname starts with any of the hide routes
  const shouldHide = hideFooterRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (shouldHide) {
    return null;
  }

  return (
    <>
      {/* Decorative wave */}
      <div className="relative w-full bg-transparent">
        <svg
          className="w-full h-12 text-blue-900"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40C160 80 320 0 480 0C640 0 800 80 960 80C1120 80 1280 0 1440 40V80H0V40Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M0 50C160 90 320 10 480 10C640 10 800 90 960 90C1120 90 1280 10 1440 50"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-gray-100 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
              {/* Column 1: Company Info */}
              <div className="lg:col-span-3 group">
                <div className="h-full bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3 tracking-tight">
                      UNIFOST
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                  </div>

                  <p className="text-gray-200 text-sm leading-relaxed text-center mb-6">
                    UNIFOST is a premier{" "}
                    <span className="text-cyan-300 font-medium">
                      EdTech platform
                    </span>{" "}
                    helping students choose the right path through{" "}
                    <span className="text-cyan-300 font-medium">
                      online education
                    </span>
                    , expert counseling, and demo sessions.
                  </p>

                  <div className="flex flex-col gap-3 justify-center">
                    <FooterContact
                      showContactInfo={showContactInfo}
                      setShowContactInfo={setShowContactInfo}
                    />
                    <FooterHiringInfo
                      showHiringInfo={showHiringInfo}
                      setShowHiringInfo={setShowHiringInfo}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Contact Form */}
              <FooterForm />

              {/* Column 3: Links */}
              <FooterLinks />
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  label: "Universities",
                  value: "25+",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  label: "Programs",
                  value: "80+",
                  color: "from-indigo-500 to-purple-500",
                },
                {
                  label: "Students Guided",
                  value: "5K+",
                  color: "from-emerald-500 to-teal-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl p-4 border border-white/10 bg-white/5"
                >
                  <div
                    className={`absolute -inset-8 blur-2xl opacity-20 bg-gradient-to-r ${item.color}`}
                  />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-extrabold text-white drop-shadow-sm">
                        {item.value}
                      </p>
                      <p className="text-xs text-gray-300">{item.label}</p>
                    </div>
                    <div className="text-right">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-6 border-t border-gray-300 relative">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left Corner: Blogs Dropup */}
                <div className="order-2 md:order-1 relative">
                  <BlogsDropdown
                    menuOpen={footerMenuOpen}
                    setMenuOpen={setFooterMenuOpen}
                    direction="up"
                    variant="footer"
                  />
                </div>

                {/* Center: Copyright */}
                <div className="order-1 md:order-2 text-center">
                  <p className="text-white text-xs">
                    © {new Date().getFullYear()} UNIFOST. All rights reserved.
                  </p>
                  <p className="text-white text-xs mt-1">
                    Empowering education through technology
                  </p>

                  <div className="order-4 flex justify-center items-center gap-3 mt-4 mb-4">
                    <div className="flex gap-2">
                      <a
                        href="mailto:info@unifostedu.com"
                        className="relative p-2.5 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                      >
                        <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <FaEnvelope className="relative text-cyan-400 group-hover:text-white transition-colors text-sm" />
                      </a>

                      <a
                        href="https://wa.me/917042646766?text=Hi%20Unifost,%20I%20want%20to%20know%20more%20about%20courses.%20My%20Name%20is:%20"
                        className="relative p-2.5 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                      >
                        <span className="absolute inset-0 rounded-full bg-green-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <FaWhatsapp className="relative text-green-400 group-hover:text-white transition-colors text-sm" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Corner: Careers Dropup */}
                <div className="order-3 relative">
                  <FooterCareer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default Footer;