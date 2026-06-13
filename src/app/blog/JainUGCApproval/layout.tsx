// File: src/app/blogs/layout.tsx
import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jain University UGC Approved: Complete Guide 2026-2027',
  description: 'Jain University is UGC approved with 98% placement rate. Explore programs, fees (₹1.5-8 lakhs), campus life, and admission process for engineering, MBA, and online degrees.',
  keywords: [
    'Jain University UGC approved',
    'Jain University placements',
    'Jain University fees',
    'Best MBA colleges',
    'Online degree India',
    'NAAC accredited universities',
  ],
  openGraph: {
    title: 'Jain University UGC Approved 2026-2027: Complete Guide',
    description: 'Comprehensive guide to Jain University with placement stats, fee breakdown, and admission process.',
    type: 'article',
    url: 'https://yourdomain.com/blogs/jain-university-ugc-approved',
    images: [
      {
        url: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/jain-university.webp',
        width: 1200,
        height: 630,
        alt: 'Jain University Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jain University UGC Approved 2026-2027',
    description: 'Complete guide with placements, fees, and admission details.',
    images: ['https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/jain-university.webp'],
  },
  alternates: {
    canonical: 'https://yourdomain.com/blogs/jain-university-ugc-approved',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/blogs" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
              Blog
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm font-medium text-gray-900">Jain University</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Admission Info
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About UniFost</h3>
              <p className="text-sm leading-relaxed">
                Your trusted guide to choosing the right online university. Get accurate information about accreditation, placements, and fees.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blogs" className="hover:text-white transition">All Blogs</Link></li>
                <li><Link href="/universities" className="hover:text-white transition">Universities</Link></li>
                <li><Link href="/programs" className="hover:text-white transition">Programs</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Universities */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Popular Universities</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/jain" className="hover:text-white transition">Jain University</Link></li>
                <li><Link href="/lpu" className="hover:text-white transition">LPU Online</Link></li>
                <li><Link href="/manipal" className="hover:text-white transition">Manipal University</Link></li>
                <li><Link href="/symbiosis" className="hover:text-white transition">Symbiosis</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
              <ul className="space-y-2 text-sm">
                <li>📧 <a href="mailto:info@unifost.com" className="hover:text-white transition">info@unifost.com</a></li>
                <li>📞 <a href="tel:+91-9876543210" className="hover:text-white transition">+91-9876543210</a></li>
                <li>📍 New Delhi, India</li>
                <li className="pt-2 flex gap-3">
                  <a href="#" className="hover:text-white transition">Twitter</a>
                  <a href="#" className="hover:text-white transition">LinkedIn</a>
                  <a href="#" className="hover:text-white transition">Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">
                © 2024-2026 UniFost. All rights reserved. | Helping students find the right education path.
              </p>
              <div className="flex gap-4 text-sm">
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <span className="text-gray-600">•</span>
                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                <span className="text-gray-600">•</span>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}