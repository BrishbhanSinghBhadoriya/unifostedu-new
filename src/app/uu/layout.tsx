import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/uu`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Uttaranchal University Online Admission 2026 | MBA, MCA, BBA, BCA, MA — Dehradun",
    template: "%s | Uttaranchal University Online 2026",
  },

  description:
    "Uttaranchal University Online Admission 2026 open. Apply for NAAC A+ accredited online MBA, MCA, BBA, BCA, B.Com, MA programs from Uttaranchal University Dehradun. UGC-approved degrees, 100% placement assistance, affordable fees and flexible learning.",

  keywords: [
    "Uttaranchal University Online",
    "UU Online admission 2026",
    "Uttaranchal University Online apply now",
    "best online university Dehradun",
    "top online university Uttarakhand",
    "NAAC A+ online university Dehradun",
    "UGC approved online degree Uttaranchal University",
    "online degrees in Dehradun 2026",
    "online courses Uttarakhand",
    "Uttaranchal University Dehradun online",
    "UU Online MBA 2026",
    "Uttaranchal University online MBA fees",
    "online MBA Dehradun 2026",
    "Uttaranchal University online MCA 2026",
    "UU Online BBA 2026",
    "Uttaranchal University online BCA 2026",
    "Uttaranchal University online MA 2026",
    "online MCom Uttaranchal University",
    "online BA Uttaranchal University",
    "affordable online degrees India",
    "job opportunities after online MBA",
    "UU Online admission last date 2026",
    "UU Online MBA Delhi",
    "Uttaranchal University online admission Mumbai",
    "UU Online MBA Bangalore",
    "UU Online admission Noida",
    "UU Online MBA working professionals",
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
    title: "Uttaranchal University Online Admission 2026 | MBA, MCA, BBA, BCA — Dehradun",
    description:
      "Join Uttaranchal University Online — NAAC A+ accredited. UGC-approved online MBA, MCA, BBA, BCA, MA with 100% placement assistance and affordable fees. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Uttaranchal University Online Admission 2026 | Apply Now",
    description:
      "NAAC A+ accredited online MBA, MCA, BBA, BCA, MA from Uttaranchal University Dehradun. Flexible learning, UGC-approved degrees and 100% placement support.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp"],
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
  name: "Uttaranchal University Online",
  alternateName: ["UU Online", "Uttaranchal University Dehradun Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_logo_bksobh.webp",
  description:
    "Uttaranchal University Online offers NAAC A+ accredited, UGC-approved online degree programs including MBA, MCA, BBA, BCA, B.Com, MA and Executive MBA with 100% placement assistance.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248007",
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
    "https://www.facebook.com/uttaranchaluniversity",
    "https://www.instagram.com/uttaranchaluniversity",
    "https://www.linkedin.com/school/uttaranchal-university/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "8000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── Schema: WebSite ───────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Uttaranchal University Online",
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
  name: "Uttaranchal University Online Admission 2026 | Apply Now",
  description:
    "Apply for Uttaranchal University Online UG and PG programs. NAAC A+ accredited UGC-approved degrees with 100% placement assistance and affordable fees.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Uttaranchal University Online",
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
      name: "What is Uttaranchal University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uttaranchal University Online is the digital learning platform of Uttaranchal University Dehradun, a NAAC A+ accredited institution. It offers flexible, UGC-approved online degrees in MBA, MCA, BBA, BCA, MA, M.Com and BA for students and working professionals across India.",
      },
    },
    {
      "@type": "Question",
      name: "Are Uttaranchal University Online degrees valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All programs are UGC-approved and offered by a NAAC A+ accredited university, making every degree valid for government jobs, competitive exams, higher studies and employment across India.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does Uttaranchal University Online offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Programs include: Online MBA (₹1,40,000, 2 years), Executive MBA (₹3,10,000, 2 years), Online MCA (₹1,20,000, 2 years), Online BBA (₹1,20,000, 3 years), Online BCA (₹1,20,000, 3 years), Online BA (₹72,000, 3 years).",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for Uttaranchal University Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fee for UU Online MBA is ₹1,40,000 for the 2-year program. The Executive MBA is ₹3,10,000. EMI and flexible payment options are available.",
      },
    },
    {
      "@type": "Question",
      name: "Does Uttaranchal University Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. UU Online provides 100% placement assistance including career counseling, resume building, mock interviews, and access to hiring partners.",
      },
    },
    {
      "@type": "Question",
      name: "Is Uttaranchal University Online suitable for working professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All programs are designed for flexible learning with recorded lectures and live sessions, making them ideal for working professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Is Uttaranchal University the best online university in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With NAAC A+ accreditation, strong academics, and a modern learning platform, Uttaranchal University Online is widely regarded as the best online university in Dehradun and a top online university in Uttarakhand.",
      },
    },
  ],
};

// ── Schema: Courses (ItemList) ────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Uttaranchal University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Online MBA — Master of Business Administration",
        description: "NAAC A+ accredited online MBA from Uttaranchal University. 2 years. Fee: ₹1,40,000. Specializations: Marketing, Digital, HR, Finance, Business Analytics, IT, International Business, Logistics.",
        provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Executive MBA",
        description: "NAAC A+ accredited Executive MBA from Uttaranchal University. 2 years. Fee: ₹3,10,000. Specializations: Business Analytics, HR Analytics, Finance Analytics, Banking & Finance.",
        provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Online MCA — Master of Computer Applications",
        description: "NAAC A+ accredited online MCA from Uttaranchal University. 2 years. Fee: ₹1,20,000. Eligibility: Graduation with CS/IT/Mathematics.",
        provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Online BBA — Bachelor of Business Administration",
        description: "NAAC A+ accredited online BBA from Uttaranchal University. 3 years. Fee: ₹1,20,000. Eligibility: 10+2.",
        provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Online BCA — Bachelor of Computer Applications",
        description: "NAAC A+ accredited online BCA from Uttaranchal University. 3 years. Fee: ₹1,20,000. Eligibility: 10+2.",
        provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "Online BA — Bachelor of Arts",
        description: "NAAC A+ accredited online BA from Uttaranchal University. 3 years. Fee: ₹72,000. Eligibility: 10+2.",
        provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
      },
    },
  ],
};

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Uttaranchal University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── Schema: City-wise coverage ────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Uttaranchal University Online — Available Across India",
  itemListElement: [
    "Dehradun","Haridwar","Roorkee","Rishikesh","Haldwani","Nainital","Mussorie",
    "Uttarkashi","Rudrapur","Kashipur","Delhi","Noida","Gurugram","Ghaziabad",
    "Mumbai","Pune","Bangalore","Hyderabad","Chennai","Kolkata","Jaipur",
    "Lucknow","Chandigarh","Bhopal","Indore","Patna","Ahmedabad","Surat",
    "Amritsar","Ludhiana","Jalandhar","Agra","Varanasi","Kanpur","Meerut",
    "Nagpur","Nashik","Coimbatore","Kochi","Visakhapatnam","Bhubaneswar",
    "Raipur","Jodhpur","Ranchi","Guwahati","Jammu","Allahabad","Bareilly",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Uttaranchal University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function UULayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327865/uu_banner_z4cs2w.webp"
      />
      <meta name="theme-color" content="#1e40af" />
      <meta name="geo.region" content="IN-UT" />
      <meta name="geo.placename" content="Dehradun, Uttarakhand" />
      <meta name="geo.position" content="30.3165;78.0322" />
      <meta name="ICBM" content="30.3165, 78.0322" />

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
