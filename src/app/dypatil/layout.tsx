import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/dypatil`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Dr. DY Patil University Online Admission 2026 | MBA, BBA, MCA, BCA Programs",
    template: "%s | Dr. DY Patil University Online 2026",
  },

  // Keyword-rich for crawlers — different from OG description below
  description:
    "Dr. DY Patil University Online Admission 2026 open. Apply for NAAC A++ accredited online MBA, MCA, BBA, BCA programs. UGC-approved degrees, 100% placement assistance, flexible learning, Zero Cost EMI and globally recognised degrees valid for government jobs.",

  keywords: [
    // Core brand
    "Dr DY Patil University Online admission 2026",
    "DPU Online admission 2026",
    "DY Patil online MBA 2026",
    "DY Patil online BBA 2026",
    "DY Patil online BCA 2026",
    "DY Patil online MCA 2026",
    "Dr DY Patil Vidyapeeth online degree",
    "DPU online MBA fees 2026",
    "DY Patil online MBA eligibility",
    "DY Patil online MBA placement",
    "DY Patil online MBA specializations",
    "online MBA from DY Patil University",
    "DY Patil online BBA fees",
    "DY Patil online MCA fees",
    "best online university India 2026",
    "NAAC A++ online university India",
    "UGC approved online degree India 2026",
    "DY Patil online degree valid government jobs",
    "DY Patil online admission last date 2026",
    "DY Patil online scholarship 2026",
    "DY Patil online zero cost EMI",
    "top UGC approved online universities India",
    "best online MBA India 2026",
    "best online MCA India 2026",
    // MBA specializations from page
    "online MBA marketing management DY Patil",
    "online MBA finance management DY Patil",
    "online MBA HR management DY Patil",
    "online MBA healthcare management DY Patil",
    "online MBA business analytics DY Patil",
    "online MBA AI machine learning DY Patil",
    "online MBA digital marketing DY Patil",
    "online MBA fintech DY Patil",
    // City-wise
    "DY Patil online MBA Pune",
    "DY Patil online admission Mumbai",
    "DY Patil online MBA Delhi",
    "DY Patil online MBA Bangalore",
    "DY Patil online admission Hyderabad",
    "DY Patil online MBA Chennai",
    "DY Patil online admission Kolkata",
    "DY Patil online MBA Noida",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    //  Correct canonical — points to actual page URL
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "hi-IN": `${PAGE_URL}/hi`,
    },
  },

  // Conversion-focused OG — different from meta description
  openGraph: {
    title:
      "Dr. DY Patil University Online Admission 2026 | MBA, BBA, MCA, BCA",
    description:
      "Join 50,000+ learners at Dr. DY Patil University Online. NAAC A++ accredited MBA, MCA, BBA, BCA degrees with Zero Cost EMI, scholarship up to ₹10,000 and 100% placement assistance. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        //  Absolute Cloudinary URL — required for FB / WhatsApp / LinkedIn
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp",
        width:  1200,
        height: 630,
        alt:    "Dr. DY Patil University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Dr. DY Patil University Online Admission 2026 | Apply Now",
    description: "NAAC A++ accredited online MBA, MCA, BBA, BCA from DY Patil University. Flexible learning, Zero Cost EMI and 100% placement assistance.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp"],
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
  name:          "Dr. DY Patil University Online",
  alternateName: ["DPU Online", "DY Patil Online", "Dr. D.Y. Patil Vidyapeeth Online"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327128/dpulogo_pjp6mc.png",
  description:
    "Dr. DY Patil University Online (DPU Online) offers NAAC A++ accredited UGC-approved online degree programs including MBA, MCA, BBA and BCA with 100% placement assistance.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Pune",
    addressRegion:   "Maharashtra",
    postalCode:      "411033",
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
    "https://www.facebook.com/dypatiluniversity",
    "https://www.instagram.com/dypatiluniversity",
    "https://www.linkedin.com/school/dr-d-y-patil-vidyapeeth-pune/",
    "https://x.com/DYPatilPune",
  ],
  // Star ratings in SERP — lifts CTR for education pages
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
  name:       "Unifost Education — Dr. DY Patil Online",
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
  name:          "Dr. DY Patil University Online Admission 2026 | Apply Now",
  description:
    "Apply for Dr. DY Patil University Online UG and PG programs. NAAC A++ accredited UGC-approved degrees with 100% placement assistance and Zero Cost EMI.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  // Freshness signals — critical for "admission 2026" queries
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Dr. DY Patil University Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// Sourced directly from faqData[] in page.tsx — 15 FAQs available, using best 8
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is DY Patil University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "DY Patil University Online (DPU Online) is the digital learning platform of Dr. D.Y. Patil Vidyapeeth, Pune. It offers flexible UGC-approved online degrees in MBA, MCA, BBA and BCA. It is recognised as one of the best online universities in India with NAAC A++ accreditation.",
      },
    },
    {
      "@type": "Question",
      name:    "Are DY Patil University Online degrees UGC approved and valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. All degrees offered by DY Patil University Online are UGC-approved, making them valid for higher studies, government jobs, private-sector jobs, and global opportunities.",
      },
    },
    {
      "@type": "Question",
      name:    "What programs are available at DY Patil University Online 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "DPU Online offers Online MBA (₹1,89,400 total, 2 years), Online MCA (₹1,40,000 total, 2 years), Online BBA (₹1,45,400 total, 3 years), and Online BCA. The MBA has 15 specializations including Marketing, Finance, HR, IT, Healthcare, Business Analytics, AI & ML, Digital Marketing and more.",
      },
    },
    {
      "@type": "Question",
      name:    "How do I apply for DY Patil University Online admission 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The admission process is 100% online. Register on the official DPU Online website, fill the application form, upload your documents, and pay the application fee. Admissions are accepted in January, April, July and October sessions every year.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility for DY Patil University Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Candidates must have a bachelor's degree from a recognized university with minimum 50% marks (45% for reserved categories). For BBA and BCA programs, 10+2 from any recognized board is sufficient.",
      },
    },
    {
      "@type": "Question",
      name:    "Does DY Patil University Online provide 100% placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. DY Patil University Online provides full placement support including resume building, interview training, mock interviews, networking events and career counselling. Top recruiters include TCS, Infosys, Wipro, Deloitte, Accenture, Amazon, HDFC Bank and more.",
      },
    },
    {
      "@type": "Question",
      name:    "Is the Online MBA from DY Patil University worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. The Online MBA from DY Patil University is one of the best online MBA programs in India 2026. It offers 15 specializations, AI-powered tools training, practical learning, updated curriculum and strong placement opportunities for career growth.",
      },
    },
    {
      "@type": "Question",
      name:    "Are there Zero Cost EMI options for DY Patil University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. DY Patil University Online offers Zero Cost EMI options for all programs, making quality education affordable. Scholarships up to ₹10,000 are also available for eligible students.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Dr. DY Patil University Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: {
        "@type":          "Course",
        name:             "Online MBA — Master of Business Administration",
        description:      "NAAC A++ accredited online MBA with 15 specializations including Marketing, Finance, HR, IT, Healthcare, Business Analytics, AI & ML, Digital Marketing and Fintech. 2 years. Total fee: ₹1,89,400. Eligibility: Graduation with 50% marks.",
        provider:         { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired:     "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage:       "en-IN",
        url:              PAGE_URL,
      },
    },
    {
      "@type": "ListItem", position: 2,
      item: {
        "@type":          "Course",
        name:             "Online MCA — Master of Computer Applications",
        description:      "NAAC A++ accredited online MCA from Dr. DY Patil University. 2 years. Total fee: ₹1,40,000. Eligibility: Graduation with Mathematics or Computer Science.",
        provider:         { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired:     "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage:       "en-IN",
        url:              PAGE_URL,
      },
    },
    {
      "@type": "ListItem", position: 3,
      item: {
        "@type":          "Course",
        name:             "Online BBA — Bachelor of Business Administration",
        description:      "NAAC A++ accredited online BBA from Dr. DY Patil University. 3 years. Total fee: ₹1,45,400. Eligibility: 10+2 from any recognized board. Specializations in IT, Marketing, HR, Finance, E-commerce and more.",
        provider:         { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired:     "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage:       "en-IN",
        url:              PAGE_URL,
      },
    },
    {
      "@type": "ListItem", position: 4,
      item: {
        "@type":          "Course",
        name:             "Online BCA — Bachelor of Computer Applications",
        description:      "NAAC A++ accredited online BCA from Dr. DY Patil University. Strong foundation for IT and software careers. Eligibility: 10+2 from any recognized board.",
        provider:         { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired:     "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage:       "en-IN",
        url:              PAGE_URL,
      },
    },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                         item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Dr. DY Patil University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",               item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (60+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Dr. DY Patil University Online — Available Across India",
  itemListElement: [
    "Pune","Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad",
    "Jaipur","Lucknow","Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat",
    "Nashik","Aurangabad","Thane","Navi Mumbai","Noida","Gurugram","Ghaziabad",
    "Meerut","Agra","Varanasi","Allahabad","Coimbatore","Kochi","Visakhapatnam",
    "Bhubaneswar","Vadodara","Rajkot","Faridabad","Dhanbad","Amritsar","Ranchi",
    "Howrah","Jabalpur","Gwalior","Vijayawada","Jodhpur","Madurai","Raipur","Kota",
    "Guwahati","Thiruvananthapuram","Mysore","Tiruchirappalli","Bareilly","Aligarh",
    "Moradabad","Jalandhar","Hubli","Jammu","Mangalore","Tiruppur","Salem",
    "Warangal","Guntur","Saharanpur","Gorakhpur","Bikaner","Dehradun","Haridwar",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Dr. DY Patil University Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function DYPATILLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* Hero image from page.tsx — preloading improves LCP score */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dpu1_wdmyqj.png"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      {/* Matches DY Patil brand red color */}
      <meta name="theme-color"    content="#b3202e" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* DY Patil Vidyapeeth — Pune, Maharashtra */}
      <meta name="geo.region"    content="IN-MH" />
      <meta name="geo.placename" content="Pune, Maharashtra" />
      <meta name="geo.position"  content="18.5204;73.8567" />
      <meta name="ICBM"          content="18.5204, 73.8567" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 6 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — server-rendered in HTML.
          Googlebot CANNOT read schemas placed in Next.js <Script>
          components because it does not execute JavaScript.
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

      {/* 4 — FAQPage — unlocks FAQ accordion in SERP */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 5 — ItemList + Course — course rich results for all 4 programs */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />

      {/* 6 — BreadcrumbList — breadcrumb path below title in SERP */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 7 — City-wise coverage — 63 Indian cities for local search */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}