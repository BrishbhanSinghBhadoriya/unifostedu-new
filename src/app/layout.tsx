import { Inter, Baskervville } from "next/font/google";
import { ChildrenProps } from "types/ChildrenProps";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBoxWrapper from '@/components/ChatBoxWrapper';
import OrganizationSchema from "@/components/OrganizationSchema";
import { Toaster as SonnerToaster } from "sonner";
import Script from 'next/script';
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({ 
  subsets: ["latin"], 
  display: 'swap',
  preload: true,
  adjustFontFallback: true 
});
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskervville",
  display: 'swap',
  preload: true,
  adjustFontFallback: true
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
    template: "%s"
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
    google: "google-site-verification=YOUR_ACTUAL_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <OrganizationSchema />

        {/* Educational Organization Schema */}
       {/* Google Ads Global Site Tag */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-17800709438"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17800709438', { 'page_path': window.location.pathname });
`}
</Script>



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

        
      
      </head>
      <body
        className={`${inter.className} ${baskervville.variable} overflow-x-hidden`}
      >
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <LenisProvider>
          <Header />
          <main id="main-content">{children}</main>
          <ChatBoxWrapper />
          <Footer />
        </LenisProvider>
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
