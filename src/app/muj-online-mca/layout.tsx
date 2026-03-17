import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Manipal Online MCA | Master of Computer Applications | MUJ Online",

  description:
    "Explore UGC-approved Online MCA from Manipal University Jaipur (NAAC A+). Learn about eligibility, fees, syllabus, and specializations like AI, Data Science, Cybersecurity, and Cloud Computing.",

  keywords:
    "Manipal Online MCA, MUJ MCA Online, Online MCA India, UGC Approved MCA, Online MCA Fees India, MCA for Working Professionals, MCA Data Science, MCA Cybersecurity, MCA Cloud Computing, Best Online MCA India",

  metadataBase: new URL("https://unifostedu.com"),

  alternates: {
    canonical: "https://unifostedu.com/muj-online-mca",
  },

  openGraph: {
    title: "Manipal Online MCA | MUJ Online | Master of Computer Applications",
    description:
      "Complete details of Manipal Online MCA — eligibility, fees, syllabus, and IT career opportunities.",
    url: "https://unifostedu.com/muj-online-mca",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-mca.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online MCA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MCA | MUJ Online | UGC Approved MCA",
    description:
      "Learn about Manipal Online MCA: NAAC A+ university, advanced IT curriculum, flexible learning, and career scope.",
    images: ["https://unifostedu.com/images/manipal-mca.webp"],
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

// ─── SCHEMA ─────────────────────────────────

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

// Course Schema (MCA)
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-mca/#course",
  name: "Online MCA – Master of Computer Applications",

  description:
    "UGC-approved Online MCA from Manipal University Jaipur (NAAC A+). Specializations include AI, Data Science, Cybersecurity, and Cloud Computing.",

  url: "https://unifostedu.com/muj-online-mca",
  image: "https://unifostedu.com/images/manipal-mca.webp",

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
    "Data Structures",
    "Algorithms",
    "Database Management",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Full Stack Development",
  ],

  coursePrerequisites:
    "Bachelor’s degree with Mathematics at 10+2 or graduation level",

  offers: {
    "@type": "Offer",
    category: "Online Degree",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://unifostedu.com/muj-online-mca",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-mca/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online MCA valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is UGC-entitled and NAAC A+ accredited, valid for jobs and higher education.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration is 2 years (4 semesters).",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals do MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is fully online and flexible for working professionals.",
      },
    },
    {
      "@type": "Question",
      name: "What are career options after MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can become Software Developer, Backend Engineer, Data Scientist, Cloud Engineer, or Cybersecurity Expert.",
      },
    },
  ],
};

// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-mca/#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://unifostedu.com" },
    { "@type": "ListItem", position: 2, name: "Manipal University Jaipur", item: "https://unifostedu.com/manipal-university-jaipur" },
    { "@type": "ListItem", position: 3, name: "Online MCA", item: "https://unifostedu.com/muj-online-mca" },
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