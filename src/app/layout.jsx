import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import OrganizationSchema from "@/components/OrganizationSchema";
import { Toaster as SonnerToaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "UNIFOST | Because The Right University Matters",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#001e3c" />
        <meta name="msapplication-TileColor" content="#001e3c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="UNIFOST" />
        <meta name="application-name" content="UNIFOST" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Organization Schema */}
        <OrganizationSchema />
        
        {/* Structured Data - WebSite */}
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
        <SonnerToaster position="top-center" richColors expand={false} duration={3500} />
      </body>
    </html>
  );
}
