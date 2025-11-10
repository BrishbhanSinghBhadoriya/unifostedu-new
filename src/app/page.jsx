import Landing from "@/components/pages/Landing";
import Image from "next/image";

export const metadata = {
  title: "Unifost | UGC Approved Online University Degrees in India",
  description: "UnifostEdu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career.",
  keywords: [
    "Unifost",
    "UnifostEdu",
    "UGC online degrees",
    "Unifost Education Platform",
    "online degrees India",
    "UGC approved online courses",
    "distance learning MBA",
    "online university admission",
    "career counseling India",
    "best online MBA universities India",
    "UGC approved distance learning courses",
    "online degree career guidance",
    "compare online universities India",
    "distance education admission process",
    "online university degrees",
    "career counseling",
    "UGC-approved",
    "online education",
    "university selection",
    "education guidance",
    "accredited programs",
    "online degrees",
    "MBA online",
    "BBA online",
    "MCA online",
    "BCA online"
  ],
  alternates: {
    canonical: "https://unifostedu.com",
  },
  openGraph: {
    title: "Unifost | UGC Approved Online University Degrees in India",
    description: "UnifostEdu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career.",
    url: "https://unifostedu.com",
    siteName: "Unifost",
    images: [
      { 
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Online university degrees India with UGC approved courses and career counseling services"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifost",
    creator: "@unifost",
    title: "Top UGC Approved Online Degrees in India | UNIFOST",
    description: "Compare UGC-approved online degrees from top universities. Get free career counseling for MBA, BBA, MCA courses. 5000+ students enrolled.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

// Force static generation (SSG) for homepage
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

export default function Home() {
  return (
    <>
      {/* Organization Schema for Unifost Brand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Unifost",
            "url": "https://unifostedu.com",
            "alternateName": "UnifostEdu",
            "sameAs": [
              "https://www.linkedin.com/company/unifost",
              "https://www.instagram.com/unifost_edu/",
              "https://twitter.com/unifost"
            ],
            "logo": "https://unifostedu.com/uni.webp.48x48.png",
            "description": "UnifostEdu.com – The official platform for UGC-approved online university degrees in India. Explore top courses, apply easily, and transform your career."
          })
        }}
      />
      <Landing />
    </>
  );
}
