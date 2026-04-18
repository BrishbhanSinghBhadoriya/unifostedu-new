import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Top 20+ Online Universities in India 2026 | Compare Fees & Rankings",
  description: "Explore the comprehensive list of India's best UGC-approved online universities for 2026. Compare fees, NIRF rankings, and courses for MBA, MCA, BBA, BCA from top institutions like Amity, Manipal, LPU, Jain, and more.",
  keywords: [
    "top online universities in India",
    "UGC approved online universities list",
    "best online MBA colleges India",
    "online university comparison",
    "NAAC A++ online universities",
    "online degree colleges in India",
    "Manipal vs Amity online",
    "LPU online admission 2026",
    "Jain university online degree",
    "online education India directory"
  ],
  openGraph: {
    title: "List of Top Online Universities in India | Compare & Choose | UNIFOST",
    description: "Find the best accredited online universities for your UG/PG degree programs. Compare fees and courses from top-ranked Indian institutions.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
    url: "https://unifostedu.com/university-list",
    siteName: "UNIFOST",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://unifostedu.com/university-list",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Online Universities in India 2026 | Compare & Apply",
    description: "Compare the best UGC-approved online universities for MBA, MCA, BBA, BCA.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://unifostedu.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "University List",
      "item": "https://unifostedu.com/university-list"
    }
  ]
};

export default function UniversityListLayout({ children }: ChildrenProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

