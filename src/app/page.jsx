import Landing from "@/components/pages/Landing";
import Image from "next/image";
export const metadata = {
  title: "UGC Approved Online Degrees in India | UNIFOST",
  description: "Compare UGC-approved online degrees from top universities. Get free career counseling for MBA, BBA, MCA courses. 5000+ students enrolled. Apply now!",
  keywords: [
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
    title: "Online Degrees India | UGC Approval & Career Guide | UNIFOST",
    description: "Compare UGC-approved online degrees from top universities. Get free career counseling for MBA, BBA, MCA courses. 5000+ students enrolled. Apply now!",
    url: "https://unifostedu.com",
    siteName: "UNIFOST",
    images: [
      { 
        url: "images/uni.jpg",
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
