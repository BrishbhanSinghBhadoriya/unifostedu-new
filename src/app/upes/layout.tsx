import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "UPES Online - Best BBA MBA BCA MCA Online Courses in India 2024 | UGC Approved",
  description: "UPES Online offers UGC-approved BBA, BCA, MBA, MCA online degree programs. Flexible learning, industry-aligned curriculum, career support & 25K+ students. NAAC A+ accredited. Enroll now!",
  keywords: "UPES Online, BBA online, MBA online, BCA online, MCA online, online degree programs, UGC approved online courses, distance learning degree, online education India, best online universities India, UPES university, online courses for working professionals, flexible online degree, affordable online education, career-focused online programs",
  
  metadataBase: new URL("https://unifostedu.com/upes"),
  alternates: {
    canonical: "https://unifostedu.com/upes",
  },

  openGraph: {
    title: "UPES Online - Best UGC Approved BBA MBA BCA MCA Courses | Flexible Learning",
    description: "Explore UPES Online's UGC-entitled degree programs. BBA, BCA, MBA, MCA with flexible learning, career support & job assistance. 25K+ students. Apply now!",
    url: "https://unifostedu.com/upes",
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
    title: "UPES Online - Best UGC Approved Online Degree Programs",
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

  other: {
    "og:image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp",
    "og:image:alt": "UPES University Online Campus",
    "article:published_time": "2024-01-01T00:00:00Z",
    "article:author": "UniFost Education",
  },
};

// Structured Data for SEO
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function UPESLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "UPES University Online",
            alternateName: "UPES Online",
            description: "UGC-approved online degree programs offering BBA, BCA, MBA, MCA courses with flexible learning",
            url: "https://unifostedu.com/upes",
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
              streetAddress: "Dehradun, Uttarakhand",
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
          }),
        }}
      />

      {/* Course Offerings Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "UPES Online Degree Programs",
            description: "List of undergraduate and postgraduate online courses",
            itemListElement: [
              {
                "@type": "Course",
                position: 1,
                name: "BBA (Bachelor of Business Administration)",
                description: "3-year UGC approved online BBA degree with specializations in Operations, Finance, HR, Marketing",
                url: "https://unifostedu.com/upes#courses",
                provider: {
                  "@type": "Organization",
                  name: "UPES University Online",
                },
                offers: {
                  "@type": "Offer",
                  price: "168768",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.5",
                  ratingCount: "320",
                },
              },
              {
                "@type": "Course",
                position: 2,
                name: "BCA (Bachelor of Computer Applications)",
                description: "3-year online BCA with specializations in Cloud Computing, Cyber Security, Data Analytics",
                url: "https://unifostedu.com/upes#courses",
                provider: {
                  "@type": "Organization",
                  name: "UPES University Online",
                },
                offers: {
                  "@type": "Offer",
                  price: "168768",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Course",
                position: 3,
                name: "MBA (Master of Business Administration)",
                description: "2-year online MBA with 12+ specializations including Oil & Gas, Finance, HR, Supply Chain",
                url: "https://unifostedu.com/upes#courses",
                provider: {
                  "@type": "Organization",
                  name: "UPES University Online",
                },
                offers: {
                  "@type": "Offer",
                  price: "190920",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.6",
                  ratingCount: "580",
                },
              },
              {
                "@type": "Course",
                position: 4,
                name: "MCA (Master of Computer Applications)",
                description: "2-year online MCA with AI, Machine Learning, Cyber Security & Data Science specializations",
                url: "https://unifostedu.com/upes#courses",
                provider: {
                  "@type": "Organization",
                  name: "UPES University Online",
                },
                offers: {
                  "@type": "Offer",
                  price: "185448",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UPES University Online",
            image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp",
            url: "https://unifostedu.com/upes",
            telephone: "+91-7042646766",
            email: "info@unifostedu.com",
            sameAs: [
              "https://www.facebook.com/upesonline",
              "https://www.twitter.com/upesonline",
              "https://www.instagram.com/upesonline",
              "https://www.linkedin.com/company/upes-online",
            ],
            officeLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                addressCountry: "India",
              },
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            ],
          }),
        }}
      />

      {children}
    </>
  );
}