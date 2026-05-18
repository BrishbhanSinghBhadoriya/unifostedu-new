import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Amity University Online Admission 2026 | MBA, MCA, BBA, BCA Fees & Eligibility",
  description:
    "Amity University Online Admission 2026 open. Apply for UGC & AICTE approved online MBA, MCA, BBA, BCA, B.Com, M.Com degree programs. Get 100% placement support, global recognition, and affordable fees with No Cost EMI.",
  keywords: [
    "amity university online mba",
    "amity online mba fees",
    "amity university online bca",
    "amity university online bba",
    "amity university online bcom",
    "amity university online mca",
    "amity online admission 2026",
    "amity online mba fees per semester",
    "amity university online scholarship",
    "amity online degree validity for government jobs",
    "best online mba in india amity university",
    "amity university online placements",
    "amity online bca fees 2026",
    "amity online mca admission process",
    "amity university online ugc approved"
  ],

  icons: [
    { url: "/images/logos/amity/favicon.ico" },
    { url: "/images/logos/amity/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/amity/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/amity/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/amity/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/amity/apple-touch-icon.png", type: "image/png" }
  ],

  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/amity"
  },

  openGraph: {
    title: "Amity University Online Admission 2026 | Accredited Online Degrees",
    description:
      "Join Amity University Online for globally recognized UG/PG programs. UGC approved MBA, MCA, BBA, BCA with expert mentorship and placement assistance.",
    url: "https://unifostedu.com/amity",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online Admission"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity University Online Admission 2026 | MBA, MCA, BBA, BCA",
    description: "Enroll in UGC and AICTE approved online courses at Amity University Online. Careers start here.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"]
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
  name: "Amity University Online",
  alternateName: "Amity Online",
  url: "https://unifostedu.com/amity",
  logo: "https://unifostedu.com/amity.svg",
  description: "Amity University Online offers UGC and AICTE approved online undergraduate and postgraduate degree programs with a focus on industry-relevant skills and global recognition.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.facebook.com/AmityUniversityOnline",
    "https://www.linkedin.com/school/amity-university-online/",
    "https://x.com/AmityUniversity"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "15400",
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
      "name": "Amity University Online",
      "item": "https://unifostedu.com/amity"
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
      "description": "Master of Business Administration with various specializations including Finance, Marketing, HR, and more.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Amity University Online",
        "sameAs": "https://unifostedu.com/amity"
      }
    },
    {
      "@type": "Course",
      "position": 2,
      "name": "Online MCA",
      "description": "Master of Computer Applications with focus on Software Engineering, Data Science, and AI.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Amity University Online",
        "sameAs": "https://unifostedu.com/amity"
      }
    }
  ]
};

export const revalidate = 604800; // 1 week

export default function AmityLayout({ children }: ChildrenProps) {
  return (
    <>
      <link
        rel="preload"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
        as="image"
        type="image/webp"
      />

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

      {children}
    </>
  );
}


