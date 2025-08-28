import Landing from "@/components/pages/Landing";

export const metadata = {
  title: "Online University Degree & Career Counseling | Unifost",
  description:
    "Accredited Online University Degree guidance, career counseling, and home demo sessions. Trusted EdTech solutions in India. Book your free counseling.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Online University Degree & Career Counseling | Unifost",
    description:
      "Accredited Online University Degree guidance, career counseling, and home demo sessions.",
    url: "/",
    siteName: "Unifost",
    images: [{ url: "/uni.jpg" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online University Degree & Career Counseling | Unifost",
    description:
      "Accredited Online University Degree guidance, career counseling, and home demo sessions.",
    images: ["/uni.jpg"],
  },
};

export default function Home() {
  return <Landing />;
}
