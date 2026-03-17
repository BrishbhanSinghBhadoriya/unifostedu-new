import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Online BCA Degree Program – Manipal University Jaipur (MUJ)",
  description:
    "Explore the UGC-approved Online BCA from Manipal University Jaipur (NAAC A+). Flexible, affordable, with specializations in Data Science, AI, & more. Apply now!",
  keywords:
    "Online BCA, Manipal University Jaipur, BCA degree online, UGC approved BCA, NAAC A+ university, BCA specializations, distance BCA",
  metadataBase: new URL("https://www.unifost.com"),
  alternates: {
    canonical: "/muj-online-bca",
  },

  openGraph: {
    title: "Manipal Online BCA | Bachelor of Computer Applications | MUJ Online",
    description:
      "Complete details of Online BCA at Manipal University Jaipur — eligibility, fees, syllabus, and career scope in IT, AI, and Data Science.",
    url: "https://unifostedu.com/muj-online-bca",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online BCA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online BCA | Bachelor of Computer Applications | MUJ Online",
    description:
      "Learn about Manipal Online BCA: NAAC A+ accredited program with IT, AI, and cybersecurity career paths.",
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
  },
};

export const dynamic = "force-static";
export const revalidate = 604800;

// ─── SCHEMAS ─────────────────────────────────────────

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

// Course Schema (Improved)
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-bca/#course",
  name: "Online BCA – Bachelor of Computer Applications",
  description:
    "UGC-approved 3-year online BCA from Manipal University Jaipur (NAAC A+). Specializations include Data Science, AI, Cybersecurity, and Full Stack Development.",
  url: "https://unifostedu.com/muj-online-bca",
  image:
    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    sameAs: "https://www.manipal.edu",
  },

  courseMode: "online",
  educationalLevel: "Bachelor",
  timeRequired: "P3Y",
  inLanguage: "en-IN",

  teaches: [
    "Programming",
    "Data Structures",
    "Database Management",
    "Web Development",
    "Cybersecurity",
    "Artificial Intelligence",
    "Cloud Computing",
  ],

  coursePrerequisites:
    "10+2 from a recognized board with minimum 40% marks",

  offers: {
    "@type": "Offer",
    category: "Online Degree",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://unifostedu.com/muj-online-bca",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-bca/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online BCA valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is UGC-entitled and NAAC A+ accredited. The degree is valid for jobs, higher studies, and government exams.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of Manipal Online BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration is 3 years (6 semesters).",
      },
    },
    {
      "@type": "Question",
      name: "What are the career options after BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can become a Software Developer, Data Analyst, Web Developer, Cybersecurity Expert, or pursue MCA.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do BCA while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is a fully online flexible program designed for students and working professionals.",
      },
    },
  ],
};

// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-bca/#breadcrumb",
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
      name: "Online BCA",
      item: "https://unifostedu.com/muj-online-bca",
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

// ─── Layout ─────────────────────────────────────────

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
