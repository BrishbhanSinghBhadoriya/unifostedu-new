'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaEnvelope, FaPhoneAlt, FaComments, FaVideo, FaChevronDown, FaBars, FaTimes, 
  FaSearch, FaGraduationCap, FaBookOpen, FaUniversity, FaRocket
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

const universities = [
    { name: "Lovely Professional University", link: "/lpu", icon: FaUniversity },
    { name: "Online Manipal University", link: "/manipal", icon: FaUniversity },
    { name: "Amity University Online", link: "/amity", icon: FaUniversity },
    { name: "Chandigarh University Online", link: "/chandigarh", icon: FaUniversity },
    { name: "Jain University", link: "/jain", icon: FaUniversity },
    { name: "Dr. D Y Patil", link: "/dypatil", icon: FaUniversity },
    { name: "OP Jindal University", link: "/opjindal", icon: FaUniversity },
    { name: "Shoolini University Online", link: "/shoolini", icon: FaUniversity },
    { name: "Vivekananda Global University Online", link: "/vgu", icon: FaUniversity },
    { name: "Upes Online", link: "/upes", icon: FaUniversity },
    { name: "Sharda University Online", link: "/sharda", icon: FaUniversity }
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
        router.push(courseRoutes[key]); setMenuOpen(null); return;
      }
    }
    for (const key in universityRoutes) {
      if (query.includes(key)) {
        router.push(universityRoutes[key]); setMenuOpen(null); return;
      }
    }
    router.push(`/search?query=${encodeURIComponent(query)}`); setMenuOpen(null);
  };

  return (
    <header className="w-full font-sans">
      {/* Tagline */}
      <div className="bg-black py-2 px-4 text-center">
        <p className="text-white text-base lg:text-lg font-semibold italic">
          <span className="text-[#00ffe0] font-bold">Unifost</span> – University <span className="text-[#00ffe0]">For</span> Students
        </p>
      </div>

      {/* Navbar */}
      <div className="bg-gradient-to-r from-[#001e3c] to-[#002e4d] text-white px-4 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-70 shadow-md">
        <div className="flex items-center justify-between w-full gap-6 lg:gap-8 flex-nowrap">
          {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <div className={`w-40 h-16 rounded-2xl p-2 transition-all duration-500 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-[#001e3c] to-[#003b6c] shadow-lg' 
                    : 'bg-white/10 backdrop-blur-sm'
                }`}>
                  <img 
                    src="/unilogo.png" 
                    alt="Unifost Logo" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                {!scrolled && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-2xl blur opacity-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                )}
              </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-wrap items-center gap-6 text-[16px] font-medium" ref={dropdownRef}>
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' }
            ].map((link, i) => (
              <Link key={i}
                href={link.path}
                className="hover:text-[#00ffe0] hover:underline underline-offset-4 transform hover:-translate-y-1 transition duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

            {/* Explore Dropdown */}
            <div className="relative">
                <button 
                  onClick={() => setMenuOpen(menuOpen === "explore" ? null : "explore")} 
                  className={`group flex items-center space-x-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                    scrolled 
                      ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                      : 'text-white hover:bg-white/10 hover:text-[#00ffe0]'
                  }`}>
                  <FaUniversity className="text-sm" />
                  <span className="font-semibold">Explore</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen === "explore" ? 'rotate-180' : ''}`} />
              </button>
                
                <div className={`absolute left-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 transform origin-top ${
                  menuOpen === "explore" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-6">
                    <h3 className="text-[#001e3c] font-bold text-lg mb-4 flex items-center">
                      <FaUniversity className="mr-3 text-[#00ffe0]" />
                      Partner Universities
                    </h3>
                    <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto">
                {universities.map((uni, idx) => (
                        <Link key={idx} href={uni.link} onClick={() => setMenuOpen(null)} 
                              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[#001e3c] hover:text-white transition-all duration-300 group text-[#001e3c]">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg flex items-center justify-center">
                            <uni.icon className="text-[#001e3c] text-sm" />
                          </div>
                          <span className="font-medium group-hover:text-white">{uni.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button 
                        onClick={() => { router.push('/listofcollege'); setMenuOpen(null); }} 
                        className="w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-3 px-6 rounded-xl font-semibold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300">
                        View All Colleges
                      </button>
                    </div>
                  </div>
              </div>
            </div>

            {/* Blogs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "blogs" ? null : "blogs")}
                  className={`group flex items-center space-x-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                    scrolled 
                      ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                      : 'text-white hover:bg-white/10 hover:text-[#00ffe0]'
                  }`}>
                  <FaBookOpen className="text-sm" />
                  <span className="font-semibold">Blogs</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen === "blogs" ? 'rotate-180' : ''}`} />
              </button>
                
                <div className={`absolute left-0 top-full mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 transform origin-top ${
                  menuOpen === "blogs" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-6">
                    <h3 className="text-[#001e3c] font-bold text-lg mb-4 flex items-center">
                      <FaBookOpen className="mr-3 text-[#00ffe0]" />
                      Latest Articles
                    </h3>
                    <div className="space-y-3">
                      {[
                        { title: "MBA: Online vs Distance", path: "/blog/mba-online-vs-distance" },
                        { title: "Best Online BBA 2025", path: "/blog/best-online-bba-2025" },
                        { title: "Manipal vs Amity Online MBA", path: "/blog/manipal-vs-amity-online-mba" },
                        { title: "LPU Online Review", path: "/blog/lpu-online-review" },
                        { title: "Jain UGC Approval", path: "/blog/jain-ugc-approval" }
                      ].map((blog, idx) => (
                        <Link key={idx} href={blog.path} onClick={() => setMenuOpen(null)}
                              className="block p-4 rounded-xl hover:bg-[#001e3c] hover:text-white transition-all duration-300 text-[#001e3c]">
                          <span className="font-medium">{blog.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link href="/blog/blog-page" onClick={() => setMenuOpen(null)}
                            className="block w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-3 px-6 rounded-xl font-semibold text-center hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300">
                        View All Blogs
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </nav>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center bg-white rounded-full px-4 py-2 shadow-md flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-black px-3 py-1 w-full text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch} className="text-sky-600 hover:text-sky-800 px-2">
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex gap-4 items-center text-[#00ffe0]">
            <a href="tel:+919354735410" className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300"><FaPhoneAlt className="text-xl hover:drop-shadow-md hover:text-cyan-300" /></a>
            <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300"><FaComments className="text-xl hover:drop-shadow-md hover:text-cyan-300" /></a>
            <button onClick={() => router.push('/bookdemo')} className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300"><FaVideo className="text-xl hover:drop-shadow-md hover:text-cyan-300" /></button>
          </div>

          {/* Call/Email - Desktop */}
          <div className="hidden lg:flex flex-col justify-center items-end text-sm ml-4">
            <div className="flex items-center gap-2 text-[#e6faff] font-semibold">
              <FaPhoneAlt className="text-[#00ffe0]" /> Call: <span className="text-[#00ffe0]">+91 93547 35410</span>
            </div>
            <div className="flex items-center gap-2 text-[#e6faff] font-semibold">
              <FaEnvelope className="text-sky-400" />
              <a href="mailto:info@unifostedu.com" className="underline hover:text-white">info@unifostedu.com</a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden ml-auto">
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                scrolled
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-white/20 border-white/20 text-white hover:bg-white/30'
              }`}
            >
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-full z-[9999] text-white" style={{backgroundColor: '#1f2937'}}>
              <div className="h-full w-full flex flex-col p-6" style={{backgroundColor: '#1f2937'}}>
                {/* Top bar */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img src="/unilogo.png" alt="Unifost" className="h-8 w-auto" />
                  </div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-gray-700 border border-gray-600 hover:bg-gray-600 transition"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex items-center justify-center">
                  <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at top left, #00ffe0 0%, transparent 40%), radial-gradient(ellipse at bottom right, #00d4c4 0%, transparent 40%)' }}></div>
                  <div className="relative w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800/90 border border-gray-700 p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Home', path: '/', icon: FaRocket },
                        { label: 'About', path: '/about', icon: FaGraduationCap },
                        { label: 'Services', path: '/services', icon: FaBookOpen },
                        { label: 'Blogs', path: '/blog/blog-page', icon: FaBookOpen },
                        { label: 'Explore Colleges', path: '/listofcollege', icon: FaUniversity }
                      ].map((link, i) => (
                        <Link key={i} href={link.path} onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition text-white border border-gray-700 text-sm">
                          <div className="w-9 h-9 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg flex items-center justify-center">
                            <link.icon className="text-[#001e3c] text-base" />
                          </div>
                          <span className="font-semibold leading-none">{link.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center bg-gray-800 rounded-xl px-3 py-2 border border-gray-700">
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="outline-none bg-transparent text-white placeholder-white/70 w-full text-sm"
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
                      />
                      <button onClick={handleSearch} className="text-white p-1.5">
                        <FaSearch className="text-base" />
                      </button>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      <a href="tel:+919354735410" className="p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">Call</a>
                      <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">WhatsApp</a>
                      <button onClick={() => { router.push('/bookdemo'); setMobileMenuOpen(false); }} className="p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">Enquire</button>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-white text-xs bg-gray-800 p-3 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-2"><FaPhoneAlt className="text-[#00ffe0]" /><span className="font-medium">+91 93547 35410</span></div>
                      <div className="flex items-center gap-2"><FaEnvelope className="text-[#00ffe0]" /><a href="mailto:info@unifostedu.com" className="hover:underline">info@unifostedu.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;