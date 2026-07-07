import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/opjindal`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "OP Jindal University Online Admission 2026 | MBA, BBA, M.Sc, MA Programs — Sonipat",
    template: "%s | OP Jindal University Online 2026",
  },

  description:
    "OP Jindal University Online Admission 2026 open. Apply for globally ranked online MBA, BBA, B.Com, M.Sc, MA, Executive MBA programs. NAAC A+ accredited, UGC-approved degrees, 100% placement assistance, flexible learning and international recognition.",

  keywords: [
    "OP Jindal University Online",
    "OP Jindal University Online admission 2026",
    "JGU Online admission 2026",
    "OP Jindal Global University Online",
    "OPJU online MBA 2026",
    "OP Jindal online BBA 2026",
    "OP Jindal online MBA fees",
    "OP Jindal online MBA specializations",
    "OP Jindal online MBA placement",
    "online MBA Business Analytics OP Jindal",
    "online MBA Business & Law OP Jindal",
    "OP Jindal online M.Sc 2026",
    "OP Jindal online MA 2026",
    "OP Jindal online B.Com 2026",
    "NAAC A+ online university Sonipat",
    "UGC approved online degree OP Jindal",
    "globally ranked online university India",
    "OP Jindal online MA Public Policy",
    "OP Jindal online MA TESOL",
    "OP Jindal online M.Sc AI Data Science",
    "OP Jindal online M.Sc Environmental Studies",
    "OP Jindal online admission last date 2026",
    "OP Jindal online scholarship 2026",
    "OP Jindal online MBA Delhi",
    "OP Jindal online admission Mumbai",
    "OP Jindal online MBA Bangalore",
    "OP Jindal online admission Noida",
    "online MBA working professionals India 2026",
    "OP Jindal fees 2026",
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
    title: "OP Jindal University Online Admission 2026 | MBA, BBA, M.Sc, MA Programs",
    description:
      "Join OP Jindal University Online — globally ranked, NAAC A+ accredited. UGC-approved online MBA, BBA, B.Com, M.Sc, MA with 100% placement support and international recognition. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp",
        width: 1200,
        height: 630,
        alt: "OP Jindal University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OP Jindal University Online Admission 2026 | Apply Now",
    description:
      "Globally ranked, NAAC A+ accredited online MBA, BBA, M.Sc, MA from OP Jindal University Sonipat. Flexible learning, UGC-approved degrees and 100% placement support.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp"],
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
  name: "OP Jindal University Online",
  alternateName: ["OPJU Online", "JGU Online", "OP Jindal Global University Online", "Jindal Online University"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp",
  description:
    "OP Jindal University Online offers globally ranked, NAAC A+ accredited, UGC-approved programs including MBA, BBA, B.Com, M.Sc and MA with international recognition and 100% placement support.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sonipat",
    addressRegion: "Haryana",
    postalCode: "131001",
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
    "https://www.facebook.com/jgujindal",
    "https://www.instagram.com/jgujindal",
    "https://www.linkedin.com/school/o-p-jindal-global-university/",
    "https://x.com/jgujindal",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "20000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── Schema: WebSite ───────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — OP Jindal University Online",
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
  name: "OP Jindal University Online Admission 2026 | Apply Now",
  description:
    "Apply for OP Jindal University Online UG and PG programs. Globally ranked, NAAC A+ accredited, UGC-approved degrees with 100% placement support and international recognition.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "OP Jindal University Online",
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
      name: "Are OP Jindal University Online degrees recognized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OP Jindal University Online offers UGC-entitled degrees that hold the same value as regular on-campus programs and are recognized internationally.",
      },
    },
    {
      "@type": "Question",
      name: "What programs does OP Jindal University Online offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OP Jindal offers: UG — BBA (₹2,00,000), B.Sc Psychology, B.Sc Risk Management, B.Com International Accounting & Finance (all ₹3,00,000). PG — MBA Business Analytics (₹2,00,000), MBA Business & Law (₹3,00,000), MBA (₹1,80,000), MA TESOL (₹2,50,000), MA Public Policy (₹3,00,000), MA India Studies, MA International Relations, M.Sc Environmental Change, M.Sc Design Thinking, M.Sc AI & Finance, M.Sc Global Health, M.Sc Risk Management, M.Sc AI & Data Science, Master in Entrepreneurship & Family Business.",
      },
    },
    {
      "@type": "Question",
      name: "Is OP Jindal University globally ranked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OP Jindal Global University (JGU) is among India's top globally ranked private universities, recognized internationally for academic excellence in Business, Law, Public Policy, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals apply for OP Jindal University Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The online format of Jindal Online University is designed for working professionals seeking flexibility and career advancement without career breaks.",
      },
    },
    {
      "@type": "Question",
      name: "Does OPJU Online offer placement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OP Jindal University Online provides dedicated career counseling, resume assistance, interview preparation, and placement guidance to help students achieve professional success.",
      },
    },
    {
      "@type": "Question",
      name: "What is the eligibility for OP Jindal University Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For MBA programs: Bachelor's degree in any discipline with minimum 50% aggregate score from a recognized university. For M.Sc programs: Bachelor's degree with minimum 50% marks. For UG programs: 10+2 pass; students below 50% may need to appear for JSAT.",
      },
    },
    {
      "@type": "Question",
      name: "What learning resources are provided at OPJU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students receive access to e-books, recorded lectures, digital libraries, discussion forums, live classes, and continuous faculty support throughout their learning journey.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of OP Jindal University Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MBA programs: 12 months (3 trimesters). UG programs (BBA, B.Sc, B.Com): 3 years. MA programs: 12 months. M.Sc programs: 12 months. Master in Entrepreneurship: 1 year (4 terms).",
      },
    },
  ],
};

// ── Schema: Courses (ItemList) ────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "OP Jindal University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "MBA — Business Analytics", description: "Globally ranked online MBA in Business Analytics from OP Jindal University. 12 months. Fee: ₹2,00,000. Eligibility: Bachelor's degree with 50% marks.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "MBA — Business & Law", description: "Globally ranked online MBA in Business & Law from OP Jindal University. 12 months. Fee: ₹3,00,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "MBA — Finance, Marketing, HR, Operations, AI for Business, Digital Finance, Strategy", description: "Globally ranked online MBA from OP Jindal University with 7 specializations. 12 months. Fee: ₹1,80,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "MA — Public Policy", description: "Online MA in Public Policy from OP Jindal University. 12 months. Fee: ₹3,00,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "MA — TESOL (Teaching English to Speakers of Other Languages)", description: "Online MA in TESOL from OP Jindal University. 12 months (3 trimesters). Fee: ₹2,50,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "M.Sc — Artificial Intelligence & Data Science", description: "Online M.Sc in AI & Data Science from OP Jindal University. 12 months. Fee: ₹2,75,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "M.Sc — Environmental Change and Sustainability", description: "Online M.Sc in Environmental Change & Sustainability from OP Jindal University. 12 months. Fee: ₹2,50,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P1Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "BBA — Bachelor of Business Administration", description: "Online BBA from OP Jindal University. 3 years. Fee: ₹2,00,000. Specializations: Finance, Marketing, HR, Operations & Supply Chain.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 9, item: { "@type": "Course", name: "B.Com — International Accounting & Finance", description: "Online B.Com in International Accounting & Finance from OP Jindal University. 3 years. Fee: ₹3,00,000.", provider: { "@type": "EducationalOrganization", name: "OP Jindal University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "OP Jindal University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── Schema: City-wise coverage ────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "OP Jindal University Online — Available Across India",
  itemListElement: [
    "Sonipat","Delhi","Noida","Gurugram","Faridabad","Chandigarh","Ambala",
    "Panipat","Hisar","Rohtak","Karnal","Kurukshetra","Panchkula",
    "Mumbai","Pune","Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad",
    "Jaipur","Lucknow","Bhopal","Indore","Patna","Nagpur","Surat","Vadodara",
    "Amritsar","Ludhiana","Jalandhar","Dehradun","Agra","Varanasi","Kanpur",
    "Meerut","Ghaziabad","Coimbatore","Kochi","Visakhapatnam","Bhubaneswar",
    "Raipur","Ranchi","Guwahati","Jammu","Jodhpur","Udaipur","Nashik",
    "Thane","Navi Mumbai","Allahabad","Bareilly","Moradabad","Gorakhpur",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `OP Jindal University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function OPJindalLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327836/opjindal-banner2_wpbugp.webp"
      />
      <meta name="theme-color" content="#06336d" />
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Sonipat, Haryana" />
      <meta name="geo.position" content="28.9288;77.0275" />
      <meta name="ICBM" content="28.9288, 77.0275" />

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
