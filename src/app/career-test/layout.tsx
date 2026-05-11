import type { Metadata, Viewport } from "next";
import React from "react";

// ─────────────────────────────────────────────────────────
// BASE CONFIG
// ─────────────────────────────────────────────────────────
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/career-guidance`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Career Guidance & Psychometric Test 2026 | AI Career Assessment for Students",
    template: "%s | Unifost Career Guidance",
  },

  description:
    "Discover your ideal career with India's advanced AI-powered psychometric career assessment platform. Career guidance for 10th, 12th, graduates, professionals, homemakers & career changers. Get personalized career recommendations, personality analysis, IQ, EQ, interest mapping and expert counselling.",

  keywords: [
    "career guidance", "career guidance after 12th", "career guidance after graduation",
    "career counselling India", "career assessment test", "psychometric test for students",
    "career aptitude test", "AI career guidance", "online career counselling",
    "career planning for students", "career options after 12th", "PCM career guidance",
    "PCB career guidance", "commerce career guidance", "arts stream career options",
    "best career after 12th", "career guidance for graduates", "MBA career guidance",
    "government job career counselling", "IT career guidance", "career switch guidance",
    "career growth assessment", "professional career counselling", "career transition support",
    "leadership career guidance", "personality test career", "EQ assessment",
    "interest mapping", "career personality analysis", "career intelligence assessment",
    "best career counsellor India", "online career test India", "career guidance Delhi",
    "career guidance Mumbai", "career guidance Bangalore", "career guidance Pune",
    "career guidance Hyderabad", "career guidance Noida", "career guidance online free",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "AI Career Guidance & Psychometric Assessment Platform 2026",
    description: "Find the right career path with AI-powered psychometric assessments, expert counselling and personalized recommendations.",
    url: PAGE_URL,
    siteName: "Unifost Education",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1774420382/carreartest_iutdzy.png",
        width: 1200,
        height: 630,
        alt: "Career Guidance Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Career Guidance Platform 2026",
    description: "AI-powered psychometric career assessment platform for students & professionals.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1774420382/carreartest_iutdzy.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  authors: [{ name: "Unifost Education" }],
  creator: "Unifost Education",
  publisher: "Unifost Education",
  category: "Education",

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

// ─────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Unifost Career Guidance",
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327128/dpulogo_pjp6mc.png",
  description: "AI-powered career guidance and psychometric assessment platform for students and professionals.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7042646766",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150000",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a psychometric career assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A psychometric career assessment is an advanced scientific test that evaluates your personality, interests, emotional intelligence, strengths, skills and aptitude to suggest the best career options.",
      },
    },
    {
      "@type": "Question",
      name: "Is career counselling useful after 12th?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Career counselling after 12th helps students choose the right stream, college and career path based on their interests and abilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can graduates and professionals take this career assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform is designed for students, graduates, professionals, homemakers and career changers.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the career assessment take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most assessments take 20–30 minutes to complete and provide detailed personalized reports.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Career Guidance",
      item: PAGE_URL,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Career Guidance & Psychometric Assessment",
  provider: {
    "@type": "EducationalOrganization",
    name: "Unifost Education",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description: "AI-powered psychometric assessment and career counselling services for students and professionals.",
};

export default function CareerGuidanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {children}
    </>
  );
}