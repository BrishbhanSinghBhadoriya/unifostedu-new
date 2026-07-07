import { ReactNode } from "react";

// ─── Page Constants ─────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/amity/amity-online-mba`;
const OG_IMAGE = "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba-online-image_jklc4w.webp";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Amity Online MBA 2026 | UGC-DEB Approved, NAAC A+ | Fees, Eligibility & Admission",

  description:
    "Amity University Online MBA 2026 admission open. UGC-DEB approved, NAAC A+ accredited online MBA with 18+ specializations. Fees from ₹1,99,000. No entrance exam. 100% placement support. No-cost EMI. Apply now.",

  keywords: [
    // Primary intent — exact match searches
    "Amity Online MBA",
    "Amity University Online MBA 2026",
    "Amity Online MBA fees",
    "Amity Online MBA admission 2026",
    "Amity Online MBA eligibility",
    "Amity Online MBA specializations",
    // UGC / accreditation queries
    "UGC approved online MBA Amity",
    "NAAC A+ online MBA India",
    "UGC-DEB approved distance MBA",
    "Amity Online MBA UGC DEB certificate",
    "is Amity online MBA valid for government jobs",
    // Comparisons & alternatives
    "Amity Online MBA vs Manipal Online MBA",
    "Amity Online MBA vs NMIMS online MBA",
    "best online MBA Amity University",
    "Amity Online MBA review 2026",
    // Specialization keywords
    "Amity Online MBA Finance",
    "Amity Online MBA Digital Marketing",
    "Amity Online MBA HR Analytics",
    "Amity Online MBA Business Analytics",
    "Amity Online MBA Data Science",
    "Amity Online MBA International Business",
    "Amity Online MBA dual specialization",
    "Amity Online MBA 18 specializations",
    // Working professional queries
    "online MBA for working professionals Amity",
    "Amity distance MBA working professionals",
    "part time MBA Amity Online",
    // Fee queries
    "Amity Online MBA fees per semester",
    "Amity Online MBA no cost EMI",
    "Amity Online MBA education loan",
    "Amity Online MBA total cost",
    // Placement
    "Amity Online MBA placement record",
    "Amity Online MBA salary package",
    "Amity Online MBA hiring companies",
    // Process
    "Amity Online MBA admission process",
    "Amity Online MBA documents required",
    "Amity Online MBA no entrance exam",
    // City-wise
    "Amity Online MBA Delhi",
    "Amity Online MBA Mumbai",
    "Amity Online MBA Bangalore",
    "Amity Online MBA Hyderabad",
    "Amity Online MBA Chennai",
  ],

  authors:         [{ name: "UNIFOST" }],
  publisher:       "UNIFOST",
  formatDetection: { email: false, address: false, telephone: false },

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:       "Amity Online MBA 2026 | UGC-DEB Approved | 18+ Specializations | Fees ₹1.99L",
    description: "Apply for Amity University Online MBA 2026 — UGC-DEB approved, NAAC A+ accredited. 18+ specializations, fees from ₹1,99,000, no entrance exam, 100% placement support, no-cost EMI.",
    url:         PAGE_URL,
    siteName:    "UNIFOST",
    type:        "website",
    locale:      "en_IN",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "Amity University Online MBA Program 2026 — UGC Approved NAAC A+",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Amity Online MBA 2026 | UGC-DEB Approved | Fees ₹1.99L",
    description: "UGC-DEB approved Amity Online MBA — 18+ specializations, NAAC A+ accredited, no entrance exam, placement support. Apply for 2026 batch.",
    images:      [OG_IMAGE],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
};

// ─── JSON-LD: Course Schema ───────────────────────────────────────────────────
const courseSchema = {
  "@context": "https://schema.org",
  "@type":    "Course",
  name:       "Amity University Online MBA",
  description:
    "UGC-DEB approved online MBA from Amity University with NAAC A+ accreditation. 18+ specializations, 2-year program, fees from ₹1,99,000. 100% online with live sessions, placement support, and no entrance exam.",
  provider: {
    "@type": "EducationalOrganization",
    name:    "Amity University Online",
    sameAs:  "https://amityonline.com",
    url:     `${BASE_URL}/amity`,
  },
  url:               PAGE_URL,
  educationalLevel:  "Postgraduate",
  timeRequired:      "P2Y",
  inLanguage:        "en-IN",
  offers: {
    "@type":         "Offer",
    price:           "199000",
    priceCurrency:   "INR",
    priceValidUntil: "2026-12-31",
    availability:    "https://schema.org/InStock",
    url:             PAGE_URL,
  },
  hasCourseInstance: {
    "@type":          "CourseInstance",
    courseMode:       "online",
    courseWorkload:   "PT20H",
    instructor: {
      "@type": "Organization",
      name:    "Amity University Online Faculty",
    },
  },
};

// ─── JSON-LD: FAQPage Schema ──────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is the fee for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Amity Online MBA fees start at ₹1,99,000 for a single specialization and ₹2,99,000 for dual specialization (total program cost for 2 years). Semester-wise payment, no-cost EMI, and education loan options are available.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Amity Online MBA UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Amity University Online MBA is UGC-DEB (University Grants Commission – Distance Education Bureau) approved and NAAC A+ accredited. It is equivalent to a regular on-campus MBA and valid for government jobs, PSUs, private sector, and international employment.",
      },
    },
    {
      "@type": "Question",
      name:    "What are the eligibility criteria for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Eligibility: Any graduation degree from a recognized university with minimum 50% marks (45% for SC/ST). No entrance exam required. No age limit. No mandatory work experience. Working professionals, fresh graduates, and entrepreneurs can apply.",
      },
    },
    {
      "@type": "Question",
      name:    "How many specializations does Amity Online MBA offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Amity Online MBA offers 18+ specializations including Finance & Accounting, Digital Marketing, Business Analytics, Data Science, HR Analytics, IT Management, International Business, Hospitality Management, Retail Management, Digital Entrepreneurship, Operations Management, Global Finance, and more.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Amity Online MBA provide placement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Amity Online MBA provides 100% placement assistance through virtual job fairs, resume building workshops, interview preparation, and access to 500+ corporate hiring partners including Google, Microsoft, Deloitte, KPMG, TCS, Infosys, and more.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the duration of Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Amity Online MBA is a 2-year (4 semester) program. Students can complete it at their own pace with a maximum duration of 4 years allowed.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Amity Online MBA valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Since Amity Online MBA is UGC-DEB approved, the degree holds the same validity as a regular MBA for government jobs, UPSC, state PSC, bank exams, PSU recruitment, and other competitive exams.",
      },
    },
    {
      "@type": "Question",
      name:    "Can I pursue Amity Online MBA while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Absolutely. Amity Online MBA is designed for working professionals with weekend live classes, 24/7 recorded lecture access, flexible exam schedules, and digital study materials. No relocation or career break required.",
      },
    },
  ],
};

// ─── JSON-LD: BreadcrumbList ──────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Amity University",  item: `${BASE_URL}/amity` },
    { "@type": "ListItem", position: 3, name: "Amity Online MBA",  item: PAGE_URL },
  ],
};

// ─── JSON-LD: WebPage ─────────────────────────────────────────────────────────
const webPageSchema = {
  "@context":    "https://schema.org",
  "@type":       "WebPage",
  name:          "Amity Online MBA 2026 | UGC-DEB Approved | Fees, Eligibility & Specializations",
  description:   "Complete guide to Amity University Online MBA 2026 — fees, eligibility, specializations, admission process, and placement support.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-06-19",
  publisher: {
    "@type": "Organization",
    name:    "UNIFOST",
    url:     BASE_URL,
    logo: {
      "@type": "ImageObject",
      url:     `${BASE_URL}/unilogo.png`,
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbSchema.itemListElement,
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function AmityOnlineMBALayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* LCP image preload */}
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_800,q_auto,f_auto/v1762327391/mba-online-image_jklc4w.webp"
      />

      {/* Geo tags */}
      <meta name="geo.region"    content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {children}
    </>
  );
}
