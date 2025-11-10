export const metadata = {
  title: "MUJ Online - UG & PG Courses in India",
  description: "Explore online undergraduate and postgraduate programs offered by Manipal University Online, a NAAC A++ accredited university. Flexible and career-focused education for students and working professionals.",
  keywords: "Manipal University Online, BBA in manipal Online, BCA in manipal Online, MBA in manipal Online, MCA in manipal Online, M.Com in manipal Online, MA in manipal Online, NAAC A++ University, Online Degree Programs India, Online Courses",
  openGraph: {
    title: "Manipal University Online - UG & PG Courses in India",
    description: "Explore online undergraduate and postgraduate programs offered by Manipal University Online, a NAAC A++ accredited university.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg"],
    
  },
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
