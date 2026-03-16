
import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/mahe-online`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "MAHE Online Admission 2026 | MBA, MCA, BBA, B.Com, M.Sc — Manipal Academy of Higher Education",
    template: "%s | MAHE Online 2026",
  },

  description:
    "MAHE Online Admission 2026 open. Apply for NAAC A+ accredited online MBA, MCA, BBA (Hons), B.Com, M.Sc Data Science, M.Sc Business Analytics programs from Manipal Academy of Higher Education. UGC-entitled, Institution of Eminence, globally recognized, 100% placement support.",

  keywords: [
    // Core brand
    "MAHE Online admission 2026",
    "Manipal Academy of Higher Education Online admission 2026",
    "MAHE Online apply now",
    "Manipal Online University 2026",
    "Online Manipal admission 2026",
    "NAAC A+ online university India 2026",
    "Institution of Eminence online degree India",
    "UGC entitled online degree MAHE",
    "best online university India 2026 MAHE",
    "MAHE online degree valid government jobs",
    "WES accredited online degree MAHE",
    // MBA
    "MAHE Online MBA 2026",
    "Online MBA Manipal 2026",
    "MAHE Online MBA fees",
    "MAHE Online MBA specializations",
    "MAHE Online MBA placement",
    "Manipal Online MBA for working professionals",
    "best online MBA India MAHE",
    "MAHE Online MBA Healthcare Management",
    "MAHE Online MBA Business Analytics",
    "MAHE Online MBA Data Science",
    "MAHE Online MBA Logistics Supply Chain",
    // MCA
    "MAHE Online MCA 2026",
    "Online MCA Manipal AI ML",
    "Online MCA Manipal Cyber Security",
    "Online MCA Manipal Cloud Computing",
    // BBA
    "MAHE Online BBA 2026",
    "Manipal Online BBA Hons",
    "MAHE Online BBA fees",
    "Online BBA Manipal Healthcare Management",
    // B.Com / M.Sc
    "MAHE Online B.Com Professional 2026",
    "MAHE Online M.Sc Data Science 2026",
    "MAHE Online M.Sc Business Analytics 2026",
    "Online M.Sc Manipal Data Science fees",
    // General
    "MAHE Online admission last date 2026",
    "MAHE Online scholarship 2026",
    "Online Manipal UGC DEB approved",
    "MAHE online degree same as campus",
    "Online Manipal degree abroad valid",
    // City-wise
    "MAHE Online MBA Delhi",
    "Manipal Online admission Mumbai",
    "MAHE Online MBA Bangalore",
    "Manipal Online admission Hyderabad",
    "MAHE Online MBA Manipal",
    "Online Manipal admission Chennai",
    "MAHE Online MBA Kolkata",
    "Manipal Online admission Noida",
    "MAHE Online MBA Pune",
    "Online Manipal admission Lucknow",
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
      "MAHE Online Admission 2026 | MBA, MCA, BBA — Manipal Academy of Higher Education",
    description:
      "Join thousands of learners at MAHE Online. NAAC A+ accredited, Institution of Eminence. UGC-entitled online MBA, MCA, BBA, B.Com, M.Sc with 100% placement support and global recognition. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp",
        width:  1200,
        height: 630,
        alt:    "MAHE Online Admission 2026 — Manipal Academy of Higher Education",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "MAHE Online Admission 2026 | Apply Now",
    description: "NAAC A+ accredited online MBA, MCA, BBA, B.Com, M.Sc from Manipal Academy of Higher Education. UGC-entitled, Institution of Eminence, 100% placement support.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp"],
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
  name:          "Manipal Academy of Higher Education Online",
  alternateName: ["MAHE Online", "Manipal Online", "Online Manipal", "MAHE"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  description:
    "MAHE Online is the digital learning platform of Manipal Academy of Higher Education (MAHE), a NAAC A+ accredited Institution of Eminence. It offers UGC-entitled online degrees including MBA, MCA, BBA, B.Com, M.Sc Data Science and Business Analytics with 100% placement support.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Manipal",
    addressRegion:   "Karnataka",
    postalCode:      "576104",
    addressCountry:  "IN",
  },
  contactPoint: {
    "@type":           "ContactPoint",
    telephone:         "+91 7042646766",
    contactType:       "admissions",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/manipalonline",
    "https://www.instagram.com/manipalonline",
    "https://www.linkedin.com/school/manipal-academy-of-higher-education/",
    "https://x.com/ManipalOnline",
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.7",
    reviewCount:   "30000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Unifost Education — MAHE Online",
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
  name:          "MAHE Online Admission 2026 | Apply Now",
  description:
    "Apply for MAHE Online UG and PG programs. NAAC A+ accredited, Institution of Eminence. UGC-entitled degrees with 100% placement support and global recognition.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Manipal Academy of Higher Education Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// All 12 Q&As sourced from faqData[] in page.tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "Is Manipal Academy of Higher Education (MAHE) recognized by UGC and NAAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Manipal Academy of Higher Education (MAHE) is recognized by the University Grants Commission (UGC) and accredited by NAAC. It is also an Institution of Eminence designated by the Government of India. Online degrees from MAHE are credible, globally recognized and accepted by employers and educational institutions worldwide.",
      },
    },
    {
      "@type": "Question",
      name:    "What online programs are offered by Manipal Academy of Higher Education?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "MAHE Online offers MBA (₹2,92,000, 2 years), MCA (₹2,20,000, 2 years), BBA Hons (₹2,40,000, 4 years), BBA (₹1,80,000, 3 years), B.Com Professional (₹2,94,000, 3 years), M.Sc Data Science (₹2,80,000, 2 years) and M.Sc Business Analytics (₹2,72,000, 2 years).",
      },
    },
    {
      "@type": "Question",
      name:    "Are MAHE online degrees valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, online degrees from Manipal Academy of Higher Education, approved by UGC-DEB, are valid for government jobs, competitive exams like UPSC, and higher education across India.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the admission process for MAHE Online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The MAHE Online admission process is simple and fully online: fill the application form on the official portal, submit required documents, complete fee payment, and receive LMS login credentials. The process is designed to be hassle-free from anywhere in India or abroad.",
      },
    },
    {
      "@type": "Question",
      name:    "What are the fees for online courses at MAHE?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "MAHE Online fees: MBA ₹2,92,000 (2 years), MCA ₹2,20,000 (2 years), BBA Hons ₹2,40,000 (4 years), BBA ₹1,80,000 (3 years), B.Com Professional ₹2,94,000 (3 years), M.Sc Data Science ₹2,80,000 (2 years), M.Sc Business Analytics ₹2,72,000 (2 years). Flexible payment options and No-Cost EMI are available.",
      },
    },
    {
      "@type": "Question",
      name:    "Does MAHE Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, MAHE Online provides dedicated placement assistance including career guidance, networking opportunities, resume building and support to find the right job. Graduates receive strong career support even for online programs.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the duration of MAHE Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Most postgraduate programs (MBA, MCA, M.Sc) run for 2 years. Undergraduate programs: BBA is 3 years, BBA Hons is 4 years, B.Com Professional is 3 years. Flexible schedules allow students to complete degrees while managing other commitments.",
      },
    },
    {
      "@type": "Question",
      name:    "Are MAHE Online degrees internationally recognized?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, online degrees from MAHE are internationally recognized. Select programs are WES-accredited, adding global value to your degree. MAHE is an Institution of Eminence with strong international credibility for jobs and higher studies abroad.",
      },
    },
    {
      "@type": "Question",
      name:    "Can working professionals pursue MAHE Online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Absolutely. MAHE Online programs are designed for working professionals. Flexible schedules, recorded lectures, and live sessions allow professionals to learn at their own pace without interrupting their careers.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the difference between MAHE Online and regular courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "MAHE Online programs provide the same accredited degree as regular MAHE campus courses. The key difference is flexibility — students access lectures, assignments, and live sessions digitally without attending a physical campus. The degree holds identical global recognition.",
      },
    },
    {
      "@type": "Question",
      name:    "Does MAHE Online offer scholarships?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, MAHE Online offers exclusive scholarships for meritorious students, defense personnel, government employees, and differently-abled learners. Contact our counselors for specific scholarship details and application assistance.",
      },
    },
    {
      "@type": "Question",
      name:    "Is technical support provided for MAHE Online students?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, MAHE Online provides dedicated technical support for all online students. From accessing course materials to attending live sessions, comprehensive support ensures a smooth learning experience throughout the program.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "MAHE Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    // PG
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A+ accredited online MBA from MAHE. 2 years. Fee: ₹2,92,000. Eligibility: Working professionals with min 50% in graduation. 9+ specializations: Healthcare, FinTech, Marketing, HR, Business Analytics, Data Science, Logistics, Operations, Pharma.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A+ accredited online MCA from MAHE. 2 years. Fee: ₹2,20,000. Eligibility: 50% Graduation. Specializations: AI & ML, Cyber Security, Cloud Computing, Full Stack Development.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online M.Sc — Data Science", description: "NAAC A+ accredited online M.Sc in Data Science from MAHE. 2 years. Fee: ₹2,80,000. Eligibility: 50% Graduation.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online M.Sc — Business Analytics", description: "NAAC A+ accredited online M.Sc in Business Analytics from MAHE. 2 years. Fee: ₹2,72,000. Eligibility: 50% Graduation.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    // UG
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online BBA (Hons.) — Bachelor of Business Administration Hons", description: "NAAC A+ accredited online BBA Hons from MAHE. 4 years. Fee: ₹2,40,000. Eligibility: 10+2 min 50%. Specializations: Healthcare Management, Business Analytics, FinTech, Marketing, HRM.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P4Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A+ accredited online BBA from MAHE. 3 years. Fee: ₹1,80,000. Eligibility: 10+2 min 50%. Specializations: Healthcare Management, Business Analytics, FinTech, Marketing, HRM.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online B.Com (Professional) — Bachelor of Commerce", description: "NAAC A+ accredited online B.Com Professional from MAHE. 3 years. Fee: ₹2,94,000. Eligibility: 10+2 min 50%.", provider: { "@type": "EducationalOrganization", name: "Manipal Academy of Higher Education Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                                       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Manipal Academy of Higher Education Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",                             item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (65+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "MAHE Online — Available Across India",
  itemListElement: [
    // Karnataka cities first (home state)
    "Manipal","Bengaluru","Mangalore","Mysore","Hubli","Dharwad","Belagavi",
    // Other major Indian cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Mumbai","Pune","Nagpur",
    "Nashik","Thane","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara",
    "Rajkot","Jaipur","Jodhpur","Lucknow","Kanpur","Varanasi","Agra","Meerut",
    "Allahabad","Bhopal","Indore","Gwalior","Jabalpur","Patna","Ranchi","Bhubaneswar",
    "Raipur","Guwahati","Dehradun","Chandigarh","Amritsar","Ludhiana","Jalandhar",
    "Coimbatore","Kochi","Thiruvananthapuram","Visakhapatnam","Vijayawada","Madurai",
    "Salem","Tiruppur","Tiruchirappalli","Warangal","Guntur","Jammu","Srinagar",
    "Jodhpur","Kota","Udaipur","Bikaner","Bareilly","Gorakhpur","Saharanpur",
    "Aligarh","Moradabad","Dhanbad","Howrah","Aurangabad","Nashik","Navi Mumbai",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `MAHE Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
// Force static generation (SSG) — pre-built at deploy time for fastest TTFB
export const dynamic   = "force-static";
export const revalidate = 604800; // Revalidate every 7 days

export default function MaheLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* Hero image from HeroSection component */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      {/* Orange — MAHE/Manipal brand color */}
      <meta name="theme-color"    content="#ea580c" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* MAHE — Manipal, Karnataka */}
      <meta name="geo.region"    content="IN-KA" />
      <meta name="geo.placename" content="Manipal, Karnataka" />
      <meta name="geo.position"  content="13.3527;74.7917" />
      <meta name="ICBM"          content="13.3527, 74.7917" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 7 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — server-rendered in HTML.
          Googlebot does NOT execute JavaScript. Schemas inside
          Next.js <Script> components or <Head> from next/head
          are completely invisible to Google crawlers.
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

      {/* 4 — FAQPage — all 12 Q&As from faqData[] in page.tsx */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 5 — ItemList + Course — all 7 programs with exact fees */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />

      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 7 — City-wise coverage — Karnataka cities + 65 major Indian cities */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}