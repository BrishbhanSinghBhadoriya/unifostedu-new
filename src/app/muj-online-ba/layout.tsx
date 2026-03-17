import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Manipal Online BA | Bachelor of Arts | MUJ Online",
  description:
    "Get details about UGC-approved Online BA from Manipal University Jaipur — eligibility, specializations, fees, and flexible digital learning. NAAC A+ accredited university.",
  keywords:
    "Manipal Online BA, Online BA Degree India, Best Online BA Program, UGC Approved BA Online, Manipal University Jaipur BA, Online Manipal BA Fees, Manipal Online BA Syllabus, Is Manipal Online BA Good, BA Online Course India, Top Online BA Colleges India, Distance vs Online BA, BA English Online Manipal, BA Psychology Online Manipal",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/muj-online-ba",
  },
  openGraph: {
    title: "Manipal Online BA | Bachelor of Arts | MUJ Online",
    description:
      "Explore Manipal University's Online BA: syllabus, eligibility, and admissions for India's next-gen digital graduates.",
    url: "https://unifostedu.com/muj-online-ba",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online BA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal Online BA | Bachelor of Arts | MUJ Online",
    description:
      "Learn about Manipal Online BA: NAAC A+ digital campus, fees, and program details for next-gen students.",
    images: ["https://unifostedu.com/images/manipal.webp"],
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
  authors: [{ name: "UNIFOST" }],
  publisher: "UNIFOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Geo tags for India targeting
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "language": "en-IN",
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
  },
};

export const dynamic = "force-static";
export const revalidate = 604800;

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://unifostedu.com/#organization",
  name: "UNIFOST",
  url: "https://unifostedu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://unifostedu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7042646766",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/unifostedu",
    "https://www.instagram.com/unifostedu",
    "https://www.linkedin.com/company/unifost",
    "https://twitter.com/unifostedu",
  ],
};

const universitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://manipal.edu/#university",
  name: "Manipal University Jaipur",
  alternateName: ["MUJ", "Online Manipal"],
  url: "https://www.manipal.edu",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  description:
    "Manipal University Jaipur is a UGC-entitled, NAAC A+ accredited university offering world-class online degree programs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303007",
    addressCountry: "IN",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NAAC A+ Accreditation",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "UGC Entitled",
    },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-ba/#course",
  name: "Online BA – Bachelor of Arts",
  description:
    "UGC-approved 3-year online Bachelor of Arts program from Manipal University Jaipur (NAAC A+). Specializations in English, Political Science, Economics, Psychology, and Sociology. Fully online with flexible learning, recorded lectures, and proctored online exams.",
  url: "https://unifostedu.com/muj-online-ba",
  image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    sameAs: "https://www.manipal.edu",
  },
  offers: {
    "@type": "Offer",
    category: "Online Degree",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://unifostedu.com/muj-online-ba",
  },
  courseMode: "online",
  educationalLevel: "Bachelor",
  timeRequired: "P3Y",
  numberOfCredits: 3,
  occupationalCategory: [
    "Education",
    "Media & Journalism",
    "Public Administration",
    "Human Resources",
    "Social Work",
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Organization",
        name: "Manipal University Jaipur",
      },
    },
  ],
  teaches: [
    "English Literature",
    "Political Science",
    "Economics",
    "Psychology",
    "Sociology",
    "Research Methodology",
    "Communication Skills",
    "Critical Thinking",
  ],
  coursePrerequisites: "10+2 from a recognized board with minimum 40% marks",
  inLanguage: "en-IN",
  isAccessibleForFree: false,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-ba/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online BA degree valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Manipal University Jaipur is UGC-entitled and NAAC A+ accredited, and its online degrees are recognized at par with on-campus degrees in India. The degree is valid for higher studies, government jobs, and private sector employment.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do Manipal Online BA while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The entire programme is designed for flexible online learning, with recorded lectures and online assessments. Many learners are working professionals who study at their own pace.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total fee for Manipal Online BA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Indian students, the total program fee is affordable with flexible payment options including EMI and semester-wise payment. Scholarship options are also available for merit, defense, and alumni categories.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to visit the campus for classes or exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, it is a fully online programme. Classes, assignments, and exams are all conducted through the Online Manipal platform and proctored systems — no campus visit required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pursue an MA/MBA after Manipal Online BA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since it is a UGC-recognized bachelor's degree, you can appear for postgraduate entrance exams or apply for MA, MBA, MSW, B.Ed, or LLB programs that accept recognized BA degrees.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations are available in Manipal Online BA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manipal Online BA offers specializations in English, Political Science, Economics, Psychology, and Sociology. Each specialization is tailored to specific career goals in media, civil services, counseling, research, and social work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of Manipal Online BA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard duration is 3 years (6 semesters). The maximum duration allowed to complete the degree is 6 years, giving learners flexibility to pace their studies.",
      },
    },
    {
      "@type": "Question",
      name: "What are the eligibility criteria for Manipal Online BA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To enroll in Manipal Online BA, you need to have completed 10+2 from a recognized board in any stream with minimum 40% aggregate marks. There is no age limit, and foreign/NRI students with equivalent qualifications are also eligible.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-ba/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://unifostedu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Manipal University Jaipur",
      item: "https://unifostedu.com/manipal-university-jaipur",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Online BA – Bachelor of Arts",
      item: "https://unifostedu.com/muj-online-ba",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unifostedu.com/muj-online-ba/#webpage",
  url: "https://unifostedu.com/muj-online-ba",
  name: "Manipal Online BA | Bachelor of Arts | MUJ Online",
  description:
    "Get details about UGC-approved Online BA from Manipal University Jaipur — eligibility, specializations, fees, and flexible digital learning. NAAC A+ accredited university.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://unifostedu.com/#website",
    url: "https://unifostedu.com",
    name: "UNIFOST",
    description: "India's trusted online education consultancy",
    publisher: {
      "@id": "https://unifostedu.com/#organization",
    },
  },
  about: {
    "@id": "https://unifostedu.com/muj-online-ba/#course",
  },
  breadcrumb: {
    "@id": "https://unifostedu.com/muj-online-ba/#breadcrumb",
  },
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  publisher: {
    "@id": "https://unifostedu.com/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
    width: 1200,
    height: 630,
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "#overview", "#highlights"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://unifostedu.com/#localbusiness",
  name: "UNIFOST Education Consultancy",
  description:
    "India's trusted education consultancy helping students enroll in UGC-approved online degree programs from top universities like Manipal, Amity, and LPU.",
  url: "https://unifostedu.com",
  telephone: "+91-7042646766",
  email: "info@unifostedu.com",
  priceRange: "Free Counseling",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Delhi NCR" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Kolkata" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Jaipur" },
  ],
  serviceType: "Education Consultancy",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online Degree Programs",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manipal Online BA Admissions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manipal Online MBA Admissions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manipal Online BCA Admissions" } },
    ],
  },
};

const allSchemas = [
  organizationSchema,
  universitySchema,
  courseSchema,
  faqSchema,
  breadcrumbSchema,
  webPageSchema,
  localBusinessSchema,
];

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Inject all JSON-LD schemas ── */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </div>
  );
}
