import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import OrganizationSchema from "@/components/OrganizationSchema";
import Canonical from "@/components/Canonical";
import { Toaster as SonnerToaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://unifostedu.com'),
  title: "UNIFOST - Online University Degrees & Career Counseling",
  description: "UniFost is a premier EdTech platform helping students choose the right path through online education, expert counseling, and demo sessions.",
  keywords: [
    "Online University Degree",
    "Career Counseling Online",
    "Virtual Learning Guidance",
    "Best Career Planning Services",
    "EdTech Solutions India",
    "Online MBA India",
    "Online BBA",
    "Online MCA",
    "Online MBA Colleges in India",
    "Online BBA Colleges in India",
    "Online MCA Colleges in India",
    "Online BA Colleges in India",
    "Online BCom Colleges in India",
    "Online BSc Colleges in India",
    "Online MSc Colleges in India",
    "Online MA Colleges in India",
    "Online MPhil Colleges in India",
    "Online PhD Colleges in India",
    "Online Diploma Colleges in India",
    "Online Certificate Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "UGC-DEB Accredited Universities",
    "UGC-DEB Accredited Universities",
    "Career Counseling Online",
    "Virtual Learning Guidance",
    "Best Career Planning Services",
    "EdTech Solutions India",
    "Online MBA India",
    "Online BBA",
    "Online MCA",
    "Online BBA Colleges in India",
    "Online MCA Colleges in India",
    "Online BA Colleges in India",
    "Online BCom Colleges in India",
    "Online BSc Colleges in India",
    "Online MSc Colleges in India",
    "Online MA Colleges in India",
    "Online MPhil Colleges in India",
    "Online PhD Colleges in India",
    "Online Diploma Colleges in India",
    "Online Certificate Colleges in India",
    "Online PG Diploma Colleges in India",
    "Online PG Certificate Colleges in India",
    "Online PG Degree Colleges in India",
    "Online Amity University",
    "Online Lovely Professional University",
    "Online Manipal University",
    "Online NMIMS University",
    "Online Dr. D Y Patil University",
    "Online Jain University",
    "Online Sharda University",
    "Online Shoolini University",
    "Online UPES University",
    "Online Chandigarh University",
    "Online OP Jindal University",
    "Online Amity",
    "Online Manipal",
    "Online LPU",
    "Online NMIMS",
    "Online D Y Patil",
    "Online Jain",
    "Online Sharda",
    "Online Shoolini",
    "Online UPES",
    "Online Chandigarh",
    "Online OP Jindal",
    "Online JMI"
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
    icon: "/images/uni.webp",
    type: "image/webp",
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
        <meta property="og:site_name" content="UNIFOST" />
        <meta property="og:title" content="UNIFOST - Online University Degrees & Career Counseling" />
        <meta property="og:description" content="UniFost is a premier EdTech platform helping students choose the right path through online education, expert counseling, and demo sessions." />
        <meta property="og:url" content="https://unifostedu.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unifostedu.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UNIFOST - Online University Degrees & Career Counseling" />
        <meta name="twitter:description" content="UniFost is a premier EdTech platform helping students choose the right path through online education, expert counseling, and demo sessions." />
        <meta name="twitter:image" content="https://unifostedu.com/logo.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/webp" href="/images/uni.webp" sizes="any" />
        <link rel="icon" type="image/webp" href="/images/uni.webp" />
        <link rel="shortcut icon" type="image/webp" href="/images/uni.webp" />
        <link rel="apple-touch-icon" type="image/webp" href="/images/uni.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/uni.webp" />
        <link rel="icon" type="image/webp" sizes="32x32" href="/images/uni.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="/images/uni.webp" />
        
        {/* Bookmark logo for social sharing and bookmarks */}
        <link rel="icon" type="image/webp" href="/images/uni.webp" />
        
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/bookmarklogo.png" />
        <meta name="theme-color" content="#001e3c" />
        
        {/* Organization Schema */}
        <OrganizationSchema />
        
        {/* Educational Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              'name': 'UNIFOST',
              'url': 'https://unifostedu.com',
              'description': 'Online university degrees and career counseling platform in India',
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'IN',
                'addressLocality': 'Noida',
                'addressRegion': 'Uttar Pradesh'
              },
              'offers': {
                '@type': 'Offer',
                'name': 'Online Degree Programs',
                'description': 'UGC-approved online university degrees with career counseling'
              },
              'sameAs': [
                'https://www.linkedin.com/company/unifost',
                'https://www.facebook.com/unifost',
                'https://www.instagram.com/unifost'
              ]
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Unifost',
              url: 'https://unifostedu.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: (process.env.NEXT_PUBLIC_SITE_URL || 'https://unifostedu.com') + '/search?q={search_term_string}',
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
        <Canonical />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
        <SonnerToaster position="top-center" richColors expand={false} duration={3500} />
      </body>
    </html>
  );
}