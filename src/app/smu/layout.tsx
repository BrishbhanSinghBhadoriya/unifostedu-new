import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Sikkim Manipal University Online Courses, Fees, Admission 2026 | Apply Now",
  description:
    "Sikkim Manipal University (SMU) offers UGC-approved online UG & PG programs including MBA, MCA, B.Com, and BA. Explore fees, eligibility, placements, admission process & global recognition.",
  keywords: [
    "Sikkim Manipal University Online",
    "smu online",
    "smu online courses",
    "SMU Online MBA",
    "SMU Online MCA",
    "SMU Online B.Com",
    "SMU Online BA",
    "SMU Fees",
    "SMU Admission Online",
    "UGC Approved Online University",
    "Online Degree Programs India",
    "Top Online Universities in India",
  ],

   icons: [
    { url: "images/logos/manipal/favicon.ico" },
    { url: "images/logos/manipal/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "images/logos/manipal/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "images/logos/manipal/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "images/logos/manipal/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "images/logos/manipal/apple-touch-icon.png", type: "image/png" }
  ],
  openGraph: {
    title: "Sikkim Manipal University Online",
    description:
      "Sikkim Manipal University Online — UGC & NAAC A+ approved degrees. MBA ₹1.1L, BCom ₹75K, MCA ₹98K. Flexible EMI, AI-proctored exams. Jan 2026 batch open. Apply free now!",
    url: "https://unifostedu.com/smu",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
        width: 1200,
        height: 630,
        alt: "Sikkim Manipal University Online Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/smu",
  },
};

export default function SMULayout({ children }: ChildrenProps) {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "CollegeOrUniversity",
        name: "Sikkim Manipal University",
        url: "https://unifostedu.com/smu",
        logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
        sameAs: [
          "https://www.linkedin.com/",
          "https://www.facebook.com/"
        ]
      },

      {
        "@type": "Organization",
        name: "UNIFOST",
        url: "https://unifostedu.com",
        logo: "https://unifostedu.com/logo.png"
      },

      {
        "@type": "ItemList",
        name: "Online Courses Offered",
        itemListElement: [
          { "@type": "Course", name: "Online MBA", provider: { "@type": "CollegeOrUniversity", name: "Sikkim Manipal University" }},
          { "@type": "Course", name: "Online MCA", provider: { "@type": "CollegeOrUniversity", name: "Sikkim Manipal University" }},
          { "@type": "Course", name: "Online B.Com", provider: { "@type": "CollegeOrUniversity", name: "Sikkim Manipal University" }},
          { "@type": "Course", name: "Online BA", provider: { "@type": "CollegeOrUniversity", name: "Sikkim Manipal University" }}
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the online degree valid?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, degrees follow approved academic standards and are valid for employment and higher education."
            }
          },
          {
            "@type": "Question",
            name: "Can working professionals apply?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, programs are designed for flexible learning alongside jobs."
            }
          },
          {
            "@type": "Question",
            name: "Does the university provide placement support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Students receive career guidance, resume support, and hiring assistance."
            }
          }
        ]
      }

    ]
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {children}
    </>
  );
}
