export const metadata = {
  title: "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses | UNIFOST",
  description:
    "Explore undergraduate and postgraduate programs from Manipal Academy of Higher Education (MAHE), a NAAC A++ accredited Institution of Eminence. Flexible, career-focused online degrees with global recognition.",
  keywords: [
    "Manipal Online",
    "MAHE Online",
    "Manipal University Online",
    "Manipal Academy of Higher Education",
    "Mahe UG & PG Courses",
    "mahe university",
    "BBA in mahe Online",
    "BBA Hons in mahe Online",
    "B.Com in mahe Online",
    "MBA in mahe Online",
    "MCA in mahe Online",
    "M.Sc in mahe Online",
    "UGC Recognized Online Degree",
    "NAAC A++ University",
    "Distance Learning India",
    "Online Courses MAHE",
    "Manipal Academy of Higher Education"
  ],
  alternates: {
    canonical: "https://unifostedu.com/mahe-online",
  },
  openGraph: {
    title: "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses",
    description:
      "Explore undergraduate and postgraduate online programs from MAHE, NAAC A++ accredited and UGC recognized. Flexible, career-focused education with global recognition.",
    url: "https://unifostedu.com/mahe-online",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/mahe-uni.webp",
        width: 1200,
        height: 630,
        alt: "Manipal Academy of Higher Education - Online Programs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses",
    description:
      "Explore online programs from Manipal Academy of Higher Education (MAHE), a NAAC A++ accredited Institution of Eminence. Flexible & career-oriented learning.",
    images: ["https://unifostedu.com/images/mahe-uni.webp"],
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

export default function MaheLayout({ children }) {
  return <>{children}</>;
}
