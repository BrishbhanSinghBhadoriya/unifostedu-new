import Landing from "@/components/pages/Landing";
import Image from "next/image";
import { getLandingData } from "./lib/getCourse";

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

export default async function Home() {
  const data = await getLandingData();
  console.log("data is",data)
  return <Landing data={data} />

}
