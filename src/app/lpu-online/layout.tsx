import type { Metadata } from "next";
import { ChildrenProps } from "types/ChildrenProps";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL  = "https://unifostedu.com";
const PAGE_URL  = `${BASE_URL}/lpu-online`;
const LOGO_URL  = "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/LPU-Online-Logo_blodcq.svg";
const OG_IMAGE  = "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp";
const HERO_IMG  = "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu3_mzvr6y.webp";
const TODAY     = new Date().toISOString().split("T")[0];

// ================================================================================
// ======================== NEXT.JS METADATA =====================================
// ================================================================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "LPU Online 2026 | MBA, MCA, BBA, BCA, M.Com, MA, M.Sc | NAAC A++ | UGC Approved — Lovely Professional University",
    template: "%s | LPU Online 2026 — Lovely Professional University",
  },

  description:
    "LPU Online 2026 Admission Open. Enroll in NAAC A++ accredited, UGC-entitled online MBA, MCA, BBA, BCA, B.Com, M.Com, MA, M.Sc from Lovely Professional University. 50,000+ students. 100% placement assistance. No-Cost EMI. WES recognized. Fees from ₹80,000. Apply for July 2026 session now!",

  keywords: [
    // ── Brand ──────────────────────────────────────────────────────────────
    "LPU Online",
    "LPU Online 2026",
    "Lovely Professional University Online",
    "LPU Online admission 2026",
    "lpuonline apply now",
    "LPU distance education 2026",
    "LPU Online degree valid",
    "LPU Online UGC entitled",
    "LPU Online NAAC A++",
    "LPU Online WES recognized",
    "best online university India 2026 LPU",
    "LPU Online degree government jobs",

    // ── MBA ────────────────────────────────────────────────────────────────
    "LPU Online MBA 2026",
    "online MBA LPU",
    "online MBA in India LPU",
    "LPU Online MBA fees",
    "LPU Online MBA specializations",
    "LPU Online MBA placement",
    "online MBA for working professionals LPU",
    "online MBA without entrance exam LPU",
    "affordable online MBA India LPU",
    "executive MBA online India LPU",
    "best online MBA India 2026 LPU",
    "LPU MBA HR",
    "LPU MBA Finance",
    "LPU MBA Marketing",
    "LPU MBA Data Science",
    "LPU MBA Digital Marketing",
    "LPU MBA Operations",
    "LPU MBA Analytics",
    "LPU MBA IT Fintech",
    "LPU MBA International Business",
    "LPU MBA Banking",
    "LPU MBA Healthcare",
    "LPU MBA Logistics",

    // ── MCA ────────────────────────────────────────────────────────────────
    "LPU Online MCA 2026",
    "online MCA LPU",
    "LPU MCA AI ML",
    "LPU MCA Data Science",
    "LPU MCA Cybersecurity",
    "LPU MCA Full Stack",
    "LPU MCA AR VR Game Development",
    "best online MCA India 2026 LPU",
    "LPU Online MCA fees",

    // ── BBA ────────────────────────────────────────────────────────────────
    "LPU Online BBA 2026",
    "online BBA LPU",
    "LPU BBA fees",
    "LPU BBA General",

    // ── BCA ────────────────────────────────────────────────────────────────
    "LPU Online BCA 2026",
    "online BCA LPU",
    "LPU BCA Data Science",
    "LPU BCA Cybersecurity",
    "LPU BCA fees",

    // ── BA ─────────────────────────────────────────────────────────────────
    "LPU Online BA 2026",
    "online BA LPU",
    "LPU BA General",

    // ── M.Com ──────────────────────────────────────────────────────────────
    "LPU Online M.Com 2026",
    "online M.Com LPU",
    "LPU M.Com fees",

    // ── MA ─────────────────────────────────────────────────────────────────
    "LPU Online MA 2026",
    "online MA LPU",
    "LPU MA Sociology",
    "LPU MA English",
    "LPU MA Political Science",
    "LPU MA History",

    // ── M.Sc ───────────────────────────────────────────────────────────────
    "LPU Online M.Sc 2026",
    "online M.Sc LPU",
    "LPU M.Sc Mathematics",
    "LPU M.Sc Economics",

    // ── Certifications / Courses ───────────────────────────────────────────
    "online data science course India LPU",
    "digital marketing certification online LPU",
    "AI ML certification India LPU",
    "certificate in web development LPU",
    "online MBA without entrance exam",
    "best online MBA India",

    // ── Geo ────────────────────────────────────────────────────────────────
    "LPU Online MBA Delhi",
    "LPU Online MBA Mumbai",
    "LPU Online MBA Bangalore",
    "LPU Online MBA Chandigarh",
    "LPU Online MBA Hyderabad",
    "LPU Online MBA Chennai",
    "LPU Online MBA Kolkata",
    "LPU Online MBA Noida",
    "LPU Online MBA Lucknow",
    "LPU Online MBA Jalandhar",
    "LPU Online MBA Amritsar",
    "LPU Online MBA Ludhiana",
    "LPU Online MBA Meerut",
    "top online university Punjab 2026",
    "online MBA colleges Punjab LPU",
    "distance courses Punjab LPU",
    "online degrees Jalandhar LPU",
    "best university online degree Jalandhar",

    // ── General ────────────────────────────────────────────────────────────
    "LPU Online admission last date 2026",
    "LPU Online scholarship 2026",
    "LPU Online no cost EMI",
    "LPU Online 50000 students",
    "online university India 2026",
    "UGC approved online degree India 2026",
    "top online courses near me 2026",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "hi-IN": `${PAGE_URL}/hi`,
    },
  },

  openGraph: {
    title:       "LPU Online 2026 | MBA, MCA, BBA, BCA, M.Com, MA, M.Sc — Lovely Professional University",
    description: "Join 50,000+ learners at LPU Online. NAAC A++ accredited, UGC-entitled online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc. 100% placement support. No-Cost EMI. WES recognized. Apply July 2026.",
    url:         PAGE_URL,
    siteName:    "Unifost Education — LPU Online",
    type:        "website",
    locale:      "en_IN",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "LPU Online Admission 2026 — Lovely Professional University" },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "LPU Online 2026 | Apply Now — MBA, MCA, BBA, BCA",
    description: "NAAC A++ accredited online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc from Lovely Professional University. UGC-entitled. WES recognized. 100% placement support. Apply today!",
    images:      [OG_IMAGE],
    site:        "@unifostedu",
    creator:     "@unifostedu",
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      noimageindex:        false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  authors:   [{ name: "Unifost Education", url: BASE_URL }],
  publisher: "Unifost Education",
  category:  "Education",
  classification: "Online University | Higher Education | Distance Learning India",

  formatDetection: { email: false, address: false, telephone: false },

  other: {
    "geo.region":    "IN-PB",
    "geo.placename": "Phagwara, Punjab, India",
    "geo.position":  "31.2271;75.7742",
    ICBM:            "31.2271, 75.7742",
    language:        "en-IN",
    "revisit-after": "7 days",
    rating:          "general",
    "og:price:amount":   "80000",
    "og:price:currency": "INR",
  },
};

export const dynamic   = "force-static";
export const revalidate = 604800; // 1 week

// ================================================================================
// ======================== SCHEMA.ORG STRUCTURED DATA ===========================
// ================================================================================

// ── 1. WEBSITE + SITELINKS SEARCHBOX ──────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  "@id":      `${BASE_URL}/#website`,
  name:       "Unifost Education",
  url:        BASE_URL,
  description: "India's trusted online education platform for UGC-approved university admissions.",
  inLanguage: "en-IN",
  potentialAction: {
    "@type":       "SearchAction",
    target:        { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

// ── 2. EDUCATIONAL ORGANIZATION ───────────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       ["EducationalOrganization", "CollegeOrUniversity"],
  "@id":         `${PAGE_URL}/#organization`,
  name:          "Lovely Professional University Online",
  alternateName: ["LPU Online", "LPU Distance Education", "lpuonline", "LPU"],
  url:           PAGE_URL,
  logo: {
    "@type": "ImageObject",
    url:     LOGO_URL,
    width:   400,
    height:  100,
  },
  image:       OG_IMAGE,
  description: "LPU Online is the digital learning arm of Lovely Professional University — India's largest private university. Offers NAAC A++ accredited, UGC-entitled online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc for 50,000+ students across 30+ countries.",
  foundingDate: "2006",
  address: {
    "@type":           "PostalAddress",
    streetAddress:     "Jalandhar - Delhi G.T. Road",
    addressLocality:   "Phagwara",
    addressRegion:     "Punjab",
    postalCode:        "144411",
    addressCountry:    "IN",
  },
  geo: {
    "@type":    "GeoCoordinates",
    latitude:   31.2271,
    longitude:  75.7742,
  },
  telephone: "+91-7042646766",
  email:     "info@unifostedu.com",
  contactPoint: [
    {
      "@type":           "ContactPoint",
      contactType:       "admissions",
      telephone:         "+91-7042646766",
      areaServed:        "IN",
      availableLanguage: ["English", "Hindi"],
      hoursAvailable: {
        "@type":    "OpeningHoursSpecification",
        dayOfWeek:  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens:      "09:00",
        closes:     "18:00",
      },
    },
  ],
  numberOfStudents: { "@type": "QuantitativeValue", value: 50000 },
  accreditation: [
    {
      "@type":              "EducationalOccupationalCredential",
      name:                 "NAAC A++ Accreditation",
      credentialCategory:   "Accreditation",
      recognizedBy: { "@type": "Organization", name: "National Assessment and Accreditation Council (NAAC)" },
    },
    {
      "@type":              "EducationalOccupationalCredential",
      name:                 "UGC-DEB Entitled Online Degrees",
      credentialCategory:   "Regulatory Approval",
      recognizedBy: { "@type": "Organization", name: "University Grants Commission (UGC)" },
    },
    {
      "@type":              "EducationalOccupationalCredential",
      name:                 "WES Recognition — Canada & USA",
      credentialCategory:   "International Recognition",
      recognizedBy: { "@type": "Organization", name: "World Education Services (WES)" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/LPUOnline",
    "https://www.instagram.com/lpuonline",
    "https://www.linkedin.com/school/lovely-professional-university/",
    "https://x.com/LPUonline",
    "https://en.wikipedia.org/wiki/Lovely_Professional_University",
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.8",
    bestRating:    "5",
    worstRating:   "1",
    ratingCount:   "50000",
    reviewCount:   "50000",
  },
  review: [
    {
      "@type":  "Review",
      author:   { "@type": "Person", name: "Rahul Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:   "The online MBA program at LPU helped me transition from a technical role to a management position. Flexible schedule allowed me to work and study simultaneously.",
      datePublished: "2025-04-10",
    },
    {
      "@type":  "Review",
      author:   { "@type": "Person", name: "Neha Gupta" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:   "LPU's online MCA program offered the perfect blend of theoretical knowledge and practical skills. Placement assistance helped me land a job with a 60% salary hike.",
      datePublished: "2025-06-20",
    },
  ],
};

// ── 3. WEBPAGE ─────────────────────────────────────────────────────────────────
const webPageSchema = {
  "@context":    "https://schema.org",
  "@type":       ["WebPage", "LandingPage"],
  "@id":         `${PAGE_URL}/#webpage`,
  url:           PAGE_URL,
  name:          "LPU Online 2026 | MBA, MCA, BBA, BCA, M.Com, MA, M.Sc | NAAC A++ | UGC Approved",
  description:   "Apply for LPU Online UG & PG programs. NAAC A++ accredited, UGC-entitled degrees with 100% placement support, No-Cost EMI, and global recognition. July 2026 session open.",
  inLanguage:    "en-IN",
  isPartOf:      { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  about:         { "@type": "EducationalOrganization", "@id": `${PAGE_URL}/#organization` },
  datePublished: "2026-01-01",
  dateModified:  TODAY,
  primaryImageOfPage: {
    "@type":  "ImageObject",
    url:      OG_IMAGE,
    width:    1200,
    height:   630,
  },
  speakable: {
    "@type":      "SpeakableSpecification",
    cssSelector:  ["h1", "h2", ".key-highlights"],
  },
};

// ── 4. COURSE LIST — ALL 8 PROGRAMS WITH FULL DETAIL ──────────────────────────
const coursesSchema = {
  "@context":      "https://schema.org",
  "@type":         "ItemList",
  name:            "LPU Online Programs 2026 — Full Course Catalog",
  description:     "Complete list of UGC-entitled online programs from Lovely Professional University for July 2026 session.",
  url:             PAGE_URL,
  numberOfItems:   8,
  itemListElement: [
    // ── PG ──────────────────────────────────────────────────────────────────
    {
      "@type":   "ListItem",
      position:  1,
      item: {
        "@type":       "Course",
        name:          "Online MBA — Master of Business Administration",
        alternateName: ["LPU Online MBA", "online MBA LPU", "LPU MBA 2026"],
        description:
          "2-year NAAC A++ accredited online MBA from Lovely Professional University. UGC-entitled. Dual specializations available in HR, Finance, Marketing, Operations, Analytics, Digital Marketing, Data Science, IT & Fintech, International Business, Banking & Finance, Healthcare Management, and Logistics & Supply Chain. Ideal for working professionals. No entrance exam required.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                  PAGE_URL,
        image:                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
        courseMode:           "Online",
        educationalLevel:     "Postgraduate",
        timeRequired:         "P2Y",
        inLanguage:           "en-IN",
        coursePrerequisites:  "Bachelor's degree in any discipline",
        teaches:              "Business Administration, Management, Leadership, Strategy, Analytics",
        keywords:             "online MBA, LPU MBA, MBA working professionals, affordable MBA India, MBA without entrance exam",
        offers: {
          "@type":         "Offer",
          price:           "200000",
          priceCurrency:   "INR",
          availability:    "https://schema.org/InStock",
          validFrom:       "2026-07-01",
          url:             PAGE_URL,
          seller: { "@type": "Organization", name: "Lovely Professional University Online" },
        },
        hasCourseInstance: {
          "@type":       "CourseInstance",
          courseMode:    "Online",
          startDate:     "2026-07-01",
          endDate:       "2028-06-30",
          courseWorkload:"PT20H/P1W",
        },
      },
    },
    {
      "@type":   "ListItem",
      position:  2,
      item: {
        "@type":       "Course",
        name:          "Online MCA — Master of Computer Applications",
        alternateName: ["LPU Online MCA", "online MCA LPU", "LPU MCA 2026"],
        description:
          "2-year NAAC A++ accredited online MCA from Lovely Professional University. UGC-entitled. Specializations in ML & AI, Data Science, Cybersecurity, Full Stack Development, AR/VR & Game Development. Ideal for BCA/B.Sc IT graduates.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                  PAGE_URL,
        image:                "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
        courseMode:           "Online",
        educationalLevel:     "Postgraduate",
        timeRequired:         "P2Y",
        inLanguage:           "en-IN",
        coursePrerequisites:  "Graduation in BCA / B.Sc (IT) with Mathematics",
        teaches:              "Machine Learning, AI, Data Science, Cybersecurity, Full Stack, AR/VR",
        keywords:             "online MCA, LPU MCA, MCA AI ML India, MCA data science, MCA cybersecurity",
        offers: {
          "@type": "Offer", price: "148000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
        hasCourseInstance: {
          "@type": "CourseInstance", courseMode: "Online",
          startDate: "2026-07-01", endDate: "2028-06-30",
        },
      },
    },
    {
      "@type":   "ListItem",
      position:  3,
      item: {
        "@type":       "Course",
        name:          "Online M.Com — Master of Commerce",
        alternateName: ["LPU Online M.Com", "online M.Com LPU", "LPU M.Com 2026"],
        description:
          "2-year NAAC A++ accredited online M.Com from Lovely Professional University. UGC-entitled. General stream. Eligibility: Graduation in Commerce.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                 PAGE_URL,
        courseMode:          "Online",
        educationalLevel:    "Postgraduate",
        timeRequired:        "P2Y",
        inLanguage:          "en-IN",
        coursePrerequisites: "Graduation in Commerce",
        teaches:             "Commerce, Accounting, Business Finance, Taxation",
        keywords:            "online M.Com LPU, LPU M.Com 2026, master of commerce online India",
        offers: {
          "@type": "Offer", price: "100000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
      },
    },
    {
      "@type":   "ListItem",
      position:  4,
      item: {
        "@type":       "Course",
        name:          "Online MA — Master of Arts (Sociology / English / Political Science / History)",
        alternateName: ["LPU Online MA", "online MA LPU", "LPU MA 2026"],
        description:
          "2-year NAAC A++ accredited online MA from Lovely Professional University. UGC-entitled. Specializations: Sociology, English, Political Science, History.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                 PAGE_URL,
        courseMode:          "Online",
        educationalLevel:    "Postgraduate",
        timeRequired:        "P2Y",
        inLanguage:          "en-IN",
        coursePrerequisites: "Graduation in any discipline",
        teaches:             "Sociology, English Literature, Political Science, History",
        keywords:            "online MA LPU, LPU MA 2026, MA Sociology online India, MA English online",
        offers: {
          "@type": "Offer", price: "80000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
      },
    },
    {
      "@type":   "ListItem",
      position:  5,
      item: {
        "@type":       "Course",
        name:          "Online M.Sc — Master of Science (Mathematics / Economics)",
        alternateName: ["LPU Online M.Sc", "online M.Sc LPU", "LPU M.Sc 2026"],
        description:
          "2-year NAAC A++ accredited online M.Sc from Lovely Professional University. UGC-entitled. Specializations: Mathematics, Economics.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                 PAGE_URL,
        courseMode:          "Online",
        educationalLevel:    "Postgraduate",
        timeRequired:        "P2Y",
        inLanguage:          "en-IN",
        coursePrerequisites: "Graduation in Science / Mathematics / Economics",
        teaches:             "Mathematics, Statistics, Economics",
        keywords:            "online M.Sc LPU, LPU M.Sc 2026, M.Sc Mathematics online, M.Sc Economics online India",
        offers: {
          "@type": "Offer", price: "80000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
      },
    },
    // ── UG ──────────────────────────────────────────────────────────────────
    {
      "@type":   "ListItem",
      position:  6,
      item: {
        "@type":       "Course",
        name:          "Online BBA — Bachelor of Business Administration",
        alternateName: ["LPU Online BBA", "online BBA LPU", "LPU BBA 2026"],
        description:
          "3-year NAAC A++ accredited online BBA from Lovely Professional University. UGC-entitled. General stream. Eligibility: 10+2 minimum 40%.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                 PAGE_URL,
        image:               "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp",
        courseMode:          "Online",
        educationalLevel:    "Undergraduate",
        timeRequired:        "P3Y",
        inLanguage:          "en-IN",
        coursePrerequisites: "10+2 with minimum 40%",
        teaches:             "Business Administration, Management Fundamentals, Marketing, Finance, HR",
        keywords:            "online BBA LPU, LPU BBA 2026, bachelor business administration online India",
        offers: {
          "@type": "Offer", price: "150000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
        hasCourseInstance: {
          "@type": "CourseInstance", courseMode: "Online",
          startDate: "2026-07-01", endDate: "2029-06-30",
        },
      },
    },
    {
      "@type":   "ListItem",
      position:  7,
      item: {
        "@type":       "Course",
        name:          "Online BCA — Bachelor of Computer Applications",
        alternateName: ["LPU Online BCA", "online BCA LPU", "LPU BCA 2026"],
        description:
          "3-year NAAC A++ accredited online BCA from Lovely Professional University. UGC-entitled. General stream. Eligibility: 10+2 minimum 40%.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                 PAGE_URL,
        image:               "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327057/bca_nafolc.webp",
        courseMode:          "Online",
        educationalLevel:    "Undergraduate",
        timeRequired:        "P3Y",
        inLanguage:          "en-IN",
        coursePrerequisites: "10+2 with minimum 40%",
        teaches:             "Computer Applications, Programming, Database, Networking, Web Development",
        keywords:            "online BCA LPU, LPU BCA 2026, bachelor computer applications online India",
        offers: {
          "@type": "Offer", price: "150000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
        hasCourseInstance: {
          "@type": "CourseInstance", courseMode: "Online",
          startDate: "2026-07-01", endDate: "2029-06-30",
        },
      },
    },
    {
      "@type":   "ListItem",
      position:  8,
      item: {
        "@type":       "Course",
        name:          "Online BA — Bachelor of Arts",
        alternateName: ["LPU Online BA", "online BA LPU", "LPU BA 2026"],
        description:
          "3-year NAAC A++ accredited online BA from Lovely Professional University. UGC-entitled. General stream. Eligibility: 10+2.",
        provider: {
          "@type": "EducationalOrganization",
          name:    "Lovely Professional University Online",
          "@id":   `${PAGE_URL}/#organization`,
        },
        url:                 PAGE_URL,
        courseMode:          "Online",
        educationalLevel:    "Undergraduate",
        timeRequired:        "P3Y",
        inLanguage:          "en-IN",
        coursePrerequisites: "10+2 in any stream",
        teaches:             "Arts, Humanities, Social Sciences, Literature",
        keywords:            "online BA LPU, LPU BA 2026, bachelor arts online India",
        offers: {
          "@type": "Offer", price: "80000", priceCurrency: "INR",
          availability: "https://schema.org/InStock", validFrom: "2026-07-01", url: PAGE_URL,
        },
        hasCourseInstance: {
          "@type": "CourseInstance", courseMode: "Online",
          startDate: "2026-07-01", endDate: "2029-06-30",
        },
      },
    },
  ],
};

// ── 5. BREADCRUMB ──────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                                  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Universities",                          item: `${BASE_URL}/universities` },
    { "@type": "ListItem", position: 3, name: "Lovely Professional University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 4, name: "Admission 2026",                        item: PAGE_URL },
  ],
};

// ── 6. FAQ PAGE — 11 QUESTIONS ─────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "Is Lovely Professional University recognized by UGC and NAAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Lovely Professional University is UGC-entitled and NAAC A++ accredited. All LPU Online degrees are credible, globally recognized and accepted by employers, government bodies, and higher education institutions worldwide. The degree certificate does not mention 'online'.",
      },
    },
    {
      "@type": "Question",
      name:    "What online programs does LPU Online offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online offers MBA (HR, Finance, Marketing, Analytics, Digital Marketing, Data Science, IT & Fintech, Operations, International Business, Banking, Healthcare, Logistics), MCA (ML & AI, Data Science, Cybersecurity, Full Stack, AR/VR & Game Development), BBA, BCA, BA, M.Com, MA (Sociology, English, Political Science, History), and M.Sc (Mathematics, Economics).",
      },
    },
    {
      "@type": "Question",
      name:    "What are the fees for LPU Online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online fees: MBA ₹2,00,000 (2 years), MCA ₹1,48,000 (2 years), BBA ₹1,50,000 (3 years), BCA ₹1,50,000 (3 years), M.Com ₹1,00,000 (2 years), MA ₹80,000 (2 years), M.Sc ₹80,000 (2 years), BA ₹80,000 (3 years). No-Cost EMI and scholarships up to 25% are available.",
      },
    },
    {
      "@type": "Question",
      name:    "Are LPU Online degrees valid for government jobs and UPSC?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Online degrees from LPU, approved by UGC-DEB, are fully valid for government jobs, UPSC and other competitive exams, and higher education admissions across India.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the LPU Online admission process for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online admission is simple: (1) Fill the online application form, (2) Upload required documents (mark sheets, ID proof), (3) Pay registration fee (₹500) and program fee, (4) Receive LMS login credentials, (5) Generate ABC and DEB IDs, (6) Begin classes. New sessions start in January and July each year. Direct admission — no entrance exam required.",
      },
    },
    {
      "@type": "Question",
      name:    "Does LPU Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. LPU Online offers 100% placement assistance including career counseling, resume workshops, mock interviews, LinkedIn profile building, and access to 500+ hiring partners. Graduates work at TCS, Infosys, IBM, Samsung, HP, EY, Tata, Adobe and more. Average salary growth of 15–40% reported post-degree.",
      },
    },
    {
      "@type": "Question",
      name:    "Can working professionals pursue LPU Online courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Absolutely. LPU Online programs are specifically designed for working professionals. Recorded lectures, live weekend sessions, and 24/7 LMS access allow learners to study at their own pace without pausing their careers. The online MBA from LPU is especially popular among working professionals.",
      },
    },
    {
      "@type": "Question",
      name:    "Are LPU Online degrees internationally recognized?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. LPU Online degrees hold WES recognition (Canada & USA), ACU membership, AIU recognition, and NAAC A++ accreditation. Students from 30+ countries enroll in LPU Online programs each year.",
      },
    },
    {
      "@type": "Question",
      name:    "Does LPU Online offer scholarships?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. LPU Online offers scholarships up to 25% for meritorious students, defense personnel, government employees, alumni, and differently-abled learners. No-Cost EMI financing options are also available. Please contact a counselor for your specific eligibility.",
      },
    },
    {
      "@type": "Question",
      name:    "When does the next LPU Online batch start?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The July 2026 session admissions are currently open. New batches start in January and July every year. Early Bird Discounts are available for a limited period. Apply now as seats are limited.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the difference between LPU Online and LPU regular campus programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Both award the same NAAC A++ accredited, UGC-entitled degree. The difference is mode of delivery — LPU Online students access lectures, assignments, and live sessions digitally via LMS. The degree holds the same recognition for jobs, higher studies, and government exams as the on-campus degree.",
      },
    },
  ],
};

// ── 7. HOW-TO (Admission Process) ─────────────────────────────────────────────
const howToSchema = {
  "@context":  "https://schema.org",
  "@type":     "HowTo",
  name:        "How to Apply for LPU Online Admission 2026",
  description: "Step-by-step guide to enroll in any LPU Online program for the July 2026 session.",
  totalTime:   "P2D",
  supply: [
    { "@type": "HowToSupply", name: "10th & 12th mark sheets / Graduation certificate" },
    { "@type": "HowToSupply", name: "Government ID proof (Aadhar / Passport)" },
    { "@type": "HowToSupply", name: "Passport-size photograph" },
    { "@type": "HowToSupply", name: "Registration fee ₹500 (UPI / Net Banking / Card)" },
  ],
  step: [
    { "@type": "HowToStep", position: 1, name: "Fill Online Application", text: "Visit unifostedu.com/lpu-online and click Apply Now. Fill the application form with your personal and academic details.", url: PAGE_URL },
    { "@type": "HowToStep", position: 2, name: "Upload Documents",        text: "Upload scanned copies of your mark sheets, government ID, and passport-size photograph." },
    { "@type": "HowToStep", position: 3, name: "Pay Registration Fee",    text: "Pay the ₹500 registration fee online via UPI, net banking, or card." },
    { "@type": "HowToStep", position: 4, name: "Receive Confirmation",    text: "Receive your admission confirmation and LMS login credentials via email within 24–48 hours." },
    { "@type": "HowToStep", position: 5, name: "Generate ABC & DEB IDs",  text: "Generate your Academic Bank of Credits (ABC) ID and DEB ID required for UGC-approved programs." },
    { "@type": "HowToStep", position: 6, name: "Pay Program Fee",         text: "Complete program fee payment — choose full payment, semester-wise, or No-Cost EMI options." },
    { "@type": "HowToStep", position: 7, name: "Begin Classes",           text: "Log in to the LMS, attend online orientation, and begin your classes. Support is available 24/7." },
  ],
};

// ── 8. ADMISSION EVENT ─────────────────────────────────────────────────────────
const eventSchema = {
  "@context":          "https://schema.org",
  "@type":             "Event",
  name:                "LPU Online — July 2026 Admission Session",
  description:         "Admissions open for July 2026 session. Online MBA, MCA, BBA, BCA, BA, M.Com, MA, M.Sc. NAAC A++, UGC-entitled. Early Bird Discount available. Limited seats.",
  startDate:           "2026-07-01",
  endDate:             "2026-07-31",
  eventStatus:         "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url:     PAGE_URL,
  },
  organizer: {
    "@type": "EducationalOrganization",
    name:    "Lovely Professional University Online",
    url:     PAGE_URL,
  },
  offers: {
    "@type":        "Offer",
    url:            PAGE_URL,
    price:          "80000",
    priceCurrency:  "INR",
    availability:   "https://schema.org/InStock",
    validFrom:      "2026-05-01",
    description:    "Early Bird Discount Available. Fees starting from ₹80,000. No-Cost EMI. Scholarships up to 25%.",
  },
  image: OG_IMAGE,
};

// ── 9. CITY COVERAGE ───────────────────────────────────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "LPU Online Admission 2026 — Available Across India",
  itemListElement: [
    // Punjab first
    "Jalandhar","Phagwara","Ludhiana","Amritsar","Chandigarh","Patiala","Bathinda",
    "Mohali","Panchkula","Pathankot","Hoshiarpur","Gurdaspur",
    // Major metros & cities
    "Delhi","Noida","Gurugram","Ghaziabad","Faridabad","Meerut","Agra",
    "Mumbai","Pune","Nagpur","Nashik","Thane","Navi Mumbai","Aurangabad",
    "Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Surat","Vadodara",
    "Rajkot","Jaipur","Jodhpur","Udaipur","Kota","Lucknow","Kanpur","Varanasi",
    "Allahabad","Bareilly","Aligarh","Moradabad","Gorakhpur","Bhopal","Indore",
    "Gwalior","Jabalpur","Patna","Ranchi","Dhanbad","Bhubaneswar","Raipur",
    "Guwahati","Dehradun","Haridwar","Roorkee","Jammu","Srinagar",
    "Coimbatore","Kochi","Thiruvananthapuram","Visakhapatnam","Vijayawada",
    "Madurai","Salem","Tiruppur","Tiruchirappalli","Warangal","Guntur",
    "Mangalore","Hubli","Mysore",
  ].map((city, i) => ({
    "@type":    "ListItem",
    position:   i + 1,
    name:       `LPU Online Admission 2026 — ${city}`,
    url:        PAGE_URL,
  })),
};

// ── All schemas array ──────────────────────────────────────────────────────────
const allSchemas = [
  websiteSchema,
  organizationSchema,
  webPageSchema,
  coursesSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  eventSchema,
  citySchema,
];


export default function LPULayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── LCP Preload — hero image ─────────────────────────────────────── */}
      <link rel="preload" as="image" href={HERO_IMG} />

      {/* ── Sitemap ──────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── Theme color (LPU orange) ─────────────────────────────────────── */}
      <meta name="theme-color" content="#f97316" />

      {/* ── Geo meta ─────────────────────────────────────────────────────── */}
      <meta name="geo.region"    content="IN-PB" />
      <meta name="geo.placename" content="Phagwara, Punjab, India" />
      <meta name="geo.position"  content="31.2271;75.7742" />
      <meta name="ICBM"          content="31.2271, 75.7742" />

      {/* ── Structured Data — 9 schemas, server-rendered (Googlebot safe) ── */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {children}
    </>
  );
}