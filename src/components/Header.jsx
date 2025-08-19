'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaEnvelope, FaPhoneAlt, FaComments, FaVideo, FaChevronDown, FaBars, FaTimes
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

const universities = [
  { name: "Lovely Professional University", link: "/lpu" },
  { name: "Online Manipal University", link: "/manipal"},
  { name: "Amity University Online", link: "/amity" },
  { name: "Chandigarh University Online", link: "/chandigarh" },
  { name: "JAIN University", link: "/jain" },
  { name: "DY PATIL", link: "/dypatil" },
  { name: "OP Jindal University", link: "/opjindal" },
  { name: "SHOOLINI UNIVERSITY ONLINE", link: "/shoolini" },
  { name: "Vivekananda Global University Online", link: "/vgu" },
  { name: "UPES ONLINE", link: "/upes" },
  { name: "Sharda University Online", link: "/sharda" }
];

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
    <header className="w-full font-sans">
      {/* Tagline */}
      <div className="bg-black py-2 px-4 text-center">
        <p className="text-white text-base lg:text-lg font-semibold italic">
          <span className="text-[#00ffe0] font-bold">Unifost</span> – University <span className="text-[#00ffe0]">For</span> Students
        </p>
      </div>

      {/* Navbar */}
      <div className="bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white px-4 py-3 font-[Poppins] sticky top-0 z-50 backdrop-blur-md bg-opacity-80 shadow-lg border-b border-sky-900/30">
        <div className="flex flex-wrap items-center justify-between w-full gap-4 lg:gap-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:animate-spin-slow transition duration-700 ease-in-out">
            <img src="/unilogo.png" alt="Unifost Logo" className="w-44 h-14 object-contain rounded-lg" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-wrap items-center gap-4 text-[16px] font-medium" ref={dropdownRef}>
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' }
            ].map((link, i) => (
              <Link key={i}
                href={link.path}
                className="hover:text-[#00ffe0] hover:underline underline-offset-4 transform hover:-translate-y-1 transition duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Explore Dropdown */}
            <div className="relative">
              <button onClick={() => setMenuOpen(menuOpen === "explore" ? null : "explore")} className="flex items-center gap-1 hover:text-[#00ffe0] hover:underline underline-offset-4 transition hover:-translate-y-1">
                Explore <FaChevronDown className="text-sm mt-1" />
              </button>
              <div className={`absolute left-0 bg-[#011627]/95 text-white rounded-lg shadow-2xl z-50 w-64 mt-2 transition-all duration-300 transform origin-top max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ffe0]/70 scrollbar-track-[#03324e] border border-[#00ffe0]/30 backdrop-blur-md ${menuOpen === "explore" ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                {universities.map((uni, idx) => (
                  <Link key={idx} href={uni.link} onClick={() => setMenuOpen(null)} className="block px-4 py-2 hover:bg-[#00ffe0]/20 transition-all duration-200">{uni.name}</Link>
                ))}
                <button onClick={() => { router.push('/listofcollege'); setMenuOpen(null); }} className="block px-4 py-2 hover:bg-[#e0f7fa]">All Colleges</button>
              </div>
            </div>

            {/* Blogs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "blogs" ? null : "blogs")}
                className="flex items-center gap-1 hover:text-[#00ffe0] hover:underline underline-offset-4 transition hover:-translate-y-1"
              >
                Blogs <FaChevronDown className="text-sm mt-1" />
              </button>
              <div
                className={`absolute left-0 bg-[#011627]/95 text-white rounded-lg shadow-2xl z-50 w-56 mt-2 transition-all duration-300 transform origin-top max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ffe0]/70 scrollbar-track-[#03324e] border border-[#00ffe0]/30 backdrop-blur-md ${
                  menuOpen === "blogs"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link href="/blog/mba-online-vs-distance" className="block px-4 py-2 hover:bg-[#00ffe0]/20">MBA: Online vs Distance</Link>
                <Link href="/blog/best-online-bba-2025" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Best Online BBA 2025</Link>
                <Link href="/blog/manipal-vs-amity-online-mba" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Manipal vs Amity MBA</Link>
                <Link href="/blog/lpu-online-review" className="block px-4 py-2 hover:bg-[#00ffe0]/20">LPU Online Review</Link>
                <Link href="/blog/jain-ugc-approval" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Jain UGC Approval</Link>
                <Link href="/blog/choose-online-university" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Choose Online University</Link>
                <Link href="/blog/scholarship-and-emi" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Scholarship & EMI</Link>
                <Link href="/blog/working-mba" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Working & Online MBA</Link>
                <Link href="/blog/career-after-online-mba" className="block px-4 py-2 hover:bg-[#00ffe0]/20">Career After MBA</Link>
                <Link href="/blog/blog-page" className="block px-4 py-2 hover:bg-[#00ffe0]/20">All Blogs</Link>
              </div>
            </div>
          </nav>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center bg-white rounded-full px-3 py-1 shadow-md flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-black px-2 py-1 w-full text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch} className="text-sky-600 hover:text-sky-800 px-1">🔍</button>
          </div>

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex gap-3 items-center text-[#00ffe0]">
            <a href="tel:+919354735410"><FaPhoneAlt className="text-xl hover:drop-shadow-md hover:text-cyan-300" /></a>
            <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer"><FaComments className="text-xl hover:drop-shadow-md hover:text-cyan-300" /></a>
            <button onClick={() => router.push('/bookdemo')}><FaVideo className="text-xl hover:drop-shadow-md hover:text-cyan-300" /></button>
          </div>

          {/* Call/Email - Desktop */}
          <div className="hidden lg:flex flex-col justify-center items-end text-sm ml-4 font-[Montserrat]">
            <div className="flex items-center gap-1 text-[#e6faff] font-semibold">
              <FaPhoneAlt className="text-[#00ffe0]" /> Call: <span className="text-[#00ffe0]">+91 93547 35410</span>
            </div>
            <div className="flex items-center gap-1 text-[#e6faff] font-semibold">
              <FaEnvelope className="text-sky-400" />
              <a href="mailto:info@unifostedu.com" className="underline hover:text-white">info@unifostedu.com</a>
            </div>
          </div>

          {/* Hamburger - Mobile */}
          <div className="lg:hidden ml-auto">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-3 text-white animate-slide-down">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00ffe0]">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00ffe0]">About</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00ffe0]">Services</Link>
            <Link href="/blog/blog-page" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00ffe0]">Blogs</Link>
            <Link href="/listofcollege" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00ffe0]">Explore Colleges</Link>

            {/* Search in mobile */}
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-md text-black">
              <input type="text" placeholder="Search..." className="outline-none px-2 py-1 w-full text-sm"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
              <button onClick={handleSearch} className="text-sky-600 hover:text-sky-800 px-1">🔍</button>
            </div>

            {/* Call/Email - Mobile */}
            <div className="text-sm text-[#e6faff] font-[Montserrat] mt-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#00ffe0]" />
                <span className="text-[#00ffe0] font-semibold">+91 93547 35410</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaEnvelope className="text-sky-400" />
                <a href="mailto:aman@unifostedu.com" className="underline hover:text-white">aman@unifostedu.com</a>
              </div>
            </div>

            {/* Contact Icons - Mobile */}
            <div className="flex gap-4 mt-3 text-[#00ffe0]">
              <a href="tel:+919354735410"><FaPhoneAlt className="text-lg" /></a>
              <a href="https://wa.me/919354735410" target="_blank" rel="noopener noreferrer"><FaComments className="text-lg" /></a>
              <button onClick={() => { router.push('/bookdemo'); setMobileMenuOpen(false); }}><FaVideo className="text-lg" /></button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
