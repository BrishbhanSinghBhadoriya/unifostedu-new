import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Manipal Online MCA | Master of Computer Applications | MUJ Online",
  description:
    "Get complete details about Manipal University Jaipur's UGC-approved Online MCA program — syllabus, eligibility, fees, career scope, placement support, and flexible digital learning.",
  keywords:
    "MUJ Online MCA, Online MCA in Manipal, MUJ Online MCA Fees, MUJ MCA, MCA Online Admission, Manipal University Fees Structure, Manipal MCA Syllabus, MUJ Online MCA Specializations, Cloud Computing, Cybersecurity, AI & ML,Manipal Online MBA, Online MBA Manipal, Manipal University Online MBA, Manipal Online Degree MBA, Manipal MBA Fees, Online Manipal MBA Eligibility, Best Online MBA in India, UGC-Approved Online MBA, Manipal Online MBA Syllabus, Online MBA Specializations Manipal, Manipal University Jaipur Online Courses, Online Manipal Login, Manipal MBA Review, Online MBA for Working Professionals, Is Manipal Online MBA Valid, Manipal Online MBA Placement Support, Which Specialization Is Best in Manipal Online MBA, Is Manipal Online MBA Worth It, Affordable Online MBA with EMI, Manipal Online MBA Job Opportunities",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/muj-online-mca",
  },

  openGraph: {
    title: "Manipal Online MCA | MUJ Online | Master of Computer Applications",
    description:
      "Explore Manipal Online MCA — eligibility, fees, admission process, syllabus, and program features for IT and software professionals.",
    url: "https://unifostedu.com/muj-online-mca",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-mca.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Online MCA Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MCA | MUJ Online | UGC Approved Online MCA",
    description:
      "Learn about the Manipal Online MCA course: NAAC A+ accredited university, advanced curriculum, flexible learning, fees, and career opportunities.",
    images: ["https://unifostedu.com/images/manipal-mca.webp"],
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
