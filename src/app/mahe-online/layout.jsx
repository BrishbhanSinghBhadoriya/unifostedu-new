export const metadata = {
  title: "Manipal Academy of Higher Education Online Degrees | MAHE ",
  description:
    "Explore undergraduate and postgraduate programs from Manipal Academy of Higher Education (MAHE), a NAAC A++ accredited Institution of Eminence. Flexible, career-focused online degrees with global recognition.",
  keywords: [
    "online mahe university",
    "online mahe university courses",
    "online mahe university courses India",
    "online mahe university courses in India",
    "online mahe university courses in India",
    "mahe online",
    "mahe university online",
    "mahe university online courses",
    "mahe university online courses India",
    "mahe university online courses in India",
    "mahe university online courses in India",
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
  alternates: {
    canonical: "https://unifostedu.com/mahe-online",
  },
  openGraph: {
    title: "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses",
    description:
      "Explore undergraduate and postgraduate online programs from MAHE, NAAC A++ accredited and UGC recognized. Flexible, career-focused education with global recognition.",
    url: "https://unifostedu.com/mahe-online",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp",
        width: 1200,
        height: 630,
        alt: "Manipal Academy of Higher Education - Online Programs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal Academy of Higher Education Online Degrees | MAHE UG & PG Courses",
    description:
      "Explore online programs from Manipal Academy of Higher Education (MAHE), a NAAC A++ accredited Institution of Eminence. Flexible & career-oriented learning.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp"],
  },
};

// Force static generation (SSG)
export const dynamic = 'force-static';
export const revalidate = 604800; // Revalidate every 7 days

export default function MaheLayout({ children }) {
  return <>{children}</>;
}
