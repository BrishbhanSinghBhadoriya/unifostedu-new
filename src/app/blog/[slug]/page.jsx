import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  fetchBlogBySlug,
  fetchBlogs,
} from "@/lib/blogApi";
import SharePanel from "@/components/blog/SharePanel";

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

    const decodedMetaContent = decodeHtmlEntities(blog.content);
    const plainDescription =
      blog.description || stripHtml(decodedMetaContent).slice(0, 160);
    const image = blog.image || FALLBACK_BLOG_IMAGE;

    // Ensure canonical URL is clean and absolute
    const cleanSlug = slug?.trim().replace(/\/+$/, ''); // Remove trailing slashes
    const canonicalUrl = `https://unifostedu.com/blog/${cleanSlug}`;

    return {
      title: `${blog.title} | UNIFOST Blog`,
      description: plainDescription,
      keywords: blog.category
        ? [blog.category, "Online Education", "UNIFOST"]
        : ["UNIFOST Blog"],
      authors: [{ name: blog.author || "UNIFOST Team" }],
      alternates: {
        canonical: canonicalUrl,
      },
      metadataBase: new URL('https://unifostedu.com'),
      openGraph: {
        title: `${blog.title} | UNIFOST Blog`,
        description: plainDescription,
        url: canonicalUrl,
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

function decodeHtmlEntities(text = "") {
  const entities = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'",
    "&#39;": "'",
  };

  return text.replace(/&(?:nbsp|amp|lt|gt|quot|#x27|#39);/g, (match) => {
    return entities[match] ?? match;
  });
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

function calculateReadingTime(text = "") {
  const WORDS_PER_MINUTE = 200;
  const totalWords = text.split(/\s+/).filter(Boolean).length;
  if (!totalWords) return "";
  const minutes = Math.max(1, Math.round(totalWords / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const publishedAt = formatDate(blog.createdAt || blog.updatedAt);
  const rawContent = blog.content || "";
  const decodedContent = decodeHtmlEntities(rawContent);
  const readingTime = calculateReadingTime(stripHtml(decodedContent));
  const shareUrl = `https://unifostedu.com/blog/${slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
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
                {readingTime && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {readingTime}
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

          <div className="p-5 sm:p-8">
            {blog.description && (
              <p className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed">
                {blog.description}
              </p>
            )}

            <div
              className="prose max-w-none text-slate-800 prose-headings:font-semibold prose-headings:text-slate-900 prose-a:text-[#003b6c] prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg sm:prose-lg lg:prose-xl prose-li:marker:text-[#003b6c] prose-ul:space-y-3 prose-ol:space-y-3 prose-blockquote:text-slate-700 prose-blockquote:border-l-4 prose-blockquote:border-[#00d4c4] prose-blockquote:bg-cyan-50 prose-blockquote:px-4 prose-blockquote:py-3 sm:prose-blockquote:px-6 prose-img:rounded-2xl prose-img:shadow-lg break-words"
              dangerouslySetInnerHTML={{ __html: decodedContent }}
            />
          </div>

          <div className="px-6 sm:px-8 pb-10 space-y-10">
            <SharePanel shareUrl={shareUrl} title={blog.title} />

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
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
