import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Online BBA Degree Program – Manipal University Jaipur (MUJ)",
  description:
    "Explore the UGC-approved Online BBA from Manipal University Jaipur (NAAC A+). Flexible, affordable, with specializations in Marketing, Finance, & more. Apply now!",
  keywords:
    "Online BBA, Manipal University Jaipur, BBA degree online, UGC approved BBA, NAAC A+ university, BBA specializations, distance BBA",
  metadataBase: new URL("https://www.unifost.com"),
  alternates: {
    canonical: "/muj-online-bba",
  },

  openGraph: {
    title: "Manipal Online BBA | Bachelor of Business Administration | MUJ Online",
    description:
      "Explore Manipal Online BBA: eligibility, fees, syllabus, and career scope from NAAC A+ accredited university.",
    url: "https://unifostedu.com/muj-online-bba",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online BBA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online BBA | Bachelor of Business Administration | MUJ Online",
    description:
      "Learn about Manipal Online BBA: NAAC A+ digital campus, fees, and program details.",
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

// ─── SCHEMAS ─────────────────────────────────────────────────────────

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

// Course Schema
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-bba/#course",
  name: "Online BBA – Bachelor of Business Administration",
  description:
    "UGC-approved 3-year online BBA from Manipal University Jaipur (NAAC A+). Specializations in Marketing, Finance, HR, and Analytics.",
  url: "https://unifostedu.com/muj-online-bba",
  image:
    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
  },
  educationalLevel: "Bachelor",
  courseMode: "online",
  timeRequired: "P3Y",
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-bba/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online BBA valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is UGC-entitled and NAAC A+ accredited. The degree is valid for jobs and higher studies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of Manipal Online BBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The program duration is 3 years (6 semesters).",
      },
    },
    {
      "@type": "Question",
      name: "Can I do BBA while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is a flexible online program suitable for working professionals.",
      },
    },
  ],
};

// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-bba/#breadcrumb",
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
      name: "Online BBA",
      item: "https://unifostedu.com/muj-online-bba",
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

// ─── Layout ─────────────────────────────────────────────────────────

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
