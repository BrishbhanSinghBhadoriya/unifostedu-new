export const metadata = {
  title: "UPES university Online - UG & PG Courses in India",
  description: "Explore online undergraduate and postgraduate programs offered by UPES Online, a NAAC A++ accredited university. Flexible and career-focused education for students and working professionals.",
  keywords: "UPES Online, BBA Online, BCA Online, MBA Online, MCA Online, M.Com Online, MA Online, NAAC A++ University, Online Degree Programs India, Online Courses, Distance Learning",
  openGraph: {
    title: "UPES Online - UG & PG Courses in India",
    description: "Explore online undergraduate and postgraduate programs offered by UPES Online, a NAAC A++ accredited university.",
    images: [
      {
      url:"https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp",
      width: 1200,
      height: 630,
      alt: "UPES University Campus",
      }

      ],
  },
    alternates: {
    canonical: "https://unifostedu.com/upes",
  },
};

export default function UPESLayout({ children }) {
  return children;
}
