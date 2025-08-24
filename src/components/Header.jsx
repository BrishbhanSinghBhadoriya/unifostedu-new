'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaEnvelope, FaPhoneAlt, FaComments, FaVideo, FaChevronDown, FaBars, FaTimes,
  FaSearch, FaGraduationCap, FaBookOpen, FaUniversity, FaRocket, FaHome, FaInfoCircle,
  FaCog, FaUser, FaArrowRight
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const universities = [
    { name: "Lovely Professional University", link: "/lpu", logo: "/lpu.png" },
    { name: "Online Manipal University", link: "/manipal", logo: "/manipal.png" },
    { name: " Sikkim Manipal University", link: "/smu", logo: "/manipal.png" },
    { name: " Uttaranchal University", link: "/uu", logo: "/manipal.png" },
    { name: "Amity University Online", link: "/amity", logo: "/amity.png" },
    { name: "Chandigarh University Online", link: "/chandigarh", logo: "/chandigarh.jpg" },
    { name: "Jain University", link: "/jain", logo: "/jain.png" },
    { name: "Dr. D Y Patil", link: "/dypatil", logo: "/dypatil.png" },
    { name: "OP Jindal University", link: "/opjindal", logo: "/opjindal.png" },
    { name: "Shoolini University Online", link: "/shoolini", logo: "/shoolini.jpg" },
    { name: "Vivekananda Global University Online", link: "/vgu", logo: "/vgu1.png" },
    { name: "Upes Online", link: "/upes", logo: "/upes.png" },
    { name: "Sharda University Online", link: "/sharda", logo: "/sharda.png" }
    
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
        <div className="flex items-center justify-between w-full gap-3 sm:gap-4 lg:gap-8 flex-nowrap">
          {/* Logo - Responsive */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative">
              <div className={`w-28 h-12 sm:w-32 sm:h-14 lg:w-40 lg:h-16 rounded-2xl p-2 transition-all duration-500 ${
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

          {/* Desktop Nav - Hidden on mobile and tablet */}
          <nav className="hidden xl:flex flex-wrap items-center gap-4 lg:gap-6 text-[15px] lg:text-[16px] font-medium" ref={dropdownRef}>
            {[
              { label: 'Home', path: '/', icon: FaHome },
              { label: 'About', path: '/about', icon: FaInfoCircle },
              { label: 'Services', path: '/services', icon: FaCog }
            ].map((link, i) => (
              <Link key={i}
                href={link.path}
                className="hover:text-[#00ffe0] hover:underline underline-offset-4 transform hover:-translate-y-1 transition duration-300 px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2"
              >
                <link.icon className="text-sm" />
                {link.label}
              </Link>
            ))}

            {/* Explore Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setMenuOpen(menuOpen === "explore" ? null : "explore")} 
                className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 text-white hover:bg-white/10 hover:text-[#00ffe0]`}>
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
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                          <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium group-hover:text-white">{uni.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => { router.push('/listofcollege'); setMenuOpen(null); }} 
                      className="w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-3 px-6 rounded-xl font-semibold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300">
                      View All Universities
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blogs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "blogs" ? null : "blogs")}
                className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 text-white hover:bg-white/10 hover:text-[#00ffe0]`}>
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
                    {blogPosts.map((blog, idx) => (
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

          {/* Search - Desktop and Tablet */}
          <div className="hidden md:flex items-center bg-white rounded-full px-3 sm:px-4 py-2 shadow-md flex-1 max-w-lg mx-3 lg:mx-4">
            <input
              type="text"
              placeholder="Search courses, universities..."
              className="outline-none text-black px-2 sm:px-3 py-1 w-full text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch} className="text-sky-600 hover:text-sky-800 px-2">
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* Contact Icons - Desktop and Tablet */}
          <div className="hidden lg:flex gap-3 lg:gap-4 items-center text-[#00ffe0]">
            <a href="tel:+919354735410" className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300" title="Call us">
              <FaPhoneAlt className="text-lg lg:text-xl hover:drop-shadow-md hover:text-cyan-300" />
            </a>
            <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300" title="WhatsApp">
              <FaComments className="text-lg lg:text-xl hover:drop-shadow-md hover:text-cyan-300" />
            </a>
            <button onClick={() => router.push('/bookdemo')} className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300" title="Book Demo">
              <FaVideo className="text-lg lg:text-xl hover:drop-shadow-md hover:text-cyan-300" />
            </button>
          </div>

          {/* Call/Email - Desktop */}
          <div className="hidden xl:flex flex-col justify-center items-end text-sm ml-4">
            <div className="flex items-center gap-2 text-[#e6faff] font-semibold">
              <FaPhoneAlt className="text-[#00ffe0]" /> Call: <span className="text-[#00ffe0]">+91 93547 35410</span>
            </div>
            <div className="flex items-center gap-2 text-[#e6faff] font-semibold">
              <FaEnvelope className="text-sky-400" />
              <a href="mailto:info@unifostedu.com" className="underline hover:text-white">info@unifostedu.com</a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden ml-auto">
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`p-2 sm:p-3 rounded-xl border transition-all duration-300 ${
                scrolled
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-white/20 border-white/20 text-white hover:bg-white/30'
              }`}
            >
              {mobileMenuOpen ? <FaTimes className="text-xl sm:text-2xl" /> : <FaBars className="text-xl sm:text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-full z-[9999] text-white bg-gradient-to-br from-[#001e3c] to-[#003b6c]">
            <div className="h-full w-full flex flex-col p-4 sm:p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <img src="/unilogo.png" alt="Unifost" className="h-8 w-auto" />
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
                  <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer"
                     className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-xl text-[#001e3c] text-center font-bold text-sm hover:scale-105 transition">
                    <FaComments className="text-lg" />
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
      </div>
    </header>
  );
};

export default Header;