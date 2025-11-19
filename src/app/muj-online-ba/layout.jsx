export const metadata = {
  title: "Manipal Online BA | Bachelor of Arts | MUJ Online",
  description:
    "Get details about UGC-approved Online BA from Manipal University Jaipur — eligibility, specializations, fees, and flexible digital learning. NAAC A+ accredited university.",
  keywords:
    "Manipal Online BA, MUJ BA Online, Bachelor of Arts, Online BA, UGC Approved BA, NAAC A+ BA",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/muj-online-ba",
  },
  openGraph: {
    title: "Manipal Online BA | Bachelor of Arts | MUJ Online",
    description:
      "Explore Manipal University's Online BA: syllabus, eligibility, and admissions for India's next-gen digital graduates.",
    url: "https://unifostedu.com/muj-online-ba",
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
    title: "Manipal Online BA | Bachelor of Arts | MUJ Online",
    description:
      "Learn about Manipal Online BA: NAAC A+ digital campus, fees, and program details for next-gen students.",
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

export const dynamic = "force-static";
export const revalidate = 604800;

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
