export const metadata = {
  title: "Best Online MCA University in India  | Fees, Ranking & Admission",
  description:
    "Explore the best UGC-approved online MCA universities in India for 2025–26. Compare fees, rankings, eligibility, admission process, and top specializations.",
  keywords:
    "best online mca university in india, top online mca colleges, ugc approved online mca, online mca fees india, online mca admission 2025",
  metadataBase: new URL("https://unifostedu.com"),
  openGraph: {
    title: "Best Online MCA University in India (2025–26)",
    description:
      "Check top UGC-approved online MCA universities with fees, reviews, eligibility, syllabus, and placements.",
    url: "https://unifostedu.com/best-online-mca-university-in-india",
    type: "website",
  },
};

export default function BestMCALayout({ children }) {
  return (
    <section className="bg-gray-50 min-h-screen pt-16">
      {children}
    </section>
  );
}
