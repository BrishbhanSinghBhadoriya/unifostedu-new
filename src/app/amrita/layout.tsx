import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title:
    "Amrita Vishwa Vidyapeetham Online | UGC Approved NAAC A++ Online Degrees in India",
  description:
    "Apply for Amrita Vishwa Vidyapeetham Online degree programs with NAAC A++ accreditation, UGC approval, and industry-relevant curriculum. Admissions open for 2026 batch.",
  keywords: [
    "Amrita Vishwa Vidyapeetham online degree",
    "Amrita online university",
    "Online degree from Amrita University",
    "distance education Coimbatore",
    "Amrita online admission",
    "UGC approved Amrita online degree",
    "NAAC A++ Amrita online degree",
    "AICTE approved Amrita online programs",
    "Online degree from top university in India"
  ],

  icons: [
    { url: "/images/logos/amrita/favicon.ico" },
    { url: "/images/logos/amrita/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/amrita/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/amrita/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/amrita/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/amrita/apple-touch-icon.png", type: "image/png" }
  ],

  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/amrita"
  },

  openGraph: {
    title: "Amrita University Online | NAAC A++ Accredited Online Degrees",
    description:
      "Study flexible, career-focused online programs from Amrita Vishwa Vidyapeetham, one of India's top ranked universities.",
    url: "https://unifostedu.com/amrita",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amrita.webp",
        width: 1200,
        height: 630,
        alt: "Amrita University Online"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Amrita University Online | NAAC A++ Accredited Degrees",
    description:
      "Apply for Amrita University Online programs with global recognition and flexible learning.",
    images: [
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amrita.webp"
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
  name: "Amrita Vishwa Vidyapeetham Online",
  alternateName: "Amrita Online",
  url: "https://unifostedu.com/amrita",
  logo: "https://unifostedu.com/amrita.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641112",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.facebook.com/amritavishwa",
    "https://www.linkedin.com/school/amrita-vishwa-vidyapeetham/",
    "https://twitter.com/AmritaUni"
  ]
};

export const dynamic = "force-dynamic";
export const revalidate = 604800;

export default function AmritaLayout({ children }: ChildrenProps) {
  return (
    <>
      <link
        rel="preload"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/amrita_girl.webp"
        as="image"
        type="image/webp"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {children}
    </>
  );
}
