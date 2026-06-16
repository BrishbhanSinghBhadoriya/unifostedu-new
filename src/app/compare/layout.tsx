import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Compare Online Universities in India 2026 | Fees, Rankings & Courses",
  description: "Compare top UGC-approved online universities in India. Compare fees, NIRF rankings, NAAC grades, courses, and placement support for MBA, BBA, MCA, BCA, and more.",
  keywords: [
    "compare online universities India",
    "online university comparison",
    "compare Manipal vs Amity online",
    "compare LPU vs NMIMS online",
    "top online universities comparison 2026",
    "compare online MBA colleges India",
    "online university fees comparison",
    "NAAC A++ online universities compare",
    "UGC approved online courses comparison",
    "best online university comparison tool"
  ],
  alternates: {
    canonical: "https://unifostedu.com/compare",
  },
  openGraph: {
    title: "Compare Online Universities in India | Fees & Rankings 2026",
    description: "Compare leading UGC-approved online universities side by side. Compare fees, NAAC grade, NIRF rank, courses, and placement support.",
    url: "https://unifostedu.com/compare",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "Compare Online Universities - UNIFOST",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifostedu",
    creator: "@unifostedu",
    title: "Compare Online Universities in India 2026",
    description: "Compare top online universities in India for MBA, BBA, MCA, BCA. Compare fees, NAAC, NIRF, and more.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "UNIFOST" }],
  publisher: "UNIFOST",
};

const compareSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Compare Online Universities in India 2026 | Fees, Rankings & Courses",
  description: "Compare top UGC-approved online universities in India. Compare fees, NIRF rankings, NAAC grades, courses, and placement support for MBA, BBA, MCA, BCA, and more.",
  url: "https://unifostedu.com/compare",
  inLanguage: "en-IN",
  publisher: {
    "@type": "EducationalOrganization",
    name: "UNIFOST",
    url: "https://unifostedu.com",
  },
};

export default function CompareLayout({ children }: ChildrenProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }}
      />
      {children}
    </>
  );
}
