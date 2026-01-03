import { ChildrenProps } from "types/ChildrenProps";
export const metadata = {
  title: "Partner Universities | Top Online Universities",
  description: "Explore our comprehensive list of top online universities and colleges. Find the best accredited institutions for your online degree programs with the help of unifost.",
  keywords: "List of Colleges, Online Universities, Top Universities, Accredited Colleges, University Directory, Online Education Institutions",
  openGraph: {
    title: "List of Colleges | Top Online Universities | UNIFOST",
    description: "Explore our comprehensive list of top online universities and colleges. Find the best accredited institutions for your online degree programs.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  },
    alternates: {
    canonical: "https://unifostedu.com/University-List",
  },
};

export default function UniversityListLayout({ children }: ChildrenProps) {
  return children;
}
