import { ChildrenProps } from "types/ChildrenProps";

// Constants
const BASE_URL = "https://unifostedu.com";
const PAGE_URL = `${BASE_URL}/upes`;
const TODAY = new Date().toISOString().split("T")[0];

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "UPES Online Admission 2026 | Best BBA MBA BCA MCA Online Courses in India | UGC Approved",
  description: "UPES Online Admission 2026 open. Apply for NAAC A+ accredited, UGC-entitled BBA, BCA, MBA, MCA online degree programs. Flexible learning, industry-aligned curriculum, career support & 25K+ students. Enroll now!",
  keywords: [
    "UPES Online admission 2026",
    "UPES Online MBA fees",
    "UPES Online BBA 2026",
    "UPES Online BCA 2026",
    "UPES Online MCA 2026",
    "UPES University Online UGC entitled",
    "NAAC A+ online university Dehradun",
    "best online MBA Dehradun 2026",
    "online MBA UPES Oil & Gas",
    "UPES Online placement assistance",
    "UPES Online scholarship 2026",
    // City-wise
    "UPES Online MBA Dehradun",
    "UPES Online admission Delhi",
    "UPES Online MBA Chandigarh",
    "UPES Online admission Noida",
    "UPES Online MBA Gurugram",
    "UPES Online MBA Mumbai",
    "UPES Online admission Pune",
    "UPES Online MBA Bangalore",
    "UPES Online MBA Hyderabad"
  ],
  
  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "UPES Online Admission 2026 | Best UGC Approved BBA MBA BCA MCA Courses",
    description: "Explore UPES Online's UGC-entitled degree programs. BBA, BCA, MBA, MCA with flexible learning, career support & job assistance. 25K+ students. Apply now!",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp",
        width: 1200,
        height: 630,
        alt: "UPES University Online - Top-Ranked Online Degree Programs",
        type: "image/webp",
      },
    ],
    siteName: "UniFost - UPES Online Admission Portal",
  },

  twitter: {
    card: "summary_large_image",
    title: "UPES Online Admission 2026 | Best UGC Approved Online Degree Programs",
    description: "BBA, BCA, MBA, MCA online courses. Flexible learning for working professionals. NAAC A+ accredited. Limited seats available!",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp"],
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

  authors: [{ name: "UniFost Education" }],
  publisher: "UniFost Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Structured Data for SEO
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Schema: EducationalOrganization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "UPES University Online",
  alternateName: ["UPES Online", "University of Petroleum and Energy Studies Online"],
  description: "UPES Online offers NAAC A+ accredited, UGC-entitled online degree programs including BBA, BCA, MBA, MCA. Flexible learning for working professionals with placement assistance.",
  url: PAGE_URL,
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327864/upes_logo_nogkrn.png",
  sameAs: [
    "https://www.facebook.com/upesonline",
    "https://www.instagram.com/upesonline",
    "https://www.linkedin.com/company/upes-online",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7042646766",
    contactType: "Admissions Support",
    email: "info@unifostedu.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1250",
  },
  award: ["NAAC A+", "UGC Entitled", "NIRF Ranked"],
};

// Schema: WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UniFost - UPES Online Admission",
  url: PAGE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${PAGE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Schema: LandingPage
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LandingPage"],
  name: "UPES Online Admission 2026 | Best BBA MBA BCA MCA Courses",
  description: "UPES Online Admission 2026 open. NAAC A+ accredited, UGC-entitled BBA, BCA, MBA, MCA online degree programs with flexible learning and career support.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  datePublished: "2026-01-01",
  dateModified: TODAY,
  publisher: {
    "@type": "EducationalOrganization",
    name: "UPES University Online",
    url: PAGE_URL,
  },
};

// Schema: Courses (ItemList)
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UPES Online Programs 2026",
  description: "List of undergraduate and postgraduate online courses",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Online BBA — Bachelor of Business Administration",
        description: "3-year UGC approved online BBA from UPES. Fee: ₹1,68,768. Eligibility: 10+2. Specializations: Operations, Finance, HR, Marketing.",
        provider: { "@type": "EducationalOrganization", name: "UPES University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: "168768",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Online BCA — Bachelor of Computer Applications",
        description: "3-year UGC approved online BCA from UPES. Fee: ₹1,68,768. Eligibility: 10+2. Specializations: Cloud Computing, Cyber Security, Data Analytics.",
        provider: { "@type": "EducationalOrganization", name: "UPES University Online", sameAs: PAGE_URL },
        timeRequired: "P3Y",
        educationalLevel: "Undergraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: "168768",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Online MBA — Master of Business Administration",
        description: "2-year UGC approved online MBA from UPES. Fee: ₹1,90,920. Eligibility: Graduation. 12+ specializations including Oil & Gas, Finance, HR, Supply Chain.",
        provider: { "@type": "EducationalOrganization", name: "UPES University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: "190920",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Online MCA — Master of Computer Applications",
        description: "2-year UGC approved online MCA from UPES. Fee: ₹1,85,448. Eligibility: Graduation. Specializations: AI, Machine Learning, Cyber Security & Data Science.",
        provider: { "@type": "EducationalOrganization", name: "UPES University Online", sameAs: PAGE_URL },
        timeRequired: "P2Y",
        educationalLevel: "Postgraduate",
        inLanguage: "en-IN",
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: "185448",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

// Schema: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "UPES University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: PAGE_URL },
  ],
};

// Schema: City-wise coverage
const citySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UPES Online Admission 2026 — Available Across India",
  itemListElement: [
    "Dehradun","Chandigarh","Delhi","Noida","Gurugram","Ghaziabad","Faridabad",
    "Mumbai","Pune","Nagpur","Nashik","Thane","Navi Mumbai","Bangalore",
    "Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara","Rajkot",
    "Jaipur","Jodhpur","Udaipur","Kota","Lucknow","Kanpur","Varanasi",
    "Agra","Meerut","Allahabad","Bareilly","Aligarh","Moradabad","Gorakhpur",
    "Bhopal","Indore","Gwalior","Jabalpur","Patna","Ranchi","Bhubaneswar",
    "Raipur","Guwahati","Dehradun","Jammu","Amritsar","Ludhiana","Jalandhar",
    "Coimbatore","Kochi","Thiruvananthapuram","Visakhapatnam","Vijayawada",
    "Madurai","Salem","Tiruppur","Tiruchirappalli","Warangal","Guntur",
    "Mangalore","Hubli","Mysore"
  ].map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `UPES Online Admission 2026 — ${city}`,
    url: PAGE_URL,
  })),
};

// Schema: FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the eligibility criteria for UPES Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eligibility varies depending on the course. Generally, candidates must have completed 10+2 for UG programs and a bachelor's degree from a recognized university for PG programs.",
      },
    },
    {
      "@type": "Question",
      name: "Is UPES Online recognized by UGC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UPES Online offers UGC-entitled programs approved under the UGC (Online Education) Regulations, ensuring equal recognition as regular degrees.",
      },
    },
    {
      "@type": "Question",
      name: "Can I study while working a full-time job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. UPES Online programs are designed for working professionals, offering flexible learning schedules and self-paced study options.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee structure for UPES Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UPES Online fees: BBA ₹1,68,768 (3 years), BCA ₹1,68,768 (3 years), MBA ₹1,90,920 (2 years), MCA ₹1,85,448 (2 years). EMI and scholarship options available.",
      },
    },
  ],
};

export default function UPESLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
      {/* LCP Image Preload */}
      <link rel="preload" as="image" href="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#003366" />
      
      {/* Geo / Local SEO */}
      <meta name="geo.region" content="IN-UT" />
      <meta name="geo.placename" content="Dehradun, Uttarakhand" />
      <meta name="geo.position" content="30.3165;78.0322" />
      <meta name="ICBM" content="30.3165, 78.0322" />
      
      {/* EducationalOrganization Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      
      {/* WebSite Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      
      {/* LandingPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
      
      {/* Courses Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* City-wise Coverage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {children}
    </>
  );
}