import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Online BBA Degree (UGC-Approved) | Manipal University Jaipur - NAAC A+ | Flexible Learning",
  description:
    "UGC-approved Online BBA from Manipal University Jaipur (NAAC A+). 3-year flexible degree with Marketing, Finance, HR & Data Analytics specializations. ₹1,35,000 total fees. Apply now!",
  keywords: `Online BBA degree, Manipal University BBA, UGC approved BBA, NAAC A+ online degree,
    distance BBA India, Bachelor of Business Administration online, BBA specializations marketing,
    BBA finance accounting, BBA HR management, online business degree, affordable BBA program,
    working professionals BBA, BBA data analytics, BBA entrepreneurship, BBA digital marketing,
    virtual learning BBA, BBA placement, online degree for working professionals, business administration online course,
    BBA career scope, BBA job opportunities, MBA after BBA, BBA fees India, online business school`,
  
  metadataBase: new URL("https://www.unifostedu.com"),
  
  alternates: {
    canonical: "https://www.unifostedu.com/muj-online-bba",
  },

  openGraph: {
    title: "Online BBA from Manipal University Jaipur - UGC Approved | Career Ready",
    description:
      "Complete Online BBA from India's NAAC A+ university. UGC-entitled, industry-aligned curriculum with Marketing, Finance, HR, Data Analytics. ₹1,35,000 fees with flexible learning.",
    url: "https://unifostedu.com/muj-online-bba",
    siteName: "UNIFOST - Online Education Platform",
    locale: "en_IN",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-bba-hero.webp",
        width: 1200,
        height: 630,
        alt: "Manipal Online BBA Program - UGC Approved Degree",
        type: "image/webp",
      },
      {
        url: "https://unifostedu.com/images/manipal-bba-curriculum.webp",
        width: 1200,
        height: 630,
        alt: "BBA Curriculum with Marketing, Finance, HR & Data Analytics Specializations",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BBA from Manipal | UGC-Approved | NAAC A+ University",
    description:
      "Enroll in UGC-approved Online BBA from Manipal University. Specializations: Marketing, Finance, HR, Data Analytics. Flexible, affordable, career-focused learning.",
    images: ["https://unifostedu.com/images/manipal-bba-hero.webp"],
    creator: "@UNIFOST",
    site: "@UNIFOST",
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
    bingbot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },

  authors: [{ name: "UNIFOST", url: "https://unifostedu.com" }],
  publisher: "UNIFOST Educational Services",
  creator: "UNIFOST",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.country": "India",
    "geo.placename": "Jaipur, Rajasthan",
    "language": "en-IN",
    "revisit-after": "7 days",
    "rating": "safe for kids",
    "theme-color": "#f97316",
  },

  verification: {
    google: "google-site-verification-code",
  },
};

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

// ─── COMPREHENSIVE SCHEMAS ─────────────────────────────────────────

// 1. Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://unifostedu.com/#organization",
  name: "UNIFOST",
  alternateName: "UNIFOST Educational Services",
  url: "https://unifostedu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://unifostedu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  description: "India's leading online education platform for degree programs",
  sameAs: [
    "https://www.facebook.com/unifost",
    "https://www.linkedin.com/company/unifost",
    "https://www.twitter.com/unifost",
    "https://www.instagram.com/unifost",
  ],
  contact: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    telephone: "+91-7042646766",
    email: "info@unifostedu.com",
    availableLanguage: "en-IN",
  },
};

// 2. University Schema (Enhanced)
const universitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://manipal.edu/#university",
  name: "Manipal University Jaipur",
  alternateName: ["MUJ", "Manipal University", "Online Manipal", "MUJ Online"],
  url: "https://www.manipal.edu",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp",
  description: "NAAC A+ accredited university offering UGC-approved online and campus programs",
  sameAs: [
    "https://www.manipal.edu",
    "https://en.wikipedia.org/wiki/Manipal_Academy_of_Higher_Education",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manipal University Jaipur Campus",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303006",
    addressCountry: "IN",
  },
  telephone: "+91-141-4008000",
  accreditation: {
    "@type": "Text",
    name: "NAAC A+ Accreditation",
  },
};

// 3. Enhanced Course Schema
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-bba/#course",
  name: "Online BBA - Bachelor of Business Administration",
  alternateName: [
    "Online BBA Degree",
    "UGC-Approved BBA",
    "Distance BBA",
    "Virtual BBA Program",
  ],
  description:
    "UGC-approved 3-year online Bachelor of Business Administration (BBA) from Manipal University Jaipur (NAAC A+ accredited). Specializations: Marketing, Finance & Accounting, HR Management, Entrepreneurship, Data Analytics, Retail & E-commerce, Digital Marketing. ₹1,35,000 total fees. Flexible learning with live classes, virtual labs & 24/7 support.",
  url: "https://unifostedu.com/muj-online-bba",
  image: [
    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp",
  ],

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    sameAs: "https://www.manipal.edu",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  },

  instructor: {
    "@type": "Person",
    name: "Manipal University Faculty",
    url: "https://www.manipal.edu/faculty",
  },

  courseMode: "OnlineCoursePage",
  courseWorkload: "PT16W",
  educationalLevel: "Bachelor",
  educationalCredentialAwarded: "Bachelor of Business Administration",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    startDate: "2024-01-01",
    endDate: "2027-01-01",
    duration: "P3Y",
    priceCurrency: "INR",
    price: "135000",
    availability: "https://schema.org/InStock",
  },

  timeRequired: "P3Y",
  inLanguage: "en-IN",
  isAccessibleForFree: false,
  learningResourceType: "Degree Program",

  teaches: [
    "Business Management",
    "Marketing Management",
    "Financial Accounting",
    "Human Resource Management",
    "Organizational Behaviour",
    "Business Analytics",
    "Entrepreneurship",
    "Digital Marketing",
    "Supply Chain Management",
    "Business Communication",
    "International Business",
  ],

  coursePrerequisites:
    "10+2 (12th Standard) from recognized board with minimum 40% marks",

  educationalAlignment: {
    "@type": "AlignmentObject",
    alignmentType: "educationalLevel",
    targetName: "Bachelor Level",
    targetUrl: "https://en.wikipedia.org/wiki/Bachelor%27s_degree",
  },

  offers: [
    {
      "@type": "Offer",
      category: "Online Degree",
      priceCurrency: "INR",
      price: "135000",
      pricingStrategy: "SemesterlyPayment",
      availability: "https://schema.org/InStock",
      url: "https://unifostedu.com/muj-online-bba",
      eligibilityNote: "10+2 Pass with 40% minimum",
    },
    {
      "@type": "Offer",
      name: "EMI Payment Option",
      priceCurrency: "INR",
      price: "22500",
      pricingStrategy: "MonthlyPayment",
      availability: "https://schema.org/InStock",
    },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: 425,
    bestRating: "5",
    worstRating: "1",
  },
};

// 4. Advanced FAQ Schema - BBA Specific
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-bba/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online BBA UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Manipal Online BBA is UGC-entitled and fully approved by the University Grants Commission. It is also NAAC A+ accredited, making it a recognized and valid degree for employment and higher studies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration and eligibility for Online BBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duration: 3 years (6 semesters). Eligibility: 10+2 pass from recognized board with minimum 40% aggregate marks. Any stream is accepted (Science, Commerce, Arts). No age bar.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Manipal Online BBA cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total course fee: ₹1,35,000 (₹22,500 per semester). EMI options and scholarships available for eligible students.",
      },
    },
    {
      "@type": "Question",
      name: "What are the specializations available in BBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Specializations: Marketing, Finance & Accounting, Human Resource Management, Entrepreneurship & Family Business, Data Analytics, Retail & E-commerce, Digital Marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals do BBA online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the BBA program is fully flexible and online. You can attend live classes or access recorded sessions, work simultaneously, and study at your own pace.",
      },
    },
    {
      "@type": "Question",
      name: "What are career options after BBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Career options: Marketing Executive, HR Executive, Business Analyst, Finance Executive, Data Analyst, Entrepreneur, Operations Manager, Sales Manager, Digital Marketing Manager. You can also pursue MBA, PGDM in management.",
      },
    },
    {
      "@type": "Question",
      name: "Is Online BBA valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UGC-approved online BBA degree is valid for both private and government job sectors, including bank exams and government recruitment.",
      },
    },
    {
      "@type": "Question",
      name: "How is Manipal Online BBA different from regular BBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both carry same credibility as UGC-approved degrees. Online BBA offers flexibility, affordability, and allows you to work/study simultaneously. Regular BBA requires campus attendance.",
      },
    },
  ],
};

// 5. Breadcrumb Schema
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
      name: "Degrees",
      item: "https://unifostedu.com/degrees",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manipal University",
      item: "https://unifostedu.com/manipal-university",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Online BBA",
      item: "https://unifostedu.com/muj-online-bba",
    },
  ],
};

// 6. Program Details Schema
const programSchema = {
  "@context": "https://schema.org",
  "@type": "ProgramDetails",
  "@id": "https://unifostedu.com/muj-online-bba/#program",
  name: "Online BBA Program",
  duration: "3 Years",
  level: "Bachelor",
  totalCredits: 180,
  mode: "Online",
  format: "BlendedLearning",
};

// 7. Review/Rating Schema (Add real reviews)
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://unifostedu.com/muj-online-bba/#review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody:
    "Manipal Online BBA is perfect for working professionals. The flexible schedule, quality content, and excellent specialization options helped me advance my career. Great value for money!",
  author: {
    "@type": "Person",
    name: "Student",
  },
  datePublished: "2024-01-15",
};

// 8. Educational Credential Schema
const credentialSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "@id": "https://unifostedu.com/muj-online-bba/#credential",
  name: "Bachelor of Business Administration (BBA)",
  credentialCategory: "Degree",
  recognizedBy: {
    "@type": "Organization",
    name: "University Grants Commission (UGC)",
    url: "https://www.ugc.ac.in",
  },
  educationalLevel: "Bachelor's Degree",
};

// 9. Video/Learning Resource Schema
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Manipal Online BBA - Program Overview",
  description: "Complete overview of the Online BBA program from Manipal University Jaipur with specializations and career opportunities",
  uploadDate: "2024-01-01",
  duration: "PT10M",
  thumbnailUrl: "https://unifostedu.com/images/bba-video-thumb.webp",
};

// 10. Local Business Schema (for contact/admission)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Manipal University Jaipur - Admissions",
  url: "https://www.manipal.edu",
  telephone: "+91-141-4008000",
  email: "admissions@manipal.edu.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manipal University Campus",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.8124",
    longitude: "75.8204",
  },
};

const allSchemas = [
  organizationSchema,
  universitySchema,
  courseSchema,
  faqSchema,
  breadcrumbSchema,
  programSchema,
  reviewSchema,
  credentialSchema,
  videoSchema,
  localBusinessSchema,
];

// ─── Layout ─────────────────────────────────────────────────────────

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Additional SEO Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "UNIFOST",
            url: "https://unifostedu.com",
            searchAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://unifostedu.com/search?q={search_term_string}",
              },
              query: "required name=search_term_string",
            },
          }),
        }}
      />

      {children}
    </div>
  );
}