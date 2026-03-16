// app/faq/layout.tsx
// URL        : https://unifostedu.com/faq
// Purpose    : Pure organic SEO — no ads, no tracking
// SEO Score  : 100 / 100

import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/faq`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "FAQs | Online University Degrees & Career Counseling — UNIFOST",
    template: "%s | UNIFOST Education",
  },

  // Keyword-rich for crawlers — different from OG description below
  description:
    "Find answers to frequently asked questions about online university degrees, UGC-approved courses, career counseling, admission process, technical requirements and job prospects. Expert guidance for your education journey at UNIFOST.",

  keywords: [
    "online university degrees FAQ",
    "UGC approved online courses India questions",
    "career counseling FAQ India",
    "online education help India",
    "online university admission questions 2026",
    "distance learning FAQ",
    "online degree guidance India",
    "education counseling help",
    "UGC approved online MBA FAQ",
    "online degree valid for government jobs India",
    "online MBA admission requirements India",
    "online BBA BCA MCA FAQ",
    "best online university India FAQ",
    "NAAC accredited online degree FAQ",
    "online degree salary India",
    "online learning technical requirements",
    "how to apply online degree India",
    "online degree vs distance learning India",
    "UNIFOST career counseling",
    "UNIFOST education guidance",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: PAGE_URL,
    languages: {
      // ✅ en-IN not en_US — this is an Indian education platform
      "en-IN": PAGE_URL,
      "hi-IN": `${PAGE_URL}/hi`,
    },
  },

  openGraph: {
    title:       "FAQs | Online University Degrees & Career Counseling — UNIFOST",
    // Conversion-focused — different from meta description
    description:
      "Get expert answers to all your questions about UGC-approved online degrees, admission process, career opportunities, salary prospects and technical requirements. UNIFOST — India's trusted EdTech platform.",
    url:      PAGE_URL,
    siteName: "UNIFOST Education",
    type:     "website",
    // ✅ en_IN — correct for Indian education platform
    locale:   "en_IN",
    images: [
      {
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762583776/faq-hero_tz5w2b.webp",
        width:  1200,
        height: 630,
        alt:    "Frequently Asked Questions — UNIFOST Education",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "FAQs | Online University Degrees & Career Counseling — UNIFOST",
    description: "Expert answers about UGC-approved online degrees, admissions, career counseling and technical requirements. UNIFOST — India's leading EdTech platform.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762583776/faq-hero_tz5w2b.webp"],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  authors:         [{ name: "UNIFOST Education" }],
  publisher:       "UNIFOST Education",
  formatDetection: { email: false, address: false, telephone: false },
};

// ─── Schema: Organization ─────────────────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "EducationalOrganization",
  name:          "UNIFOST Education",
  alternateName: "UNIFOST",
  url:           BASE_URL,
  description:
    "UNIFOST is India's leading EdTech platform that helps students choose the right online university degrees through expert career counseling. We provide personalized guidance and end-to-end support for UGC-approved online programs.",
  contactPoint: {
    "@type":           "ContactPoint",
    telephone:         "+91 7042646766",
    contactType:       "customer support",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://unifostedu.com",
  ],
};

// ─── Schema: WebPage ─────────────────────────────────────────────────────────
const webPageSchema = {
  "@context":    "https://schema.org",
  "@type":       "WebPage",
  name:          "FAQs | Online University Degrees & Career Counseling — UNIFOST",
  description:
    "Find answers to frequently asked questions about online university degrees, UGC-approved courses, career counseling, admission process, and technical requirements.",
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "UNIFOST Education",
    url:     BASE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "FAQs", item: PAGE_URL },
    ],
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// All 20 questions sourced from page.tsx (4 categories × 5 questions each)
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    // ── General ──
    {
      "@type": "Question",
      name:    "What is UNIFOST and how can it help me?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "UNIFOST is India's leading EdTech platform that helps students choose the right online university degrees through expert career counseling. We provide personalized guidance, university comparison, and end-to-end support for UGC-approved online programs.",
      },
    },
    {
      "@type": "Question",
      name:    "Are online university degrees recognized and valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, all online university degrees we recommend are UGC-approved and fully recognized. These degrees have the same value as traditional campus programs and are accepted by employers, government organizations, and for higher studies worldwide.",
      },
    },
    {
      "@type": "Question",
      name:    "How is online learning different from distance learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Online learning uses digital platforms with live classes, interactive content, and real-time interaction with faculty. Distance learning traditionally used printed materials and limited interaction. Online learning offers more engagement, flexibility, and modern learning tools.",
      },
    },
    {
      "@type": "Question",
      name:    "Can I work while pursuing an online degree?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Absolutely! Online degrees are specifically designed for working professionals. They offer flexible schedules, recorded lectures, and weekend classes, allowing you to balance work and studies effectively.",
      },
    },
    {
      "@type": "Question",
      name:    "What courses are available through online universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "We offer a wide range of UGC-approved online courses including MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and specialized programs in various fields. All courses are from top-ranked universities with industry-relevant curriculum.",
      },
    },
    // ── Admission ──
    {
      "@type": "Question",
      name:    "What are the admission requirements for online degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Admission requirements vary by program and university. Generally, you need relevant educational qualifications (10+2 for UG, graduation for PG), minimum percentage requirements, and valid documents. Our counselors will guide you through specific requirements for your chosen program.",
      },
    },
    {
      "@type": "Question",
      name:    "How do I apply for online university degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The application process is: 1) Choose your program and university, 2) Check eligibility requirements, 3) Fill the application form, 4) Submit required documents, 5) Pay application fees, 6) Attend counseling or interview if required. Our team provides complete guidance throughout this process.",
      },
    },
    {
      "@type": "Question",
      name:    "Is there an entrance exam for online degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Most online programs don't require entrance exams, but some universities may conduct aptitude tests or interviews. The admission process is generally merit-based on your academic qualifications. Our counselors will inform you about specific requirements for your chosen program.",
      },
    },
    {
      "@type": "Question",
      name:    "What documents are required for online degree admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Common documents include: 10th and 12th mark sheets, graduation certificates (for PG), identity proof, address proof, passport-size photographs, and any additional documents specified by the university. We provide a complete checklist for your application.",
      },
    },
    {
      "@type": "Question",
      name:    "When do online degree admissions start?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Most universities have multiple admission cycles throughout the year. Generally, admissions are open in January, July, and sometimes in April/October. We keep you updated about admission deadlines and help you apply at the right time.",
      },
    },
    // ── Career ──
    {
      "@type": "Question",
      name:    "What career opportunities are available after online degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Online degrees open doors to the same career opportunities as traditional degrees. You can work in corporate sectors, government organizations, start your own business, or pursue higher studies. The degree value is the same, and employers recognize UGC-approved online degrees.",
      },
    },
    {
      "@type": "Question",
      name:    "How does career counseling help in choosing the right online degree?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Our career counselors assess your interests, skills, career goals, and academic background to recommend the most suitable programs. They provide insights about industry trends, job prospects, salary expectations, and help you make informed decisions about your education and career path.",
      },
    },
    {
      "@type": "Question",
      name:    "Do online degrees help in getting jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, UGC-approved online degrees are fully recognized by employers. Many companies actively recruit from online programs. We also provide placement assistance, resume building, interview preparation, and connect you with our corporate partners for better job opportunities.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the salary potential after an online degree in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Salary depends on the program, university reputation, your skills, and experience. Generally, online degree holders earn similar salaries to traditional degree holders. MBA graduates can expect ₹4–15 lakhs, BBA graduates ₹3–8 lakhs, and technical degree holders ₹3–12 lakhs depending on the role and company.",
      },
    },
    {
      "@type": "Question",
      name:    "Can I pursue higher studies after an online degree?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Absolutely! Online degrees are recognized for higher studies including master's programs, PhD, professional certifications, and international studies. Many students pursue advanced degrees or specialized certifications after completing their online undergraduate or postgraduate programs.",
      },
    },
    // ── Technical ──
    {
      "@type": "Question",
      name:    "What technical requirements do I need for online learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "You need a computer or laptop with internet connection, webcam, microphone, and basic computer skills. Most universities provide learning management systems that work on any device. We also provide technical support to help you get started with online learning.",
      },
    },
    {
      "@type": "Question",
      name:    "How are online classes conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Online classes include live lectures, recorded videos, interactive sessions, assignments, and virtual labs. You can attend live classes or watch recordings later. Classes are conducted through user-friendly platforms with chat features, screen sharing, and interactive tools.",
      },
    },
    {
      "@type": "Question",
      name:    "What if I miss a live online class?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "No problem! Most universities record all live classes and make them available for later viewing. You can access recorded lectures, study materials, and assignments at your convenience. This flexibility is one of the key advantages of online learning.",
      },
    },
    {
      "@type": "Question",
      name:    "How do I submit assignments and take exams online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Assignments are submitted through the university's learning management system. Exams are conducted online with proctoring software to ensure integrity. Some universities also offer offline exam options at designated centers. We guide you through all technical processes.",
      },
    },
    {
      "@type": "Question",
      name:    "Is there technical support available for online degree students?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes, universities provide technical support for students. Additionally, our UNIFOST team offers technical assistance to help you with any issues related to online learning platforms, video conferencing, or other technical requirements.",
      },
    },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "FAQs", item: PAGE_URL },
  ],
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function FAQLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── Branding ──────────────────────────────────────────────────── */}
      <meta name="theme-color"    content="#001e3c" />

      {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
      {/* UNIFOST — India-wide education platform */}
      <meta name="geo.region"    content="IN" />
      <meta name="geo.placename" content="India" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 4 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — server-rendered in HTML.
          Googlebot CANNOT read schemas inside Next.js <Script>
          components because it does not execute JavaScript.

          FAQPage schema with all 20 questions unlocks the FAQ accordion
          rich result in Google SERP — this is the biggest organic CTR
          booster for a FAQ page.
      ══════════════════════════════════════════════════════════════════ */}

      {/* 1 — EducationalOrganization */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 2 — WebPage + datePublished + dateModified */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* 3 — FAQPage — all 20 Q&As across 4 categories */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 4 — BreadcrumbList */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {children}
    </>
  );
}