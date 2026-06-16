import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Compare Universities Online | Side by Side Comparison 2026",
  description: "Compare universities side by side in India. Compare online universities for MBA, BBA, MCA, BCA. Check fees, rankings, NAAC grade, and more.",
  keywords: [
    "compare universities India",
    "side by side university comparison",
    "compare Manipal and Amity",
    "compare LPU and NMIMS",
    "online university comparison tool",
    "top university comparison 2026"
  ],
  alternates: {
    canonical: "https://unifostedu.com/compare-university",
  },
  openGraph: {
    title: "Compare Universities Online | Side by Side Comparison 2026",
    description: "Compare leading universities in India. Compare fees, rankings, NAAC grade, and more.",
    url: "https://unifostedu.com/compare-university",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "Compare Universities - UNIFOST",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifostedu",
    creator: "@unifostedu",
    title: "Compare Universities Online | Side by Side Comparison 2026",
    description: "Compare leading universities in India. Compare fees, rankings, NAAC grade, and more.",
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

const compareUniversitySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Compare Universities Online | Side by Side Comparison 2026",
  description: "Compare universities side by side in India. Compare online universities for MBA, BBA, MCA, BCA. Check fees, rankings, NAAC grade, and more.",
  url: "https://unifostedu.com/compare-university",
  inLanguage: "en-IN",
  publisher: {
    "@type": "EducationalOrganization",
    name: "UNIFOST",
    url: "https://unifostedu.com",
  },
};

export default function CompareUniversityLayout({ children }: ChildrenProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareUniversitySchema) }}
      />
      {children}
    </>
  );
}
