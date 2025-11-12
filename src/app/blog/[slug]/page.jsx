import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  fetchBlogBySlug,
  fetchBlogs,
} from "@/lib/blogApi";

const FALLBACK_BLOG_IMAGE =
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762932238/blog-images/a8cspd20trzfqocza1jw.png";

export const revalidate = 1800;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const blogs = await fetchBlogs();
    return blogs
      .map((blog) => blog.slug)
      .filter(Boolean)
      .map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const blog = await fetchBlogBySlug(slug);

    if (!blog) {
      return {
        title: "Blog Post Not Found | UNIFOST",
        description: "The requested blog post could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const plainDescription =
      blog.description || stripHtml(blog.content).slice(0, 160);
    const image = blog.image || FALLBACK_BLOG_IMAGE;

    return {
      title: `${blog.title} | UNIFOST Blog`,
      description: plainDescription,
      keywords: blog.category
        ? [blog.category, "Online Education", "UNIFOST"]
        : ["UNIFOST Blog"],
      authors: [{ name: blog.author || "UNIFOST Team" }],
      alternates: {
        canonical: `https://unifostedu.com/blog/${slug}`,
      },
      openGraph: {
        title: `${blog.title} | UNIFOST Blog`,
        description: plainDescription,
        url: `https://unifostedu.com/blog/${slug}`,
        siteName: "UNIFOST",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        type: "article",
        publishedTime: blog.createdAt || blog.updatedAt,
        authors: [blog.author || "UNIFOST"],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: plainDescription,
        images: [image],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch {
    return {
      title: "UNIFOST Blog",
      description: "Explore the latest insights from the UNIFOST blog.",
    };
  }
}

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatDate(date) {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const publishedAt = formatDate(blog.createdAt || blog.updatedAt);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-56 sm:h-72 md:h-96 w-full">
            <Image
              src={blog.image || FALLBACK_BLOG_IMAGE}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium mb-3">
                {blog.category && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                )}
                {publishedAt && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {publishedAt}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                {blog.title}
              </h1>
              {blog.author && (
                <p className="mt-3 text-sm sm:text-base text-white/80">
                  By{" "}
                  <span className="font-semibold text-white">
                    {blog.author}
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {blog.description && (
              <p className="text-lg text-slate-700 mb-8">
                {blog.description}
              </p>
            )}

            <div
              className="prose prose-lg max-w-none text-slate-800 prose-headings:text-slate-900 prose-a:text-[#003b6c] prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <div className="px-6 sm:px-8 pb-10">
            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#003b6c] font-semibold hover:text-[#001e3c] transition-colors"
              >
                <span aria-hidden="true">←</span> Back to Blogs
              </Link>
              <div className="text-sm text-slate-500">
                Updated on{" "}
                <span className="font-medium text-slate-700">
                  {formatDate(blog.updatedAt || blog.createdAt) || publishedAt}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
