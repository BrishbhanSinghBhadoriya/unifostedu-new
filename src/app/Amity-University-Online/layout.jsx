export const metadata = {
  title: "Amity Online | Study UGC & AICTE Approved Online UG/PG Degree Programs",
  description:
    "Amity University Online offers flexible, globally recognized programs with expert mentorship and career-focused degrees approved by UGC and AICTE.",
  keywords: [
    "amity university online mba",
  "amity online mba fees",
    "amity university online bca",
    "amity university online bba",
    "amity university online bcom",
    "amity university online ma psychology",
    "amity university online mca",
    "amity university online courses list",
    "amity university online ugc approved degrees",
    "amity university online admission 2025",
    "amity online january batch admission last date",
    "amity online apply now",
    "amity university online eligibility for mba",
    "amity online mba fees per semester",
    "amity online bca fees 2025",
    "amity university online scholarship, no cost emi",
    "amity online admission process step by step",
    "amity university online noida admission",
    "amity online mba from noida campus",
    "amity university online distance and online courses",
    "amity online degree valid for government jobs in india",
    "amity online vs manipal online mba",
    "amity online mba reviews and placements",
    "amity university online genuine or fake",
    "best online mba in india amity university",
    "amity online mba vs nmims online mba",
    
  

  ],
  icons: {
    icon: "/amity.svg",              
    shortcut: "/amity.svg",          
    apple: "/amity.svg",             
  },
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/Amity-University-Online",
  },
  openGraph: {
    title: "Amity University Online | Accredited Online Degrees",
    description:
      "Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning from Amity University.",
    url: "https://unifostedu.com/Amity-University-Online",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amity University Online | Accredited Online Degrees",
    description: "Enroll in UGC and AICTE approved online courses at Amity University Online.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"],
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
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    alternateName: "Amity Online",
    url: "https://unifostedu.com/amity-university-online",
    logo: "https://unifostedu.com/amity.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 7042646766",
      contactType: "admissions",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/AmityUniversityOnline",
      "https://www.linkedin.com/school/amity-university-online/",
      "https://x.com/AmityUniversity",
    ],
  };


// Use dynamic rendering for this route to avoid prerender-time initialization errors
export const dynamic = 'force-dynamic';
export const revalidate = 604800; // Revalidate every 7 days

export default function AmityLayout({ children }) {
  return (
    <>
      {/* Preload critical hero image for faster LCP */}
      <link
        rel="preload"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
        as="image"
        type="image/webp"
      />
      {/* Organization Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {children}
    </>
  );
}

