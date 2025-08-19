'use client';
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [showHiringInfo, setShowHiringInfo] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mock search params functionality
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const university = urlParams.get("university") || "";
    const course = urlParams.get("course") || "";

    setFormData((prev) => ({
      ...prev,
      university,
      course,
    }));
  }, []);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, '').slice(-10))) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    
    // Simulate API call
    try {
      console.log("✅ Enquiry Submitted:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        university: "",
        course: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("❌ Error submitting enquiry:", error);
      alert("Something went wrong while submitting. Please try again.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

              {/* Column 1: Company Info */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center mb-6">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 tracking-tight">
                      UNIFOST
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                  </div>
                  
                  <p className="text-gray-200 text-base leading-relaxed text-center mb-8">
                    UNIFOST is a premier <span className="text-cyan-300 font-semibold">EdTech platform</span> helping students choose the right path through <span className="text-cyan-300 font-semibold">online education</span>, expert counseling, and demo sessions.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setShowContactInfo(!showContactInfo)}
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10">
                        {showContactInfo ? "Hide Contact" : "Contact Info"}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button
                      onClick={() => setShowHiringInfo(!showHiringInfo)}
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                        We are Hiring
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Contact Info Dropdown */}
                  <div className={`mt-6 transition-all duration-500 ${showContactInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                      <h4 className="text-cyan-300 font-semibold mb-4 text-center">Get In Touch</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 group/item">
                          <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                            <FaEnvelope className="text-cyan-400" />
                          </div>
                          <a href="mailto:info@unifostedu.com" className="hover:text-cyan-300 transition-colors flex-1">
                            info@unifostedu.com
                          </a>
                        </li>
                        <li className="flex items-center gap-3 group/item">
                          <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                            <FaPhoneAlt className="text-cyan-400" />
                          </div>
                          <span className="flex-1">+91 93547 35410</span>
                        </li>
                        <li className="flex items-center gap-3 group/item">
                          <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                            <FaMapMarkerAlt className="text-cyan-400" />
                          </div>
                          <span className="flex-1">Noida, Uttar Pradesh, India</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Hiring Info Dropdown */}
                  <div className={`mt-6 transition-all duration-500 ${showHiringInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 p-6 rounded-xl shadow-xl border border-white/20">
                      <h4 className="text-center text-blue-800 font-bold mb-6 text-lg">Join Our Team!</h4>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <p className="font-bold text-blue-800 mb-2">Freshers (0–1 year)</p>
                          <p className="text-sm text-gray-600 mb-3">Graduate with strong communication skills</p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a href="mailto:info@unifostedu.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                              <MdEmail className="text-lg" /> info@unifostedu.com
                            </a>
                            <a href="https://wa.me/917303725297" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
                              <FaWhatsapp className="text-lg" /> 7303725297
                            </a>
                          </div>
                        </div>
                        
                        <div className="border-l-4 border-emerald-500 pl-4">
                          <p className="font-bold text-emerald-800 mb-2">Senior Career Counsellor (2+ years)</p>
                          <p className="text-sm text-gray-600 mb-3">Minimum 2 years EdTech industry experience</p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a href="mailto:info@unifostedu.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                              <MdEmail className="text-lg" /> info@unifostedu.com
                            </a>
                            <a href="https://wa.me/917303725297" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
                              <FaWhatsapp className="text-lg" /> 7303725297
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Contact Form */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-cyan-400 uppercase tracking-wider text-sm font-semibold mb-2">
                      Contact With Us
                    </h3>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Don't Hesitate, Tell Us About Your 
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Requirement</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
                  </div>

                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-2xl shadow-lg">
                        <div className="text-6xl mb-4">🎉</div>
                        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                        <p className="text-green-100">Our team will connect with you soon.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="group/input">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                          />
                        </div>
                        <div className="group/input">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        />
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <option value="">Select Interested Course</option>
                          <option value="BBA">BBA - Bachelor of Business Administration</option>
                          <option value="BCA">BCA - Bachelor of Computer Applications</option>
                          <option value="B.Com">B.Com - Bachelor of Commerce</option>
                          <option value="MBA">MBA - Master of Business Administration</option>
                          <option value="MCA">MCA - Master of Computer Applications</option>
                          <option value="MA">MA - Master of Arts</option>
                          <option value="BA">BA - Bachelor of Arts</option>
                          <option value="M.Com">M.Com - Master of Commerce</option>
                        </select>
                      </div>

                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        placeholder="Preferred University (Optional)"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                      />

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your educational goals and requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl resize-none"
                      />

                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          className="group/submit relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Submit Enquiry
                            <span className="group-hover/submit:translate-x-1 transition-transform duration-300">→</span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 opacity-0 group-hover/submit:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Column 3: Links */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
                    
                    {/* Quick Links */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Quick Links
                      </h3>
                      <ul className="space-y-3">
                        {[
                          { href: "/", label: "Home" },
                          { href: "/about", label: "About" },
                          { href: "/services", label: "Services" },
                          { href: "/listofcollege", label: "Explore Colleges" },
                          { href: "/blog/blog-page", label: "Blogs" }
                        ].map((link, index) => (
                          <li key={index}>
                            <a 
                              href={link.href} 
                              className="group/link flex items-center text-cyan-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                            >
                              <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 group-hover/link:w-2 transition-all duration-300"></span>
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Courses */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        Popular Courses
                      </h3>
                      <ul className="space-y-3">
                        {[
                          { href: "/mba-online", label: "MBA", desc: "Business Administration" },
                          { href: "/bba-online", label: "BBA", desc: "Business Studies" },
                          { href: "/bca-online", label: "BCA", desc: "Computer Applications" },
                          { href: "/mca-online", label: "MCA", desc: "Advanced Computing" },
                          { href: "/ba-online", label: "BA", desc: "Liberal Arts" }
                        ].map((course, index) => (
                          <li key={index}>
                            <a 
                              href={course.href} 
                              className="group/course block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-cyan-300 font-semibold group-hover/course:text-white transition-colors">
                                  {course.label}
                                </span>
                                <span className="text-xs text-gray-400 group-hover/course:text-gray-300 transition-colors">
                                  {course.desc}
                                </span>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} UNIFOST. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Empowering education through technology
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex gap-3">
                    <a href="mailto:info@unifostedu.com" className="p-3 bg-white/10 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110 group">
                      <FaEnvelope className="text-cyan-400 group-hover:text-white transition-colors" />
                    </a>
                    <a href="https://wa.me/919354735410" className="p-3 bg-white/10 hover:bg-green-500 rounded-full transition-all duration-300 hover:scale-110 group">
                      <FaWhatsapp className="text-green-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>
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
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 z-50 group"
        >
          <FaArrowUp className="text-lg group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default Footer;