// Template for University Pages - Copy this to other university layouts
// Example: app/lpu-online/layout.jsx, app/jain/layout.jsx, etc.

import { Metadata } from 'next';

// Replace these values for each university
const UNIVERSITY_NAME = "University Name"; // e.g., "LPU Online"
const UNIVERSITY_SLUG = "university-slug"; // e.g., "lpu-online"
const UNIVERSITY_DESCRIPTION = "Explore globally recognized online programs from University Name. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals.";
const UNIVERSITY_IMAGE = "https://unifostedu.com/images/university.webp";
const UNIVERSITY_KEYWORDS = [
  "University Name Online",
  "Online Programs",
  // Add more keywords
];

export const metadata: Metadata = {
  title: `${UNIVERSITY_NAME} | Accredited Online Degrees | UNIFOST`,
  description: UNIVERSITY_DESCRIPTION,
  keywords: UNIVERSITY_KEYWORDS,
  alternates: {
    canonical: `https://unifostedu.com/${UNIVERSITY_SLUG}`,
  },
  openGraph: {
    title: `${UNIVERSITY_NAME} | Accredited Online Degrees`,
    description: UNIVERSITY_DESCRIPTION,
    url: `https://unifostedu.com/${UNIVERSITY_SLUG}`,
    siteName: "UNIFOST",
    images: [
      {
        url: UNIVERSITY_IMAGE,
        width: 1200,
        height: 630,
        alt: `${UNIVERSITY_NAME}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${UNIVERSITY_NAME} | Accredited Online Degrees`,
    description: UNIVERSITY_DESCRIPTION,
    images: [UNIVERSITY_IMAGE],
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

export default function UniversityLayout({ children }) {
  return children;
}

