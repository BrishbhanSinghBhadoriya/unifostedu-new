export const metadata = {
  title: "Sikkim Manipal University Online | UG & PG Courses, Fees & Admission - UNIFOST",
  description:
    "Sikkim Manipal University (SMU) offers UGC-approved online UG & PG programs including MBA, MCA, B.Com, and BA. Explore fees, eligibility, placements, admission process & global recognition.",
  keywords: [
    "Sikkim Manipal University Online",
    "SMU Online MBA",
    "SMU Online MCA",
    "SMU Online B.Com",
    "SMU Online BA",
    "SMU Fees",
    "SMU Admission Online",
    "SMU Distance Learning",
    "UGC Approved Online University",
    "Private University Sikkim",
    "Online Degree Programs India",
    "Top Online Universities in India",
    "SMU Placements",
    "NAAC Accredited University",
  ],
  openGraph: {
    title: "Sikkim Manipal University Online | UG & PG Courses, Fees & Admission - UNIFOST",
    description:
      "Discover UGC-approved UG & PG online programs from Sikkim Manipal University (SMU). Flexible learning, affordable fees, expert faculty & placement support.",
    url: "https://unifostedu.com/smu",
    siteName: "UNIFOST",
    images: [
      {
        url: "/images/smu-uni.webp",
        width: 1200,
        height: 630,
        alt: "Sikkim Manipal University Online Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/smu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikkim Manipal University Online | UG & PG Courses, Fees & Admission - UNIFOST",
    description:
      "Sikkim Manipal University (SMU) offers online UG & PG programs with UGC recognition, flexible learning, affordable fees & placement assistance.",
    images: ["/images/smu-uni.webp"],
  },
};

export default function SMULayout({ children }) {
  return <>{children}</>;
}
