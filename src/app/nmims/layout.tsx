import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/nmims`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "NMIMS Online Admission 2026 | MBA, BBA, B.Com, M.Com — NAAC A++ | Mumbai",
    template: "%s | NMIMS Online 2026",
  },

  description:
    "NMIMS Online Admission 2026 open. Apply for NAAC A++ accredited online MBA, BBA, B.Com, M.Com programs from SVKM's NMIMS Mumbai. UGC-entitled degrees, 100% placement support, Defence scholarship 20%. EMI from ₹2,500/month.",

  keywords: [
    "NMIMS online admission 2026",
    "nmims online mba fees",
    "nmims online mba specializations",
    "nmims online bba",
    "nmims online bcom",
    "nmims online mca",
    "nmims online mcom",
    "NMIMS Distance & Online Education",
    "NMIMS online programs approved by UGC",
    "NMIMS online placement assistance",
    "nmims online degree validity for govt jobs",
    "svkm nmims online Mumbai",
    "best online management university India",
    "NAAC A++ online university Mumbai",
    "NMIMS online MBA marketing",
    "NMIMS online MBA finance",
    "NMIMS online MBA HR",
    "NMIMS online MBA business analytics",
    "NMIMS online MBA WX working executives",
    "NMIMS online MBA dual specialization",
    "NMIMS online no cost EMI",
    "NMIMS online defence scholarship",
    "NMIMS online admission last date 2026",
    "NMIMS online MBA Delhi",
    "NMIMS online admission Mumbai",
    "NMIMS online MBA Bangalore",
    "NMIMS online MBA Pune",
    "NMIMS online admission Noida",
    "top management university online India",
  ],

  icons: [
    { url: "/images/logos/nmims/favicon.ico" },
    { url: "/images/logos/nmims/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/nmims/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/nmims/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/nmims/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/nmims/apple-touch-icon.png", type: "image/png" },
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },

  openGraph: {
    title: "NMIMS Online Admission 2026 | MBA, BBA, B.Com — NAAC A++ | Mumbai",
    description:
      "SVKM's NMIMS Online — NAAC A++, UGC-entitled. Online MBA, BBA, B.Com, M.Com from India's premier management institute. 100% placement support, EMI from ₹2,500/month. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp",
        width: 1200,
        height: 630,
        alt: "NMIMS Online Admission 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NMIMS Online 2026 | MBA, BBA, B.Com | NAAC A++ | UGC Entitled",
    description:
      "SVKM's NMIMS Online — NAAC A++, UGC-entitled. Online MBA, BBA, B.Com, M.Com. 100% placement support, EMI from ₹2,500/month.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp"],
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
  name: "NMIMS Online",
  alternateName: ["SVKM's NMIMS Online", "Narsee Monjee Institute of Management Studies Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327723/nmimslogo_sqp2fz.webp",
  description: "NMIMS Online offers NAAC A++ accredited, UGC-approved online degrees in management and technology from one of India's premier management institutes in Mumbai.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400056",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/NMIMSOnline",
    "https://www.linkedin.com/school/nmims-online/",
    "https://x.com/NMIMS_Official",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "22000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── WebSite ───────────────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — NMIMS Online",
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
  name: "NMIMS Online Admission 2026 | Apply Now",
  description:
    "Apply for NMIMS Online UG and PG programs. NAAC A++ accredited, UGC-entitled degrees with 100% placement support and EMI from ₹2,500/month.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "NMIMS Online",
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "University List", item: `${BASE_URL}/university-list` },
    { "@type": "ListItem", position: 3, name: "NMIMS Online", item: PAGE_URL },
    { "@type": "ListItem", position: 4, name: "Admission 2026", item: PAGE_URL },
  ],
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NMIMS Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A++ accredited online MBA from NMIMS Mumbai. 2 years. Specializations: Marketing, Finance, HR, Business Analytics, Operations. Fee: ₹94,000–₹1,96,000.", provider: { "@type": "EducationalOrganization", name: "NMIMS Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/mba-online`, offers: { "@type": "Offer", price: "131000", priceCurrency: "INR", availability: "https://schema.org/InStock" } } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MBA WX — MBA for Working Executives", description: "NAAC A++ accredited online MBA for working professionals from NMIMS Mumbai. 2 years. Designed for experienced professionals.", provider: { "@type": "EducationalOrganization", name: "NMIMS Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/mba-wx` } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A++ accredited online BBA from NMIMS Mumbai. 3 years. Fee: ₹1,31,000–₹1,45,000. Specializations: Marketing, Finance, Business Analytics.", provider: { "@type": "EducationalOrganization", name: "NMIMS Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${PAGE_URL}/bba-online`, offers: { "@type": "Offer", price: "131000", priceCurrency: "INR", availability: "https://schema.org/InStock" } } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "NAAC A++ accredited online B.Com from NMIMS Mumbai. 3 years. Fee: ₹1,31,000–₹1,45,000.", provider: { "@type": "EducationalOrganization", name: "NMIMS Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${PAGE_URL}/bcom-online`, offers: { "@type": "Offer", price: "131000", priceCurrency: "INR", availability: "https://schema.org/InStock" } } },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is NMIMS Online degree UGC approved and valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NMIMS Online programs are UGC-entitled and NAAC A++ accredited. Degrees are valid for government jobs, private sector employment, higher studies in India and abroad.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for NMIMS Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NMIMS Online MBA fees: ₹1,31,000 for Marketing/Finance electives, ₹1,45,000 for Business Analytics electives. Per semester: ₹25,000–₹30,000. EMI options and Defence scholarship (20%) available.",
      },
    },
    {
      "@type": "Question",
      name: "What are the NMIMS Online MBA specializations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NMIMS Online MBA offers specializations in Marketing Management, Finance Management, Human Resource Management, Operations & Supply Chain Management, International Business and Business Analytics.",
      },
    },
    {
      "@type": "Question",
      name: "What is NMIMS Online MBA WX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MBA WX (Working Executives) is a special NMIMS Online MBA program designed for experienced professionals who want to advance their careers without taking a break from work.",
      },
    },
    {
      "@type": "Question",
      name: "Does NMIMS Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NMIMS Online provides placement support including career counseling, resume building, interview preparation, and access to corporate hiring partners.",
      },
    },
    {
      "@type": "Question",
      name: "What scholarships are available for NMIMS Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NMIMS offers 20% Defence Scholarship for armed forces personnel and their immediate families. Contact a counselor for other scholarship opportunities.",
      },
    },
  ],
};

// ── City-wise coverage ────────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NMIMS Online — Available Across India",
  itemListElement: [
    // Maharashtra first (home state)
    "Mumbai","Pune","Nagpur","Nashik","Thane","Navi Mumbai","Aurangabad",
    "Solapur","Kolhapur","Ahmednagar","Amravati","Latur",
    // Other major cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Bangalore","Hyderabad",
    "Chennai","Kolkata","Ahmedabad","Surat","Vadodara","Rajkot","Jaipur",
    "Lucknow","Kanpur","Varanasi","Agra","Meerut","Allahabad","Bhopal",
    "Indore","Gwalior","Patna","Ranchi","Bhubaneswar","Raipur","Guwahati",
    "Chandigarh","Amritsar","Ludhiana","Dehradun","Jammu","Coimbatore",
    "Kochi","Visakhapatnam","Vijayawada","Madurai","Bareilly","Gorakhpur",
    "Moradabad","Aligarh","Jodhpur","Udaipur","Kota","Bikaner","Dhanbad",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `NMIMS Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export const revalidate = 604800;

export default function NMIMSLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="preload" href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327721/nmims_os8kn9.webp" as="image" type="image/webp" />
      <meta name="theme-color" content="#003580" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />

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


