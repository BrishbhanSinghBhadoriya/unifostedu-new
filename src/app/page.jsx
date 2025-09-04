import Landing from "@/components/pages/Landing";
import Image from "next/image";
export const metadata = {
  title: "Online University Degrees in India | Free Career Counseling | UNIFOST",
  description: "Compare UGC-approved online degrees in India—MBA, BBA, MCA, BCA, BCom, BA & more. Get free career counseling, home demo sessions, and personalized guidance to choose the right university.",
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
    title: "Online University Degrees in India | Free Career Counseling | UNIFOST",
    description: "Compare UGC-approved online degrees in India—MBA, BBA, MCA, BCA, BCom, BA & more. Get free career counseling, home demo sessions, and personalized guidance to choose the right university.",
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
    title: "Online University Degrees in India | Free Career Counseling | UNIFOST",
    description: "Compare UGC-approved online degrees in India—MBA, BBA, MCA, BCA, BCom, BA & more. Get free career counseling, home demo sessions, and personalized guidance to choose the right university.",
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
