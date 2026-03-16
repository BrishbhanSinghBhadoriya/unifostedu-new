

import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/lpu-online`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "LPU Online Admission 2026 | MBA, MCA, BBA, BCA, M.Com, MA, M.Sc — Lovely Professional University",
    template: "%s | LPU Online 2026",
  },

  description:
    "LPU Online Admission 2026 open. Apply for NAAC A++ accredited online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc programs from Lovely Professional University. UGC-entitled degrees, 100% placement assistance, No-Cost EMI, WES recognized and globally valid.",

  keywords: [
    // Core brand
    "LPU Online admission 2026",
    "Lovely Professional University Online admission 2026",
    "LPU Online apply now",
    "lpuonline 2026",
    "NAAC A++ online university India 2026",
    "UGC entitled online degree LPU",
    "best online university India 2026 LPU",
    "LPU Online degree valid government jobs",
    "LPU Online WES recognized degree",
    // MBA
    "LPU Online MBA 2026",
    "online MBA in India LPU",
    "LPU Online MBA for working professionals",
    "online MBA without entrance exam LPU",
    "affordable online MBA India LPU",
    "executive MBA online India LPU",
    "best online MBA India 2026",
    "LPU Online MBA fees",
    "LPU Online MBA specializations",
    "LPU Online MBA placement",
    // MCA
    "LPU Online MCA 2026",
    "online MCA LPU AI ML",
    "online MCA LPU data science",
    "best online MCA India 2026",
    // BBA / BCA
    "LPU Online BBA 2026",
    "LPU Online BCA 2026",
    "LPU Online BCA fees",
    // PG
    "LPU Online M.Com 2026",
    "LPU Online MA 2026",
    "LPU Online M.Sc 2026",
    // Specializations / certifications
    "online data science course India LPU",
    "digital marketing certification online LPU",
    "AI ML certification India LPU",
    "certificate in web development LPU",
    // General
    "LPU Online admission last date 2026",
    "LPU Online scholarship 2026",
    "LPU Online no cost EMI",
    "LPU Online 50000 students",
    "top online university Punjab 2026",
    "online MBA colleges Punjab LPU",
    "distance courses Punjab LPU",
    "online degrees Jalandhar LPU",
    "best university online degree Jalandhar",
    // City-wise
    "LPU Online MBA Delhi",
    "LPU Online admission Mumbai",
    "LPU Online MBA Bangalore",
    "LPU Online MBA Chandigarh",
    "LPU Online admission Hyderabad",
    "LPU Online MBA Chennai",
    "LPU Online admission Kolkata",
    "LPU Online MBA Noida",
    "LPU Online admission Lucknow",
    "LPU Online MBA Jalandhar",
    "LPU Online MBA Amritsar",
    "LPU Online MBA Ludhiana",
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
      "LPU Online Admission 2026 | MBA, MCA, BBA, BCA — Lovely Professional University",
    description:
      "Join 50,000+ learners at LPU Online. NAAC A++ accredited, UGC-entitled online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc with 100% placement support, No-Cost EMI and WES global recognition. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp",
        width:  1200,
        height: 630,
        alt:    "LPU Online Admission 2026 — Lovely Professional University",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "LPU Online Admission 2026 | Apply Now",
    description: "NAAC A++ accredited online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc from Lovely Professional University. UGC-entitled, WES recognized, 100% placement support.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp"],
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
  name:          "Lovely Professional University Online",
  alternateName: ["LPU Online", "LPU Distance Education", "lpuonline"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/LPU-Online-Logo_blodcq.svg",
  description:
    "LPU Online is the digital learning arm of Lovely Professional University, one of India's largest and most renowned educational institutions. It offers NAAC A++ accredited, UGC-entitled online degrees including MBA, MCA, BBA, BCA, M.Com, MA and M.Sc with 100% placement support.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Phagwara",
    addressRegion:   "Punjab",
    postalCode:      "144411",
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
    "https://www.facebook.com/LPUOnline",
    "https://www.instagram.com/lpuonline",
    "https://www.linkedin.com/school/lovely-professional-university/",
    "https://x.com/LPUonline",
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.8",
    reviewCount:   "50000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Unifost Education — LPU Online",
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
  name:          "LPU Online Admission 2026 | Apply Now",
  description:
    "Apply for LPU Online UG and PG programs. NAAC A++ accredited UGC-entitled degrees with 100% placement support, No-Cost EMI and global recognition.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Lovely Professional University Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// All 11 Q&As sourced from faqData[] in page.tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "Is Lovely Professional University recognized by UGC and NAAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Lovely Professional University is recognized by the University Grants Commission (UGC) and accredited by NAAC with 'A++' grade. Online degrees from LPU Online are credible, globally recognized and accepted by employers and educational institutions worldwide.",
      },
    },
    {
      "@type": "Question",
      name:    "What online programs are offered by Lovely Professional University?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online offers MBA, BBA, MCA, BCA, B.Com, M.Com, MA, and M.Sc programs. Students can access flexible learning schedules while earning a degree from a top-ranked university with UGC-entitled credentials.",
      },
    },
    {
      "@type": "Question",
      name:    "Are online degrees from LPU valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, online degrees from Lovely Professional University, approved by UGC-DEB, are valid for government jobs, competitive exams like UPSC, and higher education across India.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the admission process for LPU Online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The LPU Online admission process is simple and fully online: fill the application form, submit required documents, complete fee payment, and receive LMS login credentials. New sessions start in January and July each year.",
      },
    },
    {
      "@type": "Question",
      name:    "How much are the fees for online courses at LPU?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online fees vary by program: MBA is ₹2,00,000 (2 years), MCA is ₹1,48,000 (2 years), BBA is ₹1,50,000 (3 years), BCA is ₹1,50,000 (3 years), M.Com is ₹1,00,000 (2 years), MA/M.Sc is ₹80,000 (2 years). No-Cost EMI and scholarships are available.",
      },
    },
    {
      "@type": "Question",
      name:    "Does LPU Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, LPU Online offers dedicated placement assistance including career counseling, professional training, networking opportunities, and support to find the right job. Graduates work at companies like TCS, Infosys, IBM, Samsung, HP, EY, Tata and more.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the duration of LPU Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Most undergraduate programs (BBA, BCA) run for 3 years. Postgraduate programs (MBA, MCA, M.Com, MA, M.Sc) run for 2 years. The flexible schedule allows students to complete their degree while managing other commitments.",
      },
    },
    {
      "@type": "Question",
      name:    "Are LPU Online degrees internationally recognized?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, LPU Online degrees are internationally recognized. The university holds WES recognition (Canada & USA), ACU membership, AIU recognition, and NAAC A++ accreditation. Graduates have built careers in national and international companies.",
      },
    },
    {
      "@type": "Question",
      name:    "Can working professionals pursue LPU Online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Absolutely. LPU Online programs are designed for working professionals. Flexible schedules, recorded lectures, and 24/7 LMS access allow individuals to manage education and career simultaneously. The online MBA from LPU is particularly popular among working professionals.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the difference between LPU Online and regular courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online programs provide the same accredited degree as regular LPU courses. The key difference is flexibility — students access lectures, assignments, and live sessions digitally, without attending a physical campus. The degree holds the same global recognition.",
      },
    },
    {
      "@type": "Question",
      name:    "Does LPU Online offer scholarships?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, LPU Online offers scholarships for meritorious students, defense personnel, government employees, and differently-abled learners. Scholarships up to 25% are available along with No-Cost EMI financing options.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "LPU Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    // PG
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A++ accredited online MBA from LPU. 2 years. Fee: ₹2,00,000. Eligibility: Bachelor's degree. Specializations: HR, Finance, Marketing, Operations, Analytics, Digital Marketing, Data Science, IT, International Business, Banking, Healthcare, Logistics.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A++ accredited online MCA from LPU. 2 years. Fee: ₹1,48,000. Eligibility: BCA/B.Sc IT with Mathematics. Specializations: ML & AI, Data Science, Cybersecurity, Full Stack, AR/VR & Game Development.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A++ accredited online M.Com from LPU. 2 years. Fee: ₹1,00,000. Eligibility: Graduation in Commerce.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MA — Master of Arts", description: "NAAC A++ accredited online MA from LPU. 2 years. Fee: ₹80,000. Eligibility: Graduation. Specializations: Sociology, English, Political Science, History.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online M.Sc — Master of Science", description: "NAAC A++ accredited online M.Sc from LPU. 2 years. Fee: ₹80,000. Eligibility: Graduation. Specializations: Mathematics, Economics.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    // UG
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A++ accredited online BBA from LPU. 3 years. Fee: ₹1,50,000. Eligibility: 10+2 minimum 40%.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A++ accredited online BCA from LPU. 3 years. Fee: ₹1,50,000. Eligibility: 10+2 minimum 40%.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "Online BA — Bachelor of Arts", description: "NAAC A++ accredited online BA from LPU. 3 years. Fee: ₹80,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                                    item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Lovely Professional University Online",   item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",                          item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (65+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "LPU Online — Available Across India",
  itemListElement: [
    // Punjab cities first (home state)
    "Jalandhar","Phagwara","Ludhiana","Amritsar","Chandigarh","Patiala","Bathinda",
    "Mohali","Panchkula","Pathankot","Hoshiarpur","Gurdaspur",
    // Other major Indian cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Meerut","Agra",
    "Mumbai","Pune","Nagpur","Nashik","Thane","Navi Mumbai","Aurangabad",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara",
    "Rajkot","Jaipur","Jodhpur","Udaipur","Kota","Lucknow","Kanpur","Varanasi",
    "Allahabad","Bareilly","Aligarh","Moradabad","Gorakhpur","Bhopal","Indore",
    "Gwalior","Jabalpur","Patna","Ranchi","Dhanbad","Bhubaneswar","Raipur",
    "Guwahati","Dehradun","Haridwar","Roorkee","Jammu","Srinagar",
    "Coimbatore","Kochi","Thiruvananthapuram","Visakhapatnam","Vijayawada",
    "Madurai","Salem","Tiruppur","Tiruchirappalli","Warangal","Guntur",
    "Mangalore","Hubli","Mysore",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `LPU Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function LPULayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* Hero background image from page.tsx */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu3_mzvr6y.webp"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      {/* Orange — LPU brand color */}
      <meta name="theme-color"    content="#f97316" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* LPU — Phagwara, Punjab */}
      <meta name="geo.region"    content="IN-PB" />
      <meta name="geo.placename" content="Phagwara, Punjab" />
      <meta name="geo.position"  content="31.2271;75.7742" />
      <meta name="ICBM"          content="31.2271, 75.7742" />

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

      {/* 4 — FAQPage — all 11 Q&As from faqData[] in page.tsx */}
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

      {/* 7 — City-wise coverage — Punjab cities + 65 major Indian cities */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}