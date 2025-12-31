import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Jain University Online - UG & PG Courses in India",
  description:
    "Jain University Online Explore undergraduate (BBA, BCA, B.Com) and postgraduate (MBA, MCA, M.Com, MA) programs offered by Jain University Online, a NAAC A++ accredited university in Bengaluru. Flexible, career-focused education for students and working professionals.",
  keywords:
    "Jain University Online, BBA Online, BCA Online, B.Com Online, MBA Online, MCA Online, M.Com Online, MA Online, NAAC A++ University, Online Degree Programs India, Online Courses, Distance Learning",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/jain",
  },
  openGraph: {
    title: "Jain University Online - UG & PG Courses in India",
    description:
      "Explore online undergraduate and postgraduate programs offered by Jain University Online, a NAAC A++ accredited university in Bengaluru.",
    url: "https://unifostedu.com/jain",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp",
        width: 1200,
        height: 630,
        alt: "Jain University Online",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain University Online - UG & PG Courses in India",
    description:
      "Explore flexible online undergraduate and postgraduate programs offered by Jain University Online.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp"],
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
};

export default function JainLayout({ children }: ChildrenProps){
  return children;
}
