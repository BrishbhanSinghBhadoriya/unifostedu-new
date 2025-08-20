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
    { name: "JAIN University", link: "/jain", icon: FaUniversity },
    { name: "DY PATIL", link: "/dypatil", icon: FaUniversity },
    { name: "OP Jindal University", link: "/opjindal", icon: FaUniversity },
    { name: "SHOOLINI UNIVERSITY ONLINE", link: "/shoolini", icon: FaUniversity },
    { name: "Vivekananda Global University Online", link: "/vgu", icon: FaUniversity },
    { name: "UPES ONLINE", link: "/upes", icon: FaUniversity },
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
    <header className="w-full font-sans relative z-50">
      {/* Top Bar with Gradient */}
      <div className="bg-gradient-to-r from-[#001e3c] via-[#003b6c] to-[#001e3c] py-3 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffe0]/10 via-transparent to-[#00ffe0]/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/90">
              <FaPhoneAlt className="text-[#00ffe0] text-sm" />
              <span className="text-sm font-medium">+91 93547 35410</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <FaEnvelope className="text-[#00ffe0] text-sm" />
              <a href="mailto:info@unifostedu.com" className="text-sm font-medium hover:text-[#00ffe0] transition-colors">
                info@unifostedu.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer" 
               className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-xs font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              💬 WhatsApp
            </a>
            <button onClick={() => router.push('/bookdemo')} 
                    className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] px-3 py-1 rounded-full text-xs font-semibold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300 shadow-lg">
              📹 Book Demo
            </button>
          </div>
        </div>
      </div>
      

      {/* Main Navigation */}
      <div className={`sticky top-0 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-gradient-to-r from-[#001e3c] to-[#003b6c]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <div className={`w-48 h-16 rounded-2xl p-2 transition-all duration-500 ${
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                )}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
              {[
                { label: 'Home', path: '/', icon: FaRocket },
                { label: 'About', path: '/about', icon: FaGraduationCap },
                { label: 'Services', path: '/services', icon: FaBookOpen }
              ].map((link, i) => (
                <Link key={i} href={link.path} 
                      className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        scrolled 
                          ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                          : 'text-white hover:bg-white/10 hover:text-[#00ffe0]'
                      }`}>
                  <link.icon className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  <span className="font-semibold">{link.label}</span>
                </Link>
              ))}

              {/* Explore Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setMenuOpen(menuOpen === "explore" ? null : "explore")} 
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    scrolled 
                      ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                      : 'text-white hover:bg-white/10 hover:text-[#00ffe0]'
                  }`}>
                  <FaUniversity className="text-sm" />
                  <span className="font-semibold">Explore</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen === "explore" ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`absolute left-0 top-full mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 transform origin-top ${
                  menuOpen === "explore" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-4">
                    <h3 className="text-[#001e3c] font-bold text-lg mb-3 flex items-center">
                      <FaUniversity className="mr-2 text-[#00ffe0]" />
                      Partner Universities
                    </h3>
                    <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                      {universities.map((uni, idx) => (
                        <Link key={idx} href={uni.link} onClick={() => setMenuOpen(null)} 
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[#001e3c] hover:text-white transition-all duration-300 group">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] rounded-lg flex items-center justify-center">
                            <uni.icon className="text-[#001e3c] text-sm" />
                          </div>
                          <span className="font-medium group-hover:text-white">{uni.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <button 
                        onClick={() => { router.push('/listofcollege'); setMenuOpen(null); }} 
                        className="w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-2 px-4 rounded-xl font-semibold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300">
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
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    scrolled 
                      ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                      : 'text-white hover:bg-white/10 hover:text-[#00ffe0]'
                  }`}>
                  <FaBookOpen className="text-sm" />
                  <span className="font-semibold">Blogs</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen === "blogs" ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`absolute left-0 top-full mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 transform origin-top ${
                  menuOpen === "blogs" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-4">
                    <h3 className="text-[#001e3c] font-bold text-lg mb-3 flex items-center">
                      <FaBookOpen className="mr-2 text-[#00ffe0]" />
                      Latest Articles
                    </h3>
                    <div className="space-y-2">
                      {[
                        { title: "MBA: Online vs Distance", path: "/blog/mba-online-vs-distance" },
                        { title: "Best Online BBA 2025", path: "/blog/best-online-bba-2025" },
                        { title: "Manipal vs Amity Online MBA", path: "/blog/manipal-vs-amity-online-mba" },
                        { title: "LPU Online Review", path: "/blog/lpu-online-review" },
                        { title: "Jain UGC Approval", path: "/blog/jain-ugc-approval" }
                      ].map((blog, idx) => (
                        <Link key={idx} href={blog.path} onClick={() => setMenuOpen(null)}
                              className="block p-3 rounded-xl hover:bg-[#001e3c] hover:text-white transition-all duration-300">
                          <span className="font-medium">{blog.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <Link href="/blog/blog-page" onClick={() => setMenuOpen(null)}
                            className="block w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] py-2 px-4 rounded-xl font-semibold text-center hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300">
                        View All Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center relative">
              <div className={`relative transition-all duration-500 ${
                scrolled 
                  ? 'bg-gray-100 border border-gray-200' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20'
              } rounded-full px-4 py-2 min-w-[300px]`}>
                <input
                  type="text"
                  placeholder="Search for courses, universities..."
                  className={`outline-none w-full text-sm transition-colors duration-300 ${
                    scrolled ? 'text-[#001e3c] placeholder-gray-500' : 'text-white placeholder-white/70'
                  } bg-transparent`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button 
                  onClick={handleSearch} 
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-all duration-300 ${
                    scrolled 
                      ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                      : 'text-white/70 hover:bg-white/20 hover:text-white'
                  }`}>
                  <FaSearch className="text-sm" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'text-[#001e3c] hover:bg-[#001e3c] hover:text-white' 
                    : 'text-white hover:bg-white/10'
                }`}>
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 animate-slide-down">
              <div className="space-y-4">
                {[
                  { label: 'Home', path: '/', icon: FaRocket },
                  { label: 'About', path: '/about', icon: FaGraduationCap },
                  { label: 'Services', path: '/services', icon: FaBookOpen },
                  { label: 'Blogs', path: '/blog/blog-page', icon: FaBookOpen },
                  { label: 'Explore Colleges', path: '/listofcollege', icon: FaUniversity }
                ].map((link, i) => (
                  <Link key={i} href={link.path} onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[#001e3c] hover:text-white transition-all duration-300 text-[#001e3c] font-medium">
                    <link.icon className="text-[#00ffe0]" />
                    <span>{link.label}</span>
                  </Link>
                ))}

                {/* Mobile Search */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="outline-none bg-transparent text-[#001e3c] placeholder-gray-500 w-full text-sm"
                      value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
                    />
                    <button onClick={handleSearch} className="text-[#00ffe0] hover:text-[#001e3c] p-1">
                      <FaSearch className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-3 text-[#001e3c]">
                    <FaPhoneAlt className="text-[#00ffe0]" />
                    <span className="font-medium">+91 93547 35410</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#001e3c]">
                    <FaEnvelope className="text-[#00ffe0]" />
                    <a href="mailto:info@unifostedu.com" className="font-medium hover:text-[#00ffe0]">
                      info@unifostedu.com
                    </a>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-gray-200 flex space-x-3">
                  <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer"
                     className="flex-1 bg-[#00ffe0] text-[#001e3c] py-3 px-4 rounded-xl font-semibold text-center hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300">
                    💬 WhatsApp
                  </a>
                  <button onClick={() => { router.push('/bookdemo'); setMobileMenuOpen(false); }}
                          className="flex-1 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white py-3 px-4 rounded-xl font-semibold hover:from-[#003b6c] hover:to-[#001e3c] transform hover:scale-105 transition-all duration-300">
                    📹 Book Demo
                  </button>
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
