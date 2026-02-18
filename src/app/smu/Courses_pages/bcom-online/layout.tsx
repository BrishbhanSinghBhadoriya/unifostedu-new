import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "SMU Online BCom 2025-26 | Bachelor of Commerce | Fees ₹75,000 | NAAC A+ | Sikkim Manipal University",
  description:
    "Online BCom (Bachelor of Commerce) from Sikkim Manipal University (SMU). NAAC A+ accredited, UGC-approved. ₹12,500/semester, EMI ₹2,083/month. Accounting, Taxation, Finance, Banking, GST & more. Admissions open. Apply free!",
  keywords: [
    "SMU Online BCom",
    "Sikkim Manipal University Online BCom",
    "SMU BCom fees",
    "SMU BCom degree 2025",
    "online BCom SMU 2025",
    "online BCom 2025 India",
    "SMU BCom admission 2025-26",
    "SMU BCom syllabus",
    "SMU BCom eligibility",
    "online BCom UGC approved",
    "NAAC A+ online BCom",
    "best online BCom India",
    "online BCom working professionals",
    "online bachelor of commerce India",
    "SMU BCom accounting",
    "SMU BCom taxation GST",
    "online BCom distance learning",
    "UGC DEB BCom degree",
    "online commerce degree India",
    "affordable BCom online India",
  ],
  openGraph: {
    title: "SMU Online BCom | Bachelor of Commerce | ₹75,000 | NAAC A+ | Admissions Open",
    description:
      "Earn a UGC-approved Online BCom from Sikkim Manipal University (NAAC A+). Master Accounting, Taxation, Finance & Banking. ₹12,500/semester. 100% online, AI-proctored exams, placement support. Apply now!",
    url: "https://unifostedu.com/smu/bcom",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
        width: 1200,
        height: 630,
        alt: "SMU Online BCom (Bachelor of Commerce) — Sikkim Manipal University",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/smu/bcom",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMU Online BCom 2025-26 | Bachelor of Commerce | NAAC A+ | ₹75,000 Fee",
    description:
      "Online BCom from Sikkim Manipal University — UGC approved, NAAC A+, Accounting/Finance/Taxation curriculum, ₹12,500/semester, 150+ hiring partners. Admissions open. Apply free!",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp"],
  },
};

export default function SmuBComLayout({ children }: ChildrenProps) {
  return <>{children}</>;
}