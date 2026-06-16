import { ChildrenProps } from "types/ChildrenProps";

// This is an internal organization chart page — should not be indexed by search engines
export const metadata = {
  title: "Organization Structure",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrgChartLayout({ children }: ChildrenProps) {
  return children;
}
