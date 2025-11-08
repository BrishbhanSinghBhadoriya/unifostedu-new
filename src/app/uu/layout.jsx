

export const metadata = {
  title: "Uttaranchal University Online | UG & PG Courses, Fees & Admission - UNIFOST",
  description:
    "Uttaranchal University (UU) offers UGC-approved online UG & PG programs including MBA, BBA, BCA, MCA, and more. Explore fees, eligibility, placements, admission process & global recognition.",
  keywords: [
    "Uttaranchal University Online",
    "UU Online MBA",
    "UU Online MCA",
    "UU Online BBA",
    "UU Online BCA",
    "UU Fees",
    "Uttaranchal University Admission Online",
    "UU Distance Learning",
    "UGC Approved Online University",
    "Private University Uttarakhand",
    "Online Degree Programs India",
    "Top Online Universities in India",
    "UU Placements",
    "NAAC Accredited University",
  ],
  openGraph: {
    title: "Uttaranchal University Online | UG & PG Courses, Fees & Admission - UNIFOST",
    description:
      "Discover UGC-approved UG & PG online programs from Uttaranchal University (UU). Flexible learning, affordable fees, expert faculty & placement support.",
    url: "https://unifostedu.com/uu",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Online Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/uu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttaranchal University Online | UG & PG Courses, Fees & Admission - UNIFOST",
    description:
      "Uttaranchal University (UU) offers online UG & PG programs with UGC recognition, flexible learning, affordable fees & placement assistance.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp"],
  },
};

export default function UULayout({ children }) {
  return <>{children}</>;
}
