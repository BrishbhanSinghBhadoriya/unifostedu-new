
import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/jain`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Jain University Online Admission 2026 | MBA, MCA, BBA, BCA, M.Com, B.Com Courses in Bengaluru",
    template: "%s | Jain University Online 2026",
  },

  description:
    "Jain University Online Admission 2026 open. Apply for NAAC A+ accredited online MBA, MCA, BBA, BCA, B.Com, M.Com, MA programs from JAIN (Deemed-to-be University) Bengaluru. UGC-approved degrees, 100% placement support, Zero Cost EMI and flexible learning.",

  keywords: [
    // Core brand
    "Jain University Online admission 2026",
    "JAIN Online admission 2026",
    "Jain University Online apply now",
    "JAIN Deemed University online",
    "NAAC A+ online university Bengaluru",
    "UGC approved online degree Jain University",
    "best online university Bangalore 2026",
    "top online university India 2026",
    // MBA
    "Jain University online MBA 2026",
    "online MBA Jain University fees",
    "online MBA Jain University specializations",
    "online MBA Jain University placement",
    "best online MBA Bangalore 2026",
    "online MBA with Jain vs Manipal",
    // MCA
    "Jain University online MCA 2026",
    "online MCA Jain University AI ML",
    "online MCA Jain University data science",
    "best online MCA India 2026",
    // BBA
    "Jain University online BBA 2026",
    "online BBA Jain University fees",
    "best online BBA Bangalore",
    // BCA
    "Jain University online BCA 2026",
    "online BCA Jain University fees",
    // M.Com / B.Com
    "Jain University online M.Com 2026",
    "Jain University online B.Com 2026",
    "online M.Com Jain University ACCA",
    // MA
    "Jain University online MA 2026",
    // General
    "online degree near me Bangalore",
    "best online degree Jaipur",
    "top online degree India 2026",
    "Jain University online degree valid jobs",
    "Jain University online admission last date 2026",
    "Jain University online scholarship 2026",
    "Jain University zero cost EMI",
    "online degree Jain University 50000 graduates",
    // City-wise
    "Jain University online MBA Delhi",
    "Jain University online admission Mumbai",
    "Jain University online MBA Bangalore",
    "Jain University online admission Jaipur",
    "Jain University online MBA Hyderabad",
    "Jain University online admission Chennai",
    "Jain University online Noida",
    "Jain University online Lucknow",
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
      "Jain University Online Admission 2026 | MBA, MCA, BBA, BCA — Bengaluru",
    description:
      "Join 50,000+ graduates at JAIN University Online. NAAC A+ accredited MBA, MCA, BBA, BCA, M.Com, B.Com, MA degrees. UGC-approved, Zero Cost EMI, 2000+ hiring partners, 100% placement support. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp",
        width:  1200,
        height: 630,
        alt:    "Jain University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Jain University Online Admission 2026 | Apply Now",
    description: "NAAC A+ accredited online MBA, MCA, BBA, BCA from JAIN Deemed University Bengaluru. Flexible learning, UGC-approved degrees and 100% placement support.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp"],
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
  name:          "JAIN (Deemed-to-be University) Online",
  alternateName: ["Jain University Online", "JAIN Online", "Jain Online"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png",
  description:
    "JAIN (Deemed-to-be University) Online offers NAAC A+ accredited, UGC-approved online degrees including MBA, MCA, BBA, BCA, B.Com, M.Com and MA with 100% placement support and Zero Cost EMI.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion:   "Karnataka",
    postalCode:      "560069",
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
    "https://www.facebook.com/jainuniversity",
    "https://www.instagram.com/jainuniversity",
    "https://www.linkedin.com/school/jain-university/",
    "https://x.com/JainUniversity",
  ],
  // AggregateRating — star ratings in SERP
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.7",
    reviewCount:   "50000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Unifost Education — Jain University Online",
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
  name:          "Jain University Online Admission 2026 | Apply Now",
  description:
    "Apply for JAIN University Online UG and PG programs. NAAC A+ accredited UGC-approved degrees with 100% placement support and Zero Cost EMI.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "JAIN (Deemed-to-be University) Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// Sourced from faqData[] in page.tsx — all 10 questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "Is Jain University Online UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Jain University Online is recognized by the University Grants Commission (UGC) and all its online programs are valid and accredited under the UGC guidelines for online education.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the duration of the Jain University online MBA program?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The online MBA program at Jain University is a 2-year program divided into 4 semesters, offering flexibility for working professionals to complete their degree.",
      },
    },
    {
      "@type": "Question",
      name:    "Are online degrees from Jain University equivalent to on-campus degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, the online degrees awarded by Jain University Online are equivalent to their on-campus counterparts and hold the same value. The degree certificate does not mention the online mode of study.",
      },
    },
    {
      "@type": "Question",
      name:    "What specializations are available in the Jain University online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Jain University offers multiple specializations including Human Resource Management, Finance, Marketing, Business Analytics, Information Technology Management, Healthcare Management, Digital Marketing, Artificial Intelligence, AI-Driven Finance, AI-Driven HR, Entrepreneurship and many more emerging fields.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Jain University Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Jain University provides comprehensive career support including placement assistance, virtual job fairs, resume building workshops, interview preparation, and access to 2,000+ hiring partners.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility criteria for the Jain University online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Candidates must have a bachelor's degree from a recognized university with minimum 50% marks. Work experience is preferred but not mandatory for admission.",
      },
    },
    {
      "@type": "Question",
      name:    "Are there Zero Cost EMI options available for Jain University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Jain University offers zero-cost EMI options through various financial partners to make education affordable for all students.",
      },
    },
    {
      "@type": "Question",
      name:    "How are the Jain University online classes conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Classes are conducted through live interactive sessions, recorded lectures, virtual learning platforms, and include regular assessments, assignments, and doubt-clearing sessions with faculty.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the fee structure for Jain University online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Fee structure varies by program. Online MBA ranges from ₹1,96,000 to ₹2,50,000, Online MCA is ₹1,60,000–₹2,00,000, Online BBA is ₹1,50,000–₹2,40,000, Online BCA is ₹1,35,000–₹1,65,000, Online B.Com is ₹1,05,000–₹2,28,000, and Online M.Com is ₹1,10,000–₹1,81,000 for the full program duration.",
      },
    },
    {
      "@type": "Question",
      name:    "Is there any scholarship available for Jain University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Jain University offers various scholarships based on academic merit, sports achievements, and for economically disadvantaged students. Specific details can be obtained from the admissions team.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Jain University Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    // PG
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A+ accredited online MBA from JAIN University. 2 years. Fee: ₹1,96,000–₹2,50,000. Eligibility: Graduation. 25+ specializations including Marketing, Finance, HR, Analytics, AI, Healthcare and more.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A+ accredited online MCA from JAIN University. 2 years. Fee: ₹1,60,000–₹2,00,000. Eligibility: BCA/B.Sc IT. Specializations: AI, Data Science, Cyber Security, Full Stack, Cloud, DevOps.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A+ accredited online M.Com from JAIN University. 2 years. Fee: ₹1,10,000–₹1,81,000. Eligibility: Graduation in Commerce. Includes ACCA (UK) and CPA (US) accredited tracks.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MA — Master of Arts", description: "NAAC A+ accredited online MA from JAIN University. 2 years. Fee: ₹90,000. Eligibility: Graduation. Specializations: English, Economics, Public Policy, Jainology.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    // UG
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A+ accredited online BBA from JAIN University. 3 years. Fee: ₹1,50,000–₹2,40,000. Eligibility: 10+2. Specializations: Finance, Marketing, Digital Marketing, Data Science, HRM.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A+ accredited online BCA from JAIN University. 3 years. Fee: ₹1,35,000–₹1,65,000. Eligibility: 10+2. Specializations: CS & IT, Data Science, Cyber Security, AI, Cloud Computing.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "NAAC A+ accredited online B.Com from JAIN University. 3 years. Fee: ₹1,05,000–₹2,28,000. Eligibility: 10+2. Includes ACCA-accredited International Finance track.", provider: { "@type": "EducationalOrganization", name: "JAIN (Deemed-to-be University) Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                         item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Jain University Online",       item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",               item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (63 Indian cities) ───────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Jain University Online — Available Across India",
  itemListElement: [
    "Bengaluru","Mumbai","Delhi","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad",
    "Jaipur","Lucknow","Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat",
    "Noida","Gurugram","Ghaziabad","Meerut","Faridabad","Agra","Varanasi",
    "Coimbatore","Kochi","Thiruvananthapuram","Mysore","Mangalore","Hubli",
    "Visakhapatnam","Vijayawada","Guntur","Warangal","Tiruppur","Salem","Madurai",
    "Tiruchirappalli","Nashik","Aurangabad","Thane","Navi Mumbai","Vadodara",
    "Rajkot","Bhubaneswar","Ranchi","Dhanbad","Amritsar","Jalandhar","Ludhiana",
    "Jammu","Dehradun","Haridwar","Roorkee","Allahabad","Kanpur","Gorakhpur",
    "Bareilly","Aligarh","Moradabad","Gwalior","Jabalpur","Raipur","Jodhpur",
    "Bikaner","Kota","Udaipur",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Jain University Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function JainLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* Hero watermark background from page.tsx */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      {/* Yellow — Jain University brand color */}
      <meta name="theme-color"    content="#facc15" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* JAIN University — Bengaluru, Karnataka */}
      <meta name="geo.region"    content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru, Karnataka" />
      <meta name="geo.position"  content="12.9716;77.5946" />
      <meta name="ICBM"          content="12.9716, 77.5946" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 7 schemas
          ─────────────────────────────────────────────────────────────
           Plain <script> tags — server-rendered in HTML.
          Googlebot does NOT execute JavaScript. Schemas in Next.js
          <Script> components are invisible to Google crawlers.
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

      {/* 4 — FAQPage — all 10 Q&As from faqData[] in page.tsx */}
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

      {/* 7 — City-wise coverage — 63 Indian cities */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}