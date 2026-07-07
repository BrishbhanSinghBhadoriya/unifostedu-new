// This layout is intentionally minimal.
// All SEO (metadata + JSON-LD) is handled dynamically in page.tsx via generateMetadata.
// Static metadata here would override dynamic metadata and break per-slug SEO.

import { ChildrenProps } from "types/ChildrenProps";

export default function NMIMSCourseLayout({ children }: ChildrenProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="preload"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327721/nmims_os8kn9.webp"
        as="image"
        type="image/webp"
      />
      <meta name="theme-color" content="#003580" />
      {children}
    </>
  );
}
