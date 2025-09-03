import Landing from "@/components/pages/Landing";
import Image from "next/image";
export const metadata = {
  title: "Online University Degrees & Career Counseling | UNIFOST - India's Leading EdTech Platform",
  description: "Get UGC-approved online university degrees from top Indian universities including MBA, BBA, MCA, BCA, BCom, BA, and more. Expert career counseling, home demo sessions, and personalized guidance. Book your free counseling session today!",
  keywords: [
    "Online University Degrees India",
    "Online MBA Programs India",
    "Online BBA Courses India",
    "Online MCA Programs India", 
    "Online BCA Courses India",
    "Online BCom Programs India",
    "Online BA Courses India",
    "UGC Approved Online Degrees",
    "Career Counseling Services India",
    "Educational Technology Platform",
    "Distance Learning Programs India",
    "Professional Development Courses",
    "University Admission Guidance",
    "Career Planning Services",
    "Online Education Consultants",
    "Higher Education Guidance India"
  ],
  alternates: {
    canonical: "https://www.unifostedu.com",
  },
  openGraph: {
    title: "Online University Degrees & Career Counseling | UNIFOST - India's Leading EdTech Platform",
    description: "Get UGC-approved online university degrees from top Indian universities. Expert career counseling, home demo sessions, and personalized guidance for your educational journey.",
    url: "https://www.unifostedu.com",
    siteName: "UNIFOST",
    images: [
      { 
        url: "images/uni.jpg",
        width: 1200,
        height: 630,
        alt: "UNIFOST - Online University Degrees & Career Guidance Platform"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifost",
    creator: "@unifost",
    title: "Online University Degrees & Career Counseling | UNIFOST",
    description: "Get UGC-approved online university degrees from top Indian universities. Expert career counseling and guidance for your educational journey.",
    images: ["images/uni.jpg"],
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

export default function Home() {
  return <Landing />;
}
