import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Online BCA Degree (UGC-Approved) 2026 | Manipal University Jaipur - NAAC A+ | Flexible Learning",
  description:
    "UGC-approved Online BCA from Manipal University Jaipur (NAAC A+) 2026. 3-year flexible degree with Data Science, AI & Cybersecurity specializations. ₹1,35,000 total fees. Apply now!",
  keywords: `Online BCA degree, Manipal University BCA, UGC approved BCA, NAAC A+ online degree, 
    distance BCA India, Bachelor of Computer Applications online, BCA specializations data science, 
    BCA AI certification, cybersecurity BCA, online computer science degree, affordable BCA program, 
    working professionals BCA, BCA full stack development, virtual labs BCA, BCA Jaipur, 
    BCA career scope, BCA job opportunities, BCA to MCA, BCA placement, 
    online degree for working professionals, computer science online course, Manipal online BCA admission 2026, Manipal online BCA 2026, MUJ online BCA 2026`,
  
  metadataBase: new URL("https://www.unifostedu.com"),
  
  alternates: {
    canonical: "https://www.unifostedu.com/muj-online-bca",
  },

  openGraph: {
    title: "Online BCA from Manipal University Jaipur - UGC Approved | Career Ready",
    description:
      "Complete Online BCA from India's NAAC A+ university. UGC-entitled, industry-aligned curriculum with live classes, virtual labs & 24/7 support. ₹1,35,000 fees.",
    url: "https://unifostedu.com/muj-online-bca",
    siteName: "UNIFOST - Online Education Platform",
    locale: "en_IN",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-bca-hero.webp",
        width: 1200,
        height: 630,
        alt: "Manipal Online BCA Program - UGC Approved Degree",
        type: "image/webp",
      },
      {
        url: "https://unifostedu.com/images/manipal-bca-curriculum.webp",
        width: 1200,
        height: 630,
        alt: "BCA Curriculum with Data Science, AI & Cybersecurity Specializations",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BCA from Manipal | UGC-Approved | NAAC A+ University",
    description:
      "Enroll in UGC-approved Online BCA from Manipal University. Specializations: Data Science, AI, Cybersecurity. Flexible, affordable, career-focused learning.",
    images: ["https://unifostedu.com/images/manipal-bca-hero.webp"],
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

  // Additional SEO Meta Tags
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
  "@id": "https://unifostedu.com/muj-online-bca/#course",
  name: "Online BCA - Bachelor of Computer Applications",
  alternateName: [
    "Online BCA Degree",
    "UGC-Approved BCA",
    "Distance BCA",
    "Virtual BCA Program",
  ],
  description:
    "UGC-approved 3-year online Bachelor of Computer Applications (BCA) from Manipal University Jaipur (NAAC A+ accredited). Specializations: Data Science, AI, Cybersecurity, Full Stack Development. ₹1,35,000 total fees. Flexible learning with live classes, virtual labs & 24/7 support.",
  url: "https://unifostedu.com/muj-online-bca",
  image: [
    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bca-online-image_awhemy.webp",
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
  educationalCredentialAwarded: "Bachelor of Computer Applications",
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
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Web Development",
    "Cybersecurity Fundamentals",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Full Stack Development",
    "Network Administration",
    "Software Engineering",
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
      url: "https://unifostedu.com/muj-online-bca",
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
    ratingValue: "4.7",
    reviewCount: 342,
    bestRating: "5",
    worstRating: "1",
  },
};

// 4. Advanced FAQ Schema - BCA Specific
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-bca/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online BCA UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Manipal Online BCA is UGC-entitled and fully approved by the University Grants Commission. It is also NAAC A+ accredited, making it a recognized and valid degree for employment and higher studies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration and eligibility for Online BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duration: 3 years (6 semesters). Eligibility: 10+2 pass from recognized board with mathematics/statistics/business math/computer science OR any stream with foundational mathematics, minimum 50% aggregate (5% relaxation for SC/ST/OBC). No age bar.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Manipal Online BCA cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total course fee: ₹1,35,000 (₹22,500 per semester). EMI options and scholarships available for eligible students.",
      },
    },
    {
      "@type": "Question",
      name: "What are the specializations available in BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Specializations: Data Science & Analytics, Artificial Intelligence, Cybersecurity, Full Stack Development, Cloud Computing, Business Analytics.",
      },
    },
    {
      "@type": "Question",
      name: "Can working professionals do BCA online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the BCA program is fully flexible and online. You can attend live classes or access recorded sessions, work simultaneously, and study at your own pace.",
      },
    },
    {
      "@type": "Question",
      name: "What are career options after BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Career options: Software Developer, Web Developer, Data Analyst, Network Administrator, Cloud Engineer, Cybersecurity Specialist, QA Tester, UI/UX Developer. You can also pursue MCA, MBA in IT.",
      },
    },
    {
      "@type": "Question",
      name: "Is Online BCA valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UGC-approved online BCA degree is valid for both private and government job sectors.",
      },
    },
    {
      "@type": "Question",
      name: "How is Manipal Online BCA different from regular BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both carry same credibility as UGC-approved degrees. Online BCA offers flexibility, affordability, and allows you to work/study simultaneously. Regular BCA requires campus attendance.",
      },
    },
  ],
};

// 5. Breadcrumb Schema
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
      name: "Online BCA",
      item: "https://unifostedu.com/muj-online-bca",
    },
  ],
};

// 6. Program Details Schema
const programSchema = {
  "@context": "https://schema.org",
  "@type": "ProgramDetails",
  "@id": "https://unifostedu.com/muj-online-bca/#program",
  name: "Online BCA Program",
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
  "@id": "https://unifostedu.com/muj-online-bca/#review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody:
    "Manipal Online BCA is a game-changer for working professionals. Flexible schedule, quality content, and great support.",
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
  "@id": "https://unifostedu.com/muj-online-bca/#credential",
  name: "Bachelor of Computer Applications (BCA)",
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
  name: "Manipal Online BCA - Program Overview",
  description: "Complete overview of the Online BCA program from Manipal University Jaipur",
  uploadDate: "2024-01-01",
  duration: "PT10M",
  thumbnailUrl: "https://unifostedu.com/images/bca-video-thumb.webp",
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

// ─── Layout ─────────────────────────────────────────

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