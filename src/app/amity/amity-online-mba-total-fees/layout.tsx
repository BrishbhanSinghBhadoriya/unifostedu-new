import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/amity/amity-online-mba-total-fees`;
const PARENT_URL = `${BASE_URL}/amity`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Amity Online MBA Fees 2026-27 | Complete Fee Structure, EMI & Scholarships",

  description:
    "Complete fee structure for Amity Online MBA 2026-27 — semester-wise fees ₹1,99,000 (single) / ₹2,99,000 (dual specialization), payment options, No Cost EMI plans, scholarships, and admission costs for working professionals.",

  keywords: [
    "Amity Online MBA Fees 2026",
    "Amity Online MBA fees per semester",
    "Amity Online MBA 2026-27 fee structure",
    "Amity University Online MBA total fees",
    "online MBA fees India 2026 Amity",
    "Amity MBA EMI options",
    "Amity Online MBA scholarship",
    "Amity Online MBA fee breakdown",
    "Amity Online MBA cost",
    "Amity Online MBA admission fees",
    "Amity Online MBA no cost EMI",
    "Amity Online MBA dual specialization fees",
    "Amity Online MBA single specialization fees",
    "how much is Amity Online MBA",
    "Amity online MBA total cost 2026",
    "Amity online MBA education loan",
    "Amity online MBA payment options",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Amity Online MBA Fees 2026-27 | ₹1,99,000 Single | ₹2,99,000 Dual Specialization",
    description:
      "View the official Amity Online MBA fee breakdown for 2026-27 — semester fees, one-time charges, No Cost EMI plans and scholarship details for online MBA aspirants.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online MBA Fees 2026-27",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MBA Fees 2026-27 | No Cost EMI Available",
    description:
      "Find the latest Amity Online MBA fee schedule for 2026-27 — flexible payment options, EMI plans and scholarship information.",
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

export const dynamic = "force-static";
export const revalidate = 604800;

// ── JSON-LD: Course with Offer (fee details) ──────────────────────────────────
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Amity University Online MBA — Fee Structure 2026-27",
  description:
    "Complete fee details for Amity University Online MBA 2026-27. Single specialization: ₹1,99,000 total (₹49,750/semester). Dual specialization: ₹2,99,000 total. No Cost EMI available. NAAC A+, UGC-DEB approved.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    url: PARENT_URL,
  },
  url: PAGE_URL,
  educationalLevel: "Postgraduate",
  timeRequired: "P2Y",
  inLanguage: "en-IN",
  offers: [
    {
      "@type": "Offer",
      name: "Single Specialization MBA",
      price: "199000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: PAGE_URL,
      description: "₹49,750 per semester × 4 semesters = ₹1,99,000 total",
    },
    {
      "@type": "Offer",
      name: "Dual Specialization MBA",
      price: "299000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: PAGE_URL,
      description: "₹74,750 per semester × 4 semesters = ₹2,99,000 total",
    },
  ],
};

// ── JSON-LD: FAQPage (fee-specific) ──────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the total fee for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online MBA total fees: ₹1,99,000 for single specialization (₹49,750/semester × 4) and ₹2,99,000 for dual specialization. Semester-wise payment, No Cost EMI and education loan options are available.",
      },
    },
    {
      "@type": "Question",
      name: "What are the EMI options for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online MBA offers No Cost EMI through partner banks and NBFCs. EMI options range from 12 to 24 months with zero or low-cost interest. You can also pay semester-wise (₹49,750 per semester for single specialization).",
      },
    },
    {
      "@type": "Question",
      name: "Are there scholarships available for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amity Online offers scholarships based on academic merit, for defence personnel, differently-abled students, and other categories. Contact the admissions team for specific scholarship amounts and eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a registration or processing fee for Amity Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A nominal registration/processing fee is charged at the time of application. The full program fee (₹1,99,000 or ₹2,99,000) is payable semester-wise or as per the selected payment plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get an education loan for Amity Online MBA fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Education loans are available through partner banks and NBFCs for Amity Online MBA. The UGC-DEB approval and NAAC A+ accreditation makes loan approval easier.",
      },
    },
  ],
};

// ── JSON-LD: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Amity University Online", item: PARENT_URL },
    { "@type": "ListItem", position: 3, name: "Amity Online MBA", item: `${PARENT_URL}/amity-online-mba` },
    { "@type": "ListItem", position: 4, name: "MBA Fees 2026-27", item: PAGE_URL },
  ],
};

// ── JSON-LD: WebPage ──────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Amity Online MBA Fees 2026-27 | Complete Fee Structure",
  description: "Complete guide to Amity University Online MBA fees 2026-27 — payment options, EMI, scholarships and admission costs.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: "2026-07-01",
  publisher: {
    "@type": "Organization",
    name: "Unifost Education",
    url: BASE_URL,
  },
};

export default function AmityMBAFeesLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"
      />
      <meta name="theme-color" content="#5c2d91" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida, Uttar Pradesh" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {children}
    </>
  );
}
