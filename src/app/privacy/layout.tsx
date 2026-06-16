import { ChildrenProps } from "types/ChildrenProps";

export const metadata = {
  title: "Privacy Policy | UNIFOST - Your Data Privacy Matters",
  description: "UNIFOST's privacy policy explains how we collect, use, and protect your personal data. Your privacy is our priority, and we are committed to ensuring the security of your information.",
  keywords: [
    "UNIFOST privacy policy",
    "UNIFOST data protection",
    "online education privacy",
    "student data privacy India",
    "EdTech privacy policy"
  ],
  alternates: {
    canonical: "https://unifostedu.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | UNIFOST - Your Data Privacy Matters",
    description: "Read UNIFOST's privacy policy to understand how we protect your personal data and ensure your information security.",
    url: "https://unifostedu.com/privacy",
    siteName: "UNIFOST",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp",
        width: 1200,
        height: 630,
        alt: "UNIFOST Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unifostedu",
    creator: "@unifostedu",
    title: "Privacy Policy | UNIFOST",
    description: "UNIFOST's privacy policy explains how we collect, use, and protect your personal data.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PrivacyLayout({ children }: ChildrenProps) {
  return <>{children}</>;
}
