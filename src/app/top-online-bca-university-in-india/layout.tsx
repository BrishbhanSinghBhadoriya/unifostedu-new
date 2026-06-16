import { ReactNode } from "react";

export const metadata = {
  title: "Top Online BCA University in India 2026 | UGC Approved BCA Admission",
  description:
    "Discover the top UGC-approved universities for Online BCA in India 2026. Compare fees, specializations, admission eligibility, and placement support to choose the best online BCA program.",
  keywords: [
    "Top Online BCA University India",
    "Best Online BCA University",
    "UGC Approved Online BCA",
    "Online BCA Admission 2026",
    "Online BCA Fees India",
    "Online BCA Programs India",
    "Online BCA Computer Science",
    "Distance BCA University India",
  ],
  alternates: {
    canonical: "https://unifostedu.com/top-online-bca-university-in-india",
  },
  openGraph: {
    title: "Top Online BCA University in India 2026 | UGC Approved",
    description:
      "Find and compare India's top UGC-approved online BCA universities. Affordable fees, flexible learning, and strong placement support for 2026 admissions.",
    url: "https://unifostedu.com/top-online-bca-university-in-india",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "Top Online BCA Universities in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Online BCA University in India 2026",
    description:
      "Compare India's best UGC-approved online BCA programs. Flexible learning, affordable fees, placement support.",
    images: [
      "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
    ],
  },
};

export default function TopOnlineBCALayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
