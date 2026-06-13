import { ChildrenProps } from "types/ChildrenProps";
import Image from "next/image";

export const metadata = {
  title: "Amity Online MBA Fees 2026-27 | Amity University Online",
  description:
    "Complete fee structure for Amity Online MBA 2026-27 — semester-wise fees, payment options, EMI plans, scholarships, and admission costs for working professionals.",
  keywords:
    "Amity Online MBA Fees 2026, Amity Online MBA 2026-27, Amity University Online MBA Fees, Online MBA Fees India 2026, Amity MBA EMI Options, Amity Online MBA Scholarship, Amity Online MBA Fee Structure, Amity Online MBA Cost, Amity Online MBA Admission Fees",
  metadataBase: new URL("https://unifostedu.com"),
  alternates: {
    canonical: "https://unifostedu.com/amity-online-mba-total-fees",
  },
  openGraph: {
    title: "Amity Online MBA Fees 2026-27 | Amity University Online",
    description:
      "View the official Amity Online MBA fee breakdown for 2026-27 — tuition, semester fees, one-time charges, and scholarship details for online MBA aspirants.",
    url: "https://unifostedu.com/amity-online-mba-total-fees",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://unifostedu.com/images/amity-mba-fees.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online MBA Fees 2026-27",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amity Online MBA Fees 2026-27 | Amity University Online",
    description:
      "Find the latest Amity Online MBA fee schedule for 2026-27 — flexible payment options, EMI plans and scholarship information.",
    images: ["https://unifostedu.com/images/amity-mba-fees.webp"],
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
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/amitylogo.jpg"
                alt="Amity University Online"
                width={200}
                height={80}
                className="h-10 w-auto object-contain"
                priority
              />
              <div>
                <p className="text-sm font-semibold">Amity University Online</p>
                <p className="text-xs text-gray-500">MBA — Fees 2026-27</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/" className="hover:text-indigo-600">Home</a>
              <a href="/amity-online-mba" className="hover:text-indigo-600">Program</a>
              <a href="/amity-online-mba-fees-2026-27" className="text-indigo-600 font-medium">Fees</a>
              <a href="/contact" className="hover:text-indigo-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} UNIFOST. All rights reserved.</p>
          <div className="text-sm text-gray-600">Designed for Amity Online MBA fee details 2026-27</div>
        </div>
      </footer>
    </div>
  );
}
