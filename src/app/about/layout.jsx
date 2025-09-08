export const metadata = {
  title: "UNIFOST | Online Education & Career Counseling Platform",
  description: "Learn about UNIFOST, India's trusted EdTech platform providing online university degrees, career counseling, and personalized guidance. Discover our mission to transform education.",
  keywords: [
    "About UNIFOST", 
    "EdTech Platform India", 
    "Online Education Company", 
    "Career Counseling Services", 
    "University Partner Network", 
    "Education Technology India",
    "Online University Degrees",
    "Student Guidance Platform",
    "Educational Innovation India"
  ],
  alternates: {
    canonical: "https://unifostedu.com/about",
  },
  openGraph: {
    title: "About UNIFOST | India’s Leading Online Education Platform",
    description: "Learn about UNIFOST, India's trusted EdTech platform providing online university degrees, career counseling, and personalized guidance.",
    url: "https://unifostedu.com/about",
    siteName: "UNIFOST",
    images: [
      {
        url: "images/uni.jpg",
        width: 1200,
        height: 630,
        alt: "UNIFOST - India's Leading EdTech Platform"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifost",
    creator: "@unifost",
    title: "About UNIFOST | India's Leading EdTech Platform",
    description: "Learn about UNIFOST, India's trusted EdTech platform providing online university degrees and career counseling.",
    images: ["images/uni.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "page-type": "about",
    "company-info": "UNIFOST EdTech Platform",
  }
};

export default function AboutLayout({ children }) {
  return children;
}
