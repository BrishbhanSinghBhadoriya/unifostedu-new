import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "NMIMS Online | UGC Approved UG & PG Online Degree Programs",
  description:
    "NMIMS Online offers UGC-entitled undergraduate and postgraduate online degree programs with NAAC A++ accreditation, flexible learning, and career-focused education.",
  keywords: [
    "Narsee Monjee Institute of Management Studies Online",
    "nmims online mba fees",
    "nmims online bba",
    "nmims online bca",
    "nmims online bcom",
    "nmims online mca",
    "nmims online mcom",
    "nmims online ma",
    "NMIMS Distance & Online Education",
    "NMIMS Online Learning Platform",
    "NMIMS online programs approved by UGC",
    "NMIMS online education with placement assistance",
    "Apply for NMIMS Online Course",
    "nmims online placement assistance",
    "nmims online distance education",
    "nmims online degree validity",
    "nmims online vs amity online mba",
    "nmims online reviews",
    "svkm nmims online"
  ],

  icons: [
    { url: "images/logos/nmims/favicon.ico" },
    { url: "images/logos/nmims/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "images/logos/nmims/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "images/logos/nmims/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "images/logos/nmims/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "images/logos/nmims/apple-touch-icon.png", type: "image/png" }
  ],

  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/nmims{courseSlug}"
  },

  openGraph: {
    title: "NMIMS Online | NAAC A++ Accredited Online Degrees",
    description:
      "Study UGC-approved online UG & PG programs from NMIMS Online with flexible schedules, industry-aligned curriculum, and career support.",
    url: "https://unifostedu.com/nmims/{courseSlug}",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp",
        width: 1200,
        height: 630,
        alt: "NMIMS Online"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "NMIMS Online | UGC Approved Online Degrees",
    description:
      "Enroll in NAAC A++ accredited online UG & PG programs from NMIMS Online.",
    images: [
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  authors: [{ name: "UNIFOST" }],
  publisher: "UNIFOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "NMIMS Online",
  alternateName: "SVKM's NMIMS Online",
  url: "https://unifostedu.com/nmims/{courseSlug}",
  logo: "https://unifostedu.com/nmims.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400056",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.facebook.com/NMIMSOnline",
    "https://www.linkedin.com/school/nmims-online/",
    "https://x.com/NMIMS_Official"
  ]
};

export const dynamic = "force-dynamic";
export const revalidate = 604800; // 7 days

export default function NMIMSLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* Preload Hero Image */}
      <link
        rel="preload"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327721/nmims_os8kn9.webp"
        as="image"
        type="image/webp"
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {children}
    </>
  );
}
