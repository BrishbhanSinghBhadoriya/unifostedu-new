import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Online MCA - Manipal University Jaipur 2026 | UGC Approved, NAAC A+ | 2-Year Program",
  
  description:
    "Manipal University Jaipur's UGC-approved Online MCA (2-year) 2026 with AI, Data Science, Cybersecurity, Cloud Computing specializations. NAAC A+ accredited. Flexible learning for working professionals. ₹1.58L with EMI options. Apply now!",

  keywords:
    "Online MCA, Manipal Online MCA, MCA for Working Professionals, UGC Approved Online MCA, Best Online MCA India, NAAC A+ MCA, MCA AI Data Science, Online MCA Cybersecurity, MCA Flexible Learning, Online MCA Fees India, Online MCA Admission 2026, MCA Specializations, Manipal Online MCA 2026",

  metadataBase: new URL("https://unifostedu.com"),

  alternates: {
    canonical: "https://unifostedu.com/muj-online-mca",
  },

  openGraph: {
    title: "Manipal Online MCA 2026 | UGC Approved, NAAC A+ | 2-Year Program for IT Professionals",
    description:
      "Top-ranked Online MCA from Manipal University Jaipur 2026 with AI, Data Science, Cybersecurity, Cloud Computing specializations. Perfect for working professionals. ₹1.58L with EMI options, no entrance exam.",
    url: "https://unifostedu.com/muj-online-mca",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/muj-online-mca-og.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online MCA 2026 - Best Online Master's in Computer Applications",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MCA 2026 | Best for Working Professionals | UGC Approved",
    description:
      "2-Year Online MCA 2026 with AI, Data Science, Cybersecurity specializations. Apply Now! ₹1.58L with EMI.",
    images: ["https://unifostedu.com/images/muj-online-mca-twitter.webp"],
    creator: "@UNIFOST",
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

  authors: [{ name: "UNIFOST", url: "https://unifostedu.com" }],
  publisher: "UNIFOST",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan",
    "geo.country": "India",
    "language": "en-IN",
    "revisit-after": "7 days",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
};

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

// ─── SCHEMA.ORG STRUCTURED DATA ─────────────────────────────────

// 1. Organization Schema
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
  sameAs: [
    "https://www.linkedin.com/company/unifost",
    "https://www.facebook.com/unifost",
    "https://www.instagram.com/unifost"
  ],
};

// 2. University/Educational Organization Schema
const universitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://manipal.edu/#university",
  name: "Manipal University Jaipur",
  alternateName: ["MUJ", "Manipal University Online", "Manipal Jaipur"],
  url: "https://www.manipal.edu",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jaipur, Rajasthan",
    addressLocality: "Jaipur",
    addressRegion: "RJ",
    postalCode: "302021",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Admissions",
    telephone: "+91-7042646766",
    email: "info@unifostedu.com",
  },
  accreditation: {
    "@type": "EducationalOccupationalCredential",
    name: "NAAC A+ Accreditation",
  },
};

// 3. Course/Program Schema - MAIN MCA COURSE
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-mca/#course",
  name: "Online Master of Computer Applications (MCA)",
  alternateName: "Manipal Online MCA",
  description:
    "UGC-approved 2-year Online Master of Computer Applications from Manipal University Jaipur with specializations in AI & Data Science, AI & Machine Learning, Cloud Computing, and Cybersecurity. NAAC A+ accredited. Designed for working professionals.",

  url: "https://unifostedu.com/muj-online-mca",
  image: [
    "https://unifostedu.com/images/muj-online-mca.webp",
    "https://unifostedu.com/images/muj-online-mca-og.webp"
  ],

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    sameAs: "https://www.manipal.edu",
  },

  courseMode: "OnlineCoursesMode",
  educationalLevel: "Postgraduate",
  timeRequired: "P2Y",
  inLanguage: "en-IN",

  teaches: [
    "Object-Oriented Programming",
    "Database Management Systems",
    "Data Structures",
    "Operating Systems",
    "Advanced Java",
    "Web Technologies",
    "Software Engineering",
    "Python Programming",
    "Machine Learning",
    "Cloud Architecture",
    "Cybersecurity",
    "Artificial Intelligence",
    "Full Stack Development"
  ],

  coursePrerequisites:
    "Bachelor's degree from recognized university with 50% marks. Mathematics at 10+2 or graduation level required.",

  potentialAction: {
    "@type": "ApplyAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://unifostedu.com/muj-online-mca#apply",
      actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
    },
  },

  offers: [
    {
      "@type": "Offer",
      category: "2-Year Online Degree - Full Program",
      priceCurrency: "INR",
      price: "158000",
      pricingPattern: "https://schema.org/SemesterPricing",
      availability: "https://schema.org/InStock",
      url: "https://unifostedu.com/muj-online-mca",
      description: "Total program fee for 2-year MCA - ₹1,58,000 (₹39,500 per semester)"
    },
    {
      "@type": "Offer",
      category: "EMI Payment Option",
      priceCurrency: "INR",
      price: "6000",
      pricingPattern: "https://schema.org/SemesterPricing",
      availability: "https://schema.org/InStock",
      description: "Monthly EMI starting from ₹6,000 (0% interest available)"
    }
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    ratingCount: 350,
    bestRating: 5,
    worstRating: 1
  },
};

// 4. Educational Occupational Credential Schema
const credentialSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "@id": "https://unifostedu.com/muj-online-mca/#credential",
  name: "Master of Computer Applications (MCA)",
  identifier: "NAAC-A-Plus-Accredited-MCA",
  provider: {
    "@type": "EducationalOrganization",
    name: "Manipal University Jaipur",
  },
  competencyRequired: "Bachelor's degree with Mathematics",
  educationalLevel: "Postgraduate",
  credentialCategory: "Master's Degree",
};

// 5. Program Specializations Schema
const specializationsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Course",
      "@id": "https://unifostedu.com/muj-online-mca/#specialization-ai-ds",
      name: "MCA - AI & Data Science Specialization",
      url: "https://unifostedu.com/muj-online-mca#specializations",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "158000"
      }
    },
    {
      "@type": "Course",
      "@id": "https://unifostedu.com/muj-online-mca/#specialization-ai-ml",
      name: "MCA - AI & Machine Learning Specialization",
      url: "https://unifostedu.com/muj-online-mca#specializations",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "158000"
      }
    },
    {
      "@type": "Course",
      "@id": "https://unifostedu.com/muj-online-mca/#specialization-cloud",
      name: "MCA - Cloud Computing Specialization",
      url: "https://unifostedu.com/muj-online-mca#specializations",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "158000"
      }
    },
    {
      "@type": "Course",
      "@id": "https://unifostedu.com/muj-online-mca/#specialization-cyber",
      name: "MCA - Cybersecurity Specialization",
      url: "https://unifostedu.com/muj-online-mca#specializations",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "158000"
      }
    }
  ]
};

// 6. FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-mca/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online MCA valid and recognized for jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Manipal University Jaipur's Online MCA is UGC-entitled and NAAC A+ accredited. It is treated equally with on-campus MCA degrees and recognized by all major employers globally. The degree certificate does not mention 'online' and is valid for job placements and higher education.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total fee for Manipal Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total program fee is ₹1,58,000 for 2 years (4 semesters), payable at ₹39,500 per semester. EMI options (0% to low-cost) are available through partner financial institutions.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals study while maintaining their job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the program is specifically designed for working professionals. Classes are conducted on weekends (Saturday-Sunday) with recorded lectures available 24/7. Time commitment is 15-20 hours per week.",
      },
    },
    {
      "@type": "Question",
      name: "What specializations are available in Manipal Online MCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manipal Online MCA offers 4 specializations: (1) AI & Data Science, (2) AI & Machine Learning, (3) Cloud Computing, (4) Cybersecurity. Each specialization has industry-aligned curriculum and expert faculty.",
      },
    },
    {
      "@type": "Question",
      name: "What career support is offered after graduation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manipal's career services include resume building, mock interviews, LinkedIn profile optimization, job portal access, and connections to 500+ hiring partners. Alumni report average salary increments of 30-50% post-graduation.",
      },
    },
  ],
};

// 7. Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-mca/#breadcrumb",
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
      name: "Programs",
      item: "https://unifostedu.com/programs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manipal University Jaipur",
      item: "https://unifostedu.com/manipal-university-jaipur",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Online MCA",
      item: "https://unifostedu.com/muj-online-mca",
    },
  ],
};

// 8. Admission Process Schema
const admissionSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://unifostedu.com/muj-online-mca/#admission",
  name: "How to Enroll in Manipal Online MCA",
  description: "Step-by-step guide to apply and enroll in Manipal University Jaipur's Online MCA program",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Register on Online Manipal Portal",
      text: "Visit the official website, verify your email/phone, and create an account"
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Fill Application Form",
      text: "Provide your academic and professional details accurately"
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Upload Documents",
      text: "Upload mark sheets, government ID, and other required documents"
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pay Application Fee",
      text: "Complete application by paying ₹500 application fee online"
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Receive Offer Letter",
      text: "Upon selection, receive offer and complete program fee payment"
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Start Your MCA Journey",
      text: "Get LMS credentials and join your batch with orientation"
    }
  ]
};

// Combine all schemas
const allSchemas = [
  organizationSchema,
  universitySchema,
  courseSchema,
  credentialSchema,
  specializationsSchema,
  faqSchema,
  breadcrumbSchema,
  admissionSchema,
];

// ─── LAYOUT COMPONENT ────────────────────────────────────

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data JSON-LD */}
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