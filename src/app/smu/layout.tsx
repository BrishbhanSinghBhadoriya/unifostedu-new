import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/smu`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Sikkim Manipal University Online Admission 2026 | MBA, MCA, B.Com, BA — NAAC A+",
    template: "%s | SMU Online 2026 — Sikkim Manipal University",
  },

  description:
    "Sikkim Manipal University (SMU) Online Admission 2026 open. Apply for NAAC A+ accredited, UGC-approved online MBA, MCA, B.Com, BA, BBA, M.Com, MA programs. Dual specialization, AI-proctored exams, EMI from ₹2,083/month. 150+ hiring partners. July 2026 batch.",

  keywords: [
    "Sikkim Manipal University Online",
    "SMU Online",
    "SMU Online admission 2026",
    "Sikkim Manipal University Online apply now",
    "SMU Online MBA 2026",
    "SMU Online MCA 2026",
    "SMU Online B.Com 2026",
    "SMU Online BA 2026",
    "SMU Online BBA 2026",
    "SMU Online M.Com 2026",
    "SMU Online MA 2026",
    "SMU fees 2026",
    "SMU Online MBA fees",
    "SMU Online MBA dual specialization",
    "SMU Online MBA placement",
    "NAAC A+ online university",
    "UGC approved online degree SMU",
    "online MBA working professionals SMU",
    "SMU Online AI proctored exams",
    "SMU Online EMI",
    "SMU Online scholarship",
    "SMU Online admission last date 2026",
    "best online university India SMU",
    "SMU Online MBA Delhi",
    "SMU Online admission Mumbai",
    "SMU Online MBA Bangalore",
    "SMU Online admission Noida",
    "SMU Online MBA Kolkata",
    "SMU Online Hyderabad",
    "SMU Online Chennai",
  ],

  icons: [
    { url: "/images/logos/manipal/favicon.ico" },
    { url: "/images/logos/manipal/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/manipal/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/manipal/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/manipal/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/manipal/apple-touch-icon.png", type: "image/png" },
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "Sikkim Manipal University Online Admission 2026 | MBA, MCA, B.Com — NAAC A+",
    description:
      "SMU Online — UGC & NAAC A+ approved degrees. MBA ₹1.1L, BCom ₹75K, MCA ₹98K. Dual specialization, AI-proctored exams, EMI from ₹2,083/month. 150+ hiring partners. July 2026 batch open. Apply free!",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
        width: 1200,
        height: 630,
        alt: "Sikkim Manipal University Online Programs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SMU Online 2026 | MBA, MCA, B.Com — NAAC A+ | Sikkim Manipal University",
    description:
      "UGC-approved, NAAC A+ online MBA, MCA, B.Com, BA from Sikkim Manipal University. Dual specialization, EMI ₹2,083/month, 150+ hiring partners. July 2026 batch.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp"],
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
  name: "Sikkim Manipal University Online",
  alternateName: ["SMU Online", "Sikkim Manipal University Distance Education", "SMU"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
  description:
    "Sikkim Manipal University Online offers NAAC A+ accredited, UGC-approved online degree programs including MBA (Dual Specialization), MCA, B.Com, BA, BBA, M.Com and MA with AI-proctored exams and 150+ hiring partners.",
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gangtok",
    addressRegion: "Sikkim",
    postalCode: "737102",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/SikkimManipalUniversity",
    "https://www.instagram.com/sikkimmanipaluniversity",
    "https://www.linkedin.com/school/sikkim-manipal-university/",
    "https://x.com/SMUOnline",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "600000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── 2. WebSite + SearchAction ─────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Sikkim Manipal University Online",
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
  name: "Sikkim Manipal University Online Admission 2026 | Apply Now",
  description:
    "Apply for SMU Online UG and PG programs. NAAC A+ accredited, UGC-approved degrees with 150+ hiring partners, AI-proctored exams and EMI from ₹2,083/month.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Sikkim Manipal University Online",
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
      name: "Is SMU Online degree valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SMU Online degrees are UGC-DEB approved and hold the same validity as a regular degree for government jobs, promotions, and competitive exams across India.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does Sikkim Manipal University Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMU Online offers: MBA (Dual Specialization) ₹1,10,000, MCA ₹98,000, B.Com ₹75,000, BA ₹75,000, BBA ₹90,000, M.Com ₹75,000, MA ₹75,000. All programs are NAAC A+ accredited and UGC-DEB approved.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals pursue SMU Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Programs are designed for working professionals — 100% online, flexible live + recorded classes, and AI-powered LMS ensure zero disruption to your career.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations are available in SMU Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMU Online MBA offers Dual Specialization. Choose any two from: Finance, Marketing, Human Resources, Systems, Operations & Supply Chain Management, and Healthcare Management.",
      },
    },
    {
      "@type": "Question",
      name: "How are exams conducted at SMU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exams are AI-proctored and conducted online from home. Students need a laptop/desktop with Windows OS and Google Chrome. Results are published on the student portal.",
      },
    },
    {
      "@type": "Question",
      name: "What EMI options are available at SMU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-cost EMI starts at ₹2,083/month for B.Com (₹75K), ₹4,583/month for MBA (₹1.1L). Scholarships up to 30% available for NE students, defence personnel, differently-abled, and SMU alumni.",
      },
    },
    {
      "@type": "Question",
      name: "Does SMU Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SMU's Career Studio offers resume building, LinkedIn optimization, mock interviews, virtual job fairs and access to 150+ corporate hiring partners including EY, Goldman Sachs, Accenture, HP and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does the SMU Online degree mention 'Online' on the certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Graduates receive a standard Sikkim Manipal University degree certificate without any mention of 'Online' or 'Distance' mode — fully equivalent to a regular on-campus degree.",
      },
    },
  ],
};

// ── 5. ItemList + Course — all programs with fees ─────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sikkim Manipal University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Online MBA — Dual Specialization",
        description: "NAAC A+ accredited online MBA from SMU with dual specialization in Finance, Marketing, HR, Systems, Operations & SCM, Healthcare. 2 years, 4 semesters. Fee: ₹1,10,000 (₹27,500/semester). EMI: ₹4,583/month.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: `${PAGE_URL}/Courses_pages/mba-online`,
        offers: { "@type": "Offer", price: "110000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Online MCA — Master of Computer Applications",
        description: "NAAC A+ accredited online MCA from SMU. 2 years. Fee: ₹98,000. UGC-DEB approved.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: `${PAGE_URL}/Courses_pages/mca-online`,
        offers: { "@type": "Offer", price: "98000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Online M.Com — Master of Commerce",
        description: "NAAC A+ accredited online M.Com from SMU. 2 years. Fee: ₹75,000. Specializations: Finance, Marketing.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: `${PAGE_URL}/Courses_pages/mcom-online`,
        offers: { "@type": "Offer", price: "75000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Online MA — Master of Arts",
        description: "NAAC A+ accredited online MA from SMU. 2 years. Fee: ₹75,000. Specializations: English, Sociology, Political Science.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: `${PAGE_URL}/Courses_pages/ma-online`,
        offers: { "@type": "Offer", price: "75000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Online B.Com — Bachelor of Commerce",
        description: "NAAC A+ accredited online B.Com from SMU. 3 years, 6 semesters. Fee: ₹75,000 (₹12,500/semester). EMI: ₹2,083/month. No 'Online' on certificate.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: `${PAGE_URL}/Courses_pages/bcom-online`,
        offers: { "@type": "Offer", price: "75000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "Online BBA — Bachelor of Business Administration",
        description: "NAAC A+ accredited online BBA from SMU. 3 years. Fee: ₹90,000. Eligibility: 10+2.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: { "@type": "Offer", price: "90000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Course",
        name: "Online BA — Bachelor of Arts",
        description: "NAAC A+ accredited online BA from SMU. 3 years. Fee: ₹75,000. Specializations: English, Sociology, Political Science.",
        provider: { "@type": "EducationalOrganization", name: "Sikkim Manipal University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: `${PAGE_URL}/Courses_pages/ba-online`,
        offers: { "@type": "Offer", price: "75000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
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
    { "@type": "ListItem", position: 2, name: "Sikkim Manipal University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── 7. City-wise coverage ─────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sikkim Manipal University Online — Available Across India",
  itemListElement: [
    // NE India first (strong local relevance for SMU)
    "Gangtok","Siliguri","Guwahati","Shillong","Imphal","Agartala","Itanagar",
    "Aizawl","Kohima","Dimapur","Jorhat","Tezpur","Silchar",
    // Major Indian cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Mumbai","Pune",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Jaipur","Lucknow",
    "Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat","Vadodara",
    "Amritsar","Ludhiana","Jalandhar","Dehradun","Agra","Varanasi","Kanpur",
    "Meerut","Coimbatore","Kochi","Visakhapatnam","Vijayawada","Bhubaneswar",
    "Ranchi","Raipur","Jodhpur","Udaipur","Nashik","Thane","Navi Mumbai",
    "Allahabad","Bareilly","Moradabad","Gorakhpur","Jammu","Dhanbad",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Sikkim Manipal University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function SMULayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp"
      />
      <meta name="theme-color" content="#f26722" />
      <meta name="geo.region" content="IN-SK" />
      <meta name="geo.placename" content="Gangtok, Sikkim" />
      <meta name="geo.position" content="27.3389;88.6065" />
      <meta name="ICBM" content="27.3389, 88.6065" />

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {/* 3 — LandingPage + datePublished + dateModified */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      {/* 4 — FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* 5 — ItemList + Course — all 7 programs with exact fees */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* 7 — City-wise coverage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {children}
    </>
  );
}
