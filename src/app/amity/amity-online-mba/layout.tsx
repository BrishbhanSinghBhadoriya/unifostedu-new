import { ReactNode } from "react";

export const metadata = {
  title: "Amity Online MBA | UGC Approved MBA Fees, Admission & Specializations 2026",
  description:
    "Explore Amity Online MBA programs with UGC & NAAC A+ accreditation. Compare specializations, fees starting ₹90,000/year, admission process, and placement support. Apply now for 2026 batch.",
  keywords: [
    "Amity Online MBA",
    "Amity University Online MBA",
    "UGC Approved Online MBA",
    "Amity Online MBA Fees",
    "Amity Online MBA Admission 2026",
    "Amity Online MBA Specializations",
    "NAAC A+ Online MBA",
    "Amity Online MBA Placement",
  ],
  alternates: {
    canonical: "https://unifostedu.com/amity/amity-online-mba",
  },
  openGraph: {
    title: "Amity Online MBA | UGC Approved MBA Fees & Admission 2026",
    description:
      "Apply for Amity University Online MBA — UGC & NAAC A+ accredited program with flexible learning, 30+ specializations, and strong placement support.",
    url: "https://unifostedu.com/amity/amity-online-mba",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online MBA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amity Online MBA | UGC Approved MBA 2026",
    description:
      "Amity University Online MBA — UGC approved, NAAC A+ rated with 30+ specializations and placement assistance.",
    images: [
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
    ],
  },
};

export default function AmityOnlineMBALayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
