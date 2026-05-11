// src/app/vgu/layout.tsx
import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "VGU Online Jaipur | UGC Approved MBA, MCA, BCA, BBA Fees & Admission 2026",
  description:
    "Apply for VGU Online Jaipur UGC-approved degrees. Explore Online MBA, MCA, BCA, BBA, BA & MAJMC with affordable fees, NAAC A+ accreditation, and placement support. Join Vivekananda Global University for global learning.",
  keywords: [
    "Vivekananda Global University Online",
    "VGU Online Jaipur",
    "VGU Online MBA Specializations",
    "VGU Online MCA Fees",
    "VGU Online BCA Admission",
    "VGU Online BBA Digital Marketing",
    "VGU Online BA Public Policy",
    "VGU Online MAJMC Jaipur",
    "VGU Online MSc Mathematics",
    "VGU Online MA English",
    "UGC Approved Online Degrees India",
    "VGU Online Placement Partners",
    "VGU Online Education Jaipur",
    "Affordable Online MBA India",
    "VGU Online Course Eligibility",
  ],
  openGraph: {
    title: "VGU Online Jaipur | Accredited UG & PG Online Programs 2026",
    description:
      "Join VGU Jaipur for UGC & AICTE recognized Online MBA, MCA, BCA, and more. Industry-driven curriculum with 100% placement assistance and flexible learning.",
    url: "https://unifostedu.com/vgu",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/vgu-uni_khh8pt.webp",
        width: 1200,
        height: 630,
        alt: "VGU Jaipur Online Education Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/vgu",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGU Online Jaipur | MBA, MCA, BCA & BBA Programs",
    description:
      "UGC & AICTE recognized online programs at Vivekananda Global University Jaipur. Affordable fees and global career opportunities.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/vgu-uni_khh8pt.webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Online Courses offered by Vivekananda Global University (VGU)",
  "description": "Comprehensive list of UGC-approved online undergraduate and postgraduate programs at VGU Jaipur.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Online MBA (Master of Business Administration)",
        "description": "2-year PG program with specializations in Finance, Marketing, HR, Analytics, and more.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Online MCA (Master of Computer Applications)",
        "description": "2-year specialized program for advanced computer science and software development.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Online BCA (Bachelor of Computer Applications)",
        "description": "3-year UG program with specializations in AI, Data Science, and Cloud Technology.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Online BBA (Bachelor of Business Administration)",
        "description": "3-year UG program focusing on Digital Marketing, Retail, and Fintech.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Vivekananda Global University",
          "sameAs": "https://unifostedu.com/vgu"
        }
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is VGU Online UGC-approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VGU Online (Vivekananda Global University Online) offers UGC approved online degrees for all its programs, including the Online MBA, MCA, BBA, and BCA."
      }
    },
    {
      "@type": "Question",
      "name": "Does VGU Online offer placement assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VGU Online provides resume-building support, interview training, and access to top placement partners like TCS, Deloitte, Infosys, Amazon, and IBM."
      }
    }
  ]
};

export default function VGULayout({ children }: ChildrenProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
