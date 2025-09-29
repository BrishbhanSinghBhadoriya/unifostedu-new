export const metadata = {
  title: "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses - UNIFOST",
  description:
    "Manipal Academy of Higher Education Online Degrees  Explore undergraduate and postgraduate programs from Manipal Academy of Higher Education (MAHE), a NAAC A++ accredited Institution of Eminence. Enquire now for BBA, BBA Hons, B.Com, MBA, MCA, and M.Sc courses.",
  keywords: [
    "Manipal Online",
    "MAHE Online",
    "Manipal University Online",
    "Manipal Academy of Higher Education",
    "Mahe UG & PG Courses",
    "mahe university",
    "BBA in mahe Online",
    "BBA Hons in mahe Online",
    "B.Com in mahe Online",
    "MBA in mahe Online",
    "MCA in mahe Online",
    "M.Sc in mahe Online",
    "UGC Recognized Online Degree",
    "NAAC A++ University",
    "Distance Learning India",
    "Online Courses MAHE",
    "Manipal Academy of Higher Education"
  ],
  openGraph: {
    title: "Manipal Online Degrees | MAHE UG & PG Courses - UNIFOST",
    description:
      "Explore undergraduate and postgraduate online programs from MAHE, NAAC A++ accredited and UGC recognized. Flexible, career-focused education with global recognition.",
    url: "https://unifostedu.com/mahe",
    siteName: "UNIFOST",
    images: [
      {
        url: "/images/mahe-uni.webp",
        width: 1200,
        height: 630,
        alt: "Manipal Academy of Higher Education - Online Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/mahe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal Online Degrees | MAHE UG & PG Courses - UNIFOST",
    description:
      "Explore online programs from Manipal Academy of Higher Education (MAHE), a NAAC A++ accredited Institution of Eminence. Flexible & career-oriented learning.",
    images: ["/images/mahe-uni.webp"],
  },
};

export default function MaheLayout({ children }) {
  return <>{children}</>;
}
