import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Our Services | Career & Education Guidance | UNIFOST",
  description: "Discover UNIFOST's comprehensive educational services including video call counseling, home demo sessions, university guidance, and career planning. Get personalized support for your educational journey.",
  keywords: [
    "Career Counseling Services",
    "Video Call Counseling",
    "Home Demo Sessions",
    "University Guidance",
    "Educational Planning",
    "Career Development",
    "Student Support Services",
    "Educational Consultation",
    "Academic Guidance",
    "Professional Development",
  ],
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/services",
  },
  openGraph: {
    title: "Our Services | Career Counseling & Educational Guidance | UNIFOST",
    description: "Discover UNIFOST's comprehensive educational services including video call counseling, home demo sessions, university guidance, and career planning.",
    siteName: "UNIFOST",
    url: "https://unifostedu.com/services",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "UNIFOST Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Career Counseling & Educational Guidance",
    description: "Discover UNIFOST's comprehensive educational services including video call counseling, home demo sessions, and university guidance.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
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
  authors: [{ name: "UNIFOST" }],
  publisher: "UNIFOST",
};

// Force static generation (SSG) for Services page
export const dynamic = 'force-static';
export const revalidate = 604800; // Revalidate every 7 days

export default function ServicesLayout({ children }: ChildrenProps) {
  return children;
}
