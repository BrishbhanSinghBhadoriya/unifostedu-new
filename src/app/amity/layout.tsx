import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/amity`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Amity University Online Admission 2026 | MBA, MCA, BBA, BCA, B.Com, M.Com — NAAC A+",
    template: "%s | Amity University Online 2026",
  },

  description:
    "Amity University Online Admission 2026 open. Apply for UGC & AICTE approved online MBA, MCA, BBA, BCA, B.Com, M.Com, MA, M.Sc degree programs. NAAC A+ accredited, 100% placement support, global recognition and No Cost EMI. NIRF Rank 29.",

  keywords: [
    "Amity University Online",
    "amity university online admission 2026",
    "amity online apply now",
    "amity university online mba",
    "amity online mba fees",
    "amity university online bca",
    "amity university online bba",
    "amity university online bcom",
    "amity university online mca",
    "amity online admission 2026",
    "amity online mba fees per semester",
    "amity university online scholarship",
    "amity online degree validity government jobs",
    "best online mba india amity university",
    "amity university online placements",
    "amity online bca fees 2026",
    "amity online mca admission process",
    "amity university online ugc approved",
    "NAAC A+ online university Noida",
    "amity online mba 18 specializations",
    "amity online mba dual specialization",
    "amity online mca ai ml",
    "amity online mca cybersecurity",
    "amity online mba finance",
    "amity online mba digital marketing",
    "amity online mba hr analytics",
    "amity online mba business analytics",
    "amity online mba working professionals",
    "amity online no cost emi",
    "amity online admission last date 2026",
    "amity online MBA Delhi",
    "amity online admission Mumbai",
    "amity online MBA Bangalore",
    "amity online MBA Noida",
    "amity online MBA Hyderabad",
    "amity online MBA Chennai",
    "top online mba university india 2026",
    "NIRF rank 29 online university",
  ],

  icons: [
    { url: "/images/logos/amity/favicon.ico" },
    { url: "/images/logos/amity/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logos/amity/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logos/amity/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/images/logos/amity/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/images/logos/amity/apple-touch-icon.png", type: "image/png" },
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "Amity University Online Admission 2026 | MBA, MCA, BBA, BCA — NAAC A+",
    description:
      "Join Amity University Online — NIRF Rank 29, NAAC A+, UGC & AICTE approved. Online MBA, MCA, BBA, BCA, B.Com, M.Com with 100% placement support, 18+ MBA specializations and No Cost EMI. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online Admission 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity University Online Admission 2026 | MBA, MCA, BBA, BCA",
    description:
      "NIRF Rank 29, NAAC A+ accredited. UGC & AICTE approved online MBA, MCA, BBA, BCA from Amity University. 18+ specializations, No Cost EMI, 100% placement support.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"],
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
  name: "Amity University Online",
  alternateName: ["Amity Online", "Amity University Noida Online", "Amity Distance Education"],
  url: PAGE_URL,
  logo: "https://unifostedu.com/amity.svg",
  description:
    "Amity University Online offers UGC & AICTE approved, NAAC A+ accredited online degrees including MBA (18+ specializations), MCA, BBA, BCA, B.Com, M.Com, MA and M.Sc with 100% placement support and No Cost EMI. NIRF Rank 29.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/AmityUniversityOnline",
    "https://www.instagram.com/amityuniversityonline",
    "https://www.linkedin.com/school/amity-university-online/",
    "https://x.com/AmityUniversity",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "15400",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── 2. WebSite + SearchAction ─────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Amity University Online",
  url: PAGE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ── 3. LandingPage ────────────────────────────────────────────────────────────
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LandingPage"],
  name: "Amity University Online Admission 2026 | Apply Now",
  description:
    "Apply for Amity University Online UG and PG programs. NAAC A+ accredited, UGC-approved degrees with 100% placement support, No Cost EMI and 18+ MBA specializations.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Amity University Online",
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
      name: "Is Amity University Online UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amity University Online is UGC-DEB approved and AICTE recognized. All online degrees are equivalent to regular on-campus degrees and valid for government jobs, PSUs, private sector and international employment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the NIRF ranking of Amity University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity University Online is NIRF Rank 29 and NAAC A+ accredited, making it one of the top private universities in India for online education.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does Amity University Online offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online offers: MBA (18+ specializations, ₹1,99,000–₹2,99,000), MCA (7 specializations, ₹1,50,000–₹1,60,000), BBA, BCA, B.Com, M.Com, MA (English, Economics, Journalism), M.Sc, MAJMC and BAJMC. All programs are UGC-DEB approved.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fees for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online MBA fees start at ₹1,99,000 (single specialization) and ₹2,99,000 (dual specialization) for the full 2-year program. Semester-wise payment, No Cost EMI and education loan options are available.",
      },
    },
    {
      "@type": "Question",
      name: "How many MBA specializations does Amity Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online MBA offers 18+ specializations including Finance & Accounting, Digital Marketing, Business Analytics, Data Science, HR Analytics, IT Management, International Business, Operations, Retail Management, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is Amity Online degree valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since Amity Online is UGC-DEB approved, all degrees hold the same validity as regular degrees for government jobs, UPSC, state PSC, bank exams, PSU recruitment and competitive exams.",
      },
    },
    {
      "@type": "Question",
      name: "Does Amity Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amity Online provides 100% placement assistance through virtual job fairs, resume workshops, interview prep and access to 500+ corporate hiring partners including Google, Microsoft, Deloitte, KPMG, TCS and Infosys.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals pursue Amity Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amity Online programs are designed for working professionals with weekend live classes, 24/7 recorded lecture access, flexible exam schedules and No Cost EMI. No relocation or career break required.",
      },
    },
    {
      "@type": "Question",
      name: "What is the admission process for Amity University Online 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission process: (1) Fill online application form, (2) Upload documents — marksheets, ID proof, (3) Pay registration fee, (4) Complete online counseling, (5) Receive enrollment and LMS credentials. No entrance exam required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Amity Online MBA mention 'Online' on the certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Amity University Online degree certificates do not mention the mode of study ('Online' or 'Distance'), making them fully equivalent to regular on-campus degrees.",
      },
    },
  ],
};

// ── 5. ItemList + Course ──────────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Amity University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — 18+ Specializations", description: "UGC-DEB approved, NAAC A+ accredited online MBA from Amity University. 2 years. Fees: ₹1,99,000 (single) / ₹2,99,000 (dual specialization). No entrance exam. Specializations: Finance, Digital Marketing, Business Analytics, HR Analytics, Data Science, IT, International Business and 11 more.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/amity-online-mba`, offers: { "@type": "Offer", price: "199000", priceCurrency: "INR", availability: "https://schema.org/InStock" } } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — 7 Specializations", description: "UGC-DEB approved online MCA from Amity University. 2 years. Fee: ₹1,50,000–₹1,60,000. Specializations: Machine Learning & AI, Cybersecurity (with HCL), FinTech (with Paytm), Blockchain, Software Engineering, Data Science, AR/VR.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: `${PAGE_URL}/best-online-mca-university-in-india`, offers: { "@type": "Offer", price: "150000", priceCurrency: "INR", availability: "https://schema.org/InStock" } } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "UGC-DEB approved online M.Com from Amity University. 2 years. Eligibility: Graduation in Commerce.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MA — Master of Arts", description: "UGC-DEB approved online MA from Amity University. 2 years. Specializations: English, Economics, Journalism & Mass Communication.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online M.Sc — Master of Science", description: "UGC-DEB approved online M.Sc from Amity University. 2 years. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online MAJMC — Master of Arts in Journalism & Mass Communication", description: "UGC-DEB approved online MAJMC from Amity University. 2 years. Eligibility: Graduation.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "UGC-DEB approved online BBA from Amity University. 3 years. Eligibility: 10+2. Specializations: Marketing, Finance, HR, International Business and more.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "UGC-DEB approved online BCA from Amity University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 9, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "UGC-DEB approved online B.Com from Amity University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 10, item: { "@type": "Course", name: "Online BAJMC — Bachelor of Arts in Journalism & Mass Communication", description: "UGC-DEB approved online BAJMC from Amity University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 11, item: { "@type": "Course", name: "Online BA — Bachelor of Arts", description: "UGC-DEB approved online BA from Amity University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ── 6. BreadcrumbList ─────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "University List", item: `${BASE_URL}/university-list` },
    { "@type": "ListItem", position: 3, name: "Amity University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 4, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── 7. City-wise coverage ─────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Amity University Online — Available Across India",
  itemListElement: [
    // UP / NCR cities first (home region)
    "Noida","Greater Noida","Ghaziabad","Delhi","Gurugram","Faridabad","Agra",
    "Lucknow","Kanpur","Varanasi","Allahabad","Meerut","Bareilly","Aligarh",
    "Moradabad","Gorakhpur","Saharanpur",
    // Other major cities
    "Mumbai","Pune","Nagpur","Nashik","Thane","Navi Mumbai","Aurangabad",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara",
    "Jaipur","Jodhpur","Udaipur","Kota","Chandigarh","Amritsar","Ludhiana",
    "Bhopal","Indore","Gwalior","Jabalpur","Patna","Ranchi","Bhubaneswar",
    "Raipur","Guwahati","Dehradun","Jammu","Coimbatore","Kochi","Visakhapatnam",
    "Vijayawada","Madurai","Rajkot","Dhanbad","Howrah","Mysore","Mangalore",
    "Hubli","Tiruchirappalli","Warangal","Guntur","Bikaner",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Amity University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export const revalidate = 604800; // 1 week

export default function AmityLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
      />
      <meta name="theme-color" content="#5c2d91" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida, Uttar Pradesh" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {/* 3 — LandingPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      {/* 4 — FAQPage — 10 Q&As */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* 5 — ItemList + Course — all 11 programs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      {/* 6 — BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* 7 — City-wise coverage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {children}
    </>
  );
}
