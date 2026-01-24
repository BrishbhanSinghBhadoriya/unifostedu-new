'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

/* ================= TYPES ================= */

interface Program {
  name: string;
  path: string;
}

interface FooterProps {
  programs: Program[];
  setOpenModal?: (data: { type: string; source: string }) => void;
}

/* ================= COMPONENT ================= */

const Footer: React.FC<FooterProps> = ({ programs, setOpenModal }) => {
  const router = useRouter();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              NMIMS Global
            </h3>
            <p className="text-sm mb-4">
              UGC Approved & NAAC A++ Accredited Online Education
            </p>

            <div className="flex space-x-3">
              {['📘', '📷', '🐦', '💼'].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Programs */}
          <div>
            <h4 className="text-white font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {programs.map((prog, idx) => (
                <li
                  key={idx}
                  className="hover:text-purple-400 cursor-pointer"
                  onClick={() => router.push(prog.path)}
                >
                  {prog.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Courses', 'Admissions', 'FAQ', 'Contact'].map(
                (link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-purple-400 cursor-pointer"
                    onClick={() =>
                      setOpenModal?.({ type: 'apply', source: link })
                    }
                  >
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-purple-400" />
                <span>+91 7042646766</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-purple-400" />
                <span>info@unifostedu.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} NMIMS Global Online. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            UGC Entitled | NAAC A++ Accredited
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
