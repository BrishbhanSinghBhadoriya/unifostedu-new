import { Inter, Baskervville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import OrganizationSchema from "@/components/OrganizationSchema";
import Canonical from "@/components/Canonical";
import { Toaster as SonnerToaster } from "sonner";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });
const baskervville = Baskervville({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskervville"
});

export const metadata = {
  metadataBase: new URL('https://unifostedu.com'),
  title: {
    default: "Unifost | UGC Approved Online University Degrees in India",
    template: "%s | Unifost"
  },
  description: "Unifostedu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career.",
  applicationName: "Unifost",
  appleMobileWebAppTitle: "Unifost",
  keywords: [
    "Unifost",
    "UnifostEdu",
    "UGC online degrees",
    "Unifost Education Platform",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/uni.webp.48x48.png", sizes: "48x48", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Unifost | UGC Approved Online University Degrees in India",
    description: "Unifostedu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career.",
    url: "https://unifostedu.com",
    siteName: "Unifost",
    images: [
      {
        url: "/uni.webp",
        width: 1200,
        height: 630,
        alt: "Unifost - Online University Degrees",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unifost | UGC Approved Online University Degrees in India",
    description: "Unifostedu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career.",
    images: ["/uni.webp"],
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
        <meta name="apple-mobile-web-app-title" content="Unifost" />
        <meta name="application-name" content="Unifost" />
        
        {/* Additional meta tags for better search results */}
        <meta name="author" content="Unifost" />
        <meta name="publisher" content="Unifost" />
        <meta name="copyright" content="Unifost" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Unifost | UGC Approved Online University Degrees in India" />
        <meta property="og:description" content="Unifostedu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career." />
        <meta property="og:url" content="https://unifostedu.com" />
        <meta property="og:site_name" content="Unifost" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://unifostedu.com/uni.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Unifost - Online University Degrees" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unifost | UGC Approved Online University Degrees in India" />
        <meta name="twitter:description" content="Unifostedu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career." />
        <meta name="twitter:image" content="https://unifostedu.com/uni.webp" />

        {/* SERP favicon sizes */}
        <link rel="icon" type="image/png" sizes="48x48" href="/uni.webp.48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <meta name="twitter:image:alt" content="Unifost - Online University Degrees" />

        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        
        {/* Bookmark logo for social sharing and bookmarks */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/uni.webp" />
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
              'name': 'Unifost',
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
              alternateName: 'Unifost Education',
              url: 'https://unifostedu.com',
              description: 'India\'s leading EdTech platform providing UGC-approved online university degrees and expert career counseling services.',
              potentialAction: {
                '@type': 'SearchAction',
                target: (process.env.NEXT_PUBLIC_SITE_URL || 'https://unifostedu.com') + '/search?query={search_term_string}',
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
        {/* Organization schema with logo for brand recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Unifost',
              alternateName: ['UnifostEdu', 'UNIFOST', 'UniFost'],
              url: 'https://unifostedu.com',
              logo: 'https://unifostedu.com/uni.webp.48x48.webp',
              sameAs: [
                'https://www.linkedin.com/company/unifost',
                'https://www.facebook.com/unifost',
                'https://www.instagram.com/unifost'
              ]
            })
          }}
        />
        {/* SiteNavigationElement to help Google understand primary links */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              name: [
                'Courses',
                'Course Search',
                'Compare Universities',
                'Universities',
                'Services',
                'About'
              ],
              url: [
                'https://unifostedu.com/courses',
                'https://unifostedu.com/search',
                'https://unifostedu.com/compare',
                'https://unifostedu.com/listofcollege',
                'https://unifostedu.com/services',
                'https://unifostedu.com/about'
              ]
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17612528759" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());

            gtag('config', 'AW-17612528759');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${baskervville.variable}`}>
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
