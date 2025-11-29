import Landing from "@/components/pages/Landing";
import Image from "next/image";

export const metadata = {
  title: "Unifost | India's Best Online University Degrees & Career Counseling",
  description: "Compare top UGC-approved online universities in India. Get expert career counseling for MBA, BBA, MCA, BCA & more. Apply now for 2025 admissions.",
  keywords: [
    "Unifost",
    "online university degrees India",
    "UGC approved online courses",
    "best online MBA India",
    "online BBA admission",
    "online MCA colleges",
    "career counseling for students",
    "distance education India",
    "compare online universities",
    "online degree admission 2025"
  ],
  alternates: {
    canonical: "https://unifostedu.com",
  },
  openGraph: {
    title: "Unifost | India's Best Online University Degrees & Career Counseling",
    description: "Compare top UGC-approved online universities in India. Get expert career counseling for MBA, BBA, MCA, BCA & more. Apply now for 2025 admissions.",
    url: "https://unifostedu.com",
    siteName: "Unifost",
    images: [
      { 
        url: "/uni.webp",
        width: 1200,
        height: 630,
        alt: "Unifost - Online University Degrees & Career Counseling"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifost",
    creator: "@unifost",
    title: "Unifost | India's Best Online University Degrees & Career Counseling",
    description: "Compare top UGC-approved online universities in India. Get expert career counseling for MBA, BBA, MCA, BCA & more.",
    images: ["/uni.webp"],
  },
};

// Force static generation (SSG) for homepage
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

export default function Home() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are online university degrees UGC-approved and recognized?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all online university degrees we recommend are UGC-approved and fully recognized by the University Grants Commission. These degrees have the same value as traditional campus programs."
                }
              },
              {
                "@type": "Question",
                "name": "How does career counseling help in choosing online university degrees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our career counseling provides personalized guidance based on your career goals, academic background, and industry requirements to help you select the best UGC-approved programs."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of UGC-approved online university degrees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Benefits include flexibility, cost-effectiveness, ability to study while working, and global recognition. You also get comprehensive career support."
                }
              },
              {
                "@type": "Question",
                "name": "How do I apply for online university degrees through UNIFOST?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact our counselors for end-to-end support, from university selection to application submission and admission guidance."
                }
              },
              {
                "@type": "Question",
                "name": "What courses are available in online university degrees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and more from top-ranked universities."
                }
              },
              {
                "@type": "Question",
                "name": "Is there any difference between online and regular degrees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, UGC-approved online degrees have the same value and recognition as regular degrees, just with a different mode of delivery."
                }
              },
              {
                "@type": "Question",
                "name": "How much do online university degrees cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They are generally more affordable, ranging from ₹1-4 lakhs for complete programs. Costs vary by university."
                }
              }
            ]
          })
        }}
      />
      <Landing />
    </>
  );
}
