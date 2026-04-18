import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title:
    "Amrita Vishwa Vidyapeetham Online Admission 2026 | MBA, MCA, BBA, BCA Fees & Eligibility",
  description:
    "Amrita Vishwa Vidyapeetham Online Admission 2026 open. Apply for NAAC A++ accredited, UGC approved online MBA, MCA, BBA, BCA, B.Com degree programs. Study from India's #1 private university with 100% placement assistance.",
  keywords: [
    "Amrita Vishwa Vidyapeetham online degree",
    "Amrita online university admission 2026",
    "Online MBA from Amrita University",
    "Amrita online MCA fees",
    "Amrita online BBA eligibility",
    "UGC approved Amrita online degree",
    "NAAC A++ Amrita online degree",
    "Amrita online admission process",
    "Amrita university online placement support",
    "best online university in India Amrita",
    "Amrita online bcom fees 2026",
    "Amrita online degree validity",
    "Amrita Vishwa Vidyapeetham distance learning"
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
    title: "Amrita University Online | NAAC A++ Accredited Online Degrees 2026",
    description:
      "Study flexible, career-focused online programs from Amrita Vishwa Vidyapeetham, India's top ranked university. Admissions open for MBA, MCA, BBA, BCA.",
    url: "https://unifostedu.com/amrita",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amrita.webp",
        width: 1200,
        height: 630,
        alt: "Amrita University Online Admission"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Amrita University Online Admission 2026 | MBA, MCA, BBA",
    description:
      "Apply for Amrita University Online programs with global recognition and flexible learning. India's #1 private university.",
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
  description: "Amrita Vishwa Vidyapeetham Online offers NAAC A++ accredited, UGC-approved online degrees with a focus on value-based education and research excellence.",
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
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12800",
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
      "name": "Amrita Vishwa Vidyapeetham Online",
      "item": "https://unifostedu.com/amrita"
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
      "description": "Amrita Online MBA with specializations in AI, Business Analytics, FinTech, and more.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Amrita Vishwa Vidyapeetham Online",
        "sameAs": "https://unifostedu.com/amrita"
      }
    },
    {
      "@type": "Course",
      "position": 2,
      "name": "Online MCA",
      "description": "Master of Computer Applications with industry-oriented curriculum from Amrita Online.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Amrita Vishwa Vidyapeetham Online",
        "sameAs": "https://unifostedu.com/amrita"
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
      "name": "What are the key recognitions of Amrita Vishwa Vidyapeetham Online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amrita Vishwa Vidyapeetham is NAAC A++ accredited and ranked as the #1 private university in India. Its online programs are UGC-approved and globally recognized."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an entrance exam for Amrita University online programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, for most online programs like MBA, MCA, and BBA, there is no separate entrance exam. Admission is based on the student's past academic performance."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fee structure for Amrita Online MBA 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fee for the Amrita Online MBA program is approximately ₹1,20,000 to ₹1,50,000 for the entire course, depending on specializations and payment plans."
      }
    },
    {
      "@type": "Question",
      "name": "Are online degrees from Amrita valid for government jobs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Amrita online degrees are UGC-entitled, making them completely valid for all government and private sector jobs in India and abroad."
      }
    }
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


