"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { FaCompass, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
  FaVideo,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaSearch,
  FaGraduationCap,
  FaBookOpen,
  FaUniversity,
  FaRocket,
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import BlogsDropdown from "@/components/BlogsDropdown";
import Image from "next/image";
import searchIndex from "@/data/searchIndex.json";
import courseData from "@/data/courseData.json";
import { BLOG_API_ENDPOINT } from "@/lib/blogApi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState();

  const universities = [
    {
      name: "Amity University Online",
      link: "/Amity-University-Online",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
    },
    {
      name: "Lovely Professional University",
      link: "/lpu-online",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp",
    },
    {
      name: "Manipal University Jaipur",
      link: "/manipal",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp",
    },
    {
      name: "Manipal Academy of Higher Education",
      link: "/mahe-online",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp",
    },
    {
      name: "Sikkim Manipal University",
      link: "/smu",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
    },
    {
      name: "Uttaranchal University",
      link: "/uu",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp",
    },
    {
      name: "Chandigarh University Online",
      link: "/cuOnline",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp",
    },
    {
      name: "Jain University",
      link: "/jain",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp",
    },
    {
      name: "Dr. D Y Patil",
      link: "/dypatil",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp",
    },
    {
      name: "OP Jindal University",
      link: "/opjindal",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp",
    },
    {
      name: "Kurukshetra University",
      link: "/ku-online",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp",
    },
    {
      name: "Shoolini University Online",
      link: "/shoolini",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327856/shoolini_txvq6k.webp",
    },
    {
      name: "Vivekananda Global University Online",
      link: "/vgu",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgu1_ieijw9.webp",
    },
    {
      name: "Upes Online",
      link: "/upes",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp",
    },
    {
      name: "Sharda University Online",
      link: "/sharda",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp",
    },
    {
      name: "NMIMS University",
      link: "/nmims",
      logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp",
    },
  ];

  const suggestions = useMemo(() => {
    const fromJson = (searchIndex || []).map((i) => ({
      title: i.title,
      type: i.type,
      href: i.href,
    }));
    const fromCourses = Object.keys(courseData || {}).map((slug) => ({
      title: courseData[slug]?.title || slug,
      type: "course",
      href: `/courses/${slug}`,
    }));
    const fromUniversities = universities.map((u) => ({
      title: u.name,
      type: "university",
      href: u.link,
    }));

    const map = new Map();
    [...fromJson, ...fromCourses, ...fromUniversities].forEach((item) => {
      if (!map.has(item.href)) map.set(item.href, item);
    });
    return Array.from(map.values());
  }, [universities]);

  const [latestBlogs, setLatestBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(null);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const filtered = useMemo(() => {
    const q = (searchQuery || "").toLowerCase();
    return suggestions
      .filter((item) => item.title.toLowerCase().includes(q))
      .slice(0, 10);
  }, [searchQuery, suggestions]);

  const handleSuggestionClick = (href) => {
    router.push(href);
    setSearchQuery("");
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const hideHeaderRoutes = [
      "/Amity-University-Online",
      "/lpu-online",
      "/manipal",
      "/cuOnline",
      "/mahe-online",
      "/ku-online",
      "/smu",
      "/jain",
      "/dypatil",
      "/sharda",
      "/shoolini",
      "/vgu",
      "/upes",
      "/opjindal",
      "/nmims",
      "/uu",
     "/amity-online-mba-fees-2025-26",
      "/best-online-mca-university-in-india",
      "/muj-online-bba",
      "/muj-online-bca",
      "/muj-online-ba",
      "/muj-online-mba",
      "/muj-online-mca"
    ];

    const shouldHide = hideHeaderRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );

    setShowHeader(!shouldHide);
  }, [pathname]);

  useEffect(() => {
    const controller = new AbortController();

    const loadLatestBlogs = async () => {
      setBlogsLoading(true);
      try {
        const response = await fetch(BLOG_API_ENDPOINT, {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const payload = await response.json();
        if (payload?.success && Array.isArray(payload.data)) {
          const sorted = payload.data
            .filter((blog) => blog?.slug)
            .sort((a, b) => {
              const dateA = new Date(a.createdAt || a.updatedAt || 0).getTime();
              const dateB = new Date(b.createdAt || b.updatedAt || 0).getTime();
              return dateB - dateA;
            });
          setLatestBlogs(sorted);
        } else {
          setLatestBlogs([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Header blog fetch error:", err);
        }
        setLatestBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };

    loadLatestBlogs();

    return () => controller.abort();
  }, []);

  return (
    showHeader && (
      <header className="w-full font-sans">
        {/* Tagline Banner - Modern gradient design */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-3 px-4 text-center border-b border-blue-800/30">
          <p className="text-white text-sm sm:text-base font-medium tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-bold">
              Unifost
            </span>{" "}
            – University{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-bold">
              For
            </span>{" "}
            Students
          </p>
        </div>

        {/* Main Navbar - Clean professional design */}
        <div
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-lg shadow-lg"
              : "bg-slate-100/85 backdrop-blur-lg shadow-lg"
          }`}>
          <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 lg:h-20 xl:h-24 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 group">
                <div className="relative">
                  <Image
                    width={140}
                    height={56}
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1764316067/uniLogoo_nc6vhs.png"
                    alt="Unifost Logo"
                    className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav
                className="hidden lg:flex items-center space-x-1 flex-shrink-0"
                ref={dropdownRef}>
                {[
                  { label: "Home", path: "/", icon: FaHome },
                  { label: "About", path: "/about", icon: FaInfoCircle },
                  { label: "Services", path: "/services", icon: FaCog },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className="group relative px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-slate-700 hover:text-blue-600 font-medium text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
                    <link.icon className="text-sm flex-shrink-0" />
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}

                {/* Universities Dropdown */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setMenuOpen(menuOpen === "explore" ? null : "explore")
                    }
                    className="group relative px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-slate-700 hover:text-blue-600 font-medium text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
                    <FaUniversity className="text-sm flex-shrink-0" />
                    <span>Universities</span>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 flex-shrink-0 ${
                        menuOpen === "explore" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {menuOpen === "explore" && (
                    <div className="absolute left-0 top-full mt-2 w-[90vw] max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem] 2xl:max-w-[48rem] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-[9999]">
                      <div className="p-4 lg:p-5 xl:p-6">
                        <h3 className="text-slate-900 font-bold text-base lg:text-lg xl:text-xl mb-3 lg:mb-4 flex items-center gap-2">
                          <FaUniversity className="text-blue-500 text-sm lg:text-base xl:text-lg" />
                          <span>Partner Universities</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-h-[60vh] lg:max-h-96 overflow-y-auto pr-2">
                          {universities.map((uni, idx) => (
                            <Link
                              key={idx}
                              href={uni.link}
                              onClick={() => setMenuOpen(null)}
                              className="group flex items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 min-h-[70px] lg:min-h-[80px]">
                              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                                <Image
                                  width={56}
                                  height={56}
                                  src={uni.logo}
                                  alt={uni.name}
                                  className="max-h-full max-w-full object-contain p-1"
                                />
                              </div>
                              <p className="text-xs lg:text-sm font-medium text-slate-700 group-hover:text-blue-600 line-clamp-2 leading-snug flex-1">
                                {uni.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Blogs Dropdown */}
                <div className="relative">
                  <BlogsDropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>
              </nav>

              {/* Search Bar */}
              <div className="hidden md:flex relative flex-[0.7] lg:flex-[0.8] xl:flex-[0.9] min-w-0 mx-2 lg:mx-3 xl:mx-4 max-w-full md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg">
                <div className="flex items-center bg-slate-100 rounded-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-2.5 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-400 transition-all w-full">
                  <FaSearch className="text-slate-400 text-xs lg:text-sm flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search courses, universities..."
                    className="outline-none bg-transparent text-slate-700 px-2 lg:px-3 py-0.5 w-full text-xs lg:text-sm placeholder:text-slate-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {searchQuery && (
                  <div className="absolute mt-2 w-full bg-white rounded-xl shadow-2xl border border-slate-200 z-[9999] max-h-80 overflow-auto">
                    {filtered.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(item.href)}
                        className="block w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0">
                        <div className="text-sm font-medium text-slate-900">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 capitalize mt-0.5">
                          {item.type}
                        </div>
                      </button>
                    ))}

                    {filtered.length === 0 && (
                      <div className="px-4 py-4 text-sm text-slate-500 text-center">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>


              {/* Action Buttons */}
              <div className="hidden lg:flex items-center gap-2 lg:gap-3 flex-shrink-0">
                <button
                  onClick={() => router.push('/comapre-university')}
                  className="relative flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg bg-white text-orange-600 font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.04] transition-all duration-200 cursor-pointer whitespace-nowrap">
                  {/* AI Powered Tag */}
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[7px] lg:text-[8px] font-bold px-1.5 py-[1px] rounded-sm shadow-md">
                    AI
                  </span>
                  <FaCompass className="text-sm text-orange-500 bg-orange-100 rounded-full p-1 flex-shrink-0" />
                  <span>Compare</span>
                </button>

                <Link
                  href="tel:+917042646766"
                  className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex-shrink-0"
                  title="Call us">
                  <FaPhoneAlt className="text-lg" />
                </Link>

                <Link 
                  href="https://wa.me/917042646766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200 flex-shrink-0"
                  title="WhatsApp">
                  <FaWhatsappSquare className="text-lg" />
                </Link>

                <button
                  onClick={() => openModal("videoCall")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap">
                  <FaVideo className="text-sm flex-shrink-0" />
                  <span>Book Demo</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-200">
                {mobileMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Contact Info Bar - Desktop only */}
          <div className="hidden lg:block bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10">
              <div className="flex items-center justify-end gap-4 lg:gap-5 xl:gap-6 py-2 text-xs lg:text-sm">
                <div className="flex items-center gap-1.5 lg:gap-2 text-slate-600">
                  <FaPhoneAlt className="text-blue-500 text-xs lg:text-sm" />
                  <span className="font-medium whitespace-nowrap">+91 7042646766</span>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2 text-slate-600">
                  <FaEnvelope className="text-blue-500 text-xs lg:text-sm" />
                  <a
                    href="mailto:info@unifostedu.com"
                    className="font-medium hover:text-blue-600 transition whitespace-nowrap text-xs lg:text-sm">
                    info@unifostedu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced design */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen z-[9999] bg-white overflow-y-auto">
            <div className="p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6">
                <Image
                  width={120}
                  height={48}
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/unilogo_wvmt8h.webp"
                  alt="Unifost"
                  className="h-12 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 text-slate-700">
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mb-6">
                <div className="flex items-center bg-slate-100 rounded-lg px-4 py-3">
                  <FaSearch className="text-slate-400 text-sm" />
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
                    {filtered.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          handleSuggestionClick(item.href);
                          setMobileMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0">
                        <div className="text-sm font-medium text-slate-900">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 capitalize">
                          {item.type}
                        </div>
                      </button>
                    ))}
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
                    { label: "Home", path: "/", icon: FaHome },
                    { label: "About", path: "/about", icon: FaInfoCircle },
                    { label: "Courses", path: "/coursesearch", icon: FaGraduationCap },
                    { label: "Universities", path: "/listofcollege", icon: FaUniversity },
                    { label: "Services", path: "/services", icon: FaCog },
                  ].map((link, i) => (
                    <Link
                      key={i}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                        <link.icon className="text-lg" />
                      </div>
                      <span className="font-semibold text-slate-700">{link.label}</span>
                      <FaArrowRight className="ml-auto text-blue-500 text-sm" />
                    </Link>
                  ))}
                </div>

                {/* Contact Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+917042646766"
                    className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white font-bold text-sm hover:scale-105 transition">
                    <FaPhoneAlt className="text-xl" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/917042646766"
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
                    <FaPhoneAlt className="text-blue-500 text-lg" />
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
        )}

        {/* Enquiry Modal */}
        {showEnquiryModal && (
          <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  {modalType === 'videoCall' && 'Book a Video Call'}
                  {modalType === 'homeDemo' && 'Book a Home Demo'}
                  {modalType === 'getStarted' && 'Get Started with Unifost'}
                </DialogTitle>
              </DialogHeader>
              <EnquiryForm
                onSubmitted={() => setShowEnquiryModal(false)}
                formType={modalType}
              />
            </DialogContent>
          </Dialog>
        )}
      </header>
    )
  );
};

export default Header;
