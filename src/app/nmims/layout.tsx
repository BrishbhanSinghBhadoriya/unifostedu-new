import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "NMIMS Online Admission 2026 | MBA, BBA, B.Com Fees & Eligibility",
  description:
    "NMIMS Online Admission 2026 open. Apply for NAAC A++ accredited online MBA, BBA, B.Com, M.Com, MCA programs from SVKM's NMIMS Mumbai. UGC-entitled degrees with 100% placement support and flexible learning.",
  keywords: [
    "NMIMS online admission 2026",
    "nmims online mba fees",
    "nmims online bba",
    "nmims online bcom",
    "nmims online mca",
    "NMIMS Distance & Online Education",
    "NMIMS online programs approved by UGC",
    "NMIMS online placement assistance",
    "nmims online degree validity for govt jobs",
    "nmims online vs amity online mba",
    "nmims online reviews",
    "svkm nmims online Mumbai",
    "best online management university India"
  ],

  icons: [
    { url: "/images/logos/nmims/favicon.ico" },
    { url: "/images/logos/nmims/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/nmims/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/nmims/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/nmims/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/nmims/apple-touch-icon.png", type: "image/png" }
  ],

  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/nmims"
  },

  openGraph: {
    title: "NMIMS Online Admission 2026 | NAAC A++ Accredited Online Degrees",
    description:
      "Study UGC-approved online UG & PG programs from NMIMS Online with flexible schedules, industry-aligned curriculum, and career support.",
    url: "https://unifostedu.com/nmims",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp",
        width: 1200,
        height: 630,
        alt: "NMIMS Online Admission"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "NMIMS Online Admission 2026 | UGC Approved Online Degrees",
    description:
      "Enroll in NAAC A++ accredited online UG & PG programs from NMIMS Online. India's top management institute.",
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
  url: "https://unifostedu.com/nmims",
  logo: "https://unifostedu.com/nmims.svg",
  description: "NMIMS Online offers NAAC A++ accredited, UGC-approved online degrees in management and technology from one of India's premier institutes.",
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
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "22000",
    bestRating: "5",
    worstRating: "1"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://unifostedu.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "University List",
      "item": "https://unifostedu.com/university-list"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "NMIMS Online",
      "item": "https://unifostedu.com/nmims"
    }
  ]
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Course",
      "position": 1,
      "name": "Online MBA",
      "description": "Premium online MBA from NMIMS Mumbai with various specializations.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "NMIMS Online",
        "sameAs": "https://unifostedu.com/nmims"
      }
    },
    {
      "@type": "Course",
      "position": 2,
      "name": "Online BBA",
      "description": "UGC-approved online BBA program from NMIMS Mumbai.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "NMIMS Online",
        "sameAs": "https://unifostedu.com/nmims"
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NMIMS Online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NMIMS Online offers flexible and career-focused education through Narsee Monjee Institute of Management Studies Online. Programs are delivered under NMIMS Distance & Online Education using the advanced NMIMS Online Learning Platform."
      }
    },
    {
      "@type": "Question",
      "name": "Are NMIMS online programs approved by UGC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all programs offered through Narsee Monjee Institute of Management Studies Online are part of NMIMS online programs approved by UGC, ensuring they are valid and recognized across India."
      }
    },
    {
      "@type": "Question",
      "name": "Does NMIMS Online provide placement assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NMIMS online education with placement assistance offers career support such as resume building, interview preparation, and skill development to help learners improve job readiness."
      }
    },
    {
      "@type": "Question",
      "name": "Is the NMIMS Online degree valid for government jobs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, degrees earned through Narsee Monjee Institute of Management Studies Online are valid and recognized since they come under NMIMS online programs approved by UGC."
      }
    }
  ]
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {children}
    </>
  );
}


