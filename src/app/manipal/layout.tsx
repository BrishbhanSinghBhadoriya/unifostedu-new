import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Manipal University Jaipur Online",
  description: "Explore flexible, career-focused UG and PG programs from Manipal University Online, a NAAC A+ accredited institution for quality learning.",
 
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/manipal",
  },
  keywords: [
    "online manipal university mba",
    "online manipal university bca",
    "online manipal university bba",
    "online manipal university mca",
    "online manipal university m.com",
    "online manipal university ma",
    "online manipal university naac a++ university",
    "online manipal university online degree programs india",
    "online manipal university online courses",
    "online manipal university online courses india",
    "online manipal university online courses in india",
    "manipal university online courses",
    "manipal university online degrees ugc approved",
    "online manipal admission 2025",
    "online manipal university apply now",
    "online manipal last date to apply",
    "online manipal eligibility criteria mba",
    "online manipal university fees structure",
    "online manipal scholarship details",
    "online manipal university jaipur",
    "online bca manipal university jaipur",
    "online bba manipal university jaipur fees",
    "online manipal vs other online universities",
    "is online manipal degree valid for government jobs",
    "online manipal placement assistance",
    "best online mba in india manipal university",
    "best online bba in india manipal university",
    "best online mca in india manipal university",
    "best online bca in india manipal university",
    "best online m.com in india manipal university",
    "best online ma in india manipal university",
    "best online courses in india manipal university",
    "best online courses in india manipal university",
    

  ],

   icons: [
    { url: "images/logos/manipal/favicon.ico" },
    { url: "images/logos/manipal/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "images/logos/manipal/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "images/logos/manipal/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "images/logos/manipal/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "images/logos/manipal/apple-touch-icon.png", type: "image/png" }
  ],
  openGraph: {
    title: "Manipal University Online | Accredited Online Degrees",
    description: "Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning.",
    url: "https://unifostedu.com/manipal",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal University Online | Accredited Online Degrees",
    description: "Enroll in UGC and AICTE approved online courses at Manipal University Jaipur.",
    images: ["https://unifostedu.com/images/manipal.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "UNIFOST" }],
  publisher: "UNIFOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Force static generation (SSG)
export const dynamic = 'force-static';
export const revalidate = 604800; // Revalidate every 7 days

export default function ManipalLayout({ children }: ChildrenProps) {
  return children;
}
