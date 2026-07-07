import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/sharda`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Sharda University Online Admission 2026 | MBA, MCA, BBA, BCA, M.Com — Greater Noida",
    template: "%s | Sharda University Online 2026",
  },

  description:
    "Sharda University Online Admission 2026 open. Apply for NAAC A++ accredited online MBA, MCA, BBA, BCA, M.Com, BA programs. UGC-approved degrees, 100% placement assistance, Zero Cost EMI and flexible learning. Best online university in Delhi NCR.",

  keywords: [
    "Sharda University Online",
    "Sharda University Online admission 2026",
    "Sharda University Online apply now",
    "best online university Delhi NCR",
    "NAAC A++ online university Greater Noida",
    "UGC approved online degree Sharda University",
    "online BBA Sharda University",
    "online BCA Sharda University",
    "online MBA Sharda University",
    "online MCA Sharda University",
    "online M.Com Sharda University",
    "online BA Sharda University",
    "Sharda University fees",
    "Sharda University Greater Noida online",
    "online MBA Delhi NCR 2026",
    "online MCA Delhi NCR 2026",
    "Sharda University Online no cost EMI",
    "Sharda University online scholarship 2026",
    "Sharda University admission last date 2026",
    "online degree program India 2026",
    "top online university India",
    "Sharda University Online MBA Delhi",
    "Sharda University Online admission Mumbai",
    "Sharda University Online MBA Bangalore",
    "Sharda University Online Noida",
    "Sharda University Online Lucknow",
    "online MBA working professionals Delhi NCR",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "Sharda University Online Admission 2026 | MBA, MCA, BBA, BCA — Greater Noida",
    description:
      "Join Sharda University Online — NAAC A++ accredited, UGC-approved. Online MBA, MCA, BBA, BCA, M.Com with Zero Cost EMI, 100% placement support. Best online university in Delhi NCR. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp",
        width: 1200,
        height: 630,
        alt: "Sharda University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sharda University Online Admission 2026 | Apply Now",
    description:
      "NAAC A++ accredited online MBA, MCA, BBA, BCA from Sharda University Greater Noida. Zero Cost EMI, UGC-approved degrees and 100% placement assistance.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp"],
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

// ── Schema: EducationalOrganization + AggregateRating ────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Sharda University Online",
  alternateName: ["Sharda Online", "Sharda University Greater Noida Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/shardalogos_fecyer.webp",
  description:
    "Sharda University Online offers NAAC A++ accredited, UGC-approved online degrees including MBA, MCA, BBA, BCA, B.Com, M.Com and BA with 100% placement support and Zero Cost EMI.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201310",
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
    "https://www.facebook.com/shardauniversity",
    "https://www.instagram.com/sharda_university",
    "https://www.linkedin.com/school/sharda-university/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "100000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── Schema: WebSite ───────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Sharda University Online",
  url: PAGE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ── Schema: LandingPage ───────────────────────────────────────────────────────
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LandingPage"],
  name: "Sharda University Online Admission 2026 | Apply Now",
  description:
    "Apply for Sharda University Online UG and PG programs. NAAC A++ accredited UGC-approved degrees with 100% placement assistance and Zero Cost EMI.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Sharda University Online",
    url: PAGE_URL,
  },
};

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Sharda University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sharda University Online is the digital learning platform of Sharda University Greater Noida, one of the best universities in Delhi NCR. It offers UGC-approved online degree programs that allow students to study from anywhere while receiving the same quality education as on-campus programs.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sharda University Online UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sharda University Online is recognized by UGC and approved by the Distance Education Bureau (DEB). All degrees hold the same weightage as regular on-campus programs.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sharda University NAAC accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sharda University has been accredited with NAAC A++ grade — the highest grade — ensuring high-quality academic standards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee structure for Sharda University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fee structure: BBA ₹1,20,000 (3 years), BCA ₹1,20,000 (3 years), BA ₹1,05,000 (3 years), MBA ₹1,40,000–₹1,96,000 (2 years), MCA ₹1,20,000 (2 years), M.Com ₹50,000–₹1,40,000 (2 years). Zero Cost EMI and scholarships available.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sharda University Online offer placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sharda University Online provides 100% placement assistance, career counseling, resume building, interview preparation, and access to top recruiters.",
      },
    },
    {
      "@type": "Question",
      name: "Are Sharda University Online degrees valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Online degrees from Sharda University are valid for government jobs, UPSC, SSC, Banking exams and are accepted for higher education including MBA, PhD, or international studies.",
      },
    },
    {
      "@type": "Question",
      name: "What programs does Sharda University Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sharda University Online offers BBA, BCA, BA (Hons.), MBA (specializations: Data Science & Analytics, Marketing, Healthcare, HRM, Finance), MCA (CS & IT, Data Science), M.Com. Upcoming admissions for 2026 batch are open.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pursue Sharda University Online courses while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All programs are flexible for working professionals. You can attend live lectures or access recorded sessions at your convenience with 24/7 LMS access.",
      },
    },
  ],
};

// ── Schema: Courses (ItemList) ────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sharda University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A++ accredited online BBA from Sharda University. 3 years. Fee: ₹1,20,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Sharda University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A++ accredited online BCA from Sharda University. 3 years. Fee: ₹1,20,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Sharda University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online BA (Hons.) — Bachelor of Arts", description: "NAAC A++ accredited online BA from Sharda University. 3 years. Fee: ₹1,05,000. Specialization: Political Science.", provider: { "@type": "EducationalOrganization", name: "Sharda University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "NAAC A++ accredited online MBA from Sharda University. 2 years. Fee: ₹1,40,000–₹1,96,000. Specializations: Data Science & Analytics, Marketing, Healthcare, HRM, Finance.", provider: { "@type": "EducationalOrganization", name: "Sharda University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "NAAC A++ accredited online MCA from Sharda University. 2 years. Fee: ₹1,20,000. Specializations: CS & IT, Data Science.", provider: { "@type": "EducationalOrganization", name: "Sharda University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A++ accredited online M.Com from Sharda University. 2 years. Fee: ₹50,000–₹1,40,000. Specializations: Public Accounting, Accounting & Finance.", provider: { "@type": "EducationalOrganization", name: "Sharda University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Sharda University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── Schema: City-wise coverage ────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sharda University Online — Available Across India",
  itemListElement: [
    "Greater Noida","Noida","Delhi","Ghaziabad","Faridabad","Gurugram","Meerut",
    "Agra","Lucknow","Kanpur","Varanasi","Allahabad","Bareilly","Aligarh",
    "Mumbai","Pune","Nagpur","Nashik","Thane","Navi Mumbai","Aurangabad",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara",
    "Jaipur","Jodhpur","Kota","Udaipur","Chandigarh","Amritsar","Ludhiana",
    "Bhopal","Indore","Gwalior","Jabalpur","Patna","Ranchi","Bhubaneswar",
    "Dehradun","Jammu","Guwahati","Coimbatore","Kochi","Visakhapatnam",
    "Vijayawada","Raipur","Rajkot","Moradabad","Gorakhpur","Saharanpur",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Sharda University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function ShardaLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp"
      />
      <meta name="theme-color" content="#EC027C" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Greater Noida, Uttar Pradesh" />
      <meta name="geo.position" content="28.4744;77.5040" />
      <meta name="ICBM" content="28.4744, 77.5040" />

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
