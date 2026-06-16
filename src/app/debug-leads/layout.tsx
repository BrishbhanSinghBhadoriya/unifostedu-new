import { ChildrenProps } from "types/ChildrenProps";

// This is an internal debug page — should not be indexed by search engines
export const metadata = {
  title: "Debug Leads",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DebugLeadsLayout({ children }: ChildrenProps) {
  return children;
}
