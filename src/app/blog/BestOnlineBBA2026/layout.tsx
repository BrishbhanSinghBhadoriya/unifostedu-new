// File: app/(routes)/blog/layout.tsx
// COMPLETE BLOG LAYOUT WITH ALL SEO & CONFIGURATION

import React from "react";
import { Metadata, Viewport } from "next";

/* ═══════════════════════════════════════════════════════════════════════════════
   METADATA CONFIGURATION
═══════════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {
  title: {
    template: "%s | UniFost Blog",
    default: "UniFost Blog - Online Education Guide",
  },
  description:
    "Expert guides on online education in India. Compare UGC-approved universities, fees, placements & career paths for BBA, MBA, and other programs.",
  keywords: [
    "online education blog",
    "university comparison",
    "BBA guide",
    "MBA guide",
    "online learning India",
    "UGC approved universities",
    "online degree programs",
  ],
  authors: [{ name: "UniFost", url: "https://unifostedu.com" }],
  creator: "UniFost",
  publisher: "UniFost",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://unifostedu.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://unifostedu.com/blog",
    siteName: "UniFost",
    title: "UniFost Blog - Online University Guide",
    description: "Expert guides on online BBA, MBA and university selection in India",
    images: [
      {
        url: "https://unifostedu.com/og-image-blog.png",
        width: 1200,
        height: 630,
        alt: "UniFost Blog",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UniFost Blog - Online Education Guide",
    description: "Expert guides on online universities and education in India",
    creator: "@UniFost",
    site: "@UniFost",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  themeColor: "#075985",
};

/* ═══════════════════════════════════════════════════════════════════════════════
   BLOG LAYOUT COMPONENT
═══════════════════════════════════════════════════════════════════════════════ */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Optional: Blog Header Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-900">📚 UniFost</span>
            <span className="text-sm text-gray-600">Blog</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-800 font-medium text-sm transition"
            >
              Home
            </a>
            <a
              href="/university-list"
              className="text-gray-700 hover:text-blue-800 font-medium text-sm transition"
            >
              Universities
            </a>
            <a
              href="/bookdemo"
              className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Free Counseling
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-80px)]">{children}</div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white mt-20 border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">About UniFost</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                UniFost helps students find and compare the best online universities in India with expert
                counseling and placement support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-blue-200 hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-blue-200 hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/university-list" className="text-blue-200 hover:text-white transition">
                    Universities
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blue-200 hover:text-white transition">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faq" className="text-blue-200 hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-blue-200 hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-blue-200 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-blue-200 hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-blue-100 text-sm mb-3">
                Get updates on new universities and education news.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-blue-200 text-sm">
              &copy; 2026 UniFost. All rights reserved. | Made with ❤️ for students
            </div>
            <div className="flex gap-6">
              <a href="#" title="Twitter" className="text-blue-200 hover:text-white transition">
                𝕏
              </a>
              <a href="#" title="LinkedIn" className="text-blue-200 hover:text-white transition">
                in
              </a>
              <a href="#" title="Facebook" className="text-blue-200 hover:text-white transition">
                f
              </a>
              <a href="#" title="Instagram" className="text-blue-200 hover:text-white transition">
                📷
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Optional: Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/bookdemo"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          title="Book Free Counseling"
        >
          💬 Free Counseling
        </a>
      </div>

      {/* Schema Markup - Organization */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UniFost",
            url: "https://unifostedu.com",
            logo: "https://unifostedu.com/logo.png",
            description: "Online University Guide & Expert Counseling",
            sameAs: [
              "https://twitter.com/UniFost",
              "https://linkedin.com/company/unifost",
              "https://facebook.com/unifost",
              "https://instagram.com/unifost",
            ],
            contact: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              telephone: "+91-XXXXXXXXX",
              email: "contact@unifostedu.com",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "India",
            },
          }),
        }}
      />

      {/* Schema Markup - WebSite (for search box) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://unifostedu.com",
            name: "UniFost",
            description: "Compare Online Universities in India",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://unifostedu.com/search?q={search_term_string}",
              },
              query_input: "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        suppressHydrationWarning
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
          `,
        }}
        suppressHydrationWarning
      ></script>

      {/* Meta Pixel (Facebook) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        }}
        suppressHydrationWarning
      ></script>
    </div>
  );
}