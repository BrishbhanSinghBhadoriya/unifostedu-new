"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
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

  // Hide header on Amity page

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

    // Deduplicate by href
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

  // Prevent scrolling when mobile menu is open
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

  // Hide header on Amity page AFTER all hooks are declared to preserve hook order
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

    // Check if current pathname starts with any of the hide routes
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
        {/* Tagline - Responsive */}
        <div className="bg-black py-2 px-4 text-center">
          <p className="text-white text-sm sm:text-base lg:text-lg font-semibold">
            <span className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] bg-clip-text text-transparent">
              Unifost
            </span>{" "}
            – University{" "}
            <span className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] bg-clip-text text-transparent">
              For
            </span>{" "}
            Students
          </p>
        </div>

        {/* Navbar */}
        <div
          className={`px-3 sm:px-4 py-3 sm:py-4 sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-md bg-gradient-to-r from-[#001e3c] via-[#05284f] to-[#003b6c] shadow-md py-2"
              : "bg-gradient-to-r from-[#001e3c] via-[#05284f] to-[#003b6c] backdrop-blur-md shadow-sm"
          }`}>
          <div className="flex items-center justify-between w-full gap-3 sm:gap-4 lg:gap-6 flex-nowrap">
            {/* Logo - Made smaller to fit everything in one line */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <div
                  className={`w-24 h-10 sm:w-28 sm:h-12 rounded-2xl p-1 transition-all duration-500 ${
                    scrolled
                      ? "bg-gradient-to-r from-[#001e3c] to-[#003b6c] shadow-lg"
                      : "bg-white/10 backdrop-blur-sm"
                  }`}>
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/unilogo_wvmt8h.webp"
                    alt="Unifost Logo"
                    sizes="100px"
                    quality={80}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {!scrolled && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-2xl blur opacity-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                )}
              </div>
            </Link>

            {/* Desktop Nav - Made more compact to fit in one line */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2 text-[13px] lg:text-[14px] font-medium"
              ref={dropdownRef}>
              {[
                { label: "Home", path: "/", icon: FaHome },
                { label: "About", path: "/about", icon: FaInfoCircle },

                { label: "Services", path: "/services", icon: FaCog },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className="relative group text-white hover:text-[#0b223f] transition duration-300 px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-50">
                  <link.icon className="text-xs" />
                  <span className="font-semibold">{link.label}</span>
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}

              {/* Explore Dropdown - Made more compact */}
              <div className="relative">
                <button
                  onClick={() =>
                    setMenuOpen(menuOpen === "explore" ? null : "explore")
                  }
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 text-white hover:text-[#0b223f] transition duration-300 px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-50`}>
                  <FaUniversity className="text-xs" />
                  <span className="font-semibold">University</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      menuOpen === "explore" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {menuOpen === "explore" && (
                  <div
                    className={`absolute left-0 top-full mt-2 w-[28rem] bg-white/92 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/70 overflow-hidden transition-all duration-200 transform origin-top`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-emerald-500/10 pointer-events-none"></div>
                    <div className="relative z-10 p-4">
                      <h3 className="text-[#001e3c] font-bold text-base mb-3 flex items-center">
                        <FaUniversity className="mr-2 text-[#00ffe0]" />
                        Partner Universities
                      </h3>
                      <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                        {universities.map((uni, idx) => (
                          <Link
                            key={idx}
                            href={uni.link}
                            onClick={() => setMenuOpen(null)}
                            className="group block rounded-xl overflow-hidden border border-slate-200 bg-white/85 hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5 transition-all duration-200">
                            <div className="w-full h-24 bg-white flex items-center justify-center overflow-hidden">
                              <Image
                                width={100}
                                height={100}
                                src={uni.logo}
                                alt={uni.name}
                                loading="lazy"
                                decoding="async"
                                sizes="100px"
                                quality={70}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <div className="px-3 py-2">
                              <p className="text-sm font-semibold text-[#001e3c] group-hover:text-[#00ffe0] line-clamp-2">
                                {uni.name}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Blogs Dropdown - API-powered cards */}
              <div className="relative">
                <BlogsDropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              </div>
            </nav>

            {/* Search with suggestions (click to redirect) */}
            <div className="relative flex-1 max-w-sm mx-2 lg:mx-3">
              <div className="flex items-center bg-white/95 backdrop-blur rounded-full px-3 py-1.5 shadow-md ring-1 ring-slate-200">
                <FaSearch className="text-slate-500 text-xs" />
                <input
                  type="text"
                  placeholder="Search courses, universities..."
                  className="outline-none text-black px-2 py-1 w-full text-xs"
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
                      className="block w-full text-left px-3 py-2 hover:bg-slate-50">
                      <div className="text-sm font-medium text-slate-900">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500 capitalize">
                        {item.type}
                      </div>
                    </button>
                  ))}
                  {filtered.length === 0 && (
                    <div className="px-3 py-3 text-sm text-slate-500">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Contact Icons - Made more compact */}
            <div className="hidden sm:flex gap-1 lg:gap-2 items-center text-[#00ffe0]">
              <a
                href="tel:+917042646766"
                className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200"
                title="Call us"
                aria-label="Email us at info@unifostedu.com">
                <FaPhoneAlt className="text-xl" />
              </a>
              <a
                href="https://wa.me/917042646766"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200"
                title="WhatsApp"
                aria-label="WhatsApp">
                <FaWhatsappSquare className="text-xl" />
              </a>
              <button
                onClick={() => openModal("videoCall")}
                className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200"
                title="Book Demo">
                <FaVideo className="text-xl" />
              </button>
            </div>

          {/* Call/Email - Made more compact */}
          <div className="hidden md:flex flex-col justify-center items-end text-xs ml-2">
            <div className="flex items-center gap-1 text-white-600 font-semibold">
              <FaPhoneAlt className="text-[#00ffe0] text-xs" /> <span className="text-white">+91 7042867717</span>
            </div>
            <div className="flex items-center gap-1 text-white-600 font-semibold">
              <FaEnvelope className="text-sky-400 text-xs" />
              <a href="mailto:info@unifostedu.com" className=" text-white  ">info@unifostedu.com  </a>
            </div>
          </div>

            {/* Mobile Toggle */}
            <div className="md:hidden ml-auto flex items-center gap-2">
              <a
                href="tel:+917042646766"
                aria-label="Call us"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  scrolled ? "bg-white/10 text-white" : "bg-white/20 text-white"
                }`}>
                <FaPhoneAlt className="text-base" />
              </a>
              <a
                href="https://wa.me/917042646766"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  scrolled ? "bg-white/10 text-white" : "bg-white/20 text-white"
                }`}>
                <FaComments className="text-base" />
              </a>
              <button
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen((v) => !v)}
                className={`p-2 sm:p-2 rounded-xl border transition-all duration-300 ${
                  scrolled
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    : "bg-white/20 border-white/20 text-white hover:bg-white/30"
                }`}>
                {mobileMenuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Full Screen Overlay */}
          {mobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen z-[9999] text-white bg-gradient-to-br from-[#001e3c] to-[#003b6c] overflow-y-auto overscroll-contain"
              style={{
                minHeight: "100dvh",
                maxHeight: "100svh",
                WebkitOverflowScrolling: "touch",
              }}>
              <div
                className="w-full flex flex-col p-4 sm:p-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
                style={{ minHeight: "100%" }}>
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <Image
                      width={100}
                      height={100}
                      loading="lazy"
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"
                      alt="Unifost"
                      className="h-8 w-auto"
                    />
                    <span className="text-lg font-bold text-[#00ffe0]">
                      Unifost
                    </span>
                  </div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="mb-6 sm:mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search courses, universities..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/70 outline-none focus:border-[#00ffe0] transition"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {/* Suggestions */}
                    {searchQuery && (
                      <div className="absolute mt-2 w-full bg-white rounded-xl shadow-2xl border border-slate-200 z-[9999] max-h-72 overflow-auto text-slate-900">
                        {filtered.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(item.href)}
                            className="block w-full text-left px-3 py-2 hover:bg-slate-50">
                            <div className="text-sm font-medium">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-500 capitalize">
                              {item.type}
                            </div>
                          </button>
                        ))}
                        {filtered.length === 0 && (
                          <div className="px-3 py-3 text-sm text-slate-500">
                            No results found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 space-y-4">
                  {/* Main Navigation */}
                  <div className="space-y-3">
                    <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">
                      Main Menu
                    </h3>
                    {[
                      { label: "Home", path: "/", icon: FaHome },
                      { label: "About", path: "/about", icon: FaInfoCircle },
                      {
                        label: "Courses",
                        path: "/coursesearch",
                        icon: FaGraduationCap,
                      },
                      {
                        label: "Universities",
                        path: "/listofcollege",
                        icon: FaUniversity,
                      },
                      { label: "Services", path: "/services", icon: FaCog },
                      //  { label: 'Blog', path: '/blog', icon: FaBookOpen }
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white border border-white/10">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg flex items-center justify-center">
                          <link.icon className="text-[#001e3c] text-lg" />
                        </div>
                        <span className="font-semibold">{link.label}</span>
                        <FaArrowRight className="ml-auto text-[#00ffe0] text-sm" />
                      </Link>
                    ))}
                  </div>

                  {/* Explore Universities */}
                  <div className="space-y-3">
                    <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">
                      Universities
                    </h3>
                    <div className="space-y-2">
                      {universities.slice(0, 16).map((uni, idx) => (
                        <Link
                          key={idx}
                          href={uni.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white border border-white/10">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                              width={100}
                              height={100}
                              src={uni.logo}
                              alt={uni.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="font-medium text-sm flex-1">
                            {uni.name}
                          </span>
                          <FaArrowRight className="text-[#00ffe0] text-xs" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Blog Posts */}
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {blogsLoading && (
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm">
                          Loading latest blogs...
                        </div>
                      )}
                      {!blogsLoading && latestBlogs.length === 0 && (
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm">
                          No blogs available yet.
                        </div>
                      )}
                      {!blogsLoading &&
                        latestBlogs.slice(0, 3).map((blog, idx) => (
                          <Link
                            key={idx}
                            href={`/blog/${blog.slug || blog._id || blog.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white border border-white/10">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg flex items-center justify-center">
                              <FaBookOpen className="text-[#001e3c] text-sm" />
                            </div>
                            <span className="font-medium text-sm flex-1">
                              {blog.title}
                            </span>
                            <FaArrowRight className="text-[#00ffe0] text-xs" />
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-6 sm:mt-8 space-y-4">
                  <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">
                    Contact Us
                  </h3>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <a
                      href="tel:+917042646766"
                      className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">
                      <FaPhoneAlt className="text-lg" />
                      <span>Call</span>
                    </a>

                    <button
                      onClick={() => {
                        router.push("/bookdemo");
                        setMobileMenuOpen(false);
                      }}
                      className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">
                      <FaVideo className="text-lg" />
                      <span>Demo</span>
                    </button>
                  </div>

                {/* Contact Info */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <FaPhoneAlt className="text-[#00ffe0] text-lg" />
                    <div>
                      <p className="text-xs text-white/70">Phone Number</p>
                      <p className="font-semibold">+91 7042867717</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <FaEnvelope className="text-[#00ffe0] text-lg" />
                    <div>
                      <p className="text-xs text-white/70">Email Address</p>
                      <a href="mailto:info@unifostedu.com" className="font-semibold hover:text-[#00ffe0] transition" aria-label="Email us at info@unifostedu.com">
                        info@unifostedu.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      {/* Header-scoped Enquiry Modal */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[30001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                {modalType === 'videoCall' && 'Book a Video Call'}
                {modalType === 'homeDemo' && 'Book a Home Demo'}
                {modalType === 'getStarted' && 'Get Started with Unifost'}
              </DialogTitle>
            </DialogHeader>
            <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} />
          </DialogContent>
        </Dialog>
      )}
      </div>
    </header>
    )
  );
};

export default Header;
