"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminBlogPanel from "@/components/blogspanel/AdminBlogPanel";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    try {
      const hasToken = document.cookie.split(";").some((c) => c.trim().startsWith("admin_token="));
      if (!hasToken) router.replace("/admin");
    } catch {
      router.replace("/admin");
    }
  }, [router]);

  return <AdminBlogPanel />;
}
