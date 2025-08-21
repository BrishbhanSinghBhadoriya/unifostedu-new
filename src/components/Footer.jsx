'use client';
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaArrowUp, FaUser, FaGraduationCap, FaUniversity } from "react-icons/fa";
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
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
    setNewsletterDone(true);
    setTimeout(() => setNewsletterDone(false), 4000);
    setNewsletterEmail("");
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
      {/* Decorative wave */}
      <div className="relative w-full bg-transparent">
        <svg className="w-full h-12 text-blue-900" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C160 80 320 0 480 0C640 0 800 80 960 80C1120 80 1280 0 1440 40V80H0V40Z" fill="currentColor" opacity="0.25" />
          <path d="M0 50C160 90 320 10 480 10C640 10 800 90 960 90C1120 90 1280 10 1440 50" stroke="currentColor" strokeOpacity="0.2"/>
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
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3 tracking-tight">
                      UNIFOST
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                  </div>
                  
                  <p className="text-gray-200 text-sm leading-relaxed text-center mb-6">
                    UNIFOST is a premier <span className="text-cyan-300 font-medium">EdTech platform</span> helping students choose the right path through <span className="text-cyan-300 font-medium">online education</span>, expert counseling, and demo sessions.
                  </p>

                  <div className="flex flex-col gap-3 justify-center">
                    <button
                      onClick={() => setShowContactInfo(!showContactInfo)}
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="relative z-10">
                        {showContactInfo ? "Hide Contact" : "Contact Info"}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button
                      onClick={() => setShowHiringInfo(!showHiringInfo)}
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                        We are Hiring
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Contact Info Dropdown */}
                  <div className={`mt-5 transition-all duration-500 ${showContactInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                      <h4 className="text-cyan-300 font-semibold mb-3 text-center text-sm">Get In Touch</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 group/item">
                          <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                            <FaEnvelope className="text-cyan-400 text-sm" />
                          </div>
                          <a href="mailto:info@unifostedu.com" className="hover:text-cyan-300 transition-colors flex-1 text-sm">
                            info@unifostedu.com
                          </a>
                        </li>
                        <li className="flex items-center gap-3 group/item">
                          <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                            <FaPhoneAlt className="text-cyan-400 text-sm" />
                          </div>
                          <span className="flex-1 text-sm">+91 93547 35410</span>
                        </li>
                        <li className="flex items-center gap-3 group/item">
                          <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                            <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                          </div>
                          <span className="flex-1 text-sm">Noida, Uttar Pradesh, India</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Hiring Info Dropdown */}
                  <div className={`mt-5 transition-all duration-500 ${showHiringInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 p-5 rounded-xl shadow-lg border border-white/20">
                      <h4 className="text-center text-blue-800 font-bold mb-4 text-sm">Join Our Team!</h4>
                      
                      <div className="space-y-4">
                        <div className="border-l-3 border-blue-500 pl-3">
                          <p className="font-bold text-blue-800 mb-1 text-xs">Freshers (0–1 year)</p>
                          <p className="text-xs text-gray-600 mb-2">Graduate with strong communication skills</p>
                          <div className="flex flex-col gap-1">
                            <a href="mailto:info@unifostedu.com" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-xs">
                              <MdEmail className="text-sm" /> info@unifostedu.com
                            </a>
                            <a href="https://wa.me/917303725297" className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors text-xs">
                              <FaWhatsapp className="text-sm" /> 7303725297
                            </a>
                          </div>
                        </div>
                        
                        <div className="border-l-3 border-emerald-500 pl-3">
                          <p className="font-bold text-emerald-800 mb-1 text-xs">Senior Career Counsellor (2+ years)</p>
                          <p className="text-xs text-gray-600 mb-2">Minimum 2 years EdTech industry experience</p>
                          <div className="flex flex-col gap-1">
                            <a href="mailto:info@unifostedu.com" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-xs">
                              <MdEmail className="text-sm" /> info@unifostedu.com
                            </a>
                            <a href="https://wa.me/917303725297" className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors text-xs">
                              <FaWhatsapp className="text-sm" /> 7303725297
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Contact Form */}
              <div className="lg:col-span-6 group">
                <div className="h-full bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-cyan-400 uppercase tracking-wider text-xs font-semibold mb-2">
                      Contact With Us
                    </h3>
                    <h2 className="text-xl font-bold text-white leading-tight">
                      Don't Hesitate, Tell Us About Your 
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Requirement</span>
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-3 rounded-full"></div>
                  </div>

                  {submitted ? (
                    <div className="text-center py-6">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-5 rounded-2xl shadow-lg">
                        <div className="text-5xl mb-3">🎉</div>
                        <h3 className="text-lg font-bold mb-2">Thank You!</h3>
                        <p className="text-green-100 text-sm">Our team will connect with you soon.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="group/input relative">
                          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                          />
                        </div>
                        <div className="group/input">
                          <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                          />
                        </div>
                        <div className="relative">
                          <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-2.5 appearance-none rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
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
                      </div>

                     <div className="relative">
  <FaUniversity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

  <select
    name="university"
    value={formData.university}
    onChange={handleChange}
    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 
               placeholder-gray-500 focus:outline-none focus:ring-2 
               focus:ring-cyan-400 focus:bg-white transition-all duration-300 
               shadow-md hover:shadow-lg text-sm"
  >
    <option value="">Preferred University (Optional)</option>
    
     <option value="Amity University Online">Amity University Online</option>
    <option value="Online Manipal University">Online Manipal University</option>
    <option value="Lovely Professional University">Lovely Professional University</option>
    <option value="Chandigarh University Online">Chandigarh University Online</option>
    <option value="JAIN University">JAIN University</option>
    <option value="DY PATIL">Dr. D Y Patil Pune</option>
    <option value="OP Jindal University">OP Jindal University</option>
    <option value="Shoolini University Online">Shoolini University Online"</option>
    <option value="Amrita AHEAD’s Online">Amrita Ahead’s Online</option>
    <option value="D. Y. Patil University Online Navi Mumbai">D. Y. Patil University ONLINE Navi Mumbai</option>
    <option value="Swami Vivekanand Subharti University">Swami Vivekanand Subharti University</option>
    <option value="Vivekananda Global University Online">Vivekananda Global University Online</option>
    <option value="Kurkshetra University">Kurkshetra University</option>
    <option value="Andhra University">Andhra University</option>
    <option value="International Institute of Information Technology Bangalore">International Institute of Information Technology Bangalore</option>
    <option value="Indian Institute of Management Kozhikade">Indian Institute of Management Kozhikade</option>
    <option value="Mundra Institute of Communications Ahmedabad">Mundra Institute of Communications Ahmedabad</option>
    <option value="Indian Institute of Technology Delhi">Indian Institute of Technology Delhi</option>
    <option value="Institute of Management Technology Ghaziabad">Institute of Management Technology Ghaziabad</option>
    <option value="Liverpool John Moores University">Liverpool John Moores University</option>
    <option value="Indian Institute of Management Lucknow">Indian Institute of Management Lucknow</option>
    <option value="Indian Institute of Management Calcutta">Indian Institute of Management Calcutta</option>
    <option value="Indian Institute of Technology Guwahati">Indian Institute of Technology Guwahati</option>
    <option value="Indian Institute of Technology Roorkee">Indian Institute of Technology Roorkee</option>
    <option value="Indian Institute of Management Raipur">Indian Institute of Management Raipur</option>
    <option value="Indian Institute of Management Udaipur">Indian Institute of Management Udaipur</option>
    <option value="Indian Institute of Management Ahmedabad">Indian Institute of Management Ahmedabad</option>
    <option value="Indian Institute of Management Nagpur">Indian Institute of Management Nagpur</option>
    <option value="Golden Gate University">Golden Gate University</option>
    <option value="Deakin University">Deakin University</option>
    <option value="Narsee Monjee Institutite of Management (NMIMS CDOE)">Narsee Monjee Institutite of Management (NMIMS CDOE)</option>
    <option value="Rushford Business School">Rushford Business School</option>
    <option value="Edgewood College">Edgewood College</option>
    <option value="Ecornell University">Ecornell University</option>
    <option value="UPES ONLINE">UPES ONLINE</option>
    <option value="Sharda University Online">Sharda University Online</option>
  </select>
</div>


                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your educational goals and requirements..."
                        className="w-full px-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg resize-none text-sm"
                      />

                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          className="group/submit relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform text-sm"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
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

              {/* Column 3: Links + Newsletter */}
              <div className="lg:col-span-3 group">
                <div className="h-full bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-6">
                    
                    {/* Quick Links */}
                    <div className="col-span-1">
                      <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        Quick Links
                      </h3>
                      <ul className="space-y-2">
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
                              className="group/link flex items-center text-cyan-300 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm"
                            >
                              <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover/link:w-2 transition-all duration-300"></span>
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
{/* Popular Courses */}
<div className="col-span-1">
  <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
    Popular Courses
  </h3>

  <div className="grid grid-cols-2 gap-3">
    {[
      { href: "/mba-online", label: "MBA" },
      { href: "/bba-online", label: "BBA" },
      { href: "/mca-online", label: "MCA" },
      { href: "/bca-online", label: "BCA" },
      { href: "/mcom-online", label: "M.Com" },
      { href: "/bcom-online", label: "B.Com" },
      { href: "/ma-online", label: "MA" },
      { href: "/ba-online", label: "BA" },
      { href: "/bajmc-online", label: "BAJMC" },
      { href: "/majmc-online", label: "MAJMC" },
    ].map((course, index) => (
      <a
        key={index}
        href={course.href}
        className="group/course block p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-cyan-300 font-medium group-hover/course:text-white transition-colors text-sm">
          {course.label}
        </span>
      </a>
    ))}
  </div>
</div>

                  </div>

                  {/* Newsletter */}
                 
                        
                  </div>
                </div>
              </div>
            

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Universities", value: "25+", color: "from-cyan-500 to-blue-500" },
                { label: "Programs", value: "80+", color: "from-indigo-500 to-purple-500" },
                { label: "Students Guided", value: "10K+", color: "from-emerald-500 to-teal-500" },
              ].map((item, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl p-4 border border-white/10 bg-white/5">
                  <div className={`absolute -inset-8 blur-2xl opacity-20 bg-gradient-to-r ${item.color}`} />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-extrabold text-white drop-shadow-sm">{item.value}</p>
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
           <div className="mt-12 pt-6 border-t border-gray-300">
  <div className="flex flex-col justify-center items-center gap-3 text-center">
    <div>
      <p className="text-black text-xs">
        © {new Date().getFullYear()} UNIFOST. All rights reserved.
      </p>
      <p className="text-black text-xs mt-1">
        Empowering education through technology
      </p>
    </div>
  

                
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <a href="mailto:info@unifostedu.com" className="relative p-2.5 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group">
                      <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <FaEnvelope className="relative text-cyan-400 group-hover:text-white transition-colors text-sm" />
                    </a>
                    <a href="https://wa.me/919354735410" className="relative p-2.5 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group">
                      <span className="absolute inset-0 rounded-full bg-green-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <FaWhatsapp className="relative text-green-400 group-hover:text-white transition-colors text-sm" />
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
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 z-50 group"
        >
          <FaArrowUp className="text-base group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default Footer;