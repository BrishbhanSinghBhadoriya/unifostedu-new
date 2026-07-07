import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/dypatil`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Dr. DY Patil University Online Admission 2026 | MBA, MCA, BBA, BCA — NAAC A++",
    template: "%s | DPU Online 2026 — Dr. DY Patil University",
  },

  description:
    "Dr. DY Patil University (DPU) Online Admission 2026 open. Apply for NAAC A++ accredited, UGC-approved online MBA, MCA, BBA, BCA programs. 15+ MBA specializations, Zero Cost EMI, scholarship up to ₹10,000, 100% placement assistance. July 2026 batch.",

  keywords: [
    "Dr DY Patil University Online",
    "DPU Online",
    "DPU Online admission 2026",
    "Dr DY Patil Online apply now",
    "DPU Online MBA 2026",
    "DPU Online MCA 2026",
    "DPU Online BBA 2026",
    "DPU Online BCA 2026",
    "DY Patil fees 2026",
    "DPU Online MBA fees",
    "DPU Online MBA specializations",
    "DPU Online MBA placement",
    "DY Patil healthcare management MBA",
    "DY Patil business analytics MBA",
    "DY Patil AI ML MBA",
    "NAAC A++ online university",
    "UGC approved online degree DY Patil",
    "online MBA working professionals DY Patil",
    "DPU Online zero cost EMI",
    "DY Patil online scholarship",
    "DY Patil online admission last date 2026",
    "best online university India DY Patil",
    "best online MBA India 2026",
    "best online MCA India 2026",
    "DY Patil online degree government jobs",
    "DPU Online MBA Pune",
    "DY Patil online admission Mumbai",
    "DPU Online MBA Delhi",
    "DY Patil online MBA Bangalore",
    "DPU Online admission Hyderabad",
    "DY Patil online MBA Chennai",
    "DPU Online Kolkata",
    "DY Patil online MBA Noida",
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
    title: "Dr. DY Patil University Online Admission 2026 | MBA, MCA, BBA, BCA — NAAC A++",
    description:
      "DPU Online — UGC & NAAC A++ approved degrees. MBA ₹1.89L, MCA ₹1.4L, BBA ₹1.45L. 15+ specializations, Zero Cost EMI, scholarship up to ₹10K, 100% placement assistance. July 2026 batch open. Apply free!",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp",
        width: 1200,
        height: 630,
        alt: "Dr. DY Patil University Online Programs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DPU Online 2026 | MBA, MCA, BBA, BCA — NAAC A++ | Dr. DY Patil University",
    description:
      "UGC-approved, NAAC A++ online MBA, MCA, BBA, BCA from Dr. DY Patil University. 15+ specializations, Zero Cost EMI, scholarship up to ₹10K, 100% placement assistance. July 2026 batch.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp"],
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
  name: "Dr. DY Patil University Online",
  alternateName: ["DPU Online", "DY Patil Online", "Dr. D.Y. Patil Vidyapeeth Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327128/dpulogo_pjp6mc.png",
  description:
    "Dr. DY Patil University Online offers NAAC A++ accredited, UGC-approved online degree programs including MBA (15+ specializations), MCA, BBA and BCA with Zero Cost EMI, scholarship up to ₹10,000 and 100% placement assistance.",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sant Tukaram Nagar, Pimpri",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411018",
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
    "https://www.facebook.com/dypatiluniversity",
    "https://www.instagram.com/dypatiluniversity",
    "https://www.linkedin.com/school/dr-d-y-patil-vidyapeeth-pune/",
    "https://x.com/DYPatilPune",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── 2. WebSite + SearchAction ─────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Dr. DY Patil University Online",
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
  name: "Dr. DY Patil University Online Admission 2026 | Apply Now",
  description:
    "Apply for DPU Online UG and PG programs. NAAC A++ accredited, UGC-approved degrees with 15+ specializations, Zero Cost EMI and 100% placement assistance.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Dr. DY Patil University Online",
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
      name: "Is DPU Online degree valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DPU Online degrees are UGC-DEB approved and hold the same validity as a regular degree for government jobs, promotions, and competitive exams across India.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does Dr. DY Patil University Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPU Online offers: MBA (15+ specializations) ₹1,89,400, MCA ₹1,40,000, BBA ₹1,45,400, BCA. All programs are NAAC A++ accredited and UGC-DEB approved. MBA specializations include Marketing, Finance, HR, IT, Healthcare Management, Business Analytics, AI & ML, Digital Marketing, FinTech and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals pursue DPU Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Programs are designed for working professionals — 100% online, flexible live + recorded classes, and advanced LMS ensure zero disruption to your career.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations are available in DPU Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPU Online MBA offers 15+ specializations including: Marketing Management, Finance Management, HR Management, IT Management, Healthcare Management, Business Analytics, AI & Machine Learning, Digital Marketing, FinTech, Operations Management, International Business, Entrepreneurship, Retail Management, Supply Chain Management, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How are exams conducted at DPU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exams are conducted online with flexible scheduling. Students can take exams from home using the secure proctoring system with proper monitoring to maintain academic integrity.",
      },
    },
    {
      "@type": "Question",
      name: "What is Zero Cost EMI at DPU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero Cost EMI means you can pay the program fee in monthly installments without any additional interest charges. This makes quality education affordable. Scholarships up to ₹10,000 are also available for eligible students.",
      },
    },
    {
      "@type": "Question",
      name: "Does DPU Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DPU Online provides 100% placement assistance including resume building, mock interviews, career counseling, and access to corporate partners including TCS, Infosys, Wipro, Deloitte, Accenture, Amazon, HDFC Bank, ICICI Bank and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does the DPU Online degree mention 'Online' on the certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Graduates receive a standard Dr. DY Patil University degree certificate without any mention of 'Online' or 'Distance' mode — fully equivalent to a regular on-campus degree.",
      },
    },
  ],
};

// ── 5. ItemList + Course — all programs with fees ─────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dr. DY Patil University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Online MBA — 15+ Specializations",
        description: "NAAC A++ accredited online MBA from DPU with 15+ specializations including Marketing, Finance, HR, IT, Healthcare Management, Business Analytics, AI & ML, Digital Marketing, FinTech. 2 years, 4 semesters. Total fee: ₹1,89,400. Zero Cost EMI available. 100% placement assistance.",
        provider: { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "189400", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Online MCA — Master of Computer Applications",
        description: "NAAC A++ accredited online MCA from Dr. DY Patil University. 2 years. Total fee: ₹1,40,000. Eligibility: Graduation with Mathematics or Computer Science. Comprehensive IT curriculum.",
        provider: { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "140000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Online BBA — Bachelor of Business Administration",
        description: "NAAC A++ accredited online BBA from Dr. DY Patil University. 3 years, 6 semesters. Total fee: ₹1,45,400. Eligibility: 10+2 from any recognized board. Specializations in IT, Marketing, HR, Finance, E-commerce. No 'Online' on certificate.",
        provider: { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "145400", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Online BCA — Bachelor of Computer Applications",
        description: "NAAC A++ accredited online BCA from Dr. DY Patil University. 3 years, 6 semesters. Eligibility: 10+2 from any recognized board. Strong foundation for IT and software careers.",
        provider: { "@type": "EducationalOrganization", name: "Dr. DY Patil University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "145000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
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
    { "@type": "ListItem", position: 2, name: "Dr. DY Patil University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── 7. City-wise coverage ─────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dr. DY Patil University Online — Available Across India",
  itemListElement: [
    // Maharashtra region first (Pune-based university)
    "Pune","Mumbai","Thane","Navi Mumbai","Nashik","Aurangabad","Nagpur","Solapur",
    "Kolhapur","Satara","Ahmednagar","Sangli","Amravati","Akola","Latur",
    // Major metros & cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Bangalore","Hyderabad",
    "Chennai","Kolkata","Ahmedabad","Surat","Vadodara","Rajkot","Jaipur",
    "Lucknow","Chandigarh","Bhopal","Indore","Patna","Raipur","Ranchi",
    "Amritsar","Ludhiana","Jalandhar","Dehradun","Agra","Varanasi","Meerut",
    "Allahabad","Kanpur","Coimbatore","Kochi","Visakhapatnam","Vijayawada",
    "Bhubaneswar","Jodhpur","Udaipur","Kota","Gwalior","Jabalpur","Guwahati",
    "Bareilly","Moradabad","Gorakhpur","Jammu","Dhanbad","Thiruvananthapuram",
    "Mysore","Madurai","Tiruchirappalli","Salem","Tiruppur","Warangal","Guntur",
    "Haridwar","Roorkee","Shimla","Srinagar","Hubli","Mangalore",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Dr. DY Patil University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function DYPATILLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dpu1_wdmyqj.png"
      />
      <meta name="theme-color" content="#b3202e" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune, Maharashtra" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {/* 3 — LandingPage + datePublished + dateModified */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      {/* 4 — FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* 5 — ItemList + Course — all 4 programs with exact fees */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* 7 — City-wise coverage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {children}
    </>
  );
}
