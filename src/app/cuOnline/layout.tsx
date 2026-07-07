
import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/cuOnline`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Chandigarh University Online Admission 2026 | MBA, BBA, MCA, BCA — NAAC A+",
    template: "%s | CU Online 2026 — Chandigarh University",
  },

  description:
    "Chandigarh University (CU) Online Admission 2026 open. Apply for NAAC A+ accredited, UGC-approved online MBA, MCA, BBA, BCA, MA, M.Sc programs. 22+ MBA specializations, KPMG Business Analytics, AWS Academy, 100% placement assistance, EMI available. July 2026 batch.",

  keywords: [
    "Chandigarh University Online",
    "CU Online",
    "CU Online admission 2026",
    "Chandigarh University Online apply now",
    "CU Online MBA 2026",
    "CU Online MCA 2026",
    "CU Online BBA 2026",
    "CU Online BCA 2026",
    "CU Online MA 2026",
    "CU Online MSc 2026",
    "CU fees 2026",
    "CU Online MBA fees",
    "CU Online MBA specializations",
    "CU Online MBA placement",
    "CU Online KPMG Business Analytics",
    "NAAC A+ online university",
    "UGC approved online degree CU",
    "online MBA working professionals CU",
    "CU Online BCA admission",
    "CU Online AWS Academy",
    "CU Online AI ML",
    "CU Online admission last date 2026",
    "best online university Chandigarh",
    "top online university Punjab",
    "CU Online MBA Chandigarh",
    "CU Online admission Mohali",
    "CU Online MBA Delhi",
    "CU Online admission Mumbai",
    "CU Online MBA Bangalore",
    "CU Online admission Noida",
    "CU Online MBA Hyderabad",
    "CU Online Chennai",
    "CU Online Pune",
  ],

  icons: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/apple-touch-icon.png", type: "image/png" },
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "Chandigarh University Online Admission 2026 | MBA, BBA, MCA, BCA — NAAC A+",
    description:
      "CU Online — UGC & NAAC A+ approved degrees. MBA ₹2.2L, BBA ₹1.68L, MCA ₹1.55L, BCA ₹1.77L. 22+ specializations, KPMG certification, AWS Academy, 100% placement assistance. July 2026 batch open. Apply free!",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp",
        width: 1200,
        height: 630,
        alt: "Chandigarh University Online Programs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CU Online 2026 | MBA, MCA, BBA, BCA — NAAC A+ | Chandigarh University",
    description:
      "UGC-approved, NAAC A+ online MBA, MCA, BBA, BCA from Chandigarh University. 22+ specializations, KPMG certification, AWS Academy, 100% placement assistance. July 2026 batch.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp"],
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

// ── 1. EducationalOrganization + AggregateRating ──────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "CollegeOrUniversity"],
  name: "Chandigarh University Online",
  alternateName: ["CU Online", "Chandigarh University Distance Education", "CU Online Chandigarh"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/logo-cu_aoiyom.png",
  description:
    "Chandigarh University Online offers NAAC A+ accredited, UGC-approved online degree programs including MBA (22+ specializations), MCA, BBA, BCA, MA and M.Sc with KPMG certification, AWS Academy partnership and 100% placement assistance.",
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NH-05 Chandigarh-Ludhiana Highway",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    postalCode: "140413",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7042646766",
    email: "info@unifostedu.com",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/chandigarhuniversity",
    "https://www.instagram.com/chandigarhuniversity",
    "https://www.linkedin.com/school/chandigarh-university/",
    "https://x.com/ChandigarhUni",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "30000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── 2. WebSite + SearchAction ─────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Chandigarh University Online",
  url: PAGE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ── 3. LandingPage + datePublished + dateModified ─────────────────────────────
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LandingPage"],
  name: "Chandigarh University Online Admission 2026 | Apply Now",
  description:
    "Apply for CU Online UG and PG programs. NAAC A+ accredited, UGC-approved degrees with 22+ specializations, KPMG certification, AWS Academy and 100% placement assistance.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Chandigarh University Online",
    url: PAGE_URL,
  },
};

// ── 4. FAQPage ────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is CU Online degree valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CU Online degrees are UGC-DEB approved and hold the same validity as a regular degree for government jobs, promotions, and competitive exams across India.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does Chandigarh University Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CU Online offers: MBA (22+ specializations) ₹2,20,000, MBA-KPMG ₹2,00,000, MCA (AI/ML, AWS, Data Analytics) ₹1,55,000, BBA ₹1,68,000, BBA-KPMG ₹1,90,000, BCA ₹1,77,000, MA ₹1,00,000, M.Sc Data Science ₹1,46,668. All programs are NAAC A+ accredited and UGC-DEB approved.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals pursue CU Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Programs are designed for working professionals — 100% online, flexible live + recorded classes, and advanced LMS ensure zero disruption to your career.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations are available in CU Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CU Online MBA offers 22+ specializations including: HR, Marketing, Finance, IT, Operations, Digital Marketing, Data Science & AI, FinTech, International Business, Entrepreneurship, Banking & Insurance, Hospital Management, and more. MBA-KPMG Business Analytics is also available.",
      },
    },
    {
      "@type": "Question",
      name: "How are exams conducted at CU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exams are conducted online with on-demand scheduling flexibility. Students can take exams from home using the secure online proctoring system.",
      },
    },
    {
      "@type": "Question",
      name: "What payment options are available at CU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CU Online offers flexible payment options including one-time payment, semester-wise payments, no-cost EMI, and education loans. Scholarships available for eligible students.",
      },
    },
    {
      "@type": "Question",
      name: "Does CU Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CU Online provides 100% placement assistance including resume building, mock interviews, career counseling, and access to 150+ corporate partners including Amazon, Deloitte, Infosys, Wipro, TCS, IBM, Accenture and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does the CU Online degree mention 'Online' on the certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Graduates receive a standard Chandigarh University degree certificate without any mention of 'Online' or 'Distance' mode — fully equivalent to a regular on-campus degree.",
      },
    },
  ],
};

// ── 5. ItemList + Course — all programs with fees ─────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Chandigarh University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Online MBA — 22+ Specializations",
        description: "NAAC A+ accredited online MBA from CU with 22+ specializations including HR, Marketing, Finance, IT, Operations, Digital Marketing, Data Science & AI, FinTech, International Business. 2 years, 4 semesters. Fee: ₹2,20,000. 100% placement assistance.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "220000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Online MBA — Business Analytics (KPMG)",
        description: "NAAC A+ accredited online MBA with KPMG Business Analytics certification. 2 years. Fee: ₹2,00,000. Industry-recognized credential.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "200000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Online MCA — AI & ML / Cloud Computing (AWS) / Data Analytics",
        description: "NAAC A+ accredited online MCA with specializations in AI & ML, Cloud Computing (AWS Academy), and Data Analytics. 2 years. Fee: ₹1,55,000. Industry-aligned curriculum.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "155000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Online MA — Master of Arts",
        description: "NAAC A+ accredited online MA in English and Economics. 2 years. Fee: ₹1,00,000. Eligibility: Graduation in any discipline.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "100000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Online M.Sc — Data Science",
        description: "NAAC A+ accredited online M.Sc in Data Science. 2 years. Fee: ₹1,46,668. Cutting-edge curriculum for data professionals.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "146668", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "Online BBA — Bachelor of Business Administration",
        description: "NAAC A+ accredited online BBA with 14 specializations including Marketing, HRM, Digital Marketing, FinTech, AI. 3 years, 6 semesters. Fee: ₹1,68,000. No 'Online' on certificate.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "168000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Course",
        name: "Online BBA — Business Analytics (KPMG)",
        description: "NAAC A+ accredited online BBA with KPMG Business Analytics certification. 3 years. Fee: ₹1,90,000. Industry-recognized credential.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "190000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Course",
        name: "Online BCA — Bachelor of Computer Applications",
        description: "NAAC A+ accredited online BCA. 3 years, 6 semesters. Fee: ₹1,77,000. Eligibility: 10+2 or equivalent.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "177000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Course",
        name: "Online BA-JMC — Journalism & Mass Communication",
        description: "NAAC A+ accredited online BA in Journalism & Mass Communication. 3 years, 6 semesters. Fee: ₹1,75,000. Eligibility: 10+2.",
        provider: { "@type": "EducationalOrganization", name: "Chandigarh University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "175000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
  ],
};

// ── 6. BreadcrumbList ─────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Chandigarh University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── 7. City-wise coverage ─────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Chandigarh University Online — Available Across India",
  itemListElement: [
    // Punjab & UT Chandigarh region first
    "Chandigarh","Mohali","Panchkula","Amritsar","Ludhiana","Jalandhar","Patiala",
    "Bathinda","Pathankot","Hoshiarpur","Zirakpur","Kharar","Moga","Firozpur",
    // Major metros & cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Mumbai","Pune",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Jaipur",
    "Lucknow","Bhopal","Indore","Patna","Nagpur","Vadodara",
    "Dehradun","Agra","Varanasi","Meerut","Allahabad","Kanpur",
    "Coimbatore","Kochi","Visakhapatnam","Vijayawada","Bhubaneswar","Ranchi",
    "Raipur","Jodhpur","Udaipur","Nashik","Thane","Navi Mumbai","Bareilly",
    "Moradabad","Gorakhpur","Jammu","Dhanbad","Rajkot","Kota","Gwalior",
    "Jabalpur","Guwahati","Haridwar","Roorkee","Shimla","Srinagar","Hubli",
    "Mangalore","Mysore","Madurai","Salem","Tiruppur","Warangal","Guntur",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Chandigarh University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function ChandigarhLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327055/banner-cu1_a6rmh0.webp"
      />
      <meta name="theme-color" content="#e60000" />
      <meta name="geo.region" content="IN-PB" />
      <meta name="geo.placename" content="Mohali, Punjab" />
      <meta name="geo.position" content="30.7333;76.7794" />
      <meta name="ICBM" content="30.7333, 76.7794" />

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {/* 3 — LandingPage + datePublished + dateModified */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      {/* 4 — FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* 5 — ItemList + Course — all 9 programs with exact fees */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* 7 — City-wise coverage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {children}
    </>
  );
}
