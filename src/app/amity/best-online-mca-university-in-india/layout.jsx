const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/amity/best-online-mca-university-in-india`;
const PARENT_URL = `${BASE_URL}/amity`;

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Best Online MCA University in India 2026 | Amity University | Fees, Ranking & Admission",

  description:
    "Explore the best UGC-approved online MCA universities in India 2026. Amity University Online MCA — NAAC A+, 7 specializations (AI, Cybersecurity, FinTech with Paytm, Blockchain), fees ₹1,50,000–₹1,60,000. No entrance exam. 500+ hiring partners. Apply now.",

  keywords: [
    "best online mca university in india",
    "best online mca university in india 2026",
    "top online mca colleges india",
    "ugc approved online mca 2026",
    "online mca fees india 2026",
    "online mca admission 2025 2026",
    "amity online mca 2026",
    "amity online mca fees",
    "amity online mca specializations",
    "amity online mca ai ml",
    "amity online mca cybersecurity",
    "amity online mca fintech paytm",
    "amity online mca blockchain",
    "amity online mca software engineering",
    "amity online mca data science",
    "amity online mca ar vr",
    "amity online mca placement",
    "amity online mca no entrance exam",
    "amity online mca 500 hiring partners",
    "amity online mca no cost emi",
    "online mca working professionals india",
    "online mca valid government jobs india",
    "naac a+ online mca india",
    "online mca vs distance mca india",
    "online mca admission without entrance exam",
    "online mca hcl tech collaboration",
    "online mca tcs ion collaboration",
    "online mca india fees comparison 2026",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Best Online MCA University in India 2026 | Amity | 7 Specializations | Fees ₹1.5L",
    description:
      "Amity University Online MCA — India's best UGC-approved online MCA. NAAC A+, 7 specializations including AI (with TCS iON), Cybersecurity (with HCL), FinTech (with Paytm). Fees ₹1,50,000. No entrance exam. Apply 2026.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp",
        width: 1200,
        height: 630,
        alt: "Best Online MCA University in India 2026 — Amity University",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Online MCA in India 2026 | Amity University | 7 Specializations",
    description:
      "Top UGC-approved online MCA from Amity University — AI, Cybersecurity, FinTech, Blockchain. Fees ₹1.5L. 500+ hiring partners. No entrance exam.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp"],
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

// ── JSON-LD: Course ───────────────────────────────────────────────────────────
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Amity University Online MCA — Best Online MCA in India 2026",
  description:
    "UGC-DEB approved, NAAC A+ accredited online MCA from Amity University. 2-year program with 7 specializations: ML & AI (with TCS iON), Cybersecurity (with HCL Tech), FinTech & AI (with Paytm), Blockchain, Software Engineering, Data Science, AR/VR. 500+ hiring partners. No entrance exam.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    url: PARENT_URL,
  },
  url: PAGE_URL,
  educationalLevel: "Postgraduate",
  timeRequired: "P2Y",
  inLanguage: "en-IN",
  offers: {
    "@type": "Offer",
    price: "150000",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
    description: "₹1,50,000–₹1,60,000 total. Semester-wise: ₹40,000/sem. No Cost EMI available.",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT20H",
    startDate: "2026-07-01",
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Amity Online MCA valid and recognized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amity Online MCA is UGC-DEB approved, AICTE recognized, and NAAC A+ accredited. It holds the same value as a regular on-campus MCA and is accepted by employers and universities globally. The degree does not mention 'Online' mode.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total fee for Amity Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online MCA total fee is ₹1,50,000–₹1,60,000 (₹40,000 per semester × 4 semesters). Discounts available for annual payment (₹1,54,000) and one-time payment (₹1,50,000). No Cost EMI options also available.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations does Amity Online MCA offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7 specializations: General MCA, Machine Learning & AI (in collaboration with TCS iON), Cybersecurity (with HCL Tech), Financial Technology & AI (with Paytm), Blockchain Technology & Management, Software Engineering, and Data Science.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an entrance exam for Amity Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No entrance exam required. Admission is based on merit in your qualifying degree. Students without Mathematics can apply after completing Amity's Bridge course.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals pursue Amity Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The program is designed for working professionals — 100% online with flexible scheduling, 350+ hours recorded lectures, live sessions, and digital study materials. No career break needed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the placement support for Amity Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "500+ hiring partners with dedicated placement support including virtual job fairs, resume building, mock interviews, and career counseling. Average salary: ₹4–7 LPA for freshers, up to ₹18 LPA highest package.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Amity the best online MCA university in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online MCA is India's first UGC-approved online MCA, NAAC A+, NIRF Rank 29, with industry collaborations (TCS iON, HCL, Paytm), 500+ hiring partners, physical books delivery, and global recognition (WASC, WES, QAA accredited).",
      },
    },
    {
      "@type": "Question",
      name: "What is the eligibility for Amity Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eligibility: BCA / B.Sc (IT/CS) / BE/B.Tech or any graduation with Mathematics at 10+2 or graduation level. Students without Mathematics can apply through Amity's Bridge course. No entrance exam.",
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
    { "@type": "ListItem", position: 3, name: "Best Online MCA University in India", item: PAGE_URL },
  ],
};

// ── JSON-LD: WebPage ──────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Online MCA University in India 2026 | Amity University",
  description: "Compare best UGC-approved online MCA universities in India. Amity Online MCA — 7 specializations, NAAC A+, fees ₹1.5L, 500+ hiring partners, no entrance exam.",
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

export default function BestMCALayout({ children }) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mca_bgcbja.webp"
      />
      <meta name="theme-color" content="#5c2d91" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="bg-gray-50 min-h-screen pt-16">
        {children}
      </section>
    </>
  );
}
