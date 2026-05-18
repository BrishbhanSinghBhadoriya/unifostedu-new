import Landing from "@/components/pages/Landing";
import Image from "next/image";
import { getLandingData } from "./lib/getCourse";

export const metadata = {
  title: "Unifost | India's #1 Online University Comparison & Counseling Platform",
  description: "Compare 20+ top UGC-approved online universities in India. Get expert career counseling for online MBA, BBA, MCA, BCA & more. Find best fees, rankings & placement support. Apply for 2026 admissions.",
  keywords: [
    "Unifost",
    "online university degrees India",
    "UGC approved online courses",
    "best online MBA India",
    "online BBA admission 2026",
    "online MCA colleges",
    "career counseling for students",
    "distance education India",
    "compare online universities",
    "online degree admission 2026",
    "Manipal online MBA",
    "Amity online admission"
  ],
  alternates: {
    canonical: "https://unifostedu.com",
  },
  openGraph: {
    title: "Unifost | India's Best Online University Degrees & Career Counseling",
    description: "Compare top UGC-approved online universities in India. Get expert career counseling for MBA, BBA, MCA, BCA & more. Apply now for 2026 admissions.",
    url: "https://unifostedu.com",
    siteName: "Unifost",
    images: [
      { 
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
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
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  },
};


// Use ISR (Incremental Static Regeneration) to revalidate data every hour
export const revalidate = 3600; 

export default async function Home() {
  const data = await getLandingData();
  console.log(data);

  return <Landing data={data} />

}
