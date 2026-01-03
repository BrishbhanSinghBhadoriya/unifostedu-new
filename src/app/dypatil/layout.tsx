import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Dr. DY Patil Online - UG & PG Courses in India",
  description: "Dr. DY Patil Online  Explore undergraduate and postgraduate programs offered by Dr. DY Patil University Online, a NAAC A++ accredited university. Flexible and career-focused education for students and working professionals.",
  keywords: "Dr. DY Patil Online, BBA Online, BCA Online, MBA Online, MCA Online, M.Com Online, MA Online, NAAC A++ University, Online Degree Programs India, Online Courses, Distance Learning",
  openGraph: {
    title: "Dr. DY Patil Online - UG & PG Courses in India",
    description: "Explore online undergraduate and postgraduate programs offered by Dr. DY Patil University Online, a NAAC A++ accredited university.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp"],
  },
  alternates: {
    canonical: "https://unifostedu.com/dypatil",
  },
};

export default function DYPATILLayout({ children }: ChildrenProps ) {
  return children;
}
