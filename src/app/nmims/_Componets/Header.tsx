'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { OpenModalState } from 'types/Modal';

export type NavLink = {
  name: string;
  href: string;
};



type HeaderProps = {
  navigationLinks: NavLink[];
  setOpenModal: Dispatch<SetStateAction<OpenModalState>>;
};


const Header = ({ navigationLinks, setOpenModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Desktop */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 py-4 items-center justify-between">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762329088/nmimslogo_blukfn.jpg"
          alt="NMIMS Logo"
          width={160}
          height={80}
        />

        <nav className="flex space-x-6">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+917042646766" className="flex gap-2 text-purple-600">
            <Phone size={18} />
            +91 7042646766
          </a>

          <button
            onClick={() => setOpenModal({ type: 'apply' })}
            className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between px-4 py-2">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762329088/nmimslogo_blukfn.jpg"
          alt="NMIMS Logo"
          width={120}
          height={60}
        />

        <div className="flex gap-2">
          <button
            onClick={() => setOpenModal({ type: 'apply' })}
            className="border border-purple-600 text-purple-600 px-3 py-1 text-xs rounded-full"
          >
            Register
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleScroll(e, link.href);
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
