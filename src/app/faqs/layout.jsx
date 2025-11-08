export const metadata = {
  title: "FAQs | Online University Degrees & Career Counseling - UNIFOST",
  description:
    "Find answers to frequently asked questions about online university degrees, UGC-approved courses, career counseling, admission process, and more. Get expert guidance for your education journey.",
  keywords: [
    "online university degrees FAQ",
    "UGC approved courses questions",
    "career counseling FAQ",
    "online education help",
    "university admission questions",
    "distance learning FAQ",
    "online degree guidance",
    "education counseling help",
  ],
  openGraph: {
    title: "FAQs | Online University Degrees & Career Counseling - UNIFOST",
    description:
      "Find answers to frequently asked questions about online university degrees, UGC-approved courses, career counseling, and more.",
    url: "https://unifostedu.com/faq",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762583776/faq-hero_tz5w2b.webp",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions - UNIFOST",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Online University Degrees & Career Counseling - UNIFOST",
    description:
      "Get answers to FAQs about online degrees, UGC-approved programs, career counseling, and admissions.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762583776/faq-hero_tz5w2b.webp"],
  },
};

export default function FAQLayout({ children }) {
  return <>{children}</>;
}
