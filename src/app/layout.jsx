import { Inter, Baskervville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBoxWrapper from '@/components/ChatBoxWrapper';
import OrganizationSchema from "@/components/OrganizationSchema";
import Canonical from "@/components/Canonical";
import { Toaster as SonnerToaster } from "sonner";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskervville",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#001e3c",
};

export const metadata = {
  title: {
    default: "UNIFOST | Because The Right University Matters",
    template: "%s | UNIFOST"
  },
  description: "Compare and choose the best online degree programs from India's top universities. Get expert counseling, compare courses, fees, and eligibility for MBA, BBA, MCA, BCA, and more. UGC-approved online degrees with placement assistance.",
  keywords: [
    "online degree programs",
    "online MBA",
    "online BBA",
    "online MCA",
    "online BCA",
    "UGC approved universities",
    "compare universities",
    "online education India",
    "distance learning",
    "online courses",
    "university counseling"
  ],
  authors: [{ name: "UNIFOST" }],
  creator: "UNIFOST",
  publisher: "UNIFOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unifostedu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://unifostedu.com',
    siteName: 'UNIFOST',
    title: 'UNIFOST | Compare Online Universities & Courses',
    description: 'Compare and choose the best online degree programs from India\'s top universities. Get expert counseling for MBA, BBA, MCA, BCA and more.',
    images: [
      {
        url: '/unilogo.png',
        width: 1200,
        height: 630,
        alt: 'UNIFOST - Online University Comparison Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIFOST | Compare Online Universities & Courses',
    description: 'Compare and choose the best online degree programs from India\'s top universities.',
    images: ['/unilogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.ico" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  verification: {
    google: "verification_token", // Placeholder, user should provide if they have one
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Organization Schema */}
        <OrganizationSchema />

        {/* Educational Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Unifost",
              url: "https://unifostedu.com",
              description:
                "Online university degrees and career counseling platform in India",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
              },
              offers: {
                "@type": "Offer",
                name: "Online Degree Programs",
                description:
                  "UGC-approved online university degrees with career counseling",
              },
              sameAs: [
                "https://www.linkedin.com/company/unifost",
                "https://www.facebook.com/unifost",
                "https://www.instagram.com/unifost",
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Unifost",
              alternateName: "Unifost Education",
              url: "https://unifostedu.com",
              description:
                "India's leading EdTech platform providing UGC-approved online university degrees and expert career counseling services.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://unifostedu.com/search?query={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        
        {/* Google tag (gtag.js) - load lazily to reduce main-thread work */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17612528759" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());

            gtag('config', 'AW-17612528759');
          `}
        </Script>
      </head>
      <body
  className={`${inter.className} ${baskervville.variable} overflow-x-hidden`}
>
  <Canonical />
  <Header />
  <main>{children}</main>
  <Footer />
  <ChatBoxWrapper />
  <SonnerToaster
    position="top-center"
    richColors
    expand={false}
    duration={3500}
  />
</body>
    </html>
  );
}
