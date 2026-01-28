'use client';

import { useRouter } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { OpenModalState } from '../../../../types/Modal'
const Footer = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
  const router = useRouter();

  const quickLinks = [
    { label: "MBA Program", href: "/amity/mba-online" },
    { label: "MCA Program", href: "/amity/mca-online" },
    { label: "MCom Program", href: "/amity/mcom-online" },
    { label: "MSc Program", href: "/amity/msc-online" },
    { label: "MA Program", href: "/amity/ma-online" },
    { label: "BBA Program", href: "/amity/bba-online" },
    { label: "BCA Program", href: "/amity/bca-online" },
    { label: "Home", href: "/amity" },
  ];

  const resourceLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Career After MBA", href: "/blog/CareerAfterOnlineMBA" },
    { label: "Book Demo", href: "/bookdemo" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faqs" },
  ];

  const programLinks = [
    { keyword: "amity university online mba" },
    { keyword: "amity university online mca" },
    { keyword: "amity online mba fees" },
    { keyword: "amity university online bca" },
    { keyword: "amity university online bba" },
    { keyword: "amity online scholarship" },
    { keyword: "amity online admission 2025" },
    { keyword: "amity online placements" },
    { keyword: "compare online universities" },
    { keyword: "online MBA India" },
    { keyword: "best online mba" },
    { keyword: "online mca university" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 relative z-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo & Contact */}
          <div>
            <div className="w-[120px] h-10 relative mb-4">
              <Image
                src="/amity.svg"
                alt="Amity University Online"
                fill
                className="bg-white object-contain"
              />
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Transforming lives through quality education and innovation.
              UGC-approved online degree programs from Amity University.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+917042646766" className="hover:text-yellow-400">
                  +91 7042646766
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:info@unifostedu.com"
                  className="hover:text-yellow-400 break-all"
                >
                  info@unifostedu.com
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setOpenModal({ type: 'apply' });
                      setTimeout(() => router.push(item.href), 300);
                    }}
                    className="hover:text-yellow-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {resourceLinks.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setOpenModal({ type: 'apply' });
                      setTimeout(() => router.push(item.href), 300);
                    }}
                    className="hover:text-yellow-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Keywords */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <h4 className="text-lg font-semibold text-center mb-4">
            Popular Programs & Specializations
          </h4>

          <div className="flex flex-wrap justify-center gap-2">
            {programLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => setOpenModal({ type: 'apply' })}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-yellow-400 hover:text-black transition"
              >
                {item.keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          <p className="mb-2">
            &copy; 2025 Amity University Online. All rights reserved.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link href="/about" className="hover:text-yellow-400">About Us</Link>
            <Link href="/faqs" className="hover:text-yellow-400">FAQs</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
