import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Manipal Online MBA | Master of Business Administration | MUJ Online",
  description:
    "Explore Manipal University's UGC-entitled Online MBA — eligibility, fees, specializations, syllabus, placement support, and flexible learning for working professionals.",
  keywords:
    "Manipal Online MBA, MUJ Online MBA, Online MBA India, Best Online MBA Program, UGC Approved MBA Online, Manipal University Jaipur MBA Online, Online MBA for Working Professionals, Manipal Online MBA Fees, Manipal Online MBA Reviews, Manipal MBA Eligibility, Online MBA HR, Online MBA Marketing, Online MBA Finance, Online MBA Analytics",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/muj-online-mba",
  },

  openGraph: {
    title: "Manipal Online MBA | MUJ Online | UGC Approved MBA Program",
    description:
      "Get complete details about Manipal Online MBA: fees, eligibility, syllabus, and admission guidance for working professionals.",
    url: "https://unifostedu.com/muj-online-mba",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-mba.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online MBA",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MBA | MUJ Online | Master of Business Administration",
    description:
      "Learn about the Manipal Online MBA program: flexible learning, NAAC A+ university, fees, specializations, and career opportunities.",
    images: ["https://unifostedu.com/images/manipal-mba.webp"],
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
export const revalidate = 604800; // 7 days

export default function Layout({ children }: ChildrenProps) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
