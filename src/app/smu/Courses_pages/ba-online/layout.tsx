import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "SMU Online BA 2025-26 | Bachelor of Arts | Fees ₹75,000 | NAAC A+ | Sikkim Manipal University",
  description:
    "Online BA (Bachelor of Arts) from Sikkim Manipal University (SMU). NAAC A+ accredited, UGC-approved. ₹12,500/semester, EMI ₹2,083/month. Choose English, Sociology, or Political Science. Admissions open. Apply free!",
  keywords: [
    "SMU Online BA",
    "Sikkim Manipal University Online BA",
    "SMU BA fees",
    "SMU BA degree 2025",
    "online BA SMU 2025",
    "online BA 2025 India",
    "SMU BA admission 2025-26",
    "SMU BA syllabus",
    "SMU BA eligibility",
    "online BA UGC approved",
    "NAAC A+ online BA",
    "best online BA India",
    "online BA working professionals",
    "SMU BA English specialization",
    "SMU BA Sociology specialization",
    "SMU BA Political Science specialization",
    "online BA distance learning",
    "UGC DEB BA degree",
    "bachelor of arts online India",
    "online humanities degree India",
  ],
  openGraph: {
    title: "SMU Online BA | Bachelor of Arts | ₹75,000 | NAAC A+ | Admissions Open",
    description:
      "Earn a UGC-approved Online BA from Sikkim Manipal University (NAAC A+). Choose English, Sociology, or Political Science. ₹12,500/semester. 100% online, AI-proctored exams, placement support. Apply now!",
    url: "https://unifostedu.com/smu/ba",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
        width: 1200,
        height: 630,
        alt: "SMU Online BA (Bachelor of Arts) — Sikkim Manipal University",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/smu/ba",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMU Online BA 2025-26 | Bachelor of Arts | NAAC A+ | ₹75,000 Fee",
    description:
      "Online BA from Sikkim Manipal University — UGC approved, NAAC A+, choose English/Sociology/Political Science, ₹12,500/semester, 150+ hiring partners. Admissions open. Apply free!",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp"],
  },
};

export default function SmuBALayout({ children }: ChildrenProps) {
  return <>{children}</>;
}