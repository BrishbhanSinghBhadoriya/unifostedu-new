import { ReactNode } from "react";

export const metadata = {
  title: "Best Online MBA Universities in India 2026 | Top Ranked Colleges",
  description:
    "Discover the best online MBA universities in India for 2026. Compare top UGC-DEB approved universities offering online MBA programs with fees, rankings, specializations, and admission process.",
  keywords: [
    "best online MBA universities India 2026",
    "top online MBA colleges India",
    "online MBA India UGC approved",
    "distance MBA India",
    "best online MBA programs India",
    "online MBA admission 2026",
    "online MBA fees India",
    "IGNOU MBA online",
    "Amity online MBA",
    "Sikkim Manipal online MBA",
    "online MBA specializations India",
    "accredited online MBA India",
    "online MBA vs regular MBA India",
    "working professionals MBA online India",
    "online MBA ranking India 2026",
  ],
  authors: [{ name: "UNIFOST" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://unifostedu.com/best_online_mba_universities_in_india_2026",
  },
  openGraph: {
    title: "Best Online MBA Universities in India 2026",
    description:
      "Compare top UGC-approved online MBA universities in India. Fees, rankings, specializations & admission process for 2026.",
    url: "https://unifostedu.com/best_online_mba_universities_in_india_2026",
    siteName: "UNIFOST",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "Best Online MBA Universities in India 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online MBA Universities in India 2026",
    description:
      "Top UGC-approved online MBA universities in India – fees, rankings & admission 2026.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Online MBA Universities in India 2026",
  description:
    "Comprehensive guide to the best online MBA universities in India for 2026 including rankings, fees, specializations and admission process.",
  author: {
    "@type": "Organization",
    name: "UNIFOST",
  },
  publisher: {
    "@type": "Organization",
    name: "UNIFOST",
    logo: {
      "@type": "ImageObject",
      url: "https://unifostedu.com/unilogo.png",
    },
  },
  datePublished: "2026-01-01",
  dateModified: "2026-06-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://unifostedu.com/best_online_mba_universities_in_india_2026",
  },
  about: {
    "@type": "EducationalOccupationalProgram",
    name: "Online MBA",
    educationalLevel: "Postgraduate",
    programType: "Distance Learning",
    provider: {
      "@type": "Country",
      name: "India",
    },
  },
};

export default function MBALayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
