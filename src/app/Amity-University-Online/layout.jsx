export const metadata = {
  title: "Amity University Online | Accredited Online Degrees | UNIFOST",
  description:
    "Explore globally recognized online programs from Amity University Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals.",
  keywords: [
    "Amity Online",
    "Amity University Online",
    "Amity Online University",
    "Online MBA Amity",
    "Online BBA Amity",
    "Online MCA Amity",
    "Online BCA Amity",
    "UGC Approved",
    "AICTE Approved",
    "Online Degree Programs India",
    "Amity Online Courses",
  ],
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/Amity-University-Online",
  },
  openGraph: {
    title: "Amity University Online | Accredited Online Degrees",
    description:
      "Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning from Amity University.",
    url: "https://unifostedu.com/Amity-University-Online",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amity University Online | Accredited Online Degrees",
    description: "Enroll in UGC and AICTE approved online courses at Amity University Online.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"],
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

// Use dynamic rendering for this route to avoid prerender-time initialization errors
export const dynamic = 'force-dynamic';
// keep a long revalidate if you want cached results for ISR-like behavior
export const revalidate = 604800; // Revalidate every 7 days

export default function AmityLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
