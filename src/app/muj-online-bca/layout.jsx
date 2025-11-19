export const metadata = {
  title: "Manipal Online BCA | Bachelor of Computer Applications | MUJ Online",
  description: "Explore the UGC-approved Online BCA from Manipal University Jaipur. Learn about eligibility, syllabus, fees, career opportunities, and admissions. NAAC A+ accredited.",
  keywords: "Manipal Online BCA, MUJ BCA Online, Bachelor of Computer Applications, Online BCA, UGC Approved BCA, NAAC A+ BCA",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/muj-online-bca",
  },
  openGraph: {
    title: "Manipal Online BCA | Bachelor of Computer Applications | MUJ Online",
    description:
      "Complete details of Online BCA at Manipal University Jaipur — program fees, eligibility, digital learning features, and career scope.",
    url: "https://unifostedu.com/muj-online-bca",
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
    title: "Manipal Online BCA | Bachelor of Computer Applications | MUJ Online",
    description:
      "Everything you need to know about Manipal University Jaipur Online BCA — eligibility, fees, digital classes, and career support.",
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
