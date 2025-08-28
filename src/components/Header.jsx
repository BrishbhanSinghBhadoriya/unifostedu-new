'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import {
  FaEnvelope, FaPhoneAlt, FaComments, FaVideo, FaChevronDown, FaBars, FaTimes,
  FaSearch, FaGraduationCap, FaBookOpen, FaUniversity, FaRocket, FaHome, FaInfoCircle,
  FaCog, FaUser, FaArrowRight,
  
} from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  
  const [loading, setLoading] = useState(false);
const [modalType, setModalType] = useState();

  const universities = [
    { name: "Lovely Professional University", link: "/lpu", logo: "/images/lpu.png" },
    { name: "Online Manipal University", link: "/manipal", logo: "/images/manipal.png" },
    { name: "Sikkim Manipal University", link: "/smu", logo: "/images/smu-uni.jpg" },
    { name: "Uttaranchal University", link: "/uu", logo: "/images/uu-uni.webp" },
    { name: "Amity University Online", link: "/amity", logo: "/images/amity.png" },
    { name: "Chandigarh University Online", link: "/chandigarh", logo: "/images/chandigarh.jpg" },
    { name: "Jain University", link: "/jain", logo: "/images/jain.png" },
    { name: "Dr. D Y Patil", link: "/dypatil", logo: "/images/dypatil.png" },
    { name: "OP Jindal University", link: "/opjindal", logo: "/images/opjindal.png" },
    { name: "Kurukshetra University", link: "/ku", logo: "/images/ku.jpg" },
    { name: "Shoolini University Online", link: "/shoolini", logo: "/images/shoolini.jpg" },
    { name: "Vivekananda Global University Online", link: "/vgu", logo: "/images/vgu1.png" },
    { name: "Upes Online", link: "/upes", logo: "/images/upes.png" },
    { name: "Sharda University Online", link: "/sharda", logo: "/images/sharda.png" },
    { name: "NMIMS University", link: "/nmims", logo: "/images/nmims.png" }
    
  ];

  const blogPosts = [
    { title: "MBA: Online vs Distance", path: "/blog/mba-online-vs-distance" },
    { title: "Best Online BBA 2025", path: "/blog/best-online-bba-2025" },
    { title: "Manipal vs Amity Online MBA", path: "/blog/manipal-vs-amity-online-mba" },
    { title: "LPU Online Review", path: "/blog/lpu-online-review" },
    { title: "Jain UGC Approval", path: "/blog/jain-ugc-approval" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    const courseRoutes = {
      mba: '/mba-online', bba: '/bba-online', mca: '/mca-online', bca: '/bca-online', mcom: '/mcom-online', ba: '/ba-online'
    };
    const universityRoutes = {
      amity: '/amity', manipal: '/manipal', upes: '/upes', lpu: '/lpu', sharda: '/sharda', vgu: '/vgu', nmims: '/nmims', jain: '/jain', dypatil: '/dypatil'
    };
    for (const key in courseRoutes) {
      if (query.includes(key)) {
        router.push(courseRoutes[key]); 
        setMenuOpen(null); 
        setMobileMenuOpen(false);
        return;
      }
    }
    for (const key in universityRoutes) {
      if (query.includes(key)) {
        router.push(universityRoutes[key]); 
        setMenuOpen(null); 
        setMobileMenuOpen(false);
        return;
      }
    }
    router.push(`/search?query=${encodeURIComponent(query)}`); 
        setMenuOpen(null); 
        setMobileMenuOpen(false);
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

  return (
    <header className="w-full font-sans">
      {/* Tagline - Responsive */}
      <div className="bg-black py-2 px-4 text-center">
        <p className="text-white text-sm sm:text-base lg:text-lg font-semibold italic">
          <span className="text-[#00ffe0] font-bold">Unifost</span> – University <span className="text-[#00ffe0]">For</span> Students
        </p>
      </div>

      {/* Navbar */}
      <div className={`bg-gradient-to-r from-[#001e3c] to-[#002e4d] text-white px-3 sm:px-4 py-3 sm:py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-70 shadow-md transition-all duration-300 ${
        scrolled ? 'py-2' : ''
      }`}>
        <div className="flex items-center justify-between w-full gap-3 sm:gap-4 lg:gap-6 flex-nowrap">
          {/* Logo - Made smaller to fit everything in one line */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative">
              <div className={`w-24 h-10 sm:w-28 sm:h-12 rounded-2xl p-1 transition-all duration-500 ${
                scrolled 
                  ? 'bg-gradient-to-r from-[#001e3c] to-[#003b6c] shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm'
              }`}>
                <img 
                  src="/images/unilogo.png" 
                  alt="Unifost Logo" 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              {!scrolled && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-2xl blur opacity-10 group-hover:opacity-40 transition-opacity duration-500"></div>
              )}
            </div>
          </Link>

          {/* Desktop Nav - Made more compact to fit in one line */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-[13px] lg:text-[14px] font-medium" ref={dropdownRef}>
            {[
              { label: 'Home', path: '/', icon: FaHome },
              { label: 'About', path: '/about', icon: FaInfoCircle },
              { label: 'Services', path: '/services', icon: FaCog }
            ].map((link, i) => (
              <Link key={i}
                href={link.path}
                className="hover:text-[#00ffe0] hover:underline underline-offset-4 transition duration-300 px-2 py-1 rounded-lg hover:bg-white/10 flex items-center gap-1"
              >
                <link.icon className="text-xs" />
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Explore Dropdown - Made more compact */}
            <div className="relative">
              <button 
                onClick={() => setMenuOpen(menuOpen === "explore" ? null : "explore")} 
                className={`group flex items-center space-x-1 px-2 py-1 rounded-xl transition-all duration-300 text-white hover:bg-white/10 hover:text-[#00ffe0]`}>
                <FaUniversity className="text-xs" />
                <span className="font-semibold">University</span>
                <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen === "explore" ? 'rotate-180' : ''}`} />
              </button>
                
              <div className={`absolute left-0 top-full mt-2 w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden transition-all duration-300 transform origin-top ${
                menuOpen === "explore" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-emerald-500/10 pointer-events-none"></div>
                <div className="relative z-10 p-4">
                  <h3 className="text-[#001e3c] font-bold text-base mb-3 flex items-center">
                    <FaUniversity className="mr-2 text-[#00ffe0]" />
                    Partner Universities
                  </h3>
                  <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                    {universities.map((uni, idx) => (
                      <Link key={idx} href={uni.link} onClick={() => setMenuOpen(null)} 
                            className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group text-[#001e3c] hover:text-white hover:shadow-lg hover:shadow-indigo-200 hover:translate-y-[-2px] bg-white/70 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                          <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium text-sm group-hover:text-white">{uni.name}</span>
                      </Link>
                    ))}
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Blogs Dropdown - Made more compact */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "blogs" ? null : "blogs")}
                className={`group flex items-center space-x-1 px-2 py-1 rounded-xl transition-all duration-300 text-white hover:bg-white/10 hover:text-[#00ffe0]`}>
                <FaBookOpen className="text-xs" />
                <span className="font-semibold">Blogs</span>
                <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen === "blogs" ? 'rotate-180' : ''}`} />
              </button>
                
              <div className={`absolute left-0 top-full mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 transform origin-top ${
                menuOpen === "blogs" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <div className="p-4">
                  <h3 className="text-[#001e3c] font-bold text-base mb-3 flex items-center">
                    <FaBookOpen className="mr-2 text-[#00ffe0]" />
                    Latest Articles
                  </h3>
                  <div className="space-y-2">
                    {blogPosts.map((blog, idx) => (
                      <Link key={idx} href={blog.path} onClick={() => setMenuOpen(null)}
                            className="block p-3 rounded-xl hover:bg-[#001e3c] hover:text-white transition-all duration-300 text-[#001e3c] text-sm">
                        <span className="font-medium">{blog.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <Link href="/blog/blog-page" onClick={() => setMenuOpen(null)}
                          className="block w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-2 px-4 rounded-xl font-semibold text-center hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300 text-sm">
                      View All Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Search - Made more compact */}
          <div className="hidden sm:flex items-center bg-white rounded-full px-2 sm:px-3 py-1 shadow-md flex-1 max-w-xs mx-2 lg:mx-3">
            <input
              type="text"
              placeholder="Search courses, universities..."
              className="outline-none text-black px-2 py-1 w-full text-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch} className="text-sky-600 hover:text-sky-800 px-1">
              <FaSearch className="text-xs" />
            </button>
          </div>

          {/* Contact Icons - Made more compact */}
          <div className="hidden md:flex md:text-[4rem] gap-1 lg:gap-2 items-center text-[#00ffe0]">
            <a href="tel:+919354735410" className="p-1 rounded-lg hover:bg-white/10 transition-all duration-300" title="Call us">
              <FaPhoneAlt className="text-[3rem] lg:text-2xl hover:drop-shadow-md hover:text-cyan-300" />
            </a>
            <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer" className="p-1 rounded-lg hover:bg-white/10 transition-all duration-300" title="WhatsApp">
              <FaWhatsappSquare className="text-[3rem] lg:text-2xl hover:drop-shadow-md hover:text-cyan-300" />
            </a>
            <button onClick={() => openModal('videoCall')} className="p-1 rounded-lg hover:bg-white/10 transition-all duration-300" title="Book Demo">
              <FaVideo className="text-[3rem] lg:text-2xl hover:drop-shadow-md hover:text-cyan-300" />
            </button>
          </div>

          {/* Call/Email - Made more compact */}
          <div className="hidden lg:flex flex-col justify-center items-end text-xs ml-2">
            <div className="flex items-center gap-1 text-[#e6faff] font-semibold">
              <FaPhoneAlt className="text-[#00ffe0] text-xs" /> <span className="text-[#00ffe0]">+91 93547 35410</span>
            </div>
            <div className="flex items-center gap-1 text-[#e6faff] font-semibold">
              <FaEnvelope className="text-sky-400 text-xs" />
              <a href="mailto:info@unifostedu.com" className="underline hover:text-white text-xs">info@unifostedu.com</a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden ml-auto flex items-center gap-2">
            <a
              href="tel:+919354735410"
              aria-label="Call us"
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'bg-white/10 text-white' : 'bg-white/20 text-white'
              }`}
            >
              <FaPhoneAlt className="text-base" />
            </a>
            <a
              href="https://wa.me/919354735410"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'bg-white/10 text-white' : 'bg-white/20 text-white'
              }`}
            >
              <FaComments className="text-base" />
            </a>
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`p-2 sm:p-2 rounded-xl border transition-all duration-300 ${
                scrolled
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-white/20 border-white/20 text-white hover:bg-white/30'
              }`}
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen z-[9999] text-white bg-gradient-to-br from-[#001e3c] to-[#003b6c] overflow-y-auto overscroll-contain" style={{ minHeight: '100dvh', maxHeight: '100svh', WebkitOverflowScrolling: 'touch' }}>
            <div className="w-full flex flex-col p-4 sm:p-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]" style={{ minHeight: '100%' }}>
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <img src="/uni.jpg" alt="Unifost" className="h-8 w-auto" />
                  <span className="text-lg font-bold text-[#00ffe0]">Unifost</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
                >
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
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
                  />
                  <button onClick={handleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white p-1">
                    <FaSearch className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 space-y-4">
                {/* Main Navigation */}
                <div className="space-y-3">
                  <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">Main Menu</h3>
                  {[
                    { label: 'Home', path: '/', icon: FaHome },
                    { label: 'About', path: '/about', icon: FaInfoCircle },
                    { label: 'Services', path: '/services', icon: FaCog }
                  ].map((link, i) => (
                    <Link key={i} href={link.path} onClick={() => setMobileMenuOpen(false)}
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
                  <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">Universities</h3>
                  <div className="space-y-2">
                    {universities.slice(0, 6).map((uni, idx) => (
                      <Link key={idx} href={uni.link} onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white border border-white/10">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                          <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium text-sm flex-1">{uni.name}</span>
                        <FaArrowRight className="text-[#00ffe0] text-xs" />
                      </Link>
                    ))}
                    <Link href="/listofcollege" onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] font-bold hover:scale-105 transition">
                      <span>View All Universities</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Blog Posts */}
                <div className="space-y-3">
                  <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">Latest Blogs</h3>
                  <div className="space-y-2">
                    {blogPosts.slice(0, 3).map((blog, idx) => (
                      <Link key={idx} href={blog.path} onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white border border-white/10">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg flex items-center justify-center">
                          <FaBookOpen className="text-[#001e3c] text-sm" />
                        </div>
                        <span className="font-medium text-sm flex-1">{blog.title}</span>
                        <FaArrowRight className="text-[#00ffe0] text-xs" />
                      </Link>
                    ))}
                    <Link href="/blog/blog-page" onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] font-bold hover:scale-105 transition">
                      <span>View All Blogs</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-6 sm:mt-8 space-y-4">
                <h3 className="text-[#00ffe0] font-bold text-sm uppercase tracking-wider px-2">Contact Us</h3>
                
                {/* Contact Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <a href="tel:+919354735410" 
                     className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">
                    <FaPhoneAlt className="text-lg" />
                    <span>Call</span>
                  </a>
                  <a  href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">
                  <FaWhatsapp className="text-lg text-green-600" />   {/* WhatsApp icon */}
                   <span>WhatsApp</span>
                  </a>
                  <button onClick={() => { router.push('/bookdemo'); setMobileMenuOpen(false); }} 
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
                      <p className="font-semibold">+91 93547 35410</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <FaEnvelope className="text-[#00ffe0] text-lg" />
                    <div>
                      <p className="text-xs text-white/70">Email Address</p>
                      <a href="mailto:info@unifostedu.com" className="font-semibold hover:text-[#00ffe0] transition">
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
  );
};


export default Header;