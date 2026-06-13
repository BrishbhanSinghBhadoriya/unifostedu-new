import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "SMU Online MA 2026-27 | English, Political Science, Sociology | ₹72,000 | NAAC A+ | Sikkim Manipal University",
  description:
    "Online MA Programs from Sikkim Manipal University (SMU) — MA English, MA Political Science, MA Sociology. NAAC A+ accredited, UGC-DEB approved. ₹18,000/semester, EMI ₹3,000/month. 100% online, AI-proctored exams, NET eligible. July 2026 batch open. Apply free!",
  keywords: [
    // MA English
    "SMU Online MA English",
    "Sikkim Manipal University MA English",
    "online MA English UGC approved",
    "SMU MA English fees",
    "online MA English admission 2026",
    "MA English distance learning India",
    // MA Political Science
    "SMU Online MA Political Science",
    "online MA Political Science SMU",
    "SMU MA Political Science fees",
    "online MA Political Science UGC approved",
    "MA Political Science for UPSC",
    "online MA Political Science India",
    // MA Sociology
    "SMU Online MA Sociology",
    "online MA Sociology SMU",
    "SMU MA Sociology fees",
    "online MA Sociology UGC approved",
    "online MA Sociology India",
    // Common
    "SMU Online MA programs",
    "Sikkim Manipal University online MA",
    "SMU MA admission 2026-27",
    "online MA NAAC A+ India",
    "affordable online MA India",
    "UGC DEB MA degree",
    "online MA working professionals India",
  ],
  openGraph: {
    title: "SMU Online MA 2026-27 | English, Political Science & Sociology | ₹72K | NAAC A+",
    description:
      "Choose from 3 Online MA Programs at Sikkim Manipal University — MA English, MA Political Science, MA Sociology. NAAC A+, UGC-DEB approved. ₹18,000/semester, no-cost EMI ₹3,000/month. 100% online, NET eligible. July 2026 batch — Apply free now!",
    url: "https://unifostedu.com/smu/ma",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
        width: 1200,
        height: 630,
        alt: "SMU Online MA Programs — English, Political Science, Sociology — Sikkim Manipal University",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://unifostedu.com/smu/ma",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMU Online MA 2026-27 | English, Pol. Science, Sociology | NAAC A+ | ₹72K",
    description:
      "3 Online MA programs from SMU — English, Political Science, Sociology. UGC-DEB approved, NAAC A+. ₹18,000/semester, NET eligible, 100% online. July 2026 batch open!",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp"],
  },
};

export default function SmuMALayout({ children }: ChildrenProps) {
  return <>{children}</>;
}