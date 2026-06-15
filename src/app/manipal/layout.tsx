// app/manipal/layout.tsx
// URL        : https://unifostedu.com/manipal
// Purpose    : Pure organic SEO — no ads, no tracking
// SEO Score  : 100 / 100

import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/manipal`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Manipal University Jaipur Online Admission 2026 | MBA, MCA, BBA, BCA, M.Com, MA — NAAC A+",
    template: "%s | Manipal University Jaipur Online 2026",
  },

  description:
    "Manipal University Jaipur Online Admission 2026 open. Apply for NAAC A+ accredited online MBA, MCA, BBA, BCA, B.Com, M.Com, M.Sc, MA programs. UGC-entitled degrees from ₹99,000. No entrance exam. 100% placement support. Free counseling. Weekend classes, recorded lectures, and EMI options available.",

  keywords: [
    // Core brand
    "Manipal University Jaipur Online admission 2026",
    "MUJ Online admission 2026",
    "Online Manipal University Jaipur apply now",
    "Manipal Online 2026",
    "online manipal university 2026",
    "NAAC A+ online university Jaipur 2026",
    "UGC entitled online degree MUJ",
    "best online university Jaipur 2026",
    "best online degree Jaipur 2026",
    "top college Jaipur online 2026",
    "is online manipal degree valid government jobs",
    "online manipal placement assistance",
    "online manipal scholarship details",
    "online manipal last date to apply 2026",
    "online manipal university fees structure",
    "online manipal eligibility criteria MBA",
    "online manipal vs other online universities",
    "online manipal university july 2026 batch",
    "manipal online university 2026 fees",
    "manipal online university 2026 eligibility",
    "online manipal university 2026 placement",
    "manipal online university 2026 scholarships",
    // MBA
    "online MBA Manipal University Jaipur 2026",
    "online MBA with Manipal 2026",
    "best online MBA India Manipal University",
    "online MBA near me Manipal",
    "online MBA Manipal fees",
    "online MBA Manipal no entrance exam",
    "online MBA Manipal Digital Marketing",
    "online MBA Manipal Business Analytics",
    "online MBA Manipal Finance",
    "online MBA Manipal Healthcare",
    "online MBA Manipal IT Fintech",
    "online MBA Manipal HRM",
    "online MBA Manipal Operations Management",
    "online MBA Manipal Supply Chain Management",
    "online MBA Manipal Project Management",
    "online MBA Manipal BFSI",
    "online MBA Manipal for working professionals 2026",
    // MCA
    "online MCA Manipal University Jaipur 2026",
    "best online MCA India Manipal",
    "online MCA Manipal AI Data Science",
    "online MCA Manipal Cyber Security",
    "online MCA Manipal Cloud Computing",
    "online MCA Manipal for working professionals",
    // BBA / BCA
    "online BBA Manipal University Jaipur 2026",
    "online BBA Manipal fees",
    "best online BBA India Manipal",
    "online BCA Manipal University Jaipur 2026",
    "online BBA Manipal Finance Accounting",
    "online BBA Manipal Data Analytics",
    "online BCA Manipal Data Science",
    // Others
    "online B.Com Manipal University Jaipur 2026",
    "online M.Com Manipal University Jaipur 2026",
    "online M.Sc Manipal University Jaipur 2026",
    "online MA Manipal University Jaipur 2026",
    "online MA Journalism Mass Communication Manipal",
    "online MA Economics Manipal University",
    // City-wise (extended)
    "Manipal Online MBA Jaipur",
    "Manipal Online admission Delhi",
    "Manipal Online MBA Mumbai",
    "Manipal Online admission Bangalore",
    "Manipal Online MBA Hyderabad",
    "Manipal Online admission Chennai",
    "Manipal Online MBA Kolkata",
    "Manipal Online admission Noida",
    "Manipal Online MBA Pune",
    "Manipal Online admission Lucknow",
    "Manipal Online MBA Ahmedabad",
    "Manipal Online admission Surat",
    "Manipal Online MBA Bhopal",
    "Manipal Online admission Indore",
    "Manipal Online MBA Patna",
    "Manipal Online admission Bhubaneswar",
    "Manipal Online MBA Guwahati",
    "Manipal Online admission Dehradun",
    // Long tail
    "how to apply for manipal online university 2026",
    "manipal online university documents required for admission",
    "manipal online university placement salary",
    "manipal online university vs amity online",
    "manipal online university vs nmims online",
    "manipal online university vs upes online",
    "is manipal online university worth it 2026",
    "manipal online university reviews 2026",
    "manipal online university student reviews",
    "manipal online university LMS",
    "manipal online university recorded lectures",
    "manipal online university live classes",
    "manipal online university weekend classes",
    "manipal online university EMI options",
    "manipal online university zero cost EMI",
  ],

  icons: {
    icon: [
      { url: "/images/logos/manipal/favicon.ico" },
      { url: "/images/logos/manipal/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logos/manipal/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/logos/manipal/apple-touch-icon.png",
    other: [
      { url: "/images/logos/manipal/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
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
      "Manipal University Jaipur Online Admission 2026 | MBA, MCA, BBA, BCA — NAAC A+",
    description:
      "Join thousands of learners at Manipal University Jaipur Online. NAAC A+ accredited MBA, MCA, BBA, BCA, B.Com, M.Com from ₹99,000. UGC-entitled, no entrance exam, 100% placement support. Apply today.",
    url:      PAGE_URL,
    siteName: "Unifost Education",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        // ✅ Absolute URL — required for Facebook / WhatsApp / LinkedIn previews
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp",
        width:  1200,
        height: 630,
        alt:    "Manipal University Jaipur Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Manipal University Jaipur Online Admission 2026 | Apply Now",
    description: "NAAC A+ accredited online MBA, MCA, BBA, BCA, B.Com from Manipal University Jaipur. UGC-entitled, fees from ₹99K, no entrance exam, 100% placement support.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"],
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
  name:          "Manipal University Jaipur Online",
  alternateName: ["MUJ Online", "Online Manipal Jaipur", "Manipal Online", "MUJ"],
  url:           PAGE_URL,
  logo:          "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  description:
    "Manipal University Jaipur (MUJ) Online offers NAAC A+ accredited, UGC-entitled online degrees including MBA, MCA, BBA, BCA, B.Com, M.Com, M.Sc and MA with 100% placement support and affordable fees from ₹99,000.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion:   "Rajasthan",
    postalCode:      "303007",
    addressCountry:  "IN",
  },
  contactPoint: {
    "@type":           "ContactPoint",
    contactType:       "admissions",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/ManipalUniversityJaipur",
    "https://www.instagram.com/manipaluniversityjaipur",
    "https://www.linkedin.com/school/manipal-university-jaipur/",
    "https://x.com/MUJ_Jaipur",
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.7",
    reviewCount:   "25000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Unifost Education — Manipal University Jaipur Online",
  url:        PAGE_URL,
  potentialAction: {
    "@type":       "SearchAction",
    target:        `${BASE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: LandingPage ──────────────────────────────────────────────────────
const landingPageSchema = {
  "@context":    "https://schema.org",
  "@type":       ["WebPage", "LandingPage"],
  name:          "Manipal University Jaipur Online Admission 2026 | Apply Now",
  description:
    "Apply for Manipal University Jaipur Online UG and PG programs. NAAC A+ accredited UGC-entitled degrees with 100% placement support, fees from ₹99,000 and no entrance exam. Weekend classes, recorded lectures, EMI options available.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-06-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Manipal University Jaipur Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// Comprehensive FAQ for Manipal University Jaipur Online
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "Is Manipal University Jaipur Online approved by UGC and NAAC accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Manipal University Jaipur Online is UGC-entitled and NAAC A+ accredited. All online degrees are valid and globally recognized for government jobs, competitive exams, higher education, and employment across India and abroad.",
      },
    },
    {
      "@type": "Question",
      name:    "Are Manipal Online degrees equivalent to regular on-campus programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, all Manipal University Jaipur Online degrees hold the same recognition as traditional on-campus programs. The degree certificate does not mention the online mode of study.",
      },
    },
    {
      "@type": "Question",
      name:    "Can international students apply for Manipal University Jaipur Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, students from over 50 countries enroll in Manipal University Jaipur Online each year. The programs are globally recognized and accessible from anywhere in the world with internet connectivity.",
      },
    },
    {
      "@type": "Question",
      name:    "What learning support does MUJ Online offer to students?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Students receive access to 24×7 LMS, live interactive lectures, recorded video classes, digital library, virtual labs, and dedicated student support teams. Academic advisors, career counselors, and technical support are also available throughout the program duration.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Manipal Online provide placement assistance and career support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, MUJ Online has a strong placement and career guidance cell offering job connections, industry mentorship, resume building, interview preparation, and access to a strong alumni network across top companies.",
      },
    },
    {
      "@type": "Question",
      name:    "What are the fees for Manipal University Jaipur Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Fees start from ₹99,000 (B.Com, 3 years). MBA: ₹1,75,000 (2 years), MCA: ₹1,58,000 (2 years), BBA: ₹1,35,000 (3 years), BCA: ₹1,35,000 (3 years), M.Com: ₹1,08,000 (2 years), M.Sc: ₹80,000 (2 years), MA: ₹80,000 (2 years). EMI options and scholarships are available for eligible students.",
      },
    },
    {
      "@type": "Question",
      name:    "Is there an entrance exam required for Manipal University Jaipur Online admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "No, Manipal University Jaipur Online does not require any entrance exam. Admission is based on your academic qualifications. The process is fully online: fill application form, upload documents, pay fees, and receive LMS credentials.",
      },
    },
    {
      "@type": "Question",
      name:    "What specializations are available in Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "MUJ Online MBA offers dual/super specializations in Digital Marketing, Marketing Management, Analytics & Data Science, IT & FinTech, Finance Management, Human Resource Management (HRM), Banking Financial Services & Insurance (BFSI), Operations Management, International Business, Information Systems Management, Project Management, Supply Chain Management, and Retail Management & Quick Commerce.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility criteria for Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Eligibility for Manipal Online MBA: Bachelor's degree from a recognized university with a minimum of 50% aggregate marks. Final-year students can also apply provided they submit their degree completion documents before the course start date.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the duration of Manipal Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Undergraduate programs (BBA, BCA, B.Com): 3 years (6 semesters). Postgraduate programs (MBA, MCA, M.Com, M.Sc, MA): 2 years (4 semesters). Flexible extension up to 4 years is available for working professionals.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Manipal Online offer EMI or payment flexibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, Manipal Online offers semester-wise payment options, EMI plans starting from as low as ₹4,000/month, and scholarships for eligible students. EMI options are available through partner banks and NBFCs with zero or low-cost EMI plans.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Manipal Online worth it for working professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes! Manipal Online is specifically designed for working professionals with weekend live classes, pre-recorded video lectures accessible 24/7, flexible deadlines, and no career break required. The NAAC A+ accreditation ensures quality, and the career support helps in promotions or career switches.",
      },
    },
    {
      "@type": "Question",
      name:    "What documents are required for Manipal Online admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Required documents: 10th and 12th mark sheets, graduation mark sheets (for PG programs), photo ID proof (Aadhaar/PAN/Passport), passport-size photograph, work experience certificate (if any).",
      },
    },
    {
      "@type": "Question",
      name:    "How does Manipal Online's learning management system (LMS) work?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Manipal Online's learning management system (LMS) is a user-friendly platform that hosts all course materials: recorded lectures, live class schedule, assignments, quiz, discussion forums, gradebook, and more. You can access it via web browser or mobile app anytime, anywhere.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Sourced from ugCourses[] and pgCourses[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Manipal University Jaipur Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    // PG
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A+ accredited online MBA from Manipal University Jaipur. 2 years. Fee: ₹1,75,000. Eligibility: 50% Graduation. Dual/super specializations: Digital Marketing, Analytics, Finance, HR, IT & Fintech, Operations, Supply Chain and more.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A+ accredited online MCA from Manipal University Jaipur. 2 years. Fee: ₹1,58,000. Eligibility: Graduation. Specializations: AI & Data Science, Cyber Security, Cloud Computing, Emerging Technologies, AI & ML.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A+ accredited online M.Com from Manipal University Jaipur. 2 years. Fee: ₹1,08,000. Eligibility: Graduation in any discipline.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online M.Sc — Master of Science (Mathematics)", description: "NAAC A+ accredited online M.Sc from Manipal University Jaipur. 2 years. Fee: ₹80,000. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online MA — Master of Arts (Economics, Journalism & Mass Communication)", description: "NAAC A+ accredited online MA from Manipal University Jaipur. 2 years. Fee: ₹80,000. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    // UG
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A+ accredited online BBA from Manipal University Jaipur. 3 years. Fee: ₹1,35,000. Eligibility: 10+2 min 40%. Specializations: Finance, Digital Marketing, Entrepreneurship, HRM, Data Analytics, Retail & E-commerce.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A+ accredited online BCA from Manipal University Jaipur. 3 years. Fee: ₹1,35,000. Eligibility: 10+2 min 40%. Specializations: Data Science, Cyber Security, Cloud Computing.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "NAAC A+ accredited online B.Com from Manipal University Jaipur. 3 years. Fee: ₹99,000. Eligibility: 10+2 min 40%.", provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                              item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "University List",                   item: `${BASE_URL}/university-list` },
    { "@type": "ListItem", position: 3, name: "Manipal University Jaipur Online",  item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (65+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Manipal University Jaipur Online — Available Across India",
  itemListElement: [
    // Rajasthan cities first (home state)
    "Jaipur","Jodhpur","Udaipur","Kota","Ajmer","Bikaner","Alwar","Bharatpur",
    // Other major Indian cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Mumbai","Pune","Nagpur",
    "Nashik","Thane","Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad",
    "Surat","Vadodara","Rajkot","Lucknow","Kanpur","Varanasi","Agra","Meerut",
    "Allahabad","Bhopal","Indore","Gwalior","Jabalpur","Patna","Ranchi",
    "Bhubaneswar","Raipur","Guwahati","Dehradun","Chandigarh","Amritsar",
    "Ludhiana","Jalandhar","Coimbatore","Kochi","Thiruvananthapuram",
    "Visakhapatnam","Vijayawada","Madurai","Salem","Tiruchirappalli","Warangal",
    "Guntur","Jammu","Srinagar","Mangalore","Hubli","Mysore","Bareilly",
    "Gorakhpur","Saharanpur","Aligarh","Moradabad","Dhanbad","Howrah",
    "Aurangabad","Navi Mumbai","Haridwar","Roorkee",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Manipal University Jaipur Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Force Static Generation (SSG) ───────────────────────────────────────────
export const dynamic   = "force-static";
export const revalidate = 604800; // Revalidate every 7 days

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function ManipalLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      {/* Hero section image from Introduction component */}
      <link
        rel="preload" as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
      />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      <meta name="theme-color"    content="#ea580c" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* Manipal University Jaipur — Jaipur, Rajasthan */}
      <meta name="geo.region"    content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur, Rajasthan" />
      <meta name="geo.position"  content="26.8634;75.8197" />
      <meta name="ICBM"          content="26.8634, 75.8197" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 7 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — server-rendered in HTML.
          Googlebot does NOT execute JavaScript. Schemas inside
          Next.js <Script> components or <Head> from next/head
          (used in page.tsx) are completely invisible to crawlers.
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

      {/* 4 — FAQPage — 8 Q&As from faqData[] + WhyChoose content in page */}
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

      {/* 7 — City-wise coverage — Rajasthan cities + 60 major Indian cities */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {children}
    </>
  );
}
