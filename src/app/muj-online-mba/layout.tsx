import { ChildrenProps } from "types/ChildrenProps";

// ===== ENHANCED SEO METADATA =====
export const metadata = {
  // ===== TITLE & DESCRIPTION =====
  title: "Online MBA Degree Program – Manipal University Jaipur (MUJ) 2026 | UGC Approved | NAAC A+",
  description:
    "Complete Online MBA from Manipal University Jaipur (MUJ) 2026 — UGC-approved, NAAC A+ accredited. 2-year flexible program with 13 specializations (Marketing, Finance, IT, Analytics). Fees ₹1.5-2L. Apply now with EMI options, no entrance exam, 100% placement support!",
  keywords:
    "Online MBA, Manipal University Jaipur, MUJ Online MBA, UGC approved MBA, NAAC A+ MBA, online MBA for working professionals 2026, online MBA India, MBA specializations, Manipal MBA fees 2026, online MBA with EMI, best online MBA 2026, online MBA Marketing, online MBA Finance, online MBA Analytics, online MBA HR, Manipal Online MBA, MUJ Online admission 2026",
  metadataBase: new URL("https://www.unifostedu.com"),
  alternates: {
    canonical: "https://www.unifostedu.com/muj-online-mba",
  },

  // ===== OPEN GRAPH (FACEBOOK, LINKEDIN) =====
  openGraph: {
    title: "Manipal Online MBA 2026 | MUJ Online | UGC Approved, NAAC A+ | 13 Specializations",
    description:
      "Transform your career with Manipal's UGC-approved Online MBA 2026. Flexible 2-year program with 13 specializations, ₹1.5-2L fees, EMI options, 30-50% salary hike. Ideal for working professionals. Apply now!",
    url: "https://www.unifostedu.com/muj-online-mba",
    siteName: "UNIFOST – Online Education Guide",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327064/mba-online-image_zclzst.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online MBA Program - NAAC A+ Accredited 2026",
        type: "image/webp",
      },
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp",
        width: 800,
        height: 600,
        alt: "Manipal University Campus",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ===== TWITTER =====
  twitter: {
    card: "summary_large_image",
    site: "@unifostedu",
    title: "Manipal Online MBA 2026 | UGC-Approved, NAAC A+ | 13 Specializations | ₹1.5-2L",
    description:
      "Flexible 2-year Online MBA from NAAC A+ Manipal University Jaipur 2026. 13 specializations, EMI options, 30-50% avg salary hike. Perfect for working professionals, no entrance exam.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327064/mba-online-image_zclzst.webp"],
    creator: "@unifostedu",
  },

  // ===== ROBOTS =====
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },

  // ===== AUTHORS & PUBLISHER =====
  authors: [
    { name: "UNIFOST", url: "https://www.unifostedu.com" },
  ],
  publisher: "UNIFOST - Online Education Guidance Platform",
  creator: "UNIFOST",

  // ===== FORMAT DETECTION =====
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ===== GEO & LANGUAGE =====
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    "ICBM": "26.9124, 75.7873",
    "language": "en-IN",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "doc_type": "article",
  },

  // ===== VERIFICATION TAGS (Add your actual verification codes) =====
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const dynamic = "force-static";
export const revalidate = 604800; // 7 days

// ═══════════════════════════════════════════════════════════════
// ─── STRUCTURED DATA / SCHEMA.ORG SCHEMAS ─────────────────────
// ═══════════════════════════════════════════════════════════════

// 1️⃣ ORGANIZATION SCHEMA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.unifostedu.com/#organization",
  name: "UNIFOST",
  alternateName: "UNIFOST Education Guidance",
  url: "https://www.unifostedu.com",
  sameAs: [
    "https://www.facebook.com/unifostedu",
    "https://www.instagram.com/unifostedu",
    "https://www.linkedin.com/company/unifostedu",
    "https://www.youtube.com/@unifostedu",
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://www.unifostedu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  contact: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+91-7042646766",
    email: "info@unifostedu.com",
    areaServed: "IN",
    availableLanguage: "en-IN",
  },
};

// 2️⃣ UNIVERSITY SCHEMA (Manipal University Jaipur)
const universitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://www.manipal.edu/#university",
  name: "Manipal University Jaipur",
  alternateName: ["MUJ", "Manipal University Jaipur Online", "Online Manipal"],
  url: "https://www.manipal.edu",
  sameAs: "https://www.manipal.edu",
  logo: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
    width: 200,
    height: 60,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manipal University Jaipur Campus",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302022",
    addressCountry: "IN",
  },
  telephone: "+91-7042646766",
  email: "info@unifostedu.com",
  areaServed: "IN",
  educationalCredentialAwarded: [
    "Bachelor of Business Administration (BBA)",
    "Bachelor of Computer Applications (BCA)",
    "Master of Business Administration (MBA)",
    "Master of Computer Applications (MCA)",
    "Master of Commerce (M.Com)",
    "Bachelor of Commerce (B.Com)",
  ],
  accreditation: {
    "@type": "Organization",
    name: "National Assessment and Accreditation Council (NAAC)",
    grade: "A+",
  },
  memberOf: {
    "@type": "Organization",
    name: "University Grants Commission (UGC)",
    url: "https://www.ugc.ac.in",
  },
};

// 3️⃣ COURSE SCHEMA (MBA - Comprehensive)
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://www.unifostedu.com/muj-online-mba/#course",
  name: "Master of Business Administration (MBA) – Online",
  alternateName: [
    "Online MBA",
    "Manipal Online MBA",
    "MUJ Online MBA",
    "UGC-Approved Online MBA",
  ],
  description:
    "Comprehensive 2-year UGC-entitled Online MBA from Manipal University Jaipur (NAAC A+). Choose from 13 specializations including Marketing, Finance, HR, Analytics, IT, Operations, Supply Chain, and more. Flexible learning with live & recorded classes, EMI payment options, and career support.",
  url: "https://www.unifostedu.com/muj-online-mba",
  image: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327064/mba-online-image_zclzst.webp",
    width: 1200,
    height: 630,
  },
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    url: "https://www.manipal.edu",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  },
  instructor: [
    {
      "@type": "Person",
      name: "Expert Faculty",
      jobTitle: "MBA Faculty",
    },
  ],
  courseMode: "OnlineCreditsMode",
  educationalLevel: "Advanced",
  educationalCredentialAwarded: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Degree",
    name: "Master of Business Administration",
    recognizedBy: {
      "@type": "Organization",
      name: "University Grants Commission",
      sameAs: "https://www.ugc.ac.in",
    },
  },
  timeRequired: "P2Y",
  inLanguage: "en-IN",
  learningResourceType: [
    "Live Classes",
    "Video Lectures",
    "Case Studies",
    "Assignments",
    "Projects",
    "Dissertation",
  ],
  teaches: [
    "Business Management",
    "Financial Management",
    "Marketing Strategy",
    "Human Resource Management",
    "Data Analytics",
    "Operations Management",
    "Supply Chain Management",
    "Project Management",
    "Leadership Skills",
    "Strategic Planning",
    "Digital Transformation",
    "Business Intelligence",
  ],
  coursePrerequisites: {
    "@type": "EducationalOccupationalCredential",
    name: "Bachelor's Degree",
    credentialCategory: "Degree",
    description: "Bachelor's degree from a recognized university with minimum 50% marks",
  },
  numberOfCredits: {
    "@type": "StructuredValue",
    name: "Credit Hours",
    value: 90,
  },
  syllabusSummary:
    "Semesters 1-2: Business Fundamentals (Economics, Finance, Marketing, HR, Analytics). Semesters 3-4: Advanced courses, specialization electives, capstone project.",
  offers: {
        "@type": "Offer",
        category: "Online Degree Program",
        price: "150000",
        priceCurrency: "INR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.unifostedu.com/muj-online-mba",
        description: "Program fee: ₹1,50,000 - ₹2,00,000 (varies by specialization). EMI options available from ₹4,999/month.",
        pricingDetails: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          price: "150000-200000",
          description: "Semester-wise payment: ₹37,500 - ₹50,000 per semester",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "1250",
        reviewCount: "850",
        description: "Based on student reviews and feedback",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Working Professional",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody: "Perfect balance of flexibility and quality education. Got promoted within 6 months of completing my MBA.",
          datePublished: "2026-01-15",
        },
      ],
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          name: "Marketing Management Specialization",
          description: "Focus on digital marketing, branding, and GTM strategies",
          courseMode: "Online",
          duration: "P2Y",
          startDate: "2026-07-01",
          endDate: "2028-07-01",
        },
        {
          "@type": "CourseInstance",
          name: "Finance Management Specialization",
          description: "Financial modeling, investments, and strategic finance",
          courseMode: "Online",
          duration: "P2Y",
          startDate: "2026-07-01",
          endDate: "2028-07-01",
        },
        {
          "@type": "CourseInstance",
          name: "Analytics & Data Science Specialization",
          description: "Predictive analytics, BI tools, and AI/ML applications",
          courseMode: "Online",
          duration: "P2Y",
          startDate: "2026-07-01",
          endDate: "2028-07-01",
        },
      ],
  author: {
    "@type": "Organization",
    name: "Manipal University Jaipur",
    url: "https://www.manipal.edu",
  },
};

// 4️⃣ FAQ SCHEMA (Structured FAQs for Featured Snippets)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.unifostedu.com/muj-online-mba/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online MBA UGC approved and NAAC accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MUJ Online MBA is UGC-entitled, NAAC A+ accredited, and treated at par with on-campus degrees. Your certificate does not mention 'online', making it globally recognized for job applications, promotions, and higher education.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee structure of Manipal Online MBA and are EMI options available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Program fee is ₹1,50,000 - ₹2,00,000 (varies by specialization), payable semester-wise at ₹37,500 - ₹50,000 per semester. EMI options starting from ₹4,999/month are available through partner NBFCs and banks. Zero or low-cost EMI plans are offered.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 13 specializations available in Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MUJ Online MBA offers 13 specializations: (1) Digital Marketing, (2) Marketing Management, (3) Analytics & Data Science, (4) IT & FinTech, (5) Finance Management, (6) Human Resource Management, (7) Banking, Financial Services & Insurance (BFSI), (8) Operations Management, (9) International Business, (10) Information Systems Management, (11) Project Management, (12) Supply Chain Management, and (13) Retail Management & Quick Commerce.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to apply for Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anyone with a Bachelor's degree from a recognized university with minimum 50% aggregate marks can apply. Final-year students can also apply, provided they submit documents before the course start date. No work experience is mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard duration is 2 years (4 semesters). However, you can take up to 4 years to complete the degree, making it flexible for working professionals.",
      },
    },
    {
      "@type": "Question",
      name: "How does the online learning work at Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning is through Online Manipal's dedicated LMS platform with recorded lectures (access anytime), live interactive sessions (weekend classes), e-content, discussion forums, peer collaboration, and digital assignments. You can learn at your own pace while maintaining your job.",
      },
    },
    {
      "@type": "Question",
      name: "What career support is offered after Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MUJ provides comprehensive career support including CV/LinkedIn profile building, mock interviews, career mentoring, corporate networking events, CXO talks, alumni network access, and job readiness bootcamps. Graduates report 30-50% average salary hike within 2 years.",
      },
    },
    {
      "@type": "Question",
      name: "Is Manipal Online MBA worth it for working professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Manipal Online MBA is designed for working professionals offering flexibility (weekend classes, recorded lectures), no career breaks, affordable fees with EMI options, quality education from NAAC A+ university, and proven career advancement. Most learners use it for promotions or career switches.",
      },
    },
    {
      "@type": "Question",
      name: "What is the admission process for Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The admission process is straightforward: (1) Register on Online Manipal portal, (2) Fill digital application with academic and professional details, (3) Upload required documents (mark sheets, ID proof, photo), (4) Application screening and possible assessment, (5) Receive offer and pay fees (full/semester/EMI), (6) Get LMS credentials and start learning.",
      },
    },
    {
      "@type": "Question",
      name: "What jobs can I get after completing Manipal Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular job roles include: Marketing Manager, Brand Strategist, Financial Analyst, Investment Associate, HR Business Partner, Talent Development Lead, Operations Lead, Supply Chain Specialist, Product Manager, Business Consultant, and Entrepreneur/Startup Founder. Industries include IT, Banking & Financial Services, Consulting, FMCG & Retail, Healthcare & Pharmaceuticals, and Manufacturing.",
      },
    },
  ],
};

// 5️⃣ BREADCRUMB SCHEMA
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.unifostedu.com/muj-online-mba/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.unifostedu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Universities",
      item: "https://www.unifostedu.com/universities",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manipal University Jaipur",
      item: "https://www.unifostedu.com/manipal-university-jaipur",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Online MBA",
      item: "https://www.unifostedu.com/muj-online-mba",
    },
  ],
};

// 6️⃣ LOCAL BUSINESS SCHEMA (For Jaipur location)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.unifostedu.com/muj-online-mba/#localbusiness",
  name: "Manipal University Jaipur - Online MBA Campus",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manipal University Jaipur",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302022",
    addressCountry: "IN",
  },
  telephone: "+91-7042646766",
  email: "info@unifostedu.com",
  areaServed: {
    "@type": "GeoShape",
    box: "26.9124 75.7873 28.7041 77.2099", // Jaipur boundaries
  },
  url: "https://www.unifostedu.com/muj-online-mba",
  priceRange: "₹1,50,000 - ₹2,00,000",
  geo: {
    "@type": "Point",
    latitude: "26.9124",
    longitude: "75.7873",
  },
};

// 7️⃣ AGGREGATE OFFER SCHEMA (For pricing)
const aggregateOfferSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "@id": "https://www.unifostedu.com/muj-online-mba/#aggregateoffer",
  priceCurrency: "INR",
  lowPrice: "150000",
  highPrice: "200000",
  offerCount: "13",
  offers: [
    {
      "@type": "Offer",
      name: "Digital Marketing Specialization",
      price: "180000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Marketing Management Specialization",
      price: "175000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Finance Management Specialization",
      price: "185000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  ],
};

// 8️⃣ ARTICLE SCHEMA (For blog-like content)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.unifostedu.com/muj-online-mba/#article",
  headline: "Complete Guide to Manipal Online MBA 2026: UGC-Approved, NAAC A+, 13 Specializations",
  description: "Everything you need to know about Manipal University Jaipur's Online MBA program 2026 including fees, eligibility, specializations, career scope, and admission process.",
  image: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327064/mba-online-image_zclzst.webp",
    width: 1200,
    height: 630,
  },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
  author: {
    "@type": "Organization",
    name: "UNIFOST",
    url: "https://www.unifostedu.com",
  },
  publisher: {
    "@type": "Organization",
    name: "UNIFOST",
    logo: {
      "@type": "ImageObject",
      url: "https://www.unifostedu.com/images/logo.png",
    },
  },
};

// 9️⃣ VIDEO SCHEMA (For promotional videos if any)
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://www.unifostedu.com/muj-online-mba/#video",
  name: "Manipal Online MBA - Complete Overview 2026",
  description: "Learn about Manipal University Jaipur's UGC-approved Online MBA program 2026, specializations, fees, and career opportunities.",
  thumbnailUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327064/mba-online-image_zclzst.webp",
  uploadDate: "2026-01-01",
  duration: "PT5M",
  contentUrl: "https://www.youtube.com/watch?v=YOUR-VIDEO-ID",
  embedUrl: "https://www.youtube.com/embed/YOUR-VIDEO-ID",
};

// Combine all schemas
const allSchemas = [
  organizationSchema,
  universitySchema,
  courseSchema,
  faqSchema,
  breadcrumbSchema,
  localBusinessSchema,
  aggregateOfferSchema,
  articleSchema,
  videoSchema, // Uncomment if you have promotional videos
];

// ═══════════════════════════════════════════════════════════════
// ─── LAYOUT COMPONENT WITH SEO ─────────────────────────────────
// ═══════════════════════════════════════════════════════════════

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== ALL STRUCTURED DATA SCHEMAS ===== */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ===== ADDITIONAL SEO META TAGS ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.unifostedu.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.unifostedu.com/search?q={search_term_string}",
              },
              query_input: "required name=search_term_string",
            },
          }),
        }}
      />

      {children}
    </div>
  );
}