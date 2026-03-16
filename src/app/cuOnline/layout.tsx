
import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/cuOnline`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Chandigarh University Online Admission 2026 | Best Online MBA, BBA, MCA, BCA in Chandigarh",
    template: "%s | Chandigarh University Online 2026",
  },

  // Keyword-rich for crawlers — different from OG description below
  description:
    "Chandigarh University Online Admission 2026 open. Apply for NAAC A+ accredited online MBA, MCA, BBA, BCA, MA, M.Sc programs. UGC-approved degrees, 100% placement assistance, flexible learning and globally recognised. Best online university in Chandigarh.",

  keywords: [
    // Core brand
    "Chandigarh University Online admission 2026",
    "CU Online Chandigarh admission 2026",
    "Chandigarh University Online apply now",
    "best online university in Chandigarh",
    "top online university in Punjab",
    "Chandigarh University Mohali online",
    "Chandigarh University Punjab online",
    "NAAC A+ online university Chandigarh",
    "UGC approved online degrees Chandigarh University",
    "online degrees in Chandigarh 2026",
    "best online degree programs in Punjab",
    // MBA
    "best online MBA in Chandigarh",
    "CU Online MBA 2026",
    "Chandigarh University online MBA fees",
    "Chandigarh University online MBA specializations",
    "Chandigarh University online MBA placement",
    "online MBA business analytics KPMG Chandigarh",
    // BBA
    "best online BBA in Chandigarh",
    "CU Online BBA 2026",
    "Chandigarh University online BBA fees",
    "online BBA business analytics KPMG CU",
    // BCA
    "CU Online BCA admission",
    "Chandigarh University online BCA 2026",
    "CU Online BCA fees",
    // MCA
    "Chandigarh University online MCA 2026",
    "CU Online MCA AI ML",
    "CU Online MCA cloud computing AWS",
    "CU Online MCA data analytics",
    // Other programs
    "Chandigarh University online MA 2026",
    "CU Online MSc data science",
    "CU Online MSc mathematics",
    "top NAAC A+ university online platform India",
    "CU Online admission last date 2026",
    // City-wise
    "CU Online admission Chandigarh",
    "Chandigarh University online MBA Mohali",
    "CU Online admission Delhi",
    "Chandigarh University online MBA Mumbai",
    "CU Online admission Bangalore",
    "CU Online admission Hyderabad",
    "CU Online admission Lucknow",
    "CU Online admission Noida",
    "CU Online admission Amritsar",
    "CU Online admission Jalandhar",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    // ✅ Correct canonical — actual page URL
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "hi-IN": `${PAGE_URL}/hi`,
    },
  },

  // Conversion-focused OG — different from meta description
  openGraph: {
    title:
      "Chandigarh University Online Admission 2026 | Best Online MBA, BBA, MCA, BCA",
    description:
      "Join thousands of learners at Chandigarh University Online. NAAC A+ accredited MBA, MCA, BBA, BCA, MA, M.Sc with UGC-approved degrees, 100% placement assistance, affordable fees and flexible learning. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        // ✅ Absolute Cloudinary URL
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp",
        width:  1200,
        height: 630,
        alt:    "Chandigarh University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Chandigarh University Online Admission 2026 | Apply Now",
    description: "NAAC A+ accredited online MBA, MCA, BBA, BCA from Chandigarh University. Flexible learning, UGC-approved degrees and 100% placement assistance.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp"],
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
  name:          "Chandigarh University Online",
  alternateName: ["CU Online", "CU Online Chandigarh", "Chandigarh University Mohali Online"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/logo-cu_aoiyom.png",
  description:
    "Chandigarh University Online is the official digital learning platform of Chandigarh University Mohali, a NAAC A+ accredited institution. It offers UGC-approved online MBA, MCA, BBA, BCA, MA and M.Sc programs with 100% placement assistance.",
  address: {
    "@type":         "PostalAddress",
    streetAddress:   "NH-05 Chandigarh-Ludhiana Highway",
    addressLocality: "Mohali",
    addressRegion:   "Punjab",
    postalCode:      "140413",
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
    "https://www.facebook.com/chandigarhuniversity",
    "https://www.instagram.com/chandigarhuniversity",
    "https://www.linkedin.com/school/chandigarh-university/",
    "https://x.com/ChandigarhUni",
  ],
  // Star ratings in SERP
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.8",
    reviewCount:   "30000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Unifost Education — Chandigarh University Online",
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
  name:          "Chandigarh University Online Admission 2026 | Apply Now",
  description:
    "Apply for Chandigarh University Online UG and PG programs. NAAC A+ accredited UGC-approved degrees with 100% placement assistance.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Chandigarh University Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// Sourced directly from faqs[] array in page.tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is Chandigarh University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Chandigarh University Online (CU Online) is the digital learning platform of Chandigarh University Mohali, a NAAC A+ accredited institution. It offers flexible UGC-approved online degrees in MBA, MCA, BBA, BCA, MA and M.Sc with the same academic quality as regular on-campus programs.",
      },
    },
    {
      "@type": "Question",
      name:    "Are online degrees from CU Online Chandigarh valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. All degrees offered are UGC-approved online degrees from Chandigarh University, which means they are valid for government jobs, government exams, higher studies and employment in India and abroad.",
      },
    },
    {
      "@type": "Question",
      name:    "What courses are offered at Chandigarh University Online 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "CU Online 2026 offers: Online MBA (₹2,20,000, 2 years) with 22+ specializations, MBA-KPMG Business Analytics (₹2,00,000), Online BBA (₹1,68,000, 3 years), BBA-KPMG (₹1,90,000), Online BCA (₹1,77,000, 3 years), BA-JMC (₹1,75,000, 3 years), MCA with AI/ML, Cloud Computing (AWS), Data Analytics specializations (₹1,55,000, 2 years), MA (₹1,00,000, 2 years) and M.Sc Data Science (₹1,46,668, 2 years).",
      },
    },
    {
      "@type": "Question",
      name:    "How do I apply for CU Online BCA admission or other programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Visit the official Chandigarh University Online portal, fill the application form, upload your documents, and pay the application fee. The entire admission process is quick and fully online.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Chandigarh University Online a good choice for working professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. CU Online Chandigarh offers flexible schedules, recorded classes, live sessions, and easy access to study material, making it ideal for working professionals who want to study at their own pace from anywhere.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the best online MBA in Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The Online MBA from Chandigarh University Online is widely considered the best online MBA in Chandigarh. It offers 22+ specializations including Marketing, Finance, HRM, IT, Operations, Digital Marketing, AI & Data Science, FinTech and more. The MBA-KPMG Business Analytics program is especially popular.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the fee for CU Online MBA 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The fee for CU Online MBA is ₹2,20,000 for the 2-year program. The MBA with KPMG Business Analytics specialization is ₹2,00,000. EMI and flexible payment options are available.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Chandigarh University Online provide 100% placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. CU Online Chandigarh provides 100% placement assistance including resume building, interview training, mock interviews, career counselling and networking opportunities. Top recruiters include Amazon, Deloitte, Infosys, Wipro, TCS, IBM, Accenture, Flipkart, HDFC Bank and ICICI Bank.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Chandigarh University Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    // PG Programs
    {
      "@type": "ListItem", position: 1,
      item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A+ accredited online MBA with 22+ specializations. 2 years. Fee: ₹2,20,000. Eligibility: Graduation. Includes Marketing, Finance, HR, IT, Operations, Digital Marketing, AI & Data Science, FinTech and more.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 2,
      item: { "@type": "Course", name: "Online MBA — Business Analytics (KPMG)", description: "NAAC A+ accredited online MBA with KPMG Business Analytics specialization. 2 years (4 semesters). Fee: ₹2,00,000. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 3,
      item: { "@type": "Course", name: "Online MCA — AI & ML", description: "NAAC A+ accredited online MCA with AI & ML specialization. 2 years. Fee: ₹1,55,000. Eligibility: BCA/B.Sc IT/CS/BE/B.Tech.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 4,
      item: { "@type": "Course", name: "Online MCA — Cloud Computing (AWS Academy)", description: "NAAC A+ accredited online MCA with Cloud Computing (AWS Academy) specialization. 2 years. Fee: ₹1,55,000.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 5,
      item: { "@type": "Course", name: "Online MCA — Data Analytics", description: "NAAC A+ accredited online MCA with Data Analytics specialization. 2 years. Fee: ₹1,55,000.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 6,
      item: { "@type": "Course", name: "Online MA — Master of Arts", description: "NAAC A+ accredited online MA in English and Economics. 2 years. Fee: ₹1,00,000. Eligibility: Graduation in any discipline.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 7,
      item: { "@type": "Course", name: "Online M.Sc — Data Science", description: "NAAC A+ accredited online M.Sc in Data Science. 2 years. Fee: ₹1,46,668. Eligibility: BA/BCA/B.Sc/BE/B.Tech.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    // UG Programs
    {
      "@type": "ListItem", position: 8,
      item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A+ accredited online BBA with 14 specializations including Marketing, HRM, Digital Marketing, FinTech, AI. 3 years (6 semesters). Fee: ₹1,68,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 9,
      item: { "@type": "Course", name: "Online BBA — Business Analytics (KPMG)", description: "NAAC A+ accredited online BBA with KPMG Business Analytics. 3 years (6 semesters). Fee: ₹1,90,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 10,
      item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A+ accredited online BCA. 3 years (6 semesters). Fee: ₹1,77,000. Eligibility: 10+2 or equivalent.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
    {
      "@type": "ListItem", position: 11,
      item: { "@type": "Course", name: "Online BA-JMC — Journalism & Mass Communication", description: "NAAC A+ accredited online BA in Journalism & Mass Communication. 3 years (6 semesters). Fee: ₹1,75,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL },
    },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                          item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Chandigarh University Online",  item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",                item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (65+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Chandigarh University Online — Available Across India",
  itemListElement: [
    "Chandigarh","Mohali","Panchkula","Amritsar","Ludhiana","Jalandhar","Patiala",
    "Bathinda","Pathankot","Hoshiarpur","Delhi","Noida","Gurugram","Ghaziabad",
    "Faridabad","Mumbai","Pune","Nagpur","Nashik","Aurangabad","Bangalore",
    "Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara","Rajkot",
    "Jaipur","Jodhpur","Udaipur","Kota","Lucknow","Agra","Varanasi","Meerut",
    "Allahabad","Kanpur","Bhopal","Indore","Gwalior","Jabalpur","Raipur",
    "Patna","Ranchi","Guwahati","Dehradun","Haridwar","Roorkee","Shimla",
    "Jammu","Srinagar","Coimbatore","Kochi","Thiruvananthapuram","Visakhapatnam",
    "Vijayawada","Bhubaneswar","Hubli","Mangalore","Mysore","Tiruchirappalli",
    "Madurai","Salem","Tiruppur","Warangal","Guntur","Dhanbad",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Chandigarh University Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function ChandigarhLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* First hero banner from Swiper in page.tsx */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327055/banner-cu1_a6rmh0.webp"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      {/* Matches CU red brand color */}
      <meta name="theme-color"    content="#e60000" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* Chandigarh University HQ — Mohali, Punjab */}
      <meta name="geo.region"    content="IN-PB" />
      <meta name="geo.placename" content="Mohali, Punjab" />
      <meta name="geo.position"  content="30.7333;76.7794" />
      <meta name="ICBM"          content="30.7333, 76.7794" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 7 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — server-rendered in HTML.
          Googlebot CANNOT read schemas inside Next.js <Script> components
          because Googlebot does not execute JavaScript.
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

      {/* 5 — ItemList + Course — course rich results for all 11 programs */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />

      {/* 6 — BreadcrumbList — breadcrumb path below title in SERP */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 7 — City-wise coverage — 65+ Indian cities for local search */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}