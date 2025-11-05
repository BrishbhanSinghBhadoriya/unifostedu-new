export const metadata = {
  title: "Search Courses & Universities | UNIFOST",
  description: "Search and explore leading online universities and courses with UNIFOST. Discover programs like MBA, BBA, MCA, BCA, and more to find the perfect online degree to achieve your career goals.",
  keywords: [
    "Online Courses",
    "University Search",
    "MBA Online",
    "BBA Online",
    "MCA Online",
    "BCA Online",
    "Online Degree Finder",
    "Educational Programs",
    "Career-Oriented Courses",
  ],
  alternates: {
    canonical: "https://unifostedu.com/search",
  },
  openGraph: {
    title: "Search Courses & Universities | UNIFOST",
    description: "Search and explore leading online universities and courses with UNIFOST. Find the ideal program for your career goals.",
    url: "https://unifostedu.com/search",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/uni.webp",
        width: 1200,
        height: 630,
        alt: "UNIFOST Course Search",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Courses & Universities | UNIFOST",
    description: "Search and explore leading online universities and courses.",
    images: ["https://unifostedu.com/images/uni.webp"],
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
};

// Note: Search page is CSR (Client-Side Rendering) - no static generation needed
export default function SearchLayout({ children }) {
  return children;
}
