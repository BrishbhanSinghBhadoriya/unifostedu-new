import { Mail, MapPin, Phone } from 'lucide-react/dist/cjs/lucide-react';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Quick Links with proper internal links - VERIFIED ROUTES
  const quickLinks = [
    { label: "MBA Program", href: "/courses/mba" },
    { label: "BBA Program", href: "/courses/bba" },
    { label: "MCA Program", href: "/courses/mca" },
    { label: "BCA Program", href: "/courses/bca" },
    { label: "All Courses", href: "/coursesearch" },
    { label: "Home", href: "/" },
  ];

  // Explore Universities Links - VERIFIED ROUTES
  const universityLinks = [
    { label: "Compare Universities", href: "/compare" },
    { label: "Manipal Online", href: "/manipal" },
    { label: "LPU Online", href: "/lpu-online" },
    { label: "Jain University Online", href: "/jain" },
    { label: "NMIMS Online", href: "/nmims" },
    { label: "DY Patil Online", href: "/dypatil" },
  ];

  // Resources Links - VERIFIED ROUTES
  const resourceLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Career After MBA", href: "/blog/CareerAfterOnlineMBA" },
    { label: "Book Demo", href: "/bookdemo" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faqs" },
  ];

  // Program specific links for keywords - VERIFIED ROUTES
  const programLinks = [
    { keyword: "amity university online mba", href: "/courses/mba" },
    { keyword: "amity online mba fees", href: "/Amity-University-Online#FeeStructure" },
    { keyword: "amity university online bca", href: "/courses/bca" },
    { keyword: "amity university online bba", href: "/courses/bba" },
    { keyword: "amity university online mca", href: "/courses/mca" },
    { keyword: "amity online scholarship", href: "/Amity-University-Online#Scholarship" },
    { keyword: "amity online admission 2025", href: "/Amity-University-Online#AdmissionProcedure" },
    { keyword: "amity online placements", href: "/Amity-University-Online#PlacementRecord" },
    { keyword: "compare online universities", href: "/compare" },
    { keyword: "online MBA India", href: "/courses/mba" },
    { keyword: "best online mba", href: "/Best-online-MBA-for-working-professionals-India-2025" },
    { keyword: "online mca university", href: "/best-online-mca-university-in-india" },
  ];

  return (
    <div>
        <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-12">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
                  {/* Logo & Description */}
                  <div>
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <div className="w-20 sm:w-[100px] md:w-[122px] h-6 sm:h-8 md:h-10 relative">
                        <Image
                          src="/amity.svg"
                          alt="Amity University Online"
                          fill
                          className="bg-white object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                      Transforming lives through quality education and innovation. UGC-approved online degrees from Amity University.
                    </p>
                    <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                      Visit UNIFOST Home →
                    </Link>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
                      Programs
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                      {quickLinks.map((item, i) => (
                        <li key={i}>
                          <Link 
                            href={item.href}
                            className="hover:text-yellow-400 transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore Universities */}
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
                      Explore Universities
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                      {universityLinks.map((item, i) => (
                        <li key={i}>
                          <Link 
                            href={item.href}
                            className="hover:text-yellow-400 transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources & Contact */}
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
                      Resources
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400 mb-4">
                      {resourceLinks.map((item, i) => (
                        <li key={i}>
                          <Link 
                            href={item.href}
                            className="hover:text-yellow-400 transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">
                      Contact
                    </h4>
                    <div className="space-y-1.5 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                        <a href="tel:+917042646766" className="hover:text-yellow-400">+91 7042646766</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                        <a href="mailto:info@unifostedu.com" className="hover:text-yellow-400 break-all">info@unifostedu.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keywords Section with Internal Links */}
                <div className="border-t border-gray-700 pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-white text-center">
                    Popular Programs & Specializations
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                    {programLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="bg-gray-800 text-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs hover:bg-yellow-400 hover:text-black transition-colors"
                        title={item.keyword}
                      >
                        {item.keyword.length > 28
                          ? `${item.keyword.substring(0, 28)}...`
                          : item.keyword}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-800 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-400">
                  <p className="mb-2">&copy; 2025 UNIFOST. All rights reserved.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
                    <Link href="/about" className="hover:text-yellow-400">About Us</Link>
                    <Link href="/faqs" className="hover:text-yellow-400">FAQs</Link>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer