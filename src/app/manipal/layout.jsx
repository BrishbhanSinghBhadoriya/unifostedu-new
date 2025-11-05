export const metadata = {
  title: "Manipal University Online | Accredited Online Degrees | UNIFOST",
  description: "Explore globally recognized online programs from Manipal University Jaipur Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals.",
  keywords: [
    "Manipal Online",
    "Manipal University Jaipur",
    "MUJ Online",
    "Online MBA Manipal",
    "Online BBA Manipal",
    "Online MCA Manipal",
    "Online BCA Manipal",
    "Online M.Com Manipal",
    "Online MA Manipal",
    "UGC Approved",
    "NAAC A+",
    "Online Degree Programs India",
    "Online Courses",
    "Manipal University Jaipur Online",
    "MUJ Online Courses",
    "Online Manipal University"
  ],
  alternates: {
    canonical: "https://unifostedu.com/manipal",
  },
  openGraph: {
    title: "Manipal University Online | Accredited Online Degrees",
    description: "Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning.",
    url: "https://unifostedu.com/manipal",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal University Online | Accredited Online Degrees",
    description: "Enroll in UGC and AICTE approved online courses at Manipal University Jaipur.",
    images: ["https://unifostedu.com/images/manipal.webp"],
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Force static generation (SSG)
export const dynamic = 'force-static';
export const revalidate = 604800; // Revalidate every 7 days

export default function ManipalLayout({ children }) {
  return children;
}
