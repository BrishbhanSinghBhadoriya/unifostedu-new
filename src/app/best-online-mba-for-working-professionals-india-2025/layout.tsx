import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
    title: "Best Online MBA for Working Professionals in India 2026 | UNIFOST",
    description: "Boost your career with the best UGC-accredited online MBA programs for working professionals in India 2026. Compare top universities, fees, and flexibility.",
    keywords: [
      "Best Online MBA India",
      "Online MBA for Working Professionals",
      "UGC Approved MBA",
      "Online MBA 2026 India",
      "Flexible MBA for Professionals",
      "Part Time MBA India",
    ],
    alternates: {
        canonical: "https://unifostedu.com/best-online-mba-for-working-professionals-india-2025",
    },
    openGraph: {
      title: "Best Online MBA for Working Professionals in India 2026 | UNIFOST",
      description: "Compare top UGC-accredited online MBA programs designed for working professionals. Flexible, affordable, and career-focused.",
      url: "https://unifostedu.com/best-online-mba-for-working-professionals-india-2025",
      siteName: "UNIFOST",
      images: [
        {
          url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
          width: 1200,
          height: 630,
          alt: "Best Online MBA for Working Professionals India",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Online MBA for Working Professionals in India 2026",
      description: "Compare top UGC-accredited online MBA programs for working professionals. Flexible, affordable, placement-focused.",
      images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
    },
};

export default function BestOnlineMBALayout({ children }: ChildrenProps) {
    return children;
}
