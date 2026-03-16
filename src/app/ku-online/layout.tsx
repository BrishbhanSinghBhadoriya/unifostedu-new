

import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/ku-online`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Kurukshetra University Online Admission 2026 | MBA, MCA, BBA, BCA, B.Com, MA — Haryana",
    template: "%s | Kurukshetra University Online 2026",
  },

  description:
    "Kurukshetra University Online Admission 2026 open. Apply for NAAC A++ accredited online MBA, MCA, BBA, BCA, B.Com, M.Com, MA programs. UGC-entitled degrees, 100% placement assistance, flexible learning since 1956. Best online university in Haryana.",

  keywords: [
    // Core brand
    "Kurukshetra University Online admission 2026",
    "KU Online admission 2026",
    "Kurukshetra University Online apply now",
    "KU Online degree programs",
    "NAAC A++ online university Haryana",
    "UGC entitled online degree Kurukshetra University",
    "best online university Haryana 2026",
    "Kurukshetra University Online valid degree",
    "KU Online degree recognized employers",
    // MBA
    "Kurukshetra University online MBA 2026",
    "KU Online MBA fees",
    "KU Online MBA specializations",
    "KU Online MBA placement",
    "online MBA Haryana 2026",
    "KU Online MBA Finance Management",
    "KU Online MBA HR Management",
    "KU Online MBA Marketing",
    "KU Online MBA IT Management",
    "KU Online MBA Business Analytics",
    // MCA
    "Kurukshetra University online MCA 2026",
    "KU Online MCA fees",
    "best online MCA Haryana",
    // BBA / BCA / B.Com
    "Kurukshetra University online BBA 2026",
    "KU Online BCA 2026",
    "KU Online B.Com 2026",
    "KU Online BBA fees",
    // PG
    "KU Online M.Com 2026",
    "KU Online MA English",
    "KU Online MA Journalism Mass Communication",
    "KU Online MA Political Science",
    // General
    "KU Online admission last date 2026",
    "KU Online scholarship 2026",
    "Kurukshetra University Online degree abroad",
    "Kurukshetra University Online exam online",
    "Kurukshetra University established 1956",
    // City-wise
    "KU Online MBA Chandigarh",
    "Kurukshetra University online admission Delhi",
    "KU Online MBA Ambala",
    "KU Online admission Panipat",
    "KU Online MBA Faridabad",
    "KU Online admission Gurugram",
    "KU Online MBA Hisar",
    "KU Online admission Rohtak",
    "KU Online MBA Karnal",
    "Kurukshetra University online Mumbai",
    "KU Online admission Noida",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "hi-IN": `${PAGE_URL}/hi`,
    },
  },

  openGraph: {
    title:
      "Kurukshetra University Online Admission 2026 | MBA, MCA, BBA, BCA — Haryana",
    description:
      "Join Kurukshetra University Online — NAAC A++ accredited, established 1956. UGC-entitled online MBA, MCA, BBA, BCA, B.Com, M.Com, MA with 100% placement assistance and affordable fees. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp",
        width:  1200,
        height: 630,
        alt:    "Kurukshetra University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Kurukshetra University Online Admission 2026 | Apply Now",
    description: "NAAC A++ accredited online MBA, MCA, BBA, BCA, M.Com, MA from Kurukshetra University. UGC-entitled degrees, 100% placement support and flexible learning.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp"],
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

  authors:         [{ name: "Unifost Education" }],
  publisher:       "Unifost Education",
  formatDetection: { email: false, address: false, telephone: false },
};

// ─── Schema: EducationalOrganization ─────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "EducationalOrganization",
  name:          "Kurukshetra University Online",
  alternateName: ["KU Online", "Kurukshetra University Distance Education"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku-logo_nqbxot.png",
  description:
    "Kurukshetra University Online offers UGC-entitled, NAAC A++ accredited online degree programs including MBA, MCA, BBA, BCA, B.Com, M.Com and MA. Established in 1956, it is one of India's most trusted universities.",
  foundingDate:  "1956",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Kurukshetra",
    addressRegion:   "Haryana",
    postalCode:      "136119",
    addressCountry:  "IN",
  },
  contactPoint: {
    "@type":           "ContactPoint",
    telephone:         "+91 7042646766",
    email:             "info@unifostedu.com",
    contactType:       "admissions",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/kurukshetrauniversity",
    "https://www.instagram.com/kurukshetrauniversity",
    "https://www.linkedin.com/school/kurukshetra-university/",
    "https://x.com/KurukshetraUni",
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.6",
    reviewCount:   "12000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Unifost Education — Kurukshetra University Online",
  url:        PAGE_URL,
  potentialAction: {
    "@type":       "SearchAction",
    target:        `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: LandingPage ──────────────────────────────────────────────────────
const landingPageSchema = {
  "@context":    "https://schema.org",
  "@type":       ["WebPage", "LandingPage"],
  name:          "Kurukshetra University Online Admission 2026 | Apply Now",
  description:
    "Apply for Kurukshetra University Online UG and PG programs. NAAC A++ accredited UGC-entitled degrees with 100% placement assistance and affordable fees.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Kurukshetra University Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// All 10 Q&As sourced from faqs[] in page.tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is Kurukshetra University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Kurukshetra University Online is the distance and online education wing of Kurukshetra University, established in 1956. It offers UGC-entitled online degree programs designed for working professionals, fresh graduates, and learners who need flexibility. KU Online combines traditional academic excellence with modern digital learning.",
      },
    },
    {
      "@type": "Question",
      name:    "Is a Kurukshetra University Online degree valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Kurukshetra University Online degrees are fully valid and recognized by UGC (University Grants Commission). The university holds NAAC A++ accreditation — the highest grade possible — and its degrees are accepted by employers, government organizations, and other universities across India and abroad.",
      },
    },
    {
      "@type": "Question",
      name:    "What courses are offered at Kurukshetra University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Kurukshetra University Online offers UG programs: BBA (₹72,661, 3 years), BCA (₹72,661, 3 years), B.Com (₹72,661, 3 years). PG programs: MBA (₹98,545, 2 years), MBA with specializations (₹1,19,845), MCA (₹76,667, 2 years), M.Com (₹54,036, 2 years), MA in English/Journalism/Political Science (₹72,661, 2 years).",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility for Kurukshetra University Online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "For UG Programs (BBA, BCA, B.Com): 10+2 pass from a recognized board. For PG Programs (MBA, MCA, M.Com, MA): Bachelor's degree from a recognized university. Some programs may have specific subject requirements.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the fee structure of Kurukshetra University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "KU Online offers an affordable fee structure: UG Programs approximately ₹72,661 for the full program. PG Programs range from ₹54,036 (M.Com) to ₹1,19,845 (MBA with specializations). Scholarships and installment options are available for eligible students.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Kurukshetra University Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, KU Online provides career support including career counseling sessions, resume building workshops, industry interface programs, and placement opportunities with partner companies. The university has a strong alumni network that supports career growth.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the learning method at Kurukshetra University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "KU Online offers recorded video lectures, digital e-learning materials, online assignments and assessments, discussion forums for peer interaction, and regular doubt-clearing sessions. Learning is self-paced with flexibility to study from anywhere.",
      },
    },
    {
      "@type": "Question",
      name:    "Are Kurukshetra University Online degrees accepted abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Kurukshetra University degrees are globally recognized. The university is NAAC A++ accredited and its degrees are accepted by employers and educational institutions worldwide. Many alumni have pursued higher education and careers abroad with KU degrees.",
      },
    },
    {
      "@type": "Question",
      name:    "How are exams conducted at Kurukshetra University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Examinations at KU Online are conducted through an online proctored examination system with scheduled examination windows. Both objective and subjective type questions are used, along with assignment-based evaluations. Results are declared online and certificates are sent to students.",
      },
    },
    {
      "@type": "Question",
      name:    "How can I apply for Kurukshetra University Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Apply in 5 steps: 1) Visit the official KU Online portal. 2) Register and fill the application form. 3) Upload documents (marksheets, ID proof, photograph). 4) Pay the application fee online. 5) Submit and wait for confirmation. After verification, you receive login credentials to access the learning portal.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Kurukshetra University Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    // UG
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A++ accredited online BBA from Kurukshetra University. 3 years. Fee: ₹72,661. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A++ accredited online BCA from Kurukshetra University. 3 years. Fee: ₹72,661. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "NAAC A++ accredited online B.Com from Kurukshetra University. 3 years. Fee: ₹72,661. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    // PG
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MBA — Master of Business Administration (General)", description: "NAAC A++ accredited online MBA from Kurukshetra University. 2 years. Fee: ₹98,545. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online MBA — With Specializations (Finance, IT, HR, Marketing, Business Analytics)", description: "NAAC A++ accredited online MBA with specializations from Kurukshetra University. 2 years. Fee: ₹1,19,845. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A++ accredited online MCA from Kurukshetra University. 2 years. Fee: ₹76,667. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A++ accredited online M.Com from Kurukshetra University. 2 years. Fee: ₹54,036. Eligibility: Graduation in Commerce.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "Online MA — Master of Arts (English, Journalism & Mass Communication, Political Science)", description: "NAAC A++ accredited online MA from Kurukshetra University. 2 years. Fee: ₹72,661. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Kurukshetra University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                           item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kurukshetra University Online",  item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",                 item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage ──────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Kurukshetra University Online — Available Across India",
  itemListElement: [
    // Haryana cities first (strong local relevance)
    "Kurukshetra","Chandigarh","Ambala","Panipat","Faridabad","Gurugram","Hisar",
    "Rohtak","Karnal","Sonipat","Yamunanagar","Bhiwani","Sirsa","Fatehabad",
    "Jhajjar","Rewari","Mahendragarh","Nuh","Palwal","Panchkula",
    // Other major Indian cities
    "Delhi","Noida","Ghaziabad","Meerut","Agra","Lucknow","Kanpur","Varanasi",
    "Mumbai","Pune","Nagpur","Nashik","Ahmedabad","Surat","Vadodara","Rajkot",
    "Bangalore","Hyderabad","Chennai","Kolkata","Jaipur","Bhopal","Indore",
    "Patna","Ranchi","Bhubaneswar","Guwahati","Dehradun","Jammu","Amritsar",
    "Ludhiana","Jalandhar","Coimbatore","Kochi","Visakhapatnam","Vijayawada",
    "Raipur","Jodhpur","Udaipur","Kota","Gwalior","Jabalpur","Allahabad",
    "Bareilly","Moradabad","Aligarh","Saharanpur","Gorakhpur",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Kurukshetra University Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function KULayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* First Swiper slide hero image from page.tsx */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      {/* Deep blue — KU brand color */}
      <meta name="theme-color"    content="#003366" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* Kurukshetra University — Kurukshetra, Haryana */}
      <meta name="geo.region"    content="IN-HR" />
      <meta name="geo.placename" content="Kurukshetra, Haryana" />
      <meta name="geo.position"  content="29.9695;76.8783" />
      <meta name="ICBM"          content="29.9695, 76.8783" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 7 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — server-rendered in HTML.
          Googlebot does NOT execute JavaScript — schemas inside
          Next.js <Script> or <Head> components are invisible to crawlers.
          Page.tsx uses <Head> from next/head — this does NOT work in
          Next.js App Router. All meta tags must be in layout.tsx.
      ══════════════════════════════════════════════════════════════════ */}

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 3 — LandingPage + datePublished + dateModified */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
      />

      {/* 4 — FAQPage — all 10 Q&As from faqs[] in page.tsx */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 5 — ItemList + Course — all 8 programs with exact fees */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />

      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 7 — City-wise coverage — Haryana cities + 55 major Indian cities */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}