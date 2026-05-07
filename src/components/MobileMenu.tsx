"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaXmark,
  FaMagnifyingGlass,
  FaHouse,
  FaCircleInfo,
  FaGraduationCap,
  FaBuildingColumns,
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
  FaVideo,
  FaEnvelope,
} from "react-icons/fa6";

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filtered: any[];
  handleSuggestionClick: (href: string) => void;
  universities: any[];
  toolsMenuItems: any[];
}

const MobileMenu = ({
  setMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  filtered,
  handleSuggestionClick,
  universities,
  toolsMenuItems,
}: MobileMenuProps) => {
  const router = useRouter();

  return (
    <div className="lg:hidden fixed inset-0 z-[9999] bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
      <div className="fixed top-0 left-0 w-[85%] max-w-sm h-full bg-white flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 flex-shrink-0">
          <Image
            width={120}
            height={48}
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1764316067/uniLogoo_nc6vhs.png"
            alt="Unifost"
            className="h-10 w-auto"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700">
            <FaXmark className="text-xl" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Mobile Search */}
          <div className="mb-6">
            <div className="flex items-center bg-slate-100 rounded-lg px-4 py-3 border border-black">
              <FaMagnifyingGlass className="text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent text-slate-700 px-3 w-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && filtered.length > 0 && (
              <div className="mt-2 bg-white rounded-lg shadow-lg border border-slate-200 max-h-60 overflow-auto">
                {filtered.map((item, idx) => {
                  const universityLogo = item.type === "university" 
                    ? (item.logo || universities.find((u: any) => u.link === item.href)?.logo)
                    : null;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        handleSuggestionClick(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-3">
                        {universityLogo && (
                          <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm border border-slate-200">
                            <Image
                              src={universityLogo}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="max-h-full max-w-full object-contain p-1"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-900">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500 capitalize">
                            {item.type}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider px-2">
                Main Menu
              </h3>
              {[
                { label: "Home", path: "/", icon: FaHouse },
                { label: "About", path: "/about", icon: FaCircleInfo },
                {
                  label: "Courses",
                  path: "/coursesearch",
                  icon: FaGraduationCap,
                },
                {
                  label: "Universities",
                  path: "/university-list",
                  icon: FaBuildingColumns,
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    <link.icon className="text-lg" />
                  </div>
                  <span className="font-semibold text-slate-700">
                    {link.label}
                  </span>
                  <FaArrowRight className="ml-auto text-blue-500 text-sm" />
                </Link>
              ))}
            </div>

            {/* Mobile Tools Section */}
            <div className="space-y-2">
              <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider px-2">
                Tools & Resources
              </h3>
              <div className="space-y-2">
                {toolsMenuItems.map((tool, idx) => {
                  const IconComponent = tool.icon;
                  return (
                    <Link
                      key={idx}
                      href={tool.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-cyan-50 border border-slate-200 hover:border-blue-300 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white flex-shrink-0`}>
                        <IconComponent className="text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-700">
                          {tool.title}
                        </p>
                        <p className="text-xs text-slate-600">
                          {tool.description}
                        </p>
                      </div>
                      <FaArrowRight className="text-blue-500 text-sm flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="tel:+917042646766"
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white font-bold text-sm hover:scale-105 transition">
                <FaPhone className="text-xl" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/917042646766?text=Hi%20Unifost,%20I%20want%20to%20know%20more%20about%20courses.%20My%20Name%20is:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg text-white font-bold text-sm hover:scale-105 transition">
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  router.push("/bookdemo");
                  setMobileMenuOpen(false);
                }}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white font-bold text-sm hover:scale-105 transition">
                <FaVideo className="text-xl" />
                <span>Demo</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-200">
              <div className="flex items-center gap-3 text-slate-700">
                <FaPhone className="text-blue-500 text-lg" />
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="font-semibold">+91 7042646766</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <FaEnvelope className="text-blue-500 text-lg" />
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <a
                    href="mailto:info@unifostedu.com"
                    className="font-semibold hover:text-blue-600 transition">
                    info@unifostedu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
