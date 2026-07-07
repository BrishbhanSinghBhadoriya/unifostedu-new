import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/amrita`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Amrita Vishwa Vidyapeetham Online Admission 2026 | MBA, MCA, BBA, BCA — NAAC A++",
    template: "%s | Amrita University Online 2026",
  },

  description:
    "Amrita Vishwa Vidyapeetham Online Admission 2026 open. Apply for NAAC A++ accredited, UGC approved online MBA, MCA, BBA, BCA, B.Com degree programs. NIRF Rank 8, WES recognized. India's #1 private university with 100% placement assistance. EMI ₹7,500/month.",

  keywords: [
    "Amrita Vishwa Vidyapeetham online degree",
    "Amrita online university admission 2026",
    "Amrita online MBA 2026",
    "Online MBA from Amrita University",
    "Amrita online MCA fees",
    "Amrita online BBA eligibility",
    "UGC approved Amrita online degree",
    "NAAC A++ Amrita online degree",
    "Amrita online admission process",
    "Amrita university online placement support",
    "best online university in India Amrita",
    "Amrita online bcom fees 2026",
    "Amrita online degree validity",
    "Amrita Vishwa Vidyapeetham distance learning",
    "NIRF rank 8 online university India",
    "WES recognized online degree India",
    "Amrita online MBA fees per semester",
    "Amrita online MBA specializations",
    "Amrita online MBA AI Business Analytics",
    "Amrita online MBA FinTech ESG",
    "Amrita online MBA working professionals",
    "Amrita online MBA no entrance exam",
    "Amrita online EMI options",
    "Amrita online scholarship 2026",
    "Amrita online admission last date 2026",
    "Amrita online MBA Delhi",
    "Amrita online admission Mumbai",
    "Amrita online MBA Bangalore",
    "Amrita online admission Noida",
    "Amrita online MBA Chennai",
    "Amrita online MBA Hyderabad",
    "top online MBA India 2026 Amrita",
  ],

  icons: [
    { url: "/images/logos/amrita/favicon.ico" },
    { url: "/images/logos/amrita/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/amrita/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/amrita/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/amrita/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/amrita/apple-touch-icon.png", type: "image/png" },
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },

  openGraph: {
    title: "Amrita University Online Admission 2026 | NAAC A++ | NIRF Rank 8",
    description:
      "Amrita Vishwa Vidyapeetham Online — NIRF Rank 8, NAAC A++, WES recognized. Online MBA, MCA, BBA, BCA, B.Com with 100% placement support. EMI ₹7,500/month. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amrita.webp",
        width: 1200,
        height: 630,
        alt: "Amrita University Online Admission 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amrita University Online 2026 | MBA, MCA, BBA, BCA | NAAC A++",
    description:
      "Apply for Amrita University Online — NIRF Rank 8, NAAC A++, WES recognized. Online MBA, MCA, BBA, BCA with 100% placement. EMI ₹7,500/month.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amrita.webp"],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "CollegeOrUniversity"],
  name: "Amrita Vishwa Vidyapeetham Online",
  alternateName: ["Amrita Online", "Amrita University Online", "Amrita Deemed University Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328966/amritalogo_lswo1a.png",
  description: "Amrita Vishwa Vidyapeetham Online offers NAAC A++ accredited, UGC-approved online degrees. NIRF Rank 8, WES recognized (USA & Canada). Online MBA, MCA, BBA, BCA, B.Com with 100% placement support from India's #1 private university.",
  foundingDate: "1994",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641112",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/amritavishwa",
    "https://www.linkedin.com/school/amrita-vishwa-vidyapeetham/",
    "https://twitter.com/AmritaUni",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12800",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── WebSite ───────────────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Amrita University Online",
  url: PAGE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ── LandingPage ───────────────────────────────────────────────────────────────
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LandingPage"],
  name: "Amrita Vishwa Vidyapeetham Online Admission 2026 | Apply Now",
  description:
    "Apply for Amrita University Online UG and PG programs. NAAC A++ accredited, UGC-approved, NIRF Rank 8 degrees with 100% placement support and EMI from ₹7,500/month.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Amrita Vishwa Vidyapeetham Online",
    url: PAGE_URL,
  },
};

// ── FAQPage ───────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the key recognitions of Amrita Vishwa Vidyapeetham Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amrita Vishwa Vidyapeetham is NAAC A++ accredited, NIRF Rank 8 (India's top private university), WES recognized (USA & Canada). Online programs are UGC-approved and globally recognized.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for Amrita Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amrita Online MBA total fee is ₹1,70,000 (₹42,500/semester × 4). EMI from ₹7,500/month. Specializations include AI, Business Analytics (with Grant Thornton), FinTech, ESG, Finance, Marketing, HR, Operations and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an entrance exam for Amrita University online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No entrance exam required for most programs. Admission is based on academic performance. Final-year students can also apply.",
      },
    },
    {
      "@type": "Question",
      name: "Are online degrees from Amrita valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amrita online degrees are UGC-entitled making them completely valid for all government and private sector jobs, UPSC, PSUs in India and abroad.",
      },
    },
    {
      "@type": "Question",
      name: "Is Amrita Online MBA WES recognized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amrita University is WES recognized — degrees are valid for higher education and employment in USA and Canada.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does Amrita Vishwa Vidyapeetham Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amrita Online offers: MBA (₹1,70,000, 2 years), MCA (2 years), BBA (3 years), BCA (3 years), B.Com (3 years). All programs are NAAC A++ accredited and UGC-approved.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average salary growth after Amrita Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An average 33.94% salary growth is reported by Amrita Online MBA graduates. Students are from 50+ countries across 28 Indian states.",
      },
    },
    {
      "@type": "Question",
      name: "Does Amrita Online provide placement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amrita Online provides placement assistance including mentorship from industry experts, resume building, mock interviews, and access to 150+ hiring partners including Amazon, Deloitte, EY, HDFC Bank, Honeywell and more.",
      },
    },
  ],
};

// ── ItemList + Course ─────────────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Amrita Vishwa Vidyapeetham Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A++ accredited online MBA from Amrita University. 2 years. Fee: ₹1,70,000 (₹42,500/sem). EMI ₹7,500/month. Specializations: AI, Business Analytics (Grant Thornton), FinTech, ESG, Finance, Marketing, HR, Operations. NIRF Rank 8, WES recognized.", provider: { "@type": "EducationalOrganization", name: "Amrita Vishwa Vidyapeetham Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/online-mba`, offers: { "@type": "Offer", price: "170000", priceCurrency: "INR", availability: "https://schema.org/InStock" } } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A++ accredited online MCA from Amrita University. 2 years. UGC-approved. NIRF Rank 8.", provider: { "@type": "EducationalOrganization", name: "Amrita Vishwa Vidyapeetham Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/online-mca` } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A++ accredited online BBA from Amrita University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amrita Vishwa Vidyapeetham Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${PAGE_URL}/online-bba` } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A++ accredited online BCA from Amrita University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amrita Vishwa Vidyapeetham Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${PAGE_URL}/online-bca` } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "NAAC A++ accredited online B.Com from Amrita University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amrita Vishwa Vidyapeetham Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${PAGE_URL}/online-bcom` } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A++ accredited online M.Com from Amrita University. 2 years. Eligibility: Graduation in Commerce.", provider: { "@type": "EducationalOrganization", name: "Amrita Vishwa Vidyapeetham Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/online-mcom` } },
  ],
};

// ── BreadcrumbList ────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "University List", item: `${BASE_URL}/university-list` },
    { "@type": "ListItem", position: 3, name: "Amrita Vishwa Vidyapeetham Online", item: PAGE_URL },
    { "@type": "ListItem", position: 4, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── City-wise coverage ────────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Amrita Vishwa Vidyapeetham Online — Available Across India",
  itemListElement: [
    // South India cities first (home region)
    "Coimbatore","Chennai","Bangalore","Hyderabad","Kochi","Thiruvananthapuram",
    "Madurai","Salem","Tiruchirappalli","Visakhapatnam","Vijayawada","Guntur",
    "Warangal","Mangalore","Hubli","Mysore","Tiruppur","Vellore","Puducherry",
    // Other major cities
    "Delhi","Noida","Mumbai","Pune","Ahmedabad","Jaipur","Lucknow","Kolkata",
    "Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat","Vadodara",
    "Ghaziabad","Faridabad","Gurugram","Dehradun","Amritsar","Ludhiana",
    "Agra","Varanasi","Kanpur","Meerut","Allahabad","Ranchi","Bhubaneswar",
    "Raipur","Guwahati","Jammu","Jodhpur","Udaipur","Nashik","Thane",
    "Navi Mumbai","Rajkot","Bareilly","Gorakhpur","Aligarh","Moradabad",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Amrita Vishwa Vidyapeetham Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export const revalidate = 604800;

export default function AmritaLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="preload" href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/amrita_girl.webp" as="image" type="image/webp" />
      <meta name="theme-color" content="#c0392b" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore, Tamil Nadu" />
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {children}
    </>
  );
}


