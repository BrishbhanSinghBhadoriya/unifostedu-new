import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Online MBA Degree Program – Manipal University Jaipur (MUJ)",
  description:
    "Explore the UGC-approved Online MBA from Manipal University Jaipur (NAAC A+). Flexible, affordable, with specializations in Marketing, Finance, & more. Apply now!",
  keywords:
    "Online MBA, Manipal University Jaipur, MBA degree online, UGC approved MBA, NAAC A+ university, MBA specializations, distance MBA",
  metadataBase: new URL("https://www.unifost.com"),
  alternates: {
    canonical: "/muj-online-mba",
  },

  openGraph: {
    title: "Manipal Online MBA | MUJ Online | UGC Approved MBA Program",
    description:
      "Complete details of Manipal Online MBA — fees, eligibility, syllabus, specializations, and career scope.",
    url: "https://unifostedu.com/muj-online-mba",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-mba.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online MBA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MBA | MUJ Online | Master of Business Administration",
    description:
      "Learn about Manipal Online MBA: NAAC A+ university, flexible learning, specializations, and placement support.",
    images: ["https://unifostedu.com/images/manipal-mba.webp"],
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

  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "language": "en-IN",
    "revisit-after": "7 days",
  },
};

export const dynamic = "force-static";
export const revalidate = 604800;

// ─── SCHEMA SECTION ─────────────────────────────────

// Organization
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
};

// University
const universitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://manipal.edu/#university",
  name: "Manipal University Jaipur",
  alternateName: ["MUJ", "Online Manipal"],
  url: "https://www.manipal.edu",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

// Course Schema (MBA)
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-mba/#course",
  name: "Online MBA – Master of Business Administration",
  description:
    "UGC-entitled Online MBA from Manipal University Jaipur (NAAC A+). Specializations include HR, Finance, Marketing, Analytics, and Operations.",

  url: "https://unifostedu.com/muj-online-mba",
  image: "https://unifostedu.com/images/manipal-mba.webp",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    sameAs: "https://www.manipal.edu",
  },

  courseMode: "online",
  educationalLevel: "Postgraduate",
  timeRequired: "P2Y",
  inLanguage: "en-IN",

  teaches: [
    "Business Management",
    "Financial Management",
    "Marketing Strategy",
    "Human Resource Management",
    "Data Analytics",
    "Operations Management",
    "Leadership Skills",
  ],

  coursePrerequisites:
    "Bachelor's degree from a recognized university with minimum 50% marks",

  offers: {
    "@type": "Offer",
    category: "Online Degree",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://unifostedu.com/muj-online-mba",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-mba/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online MBA valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is UGC-entitled and NAAC A+ accredited. It is valid for jobs, promotions, and higher studies.",
      },
    },
    {
      "@type": "Question",
      name: "Who can apply for Online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anyone with a bachelor's degree from a recognized university can apply.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration is 2 years (4 semesters).",
      },
    },
    {
      "@type": "Question",
      name: "Is Online MBA good for working professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is flexible and designed for working professionals to study alongside their job.",
      },
    },
  ],
};

// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-mba/#breadcrumb",
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
      name: "Online MBA",
      item: "https://unifostedu.com/muj-online-mba",
    },
  ],
};

const allSchemas = [
  organizationSchema,
  universitySchema,
  courseSchema,
  faqSchema,
  breadcrumbSchema,
];

// ─── Layout ─────────────────────────────────

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
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
