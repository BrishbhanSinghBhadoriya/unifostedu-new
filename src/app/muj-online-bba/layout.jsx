export const metadata = {
  title: "Manipal Online BBA | Bachelor of Business Administration | MUJ Online",
  description:
    "Explore UGC-approved Online BBA from Manipal University Jaipur (MUJ) — admission, eligibility, fees, syllabus, and specializations. NAAC A+ accredited, fully digital campus.",
  keywords:
    "Manipal Online BBA, MUJ BBA Online, Bachelor of Business Administration, Online BBA, UGC Approved BBA, NAAC A+ BBA",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/muj-online-bba",
  },
  openGraph: {
    title: "Manipal Online BBA | Bachelor of Business Administration | MUJ Online",
    description:
      "UGC and NAAC A+ recognized Online BBA at Manipal University Jaipur. All program info, career scope, and admission process at one place.",
    url: "https://unifostedu.com/muj-online-bba",
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
    title: "Manipal Online BBA | Bachelor of Business Administration | MUJ Online",
    description:
      "All about Online BBA at Manipal University Jaipur - eligibility, fees, and career support.",
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
