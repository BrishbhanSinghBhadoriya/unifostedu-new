// src/app/vgu/layout.tsx
import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/vgu`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "VGU Online Jaipur | UGC Approved MBA, MCA, BCA, BBA Fees & Admission 2026",
    template: "%s | VGU Online Jaipur 2026",
  },

  description:
    "Apply for VGU Online Jaipur UGC-approved degrees. Explore Online MBA, MCA, BCA, BBA, BA & MAJMC with affordable fees, NAAC A+ accreditation, and placement support. Join Vivekananda Global University for global learning.",

  keywords: [
    "Vivekananda Global University Online",
    "VGU Online Jaipur",
    "VGU Online admission 2026",
    "VGU Online MBA Specializations",
    "VGU Online MCA Fees",
    "VGU Online BCA Admission",
    "VGU Online BBA Digital Marketing",
    "VGU Online BA Public Policy",
    "VGU Online MAJMC Jaipur",
    "VGU Online MSc Mathematics",
    "VGU Online MA English",
    "UGC Approved Online Degrees India",
    "VGU Online Placement Partners",
    "VGU Online Education Jaipur",
    "Affordable Online MBA India",
    "VGU Online Course Eligibility",
    "NAAC accredited online university Jaipur",
    "online MBA Jaipur Rajasthan 2026",
    "VGU Online BCA Artificial Intelligence",
    "VGU Online MBA Finance",
    "VGU Online MBA Marketing",
    "VGU Online MBA HR",
    "VGU Online MBA Business Analytics",
    "VGU Online fees 2026",
    "VGU Online scholarship 2026",
    "VGU Online admission last date 2026",
    "top online university Rajasthan",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "VGU Online Jaipur | Accredited UG & PG Online Programs 2026",
    description:
      "Join VGU Jaipur for UGC & AICTE recognized Online MBA, MCA, BCA, BBA, BA, MAJMC, MSc, MA and more. Industry-driven curriculum with 100% placement assistance and flexible learning.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/vgu-uni_khh8pt.webp",
        width: 1200,
        height: 630,
        alt: "VGU Jaipur Online Education Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VGU Online Jaipur | MBA, MCA, BCA & BBA Programs 2026",
    description:
      "UGC & AICTE recognized online programs at Vivekananda Global University Jaipur. Affordable fees and global career opportunities.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/vgu-uni_khh8pt.webp"],
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

  authors: [{ name: "Unifost Education" }],
  publisher: "Unifost Education",
  formatDetection: { email: false, address: false, telephone: false },
};

// ── Schema: EducationalOrganization + AggregateRating ────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Vivekananda Global University Online",
  alternateName: ["VGU Online", "VGU Online Jaipur", "Vivekananda Global University Jaipur Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgulogo_jrxgjd.webp",
  description:
    "Vivekananda Global University (VGU) Online offers UGC-approved, NAAC accredited online degree programs including MBA, MCA, BCA, BBA, BA, MA, MSc and MAJMC with 100% placement support from Jaipur.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303012",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/vgujaipur",
    "https://www.instagram.com/vgujaipur",
    "https://www.linkedin.com/school/vivekananda-global-university/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── Schema: WebSite ───────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — VGU Online Jaipur",
  url: PAGE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ── Schema: LandingPage ───────────────────────────────────────────────────────
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LandingPage"],
  name: "VGU Online Jaipur | UGC Approved Courses & Admission 2026",
  description:
    "Apply for Vivekananda Global University Online UG and PG programs. NAAC accredited UGC-approved degrees with 100% placement assistance.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Vivekananda Global University Online",
    url: PAGE_URL,
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Online Courses offered by Vivekananda Global University (VGU)",
  "description": "Comprehensive list of UGC-approved online undergraduate and postgraduate programs at VGU Jaipur.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Online MBA (Master of Business Administration)",
        "description": "2-year PG program with specializations in Finance, Marketing, HR, Analytics, and more.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Online MCA (Master of Computer Applications)",
        "description": "2-year specialized program for advanced computer science and software development.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Online BCA (Bachelor of Computer Applications)",
        "description": "3-year UG program with specializations in AI, Data Science, and Cloud Technology.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Online BBA (Bachelor of Business Administration)",
        "description": "3-year UG program focusing on Digital Marketing, Retail, and Fintech.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
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
      "name": "Is VGU Online UGC-approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VGU Online (Vivekananda Global University Online) offers UGC approved online degrees for all its programs, including the Online MBA, MCA, BBA, and BCA."
      }
    },
    {
      "@type": "Question",
      "name": "Does VGU Online offer placement assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VGU Online provides resume-building support, interview training, and access to top placement partners like TCS, Deloitte, Infosys, Amazon, and IBM."
      }
    }
  ]
};

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "VGU Online Jaipur", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── Schema: City-wise coverage ────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VGU Online Jaipur — Available Across India",
  itemListElement: [
    "Jaipur","Jodhpur","Udaipur","Kota","Ajmer","Bikaner","Alwar","Bharatpur",
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Mumbai","Pune",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara",
    "Lucknow","Kanpur","Agra","Varanasi","Allahabad","Meerut","Bareilly",
    "Chandigarh","Amritsar","Ludhiana","Bhopal","Indore","Gwalior","Jabalpur",
    "Patna","Ranchi","Bhubaneswar","Guwahati","Dehradun","Jammu","Nagpur",
    "Nashik","Coimbatore","Kochi","Visakhapatnam","Vijayawada","Raipur",
    "Rajkot","Thane","Navi Mumbai","Moradabad","Gorakhpur","Aligarh",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `VGU Online Jaipur Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function VGULayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/vguonline_orn06m.webp"
      />
      <meta name="theme-color" content="#821812" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur, Rajasthan" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {/* 3 — LandingPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      {/* 4 — ItemList + Course */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      {/* 5 — FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* 7 — City-wise coverage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {children}
    </>
  );
}
