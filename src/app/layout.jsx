import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "UNIFOST| Because The Right University Matters",
  description: "Unifost",
  keywords: [
    "Online University Degree",
    "Career Counseling Online",
    "Virtual Learning Guidance",
    "Best Career Planning Services",
    "EdTech Solutions India",
    "Online MBA India",
    "Online BBA",
    "Online MCA",
    "UGC-DEB Accredited Universities",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: "/uni.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/uni.jpg?v=2" type="image/jpeg" />
        <link rel="shortcut icon" href="/uni.jpg?v=2" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/uni.jpg?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Unifost',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unifost.com',
              logo: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unifost.com') + '/uni.jpg',
              sameAs: [],
              contactPoint: [{
                '@type': 'ContactPoint',
                contactType: 'customer support',
                availableLanguage: ['en', 'hi']
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Unifost',
              url: 'https://www.unifost.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unifost.com') + '/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Online Career Counseling & Virtual Learning Guidance',
              provider: {
                '@type': 'Organization',
                name: 'Unifost'
              },
              areaServed: {
                '@type': 'Country',
                name: 'India'
              },
              serviceType: 'Career Counseling Online, Home Demo Counseling, Career Planning',
              audience: {
                '@type': 'Audience',
                audienceType: ['Students', 'Working Professionals', 'Parents']
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              padding: '12px 16px',
              borderRadius: '8px',
              maxWidth: '90vw',
              wordBreak: 'break-word'
            },
            success: {
              style: {
                background: '#10b981',
                color: '#fff',
              },
            },
            error: {
              style: {
                background: '#ef4444',
                color: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
