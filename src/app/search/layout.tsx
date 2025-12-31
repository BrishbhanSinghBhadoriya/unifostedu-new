import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Search Courses & Universities | UNIFOST",
  description: "Search and explore leading online universities and courses with UNIFOST. Discover programs like MBA, BBA, MCA, BCA, and more to find the perfect online degree to achieve your career goals.",
  keywords: [
    "Online Courses",
    "University Search",
    "MBA Online",
    "BBA Online",
    "MCA Online",
    "BCA Online",
    "Online Degree Finder",
    "Educational Programs",
    "Career-Oriented Courses",
  ],
  alternates: {
    canonical: "https://unifostedu.com/search",
  },
  openGraph: {
    title: "Search Courses & Universities | UNIFOST",
    description: "Search and explore leading online universities and courses with UNIFOST. Find the ideal program for your career goals.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
    url: "https://unifostedu.com/search", 
  },
 
};

// Note: Search page is CSR (Client-Side Rendering) - no static generation needed
export default function SearchLayout({ children }: ChildrenProps) {
  return children;
}
