import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/shoolini`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Shoolini University Online Admission 2026 | MBA, BBA, MCA, M.Com, BCA, BA — Himachal Pradesh",
    template: "%s | Shoolini University Online 2026",
  },

  description:
    "Shoolini University Online Admission 2026 open. Apply for NAAC A+ accredited online MBA, BBA, MCA, BCA, B.Com, M.Com, MA programs. UGC-approved degrees, 100% placement assistance, flexible learning and globally ranked university. Best online university in Himachal Pradesh.",

  keywords: [
    "Shoolini University Online",
    "Shoolini University Online admission 2026",
    "Shoolini University Online apply now",
    "best online university Himachal Pradesh",
    "NAAC A+ online university Solan",
    "UGC approved online degree Shoolini University",
    "Shoolini online MBA 2026",
    "Shoolini online MBA fees",
    "Shoolini online MBA specializations",
    "Shoolini online MBA placement",
    "best online MBA Himachal Pradesh",
    "Shoolini online BBA 2026",
    "Shoolini online BCA 2026",
    "Shoolini online MCA 2026",
    "Shoolini online M.Com 2026",
    "Shoolini online MA 2026",
    "Shoolini online B.Com 2026",
    "Shoolini online BA 2026",
    "Shoolini University globally ranked",
    "QS ranked online university India",
    "online MBA pay after placement",
    "Shoolini University fees 2026",
    "Shoolini University scholarship 2026",
    "Shoolini online MBA Delhi",
    "Shoolini University online admission Mumbai",
    "Shoolini online MBA Bangalore",
    "Shoolini online admission Noida",
    "online degree valid government jobs India",
    "Shoolini University online admission last date 2026",
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
    title: "Shoolini University Online Admission 2026 | MBA, BBA, MCA, M.Com — Himachal Pradesh",
    description:
      "Join Shoolini University Online — QS World Ranked, NAAC A+ accredited. UGC-approved online MBA, BBA, MCA, BCA, M.Com, MA with 100% placement support. Unique pay-after-placement model. Apply today.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/shoolini-uni_rqkaii.webp",
        width: 1200,
        height: 630,
        alt: "Shoolini University Online Admission 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shoolini University Online Admission 2026 | Apply Now",
    description:
      "QS Ranked, NAAC A+ accredited online MBA, BBA, MCA, BCA from Shoolini University Solan. Flexible learning, UGC-approved degrees, pay-after-placement option.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/shoolini-uni_rqkaii.webp"],
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
  name: "Shoolini University Online",
  alternateName: ["Shoolini Online", "Shoolini University Solan Online"],
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327856/shoolini_txvq6k.webp",
  description:
    "Shoolini University Online offers QS World Ranked, NAAC A+ accredited, UGC-approved online degree programs including MBA, BBA, MCA, BCA, B.Com, M.Com, MA and BAJMC with unique pay-after-placement model.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Solan",
    addressRegion: "Himachal Pradesh",
    postalCode: "173229",
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
    "https://www.facebook.com/ShooliniUniversity",
    "https://www.instagram.com/shooliniuniversity",
    "https://www.linkedin.com/school/shoolini-university/",
    "https://x.com/ShooliniU",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "15000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── Schema: WebSite ───────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unifost Education — Shoolini University Online",
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
  name: "Shoolini University Online Admission 2026 | Apply Now",
  description:
    "Apply for Shoolini University Online UG and PG programs. NAAC A+ accredited UGC-approved degrees with 100% placement support and pay-after-placement model.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Shoolini University Online",
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
      name: "Is Shoolini University UGC approved for online degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shoolini University is fully recognized by UGC and approved to offer online degree programs. All online degrees are equivalent to regular degrees and valid for higher education and employment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee structure for Shoolini University online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fee structure: BBA/BCA ₹90,000 (₹63,000 upfront + ₹27,000 after placement), B.Com ₹75,000, MBA ₹1,40,000 (₹98,000 upfront + ₹42,000 after placement), Executive MBA ₹1,80,000, MSc Data Science ₹1,20,000, MA programs ₹42,000–₹1,00,000.",
      },
    },
    {
      "@type": "Question",
      name: "How is Shoolini University ranked globally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shoolini University is ranked among the top 200 universities globally by QS World Rankings. It is also recognized as one of India's top innovators and patent filers with strong research emphasis.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations does Shoolini University online MBA offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shoolini offers 16+ MBA specializations including Marketing Management, Finance, HR, Operations & Supply Chain, IT Management, Digital Marketing, Data Science & Business Analytics, Banking & Insurance, Tourism, Pharma & Healthcare, Retail, and Direct Selling Management.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pay-after-placement model at Shoolini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shoolini University offers a unique model where a portion of fees (e.g., ₹27,000 for BBA/BCA, ₹42,000 for MBA) is paid only after placement, making education risk-free and affordable.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shoolini University provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Top recruiters include Nestle, ICICI, L&T, Decathlon, Hindustan Unilever, and LG. The university provides career counseling, resume building, and interview preparation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of online programs at Shoolini University?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Undergraduate programs (BBA, BCA, B.Com, BA, BAJMC) are 3 years. Postgraduate programs (MBA, MCA, M.Com, MA, M.Sc) are 2 years. Executive MBA is available for experienced professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals pursue Shoolini University online degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Shoolini's online programs are designed for working professionals with flexible schedules, recorded lectures, and industry-relevant curriculum.",
      },
    },
  ],
};

// ── Schema: Courses (ItemList) ────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shoolini University Online Programs 2026",
  url: PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "QS Ranked, NAAC A+ accredited online MBA from Shoolini University. 2 years. Fee: ₹1,40,000 (pay-after-placement model). 16+ specializations.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Executive MBA", description: "QS Ranked online Executive MBA from Shoolini University. Fee: ₹1,80,000. For experienced professionals.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online M.Com — Master of Commerce", description: "NAAC A+ accredited online M.Com from Shoolini University. 2 years. Eligibility: Graduation in Commerce.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MA — Master of Arts", description: "NAAC A+ accredited online MA from Shoolini University. 2 years. Fee: ₹42,000–₹1,00,000.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online M.Sc — Data Science", description: "NAAC A+ accredited online M.Sc Data Science from Shoolini University. 2 years. Fee: ₹1,20,000.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "NAAC A+ accredited online BBA from Shoolini University. 3 years. Fee: ₹90,000 (pay-after-placement). Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "NAAC A+ accredited online BCA from Shoolini University. 3 years. Fee: ₹90,000 (pay-after-placement). Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "Online B.Com — Bachelor of Commerce", description: "NAAC A+ accredited online B.Com from Shoolini University. 3 years. Fee: ₹75,000. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 9, item: { "@type": "Course", name: "Online BA — Bachelor of Arts", description: "NAAC A+ accredited online BA from Shoolini University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 10, item: { "@type": "Course", name: "Online BAJMC — Bachelor of Arts in Journalism & Mass Communication", description: "NAAC A+ accredited online BAJMC from Shoolini University. 3 years. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Shoolini University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Shoolini University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// ── Schema: City-wise coverage ────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shoolini University Online — Available Across India",
  itemListElement: [
    "Solan","Shimla","Chandigarh","Dharamshala","Mandi","Kullu","Hamirpur",
    "Una","Bilaspur","Kangra","Delhi","Noida","Gurugram","Mumbai","Pune",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Jaipur","Lucknow",
    "Dehradun","Amritsar","Ludhiana","Jalandhar","Bhopal","Indore","Patna",
    "Ranchi","Bhubaneswar","Guwahati","Nagpur","Nashik","Surat","Vadodara",
    "Kochi","Coimbatore","Visakhapatnam","Vijayawada","Raipur","Jodhpur",
    "Udaipur","Agra","Varanasi","Kanpur","Meerut","Faridabad","Ghaziabad",
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Shoolini University Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

export default function ShooliniLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/shoolini-uni_rqkaii.webp"
      />
      <meta name="theme-color" content="#dc2626" />
      <meta name="geo.region" content="IN-HP" />
      <meta name="geo.placename" content="Solan, Himachal Pradesh" />
      <meta name="geo.position" content="30.9045;77.0967" />
      <meta name="ICBM" content="30.9045, 77.0967" />

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
