// src/app/vgu/layout.jsx

export const metadata = {
  title: "Vivekananda Global University (VGU) Jaipur | Online UG & PG Courses - UNIFOST",
  description:
    "Explore UG & PG programs at Vivekananda Global University (VGU), Jaipur. UGC & AICTE recognized private university offering BBA, BCA, MBA, MCA, BA, MA, MSc and more with placements & global learning opportunities.",
  keywords: [
    "Vivekananda Global University",
    "VGU Jaipur",
    "VGU Online Courses",
    "VGU Online MBA",
    "VGU Online MCA",
    "VGU Online BBA",
    "VGU Online BCA",
    "VGU Jaipur Admission",
    "UGC Approved Online University",
    "AICTE Approved University",
    "NAAC Accredited University Rajasthan",
    "Top Universities in Jaipur",
    "Private University Rajasthan",
    "VGU Placements",
  ],
  openGraph: {
    title: "Vivekananda Global University (VGU) Jaipur | Online UG & PG Courses - UNIFOST",
    description:
      "Join VGU Jaipur for UGC & AICTE recognized UG & PG programs. Explore BBA, BCA, MBA, MCA, BA, MA, MSc with industry-driven curriculum, global learning, and placements.",
    url: "https://unifostedu.com/vgu",
    siteName: "UNIFOST",
    images: [
      {
        url: "/images/vgu-uni.webp",
        width: 1200,
        height: 630,
        alt: "VGU Jaipur University Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/vgu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivekananda Global University (VGU) Jaipur | Online UG & PG Courses - UNIFOST",
    description:
      "Discover UGC & AICTE recognized UG & PG programs at Vivekananda Global University Jaipur. Flexible, affordable & career-focused online education.",
    images: ["/images/vgu-uni.webp"],
  },
};

export default function VGULayout({ children }) {
  return <>{children}</>;
}
